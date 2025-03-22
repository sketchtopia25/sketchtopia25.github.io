import { Github } from 'lucide-react'
import { cn } from '../utils/cn'

export function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a
            href="https://github.com/sketchtopia/sketchtopia"
            className={cn(
              "text-gray-400 hover:text-gray-500",
              "transition-colors duration-200"
            )}
          >
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Sketchtopia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}