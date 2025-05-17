import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-lime-100 via-white to-lime-50 px-4">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Welcome to Mini Project APP
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8">
            Explore user profiles, and experience a smooth
            frontend built with React and Tailwind CSS.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              to="/login" 
              className="px-6 py-3 border border-lime-500 text-lime-500 font-medium rounded-lg hover:bg-lime-50 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;