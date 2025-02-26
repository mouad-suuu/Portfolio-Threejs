import { DocumentationSection } from "@/components/component/Documentation";

export const data: DocumentationSection[] = [
  {
    mainTitle: "Git Documentation",
    section: "Basics",
    items: [
      {
        type: "title",
        text: "Git Basics",
      },
      {
        type: "language",
        text: "Git",
      },
      {
        type: "paragraph",
        text: "This example demonstrates basic concepts in Git such as initializing a repository, committing changes, and branching.",
      },
      {
        type: "code",
        code: {
          language: "bash",
          code: '# Git commands to demonstrate basic concepts\n\n# 1. Initialize Repository\ngit init\n\n# 2. Add Files\ngit add .\n\n# 3. Commit Changes\ngit commit -m "Initial commit"\n\n# 4. Create Branch\ngit branch feature-branch\n\n# 5. Checkout Branch\ngit checkout feature-branch\n\n# 6. Merge Branch\ngit checkout main\ngit merge feature-branch',
        },
      },
    ],
  },
];
