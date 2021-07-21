import React,{useState,useEffect} from 'react'
import './css/tindercards.css'
import TinderCard from 'react-tinder-card'
import axios from '../axios';

function Tindercards() {

    const Swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    }

    const outOfFrame = (name) => {
        console.log(name + "left the screen!");
    }

    const [people,setPeople] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('/tinder/cards')
            setPeople(response.data)
        }

        fetchData()
    },[])

    return(
        <div className="tindercards">
            <div className="Tindercard__cardcontainer">
                {people.map(peop => {
                    return <TinderCard onSwipe= {(dir) => Swiped(dir, peop.name)} 
                                onCardLeftScreen={() => outOfFrame(peop.name)} 
                                preventSwipe={['up', 'down']}
                                className="swipe"
                                key={peop.name}>
                                    <div style={{backgroundImage : `url(${peop.imgUrl})`}}
                                        className="card"
                                    >
                                        <h3>{peop.name}</h3>
                                    </div>
                             </TinderCard>
                })}
            </div>
        </div>
    )
}

export default Tindercards
