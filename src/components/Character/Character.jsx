import React, { useState, useEffect } from 'react'
import Menu from '../layout/Menu';
import { useParams } from 'react-router-dom';
import { URL_API } from '../../Api/api';

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
            <div className="Container">
                <div className="character-div">
                    <div className="character-div-img">
                        <img src={character.image?.url} alt="" />
                    </div>
                    <div className="character-div-section">
                        <div className="character-div-title">
                            <h3>{character.name}</h3>
                        </div>  
                        <div>
                            <p>{character.id}</p>
                            <p>Work: {character.work?.occupation}</p>
                            <p>Peso: {character.appearance?.weight}</p>
                            <p>Color de ojos: {character.appearance?.['eye-color']}</p>
                            <p>Color de pelo: {character.appearance?.['hair-color']}</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Character
