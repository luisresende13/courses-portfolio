'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Course, Program } from '@/data/types';
import { getProgramsForCourse, getProgramPairOverlap } from '@/lib/overlap';
import { courseMap } from '@/data/courses';
import { programMap } from '@/data/programs';
import { statusColor, statusLabel, typeLabel } from '@/lib/program-utils';

interface Props {
  courses: Course[];
  programs: Program[];
}

function CourseRow({ course, programs }: { course: Course; programs: Program[] }) {
  return (
    <div className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700">
      <div className="flex items-center gap-2">
        {course.completed
          ? <span className="text-emerald-500 text-base">✓</span>
          : <span className="w-4 h-4 rounded-full border-2 border-slate-300 dark:border-slate-600 inline-block" />
        }
        <span className={`text-sm ${course.completed ? 'text-slate-900 dark:text-slate-100' : 'text-slate-500 dark:text-slate-400'}`}>{course.title}</span>
      </div>
      <div className="flex gap-1 flex-wrap justify-end">
        {programs.map(p => (
          <Link
            key={p.id}
            href={`/programs/${p.id}`}
            className="text-xs px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
          >
            {p.title.replace(/ Specialization| Professional Certificate/, '')}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function CourseOverlapExplorer({ courses, programs }: Props) {
  const [mode, setMode] = useState<'course' | 'compare'>('course');
  const [query, setQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [programA, setProgramA] = useState('');
  const [programB, setProgramB] = useState('');

  const filteredCourses = useMemo(
    () => courses.filter(c => c.title.toLowerCase().includes(query.toLowerCase())),
    [courses, query]
  );

  const courseProgramIds = selectedCourse ? getProgramsForCourse(selectedCourse) : [];
  const coursePrograms = courseProgramIds.map(id => programMap.get(id)!).filter(Boolean);

  const overlap = programA && programB ? getProgramPairOverlap(programA, programB) : null;
  const sharedCourses = overlap?.sharedCourseIds.map(id => courseMap.get(id)!).filter(Boolean) ?? [];

  const progA = programMap.get(programA);
  const progB = programMap.get(programB);
  const progACourseIds = new Set(progA?.courses.map(c => c.courseId) ?? []);
  const progBCourseIds = new Set(progB?.courses.map(c => c.courseId) ?? []);
  const onlyA = progA?.courses.filter(c => !progBCourseIds.has(c.courseId)) ?? [];
  const onlyB = progB?.courses.filter(c => !progACourseIds.has(c.courseId)) ?? [];

  return (
    <div>
      {/* Mode tabs */}
      <div className="flex gap-2 mb-6">
        {(['course', 'compare'] as const).map(m => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              mode === m ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-600'
            }`}
          >
            {m === 'course' ? 'Course Lookup' : 'Program Comparison'}
          </button>
        ))}
      </div>

      {mode === 'course' && (
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Search courses..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden max-h-64 overflow-y-auto">
            {filteredCourses.map(course => {
              const programCount = getProgramsForCourse(course.id).length;
              return (
                <button
                  key={course.id}
                  onClick={() => setSelectedCourse(course.id)}
                  className={`w-full text-left px-4 py-2.5 text-sm border-b border-slate-100 dark:border-slate-700 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-700 flex justify-between items-center ${
                    selectedCourse === course.id ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300' : 'text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {course.completed
                      ? <span className="text-emerald-500 text-xs">✓</span>
                      : <span className="w-3 h-3 rounded-full border border-slate-300 dark:border-slate-600 inline-block" />
                    }
                    {course.title}
                  </span>
                  {programCount > 1 && (
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-0.5 rounded shrink-0">
                      {programCount} programs
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {selectedCourse && (
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">{courseMap.get(selectedCourse)?.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                Appears in <strong>{coursePrograms.length}</strong> program{coursePrograms.length !== 1 ? 's' : ''}
              </p>
              <div className="space-y-2">
                {coursePrograms.map(p => {
                  const pc = p.courses.find(c => c.courseId === selectedCourse);
                  return (
                    <Link
                      key={p.id}
                      href={`/programs/${p.id}`}
                      className="flex items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                    >
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{p.title}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{typeLabel(p.type)}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {pc?.completed
                          ? <span className="text-xs text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded">Done in this program</span>
                          : <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-700 px-2 py-0.5 rounded">Pending</span>
                        }
                        <div className={`w-2 h-2 rounded-full ${statusColor(p.status)}`} />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {mode === 'compare' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {([['Program A', programA, setProgramA], ['Program B', programB, setProgramB]] as const).map(([label, val, setter]) => (
              <div key={label}>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">{label}</label>
                <select
                  value={val}
                  onChange={e => setter(e.target.value)}
                  className="w-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a program...</option>
                  {programs.map(p => (
                    <option key={p.id} value={p.id}>{p.title}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          {progA && progB && (
            <div className="space-y-4">
              {/* Shared */}
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  Shared Courses <span className="text-slate-400 dark:text-slate-500 font-normal">({sharedCourses.length})</span>
                </h3>
                {sharedCourses.length === 0 ? (
                  <p className="text-sm text-slate-400 dark:text-slate-500">No shared courses.</p>
                ) : (
                  <div className="space-y-1">
                    {sharedCourses.map(c => {
                      const doneInA = progA.courses.find(pc => pc.courseId === c.id)?.completed;
                      const doneInB = progB.courses.find(pc => pc.courseId === c.id)?.completed;
                      return (
                        <div key={c.id} className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-slate-50 dark:hover:bg-slate-700">
                          <span className="text-sm text-slate-800 dark:text-slate-200">{c.title}</span>
                          <div className="flex gap-2 text-xs shrink-0">
                            <span className={doneInA ? 'text-emerald-600' : 'text-slate-400 dark:text-slate-500'}>A: {doneInA ? '✓' : '○'}</span>
                            <span className={doneInB ? 'text-emerald-600' : 'text-slate-400 dark:text-slate-500'}>B: {doneInB ? '✓' : '○'}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Unique to each */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Only in A', prog: progA, courses: onlyA },
                  { label: 'Only in B', prog: progB, courses: onlyB },
                ].map(({ label, prog, courses }) => (
                  <div key={label} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
                    <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-2">{label}</h4>
                    <div className="space-y-1">
                      {courses.map(pc => {
                        const c = courseMap.get(pc.courseId);
                        return c ? (
                          <div key={pc.courseId} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                            {pc.completed
                              ? <span className="text-emerald-500">✓</span>
                              : <span className="w-3 h-3 rounded-full border border-slate-300 dark:border-slate-600 inline-block shrink-0" />
                            }
                            {c.title}
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
