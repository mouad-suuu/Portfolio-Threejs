import { DocumentationSection } from "@/components/component/Documentation";
import { Section } from "lucide-react";

export const data: DocumentationSection[] = [
  {
    mainTitle: "The Next.js 14 Documentation",
    section: "The Next.js 14 Documentation",
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
          items: [
            {
              type: "paragraph",
              text: "Next.js 14 introduced several key features and improvements. Here are the most significant ones with examples:",
            },
            {
              type: "subtitle",
              text: "1. Partial Prerendering (Beta)",
            },
            {
              type: "paragraph",
              text: "This feature allows for hybrid rendering, combining static and dynamic content.",
            },
            {
              type: "code",
              code: {
                language: "jsx",
                code: `export default async function Page() {
  return (
    <>
      <h1>Static content</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <DynamicContent />
      </Suspense>
    </>
  )
}`,
              },
            },
            {
              type: "subtitle",
              text: "2. Server Actions (Stable)",
            },
            {
              type: "paragraph",
              text: "Allows you to run asynchronous code directly on the server from the client.",
            },
            {
              type: "code",
              code: {
                language: "jsx",
                code: `export default function Form() {
  async function handleSubmit(formData) {
    'use server'
    // Server-side logic here
  }
  return <form action={handleSubmit}>...</form>
}`,
              },
            },
            {
              type: "subtitle",
              text: "3. Improved Metadata API",
            },
            {
              type: "paragraph",
              text: "Simplified API for adding metadata to your pages.",
            },
            {
              type: "code",
              code: {
                language: "jsx",
                code: `export const metadata = {
  title: 'My Page',
  description: 'Page description',
}

export default function Page() {
  return ...
}`,
              },
            },
            {
              type: "subtitle",
              text: "4. Turbopack (Beta) Improvements",
            },
            {
              type: "paragraph",
              text: "Faster compilation and better stability.",
            },
            {
              type: "subtitle",
              text: "5. Built-in SEO Support",
            },
            {
              type: "paragraph",
              text: "Enhanced tools for improving search engine optimization.",
            },
            {
              type: "code",
              code: {
                language: "jsx",
                code: `import { NextSeo } from 'next-seo'

export default function Page() {
  return (
    <>
      <NextSeo
        title="Page Title"
        description="Page description"
        canonical="https://www.example.com/page"
        openGraph={{
          url: 'https://www.example.com/page',
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://www.example.com/og-image.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
          ],
        }}
      />
      <p>Page content</p>
    </>
  )
}`,
              },
            },
            {
              type: "subtitle",
              text: "6. Enhanced Image Component",
            },
            {
              type: "paragraph",
              text: "Improved performance and easier usage of the Next.js Image component.",
            },
            {
              type: "code",
              code: {
                language: "jsx",
                code: `import Image from 'next/image'

export default function Page() {
  return (
    <Image
      src="/profile.jpg"
      width={500}
      height={500}
      alt="Profile picture"
      priority
    />
  )
}`,
              },
            },
            {
              type: "paragraph",
              text: "These improvements aim to enhance performance, developer experience, and SEO capabilities in Next.js applications.",
            },
          ],
        },
      },
      {
        type: "section",
        section: {
          mainTitle: "Comparison with previous versions",
          section: "Comparison with previous versions",
          items: [
            {
              type: "paragraph",
              text: "Let's compare Next.js 14 with previous versions, focusing on key differences and improvements:",
            },
            {
              type: "subtitle",
              text: "1. Routing System",
            },
            {
              type: "paragraph",
              text: "Next.js 13 introduced the App Router, which became the default in version 14.",
            },
            {
              type: "paragraph",
              text: "Previous (Pages Router):",
            },
            {
              type: "code",
              code: {
                language: "jsx",
                code: `// pages/about.js
export default function About() {
  return <h1>About Page</h1>
}`,
              },
            },
            {
              type: "paragraph",
              text: "Next.js 14 (App Router):",
            },
            {
              type: "code",
              code: {
                language: "jsx",
                code: `// app/about/page.js
export default function About() {
  return <h1>About Page</h1>
}`,
              },
            },
            {
              type: "subtitle",
              text: "2. Data Fetching",
            },
            {
              type: "paragraph",
              text: "Previous (Pages Router):",
            },
            {
              type: "code",
              code: {
                language: "jsx",
                code: `// pages/posts.js
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/posts')
  const posts = await res.json()
  return { props: { posts } }
}
export default function Posts({ posts }) {
  return (
    <ul>
      {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  )
}`,
              },
            },
            {
              type: "paragraph",
              text: "Next.js 14 (App Router):",
            },
            {
              type: "code",
              code: {
                language: "jsx",
                code: `// app/posts/page.js
async function getPosts() {
  const res = await fetch('https://api.example.com/posts')
  return res.json()
}
export default async function Posts() {
  const posts = await getPosts()
  return (
    <ul>
      {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  )
}`,
              },
            },
            {
              type: "subtitle",
              text: "3. Server Components",
            },
            {
              type: "paragraph",
              text: "Next.js 13 introduced Server Components, which became more refined in version 14.",
            },
            {
              type: "paragraph",
              text: "Next.js 14:",
            },
            {
              type: "code",
              code: {
                language: "jsx",
                code: `// app/page.js
async function getData() {
  const res = await fetch('https://api.example.com/data')
  return res.json()
}
export default async function Page() {
  const data = await getData()
  return <main>{data.content}</main>
}`,
              },
            },
            {
              type: "subtitle",
              text: "4. Metadata API",
            },
            {
              type: "paragraph",
              text: "Previous:",
            },
            {
              type: "code",
              code: {
                language: "jsx",
                code: `// pages/_app.js
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Website</title>
        <meta name="description" content="Welcome to my website" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}`,
              },
            },
            {
              type: "paragraph",
              text: "Next.js 14:",
            },
            {
              type: "code",
              code: {
                language: "jsx",
                code: `// app/layout.js
export const metadata = {
  title: 'My Website',
  description: 'Welcome to my website',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}`,
              },
            },
            {
              type: "subtitle",
              text: "5. Server Actions",
            },
            {
              type: "paragraph",
              text: "This feature was introduced in Next.js 13 and became stable in version 14.",
            },
            {
              type: "paragraph",
              text: "Next.js 14:",
            },
            {
              type: "code",
              code: {
                language: "jsx",
                code: `// app/form.js
export default function Form() {
  async function handleSubmit(formData) {
    'use server'
    const name = formData.get('name')
    // Server-side logic here
  }
  return (
    <form action={handleSubmit}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  )
}`,
              },
            },
            {
              type: "subtitle",
              text: "6. Partial Prerendering",
            },
            {
              type: "paragraph",
              text: "This is a new feature in Next.js 14, not available in previous versions.",
            },
            {
              type: "paragraph",
              text: "Next.js 14:",
            },
            {
              type: "code",
              code: {
                language: "jsx",
                code: `// app/page.js
import { Suspense } from 'react'
import Loading from './loading'
export default function Page() {
  return (
    <>
      <h1>Welcome to my site</h1>
      <Suspense fallback={<Loading />}>
        <DynamicContent />
      </Suspense>
    </>
  )
}`,
              },
            },
            {
              type: "paragraph",
              text: "These examples demonstrate how Next.js 14 has evolved from its predecessors, offering more intuitive APIs, improved performance, and enhanced developer experience. The focus has shifted towards server-side rendering and server components, while also providing powerful tools for building dynamic and interactive applications.",
            },
          ],
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
                items: [
                  {
                    type: "paragraph",
                    text: "The App Router introduced in Next.js 13 and refined in Next.js 14 uses a new directory structure that's more intuitive and powerful. Let's explore the App directory structure with examples:",
                  },
                  {
                    type: "subtitle",
                    text: "1. Root Layout",
                  },
                  {
                    type: "code",
                    code: {
                      language: "plaintext",
                      code: `app/
  layout.js`,
                    },
                  },
                  {
                    type: "paragraph",
                    text: "This is the top-level layout that wraps all pages in your application.",
                  },
                  {
                    type: "code",
                    code: {
                      language: "jsx",
                      code: `// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}`,
                    },
                  },
                  {
                    type: "subtitle",
                    text: "2. Pages",
                  },
                  {
                    type: "code",
                    code: {
                      language: "plaintext",
                      code: `app/
  page.js
  about/
    page.js
  blog/
    page.js`,
                    },
                  },
                  {
                    type: "paragraph",
                    text: "Each `page.js` file represents a route in your application.",
                  },
                  {
                    type: "code",
                    code: {
                      language: "jsx",
                      code: `// app/page.js
export default function Home() {
  return <h1>Welcome to the homepage</h1>
}
// app/about/page.js
export default function About() {
  return <h1>About Us</h1>
}`,
                    },
                  },
                  {
                    type: "subtitle",
                    text: "3. Nested Layouts",
                  },
                  {
                    type: "code",
                    code: {
                      language: "plaintext",
                      code: `app/
  layout.js
  blog/
    layout.js
    page.js
    [slug]/
      page.js`,
                    },
                  },
                  {
                    type: "paragraph",
                    text: "You can create nested layouts for specific sections of your app.",
                  },
                  {
                    type: "code",
                    code: {
                      language: "jsx",
                      code: `// app/blog/layout.js
export default function BlogLayout({ children }) {
  return (
    <div>
      <nav>Blog Navigation</nav>
      {children}
    </div>
  )
}`,
                    },
                  },
                  {
                    type: "subtitle",
                    text: "4. Dynamic Routes",
                  },
                  {
                    type: "code",
                    code: {
                      language: "plaintext",
                      code: `app/
  blog/
    [slug]/
      page.js`,
                    },
                  },
                  {
                    type: "paragraph",
                    text: "Square brackets denote dynamic segments in the route.",
                  },
                  {
                    type: "code",
                    code: {
                      language: "jsx",
                      code: `// app/blog/[slug]/page.js
export default function BlogPost({ params }) {
  return <h1>Blog Post: {params.slug}</h1>
}`,
                    },
                  },
                  {
                    type: "subtitle",
                    text: "5. Route Groups",
                  },
                  {
                    type: "code",
                    code: {
                      language: "plaintext",
                      code: `app/
  (marketing)/
    about/
      page.js
    contact/
      page.js
  (shop)/
    products/
      page.js
    cart/
      page.js`,
                    },
                  },
                  {
                    type: "paragraph",
                    text: "Parentheses create route groups, which don't affect the URL structure but allow for shared layouts.",
                  },
                  {
                    type: "subtitle",
                    text: "6. Loading UI",
                  },
                  {
                    type: "code",
                    code: {
                      language: "plaintext",
                      code: `app/
  blog/
    loading.js
    page.js`,
                    },
                  },
                  {
                    type: "paragraph",
                    text: "Create loading.js files to show loading states.",
                  },
                  {
                    type: "code",
                    code: {
                      language: "jsx",
                      code: `// app/blog/loading.js
export default function Loading() {
  return <p>Loading blog posts...</p>
}`,
                    },
                  },
                  {
                    type: "subtitle",
                    text: "7. Error Handling",
                  },
                  {
                    type: "code",
                    code: {
                      language: "plaintext",
                      code: `app/
  blog/
    error.js
    page.js`,
                    },
                  },
                  {
                    type: "paragraph",
                    text: "Add error.js files to handle errors gracefully.",
                  },
                  {
                    type: "code",
                    code: {
                      language: "jsx",
                      code: `// app/blog/error.js
'use client'
export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}`,
                    },
                  },
                  {
                    type: "subtitle",
                    text: "8. API Routes",
                  },
                  {
                    type: "code",
                    code: {
                      language: "plaintext",
                      code: `app/
  api/
    route.js`,
                    },
                  },
                  {
                    type: "paragraph",
                    text: "API routes are now created using route.js files.",
                  },
                  {
                    type: "code",
                    code: {
                      language: "jsx",
                      code: `// app/api/hello/route.js
export async function GET(request) {
  return new Response('Hello, Next.js!')
}`,
                    },
                  },
                  {
                    type: "subtitle",
                    text: "9. Server Components (default) and Client Components",
                  },
                  {
                    type: "code",
                    code: {
                      language: "plaintext",
                      code: `app/
  components/
    ServerComponent.js
    ClientComponent.js`,
                    },
                  },
                  {
                    type: "paragraph",
                    text: "All components are Server Components by default. Use the 'use client' directive for Client Components.",
                  },
                  {
                    type: "code",
                    code: {
                      language: "jsx",
                      code: `// app/components/ClientComponent.js
'use client'
import { useState } from 'react'
export default function ClientComponent() {
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}`,
                    },
                  },
                  {
                    type: "paragraph",
                    text: "This structure allows for more intuitive routing, easier code organization, and better separation of concerns. It also provides built-in support for loading states, error handling, and nested layouts, making it easier to build complex applications with Next.js 14.",
                  },
                ],
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
    section: "Routing in Next.js 14",
    items: [
      {
        type: "section",
        section: {
          mainTitle: "Basic Concepts",
          section: "Basic Concepts",
          items: [
            {
              type: "section",
              section: {
                mainTitle: "Creating pages",
                section: "Creating pages",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Linking between pages",
                section: "Linking between pages",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Static and dynamic routes",
                section: "Static and dynamic routes",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Route groups and organizing routes",
                section: "Route groups and organizing routes",
                items: [],
              },
            },
          ],
        },
      },
      {
        type: "section",
        section: {
          mainTitle: "App Router",
          section: "App Router",
          items: [
            {
              type: "section",
              section: {
                mainTitle: "Overview and benefits",
                section: "Overview and benefits",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Server adnd client components",
                section: "Server adnd client components",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Parallel routes and intercepting routes",
                section: "Parallel routes and intercepting routes",
                items: [],
              },
            },
          ],
        },
      },
      {
        type: "section",
        section: {
          mainTitle: "Advanced Routing Concepts",
          section: "Advanced Routing Concepts",
          items: [
            {
              type: "section",
              section: {
                mainTitle: "Dynamic segments",
                section: "Dynamic segments",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Catch-all segments",
                section: "Catch-all segments",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Optional catch-all segments",
                section: "Optional catch-all segments",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Router handlers",
                section: "Router handlers",
                items: [],
              },
            },
          ],
        },
      },
    ],
  },
  {
    mainTitle: "3. Data Management and API",
    section: "Data Management and API",
    items: [
      {
        type: "section",
        section: {
          mainTitle: "Data Fetching",
          section: "Data Fetching",
          items: [
            {
              type: "section",
              section: {
                mainTitle: "Server-side rendering (SSR)",
                section: "Server-side rendering (SSR)",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Static site generation (SSG)",
                section: "Static site generation (SSG)",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Incremental static regeneration (ISR)",
                section: "Incremental static regeneration (ISR)",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Client-side fetching",
                section: "Client-side fetching",
                items: [],
              },
            },
          ],
        },
      },
      {
        type: "section",
        section: {
          mainTitle: "API Routes",
          section: "API Routes",
          items: [
            {
              type: "section",
              section: {
                mainTitle: "Creating API routes",
                section: "Creating API routes",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Handling HTTP methods (GET, POST, PUT, DELETE)",
                section: "Handling HTTP methods (GET, POST, PUT, DELETE)",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "API middlewares",
                section: "API middlewares",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Edge API routes",
                section: "Edge API routes",
                items: [],
              },
            },
          ],
        },
      },
      {
        type: "section",
        section: {
          mainTitle: "State Management",
          section: "State Management",
          items: [
            {
              type: "section",
              section: {
                mainTitle: "Using React hooks with Next.js",
                section: "Using React hooks with Next.js",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Server actions",
                section: "Server actions",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Revalidating data",
                section: "Revalidating data",
                items: [],
              },
            },
          ],
        },
      },
    ],
  },
  {
    mainTitle: "4. Optimization and Styling",
    section: "Optimization and Styling",
    items: [
      {
        type: "section",
        section: {
          mainTitle: "Optimizations",
          section: "Optimizations",
          items: [
            {
              type: "section",
              section: {
                mainTitle: "Image optimization",
                section: "Image optimization",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Font optimization",
                section: "Font optimization",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Script optimization",
                section: "Script optimization",
                items: [],
              },
            },
          ],
        },
      },
      {
        type: "section",
        section: {
          mainTitle: "Styling in Next.js",
          section: "Styling in Next.js",
          items: [
            {
              type: "section",
              section: {
                mainTitle: "CSS Modules",
                section: "CSS Modules",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Sass support",
                section: "Sass support",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Tailwind CSS integration",
                section: "Tailwind CSS integration",
                items: [],
              },
            },
          ],
        },
      },
    ],
  },
  {
    mainTitle: "5. Authentication and Database Integration",
    section: "Authentication and Database Integration",
    items: [
      {
        type: "section",
        section: {
          mainTitle: "Authentication",
          section: "Authentication",
          items: [
            {
              type: "section",
              section: {
                mainTitle:
                  "Implementing authentication (e.g., with NextAuth.js)",
                section: "Implementing authentication (e.g., with NextAuth.js)",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Protecting routes",
                section: "Protecting routes",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Managing sessions",
                section: "Managing sessions",
                items: [],
              },
            },
          ],
        },
      },
      {
        type: "section",
        section: {
          mainTitle: "Database Integration",
          section: "Database Integration",
          items: [
            {
              type: "section",
              section: {
                mainTitle:
                  "Connecting to databases (e.g., MongoDB, PostgreSQL)",
                section: "Connecting to databases (e.g., MongoDB, PostgreSQL)",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "ORM usage (e.g., Prisma)",
                section: "ORM usage (e.g., Prisma)",
                items: [],
              },
            },
          ],
        },
      },
      {
        type: "section",
        section: {
          mainTitle: "CRUD Operations",
          section: "CRUD Operations",
          items: [
            {
              type: "section",
              section: {
                mainTitle:
                  "Implementing Create, Read, Update, Delete operations",
                section: "Implementing Create, Read, Update, Delete operations",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle:
                  "Combining app and API routes for full-stack functionality",
                section:
                  "Combining app and API routes for full-stack functionality",
                items: [],
              },
            },
          ],
        },
      },
    ],
  },
  {
    mainTitle: "6. Advanced Features and Best Practices",
    section: "Advanced Features and Best Practices",
    items: [
      {
        type: "section",
        section: {
          mainTitle: "Advanced Concepts",
          section: "Advanced Concepts",
          items: [
            {
              type: "section",
              section: {
                mainTitle: "Middleware usage",
                section: "Middleware usage",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Internationalization (i18n)",
                section: "Internationalization (i18n)",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "SEO optimization",
                section: "SEO optimization",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Web Assembly integration",
                section: "Web Assembly integration",
                items: [],
              },
            },
          ],
        },
      },
      {
        type: "section",
        section: {
          mainTitle: "Performance Monitoring and Optimization",
          section: "Performance Monitoring and Optimization",
          items: [
            {
              type: "section",
              section: {
                mainTitle: "Using built-in performance analytics",
                section: "Using built-in performance analytics",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Optimizing for Core Web Vitals",
                section: "Optimizing for Core Web Vitals",
                items: [],
              },
            },
          ],
        },
      },
      {
        type: "section",
        section: {
          mainTitle: "Security Best Practices",
          section: "Security Best Practices",
          items: [
            {
              type: "section",
              section: {
                mainTitle: "CSRF protection",
                section: "CSRF protection",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "XSS prevention",
                section: "XSS prevention",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Rate limiting",
                section: "Rate limiting",
                items: [],
              },
            },
          ],
        },
      },
    ],
  },
  {
    mainTitle: "7. Testing and Deployment",
    section: "Testing and Deployment",
    items: [
      {
        type: "section",
        section: {
          mainTitle: "Testing",
          section: "Testing",
          items: [
            {
              type: "section",
              section: {
                mainTitle: "Unit testing with Jest",
                section: "Unit testing with Jest",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Integration testing with React Testing Library",
                section: "Integration testing with React Testing Library",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "End-to-end testing with Cypress",
                section: "End-to-end testing with Cypress",
                items: [],
              },
            },
          ],
        },
      },
      {
        type: "section",
        section: {
          mainTitle: "Deployment",
          section: "Deployment",
          items: [
            {
              type: "section",
              section: {
                mainTitle: "Deploying to Vercel",
                section: "Deploying to Vercel",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Other deployment options",
                section: "Other deployment options",
                items: [],
              },
            },
          ],
        },
      },
    ],
  },
  {
    mainTitle: "8. Advanced Use Cases and Troubleshooting",
    section: "Advanced Use Cases and Troubleshooting",
    items: [
      {
        type: "section",
        section: {
          mainTitle: "Advanced Use Cases",
          section: "Advanced Use Cases",
          items: [
            {
              type: "section",
              section: {
                mainTitle: "Real-time applications with WebSockets",
                section: "Real-time applications with WebSockets",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Serverless functions",
                section: "Serverless functions",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Integrating with external APIs",
                section: "Integrating with external APIs",
                items: [],
              },
            },
          ],
        },
      },
      {
        type: "section",
        section: {
          mainTitle: "Troubleshooting and Debugging",
          section: "Troubleshooting and Debugging",
          items: [
            {
              type: "section",
              section: {
                mainTitle: "Common issues and solutions",
                section: "Common issues and solutions",
                items: [],
              },
            },
            {
              type: "section",
              section: {
                mainTitle: "Debugging techniques",
                section: "Debugging techniques",
                items: [],
              },
            },
          ],
        },
      },
    ],
  },
  {
    mainTitle: "9. Reusable Components and Utilities",
    section: "Reusable Components and Utilities",
    items: [
      {
        type: "section",
        section: {
          mainTitle: "CRUD component",
          section: "CRUD component",
          items: [],
        },
      },
      {
        type: "section",
        section: {
          mainTitle: "Authentication HOC",
          section: "Authentication HOC",
          items: [],
        },
      },
      {
        type: "section",
        section: {
          mainTitle: "Data fetching wrapper",
          section: "Data fetching wrapper",
          items: [],
        },
      },
      {
        type: "section",
        section: {
          mainTitle: "Form component with validation",
          section: "Form component with validation",
          items: [],
        },
      },
      {
        type: "section",
        section: {
          mainTitle: "Layout component",
          section: "Layout component",
          items: [],
        },
      },
    ],
  },
];
