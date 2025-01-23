import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    CardContent,
    DialogTitle,
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
    useTheme,
    styled
} from '@mui/material';
import {
    Add as AddIcon,
    Edit as EditIcon,
    Delete as DeleteIcon,
    Search as SearchIcon
} from '@mui/icons-material';
import { toast } from 'react-toastify';
import {addUsers, deleteUserById, getUsers, updateUser, users} from "../Api/baseApi.ts";
import { User } from "../types/User";
import { StyledCard, StyledTableContainer, StyledDialog, StyledDialogContent } from './style'; // Adjust the path as necessary

const CategoryChip = styled('span')(({ theme }) => ({
    display: 'inline-block',
    padding: '4px 8px',
    borderRadius: '16px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontSize: '0.75rem',
    marginRight: '4px',
    marginBottom: '4px',
}));

function Users() {
    const theme = useTheme();
    const [users, setUsers] = useState<users[]>([]);
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [formData, setFormData] = useState({
        id: '',
        firstName: '',
        lastName: '',
        username: '',
        password:'',
        email: ''
    });

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await getUsers();
            setUsers(response.data);
        } catch (error) {
            toast.error("Error fetching books");
        } finally {
            setLoading(false);
        }
    };

    const handleAddBook = () => {
        setSelectedUser(null);
        setFormData({
            id: "",
            email: "",
            firstName: "",
            lastName: "",
            username: "",
            password: ""

        });
        setOpen(true);
    };

    const handleEditBook = (user: User) => {
        setSelectedUser(user);
        setFormData({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            password: user.password,
            email: user.email
        });
        setOpen(true);
    };

    const handleDeleteBook = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this book?")) {
            try {
                await deleteUserById(id);
                toast.success("Book deleted successfully");
                fetchBooks();
            } catch (error) {
                toast.error("Error deleting book");
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const userData: User = {
                id: formData.id,
                firstName: formData.firstName,
                lastName: formData.lastName,
                username: formData.username,
                password: formData.password,
                email: formData.email
            };

            if (selectedUser) {
                await updateUser(selectedUser.id, userData);
                toast.success("User updated successfully");
            } else {
                await addUsers(userData);
                toast.success("User added successfully");
            }

            setOpen(false);
            fetchBooks();
        } catch (error) {
            toast.error("Error saving User");
        }
    };

    const filteredUsers = users.filter(
        (user) =>
            (user.firstName && user.firstName.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (user.lastName && user.lastName.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (user.username && user.username.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (user.email && user.email.toLowerCase().includes(searchTerm.toLowerCase()))
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
                            User Management
                        </Typography>
                        <Button
                            variant="contained"
                            startIcon={<AddIcon />}
                            onClick={handleAddBook}
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
                        placeholder="Search books..."
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

                    <StyledTableContainer component={Paper}>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell>User ID</TableCell>
                                    <TableCell>Full Name</TableCell>
                                    <TableCell>UserName</TableCell>
                                    <TableCell>Password</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell align="right">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {loading ? (
                                    <TableRow>
                                        <TableCell colSpan={6} align="center">Loading...</TableCell>
                                    </TableRow>
                                ) : (
                                    filteredUsers.map((user) => (
                                        <TableRow key={user.id}>
                                            <TableCell>{user.id}</TableCell>
                                            <TableCell>
                                                <Typography component="span" display="inline">
                                                    {user.firstName}
                                                </Typography>
                                                <Typography component="span" display="inline" sx={{ marginLeft: 1 }}>
                                                    {user.lastName}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>{user.username}</TableCell>
                                            <TableCell>{user.password}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell align="right">
                                                <IconButton onClick={() => handleEditBook(user)} color="primary">
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton onClick={() => handleDeleteBook(user.id)} color="error">
                                                    <DeleteIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </StyledTableContainer>
                </CardContent>
            </StyledCard>

            <StyledDialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle>{selectedUser ? 'Edit User' : 'Add New User'}</DialogTitle>
                <StyledDialogContent>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="User ID"
                                    value={formData.id}
                                    onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="First Name"
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Last Name"
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Username"
                                    value={formData.username}
                                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    required
                                />
                            </Grid>
                        </Grid>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit" variant="contained">
                                {selectedUser ? 'Update User' : 'Save User'}
                            </Button>
                        </Box>
                    </Box>
                </StyledDialogContent>
            </StyledDialog>
        </Box>
    );
}

export default Users;