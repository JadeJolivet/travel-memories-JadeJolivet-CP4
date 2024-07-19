import JournalEdit from "../../components/JournalEdit/JournalEdit";
import JournalForm from "../../components/NavBar/JournalForm/JournalForm";


function NewJournalPage() {
  return (
    <section>
      <h1>Create Your Travel Memories</h1>
      <JournalForm />
      <JournalEdit />
    </section>
  );
}

export default NewJournalPage;
