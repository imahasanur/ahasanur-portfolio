import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import MyProjects from './components/MyProjects/MyProjects';

function App() {
  return (
    <div className="">
     <Home></Home>
     <MyProjects></MyProjects>
     <Blogs></Blogs>
     <Contact></Contact>
     <About></About>
    </div>
  );
}

export default App;
