
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './components/ui/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Notfound from './pages/Notfound';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
