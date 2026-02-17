import { notFound } from 'next/navigation';
import Link from 'next/link';
import { programs, programMap } from '@/data/programs';
import { courseMap } from '@/data/courses';
import { getOverlappingPrograms, courseToPrograms } from '@/lib/overlap';
import { getProgress, statusColor, statusLabel, statusBorderColor, typeLabel } from '@/lib/program-utils';
import StatusBadge from '@/components/programs/StatusBadge';
import ProgressBar from '@/components/programs/ProgressBar';

export function generateStaticParams() {
  return programs.map(p => ({ slug: p.id }));
}

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const program = programMap.get(params.slug);
  if (!program) notFound();

  const { done, total } = getProgress(program);
  const overlapping = getOverlappingPrograms(program.id);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Link href="/programs" className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 mb-4 inline-flex items-center gap-1">
          ← Back to Programs
        </Link>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <StatusBadge status={program.status} />
          <span className="text-sm text-slate-400 dark:text-slate-500">{typeLabel(program.type)}</span>
          <span className="text-sm text-slate-400 dark:text-slate-500">·</span>
          <span className="text-sm text-slate-400 dark:text-slate-500">{program.institution}</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">{program.title}</h1>
        <div className="max-w-sm">
          <ProgressBar done={done} total={total} status={program.status} />
        </div>
        <a
          href={program.courseraUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-3 text-sm text-blue-600 hover:underline"
        >
          View on Coursera ↗
        </a>
      </div>

      {/* Course list */}
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
          <h2 className="font-semibold text-slate-900 dark:text-slate-100">Courses</h2>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-slate-700">
          {program.courses.map(pc => {
            const course = courseMap.get(pc.courseId);
            if (!course) return null;
            const appearsIn = courseToPrograms.get(pc.courseId) ?? [];
            const otherPrograms = appearsIn.filter(id => id !== program.id);

            return (
              <div key={pc.courseId} className="px-5 py-3 flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="mt-0.5 shrink-0">
                    {pc.completed
                      ? <span className="text-emerald-500 text-base leading-none">✓</span>
                      : <span className="w-4 h-4 rounded-full border-2 border-slate-300 dark:border-slate-600 inline-block" />
                    }
                  </div>
                  <div className="min-w-0">
                    <p className={`text-sm font-medium leading-snug ${pc.completed ? 'text-slate-900 dark:text-slate-100' : 'text-slate-500 dark:text-slate-400'}`}>
                      {course.title}
                    </p>
                    {course.grade !== undefined && (
                      <p className="text-xs text-emerald-600 mt-0.5">{course.grade}%</p>
                    )}
                  </div>
                </div>
                {otherPrograms.length > 0 && (
                  <div className="shrink-0 flex flex-wrap gap-1 justify-end">
                    <span className="text-xs text-slate-400 dark:text-slate-500">Also in:</span>
                    {otherPrograms.slice(0, 3).map(id => {
                      const p = programMap.get(id);
                      return p ? (
                        <Link
                          key={id}
                          href={`/programs/${id}`}
                          className={`text-xs px-2 py-0.5 rounded border ${statusBorderColor(p.status)} bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors`}
                          title={p.title}
                        >
                          {p.title.replace(/ Specialization| Professional Certificate/, '').substring(0, 25)}
                        </Link>
                      ) : null;
                    })}
                    {otherPrograms.length > 3 && (
                      <span className="text-xs text-slate-400 dark:text-slate-500">+{otherPrograms.length - 3} more</span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Overlapping programs */}
      {overlapping.length > 0 && (
        <div>
          <h2 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Programs with Shared Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {overlapping.map(overlap => {
              const p = programMap.get(overlap.programIdB);
              if (!p) return null;
              return (
                <Link
                  key={p.id}
                  href={`/programs/${p.id}`}
                  className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-blue-200 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors shadow-sm"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100 truncate">{p.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{typeLabel(p.type)}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 ml-3">
                    <span className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-0.5 rounded border border-blue-100 dark:border-blue-800">
                      {overlap.sharedCourseIds.length} shared
                    </span>
                    <div className={`w-2 h-2 rounded-full ${statusColor(p.status)}`} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
