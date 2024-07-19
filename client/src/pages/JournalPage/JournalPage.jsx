import { useLoaderData } from "react-router-dom";
import JournalGallery from "../../components/JournalGallery/JournalGallery";

import "./journalPage.scss";

function JournalPage() {
  const journalsData = useLoaderData();
  return (
    <>
      <h2>Welcome to your travel memories</h2>
      <p>You can add, modify or created a new journal</p>
      <JournalGallery journalsData={journalsData} />
    </>
  );
}

export default JournalPage;
