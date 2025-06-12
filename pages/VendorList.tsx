import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { StarIcon, MapPinIcon } from '@heroicons/react/24/solid'
import 'leaflet/dist/leaflet.css'

// Mock data for demonstration
const mockVendors = [
  {
    id: 1,
    name: 'Chai Point',
    category: 'Food & Beverages',
    rating: 4.5,
    location: { lat: 28.6139, lng: 77.2090 },
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e',
    description: 'Authentic Indian street food and beverages',
    openNow: true,
  },
  {
    id: 2,
    name: 'Street Tailor',
    category: 'Services',
    rating: 4.2,
    location: { lat: 28.6140, lng: 77.2095 },
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e',
    description: 'Quick alterations and custom tailoring',
    openNow: true,
  },
  // Add more mock vendors as needed
]

export default function VendorList() {
  const [selectedVendor, setSelectedVendor] = useState<number | null>(null)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Map Section */}
        <div className="h-[600px] rounded-lg overflow-hidden shadow-lg">
          <MapContainer
            center={[28.6139, 77.2090]}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {mockVendors.map((vendor) => (
              <Marker
                key={vendor.id}
                position={[vendor.location.lat, vendor.location.lng]}
                eventHandlers={{
                  click: () => setSelectedVendor(vendor.id),
                }}
              >
                <Popup>
                  <div className="p-2">
                    <h3 className="font-semibold">{vendor.name}</h3>
                    <p className="text-sm text-gray-600">{vendor.category}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Vendor List Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Nearby Vendors</h2>
            <div className="flex space-x-2">
              <button className="btn btn-secondary">Filter</button>
              <button className="btn btn-primary">Sort</button>
            </div>
          </div>

          <div className="space-y-4">
            {mockVendors.map((vendor) => (
              <div
                key={vendor.id}
                className={`card cursor-pointer transition-all ${
                  selectedVendor === vendor.id ? 'ring-2 ring-primary-500' : ''
                }`}
                onClick={() => setSelectedVendor(vendor.id)}
              >
                <div className="flex space-x-4">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {vendor.name}
                      </h3>
                      <div className="flex items-center">
                        <StarIcon className="h-5 w-5 text-yellow-400" />
                        <span className="ml-1 text-sm text-gray-600">
                          {vendor.rating}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">{vendor.category}</p>
                    <p className="mt-2 text-sm text-gray-600">
                      {vendor.description}
                    </p>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <MapPinIcon className="h-4 w-4 mr-1" />
                      <span>0.5 km away</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 