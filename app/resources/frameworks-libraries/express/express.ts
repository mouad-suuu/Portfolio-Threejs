import { DocumentationSection } from "@/components/component/Documentation";

export const data: DocumentationSection[] = [
  {
    mainTitle: "express.js Documentation",
    section: "Basics",
    items: [
      {
        type: "title",
        text: "Node.js Basics",
      },
      {
        type: "language",
        text: "Node.js",
      },
      {
        type: "paragraph",
        text: "This example demonstrates basic concepts in Node.js such as setting up a server, handling requests, and using modules.",
      },
      {
        type: "code",
        code: {
          language: "javascript",
          code: '// Node.js code to demonstrate basic concepts\n\n// 1. Import http module\nconst http = require("http");\n\n// 2. Create Server\nconst server = http.createServer((req, res) => {\n    res.statusCode = 200;\n    res.setHeader("Content-Type", "text/plain");\n    res.end("Hello, World!\\n");\n});\n\n// 3. Listen on Port\nconst port = 3000;\nserver.listen(port, () => {\n    console.log(`Server running at http://localhost:${port}/`);\n});',
        },
      },
    ],
  },
];
