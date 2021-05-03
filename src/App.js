import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import MyProjects from './components/MyProjects/MyProjects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="">
     <Home></Home>
     <MyProjects></MyProjects>
     <Blogs></Blogs>
     <About></About>
     <Contact></Contact>
     <Footer></Footer>
     
    </div>
  );
}

export default App;
