import { useNavigate, useLoaderData } from "react-router-dom";
import "./homePage.scss";
import mainImg2 from "../../assets/images/mainImg2.jpeg";
import Banner from "../../components/Banner/Banner";
import JournalGallery from "../../components/JournalGallery/JournalGallery";

function HomePage() {
  const journalsData = useLoaderData();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/newJournal");

  };

  return (
    <main className="homePage">
      <figure
        className="main-image"
        style={{ backgroundImage: `url(${mainImg2})` }}
      >
        <button type="button" className="new-button" onClick={handleClick}>
          New Travel Journal
        </button>
      </figure>

      <Banner />
      <JournalGallery journalsData={journalsData} />
    </main>
  );
}

export default HomePage;

