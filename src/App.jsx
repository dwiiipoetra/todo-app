import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages";
import TodoDetail from "./components/TodoDetail";
import Page404 from "./pages/page-404";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/note/:id" element={<TodoDetail />}></Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
