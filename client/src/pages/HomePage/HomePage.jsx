import "./homePage.scss";
import mainImg2 from "../../assets/images/mainImg2.jpeg";

function HomePage() {
  return (
    <section className="homePage">
      <figure
        className="main-image"
        style={{ backgroundImage: `url(${mainImg2})` }}
      >
        <button type="button" className="button">
          New Journal
        </button>
      </figure>
      <section className="bannerText">
        <article className="bannerTextContent">
          <h1>Welcome to Our Travel Journal Site!</h1>
          <p>
            Explore, create, and share your adventures around the world with our
            interactive travel journals.
          </p>
          <p>Join our community today and start documenting your journeys!</p>
        </article>
      </section>
    </section>
  );
}

export default HomePage;
