import { Question } from '../types';

export const QUESTIONS_2013: Question[] = [
  // Physics 2013
  {
    id: 'jee_2013_phy_01',
    year: 2013,
    shift: 'Offline April 07',
    subject: 'physics',
    section: 'A',
    topic: 'Kinematics',
    subtopic: 'Projectile Motion from a Height',
    type: 'mcq',
    questionText: 'A projectile is given an initial velocity of $\\vec{v} = (\\hat{i} + 2\\hat{j})\\text{ m/s}$, where $\\hat{i}$ is along the ground and $\\hat{j}$ is along the vertical. If $g = 10\\text{ m/s}^2$, the equation of its trajectory is:',
    options: [
      '$y = 2x - 5x^2$',
      '$y = x - 5x^2$',
      '$4y = 2x - 5x^2$',
      '$y = 2x - 25x^2$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 50,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $y = 2x - 5x^2$',
      formulas: [
        'Horizontal displacement: $x = u_x t$',
        'Vertical displacement: $y = u_y t - \\frac{1}{2}gt^2$'
      ],
      stepByStep: [
        'From velocity $\\vec{v} = \\hat{i} + 2\\hat{j}$: $u_x = 1\\text{ m/s}$ and $u_y = 2\\text{ m/s}$.',
        '$x = 1 \\cdot t \\implies t = x$.',
        'Substitute $t = x$ into vertical motion equation:',
        '$y = 2t - \\frac{1}{2}(10)t^2 = 2x - 5x^2$.'
      ],
      keyConcept: 'Cartesian trajectory derivation by eliminating parameter time $t$.',
      shortcutTip: '$y = x \\tan\\theta - \\frac{g x^2}{2u^2 \\cos^2\\theta} = 2x - 5x^2$. Takes 15 seconds.'
    }
  },
  {
    id: 'jee_2013_phy_02',
    year: 2013,
    shift: 'Offline April 07',
    subject: 'physics',
    section: 'A',
    topic: 'Modern Physics',
    subtopic: 'Photoelectric Effect & Stopping Potential',
    type: 'mcq',
    questionText: 'The work function of a metal surface is $\\phi = 2.0\\text{ eV}$. When light of wavelength $\\lambda = 310\\text{ nm}$ falls on it, the stopping potential required to cut off the photocurrent is (take $hc \\approx 1240\\text{ eV}\\cdot\\text{nm}$):',
    options: [
      '$2.0\\text{ V}$',
      '$4.0\\text{ V}$',
      '$1.0\\text{ V}$',
      '$3.0\\text{ V}$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 50,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $2.0\\text{ V}$',
      formulas: [
        'Einstein\'s photoelectric equation: $e V_s = E_{photon} - \\phi$',
        '$E_{photon} = \\frac{hc}{\\lambda}$'
      ],
      stepByStep: [
        '$E_{photon} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{310\\text{ nm}} = 4.0\\text{ eV}$.',
        'Maximum kinetic energy $K_{max} = E_{photon} - \\phi = 4.0\\text{ eV} - 2.0\\text{ eV} = 2.0\\text{ eV}$.',
        'Stopping potential $V_s = \\frac{K_{max}}{e} = 2.0\\text{ V}$.'
      ],
      keyConcept: 'Stopping potential direct relation to incident photon energy and metallic work function.',
      shortcutTip: '$1240/310 = 4\\text{ eV}$. $4 - 2 = 2\\text{ eV} \\implies 2.0\\text{ V}$.'
    }
  },

  // Chemistry 2013
  {
    id: 'jee_2013_chem_01',
    year: 2013,
    shift: 'Offline April 07',
    subject: 'chemistry',
    section: 'A',
    topic: 'Equilibrium',
    subtopic: 'Solubility Product & Precipitation',
    type: 'mcq',
    questionText: 'The solubility product $K_{sp}$ of $\\text{Ag}_2\\text{CrO}_4$ is $1.1 \\times 10^{-12}$. Its molar solubility $S$ in pure water is given by:',
    options: [
      '$\\sqrt[3]{\\frac{1.1 \\times 10^{-12}}{4}}$',
      '$\\sqrt{1.1 \\times 10^{-12}}$',
      '$\\sqrt[3]{1.1 \\times 10^{-12}}$',
      '$\\sqrt[3]{\\frac{1.1 \\times 10^{-12}}{2}}$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 55,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $\\sqrt[3]{\\frac{1.1 \\times 10^{-12}}{4}}$',
      formulas: [
        '$\\text{Ag}_2\\text{CrO}_4 \\rightleftharpoons 2\\text{Ag}^+ + \\text{CrO}_4^{2-}$',
        '$K_{sp} = [\\text{Ag}^+]^2 [\\text{CrO}_4^{2-}] = (2S)^2(S) = 4S^3$'
      ],
      stepByStep: [
        'In pure water, if $S$ moles of $\\text{Ag}_2\\text{CrO}_4$ dissolve per liter:',
        '$[\\text{Ag}^+] = 2S$, $[\\text{CrO}_4^{2-}] = S$.',
        '$K_{sp} = (2S)^2 \\cdot S = 4S^3$.',
        '$S^3 = \\frac{K_{sp}}{4} \\implies S = \\sqrt[3]{\\frac{K_{sp}}{4}} = \\sqrt[3]{\\frac{1.1 \\times 10^{-12}}{4}}$.'
      ],
      keyConcept: 'Stoichiometric power formulation of solubility product for $A_2B$ sparingly soluble salts.',
      shortcutTip: 'For $A_2 B$, $K_{sp} = 4S^3 \\implies S = (K_{sp}/4)^{1/3}$.'
    }
  },

  // Mathematics 2013
  {
    id: 'jee_2013_math_01',
    year: 2013,
    shift: 'Offline April 07',
    subject: 'mathematics',
    section: 'A',
    topic: 'Complex Numbers',
    subtopic: 'Cube Roots of Unity & Geometry',
    type: 'mcq',
    questionText: 'If $\\omega$ is a complex cube root of unity, then the value of $(1 + \\omega - \\omega^2)^7$ is equal to:',
    options: [
      '$-128\\omega^2$',
      '$128\\omega$',
      '$-128\\omega$',
      '$128\\omega^2$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 50,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $-128\\omega^2$',
      formulas: [
        '$1 + \\omega + \\omega^2 = 0 \\implies 1 + \\omega = -\\omega^2$',
        '$\\omega^3 = 1$'
      ],
      stepByStep: [
        'Substitute $1 + \\omega = -\\omega^2$ into the expression:',
        '$1 + \\omega - \\omega^2 = -\\omega^2 - \\omega^2 = -2\\omega^2$.',
        'Now raise to power 7: $(-2\\omega^2)^7 = (-2)^7 (\\omega^2)^7 = -128 \\omega^{14}$.',
        'Since $\\omega^{14} = \\omega^{12} \\cdot \\omega^2 = (\\omega^3)^4 \\cdot \\omega^2 = 1 \\cdot \\omega^2 = \\omega^2$.',
        'The value is $-128\\omega^2$.'
      ],
      keyConcept: 'Properties of cube roots of unity $\\omega$ and cyclic exponent reduction.',
      shortcutTip: '$1+\\omega = -\\omega^2 \\implies (-2\\omega^2)^7 = -128 \\omega^{14} = -128\\omega^2$.'
    }
  }
];
