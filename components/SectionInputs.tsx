import React from "react";
import { Input } from "@/components/ui/input";

interface SectionInputsProps {
  currentItem: any; // Adjust the type as per your actual structure
  setCurrentItem: React.Dispatch<React.SetStateAction<any>>;
}

const SectionInputs: React.FC<SectionInputsProps> = ({
  currentItem,
  setCurrentItem,
}) => {
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
    </>
  );
};

export default SectionInputs;
