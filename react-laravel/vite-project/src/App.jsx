import {BrowserRouter,Route,Routes} from 'react-router-dom';
import List from './Components/List';
import Insert from './Components/Insert';

function App() {
  

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
            <Route exact path='/List' element = {<List/>}/>
            <Route exact path='/' element = {<Insert/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App