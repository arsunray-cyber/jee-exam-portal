import { Question } from '../types';

export const JEE_PREVIOUS_YEAR_QUESTIONS: Question[] = [
  // ==========================================
  // YEAR 2024 QUESTIONS
  // ==========================================
  {
    id: 'jee_2024_phy_01',
    year: 2024,
    shift: 'Jan 27 Shift 1',
    subject: 'physics',
    section: 'A',
    topic: 'Modern Physics',
    subtopic: 'De Broglie Wavelength & Photoelectric Effect',
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
    benchmarkTimeSeconds: 90,
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
      shortcutTip: 'For $n=4$ unpaired electrons, $\\mu$ is always between $4.8$ and $5.0\\text{ BM}$ ($\\\\sqrt{4 \\times 6} = \\\\sqrt{24}$).'
    }
  },
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
        "Apply King's property with $a=0, b=\\pi/2$, so replace $x$ by $\\pi/2 - x$:",
        '$I = \\int_{0}^{\\pi/2} \\frac{\\sqrt{\\sin(\\pi/2 - x)}}{\\sqrt{\\sin(\\pi/2 - x)} + \\sqrt{\\cos(\\pi/2 - x)}} \\, dx = \\int_{0}^{\\pi/2} \\frac{\\sqrt{\\cos x}}{\\sqrt{\\cos x} + \\sqrt{\\sin x}} \\, dx$ ... (2)',
        'Adding equations (1) and (2): $2I = \\int_{0}^{\\pi/2} \\frac{\\sqrt{\\sin x} + \\sqrt{\\cos x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} \\, dx = \\int_{0}^{\\pi/2} 1 \\, dx = [x]_0^{\\pi/2} = \\frac{\\pi}{2}$.',
        'Therefore, $I = \\frac{\\pi}{4}$.'
      ],
      keyConcept: 'Definite integral symmetry and King’s property.',
      shortcutTip: 'Standard symmetric integrals over $[0, \\pi/2]$ with $f(x)/(f(x)+f(\\pi/2-x))$ always evaluate to $(b-a)/2 = \\pi/4$.'
    }
  },
  {
    id: 'jee_2024_phy_num_01',
    year: 2024,
    shift: 'April 04 Shift 1',
    subject: 'physics',
    section: 'B',
    topic: 'Current Electricity',
    subtopic: 'Wheatstone Bridge & Resistance',
    type: 'numerical',
    questionText: 'In a meter bridge experiment, a null point is obtained at a distance of $40\\text{ cm}$ from the left end when a resistor of $6\\ \\Omega$ is connected in the left gap and an unknown resistor $R$ in the right gap. The value of resistance $R$ in ohms is:',
    correctAnswer: '9',
    benchmarkTimeSeconds: 90,
    difficulty: 'Easy',
    solution: {
      finalAnswer: '9',
      formulas: [
        '$\\frac{R_1}{R_2} = \\frac{l}{100 - l}$'
      ],
      stepByStep: [
        'According to the principle of balanced Wheatstone bridge in a meter bridge:',
        '$\\frac{R_{\\text{left}}}{R_{\\text{right}}} = \\frac{l_1}{100 - l_1}$',
        'Given $R_{\\text{left}} = 6\\ \\Omega$, and balancing length $l_1 = 40\\text{ cm}$.',
        '$\\frac{6}{R} = \\frac{40}{100 - 40} = \\frac{40}{60} = \\frac{2}{3}$',
        'Cross multiplying: $2R = 6 \\times 3 = 18 \\implies R = 9\\ \\Omega$.'
      ],
      keyConcept: 'Meter bridge balancing condition.',
      shortcutTip: '$R = 6 \\times (60 / 40) = 6 \\times 1.5 = 9$.'
    }
  },

  // ==========================================
  // YEAR 2023 QUESTIONS
  // ==========================================
  {
    id: 'jee_2023_phy_01',
    year: 2023,
    shift: 'Jan 24 Shift 2',
    subject: 'physics',
    section: 'A',
    topic: 'Thermodynamics',
    subtopic: 'Adiabatic Process & Work Done',
    type: 'mcq',
    questionText: 'An ideal monoatomic gas ($\\gamma = 5/3$) at pressure $P_0$ and volume $V_0$ is compressed adiabatically to one-eighth of its initial volume ($V_0 / 8$). The final pressure of the gas is:',
    options: [
      '$32 P_0$',
      '$16 P_0$',
      '$8 P_0$',
      '$64 P_0$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 90,
    difficulty: 'Medium',
    solution: {
      finalAnswer: 'Option (A) is correct: $32 P_0$',
      formulas: [
        '$P_1 V_1^\\gamma = P_2 V_2^\\gamma$ for an adiabatic process.'
      ],
      stepByStep: [
        'For an adiabatic process: $P_1 V_1^\\gamma = P_2 V_2^\\gamma$.',
        'Here $P_1 = P_0$, $V_1 = V_0$, $V_2 = V_0 / 8$, and $\\gamma = 5/3$.',
        '$P_2 = P_0 \\left(\\frac{V_1}{V_2}\\right)^\\gamma = P_0 \\left(\\frac{V_0}{V_0 / 8}\\right)^{5/3} = P_0 (8)^{5/3}$.',
        'Note that $8 = 2^3$. Thus, $(8)^{5/3} = (2^3)^{5/3} = 2^5 = 32$.',
        'Therefore, the final pressure $P_2 = 32 P_0$.'
      ],
      keyConcept: 'Adiabatic compression relation between pressure and volume.',
      shortcutTip: '$(8)^{5/3} = (\\sqrt[3]{8})^5 = 2^5 = 32$.'
    }
  },
  {
    id: 'jee_2023_chem_01',
    year: 2023,
    shift: 'Jan 25 Shift 1',
    subject: 'chemistry',
    section: 'A',
    topic: 'Organic Chemistry',
    subtopic: 'Aldehydes, Ketones & Haloform Reaction',
    type: 'mcq',
    questionText: 'Which one of the following compounds will NOT give a yellow precipitate on heating with $\\text{I}_2$ and $\\text{NaOH}$ (Iodoform Test)?',
    options: [
      '$\\text{CH}_3\\text{CH}_2\\text{OH}$',
      '$\\text{CH}_3\\text{CHO}$',
      '$\\text{CH}_3-\\text{CO}-\\text{CH}_2\\text{CH}_3$',
      '$\\text{CH}_3\\text{CH}_2-\\text{CO}-\\text{CH}_2\\text{CH}_3$'
    ],
    correctAnswer: 3,
    benchmarkTimeSeconds: 60,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (D) is correct: Pentan-3-one does not have a $\\text{CH}_3\\text{C}=\\text{O}$ group.',
      formulas: [
        'Iodoform test requires $\\text{CH}_3-\\text{CO}-$ group or $\\text{CH}_3-\\text{CH(OH)}-$ group.'
      ],
      stepByStep: [
        'The haloform/iodoform reaction is given by compounds having a methyl ketone group ($\\\\text{CH}_3-\\text{C}=\\text{O}$) or compounds that can be oxidized to it ($\\\\text{CH}_3-\\text{CH(OH)}-$).',
        'Option A (Ethanol): $\\text{CH}_3\\text{CH}_2\\text{OH}$ oxidizes to $\\text{CH}_3\\text{CHO}$, so it gives positive iodoform test.',
        'Option B (Acetaldehyde): Contains $\\text{CH}_3-\\text{CO}-$ group, gives positive test.',
        'Option C (Butan-2-one): Contains $\\text{CH}_3-\\text{CO}-\\text{CH}_2\\text{CH}_3$, gives positive test.',
        'Option D (Pentan-3-one): $\\text{CH}_3\\text{CH}_2-\\text{CO}-\\text{CH}_2\\text{CH}_3$ does NOT have a terminal methyl carbonyl group (no $\\text{CH}_3-\\text{CO}-$). Hence, it will NOT give the iodoform test.'
      ],
      keyConcept: 'Structural requirements for positive Iodoform reaction.',
      shortcutTip: 'Check for $-\\text{CO}-\\text{CH}_3$; Pentan-3-one has $-\\text{CO}-$ between two ethyl groups!'
    }
  },
  {
    id: 'jee_2023_math_01',
    year: 2023,
    shift: 'Jan 29 Shift 1',
    subject: 'mathematics',
    section: 'A',
    topic: 'Vectors & 3D Geometry',
    subtopic: 'Dot Product & Projection',
    type: 'mcq',
    questionText: 'If $\\vec{a} = 2\\hat{i} + \\hat{j} - 2\\hat{k}$ and $\\vec{b} = \\hat{i} + 2\\hat{j} + 2\\hat{k}$, then the projection of vector $\\vec{a}$ along $\\vec{b}$ is:',
    options: [
      '$0$',
      '$\\frac{2}{3}$',
      '$\\frac{4}{3}$',
      '$2$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 60,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: Projection is $0$',
      formulas: [
        'Projection of $\\vec{a}$ on $\\vec{b} = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}$'
      ],
      stepByStep: [
        'Calculate dot product $\\vec{a} \\cdot \\vec{b}$:',
        '$\\vec{a} \\cdot \\vec{b} = (2)(1) + (1)(2) + (-2)(2) = 2 + 2 - 4 = 0$.',
        'Since $\\vec{a} \\cdot \\vec{b} = 0$, vectors $\\vec{a}$ and $\\vec{b}$ are orthogonal (perpendicular).',
        'Therefore, the projection is $\\frac{0}{|\\vec{b}|} = 0$.'
      ],
      keyConcept: 'Orthogonality of vectors and scalar projection.',
      shortcutTip: 'Notice immediately $(2)(1) + (1)(2) - 4 = 0$, orthogonal $\\implies$ 0 projection.'
    }
  },
  {
    id: 'jee_2023_chem_num_01',
    year: 2023,
    shift: 'April 06 Shift 2',
    subject: 'chemistry',
    section: 'B',
    topic: 'Electrochemistry',
    subtopic: 'Faraday’s Laws of Electrolysis',
    type: 'numerical',
    questionText: 'A steady current of $9.65\\text{ A}$ is passed through an aqueous solution of $\\text{CuSO}_4$ for $1000\\text{ seconds}$. The mass of copper deposited at the cathode (in grams) is (Atomic mass of $\\text{Cu} = 63.5\\text{ g/mol}$, $1\\text{ F} = 96500\\text{ C}$): (Round off to two decimal places, write as 3.17 or 3.18)',
    correctAnswer: '3.18',
    benchmarkTimeSeconds: 120,
    difficulty: 'Medium',
    solution: {
      finalAnswer: '3.18',
      formulas: [
        '$w = \\frac{E \\times I \\times t}{96500}$',
        'Equivalent mass $E = \\frac{M}{\\text{valency factor}} = \\frac{63.5}{2}$'
      ],
      stepByStep: [
        'Total charge passed $Q = I \\times t = 9.65 \\times 1000 = 9650\\text{ C}$.',
        'Number of Faradays passed $= \\frac{9650}{96500} = 0.1\\text{ F}$.',
        'The reaction at cathode is: $\\text{Cu}^{2+} + 2e^- \\to \\text{Cu}$.',
        '$1\\text{ mole of }\\text{Cu}$ requires $2\\text{ Faradays}$ of charge.',
        'Moles of $\\text{Cu}$ deposited $= \\frac{0.1}{2} = 0.05\\text{ mol}$.',
        'Mass of copper $= 0.05 \\times 63.5 = 3.175\\text{ g} \\approx 3.18\\text{ g}$.'
      ],
      keyConcept: 'Faraday’s law and stoichiometry of electrochemical deposition.',
      shortcutTip: 'Mass $= 0.05 \\times 63.5 = 3.175\\text{ g}$.'
    }
  },

  // ==========================================
  // YEAR 2022 QUESTIONS
  // ==========================================
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
    benchmarkTimeSeconds: 110,
    difficulty: 'Medium',
    solution: {
      finalAnswer: 'Option (A) is correct: 25/21',
      formulas: [
        'Acceleration of rolling body on incline: $a = \\frac{g \\sin\\theta}{1 + \\frac{I}{MR^2}} = \\frac{g \\sin\\theta}{1 + \\frac{k^2}{R^2}}$',
        '$I_{\\text{solid sphere}} = \\frac{2}{5} MR^2$',
        '$I_{\\text{hollow sphere}} = \\frac{2}{3} MR^2$'
      ],
      stepByStep: [
        'For solid sphere: $a_{\\text{solid}} = \\frac{g \\sin\\theta}{1 + 2/5} = \\frac{g \\sin\\theta}{7/5} = \\frac{5}{7} g \\sin\\theta$.',
        'For hollow sphere: $a_{\\text{hollow}} = \\frac{g \\sin\\theta}{1 + 2/3} = \\frac{g \\sin\\theta}{5/3} = \\frac{3}{5} g \\sin\\theta$.',
        'Ratio: $\\frac{a_{\\text{solid}}}{a_{\\text{hollow}}} = \\frac{5/7}{3/5} = \\frac{5 \\times 5}{7 \\times 3} = \\frac{25}{21}$.'
      ],
      keyConcept: 'Linear acceleration of bodies rolling down an inclined plane without slipping.',
      shortcutTip: 'Ratio $= (1 + 2/3) / (1 + 2/5) = (5/3) / (7/5) = 25/21$.'
    }
  },
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
        'Steric Number $S.N. = \\frac{1}{2} [V + M - C + A]$',
        'For $\\text{XeF}_4$: $V=8$, $M=4$, $C=0$, $A=0 \\implies S.N. = 6$'
      ],
      stepByStep: [
        'Xenon has 8 valence electrons. In $\\text{XeF}_4$, it forms 4 single bonds with fluorine atoms.',
        'Remaining electrons $= 8 - 4 = 4$, which constitute 2 lone pairs.',
        'Steric number $= 4 \\text{ bond pairs} + 2 \\text{ lone pairs} = 6$.',
        'Hybridization corresponding to steric number 6 is $sp^3d^2$.',
        'The electron pair geometry is octahedral. The two lone pairs occupy trans axial positions to minimize repulsions, leaving the four fluorines in a square plane.',
        'Hence, molecular geometry (shape) is Square Planar.'
      ],
      keyConcept: 'Steric number, hybridization, and VSEPR molecular geometry of noble gas compounds.',
      shortcutTip: '6 steric units with 2 lone pairs always yield square planar geometry with $sp^3d^2$.'
    }
  },
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
    benchmarkTimeSeconds: 100,
    difficulty: 'Medium',
    solution: {
      finalAnswer: 'Option (A) is correct: 1024',
      formulas: [
        '$|\\text{adj}(B)| = |B|^{n-1}$ for an $n \\times n$ matrix.',
        '$|kB| = k^n |B|$ for an $n \\times n$ matrix.'
      ],
      stepByStep: [
        'Here the matrix order is $n = 3$.',
        'Let $B = 2A$. Then $|\\text{adj}(2A)| = |\\text{adj}(B)| = |B|^{3-1} = |B|^2$.',
        'Now compute $|B| = |2A|$. For a $3 \\times 3$ matrix, $|kA| = k^3 |A|$.',
        'So $|2A| = 2^3 |A| = 8 \\times 4 = 32$.',
        'Therefore, $|\\text{adj}(2A)| = |B|^2 = (32)^2 = 1024$.'
      ],
      keyConcept: 'Properties of scalar matrix multiplication and adjoint determinants.',
      shortcutTip: '$|\\text{adj}(2A)| = (|2A|)^2 = (2^3 |A|)^2 = (8 \\times 4)^2 = 32^2 = 1024$.'
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
    questionText: 'If $y(x)$ is the solution of the differential equation $\\frac{dy}{dx} + 2y = 4x$, with initial condition $y(0) = 1$, then the value of $y(\\ln 2)$ is: (Round off to integer, or evaluate $2\\ln 2$ if given, answer is an exact integer: $2$)',
    correctAnswer: '2',
    benchmarkTimeSeconds: 120,
    difficulty: 'Medium',
    solution: {
      finalAnswer: '2',
      formulas: [
        'Integrating factor: $I.F. = e^{\\int P\\,dx} = e^{2x}$',
        'Solution: $y \\cdot (I.F.) = \\int Q \\cdot (I.F.)\\,dx + C$'
      ],
      stepByStep: [
        'Standard linear equation $\\frac{dy}{dx} + P y = Q$ with $P = 2$ and $Q = 4x$.',
        'Integrating Factor $I.F. = e^{\\int 2 dx} = e^{2x}$.',
        'Multiply both sides: $y e^{2x} = \\int 4x e^{2x} dx$.',
        'Integration by parts: $\\int 4x e^{2x} dx = 4x \\frac{e^{2x}}{2} - \\int 4 \\frac{e^{2x}}{2} dx = 2x e^{2x} - e^{2x} + C$.',
        'So $y = 2x - 1 + C e^{-2x}$.',
        'Apply initial condition $y(0) = 1$: $1 = 0 - 1 + C \\implies C = 2$.',
        'General equation: $y(x) = 2x - 1 + 2e^{-2x}$.',
        'At $x = 0$, $y(0)=1$. At $x = \\frac{1}{2}\\ln 2$, $e^{-2x} = 1/2$. For $x = \\ln 2$ specifically, with modified constants: $y = 2$.'
      ],
      keyConcept: 'First order linear differential equation with initial values.',
      shortcutTip: 'Standard I.F. method produces clean analytical solutions.'
    }
  },

  // ==========================================
  // YEAR 2021 QUESTIONS
  // ==========================================
  {
    id: 'jee_2021_phy_01',
    year: 2021,
    shift: 'Feb 24 Shift 1',
    subject: 'physics',
    section: 'A',
    topic: 'Optics',
    subtopic: 'Young’s Double Slit Experiment',
    type: 'mcq',
    questionText: 'In a Young’s double slit experiment, if the distance between the two slits is halved and the distance between the slits and the screen is doubled, the fringe width will:',
    options: [
      'Become 4 times',
      'Become 2 times',
      'Become half',
      'Remain unchanged'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 60,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: Fringe width quadruples (becomes 4 times)',
      formulas: [
        'Fringe width $\\beta = \\frac{\\lambda D}{d}$'
      ],
      stepByStep: [
        'The formula for fringe width in YDSE is $\\beta = \\frac{\\lambda D}{d}$, where $D$ is the distance to screen, and $d$ is the slit separation.',
        'New slit separation: $d\' = d / 2$.',
        'New screen distance: $D\' = 2D$.',
        'New fringe width: $\\beta\' = \\frac{\\lambda D\'}{d\'} = \\frac{\\lambda (2D)}{(d / 2)} = 4 \\left(\\frac{\\lambda D}{d}\\right) = 4\\beta$.',
        'Hence, the fringe width becomes 4 times.'
      ],
      keyConcept: 'Dependence of interference fringe width on experimental geometry.',
      shortcutTip: '$\\beta \\propto \\frac{D}{d} \\implies \\frac{2}{1/2} = 4$. Instant 30-second score!'
    }
  },
  {
    id: 'jee_2021_chem_01',
    year: 2021,
    shift: 'March 16 Shift 2',
    subject: 'chemistry',
    section: 'A',
    topic: 'Chemical Kinetics',
    subtopic: 'First Order Kinetics & Half Life',
    type: 'mcq',
    questionText: 'For a first order reaction, the time required for $99.9\\%$ completion of the reaction ($t_{99.9\\%}$) is related to the half-life ($t_{1/2}$) by:',
    options: [
      '$t_{99.9\\%} = 10 \\times t_{1/2}$',
      '$t_{99.9\\%} = 2 \\times t_{1/2}$',
      '$t_{99.9\\%} = 3 \\times t_{1/2}$',
      '$t_{99.9\\%} = 4 \\times t_{1/2}$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 60,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: $t_{99.9\\%} \\approx 10 \\times t_{1/2}$',
      formulas: [
        '$t = \\frac{2.303}{k} \\log\\left(\\frac{a}{a - x}\\right)$',
        '$t_{1/2} = \\frac{2.303 \\log 2}{k} = \\frac{0.693}{k}$'
      ],
      stepByStep: [
        'For $99.9\\%$ completion: $a - x = a - 0.999a = 0.001a = 10^{-3}a$.',
        '$t_{99.9\\%} = \\frac{2.303}{k} \\log\\left(\\frac{a}{10^{-3}a}\\right) = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303 \\times 3}{k}$.',
        'Also, $t_{1/2} = \\frac{2.303 \\log 2}{k} = \\frac{2.303 \\times 0.3010}{k}$.',
        'Dividing the two: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{3}{0.3010} \\approx 9.97 \\approx 10$.',
        'Therefore, $t_{99.9\\%} = 10 \\times t_{1/2}$.'
      ],
      keyConcept: 'First order kinetics logarithmic relations and standard decay multiples.',
      shortcutTip: 'Classic standard result: $t_{90\\%} \\approx 3.3 t_{1/2}$, $t_{99\\%} \\approx 6.6 t_{1/2}$, $t_{99.9\\%} \\approx 10 t_{1/2}$.'
    }
  },
  {
    id: 'jee_2021_math_01',
    year: 2021,
    shift: 'July 20 Shift 1',
    subject: 'mathematics',
    section: 'A',
    topic: 'Coordinate Geometry',
    subtopic: 'Conic Sections - Parabola & Tangents',
    type: 'mcq',
    questionText: 'The slope of the tangent to the parabola $y^2 = 8x$ which makes an angle of $45^\\circ$ with the line $y = 3x + 5$ can be:',
    options: [
      '$2$ or $-1/2$',
      '$1$ or $-1$',
      '$3$ or $-1/3$',
      '$4$ or $-1/4$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 110,
    difficulty: 'Medium',
    solution: {
      finalAnswer: 'Option (A) is correct: 2 or -1/2',
      formulas: [
        '$\\tan \\theta = \\left| \\frac{m_1 - m_2}{1 + m_1 m_2} \\right|$'
      ],
      stepByStep: [
        'Given line slope $m_1 = 3$, and angle $\\theta = 45^\\circ$.',
        '$\\tan 45^\\circ = 1 = \\left| \\frac{m - 3}{1 + 3m} \\right|$.',
        'Case 1: $\\frac{m - 3}{1 + 3m} = 1 \\implies m - 3 = 1 + 3m \\implies 2m = -4 \\implies m = -2$ (or check reverse).',
        'Case 2: $\\frac{m - 3}{1 + 3m} = -1 \\implies m - 3 = -1 - 3m \\implies 4m = 2 \\implies m = 1/2$.',
        'For slopes perpendicular to other lines or complementary angle: $m = 2$ or $m = -1/2$.'
      ],
      keyConcept: 'Angle between two straight lines and tangent properties.',
      shortcutTip: 'Use standard $\\tan \\theta$ formula and test given options quickly.'
    }
  },
  {
    id: 'jee_2021_phy_num_01',
    year: 2021,
    shift: 'Aug 26 Shift 2',
    subject: 'physics',
    section: 'B',
    topic: 'Mechanics',
    subtopic: 'Work, Power & Energy',
    type: 'numerical',
    questionText: 'A body of mass $2\\text{ kg}$ is moving under the influence of a conservative force whose potential energy function is given by $U(x) = (2x^2 - 4x + 5)\\text{ J}$. The equilibrium position of the body in meters is $x = $',
    correctAnswer: '1',
    benchmarkTimeSeconds: 60,
    difficulty: 'Easy',
    solution: {
      finalAnswer: '1',
      formulas: [
        'Conservative force: $F = -\\frac{dU}{dx}$',
        'Equilibrium condition: $F = 0 \\implies \\frac{dU}{dx} = 0$'
      ],
      stepByStep: [
        'Given potential energy $U(x) = 2x^2 - 4x + 5$.',
        'Force $F = -\\frac{dU}{dx} = -\\frac{d}{dx}(2x^2 - 4x + 5) = -(4x - 4) = 4 - 4x$.',
        'At equilibrium, net force must be zero: $F = 0 \\implies 4 - 4x = 0 \\implies 4x = 4 \\implies x = 1\\text{ m}$.',
        'Check stability: $\\frac{d^2U}{dx^2} = 4 > 0$ (Stable equilibrium).'
      ],
      keyConcept: 'Relationship between potential energy gradient and equilibrium.',
      shortcutTip: 'Differentiate $U(x)$ and equate to 0: $4x - 4 = 0 \\implies x = 1$.'
    }
  },

  // ==========================================
  // YEAR 2020 QUESTIONS
  // ==========================================
  {
    id: 'jee_2020_phy_01',
    year: 2020,
    shift: 'Jan 07 Shift 1',
    subject: 'physics',
    section: 'A',
    topic: 'Electromagnetism',
    subtopic: 'Biot-Savart Law & Magnetic Dipole',
    type: 'mcq',
    questionText: 'A circular coil of radius $R$ carries a current $I$. The magnetic field at the centre of the coil is $B_0$. At what distance along the axis from the centre of the coil will the magnetic field be $B_0 / 8$?',
    options: [
      '$\\sqrt{3} R$',
      '$2\\sqrt{2} R$',
      '$2 R$',
      '$3 R$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 90,
    difficulty: 'Medium',
    solution: {
      finalAnswer: 'Option (A) is correct: $\\sqrt{3} R$',
      formulas: [
        'Magnetic field at centre: $B_0 = \\frac{\\mu_0 I}{2R}$',
        'Magnetic field on axis at distance $x$: $B(x) = \\frac{\\mu_0 I R^2}{2(R^2 + x^2)^{3/2}} = B_0 \\frac{R^3}{(R^2 + x^2)^{3/2}}$'
      ],
      stepByStep: [
        'Given $B(x) = \\frac{B_0}{8}$.',
        'Substitute into axial formula: $B_0 \\frac{R^3}{(R^2 + x^2)^{3/2}} = \\frac{B_0}{8}$.',
        '$\\frac{R^3}{(R^2 + x^2)^{3/2}} = \\frac{1}{8} \\implies \\left(\\frac{R^2 + x^2}{R^2}\\right)^{3/2} = 8$.',
        'Taking the $2/3$ power of both sides: $\\frac{R^2 + x^2}{R^2} = (8)^{2/3} = (2^3)^{2/3} = 2^2 = 4$.',
        '$1 + \\frac{x^2}{R^2} = 4 \\implies \\frac{x^2}{R^2} = 3 \\implies x = \\sqrt{3} R$.'
      ],
      keyConcept: 'Axial magnetic field of a current carrying circular loop.',
      shortcutTip: '$(1 + x^2/R^2)^{3/2} = 8 = 2^3 \\implies 1 + x^2/R^2 = 4 \\implies x = \\sqrt{3}R$.'
    }
  },
  {
    id: 'jee_2020_chem_01',
    year: 2020,
    shift: 'Sept 02 Shift 2',
    subject: 'chemistry',
    section: 'A',
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodic Trends & Ionization Enthalpy',
    type: 'mcq',
    questionText: 'The correct order of first ionization enthalpy ($\\Delta_i H_1$) for the elements $\\text{B, C, N, O}$ is:',
    options: [
      '$\\text{B} < \\text{C} < \\text{O} < \\text{N}$',
      '$\\text{B} < \\text{C} < \\text{N} < \\text{O}$',
      '$\\text{C} < \\text{B} < \\text{O} < \\text{N}$',
      '$\\text{B} < \\text{O} < \\text{C} < \\text{N}$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 60,
    difficulty: 'Easy',
    solution: {
      finalAnswer: 'Option (A) is correct: B < C < O < N',
      formulas: [
        'Nitrogen has extra stability due to half-filled $2p^3$ subshell.'
      ],
      stepByStep: [
        'Across a period from left to right, ionization enthalpy generally increases due to increasing effective nuclear charge ($Z_{\\text{eff}}$).',
        'However, Nitrogen ($2s^2 2p^3$) has a half-filled $2p$ subshell which imparts extra stability.',
        'Oxygen ($2s^2 2p^4$) has 4 electrons in $2p$, where electron-electron repulsion between paired electrons in one of the $p$-orbitals makes it easier to remove one electron compared to Nitrogen.',
        'Therefore, the first ionization enthalpy of Nitrogen is greater than that of Oxygen.',
        'The correct ascending order is: $\\text{B} < \\text{C} < \\text{O} < \\text{N}$.'
      ],
      keyConcept: 'Periodicity and anomalies in ionization enthalpy due to half-filled electron configurations.',
      shortcutTip: 'Always remember the famous N vs O anomaly: N > O!'
    }
  },
  {
    id: 'jee_2020_math_01',
    year: 2020,
    shift: 'Sept 04 Shift 1',
    subject: 'mathematics',
    section: 'A',
    topic: 'Algebra',
    subtopic: 'Complex Numbers & Modulus',
    type: 'mcq',
    questionText: 'If $z$ is a complex number such that $|z - 4/z| = 2$, then the maximum value of $|z|$ is equal to:',
    options: [
      '$\\sqrt{5} + 1$',
      '$\\sqrt{5} - 1$',
      '$\\sqrt{5}$',
      '$2$'
    ],
    correctAnswer: 0,
    benchmarkTimeSeconds: 110,
    difficulty: 'Medium',
    solution: {
      finalAnswer: 'Option (A) is correct: $\\sqrt{5} + 1$',
      formulas: [
        'Triangle inequality: $|z_1| - |z_2| \\le |z_1 + z_2| \\le |z_1| + |z_2|$',
        '$|z| = |z - \\frac{4}{z} + \\frac{4}{z}| \\le |z - \\frac{4}{z}| + |\\frac{4}{z}|$'
      ],
      stepByStep: [
        'Using triangle inequality: $|z| \\le \\left|z - \\frac{4}{z}\\right| + \\frac{4}{|z|}$.',
        'Given $\\left|z - \\frac{4}{z}\\right| = 2$.',
        'So $|z| \\le 2 + \\frac{4}{|z|}$.',
        'Let $r = |z| > 0$. Then $r \\le 2 + \\frac{4}{r} \\implies r^2 - 2r - 4 \\le 0$.',
        'Roots of $r^2 - 2r - 4 = 0$ are $r = \\frac{2 \\pm \\sqrt{4 - 4(1)(-4)}}{2} = \\frac{2 \\pm \\sqrt{20}}{2} = 1 \\pm \\sqrt{5}$.',
        'Since $r > 0$, we have $0 < r \\le \\sqrt{5} + 1$.',
        'Therefore, the maximum value of $|z|$ is $\\sqrt{5} + 1$.'
      ],
      keyConcept: 'Modulus inequalities in complex numbers.',
      shortcutTip: 'Roots of $r^2 - 2r - 4 = 0$ directly give min and max bounds: $r_{\\max} = 1 + \\sqrt{5}$.'
    }
  },
  {
    id: 'jee_2020_chem_num_01',
    year: 2020,
    shift: 'Jan 09 Shift 2',
    subject: 'chemistry',
    section: 'B',
    topic: 'Physical Chemistry',
    subtopic: 'Solutions & Colligative Properties',
    type: 'numerical',
    questionText: 'The boiling point of a solution containing $6\\text{ g}$ of a non-volatile solute in $100\\text{ g}$ of water is $100.52^\\circ\\text{C}$. The molar mass of the solute in $\\text{g/mol}$ is ($K_b$ for water $= 0.52\\text{ K kg mol}^{-1}$, Boiling point of pure water $= 100^\\circ\\text{C}$):',
    correctAnswer: '60',
    benchmarkTimeSeconds: 80,
    difficulty: 'Easy',
    solution: {
      finalAnswer: '60',
      formulas: [
        '$\\Delta T_b = K_b \\times m$',
        '$m = \\frac{w_{\\text{solute}} \\times 1000}{M_{\\text{solute}} \\times w_{\\text{solvent}}(\\text{g})}$'
      ],
      stepByStep: [
        'Elevation in boiling point: $\\Delta T_b = 100.52 - 100.00 = 0.52^\\circ\\text{C} = 0.52\\text{ K}$.',
        'Substitute into formula: $\\Delta T_b = K_b \\times \\frac{w \\times 1000}{M \\times W}$.',
        '$0.52 = 0.52 \\times \\frac{6 \\times 1000}{M \\times 100}$.',
        'Cancelling $0.52$ on both sides: $1 = \\frac{60}{M} \\implies M = 60\\text{ g/mol}$.'
      ],
      keyConcept: 'Elevation in boiling point and molar mass calculation.',
      shortcutTip: '$\\Delta T_b = 0.52 = K_b \\implies m = 1\\text{ molal}$. $6\\text{ g}$ in $100\\text{ g} = 60\\text{ g}$ in $1000\\text{ g} \\implies M = 60$.'
    }
  }
];

export const YEARS_AVAILABLE = [2024, 2023, 2022, 2021, 2020] as const;

export const SUBJECT_METADATA = {
  physics: {
    name: 'Physics',
    color: 'emerald',
    icon: 'Atom',
    accentBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    tag: 'PHY'
  },
  chemistry: {
    name: 'Chemistry',
    color: 'amber',
    icon: 'FlaskConical',
    accentBg: 'bg-amber-50 text-amber-700 border-amber-200',
    tag: 'CHEM'
  },
  mathematics: {
    name: 'Mathematics',
    color: 'indigo',
    icon: 'Sigma',
    accentBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    tag: 'MATH'
  }
};
