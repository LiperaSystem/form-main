import { Container } from "./styles/checkout";
import { FunctionComponent } from "react";
import * as image from "../assets/sent.jpg";

export const Checkout: FunctionComponent = () => {
  return (
    <Container>
      <h1>
        O formulário foi enviado com sucesso! <br />
        Você receberá uma cópia no email informado.
      </h1>
      <img src={image.default} alt="Formulário enviado com sucesso!" />
    </Container>
  );
};
