import React, { useContext } from "react";
// import { MdOutlineMovieFilter } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import { BiMoviePlay } from "react-icons/bi";
// import { BsStars } from "react-icons/bs";
// import { BiCameraMovie } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import MovieContext from "../../store/MovieContext";
// import { Link } from "react-router-dom";
import "./Panel.css";

const Panel = () => {
  const {
    header,
    // fetchPopular,
    getFavourites,
    fetchNowPlaying,
    fetchTopRated,
    fetchUncoming,
  } = useContext(MovieContext);

  return (
    <div className="panel">
      <div>
        {/* <MdOutlineMovieFilter
          onClick={() => fetchPopular()}
          className={header === "Trending" ? "active" : null}
        /> */}
        <a href="https://wa.me/+1234567890">
          <IoLogoWhatsapp
            // <a href="https://api.whatsapp.com/send?phone=+919999999999">
            // onClick={() => fetchPopular()}
            className={header === "Trending"}
            id="whats-icon"
          />
        </a>
        {/* <BiMoviePlay
          onClick={() => fetchNowPlaying()}
          className={header === "Now playing" ? "active" : null}
        /> */}
        <a href="https://www.instagram.com/">
        <RiInstagramFill
          onClick={() => fetchNowPlaying()}
          className={header === "Now playing" ? "active" : null}
          id="inst-icon"
        />
        </a>
       
        {/* <BsStars
          onClick={() => fetchTopRated()}
          className={header === "Top rated" ? "active" : null}
        /> */}
         <FaFacebook
          onClick={() => fetchTopRated()}
          className={header === "Top rated" ? "active" : null}
          id="fb-icon"
        />
        {/* <BiCameraMovie
          onClick={() => fetchUncoming()}
          className={header === "Uncoming" ? "active" : null}
        /> */}
        <FaFacebookMessenger
          onClick={() => fetchUncoming()}
          className={header === "Uncoming" ? "active" : null}
          id="msg-icon"
        />
        <MdEmail
          onClick={() => fetchUncoming()}
          className={header === "Uncoming" ? "active" : null}
          id="em-icon"
        />
      </div>
      <div>
        <AiOutlineStar
          onClick={() => getFavourites()}
          className={header === "Your favourites" ? "active" : null}
        />
        <FaUserCircle/>
      </div>
    </div>
  );
};

export default Panel;
