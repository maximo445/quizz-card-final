import { questions } from "./data";
import Question from "./Components/Question";
import "./App.css";

function App() {
  console.log("at app");
  console.log(questions[0]);

  return (
    <div>
      <ul className="container">
        {questions.map((ques) => (
          <Question data={ques} />
        ))}
      </ul>
    </div>
  );
}

export default App;
