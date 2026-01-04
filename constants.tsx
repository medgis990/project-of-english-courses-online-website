
import React from 'react';

export const COLORS = {
  primary: 'blue-600',
  secondary: 'teal-500',
  accent: 'green-500',
  background: 'blue-50',
};

export const FEATURES = [
  {
    id: 'live',
    title: 'Live 1-on-1 Sessions',
    description: 'Personalized learning with native English speakers from around the world.',
    icon: 'video',
  },
  {
    id: 'recorded',
    title: 'Recorded Sessions',
    description: 'Missed a class? Watch your recorded sessions anytime, anywhere.',
    icon: 'play-circle',
  },
  {
    id: 'ai-tutor',
    title: '24/7 AI Tutor',
    description: 'Practice conversation and get instant feedback with our advanced AI.',
    icon: 'cpu',
  },
  {
    id: 'level-test',
    title: 'Free Level Test',
    description: 'Determine your proficiency accurately with our interactive quiz.',
    icon: 'clipboard-list',
  }
];

export const PRICING_PLANS = [
  {
    name: 'Starter',
    price: '$99',
    discountPrice: '$49.50',
    features: [
      '4 Live 1-on-1 Sessions',
      'Basic Recorded Library',
      'AI Tutor (5 hours/mo)',
      'Free Level Test'
    ]
  },
  {
    name: 'Pro',
    price: '$189',
    discountPrice: '$94.50',
    isPopular: true,
    features: [
      '8 Live 1-on-1 Sessions',
      'Full Recorded Library',
      'Unlimited AI Tutor',
      'Personalized Curriculum'
    ]
  },
  {
    name: 'Elite',
    price: '$349',
    discountPrice: '$174.50',
    features: [
      '16 Live 1-on-1 Sessions',
      'VIP Recorded Library',
      'Unlimited AI Tutor',
      'Career Coaching Add-on',
      'Priority Support'
    ]
  }
];

export const QUIZ_QUESTIONS = [
  {
    question: "Choose the correct sentence: 'I ___ to the gym every morning.'",
    options: ["goes", "go", "going", "gone"],
    correctIndex: 1
  },
  {
    question: "Which word is a synonym for 'Vibrant'?",
    options: ["Dull", "Lively", "Boring", "Quiet"],
    correctIndex: 1
  },
  {
    question: "Choose the correct preposition: 'She is interested ___ learning French.'",
    options: ["on", "at", "in", "by"],
    correctIndex: 2
  },
  {
    question: "Complete the sentence: 'If I ___ you, I would take the offer.'",
    options: ["was", "am", "be", "were"],
    correctIndex: 3
  }
];
