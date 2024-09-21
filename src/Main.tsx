import { useContext } from "react";
import { CandidatesContext, ModeContext } from "./Context";
import { Setup } from "./Setup";
import { Ranking } from "./Ranking";
import { Review } from "./Review";

export function Main() {
  const [mode] = useContext(ModeContext);
  const [candidates] = useContext(CandidatesContext);

  return (
    <div className="main">
      {mode === 'setup' && (
        <Setup />
      )}
      {mode !== 'setup' && candidates.length !== 0 && (
        <Ranking />
      )}
      {mode !== 'setup' && candidates.length === 0 && (
        <Review />
      )}
    </div>
  );
}