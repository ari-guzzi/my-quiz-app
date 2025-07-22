import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import QuizTable from './components/QuizTable';
import SearchAndFilters from './components/SearchAndFilters';
import quizzes from './quizzes.js';
import QuestionTypeFilter from './components/QuestionTypeFilter.jsx';
import QuizPage from './components/QuizPage.jsx';
import SubmitPage from './components/SubmitPage.jsx';
function App() {
const [answers, setAnswers] = useState({});
const quizRef = useRef(null);
const [selectedTypes, setSelectedTypes] = useState([
  "multipleChoice",
  "freeResponse",
  "trueOrFalse"
]);
  const [filteredQuizzes, setFilteredQuizzes] = useState(quizzes); 
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [submittedQuiz, setSubmittedQuiz] = useState(null);
  const submitRef = useRef(null);
useEffect(() => {
  if (submittedQuiz && submitRef.current) {
    setTimeout(() => {
      submitRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }
}, [submittedQuiz]);

  useEffect(() => {
  if (activeQuiz && quizRef.current) {
    // Delay to ensure rendering is done
    setTimeout(() => {
      quizRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }
}, [activeQuiz]);

  return (
    <>
    <div className="min-h-screen bg-gray-100 p-4">
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <SearchAndFilters 
          quizzes = {quizzes} 
          setFilteredQuizzes={setFilteredQuizzes}/>
      <h1 className="text-blue-500 text-3xl font-semibold">Quizzes</h1>
      <div className="flex flex-row gap-2">
        <QuestionTypeFilter
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
        />
      </div>
      <QuizTable
        quizzes={filteredQuizzes}
        setActiveQuiz={setActiveQuiz}
        setAnswers={setAnswers}
      />
    </div>
<div ref={quizRef}>
    {activeQuiz && (
      <div className="max-w-4xl mx-auto mt-6">
        <QuizPage
          quiz={activeQuiz}
          selectedTypes={selectedTypes}
          answers={answers}
          setAnswers={setAnswers}
          setSubmittedQuiz={setSubmittedQuiz}
        />
      </div>
    )}
    </div>
    {submittedQuiz && (
      <div ref={submitRef} className="max-w-4xl mx-auto mt-6">
        <SubmitPage
          quiz={submittedQuiz.quiz}
          answers={submittedQuiz.answers}
          selectedTypes={selectedTypes}
          setSubmittedQuiz={setSubmittedQuiz}
          setActiveQuiz={setActiveQuiz}
        />
      </div>
    )}
    </div>
    </>
  );
}

export default App;
