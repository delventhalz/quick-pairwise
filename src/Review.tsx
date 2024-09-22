import { Heading, ListItem, OrderedList } from "@chakra-ui/react";
import { useContext } from "react";
import { RankingsContext } from "./Context";

export function Review() {
  const [rankings] = useContext(RankingsContext);

  return (
    <div className="review mode">
      <Heading mt={8} mb={4}>Your Ranking</Heading>
      <OrderedList>
        {rankings.map((candidate, i) => <ListItem key={i}>{candidate}</ListItem>)}
      </OrderedList>
    </div>
  )
}
