import {useState} from 'react';
import Circle from './Circle';
import ColorButtons from './ColorButtons';

const getRandom = (min = 0, max = 100) => Math.random() * (max - min) + min;

const ColoredCircles = () => {
    const [circles, setCircles] = useState([])
    const addCircle = (color) => {
        setCircles(circles => [...circles, { color, x: getRandom(), y: getRandom()}] )
    }
    const changePosition = idx => {
        setCircles(circles => (
            circles.map((circle, i) => (
                i === idx 
                ? {...circle, x: getRandom(), y: getRandom()}
                : circle
                    
            ))
        ))
    }
    return (
        
        <div>
            <ColorButtons addCircle={addCircle} options={['peachpuff', 'lightsteelblue', 'paleturquoise']} />
            {circles.map(({color, x, y}, idx) => {
                return <Circle 
                changePosition={changePosition} 
                color={color} 
                idx={idx} 
                key={idx} 
                x={x} 
                y={y}
                />
            })}
        </div>
    )
}

export default ColoredCircles;