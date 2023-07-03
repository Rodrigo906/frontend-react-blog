import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function LatestPost(props) {
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    fetch(props.apiUrl + "posts/latest")
      .then((response) => response.json())
      .then((response) => {
        setLatest(response);
      })
      .catch(err => {
        console.log("error:", err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <header className="major">
        <h2>Latest Posts...</h2>
      </header>
      <div className="posts">
        {latest.map((post) => (
          <article key={post._id.$oid}>
            <h3>{post.title}</h3>
            <p>{post.resume}</p>
            <ul className="actions">
              <li>
                <Link to={"posts/" + post._id.$oid}>Read more...</Link>
              </li>
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}





