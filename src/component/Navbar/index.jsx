// components/Navbar.jsx
import { Link } from "react-router-dom";
import { useNavbar } from "../../hooks/useNavbar";

const Navbar = () => {
  const { isLogin, handleLogout } = useNavbar();

  return (
    <nav className="flex top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        <div>
          <Link to="/home">
            <h1 className="font-bold text-xl text-lime-500 hover:text-lime-400">
              MiniProjectAPP
            </h1>
          </Link>
        </div>

        <div className="flex items-center space-x-2">
          {!isLogin ? (
            <>
              <Link to="/login">
                <button className="hidden md:block text-sm px-4 py-2 text-white bg-lime-500 hover:bg-lime-600 rounded-md transition-colors">
                  Login
                </button>
              </Link>

              <Link to="/login">
                <button className="md:hidden text-sm px-4 py-2 text-white bg-lime-500 hover:bg-lime-600 rounded-md transition-colors">
                  Login
                </button>
              </Link>
            </>
          ) : (
            <>
              <button
                className="hidden font-medium md:block text-sm px-3 py-1.5 text-gray-600 hover:text-red-500 transition-colors"
                onClick={handleLogout}
              >
                Logout
              </button>

              <button
                className="md:hidden text-sm px-3 py-1.5 text-gray-600 hover:text-red-500 transition-colors"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
