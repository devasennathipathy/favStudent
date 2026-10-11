import { createContext, useContext, useState } from "react";

const StudentContext = createContext(null);

export function StudentProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (student) => {
    // Prevent duplicates
    setFavourites((prev) =>
      prev.some((s) => s.id === student.id) ? prev : [...prev, student]
    );
  };

  const removeFavourite = (id) => {
    setFavourites((prev) => prev.filter((s) => s.id !== id));
  };

  const isFavourite = (id) => favourites.some((s) => s.id === id);

  return (
    <StudentContext.Provider
      value={{ favourites, addFavourite, removeFavourite, isFavourite }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export function useStudents() {
  const ctx = useContext(StudentContext);
  if (!ctx) throw new Error("useStudents must be used inside StudentProvider");
  return ctx;
}
