export const Footer = () => {
  return (
    <footer className="bg-gray-200">
      <div className=" bg-secondary py-16 px-10 sm:px-20 text-gray-700">
        <div className=" flex flex-col md:flex-row justify-between items-start md:items-end h-full">
          <div className="flex flex-col justify-start">
            <div className="mb-10">
              <h2 className="text-4xl font-normal text-gray-800 mb-4">
                R. Sinclair
              </h2>
            </div>
            <div className="text-sm space-y-2 mb-10">
              <p>123.456.7890</p>
              <p>info@mysite.com</p>
            </div>
            <div className="text-sm space-y-2 mb-10">
              <p>500 Terry Francine St. San</p>
              <p>Francisco, CA 94158</p>
            </div>
            <div className="text-sm text-gray-600">
              <p>© 2025 by R. Sinclair. Powered and secured by Srijan</p>
            </div>
          </div>
          {/* Right Section: Legal Links */}
          <div className="text-sm flex flex-col space-y-2">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Accessibility Statement
            </a>
            <a href="#" className="hover:underline">
              Shipping Policy
            </a>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

