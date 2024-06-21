// components/BackToTopButton.js
import React from "react";

const BackToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className="fixed bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg"
    >
      Top
    </button>
  );
};

export default BackToTopButton;
