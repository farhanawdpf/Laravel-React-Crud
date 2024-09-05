
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Components/Home';
import View from "./Components/View";
import Edit from "./Components/Edit";
function App() {
  

  return (
    <div className='App'>
      <Router>
        <Routes>
            <Route exact path='/' element = {<Home/>}/>
            <Route exact path="/view/:id" element={<View/>}/>
              <Route exact path="/edit/:id" element={<Edit/>}/> 
        </Routes>
      </Router>
    </div>
  )
}

export default App
