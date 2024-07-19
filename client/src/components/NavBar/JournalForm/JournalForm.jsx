import { Form } from "react-router-dom";
import "./journalForm.scss";

function JournalForm() {
  return (
    <section className="form-container">
      <Form method="POST">
        <h1>ADD TRAVEL MEMORY</h1>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
        <label htmlFor="coverImage">Image Url</label>
        <input type="text" id="cover_image" name="cover_image" />
        <label htmlFor="theme">Theme</label>
        <input type="text" id="theme" name="theme" />
        <button type="submit" className="post-button">
          Post
        </button>
      </Form>
    </section>
  );
}

export default JournalForm;
