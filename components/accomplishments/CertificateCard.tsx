import { Accomplishment } from '@/data/types';

export default function CertificateCard({ acc }: { acc: Accomplishment }) {
  const typeLabel = acc.type === 'professional-certificate' ? 'Professional Certificate' : 'Specialization';
  return (
    <a
      href={acc.courseraUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-700 transition-all group"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
        <span className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">{typeLabel}</span>
      </div>
      <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm leading-snug group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors mb-1">
        {acc.title}
      </h3>
      <p className="text-xs text-slate-500 dark:text-slate-400">{acc.institution}</p>
    </a>
  );
}
