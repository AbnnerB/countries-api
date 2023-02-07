import Data from "../../Data/data.json";
import "./home.css";

import { Link } from "react-router-dom";

// const top20 = Data.slice(0, 10);

function Home() {
  return (
    <div className="Home">
      <div className="headerSearch">
        <input type="text" name="" id="" />
        <select>
          <option value="">Africa</option>
          <option value="">America</option>
          <option value="">Asia</option>
          <option value="">Europe</option>
          <option value="">Oceania</option>
        </select>
      </div>
      <section className="containerCountries">
        {Data.filter((c) => c.population >= 112559400).map((item, index) => (
          <div key={index} className="card">
            <img src={item.flags.svg} alt="Flags" />
            <div className="apiContentInfo">
              <h2>{item.name}</h2>
              <p>Population: {item.population}</p>
              <p>Region: {item.region}</p>
              <p>Capital: {item.capital}</p>
            </div>
            <Link to={`details/${item.numericCode}`}> link</Link>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
