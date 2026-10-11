import { students } from "../data/students";
import { useStudents } from "../context/StudentContext";

export default function StudentList() {
  const { addFavourite, isFavourite } = useStudents();

  return (
    <section>
      <h2>All Students</h2>
      <ul className="card-list">
        {students.map((student) => {
          const added = isFavourite(student.id);
          return (
            <li key={student.id} className="card">
              <div>
                <h3>{student.name}</h3>
                <p>Roll No: {student.roll}</p>
              </div>
              <button
                className="btn add"
                onClick={() => addFavourite(student)}
                disabled={added}
              >
                {added ? "★ Added" : "Add to Favourite"}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
