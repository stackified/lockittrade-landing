import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-4xl font-bold text-white mb-4">Page Not Found</h2>
      <p className="text-zinc-400 mb-8">The page you are looking for does not exist.</p>
      <Link href="/">
        <Button className="bg-[#00A9E0] text-white hover:bg-[#00A9E0]/80">Return Home</Button>
      </Link>
    </div>
  )
}
