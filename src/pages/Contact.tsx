import React, { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Clock, Send, User, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    serviceType: ''
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      serviceType: ''
    });
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="rooftop-solar">Grid-Connected Rooftop Solar</option>
                      <option value="off-grid">Off-Grid Solar Plant</option>
                      <option value="solar-pumps">Solar Pumps</option>
                      <option value="street-lighting">Solar Street Lighting</option>
                      <option value="battery-storage">Solar Battery Storage</option>
                      <option value="maintenance">Maintenance & Support</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Please describe your solar energy requirements, property details, or any specific questions you have..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:from-green-700 hover:to-blue-700 transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
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