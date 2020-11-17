// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharaCard = styled.div`
    display: flex;
    border: 1px solid black;
    border-radius: 10px;
    justify-content: center;
    width: 25%;
    margin: 2%;
    padding: 1%;
    background-color: lightblue;
    &:hover {
        box-shadow: 0px 0px 25px 15px rgba(30, 30, 60, .25);
        transform: scale(1.15);
        transition: all 0.5s ease-in-out;
    }
    transition: all 0.5s ease-in-out;

    img{
        border: 1px solid black;
        border-radius: 50%;
        width: 80%;
    }
`;

export default function Character(props) {
    console.log(props)
    const { chara } = props;
    console.log(chara)

    return (
        <StyledCharaCard className="charaCard">
            <div className="card">
                <img src={chara.image}></img>
                <h2>Name: {chara.name}</h2>
                <p>Status: {chara.status}</p>
                <p>Species: {chara.species}</p>
                <p>Gender: {chara.gender}</p>
                <p>Number of episode appearances: {chara.episode.length}</p>
                <h4>Origin:</h4>
                    <div>
                        <p>Location: {chara.origin.name}</p>
                    </div>
            </div>
        </StyledCharaCard>
    )
}
