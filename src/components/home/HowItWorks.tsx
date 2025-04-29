import React from 'react';
import { ClipboardCheck, UserPlus, Brain, Heart, Guitar as Hospital, Shield, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <UserPlus className="w-10 h-10 text-white" />,
      title: 'Registration',
      description: 'Donors and recipients register with verified medical information and consent.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: <ClipboardCheck className="w-10 h-10 text-white" />,
      title: 'Verification',
      description: 'Medical professionals verify and approve donor and recipient information.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Brain className="w-10 h-10 text-white" />,
      title: 'Matching',
      description: 'ML algorithms analyze compatibility factors to find optimal organ matches.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: <Hospital className="w-10 h-10 text-white" />,
      title: 'Approval',
      description: 'Transplant centers review and approve the proposed matches.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Heart className="w-10 h-10 text-white" />,
      title: 'Transplantation',
      description: 'The matched organ is transplanted to the recipient.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Shield className="w-10 h-10 text-white" />,
      title: 'Recording',
      description: 'The entire process is recorded securely on the blockchain.',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600">
            Our transparent and secure organ donation process combines cutting-edge technology with medical expertise.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                    <span className="font-bold text-gray-800">{index + 1}</span>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center max-w-xs">{step.description}</p>
                
                {/* Arrow for mobile and tablet */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center mt-4 lg:hidden">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;