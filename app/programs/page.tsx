'use client';

import { useState } from 'react';
import { programs } from '@/data/programs';
import { CompletionStatus } from '@/data/types';
import ProgramCard from '@/components/programs/ProgramCard';

const filters: { label: string; value: CompletionStatus | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Completed', value: 'completed' },
  { label: 'In Progress', value: 'in-progress' },
  { label: 'Not Started', value: 'not-started' },
];

export default function ProgramsPage() {
  const [filter, setFilter] = useState<CompletionStatus | 'all'>('all');

  const visible = filter === 'all' ? programs : programs.filter(p => p.status === filter);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 mb-1">Programs</h1>
        <p className="text-slate-500 text-sm">{programs.length} total programs — specializations and professional certificates.</p>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-6">
        {filters.map(f => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === f.value
                ? 'bg-slate-900 text-white'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {f.label}
            <span className="ml-1.5 text-xs opacity-60">
              {f.value === 'all' ? programs.length : programs.filter(p => p.status === f.value).length}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map(program => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </div>
  );
}
