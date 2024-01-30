import { useParams } from "react-router-dom";
import {playLists} from "../../PlayListsArr"

export const  Category = () => {
  const params = useParams();
  console.log(params)
  const playListItem = playLists.find((playListItem) => playListItem.id === Number(params.id));


  return (
    <div>
      <h1>Подборкa {playListItem.id}</h1>
    </div>
  );
};