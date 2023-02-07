import Data from "../../Data/data.json";
import "./home.css";

// const top20 = Data.slice(0, 10);

function Home() {
  return (
    <div className="Home">
      <h2>testando</h2>
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
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
