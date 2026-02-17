import Link from 'next/link';
import { StrategyItem } from '@/data/types';
import { programMap } from '@/data/programs';
import { typeLabel } from '@/lib/program-utils';

export default function PriorityCard({ item }: { item: StrategyItem }) {
  const program = programMap.get(item.programId);
  if (!program) return null;
  const isTop = item.rank <= 2;

  return (
    <div className={`bg-white dark:bg-slate-800 rounded-xl border ${isTop ? 'border-blue-300 dark:border-blue-700 shadow-md' : 'border-slate-200 dark:border-slate-700 shadow-sm'} p-6`}>
      <div className="flex items-start gap-4">
        <div className={`text-3xl font-bold shrink-0 ${isTop ? 'text-blue-600 dark:text-blue-400' : 'text-slate-300 dark:text-slate-600'}`}>
          #{item.rank}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <Link href={`/programs/${program.id}`} className="font-semibold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {program.title}
            </Link>
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-xs text-slate-500 dark:text-slate-400">{typeLabel(program.type)}</span>
            <span className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded">
              {item.remainingCourses} courses remaining
            </span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{item.rationale}</p>
          {item.contributesTo.length > 0 && (
            <div>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">Contributes to:</p>
              <div className="flex flex-wrap gap-2">
                {item.contributesTo.map(id => {
                  const p = programMap.get(id);
                  return p ? (
                    <Link
                      key={id}
                      href={`/programs/${id}`}
                      className="text-xs px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors border border-blue-100 dark:border-blue-800"
                    >
                      {p.title.replace(/ Specialization| Professional Certificate/, '')}
                    </Link>
                  ) : null;
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
