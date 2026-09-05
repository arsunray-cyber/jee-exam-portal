import { Question } from '../types';
import { QUESTIONS_2024 } from './questions2024';
import { QUESTIONS_2023 } from './questions2023';
import { QUESTIONS_2022 } from './questions2022';
import { QUESTIONS_2021 } from './questions2021';
import { QUESTIONS_2020 } from './questions2020';

export const JEE_PREVIOUS_YEAR_QUESTIONS: Question[] = [
  ...QUESTIONS_2024,
  ...QUESTIONS_2023,
  ...QUESTIONS_2022,
  ...QUESTIONS_2021,
  ...QUESTIONS_2020,
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
