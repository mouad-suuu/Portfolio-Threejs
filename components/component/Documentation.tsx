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
    | "link"
    | "VLink"
    | "section";
  text?: string;
  code?: {
    language: string;
    code: string;
  };
  url?: string;
  section?: DocumentationSection; // Add nested sections
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
  const extractYouTubeVideoId = (url: string) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const renderItems = (items: DocumentationItem[]) => {
    return items.map((item, itemIndex) => (
      <div key={itemIndex} className="relative">
        {item.type === "title" && (
          <h1 className="text-2xl font-bold">{item.text}</h1>
        )}
        {item.type === "language" && (
          <p className="font-semibold text-lg text-blue-600">{item.text}</p>
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
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.text}
          </a>
        )}
        {item.type === "VLink" && (
          <div className="video-container flex items-center justify-center">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${extractYouTubeVideoId(
                item.url || ""
              )}`}
              title={item.text}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
        {item.type === "section" && item.section && (
          <div className="mt-0">
            <Collapsible className="border rounded-lg overflow-hidden">
              <CollapsibleTrigger className="bg-muted px-6 py-3 flex items-center justify-between font-medium">
                <span>{item.section.section}</span>
                <ChevronDownIcon className="w-5 h-5" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-6 space-y-4">
                {renderItems(item.section.items)}
              </CollapsibleContent>
            </Collapsible>
          </div>
        )}
      </div>
    ));
  };

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
              {renderItems(section.items)}
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
