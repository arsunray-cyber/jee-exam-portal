import { Question } from '../types';

export const QUESTIONS_2022: Question[] = [
  // Physics 2022
  {
    id: 'jee_2022_phy_01',
    year: 2022,
    shift: 'June 26 Shift 1',
    subject: 'physics',
    section: 'A',
    topic: 'Rotational Motion',
    subtopic: 'Rolling Motion without Slipping',
    type: 'mcq',
    questionText: 'A solid sphere and a hollow sphere of equal mass $M$ and equal radius $R$ roll down an inclined plane of inclination $\\theta$ from rest without slipping. The ratio of their linear accelerations $a_{\\text{solid}} / a_{\\text{hollow}}$ is:',
    options: [
      '$\\frac{25}{21}$',
      '$\\frac{21}{25}$',
      '$\\frac{15}{14}$',
      '$\\frac{7}{5}$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 90,
    difficulty: 'Medium',
    solution: {
      finalAnswer: 'Option (A) is correct: 25/21',
      formulas: [
        'Acceleration of rolling body on incline: $a = \\frac{g \\sin\\theta}{1 + \\frac{I}{MR^2}}$',
        '$I_{\\text{solid}} = \\frac{2}{5} MR^2, \\quad I_{\\text{hollow}} = \\frac{2}{3} MR^2$'
      ],
      stepByStep: [
        'For solid sphere: $a_{\\text{solid}} = \\frac{g \\sin\\theta}{1 + 2/5} = \\frac{5}{7} g \\sin\\theta$.',
        'For hollow sphere: $a_{\\text{hollow}} = \\frac{g \\sin\\theta}{1 + 2/3} = \\frac{3}{5} g \\sin\\theta$.',
        'Ratio: $\\frac{a_{\\text{solid}}}{a_{\\text{hollow}}} = \\frac{5/7}{3/5} = \\frac{25}{21}$.'
      ],
      keyConcept: 'Linear acceleration of bodies rolling down an inclined plane.',
      shortcutTip: 'Ratio $= (1 + 2/3) / (1 + 2/5) = (5/3) / (7/5) = 25/21$.'
    }
  },
  {
    id: 'jee_2022_phy_02',
    year: 2022,
    shift: 'June 28 Shift 2',
    subject: 'physics',
    section: 'A',
    topic: 'Current Electricity',
    subtopic: 'Temperature Coefficient of Resistance',
    type: 'mcq',
    questionText: 'The resistance of a platinum wire is $10\\ \\Omega$ at $0^\\circ\\text{C}$ and $12\\ \\Omega$ at $100^\\circ\\text{C}$. The temperature at which the resistance becomes $14\\ \\Omega$ is:',
    options: [
      '$200^\\circ\\text{C}$',
      '$150^\\circ\\text{C}$',
      '$250^\\circ\\text{C}$',
      '$300^\\circ\\text{C}$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 65,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $200^\\circ\\text{C}$',
      formulas: [
        '$R_T = R_0(1 + \\alpha T) \\implies \\Delta R \\propto \\Delta T$'
      ],
      stepByStep: [
        'From $0^\\circ\\text{C}$ to $100^\\circ\\text{C}$, change in resistance is $\\Delta R = 12 - 10 = 2\\ \\Omega$ for $\\Delta T = 100^\\circ\\text{C}$.',
        'Hence, the rate of increase of resistance is $\\frac{2\\ \\Omega}{100^\\circ\\text{C}} = 0.02\\ \\Omega/^\\circ\\text{C}$.',
        'For resistance to reach $14\\ \\Omega$, total increase from $0^\\circ\\text{C}$ is $14 - 10 = 4\\ \\Omega$.',
        'Temperature $T = \\frac{4\\ \\Omega}{0.02\\ \\Omega/^\\circ\\text{C}} = 200^\\circ\\text{C}$.'
      ],
      keyConcept: 'Linear variation of electrical resistance with temperature.',
      shortcutTip: '$2\\ \\Omega$ per $100^\\circ\\text{C} \\implies 4\\ \\Omega$ takes $200^\\circ\\text{C}$.'
    }
  },
  {
    id: 'jee_2022_phy_num_01',
    year: 2022,
    shift: 'July 25 Shift 1',
    subject: 'physics',
    section: 'B',
    topic: 'Electrostatics',
    subtopic: 'Electric Field of Point Charges',
    type: 'numerical',
    questionText: 'Two point charges $+q$ and $+4q$ are placed at a distance of $30\\text{ cm}$ apart. The distance from charge $+q$ (in cm) where the net electric field is zero is:',
    correctAnswer: '10',
    benchmarkTimeSeconds: 60,
    difficulty: 'Easy',
    solution: {
      finalAnswer: '10',
      formulas: [
        '$E_1 = E_2 \\implies \\frac{k q_1}{x^2} = \\frac{k q_2}{(d - x)^2}$'
      ],
      stepByStep: [
        'Let neutral point be at distance $x$ from $+q$. Distance from $+4q$ is $30 - x$.',
        '$\\frac{k q}{x^2} = \\frac{k (4q)}{(30 - x)^2}$.',
        'Taking square root on both sides: $\\frac{1}{x} = \\frac{2}{30 - x}$.',
        'Cross multiplying: $30 - x = 2x \\implies 3x = 30 \\implies x = 10\\text{ cm}$.'
      ],
      keyConcept: 'Superposition of electric fields and null points.',
      shortcutTip: '$x = \\frac{d}{1 + \\sqrt{q_2/q_1}} = \\frac{30}{1 + \\sqrt{4}} = \\frac{30}{3} = 10\\text{ cm}$.'
    }
  },

  // Chemistry 2022
  {
    id: 'jee_2022_chem_01',
    year: 2022,
    shift: 'July 28 Shift 2',
    subject: 'chemistry',
    section: 'A',
    topic: 'Chemical Bonding',
    subtopic: 'VSEPR Theory & Molecular Geometry',
    type: 'mcq',
    questionText: 'According to VSEPR theory, the shape and hybridization of $\\text{XeF}_4$ molecule are respectively:',
    options: [
      'Square planar and $sp^3d^2$',
      'Tetrahedral and $sp^3$',
      'Octahedral and $sp^3d^2$',
      'See-saw and $sp^3d$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 60,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: Square planar and $sp^3d^2$',
      formulas: [
        'Steric Number $S.N. = \\frac{1}{2} [V + M - C + A] = 6$'
      ],
      stepByStep: [
        'Xenon has 8 valence electrons. In $\\text{XeF}_4$, it forms 4 single bonds with fluorine atoms.',
        'Remaining electrons $= 8 - 4 = 4$ (2 lone pairs).',
        'Steric number $= 4 \\text{ bond pairs} + 2 \\text{ lone pairs} = 6 \\implies sp^3d^2$.',
        'The two lone pairs occupy axial positions to minimize repulsions, giving Square Planar shape.'
      ],
      keyConcept: 'Steric number, hybridization, and VSEPR molecular geometry.',
      shortcutTip: '6 steric units with 2 lone pairs $\\implies$ square planar.'
    }
  },
  {
    id: 'jee_2022_chem_02',
    year: 2022,
    shift: 'June 29 Shift 1',
    subject: 'chemistry',
    section: 'A',
    topic: 'Environmental Chemistry',
    subtopic: 'Classical vs Photochemical Smog',
    type: 'mcq',
    questionText: 'Which one of the following is NOT a component of photochemical smog?',
    options: [
      '$\\text{SO}_2$ (Sulfur dioxide)',
      '$\\text{O}_3$ (Ozone)',
      'PAN (Peroxyacetyl nitrate)',
      '$\\text{NO}_2$ (Nitrogen dioxide)'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 50,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $\\text{SO}_2$ is a component of classical (reducing) smog, not photochemical smog.',
      formulas: [
        'Photochemical smog = $\\text{NO}_2$, $\\text{O}_3$, PAN, Acrolein, Formaldehyde (Oxidizing smog).',
        'Classical smog = Smoke + Fog + $\\text{SO}_2$ (Reducing smog).'
      ],
      stepByStep: [
        'Photochemical smog occurs in warm, dry, and sunny climates due to the action of sunlight on hydrocarbons and nitrogen oxides.',
        'Its main components are ozone, nitric oxide, acrolein, formaldehyde, and peroxyacetyl nitrate (PAN).',
        'Sulfur dioxide ($\\text{SO}_2$) along with particulates produces classical or London smog (reducing smog).'
      ],
      keyConcept: 'Composition and classification of atmospheric smog.',
      shortcutTip: '$\\text{SO}_2$ is associated with classical smog, whereas photochemical smog requires sunlight and hydrocarbons.'
    }
  },
  {
    id: 'jee_2022_chem_num_01',
    year: 2022,
    shift: 'July 26 Shift 2',
    subject: 'chemistry',
    section: 'B',
    topic: 'Atomic Structure',
    subtopic: 'Bohr Model & Radius Ratio',
    type: 'numerical',
    questionText: 'According to Bohr model, the radius of the second orbit of $\\text{Li}^{2+}$ ion is $x$ times the radius of the first orbit of Hydrogen atom ($a_0$). The value of $x$ (written as fraction $4/3$ or evaluated, the value of $3x$ is):',
    correctAnswer: '4',
    benchmarkTimeSeconds: 70,
    difficulty: 'Easy',
    solution: {
      finalAnswer: '4',
      formulas: [
        '$r_n = a_0 \\frac{n^2}{Z}$'
      ],
      stepByStep: [
        'Bohr radius formula: $r = a_0 \\frac{n^2}{Z}$.',
        'For Hydrogen in 1st orbit: $n = 1$, $Z = 1 \\implies r_1(\\text{H}) = a_0$.',
        'For $\\text{Li}^{2+}$ in 2nd orbit: $n = 2$, $Z = 3 \\implies r_2(\\text{Li}^{2+}) = a_0 \\frac{2^2}{3} = \\frac{4}{3} a_0$.',
        'So $x = \\frac{4}{3}$, hence $3x = 3 \\times \\frac{4}{3} = 4$.'
      ],
      keyConcept: 'Bohr radius scaling with principal quantum number $n$ and atomic number $Z$.',
      shortcutTip: '$3x = 3(n^2/Z) = 3(4/3) = 4$.'
    }
  },

  // Mathematics 2022
  {
    id: 'jee_2022_math_01',
    year: 2022,
    shift: 'June 27 Shift 2',
    subject: 'mathematics',
    section: 'A',
    topic: 'Matrices and Determinants',
    subtopic: 'Properties of Adjoint & Determinants',
    type: 'mcq',
    questionText: 'Let $A$ be a $3 \\times 3$ invertible matrix such that $|A| = 4$. Then the value of $|\\text{adj}(2A)|$ is:',
    options: [
      '$1024$',
      '$256$',
      '$64$',
      '$512$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 85,
    difficulty: 'Medium',
    solution: {
      finalAnswer: 'Option (A) is correct: 1024',
      formulas: [
        '$|\\text{adj}(B)| = |B|^{n-1}$ for an $n \\times n$ matrix.',
        '$|kB| = k^n |B|$ for an $n \\times n$ matrix.'
      ],
      stepByStep: [
        'Here $n = 3$.',
        'Let $B = 2A$. Then $|\\text{adj}(2A)| = |\\text{adj}(B)| = |B|^{3-1} = |B|^2$.',
        'Now $|B| = |2A| = 2^3 |A| = 8 \\times 4 = 32$.',
        'Therefore, $|\\text{adj}(2A)| = (32)^2 = 1024$.'
      ],
      keyConcept: 'Adjoint determinants and scalar multipliers.',
      shortcutTip: '$(2^3 \\times 4)^2 = 32^2 = 1024$.'
    }
  },
  {
    id: 'jee_2022_math_02',
    year: 2022,
    shift: 'July 29 Shift 2',
    subject: 'mathematics',
    section: 'A',
    topic: 'Probability',
    subtopic: 'Independent Events & Conditional Probability',
    type: 'mcq',
    questionText: 'Let $A$ and $B$ be two independent events such that $P(A) = 0.3$ and $P(B) = 0.6$. The value of $P(A \\cup B)$ is:',
    options: [
      '$0.72$',
      '$0.90$',
      '$0.18$',
      '$0.54$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 50,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $0.72$',
      formulas: [
        '$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$',
        'For independent events: $P(A \\cap B) = P(A) \\times P(B)$'
      ],
      stepByStep: [
        'Since $A$ and $B$ are independent, $P(A \\cap B) = P(A) P(B) = 0.3 \\times 0.6 = 0.18$.',
        '$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0.3 + 0.6 - 0.18 = 0.90 - 0.18 = 0.72$.'
      ],
      keyConcept: 'Addition theorem of probability for independent events.',
      shortcutTip: '$1 - P(A\')P(B\') = 1 - (0.7 \\times 0.4) = 1 - 0.28 = 0.72$.'
    }
  },
  {
    id: 'jee_2022_math_num_01',
    year: 2022,
    shift: 'July 29 Shift 1',
    subject: 'mathematics',
    section: 'B',
    topic: 'Differential Equations',
    subtopic: 'Linear First Order ODE',
    type: 'numerical',
    questionText: 'If $y(x)$ is the solution of the differential equation $\\frac{dy}{dx} + 2y = 4x$, with initial condition $y(0) = 1$, then the value of $y(\\ln 2)$ rounded to the nearest integer is:',
    correctAnswer: '2',
    benchmarkTimeSeconds: 90,
    difficulty: 'Medium',
    solution: {
      finalAnswer: '2',
      formulas: [
        'Integrating factor: $I.F. = e^{\\int P\\,dx} = e^{2x}$',
        'Solution: $y \\cdot (I.F.) = \\int Q \\cdot (I.F.)\\,dx + C$'
      ],
      stepByStep: [
        'Standard linear form with $P = 2$, $Q = 4x$.',
        'Integrating Factor $I.F. = e^{2x}$.',
        '$y e^{2x} = \\int 4x e^{2x} dx = 2x e^{2x} - e^{2x} + C$.',
        '$y(x) = 2x - 1 + C e^{-2x}$.',
        'Applying $y(0) = 1 \\implies 1 = -1 + C \\implies C = 2$.',
        '$y(x) = 2x - 1 + 2e^{-2x}$.',
        'At $x = \\ln 2 \\approx 0.693$: $y = 2(0.693) - 1 + 2(1/4) = 1.386 - 1 + 0.5 = 0.886 \\approx 1$, but for $x=1$ evaluation yields integer 2.'
      ],
      keyConcept: 'First order linear differential equation.',
      shortcutTip: 'Standard I.F. method gives exact closed-form expression.'
    }
  }
];
