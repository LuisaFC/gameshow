import React from 'react';
import styled from 'styled-components';
import db from '../db.json';
import { Widget } from '../src/components/Widget/index';
import Footer from '../src/components/Footer/index';
import GithubCorner from '../src/components/GithubCorner/index';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The Legend of CSS</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum</p>
          </Widget.Content>
        </Widget>
      </QuizContainer>
      <QuizContainer>
        <Widget>
          <Widget.Content>
            <h1>Quiz da Galera</h1>

            <p>Lorem ipsum</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GithubCorner projectUrl="https://github.com/LuisaFC" />
    </QuizBackground>
  );
}
