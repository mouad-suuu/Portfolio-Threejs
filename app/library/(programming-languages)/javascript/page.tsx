"use client";
import React from "react";
import Documentation from "@/components/component/Documentation";
import { data } from "./javascript";

const App: React.FC = () => {
  return (
    <div className="mt-24">
      <Documentation data={data} />
    </div>
  );
};

export default App;
// import { Light, Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { darkula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
// import { dark, oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";

// const Javascript = () => {
//   const codeString = "(num) => num + 1";
//   const [copySuccess, setCopySuccess] = useState(false);

//   const copyCodeToClipboard = () => {
//     navigator.clipboard.writeText(codeString).then(() => {
//       setCopySuccess(true);
//       setTimeout(() => setCopySuccess(false), 1500);
//     });
//   };

//   return (
//     <div className="h-12">
//       <h1 className="pt-16 ">lets start with javascript</h1>
//       <div className="m-14 relative">
//         {copySuccess && (
//           <div className="absolute top-2 right-0 bg-green-500 text-white px-2 py-1 rounded">
//             Copied!
//           </div>
//         )}
//         {!copySuccess && (
//           <Button
//             onClick={copyCodeToClipboard}
//             className="absolute top-2 right-0 bg-blue-500 text-white px-1 py-1 rounded "
//           >
//             Copy Code
//           </Button>
//         )}
//         <SyntaxHighlighter language="javascript" style={oneDark}>
//           {codeString}
//         </SyntaxHighlighter>
//       </div>
//     </div>
//   );
// };

// export default Javascript;
