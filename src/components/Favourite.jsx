//React & React Hooks:
import { useState } from "react";
//HTTP Requests:
import axios from "axios";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import Tooltip from "../utils/ToolTip";
//UI Framework Components:
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

//----------------------------------------------------------------

export const Favourite = (props) => {
  const [errors, setErrors] = useState([]);
  const { currencyId, currentUser, favourites, setFavourites } = props;

  const toggleFavourite = async (currencyId) => {
    const favourite = favourites.find((fav) => fav.currency === currencyId);

    try {
      if (favourite) {
        await axiosReq.delete(`/favouritecurrencies/${favourite.id}/`);

        setFavourites(favourites.filter((fav) => fav.currency !== currencyId));
      } else {
        const { data } = await axiosReq.post("/favouritecurrencies/", {
          currency: currencyId,
        });

        setFavourites([...favourites, data]);
      }
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  //----------------------------------------------------------------

  return (
    <td
      onClick={(e) => {
        e.stopPropagation();
        toggleFavourite(currencyId);
      }}
      className="flex justify-center text-center"
    >
      {currentUser ? (
        favourites.some(
          (favCurrency) => favCurrency.currency === currencyId
        ) ? (
          <StarIconSolid className="cursor-pointer text-color-2" height={28} />
        ) : (
          <StarIconOutline
            className="cursor-pointer text-color-2"
            height={28}
          />
        )
      ) : (
        <Tooltip message="Log in to select currencies!" placement="top">
          <StarIconOutline className="text-gray-500 cursor-not-allowed" />
        </Tooltip>
      )}
    </td>
  );
};
