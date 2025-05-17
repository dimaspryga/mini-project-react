import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import { useDetailUser } from "../../hooks/useDetailUser";
import Footer from "../../component/Footer";

const DetailProfilePage = () => {
  const { user, userDescription, handleBack } = useDetailUser();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-10 w-full">
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/home" className="hover:underline text-lime-500">
            Home
          </Link>{" "}
          /
          <span className="text-gray-800 font-medium">
            {" "}
            {user?.first_name} {user?.last_name}
          </span>
        </nav>

        <h1 className="text-3xl font-bold mb-8 text-center">Detail Profile</h1>

        {user ? (
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <img
              src={user.avatar}
              alt={user.first_name}
              className="w-40 h-40 rounded-full object-cover border-4 border-lime-500"
            />
            <div className="text-center sm:text-left">
              <p className="mt-4 font-semibold text-gray-500 text-sm">
                User ID : {user.id}
              </p>
              <h2 className="text-2xl font-semibold">
                {user.first_name} {user.last_name}{" "}
              </h2>
              <p className="text-gray-600 mt-2">{user.email}</p>

              <p className="mt-4 text-gray-700 text-sm leading-relaxed whitespace-pre-line text-justify">
                {userDescription}
              </p>

              <button
                onClick={handleBack}
                className="mt-6 px-4 py-2 bg-lime-500 text-white rounded-lg hover:bg-lime-400 transition"
              >
                Back
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-center text-gray-500">Loading user data...</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default DetailProfilePage;
