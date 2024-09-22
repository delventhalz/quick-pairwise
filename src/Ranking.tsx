import { Card, CardHeader, Heading } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { CandidatesContext, RankingsContext } from "./Context";

function Candidate({ onClick, text }: { onClick: () => void; text: string }) {
  return (
    <Card
      className='candidate'
      size='lg'
      variant='elevated'
      align='center'
      onClick={onClick}
    >
      <CardHeader>
        <Heading size='lg'>{text}</Heading>
      </CardHeader>
    </Card>
  );
}

export function Ranking() {
  const [candidates, setCandidates] = useContext(CandidatesContext);
  const [rankings, setRankings] = useContext(RankingsContext);

  const [currentIndex, setCurrentIndex] = useState(-1);
  const [losingBound, setLosingBound] = useState(0);
  const [winningBound, setWinningBound] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isChampFirst, setIsChampFirst] = useState(Math.random() < 0.5);

  useEffect(() => {
    if (rankings.length === 0 && currentIndex === -1) {
      setRankings([candidates[0]]);
      setCandidates(candidates.slice(1));
      setCurrentIndex(0);
    }
  }, []);

  const transition = (onFaded: () => void) => {
    setIsVisible(false);
    setTimeout(() => {
      setIsChampFirst(Math.random() < 0.5);
      onFaded();
      setIsVisible(true);
    }, 350);
  };

  const rankCandidate = (atIndex: number) => {
    setWinningBound(0);
    setLosingBound(rankings.length);
    setCurrentIndex(Math.floor(rankings.length / 2));
    setRankings([
      ...rankings.slice(0, atIndex),
      candidates[0],
      ...rankings.slice(atIndex)
    ]);
    setCandidates(candidates.slice(1));
  };

  const onChampion = () => {
    transition(() => {
      const nextCurrentIndex = Math.ceil(currentIndex + (0.5 * (losingBound - currentIndex)));
      if (currentIndex === nextCurrentIndex) {
        rankCandidate(currentIndex + 1);
      } else {
        setWinningBound(currentIndex + 1);
        setCurrentIndex(nextCurrentIndex);
      }
    });
  };

  const onChallenger = () => {
    transition(() => {
      const nextCurrentIndex = Math.floor(currentIndex - (0.5 * (currentIndex - winningBound)));
      if (currentIndex === nextCurrentIndex) {
        rankCandidate(currentIndex);
      } else {
        setLosingBound(currentIndex - 1);
        setCurrentIndex(nextCurrentIndex);
      }
    });
  };

  const champion = <Candidate onClick={onChampion} text={rankings[currentIndex]} />;
  const challenger = <Candidate onClick={onChallenger} text={candidates[0]} />;

  return (
    <div className={`ranking mode ${isVisible ? 'fade-in' : 'fade-out'}`}>
      {isChampFirst ? champion : challenger}
      {isChampFirst ? challenger : champion}
    </div>
  );
}
