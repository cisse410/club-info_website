import './App.css';
import Home from './components/home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Projets from './components/projets';
import Blogs from './components/blogs';

import EventList from './components/eventList';
function App() {
  return (
           <Router>
             <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/Projets' element={<Projets/>}/>
               <Route path='/Evenements' element={<EventList/>}/>
               <Route path='/Blogs' element={<Blogs/>}/>
             </Routes>
           </Router> 
        
  );
}

export default App;
