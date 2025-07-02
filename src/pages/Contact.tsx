import React from 'react';
import { MapPin, Phone, Mail, Facebook, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const serviceLocations = [
    'Coimbatore',
    'Chennai',
    'Salem',
    'Erode',
    'Tirupur',
    'Madurai',
    'Trichy',
    'Thanjavur'
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to start your solar journey? Get in touch with our expert team for a free consultation and customized quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600 text-sm">
                      No 2/19A, Sathy Road, Sivanandapuram,<br />
                      Saravanampatti, Coimbatore – 641035
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a href="tel:+918870367617" className="text-green-600 hover:text-green-700 text-sm">
                      +91 88703 67617
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:vsbindia2024@gmail.com" className="text-green-600 hover:text-green-700 text-sm">
                      vsbindia2024@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Facebook className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Facebook</p>
                    <a
                      href="https://facebook.com/vsbsolution"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 text-sm"
                    >
                      /vsbsolution
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Business Hours</p>
                    <p className="text-gray-600 text-sm">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Details */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">Business Details</h3>
              <div className="space-y-2 text-sm">
                <p><strong>GSTIN:</strong> 33AAYFV6037C1ZX</p>
                <p><strong>Established:</strong> 2014</p>
                <p><strong>Certifications:</strong> ISO 9001:2015</p>
                <p><strong>Service Area:</strong> Tamil Nadu</p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose VSB Power Solutions?</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Consultation</h3>
                    <p className="text-gray-600 text-sm">Free site assessment and customized solar solutions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Quality Components</h3>
                    <p className="text-gray-600 text-sm">Premium Tier-1 solar panels and inverters with warranties</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Complete Service</h3>
                    <p className="text-gray-600 text-sm">From design to installation and ongoing maintenance</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Government Support</h3>
                    <p className="text-gray-600 text-sm">Assistance with subsidies and regulatory approvals</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">24/7 Support</h3>
                    <p className="text-gray-600 text-sm">Round-the-clock monitoring and technical assistance</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Performance Guarantee</h3>
                    <p className="text-gray-600 text-sm">25-year performance warranty on all installations</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Ready to Get Started?</h3>
                <p className="text-green-700 text-sm mb-3">
                  Call us today for a free consultation and site assessment. Our experts will help you design the perfect solar solution for your needs.
                </p>
                <a
                  href="tel:+918870367617"
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-200 text-sm font-medium"
                >
                  Call Now: +91 88703 67617
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service Locations */}
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Our Service Locations
            </h2>
            <p className="text-gray-600 text-center mb-8">
              We provide comprehensive solar solutions across Tamil Nadu with local expertise and support.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {serviceLocations.map((location, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-3 mb-2">
                    <MapPin className="h-6 w-6 text-green-600 mx-auto" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">{location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Area Map */}
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Service Areas in Tamil Nadu</h2>
              <p className="text-gray-600 mb-6">
                VSB Power Solutions provides comprehensive solar energy services across Tamil Nadu. 
                Our headquarters is located in Coimbatore, with service coverage extending to all major cities and districts.
              </p>
            </div>
            <div className="bg-gray-50 p-4">
              <img
                src="/image.png"
                alt="VSB Power Solutions Service Areas in Tamil Nadu"
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
            <div className="p-6 bg-gray-50">
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 text-gray-700">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Head Office:</span>
                  <span>No 2/19A, Sathy Road, Sivanandapuram, Saravanampatti, Coimbatore – 641035</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;