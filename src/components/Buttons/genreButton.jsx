import { useState } from "react";

function GenreButton({onClick}) {
  const [isActive, setIsActive] = useState(false);
  const handleButtonClick = () => {
    setIsActive(!isActive);
    onClick(); 
  };

    return (
      <div onClick={handleButtonClick} className = {`filter__button button-author ${isActive ? '_btn-text_active _btn-icon_active' : ''}`}>жанру</div>
    );
  }

  export default GenreButton