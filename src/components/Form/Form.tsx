import { Button, Divider, CircularProgress } from "@mui/material";
import { FormContext } from "../../providers/form.provider";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { Container, FormContainer, Title, InfoText, WarningMessage } from "./styles";
import { Questions } from "../Questions/Questions";
import { Inputs } from "../InputFields/Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";

export const Form: FunctionComponent = () => {
  const { name, email, phoneNumber, scores } = useContext(FormContext);
  const [isFormComplete, setFormComplete] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isNameValid = name.trim() !== "";
    const isPhoneNumberValid = phoneNumber.trim() !== "";
    const areScoresValid = Object.values(scores).length === 15;

    setFormComplete(isNameValid && isPhoneNumberValid && areScoresValid);
  }, [name, phoneNumber, scores]);

  const handleFormSubmit = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    setButtonClicked(true);

    if (!isFormComplete) {
      return;
    }

    const data = {
      user: {
        name,
        email,
        phoneNumber,
      },
      questions: { ...scores },
    };

    try {
      setLoading(true);
      const response = await axios.post("http://127.0.0.1:3000/pdf", data);
      if (response.status === 200) {
        setSubmitted(true);
      }

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("phoneNumber", phoneNumber);

      // Redireciona para "/checkout" após o envio (se não já tiver sido enviado)
      if (!submitted) {
        navigate("/checkout");
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <FormContainer>
          <Title>Questionário de Avaliação Sintomática de Lipedema</Title>
          <Inputs />
          <Divider style={{ height: "1px", width: "100%" }} />
          <InfoText>
            Gradue seus sintomas de 0 (não) a 10 (muito). Se o critério for
            variável, selecione a intensidade máxima que você sente.
          </InfoText>
          <Questions />
          {buttonClicked && !isFormComplete && (
            <WarningMessage>
              Por favor, preencha todos os campos obrigatórios antes de enviar.
            </WarningMessage>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={handleFormSubmit}
            // disabled={!isFormComplete}
          >
            {isLoading ? (
              <>
                <span>Enviando formulário</span>
                <CircularProgress size={24} color="inherit" />
              </>
            ) : (
              "Enviar"
            )}
          </Button>
        </FormContainer>
      </Container>
    </>
  );
};
