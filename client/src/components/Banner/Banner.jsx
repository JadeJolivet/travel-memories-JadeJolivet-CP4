import "./banner.scss";
import mixImg from "../../assets/images/boat.png";

function Banner() {
  return (
    <main className="banner-container">
      <section className="banner">
        <article className="banner-content">
          <article className="Welcome-text">
            <h1>Welcome to Our Travel Journal Site !</h1>
            <p>Explore, Create, and Share Your Adventures Around the World !</p>
            <p>
              Our platform is designed for passionate travelers! Our Travel
              Journal site allows you to capture and share your experiences
              through interactive and customizable journals. Whether you're a
              solo adventurer or exploring with a group, our site offers a
              unique way to document your travels and share them with your loved
              ones.
            </p>
          </article>

          <article className="Website-description">
            <h2>Key Features:</h2>
            <ul>
              <li>
                Create Travel Journals: Easily create personalized travel
                journals by adding captivating titles, inspiring images, and
                detailed descriptions of your adventures.
              </li>
              <li>
                Intuitive Management: View and manage all your travel journals
                from your personal dashboard. Edit, delete, or add new entries
                at any time.
              </li>
              <li>
                Share via QR Code: Share your travel journals with a unique QR
                code generated automatically. Simply scan this code to allow
                friends and family to explore your travel memories.
              </li>
            </ul>
          </article>
        </article>
      </section>

      <figure className="image">
        <img src={mixImg} alt="Boat on see" />
      </figure>
    </main>
  );
}

export default Banner;
