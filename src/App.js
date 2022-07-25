
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
     
     <Navbar/> 
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Blog' element={<Blog/>}></Route>
      </Routes>

      
    </div>
  );
}

export default App;
