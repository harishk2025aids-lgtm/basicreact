
import { useState, useEffect } from "react";

function Call() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Call component loaded");
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({
            title: title,
            body: body,
            userId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      const data = await res.json();

      setResponse(data);
    } catch (error) {
      setResponse({ error: "Something went wrong" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>API POST Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <br /><br />

        <textarea
          placeholder="Enter body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {response && (
        <div>
          <h2>API Response</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Call;
