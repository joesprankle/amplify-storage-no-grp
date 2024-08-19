import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white w-64 space-y-6 py-7 px-2">
      <Link href="/" className="text-2xl font-semibold block px-4">
        Dashboard
      </Link>
      <nav>
        <Link href="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          Dashboard
        </Link>
        <Link href="/charts" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          Charts
        </Link>
        <Link href="/tables" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          Tables
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;