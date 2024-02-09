import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import '../styles/index.css'
export default function Anime() {
    
    const [nextAnime, setNextAnime] = useState('Anime!');
    const [selectedAnimes, setSelectedAnime] = useState([]);

    const animes = [
        'Naruto',
        'One Piece',
        'Death Note',
        'Tokyo Ghoul',
        'Demon Slayer',
        'Hunter x Hunter',
        'Cowboy Bebop',
        'Neon Genesis Evangelion',
        'Pokemon',
        'One Punch Man',
        'Spirited Away',
        'Bleach',
        'Fairy Tail',
        'Rising of the Shield Hero',
        'Dragon Ball Super',
        'JoJo\'s Bizarre Adventure'
    ];
    
    
    function randomAnime() {
        const randomIndex = Math.floor(Math.random() * animes.length);
        const newAnime = animes[randomIndex];

        setNextAnime(newAnime);
    }

    function addSelectedAnime() {
        if (nextAnime) {
            setSelectedAnime(prevAnimes => [...prevAnimes, nextAnime]);
        }
    }

    function removeSelectedAnime(index) {
        setSelectedAnime(prevAnimes => prevAnimes.filter((_, i) => i !== index));
    }

    return (
        <div className="centeredContainer">
            <div className="AnimeContainer">
        <Container>
            <h3>The next Watch!</h3>
            <p onClick={addSelectedAnime} style={{ cursor: 'pointer' }}>Anime: <br />{nextAnime}</p>
            <button onClick={randomAnime}>Spin The Wheel</button>

            <div>
                <h4>Selected Animes:</h4>
                <ul>
                    {selectedAnimes.map((anime, index) => (
                        <li key={index} onClick={() => removeSelectedAnime(index)} style={{ cursor: 'pointer' }}>
                            {anime}
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
        </div>
        </div>
    );
}
