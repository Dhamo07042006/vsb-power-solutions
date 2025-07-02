import React from 'react';
import { Sun, Home, Zap, BarChart3, Shield, ArrowRight, Calculator, Eye, Grid3X3 } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const systemComponents = [
    {
      icon: Sun,
      title: 'Solar Panels',
      description: 'High-efficiency photovoltaic panels convert sunlight into DC electricity.'
    },
    {
      icon: Zap,
      title: 'Inverter',
      description: 'Converts DC electricity from panels into AC electricity for home use.'
    },
    {
      icon: Grid3X3,
      title: 'Net Meter',
      description: 'Bidirectional meter measures electricity consumption and production.'
    },
    {
      icon: Home,
      title: 'Main Panel',
      description: 'Distributes electricity throughout your home via existing electrical panel.'
    }
  ];

  const processFlow = [
    {
      step: '1',
      title: 'Solar Energy Generation',
      description: 'Solar panels capture sunlight and convert it into DC electricity throughout the day.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      step: '2',
      title: 'DC to AC Conversion',
      description: 'The inverter converts DC electricity into AC electricity compatible with your home appliances.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      step: '3',
      title: 'Power Your Home',
      description: 'Clean solar electricity powers your home appliances and lighting systems first.',
      color: 'from-green-500 to-teal-600'
    },
    {
      step: '4',
      title: 'Export to Grid',
      description: 'Excess electricity is automatically exported to the grid, earning you credits.',
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Grid-Tied Solar Works
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Understanding the technology behind your solar energy system and how it integrates with the electrical grid.
          </p>
        </div>

        {/* System Diagram */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Grid-Tied Solar System Components
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {systemComponents.map((component, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full mb-4">
                    <component.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {component.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {component.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
              <img
                src="https://images.pexels.com/photos/9875817/pexels-photo-9875817.jpeg"
                alt="Solar System Diagram"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-center text-gray-600 italic">
                Grid-tied solar system showing the flow of electricity from panels to home and grid
              </p>
            </div>
          </div>
        </div>

        {/* Process Flow */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How It Works: Step by Step
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processFlow.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-start space-x-4">
                    <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${step.color} text-white rounded-full font-bold text-lg flex-shrink-0`}>
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
                {index < processFlow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Capacity Calculation */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Calculator className="h-6 w-6 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Capacity Calculation</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-lg font-medium text-green-800 mb-2">Rule of Thumb:</p>
                <p className="text-green-700">1 kW system = 100 sq ft space required</p>
                <p className="text-green-700">1 kW system = ~120 units/month generation</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600"><strong>Example:</strong> 5kW system requirements:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Space needed: 500 sq ft</li>
                  <li>Monthly generation: ~600 units</li>
                  <li>Annual generation: ~7,200 units</li>
                  <li>CO₂ reduction: ~5.4 tons/year</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Net Billing System */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <BarChart3 className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Net Billing System</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-lg font-medium text-blue-800 mb-2">How Net Metering Works:</p>
                <div className="space-y-2 text-blue-700">
                  <p>• Excess power exported to grid during day</p>
                  <p>• Credits earned for exported electricity</p>
                  <p>• Import power from grid when needed</p>
                  <p>• Monthly net billing settlement</p>
                </div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Net metering policies vary by state and utility company. 
                  We handle all paperwork and approvals for seamless grid connection.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Shadow Analysis */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-6">
            <Eye className="h-6 w-6 text-purple-600 mr-3" />
            <h3 className="text-2xl font-semibold text-gray-900">Shadow Analysis & Site Assessment</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Shadow Analysis Matters</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Identifies potential shading obstacles throughout the year</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Optimizes panel placement for maximum energy production</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Ensures accurate energy generation estimates</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Prevents underperformance due to shading issues</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Assessment Process</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-600">
                  <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                  <span>Drone survey and 3D modeling of your property</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                  <span>Solar path analysis for different seasons</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                  <span>Detailed shading report with recommendations</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold">4</div>
                  <span>Optimized system design and layout planning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;