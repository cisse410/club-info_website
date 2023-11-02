import './App.css';
import Footer from './components/footer';
import Header from './components/header.jsx'
import HeroSection from './components/heroSection.jsx' 
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="overflow-x-hidden h-screen w-full all">
      {/* <Router>
        <Routes>
          <Route path='\' element={}/>
        </Routes>
      </Router> */}
      <Header/>
      <HeroSection/> 
      <Footer/>

    </div>
  );
}

export default App;
