import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import { useUser } from "../../hooks/useUser";
import Footer from "../../component/Footer";

const HomePage = () => {
  const {
    filteredUsers,
    searchTerm,
    setSearchTerm,
    page,
    totalPages,
    handlePrev,
    handleNext,
  } = useUser();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow max-w-6xl mx-auto px-4 py-12 w-full">
        <h1 className="text-3xl font-bold mb-8 text-center">Home Page</h1>

        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-lime-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div
                key={user.id}
                className="bg-white rounded-xl border border-gray-100 p-4 flex flex-col items-center text-center hover:shadow-sm transition-all"
              >
                <div className="w-20 h-20 mb-3">
                  <img
                    src={user.avatar}
                    alt={user.first_name}
                    className="rounded-full w-full h-full object-cover border border-gray-200"
                  />
                </div>
                <h2 className="text-lg font-semibold">
                  {user.first_name} {user.last_name}
                </h2>
                <p className="text-gray-500 text-sm mb-3">{user.email}</p>
                <Link
                  to={`/detail/${user.id}`}
                  className="text-sm px-3 py-1.5 text-lime-600 hover:text-white border border-lime-500 hover:bg-lime-500 rounded-md transition-colors"
                >
                  View Details
                </Link>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No users found.
            </div>
          )}
        </div>

        <div className="flex justify-center items-center gap-4 mt-12">
          <button
            onClick={handlePrev}
            disabled={page === 1}
            className={`px-4 py-2 text-sm rounded-md ${
              page === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-lime-600 hover:bg-lime-50 border border-lime-500"
            }`}
          >
            Prev
          </button>

          <span className="text-sm text-gray-600">
            Page {page} of {totalPages}
          </span>

          <button
            onClick={handleNext}
            disabled={page === totalPages}
            className={`px-4 py-2 text-sm rounded-md ${
              page === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-lime-600 hover:bg-lime-50 border border-lime-500"
            }`}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;