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
    <div className="w-full px-4">
      {Object.keys(groupedQuizzes).map((category) => (
        <div key={category}>
          <div className="bg-UNBlue text-white text-center text-xl font-PlusJakartaSans p-2 border border-Bole">
            {category}
          </div>

          <div className="bg-Isabelline p-3  border-t-0 border-Bole">
            <div className="flex overflow-x-auto gap-4">
              {groupedQuizzes[category].map((quiz) => (
                <div
                  key={quiz.id}
                  className="font-schoolbell text-xl min-w-[150px] min-h-[150px] max-w-[150px] max-h-[150px] bg-PinkLavender text-black rounded-3xl border-2 border-Bole flex items-center justify-center text-center cursor-pointer hover:bg-Turquoise"
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
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuizTable;