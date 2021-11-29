/* User Panel */
import AboutUs from './Components/UserPanel/AboutUs';
import Blogs from './Components/UserPanel/Blogs';
import ContactUs from './Components/UserPanel/Contact';
import Footer from './Components/UserPanel/Footer';
import Hero from './Components/UserPanel/Hero';
import Navigation from './Components/UserPanel/Navigation';
import Products from './Components/UserPanel/Products';
import Reviews from './Components/UserPanel/Reviews';
import Team from './Components/UserPanel/Team';
import './user.css';


/* Admin Panel */



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
