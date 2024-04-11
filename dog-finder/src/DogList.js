import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

const DogList = ({ dogs }) => {
    return (
        <div>
            <h1>Meet Our Dogs:</h1>
            <ul>
                {dogs.map(dog => (
                    <li key={uuid()}>
                        <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DogList;