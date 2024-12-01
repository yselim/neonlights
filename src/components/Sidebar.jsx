export default function Sidebar() {
    return (
      <aside className="w-64 bg-gray-100 h-screen p-4 shadow-md">
        {/* Sidebar Title */}
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
  
        {/* Navigation Links */}
        <nav className="space-y-2">
          <a href="/" className="block text-gray-700 hover:text-blue-600">
            Agenda
          </a>
          <a href="/" className="block text-gray-700 hover:text-blue-600">
            Debe
          </a>
          <a href="/" className="block text-gray-700 hover:text-blue-600">
            Spor
          </a>
          <a href="/" className="block text-gray-700 hover:text-blue-600">
            Relationships
          </a>
        </nav>
      </aside>
    );
  }
  