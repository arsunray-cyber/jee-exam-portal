import { Question } from '../types';

export const QUESTIONS_2024: Question[] = [
  // Physics 2024
  {
    id: 'jee_2024_phy_01',
    year: 2024,
    shift: 'Jan 27 Shift 1',
    subject: 'physics',
    section: 'A',
    topic: 'Modern Physics',
    subtopic: 'De Broglie Wavelength & Dual Nature',
    type: 'mcq',
    questionText: 'An electron and a proton are accelerated from rest through the same potential difference $V$. The ratio of their de Broglie wavelengths $\\lambda_e / \\lambda_p$ is proportional to:',
    options: [
      '$\\sqrt{\\frac{m_p}{m_e}}$',
      '$\\sqrt{\\frac{m_e}{m_p}}$',
      '$\\frac{m_p}{m_e}$',
      'Independent of mass'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 75,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $\\lambda_e / \\lambda_p = \\sqrt{m_p / m_e}$',
      formulas: [
        '$\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2mqV}}$',
        'Kinetic Energy $K = qV$'
      ],
      stepByStep: [
        'The de Broglie wavelength of a charged particle accelerated through potential difference $V$ is given by $\\lambda = \\frac{h}{\\sqrt{2mqV}}$.',
        'Since both particles have the same magnitude of charge $|q_e| = |q_p| = e$ and same potential difference $V$, $\\lambda \\propto \\frac{1}{\\sqrt{m}}$.',
        'Therefore, $\\frac{\\lambda_e}{\\lambda_p} = \\frac{\\sqrt{2m_p e V}}{\\sqrt{2m_e e V}} = \\sqrt{\\frac{m_p}{m_e}}$.'
      ],
      keyConcept: 'De Broglie wavelength of charged particles under electric potential differences.',
      shortcutTip: 'Remember: $\\lambda \\propto \\frac{1}{\\sqrt{m}}$ when potential $V$ and charge $q$ are equal.'
    }
  },
  {
    id: 'jee_2024_phy_02',
    year: 2024,
    shift: 'Jan 29 Shift 1',
    subject: 'physics',
    section: 'A',
    topic: 'Thermodynamics',
    subtopic: 'Carnot Engine & Efficiency',
    type: 'mcq',
    questionText: 'A Carnot engine has an efficiency of $\\frac{1}{6}$. When the temperature of the sink is reduced by $62^\\circ\\text{C}$, its efficiency is doubled (becomes $\\frac{1}{3}$). The temperature of the source is:',
    options: [
      '$372\\text{ K}$',
      '$310\\text{ K}$',
      '$390\\text{ K}$',
      '$420\\text{ K}$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 90,
    difficulty: 'Medium',
    solution: {
      finalAnswer: 'Option (A) is correct: $372\\text{ K}$',
      formulas: [
        'Efficiency of Carnot engine: $\\eta = 1 - \\frac{T_2}{T_1}$',
        'Where $T_1$ is source temperature, $T_2$ is sink temperature (in Kelvin).'
      ],
      stepByStep: [
        'Case 1: $\\eta_1 = 1 - \\frac{T_2}{T_1} = \\frac{1}{6} \\implies \\frac{T_2}{T_1} = \\frac{5}{6} \\implies T_2 = \\frac{5}{6} T_1$.',
        'Case 2: Sink temperature becomes $T_2 - 62$.',
        'New efficiency $\\eta_2 = 1 - \\frac{T_2 - 62}{T_1} = \\frac{1}{3}$.',
        '$\\frac{T_2 - 62}{T_1} = \\frac{2}{3} \\implies \\frac{T_2}{T_1} - \\frac{62}{T_1} = \\frac{2}{3}$.',
        'Substitute $\\frac{T_2}{T_1} = \\frac{5}{6}$: $\\frac{5}{6} - \\frac{62}{T_1} = \\frac{2}{3} = \\frac{4}{6}$.',
        '$\\frac{62}{T_1} = \\frac{5}{6} - \\frac{4}{6} = \\frac{1}{6} \\implies T_1 = 62 \\times 6 = 372\\text{ K}$.'
      ],
      keyConcept: 'Carnot cycle efficiency equations and temperature changes.',
      shortcutTip: '$\\Delta \\eta = \\frac{\\Delta T_2}{T_1} \\implies \\frac{1}{3} - \\frac{1}{6} = \\frac{62}{T_1} \\implies \\frac{1}{6} = \\frac{62}{T_1} \\implies T_1 = 372\\text{ K}$. Instant 30-sec method!'
    }
  },
  {
    id: 'jee_2024_phy_03',
    year: 2024,
    shift: 'Jan 31 Shift 2',
    subject: 'physics',
    section: 'A',
    topic: 'Gravitation',
    subtopic: 'Escape Velocity',
    type: 'mcq',
    questionText: 'The escape velocity from the surface of the Earth is $v_e = 11.2\\text{ km/s}$. If a planet has mass equal to $9$ times the mass of the Earth and radius equal to $4$ times the radius of the Earth, the escape velocity from that planet is:',
    options: [
      '$16.8\\text{ km/s}$',
      '$22.4\\text{ km/s}$',
      '$14.5\\text{ km/s}$',
      '$8.4\\text{ km/s}$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 70,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $16.8\\text{ km/s}$',
      formulas: [
        '$v_e = \\sqrt{\\frac{2GM}{R}}$'
      ],
      stepByStep: [
        'Escape velocity formula: $v_e = \\sqrt{\\frac{2GM}{R}}$.',
        'For the planet: $M_p = 9 M_e$ and $R_p = 4 R_e$.',
        '$v_p = \\sqrt{\\frac{2G(9M_e)}{4R_e}} = \\sqrt{\\frac{9}{4}} \\times \\sqrt{\\frac{2GM_e}{R_e}} = \\frac{3}{2} v_e$.',
        '$v_p = 1.5 \\times 11.2 = 16.8\\text{ km/s}$.'
      ],
      keyConcept: 'Scaling of escape velocity with planetary mass and radius.',
      shortcutTip: 'Factor $= \\sqrt{M/R} = \\sqrt{9/4} = 3/2 = 1.5$. $1.5 \\times 11.2 = 16.8\\text{ km/s}$.'
    }
  },
  {
    id: 'jee_2024_phy_num_01',
    year: 2024,
    shift: 'April 04 Shift 1',
    subject: 'physics',
    section: 'B',
    topic: 'Current Electricity',
    subtopic: 'Meter Bridge & Wheatstone Condition',
    type: 'numerical',
    questionText: 'In a meter bridge experiment, a null point is obtained at a distance of $40\\text{ cm}$ from the left end when a resistor of $6\\ \\Omega$ is connected in the left gap and an unknown resistor $R$ in the right gap. The value of resistance $R$ in ohms is:',
    correctAnswer: '9',
    benchmarkTimeSeconds: 80,
    difficulty: 'Easy',
    solution: {
      finalAnswer: '9',
      formulas: [
        '$\\frac{R_1}{R_2} = \\frac{l}{100 - l}$'
      ],
      stepByStep: [
        'Balancing condition of Wheatstone bridge: $\\frac{R_{\\text{left}}}{R_{\\text{right}}} = \\frac{l_1}{100 - l_1}$.',
        'Given $R_{\\text{left}} = 6\\ \\Omega$, and balancing length $l_1 = 40\\text{ cm}$.',
        '$\\frac{6}{R} = \\frac{40}{100 - 40} = \\frac{40}{60} = \\frac{2}{3}$.',
        'Cross multiplying: $2R = 18 \\implies R = 9\\ \\Omega$.'
      ],
      keyConcept: 'Meter bridge balancing condition.',
      shortcutTip: '$R = 6 \\times (60 / 40) = 6 \\times 1.5 = 9$.'
    }
  },

  // Chemistry 2024
  {
    id: 'jee_2024_chem_01',
    year: 2024,
    shift: 'Jan 29 Shift 2',
    subject: 'chemistry',
    section: 'A',
    topic: 'Coordination Compounds',
    subtopic: 'Crystal Field Theory & Magnetic Moment',
    type: 'mcq',
    questionText: 'The spin-only magnetic moment of $[\\text{Fe}(\\text{H}_2\\text{O})_6]^{2+}$ complex ion is approximately:',
    options: [
      '$4.90\\text{ BM}$',
      '$5.92\\text{ BM}$',
      '$2.83\\text{ BM}$',
      '$0\\text{ BM}$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 75,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $4.90\\text{ BM}$',
      formulas: [
        '$\\mu = \\sqrt{n(n+2)}\\text{ BM}$, where $n$ is the number of unpaired electrons.',
        'Fe: $[\\text{Ar}] 3d^6 4s^2 \\implies \\text{Fe}^{2+}: [\\text{Ar}] 3d^6$'
      ],
      stepByStep: [
        'Determine oxidation state of iron: $\\text{H}_2\\text{O}$ is a neutral ligand, so oxidation state of $\\text{Fe}$ is $+2$.',
        'Electronic configuration of $\\text{Fe}^{2+}$ is $3d^6$.',
        '$\\text{H}_2\\text{O}$ is a weak field ligand (WFL), so pairing does not occur in $t_{2g}$ before $e_g$ is occupied.',
        'Electronic arrangement: $t_{2g}^4 e_g^2$. The number of unpaired electrons $n = 4$.',
        'Spin-only magnetic moment $\\mu = \\sqrt{4(4+2)} = \\sqrt{24} \\approx 4.899 \\approx 4.90\\text{ BM}$.'
      ],
      keyConcept: 'Spectrochemical series and calculation of spin-only magnetic moments in octahedral complexes.',
      shortcutTip: 'For $n=4$ unpaired electrons, $\\mu$ is always between $4.8$ and $5.0\\text{ BM}$ ($\\sqrt{24}$).'
    }
  },
  {
    id: 'jee_2024_chem_02',
    year: 2024,
    shift: 'Jan 27 Shift 1',
    subject: 'chemistry',
    section: 'A',
    topic: 'Organic Chemistry',
    subtopic: 'Aromatic Hydrocarbons & Side Chain Oxidation',
    type: 'mcq',
    questionText: 'Ethylbenzene on prolonged heating with alkaline $\\text{KMnO}_4$ followed by acidification gives:',
    options: [
      'Benzoic acid',
      'Acetophenone',
      'Benzaldehyde',
      'Phenylacetic acid'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 60,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: Benzoic acid',
      formulas: [
        'Ar-\\text{CHR}_2 \\xrightarrow{\\text{KMnO}_4 / \\text{KOH}, \\Delta} \\text{Ar}-\\text{COOK} \\xrightarrow{\\text{H}^+} \\text{Ar}-\\text{COOH}$'
      ],
      stepByStep: [
        'Alkylbenzenes with at least one benzylic hydrogen ($\\\\alpha$-hydrogen) are vigorously oxidized by alkaline $\\text{KMnO}_4$ to benzoate salt.',
        'Regardless of the length of the alkyl side chain (methyl, ethyl, propyl), the entire side chain is cleaved down to a single carboxyl group ($-\\text{COOH}$).',
        'Subsequent acidification with dilute acid yields Benzoic acid.'
      ],
      keyConcept: 'Vigorous oxidation of benzylic carbons by permanganate.',
      shortcutTip: 'Any alkyl side chain with benzylic hydrogen always oxidizes to Benzoic Acid!'
    }
  },
  {
    id: 'jee_2024_chem_num_01',
    year: 2024,
    shift: 'Jan 31 Shift 1',
    subject: 'chemistry',
    section: 'B',
    topic: 'Chemical Bonding',
    subtopic: 'Noble Gas Compounds & VSEPR',
    type: 'numerical',
    questionText: 'The total number of lone pairs of electrons present on the central Xenon atom in $\\text{XeF}_2$ is:',
    correctAnswer: '3',
    benchmarkTimeSeconds: 60,
    difficulty: 'Easy',
    solution: {
      finalAnswer: '3',
      formulas: [
        'Steric number: $S.N. = \\text{Bond Pairs} + \\text{Lone Pairs}$',
        'Valence electrons in Xenon $= 8$'
      ],
      stepByStep: [
        'Xenon has 8 valence electrons in its outer shell.',
        'In $\\text{XeF}_2$, Xenon forms 2 single covalent bonds with two fluorine atoms, utilizing 2 electrons.',
        'Remaining unshared electrons $= 8 - 2 = 6$ electrons.',
        'Total number of lone pairs $= 6 / 2 = 3$ lone pairs.',
        'Steric number $= 2 \\text{ bond pairs} + 3 \\text{ lone pairs} = 5$ ($sp^3d$, linear geometry with equatorial lone pairs).'
      ],
      keyConcept: 'VSEPR theory and electron accounting in noble gas halides.',
      shortcutTip: '$\\text{XeF}_2$: 2 bond pairs + 3 lone pairs = 5 steric units (Linear).'
    }
  },

  // Mathematics 2024
  {
    id: 'jee_2024_math_01',
    year: 2024,
    shift: 'Jan 31 Shift 1',
    subject: 'mathematics',
    section: 'A',
    topic: 'Integral Calculus',
    subtopic: 'Definite Integrals & King Property',
    type: 'mcq',
    questionText: 'The value of the definite integral $\\int_{0}^{\\pi/2} \\frac{\\sqrt{\\sin x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} \\, dx$ is equal to:',
    options: [
      '$\\frac{\\pi}{4}$',
      '$\\frac{\\pi}{2}$',
      '$\\frac{\\pi}{8}$',
      '$1$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 60,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $\\pi/4$',
      formulas: [
        "King's Property: $\\int_{a}^{b} f(x)dx = \\int_{a}^{b} f(a+b-x)dx$"
      ],
      stepByStep: [
        'Let $I = \\int_{0}^{\\pi/2} \\frac{\\sqrt{\\sin x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} \\, dx$ ... (1)',
        "Apply King's property: replace $x$ by $\\pi/2 - x$:",
        '$I = \\int_{0}^{\\pi/2} \\frac{\\sqrt{\\sin(\\pi/2 - x)}}{\\sqrt{\\sin(\\pi/2 - x)} + \\sqrt{\\cos(\\pi/2 - x)}} \\, dx = \\int_{0}^{\\pi/2} \\frac{\\sqrt{\\cos x}}{\\sqrt{\\cos x} + \\sqrt{\\sin x}} \\, dx$ ... (2)',
        'Adding (1) and (2): $2I = \\int_{0}^{\\pi/2} 1 \\, dx = \\frac{\\pi}{2} \\implies I = \\frac{\\pi}{4}$.'
      ],
      keyConcept: 'Symmetric definite integrals.',
      shortcutTip: '$(b-a)/2 = (\\pi/2 - 0)/2 = \\pi/4$.'
    }
  },
  {
    id: 'jee_2024_math_02',
    year: 2024,
    shift: 'Jan 29 Shift 2',
    subject: 'mathematics',
    section: 'A',
    topic: 'Matrices and Determinants',
    subtopic: 'System of Linear Equations & Consistency',
    type: 'mcq',
    questionText: 'The system of linear equations:\n$$x + y + z = 6$$\n$$x + 2y + 3z = 10$$\n$$x + 2y + \\lambda z = \\mu$$\nhas infinitely many solutions when:',
    options: [
      '$\\lambda = 3, \\mu = 10$',
      '$\\lambda = 3, \\mu \\ne 10$',
      '$\\lambda \\ne 3, \\mu = 10$',
      '$\\lambda = 2, \\mu = 6$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 85,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $\\lambda = 3, \\mu = 10$',
      formulas: [
        'For infinitely many solutions: $\\Delta = 0$ and $\\Delta_x = \\Delta_y = \\Delta_z = 0$.'
      ],
      stepByStep: [
        'Evaluate coefficient determinant $\\Delta$:',
        '$\\Delta = \\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 3 \\\\ 1 & 2 & \\lambda \\end{vmatrix}$.',
        'Row operation $R_3 \\to R_3 - R_2$: the third row becomes $[0, 0, \\lambda - 3]$.',
        'Expanding along $R_3$: $(\\lambda - 3)(2 - 1) = \\lambda - 3$.',
        'For infinitely many solutions or no solution, $\\Delta = 0 \\implies \\lambda = 3$.',
        'When $\\lambda = 3$, equation (2) and equation (3) become $x + 2y + 3z = 10$ and $x + 2y + 3z = \\mu$.',
        'For consistency (infinitely many solutions), they must be identical: $\\mu = 10$.'
      ],
      keyConcept: 'Cramer’s rule and consistency conditions for linear systems.',
      shortcutTip: 'Equations (2) and (3) have identical LHS when $\\lambda = 3$, so RHS must match: $\\mu = 10$.'
    }
  },
  {
    id: 'jee_2024_math_num_01',
    year: 2024,
    shift: 'Jan 27 Shift 2',
    subject: 'mathematics',
    section: 'B',
    topic: 'Binomial Theorem',
    subtopic: 'Independent Term & General Term',
    type: 'numerical',
    questionText: 'The term independent of $x$ in the binomial expansion of $\\left(2x + \\frac{1}{3x^2}\\right)^9$ is of the form $k \\cdot \\binom{9}{3}$. The value of $r$ for which $T_{r+1}$ is independent of $x$ is:',
    correctAnswer: '3',
    benchmarkTimeSeconds: 70,
    difficulty: 'Easy',
    solution: {
      finalAnswer: '3',
      formulas: [
        'General term in $(a + b)^n$: $T_{r+1} = \\binom{n}{r} a^{n-r} b^r$'
      ],
      stepByStep: [
        'Here $a = 2x$, $b = \\frac{1}{3x^2}$, and $n = 9$.',
        'General term $T_{r+1} = \\binom{9}{r} (2x)^{9-r} \\left(\\frac{1}{3x^2}\\right)^r = \\binom{9}{r} 2^{9-r} 3^{-r} x^{9-r - 2r} = \\binom{9}{r} 2^{9-r} 3^{-r} x^{9 - 3r}$.',
        'For the term to be independent of $x$, the exponent of $x$ must be zero: $9 - 3r = 0 \\implies 3r = 9 \\implies r = 3$.',
        'Therefore, $T_4$ ($r = 3$) is the independent term.'
      ],
      keyConcept: 'Finding constant/independent terms in binomial expansions.',
      shortcutTip: 'Exponent: $9 - 3r = 0 \\implies r = 3$.'
    }
  }
];
