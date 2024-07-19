import { Form, useLoaderData } from "react-router-dom";

function JournalEdit() {
  const loaderData = useLoaderData();

  if (!loaderData) {
    return <p>Loading...</p>;
  }

  const title = loaderData.title || "";
  const coverImage = loaderData.cover_image || "";

  return (
    <>
      <Form method="PUT">
        <h1>EDIT JOURNAL</h1>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" defaultValue={title} />
        <label htmlFor="cover_image">Image Url</label>
        <input
          type="text"
          id="cover_image"
          name="cover_image"
          defaultValue={coverImage}
        />
        <button type="submit">Modify</button>
      </Form>

      <Form method="DELETE">
        <button type="submit">Delete</button>
      </Form>
    </>
  );
}

export default JournalEdit;
