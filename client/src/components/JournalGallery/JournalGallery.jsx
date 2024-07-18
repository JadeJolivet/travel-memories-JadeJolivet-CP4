import { useLoaderData } from "react-router-dom";
// import PropTypes from "prop-types";
import "./journalGallery.scss";

const BASE_URL = import.meta.env.VITE_API_URL;

function JournalGallery() {
  const journalsData = useLoaderData();

  return (
    <>
      <h1>Discover the travel journals </h1>
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

// JournalGallery.propTypes = {
//   journalsData: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       cover_image: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

export default JournalGallery;
