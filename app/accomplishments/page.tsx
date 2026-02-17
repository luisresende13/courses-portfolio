import { accomplishments } from '@/data/accomplishments';
import { courses } from '@/data/courses';
import CertificateCard from '@/components/accomplishments/CertificateCard';
import GradeTable from '@/components/accomplishments/GradeTable';

export default function AccomplishmentsPage() {
  const coursesWithGrades = courses.filter(c => c.grade !== undefined);
  const avgGrade = coursesWithGrades.length
    ? Math.round(coursesWithGrades.reduce((s, c) => s + (c.grade ?? 0), 0) / coursesWithGrades.length * 10) / 10
    : 0;

  const professionalCerts = accomplishments.filter(a => a.type === 'professional-certificate');
  const specializations = accomplishments.filter(a => a.type === 'specialization');

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-1">Accomplishments</h1>
        <p className="text-slate-500 text-sm">Completed certificates and course grades.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Certificates Earned', value: accomplishments.length, color: 'text-emerald-600' },
          { label: 'Courses Graded', value: coursesWithGrades.length, color: 'text-blue-600' },
          { label: 'Average Grade', value: `${avgGrade}%`, color: 'text-violet-600' },
        ].map(s => (
          <div key={s.label} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm text-center">
            <div className={`text-3xl font-bold mb-1 ${s.color}`}>{s.value}</div>
            <div className="text-sm text-slate-500">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Professional Certificates */}
      <div>
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Professional Certificates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {professionalCerts.map(acc => (
            <CertificateCard key={acc.programId} acc={acc} />
          ))}
        </div>
      </div>

      {/* Specializations */}
      <div>
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Specializations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {specializations.map(acc => (
            <CertificateCard key={acc.programId} acc={acc} />
          ))}
        </div>
      </div>

      {/* Grade table */}
      <div>
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Course Grades</h2>
        <GradeTable courses={coursesWithGrades} />
      </div>
    </div>
  );
}
