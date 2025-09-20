export const LoginPage = () => {
  return (
    <div className="bg-primary flex items-center justify-center min-h-screen font-inter">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        {/* Login Form Container */}
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Log In
        </h2>
        <form id="loginForm">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="h-4 w-4 text-gray-600 rounded"
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-800 transition duration-200"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-200"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?
          <a
            href="#"
            className="font-medium text-gray-600 hover:text-gray-800 transition duration-200"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};
