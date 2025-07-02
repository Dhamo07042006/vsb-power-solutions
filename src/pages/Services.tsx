import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Home, Factory, Droplets, Lightbulb, Battery, Wrench } from 'lucide-react';

const Services: React.FC = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      icon: Home,
      title: 'Grid-Connected Rooftop Solar',
      description: 'Complete rooftop solar solutions that connect to the electricity grid for maximum efficiency and savings.',
      details: [
        'Residential and commercial rooftop installations',
        'Net metering support for grid connection',
        'High-efficiency mono-crystalline panels',
        'Advanced inverter technology with monitoring',
        'Complete system design and engineering',
        'Government subsidy assistance',
        '25-year performance warranty'
      ],
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg'
    },
    {
      icon: Factory,
      title: 'Off-Grid Solar Plant',
      description: 'Standalone solar power systems for remote locations and areas without grid connectivity.',
      details: [
        'Custom-designed off-grid solutions',
        'Battery storage systems included',
        'Remote monitoring capabilities',
        'Industrial-grade components',
        'Load calculation and sizing',
        'Backup generator integration options',
        'Complete operation & maintenance support'
      ],
      image: 'https://images.pexels.com/photos/9875817/pexels-photo-9875817.jpeg'
    },
    {
      icon: Droplets,
      title: 'Solar Pumps (Surface/Submersible)',
      description: 'Energy-efficient solar water pumping solutions for agriculture and domestic applications.',
      details: [
        'Surface and submersible pump options',
        'Agricultural irrigation systems',
        'Domestic water supply solutions',
        'Variable frequency drive controllers',
        'Water level monitoring systems',
        'Drip irrigation integration',
        'Minimal maintenance requirements'
      ],
      image: 'https://images.pexels.com/photos/4462782/pexels-photo-4462782.jpeg'
    },
    {
      icon: Lightbulb,
      title: 'Solar Street Lighting',
      description: 'Sustainable outdoor lighting solutions for streets, parks, and public spaces.',
      details: [
        'LED lighting with high luminous efficiency',
        'Integrated battery storage systems',
        'Motion sensor and dimming controls',
        'Weather-resistant design',
        'Easy installation and maintenance',
        'Smart lighting control options',
        'Cost-effective public lighting solutions'
      ],
      image: 'https://images.pexels.com/photos/2339009/pexels-photo-2339009.jpeg'
    },
    {
      icon: Battery,
      title: 'Solar Battery Storage',
      description: 'Advanced energy storage solutions to maximize solar power utilization and provide backup power.',
      details: [
        'Lithium-ion and lead-acid battery options',
        'Hybrid inverter systems',
        'Energy management systems',
        'Peak load shaving capabilities',
        'Emergency backup power',
        'Grid stabilization features',
        'Scalable storage solutions'
      ],
      image: 'https://images.pexels.com/photos/9875405/pexels-photo-9875405.jpeg'
    },
    {
      icon: Wrench,
      title: 'Maintenance & Support',
      description: 'Comprehensive maintenance services to ensure optimal performance and longevity of your solar systems.',
      details: [
        'Preventive maintenance programs',
        'Performance monitoring and analysis',
        'Component replacement services',
        'System cleaning and inspection',
        '24/7 technical support',
        'Warranty and insurance claims support',
        'System upgrades and expansions'
      ],
      image: 'https://images.pexels.com/photos/8086210/pexels-photo-8086210.jpeg'
    }
  ];

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive solar energy solutions designed to meet all your renewable energy needs, 
            from residential rooftops to large-scale industrial installations.
          </p>
        </div>

        <div className="space-y-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleService(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-gray-400">
                    {expandedService === index ? (
                      <ChevronUp className="h-6 w-6" />
                    ) : (
                      <ChevronDown className="h-6 w-6" />
                    )}
                  </div>
                </div>
              </div>

              {expandedService === index && (
                <div className="border-t border-gray-200">
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Key Features & Benefits
                        </h4>
                        <ul className="space-y-2">
                          {service.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;