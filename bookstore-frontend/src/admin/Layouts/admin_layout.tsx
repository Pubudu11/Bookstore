import { Routes, Route } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import Books from '../Components/bookDetails';
import Users from '../Components/userDetails.tsx';

function AdminLayout() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ flexGrow: 1, transition: 'margin-left 0.2s', marginLeft: 10 }}>
                <Routes>
                        <Route index element={<Books/>} />
                        <Route path="dashboard" element={<h1>dashboard</h1>} />
                        <Route path="books" element={<Books />} />
                        <Route path="users" element={<Users />} />
                        <Route path="orders" element={<h1>orders</h1>} />
                        <Route path="admins" element={<h1>admins</h1>} />
                        <Route path="shipping" element={<h1>ship</h1>} />
                </Routes>
            </div>
        </div>
    );
}

export default AdminLayout;