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
      <div className="flex justify-center my-1">
  <input 
    type="text" 
    placeholder="Search Here" 
    onChange={handleChange} 
    value={searchInput}
    className="w-[70%] p-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-UNBlue" 
  />
</div>
      <div>
      </div>
    </>
  );
}
export default SearchAndFilters