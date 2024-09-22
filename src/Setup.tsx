import {
  Button,
  Heading,
  ListItem,
  Stack,
  Textarea,
  UnorderedList
} from '@chakra-ui/react'
import shuffle from 'lodash/shuffle';
import { ChangeEvent, useContext, useState } from 'react'
import { CandidatesContext, ModeContext } from './Context';

export function Setup() {
  const [_, setMode] = useContext(ModeContext);
  const [candidates, setCandidates] = useContext(CandidatesContext);
  const [candidatesString, setCandidatesString] = useState('');

  const handleCandidatesChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCandidatesString(e.target.value);
  };

  const onSave = () => {
    const nextCandidates = candidatesString.split('\n').filter(Boolean);
    setCandidates([...candidates, ...nextCandidates]);
    setCandidatesString('');
  };

  const onStart = () => {
    setMode('ranking');
    setCandidates(shuffle(candidates));
  };

  return (
    <div className="setup mode">
      <Textarea
        value={candidatesString}
        onChange={handleCandidatesChange}
        placeholder='Enter your candidates each on their own line'
        size='sm'
      />
      <Stack className='setup-buttons' direction='row' spacing={4}>
        <Button
          onClick={onSave}
          colorScheme='blue'
          variant='ghost'
          isDisabled={candidatesString === ''}
        >
          Save
        </Button>
        <Button
          onClick={onStart}
          colorScheme='blue'
          variant='solid'
          isDisabled={candidates.length === 0}
        >
          Start
        </Button>
      </Stack>
      <Heading mt={8} mb={4}>Your Candidates</Heading>
      <UnorderedList>
        {
          candidates.length === 0
            ? <ListItem />
            : candidates.map((candidate, i) => <ListItem key={i}>{candidate}</ListItem>)
        }
      </UnorderedList>
    </div>
  )
}
