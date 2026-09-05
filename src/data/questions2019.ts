import { Question } from '../types';

export const QUESTIONS_2019: Question[] = [
  // Physics 2019
  {
    id: 'jee_2019_phy_01',
    year: 2019,
    shift: 'Jan 09 Shift 1',
    subject: 'physics',
    section: 'A',
    topic: 'Electrostatics',
    subtopic: 'Electric Field & Gauss Law',
    type: 'mcq',
    questionText: 'Three charges $+Q$, $q$, $+Q$ are placed respectively at distance $0$, $d/2$, and $d$ along a straight line. If the net potential energy of this three-charge system is zero, the ratio $q/Q$ is:',
    options: [
      '$-1/4$',
      '$-1/2$',
      '$-2$',
      '$-1/8$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 80,
    difficulty: 'Medium',
    solution: {
      finalAnswer: 'Option (A) is correct: $q/Q = -1/4$',
      formulas: [
        'Electrostatic potential energy of pair: $U = \\frac{1}{4\\pi \\epsilon_0} \\frac{q_1 q_2}{r}$',
        'Total potential energy $U_{total} = U_{12} + U_{23} + U_{13} = 0$'
      ],
      stepByStep: [
        'Positions: $q_1 = +Q$ at $x = 0$, $q_2 = q$ at $x = d/2$, $q_3 = +Q$ at $x = d$.',
        '$U_{12} = \\frac{k Q q}{d/2} = \\frac{2kQq}{d}$.',
        '$U_{23} = \\frac{k q Q}{d/2} = \\frac{2kQq}{d}$.',
        '$U_{13} = \\frac{k Q^2}{d}$.',
        'Sum: $U_{total} = \\frac{2kQq}{d} + \\frac{2kQq}{d} + \\frac{kQ^2}{d} = \\frac{4kQq + kQ^2}{d} = 0$.',
        '$4q + Q = 0 \\implies 4q = -Q \\implies \\frac{q}{Q} = -\\frac{1}{4}$.'
      ],
      keyConcept: 'System electrostatic potential energy as scalar sum of all interaction pairs.',
      shortcutTip: '$4q + Q = 0 \\implies q/Q = -1/4$. Solvable in 20 seconds.'
    }
  },
  {
    id: 'jee_2019_phy_02',
    year: 2019,
    shift: 'Jan 10 Shift 2',
    subject: 'physics',
    section: 'A',
    topic: 'Optics',
    subtopic: 'Young\'s Double Slit Experiment',
    type: 'mcq',
    questionText: 'In a Young\'s double-slit experiment, the slits are separated by $0.3\\text{ mm}$ and the screen is placed $1.5\\text{ m}$ away. A beam of light consisting of two wavelengths $600\\text{ nm}$ and $480\\text{ nm}$ is used. What is the minimum distance from the central maximum where the bright fringes due to both wavelengths coincide?',
    options: [
      '$12.0\\text{ mm}$',
      '$9.6\\text{ mm}$',
      '$6.0\\text{ mm}$',
      '$15.0\\text{ mm}$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 90,
    difficulty: 'Medium',
    solution: {
      finalAnswer: 'Option (A) is correct: $12.0\\text{ mm}$',
      formulas: [
        'Position of $n$-th bright fringe: $y_n = \\frac{n\\lambda D}{d}$',
        'Coincidence condition: $n_1 \\lambda_1 = n_2 \\lambda_2$'
      ],
      stepByStep: [
        '$n_1 (600\\text{ nm}) = n_2 (480\\text{ nm}) \\implies \\frac{n_1}{n_2} = \\frac{480}{600} = \\frac{4}{5}$.',
        'Smallest integers are $n_1 = 4$ and $n_2 = 5$.',
        '$y = \\frac{n_1 \\lambda_1 D}{d} = \\frac{4 \\times (600 \\times 10^{-9}) \\times 1.5}{0.3 \\times 10^{-3}}$.',
        '$y = \\frac{3.6 \\times 10^{-6}}{0.3 \\times 10^{-3}} = 12 \\times 10^{-3}\\text{ m} = 12.0\\text{ mm}$.'
      ],
      keyConcept: 'Overlapping condition of interference fringes from composite monochromatic sources.',
      shortcutTip: 'Ratio $\\frac{\\lambda_1}{\\lambda_2} = \\frac{5}{4} \\implies n_1 = 4$. $y = 4 \\beta_1 = 4 \\times 3\\text{ mm} = 12\\text{ mm}$.'
    }
  },
  {
    id: 'jee_2019_phy_03',
    year: 2019,
    shift: 'April 08 Shift 1',
    subject: 'physics',
    section: 'B',
    topic: 'Rotational Motion',
    subtopic: 'Rolling Without Slipping',
    type: 'numerical',
    questionText: 'A solid cylinder of mass $2\\text{ kg}$ and radius $0.2\\text{ m}$ rolls without slipping down an inclined plane of inclination $30^\\circ$. Taking $g = 10\\text{ m/s}^2$, the acceleration of the center of mass of the cylinder along the incline in $\\text{m/s}^2$ is (round to 2 decimal places):',
    correctAnswer: '3.33',
    benchmarkTimeSeconds: 85,
    difficulty: 'Medium',
    solution: {
      finalAnswer: 'Correct answer: $3.33\\text{ m/s}^2$',
      formulas: [
        'Linear acceleration of rolling body: $a = \\frac{g \\sin\\theta}{1 + I/(MR^2)}$',
        'For solid cylinder: $I = \\frac{1}{2}MR^2 \\implies \\frac{I}{MR^2} = \\frac{1}{2}$'
      ],
      stepByStep: [
        '$a = \\frac{g \\sin 30^\\circ}{1 + 1/2} = \\frac{10 \\times (0.5)}{3/2} = \\frac{5}{1.5} = \\frac{10}{3}\\text{ m/s}^2$.',
        '$\\frac{10}{3} \\approx 3.33\\text{ m/s}^2$.'
      ],
      keyConcept: 'Pure rolling motion on an inclined surface with moment of inertia contribution.',
      shortcutTip: 'Solid cylinder always rolls with acceleration $\\frac{2}{3} g\\sin\\theta = \\frac{2}{3} (5) = 3.33\\text{ m/s}^2$.'
    }
  },

  // Chemistry 2019
  {
    id: 'jee_2019_chem_01',
    year: 2019,
    shift: 'Jan 11 Shift 1',
    subject: 'chemistry',
    section: 'A',
    topic: 'Coordination Compounds',
    subtopic: 'Crystal Field Splitting & Magnetic Moment',
    type: 'mcq',
    questionText: 'The magnetic moment of an octahedral complex $[\\text{CoF}_6]^{3-}$ in Bohr Magnetons (BM) is approximately (Atomic number of $\\text{Co} = 27$):',
    options: [
      '$4.90\\text{ BM}$',
      '$0.00\\text{ BM}$',
      '$2.83\\text{ BM}$',
      '$3.87\\text{ BM}$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 65,
    difficulty: 'Medium',
    solution: {
      finalAnswer: 'Option (A) is correct: $4.90\\text{ BM}$',
      formulas: [
        'Spin-only magnetic moment: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$',
        'Co has atomic number 27: $[\\text{Ar}] 3d^7 4s^2$'
      ],
      stepByStep: [
        'Oxidation state of Co in $[\\text{CoF}_6]^{3-}$ is $+3$: $\\text{Co}^{3+} \\implies 3d^6$.',
        'Fluoride ($\\text{F}^-$) is a weak field ligand according to the spectrochemical series.',
        'Therefore, $\\Delta_o < P$ (pairing energy), resulting in high spin.',
        'Electron configuration: $t_{2g}^4 e_g^2$, which has $n = 4$ unpaired electrons.',
        '$\\mu = \\sqrt{4(4+2)} = \\sqrt{24} \\approx 4.90\\text{ BM}$.'
      ],
      keyConcept: 'Crystal field theory for weak-field octahedral complexes and spin-only formula.',
      shortcutTip: '$n=4$ unpaired electrons always gives $\\mu \\approx 4.90\\text{ BM}$.'
    }
  },
  {
    id: 'jee_2019_chem_02',
    year: 2019,
    shift: 'April 09 Shift 2',
    subject: 'chemistry',
    section: 'A',
    topic: 'Organic Chemistry',
    subtopic: 'Aldol & Cannizzaro Reactions',
    type: 'mcq',
    questionText: 'Which of the following compounds will undergo Cannizzaro reaction when heated with concentrated alkali?',
    options: [
      '2,2-Dimethylpropanal (Trimethylacetaldehyde)',
      'Ethanal (Acetaldehyde)',
      '2-Methylpropanal',
      'Propanal'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 45,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: 2,2-Dimethylpropanal',
      formulas: [
        'Cannizzaro reaction occurs in aldehydes lacking $\\alpha$-hydrogen atoms.'
      ],
      stepByStep: [
        'Aldehydes containing $\\alpha$-hydrogen undergo aldol condensation in basic media.',
        '2,2-Dimethylpropanal $(\\text{CH}_3)_3\\text{C}-\\text{CHO}$ has no hydrogen attached to the $\\alpha$-carbon.',
        'Consequently, it undergoes disproportionation (Cannizzaro reaction) to form neopentyl alcohol and potassium pivalate.'
      ],
      keyConcept: 'Substrate specificity for Cannizzaro disproportionation vs Aldol addition.',
      shortcutTip: 'Zero $\\alpha$-hydrogens $\\implies$ Cannizzaro reaction.'
    }
  },

  // Mathematics 2019
  {
    id: 'jee_2019_math_01',
    year: 2019,
    shift: 'Jan 12 Shift 1',
    subject: 'mathematics',
    section: 'A',
    topic: 'Matrices & Determinants',
    subtopic: 'Properties of Determinants & System of Equations',
    type: 'mcq',
    questionText: 'If the system of linear equations $x + y + z = 5$, $x + 2y + 3z = 9$, $x + 3y + \\alpha z = \\beta$ has infinitely many solutions, then $\\beta - \\alpha$ is equal to:',
    options: [
      '$8$',
      '$5$',
      '$18$',
      '$-8$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 90,
    difficulty: 'Medium',
    solution: {
      finalAnswer: 'Option (A) is correct: $\\beta - \\alpha = 8$',
      formulas: [
        'Infinitely many solutions condition: $\\Delta = \\Delta_x = \\Delta_y = \\Delta_z = 0$',
        'Or by row operations: $R_3 - 2R_2 + R_1 = 0$'
      ],
      stepByStep: [
        'Notice: $2 \\times (\\text{Eq } 2) - (\\text{Eq } 1)$ gives: $2(x+2y+3z) - (x+y+z) = x + 3y + 5z = 2(9) - 5 = 13$.',
        'For infinitely many solutions, Eq 3 ($x + 3y + \\alpha z = \\beta$) must be identical to this combination.',
        'Therefore, $\\alpha = 5$ and $\\beta = 13$.',
        'Then $\\beta - \\alpha = 13 - 5 = 8$.'
      ],
      keyConcept: 'Linear dependence of equations for consistency with infinite solutions.',
      shortcutTip: 'Use linear combination $2 \\times E_2 - E_1 = E_3$. Bypasses determinants completely in 15 seconds!'
    }
  },
  {
    id: 'jee_2019_math_02',
    year: 2019,
    shift: 'April 10 Shift 2',
    subject: 'mathematics',
    section: 'A',
    topic: 'Integral Calculus',
    subtopic: 'Definite Integrals & King\'s Property',
    type: 'mcq',
    questionText: 'The value of the definite integral $\\int_{0}^{\\pi/2} \\frac{\\sin^3 x}{\\sin^3 x + \\cos^3 x}\\,dx$ is equal to:',
    options: [
      '$\\frac{\\pi}{4}$',
      '$\\frac{\\pi}{2}$',
      '$\\frac{\\pi}{8}$',
      '$0$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 45,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $\\frac{\\pi}{4}$',
      formulas: [
        'King\'s Property: $\\int_a^b f(x)dx = \\int_a^b f(a + b - x)dx$'
      ],
      stepByStep: [
        'Let $I = \\int_{0}^{\\pi/2} \\frac{\\sin^3 x}{\\sin^3 x + \\cos^3 x}\\,dx$.',
        'Applying $x \\to \\frac{\\pi}{2} - x$ gives $I = \\int_{0}^{\\pi/2} \\frac{\\cos^3 x}{\\cos^3 x + \\sin^3 x}\\,dx$.',
        'Adding both: $2I = \\int_0^{\\pi/2} \\frac{\\sin^3 x + \\cos^3 x}{\\sin^3 x + \\cos^3 x}\\,dx = \\int_0^{\\pi/2} 1\\,dx = \\frac{\\pi}{2}$.',
        '$I = \\frac{\\pi}{4}$.'
      ],
      keyConcept: 'Symmetric complementary substitution in definite integrals.',
      shortcutTip: 'For any $f(x)$ with $\\int_0^{\\pi/2} \\frac{f(x)}{f(x)+f(\\pi/2-x)}dx$, value is always $\\frac{\\pi/2 - 0}{2} = \\frac{\\pi}{4}$.'
    }
  }
];
