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
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Home Page</h1>

        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {!!filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div
                key={user.id}
                className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-24 h-24 mb-4">
                  <img
                    src={user.avatar}
                    alt={user.first_name}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-lg font-semibold">
                  {user.first_name} {user.last_name}
                </h2>
                <p className="text-gray-500 text-sm mb-2">{user.email}</p>
                <Link
                  to={`/detail/${user.id}`}
                  className="text-lime-500 hover:underline text-sm font-medium"
                >
                  Detail
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
            className={`px-4 py-2 rounded-lg font-medium ${
              page === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-lime-500 text-white hover:bg-lime-400"
            }`}
          >
            Prev
          </button>

          <span className="text-gray-800 font-medium">
            Page {page} of {totalPages}
          </span>

          <button
            onClick={handleNext}
            disabled={page === totalPages}
            className={`px-4 py-2 rounded-lg font-medium ${
              page === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-lime-500 text-white hover:bg-lime-400"
            }`}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
