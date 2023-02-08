import "./details.css";

import { Link, useParams } from "react-router-dom";

import Data from "../../Data/data.json";

import useModeContext from "../../hook/useModeContext";

import { BsArrowLeftShort } from "react-icons/bs";

export default function Details() {
  const { darkMode, setDarkMode } = useModeContext();

  const { id } = useParams();

  return (
    <main className={darkMode}>
      <section className="containerDetailsPage">
        <Link className="linkBack" to="/">
          <BsArrowLeftShort /> Back
        </Link>

        {/*  */}

        {Data.filter((code) => code.numericCode === id).map((item, index) => {
          const population = item.population.toLocaleString("pt-br");

          return (
            <section key={index} className="containerDetails">
              <div className="firstDivIntoContainer">
                <img src={item.flags.svg} alt="Flags" />
              </div>
              <div className="containerDetailsInfo">
                <h2>{item.name}</h2>
                <div className="flexInfoDetails">
                  <div>
                    <p>
                      <b>Native Name:</b> {item.nativeName}
                    </p>
                    <p>
                      <b>Population:</b> {population}
                    </p>
                    <p>
                      <b>Region:</b> {item.region}
                    </p>
                    <p>
                      <b>Sub Region:</b> {item.subregion}
                    </p>
                    <p>
                      <b>Capital:</b> {item.capital}
                    </p>
                  </div>
                  <div>
                    <p>
                      <b>Top Level Domain: </b>
                      {item.topLevelDomain}
                    </p>
                    <p>
                      <b>Currencies:</b> {item.currencies[0].name}
                    </p>
                    <p>
                      <b>Languages:</b>{" "}
                      {item.languages.map((language, index) => (
                        <span key={index} className="languageSpan">
                          {language.nativeName}
                          <span className="languagensSpanComma">,</span>{" "}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
                {item.borders !== undefined ? (
                  <div className="bordersCountries">
                    <h3>Border Countries:</h3>

                    {item.borders.map((border) => (
                      <button key={border}>{border}</button>
                    ))}
                  </div>
                ) : (
                  <div className="borderCountriesFalse">
                    <h3>Border Countries: </h3>
                    <span> Does not have borders with any country.</span>
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </section>
    </main>
  );
}
