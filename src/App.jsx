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
useEffect(() => {
  if (selectedTypes.length === 0) {
    setActiveQuiz(null);
    setSubmittedQuiz(null);
  }
}, [selectedTypes]);

  const handleTypeChange = (newTypes) => {
    setSelectedTypes(newTypes);
    setActiveQuiz(null);   
    setSubmittedQuiz(null);     
  };
  return (
    <>
    <div className="min-h-screen bg-gray-100 p-4">
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h1 className="font-schoolbell text-5xl text-center text-UNBlue font-semibold">Quizzes</h1>
      <SearchAndFilters 
          quizzes = {quizzes} 
          setFilteredQuizzes={setFilteredQuizzes}/>
      <div className="flex justify-start pl-[5%] flex-row gap-2">
        <QuestionTypeFilter
        selectedTypes={selectedTypes}
        setSelectedTypes={handleTypeChange}
      />
      </div>
      <QuizTable
        quizzes={filteredQuizzes}
        setActiveQuiz={setActiveQuiz}
        setAnswers={setAnswers}
        selectedTypes={selectedTypes}
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
