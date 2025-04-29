import React from 'react';
import { Shield, Brain, BarChart3, Users, FileCheck, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-teal-500" />,
      title: 'Secure Blockchain Ledger',
      description: 'All donation records are securely stored on an immutable blockchain ledger, ensuring transparency and preventing fraud.'
    },
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'ML-Powered Matching',
      description: 'Our advanced machine learning algorithms find optimal donor-recipient matches based on multiple compatibility factors.'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-indigo-500" />,
      title: 'Real-time Analytics',
      description: 'Comprehensive dashboards provide real-time insights into donation trends, success rates, and waiting list statistics.'
    },
    {
      icon: <Users className="w-12 h-12 text-purple-500" />,
      title: 'Multi-stakeholder Platform',
      description: 'A unified system connecting donors, recipients, medical professionals, and transplant centers in one ecosystem.'
    },
    {
      icon: <FileCheck className="w-12 h-12 text-green-500" />,
      title: 'Automated Verification',
      description: 'Smart contracts automatically verify eligibility and compliance with medical and ethical standards.'
    },
    {
      icon: <Clock className="w-12 h-12 text-amber-500" />,
      title: 'Reduced Waiting Times',
      description: 'Efficient matching and streamlined processes significantly reduce organ waiting times and improve outcomes.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transforming Organ Donation with Technology</h2>
          <p className="text-lg text-gray-600">
            Our platform combines blockchain security with artificial intelligence to create a revolutionary organ donation ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              hover={true} 
              className="bg-white border border-gray-100 transition-all duration-300"
            >
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;