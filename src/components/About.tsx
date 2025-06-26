import React from "react";
import { Award, Users, Shield, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Ravi Homes
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Helping people find a place they can truly call home is at the
              heart of what I do. I specialize in residential and commercial
              real estate across California, with a strong focus on delivering a
              personalized, seamless experience for every client. My approach is
              rooted in integrity, transparency, and an unwavering commitment to
              client satisfaction. Whether you're buying your first home,
              upgrading to a new space, or making a strategic investment, I’m
              here to guide you every step of the way. I believe that every
              property tells a story—and it’s my goal to help you find one that
              reflects your aspirations and lifestyle.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to quality, transparency, and customer satisfaction
              has helped over 500 families find their perfect homes. We believe
              that every family deserves a home that reflects their dreams and
              aspirations.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Quality Assured
                  </h4>
                  <p className="text-sm text-gray-600">
                    Premium construction standards
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Expert Team
                  </h4>
                  <p className="text-sm text-gray-600">
                    Experienced professionals
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Trusted Service
                  </h4>
                  <p className="text-sm text-gray-600">Transparent dealings</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Growth Focused
                  </h4>
                  <p className="text-sm text-gray-600">
                    Future-ready investments
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern architecture"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-yellow-500 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold mb-1"></div>
              <div className="text-sm">
                Your Trusted Partner in the Home Buying Journey
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Leadership Team
          </h3>
          <div className="flex justify-center">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Nagaraj Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Ravi Pavagada
              </h4>
              <p className="text-gray-600 mb-2">Founder & CEO</p>
              <p className="text-sm text-gray-500">
                Your goto realtor in bay area
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
