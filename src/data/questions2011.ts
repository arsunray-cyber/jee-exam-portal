import { Question } from '../types';

export const QUESTIONS_2011: Question[] = [
  // Physics 2011
  {
    id: 'jee_2011_phy_01',
    year: 2011,
    shift: 'AIEEE / JEE Offline May',
    subject: 'physics',
    section: 'A',
    topic: 'Oscillations',
    subtopic: 'Simple Pendulum & Gravity Variations',
    type: 'mcq',
    questionText: 'The period of oscillation of a simple pendulum is $T = 2\\pi \\sqrt{\\frac{L}{g}}$. Measured value of $L$ is $20.0\\text{ cm}$ known to $1\\text{ mm}$ accuracy and time for $100$ oscillations of the pendulum is found to be $90\\text{ s}$ using a wrist watch of $1\\text{ s}$ resolution. The percentage error in the determination of $g$ is approximately:',
    options: [
      '$2.7\\%$',
      '$3.0\\%$',
      '$1.5\\%$',
      '$5.0\\%$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 70,
    difficulty: 'Medium',
    solution: {
      finalAnswer: 'Option (A) is correct: $2.7\\%$',
      formulas: [
        '$g = 4\\pi^2 \\frac{L}{T^2}$',
        '$\\frac{\\Delta g}{g} = \\frac{\\Delta L}{L} + 2\\frac{\\Delta T}{T}$'
      ],
      stepByStep: [
        'Relative error in length: $\\frac{\\Delta L}{L} = \\frac{0.1\\text{ cm}}{20.0\\text{ cm}} = 0.005$ (or $0.5\\%$).',
        'Relative error in time: $\\frac{\\Delta T}{T} = \\frac{\\Delta t}{t} = \\frac{1\\text{ s}}{90\\text{ s}} \\approx 0.0111$ (or $1.11\\%$).',
        'Total percentage error in $g$:',
        '$\\frac{\\Delta g}{g} \\times 100 = \\left(\\frac{0.1}{20} + 2 \\times \\frac{1}{90}\\right) \\times 100 = (0.5\\% + 2.22\\%) = 2.72\\% \\approx 2.7\\%$.'
      ],
      keyConcept: 'Propagation of fractional and percentage errors in power-law experimental relations.',
      shortcutTip: '$0.5\\% + 2(1/90 \\times 100)\\% = 0.5 + 2.22 = 2.72\\%$.'
    }
  },
  {
    id: 'jee_2011_phy_02',
    year: 2011,
    shift: 'AIEEE / JEE Offline May',
    subject: 'physics',
    section: 'A',
    topic: 'Nuclear Physics',
    subtopic: 'Radioactive Decay Law',
    type: 'mcq',
    questionText: 'The half-life of a radioactive substance is $20\\text{ minutes}$. The approximate time taken between $33\\%$ decay and $67\\%$ decay of the substance is:',
    options: [
      '$20\\text{ minutes}$',
      '$40\\text{ minutes}$',
      '$30\\text{ minutes}$',
      '$10\\text{ minutes}$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 50,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $20\\text{ minutes}$',
      formulas: [
        '$N(t) = N_0 e^{-\\lambda t}$',
        'Half life: $T_{1/2} = \\frac{\\ln 2}{\\lambda}$'
      ],
      stepByStep: [
        'When $33\\%$ has decayed, remaining fraction is $100\\% - 33\\% = 67\\% = \\frac{2}{3}N_0$.',
        'When $67\\%$ has decayed, remaining fraction is $100\\% - 67\\% = 33\\% = \\frac{1}{3}N_0$.',
        'The ratio between remaining amounts is $\\frac{(1/3)N_0}{(2/3)N_0} = \\frac{1}{2}$.',
        'Reducing the remaining radioactive nucleus count by half takes exactly one half-life, which is $20\\text{ minutes}$.'
      ],
      keyConcept: 'Definition of half-life as time needed for any current active population to halve.',
      shortcutTip: 'Fraction changes from $67\\%$ to $33\\%$, which is halving $\\implies 1\\,T_{1/2} = 20\\text{ minutes}$.'
    }
  },

  // Chemistry 2011
  {
    id: 'jee_2011_chem_01',
    year: 2011,
    shift: 'AIEEE / JEE Offline May',
    subject: 'chemistry',
    section: 'A',
    topic: 'Organic Reactions',
    subtopic: 'Electrophilic Aromatic Substitution',
    type: 'mcq',
    questionText: 'Which one of the following compounds is most reactive towards electrophilic nitration by concentrated $\\text{HNO}_3 / \\text{H}_2\\text{SO}_4$?',
    options: [
      'Toluene ($\\text{C}_6\\text{H}_5\\text{CH}_3$)',
      'Benzene ($\\text{C}_6\\text{H}_6$)',
      'Nitrobenzene ($\\text{C}_6\\text{H}_5\\text{NO}_2$)',
      'Chlorobenzene ($\\text{C}_6\\text{H}_5\\text{Cl}$)'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 40,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: Toluene',
      formulas: [
        'Electron-donating groups ($+I$, hyperconjugation) activate the benzene ring towards electrophiles.'
      ],
      stepByStep: [
        'The methyl group ($-\\text{CH}_3$) in toluene donates electron density via hyperconjugation and $+I$ inductive effect, increasing electron density on the aromatic ring.',
        'Nitro ($\\text{NO}_2$) is strongly deactivating ($-M, -I$).',
        'Chloro ($\\text{Cl}$) is deactivating due to strong $-I$ effect.',
        'Benzene has no substituents.',
        'Thus, toluene has the highest ring electron density and greatest electrophilic reactivity.'
      ],
      keyConcept: 'Substituent effects on benzene ring reactivity in electrophilic aromatic substitutions.',
      shortcutTip: '$-\\text{CH}_3$ is activating $\\implies$ Toluene is fastest.'
    }
  },

  // Mathematics 2011
  {
    id: 'jee_2011_math_01',
    year: 2011,
    shift: 'AIEEE / JEE Offline May',
    subject: 'mathematics',
    section: 'A',
    topic: 'Probability',
    subtopic: 'Conditional Probability & Independent Events',
    type: 'mcq',
    questionText: 'If $A$ and $B$ are two independent events such that $P(A) = 0.3$ and $P(B) = 0.4$, then $P(A \\cup B\')$ is equal to:',
    options: [
      '$0.72$',
      '$0.58$',
      '$0.48$',
      '$0.82$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 60,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $0.72$',
      formulas: [
        '$P(A \\cup B\') = P(A) + P(B\') - P(A \\cap B\')$',
        'If $A$ and $B$ are independent, $A$ and $B\'$ are also independent: $P(A \\cap B\') = P(A) P(B\')$'
      ],
      stepByStep: [
        '$P(B\') = 1 - P(B) = 1 - 0.4 = 0.6$.',
        'By independence, $P(A \\cap B\') = P(A) P(B\') = 0.3 \\times 0.6 = 0.18$.',
        'Using addition law: $P(A \\cup B\') = P(A) + P(B\') - P(A \\cap B\') = 0.3 + 0.6 - 0.18 = 0.90 - 0.18 = 0.72$.'
      ],
      keyConcept: 'Complementary independence and union theorem in probability.',
      shortcutTip: '$1 - P(A\' \\cap B) = 1 - (1 - 0.3)(0.4) = 1 - 0.28 = 0.72$. 15 seconds!'
    }
  }
];
