import { useState } from "react";

function AuthorButton({onClick}) {
  const [isActive, setIsActive] = useState(false);
  const handleButtonClick = () => {
    setIsActive(!isActive);
    onClick(); 
  };

  return (
    <div onClick={handleButtonClick} className = {`filter__button button-author ${isActive ? '_btn-text_active _btn-icon_active' : ''}`}>исполнителю</div>
  );
}

export default AuthorButton