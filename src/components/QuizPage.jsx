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
        <div className = "border p-4 shadow-md bg-white">
            <h2 className = "text-center">{quiz.name}</h2>
        {filteredQuestions.map((q, index) => (
            <button className ="cursor-pointer bg-yellow-400 space-x-2 m-6" key={index} onClick={() => handleClick(index)}>Question {index+1}</button>
          ))}
         <div className="mt-4">
        <p className = "text-center">{filteredQuestions[currentIndex].question}</p>
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
        <button className="m-6 p-2 border border-red-500 cursor-pointer hover:bg-red-500"   onClick={() => setSubmittedQuiz({ quiz, answers })}
>Submit Finished Quiz</button>
      </div>
    </div>
      );
    }

    export default QuizPage;
