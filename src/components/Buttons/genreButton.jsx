function GenreButton({onClick, isActive}) {

    const handleButtonClick = () => {
      onClick(); 
    };
  
      return (
        <div onClick={handleButtonClick} 
        className = {`filter__button button-author ${isActive ? '_btn-text_active _btn-icon_active' : ''}`}>жанру</div>
      );
    }
  
    export default GenreButton