/**
 * Generic debounce utility function
 */

/**
 * Creates a debounced version of a function
 * @param func - The function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced version of the function
 */
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number,
): T {
  let timeout: ReturnType<typeof setTimeout>;

  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
}

export default debounce;
