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
    CardMedia,
    Card,
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
import { addBooks, deleteBookById, getBooks, updateBook } from "../Api/baseApi.ts";
import { Book } from "../types/Book";
import { StyledCard } from './style';

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
    title: yup.string().required('Title is required'),
    author: yup.string().required('Author is required'),
    category: yup.string().required('Category is required'),
    price: yup.number().required('Price is required').positive('Price must be positive'),
    quantity: yup.number().required('Quantity is required').min(1, 'Quantity must be at least 1'),
});

function Books() {
    const theme = useTheme();
    const [books, setBooks] = useState<Book[]>([]);
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [isFileUploaded, setIsFileUploaded] = useState(false);
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [imagePath, setImagePath] = useState<string | null>(null);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await getBooks();
            setBooks(response);
        } catch {
            toast.error("Error fetching books");
        } finally {
            setLoading(false);
        }
    };

    const handleAddBook = () => {
        setSelectedBook(null);
        formik.resetForm();
        setImagePath(null);
        setOpen(true);
    };

    const handleEditBook = (book: Book) => {
        setSelectedBook(book);
        formik.setValues({
            id: book.id,
            title: book.title,
            author: book.author,
            category: Array.isArray(book.category) ? book.category.join(", ") : book.category,
            language: book.language || "",
            publisher: book.publisher || "",
            price: book.price.toString(),
            quantity: book.quantity.toString(),
            imgData: book.imgData,
            description: book.description
        });
        setImagePath(book.imgData);
        setOpen(true);
    };

    const handleDeleteBook = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this book?")) {
            try {
                await deleteBookById(id);
                toast.success("Book deleted successfully");
                fetchBooks();
            } catch {
                toast.error("Error deleting book");
            }
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (!file.type.startsWith('image/')) {
                toast.error("Please select a valid image file");
                return;
            }
            if (file.size > 5 * 1024 * 1024) { // 5MB limit
                toast.error("File size should be less than 5MB");
                return;
            }
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onload = () => {
                setImagePath(reader.result as string);
            };
            reader.readAsDataURL(file);
            setIsFileUploaded(true);
        }
    };

    const formik = useFormik({
        initialValues: {
            id: '',
            title: '',
            author: '',
            category: '',
            language: '',
            publisher: '',
            quantity: '',
            price: '',
            imgData: '',
            description: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            setUploading(true);
            try {
                const formData = new FormData();
                formData.append("book", new Blob([JSON.stringify({
                    id: values.id,
                    title: values.title,
                    author: values.author,
                    category: values.category.split(",").map((c) => c.trim()),
                    language: values.language,
                    publisher: values.publisher,
                    quantity: parseInt(values.quantity, 10),
                    price: parseFloat(values.price),
                    imgData: values.imgData,
                    description: values.description,
                    active: true
                })], { type: "application/json" }));

                if (selectedFile) {
                    formData.append("file", selectedFile);
                }

                if (selectedBook) {
                    await updateBook(selectedBook.id, formData);
                    toast.success("Book updated successfully");
                } else {
                    await addBooks(formData);
                    toast.success("Book added successfully");
                }

                setOpen(false);
                fetchBooks();
            } catch {
                toast.error("Error saving book");
            } finally {
                setUploading(false);
                setIsFileUploaded(false);
            }
        },
    });

    const filteredBooks = books.filter(
        (book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.category.some((cat) => cat.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const handleClose = () => {
        setOpen(false);
        setIsFileUploaded(false);
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

                    <TableContainer component={Paper}>
                        <Table stickyHeader>
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell>Title</StyledTableCell>
                                    <StyledTableCell>Author</StyledTableCell>
                                    <StyledTableCell>Categories</StyledTableCell>
                                    <StyledTableCell>Language</StyledTableCell>
                                    <StyledTableCell>Publisher</StyledTableCell>
                                    <StyledTableCell>Description</StyledTableCell>
                                    <StyledTableCell>Price</StyledTableCell>
                                    <StyledTableCell>Quantity</StyledTableCell>
                                    <StyledTableCell align="right">Actions</StyledTableCell>
                                </StyledTableRow>
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
                    </TableContainer>
                </CardContent>
            </StyledCard>

            <StyledDialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <StyledDialogTitle>{selectedBook ? 'Edit Book' : 'Add New Book'}</StyledDialogTitle>
                <StyledDialogContent>
                    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Title"
                                    name="title"
                                    value={formik.values.title}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.title && Boolean(formik.errors.title)}
                                    helperText={formik.touched.title && formik.errors.title}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Author"
                                    name="author"
                                    value={formik.values.author}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.author && Boolean(formik.errors.author)}
                                    helperText={formik.touched.author && formik.errors.author}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Categories (comma-separated)"
                                    name="category"
                                    value={formik.values.category}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.category && Boolean(formik.errors.category)}
                                    helperText={formik.touched.category && formik.errors.category}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Language"
                                    name="language"
                                    value={formik.values.language}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
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
                                    label="Quantity"
                                    type="number"
                                    name="quantity"
                                    value={formik.values.quantity}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.quantity && Boolean(formik.errors.quantity)}
                                    helperText={formik.touched.quantity && formik.errors.quantity}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Publisher"
                                    name="publisher"
                                    value={formik.values.publisher}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Description"
                                    multiline
                                    rows={3}
                                    name="description"
                                    value={formik.values.description || ''}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                            </Grid>
                            {imagePath && isFileUploaded && (
                                <Grid item xs={12}>
                                    <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                                        <CardMedia
                                            component="img"
                                            height="300"
                                            image={imagePath}
                                            alt="Book"
                                            sx={{ objectFit: 'cover' }}
                                        />
                                    </Card>
                                </Grid>
                            )}
                        </Grid>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit" variant="contained" disabled={uploading}>
                                {uploading ? <CircularProgress size={24} /> : (selectedBook ? 'Update Book' : 'Save Book')}
                            </Button>
                        </Box>
                    </Box>
                </StyledDialogContent>
            </StyledDialog>
        </Box>
    );
}

export default Books;