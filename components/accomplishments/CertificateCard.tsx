import { Accomplishment } from '@/data/types';

export default function CertificateCard({ acc }: { acc: Accomplishment }) {
  const typeLabel = acc.type === 'professional-certificate' ? 'Professional Certificate' : 'Specialization';
  return (
    <a
      href={acc.courseraUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all group"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
        <span className="text-xs text-emerald-700 font-medium">{typeLabel}</span>
      </div>
      <h3 className="font-semibold text-slate-900 text-sm leading-snug group-hover:text-emerald-700 transition-colors mb-1">
        {acc.title}
      </h3>
      <p className="text-xs text-slate-500">{acc.institution}</p>
    </a>
  );
}
