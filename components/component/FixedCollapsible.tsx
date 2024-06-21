import React, { useState } from "react";
import {
  Collapsible as BaseCollapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

interface FixedCollapsibleProps {
  trigger: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  // Other props...
}

const FixedCollapsible: React.FC<FixedCollapsibleProps> = ({
  trigger,
  className,
  children,
}) => {
  const [isTriggerFixed, setIsTriggerFixed] = useState(false);

  const handleTriggerClick = () => {
    setIsTriggerFixed(!isTriggerFixed);
  };

  return (
    <div>
      <BaseCollapsible className={className}>
        <CollapsibleTrigger
          onClick={handleTriggerClick}
          style={{
            position: isTriggerFixed ? "fixed" : "relative",
            top: 0,
            zIndex: 9999,
          }}
        >
          {trigger}
        </CollapsibleTrigger>
        <CollapsibleContent>{children}</CollapsibleContent>
      </BaseCollapsible>
    </div>
  );
};

export default FixedCollapsible;
