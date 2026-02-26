import { readFile } from "fs/promises";
import { join } from "path";

export async function GET() {
  try {
    const filePath = join(process.cwd(), "src/file/images/pfp1.JPG");
    const imageBuffer = await readFile(filePath);

    return new Response(imageBuffer, {
      status: 200,
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=3600, immutable",
      },
    });
  } catch (error) {
    return new Response("Image not found", { status: 404 });
  }
}
