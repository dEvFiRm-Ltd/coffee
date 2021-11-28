import './App.css';
import AboutUs from './Components/AboutUs';
import Blogs from './Components/Blogs';
import ContactUs from './Components/Contact copy';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navigation from './Components/Navigation';
import Products from './Components/Products';
import Reviews from './Components/Reviews';
import Team from './Components/Team';

const App = () => {
    return <>
    <Navigation/>
    <Hero/>
    <AboutUs/>
    <Team/>
    <Products/>
    <Reviews/>
    <ContactUs/>
    <Blogs/>
    <Footer/>
    </>;
};

export default App;
