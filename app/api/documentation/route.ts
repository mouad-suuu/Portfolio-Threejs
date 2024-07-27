import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const filePath = path.join(
  process.cwd(),
  "app",
  "(resources)",
  "(frameworks-libraries)",
  "Next.js",
  "Next.json"
);

export async function GET() {
  try {
    const fileContent = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(fileContent);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error reading documentation:", error);
    return NextResponse.json(
      { error: "Failed to read documentation" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const newSection = await request.json();
    const fileContent = await fs.readFile(filePath, "utf8");
    const existingData = JSON.parse(fileContent);

    existingData.push(newSection);

    await fs.writeFile(filePath, JSON.stringify(existingData, null, 2));

    return NextResponse.json({ message: "Documentation saved successfully" });
  } catch (error) {
    console.error("Error saving documentation:", error);
    return NextResponse.json(
      { error: "Failed to save documentation" },
      { status: 500 }
    );
  }
}
