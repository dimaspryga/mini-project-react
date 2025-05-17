import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

const LoginPage = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    error,
    success,
    handleLogin,
    navigate,
  } = useLogin();

  return (
    <div className="flex justify-center min-h-screen items-center px-4 bg-gradient-to-br from-lime-100 via-white to-lime-50">
      <div className="w-full max-w-md bg-transparent p-12 rounded">
        <h1 className="text-3xl font-bold text-lime-500 mb-2">Sign In</h1>
        <p className="font-medium text-slate-700 mb-4">
          Welcome, please enter your details
        </p>

        {success && (
          <p className="text-green-500 font-medium mb-2">{success}</p>
        )}
        {error && <p className="text-red-500 font-medium mb-2">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-slate-700 text-sm font-bold mb-1"
            >
              Username
            </label>
            <input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              name="username"
              className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
              placeholder="example@mail.com"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-slate-700 text-sm font-bold mb-1"
            >
              Password
            </label>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
              placeholder="*******"
              required
            />
          </div>

          <button
            type="submit"
            className={`h-10 px-6 font-semibold rounded-md w-full mb-4 transition-colors ${
              username && password
                ? "bg-lime-500 text-white hover:bg-lime-400"
                : "bg-lime-200 text-white cursor-not-allowed"
            }`}
            disabled={!username || !password}
          >
            Login
          </button>
        </form>

        <div className="flex justify-center">
          <p className="text-slate-700 font-semibold mr-2">
            Don't have an account?
          </p>
          <Link
            className="text-lime-500 font-semibold hover:text-lime-400"
            to="/register"
          >
            Register
          </Link>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="font-semibold text-sm px-4 py-2 text-gray-400 rounded-md hover:text-gray-700 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
