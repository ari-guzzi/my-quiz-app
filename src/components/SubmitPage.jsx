import QuizPage from "./QuizPage";

function SubmitPage({ quiz, answers, selectedTypes, setSubmittedQuiz, setActiveQuiz}) {
  const typeLabels = {
  multipleChoice: "multiple choice",
  freeResponse: "free response",
  trueOrFalse: "true/false",
};

const readableTypes = selectedTypes.map(type => typeLabels[type]);

let selectedTypesList = "";
if (readableTypes.length === 1) {
  selectedTypesList = readableTypes[0];
} else if (readableTypes.length === 2) {
  selectedTypesList = `${readableTypes[0]} and ${readableTypes[1]}`;
} else {
  selectedTypesList =
    readableTypes.slice(0, -1).join(", ") + ", and " + readableTypes.slice(-1);
}

const filteredQuestions =
  selectedTypes.length > 0
    ? quiz.questions.filter((q) => selectedTypes.includes(q.type))
    : quiz.questions;
    let score = 0;
    
      filteredQuestions.forEach((question, index) => {
    if (
      answers[index] &&
      answers[index].toString().toLowerCase().trim() === question.correctAnswer.toString().toLowerCase().trim()
    ) {
      score++;
    }
  });
  const results = filteredQuestions.map((question, index) => {
    const userAnswer = answers[index]?.toString().toLowerCase().trim();
    const correctAnswer = question.correctAnswer.toString().toLowerCase().trim();
    const isCorrect = userAnswer === correctAnswer;
    return { index, isCorrect };
  });

  const percentage = ((score / filteredQuestions.length) * 100).toFixed(2);

    return (
        <>
         <div className = "border p-4 shadow-md bg-white rounded-lg">
        <div className = "flex justify-center">
          <h1 className="font-PlusJakartaSans text-2xl w-[70%] text-center">
            Congratulations! You finished the <span className="font-bold">{quiz.name} Quiz </span>with <span className="italic">{selectedTypesList}</span> question types selected!
          </h1>        
        </div>
       <div className="font-PlusJakartaSans flex justify-between items-center gap-8 mt-6">
          <div className="text-lg space-y-2">
            {results.map(({ index, isCorrect }) => (
              <p key={index}>
                Question {index + 1}:{' '}
                <span className={isCorrect ? "text-green-600 font-semibold" : "text-red-600"}>
                  {isCorrect ? "Right" : "Wrong"}
                </span>
              </p>
            ))}
          </div>

          <div className="sm:text-right w-full sm:w-auto">
          <p className="text-3xl whitespace-wrap">
            You scored a {percentage}%
          </p>
        </div>

        </div>
        <div className="flex justify-center mt-6">
        <button
        className="font-PlusJakartaSans mt-4 p-2 px-20 text-white rounded-full border bg-UNBlue border-PinkLavender hover:bg-Isabelline hover:text-black"
        onClick={() => {
            setSubmittedQuiz(null);
            setActiveQuiz(null);
            }}
      >
        Back to Quizzes
      </button>
      </div>
      </div>
        </>
    )
}
export default SubmitPage;