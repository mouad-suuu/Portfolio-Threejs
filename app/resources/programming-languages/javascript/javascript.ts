import { DocumentationSection } from "@/components/component/Documentation";

export const data: DocumentationSection[] = [
  {
    mainTitle: "JavaScript Documentation",
    section: "JavaScript Overview",
    items: [
      {
        type: "title",
        text: "JavaScript Overview",
      },
      {
        type: "paragraph",
        text: "JavaScript is a versatile, high-level programming language that is primarily used for web development. It allows developers to create dynamic and interactive web pages, and it is supported by all modern web browsers without the need for plugins. JavaScript is known for its ease of use, flexibility, and extensive ecosystem, making it a cornerstone of modern web technologies.",
      },
      {
        type: "title",
        text: "Key Features",
      },
      {
        type: "semi-title",
        text: "Interpreted Language",
      },
      {
        type: "paragraph",
        text: "JavaScript code is executed directly by the browser's JavaScript engine, without prior compilation.",
      },
      {
        type: "semi-title",
        text: "Dynamic Typing",
      },
      {
        type: "paragraph",
        text: "Variables in JavaScript are not bound to a specific data type, and types can change at runtime.",
      },
      {
        type: "semi-title",
        text: "Prototype-Based Inheritance",
      },
      {
        type: "paragraph",
        text: "JavaScript uses prototypes for inheritance, allowing objects to inherit properties and methods from other objects.",
      },
      {
        type: "semi-title",
        text: "First-Class Functions",
      },
      {
        type: "paragraph",
        text: "Functions in JavaScript are treated as first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.",
      },
      {
        type: "semi-title",
        text: "Event-Driven",
      },
      {
        type: "paragraph",
        text: "JavaScript is heavily used for handling events, such as user interactions, network responses, and timers.",
      },
      {
        type: "title",
        text: "History and Evolution",
      },
      {
        type: "paragraph",
        text: "JavaScript was created by Brendan Eich in 1995 while he was working at Netscape Communications Corporation. The language was initially developed in just 10 days and was originally called Mocha. It was later renamed to LiveScript and finally to JavaScript to align with the popularity of Java at the time, despite the two languages having very different purposes and designs.",
      },
      {
        type: "title",
        text: "Timeline of Evolution",
      },
      {
        type: "semi-title",
        text: "1995",
      },
      {
        type: "paragraph",
        text: "Brendan Eich creates the first version of JavaScript, originally named Mocha, for Netscape Navigator.",
      },
      {
        type: "semi-title",
        text: "1996",
      },
      {
        type: "paragraph",
        text: "JavaScript is officially renamed and released as JavaScript 1.0 in Netscape Navigator 2.0.",
      },
      {
        type: "semi-title",
        text: "1997",
      },
      {
        type: "paragraph",
        text: "The first edition of the ECMAScript standard (ECMA-262) is published, standardizing the language.",
      },
      {
        type: "semi-title",
        text: "1999",
      },
      {
        type: "paragraph",
        text: "ECMAScript 3 is released, introducing regular expressions, better string handling, and other enhancements.",
      },
      {
        type: "semi-title",
        text: "2005",
      },
      {
        type: "paragraph",
        text: "Ajax (Asynchronous JavaScript and XML) becomes popular, allowing for asynchronous web applications and leading to the rise of single-page applications (SPAs).",
      },
      {
        type: "semi-title",
        text: "2009",
      },
      {
        type: "paragraph",
        text: "ECMAScript 5 (ES5) is released, adding features like strict mode, JSON support, and enhanced object properties.",
      },
      {
        type: "semi-title",
        text: "2015",
      },
      {
        type: "paragraph",
        text: "ECMAScript 6 (ES6), also known as ECMAScript 2015, is released. This major update introduces significant features such as arrow functions, classes, template literals, default parameters, destructuring, and modules.",
      },
      {
        type: "semi-title",
        text: "2016-Present",
      },
      {
        type: "paragraph",
        text: "Annual releases of ECMAScript continue, with features like async/await (ES8), BigInt, optional chaining, and more, further enhancing the language and keeping it modern.",
      },
      {
        type: "title",
        text: "Compilation Process",
      },
      {
        type: "paragraph",
        text: "JavaScript is typically executed in two environments: the browser and Node.js. While JavaScript is often referred to as an interpreted language, it undergoes compilation before execution in both environments.",
      },
      {
        type: "semi-title",
        text: "Browser Compilation",
      },
      {
        type: "paragraph",
        text: "In the browser, JavaScript source code is first parsed by the browser's JavaScript engine, such as V8 in Google Chrome or SpiderMonkey in Firefox. The engine then compiles the parsed code into bytecode or machine code, optimizing it for execution. This process is known as Just-In-Time (JIT) compilation.",
      },
      {
        type: "semi-title",
        text: "Node.js Compilation",
      },
      {
        type: "paragraph",
        text: "In Node.js, JavaScript files are also compiled before execution. Node.js uses the V8 JavaScript engine, similar to Chrome. However, Node.js also provides support for native modules written in C/C++, which may be compiled separately.",
      },
      {
        type: "title",
        text: "Similar Languages",
      },
      {
        type: "paragraph",
        text: "JavaScript shares similarities with other languages that undergo compilation processes, such as:",
      },
      {
        type: "semi-title",
        text: "TypeScript",
      },
      {
        type: "paragraph",
        text: "A superset of JavaScript that adds optional static typing and other features. TypeScript code is transpiled into JavaScript before execution.",
      },
      {
        type: "semi-title",
        text: "CoffeeScript",
      },
      {
        type: "paragraph",
        text: "A programming language that compiles into JavaScript. It offers syntactic sugar and aims to enhance JavaScript's readability and conciseness.",
      },
      {
        type: "semi-title",
        text: "Dart",
      },
      {
        type: "paragraph",
        text: "A language developed by Google that can be compiled to JavaScript. Dart offers features like optional typing and a more structured approach to programming.",
      },
      {
        type: "title",
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "JavaScript, despite its interpreted nature, undergoes compilation processes before execution in both browser and Node.js environments. Understanding these processes and the language's evolution is essential for developers to leverage its full potential in web development and beyond.",
      },
      {
        type: "title",
        text: "Additional Key Points",
      },
      {
        type: "subtitle",
        text: "Cross-Platform Compatibility",
      },
      {
        type: "paragraph",
        text: "JavaScript is platform-independent, meaning it can run on various operating systems and devices, including desktops, mobile phones, and servers.",
      },
      {
        type: "subtitle",
        text: "Standardization",
      },
      {
        type: "paragraph",
        text: "The ECMAScript standardization process ensures consistency and compatibility across different implementations of JavaScript, promoting interoperability among different environments and browsers.",
      },
      {
        type: "subtitle",
        text: "Client-Side and Server-Side Execution",
      },
      {
        type: "paragraph",
        text: "JavaScript is commonly used for client-side scripting in web browsers to enhance user interfaces and interactivity. With the advent of Node.js, it can also be executed on the server-side, enabling full-stack development with a single language.",
      },
      {
        type: "subtitle",
        text: "Rich Ecosystem",
      },
      {
        type: "paragraph",
        text: "JavaScript has a vast ecosystem of libraries, frameworks, and tools that streamline development tasks and enable developers to build complex applications efficiently. This ecosystem includes popular frameworks like React, Angular, and Vue.js, as well as libraries for tasks such as data visualization, animation, and testing.",
      },
      {
        type: "subtitle",
        text: "Community Support",
      },
      {
        type: "paragraph",
        text: "JavaScript has a large and active community of developers who contribute to open-source projects, share knowledge through forums and social media, and organize conferences and meetups. This community-driven approach fosters innovation and collaboration within the JavaScript ecosystem.",
      },
      {
        type: "title",
        text: "Important Information",
      },
      {
        type: "subtitle",
        text: "Security Considerations",
      },
      {
        type: "paragraph",
        text: "JavaScript execution in the browser poses security risks such as cross-site scripting (XSS) attacks. Developers should follow best practices for secure coding, input validation, and data sanitization to mitigate these risks.",
      },
      {
        type: "subtitle",
        text: "Performance Optimization",
      },
      {
        type: "paragraph",
        text: "As JavaScript applications become more complex, performance optimization becomes crucial. Techniques such as code minification, lazy loading, and caching can improve load times and user experience.",
      },
      {
        type: "subtitle",
        text: "Browser Compatibility",
      },
      {
        type: "paragraph",
        text: "While modern browsers support the latest features of JavaScript, developers must consider backward compatibility with older browsers. Polyfills and transpilers like Babel can help ensure compatibility with a wider range of browser versions.",
      },
      {
        type: "subtitle",
        text: "Asynchronous Programming",
      },
      {
        type: "paragraph",
        text: "JavaScript's event-driven nature and support for asynchronous operations enable non-blocking I/O and concurrent execution, improving responsiveness and scalability in web applications.",
      },
      {
        type: "subtitle",
        text: "Continuous Learning",
      },
      {
        type: "paragraph",
        text: "JavaScript is a rapidly evolving language, with new features and best practices emerging regularly. Continuous learning and staying updated with the latest developments are essential for JavaScript developers to remain competitive in the field.",
      },
    ],
  },
  {
    mainTitle: "JavaScript Documentation",
    section: "JavaScript Basics",
    items: [
      {
        type: "section",
        section: {
          mainTitle: "Data Types",
          section: "Data Types",
          items: [
            {
              type: "title",
              text: "Data Types in JavaScript",
            },
            {
              type: "paragraph",
              text: "JavaScript is a dynamically typed language, meaning variables can hold values of different types without explicit type declarations. Understanding JavaScript's data types is essential for effective programming. JavaScript has several primitive data types and a single composite data type:",
            },
            {
              type: "title",
              text: "1. Primitive Data Types:",
            },
            {
              type: "paragraph",
              text: "Number: Represents numeric values, including integers and floating-point numbers. Example: let num = 10;",
            },
            {
              type: "paragraph",
              text: "String: Represents textual data enclosed within single ('') or double (\"\") quotes. Example: let str = 'Hello, World!';",
            },
            {
              type: "paragraph",
              text: "Boolean: Represents a logical value indicating true or false. Example: let isTrue = true;",
            },
            {
              type: "paragraph",
              text: "Undefined: Represents a variable that has been declared but has not been assigned a value. Example: let undefinedVar;",
            },
            {
              type: "paragraph",
              text: "Null: Represents the intentional absence of any value. Example: let nullVar = null;",
            },
            {
              type: "paragraph",
              text: "Symbol (ES6): Represents a unique identifier. Example: let sym = Symbol('foo');",
            },
            {
              type: "paragraph",
              text: "BigInt (ES11): Represents integers of arbitrary precision. Example: let bigInt = 9007199254740991n;",
            },
            {
              type: "title",
              text: "2. Composite Data Type:",
            },
            {
              type: "paragraph",
              text: "Object: Represents a collection of key-value pairs, where each value can be of any data type, including other objects. Example:",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `let person = {
    name: 'John',
    age: 30,
    isStudent: false,
    address: {
        city: 'New York',
        country: 'USA'
    }
};`,
              },
            },
            {
              type: "title",
              text: "Differences Between Data Types",
            },
            {
              type: "paragraph",
              text: "1. Mutability:",
            },
            {
              type: "paragraph",
              text: "Primitive Data Types: Immutable; their values cannot be changed once created. Operations on primitive types return new values.",
            },
            {
              type: "paragraph",
              text: "Object: Mutable; their properties can be modified, added, or removed after creation.",
            },
            {
              type: "paragraph",
              text: "2. Type Checking:",
            },
            {
              type: "paragraph",
              text: "Primitive Data Types: Compared by their actual values. Example: 10 === 10 returns true.",
            },
            {
              type: "paragraph",
              text: "Object: Compared by reference. Example: { foo: 'bar' } === { foo: 'bar' } returns false because they are different objects in memory.",
            },
            {
              type: "paragraph",
              text: "3. Storage:",
            },
            {
              type: "paragraph",
              text: "Primitive Data Types: Stored directly in memory.",
            },
            {
              type: "paragraph",
              text: "Object: Stored by reference in memory; variables hold references to objects rather than the objects themselves.",
            },
            {
              type: "paragraph",
              text: "4. Usage:",
            },
            {
              type: "paragraph",
              text: "Primitive Data Types: Used for simple data storage and manipulation.",
            },
            {
              type: "paragraph",
              text: "Object: Used for more complex data structures and functionalities, such as representing real-world entities and implementing behavior.",
            },
            {
              type: "paragraph",
              text: "5. Copying:",
            },
            {
              type: "paragraph",
              text: "Primitive Data Types: Copied by value. Changing the value of one variable does not affect the value of another.",
            },
            {
              type: "paragraph",
              text: "Object: Copied by reference. Assigning an object to another variable creates a reference to the same object in memory.",
            },
            {
              type: "paragraph",
              text: "Understanding the differences between JavaScript data types is crucial for writing efficient and bug-free code. It enables developers to choose the appropriate data structures and manipulation techniques based on the requirements of their applications.",
            },
          ],
        },
      },
      {
        type: "section",
        section: {
          mainTitle: "Operators and Math",
          section: "Operators and Math",
          items: [
            {
              type: "title",
              text: "Operators and Math Logic in JavaScript",
            },
            {
              type: "subtitle",
              text: "Arithmetic Operators",
            },
            {
              type: "paragraph",
              text: "Arithmetic operators are used to perform arithmetic operations on numerical values.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "let sum = 10 + 5; // Result: 15",
              },
            },
            {
              type: "paragraph",
              text: "Subtraction (-): Subtracts the second operand from the first.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "let difference = 10 - 5; // Result: 5",
              },
            },
            {
              type: "paragraph",
              text: "Multiplication (*): Multiplies two operands.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "let product = 10 * 5; // Result: 50",
              },
            },
            {
              type: "paragraph",
              text: "Division (/): Divides the first operand by the second.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "let quotient = 10 / 5; // Result: 2",
              },
            },
            {
              type: "paragraph",
              text: "Modulus (%): Returns the remainder of the division of the first operand by the second.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "let remainder = 10 % 3; // Result: 1 (remainder of 10 divided by 3)",
              },
            },
            {
              type: "paragraph",
              text: "Increment (++): Increases the value of a variable by 1.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "let count = 0;\ncount++; // Increment count by 1\nconsole.log(count); // Result: 1",
              },
            },
            {
              type: "paragraph",
              text: "Decrement (--): Decreases the value of a variable by 1.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "let count = 10;\ncount--; // Decrement count by 1\nconsole.log(count); // Result: 9",
              },
            },
            {
              type: "subtitle",
              text: "Comparison Operators",
            },
            {
              type: "paragraph",
              text: "Comparison operators are used to compare two values and return a Boolean result.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "console.log(10 == 10); // Result: true",
              },
            },
            {
              type: "paragraph",
              text: "Not equal to (!=): Returns true if the operands are not equal.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "console.log(10 != 5); // Result: true",
              },
            },
            {
              type: "paragraph",
              text: "Strict equal to (===): Returns true if the operands are equal and of the same data type.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "console.log(10 === '10'); // Result: false",
              },
            },
            {
              type: "paragraph",
              text: "Strict not equal to (!==): Returns true if the operands are not equal or not of the same data type.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "console.log(10 !== '10'); // Result: true",
              },
            },
            {
              type: "paragraph",
              text: "Greater than (>): Returns true if the first operand is greater than the second.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "console.log(10 > 5); // Result: true",
              },
            },
            {
              type: "paragraph",
              text: "Less than (<): Returns true if the first operand is less than the second.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "console.log(5 < 10); // Result: true",
              },
            },
            {
              type: "paragraph",
              text: "Greater than or equal to (>=): Returns true if the first operand is greater than or equal to the second.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "console.log(10 >= 10); // Result: true",
              },
            },
            {
              type: "paragraph",
              text: "Less than or equal to (<=): Returns true if the first operand is less than or equal to the second.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "console.log(5 <= 10); // Result: true",
              },
            },
            {
              type: "subtitle",
              text: "Logical Operators",
            },
            {
              type: "paragraph",
              text: "Logical operators are used to perform logical operations on Boolean values.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "console.log(true && true); // Result: true",
              },
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "console.log(true || false); // Result: true",
              },
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "console.log(!true); // Result: false",
              },
            },
            {
              type: "subtitle",
              text: "Bitwise Operators",
            },
            {
              type: "paragraph",
              text: "Bitwise operators perform bitwise operations on integer values.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "console.log(5 & 3); // Result: 1 (binary: 101 & 011 = 001)",
              },
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "console.log(5 | 3); // Result: 7 (binary: 101 | 011 = 111)",
              },
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "console.log(5 ^ 3); // Result: 6 (binary: 101 ^ 011 = 110)",
              },
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "console.log(~5); // Result: -6 (binary: ~101 = 11111010)",
              },
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "console.log(5 << 1); // Result: 10 (binary: 101 << 1 = 1010)",
              },
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "console.log(5 >> 1); // Result: 2 (binary: 101 >> 1 = 10)",
              },
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "console.log(-5 >>> 1); // Result: 2147483645 (binary: 11111111111111111111111111111011 >>> 1 = 01111111111111111111111111111101)",
              },
            },
            {
              type: "subtitle",
              text: "Assignment Operators",
            },
            {
              type: "paragraph",
              text: "Assignment operators are used to assign values to variables.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "let x = 10;",
              },
            },
            {
              type: "subtitle",
              text: "Addition Assignment (+=)",
            },
            {
              type: "paragraph",
              text: "Adds the value of the right operand to the left operand and assigns the result to the left operand.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "let x = 10;\nx += 5; // Equivalent to: x = x + 5;",
              },
            },
            {
              type: "subtitle",
              text: "Subtraction Assignment (-=)",
            },
            {
              type: "paragraph",
              text: "Subtracts the value of the right operand from the left operand and assigns the result to the left operand.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "let x = 10;\nx -= 5; // Equivalent to: x = x - 5;",
              },
            },
            {
              type: "subtitle",
              text: "Multiplication Assignment (*=)",
            },
            {
              type: "paragraph",
              text: "Multiplies the value of the left operand by the right operand and assigns the result to the left operand.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "let x = 10;\nx *= 5; // Equivalent to: x = x * 5;",
              },
            },
            {
              type: "subtitle",
              text: "Division Assignment (/=)",
            },
            {
              type: "paragraph",
              text: "Divides the value of the left operand by the right operand and assigns the result to the left operand.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "let x = 10;\nx /= 5; // Equivalent to: x = x / 5;",
              },
            },
            {
              type: "subtitle",
              text: "Modulus Assignment (%=)",
            },
            {
              type: "paragraph",
              text: "Calculates the remainder of dividing the value of the left operand by the right operand and assigns the result to the left operand.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "let x = 10;\nx %= 3; // Equivalent to: x = x % 3;",
              },
            },
            {
              type: "subtitle",
              text: "Ternary Operator",
            },
            {
              type: "paragraph",
              text: "The ternary operator (conditional operator) is a shorthand for the if-else statement.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "let result = condition ? expression1 : expression2;",
              },
            },
            {
              type: "paragraph",
              text: "If the condition is true, expression1 is evaluated; otherwise, expression2 is evaluated.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "let age = 20;\nlet message = (age >= 18) ? 'You are an adult' : 'You are a minor';\nconsole.log(message); // Result: 'You are an adult'",
              },
            },
            {
              type: "subtitle",
              text: "Math Object",
            },
            {
              type: "paragraph",
              text: "The Math object provides mathematical constants and functions for performing mathematical operations in JavaScript.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "console.log(Math.PI); // Result: 3.141592653589793",
              },
            },
            {
              type: "paragraph",
              text: "Returns the value of a number rounded to the nearest integer.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "console.log(Math.round(3.7)); // Result: 4",
              },
            },
            {
              type: "paragraph",
              text: "Returns the largest integer less than or equal to a given number.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "console.log(Math.floor(3.7)); // Result: 3",
              },
            },
            {
              type: "paragraph",
              text: "Returns the smallest integer greater than or equal to a given number.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "console.log(Math.ceil(3.2)); // Result: 4",
              },
            },
            {
              type: "paragraph",
              text: "Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "console.log(Math.random()); // Result: (random number between 0 and 1)",
              },
            },
            {
              type: "paragraph",
              text: "Returns the absolute value of a number.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "console.log(Math.abs(-5)); // Result: 5",
              },
            },
            {
              type: "paragraph",
              text: "Returns the base to the exponent power.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "console.log(Math.pow(2, 3)); // Result: 8 (2 raised to the power of 3)",
              },
            },
            {
              type: "paragraph",
              text: "Returns the square root of a number.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "console.log(Math.sqrt(9)); // Result: 3",
              },
            },
            {
              type: "paragraph",
              text: "Returns the smallest of zero or more numbers.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "console.log(Math.min(5, 10, 3)); // Result: 3",
              },
            },
            {
              type: "paragraph",
              text: "Returns the largest of zero or more numbers.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: "console.log(Math.max(5, 10, 3)); // Result: 10",
              },
            },
            {
              type: "paragraph",
              text: "Using these operators and the Math object, you can perform various arithmetic, logical, and mathematical operations in JavaScript.",
            },
          ],
        },
      },
      {
        type: "section",
        section: {
          mainTitle: "Conditional Statements and Control Flow in JavaScript",
          section: "Conditional Statements and Control Flow in JavaScript",
          items: [
            {
              type: "subtitle",
              text: "if...else Statement",
            },
            {
              type: "paragraph",
              text: "The if...else statement is used to execute a block of code if a specified condition is true, and another block of code if the condition is false.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `let num = 10;

if (num > 0) {
    console.log('Number is positive');
} else {
    console.log('Number is non-positive');
}`,
              },
            },
            {
              type: "subtitle",
              text: "switch Statement",
            },
            {
              type: "paragraph",
              text: "The switch statement is used to perform different actions based on different conditions. It evaluates an expression, matches the expression's value to a case clause, and executes the statements associated with that case.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    case 7:
        dayName = 'Sunday';
        break;
    default:
        dayName = 'Invalid day';
}

console.log(\`Today is \${dayName}\`);
`,
              },
            },
            {
              type: "subtitle",
              text: "Control Flow",
            },
            {
              type: "paragraph",
              text: "Control flow refers to the order in which statements are executed in a program. Conditional statements such as if...else and switch alter the control flow by allowing different paths of execution based on specified conditions.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `let hour = 14;

if (hour < 12) {
    console.log('Good morning!');
} else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon!');
} else {
    console.log('Good evening!');
}
`,
              },
            },
            {
              type: "paragraph",
              text: "In the example above, the control flow depends on the value of the hour variable. Depending on its value, different messages will be logged to the console.",
            },
            {
              type: "subtitle",
              text: "Conclusion",
            },
            {
              type: "paragraph",
              text: "Conditional statements like if...else and switch are essential tools for controlling the flow of execution in JavaScript programs. They allow developers to make decisions based on specified conditions, enabling more dynamic and responsive code execution. Understanding and effectively using these statements is fundamental for building robust and efficient JavaScript applications.",
            },
          ],
        },
      },
      {
        type: "section",
        section: {
          mainTitle: "Functions in JavaScript",
          section: "Functions in JavaScript",
          items: [
            {
              type: "subtitle",
              text: "Function Declaration",
            },
            {
              type: "paragraph",
              text: "Function declarations define named functions using the function keyword. These functions can be called before they are declared because of JavaScript's function hoisting.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `// Function declaration
function greet(name) {
    console.log(\`Hello, $\{name\}!\`);
}

// Function call
greet('John'); // Output: Hello, John!
`,
              },
            },
            {
              type: "subtitle",
              text: "Function Expression",
            },
            {
              type: "paragraph",
              text: "Function expressions define functions as part of an expression. They can be anonymous or named.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `// Anonymous function expression
const greet = function(name) {
    console.log(\`Hello, $\{name\}!\`);
};

// Named function expression
const greet = function greet(name) {
    console.log(\`Hello, $\{name\}!\`);
};
`,
              },
            },
            {
              type: "subtitle",
              text: "Arrow Functions",
            },
            {
              type: "paragraph",
              text: "Arrow functions provide a concise syntax for writing function expressions. They have a shorter syntax compared to traditional function expressions and do not bind their own this value.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `// Arrow function
const greet = (name) => {
    console.log(\`Hello, $\{name\}!\`);
};
`,
              },
            },
            {
              type: "subtitle",
              text: "Higher-Order Functions",
            },
            {
              type: "paragraph",
              text: "Higher-order functions are functions that accept other functions as arguments or return functions as output. They enable functional programming paradigms such as composition, abstraction, and encapsulation.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `// Higher-order function
function operate(operation, a, b) {
    return operation(a, b);
}

// Function to add two numbers
const add = (a, b) => a + b;

// Function to subtract two numbers
const subtract = (a, b) => a - b;

console.log(operate(add, 5, 3)); // Output: 8
console.log(operate(subtract, 5, 3)); // Output: 2
`,
              },
            },
            {
              type: "subtitle",
              text: "Conclusion",
            },
            {
              type: "paragraph",
              text: "Understanding function declaration, function expression, arrow functions, and higher-order functions is essential for writing modular and expressive JavaScript code. These concepts empower you to create reusable and composable units of code, leading to more maintainable and scalable applications. Whether you're working with simple functions or embracing functional programming paradigms, mastering these concepts will greatly enhance your proficiency as a JavaScript developer.",
            },
          ],
        },
      },
      {
        type: "section",
        section: {
          mainTitle: "Objects and Arrays in JavaScript",
          section: "Objects and Arrays in JavaScript",
          items: [
            {
              type: "subtitle",
              text: "Object Literals",
            },
            {
              type: "paragraph",
              text: "Object literals are used to create objects in JavaScript. They consist of key-value pairs enclosed in curly braces {}.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `// Object literal
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};`,
              },
            },
            {
              type: "subtitle",
              text: "Array Literals",
            },
            {
              type: "paragraph",
              text: "Array literals are used to create arrays in JavaScript. They consist of comma-separated values enclosed in square brackets [].",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `// Array literal
const fruits = ['apple', 'banana', 'orange'];`,
              },
            },
            {
              type: "subtitle",
              text: "Accessing Object Properties",
            },
            {
              type: "paragraph",
              text: "Object properties can be accessed using dot notation or bracket notation.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `// Dot notation
console.log(person.name); // Output: John

// Bracket notation
console.log(person['age']); // Output: 30`,
              },
            },
            {
              type: "subtitle",
              text: "Accessing Array Elements",
            },
            {
              type: "paragraph",
              text: "Array elements can be accessed using index notation, starting from zero.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: banana`,
              },
            },
            {
              type: "subtitle",
              text: "Modifying Object Properties",
            },
            {
              type: "paragraph",
              text: "Object properties can be modified by assigning new values to them.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `person.age = 35;
console.log(person.age); // Output: 35`,
              },
            },
            {
              type: "subtitle",
              text: "Modifying Array Elements",
            },
            {
              type: "paragraph",
              text: "Array elements can be modified by assigning new values to them using index notation.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `fruits[1] = 'grape';
console.log(fruits); // Output: ['apple', 'grape', 'orange']`,
              },
            },
            {
              type: "subtitle",
              text: "Conclusion",
            },
            {
              type: "paragraph",
              text: "Objects and arrays are fundamental data structures in JavaScript that enable you to organize and manipulate data effectively. Object literals allow you to create objects with key-value pairs, while array literals enable you to create lists of values. Understanding how to create, access, and modify objects and arrays is essential for building dynamic and data-driven JavaScript applications. Whether you're working with complex data structures or simple collections of values, mastering these concepts will enhance your proficiency as a JavaScript developer.",
            },
          ],
        },
      },
      {
        type: "section",
        section: {
          mainTitle: "Destructuring, Spread Operator",
          section: "Destructuring, Spread Operator",
          items: [
            {
              type: "subtitle",
              text: "Destructuring",
            },
            {
              type: "paragraph",
              text: "Destructuring allows you to extract values from arrays or properties from objects into distinct variables.",
            },
            {
              type: "subtitle",
              text: "Array Destructuring:",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]`,
              },
            },
            {
              type: "subtitle",
              text: "Object Destructuring:",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

const { name, age } = person;

console.log(name); // Output: John
console.log(age); // Output: 30`,
              },
            },
            {
              type: "subtitle",
              text: "Spread Operator",
            },
            {
              type: "paragraph",
              text: "The spread operator allows you to expand an iterable (like an array) into individual elements or to merge objects.",
            },
            {
              type: "subtitle",
              text: "Expanding Arrays:",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];

console.log(combined); // Output: [1, 2, 3, 4, 5, 6]`,
              },
            },
            {
              type: "subtitle",
              text: "Merging Objects:",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };

const merged = { ...obj1, ...obj2 };

console.log(merged); // Output: { x: 1, y: 2, z: 3 }`,
              },
            },
            {
              type: "subtitle",
              text: "Conclusion",
            },
            {
              type: "paragraph",
              text: "Destructuring, spread operators, and error handling are powerful features in JavaScript that enhance code readability, flexibility, and maintainability. Destructuring simplifies the process of extracting values from arrays and objects, while the spread operator allows for easy expansion and merging of iterables. Improving the robustness of your code. Understanding and utilizing these features effectively will elevate your JavaScript programming skills and enable you to write more concise and efficient code.",
            },
          ],
        },
      },
      {
        type: "section",
        section: {
          mainTitle: "Error Handling in JavaScript",
          section: "Error Handling in JavaScript",
          items: [
            {
              type: "paragraph",
              text: "The try...catch statement is used to handle errors in JavaScript by trying a block of code for errors and catching any exceptions that are thrown during execution.",
            },
            {
              type: "subtitle",
              text: "try...catch Statement",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `try {
    // Code that might throw an error
    throw new Error('Something went wrong!');
} catch (error) {
    // Handle the error
    console.error(error.message);
}`,
              },
            },
            {
              type: "paragraph",
              text: "The throw statement is used to manually create and throw custom errors in JavaScript. It is typically used within try blocks to signal that an error has occurred.",
            },
            {
              type: "subtitle",
              text: "throw Statement",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `try {
    // Code that might throw an error
    throw new Error('Custom error message');
} catch (error) {
    // Handle the error
    console.error(error.message);
}`,
              },
            },
            {
              type: "title",
              text: "How to Proceed",
            },

            {
              type: "paragraph",
              text: "When encountering errors in your JavaScript code, follow these steps to handle them effectively:",
            },

            {
              type: "subtitle",
              text: "1. Identify Potential Errors:",
            },
            {
              type: "paragraph",
              text: "Identify areas in your code where errors may occur, such as accessing undefined variables, calling non-existent functions, or parsing invalid data.",
            },

            {
              type: "subtitle",
              text: "2. Wrap Error-Prone Code in try...catch Blocks: ",
            },
            {
              type: "paragraph",
              text: "Surround error-prone code with try...catch blocks to attempt execution and catch any exceptions that occur.",
            },
            {
              type: "subtitle",
              text: "3. Handle Errors Appropriately: ",
            },
            {
              type: "paragraph",
              text: "Within the catch block, handle errors gracefully. You can log error messages, display user-friendly error messages, or take alternative actions based on the type of error.",
            },
            {
              type: "subtitle",
              text: "4. Throw Custom Errors (if necessary): ",
            },
            {
              type: "paragraph",
              text: "Use the throw statement to throw custom errors when specific conditions are met or when exceptional situations arise that cannot be handled gracefully within the current context.",
            },
            {
              type: "subtitle",
              text: "5. Cleanup Operations (if necessary): ",
            },
            {
              type: "paragraph",
              text: "Utilize the finally block to execute cleanup operations that should always occur, regardless of whether an error occurred or not.",
            },
            {
              type: "paragraph",
              text: "By implementing proper error handling techniques, you can improve the reliability and robustness of your JavaScript applications, ensuring smooth execution even in the presence of unexpected errors or exceptions.",
            },
          ],
        },
      },
    ],
  },
  {
    mainTitle: "Intermediate JavaScript",
    section: "Intermediate JavaScript",
    items: [
      {
        type: "section",
        section: {
          mainTitle: "Closures  in JavaScript",
          section: "Closures in JavaScript",
          items: [
            {
              type: "VLink",
              text: "JavaScript video",
              url: "https://www.youtube.com/watch?v=vKJpN5FAeF4&ab_channel=Fireship",
            },
            {
              type: "paragraph",
              text: "A closure is the combination of a function and the lexical environment within which that function was declared. Closures allow functions to access variables from their outer scope even after the outer function has finished executing.",
            },

            {
              type: "subtitle",
              text: "Creating Closures",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `function outerFunction() {
    const outerVariable = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVariable); // Inner function has access to outerVariable
    }

    return innerFunction;
}

const innerFunc = outerFunction(); // innerFunc now holds the innerFunction

// Even though outerFunction has finished executing, innerFunc maintains access to outerVariable
innerFunc(); // Output: "I am from the outer function"
`,
              },
            },
            {
              type: "title",
              text: "Practical Use Cases of Closures",
            },
            {
              type: "subtitle",
              text: "1.Encapsulation:",
            },
            {
              type: "paragraph",
              text: "Closures allow for the encapsulation of private variables within a function's scope, providing data privacy and preventing external access.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `function createCounter() {
    let count = 0;

    return function() {
        return ++count;
    };
}

const counter = createCounter();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
`,
              },
            },
            {
              type: "subtitle",
              text: "2.Partial Application and Currying:",
            },
            {
              type: "paragraph",
              text: " Closures can be used to create partially applied functions or curried functions, where some of the arguments are preset.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `function multiply(a) {
    return function(b) {
        return a * b;
    };
}

const double = multiply(2); // Create a function that doubles its argument
console.log(double(5)); // Output: 10
console.log(double(10)); // Output: 20
`,
              },
            },
            {
              type: "subtitle",
              text: "3.Module Pattern:",
            },
            {
              type: "paragraph",
              text: "Closures enable the implementation of the module pattern, allowing for the creation of private and public methods and variables.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `const module = (function() {
    let privateVariable = 'I am private';

    function privateMethod() {
        console.log(privateVariable);
    }

    return {
        publicMethod: function() {
            privateMethod();
        }
    };
})();

module.publicMethod(); // Output: "I am private"
`,
              },
            },
            {
              type: "title",
              text: "Benefits of Closures",
            },
            {
              type: "subtitle",
              text: "Data Encapsulation and Privacy",
            },
            {
              type: "subtitle",
              text: "Function Currying and Partial Application",
            },
            {
              type: "subtitle",
              text: "Module Pattern for Better Code Organization",
            },
            {
              type: "title",
              text: "Conclusion",
            },
            {
              type: "paragraph",
              text: "Closures are a powerful and versatile feature of JavaScript, allowing functions to retain access to their lexical scope even after their outer function has finished executing. Understanding closures is essential for writing clean, efficient, and modular JavaScript code. By mastering closures, you'll be better equipped to create reusable components, implement design patterns, and build scalable applications.",
            },
          ],
        },
      },
      {
        type: "section",
        section: {
          mainTitle: "Prototypes and Prototypal Inheritance in JavaScript",
          section: "Prototypes and Prototypal Inheritance in JavaScript",
          items: [
            {
              type: "VLink",
              text: "Inheritance in JavaScript - Prototypal Inheritance tutorial",
              url: "https://www.youtube.com/watch?v=jnME98ckDbQ&ab_channel=ColorCode",
            },
            {
              type: "paragraph",
              text: "JavaScript uses prototypes to implement inheritance and the sharing of properties and methods between objects. Understanding prototypes and prototypal inheritance is crucial for effective object-oriented programming in JavaScript.",
            },
            {
              type: "title",
              text: "Prototypes",
            },
            {
              type: "paragraph",
              text: "Every JavaScript object has a prototype. A prototype is also an object, and it acts as a template from which other objects inherit properties and methods.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(\`Hello, my name is \${this.name}\`);
};

const john = new Person('John', 30);
john.greet(); // Output: "Hello, my name is John"`,
              },
            },
            {
              type: "paragraph",
              text: "In the example above:",
            },
            {
              type: "paragraph",
              text: "Person is a constructor function.",
            },
            {
              type: "paragraph",
              text: "Person.prototype is the prototype object where the greet method is defined.",
            },
            {
              type: "paragraph",
              text: "Instances of Person like john have access to the greet method via their prototype.",
            },
            {
              type: "title",
              text: "Prototypal Inheritance",
            },
            {
              type: "paragraph",
              text: "Prototypal inheritance is a mechanism by which an object can inherit properties and methods from another object.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `function Employee(name, age, jobTitle) {
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.describeJob = function() {
    console.log(\`I am a \${this.jobTitle}\`);
};

const jane = new Employee('Jane', 28, 'Software Developer');
jane.greet(); // Output: "Hello, my name is Jane"
jane.describeJob(); // Output: "I am a Software Developer"`,
              },
            },
            {
              type: "paragraph",
              text: "In the example above:",
            },
            {
              type: "paragraph",
              text: "Employee inherits from Person.",
            },
            {
              type: "paragraph",
              text: "Object.create(Person.prototype) creates a new object with Person.prototype as its prototype.",
            },
            {
              type: "paragraph",
              text: "Employee.prototype.constructor is set to Employee to ensure the correct constructor reference.",
            },
            {
              type: "title",
              text: "Understanding the Prototype Chain",
            },
            {
              type: "paragraph",
              text: "The prototype chain is the series of links between an object and its prototype. When a property or method is accessed on an object, JavaScript first looks for it on the object itself. If it’s not found, the search continues up the prototype chain until the property is found or the end of the chain is reached.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `console.log(jane.hasOwnProperty('name')); // Output: true
console.log(jane.hasOwnProperty('greet')); // Output: false
console.log(jane.__proto__.hasOwnProperty('greet')); // Output: true`,
              },
            },
            {
              type: "title",
              text: "ES6 Classes and Prototypes",
            },
            {
              type: "paragraph",
              text: "ES6 introduced a new syntax for creating classes, which simplifies the creation of constructor functions and inheritance.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(\`Hello, my name is \${this.name}\`);
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    describeJob() {
        console.log(\`I am a \${this.jobTitle}\`);
    }
}

const john = new Employee('John', 30, 'Software Developer');
john.greet(); // Output: "Hello, my name is John"
john.describeJob(); // Output: "I am a Software Developer"`,
              },
            },
            {
              type: "paragraph",
              text: "In the example above:",
            },
            {
              type: "paragraph",
              text: "class syntax is used to define Person and Employee.",
            },
            {
              type: "paragraph",
              text: "extends keyword is used to set up inheritance.",
            },
            {
              type: "paragraph",
              text: "super keyword is used to call the constructor of the parent class.",
            },
            {
              type: "title",
              text: "Conclusion",
            },
            {
              type: "paragraph",
              text: "Understanding prototypes and prototypal inheritance is essential for mastering JavaScript's object-oriented programming capabilities. By leveraging prototypes, you can create efficient, reusable, and maintainable code. The introduction of ES6 classes provides a more straightforward syntax for working with prototypes and inheritance, but it's important to understand the underlying mechanics to fully utilize JavaScript's prototypal nature.",
            },
          ],
        },
      },
      {
        type: "section",
        section: {
          mainTitle: "Asynchronous JavaScript Explained",
          section: "Asynchronous JavaScript",
          items: [
            {
              type: "VLink",
              text: "Async JavaScript & Callback Functions -- Tutorial for Beginners",
              url: "https://www.youtube.com/watch?v=QSqc6MMS6Fk&ab_channel=ColorCode",
            },
            {
              type: "paragraph",
              text: "Asynchronous JavaScript is integral to web development, facilitating tasks like data fetching, user input handling, and UI updates without blocking the main thread. JavaScript offers several tools for asynchronous programming, including callbacks, promises, and async/await, each with its own advantages and use cases. Let's delve into how these mechanisms work behind the scenes in the JavaScript runtime:",
            },
            {
              type: "title",
              text: "Callbacks",
            },
            {
              type: "paragraph",
              text: "Callbacks are functions passed as arguments to other functions, executed asynchronously upon task or event completion. When a function with a callback is invoked, it's added to the call stack. Once the associated task completes, the callback is queued in the event queue. The event loop continuously checks the call stack and event queue, moving callbacks from the latter to the former for execution when the call stack is empty.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `function fetchData(url, callback) {
    // Simulate fetching data from a server
    setTimeout(() => {
        const data = { name: 'John', age: 30 };
        callback(data);
    }, 1000);
}

function processData(data) {
    console.log('Data received:', data);
}

fetchData('https://example.com/api/data', processData);`,
              },
            },
            {
              type: "paragraph",
              text: "Behind the scenes:",
            },
            {
              type: "paragraph",
              text: "When fetchData is called, it's added to the call stack.",
            },
            {
              type: "paragraph",
              text: "Inside fetchData, the setTimeout function is encountered, which schedules the callback function after 1 second.",
            },
            {
              type: "paragraph",
              text: "fetchData completes its execution and is removed from the call stack.",
            },
            {
              type: "paragraph",
              text: "After 1 second, the callback function processData is pushed to the event queue.",
            },
            {
              type: "paragraph",
              text: "The event loop checks the call stack and finds it empty, so it moves processData from the event queue to the call stack for execution.",
            },
            {
              type: "title",
              text: "Promises",
            },
            {
              type: "paragraph",
              text: "Promises represent the eventual completion or failure of an asynchronous operation, offering a structured approach to asynchronous programming. When a promise is created, it enters a pending state. Upon completion of the asynchronous operation, the promise transitions to either a fulfilled (resolved) or rejected state. Then, corresponding then or catch handlers are queued in the microtask queue. The event loop picks up these handlers, executing them in the order they were queued.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `function fetchData(url) {
    return new Promise((resolve, reject) => {
        // Simulate fetching data from a server
        setTimeout(() => {
            const data = { name: 'John', age: 30 };
            resolve(data);
        }, 1000);
    });
}

fetchData('https://example.com/api/data')
    .then(data => {
        console.log('Data received:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });`,
              },
            },
            {
              type: "paragraph",
              text: "Behind the scenes:",
            },
            {
              type: "paragraph",
              text: "When fetchData is called, it returns a promise which enters the pending state.",
            },
            {
              type: "paragraph",
              text: "Inside the promise executor function, the setTimeout function is encountered, scheduling the resolution of the promise after 1 second.",
            },
            {
              type: "paragraph",
              text: "After 1 second, the promise resolves with the data { name: 'John', age: 30 }.",
            },
            {
              type: "paragraph",
              text: "The then handler is queued in the microtask queue.",
            },
            {
              type: "paragraph",
              text: "The event loop picks up the then handler and executes it, logging the received data.",
            },
            {
              type: "title",
              text: "Async/Await",
            },
            {
              type: "paragraph",
              text: "Async/await simplifies asynchronous code by allowing it to resemble synchronous code, built upon promises. Async functions return promises, with the await keyword suspending execution until promise settlement. Behind the scenes, when await is encountered, the JavaScript engine pauses the async function's execution, awaiting promise resolution. This synchronous-like behavior enhances code readability and maintainability.",
            },
            {
              type: "code",
              code: {
                language: "javascript",
                code: `async function fetchData(url) {
    return new Promise((resolve, reject) => {
        // Simulate fetching data from a server
        setTimeout(() => {
            const data = { name: 'John', age: 30 };
            resolve(data);
        }, 1000);
    });
}

async function getData() {
    try {
        const data = await fetchData('https://example.com/api/data');
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getData();`,
              },
            },
            {
              type: "paragraph",
              text: "Behind the scenes:",
            },
            {
              type: "paragraph",
              text: "When getData is called, it's added to the call stack.",
            },
            {
              type: "paragraph",
              text: "Inside getData, the await keyword suspends execution until the promise returned by fetchData is settled.",
            },
            {
              type: "paragraph",
              text: "fetchData returns a promise which resolves after 1 second.",
            },
            {
              type: "paragraph",
              text: "Once resolved, the data is assigned to const data.",
            },
            {
              type: "paragraph",
              text: "The code after await resumes execution, logging the received data.",
            },
            {
              type: "paragraph",
              text: "If an error occurs during promise resolution, the catch block handles it.",
            },
            {
              type: "title",
              text: "Conclusion",
            },
            {
              type: "paragraph",
              text: "In summary, callbacks, promises, and async/await facilitate asynchronous programming in JavaScript, each offering distinct advantages. Understanding their inner workings—callbacks' event-driven nature, promises' state transitions and microtask queue handling, and async/await's promise-based approach—empowers developers to write efficient, readable, and maintainable asynchronous JavaScript code.",
            },
          ],
        },
      },
    ],
  },
];
