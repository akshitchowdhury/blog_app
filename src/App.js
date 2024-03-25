
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header/header';

import Home from './pages/home'

import AddNewBlog from './pages/addBlog'



function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/add-blog' element={<AddNewBlog/>}/>
      
    </Routes>

    </div>
  );
}

export default App;
