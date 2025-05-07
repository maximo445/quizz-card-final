import { useState } from "react";

function Question({ data }) {
  const [seen, setSeen] = useState(false);

  console.log(data.answer);

  return (
    <>
      {!seen ? (
        <li onClick={() => setSeen((s) => !s)} className="card question">
          <p>{data.question}</p>
        </li>
      ) : (
        <li onClick={() => setSeen((s) => !s)} className="card answer">
          <p>{data.answer}</p>
        </li>
      )}
    </>
  );
}

export default Question;
