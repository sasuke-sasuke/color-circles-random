import './ColorButtons.css';

const ColorButtons = ({options, addCircle}) => {
    return (
        <div className="ColorButtons">
            {options.map( color => {
            return <button 
            onClick={() => addCircle(color)}
            className="ColorButtons-btn"
            style={{backgroundColor: color}}
            >
                {color}
            </button>}
            )}
        </div>
    )
}

export default ColorButtons;
