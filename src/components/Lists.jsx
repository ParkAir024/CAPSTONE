import React from 'react';
import '../styles/lists.css'

export default function Lists() {
    return (
        <div className="grid-container">
            <div className="grid-item">
                <h2>Deku's Hero list</h2>
                <ul>
                    <li>All-Might</li>
                    <li>Kaachan</li>
                    <li>Spider-Man</li>
                    <li>Sir NightEye</li>
                    <li>Captain America</li>
                </ul>
                <button class="thumbs-up">👍</button>
                <button class="thumbs-down">👎</button>
            </div>
            <div className="grid-item">
                <h2>Goku's Favorite List</h2>
                <ul>
                    <li>DragonBall z</li>
                    <li>DragonBall</li>
                    <li>Jujutsu kaisen</li>
                    <li>Naruto</li>
                    <li>One Piece</li>
                    <li>Baki the Grappler</li>
                    <li>One Punch Man</li>
                    <li>Fist of the North Star</li>
                    <li>Fairy Tail</li>
                    <li>My Hero Academia</li>
                </ul>
                <button class="thumbs-up">👍</button>
                <button class="thumbs-down">👎</button>
            </div>
            <div className="grid-item">
                <h2>Bakugo's Strongest</h2>
                <ul>
                    <li>ME!!</li>
                    <li>myself!!</li>
                    <li>I!!</li>
                </ul>
                <button class="thumbs-up">👍</button>
                <button class="thumbs-down">👎</button>
            </div>
            <div className="grid-item">
                <h2>Tanjiro's nicest list</h2>
                <ul>
                    <li>Nezuko</li>
                    <li>Rengoku</li>
                    <li>Giyu</li>
                    <li>Shinobu</li>
                    <li>Zenitsu</li>
                </ul>
                <button class="thumbs-up">👍</button>
                <button class="thumbs-down">👎</button>
            </div>
            <div className='flair'></div>
        </div>
    );
}

