import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Register from './Component/Register';
import Login from './Component/Login';
import Home from './Component/Home';

function App() {


  return (
    <>
     <BrowserRouter>
        <Routes>
            <Route exact path='/' element = {<Register/>}/>
            <Route exact path='/login' element = {<Login/>}/>
            <Route exact path='/home' element = {<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
