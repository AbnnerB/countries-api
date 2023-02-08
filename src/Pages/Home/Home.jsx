import Data from "../../Data/data.json";
import "./home.css";

import { useNavigate } from "react-router-dom";
import useModeContext from "../../hook/useModeContext";

// const top20 = Data.slice(0, 10);

function Home() {
  const navigate = useNavigate();
  const { darkMode } = useModeContext();

  function linkNavigate(code) {
    navigate(`details/${code}`);
  }

  return (
    <main className={darkMode} style={{ minHeight: "100vh" }}>
      <div className="headerSearch">
        <input type="text" name="" id="" />
        <select>
          <option value="">Filter by region</option>
          <option value="">Africa</option>
          <option value="">America</option>
          <option value="">Asia</option>
          <option value="">Europe</option>
          <option value="">Oceania</option>
        </select>
      </div>
      <section className="containerCountries">
        {Data.filter((c) => c.population >= 112559400).map((item, index) => {
          const population = item.population.toLocaleString("pt-br");

          return (
            <div
              key={index}
              className="card"
              onClick={() => linkNavigate(item.numericCode)}
            >
              <img src={item.flags.svg} alt="Flags" />
              <div className="apiContentInfo">
                <h2>{item.name}</h2>
                <p>Population: {population}</p>
                <p>Region: {item.region}</p>
                <p>Capital: {item.capital}</p>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default Home;
