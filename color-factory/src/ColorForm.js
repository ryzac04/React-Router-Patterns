import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./ColorForm.css"


const ColorForm = ({ colors, setColors }) => {
    const [colorName, setColorName] = useState('');
    const [colorValue, setColorValue] = useState('#ffffff');

    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const newColor = {
            name: colorName,
            value: colorValue
        }
        setColors([...colors, newColor]);
        navigate('/colors');
    };

    const handleColorChange = e => {
        setColorValue(e.target.value);
    };

    return (
        <div className="FormContainer">
            <form onSubmit={handleSubmit}>
                <label htmlFor="colorName">Color Name: </label>
                <input
                    id="colorName"
                    type="text"
                    placeholder="Enter a name for the color"
                    value={colorName}
                    onChange={e => setColorName(e.target.value)}
                    required
                />
                <label htmlFor="colorValue">Color Value: </label>
                <input
                    id="colorValue"
                    type="color"
                    value={colorValue}
                    onChange={handleColorChange}
                />
            <button>Add This Color</button>
        </form>
        </div>

    );
};

export default ColorForm;