"use client";
import React from "react";
import Header from "@/components/component/Header";

export default function Library() {
  const libraries = [
    {
      category: "React Design Patterns",
      items: [
        {
          title: "Custom Hooks",
          description: "Reusable logic patterns for React applications",
          code: `// Example custom hook for managing form state
const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const reset = () => setValues(initialState);

  return { values, handleChange, reset };
};`,
        },
        {
          title: "Context API Pattern",
          description: "Global state management without prop drilling",
          code: `// Theme context example
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};`,
        },
      ],
    },
    {
      category: "TypeScript Utilities",
      items: [
        {
          title: "Type Guards",
          description: "Runtime type checking patterns",
          code: `// Type guard example
interface User {
  id: number;
  name: string;
}

function isUser(obj: any): obj is User {
  return 'id' in obj && 'name' in obj;
}

function processUser(input: any) {
  if (isUser(input)) {
    console.log(input.name); // TypeScript knows input is User
  }
}`,
        },
      ],
    },
    {
      category: "Next.js Patterns",
      items: [
        {
          title: "API Route Handlers",
          description: "Common patterns for Next.js API routes",
          code: `// API route with error handling
export async function GET(req: Request) {
  try {
    const data = await fetchData();
    return Response.json({ data });
  } catch (error) {
    return Response.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}`,
        },
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className="p-8 md:p-12 lg:p-16 pt-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Code Library
          </h1>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            A collection of reusable code patterns, utilities, and best practices that I've gathered throughout my development journey.
            Feel free to use these patterns in your own projects!
          </p>

          <div className="space-y-12">
            {libraries.map((section) => (
              <section key={section.category} className="space-y-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  {section.category}
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {section.items.map((item) => (
                    <div
                      key={item.title}
                      className="bg-card rounded-lg p-6 shadow-lg space-y-4"
                    >
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        <code className="text-sm">{item.code}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
