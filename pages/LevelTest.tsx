
import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { Link } from 'react-router-dom';

const LevelTest: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption === QUIZ_QUESTIONS[currentStep].correctIndex) {
      setScore(score + 1);
    }
    
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const getLevel = () => {
    const percentage = (score / QUIZ_QUESTIONS.length) * 100;
    if (percentage >= 80) return { name: 'Advanced', desc: 'You have a high level of proficiency and can handle complex topics.' };
    if (percentage >= 50) return { name: 'Intermediate', desc: 'You can communicate effectively in most everyday situations.' };
    return { name: 'Beginner', desc: 'You are just starting your journey. Great time to build a strong foundation!' };
  };

  if (showResult) {
    const level = getLevel();
    return (
      <div className="min-h-[80vh] flex items-center justify-center py-20 px-4">
        <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-12 text-center border border-blue-50">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-4xl font-extrabold text-blue-900 mb-4">Your Level: <span className="text-blue-600">{level.name}</span></h2>
          <p className="text-gray-500 mb-10 text-lg leading-relaxed">{level.desc}</p>
          
          <div className="bg-blue-50 p-6 rounded-2xl mb-10">
            <h4 className="font-bold text-blue-900 mb-2">Recommended for you:</h4>
            <p className="text-blue-700">The <strong>Pro Package</strong> with 8 monthly sessions is perfect to boost your {level.name} skills to the next level!</p>
          </div>

          <Link to="/pricing" className="block w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition shadow-lg mb-4">
             Enroll with 50% Discount
          </Link>
          <button onClick={() => window.location.reload()} className="text-gray-400 font-medium hover:text-blue-600">Take test again</button>
        </div>
      </div>
    );
  }

  const progress = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 px-4 bg-blue-50/30">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-50">
        <div className="h-2 w-full bg-blue-100">
          <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${progress}%` }}></div>
        </div>
        
        <div className="p-10 md:p-12">
          <div className="flex justify-between items-center mb-10">
             <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">English Proficiency Test</span>
             <span className="text-gray-400 font-medium">{currentStep + 1} / {QUIZ_QUESTIONS.length}</span>
          </div>
          
          <h3 className="text-2xl font-bold text-blue-900 mb-8 leading-tight">
            {QUIZ_QUESTIONS[currentStep].question}
          </h3>

          <div className="space-y-4 mb-10">
            {QUIZ_QUESTIONS[currentStep].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                className={`w-full text-left p-6 rounded-2xl border-2 transition-all font-medium ${
                  selectedOption === index 
                    ? 'border-blue-600 bg-blue-50 text-blue-900' 
                    : 'border-gray-100 hover:border-blue-200 text-gray-600'
                }`}
              >
                <div className="flex items-center gap-4">
                   <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedOption === index ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`}>
                      {selectedOption === index && <div className="w-2 h-2 bg-white rounded-full"></div>}
                   </div>
                   {option}
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className={`w-full py-5 rounded-2xl font-bold text-lg transition-all ${
              selectedOption === null 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-200'
            }`}
          >
            {currentStep < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'See My Results'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LevelTest;
