/**
 * Utility to fetch and manage content (blog posts or projects)
 * Unifies getPosts logic from Posts.tsx and Projects.tsx components
 * 
 * NOTE: This function should only be called from Server Components
 * as it accesses server-only APIs via getPosts()
 */

import { getPosts } from "@/utils/utils";

interface ContentFetchingOptions {
  range?: [number] | [number, number];
  exclude?: string[];
  sortBy?: string; // e.g., 'publishedAt' (default)
}

interface ContentFetchingResult {
  content: ReturnType<typeof getPosts>;
  totalCount: number;
  displayedCount: number;
}

/**
 * Fetch and manage content (posts or projects)
 * 
 * @param contentType - Type of content: 'posts' or 'projects'
 * @param options - Fetch options (range, exclude, sortBy)
 * @returns Object with content array, totalCount, and displayedCount
 * 
 * @note This should only be called from Server Components
 */
export function getContentFetching(
  contentType: "posts" | "projects",
  options: ContentFetchingOptions = {},
): ContentFetchingResult {
  const { range, exclude = [], sortBy = "publishedAt" } = options;

  // Determine the path based on content type
  const getContentPath = (type: "posts" | "projects") => {
    if (type === "posts") {
      return ["src", "app", "blog", "posts"];
    } else {
      return ["src", "app", "work", "projects"];
    }
  };

  // Fetch all content from the appropriate directory
  let allContent = getPosts(getContentPath(contentType) as ["src", "app", "blog", "posts"] | ["src", "app", "work", "projects"]);

  // Filter by excluding specific slugs
  if (exclude.length > 0) {
    allContent = allContent.filter((item) => !exclude.includes(item.slug));
  }

  // Sort by the specified field (default: publishedAt)
  const sortedContent = allContent.sort((a, b) => {
    if (sortBy === "publishedAt") {
      return (
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
      );
    }
    return 0;
  });

  const totalCount = allContent.length;

  // Apply range slicing if provided
  let displayedContent = sortedContent;
  let displayedCount = sortedContent.length;

  if (range) {
    const startIndex = range[0] - 1; // Convert to 0-based index
    const endIndex = range.length === 2 ? range[1] : sortedContent.length;
    displayedContent = sortedContent.slice(startIndex, endIndex);
    displayedCount = displayedContent.length;
  }

  return {
    content: displayedContent,
    totalCount,
    displayedCount,
  };
}

export default getContentFetching;
