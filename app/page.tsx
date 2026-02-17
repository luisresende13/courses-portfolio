import Link from 'next/link';
import { programs } from '@/data/programs';
import { courses } from '@/data/courses';
import { accomplishments } from '@/data/accomplishments';

export default function Home() {
  const completed = programs.filter(p => p.status === 'completed').length;
  const inProgress = programs.filter(p => p.status === 'in-progress').length;
  const coursesWithGrade = courses.filter(c => c.grade !== undefined);
  const avgGrade = coursesWithGrade.length
    ? Math.round(coursesWithGrade.reduce((sum, c) => sum + (c.grade ?? 0), 0) / coursesWithGrade.length * 10) / 10
    : 0;

  const stats = [
    { label: 'Certificates Earned', value: accomplishments.length, color: 'text-emerald-600' },
    { label: 'Courses Completed', value: coursesWithGrade.length, color: 'text-blue-600' },
    { label: 'Average Grade', value: `${avgGrade}%`, color: 'text-violet-600' },
    { label: 'Programs In Progress', value: inProgress, color: 'text-amber-600' },
  ];

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="pt-8 pb-4">
        <p className="text-sm font-medium text-blue-600 mb-3 uppercase tracking-widest">AI / ML / Data Science Portfolio</p>
        <h1 className="text-4xl font-bold text-slate-900 leading-tight mb-4">
          Learning at the frontier<br />of artificial intelligence.
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mb-8">
          A structured journey through IBM&apos;s professional certification ecosystem — spanning Data Science, Machine Learning, Deep Learning, Generative AI, and Agentic AI.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/accomplishments" className="px-5 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors">
            View Accomplishments
          </Link>
          <Link href="/programs" className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
            Browse Programs
          </Link>
          <Link href="/roadmap" className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
            Learning Roadmap
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(stat => (
          <div key={stat.label} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm text-center">
            <div className={`text-3xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
            <div className="text-sm text-slate-500">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Quick links */}
      <section>
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Explore</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/programs" className="group bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
            <div className="text-2xl mb-2">📋</div>
            <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">All Programs</h3>
            <p className="text-sm text-slate-500">{completed} completed, {inProgress} in progress across {programs.length} total programs.</p>
          </Link>
          <Link href="/courses" className="group bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
            <div className="text-2xl mb-2">🔍</div>
            <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">Course Overlap</h3>
            <p className="text-sm text-slate-500">See which courses are shared between programs and compare any two programs side by side.</p>
          </Link>
          <Link href="/roadmap" className="group bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
            <div className="text-2xl mb-2">🗺️</div>
            <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">Learning Roadmap</h3>
            <p className="text-sm text-slate-500">Strategic analysis of which programs unlock the most other programs when completed.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
