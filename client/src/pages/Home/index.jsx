import "./home.css";
import cardImageLeft from "../../assets/iran2.jpg";
import cardImageMitte from "../../assets/iran2.jpg";
import cardImageRight from "../../assets/iran2.jpg";

function Home() {
  return (
    <>
      <div className="banner">
        <h1>Find your Holiday Destination</h1>
        <div className="search-bar">
          <input type="text" placeholder="Enter your budget" />
          <input type="text" placeholder="How large is your group?" />
          <input type="text" placeholder="Pick a destination" />
          <button>GO</button>
        </div>
      </div>
      {/* <section className="vacation-spots">
        <h2>Popular Vacation Spots</h2>
        <div className="spot-buttons">
          <button>Japan</button>
          <button>Thailand</button>
          <button>Bangladesh</button>
          <button>Bhutan</button>
          <button>Singapore</button>
          <button>India</button>
          <button>Australia</button>
          <button>France</button>
        </div>
      </section> */}
      <section className="categories">
        <h2>Categories</h2>
        <div className="category-cards">
          <div className="card">
            <div className="card-text">Hills</div>
            <img src={cardImageLeft} alt="Hills" className="banner-image" />
          </div>
          <div className="card">
            <div className="card-text">Beach</div>
            <img src={cardImageRight} alt="Beach" />
          </div>
          <div className="card">
            <div className="card-text">History</div>
            <img src={cardImageMitte} alt="History" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
