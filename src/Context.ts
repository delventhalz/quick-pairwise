import { createContext, useContext } from 'react';

export type Mode = 'setup' | 'ranking' | 'review';

export const ModeContext = createContext<[Mode, (m: Mode) => void]>(['setup', () => {}]);
export const CandidatesContext = createContext<[string[], (c: string[]) => void]>([[], () => {}]);
export const RankingsContext = createContext<[string[], (r: string[]) => void]>([[], () => {}]);
