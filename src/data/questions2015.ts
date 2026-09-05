import { Question } from '../types';

export const QUESTIONS_2015: Question[] = [
  // Physics 2015
  {
    id: 'jee_2015_phy_01',
    year: 2015,
    shift: 'Offline April 04',
    subject: 'physics',
    section: 'A',
    topic: 'Ray Optics',
    subtopic: 'Refraction through Prism & Minimum Deviation',
    type: 'mcq',
    questionText: 'A monochromatic light is incident at an angle of incidence $i = 45^\\circ$ on an equilateral glass prism of refractive index $\\mu = \\sqrt{2}$. The angle of deviation produced by the prism is:',
    options: [
      '$30^\\circ$',
      '$45^\\circ$',
      '$60^\\circ$',
      '$15^\\circ$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 75,
    difficulty: 'Medium',
    solution: {
      finalAnswer: 'Option (A) is correct: $30^\\circ$',
      formulas: [
        'Snell\'s Law: $\\sin i = \\mu \\sin r_1$',
        'Prism relation: $r_1 + r_2 = A$',
        'Deviation: $\\delta = i + e - A$'
      ],
      stepByStep: [
        'For equilateral prism, refracting angle $A = 60^\\circ$.',
        'At first surface: $\\sin 45^\\circ = \\sqrt{2} \\sin r_1 \\implies \\frac{1}{\\sqrt{2}} = \\sqrt{2} \\sin r_1 \\implies \\sin r_1 = \\frac{1}{2} \\implies r_1 = 30^\\circ$.',
        'Inside the prism: $r_2 = A - r_1 = 60^\\circ - 30^\\circ = 30^\\circ$.',
        'Since $r_1 = r_2 = 30^\\circ$, this is the condition for minimum deviation (symmetrical passage).',
        'Therefore, emergence angle $e = i = 45^\\circ$.',
        'Deviation $\\delta = i + e - A = 45^\\circ + 45^\\circ - 60^\\circ = 30^\\circ$.'
      ],
      keyConcept: 'Symmetrical ray propagation during minimum deviation through a triangular prism.',
      shortcutTip: '$r_1 = 30^\\circ = A/2 \\implies$ ray travels parallel to base $\\implies \\delta = 2i - A = 90^\\circ - 60^\\circ = 30^\\circ$.'
    }
  },
  {
    id: 'jee_2015_phy_02',
    year: 2015,
    shift: 'Offline April 04',
    subject: 'physics',
    section: 'A',
    topic: 'Fluid Mechanics',
    subtopic: 'Terminal Velocity & Stokes\' Law',
    type: 'mcq',
    questionText: 'Two spherical raindrops of radii in the ratio $1 : 2$ fall vertically through air with their respective terminal velocities. The ratio of their terminal velocities $v_1 / v_2$ is:',
    options: [
      '$1 : 4$',
      '$1 : 2$',
      '$1 : 8$',
      '$1 : 16$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 45,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $1 : 4$',
      formulas: [
        'Terminal velocity: $v_t = \\frac{2r^2(\\rho - \\sigma)g}{9\\eta}$',
        '$v_t \\propto r^2$'
      ],
      stepByStep: [
        'Since both droplets fall in the same medium (air) and have the same density (water), all parameters except radius $r$ are constant.',
        'Thus, $\\frac{v_1}{v_2} = \\left(\\frac{r_1}{r_2}\\right)^2 = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$.'
      ],
      keyConcept: 'Terminal velocity quadratic dependence on droplet radius from Stokes\' law and buoyancy.',
      shortcutTip: '$v_t \\propto r^2 \\implies (1/2)^2 = 1/4$.'
    }
  },

  // Chemistry 2015
  {
    id: 'jee_2015_chem_01',
    year: 2015,
    shift: 'Offline April 04',
    subject: 'chemistry',
    section: 'A',
    topic: 'Chemical Kinetics',
    subtopic: 'Arrhenius Equation & Activation Energy',
    type: 'mcq',
    questionText: 'The rate constant $k$ of a reaction is given by $\\ln k = 14.34 - \\frac{1.25 \\times 10^4}{T}$. The activation energy $E_a$ of this reaction in $\\text{kJ/mol}$ is approximately (take $R = 8.314\\text{ J/mol}\\cdot\\text{K}$):',
    options: [
      '$103.9\\text{ kJ/mol}$',
      '$125.0\\text{ kJ/mol}$',
      '$14.34\\text{ kJ/mol}$',
      '$83.14\\text{ kJ/mol}$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 70,
    difficulty: 'Medium',
    solution: {
      finalAnswer: 'Option (A) is correct: $103.9\\text{ kJ/mol}$',
      formulas: [
        'Arrhenius equation: $\\ln k = \\ln A - \\frac{E_a}{R T}$'
      ],
      stepByStep: [
        'Comparing the given equation $\\ln k = 14.34 - \\frac{1.25 \\times 10^4}{T}$ with the standard form:',
        '$\\frac{E_a}{R} = 1.25 \\times 10^4\\text{ K}$.',
        '$E_a = (1.25 \\times 10^4) \\times 8.314\\text{ J/mol} = 103,925\\text{ J/mol} \\approx 103.9\\text{ kJ/mol}$.'
      ],
      keyConcept: 'Equating coefficients in the logarithmic Arrhenius expression.',
      shortcutTip: '$E_a = 12500 \\times 8.314 \\approx 103.9\\text{ kJ/mol}$.'
    }
  },

  // Mathematics 2015
  {
    id: 'jee_2015_math_01',
    year: 2015,
    shift: 'Offline April 04',
    subject: 'mathematics',
    section: 'A',
    topic: 'Binomial Theorem',
    subtopic: 'Term Independent of x',
    type: 'mcq',
    questionText: 'The term independent of $x$ in the binomial expansion of $\\left(x - \\frac{1}{x}\\right)^{10}$ is:',
    options: [
      '$-252$',
      '$252$',
      '$-210$',
      '$210$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 60,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $-252$',
      formulas: [
        'General term $T_{r+1} = \\binom{n}{r} a^{n-r} b^r$'
      ],
      stepByStep: [
        '$T_{r+1} = \\binom{10}{r} x^{10-r} (-x^{-1})^r = (-1)^r \\binom{10}{r} x^{10 - 2r}$.',
        'For term independent of $x$, exponent of $x$ must be zero: $10 - 2r = 0 \\implies 2r = 10 \\implies r = 5$.',
        'Then $T_6 = (-1)^5 \\binom{10}{5} = -\\frac{10 \\times 9 \\times 8 \\times 7 \\times 6}{5 \\times 4 \\times 3 \\times 2 \\times 1} = -252$.'
      ],
      keyConcept: 'Finding the constant/independent term in symmetric negative binomial expansions.',
      shortcutTip: '$r = 10/2 = 5$. Since $r$ is odd, sign is negative: $-\\binom{10}{5} = -252$.'
    }
  }
];
