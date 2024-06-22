import { DocumentationSection } from "@/components/component/Documentation";

export const data: DocumentationSection[] = [
  {
    mainTitle: "JavaScript Documentation",
    section: "Basics",
    items: [
      {
        type: "title",
        text: "JavaScript Basics",
      },
      {
        type: "language",
        text: "JavaScript",
      },
      {
        type: "paragraph",
        text: "This example demonstrates basic concepts in JavaScript such as variables, functions, arrays, objects, loops, conditional statements, arrow functions, and asynchronous programming.",
      },
      {
        type: "code",
        code: {
          language: "javascript",
          code: '// JavaScript code to demonstrate basic concepts\n\n// 1. Variables and Constants\nlet name = "John Doe";\nconst age = 30;\n\n// 2. Functions\nfunction greet(person) {\n  return `Hello, ${person}!`;\n}\n\n// 3. Arrays and Objects\nconst fruits = ["Apple", "Banana", "Cherry"];\nconst person = {\n  name: "Alice",\n  age: 25,\n  profession: "Engineer",\n};\n\n// 4. Loops\nfor (let i = 0; i < fruits.length; i++) {\n  console.log(`Fruit ${i + 1}: ${fruits[i]}`);\n}\n\n// 5. Conditional Statements\nif (age > 18) {\n  console.log(`${name} is an adult.`);\n} else {\n  console.log(`${name} is a minor.`);\n}\n\n// 6. Arrow Functions\nconst add = (a, b) => a + b;\n\n// 7. Promises and Async/Await\nconst fetchData = async () => {\n  try {\n    let response = await fetch("https://jsonplaceholder.typicode.com/posts");\n    let data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error("Error fetching data:", error);\n  }\n};\n\n// Execute functions\nconsole.log(greet(name));\nconsole.log("Sum of 5 and 3 is:", add(5, 3));\nfetchData();',
        },
      },
    ],
  },
  // Additional sections can be added here
  {
    mainTitle: "JavaScript Documentation",
    section: "test",
    items: [],
  },
];
