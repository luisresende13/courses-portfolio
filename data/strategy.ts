import { StrategyItem } from './types';

export const strategyItems: StrategyItem[] = [
  {
    rank: 1,
    programId: 'generative-ai-engineering-with-llms',
    remainingCourses: 7,
    contributesTo: ['ibm-ai-engineering', 'ibm-generative-ai-engineering', 'ibm-rag-and-agentic-ai'],
    rationale:
      'Highest cross-program leverage. Completing 7 courses closes the remaining curriculum in IBM AI Engineering and IBM Generative AI Engineering, and partially completes IBM RAG and Agentic AI.',
  },
  {
    rank: 2,
    programId: 'ibm-rag-and-agentic-ai',
    remainingCourses: 9,
    contributesTo: ['rag-for-generative-ai-applications', 'building-ai-agents-and-agentic-workflows'],
    rationale:
      'Completing this certificate fully satisfies the RAG for Generative AI Applications Specialization (4 shared courses) and the Building AI Agents and Agentic Workflows Specialization (3 shared courses).',
  },
  {
    rank: 3,
    programId: 'building-ai-agents-and-agentic-workflows',
    remainingCourses: 3,
    contributesTo: ['ibm-rag-and-agentic-ai'],
    rationale:
      'Small investment of 3 courses, all shared with IBM RAG and Agentic AI. Completing this first reduces the remaining work in that certificate.',
  },
  {
    rank: 4,
    programId: 'rag-for-generative-ai-applications',
    remainingCourses: 4,
    contributesTo: ['ibm-rag-and-agentic-ai'],
    rationale:
      'All 4 courses are shared with IBM RAG and Agentic AI Professional Certificate, contributing directly to that program.',
  },
  {
    rank: 5,
    programId: 'ibm-deep-learning-pytorch-keras-tensorflow',
    remainingCourses: 1,
    contributesTo: ['ibm-ai-engineering'],
    rationale:
      'Only 1 course remaining (Deep Learning with PyTorch). Completing it also contributes to IBM AI Engineering.',
  },
];
