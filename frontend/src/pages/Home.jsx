import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Features from '../components/Features';
import AboutPreview from '../components/AboutPreview';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Features />
      <AboutPreview />
      <Stats />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;
