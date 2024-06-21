import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CopyButton from "@/components/component/CopyBtton";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

interface DocumentationItem {
  type:
    | "title"
    | "language"
    | "subtitle"
    | "semi-title"
    | "paragraph"
    | "code"
    | "link";
  text?: string;
  code?: {
    language: string;
    code: string;
  };
  url?: string;
}

export interface DocumentationSection {
  mainTitle: string;
  section: string;
  items: DocumentationItem[];
}

interface DocumentationProps {
  data: DocumentationSection[];
}

const Documentation: React.FC<DocumentationProps> = ({
  data,
}: DocumentationProps) => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      {data.map((section, sectionIndex) => (
        <div key={sectionIndex} className="space-y-6">
          {sectionIndex === 0 && (
            <h1 className="text-3xl font-bold mb-8">{section.mainTitle}</h1>
          )}
          <Collapsible className="border rounded-lg overflow-hidden mt-2">
            <CollapsibleTrigger className="bg-muted px-6 py-4 flex items-center justify-between font-medium">
              <span>{section.section}</span>
              <ChevronDownIcon className="w-5 h-5" />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-6 space-y-4">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="relative">
                  {item.type === "title" && (
                    <h1 className="text-2xl font-bold">{item.text}</h1>
                  )}
                  {item.type === "language" && (
                    <p className="font-semibold text-lg text-blue-600">
                      {item.text}
                    </p>
                  )}
                  {item.type === "subtitle" && (
                    <h2 className="text-lg font-semibold">{item.text}</h2>
                  )}
                  {item.type === "semi-title" && (
                    <h3 className="text-lg font-medium">{item.text}</h3>
                  )}
                  {item.type === "paragraph" && (
                    <p className="text-gray-700">{item.text}</p>
                  )}
                  {item.type === "code" && item.code && (
                    <div className="relative">
                      <SyntaxHighlighter
                        language={item.code.language}
                        style={anOldHope}
                        className="rounded-lg"
                      >
                        {item.code.code || ""}
                      </SyntaxHighlighter>
                      <div className="absolute top-0 right-0 mt-2 mr-2">
                        <CopyButton text={item.code.code || ""} />
                      </div>
                    </div>
                  )}
                  {item.type === "link" && (
                    <a
                      href={item.url}
                      className="text-blue-600 hover:underline"
                    >
                      {item.text}
                    </a>
                  )}
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>
      ))}
    </div>
  );
};

export default Documentation;

function ChevronDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}