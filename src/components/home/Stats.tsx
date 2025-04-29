import React, { useState, useEffect } from 'react';
import { Users, Heart, Briefcase, ArrowUpRight } from 'lucide-react';

const Stats: React.FC = () => {
  const [donorCount, setDonorCount] = useState(0);
  const [recipientCount, setRecipientCount] = useState(0);
  const [successfulTransplants, setSuccessfulTransplants] = useState(0);
  const [hospitals, setHospitals] = useState(0);

  // Mock target values
  const targetDonors = 2547;
  const targetRecipients = 1856;
  const targetTransplants = 942;
  const targetHospitals = 132;

  useEffect(() => {
    // Animation duration in ms
    const duration = 2000;
    // Update interval in ms
    const interval = 20;
    // Steps to reach target value
    const steps = duration / interval;
    
    // Donor count animation
    let donorStep = 0;
    const donorInterval = setInterval(() => {
      donorStep++;
      setDonorCount(Math.floor(targetDonors * (donorStep / steps)));
      if (donorStep >= steps) {
        clearInterval(donorInterval);
        setDonorCount(targetDonors);
      }
    }, interval);
    
    // Recipient count animation
    let recipientStep = 0;
    const recipientInterval = setInterval(() => {
      recipientStep++;
      setRecipientCount(Math.floor(targetRecipients * (recipientStep / steps)));
      if (recipientStep >= steps) {
        clearInterval(recipientInterval);
        setRecipientCount(targetRecipients);
      }
    }, interval);
    
    // Transplant count animation
    let transplantStep = 0;
    const transplantInterval = setInterval(() => {
      transplantStep++;
      setSuccessfulTransplants(Math.floor(targetTransplants * (transplantStep / steps)));
      if (transplantStep >= steps) {
        clearInterval(transplantInterval);
        setSuccessfulTransplants(targetTransplants);
      }
    }, interval);
    
    // Hospital count animation
    let hospitalStep = 0;
    const hospitalInterval = setInterval(() => {
      hospitalStep++;
      setHospitals(Math.floor(targetHospitals * (hospitalStep / steps)));
      if (hospitalStep >= steps) {
        clearInterval(hospitalInterval);
        setHospitals(targetHospitals);
      }
    }, interval);
    
    // Clean up intervals on unmount
    return () => {
      clearInterval(donorInterval);
      clearInterval(recipientInterval);
      clearInterval(transplantInterval);
      clearInterval(hospitalInterval);
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-teal-500 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Registered Donors */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/80 mb-1">Registered Donors</p>
                <h3 className="text-3xl font-bold">{donorCount.toLocaleString()}</h3>
                <p className="text-white/60 text-sm mt-2">
                  <span className="text-green-300">+12.5%</span> this month
                </p>
              </div>
              <div className="bg-white/20 p-3 rounded-full">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          
          {/* Active Recipients */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/80 mb-1">Active Recipients</p>
                <h3 className="text-3xl font-bold">{recipientCount.toLocaleString()}</h3>
                <p className="text-white/60 text-sm mt-2">
                  <span className="text-green-300">+8.3%</span> this month
                </p>
              </div>
              <div className="bg-white/20 p-3 rounded-full">
                <Heart className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          
          {/* Successful Transplants */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/80 mb-1">Successful Transplants</p>
                <h3 className="text-3xl font-bold">{successfulTransplants.toLocaleString()}</h3>
                <p className="text-white/60 text-sm mt-2">
                  <span className="text-green-300">+15.2%</span> this year
                </p>
              </div>
              <div className="bg-white/20 p-3 rounded-full">
                <ArrowUpRight className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          
          {/* Partner Hospitals */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/80 mb-1">Partner Hospitals</p>
                <h3 className="text-3xl font-bold">{hospitals.toLocaleString()}</h3>
                <p className="text-white/60 text-sm mt-2">
                  <span className="text-green-300">+5.7%</span> this quarter
                </p>
              </div>
              <div className="bg-white/20 p-3 rounded-full">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;