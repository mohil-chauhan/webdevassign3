import StudentRow from "./StudentRow";

function StudentTable({ students, updateScore }) {
  return (
    <div className="table-container">
      <h2>Student List</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Update Score</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <StudentRow
              key={student.id}
              student={student}
              updateScore={updateScore}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;