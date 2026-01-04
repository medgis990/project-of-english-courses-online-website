
import React, { useState } from 'react';
import { PRICING_PLANS } from '../constants';
import { PricingPlan } from '../types';

const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [isPaid, setIsPaid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePlanSelect = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      setIsPaid(true);
    }, 2000);
  };

  if (isPaid) {
    return (
      <div className="py-20 bg-blue-50/50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
            <div className="bg-teal-500 p-8 text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold">Payment Successful!</h2>
              <p className="opacity-90">Your {selectedPlan?.name} package is now active.</p>
            </div>
            
            <div className="p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Step 2: Schedule Your First Session</h3>
              <p className="text-gray-500 mb-8">Choose a time that works best for you to meet your teacher.</p>
              
              {/* Calendly Embed Placeholder */}
              <div className="w-full h-[600px] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center overflow-hidden">
                <div className="w-full h-full">
                  {/* In a real app, you would use the Calendly Inline Widget script here */}
                  <iframe
                    src="https://calendly.com/d/demo-call/60min"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Schedule with EnglishFlow"
                  ></iframe>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center gap-4">
                <button onClick={() => window.location.href = '#/login'} className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition">
                  Go to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedPlan) {
    return (
      <div className="py-20 bg-blue-50/50 min-h-screen">
        <div className="max-w-5xl mx-auto px-4">
          <button 
            onClick={() => setSelectedPlan(null)}
            className="flex items-center gap-2 text-blue-600 font-medium mb-8 hover:underline"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Plans
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-blue-50">
                <h3 className="text-xl font-bold text-blue-900 mb-6">Order Summary</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">{selectedPlan.name} Package</span>
                    <span className="font-bold text-blue-900">{selectedPlan.discountPrice}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400 italic">Original Price</span>
                    <span className="text-gray-400 line-through">{selectedPlan.price}</span>
                  </div>
                  <div className="border-t border-gray-100 pt-4 flex justify-between items-center text-lg">
                    <span className="font-bold text-blue-900">Total</span>
                    <span className="font-bold text-blue-600">{selectedPlan.discountPrice}</span>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl text-xs text-blue-700 leading-relaxed">
                  🔒 Secure transaction. You will be billed monthly. Cancel anytime.
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-blue-50">
                <h2 className="text-2xl font-bold text-blue-900 mb-8">Complete Your Enrollment</h2>
                
                <form onSubmit={handlePayment} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-sm font-bold text-gray-700 mb-2">Cardholder Name</label>
                      <input 
                        required 
                        type="text" 
                        className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-100 outline-none" 
                        placeholder="Alex Johnson" 
                      />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-sm font-bold text-gray-700 mb-2">Card Number</label>
                      <div className="relative">
                        <input 
                          required 
                          type="text" 
                          className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-100 outline-none pr-12" 
                          placeholder="0000 0000 0000 0000" 
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Expiry Date</label>
                      <input 
                        required 
                        type="text" 
                        className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-100 outline-none" 
                        placeholder="MM / YY" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">CVV</label>
                      <input 
                        required 
                        type="password" 
                        maxLength={3}
                        className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-100 outline-none" 
                        placeholder="123" 
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <input type="checkbox" required className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" />
                    <span className="text-sm text-gray-500">I agree to the Terms of Service and Privacy Policy.</span>
                  </div>

                  <button 
                    disabled={isLoading}
                    type="submit" 
                    className={`w-full py-5 rounded-2xl font-bold text-xl text-white transition-all ${
                      isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-200'
                    }`}
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      `Pay ${selectedPlan.discountPrice} & Continue`
                    )}
                  </button>
                  
                  <div className="flex justify-center gap-6 opacity-30">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" alt="Visa" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" alt="Mastercard" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-6" alt="Paypal" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Choose the package that fits your learning goals. Every first enrollment gets a <span className="text-blue-600 font-bold">50% discount</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => (
            <div key={plan.name} className={`bg-white rounded-3xl p-8 shadow-xl relative border-2 ${plan.isPopular ? 'border-blue-600' : 'border-transparent'}`}>
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{plan.name}</h3>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-gray-400 line-through text-2xl">{plan.price}</span>
                  <span className="text-5xl font-extrabold text-blue-600">{plan.discountPrice}</span>
                </div>
                <p className="text-gray-400 mt-2">First month / package</p>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handlePlanSelect(plan)}
                className={`w-full py-4 rounded-2xl font-bold text-lg transition ${plan.isPopular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}
              >
                Get Started Now
              </button>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-24 overflow-x-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Compare our plans</h2>
          <table className="w-full text-left bg-white rounded-3xl shadow-lg border-separate border-spacing-0 overflow-hidden">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="p-6">Feature</th>
                <th className="p-6">Starter</th>
                <th className="p-6">Pro</th>
                <th className="p-6">Elite</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b border-gray-100">
                <td className="p-6 border-b border-gray-100">1-on-1 Live Sessions</td>
                <td className="p-6 border-b border-gray-100">4 / month</td>
                <td className="p-6 border-b border-gray-100">8 / month</td>
                <td className="p-6 border-b border-gray-100">16 / month</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-6 border-b border-gray-100">AI Tutor Access</td>
                <td className="p-6 border-b border-gray-100">5 hours</td>
                <td className="p-6 border-b border-gray-100">Unlimited</td>
                <td className="p-6 border-b border-gray-100">Unlimited</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-6 border-b border-gray-100">Recorded Library</td>
                <td className="p-6 border-b border-gray-100">Basic</td>
                <td className="p-6 border-b border-gray-100">Full</td>
                <td className="p-6 border-b border-gray-100">Premium</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-6 border-b border-gray-100">Custom Curriculum</td>
                <td className="p-6 border-b border-gray-100">No</td>
                <td className="p-6 border-b border-gray-100">Yes</td>
                <td className="p-6 border-b border-gray-100">Yes</td>
              </tr>
              <tr>
                <td className="p-6">Dedicated Success Manager</td>
                <td className="p-6">No</td>
                <td className="p-6">No</td>
                <td className="p-6 text-green-500 font-bold">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-16 bg-white p-12 rounded-3xl shadow-lg text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Need a custom plan for your company?</h3>
            <p className="text-gray-500 mb-8">We offer bulk discounts and specialized business English courses for teams of all sizes.</p>
            <button className="bg-teal-500 text-white px-8 py-4 rounded-full font-bold hover:bg-teal-600 transition">Contact Enterprise Sales</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
