import { Question } from '../types';

export const QUESTIONS_2020: Question[] = [
  // Physics 2020
  {
    id: 'jee_2020_phy_01',
    year: 2020,
    shift: 'Jan 07 Shift 1',
    subject: 'physics',
    section: 'A',
    topic: 'Magnetic Effects of Current',
    subtopic: 'Axial Field of Circular Current Loop',
    type: 'mcq',
    questionText: 'A circular coil of radius $R$ carries an electric current $I$. The magnetic field at its center is $B_0$. At what distance along the axis from the center of the coil does the magnetic field drop to $\\frac{B_0}{8}$?',
    options: [
      '$\\sqrt{3}R$',
      '$2R$',
      '$\\sqrt{7}R$',
      '$3R$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 85,
    difficulty: 'Medium',
    solution: {
      finalAnswer: 'Option (A) is correct: $\\sqrt{3}R$',
      formulas: [
        '$B(x) = \\frac{\\mu_0 I R^2}{2(R^2 + x^2)^{3/2}}$',
        'At center ($x = 0$): $B_0 = \\frac{\\mu_0 I}{2R}$'
      ],
      stepByStep: [
        'The axial field is $B(x) = \\frac{B_0 R^3}{(R^2 + x^2)^{3/2}}$.',
        'We require $B(x) = \\frac{B_0}{8}$:',
        '$\\frac{R^3}{(R^2 + x^2)^{3/2}} = \\frac{1}{8}$.',
        'Invert both sides: $\\left(\\frac{R^2 + x^2}{R^2}\\right)^{3/2} = 8$.',
        'Take the $2/3$ power on both sides: $1 + \\frac{x^2}{R^2} = (8)^{2/3} = (2^3)^{2/3} = 4$.',
        '$\\frac{x^2}{R^2} = 4 - 1 = 3 \\implies x^2 = 3R^2 \\implies x = \\sqrt{3}R$.'
      ],
      keyConcept: 'Biot-Savart law application to axial magnetic field of a current loop.',
      shortcutTip: '$1 + (x/R)^2 = 8^{2/3} = 4 \\implies (x/R)^2 = 3 \\implies x = \\sqrt{3}R$.'
    }
  },
  {
    id: 'jee_2020_phy_02',
    year: 2020,
    shift: 'Sept 03 Shift 1',
    subject: 'physics',
    section: 'A',
    topic: 'Waves & Oscillations',
    subtopic: 'Simple Harmonic Motion & Time Period',
    type: 'mcq',
    questionText: 'A particle executes simple harmonic motion with an amplitude $A$ and time period $T$. The minimum time taken by the particle to travel from $x = 0$ to $x = \\frac{A}{\\sqrt{2}}$ is:',
    options: [
      '$\\frac{T}{8}$',
      '$\\frac{T}{4}$',
      '$\\frac{T}{6}$',
      '$\\frac{T}{12}$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 50,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $T/8$',
      formulas: [
        '$x(t) = A \\sin(\\omega t)$ with $\\omega = \\frac{2\\pi}{T}$'
      ],
      stepByStep: [
        'At $t = 0$, $x = 0$ (mean position).',
        'We want $x = \\frac{A}{\\sqrt{2}} \\implies A \\sin(\\omega t) = \\frac{A}{\\sqrt{2}}$.',
        '$\\sin(\\omega t) = \\frac{1}{\\sqrt{2}} \\implies \\omega t = \\frac{\\pi}{4}$.',
        'Since $\\omega = \\frac{2\\pi}{T}$: $\\frac{2\\pi}{T} t = \\frac{\\pi}{4} \\implies t = \\frac{T}{8}$.'
      ],
      keyConcept: 'Kinematics of simple harmonic oscillators.',
      shortcutTip: 'Phase angle $\\phi = 45^\\circ = 360^\\circ / 8 \\implies t = T/8$.'
    }
  },
  {
    id: 'jee_2020_phy_num_01',
    year: 2020,
    shift: 'Jan 09 Shift 2',
    subject: 'physics',
    section: 'B',
    topic: 'Geometrical Optics',
    subtopic: 'Refraction through Thin Convex Lens',
    type: 'numerical',
    questionText: 'An object is placed at a distance of $20\\text{ cm}$ in front of a convex lens of focal length $10\\text{ cm}$. The image distance $v$ from the lens in centimeters is:',
    correctAnswer: '20',
    benchmarkTimeSeconds: 45,
    difficulty: 'Easy',
    solution: {
      finalAnswer: '20',
      formulas: [
        '$\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}$'
      ],
      stepByStep: [
        'Using Cartesian sign convention: $u = -20\\text{ cm}$, $f = +10\\text{ cm}$.',
        '$\\frac{1}{v} = \\frac{1}{f} + \\frac{1}{u} = \\frac{1}{10} + \\frac{1}{-20} = \\frac{2 - 1}{20} = \\frac{1}{20}$.',
        '$v = +20\\text{ cm}$.',
        'Notice that the object is at $2f = 2 \\times 10 = 20\\text{ cm}$, so real inverted image forms at $2f = 20\\text{ cm}$.'
      ],
      keyConcept: 'Thin lens formula and symmetric conjugate foci at $2f$.',
      shortcutTip: 'Object at $2f \\implies$ image at $2f = 20\\text{ cm}$.'
    }
  },

  // Chemistry 2020
  {
    id: 'jee_2020_chem_01',
    year: 2020,
    shift: 'Sept 02 Shift 2',
    subject: 'chemistry',
    section: 'A',
    topic: 'Periodic Properties',
    subtopic: 'First Ionization Enthalpy Trends',
    type: 'mcq',
    questionText: 'The correct order of first ionization enthalpy ($\\Delta_i H_1$) for the elements $\\text{B}$, $\\text{C}$, $\\text{N}$, and $\\text{O}$ is:',
    options: [
      '$\\text{B} < \\text{C} < \\text{O} < \\text{N}$',
      '$\\text{B} < \\text{C} < \\text{N} < \\text{O}$',
      '$\\text{C} < \\text{B} < \\text{N} < \\text{O}$',
      '$\\text{O} < \\text{N} < \\text{C} < \\text{B}$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 60,
    difficulty: 'Medium',
    solution: {
      finalAnswer: 'Option (A) is correct: $\\text{B} < \\text{C} < \\text{O} < \\text{N}$',
      formulas: [
        'Electronic configurations:\nB: $2s^2 2p^1$, C: $2s^2 2p^2$, N: $2s^2 2p^3$ (half-filled), O: $2s^2 2p^4$'
      ],
      stepByStep: [
        'Across a period from left to right, ionization enthalpy generally increases with effective nuclear charge.',
        'However, Nitrogen has a stable half-filled $2p^3$ subshell, requiring significantly higher energy to remove an electron than Oxygen ($2p^4$).',
        'In Oxygen, pairing of electrons in one of the $2p$ orbitals creates electron-electron repulsion, making removal of that electron easier.',
        'Hence, $\\Delta_i H(\\text{O}) < \\Delta_i H(\\text{N})$.',
        'The overall sequence is $\\text{B} < \\text{C} < \\text{O} < \\text{N}$.'
      ],
      keyConcept: 'Ionization enthalpy anomalies due to half-filled subshell stability.',
      shortcutTip: 'Remember the classic second-period order: $\\text{Li} < \\text{B} < \\text{Be} < \\text{C} < \\text{O} < \\text{N} < \\text{F} < \\text{Ne}$.'
    }
  },
  {
    id: 'jee_2020_chem_02',
    year: 2020,
    shift: 'Jan 08 Shift 1',
    subject: 'chemistry',
    section: 'A',
    topic: 'Biomolecules',
    subtopic: 'Carbohydrates & Glycosidic Linkages',
    type: 'mcq',
    questionText: 'Maltose is a disaccharide composed of two D-glucose units linked together through:',
    options: [
      '$\\alpha$-1,4-glycosidic linkage',
      '$\\beta$-1,4-glycosidic linkage',
      '$\\alpha$-1,6-glycosidic linkage',
      '$\\alpha,\\beta$-1,2-glycosidic linkage'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 45,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $\\alpha$-1,4-glycosidic linkage',
      formulas: [
        'Maltose = $\\alpha$-D-glucopyranosyl-(1$\\to$4)-$\\alpha$-D-glucopyranose'
      ],
      stepByStep: [
        'Maltose consists of two $\\alpha$-D-glucose units.',
        'The linkage is formed between the anomeric C1 carbon of the first glucose molecule and the C4 hydroxyl group of the second glucose unit.',
        'Because both units have $\\alpha$ orientation at the junction, it is an $\\alpha$-1,4-glycosidic linkage.'
      ],
      keyConcept: 'Glycosidic linkages in disaccharides (Maltose vs Lactose vs Sucrose).',
      shortcutTip: 'Maltose: $\\alpha$-(1,4); Lactose: $\\beta$-(1,4); Sucrose: $\\alpha, \\beta$-(1,2).'
    }
  },
  {
    id: 'jee_2020_chem_num_01',
    year: 2020,
    shift: 'Sept 04 Shift 2',
    subject: 'chemistry',
    section: 'B',
    topic: 'Physical Chemistry',
    subtopic: 'pH of Strong Acid Mixtures',
    type: 'numerical',
    questionText: 'The pH of a $10^{-8}\\text{ M}$ aqueous $\\text{HCl}$ solution at $25^\\circ\\text{C}$ taking into account the auto-ionization of water is approximately: (Round off to one decimal place, e.g. 7.0 or 6.98 -> 7.0):',
    correctAnswer: '7.0',
    benchmarkTimeSeconds: 70,
    difficulty: 'Medium',
    solution: {
      finalAnswer: '7.0',
      formulas: [
        '$[\\text{H}^+] = [\\text{H}^+]_{\\text{acid}} + [\\text{H}^+]_{\\text{water}}$',
        '$K_w = [\\text{H}^+][\\text{OH}^-] = 10^{-14}$'
      ],
      stepByStep: [
        'In very dilute acid solutions ($< 10^{-6}\\text{ M}$), $[\\text{H}^+]$ from the dissociation of water cannot be ignored.',
        'Let $[\\text{H}^+]_{\\text{water}} = x = [\\text{OH}^-]$.',
        'Total $[\\text{H}^+] = 10^{-8} + x$.',
        '$(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.',
        'Solving the quadratic: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} \\approx 0.95 \\times 10^{-7}$.',
        'Total $[\\text{H}^+] = 10^{-8} + 0.95 \\times 10^{-7} = 1.05 \\times 10^{-7}\\text{ M}$.',
        '$\\text{pH} = -\\log(1.05 \\times 10^{-7}) = 7 - \\log(1.05) \\approx 7 - 0.02 = 6.98 \\approx 7.0$.'
      ],
      keyConcept: 'Common ion effect and contribution of water in dilute acid solutions.',
      shortcutTip: 'Dilute acid is always slightly acidic: between 6.9 and 7.0, never basic!'
    }
  },

  // Mathematics 2020
  {
    id: 'jee_2020_math_01',
    year: 2020,
    shift: 'Sept 04 Shift 1',
    subject: 'mathematics',
    section: 'A',
    topic: 'Complex Numbers',
    subtopic: 'Modulus & Triangle Inequalities',
    type: 'mcq',
    questionText: 'If a complex number $z$ satisfies $|z - \\frac{4}{z}| = 2$, then the maximum value of $|z|$ is:',
    options: [
      '$\\sqrt{5} + 1$',
      '$\\sqrt{5} - 1$',
      '$2$',
      '$\\sqrt{3} + 1$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 85,
    difficulty: 'Medium',
    solution: {
      finalAnswer: 'Option (A) is correct: $\\sqrt{5} + 1$',
      formulas: [
        'Triangle inequality: $|z_1| - |z_2| \\le |z_1 - z_2| \\le |z_1| + |z_2|$'
      ],
      stepByStep: [
        'From triangle inequality: $|z| = |z - \\frac{4}{z} + \\frac{4}{z}| \\le |z - \\frac{4}{z}| + |\\frac{4}{z}|$.',
        'Substitute given condition $|z - \\frac{4}{z}| = 2$:',
        '$|z| \\le 2 + \\frac{4}{|z|}$.',
        'Let $R = |z| > 0$. Then $R \\le 2 + \\frac{4}{R}$.',
        'Multiplying by $R$: $R^2 - 2R - 4 \\le 0$.',
        'The roots of $R^2 - 2R - 4 = 0$ are $R = \\frac{2 \\pm \\sqrt{4 - 4(1)(-4)}}{2} = \\frac{2 \\pm \\sqrt{20}}{2} = 1 \\pm \\sqrt{5}$.',
        'Since $R > 0$, the range is $1 - \\sqrt{5}$ (negative) to $\\sqrt{5} + 1$.',
        'Thus, the maximum value of $|z|$ is $\\sqrt{5} + 1$.'
      ],
      keyConcept: 'Triangle inequalities and bounds on complex modulus.',
      shortcutTip: '$R^2 - 2R - 4 \\le 0 \\implies R_{\\max} = 1 + \\sqrt{1 + 4} = 1 + \\sqrt{5}$.'
    }
  },
  {
    id: 'jee_2020_math_02',
    year: 2020,
    shift: 'Jan 07 Shift 2',
    subject: 'mathematics',
    section: 'A',
    topic: 'Trigonometry',
    subtopic: 'Inverse Trigonometric Identities',
    type: 'mcq',
    questionText: 'The value of $\\tan\\left(2 \\tan^{-1}\\left(\\frac{1}{5}\\right) - \\frac{\\pi}{4}\\right)$ is:',
    options: [
      '$-\\frac{7}{17}$',
      '$\\frac{7}{17}$',
      '$\\frac{17}{7}$',
      '$-\\frac{17}{7}$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 75,
    difficulty: 'Medium',
    solution: {
      finalAnswer: 'Option (A) is correct: $-7/17$',
      formulas: [
        '$2 \\tan^{-1} x = \\tan^{-1}\\left(\\frac{2x}{1 - x^2}\\right)$',
        '$\\tan(A - B) = \\frac{\\tan A - \\tan B}{1 + \\tan A \\tan B}$'
      ],
      stepByStep: [
        'First calculate $\\tan(2 \\tan^{-1}(1/5))$:',
        'Let $\\theta = \\tan^{-1}(1/5)$. Then $\\tan(2\\theta) = \\frac{2(1/5)}{1 - (1/5)^2} = \\frac{2/5}{24/25} = \\frac{2}{5} \\times \\frac{25}{24} = \\frac{5}{12}$.',
        'Now evaluate $\\tan\\left(2\\theta - \\frac{\\pi}{4}\\right)$ using subtraction formula with $\\tan(\\pi/4) = 1$:',
        '$\\tan\\left(2\\theta - \\frac{\\pi}{4}\\right) = \\frac{\\tan 2\\theta - 1}{1 + \\tan 2\\theta \\times 1} = \\frac{\\frac{5}{12} - 1}{1 + \\frac{5}{12}} = \\frac{-7/12}{17/12} = -\\frac{7}{17}$.'
      ],
      keyConcept: 'Double angle inverse tangent identities and subtraction formulas.',
      shortcutTip: '$\\frac{5/12 - 1}{1 + 5/12} = -\\frac{7}{17}$.'
    }
  },
  {
    id: 'jee_2020_math_num_01',
    year: 2020,
    shift: 'Sept 05 Shift 1',
    subject: 'mathematics',
    section: 'B',
    topic: 'Differential Calculus',
    subtopic: 'Local Extrema of Polynomials',
    type: 'numerical',
    questionText: 'The function $f(x) = 2x^3 - 9x^2 + 12x + 5$ attains its local minimum at $x = $:',
    correctAnswer: '2',
    benchmarkTimeSeconds: 60,
    difficulty: 'Easy',
    solution: {
      finalAnswer: '2',
      formulas: [
        'First derivative condition: $f\'(x) = 0$',
        'Second derivative test: $f\'\'(x) > 0$ for local minimum'
      ],
      stepByStep: [
        'Differentiate $f(x)$:',
        '$f\'(x) = 6x^2 - 18x + 12 = 6(x^2 - 3x + 2) = 6(x - 1)(x - 2)$.',
        'Critical points: $x = 1$ and $x = 2$.',
        'Compute second derivative: $f\'\'(x) = 12x - 18$.',
        'At $x = 1$: $f\'\'(1) = 12(1) - 18 = -6 < 0$ (Local maximum).',
        'At $x = 2$: $f\'\'(2) = 12(2) - 18 = +6 > 0$ (Local minimum).',
        'Therefore, local minimum occurs at $x = 2$.'
      ],
      keyConcept: 'Critical points and second derivative test.',
      shortcutTip: 'Roots of $x^2 - 3x + 2 = 0$ are 1 and 2; larger root of positive cubic is local minimum $\\implies x = 2$.'
    }
  }
];
