import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StudentProvider, useStudents } from "./context/StudentContext";
import StudentList from "./pages/StudentList";
import Favourites from "./pages/Favourites";
import "./App.css";

function Navbar() {
  const { favourites } = useStudents();
  return (
    <nav className="navbar">
      <h1>Student Favourites</h1>
      <div className="links">
        <Link to="/">Students</Link>
        <Link to="/favourites">Favourites ({favourites.length})</Link>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </main>
      </BrowserRouter>
    </StudentProvider>
  );
}
