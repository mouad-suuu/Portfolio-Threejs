import React from "react";
import { Button } from "@/components/ui/button";
import { DocumentationItem } from "@/components/component/Documentation";

interface AddDocumentationControlsProps {
  section: any; // Adjust the type as per your actual structure
  setSection: React.Dispatch<React.SetStateAction<any>>;
  currentItem: any; // Adjust the type as per your actual structure
  setCurrentItem: React.Dispatch<React.SetStateAction<any>>;
  handleAddItem: () => void;
  handleSave: () => void;
}

const AddDocumentationControls: React.FC<AddDocumentationControlsProps> = ({
  section,
  setSection,
  currentItem,
  setCurrentItem,
  handleAddItem,
  handleSave,
}) => {
  return (
    <div className="space-y-4">
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
              setCurrentItem((prev: any) => ({
                ...prev,
                type: type as DocumentationItem["type"],
              }))
            }
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Button>
        ))}
      </div>
      <Button onClick={handleAddItem}>Add Item</Button>
      <Button onClick={handleSave}>Save Section</Button>
    </div>
  );
};

export default AddDocumentationControls;
