import { useState } from "react";

function Question({ data }) {
  const [seen, setSeen] = useState(false);

  console.log(data.answer);

  return (
    <>
      {seen ? (
        <li onClick={() => setSeen((s) => !s)} className="question">
          <h1>{data.question}</h1>
        </li>
      ) : (
        <li onClick={() => setSeen((s) => !s)} className="answer">
          <h1>{data.answer}</h1>
        </li>
      )}
    </>
  );
}

export default Question;
