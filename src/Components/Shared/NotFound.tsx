

export const NotFound = () => {
  return (
    <div className="bg-primary ">
      <div className="min-h-[calc(100vh-160px)] flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <h2 className="text-3xl font-medium text-gray-600 my-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-500 mb-6">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <a href="/home">
          <button className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-black transition duration-300">
            Go to Homepage
          </button>
        </a>
      </div>
    </div>
  );
};
