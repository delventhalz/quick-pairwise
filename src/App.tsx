import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import { Mode, CandidatesContext, RankingsContext, ModeContext } from './Context';
import { Main } from './Main';

function App() {
  const modeState = useState<Mode>('setup');
  const candidatesState = useState<string[]>([]);
  const rankingsState = useState<string[]>([]);

  return (
    <ChakraProvider>
      <ModeContext.Provider value={modeState}>
        <CandidatesContext.Provider value={candidatesState}>
          <RankingsContext.Provider value={rankingsState}>
            <Main />
          </RankingsContext.Provider>
        </CandidatesContext.Provider>
      </ModeContext.Provider>
    </ChakraProvider>
  );
}

export default App;
