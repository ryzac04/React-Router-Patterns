import { useParams, Link, Navigate } from "react-router-dom";

import "./Color.css";

const Color = ({ colors }) => {
    const { color: colorName } = useParams();

    const color = colors.find(color => color.name === colorName)

    if (!color) {
        return <Navigate to="/colors" />;
    }

    return (
        <div className="ColorContainer" style={{ backgroundColor: color.name }}>
            <div className="ColorText">
                <p>This is {color.name}</p>
                <p>Isn't it beautiful?</p>
                <Link to="/colors">Go Back</Link>
            </div>
        </div>
    );
};

export default Color;