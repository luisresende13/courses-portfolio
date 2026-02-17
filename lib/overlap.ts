import { programs, programMap } from '@/data/programs';
import { ProgramOverlap } from '@/data/types';

/**
 * Builds a map of courseId -> programIds that contain it.
 * Computed once at module load.
 */
function buildCourseToPrograms(): Map<string, string[]> {
  const map = new Map<string, string[]>();
  for (const program of programs) {
    for (const pc of program.courses) {
      const existing = map.get(pc.courseId) ?? [];
      existing.push(program.id);
      map.set(pc.courseId, existing);
    }
  }
  return map;
}

export const courseToPrograms = buildCourseToPrograms();

/**
 * Returns all programs that share at least one course with the given program,
 * sorted by number of shared courses descending.
 */
export function getOverlappingPrograms(programId: string): ProgramOverlap[] {
  const program = programMap.get(programId);
  if (!program) return [];

  const overlaps = new Map<string, string[]>(); // otherProgramId -> sharedCourseIds

  for (const pc of program.courses) {
    const others = courseToPrograms.get(pc.courseId) ?? [];
    for (const otherId of others) {
      if (otherId === programId) continue;
      const shared = overlaps.get(otherId) ?? [];
      shared.push(pc.courseId);
      overlaps.set(otherId, shared);
    }
  }

  return Array.from(overlaps.entries())
    .map(([otherProgramId, sharedCourseIds]) => ({
      programIdA: programId,
      programIdB: otherProgramId,
      sharedCourseIds,
    }))
    .sort((a, b) => b.sharedCourseIds.length - a.sharedCourseIds.length);
}

/**
 * Returns the shared courses between exactly two programs.
 */
export function getProgramPairOverlap(idA: string, idB: string): ProgramOverlap {
  const a = programMap.get(idA);
  const b = programMap.get(idB);
  if (!a || !b) return { programIdA: idA, programIdB: idB, sharedCourseIds: [] };

  const aIds = new Set(a.courses.map(c => c.courseId));
  const shared = b.courses.filter(c => aIds.has(c.courseId)).map(c => c.courseId);

  return { programIdA: idA, programIdB: idB, sharedCourseIds: shared };
}

/**
 * Returns programs that contain a specific course.
 */
export function getProgramsForCourse(courseId: string): string[] {
  return courseToPrograms.get(courseId) ?? [];
}
