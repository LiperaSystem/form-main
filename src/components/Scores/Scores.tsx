import { FunctionComponent, memo } from "react";
import { StyledRadio, Container, ScoreDiv } from "./styles";
import { background } from "../../utils/generateBackgroundColors";

interface ScoresProps {
  selectedScore: number | null;
  onScoreChange: (score: number) => void;
}

export const Scores: FunctionComponent<ScoresProps> = memo(
  ({ selectedScore, onScoreChange }) => {
    const handleRadioChange = (value: string) => {
      const score = parseInt(value, 10);
      onScoreChange(score);
    };

    return (
      <Container>
        {background.map((color, index) => (
          <ScoreDiv
            key={index}
            style={{
              backgroundColor: color,
            }}
          >
            <StyledRadio
              checked={selectedScore === index}
              onChange={() => handleRadioChange(index.toString())}
            />
            <span>{index}</span>
          </ScoreDiv>
        ))}
      </Container>
    );
  }
);
