import { Question } from '../types';

export const QUESTIONS_2017: Question[] = [
  // Physics 2017
  {
    id: 'jee_2017_phy_01',
    year: 2017,
    shift: 'Offline April 02',
    subject: 'physics',
    section: 'A',
    topic: 'Waves',
    subtopic: 'Doppler Effect in Sound',
    type: 'mcq',
    questionText: 'A source of sound emitting a frequency of $500\\text{ Hz}$ is moving towards a stationary observer with a speed of $30\\text{ m/s}$. The speed of sound in air is $330\\text{ m/s}$. The apparent frequency heard by the observer is:',
    options: [
      '$550\\text{ Hz}$',
      '$458\\text{ Hz}$',
      '$530\\text{ Hz}$',
      '$515\\text{ Hz}$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 60,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $550\\text{ Hz}$',
      formulas: [
        'Doppler formula when source moves towards stationary observer: $f\' = f_0 \\left(\\frac{v}{v - v_s}\\right)$'
      ],
      stepByStep: [
        'Given $f_0 = 500\\text{ Hz}$, $v = 330\\text{ m/s}$, $v_s = 30\\text{ m/s}$.',
        '$f\' = 500 \\times \\left(\\frac{330}{330 - 30}\\right) = 500 \\times \\left(\\frac{330}{300}\\right) = 500 \\times 1.1 = 550\\text{ Hz}$.'
      ],
      keyConcept: 'Doppler frequency compression when source approaches stationary detector.',
      shortcutTip: '$330 / 300 = 11/10$. $500 \\times 1.1 = 550\\text{ Hz}$.'
    }
  },
  {
    id: 'jee_2017_phy_02',
    year: 2017,
    shift: 'Offline April 02',
    subject: 'physics',
    section: 'A',
    topic: 'Semiconductors',
    subtopic: 'Zener Diode Voltage Regulator',
    type: 'mcq',
    questionText: 'A Zener diode having breakdown voltage $V_Z = 6\\text{ V}$ is used as a voltage regulator with an unregulated input voltage of $10\\text{ V}$. If the series current limiting resistor is $200\\,\\Omega$ and load resistance is $1\\,\\text{k}\\Omega$, the current passing through the Zener diode is:',
    options: [
      '$14\\text{ mA}$',
      '$20\\text{ mA}$',
      '$6\\text{ mA}$',
      '$10\\text{ mA}$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 75,
    difficulty: 'Medium',
    solution: {
      finalAnswer: 'Option (A) is correct: $14\\text{ mA}$',
      formulas: [
        'Total current from source: $I_S = \\frac{V_{in} - V_Z}{R_S}$',
        'Load current: $I_L = \\frac{V_Z}{R_L}$',
        'Zener current: $I_Z = I_S - I_L$'
      ],
      stepByStep: [
        'Voltage across series resistor $R_S$: $V_{in} - V_Z = 10\\text{ V} - 6\\text{ V} = 4\\text{ V}$.',
        '$I_S = \\frac{4\\text{ V}}{200\\,\\Omega} = 0.02\\text{ A} = 20\\text{ mA}$.',
        'Current through load $R_L = 1000\\,\\Omega$: $I_L = \\frac{6\\text{ V}}{1000\\,\\Omega} = 6\\text{ mA}$.',
        'By Kirchhoff\'s Current Law, $I_Z = I_S - I_L = 20\\text{ mA} - 6\\text{ mA} = 14\\text{ mA}$.'
      ],
      keyConcept: 'Regulation characteristics and current splitting in Zener diode circuits.',
      shortcutTip: '$I_S = 4/200 = 20\\text{ mA}$. $I_L = 6/1 = 6\\text{ mA}$. $I_Z = 20 - 6 = 14\\text{ mA}$.'
    }
  },

  // Chemistry 2017
  {
    id: 'jee_2017_chem_01',
    year: 2017,
    shift: 'Offline April 02',
    subject: 'chemistry',
    section: 'A',
    topic: 'Solutions',
    subtopic: 'Colligative Properties & Van\'t Hoff Factor',
    type: 'mcq',
    questionText: 'The freezing point depression of a $0.1\\text{ m}$ aqueous solution of a weak monobasic acid $\\text{HA}$ is $0.20\\text{ K}$. If the molal freezing point depression constant of water is $K_f = 1.86\\text{ K}\\cdot\\text{kg/mol}$, the degree of dissociation $\\alpha$ of the acid is approximately:',
    options: [
      '$0.075$ (or $7.5\\%$)',
      '$0.15$ (or $15\\%$)',
      '$0.25$ (or $25\\%$)',
      '$0.035$ (or $3.5\\%$)'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 85,
    difficulty: 'Medium',
    solution: {
      finalAnswer: 'Option (A) is correct: $\\alpha \\approx 0.075$',
      formulas: [
        '$\\Delta T_f = i \\cdot K_f \\cdot m$',
        'For dissociation $\\text{HA} \\rightleftharpoons \\text{H}^+ + \\text{A}^-$, $i = 1 + \\alpha$'
      ],
      stepByStep: [
        'Calculated $i = \\frac{\\Delta T_f}{K_f \\cdot m} = \\frac{0.20}{1.86 \\times 0.1} = \\frac{0.20}{0.186} \\approx 1.0753$.',
        'Since $i = 1 + \\alpha(n - 1) = 1 + \\alpha$ (as $n = 2$ for monobasic acid).',
        '$\\alpha = i - 1 = 1.0753 - 1 = 0.0753 \\approx 7.5\\%$.'
      ],
      keyConcept: 'Freezing point depression relation with Van\'t Hoff factor and degree of ionization.',
      shortcutTip: '$i = 0.20/0.186 = 1.075 \\implies \\alpha = 0.075$.'
    }
  },

  // Mathematics 2017
  {
    id: 'jee_2017_math_01',
    year: 2017,
    shift: 'Offline April 02',
    subject: 'mathematics',
    section: 'A',
    topic: 'Differential Equations',
    subtopic: 'Linear Differential Equation',
    type: 'mcq',
    questionText: 'If the integrating factor of the differential equation $\\frac{dy}{dx} + P(x) y = Q(x)$ is $\\cos x$, then $P(x)$ is equal to:',
    options: [
      '$-\\tan x$',
      '$\\tan x$',
      '$-\\cot x$',
      '$\\cot x$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 50,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $P(x) = -\\tan x$',
      formulas: [
        '$\\text{Integrating Factor (IF)} = e^{\\int P(x) dx}$'
      ],
      stepByStep: [
        'Given $e^{\\int P(x) dx} = \\cos x$.',
        'Take natural logarithm on both sides: $\\int P(x) dx = \\ln(\\cos x)$.',
        'Differentiating both sides with respect to $x$:',
        '$P(x) = \\frac{d}{dx}[\\ln(\\cos x)] = \\frac{1}{\\cos x}(-\\sin x) = -\\tan x$.'
      ],
      keyConcept: 'Definition and differential relation of integrating factor in first-order linear ODEs.',
      shortcutTip: '$P(x) = \\frac{d}{dx}(\\ln(\\text{IF})) = \\frac{d}{dx}(\\ln \\cos x) = -\\tan x$. 10 seconds!'
    }
  }
];
