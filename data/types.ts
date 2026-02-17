export type CompletionStatus = 'completed' | 'in-progress' | 'not-started';
export type ProgramType = 'specialization' | 'professional-certificate';

export interface Course {
  id: string;
  title: string;
  institution: string;
  grade?: number;
  completed: boolean;
  certificateUrl?: string;
}

export interface ProgramCourse {
  courseId: string;
  completed: boolean;
}

export interface Program {
  id: string;
  title: string;
  type: ProgramType;
  institution: string;
  courseraUrl: string;
  status: CompletionStatus;
  courses: ProgramCourse[];
}

export interface CourseOverlap {
  courseId: string;
  programIds: string[];
}

export interface ProgramOverlap {
  programIdA: string;
  programIdB: string;
  sharedCourseIds: string[];
}

export interface Accomplishment {
  programId: string;
  title: string;
  institution: string;
  type: ProgramType;
  courseraUrl: string;
  certificateUrl?: string;
}

export interface StrategyItem {
  rank: number;
  programId: string;
  remainingCourses: number;
  contributesTo: string[];
  rationale: string;
}
