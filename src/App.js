import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Character from "./components/Character";
import styled from "styled-components"
import './App.css';

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [ chara, setChara ] = useState([])
  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    const fetchChara = () => {
      Axios.get("https://rickandmortyapi.com/api/character/")
        .then(res => {
          console.log(res)
          setChara(res.data.results)
        })
        .catch(err => {
          console.log(err)
        })
    }
    fetchChara()
  },[])

    return (
      <div className="App">
        <h1 className="Header">Characters</h1>
        <StyledCards>
          {
          chara.map(item => {
            return <Character key={item.id} chara={item} />
          })
          }
        </StyledCards>
      </div>
    ) 
};

export default App;
