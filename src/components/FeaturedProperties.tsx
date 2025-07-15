import { Heart } from "lucide-react";

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "San Jose",
      link: "https://ravipragnay.kw.com/search/sale?viewport=37.47530697372783%2C-121.52737983671877%2C37.11697721710994%2C-122.10416206328127&q=san+jose",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Walnut Creek",
      link: "https://ravipragnay.kw.com/search/sale/Walnut-Creek-CA-USA/956318?viewport=39.08209161214641%2C-118.84894872848467%2C36.922434795095974%2C-123.06769872848467&q=Walnut+Creek%2C+CA%2C+USA",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Sacramento",
      link: "https://ravipragnay.kw.com/search/sale/Sacramento-CA-USA/950321?viewport=38.69558048079528%2C-121.19784932499999%2C38.42766077309143%2C-121.72519307499999&q=Sacramento%2C+CA%2C+USA",
    },
    {
      id: 4,
      link: "https://ravipragnay.kw.com/search/sale?viewport=38.95895692072779%2C-120.31096250000002%2C36.79562417640822%2C-124.52971250000002&q=bay+area",
      title: "Bay Area",
      image:
        "https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Santa Rosa",
      link: "https://ravipragnay.kw.com/search/sale?viewport=38.570337035864576%2C-122.43856622500002%2C38.30195022443163%2C-122.96590997500002&q=santa+rosa",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/3688579/pexels-photo-3688579.jpeg",
      title: "San Francisco",
      link: "https://ravipragnay.kw.com/search/sale/San-Francisco-CA-USA/951337?viewport=38.05522884625678%2C-122.20046375000001%2C37.51364795433828%2C-123.25515125000001&q=San+Francisco%2C+CA%2C+USA",
    },
  ];

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Neighbourhoods
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Step into a neighborhood rich in history, featuring charming streets
            lined with beautifully preserved architecture. A perfect blend of
            old-world charm and modern conveniences.
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
                  className="w-full h-64 object-cover"
                />

                <button className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors">
                  <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                </button>
              </div>

              <div className="p-6 flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {property.title}
                </h3>
                <a
                  href={property.link}
                  target="_blank"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-lg font-semibold transition-colors"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            href="https://ravipragnay.kw.com/"
            target="_blank"
          >
            View All Properties
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
