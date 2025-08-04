function QuestionTypeFilter({ selectedTypes, setSelectedTypes }) {
  const handleChange = (e) => {
    const value = e.target.value;
    const newTypes = selectedTypes.includes(value)
      ? selectedTypes.filter((item) => item !== value)
      : [...selectedTypes, value];

    setSelectedTypes(newTypes);
  };

  return (
    <div className="my-2">
      <div className="flex flex-wrap items-center gap-4">
        <p className="font-PlusJakartaSans font-bold">Filter Quiz Question Types:</p>

        <label className="flex items-center space-x-1">
          <input
            type="checkbox"
            value="multipleChoice"
            onChange={handleChange}
            checked={selectedTypes.includes("multipleChoice")}
            className="p-2 border rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="font-PlusJakartaSans">Multiple Choice</span>
        </label>

        <label className="flex items-center space-x-1">
          <input
            type="checkbox"
            value="freeResponse"
            onChange={handleChange}
            checked={selectedTypes.includes("freeResponse")}
            className="p-2 border rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="font-PlusJakartaSans">Free Response</span>
        </label>

        <label className="flex items-center space-x-1">
          <input
            type="checkbox"
            value="trueOrFalse"
            onChange={handleChange}
            checked={selectedTypes.includes("trueOrFalse")}
            className="p-2 border rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="font-PlusJakartaSans">True Or False</span>
        </label>
      </div>

      {selectedTypes.length === 0 && (
        <p className="text-red-500 text-sm mt-2 font-PlusJakartaSans ml-1">
          Must have at least one question type selected.
        </p>
      )}
    </div>
  );
}

export default QuestionTypeFilter;
