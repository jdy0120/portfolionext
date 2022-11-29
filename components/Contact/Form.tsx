import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    width: 100%;
    border: none;

    font-size: 20px;
    border-radius: 10px;
    outline: none;
    padding: 20px;
    margin: 15px 0 15px 0;
  }

  textarea {
    width: 100%;
    height: 30%;
    border: none;
    font-size: 20px;
    border-radius: 10px;
    outline: none;
    padding: 20px;
    margin: 15px 0 15px 0;
  }

  button {
    border: none;
    cursor: pointer;
    background-color: #7e74f1;
    color: #f5f3fe;
    padding: 20px;
    border-radius: 10px;
    opacity: 70%;
    transition: all 0.25s ease-out;
    &:hover {
      opacity: 100%;
    }
  }
`;

const Form = () => {
  return (
    <Container>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <textarea placeholder="Message" />
      <button>{`Send Message`}</button>
    </Container>
  );
};

export default Form;
