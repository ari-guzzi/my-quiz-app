
function QuizAnswer({ question, answer, onAnswer }) {
const handleChange = (e) => {
    onAnswer(e.target.value);
  };

  const type = question?.type;
    console.log("Question type:", type);


  if (question.type === "freeResponse") {
    return (
      <div className="mt-2 cursor-pointer">
        <input
          type="text"
          className="border p-2 w-full"
          value={answer || ""}
          onChange={handleChange}
          placeholder="Type your answer here"
        />
        {answer && (
          <p className="mt-2 text-sm text-gray-500">Your answer: {answer}</p>
        )}
      </div>
    );
  } else if (question.type === "trueOrFalse") {
    return (
      <div className="mt-2 flex-col gap-4">
        <div className="flex gap-4">
        {["True", "False"].map((option) => (
          <button
            key={option}
            className={`cursor-pointer border p-2 rounded ${
              answer === option ? "bg-gray-200" : ""
            }`}
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
        </div>
        {answer && (
          <p className="mt-2 text-sm text-gray-500">Selected: {answer}</p>
        )}
      </div>
    );
  } else if (question.type === "multipleChoice") {
    return (
      <div className="mt-2 flex flex-col gap-2">
        {question.options.map((option, i) => (
          <button
            key={i}
            className={`cursor-pointer border p-2 rounded hover:bg-gray-200 text-left ${
              answer === option ? "bg-gray-100" : ""
            }`}
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
        {answer && (
          <p className="mt-2 text-sm text-gray-500">Selected: {answer}</p>
        )}
      </div>
    );
  } else {
        return <p className="text-red-500">Unsupported question type</p>;
    }
}
export default QuizAnswer;