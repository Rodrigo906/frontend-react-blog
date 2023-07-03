import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LatestPost from "./LatestPost";
import PageSummary from "./PageSummary";
import PageFullText from "./PageFullText";

export default function MainContent(props) {
  const [mainPage, setMainPage] = useState([]);

  useEffect(() => {
    fetch(props.apiUrl + "pages/" + props.pageId)
      .then((response) => response.json())
      .then((response) => {
        setMainPage(response);
      })
      .catch(err => {
        console.log("error:", err);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section id="banner">
        <Routes>
          <Route index element={<PageSummary page={mainPage} />} />
          <Route path="/page/full" element={<PageFullText page={mainPage} />} />
        </Routes>
      </section>
      <Routes>
        <Route index element={<LatestPost apiUrl={props.apiUrl} />} />
      </Routes>
    </>
  );
}
