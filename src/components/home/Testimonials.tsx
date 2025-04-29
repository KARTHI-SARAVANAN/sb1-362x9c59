import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  name: string;
  role: string;
  avatarUrl: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "The blockchain technology gives me peace of mind knowing that my donation information is secure and transparent. The matching system found a recipient for my kidney within weeks.",
      name: "Michael Chen",
      role: "Organ Donor",
      avatarUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5
    },
    {
      id: 2,
      content: "After waiting for years on traditional waiting lists, OrganChain matched me with a compatible liver donor in just a few months. The transparency of the process helped ease my anxiety.",
      name: "Sarah Johnson",
      role: "Organ Recipient",
      avatarUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5
    },
    {
      id: 3,
      content: "As a transplant surgeon, I appreciate the efficiency and accuracy of the AI matching system. It has significantly reduced our administrative burden while improving matching outcomes.",
      name: "Dr. James Wilson",
      role: "Transplant Surgeon",
      avatarUrl: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 4
    },
    {
      id: 4,
      content: "OrganChain has revolutionized how our hospital manages organ donations. The blockchain verification ensures compliance with regulations and reduces paperwork substantially.",
      name: "Dr. Amelia Rodriguez",
      role: "Hospital Administrator",
      avatarUrl: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600">
            Hear from donors, recipients, and medical professionals about their experiences with our platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 relative">
            {/* Quote mark */}
            <div className="absolute top-6 left-8 text-6xl text-teal-100 font-serif">❝</div>
            
            <div className="relative z-10">
              {/* Star Rating */}
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              {/* Testimonial Content */}
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                {testimonials[currentIndex].content}
              </p>
              
              {/* User Info */}
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonials[currentIndex].avatarUrl} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-500">{testimonials[currentIndex].role}</p>
                </div>
                
                {/* Navigation Buttons */}
                <div className="ml-auto flex space-x-2">
                  <button 
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                  index === currentIndex ? 'bg-teal-500 w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;