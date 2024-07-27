"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Documentation, {
  DocumentationSection,
} from "@/components/component/Documentation";

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

interface AddDocumentationProps {
  onSave: (newSection: DocumentationSection) => void;
}

const AddDocumentation: React.FC<AddDocumentationProps> = ({ onSave }) => {
  const [section, setSection] = useState<DocumentationSection>({
    mainTitle: "",
    section: "",
    items: [],
  });

  const [currentItem, setCurrentItem] = useState<DocumentationItem>({
    type: "paragraph",
    text: "",
  });

  const handleAddItem = () => {
    setSection((prev) => ({
      ...prev,
      items: [...prev.items, currentItem],
    }));
    setCurrentItem({ type: "paragraph", text: "" });
  };

  const handleSave = () => {
    onSave(section);
    setSection({ mainTitle: "", section: "", items: [] });
  };

  const renderInputFields = () => {
    switch (currentItem.type) {
      case "code":
        return (
          <>
            <Input
              placeholder="Language"
              value={currentItem.code?.language || ""}
              onChange={(e) =>
                setCurrentItem((prev: any) => ({
                  ...prev,
                  code: { ...prev.code, language: e.target.value },
                }))
              }
            />
            <Textarea
              placeholder="Code"
              value={currentItem.code?.code || ""}
              onChange={(e) =>
                setCurrentItem((prev: any) => ({
                  ...prev,
                  code: { ...prev.code, code: e.target.value },
                }))
              }
            />
          </>
        );
      case "link":
      case "VLink":
        return (
          <>
            <Input
              placeholder="Text"
              value={currentItem.text || ""}
              onChange={(e) =>
                setCurrentItem((prev) => ({
                  ...prev,
                  text: e.target.value,
                }))
              }
            />
            <Input
              placeholder="URL"
              value={currentItem.url || ""}
              onChange={(e) =>
                setCurrentItem((prev) => ({
                  ...prev,
                  url: e.target.value,
                }))
              }
            />
          </>
        );
      case "section":
        return (
          <>
            <Input
              placeholder="Main Title"
              value={currentItem.section?.mainTitle || ""}
              onChange={(e) =>
                setCurrentItem((prev: any) => ({
                  ...prev,
                  section: {
                    ...prev.section,
                    mainTitle: e.target.value,
                  },
                }))
              }
            />
            <Input
              placeholder="Section Title"
              value={currentItem.section?.section || ""}
              onChange={(e) =>
                setCurrentItem((prev: any) => ({
                  ...prev,
                  section: {
                    ...prev.section,
                    section: e.target.value,
                  },
                }))
              }
            />
            <AddDocumentation
              onSave={(newSubSection) => {
                setCurrentItem((prev: any) => ({
                  ...prev,
                  section: {
                    ...prev.section,
                    items: [
                      ...(prev.section?.items || []),
                      { type: "section", section: newSubSection },
                    ],
                  },
                }));
              }}
            />
          </>
        );
      default:
        return (
          <Input
            placeholder="Text"
            value={currentItem.text || ""}
            onChange={(e) =>
              setCurrentItem((prev) => ({ ...prev, text: e.target.value }))
            }
          />
        );
    }
  };

  return (
    <div className="space-y-4">
      <Input
        placeholder="Main Title"
        value={section.mainTitle}
        onChange={(e) =>
          setSection((prev) => ({ ...prev, mainTitle: e.target.value }))
        }
      />
      <Input
        placeholder="Section"
        value={section.section}
        onChange={(e) =>
          setSection((prev) => ({ ...prev, section: e.target.value }))
        }
      />
      <div className="flex-auto space-x-1">
        {[
          "title",
          "language",
          "subtitle",
          "semi-title",
          "paragraph",
          "code",
          "link",
          "VLink",
          "section",
        ].map((type) => (
          <Button
            key={type}
            onClick={() =>
              setCurrentItem((prev) => ({
                ...prev,
                type: type as DocumentationItem["type"],
              }))
            }
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Button>
        ))}
      </div>
      {renderInputFields()}
      <Button onClick={handleAddItem}>Add Item</Button>
      <Button onClick={handleSave}>Save Section</Button>
      <div className="mt-4">
        <h2>Preview:</h2>
        <Documentation data={[section]} />
      </div>
    </div>
  );
};

export default AddDocumentation;
