import { statusColor } from '@/lib/program-utils';
import { CompletionStatus } from '@/data/types';

interface Props {
  done: number;
  total: number;
  status: CompletionStatus;
}

export default function ProgressBar({ done, total, status }: Props) {
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  return (
    <div>
      <div className="flex justify-between text-xs text-slate-500 mb-1">
        <span>{done}/{total} courses</span>
        <span>{pct}%</span>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-1.5">
        <div
          className={`h-1.5 rounded-full transition-all ${statusColor(status)}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
