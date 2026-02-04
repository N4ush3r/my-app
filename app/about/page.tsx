import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Me - Albert Geoff S. Buison',
  description: 'Learn more about my skills, experience, and background as a College Student and aspiring Software Engineer.',
};

export default function AboutPage() {
  return (
    <section className="w-full max-w-3xl mx-auto py-24 px-4 sm:px-6 lg:px-8 pt-32">
      <div className="space-y-12">
        <div className="flex justify-center">
          <div className="relative border-[20px] border-emerald-600 bg-white p-4 shadow-2xl dark:border-green-700 dark:bg-zinc-800">
            <div className="relative h-64 w-64 overflow-hidden bg-zinc-100 dark:bg-zinc-900">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover transition-transform duration-0 ease-in hover:duration-[60s] hover:rotate-[36000deg]"
              />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            About Me
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            I'm a chill guy yo, I love vibe coding more than anything else.
          </p>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          <p>
            Hello! I'm Geoff, a dedicated and enthusiastic college student currently pursuing a degree in Computer Science. 
            I am a highly efficient task handler with a deep background in logistics optimization and multi-threaded resource management. Much like managing a complex software development pipeline, I oversee a sophisticated personal "foundry" where I track dependencies, manage build times, and ensure all critical assets are fabricated with zero downtime. My approach to problem-solving is rooted in dependency management; I know exactly which raw materials are required for any given project and can prioritize high-value builds to ensure I am always mission-ready.
          </p>
          <p>
            In high-pressure environments, I excel at rapid deployment and environmental navigation. I’ve mastered the art of "loadout" optimization—effectively my version of full-stack configuration—where I calibrate specialized hardware and modular enhancements to maximize system throughput. Whether I am executing high-speed data extraction protocols or coordinating with international teams to secure high-value nodes, I maintain peak situational awareness and tactical precision. I treat every mission as a live-environment stress test, consistently scaling my performance as the complexity of the task increases.
          </p>
          
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white pt-6">
            My Skills
          </h2>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong className="font-semibold">Frontend:</strong> React, Next.js, TypeScript, Tailwind CSS</li>
            <li><strong className="font-semibold">Backend:</strong> Node.js, Express, Java (NetBeans)</li>
            <li><strong className="font-semibold">Databases:</strong> MySql</li>
            <li><strong className="font-semibold">Tools:</strong> Git, Docker</li>
          </ul>
          <p>
            Beyond tactical execution, I am proficient in database management and interface customization. I maintain a massive library of thousands of modular components, utilizing advanced filtering and sorting logic to identify the most efficient configurations for any system. I also place a high priority on UI/UX design, meticulously customizing my operational workspace and equipment aesthetics to ensure high-visibility performance and a cohesive visual identity. This combination of backend resource logic and frontend precision allows me to handle complex, long-term projects with both technical rigor and creative flair.
          </p>
        </div>
      </div>
    </section>
  );
}