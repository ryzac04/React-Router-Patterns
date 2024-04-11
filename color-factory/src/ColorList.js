import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

import "./ColorList.css";

const ColorList = ({colors}) => {
    return (
        <div>
            <div className="Greeting">
                <p>Welcome to the color factory.</p>
                <div className="FormLink">
                    <Link to="/colors/new">Add a Color</Link>
                </div>
            </div>
            <p>Please select a color:</p>
            <ul>
                {colors.map(color => (
                    <li key={uuid()}>
                        <Link to={`/colors/${color.name}`}>{color.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ColorList;