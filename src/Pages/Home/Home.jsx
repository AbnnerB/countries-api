import Data from "../../Data/data.json";
import "./home.css";

import { useNavigate } from "react-router-dom";
import useModeContext from "../../hook/useModeContext";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

// const top20 = Data.slice(0, 10);

//brazil into data === line 2047

function Home() {
  const navigate = useNavigate();
  const { darkMode } = useModeContext();

  const [valueInputTextSearch, setValueInputTextSearch] = useState("");

  function linkNavigate(code) {
    navigate(`details/${code}`);
  }

  return (
    <main className={darkMode} style={{ minHeight: "100vh" }}>
      <div className="headerSearch">
        <div className="inputAndSearch">
          <label className="search">
            <BsSearch />
          </label>
          <input
            placeholder="Search for a country"
            type="text"
            value={valueInputTextSearch}
            onChange={(e) => setValueInputTextSearch(e.target.value)}
            style={{ backgroundColor: darkMode === "darkMode" ? "" : "white" }}
          />
        </div>
        <select>
          <option value="">Filter by region</option>
          <option value="">Africa</option>
          <option value="">America</option>
          <option value="">Asia</option>
          <option value="">Europe</option>
          <option value="">Oceania</option>
        </select>
      </div>
      {valueInputTextSearch.length === 0 ? (
        <section className="containerCountries">
          {Data.filter((c) => c.region === "Africa").map((item, index) => {
            const population = item.population.toLocaleString("pt-br");

            return (
              <div
                key={index}
                className="card"
                style={{
                  backgroundColor: darkMode === "lightMode" ? "white" : "",
                }}
                onClick={() => linkNavigate(item.numericCode)}
              >
                <img
                  style={{
                    borderBottom:
                      darkMode === "lightMode"
                        ? "1px solid rgb(214, 214, 214)"
                        : "",
                  }}
                  src={item.flags.svg}
                  alt="Flags"
                />
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
      ) : (
        <section className="containerCountries">
          {Data.filter(
            (country) =>
              country.name.toLowerCase() ===
                valueInputTextSearch.toLowerCase() ||
              country.alpha2Code === valueInputTextSearch.toUpperCase()
          ).map((item, index) => {
            const population = item.population.toLocaleString("pt-br");

            return (
              <div
                key={index}
                className="card"
                style={{
                  backgroundColor: darkMode === "lightMode" ? "white" : "",
                }}
                onClick={() => linkNavigate(item.numericCode)}
              >
                <img
                  style={{
                    borderBottom:
                      darkMode === "lightMode"
                        ? "1px solid rgb(214, 214, 214)"
                        : "",
                  }}
                  src={item.flags.svg}
                  alt="Flags"
                />
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
      )}
    </main>
  );
}

export default Home;
