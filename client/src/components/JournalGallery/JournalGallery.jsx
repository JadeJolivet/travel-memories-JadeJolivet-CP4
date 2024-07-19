import PropTypes from "prop-types";
import "./journalGallery.scss";

function JournalGallery({ journalsData }) {
  const BASE_URL = import.meta.env.VITE_API_URL;

  if (!journalsData || journalsData.length === 0) {
    return <p>No journals found</p>;
  }

  return (
    <>
      <h1>Discover the travel journals</h1>
      <ul className="journal-list">
        {journalsData.map((travelJournal) => (
          <li key={travelJournal.id} className="journal-image">
            <img
              src={`${BASE_URL}/${travelJournal.cover_image}`}
              alt={`TravelJournal: ${travelJournal.title}`}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

JournalGallery.propTypes = {
  journalsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      cover_image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default JournalGallery;
