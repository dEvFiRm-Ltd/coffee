/* User Panel */
import AboutUs from './AboutUs';
import Blogs from './Blogs';
import ContactUs from './Contact';
import Footer from './Footer';
import Hero from './Hero';
import Navigation from './Navigation';
import Products from './Products';
import Reviews from './Reviews';
import Team from './Team';
import './user.css';

const UserPanel = () => {
    return (
        <div className="users">
            <Navigation />
            <Hero />
            <AboutUs />
            <Team />
            <Products />
            <Reviews />
            <ContactUs />
            <Blogs />
            <Footer />
        </div>
    );
};

export default UserPanel;
