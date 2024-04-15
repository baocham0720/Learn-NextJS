'use client' // Error components must be Client Components

// src/app/error.tsx

// Thêm directive "use client" ở đầu file
// để định nghĩa rằng đây là một Client Component

// export { default as ErrorPage } from 'next/error';
// export { default as NotFound } from 'next/error';
// export { default as getInitialProps } from 'next/error';

 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>500 - Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}