import React from 'react';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Luxury Villa in Whitefield",
      location: "Whitefield, Bangalore",
      price: "₹2.5 Cr",
      beds: 4,
      baths: 3,
      area: "2,400 sq ft",
      image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: true
    },
    {
      id: 2,
      title: "Modern Apartment in Koramangala",
      location: "Koramangala, Bangalore",
      price: "₹1.8 Cr",
      beds: 3,
      baths: 2,
      area: "1,800 sq ft",
      image: "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false
    },
    {
      id: 3,
      title: "Premium Plot in Electronic City",
      location: "Electronic City, Bangalore",
      price: "₹85 L",
      beds: 0,
      baths: 0,
      area: "2,000 sq ft",
      image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false
    },
    {
      id: 4,
      title: "Duplex Villa in Sarjapur",
      location: "Sarjapur, Bangalore",
      price: "₹3.2 Cr",
      beds: 5,
      baths: 4,
      area: "3,200 sq ft",
      image: "https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: true
    },
    {
      id: 5,
      title: "Penthouse in Indiranagar",
      location: "Indiranagar, Bangalore",
      price: "₹4.5 Cr",
      beds: 4,
      baths: 3,
      area: "2,800 sq ft",
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: true
    },
    {
      id: 6,
      title: "Family Home in HSR Layout",
      location: "HSR Layout, Bangalore",
      price: "₹1.2 Cr",
      beds: 3,
      baths: 2,
      area: "1,600 sq ft",
      image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false
    }
  ];

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked selection of premium properties that offer exceptional value and quality living
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover"
                />
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                <button className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors">
                  <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.location}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {property.title}
                </h3>

                <div className="flex items-center justify-between mb-4">
                  {property.beds > 0 && (
                    <div className="flex items-center text-gray-600">
                      <Bed className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.beds} Beds</span>
                    </div>
                  )}
                  {property.baths > 0 && (
                    <div className="flex items-center text-gray-600">
                      <Bath className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.baths} Baths</span>
                    </div>
                  )}
                  <div className="flex items-center text-gray-600">
                    <Square className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.area}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">
                    {property.price}
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;