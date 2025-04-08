import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen p-8 pb-20">
      <h1 className="text-4xl font-bold">404 - Not Found</h1>
      <p className="text-lg">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/" className="text-blue-500 underline">
        Go back to Home
      </Link>
    </div>
  );
}
