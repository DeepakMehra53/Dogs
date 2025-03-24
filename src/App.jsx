import { Home } from "./components/Home";
import { SecondPage } from "./components/SecondPage";
import { useState } from "react";
export const App = () => {
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" && <Home setPage={setPage} />}
      {page === "second" && <SecondPage />}
    </>
  );
};

