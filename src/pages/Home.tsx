import React from 'react';
import { ArrowRight, CheckCircle, Users, Wrench, Calculator, FileCheck, Zap, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const whyChooseUs = [
    {
      icon: Calculator,
      title: 'Optimized Design Engineering',
      description: 'Advanced engineering solutions tailored to maximize energy output and efficiency.',
    },
    {
      icon: Eye,
      title: 'Centrally Monitored Maintenance',
      description: '24/7 monitoring and proactive maintenance to ensure optimal system performance.',
    },
    {
      icon: FileCheck,
      title: 'Custom Financial Modelling',
      description: 'Detailed financial analysis and ROI calculations for informed investment decisions.',
    },
    {
      icon: Users,
      title: 'Efficient Government Liaisoning',
      description: 'Streamlined approval processes and permit handling for hassle-free installations.',
    },
  ];

  const processSteps = [
    {
      icon: Calculator,
      title: 'Demand Assessment',
      description: 'Comprehensive analysis of your energy requirements and consumption patterns.',
    },
    {
      icon: Zap,
      title: 'Optimized Solutions',
      description: 'Custom-designed solar solutions optimized for your specific needs and location.',
    },
    {
      icon: Wrench,
      title: 'Engineering',
      description: 'Detailed engineering drawings and system specifications for optimal performance.',
    },
    {
      icon: FileCheck,
      title: 'Approvals & Permits',
      description: 'Complete handling of all regulatory approvals and permit requirements.',
    },
    {
      icon: CheckCircle,
      title: 'Installation & Commissioning',
      description: 'Professional installation and thorough system commissioning by certified technicians.',
    },
    {
      icon: Eye,
      title: 'O&M Monitoring',
      description: 'Ongoing operations and maintenance with continuous performance monitoring.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-96 md:h-[500px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              VSB Power Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-yellow-300 font-medium">
              Connecting the Sunshine – From Sunlight to Savings
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with years of expertise to deliver solar solutions that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From initial assessment to ongoing maintenance, we handle every step of your solar journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg mr-4">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Go Solar?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made the switch to clean, renewable energy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              View Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors duration-200"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;