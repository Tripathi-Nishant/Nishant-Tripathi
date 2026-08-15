import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Calendar, ChevronDown } from "lucide-react";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { Typewriter } from "@/components/ui/typewriter";
import { TimeCounter } from "@/components/time-counter";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ProjectListItem } from "@/components/project-list-item";
import { AchievementCard, AchievementItem } from "@/components/achievement-item";
import { Dock } from "@/components/dock";
import { SkillsDraggable } from "@/components/skills-draggable";
import { ThemeToggle } from "@/components/theme-toggle";
import { ContactForm } from "@/components/contact-form";
import { VisitorCounter } from "@/components/visitor-counter";
import {
  FadeInText,
  SlideUp,
  SlideInLeft,
  SlideInRight,
} from "@/components/scroll-animation";

export default function Page() {
  const experienceItems = [
    {
      icon: "building",
      company: "Click2Biz",
      role: "Co-Founder & Marketing Lead",
      period: "July 2025 - Present",
      bullets: [
        "Gathered client requirements, defined product features, and coordinated with the development team to deliver tailored digital solutions for small businesses.",
        "Managed client communication, requirement documentation, and the product roadmap; worked directly with early customers to iterate on features and improve product-market fit.",
      ],
      logoUrl: "/click2biz-logo.png",
      companyUrl: "",
    },
  ]

  return (
    <main className="min-h-dvh bg-grid pb-20 sm:pb-24 md:pb-32 pt-4 sm:pt-5 md:pt-6 dark:bg-neutral-950">
      <FadeInText>
        <nav className="mx-auto mb-3 sm:mb-4 flex w-full max-w-xl items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 text-xs text-neutral-600 dark:text-neutral-300">
          <Link
            href="#"
            className="font-semibold text-neutral-900 dark:text-neutral-50 text-sm sm:text-base"
          >
            Nishant.
          </Link>


          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <a
              href="#experience"
              className="hover:text-neutral-900 dark:hover:text-neutral-50 text-xs sm:text-xs"
            >
              experience
            </a>
            <a
              href="#projects"
              className="hover:text-neutral-900 dark:hover:text-neutral-50 text-xs sm:text-xs"
            >
              projects
            </a>
            <a
              href="#achievements"
              className="hover:text-neutral-900 dark:hover:text-neutral-50 text-xs sm:text-xs"
            >
              achievements
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </FadeInText>

      <div className="mx-auto max-w-xl px-3 sm:px-4 md:px-6 lg:px-8">
        <article
          aria-label="Portfolio"
          className="relative rounded-xl sm:rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
        >
          <div className="p-3 sm:p-4 md:p-6 lg:p-6">
            {/* Header */}

            <SlideUp>
              <header id="about" className="space-y-2 p-2 sm:p-3 md:p-4">
                <FadeInText delay={0.1}>
                  <div className="flex items-center justify-between gap-2">
                    <TextShimmer
                      as="p"
                      className="text-xs"
                      duration={2.2}
                      spread={1.2}
                    >
                      Hola ! I'm
                    </TextShimmer>
                    <TimeCounter className="text-xs text-neutral-500 dark:text-neutral-400 font-mono" />
                  </div>
                </FadeInText>
                <SlideInLeft delay={0.2}>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 ring-2 ring-neutral-200 dark:ring-neutral-900 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src="/facedemo.jpeg"
                        alt="Nishant Tripathi"
                        className="h-full w-full object-cover scale-115 -translate-x-0.5"
                      />
                    </div>
                    <h1 className="text-lg sm:text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50">
                      Nishant Tripathi
                      <br />
                     <p className="flex flex-wrap items-center mt-1 gap-2 sm:gap-5 md:gap-5 text-xs text-neutral-600 dark:text-neutral-400">aka elonmosquito</p>
                    </h1>
                   
                  </div>
                   {/* <p className="flex flex-wrap items-center mt-3 gap-2 sm:gap-4 text-xs text-neutral-600 dark:text-neutral-300">aka monk_isolated</p> */}
                </SlideInLeft>
                <FadeInText delay={0.3}>
                  <div className="flex flex-wrap items-center mt-3 gap-2 sm:gap-4 text-xs text-neutral-600 dark:text-neutral-300">
                    <span>21, he/him </span>
                    <span className="hidden sm:inline">{"|"}</span>
                    <span className="max-w-[38ch]">
                      <Typewriter
                        text={[
                          "Full Stack Developer",
                          "Designer",
                          "Freelancer",  
                        ]}
                        speed={90}
                        waitTime={2000}
                        deleteSpeed={80}
                        className="text-neutral-600 dark:text-neutral-300"
                        cursorChar="|"
                        showCursor={true}
                      />
                      {" from India."}
                    </span>
                    
                  </div>
                  
                </FadeInText>
                <SlideInRight delay={0.4}>
                  <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <a
                      href="https://drive.google.com/file/d/1aqP5EikWRGX2899T48rVgMT_WG3lD6Op/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Resume"
                      className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 text-white px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 whitespace-nowrap"
                    >
                      Resume
                    </a>
                    <a
                      href="mailto:tripathinishant498@gmail.com"
                      aria-label="Send email"
                      className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900 whitespace-nowrap"
                    >
                      <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      
                    </a>
                    <a
                      href="https://x.com/monk_isolated"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open Twitter"
                      className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900 whitespace-nowrap"
                    >
                      <Twitter className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      
                    </a>
                    <a
                      href="https://github.com/Tripathi-Nishant"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open GitHub"
                      className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900 whitespace-nowrap"
                    >
                      <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      
                    </a>
                    <a
                      href="https://www.linkedin.com/in/nishant-tripathi-206560250/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open LinkedIn"
                      className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900 whitespace-nowrap"
                    >
                      <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      
                    </a>
                  </div>
                </SlideInRight>
              </header>
              

              
            </SlideUp>

            {/* Bio */}
            <FadeInText delay={0.7}>
              <section className="mt-3 sm:mt-4 mx-1 sm:mx-2 md:m-2 justify-center items-center text-xs sm:text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                <p>
                  TL;DR: i break things, learn fast, and make shit happen. limits exist to be tested; polymath thinking and psychology books shaped me. <br />Mastery is non-negotiable.{" "}
                  
                </p>
              </section>
            </FadeInText>

                                    {/* Work Experience */}
            <SlideUp delay={0.1}>
              <section id="experience" className="mt-3 sm:mt-4 px-1.5 sm:px-2 md:px-4 py-3 sm:py-4 md:py-5 section-divider">
                <FadeInText delay={0.1}>
                  <h3 className="font-bricolage text-xs sm:text-sm md:text-base font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
                    Experience
                  </h3>
                </FadeInText>

                <div className="experience-list mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                  {experienceItems.map(item => (
                    <div key={item.company} className="experience-item">
                      <div className="experience-row">
                        <div className="experience-left">
                          <div className="experience-logo">
                            <img
                              src={item.logoUrl}
                              alt={`${item.company} logo`}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="experience-text">
                            <p className="experience-company">
                              {item.companyUrl ? (
                                <a
                                  href={item.companyUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="hover:underline"
                                >
                                  {item.company}
                                </a>
                              ) : (
                                item.company
                              )}
                            </p>
                            <p className="experience-role">{item.role}</p>
                          </div>
                        </div>
                        <div className="experience-right">
                          <span className="experience-period">{item.period}</span>
                          <span className="exp-chevron-wrap" aria-hidden="true">
                            <ChevronDown className="exp-chevron" />
                          </span>
                        </div>
                      </div>

                      <div className="experience-details">
                        <ul className="experience-bullets">
                          {item.bullets.map((bullet, index) => (
                            <li key={`${item.company}-${index}`}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </SlideUp>

            {/* Projects */}
            <SlideUp delay={0.2}>
              <section id="projects" className="mt-3 sm:mt-4 p-2 sm:p-3 md:p-4 section-divider pt-4 sm:pt-5">
                <FadeInText delay={0.1}>
                  <h3 className="font-bricolage text-xs sm:text-sm md:text-base font-semibold tracking-[0.05em] text-neutral-900 dark:text-neutral-50 mb-2 sm:mb-3 ml-0.5 sm:ml-1">
                    Proof of Work
                  </h3>
                </FadeInText>
                <div className="space-y-1.5 sm:space-y-2 md:space-y-2">
                  <SlideInLeft delay={0.1}>
                    <ProjectListItem
                      title="DriftWatch"
                      image="driftwatch-architecture.png"
                      links={[
                        {
                          label: "live preview ↗",
                          href: "https://github.com/Tripathi-Nishant/CloudWatch",
                        },
                        {
                          label: "github ↗",
                          href: "https://github.com/Tripathi-Nishant/CloudWatch",
                        },
                      ]}
                      bullets={[
                        "Built a real-time training/serving skew detector for ML pipelines using PSI, KL Divergence, Jensen-Shannon Distance, and KS Test, achieving sub-second drift detection across numerical and categorical features.",
                        "Engineered an LLM-powered explanation layer using the Claude Haiku API to generate plain-English diagnosis, impact, and action reports.",
                       
                      ]}
                      tags={["Python", "FastAPI", "React.js", "Docker"]}
                    />
                  </SlideInLeft>
                  
                  <SlideInLeft delay={0.1}>
                    <ProjectListItem
                      title="Nyaya-Voice"
                      image="nyaya-voice-dashboard.png"
                      
                      links={[
                        {
                          label: "live preview ↗",
                          href: "https://nyaay-voice.onrender.com/",
                          
                        },
                        {
                          label: "github ↗",
                          href: "https://github.com/Tripathi-Nishant/Nyaay-voice",
                        },
                      ]}
                      bullets={[
                        "Built a bilingual AI-powered legal assistant for rural accessibility with a 10-step deterministic pipeline simulating Sarvam AI speech-to-text, Gemini, and RAG retrieval for Hindi and English voice queries.",
                        "Engineered a legal verification layer that cross-references AI-generated responses with a verified internal rule book, assigns confidence scores, and triggers source-language clarification for low-confidence or ambiguous queries.",
                      
                      ]}
                      tags={["Node.js", "Express.js", "HTML5", "CSS", "JavaScript"]}
                    />
                  </SlideInLeft>
                  
                </div>
                <FadeInText delay={0.2}>
                  <div className="mt-2 sm:mt-3 flex justify-center">
                    <a
                      href="https://github.com/Tripathi-Nishant?tab=repositories" target="_blank"
                      className="inline-flex items-center gap-1 rounded-sm border border-neutral-200 px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                    >
                      View all projects →
                    </a>
                  </div>
                </FadeInText>
              </section>
            </SlideUp>

               {/* Skills */}
            <SlideUp delay={0.3}>
              <section className="mt-3 sm:mt-4 p-2 sm:p-3 md:p-4 section-divider pt-4 sm:pt-5">
                <SkillsDraggable />
              </section>
            </SlideUp>

            <SlideUp delay={0.3}>
              <section id="achievements" className="mt-3 sm:mt-4 p-2 sm:p-3 md:p-3 section-divider pt-3 sm:pt-4 md:pt-5">
                <FadeInText delay={0.1}>
                  <h3 className="font-bricolage mb-3 sm:mb-4 text-xs sm:text-sm md:text-base font-semibold tracking-[0.05em] text-neutral-900 dark:text-neutral-100 ml-0.5 sm:ml-1 md:ml-1">
                    Achievements
                  </h3>
                </FadeInText>

                <div className="grid gap-2 sm:gap-2.5 md:gap-3">
                  <SlideInLeft delay={0.1}>
                    <AchievementCard
                      title="Enable: An Accessibility Ideathon — IIT Madras"
                      date="February 2026"
                      description="Reached the Top 10 finalist teams and presented an accessibility-focused innovative solution at the national-level ideathon."
                    />
                  </SlideInLeft>

                  <SlideInRight delay={0.15}>
                    <AchievementCard
                      title="Hack Heist 2 — MIET Group of Institutions"
                      date="March 2026"
                      description="Advanced to Round 4 among participating teams and reached the final elimination round in the hackathon competition."
                    />
                  </SlideInRight>
                  <SlideInRight delay={0.15}>
                    <AchievementCard
                      title="KnowledgeQuarry: Data Science Challenge — University of Delhi"
                      date="April 2026"
                      description="Secured a position among the Top 10 teams and presented a data science prototype solution during the final evaluation round."
                    />
                  </SlideInRight>
                </div>
              </section>
            </SlideUp>

         

            {/* GitHub Contributions
            <SlideUp delay={0.3}>
              <section className="mt-8 section-lines p-4">
                <GitHubContributions />
              </section>
            </SlideUp> */}
            <SlideUp delay={0.2}>
              <section id="projects" className="mt-3 sm:mt-4 p-2 sm:p-3 md:p-3 section-divider pt-4 sm:pt-5">
                <FadeInText delay={0.1}>
                  <h3 className="font-bricolage text-xs sm:text-sm md:text-base font-semibold tracking-[0.05em] text-neutral-900 dark:text-neutral-50 mb-2 sm:mb-3 ml-0.5 sm:ml-1 md:ml-1">
                    Blogs
                  </h3>
                </FadeInText>
                <div className="space-y-1.5 sm:space-y-2 md:space-y-2">
                <SlideInLeft delay={0.1}>
                    <ProjectListItem
                      title="The Biggest Challenge in Modern Data Engineering Isn’t Scale — It’s Semantics"
                      image="data-engineering-semantics.png"
                      headerLayout="vertical"
                      links={[
                        {
                          label: "Read on Medium",
                          href: "https://medium.com/@tripathinishant498/the-biggest-challenge-in-modern-data-engineering-isnt-scale-it-s-semantics-a32b6704a104",
                        },
                        {
                          label: "Read ↗",
                          href: "https://medium.com/@tripathinishant498/the-biggest-challenge-in-modern-data-engineering-isnt-scale-it-s-semantics-a32b6704a104",
                        },
                        {
                          label: "Medium ↗",
                          href: "https://medium.com/@tripathinishant498",
                        },
                      ]}
                      bullets={[
                        
                      ]}
                      tags={[
                              ]}
                    />
                  </SlideInLeft>
                  
                </div>
                <FadeInText delay={0.2}>
                  <div className="mt-2 sm:mt-3 flex justify-center">
                    <a
                      href="https://medium.com/@tripathinishant498"
                      target="_blank"
                      className="inline-flex items-center gap-1 rounded-sm border border-neutral-200 px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                    >
                      View all Blogs →
                    </a>
                  </div>
                </FadeInText>
              </section>
            </SlideUp>

            {/* Education */}
            <SlideUp delay={0.3}>
              <section className="mt-3 sm:mt-4 p-2 sm:p-3 md:p-3 section-divider pt-4 sm:pt-5">
                <FadeInText delay={0.1}>
                  <h3 className="font-bricolage text-xs sm:text-sm md:text-base font-semibold tracking-[0.05em] text-neutral-900 dark:text-neutral-50 mb-2 sm:mb-3">
                    Education
                  </h3>
                </FadeInText>
                <ul className="space-y-1.5 sm:space-y-2 md:space-y-2">
                  <SlideInLeft delay={0.1}>
                    <li>
                      <AchievementItem
                        title="KIET Group of Institutions"
                        date="2024 – 2028"
                        description="B.Tech in Computer Science and Engineering — CGPA: 9.1/10"
                      />
                    </li>
                  </SlideInLeft>
                 
                    
                </ul>
              </section>
            </SlideUp>
               {/* Certifications */}
            <SlideUp delay={0.3}>
              <section id="certifications" className="mt-3 sm:mt-4 p-2 sm:p-3 md:p-3 section-divider pt-4 sm:pt-5">
                <FadeInText delay={0.1}>
                  <h3 className="font-bricolage text-xs sm:text-sm md:text-base font-semibold tracking-[0.05em] text-neutral-900 dark:text-neutral-50 mb-2 sm:mb-3">
                    Certifications
                  </h3>
                </FadeInText>
                <ul className="space-y-1.5 sm:space-y-2 md:space-y-2">
                  <SlideInLeft delay={0.1}>
                    <li>
                      <AchievementItem
                        title="AWS Certified Cloud Practitioner"
                        date="AWS"
                        description="Foundational AWS certification covering cloud concepts, core services, security, pricing, and architecture."
                        href="https://cp.certmetrics.com/amazon/en/public/verify/credential/e5aee63ffccd4ad4beba44ae09420c65"
                        linkLabel="Verify"
                      />
                    </li>
                  </SlideInLeft>
                  <SlideInRight delay={0.15}>
                    <li>
                      <AchievementItem
                        title="AWS Certified Data Engineer – Associate"
                        date="AWS"
                        description="Professional certification focused on building, securing, and maintaining data pipelines and analytics solutions on AWS."
                        href="https://cp.certmetrics.com/amazon/en/public/verify/credential/af8fc87e1a4541a69673d98a35848f24"
                        linkLabel="Verify"
                      />
                    </li>
                  </SlideInRight>
                </ul>
              </section>
            </SlideUp>

                                                {/* Book a Meet */}
            <SlideUp delay={0.3}>
              <section
                id="book-a-meet"
                className="mt-4 rounded-xl  border-neutral-200 bg-neutral-50/70 p-5 text-left dark:border-neutral-800 dark:bg-neutral-900/30"
              >
                <FadeInText delay={0.1}>
                  <h2 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                    Still reading? That means something clicked. <br />Let’s talk.
                  </h2>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                    
                  </p>
                </FadeInText>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <a
                    href="https://calendly.com/tripathinishant498/30min"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-300 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-emerald-200"
                    aria-label="Book a 30-minute meeting on Calendly"
                  >
                    <Calendar className="h-4 w-4" />
                    book a meet
                  </a>
                  <a
                    href="https://x.com/monk_isolated"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-400"
                    aria-label="DM on X"
                  >
                    dm on x
                  </a>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-medium text-neutral-900 dark:text-neutral-50">
                    you can mail also
                  </p>
                  <ContactForm />
                  <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
                    Messages are directed to{" "}
                    <span className="font-medium">tripathinishant498@gmail.com</span>.
                  </p>
                </div>
              </section>
            </SlideUp>
          </div>
        </article>
        <div className="mt-6 sm:mt-8 flex justify-center rounded-lg sm:rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950 text-xs sm:text-xs text-neutral-500 dark:text-neutral-400 p-2 sm:p-2 md:p-3 mx-0">
          
            <span className="italic text-center leading-5 sm:leading-6">The people who are crazy enough to think they can change the world are <br /> the ones who do</span> <span aria-hidden> </span>
          
        </div>{" "}
        <div className="mt-2 sm:mt-3 md:mt-4 flex justify-center text-xs text-neutral-500 dark:text-neutral-400 px-2">
           
      designed and developed by&nbsp;<a href="https://x.com/monk_isolated" className="text-blue-400 hover:text-blue-500"> ~Nishant</a>
      </div>
      <VisitorCounter />
        
      </div>

      {/* Floating Dock */}

      <Dock />
    </main>
  );
}
