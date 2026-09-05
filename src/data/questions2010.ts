import { Question } from '../types';

export const QUESTIONS_2010: Question[] = [
  // Physics 2010
  {
    id: 'jee_2010_phy_01',
    year: 2010,
    shift: 'AIEEE / JEE Offline April',
    subject: 'physics',
    section: 'A',
    topic: 'Electrostatics',
    subtopic: 'Electric Dipole in Uniform Field',
    type: 'mcq',
    questionText: 'An electric dipole of dipole moment $\\vec{p}$ is placed in a uniform electric field $\\vec{E}$. The work done in rotating the dipole from stable equilibrium through an angle of $180^\\circ$ is:',
    options: [
      '$2 p E$',
      '$p E$',
      '$-2 p E$',
      '$0$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 45,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $2 p E$',
      formulas: [
        'Potential energy of dipole: $U(\\theta) = -\\vec{p} \\cdot \\vec{E} = -p E \\cos\\theta$',
        'Work done: $W = U(\\theta_2) - U(\\theta_1)$'
      ],
      stepByStep: [
        'Stable equilibrium corresponds to alignment with the field, so $\\theta_1 = 0^\\circ$.',
        'Initial potential energy: $U_1 = -p E \\cos 0^\\circ = -p E$.',
        'Final state after $180^\\circ$ rotation: $\\theta_2 = 180^\\circ$.',
        'Final potential energy: $U_2 = -p E \\cos 180^\\circ = -p E (-1) = +p E$.',
        'Work done by external agent: $W = U_2 - U_1 = p E - (-p E) = 2 p E$.'
      ],
      keyConcept: 'Potential energy extrema and work done rotating an electric dipole in an electrostatic field.',
      shortcutTip: '$W = p E(\\cos 0^\\circ - \\cos 180^\\circ) = p E(1 - (-1)) = 2pE$.'
    }
  },
  {
    id: 'jee_2010_phy_02',
    year: 2010,
    shift: 'AIEEE / JEE Offline April',
    subject: 'physics',
    section: 'A',
    topic: 'Rotational Dynamics',
    subtopic: 'Angular Momentum Conservation',
    type: 'mcq',
    questionText: 'A thin circular ring of mass $M$ and radius $R$ is rotating about its axis with an angular velocity $\\omega$. Two particles, each of mass $m$, are gently attached to the opposite ends of a diameter of the ring. The new angular velocity of the ring becomes:',
    options: [
      '$\\frac{M}{M + 2m} \\omega$',
      '$\\frac{M - 2m}{M + 2m} \\omega$',
      '$\\frac{M + 2m}{M} \\omega$',
      '$\\frac{M}{M + m} \\omega$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 55,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $\\frac{M}{M + 2m} \\omega$',
      formulas: [
        'Conservation of angular momentum: $I_1 \\omega_1 = I_2 \\omega_2$',
        'Moment of inertia of ring: $I_{ring} = MR^2$',
        'Moment of inertia of point mass on ring: $m R^2$'
      ],
      stepByStep: [
        'Initial moment of inertia: $I_1 = MR^2$.',
        'When two particles of mass $m$ each are placed on the ring at distance $R$ from the axis:',
        'New moment of inertia: $I_2 = MR^2 + 2m R^2 = (M + 2m)R^2$.',
        'Since no external torque acts on the system about the rotation axis, angular momentum is conserved:',
        '$I_1 \\omega = I_2 \\omega_2 \\implies M R^2 \\omega = (M + 2m)R^2 \\omega_2$.',
        '$\\omega_2 = \\frac{M}{M + 2m} \\omega$.'
      ],
      keyConcept: 'Conservation of angular momentum in composite rotational systems with added symmetric masses.',
      shortcutTip: '$I_1/I_2 = M/(M+2m) \\implies \\omega_2 = \\frac{M}{M+2m}\\omega$.'
    }
  },

  // Chemistry 2010
  {
    id: 'jee_2010_chem_01',
    year: 2010,
    shift: 'AIEEE / JEE Offline April',
    subject: 'chemistry',
    section: 'A',
    topic: 'Solid State',
    subtopic: 'FCC Unit Cell & Packing Efficiency',
    type: 'mcq',
    questionText: 'Copper crystallizes in a face-centered cubic (FCC) lattice with unit cell edge length $a = 361\\text{ pm}$. The atomic radius of copper is:',
    options: [
      '$127.6\\text{ pm}$',
      '$180.5\\text{ pm}$',
      '$156.3\\text{ pm}$',
      '$108.2\\text{ pm}$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 60,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $r = 127.6\\text{ pm}$',
      formulas: [
        'In FCC lattice, atoms touch along face diagonal: $4r = \\sqrt{2}a$',
        '$r = \\frac{\\sqrt{2}}{4}a = \\frac{a}{2\\sqrt{2}}$'
      ],
      stepByStep: [
        '$r = \\frac{361\\text{ pm}}{2\\sqrt{2}} = \\frac{361}{2.8284} \\approx 127.64\\text{ pm}$.'
      ],
      keyConcept: 'Geometry of close packing and atomic contact along face diagonal in FCC crystals.',
      shortcutTip: '$r = a / 2.828 = 361 / 2.828 \\approx 127.6\\text{ pm}$.'
    }
  },

  // Mathematics 2010
  {
    id: 'jee_2010_math_01',
    year: 2010,
    shift: 'AIEEE / JEE Offline April',
    subject: 'mathematics',
    section: 'A',
    topic: 'Coordinate Geometry',
    subtopic: 'Circle Equation & Chord of Contact',
    type: 'mcq',
    questionText: 'The length of the diameter of the circle which passes through the points $(0, 0)$ and $(0, 4)$ and touches the line $x = 2$ is:',
    options: [
      '$4$',
      '$\\frac{5}{2}$',
      '$5$',
      '$2$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 70,
    difficulty: 'Medium',
    solution: {
      finalAnswer: 'Option (A) is correct: diameter is $4$ (radius $R = 2$)',
      formulas: [
        'Equation of a circle passing through $(0,0)$ and $(0,4)$ has center on perpendicular bisector $y = 2$.',
        'Center is $(h, 2)$, radius $R = \\sqrt{h^2 + 2^2}$.'
      ],
      stepByStep: [
        'Let center be $C(h, 2)$. Distance to $(0,0)$ is $R = \\sqrt{h^2 + 4}$.',
        'The circle touches the vertical line $x = 2$, so radius equals horizontal distance from center to line:',
        '$R = |2 - h|$.',
        'Equate the two expressions for radius: $\\sqrt{h^2 + 4} = |2 - h|$.',
        'Square both sides: $h^2 + 4 = 4 - 4h + h^2 \\implies 4 = 4 - 4h \\implies -4h = 0 \\implies h = 0$.',
        'Center is $(0, 2)$, radius $R = \\sqrt{0^2 + 4} = 2$.',
        'The diameter is $2R = 2 \\times 2 = 4$.'
      ],
      keyConcept: 'Locus and tangency condition of circles with fixed chord intercepts.',
      shortcutTip: 'Perpendicular bisector gives $y = 2$. Tangency to $x = 2$ gives $h = 0 \\implies R = 2 \\implies$ diameter $= 4$.'
    }
  }
];
