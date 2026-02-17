import { Accomplishment } from '@/data/types';

export default function CertificateCard({ acc }: { acc: Accomplishment }) {
  const typeLabel = acc.type === 'professional-certificate' ? 'Professional Certificate' : 'Specialization';
  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-700 transition-all group">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
        <span className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">{typeLabel}</span>
      </div>
      <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm leading-snug mb-1">
        {acc.title}
      </h3>
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{acc.institution}</p>
      <div className="flex flex-wrap gap-2">
        {acc.certificateUrl && (
          <a
            href={acc.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors"
          >
            View Certificate ↗
          </a>
        )}
        <a
          href={acc.courseraUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs px-3 py-1.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600 rounded-lg font-medium transition-colors"
        >
          Coursera ↗
        </a>
      </div>
    </div>
  );
}
