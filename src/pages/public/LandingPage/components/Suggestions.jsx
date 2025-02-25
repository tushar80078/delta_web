import React from "react";

const SuggestionsList = ({
  suggestions = [],
  highlight = "",
  dataKey = "courseName",
  onSuggestionClick,
}) => {
  const getHighlightedText = (text, highlight) => {
    if (!highlight) return text;

    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <b key={`${part}-${index}`}>{part}</b>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <>
      {suggestions.map((item) => {
        const text = item[dataKey]; // Access dynamic property
        return (
          <li
            key={item.id || text}
            className="cursor-pointer p-2 hover:bg-gray-100"
            onClick={() => onSuggestionClick(item)}
          >
            {getHighlightedText(text, highlight)}
          </li>
        );
      })}
    </>
  );
};

export default SuggestionsList;
