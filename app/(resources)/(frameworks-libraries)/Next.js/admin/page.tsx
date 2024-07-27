"use client";
import React, { useState, useEffect } from "react";
import AddDocumentation from "@/components/AddDocumentation";
import { DocumentationSection } from "@/components/component/Documentation";
import Documentation from "@/components/component/Documentation";

const YourPage: React.FC = () => {
  const [data, setData] = useState<DocumentationSection[]>([]);

  const handleSave = async (newSection: DocumentationSection) => {
    try {
      const response = await fetch("/api/documentation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSection),
      });
      if (!response.ok) {
        throw new Error("Failed to save documentation");
      }
      setData((prevData) => [...prevData, newSection]);
    } catch (error) {
      console.error("Error saving documentation:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/documentation");
        if (!response.ok) {
          throw new Error("Failed to fetch documentation");
        }
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching documentation:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 space-y-8">
      <h1 className="text-3xl font-bold mb-8">Add New Documentation</h1>
      <AddDocumentation onSave={handleSave} />
      <Documentation data={data} />
    </div>
  );
};

export default YourPage;
