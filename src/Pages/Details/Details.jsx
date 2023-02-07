import Data from "../../Data/data.json";

import { useParams } from "react-router-dom";

export default function Details() {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      {Data.filter((code) => code.numericCode === id).map((item, index) => (
        <div key={index}>
          <img style={{ maxWidth: "200px" }} src={item.flags.svg} alt="Flags" />
          <div>
            <h3>{item.name}</h3>
            <p>Population: {parseInt(item.population)}</p>
            <p>Region: {item.region}</p>
            <p>Capital: {item.capital}</p>
          </div>
          <div>
            <p>Top Level Domain: </p>
            <p>Currencies: </p>
            <p>Languages: </p>
          </div>
          <div>
            <h3>Border Countries: </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
