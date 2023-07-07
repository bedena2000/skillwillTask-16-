import { styled } from "styled-components";
import './global.css';
import { useState, useEffect } from "react";

// Components 
import TodoInput from "./components/TodoInput";
import TodoBackLog from "./components/TodoBackLog";
import TodoInProgress from "./components/TodoInProgress";
import TodoDone from "./components/TodoDone";

// Context
import GlobalContext from './context/context';

// Styled
const Wrapper = styled.div`
  width: 1200px;
  padding: 20px;
`;

const ItemsWrapper = styled.div`
  width: 100%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 6px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

function App() {

  return (
    <div className="App">
      <GlobalContext>
        <Wrapper>
          <TodoInput />
          <ItemsWrapper>
            <TodoBackLog />
            <TodoInProgress />
            <TodoDone />
          </ItemsWrapper>
        </Wrapper>
      </GlobalContext>
    </div>
  );
}

export default App;
