import { Link } from 'react-router-dom'
import { MapPinIcon, UserIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">Streetify</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/vendors"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                <MapPinIcon className="h-5 w-5 mr-1" />
                Find Vendors
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link
              to="/profile"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-primary-600"
            >
              <UserIcon className="h-5 w-5 mr-1" />
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 