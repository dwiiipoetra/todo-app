import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useParams } from "react-router-dom";
import Main from "./pages";
import { getAllNotes } from "../src/utils/local-data";
import NoteDetail from "./components/TodoDetail";
import Page404 from "./pages/page-404";

function App() {
  let { id } = useParams();
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route
          path="/note/:id"
          element={<NoteDetail todos={getAllNotes()} id={id} />}
        ></Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
