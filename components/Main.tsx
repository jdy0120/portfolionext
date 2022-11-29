import React from "react";
import Nav from "./Navigation/Nav";
import styled from "styled-components";
import MyNameIs from "./MyNameIs/MyNameIs";
import Services from "./Services/Services";
import MyWorks from "./MyWorks/MyWorks";
import CareerPath from "./CareerPath/CareerPath";
import MyArticles from "./MyArticles/MyArticles";
import LearningPath from "./LearningPath/LearningPath";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import { useThemeContext } from "../context/themeContext";
import { lighTheme, darkTheme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global";

const Container = styled.div`
  width: 100%;
`;

const Main = () => {
  const { theme } = useThemeContext();

  return (
    <Container>
      <ThemeProvider theme={theme === "light" ? lighTheme : darkTheme}>
        <GlobalStyles />
        <Nav />
        <MyNameIs />
        <Services />
        <MyWorks />
        <CareerPath />
        <MyArticles />
        <LearningPath />
        <Contact />
        <Footer />
      </ThemeProvider>
    </Container>
  );
};

export default Main;
