import { Link } from "react-router-dom";
import { useStudents } from "../context/StudentContext";

export default function Favourites() {
  const { favourites, removeFavourite } = useStudents();

  return (
    <section>
      <h2>Favourite Students ({favourites.length})</h2>
      {favourites.length === 0 ? (
        <div className="empty">
          <p>No favourite students added yet</p>
          <Link to="/">Browse students</Link>
        </div>
      ) : (
        <ul className="card-list">
          {favourites.map((student) => (
            <li key={student.id} className="card">
              <div>
                <h3>{student.name}</h3>
                <p>Roll No: {student.roll}</p>
              </div>
              <button
                className="btn remove"
                onClick={() => removeFavourite(student.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
