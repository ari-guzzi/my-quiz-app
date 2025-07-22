import React from 'react';
import QuizPage from './QuizPage';

function QuizTable({ quizzes, setActiveQuiz, setAnswers }) {
    const groupedQuizzes = quizzes.reduce((acc, quiz) => {
        if (!acc[quiz.category]) {
            acc[quiz.category] = [];
        }
            acc[quiz.category].push(quiz);
            return acc;
    }, {});
return (
    <div>
      <table className="overflow-x-auto table-auto w-full border-collapse border">
        <tbody>
          {Object.keys(groupedQuizzes).map((category) => (
            <React.Fragment key={category}>
              <tr>
                <td colSpan="1" className="text-blue-800 border p-2 bg-gray-200 font-bold text-center">
                  {category}
                </td>
              </tr>
              {groupedQuizzes[category].map((quiz) => (
                <tr  className="border p-4 cursor-pointer hover:bg-gray-200 max-h-full" key={quiz.id} 
                onClick={() => {
                  setAnswers([]);
                  setActiveQuiz(quiz);
                  }
                }>
                  <td className="border p-2 text-center">{quiz.name}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default QuizTable;