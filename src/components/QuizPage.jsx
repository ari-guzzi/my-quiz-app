import React, {useState, useEffect} from 'react';
import QuestionTypeFilter from './QuestionTypeFilter';
import QuizAnswer from './QuizAnswer';

function QuizPage({ quiz, selectedTypes, answers, setAnswers, setSubmittedQuiz }) {

  const handleAnswerChange = (index, value) => {
    setAnswers((prev) => ({ ...prev, [index]: value }));
  };

    const [currentIndex, setCurrentIndex] = useState(0);
    
    const filteredQuestions =
        selectedTypes.length > 0
        ? quiz.questions.filter((q) => selectedTypes.includes(q.type))
        : quiz.questions;
    
      useEffect(() => {
        if (currentIndex >= filteredQuestions.length) {
            setCurrentIndex(0);
        }
    }, [filteredQuestions, currentIndex]);
    const handleClick = (index) => {
        setCurrentIndex(index);
    }
     if (filteredQuestions.length === 0) {
    return <p className="text-center mt-4">No questions match the selected filter.</p>;
  }
    return (
        <div className = "border p-4 shadow-md bg-white rounded-lg">
            <h2 className = "font-schoolbell text-center text-3xl">{quiz.name} Quiz</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {filteredQuestions.map((q, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(index)}
                  className="font-PlusJakartaSans rounded-full cursor-pointer bg-Isabelline bg-opacity-50 border p-2 border-UNBlue m-6 hover:bg-UNBlue hover:border-Isabelline"
                >
                  Question {index + 1}
                </button>
              ))}
            </div>
         <div className="mt-4">
        <p className = "text-center font-PlusJakartaSans text-xl">{filteredQuestions[currentIndex].question}</p>
        <div>

            <p>Answer: </p>
          <QuizAnswer
            question={filteredQuestions[currentIndex]}
            answer={answers[currentIndex]}
            onAnswer={(value) => handleAnswerChange(currentIndex, value)}
          />

        </div>
      </div>
      <div className="grid justify-items-center">
        <button className="font-PlusJakartaSans m-6 p-2 border bg-Isabelline border-PinkLavender cursor-pointer px-10 rounded-full hover:bg-Bole hover:text-white"   onClick={() => setSubmittedQuiz({ quiz, answers })}
>Submit Finished Quiz</button>
      </div>
    </div>
      );
    }

    export default QuizPage;
