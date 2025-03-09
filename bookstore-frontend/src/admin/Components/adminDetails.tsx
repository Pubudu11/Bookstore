import { useState, useEffect } from 'react';
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
import { addAdmins, deleteAdminById, updateAdmin, getAdmins, deleteAllAdmins } from "../Api/baseApi.ts";
import { Admin } from "../types/Admin";
import { StyledCard } from './style';
import axios from "axios";

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
// Define a styled component for the table header cells
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.black, // Set text color to black
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

const validationSchema = yup.object({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
    email: yup.string().required('Email is required'),
});

function Admins() {
    const theme = useTheme();
    const [Admins, setAdmins] = useState<Admin[]>([]);
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [selectedAdmin, setSelectedAdmin] = useState<Admin | null>(null);

    useEffect(() => {
        fetchAdmins();
    }, []);

    const fetchAdmins = async () => {
        try {
            const response = await getAdmins();
            setAdmins(response);
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                toast.error(`${error.response.status} ${error.response.data.message}`);
            } else {
                toast.error("Network error. Please check your connection.");
            }
        } finally {
            setLoading(false);
        }
    };

    const handleAddAdmin = () => {
        setSelectedAdmin(null);
        formik.resetForm();
        setOpen(true);
    };

    const handleEditAdmin = (admin: Admin) => {
        setSelectedAdmin(admin);
        formik.setValues({
            id: admin.id,
            username: admin.username,
            password: admin.password,
            email: admin.email,
        });
        setOpen(true);
    };

    const handleDeleteAdmin = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            try {
                await deleteAdminById(id);
                toast.success("User deleted successfully");
                fetchAdmins();
            } catch (error) {
                if (axios.isAxiosError(error) && error.response) {
                    toast.error(`${error.response.status} ${error.response.data.message}`);
                } else {
                    toast.error("Network error. Please check your connection.");
                }
            }
        }
    };

    const handleDeleteAllAdmins = async () => {
        if (window.confirm("Are you sure you want to delete all users?")) {
            try {
                await deleteAllAdmins();
                toast.success("All users deleted successfully");
                fetchAdmins();
            } catch (error) {
                if (axios.isAxiosError(error) && error.response) {
                    toast.error(`${error.response.status} ${error.response.data.message}`);
                } else {
                    toast.error("Network error. Please check your connection.");
                }
            }
        }
    };

    const formik = useFormik({
        initialValues: {
            id: "", // Initialize as an empty string
            username: "", // Initialize as an empty string
            password: "", // Initialize as an empty string
            email: "", // Initialize as an empty string
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            setUploading(true);
            try {
                const userData: Admin = {
                    id: values.id,
                    username: values.username,
                    password: values.password,
                    email: values.email,
                };

                if (selectedAdmin) {
                    await updateAdmin(selectedAdmin.id, userData);
                    toast.success("User updated successfully");
                } else {
                    await addAdmins(userData);
                    toast.success("User added successfully");
                }

                setOpen(false);
                fetchAdmins();
            } catch (error) {
                if (axios.isAxiosError(error) && error.response) {
                    error.response.data[1] ? console.log(`${error.response.data[1].field}'s ${error.response.data[1].defaultMessage}\n${error.response.data[0].field}'s ${error.response.data[0].defaultMessage}`) :console.log(`${error.response.data[0].field}'s ${error.response.data[0].defaultMessage}`);
                    error.response.data[1] ? toast.error(`${error.response.data[1].field}'s ${error.response.data[1].defaultMessage}\n${error.response.data[0].field}'s ${error.response.data[0].defaultMessage}`) :toast.error(`${error.response.data[0].field}'s ${error.response.data[0].defaultMessage}`);
                } else {
                    toast.error("Network error. Please check your connection.");
                }
            } finally {
                setUploading(false);
            }
        },
    });

    const filteredAdmins = Admins.filter((admin: Admin) =>
        (admin.username && admin.username.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (admin.email && admin.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ p: 3, bgcolor: theme.palette.mode === 'dark' ? '#121212' : '#f5f5f5', minHeight: '100vh' }}>
            <StyledCard>
                <CardContent>
                    <Box sx={{ mb: 4, mt: 5, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'stretch', sm: 'center' }, gap: 2 }}>
                        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                            Users Management
                        </Typography>
                        <Button
                            variant="contained"
                            startIcon={<AddIcon />}
                            onClick={handleAddAdmin}
                            sx={{
                                backgroundColor: theme.palette.primary.main,
                                '&:hover': {
                                    backgroundColor: theme.palette.primary.dark,
                                },
                            }}
                        >
                            Add New User
                        </Button>
                    </Box>

                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Search users..."
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
                                    <StyledTableCell>Admin ID</StyledTableCell>
                                    <StyledTableCell>Username</StyledTableCell>
                                    <StyledTableCell>Password</StyledTableCell>
                                    <StyledTableCell>Email</StyledTableCell>
                                    <StyledTableCell align="right">Actions</StyledTableCell>
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                {loading ? (
                                    <TableRow>
                                        <TableCell colSpan={6} align="center">Loading...</TableCell>
                                    </TableRow>
                                ) : (
                                    filteredAdmins.map((admin: Admin) => (
                                        <TableRow key={admin.id}>
                                            <TableCell>{admin.id}</TableCell>
                                            <TableCell>{admin.username}</TableCell>
                                            <TableCell>{admin.password}</TableCell>
                                            <TableCell>{admin.email}</TableCell>
                                            <TableCell align="right">
                                                <IconButton onClick={() => handleEditAdmin(admin)} color="primary">
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton onClick={() => handleDeleteAdmin(admin.id)} color="error">
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
                <StyledDialogTitle>{selectedAdmin ? 'Edit Admin' : 'Add New Admin'}</StyledDialogTitle>
                <StyledDialogContent>
                    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Admin ID"
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
                                    label="Username"
                                    name="username"
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.username && Boolean(formik.errors.username)}
                                    helperText={formik.touched.username && formik.errors.username}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    required
                                />
                            </Grid>
                        </Grid>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit" variant="contained" disabled={uploading}>
                                {uploading ? <CircularProgress size={24} /> : (selectedAdmin ? 'Update User' : 'Save User')}
                            </Button>
                        </Box>
                    </Box>
                </StyledDialogContent>
            </StyledDialog>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                <Button
                    variant="contained"
                    color="error"
                    onClick={handleDeleteAllAdmins}
                    sx={{
                        backgroundColor: theme.palette.error.main,
                        '&:hover': {
                            backgroundColor: theme.palette.error.dark,
                        },
                    }}
                >
                    Delete All Admins
                </Button>
            </Box>
        </Box>
    );
}

export default Admins;