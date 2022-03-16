import AboutUs from '../Components/AboutUs';
import Blogs from '../Components/Blogs';
import ContactUs from '../Components/Contact';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Navigation from '../Components/Navigation';
import Products from '../Components/Products';
import Reviews from '../Components/Reviews';
import Team from '../Components/Team';

export default function Home() {
  return (
    <div className='users'>
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
}
