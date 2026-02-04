import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full max-w-3xl mx-auto py-24 px-4 sm:px-6 lg:px-8 pt-32">
      <div className="text-center">
        <div className="mb-10">
          <Image
            src="/profile.jpg"
            alt="A photo of Albert Geoff S. Buison"
            width={250}
            height={250}
            className="mx-auto rounded-full border-4 border-emerald-500/50 object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl md:text-6xl">
          <span className="block">Albert Geoff S. Buison</span>
          <span className="block text-emerald-600 dark:text-emerald-400">
            College Student
          </span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-zinc-500 dark:text-zinc-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Welcome to my website.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <Link
              href="/about"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10"
            >
              About Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
