import { SCORE_F } from './SCORE_F';

type FacultyEntry = {
  slot: string;
  venue: string;
  faculty: string;
};

type SubjectGroup = {
  [subjectCode: string]: FacultyEntry[];
};

type Subjects = {
  [category: string]: SubjectGroup;
};

type Schools = {
  [schoolName: string]: Subjects;
};

export const data: Schools = {
  "SCORE ('25 Batch)": SCORE_F,
};
