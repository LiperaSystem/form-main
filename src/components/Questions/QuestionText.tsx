import { FunctionComponent, useContext } from "react";
import { QuestionContainer, QuestionText } from "./styles";
import { Scores } from "../Scores/Scores";
import { Divider } from "@mui/material";
import { FormContext } from "../../providers/form.provider";
import { useState } from "react";

const Question: FunctionComponent<{
  question: string;
  index: number;
}> = ({ question }) => {
  const [mainQuestion, subQuestion] = question.split("?");
  const { setScore } = useContext(FormContext);
  const [selectedScore, setSelectedScore] = useState<number | null>(null);

  const handleScoreChange = (score: number) => {
    setSelectedScore(() => {
      setScore(`${mainQuestion}?`, score);
      return score;
    });
  };


  return (
    <>
      <Divider style={{ height: "1px", width: "100%" }} />
      <QuestionContainer>
        <QuestionText>
          {mainQuestion}?
          <br />
          <span>{subQuestion}</span>
        </QuestionText>
      </QuestionContainer>
      <Scores selectedScore={selectedScore} onScoreChange={handleScoreChange} />
    </>
  );
};

export default Question;
