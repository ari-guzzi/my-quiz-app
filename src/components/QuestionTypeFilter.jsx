
function QuestionTypeFilter({ selectedTypes, setSelectedTypes }) {
  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedTypes((prevState) =>
      prevState.includes(value)
        ? prevState.filter((item) => item !== value)
        : [...prevState, value]
    );
  };

    
  return (
    <>
    <label className="flex items-center space-x-2">
      <input
        type = "checkbox"
        value="multipleChoice"
        onChange={handleChange}
        checked={selectedTypes.includes("multipleChoice")}
        className="p-2 border rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span>Multiple Choice</span>
      </label>
      <label className="flex items-center space-x-2">
      <input
        type = "checkbox"
        value="freeResponse"
        onChange={handleChange}
        checked={selectedTypes.includes("freeResponse")}
        className="p-2 border rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <span>Free Response</span>
      </label>
      <label className="flex items-center space-x-2">
      <input
        type = "checkbox"
        value="trueOrFalse"
        onChange={handleChange}
        checked={selectedTypes.includes("trueOrFalse")}
        className="p-2 border rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <span>True Or False</span>
      </label>
      {/* <h1>Selected: {questionTypesSelected.join(", ")} </h1> */}
    </>
  );
}

export default QuestionTypeFilter;