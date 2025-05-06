import { questions } from "./data";
import Question from "./Components/Question";

function App() {
  console.log("at app");
  console.log(questions[0]);

  return (
    <div>
      <ul>
        {questions.map((ques) => (
          <Question data={ques} />
        ))}
      </ul>
    </div>
  );
}

export default App;
