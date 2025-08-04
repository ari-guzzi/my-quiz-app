import React from 'react';
import QuizPage from './QuizPage';

function QuizTable({ quizzes, setActiveQuiz, setAnswers, selectedTypes }) {
    const groupedQuizzes = quizzes.reduce((acc, quiz) => {
        if (!acc[quiz.category]) {
            acc[quiz.category] = [];
        }
            acc[quiz.category].push(quiz);
            return acc;
    }, {});
return (
    <div className="flex justify-center">
      <table className="overflow-x-auto table-auto w-[90%] border-collapse border">
        <tbody>
          {Object.keys(groupedQuizzes).map((category) => (
            <React.Fragment key={category}>
              <tr>
                <td colSpan="1" className="font-PlusJakartaSans text-xl text-white border-Bole border p-2 bg-UNBlue text-center">
                  {category}
                </td>
              </tr>

                 <tr>
            <td className="p-2 bg-Isabelline">
              <div className="flex overflow-x-auto gap-4 p-4">
                {groupedQuizzes[category].map((quiz) => (
                  <div
                    key={quiz.id}
                    className="font-schoolbell text-xl min-w-[150px] min-h-[150px] max-w-[150px] max-h-[150px] bg-PinkLavender text-black rounded-3xl border-2 border-Bole shadow-lg offset-y flex text-center items-center justify-center cursor-pointer hover:bg-Turquoise"
                    onClick={() => {
                      if (selectedTypes.length === 0) return;
                      setAnswers([]);
                      setActiveQuiz(quiz);
                    }}
                  >
                    {quiz.name}
                  </div>
                ))}
              </div>
            </td>
          </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default QuizTable;