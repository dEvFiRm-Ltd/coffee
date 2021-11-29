import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminPanel from './Components/AdminPanel';
import Dashboard from './Components/AdminPanel/Dashboard';
import UserPanel from './Components/UserPanel';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<UserPanel />} />
                    <Route path="/admin" exact element={<AdminPanel />}>
                        <Route path='dashboard' element={<Dashboard />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
