import { useState } from "react";

function StudentRow({ student, updateScore }) {
  const [temp, setTemp] = useState(student.score);
  const isPass = student.score >= 40;

  return (
    <tr>
      <td>{student.name}</td>

      <td>{student.score}</td>

      <td style={{ color: isPass ? "green" : "red" }}>
        {isPass ? "Pass" : "Fail"}
      </td>

      <td>
        <input
          type="number"
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
        />
        <button onClick={() => updateScore(student.id, temp)}>
          Save
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;