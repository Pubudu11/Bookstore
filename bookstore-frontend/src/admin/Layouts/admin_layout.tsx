import { Routes, Route } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import Books from '../Components/bookDetails';
import Users from '../Components/userDetails.tsx';
import Admins from "../Components/adminDetails.tsx";
import Orders from "../Components/oderDetails.tsx";

function AdminLayout() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ flexGrow: 1, transition: 'margin-left 0.2s', marginLeft: 10 }}>
                <Routes>
                        <Route index element={<Books/>} />
                        <Route path="books" element={<Books />} />
                        <Route path="users" element={<Users />} />
                        <Route path="orders" element={<Orders />} />
                        <Route path="admins" element={<Admins />} />
                </Routes>
            </div>
        </div>
    );
}

export default AdminLayout;