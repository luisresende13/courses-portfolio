'use client';

import { useState } from 'react';
import { Course } from '@/data/types';

function gradeColor(grade: number) {
  if (grade >= 90) return 'text-emerald-700 bg-emerald-50';
  if (grade >= 80) return 'text-amber-700 bg-amber-50';
  return 'text-slate-700 bg-slate-50';
}

export default function GradeTable({ courses }: { courses: Course[] }) {
  const [sortAsc, setSortAsc] = useState(false);

  const sorted = [...courses].sort((a, b) =>
    sortAsc ? (a.grade ?? 0) - (b.grade ?? 0) : (b.grade ?? 0) - (a.grade ?? 0)
  );

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="text-left px-4 py-3 font-medium text-slate-600">Course</th>
            <th className="text-left px-4 py-3 font-medium text-slate-600">Institution</th>
            <th
              className="text-right px-4 py-3 font-medium text-slate-600 cursor-pointer select-none hover:text-slate-900"
              onClick={() => setSortAsc(a => !a)}
            >
              Grade {sortAsc ? '↑' : '↓'}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {sorted.map(course => (
            <tr key={course.id} className="hover:bg-slate-50">
              <td className="px-4 py-3 text-slate-900">{course.title}</td>
              <td className="px-4 py-3 text-slate-500">{course.institution}</td>
              <td className="px-4 py-3 text-right">
                <span className={`inline-flex px-2 py-0.5 rounded font-medium text-xs ${gradeColor(course.grade ?? 0)}`}>
                  {course.grade}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
