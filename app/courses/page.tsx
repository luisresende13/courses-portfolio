import { courses } from '@/data/courses';
import { programs } from '@/data/programs';
import CourseOverlapExplorer from '@/components/courses/CourseOverlapExplorer';

export default function CoursesPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">Course Overlap Explorer</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          Look up any course to see which programs contain it, or compare two programs to see their shared and unique courses.
        </p>
      </div>
      <CourseOverlapExplorer courses={courses} programs={programs} />
    </div>
  );
}
