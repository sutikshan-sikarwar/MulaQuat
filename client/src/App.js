import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Meetings from './pages/Meetings';
import NotFound from './pages/NotFound';
import Navbar from './component/layout/Navbar';
import CreateMeeting from './component/meetings/CreateMeeting';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    </>
  );
}

export default App;
