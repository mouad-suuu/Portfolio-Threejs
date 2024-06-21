import { DocumentationSection } from "@/components/component/Documentation";

export const data: DocumentationSection[] = [
  {
    mainTitle: "Python Documentation",
    section: "Basics",
    items: [
      {
        type: "title",
        text: "Python Basics",
      },
      {
        type: "language",
        text: "Python",
      },
      {
        type: "paragraph",
        text: "This example demonstrates basic concepts in Python such as variables, functions, lists, dictionaries, loops, conditional statements, and asynchronous programming.",
      },
      {
        type: "code",
        code: {
          language: "python",
          code: '# Python code to demonstrate basic concepts\n\n# 1. Variables and Constants\nname = "John Doe"\nage = 30\n\n# 2. Functions\ndef greet(person):\n    return f"Hello, {person}!"\n\n# 3. Lists and Dictionaries\nfruits = ["Apple", "Banana", "Cherry"]\nperson = {\n    "name": "Alice",\n    "age": 25,\n    "profession": "Engineer"\n}\n\n# 4. Loops\nfor i, fruit in enumerate(fruits, 1):\n    print(f"Fruit {i}: {fruit}")\n\n# 5. Conditional Statements\nif age > 18:\n    print(f"{name} is an adult.")\nelse:\n    print(f"{name} is a minor.")\n\n# 6. Asynchronous Programming\nimport asyncio\n\nasync def fetch_data():\n    print("Fetching data...")\n    await asyncio.sleep(1)\n    print("Data fetched")\n\n# Execute functions\nprint(greet(name))\nasyncio.run(fetch_data())',
        },
      },
    ],
  },
];
