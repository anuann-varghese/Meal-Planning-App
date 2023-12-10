
import './App.css';
import Home from './components/Pages/Home';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';

function App() {
  return (
    <div data-theme="dark" className="App flex flex-col h-screen">

      <Navbar/>
      <div className="main flex flex-col grow ">
        <Home/>
      </div>

      <Footer/>

      
    
      
    </div>
  );
}

export default App;
