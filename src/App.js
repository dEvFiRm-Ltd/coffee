import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPanel from './Components';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<UserPanel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
