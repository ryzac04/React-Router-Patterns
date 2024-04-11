import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";


const DogDetails = ({ dogs }) => {
    const { name } = useParams();
    const dog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());

    if (!dog) {
        return <h2>Dog not found!</h2>;
    }

    const { age, src, facts } = dog;

    return (
        <div>
            <h1>{name}</h1>
            <img src={src} alt={name} />
            <p>Age: {age}</p>
            <h2>Facts:</h2>
            <ul>
                {facts.map((fact) => (
                    <li key={uuid()}>{fact}</li>
                ))}
            </ul>
        </div>
    );
};

export default DogDetails;