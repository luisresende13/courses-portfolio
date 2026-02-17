import Link from 'next/link';
import { Program } from '@/data/types';
import { getProgress, statusBorderColor, typeLabel } from '@/lib/program-utils';
import StatusBadge from './StatusBadge';
import ProgressBar from './ProgressBar';

export default function ProgramCard({ program }: { program: Program }) {
  const { done, total } = getProgress(program);

  return (
    <Link href={`/programs/${program.id}`} className="block group">
      <div className={`h-full bg-white rounded-xl border-l-4 border border-slate-200 ${statusBorderColor(program.status)} p-5 shadow-sm hover:shadow-md transition-shadow`}>
        <div className="flex items-start justify-between gap-2 mb-2">
          <StatusBadge status={program.status} />
          <span className="text-xs text-slate-400 shrink-0">{typeLabel(program.type)}</span>
        </div>
        <h3 className="font-semibold text-slate-900 text-sm leading-snug mb-1 group-hover:text-blue-600 transition-colors">
          {program.title}
        </h3>
        <p className="text-xs text-slate-500 mb-4">{program.institution}</p>
        <ProgressBar done={done} total={total} status={program.status} />
      </div>
    </Link>
  );
}
