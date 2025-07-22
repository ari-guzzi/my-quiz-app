import QuizPage from "./QuizPage";

function SubmitPage({ quiz, answers, selectedTypes, setSubmittedQuiz, setActiveQuiz}) {
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

  const percentage = ((score / filteredQuestions.length) * 100).toFixed(2);
  let selectedTypesList = "";
  if (selectedTypes.length == 1) {
    selectedTypesList = selectedTypes[0];
  }
  else {
    for (let i = 0; i < selectedTypes.length; i++) {
        selectedTypesList += selectedTypes[i];
        if (i + 2 == selectedTypes.length) {
            selectedTypesList += " and ";
        }
        else if (i + 1 == selectedTypes.length) {
            break;
        }
        else {
            selectedTypesList += ", ";
        }
    }
}
    return (
        <>
        <h1>Congrats! You finished {quiz.name} with {selectedTypesList} question types selected.</h1>

        <p>You scored a {percentage}%</p>
        <button
        className="mt-4 p-2 border border-blue-500 hover:bg-blue-500 hover:text-white"
        onClick={() => {
            setSubmittedQuiz(null);
            setActiveQuiz(null);
            }}
      >
        Back to Quizzes
      </button>
        </>
    )
}
export default SubmitPage;