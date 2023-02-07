import Data from "../../Data/data.json";

import { Link, useParams } from "react-router-dom";

export default function Details() {
  const { id } = useParams();

  return (
    <div>
      <Link to="/">Back</Link>

      {Data.filter((code) => code.numericCode === id).map((item, index) => {
        const population = item.population.toLocaleString("pt-br");

        return (
          <div key={index}>
            <img
              style={{ maxWidth: "200px" }}
              src={item.flags.svg}
              alt="Flags"
            />
            <div>
              <h3>{item.name}</h3>
              <p>Population: {population}</p>
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
        );
      })}
    </div>
  );
}
