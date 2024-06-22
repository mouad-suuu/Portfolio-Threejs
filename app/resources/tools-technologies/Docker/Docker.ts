import { DocumentationSection } from "@/components/component/Documentation";

export const data: DocumentationSection[] = [
  {
    mainTitle: "Docker Documentation",
    section: "Basics",
    items: [
      {
        type: "title",
        text: "Docker Basics",
      },
      {
        type: "language",
        text: "Docker",
      },
      {
        type: "paragraph",
        text: "This example demonstrates basic concepts in Docker such as creating and managing containers, images, and Dockerfiles.",
      },
      {
        type: "code",
        code: {
          language: "dockerfile",
          code: '# Dockerfile to demonstrate basic concepts\n\n# 1. Base Image\nFROM node:14\n\n# 2. Working Directory\nWORKDIR /app\n\n# 3. Copy Files\nCOPY . .\n\n# 4. Install Dependencies\nRUN npm install\n\n# 5. Expose Port\nEXPOSE 3000\n\n# 6. Command to Run\nCMD ["npm", "start"]',
        },
      },
    ],
  },
];
