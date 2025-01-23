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
import { addBooks, deleteBookById, getBooks, updateBook } from "../Api/baseApi.ts";
import { Book } from "../types/Book";
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

function Books() {
    const theme = useTheme();
    const [books, setBooks] = useState<Book[]>([]);
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        author: '',
        category: '',
        language: '',
        publisher: '',
        quantity: '',
        price: '',
        imgPath: '',
        description: ''
    });

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await getBooks();
            setBooks(response.data);
        } catch (error) {
            toast.error("Error fetching books");
        } finally {
            setLoading(false);
        }
    };

    const handleAddBook = () => {
        setSelectedBook(null);
        setFormData({
            id: "",
            title: "",
            author: "",
            category: "",
            language: "",
            publisher: "",
            quantity: "",
            price: "",
            imgPath: "",
            description: ""
        });
        setOpen(true);
    };

    const handleEditBook = (book: Book) => {
        setSelectedBook(book);
        setFormData({
            id: book.id,
            title: book.title,
            author: book.author,
            category: Array.isArray(book.category) ? book.category.join(", ") : book.category,
            language: book.language || "",
            publisher: book.publisher || "",
            price: book.price.toString(),
            quantity: book.quantity.toString(),
            imgPath: book.imgPath,
            description: book.description
        });
        setOpen(true);
    };

    const handleDeleteBook = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this book?")) {
            try {
                await deleteBookById(id);
                toast.success("Book deleted successfully");
                fetchBooks();
            } catch (error) {
                toast.error("Error deleting book");
            }
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const filePath = reader.result as string;
                setFormData({ ...formData, imgPath: filePath });
                // Save the file to local storage
                localStorage.setItem('uploadedFile', filePath);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const bookData: Book = {
                id: formData.id || Math.random().toString(36).substr(2, 9),
                title: formData.title || "test",
                author: formData.author || "test",
                category: formData.category.split(",").map((c) => c.trim()) || ["test"],
                language: formData.language || "test",
                publisher: formData.publisher || "test",
                quantity: parseInt(formData.quantity, 10) || 0,
                price: parseFloat(formData.price) || 0,
                imgPath: formData.imgPath || "test",
                description: formData.description || "test",
                active: true // Ensure the 'active' property is included
            };

            if (selectedBook) {
                await updateBook(selectedBook.id, bookData);
                toast.success("Book updated successfully");
            } else {
                await addBooks(bookData);
                toast.success("Book added successfully");
            }

            setOpen(false);
            fetchBooks();
        } catch (error) {
            toast.error("Error saving book");
        }
    };

    const filteredBooks = books.filter(
        (book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.category.some((cat) => cat.toLowerCase().includes(searchTerm.toLowerCase()))
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
                            Books Management
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
                            Add New Book
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
                                    <TableCell>Title</TableCell>
                                    <TableCell>Author</TableCell>
                                    <TableCell>Categories</TableCell>
                                    <TableCell>Language</TableCell>
                                    <TableCell>Publisher</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell align="right">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {loading ? (
                                    <TableRow>
                                        <TableCell colSpan={6} align="center">Loading...</TableCell>
                                    </TableRow>
                                ) : (
                                    filteredBooks.map((book) => (
                                        <TableRow key={book.id}>
                                            <TableCell>{book.title}</TableCell>
                                            <TableCell>{book.author}</TableCell>
                                            <TableCell>
                                                {book.category.map((cat, index) => (
                                                    <CategoryChip key={index}>{cat}</CategoryChip>
                                                ))}
                                            </TableCell>
                                            <TableCell>{book.language}</TableCell>
                                            <TableCell>{book.publisher}</TableCell>
                                            <TableCell>{book.description}</TableCell>
                                            <TableCell>${book.price}</TableCell>
                                            <TableCell>{book.quantity}</TableCell>
                                            <TableCell align="right">
                                                <IconButton onClick={() => handleEditBook(book)} color="primary">
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton onClick={() => handleDeleteBook(book.id)} color="error">
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
                <DialogTitle>{selectedBook ? 'Edit Book' : 'Add New Book'}</DialogTitle>
                <StyledDialogContent>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Title"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Author"
                                    value={formData.author}
                                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Categories (comma-separated)"
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Price"
                                    type="number"
                                    value={formData.price}
                                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Quantity"
                                    type="number"
                                    value={formData.quantity}
                                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Publisher"
                                    value={formData.publisher}
                                    onChange={(e) => setFormData({ ...formData, publisher: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Description"
                                    multiline
                                    rows={3}
                                    value={formData.language}
                                    onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                            </Grid>
                        </Grid>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit" variant="contained">
                                {selectedBook ? 'Update Book' : 'Save Book'}
                            </Button>
                        </Box>
                    </Box>
                </StyledDialogContent>
            </StyledDialog>
        </Box>
    );
}

export default Books;