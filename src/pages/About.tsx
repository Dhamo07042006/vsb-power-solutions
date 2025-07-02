import React from 'react';
import { Target, Award, Users, Lightbulb, Shield, Zap, TrendingUp, CheckCircle, Wrench, User, Package, Factory, Building2, UserCheck } from 'lucide-react';

const About: React.FC = () => {
  const coreValues = [
    {
      icon: Target,
      title: 'Optimize Project Cost',
      description: 'We focus on delivering maximum value by optimizing costs without compromising on quality or performance.',
    },
    {
      icon: TrendingUp,
      title: 'Lifetime Performance',
      description: 'Our systems are designed for long-term reliability with performance guarantees that span decades.',
    },
    {
      icon: Award,
      title: 'High-Quality Tier-1 Components',
      description: 'We use only premium, internationally certified components from top-tier manufacturers.',
    },
    {
      icon: Wrench,
      title: 'In-House Engineering & O&M',
      description: 'Complete in-house capabilities for engineering design, installation, and ongoing maintenance.',
    },
  ];

  const achievements = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50MW+', label: 'Total Capacity Installed' },
    { number: '10+', label: 'Years of Experience' },
    { number: '99%', label: 'Customer Satisfaction' },
  ];

  const teamValues = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously adopting cutting-edge technologies and innovative solutions.',
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Building trust through consistent, dependable service and support.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Putting our customers\' needs and satisfaction at the center of everything we do.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Excellence',
      description: 'Maintaining the highest standards in every aspect of our work.',
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About VSB Power Solutions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Leading the renewable energy revolution with innovative solar solutions, 
            exceptional service, and a commitment to a sustainable future.
          </p>
        </div>

        {/* Company Overview */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  At VSB Power Solutions, we are dedicated to making clean, renewable energy accessible 
                  and affordable for everyone. Our mission is to accelerate the adoption of solar energy 
                  through innovative solutions, exceptional service, and unwavering commitment to quality.
                </p>
                <p className="text-gray-600 mb-6">
                  Since our inception, we have been at the forefront of the solar revolution in Tamil Nadu, 
                  helping thousands of customers transition to clean energy while reducing their carbon footprint 
                  and energy costs.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-lg">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900">
                    Powering a Sustainable Future
                  </span>
                </div>
              </div>
              <div className="h-64 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/9875817/pexels-photo-9875817.jpeg"
                  alt="Solar Installation Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Business Partners Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who drive our commitment to excellence in solar energy solutions and business operations.
            </p>
          </div>

          <div className="space-y-8">
            {/* Sathish Kumar */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto">
                  <img
                    src="/WhatsApp Image 2025-07-01 at 23.08.42_2584f98c.jpg"
                    alt="Sadish kumar N - Partner, VSB Power Solutions"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-lg mr-4">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Sadish kumar N</h3>
                      <p className="text-lg text-green-600 font-semibold">Partner & Solar Operations Head</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    Sadish kumar is one of the founding partners of VSB Power Solutions, bringing over a decade 
                    of expertise in solar energy systems and renewable technology. As the head of solar operations, 
                    he oversees all technical aspects of our solar installations and ensures the highest standards 
                    of quality and performance.
                  </p>
                  
                  <p className="text-gray-600 mb-6">
                    His deep understanding of solar technology, combined with his commitment to customer satisfaction, 
                    has been instrumental in establishing VSB Power Solutions as a trusted name in Tamil Nadu's 
                    renewable energy sector. Under his leadership, our technical team has successfully completed 
                    over 500 solar installations across the state.
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">10+ years in solar energy sector</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Expert in solar system design and optimization</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Certified solar installation professional</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Specializes in grid-tied and off-grid solutions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mr. Vikream */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-3 rounded-lg mr-4">
                      <Package className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Mr. Vikream</h3>
                      <p className="text-lg text-orange-600 font-semibold">Partner & Founder, Siruvani Packaging</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 italic">
                    "Driven by innovation and built on trust, Mr. Vikream leads Siruvani Packaging with a commitment 
                    to quality, precision, and eco-conscious packaging solutions."
                  </p>
                  
                  <p className="text-gray-600 mb-6">
                    Wearing confidence and humility, Mr. Vikream is the visionary behind Siruvani Packaging — a company 
                    known for delivering reliable and sustainable packaging services across Tamil Nadu. His leadership 
                    reflects in every layer of the company's mission: from using top-grade materials to maintaining 
                    strong client relationships.
                  </p>

                  <p className="text-gray-600 mb-6">
                    As a partner in VSB Power Solutions, Mr. Vikream brings his business acumen and commitment to 
                    sustainability, helping to drive our mission of providing eco-friendly solar energy solutions 
                    that align with environmental responsibility and business excellence.
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500" />
                      <span className="text-gray-700">Founder of Siruvani Packaging</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500" />
                      <span className="text-gray-700">Expert in sustainable business practices</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500" />
                      <span className="text-gray-700">Committed to eco-conscious solutions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500" />
                      <span className="text-gray-700">Strategic business development partner</span>
                    </div>
                  </div>
                </div>
                <div className="h-64 lg:h-auto">
                  <img
                    src="/WhatsApp Image 2025-07-01 at 23.11.45_54f205c0.jpg"
                    alt="Mr. Vikream - Partner, VSB Power Solutions"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Mr. Balu */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto">
                  <img
                    src="/WhatsApp Image 2025-07-01 at 23.13.02_7cd6c576.jpg"
                    alt="Mr. Balu - Director, Mahalakshmi Industry"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-3 rounded-lg mr-4">
                      <Factory className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Mr. Balu</h3>
                      <p className="text-lg text-purple-600 font-semibold">Director, Mahalakshmi Industry & Partner</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 italic">
                    "With decades of industrial experience and a deep-rooted passion for growth, Mr. Balu steers 
                    Mahalakshmi Industry toward innovation, efficiency, and client-first solutions."
                  </p>
                  
                  <p className="text-gray-600 mb-6">
                    A calm leader with sharp decision-making skills, Mr. Balu plays a pivotal role in the operations 
                    and strategic vision of Mahalakshmi Industry. His dedication to quality manufacturing and long-term 
                    partnerships makes the company a trusted name in its field. Whether it's production precision or 
                    timely delivery, his leadership is reflected in every part of the workflow.
                  </p>

                  <p className="text-gray-600 mb-6">
                    As a strategic partner in VSB Power Solutions, Mr. Balu brings his extensive industrial experience 
                    and operational excellence to our solar energy initiatives, ensuring that our manufacturing processes 
                    and supply chain management meet the highest industry standards.
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-purple-500" />
                      <span className="text-gray-700">Director of Mahalakshmi Industry</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-purple-500" />
                      <span className="text-gray-700">Decades of industrial manufacturing experience</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-purple-500" />
                      <span className="text-gray-700">Expert in operational efficiency and quality control</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-purple-500" />
                      <span className="text-gray-700">Strategic operations and supply chain management</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Channel Partner Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Strategic Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver exceptional solar solutions and technical expertise.
            </p>
          </div>

          <div className="space-y-8">
            {/* Channel Partner - BRENSOL */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-lg mr-4">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">BRENSOL</h3>
                      <p className="text-lg text-blue-600 font-semibold">Channel Partner</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    VSB Power Solutions proudly partners with BRENSOL, a recognized name in renewable energy solutions, 
                    ensuring access to top-tier solar technology and reliable energy components. This strategic partnership 
                    enables us to deliver cutting-edge solar solutions with proven reliability and performance.
                  </p>

                  <p className="text-gray-600 mb-6">
                    Through our collaboration with BRENSOL, we maintain access to the latest innovations in solar technology, 
                    premium-grade components, and comprehensive technical support that enhances our ability to serve our 
                    customers with world-class renewable energy solutions.
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-700">Access to top-tier solar technology</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-700">Reliable energy components and systems</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-700">Comprehensive technical support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-700">Latest innovations in renewable energy</span>
                    </div>
                  </div>
                </div>
                <div className="h-64 lg:h-auto flex items-center justify-center bg-gray-50">
                  <img
                    src="/image copy copy.png"
                    alt="BRENSOL - Channel Partner"
                    className="max-w-full max-h-full object-contain p-8"
                  />
                </div>
              </div>
            </div>

            {/* Chief Technical Advisor */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto">
                  <img
                    src="/WhatsApp Image 2025-07-01 at 23.08.42_2584f98c.jpg"
                    alt="Mr. P. Venkittaswamy - Chief Technical Advisor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-3 rounded-lg mr-4">
                      <UserCheck className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Mr. P. Venkittaswamy</h3>
                      <p className="text-lg text-teal-600 font-semibold">Chief Technical Advisor</p>
                      <p className="text-sm text-gray-600">M/s Union Electricals</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    With vast experience in solar and electrical infrastructure, Mr. P. Venkittaswamy offers strategic 
                    and technical guidance to ensure every project meets the highest standards of efficiency, safety, 
                    and performance. His insights contribute greatly to project design, optimization, and execution.
                  </p>

                  <p className="text-gray-600 mb-6">
                    As our Chief Technical Advisor, Mr. Venkittaswamy brings decades of expertise in electrical systems 
                    and renewable energy technologies. His guidance ensures that our solar installations are not only 
                    technically sound but also optimized for maximum performance and longevity.
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-teal-500" />
                      <span className="text-gray-700">Extensive experience in solar and electrical infrastructure</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-teal-500" />
                      <span className="text-gray-700">Strategic technical guidance and consultation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-teal-500" />
                      <span className="text-gray-700">Project design and optimization expertise</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-teal-500" />
                      <span className="text-gray-700">Ensures highest standards of efficiency and safety</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold text-center mb-8">
              Our Achievements
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-green-100">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Focus */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Focus
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to delivering solar solutions that exceed expectations through 
              our focused approach to excellence in every aspect of our service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg flex-shrink-0">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to our customers and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose VSB Power Solutions?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Expertise</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Certified engineers with deep technical expertise</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Comprehensive project management from design to commissioning</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Advanced monitoring and maintenance capabilities</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Strong partnerships with leading component manufacturers</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Commitment</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>25-year performance warranty on all installations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>24/7 customer support and technical assistance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Transparent pricing with no hidden costs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Complete assistance with government subsidies and approvals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;