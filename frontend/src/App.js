import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/AdminPanel/Dashboard';
import AdminPanel from './Components/AdminPanel/routes';
import UserPanel from './Components/UserPanel';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<UserPanel />} />
                    <Route path="/admin" element={<AdminPanel />}>
                        <Route path='dashboard' element={<Dashboard />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
