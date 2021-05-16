import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import MyProjects from './components/MyProjects/MyProjects';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Resume from './components/Resume/Resume';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/home">
            <Navbar></Navbar>
            <Home></Home>
            <About></About>
            <MyProjects></MyProjects>
            <Blogs></Blogs>
            <Contact></Contact>
            <Footer></Footer>
          </Route>
          <Route path="/resume">
            <Resume></Resume>
          </Route>
          <Route exact path="/">
            <Navbar></Navbar>
            <Home></Home>
            <About></About>
            <MyProjects></MyProjects>
            <Blogs></Blogs>
            <Contact></Contact>
            <Footer></Footer>
          </Route>
        </Switch>
      </Router>

     
    </div>
  );
}

export default App;
