import { Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import Nav from './components/Nav';

const App =() => {
  return (
    <div className='App'>
      <Nav/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path={"/tickets"} element={<Tickets/>}/>
      </Routes>
    </div>
  );
}

export default App;
