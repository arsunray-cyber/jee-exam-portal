import { Question } from '../types';

export const QUESTIONS_2012: Question[] = [
  // Physics 2012
  {
    id: 'jee_2012_phy_01',
    year: 2012,
    shift: 'AIEEE / JEE Offline May',
    subject: 'physics',
    section: 'A',
    topic: 'Magnetism',
    subtopic: 'Moving Coil Galvanometer Sensitivity',
    type: 'mcq',
    questionText: 'A galvanometer having a coil resistance of $100\\,\\Omega$ gives a full-scale deflection when a current of $1\\text{ mA}$ passes through it. The resistance that must be connected in series to convert it into a voltmeter of range $0 - 10\\text{ V}$ is:',
    options: [
      '$9900\\,\\Omega$',
      '$10000\\,\\Omega$',
      '$990\\,\\Omega$',
      '$10100\\,\\Omega$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 50,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $R = 9900\\,\\Omega$',
      formulas: [
        'Voltmeter conversion: $V = I_g(G + R)$',
        '$R = \\frac{V}{I_g} - G$'
      ],
      stepByStep: [
        'Given full scale current $I_g = 1\\text{ mA} = 10^{-3}\\text{ A}$, galvanometer resistance $G = 100\\,\\Omega$, desired voltage $V = 10\\text{ V}$.',
        '$R = \\frac{10}{10^{-3}} - 100 = 10000 - 100 = 9900\\,\\Omega$.'
      ],
      keyConcept: 'Series multiplier resistance for galvanometer-to-voltmeter conversion.',
      shortcutTip: '$10 / 10^{-3} - 100 = 10000 - 100 = 9900\\,\\Omega$.'
    }
  },
  {
    id: 'jee_2012_phy_02',
    year: 2012,
    shift: 'AIEEE / JEE Offline May',
    subject: 'physics',
    section: 'A',
    topic: 'Properties of Matter',
    subtopic: 'Excess Pressure in Soap Bubble',
    type: 'mcq',
    questionText: 'If the excess pressure inside a spherical soap bubble of radius $R_1$ is three times that inside a bubble of radius $R_2$, then the ratio of their volumes $V_1 / V_2$ is:',
    options: [
      '$1 : 27$',
      '$1 : 9$',
      '$1 : 3$',
      '$27 : 1$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 50,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $1 : 27$',
      formulas: [
        'Excess pressure inside a soap bubble: $\\Delta P = \\frac{4T}{R}$',
        'Volume of sphere: $V = \\frac{4}{3}\\pi R^3$'
      ],
      stepByStep: [
        'Since surface tension $T$ is identical, $\\Delta P \\propto \\frac{1}{R}$.',
        '$\\frac{\\Delta P_1}{\\Delta P_2} = \\frac{R_2}{R_1} = 3 \\implies \\frac{R_1}{R_2} = \\frac{1}{3}$.',
        'The volume ratio is $\\frac{V_1}{V_2} = \\left(\\frac{R_1}{R_2}\\right)^3 = \\left(\\frac{1}{3}\\right)^3 = \\frac{1}{27}$.'
      ],
      keyConcept: 'Laplace excess pressure inversely proportional to radius, cubic volume scaling.',
      shortcutTip: '$P \\propto 1/R \\implies R_1/R_2 = 1/3 \\implies V_1/V_2 = 1/27$.'
    }
  },

  // Chemistry 2012
  {
    id: 'jee_2012_chem_01',
    year: 2012,
    shift: 'AIEEE / JEE Offline May',
    subject: 'chemistry',
    section: 'A',
    topic: 'Chemical Equilibrium',
    subtopic: 'Le Chatelier\'s Principle & Equilibrium Constant',
    type: 'mcq',
    questionText: 'For the reaction $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$, the forward reaction is endothermic. Which of the following conditions will favor the forward dissociation of $\\text{PCl}_5$?',
    options: [
      'High temperature and low pressure',
      'Low temperature and high pressure',
      'High temperature and high pressure',
      'Low temperature and low pressure'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 45,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: High temperature and low pressure',
      formulas: [
        '$\\Delta H > 0$ (endothermic) $\\implies$ favored by increase in temperature',
        '$\\Delta n_g = 1 + 1 - 1 = +1 > 0 \\implies$ favored by decrease in pressure'
      ],
      stepByStep: [
        'According to Le Chatelier\'s principle:',
        '1. An endothermic reaction absorbs heat, so increasing temperature shifts equilibrium to the right.',
        '2. The reaction produces more moles of gas ($\\Delta n_g = +1$). Decreasing pressure shifts the equilibrium towards the side with more moles (forward).'
      ],
      keyConcept: 'Le Chatelier\'s response to temperature and volume/pressure perturbations.',
      shortcutTip: 'Endothermic + $\\Delta n_g > 0 \\implies$ High $T$ & Low $P$.'
    }
  },

  // Mathematics 2012
  {
    id: 'jee_2012_math_01',
    year: 2012,
    shift: 'AIEEE / JEE Offline May',
    subject: 'mathematics',
    section: 'A',
    topic: 'Trigonometry',
    subtopic: 'Trigonometric Equations & General Solutions',
    type: 'mcq',
    questionText: 'The number of values of $x$ in the interval $[0, 2\\pi]$ satisfying the equation $\\sin^2 x - 2\\cos x + \\frac{1}{4} = 0$ is:',
    options: [
      '$2$',
      '$4$',
      '$1$',
      '$0$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 70,
    difficulty: 'Medium',
    solution: {
      finalAnswer: 'Option (A) is correct: $2$ solutions',
      formulas: [
        '$\\sin^2 x = 1 - \\cos^2 x$'
      ],
      stepByStep: [
        'Rewrite in terms of $\\cos x$: $(1 - \\cos^2 x) - 2\\cos x + 1/4 = 0$.',
        '$\\cos^2 x + 2\\cos x - \\frac{5}{4} = 0 \\implies 4\\cos^2 x + 8\\cos x - 5 = 0$.',
        'Factor: $4\\cos^2 x + 10\\cos x - 2\\cos x - 5 = 0 \\implies 2\\cos x(2\\cos x + 5) - 1(2\\cos x + 5) = 0$.',
        '$(2\\cos x - 1)(2\\cos x + 5) = 0$.',
        '$\\cos x = 1/2$ or $\\cos x = -5/2$ (rejected as $|\\cos x| \\le 1$).',
        'For $\\cos x = 1/2$ in $[0, 2\\pi]$, $x = \\pi/3$ or $x = 5\\pi/3$.',
        'Total number of solutions is $2$.'
      ],
      keyConcept: 'Reduction of quadratic trigonometric equations to single variable and boundary filtering.',
      shortcutTip: '$(2\\cos x - 1)(2\\cos x + 5) = 0 \\implies \\cos x = 1/2 \\implies 2$ solutions in $[0, 2\\pi]$.'
    }
  }
];
