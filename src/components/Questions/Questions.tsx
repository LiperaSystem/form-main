import { FunctionComponent } from "react";
import Question from "./QuestionText";

export const Questions: FunctionComponent = () => {
  const questions = [
    "As áreas afetadas são dolorosas? (0 não / 10 muito) *",
    "As áreas afetadas são sensíveis ao toque ou à pressão? (0 não / 10 muito) *",
    "Você tende a ter manchas roxas facilmente e frequentes nas pernas? (Hematomas, equimoses) (0 não / 10 muito) *",
    "Você sente 'pressão' ou 'tensão' nas pernas? (0 não / 10 muito) *",
    "Sente as pernas 'quentes' ou sensação de 'queimação'? (0 não / 10 muito) *",
    "Sente suas pernas frias? (0 não / 10 muito) *",
    "Tem câimbras musculares? (0 não / 10 muito frequente) *",
    "Sente peso nas pernas? (0 não / 10 muito) *",
    "Sente cansaço nas pernas? (0 não / 10 muito) *",
    "Sente inchaço nas pernas? (0 não / 10 muito) *",
    "Tem 'irritações' na pele? (0 não / 10 muita) *",
    "Sente coceira? (0 não / 10 muita) *",
    "Tem dificuldade para caminhar, limitação de movimento? (0 não / 10 gravemente) *",
    "Como a condição afeta sua qualidade de vida? (0 nada / 10 gravemente) *",
    "Está satisfeita com a aparência das pernas? (0 muito satisfeita / 10 insatisfeita) *",
  ];
  return (
    <>
      {questions.map((question, index) => (
        <Question key={index} question={question} index={index} />
      ))}
    </>
  );
};
