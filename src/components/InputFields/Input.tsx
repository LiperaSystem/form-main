import React, { FunctionComponent, useContext, useCallback, useEffect } from "react";
import { PatternFormat } from "react-number-format";
import { BiRename } from "react-icons/bi";
import { MdPhoneAndroid } from "react-icons/md";
import { FormContext } from "../../providers/form.provider";
import { InputBox } from "./styles";
import { Container } from "@mui/material";

const InputBoxMemoized = React.memo(InputBox);

export const Inputs: FunctionComponent = () => {
  const phoneIcon = <MdPhoneAndroid />;
  const nameIcon = <BiRename />;

  const { updateName, updatePhoneNumber, email, updateEmail, phoneNumber, name } =
    useContext(FormContext);

  const handlePhoneChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value.replace(/\D/g, "");
      updatePhoneNumber(value);
    },
    [updatePhoneNumber]
  );

  const handleNameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const name = event.target.value;
      const capitalizedName = name
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      updateName(capitalizedName);
      return capitalizedName;
    },
    [updateName]
  );

  const handleEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value;
      updateEmail(value);
    },
    [updateEmail]
  );

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      updateName(storedName);
    }

    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      updateEmail(storedEmail);
    }

    const storedPhoneNumber = localStorage.getItem("phoneNumber");
    if (storedPhoneNumber) {
      updatePhoneNumber(storedPhoneNumber);
    }
  }, [updateName, updateEmail, updatePhoneNumber]);

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        gap: ".8rem",
        alignItems: "center",
      }}
    >
      <InputBoxMemoized>
        <span className="prefix">{nameIcon}</span>
        <input
          type="text"
          placeholder="Nome completo"
          onBlur={handleNameChange}
          onChange={handleNameChange}
          value={name} // Use name as the value of the input field
        />
      </InputBoxMemoized>

      <InputBoxMemoized>
        <span className="prefix">@</span>
        <input
          type="email"
          placeholder="Endereço de email"
          onChange={handleEmailChange}
          value={email} // Use email as the value of the input field
        />
      </InputBoxMemoized>

      <InputBoxMemoized>
        <span className="prefix">{phoneIcon}</span>
        <PatternFormat
          format="(##) #####-####"
          mask="_"
          onBlur={handlePhoneChange}
          placeholder="(11) 98888-8800"
          value={phoneNumber} // Use phoneNumber as the value of the input field
        />
      </InputBoxMemoized>
    </Container>
  );
};
