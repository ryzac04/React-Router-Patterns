import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DogList from './DogList';
import DogDetails from './DogDetails';

import whiskey from './images/whiskey.jpg';
import duke from './images/duke.jpg';
import perry from './images/perry.jpg';

function App({ dogs }) {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path='/dogs'
            element={<DogList dogs={dogs} />}
          />
          <Route
            path='/dogs/:name'
            element={<DogDetails dogs={dogs} />}
          />
          <Route
            path='*'
            element={<Navigate to='/dogs' replace />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    }
  ]
};

export default App;
