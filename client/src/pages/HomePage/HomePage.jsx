import "./homePage.scss";
import mainImg2 from "../../assets/images/mainImg2.jpeg";
import Banner from "../../components/Banner/Banner";

function HomePage() {
  return (
    <section className="homePage">
      <figure
        className="main-image"
        style={{ backgroundImage: `url(${mainImg2})` }}
      >
        <button type="button" className="button">
          New Travel Journal
        </button>
      </figure>

      <Banner />
    </section>
  );
}

export default HomePage;
