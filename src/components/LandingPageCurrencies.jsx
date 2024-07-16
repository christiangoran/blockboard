//React & React Hooks:
import { useEffect, useState } from "react";
//Routing
import { useNavigate } from "react-router-dom";
//HTTP Requests:
import axios from "axios";
import { axiosReq } from "../api/axiosDefaults";

//Context/Hooks:
import { useCurrentUser } from "../context/CurrentUserContext";
//Utilities:
import { formatLargeNumbers, formatNumbers } from "../utils/NumbersFormatting";
import { Favourite } from "../components/Favourite";

//----------------------------------------------------------------

export const LandingPageCurrencies = () => {
  const currentUser = useCurrentUser();
  const [currencies, setCurrencies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const getCurrencies = async () => {
    try {
      const response = await axios.get("/currencies/");
      console.log(response.data);

      setCurrencies(response.data.results.slice(0, 10));
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const getFavourites = async () => {
    try {
      const { data } = await axiosReq.get("/favouritecurrencies/");
      setFavourites(data.results);
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const handleRowClick = (id) => {
    navigate(`/currencies/${id}`);
  };

  useEffect(() => {
    getCurrencies();
    getFavourites();
  }, []);

  //----------------------------------------------------------------
  return (
    <div className="w-full h-full text-center">
      <div className="w-full h-full">
        <table className="w-full">
          <thead>
            <tr className="h-[2rem]">
              <th className="border-r border-color-5">#</th>
              <th className="pl-16 text-left border-r border-color-5">Name</th>
              <th className="border-r border-color-5">Price</th>
              <th className="hidden border-r border-color-5 md:table-cell">
                Market Cap
              </th>
              <th className="hidden border-r border-color-5 md:table-cell">
                Total Volume
              </th>
              <th className="">Select</th>
            </tr>
          </thead>
          <tbody>
            {currencies.map((currency) => (
              <tr
                key={currency.id}
                onClick={() => handleRowClick(currency.id)}
                style={{ cursor: "pointer" }}
                className=" hover:bg-n-8"
              >
                <td className="border-r border-color-5 ">{currency.id}</td>

                <td className="flex flex-row justify-start py-[.67rem] border-r border-color-5">
                  <img
                    className="mr-4 ml-[4rem]"
                    src={currency.logo_url}
                    alt={`${currency.name} logo`}
                    height={25}
                    width={25}
                  />
                  {currency.name} - {currency.symbol}
                </td>

                <td className="border-r border-color-5">
                  {formatNumbers(currency.current_price)}
                </td>

                <td className="border-r border-color-5">
                  {formatLargeNumbers(currency.market_cap)}
                </td>

                <td className="border-r border-color-5">
                  {formatLargeNumbers(currency.total_volume)}
                </td>

                <Favourite
                  currencyId={currency.id}
                  currentUser={currentUser}
                  favourites={favourites}
                  setFavourites={setFavourites}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul></ul>
    </div>
  );
};

export default LandingPageCurrencies;
