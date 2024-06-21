import React, { useState } from "react";

interface CopyButtonProps {
  text: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="relative px-2 py-1 text-xs font-medium text-white bg-blue-500 rounded hover:bg-blue-700"
    >
      {copied ? "Copied!" : "Copy Code"}
    </button>
  );
};

export default CopyButton;
