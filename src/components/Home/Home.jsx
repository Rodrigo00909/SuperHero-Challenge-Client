import React, { useState, useEffect } from 'react';
import Menu from '../layout/Menu';



const Home = () => {

    const url = 'https://www.superheroapi.com/api.php/4138052379586041/69/biography'

    const [equipo, setEquipo] = useState([]);

    const fetchApi = async () => {
        const data = await fetch(url);
        const users = await data.json()

        setEquipo(users);
        console.log(users)
    }

    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <div>
            <Menu />
            <div className="Container">
                <div className="team-div-mainTitle">
                    <h1>My Team</h1>
                </div>
                <div className="team-div">
                    <div className="team-div-title">
                        <h3></h3>
                    </div>
                    <div>
                        <p></p>
                    </div>
                    <div className="team-div-img" >
                        <img className="team-img" src="" alt="hero pic" />
                    </div>
                    <div className="team-div-button">
                        <button className="team-button">Delete from team</button>
                        <button className="team-button">Add to the team</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home


/* const Home = () => {

    const url = 'https://www.superheroapi.com/api.php/4138052379586041/69/biography'

    const [hero, setHero] = useState([]);

    const fetchApi = async () => {
        const data = await fetch(url);
        const res = await data.json()

        setHero(res);
        console.log(res)
    }

    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <div>
            <Menu />
            <div className="Container">
                <div className="team-div-mainTitle">
                    <h1>My Team</h1>
                </div>
                <ul>
                    {
                        hero.map(item => (
                            <li key={item.id}>{item.name} - {item.publisher}</li>
                        ))
                    }
                </ul>
                <div className="team-div">
                    <div className="team-div-title">
                        <h3></h3>
                    </div>
                    <div>
                        <p></p>
                    </div>
                    <div className="team-div-img" >
                        <img className="team-img" src="" alt="hero pic" />
                    </div>
                    <div className="team-div-button">
                        <button className="team-button">Delete from team</button>
                        <button className="team-button">Add to the team</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
 */