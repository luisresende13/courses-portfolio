import { strategyItems } from '@/data/strategy';
import { programMap } from '@/data/programs';
import PriorityCard from '@/components/roadmap/PriorityCard';
import { typeLabel } from '@/lib/program-utils';

export default function RoadmapPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-1">Learning Roadmap</h1>
        <p className="text-slate-500 text-sm max-w-2xl">
          Strategic analysis of which unfinished programs contribute the most to completing other programs. Ranked by cross-program leverage.
        </p>
      </div>

      {/* Priority cards */}
      <div className="space-y-4">
        {strategyItems.map(item => (
          <PriorityCard key={item.rank} item={item} />
        ))}
      </div>

      {/* Summary table */}
      <div>
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Summary</h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-slate-600">Rank</th>
                <th className="text-left px-4 py-3 font-medium text-slate-600">Program</th>
                <th className="text-left px-4 py-3 font-medium text-slate-600">Type</th>
                <th className="text-center px-4 py-3 font-medium text-slate-600">Courses Left</th>
                <th className="text-left px-4 py-3 font-medium text-slate-600">Contributes To</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {strategyItems.map(item => {
                const program = programMap.get(item.programId);
                if (!program) return null;
                return (
                  <tr key={item.rank} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-bold text-slate-400">#{item.rank}</td>
                    <td className="px-4 py-3 font-medium text-slate-900">{program.title}</td>
                    <td className="px-4 py-3 text-slate-500">{typeLabel(program.type)}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">{item.remainingCourses}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1">
                        {item.contributesTo.map(id => {
                          const p = programMap.get(id);
                          return p ? (
                            <span key={id} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-100">
                              {p.title.replace(/ Specialization| Professional Certificate/, '')}
                            </span>
                          ) : null;
                        })}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
