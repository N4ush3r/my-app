import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me - Albert Geoff S. Buison',
  description: 'Learn more about my skills, experience, and background as a College Student and aspiring Software Engineer.',
};

export default function AboutPage() {
  return (
    <section className="w-full max-w-3xl mx-auto py-24 px-4 sm:px-6 lg:px-8 pt-32">
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            About Me
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            A passionate College Student with a knack for creating elegant and efficient solutions.
          </p>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          <p>
            Hello! I'm Albert, a dedicated and enthusiastic college student currently pursuing a degree in [Your Major]. From a young age, I've been captivated by technology and its potential to solve real-world problems. This passion has driven me to dive deep into software development, where I enjoy the process of turning complex ideas into tangible, user-friendly applications.
          </p>
          <p>
            My journey in tech has been one of continuous learning and growth. I am proficient in a variety of technologies including React, Next.js, and TypeScript. I'm always eager to explore new tools and frameworks to broaden my skillset. I believe that the best way to learn is by doing, which is why I'm constantly working on personal projects and seeking out new challenges.
          </p>
          
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white pt-6">
            My Skills
          </h2>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong className="font-semibold">Frontend:</strong> React, Next.js, TypeScript, Tailwind CSS</li>
            <li><strong className="font-semibold">Backend:</strong> Node.js, Express, [Another backend tech]</li>
            <li><strong className="font-semibold">Databases:</strong> [Your DB like: MongoDB, PostgreSQL]</li>
            <li><strong className="font-semibold">Tools:</strong> Git, Docker, [Another tool]</li>
          </ul>
          <p>
            Beyond my technical skills, I am a strong communicator and a collaborative team player. I'm excited about the opportunity to contribute to meaningful projects and grow as a developer. Feel free to browse my projects or get in touch!
          </p>
        </div>
      </div>
    </section>
  );
}