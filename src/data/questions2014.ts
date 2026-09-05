import { Question } from '../types';

export const QUESTIONS_2014: Question[] = [
  // Physics 2014
  {
    id: 'jee_2014_phy_01',
    year: 2014,
    shift: 'Offline April 06',
    subject: 'physics',
    section: 'A',
    topic: 'Heat & Thermodynamics',
    subtopic: 'Adiabatic Process & Work Done',
    type: 'mcq',
    questionText: 'An ideal monoatomic gas ($\\gamma = 5/3$) initially at temperature $T_1$ is compressed adiabatically to $\\frac{1}{8}$ of its original volume. The final temperature $T_2$ is:',
    options: [
      '$4 T_1$',
      '$8 T_1$',
      '$2 T_1$',
      '$16 T_1$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 55,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $T_2 = 4 T_1$',
      formulas: [
        'Adiabatic relation between temperature and volume: $T V^{\\gamma - 1} = \\text{constant}$'
      ],
      stepByStep: [
        '$T_1 V_1^{\\gamma - 1} = T_2 V_2^{\\gamma - 1}$.',
        'Here $\\gamma - 1 = \\frac{5}{3} - 1 = \\frac{2}{3}$.',
        '$T_2 = T_1 \\left(\\frac{V_1}{V_2}\\right)^{2/3} = T_1 (8)^{2/3} = T_1 (2^3)^{2/3} = T_1 (2^2) = 4 T_1$.'
      ],
      keyConcept: 'Temperature change during adiabatic volumetric compression.',
      shortcutTip: '$8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$. Direct mental math.'
    }
  },
  {
    id: 'jee_2014_phy_02',
    year: 2014,
    shift: 'Offline April 06',
    subject: 'physics',
    section: 'A',
    topic: 'Alternating Current',
    subtopic: 'Series LCR Circuit Resonance',
    type: 'mcq',
    questionText: 'In a series LCR circuit, $R = 10\\,\\Omega$, $L = 0.1\\text{ H}$, and $C = 10\\,\\mu\\text{F}$. The resonant angular frequency $\\omega_0$ and the quality factor $Q$ of the circuit are:',
    options: [
      '$\\omega_0 = 1000\\text{ rad/s},\\; Q = 10$',
      '$\\omega_0 = 100\\text{ rad/s},\\; Q = 10$',
      '$\\omega_0 = 1000\\text{ rad/s},\\; Q = 1$',
      '$\\omega_0 = 500\\text{ rad/s},\\; Q = 5$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 70,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $\\omega_0 = 1000\\text{ rad/s},\\; Q = 10$',
      formulas: [
        'Resonant angular frequency: $\\omega_0 = \\frac{1}{\\sqrt{LC}}$',
        'Quality factor: $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$'
      ],
      stepByStep: [
        '$\\omega_0 = \\frac{1}{\\sqrt{0.1 \\times 10 \\times 10^{-6}}} = \\frac{1}{\\sqrt{10^{-6}}} = \\frac{1}{10^{-3}} = 1000\\text{ rad/s}$.',
        '$Q = \\frac{\\omega_0 L}{R} = \\frac{1000 \\times 0.1}{10} = \\frac{100}{10} = 10$.'
      ],
      keyConcept: 'Resonance frequency and sharpness factor in series tuned LCR circuits.',
      shortcutTip: '$LC = 10^{-6} \\implies \\omega_0 = 1000$. $Q = 100/10 = 10$.'
    }
  },

  // Chemistry 2014
  {
    id: 'jee_2014_chem_01',
    year: 2014,
    shift: 'Offline April 06',
    subject: 'chemistry',
    section: 'A',
    topic: 'Atomic Structure',
    subtopic: 'Bohr Model & Rydberg Formula',
    type: 'mcq',
    questionText: 'The ratio of the energy of a photon emitted in the transition from $n = 2$ to $n = 1$ in a hydrogen atom to that in $\\text{He}^+$ ion is:',
    options: [
      '$1 : 4$',
      '$1 : 2$',
      '$1 : 1$',
      '$1 : 16$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 45,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $1 : 4$',
      formulas: [
        'Transition energy in hydrogen-like species: $\\Delta E = 13.6 \\times Z^2 \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)\\text{ eV}$',
        '$\\Delta E \\propto Z^2$'
      ],
      stepByStep: [
        'Since the transition is identical ($n = 2 \\to 1$), $\\Delta E$ is purely proportional to $Z^2$.',
        'For $\\text{H}$, $Z = 1$. For $\\text{He}^+$, $Z = 2$.',
        '$\\frac{\\Delta E_H}{\\Delta E_{He^+}} = \\frac{1^2}{2^2} = \\frac{1}{4}$.'
      ],
      keyConcept: 'Atomic number $Z$ quadratic scaling of Bohr energy levels.',
      shortcutTip: '$\\Delta E \\propto Z^2 \\implies (1/2)^2 = 1/4$.'
    }
  },

  // Mathematics 2014
  {
    id: 'jee_2014_math_01',
    year: 2014,
    shift: 'Offline April 06',
    subject: 'mathematics',
    section: 'A',
    topic: 'Differential Calculus',
    subtopic: 'Rolle\'s Theorem & Mean Value Theorem',
    type: 'mcq',
    questionText: 'If $f(x) = x^3 - 6x^2 + ax + b$ satisfies the conditions of Rolle\'s theorem on $[1, 3]$ with $c = 2 + \\frac{1}{\\sqrt{3}}$, then:',
    options: [
      '$a = 11,\\; b \\in \\mathbb{R}$',
      '$a = -11,\\; b \\in \\mathbb{R}$',
      '$a = 6,\\; b = 1$',
      '$a = 12,\\; b \\in \\mathbb{R}$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 80,
    difficulty: 'Medium',
    solution: {
      finalAnswer: 'Option (A) is correct: $a = 11$',
      formulas: [
        'Rolle\'s Theorem requires $f\'(c) = 0$ for $c \\in (1, 3)$ and $f(1) = f(3)$.'
      ],
      stepByStep: [
        '$f\'(x) = 3x^2 - 12x + a$.',
        'Setting $f\'(c) = 0$: $3c^2 - 12c + a = 0 \\implies c = \\frac{12 \\pm \\sqrt{144 - 12a}}{6} = 2 \\pm \\sqrt{4 - a/3}$.',
        'Given $c = 2 + \\frac{1}{\\sqrt{3}}$, compare: $\\sqrt{4 - a/3} = \\frac{1}{\\sqrt{3}}$.',
        'Square both sides: $4 - \\frac{a}{3} = \\frac{1}{3} \\implies \\frac{a}{3} = 4 - \\frac{1}{3} = \\frac{11}{3} \\implies a = 11$.',
        'Also check $f(1) = f(3)$: $f(1) = 1 - 6 + 11 + b = 6 + b$; $f(3) = 27 - 54 + 33 + b = 6 + b$. Satisfied for all $b \\in \\mathbb{R}$.'
      ],
      keyConcept: 'Deduction of cubic polynomial coefficients via Rolle\'s stationary point.',
      shortcutTip: '$3c^2 - 12c + a = 0$. For $c = 2 + 1/\\sqrt{3}$, $3(4 + 4/\\sqrt{3} + 1/3) - 12(2 + 1/\\sqrt{3}) + a = 13 - 24 + a = 0 \\implies a = 11$.'
    }
  }
];
