import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import TableContainer from '@mui/material/TableContainer';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

const StyledCard = styled(Card)(({ theme }) => ({
    background: theme.palette.mode === 'dark' ? '#1e1e1e' : '#e0f7fa',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    color: theme.palette.mode === 'dark' ? '#fff' : '#000',
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    maxHeight: '600px',
    backgroundColor: theme.palette.mode === 'dark' ? '#2e2e2e' : '#fff',
    '& .MuiTableCell-root': {
        padding: '16px',
        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
    },
    '& .MuiTableRow-root:hover': {
        backgroundColor: theme.palette.action.hover,
    },
}));

const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2e2e2e' : '#fff',
        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
    },
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#2e2e2e' : '#fff',
    color: theme.palette.mode === 'dark' ? '#fff' : '#000',
}));

export { StyledCard, StyledTableContainer, StyledDialog, StyledDialogContent };