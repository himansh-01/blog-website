import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/Home';
import Land from './screens/Land';
import Post from './screens/Post';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Land/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/post' element={<Post/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
