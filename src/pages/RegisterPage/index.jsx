import { useRegister } from "../../hooks/useRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleRegister,
    error,
    success,
  } = useRegister();

  return (
    <div className="flex items-center justify-center h-screen px-4 bg-gradient-to-br from-lime-100 via-white to-lime-50">
      <div className="w-full max-w-md bg-transparent p-12 rounded">
        <h1 className="text-3xl font-bold text-lime-500 mb-4">Sign Up</h1>
        <p className="font-medium text-slate-700 mb-4">
          Please fill in the form below
        </p>
        {error && <p className="text-red-500 font-medium mb-2">{error}</p>}
        {success && (
          <p className="text-green-500 font-medium mb-2">{success}</p>
        )}
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block mb-1 text-slate-700 text-sm font-bold"
            >
              Email
            </label>
            <input
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              type="email"
              className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
              placeholder="example@mail.com"
              value={username}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-1 text-slate-700 text-sm font-bold"
            >
              Password
            </label>
            <input
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
              placeholder="******"
              value={password}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block mb-1 text-slate-700 text-sm font-bold"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
              placeholder="******"
              value={confirmPassword}
              required
            />
          </div>

          <button
            type="submit"
            className={`h-10 px-6 font-semibold rounded-md w-full mb-4 transition-colors ${
              username && password && confirmPassword
                ? "bg-lime-500 text-white hover:bg-lime-400"
                : "bg-lime-200 text-white cursor-not-allowed"
            }`}
            disabled={!username || !password || !confirmPassword}
          >
            Register
          </button>

          <div className="flex justify-center">
            <p className="text-slate-700 font-semibold mr-2">
              Already have an account?
            </p>
            <Link
              className="text-lime-500 font-semibold hover:text-lime-400"
              to="/login"
            >
              Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
