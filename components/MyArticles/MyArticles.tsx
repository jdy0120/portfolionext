import React from "react";
import styled from "styled-components";
import Titles from "../Titles/TItle";
import Articles from "./Articles";

const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const OutContainer = styled.div`
  width: 100%;
  max-width: 2000px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 820px) {
    height: 100rem;
  }
`;

const titleData = {
  title: `MY ARTICLES`,
  description: `Personal Blog`,
};

const MyArticles = () => {
  return (
    <Body>
      <OutContainer>
        <Container>
          <Titles title={titleData.title} description={titleData.description} />
          <Articles />
        </Container>
      </OutContainer>
    </Body>
  );
};

export default MyArticles;
