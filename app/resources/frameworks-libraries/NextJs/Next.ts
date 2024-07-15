import { DocumentationSection } from "@/components/component/Documentation";
import { Section } from "lucide-react";

export const data: DocumentationSection[] = [
  {
    mainTitle: "The Next.js 14 Documentation",
    section: "introduction",
    items: [
      {
        type: "section",
        section: {
          mainTitle: "Overview of Next.js",
          section: "Overview of Next.js",
          items: [
            {
              type: "title",
              text: "Overview of Next.js",
            },
            {
              type: "paragraph",
              text: "Next.js is a popular React framework that enables you to build fast, scalable, and SEO-friendly web applications. It provides a robust set of features that simplify the development process and enhance the performance of your React applications.",
            },
            {
              type: "paragraph",
              text: "Key aspects of Next.js include:",
            },
            {
              type: "semi-title",
              text: "1. Server-Side Rendering (SSR)",
            },
            {
              type: "paragraph",
              text: "Next.js can render React components on the server, improving initial load times and SEO.",
            },
            {
              type: "semi-title",
              text: "2. Static Site Generation (SSG)",
            },
            {
              type: "paragraph",
              text: " It allows you to generate static HTML pages at build time, perfect for content-heavy websites.",
            },
            {
              type: "semi-title",
              text: "3. Client-Side Rendering",
            },
            {
              type: "paragraph",
              text: "For dynamic content, Next.js seamlessly transitions to client-side rendering after the initial load.",
            },
            {
              type: "semi-title",
              text: "4. File-based Routing",
            },
            {
              type: "paragraph",
              text: "Next.js uses a file-system based router, making it intuitive to create routes in your application.",
            },
            {
              type: "semi-title",
              text: "5. API Routes",
            },
            {
              type: "paragraph",
              text: "It allows you to build API endpoints as part of your Next.js application, enabling full-stack capabilities.",
            },
            {
              type: "semi-title",
              text: "6. Built-in CSS Support",
            },
            {
              type: "paragraph",
              text: "Next.js supports CSS Modules, Sass, and other styling solutions out of the box.",
            },
            {
              type: "semi-title",
              text: "7. Code Splitting and Bundling",
            },
            {
              type: "paragraph",
              text: "Automatic code splitting ensures that only necessary JavaScript is loaded for each page.",
            },

            {
              type: "title",
              text: "Why Choose Next.js?",
            },
            {
              type: "paragraph",
              text: "Next.js addresses many common challenges in web development:",
            },
            {
              type: "semi-title",
              text: "Performance:",
            },
            {
              type: "paragraph",
              text: "With features like automatic code splitting and server-side rendering, Next.js helps create fast-loading web pages.",
            },
            {
              type: "semi-title",
              text: "Developer Experience:",
            },
            {
              type: "paragraph",
              text: "Its intuitive API and sensible defaults make it easy to get started and be productive quickly.",
            },
            {
              type: "semi-title",
              text: "Scalability:",
            },
            {
              type: "paragraph",
              text: "Next.js is designed to scale, from small projects to large, complex applications.",
            },
            {
              type: "semi-title",
              text: "SEO:",
            },
            {
              type: "paragraph",
              text: "Server-side rendering and automatic static optimization improve search engine visibility.",
            },
            {
              type: "semi-title",
              text: "Flexibility: ",
            },
            {
              type: "paragraph",
              text: "It supports various rendering methods, allowing developers to choose the best approach for each use case.",
            },
            {
              type: "subtitle",
              text: "Next.js vs Traditional React Applications",
            },
            {
              type: "paragraph",
              text: "While you can build powerful applications with React alone, Next.js offers several advantages:",
            },
            {
              type: "subtitle",
              text: "2. Easier Server-Side Rendering:",
            },
            {
              type: "paragraph",
              text: "SSR is complex to set up in vanilla React but comes built-in with Next.js.",
            },
            {
              type: "subtitle",
              text: "3. Improved Performance:",
            },
            {
              type: "paragraph",
              text: "Features like automatic code splitting are handled out of the box.",
            },
            {
              type: "subtitle",
              text: "4. Static Site Generation: ",
            },
            {
              type: "paragraph",
              text: "Next.js makes it easy to generate static sites, which is not a native feature of React.",
            },
            {
              type: "subtitle",
              text: "5. API Routes: ",
            },
            {
              type: "paragraph",
              text: "Next.js allows you to create API endpoints within your React application, promoting a more integrated development experience.",
            },
            {
              type: "paragraph",
              text: "Next.js simplifies many aspects of React development, making it an excellent choice for both newcomers to React and experienced developers looking to streamline their workflow.",
            },
          ],
        },
      },
      {
        type: "section",
        section: {
          mainTitle: "Key features and improvements in version 14",
          section: "Key features and improvements in version 14",
          items: [],
        },
      },
      {
        type: "section",
        section: {
          mainTitle: "Comparison with previous versions",
          section: "Comparison with previous versions",
          items: [],
        },
      },
      {
        type: "section",
        section: {
          mainTitle: "Project Structure",
          section: "Project Structure",
          items: [
            {
              type: "section",
              section: {
                mainTitle: "App directory structure",
                section: "App directory structure",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "File-based routing system",
                section: "File-based routing system",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle:
                  "Special files (layout.js, page.js, loading.js, error.js, etc.)",
                section:
                  "Special files (layout.js, page.js, loading.js, error.js, etc.)",
                items: [],
              },
            },
          ],
        },
      },
    ],
  },
  {
    mainTitle: "2. Routing in Next.js 14",
    section: "routing",
    items: [],
  },
  {
    mainTitle: "3. Data Management and API",
    section: "data-and-api",
    items: [],
  },
  {
    mainTitle: "4. Optimization and Styling",
    section: "optimization-and-styling",
    items: [],
  },
  {
    mainTitle: "5. Authentication and Database Integration",
    section: "auth-and-database",
    items: [],
  },
  {
    mainTitle: "6. Advanced Features and Best Practices",
    section: "advanced-features",
    items: [],
  },
  {
    mainTitle: "7. Testing and Deployment",
    section: "testing-and-deployment",
    items: [],
  },
  {
    mainTitle: "8. Advanced Use Cases and Troubleshooting",
    section: "advanced-use-cases",
    items: [],
  },
  {
    mainTitle: "9. Reusable Components and Utilities",
    section: "reusable-components",
    items: [],
  },
];
