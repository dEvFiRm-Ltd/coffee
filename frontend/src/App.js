import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminPanel from './Components/AdminPanel/routes';
import UserPanel from './Components/UserPanel';

const App = () => {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<UserPanel />} />
                <Route path="/admin" exact element={<AdminPanel />} />
            </Routes>
        </BrowserRouter>
    </>
    );
};

export default App;
