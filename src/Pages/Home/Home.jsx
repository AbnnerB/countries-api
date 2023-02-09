import Data from "../../Data/data.json";
import "./home.css";

import { useNavigate } from "react-router-dom";
import useModeContext from "../../hook/useModeContext";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";

import { RiArrowDownSLine } from "react-icons/ri";

// const top20 = Data.slice(0, 10);

//brazil into data === line 2047

function Home() {
  const navigate = useNavigate();
  const { darkMode } = useModeContext();

  const [valueInputTextSearch, setValueInputTextSearch] = useState("");
  const [valueSelect, setValueSelect] = useState("Americas");
  const [seeOptions, setSeeOptions] = useState(false);
  const [seeMessageDefaultFilter, setSeeMessageDefaultFilter] = useState(true);

  function linkNavigate(code) {
    navigate(`details/${code}`);
  }

  useEffect(() => {
    if (valueSelect !== "Americas") {
      setSeeMessageDefaultFilter(false);
    }
  }, [valueSelect]);

  return (
    <main className={darkMode} style={{ minHeight: "100vh" }}>
      <div className="headerSearch">
        <div className="inputAndSearch" onClick={() => setSeeOptions(false)}>
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

        <div className="selectFake" onClick={() => setSeeOptions(!seeOptions)}>
          <div
            className="titSelect"
            style={{
              backgroundColor:
                darkMode === "darkMode" ? "hsl(209, 23%, 22%)" : "white",
              color: darkMode === "darkMode" ? "white" : "hsl(209, 23%, 22%)",
            }}
          >
            <span>
              {seeMessageDefaultFilter
                ? "Filter by region"
                : valueSelect === "Americas"
                ? "America"
                : valueSelect}
            </span>
            <RiArrowDownSLine />
          </div>
          <div
            className={seeOptions ? "optionsVisibilty" : "optionsHidden"}
            style={{
              backgroundColor:
                darkMode === "darkMode" ? "hsl(209, 23%, 22%)" : "white",
              color: darkMode === "darkMode" ? "white" : "hsl(209, 23%, 22%)",
            }}
          >
            <span onClick={() => setValueSelect("Africa")}>Africa</span>
            <span onClick={() => setValueSelect("Americas")}>America</span>
            <span onClick={() => setValueSelect("Asia")}>Asia</span>
            <span onClick={() => setValueSelect("Europe")}>Europe</span>
            <span onClick={() => setValueSelect("Oceania")}>Oceania</span>
          </div>
        </div>
      </div>

      {valueInputTextSearch.length === 0 ? (
        <section
          className="containerCountries"
          onClick={() => setSeeOptions(false)}
        >
          {Data.filter((c) => c.region === valueSelect).map((item, index) => {
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
        <section
          className="containerCountries"
          onClick={() => setSeeOptions(false)}
        >
          {Data.filter(
            (country) =>
              country.name.toLowerCase() ===
                valueInputTextSearch.toLowerCase() ||
              country.alpha2Code === valueInputTextSearch.toUpperCase() ||
              country.nativeName.toUpperCase() ===
                valueInputTextSearch.toUpperCase()
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
