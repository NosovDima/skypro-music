import { useParams } from "react-router-dom";
import {PlayLists} from "../../PlayListsArr"

export const  Category = () => {
  const params = useParams();
  console.log(params)
  const PlayListItem = PlayLists.find((PlayListItem) => PlayListItem.id === Number(params.id));


  return (
    <div>
      <h1>Подборкa {PlayListItem.id}</h1>
    </div>
  );
};