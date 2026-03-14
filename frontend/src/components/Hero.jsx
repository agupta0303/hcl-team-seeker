import { Link } from 'react-router-dom';
import { Button } from './ui/Button';

const Hero = () => {
  return (
    <section className="bg-primary pt-32 pb-24 px-6 min-h-[80vh] flex items-center">
      <div className="container mx-auto max-w-5xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
          Healthcare Wellness &<br />
          Preventive Care Portal
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          Empowering you to take control of your health through personalized
          wellness tracking, preventive care guidance, and seamless
          communication with healthcare providers.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/register">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto font-semibold">
              Get Started
            </Button>
          </Link>
          <Link to="/login">
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto font-bold text-black border-white bg-transparent hover:bg-white/10 hover:text-black"
            >
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
