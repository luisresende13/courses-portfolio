import { CompletionStatus } from '@/data/types';
import { statusTextColor, statusBgLight, statusLabel } from '@/lib/program-utils';

const darkBg: Record<CompletionStatus, string> = {
  completed: 'dark:bg-emerald-900/30',
  'in-progress': 'dark:bg-amber-900/30',
  'not-started': 'dark:bg-slate-700',
};

const darkText: Record<CompletionStatus, string> = {
  completed: 'dark:text-emerald-400',
  'in-progress': 'dark:text-amber-400',
  'not-started': 'dark:text-slate-300',
};

export default function StatusBadge({ status }: { status: CompletionStatus }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${statusBgLight(status)} ${darkBg[status]} ${statusTextColor(status)} ${darkText[status]}`}>
      {statusLabel(status)}
    </span>
  );
}
