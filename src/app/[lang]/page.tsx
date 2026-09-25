import { notFound } from "next/navigation";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { EducationSection } from "@/components/EducationSection";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { getResume } from "@/content";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const resume = getResume(lang);

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        {dict.nav.skipToContent}
      </a>
      <Navbar locale={lang} brand={resume.shortName} dict={dict} />

      <main id="content" className="flex-1">
        <Hero resume={resume} dict={dict} />
        <About resume={resume} dict={dict} />
        <Skills resume={resume} dict={dict} />
        <Experience resume={resume} dict={dict} locale={lang} />
        <Projects resume={resume} dict={dict} />
        <EducationSection resume={resume} dict={dict} />
        <Contact resume={resume} dict={dict} />
      </main>

      <Footer name={resume.name} builtWith={dict.common.builtWith} />
    </>
  );
}
