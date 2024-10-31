import { createContext, useState } from "react";
import PropTypes from "prop-types";
import YouTube from "react-youtube";
import Modal from "react-modal";

const MovieContext = createContext();
const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    position: "fixed",
    zIndex: "9999",
  },
};

const MovieProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [trailerKey, setTrailerKey] = useState("");
  const handleTrailer = async (id) => {
    setTrailerKey("");
    try {
      //   const url = `https://api.themoviedb.org/3/tv/${id}/videos?language=vi`;
      const url = `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY} `,
        },
      };
      const movieKey = await fetch(url, options);
      const data = await movieKey.json();
      setTrailerKey(data.results[0].key);
      setModalIsOpen(true);
      console.log(data);
    } catch (error) {
      setModalIsOpen(false); // prevent
      console.log(error.message);
    }
    console.log(id);
    // console.log(data);
  };
  return (
    <MovieContext.Provider value={{ handleTrailer }}>
      {children}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <YouTube videoId={trailerKey} opts={opts} />
      </Modal>
    </MovieContext.Provider>
  );
};

MovieProvider.propTypes = {
  children: PropTypes.node,
};

export { MovieContext, MovieProvider };
