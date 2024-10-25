import { FunctionComponent, useEffect } from "react";
import { Container, Title } from "./styles";
import * as image from "../../assets/sent.jpg";

interface FormModalProps {
  show: boolean;
}

export const FormModal: FunctionComponent<FormModalProps> = ({ show }) => {
  useEffect(() => {
    if (show) {
      const timeoutId = setTimeout(() => {
        window.location.reload();
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [show]);

  return show ? (
    <Container>
      <Title>Formulário enviado com sucesso!</Title>
      <img src={image.default} alt="Formulário enviado com sucesso!" />
    </Container>
  ) : null;
};
