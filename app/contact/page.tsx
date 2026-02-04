"use client";

export default function ContactPage() {
  return (
    <section className="w-full max-w-3xl mx-auto py-24 px-4 sm:px-6 lg:px-8 pt-32">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          Get In Touch
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-zinc-500 dark:text-zinc-400 sm:text-lg md:mt-5 md:text-xl">
          I'd love to hear from you! Whether you have a question or just want to say hi, feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <div className="p-8 border-2 border-emerald-500 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 text-center">
                Contact Information
            </h2>
            <div className="flex flex-col gap-4 text-zinc-700 dark:text-zinc-300">
                <a href="mailto:abuison@addu.edu.ph" className="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/50">
                    <i className="pi pi-envelope text-xl text-emerald-500"></i>
                    <span>abuison@addu.edu.ph</span>
                </a>
                <a href="https://www.linkedin.com/in/albert-geoff-buison-9334b8337/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/50">
                    <i className="pi pi-linkedin text-xl text-emerald-500"></i>
                    <span>LinkedIn Profile</span>
                </a>
                <a href="https://github.com/N4ush3r" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/50">
                    <i className="pi pi-github text-xl text-emerald-500"></i>
                    <span>GitHub Profile</span>
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}