import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    CardContent,
    Dialog,
    DialogTitle,
    DialogContent,
    Grid,
    IconButton,
    InputAdornment,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Typography,
    CircularProgress,
    useTheme,
    styled,
    TableContainer
} from '@mui/material';
import {
    Add as AddIcon,
    Edit as EditIcon,
    Delete as DeleteIcon,
    Search as SearchIcon
} from '@mui/icons-material';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { addOrder, deleteOrderById, getOrders, updateOrder } from "../Api/baseApi";
import { Order } from "../types/Order";
import { StyledCard } from './style';

// Styled Components
const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
        borderRadius: '12px',
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.default,
        boxShadow: theme.shadows[5],
    },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.divider}`,
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    fontWeight: 'bold',
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: 'bold',
    fontSize: '1rem',
    textAlign: 'center',
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
    padding: theme.spacing(2),
}));

// Validation Schema
const validationSchema = yup.object({
    id: yup.string().required('Order ID is required'),
    name: yup.string().required('Name is required'),
    address: yup.string().required('Address is required'),
    phone: yup.string().required('Phone is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    price: yup.number().required('Price is required').positive('Price must be positive'),
    item: yup.string().required('Item is required'),
    status: yup.string().required('Status is required'),
});

// Main Component
function Orders() {
    const theme = useTheme();
    const [orders, setOrders] = useState<Order[]>([]);
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

    // Fetch Orders
    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await getOrders();
            setOrders(response);
        } catch {
            toast.error("Error fetching orders");
        } finally {
            setLoading(false);
        }
    };

    // Add Order
    const handleAddOrder = () => {
        setSelectedOrder(null);
        formik.resetForm();
        setOpen(true);
    };

    // Edit Order
    const handleEditOrder = (order: Order) => {
        setSelectedOrder(order);
        formik.setValues({
            id: order.id,
            name: order.name,
            address: order.address,
            phone: order.phone,
            email: order.email,
            price: order.price.toString(),
            item: order.item,
            status: order.status,
        });
        setOpen(true);
    };

    // Delete Order
    const handleDeleteOrder = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this order?")) {
            try {
                await deleteOrderById(id);
                toast.success("Order deleted successfully");
                fetchOrders();
            } catch {
                toast.error("Error deleting order");
            }
        }
    };

    // Formik
    const formik = useFormik({
        initialValues: {
            id: '',
            name: '',
            address: '',
            phone: '',
            email: '',
            price: '',
            item: '',
            status: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            setUploading(true);
            try {
                const orderData: Order = {
                    id: values.id,
                    name: values.name,
                    address: values.address,
                    phone: values.phone,
                    email: values.email,
                    price: parseFloat(values.price),
                    item: values.item,
                    status: values.status,
                };

                if (selectedOrder) {
                    await updateOrder(selectedOrder.id, orderData);
                    toast.success("Order updated successfully");
                } else {
                    await addOrder(orderData);
                    toast.success("Order added successfully");
                }

                setOpen(false);
                fetchOrders();
            } catch {
                toast.error("Error saving order");
            } finally {
                setUploading(false);
            }
        },
    });

    // Filter Orders
    const filteredOrders = orders.filter((order) =>
        order.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Close Dialog
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ p: 3, bgcolor: theme.palette.mode === 'dark' ? '#121212' : '#f5f5f5', minHeight: '100vh' }}>
            <StyledCard>
                <CardContent>
                    <Box sx={{ mb: 4, mt: 5, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'stretch', sm: 'center' }, gap: 2 }}>
                        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                            Orders Management
                        </Typography>
                        <Button
                            variant="contained"
                            startIcon={<AddIcon />}
                            onClick={handleAddOrder}
                            sx={{
                                backgroundColor: theme.palette.primary.main,
                                '&:hover': {
                                    backgroundColor: theme.palette.primary.dark,
                                },
                            }}
                        >
                            Add New Order
                        </Button>
                    </Box>

                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Search orders..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        sx={{ mb: 4 }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TableContainer component={Paper}>
                        <Table stickyHeader>
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell>Order ID</StyledTableCell>
                                    <StyledTableCell>Name</StyledTableCell>
                                    <StyledTableCell>Address</StyledTableCell>
                                    <StyledTableCell>Phone</StyledTableCell>
                                    <StyledTableCell>Email</StyledTableCell>
                                    <StyledTableCell>Price</StyledTableCell>
                                    <StyledTableCell>Item</StyledTableCell>
                                    <StyledTableCell>Status</StyledTableCell>
                                    <StyledTableCell align="right">Actions</StyledTableCell>
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                {loading ? (
                                    <TableRow>
                                        <TableCell colSpan={9} align="center">Loading...</TableCell>
                                    </TableRow>
                                ) : (
                                    filteredOrders.map((order) => (
                                        <TableRow key={order.id}>
                                            <TableCell>{order.id}</TableCell>
                                            <TableCell>{order.name}</TableCell>
                                            <TableCell>{order.address}</TableCell>
                                            <TableCell>{order.phone}</TableCell>
                                            <TableCell>{order.email}</TableCell>
                                            <TableCell>${order.price}</TableCell>
                                            <TableCell>{order.item}</TableCell>
                                            <TableCell>{order.status}</TableCell>
                                            <TableCell align="right">
                                                <IconButton onClick={() => handleEditOrder(order)} color="primary">
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton onClick={() => handleDeleteOrder(order.id)} color="error">
                                                    <DeleteIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </StyledCard>

            <StyledDialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <StyledDialogTitle>{selectedOrder ? 'Edit Order' : 'Add New Order'}</StyledDialogTitle>
                <StyledDialogContent>
                    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Order ID"
                                    name="id"
                                    value={formik.values.id}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.id && Boolean(formik.errors.id)}
                                    helperText={formik.touched.id && formik.errors.id}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Address"
                                    name="address"
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.address && Boolean(formik.errors.address)}
                                    helperText={formik.touched.address && formik.errors.address}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Phone"
                                    name="phone"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                                    helperText={formik.touched.phone && formik.errors.phone}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Price"
                                    type="number"
                                    name="price"
                                    value={formik.values.price}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.price && Boolean(formik.errors.price)}
                                    helperText={formik.touched.price && formik.errors.price}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Item"
                                    name="item"
                                    value={formik.values.item}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.item && Boolean(formik.errors.item)}
                                    helperText={formik.touched.item && formik.errors.item}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Status"
                                    name="status"
                                    value={formik.values.status}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.status && Boolean(formik.errors.status)}
                                    helperText={formik.touched.status && formik.errors.status}
                                    required
                                />
                            </Grid>
                        </Grid>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit" variant="contained" disabled={uploading}>
                                {uploading ? <CircularProgress size={24} /> : (selectedOrder ? 'Update Order' : 'Save Order')}
                            </Button>
                        </Box>
                    </Box>
                </StyledDialogContent>
            </StyledDialog>
        </Box>
    );
}

export default Orders;