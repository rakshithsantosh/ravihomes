import {
  Home,
  Search,
  FileText,
  Wrench,
  Calculator,
  MapPin,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Property Search",
      description:
        "Find your perfect home with our extensive property database and expert guidance",
      features: [
        "Customized search",
        "Market analysis",
        "Virtual tours",
        "Neighborhood insights",
      ],
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Buying Services",
      description: "Complete support throughout your property purchase journey",
      features: [
        "Legal verification",
        "Price negotiation",
        "Documentation",
        "Registration support",
      ],
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Loan Assistance",
      description: "Get the best home loan deals with our banking partners",
      features: [
        "Loan consultation",
        "Documentation help",
        "Best rates",
        "Quick approvals",
      ],
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Legal Services",
      description: "Comprehensive legal support for all property transactions",
      features: [
        "Title verification",
        "Agreement drafting",
        "Registration",
        "Due diligence",
      ],
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Construction",
      description: "Custom home construction with premium quality standards",
      features: [
        "Custom design",
        "Quality materials",
        "Timely delivery",
        "Warranty support",
      ],
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Investment Advisory",
      description: "Expert advice on property investments and market trends",
      features: [
        "Market research",
        "ROI analysis",
        "Investment planning",
        "Portfolio management",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive real estate solutions tailored to your needs, from
            property search to final ownership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-blue-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Dream Home?
          </h3>
          <p className="text-xl mb-8 text-blue-100">
            Let our experts guide you through every step of your property
            journey
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all">
              <a href="http://ravipragnay.kw.com/search" target="_blank">
                View Properties
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
