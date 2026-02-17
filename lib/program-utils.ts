import { Program, CompletionStatus } from '@/data/types';

export function getProgress(program: Program): { done: number; total: number } {
  return {
    done: program.courses.filter(c => c.completed).length,
    total: program.courses.length,
  };
}

export function statusColor(status: CompletionStatus): string {
  return {
    completed: 'bg-emerald-500',
    'in-progress': 'bg-amber-400',
    'not-started': 'bg-slate-300',
  }[status];
}

export function statusBorderColor(status: CompletionStatus): string {
  return {
    completed: 'border-emerald-500',
    'in-progress': 'border-amber-400',
    'not-started': 'border-slate-300',
  }[status];
}

export function statusTextColor(status: CompletionStatus): string {
  return {
    completed: 'text-emerald-700',
    'in-progress': 'text-amber-700',
    'not-started': 'text-slate-500',
  }[status];
}

export function statusBgLight(status: CompletionStatus): string {
  return {
    completed: 'bg-emerald-50',
    'in-progress': 'bg-amber-50',
    'not-started': 'bg-slate-50',
  }[status];
}

export function statusLabel(status: CompletionStatus): string {
  return {
    completed: 'Completed',
    'in-progress': 'In Progress',
    'not-started': 'Not Started',
  }[status];
}

export function typeLabel(type: Program['type']): string {
  return type === 'professional-certificate' ? 'Professional Certificate' : 'Specialization';
}
