import { CompletionStatus } from '@/data/types';
import { statusTextColor, statusBgLight, statusLabel } from '@/lib/program-utils';

export default function StatusBadge({ status }: { status: CompletionStatus }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${statusBgLight(status)} ${statusTextColor(status)}`}>
      {statusLabel(status)}
    </span>
  );
}
