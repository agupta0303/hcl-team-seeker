import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import KeyFeatures from '../components/KeyFeatures';

const PublicLanding = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <KeyFeatures />
      </main>
      {/* A simple footer to match the layout */}
      <footer className="bg-[#163857] text-white py-8 text-center mt-12">
        <p>&copy; {new Date().getFullYear()} Complete Healthcare Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PublicLanding;
