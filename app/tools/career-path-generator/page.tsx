import Link from 'next/link';

export default function CareerPathGeneratorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Career Path Generator</h1>
      <p className="text-lg text-gray-700 mb-8">This is a test page for the Career Path Generator tool.</p>
      <Link href="/library" className="text-blue-500 hover:underline">
        Back to Library
      </Link>
    </div>
  );
}
