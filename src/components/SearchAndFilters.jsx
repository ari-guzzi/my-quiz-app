import React, {useState} from 'react';

function SearchAndFilters({ quizzes, setFilteredQuizzes }){
const [searchInput, setSearchInput] = useState("");

const handleChange = (e) => {
  const query = e.target.value;
    setSearchInput(query);

if (query.length > 0) {
      const filtered = quizzes.filter((quiz) =>
        quiz.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredQuizzes(filtered);
    } else {
      setFilteredQuizzes(quizzes);
    }
};
  return (
    <>
      <input 
        type="text" 
        placeholder="Search here" 
        onChange={handleChange} 
        value={searchInput}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
      />
      <div>
      </div>
    </>
  );
}
export default SearchAndFilters