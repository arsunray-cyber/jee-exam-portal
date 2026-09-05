import { Question } from '../types';
import { QUESTIONS_2024 } from './questions2024';
import { QUESTIONS_2023 } from './questions2023';
import { QUESTIONS_2022 } from './questions2022';
import { QUESTIONS_2021 } from './questions2021';
import { QUESTIONS_2020 } from './questions2020';
import { QUESTIONS_2019 } from './questions2019';
import { QUESTIONS_2018 } from './questions2018';
import { QUESTIONS_2017 } from './questions2017';
import { QUESTIONS_2016 } from './questions2016';
import { QUESTIONS_2015 } from './questions2015';
import { QUESTIONS_2014 } from './questions2014';
import { QUESTIONS_2013 } from './questions2013';
import { QUESTIONS_2012 } from './questions2012';
import { QUESTIONS_2011 } from './questions2011';
import { QUESTIONS_2010 } from './questions2010';

export const JEE_PREVIOUS_YEAR_QUESTIONS: Question[] = [
  ...QUESTIONS_2024,
  ...QUESTIONS_2023,
  ...QUESTIONS_2022,
  ...QUESTIONS_2021,
  ...QUESTIONS_2020,
  ...QUESTIONS_2019,
  ...QUESTIONS_2018,
  ...QUESTIONS_2017,
  ...QUESTIONS_2016,
  ...QUESTIONS_2015,
  ...QUESTIONS_2014,
  ...QUESTIONS_2013,
  ...QUESTIONS_2012,
  ...QUESTIONS_2011,
  ...QUESTIONS_2010,
];

export const YEARS_AVAILABLE = [
  2024, 2023, 2022, 2021, 2020,
  2019, 2018, 2017, 2016, 2015,
  2014, 2013, 2012, 2011, 2010
] as const;

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
