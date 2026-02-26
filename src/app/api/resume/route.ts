import { readFileSync } from "fs";
import { join } from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const filePath = join(process.cwd(), "src/file/resume", "Henry_Zhang_Resume.pdf");
    const fileContent = readFileSync(filePath);

    return new NextResponse(fileContent, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=Henry_Zhang_Resume.pdf",
      },
    });
  } catch (error) {
    console.error("Error serving resume:", error);
    return NextResponse.json({ error: "Resume not found" }, { status: 404 });
  }
}
