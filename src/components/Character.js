// Write your Character component here
import React from "react";
// import styled from "styled-components"

export default function Character(props) {
    console.log(props)
    const { chara, setChara } = props;
    console.log(chara)

    return (
        <div className="charaCard">
            <img src={chara.image}></img>
            <h1>Chatacter Name: {chara.name}</h1>
            <p>Status: {chara.status}</p>
            <p>Species: {chara.species}</p>
            <p>Gender: {chara.gender}</p>
            <p>Number of episode appearances: {chara.episode.length}</p>
            <h2>Origin:</h2>
                <div>
                    <p>Location: {chara.origin.name}</p>
                    <img src={chara.origin.url}></img>
                </div>
        </div>
    )
}
