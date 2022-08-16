import { useState } from "react";
import "./styles.css";

const playlistDB = {
  underratedsongs: [
    { name: "Neelo Jarige", rating: "4.5/5" },
    { name: "Palike Gorinka", rating: "3.5/5" }
  ],

  khushi: [
    {
      name: "Ee Chota Nuvvunna",
      rating: "5/5"
    },
    {
      name: "Vurike Chilaka",
      rating: "4.5/5"
    }
  ],
  peace: [
    {
      name: "All I Want",
      rating: "5/5"
    },
    {
      name: "Moonshots",
      rating: "5/5"
    }
  ]
};
export default function App() {
  const [selectedGenre, setGenre] = useState("peace");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1> jam with me</h1>
      <p>Check out my fav songs at the moment. Select the genre you like</p>

      {Object.keys(playlistDB).map((genre) => (
        <button onClick={() => genreClickHandler(genre)}>
          {genre}
          {console.log(genre)}{" "}
        </button>
      ))}
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {playlistDB[selectedGenre].map((song) => (
            <li
              key={song.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {song.name} </div>
              <div style={{ fontSize: "smaller" }}> {song.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
