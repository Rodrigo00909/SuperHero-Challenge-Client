import React, { useState, useEffect } from 'react'
import Menu from '../layout/Menu';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { URL_API } from '../../Api/api';

import './Character.css'

const Character = () => {

    // Atrapar el ID que viene por el search
    const { id } = useParams()

    const [character, setCharacter] = useState([]);

    // Obtener link y hacer seguimiento del ID por el useEffect
    useEffect(() => {
        const dataCharacter = async () => {
            const data = await fetch(`${URL_API}/${id}`)
            const res = await data.json()
            setCharacter(res)
            console.log(res)
        }
        dataCharacter()
    }, [id])



    return (
        <>
            <Menu />
            <div className="character-div">
                <div className="character-div-img">
                    <img className="character-img" src={character.image?.url} alt="" />
                </div>
                <div className="character-div-section">
                    <div className="character-div-title">
                        <h2 className="character-title">{character.name}</h2>
                        <p className="character-text"><span>Full Name:</span> {character.biography?.['full-name']}</p>
                        <p className="character-text"><span>Also know as:</span> {character.biography?.aliases[0]}</p>
                        <p className="character-text"><span>Height and Weight:</span> {character.appearance?.height[1]} - {character.appearance?.weight[1]}</p>
                        <p className="character-text"><span>Eye color:</span> {character.appearance?.['eye-color']}</p>
                        <p className="character-text"><span>Hair color:</span> {character.appearance?.['hair-color']}</p>
                        <p className="character-text"><span>Work:</span> {character.work?.occupation}</p>
                        <p className="character-text"><span>First Appearance was in</span> {character.biography?.['first-appearance']} <span>and Published for</span> {character.biography?.publisher}</p>
                    </div>
                    <Link to='/search'>
                        <button className="character-button">Back to Search</button>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default Character
