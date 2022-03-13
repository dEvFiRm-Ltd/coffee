import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPanel from './components';

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
