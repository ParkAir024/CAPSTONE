import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import '../styles/index.css'
export default function Anime() {

    const [nextAnime, setNextAnime] = useState('Anime!');
    const [selectedAnimes, setSelectedAnime] = useState([]);
    const [clickCount, setClickCount] = useState(0);

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
        const availableAnimes = animes.filter(anime => !selectedAnimes.includes(animes));
        if (availableAnimes.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableAnimes.length);
            const newAnime = availableAnimes[randomIndex]


            setNextAnime(newAnime);
        } else {
            setNextAnime('No more animes!')
        }
    }

    function addSelectedAnime() {
        if (nextAnime) {
            setSelectedAnime(prevAnimes => [...prevAnimes, nextAnime]);
        }
    }
    function incrementClickCount() {
        setClickCount(prevCount => prevCount + 1);
    }
    return (
        <div className="centeredContainer">
            <div className="AnimeContainer">
                <Container>
                    <h3>The next Watch!</h3>
                    <p onClick={addSelectedAnime} style={{ cursor: 'pointer' }}>Anime: <br />{nextAnime}</p>
                    <button onClick={randomAnime}>Spin The Wheel</button>
                </Container>
            </div>
            <div className='newContainer'>

                <Container>
                    <div>
                    <h3 style={{textAlign: 'center'}}>Whats new!</h3>
                    </div>
                    <ul>
                        <li>Goku added a new Photo</li>
                        <br />
                        <li>Tanjiro and Deku are following eachother</li>
                        <br />
                        <li>Vegeta created an account</li>
                        <br />
                        <li>Tanjiro and Nezuko are following eachother</li>
                        <br />
                        <li>Deku and Bakugo are following eachother</li>
                        <br />
                        <li>Trivia game added!</li>
                    </ul>
                </Container>
            </div>
            <div className='random-click' style ={{zIndex: 1}}>
                <Container >
                <button onClick={incrementClickCount}>Click me!</button>
                    <p>Click count: {clickCount}</p>
                </Container>
            </div>
        </div>
    );
}
