import { useState } from "react";

function AddStudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || score === "") {
      alert("Please enter both Name and Score");
      return;
    }

    addStudent(name, Number(score));

    // Clear form after submit
    setName("");
    setScore("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add New Student</h2>

      <input
        type="text"
        placeholder="Enter Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />

      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudentForm;