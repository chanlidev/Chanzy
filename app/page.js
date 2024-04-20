import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{ backgroundImage: 'url("/backgroundImage.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex flex-col items-center pt-24">
        <h1 className="text-4xl font-semibold mb-4">Welcome to the Chanzy Store</h1>
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link href="/products">
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30">
            <h2 className="mb-3 text-2xl font-semibold">
              Start browsing products{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </div>
        </Link>
      </div>
    </main>
  );
}
