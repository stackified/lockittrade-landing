import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  // Ensure the path is root-relative (starts with '/')
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  // Prevent double slashes
  return `${basePath === "/" ? "" : basePath}${cleanPath}`;
}
