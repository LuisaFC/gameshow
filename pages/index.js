import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

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
  const [name, setName] = useState('');
  const router = useRouter();
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>The Legend of CSS</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (e) {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <input placeholder="Nome" onChange={function (info) { setName(info.target.value); }} />
              <button type="submit" disabled={name.length === 0}>
                Bora jogar
                {' '}
                {name}
                !
              </button>
            </form>
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
