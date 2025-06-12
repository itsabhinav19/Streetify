import { useParams } from 'react-router-dom'
import { StarIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react' // Import useState and useEffect

// Imagine this is an array of vendors you'd fetch from an API
const mockVendors = [
  {
    id: '1', // Ensure IDs are strings if coming from URL params
    name: 'Chai Point',
    category: 'Food & Beverages',
    rating: 4.5,
    location: { lat: 28.6139, lng: 77.2090 },
    images: [
      'https://images.unsplash.com/photo-1544145945-f90425340c7e',
      'https://images.unsplash.com/photo-1544145945-f90425340c7e',
      'https://images.unsplash.com/photo-1544145945-f90425340c7e',
    ],
    description: 'Authentic Indian street food and beverages',
    openNow: true,
    hours: {
      monday: '8:00 AM - 10:00 PM',
      tuesday: '8:00 AM - 10:00 PM',
      wednesday: '8:00 AM - 10:00 PM',
      thursday: '8:00 AM - 10:00 PM',
      friday: '8:00 AM - 11:00 PM',
      saturday: '9:00 AM - 11:00 PM',
      sunday: '9:00 AM - 10:00 PM',
    },
    menu: [
      {
        name: 'Masala Chai',
        price: '₹20',
        description: 'Traditional spiced Indian tea',
      },
      {
        name: 'Samosa',
        price: '₹15',
        description: 'Crispy pastry with spiced potatoes and peas',
      },
    ],
    reviews: [
      {
        id: 1,
        user: 'John Doe',
        rating: 5,
        comment: 'Best chai in the area!',
        date: '2024-02-15',
      },
      {
        id: 2,
        user: 'Jane Smith',
        rating: 4,
        comment: 'Great service and authentic taste',
        date: '2024-02-14',
      },
    ],
  },
  {
    id: '2',
    name: 'Burger Bliss',
    category: 'Fast Food',
    rating: 4.2,
    location: { lat: 28.5355, lng: 77.3910 },
    images: [
      'https://images.unsplash.com/photo-1561758033-0309228d7a31',
      'https://images.unsplash.com/photo-1561758033-0309228d7a31',
    ],
    description: 'Juicy burgers and crispy fries.',
    openNow: true,
    hours: {
      monday: '11:00 AM - 10:00 PM',
      tuesday: '11:00 AM - 10:00 PM',
      wednesday: '11:00 AM - 10:00 PM',
      thursday: '11:00 AM - 10:00 PM',
      friday: '11:00 AM - 11:00 PM',
      saturday: '12:00 PM - 11:00 PM',
      sunday: '12:00 PM - 10:00 PM',
    },
    menu: [
      { name: 'Classic Burger', price: '₹150', description: 'Beef patty, lettuce, tomato' },
      { name: 'Cheese Burger', price: '₹180', description: 'Classic with cheddar cheese' },
    ],
    reviews: [
      { id: 1, user: 'Alice', rating: 4, comment: 'Good burgers!', date: '2024-03-01' },
    ],
  },
]

export default function VendorProfile() {
  const { id } = useParams<{ id: string }>() // Get the ID from the URL
  const [vendor, setVendor] = useState<typeof mockVendors[0] | null>(null) // State to hold the found vendor

  useEffect(() => {
    // In a real application, you would fetch data from an API here
    // For now, we'll find the vendor in our mockVendors array
    const foundVendor = mockVendors.find((v) => v.id === id)
    setVendor(foundVendor || null) // Set the found vendor or null if not found
  }, [id]) // Re-run effect if 'id' changes

  if (!vendor) {
    // Handle the case where the vendor is not found (e.g., show a loading spinner or 404 message)
    return <div className="text-center py-10">Vendor not found or loading...</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{vendor.name}</h1>
        <div className="mt-2 flex items-center space-x-4">
          <div className="flex items-center">
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <span className="ml-1 text-gray-600">{vendor.rating}</span>
          </div>
          <span className="text-gray-500">{vendor.category}</span>
          <span className="text-green-600 font-medium">{vendor.openNow ? 'Open Now' : 'Closed'}</span>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {vendor.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${vendor.name} - Image ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg"
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Description */}
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <p className="text-gray-600">{vendor.description}</p>
          </div>

          {/* Menu */}
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Menu</h2>
            <div className="space-y-4">
              {vendor.menu.map((item, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <span className="font-medium">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Reviews</h2>
            <div className="space-y-4">
              {vendor.reviews.map((review) => (
                <div key={review.id} className="border-b pb-4 last:border-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{review.user}</h3>
                    <div className="flex items-center">
                      <StarIcon className="h-4 w-4 text-yellow-400" />
                      <span className="ml-1 text-sm">{review.rating}</span>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-600">{review.comment}</p>
                  <p className="mt-1 text-sm text-gray-500">{review.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Contact Info */}
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 text-gray-400 mr-2" />
                <span>123 Street Name, City, State</span> {/* This would ideally come from vendor.address */}
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-gray-400 mr-2" />
                <span>+91 1234567890</span> {/* This would ideally come from vendor.phone */}
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
            <div className="space-y-2">
              {Object.entries(vendor.hours).map(([day, hours]) => (
                <div key={day} className="flex justify-between">
                  <span className="capitalize">{day}</span>
                  <span>{hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}