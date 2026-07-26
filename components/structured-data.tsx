"use client";

import { useEffect } from "react";

export default function StructuredData() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Ojasvi Marwari",
      jobTitle: "Full Stack Developer",
      description:
        "TL;DR: Full-Stack Software Engineer building scalable, production-grade systems at early-stage startups. Experienced in end-to-end ownership, system design, backend services, frontend applications, and taking products from architecture to production.",
      email: "ojasvi.0108@gmail.com",
      nationality: "Indian",
      birthDate: "2005",
      gender: "Male",
      address: {
        "@type": "PostalAddress",
        addressCountry: "India",
        addressRegion: "Uttar Pradesh",
        addressLocality: "Ghaziabad",
      },
      sameAs: [
        "https://www.linkedin.com/in/ojasvi-marwari-110392328/",
        "https://github.com/Ojasvi2006",
        "https://leetcode.com/u/Ojasvi_M/",
      ],
      knowsAbout: [
        "Full Stack Development",
        "React",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Python",
        "Web Development",
        "Software Engineering",
        "Portfolio Development",
        "Minimalist Design",
        "Modern Web Design",
        "Student Portfolio",
        "Developer Portfolio",
        "Tech Portfolio",
        "Professional Portfolio",
      ],
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "KIET Group of Institutions",
          description: "B.Tech in Computer Science and Engineering",
        },
      ],
      worksFor: [
        {
          "@type": "Organization",
          name: "Click2Biz",
          description: "Co-Founder & Marketing Lead",
        },
      ],
      award: [
        {
          "@type": "Award",
          name: "Enable: An Accessibility Ideathon — IIT Madras",
          description:
            "Reached the Top 10 finalist teams and presented an accessibility-focused innovative solution at the national-level ideathon.",
          dateAwarded: "2026-02",
        },
        {
          "@type": "Award",
          name: "Hack Heist 2 — MIET Group of Institutions",
          description:
            "Advanced to Round 4 among participating teams and reached the final elimination round in the hackathon competition.",
          dateAwarded: "2026-03",
        },
        {
          "@type": "Award",
          name: "KnowledgeQuarry: Data Science Challenge — University of Delhi",
          description:
            "Secured a position among the Top 10 teams and presented a data science prototype solution during the final evaluation round.",
          dateAwarded: "2026-04",
        },
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Full Stack Developer",
        description: "Building efficient, scalable, and intuitive applications",
        skills: [
          "Java",
          "C",
          "FastAPI",
          "Node.js",
          "JavaScript",
          "React.js",
          "AWS",
          "SQL",
        ],
      },
    };

    try {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    } catch (error) {
      console.error("Error adding structured data:", error);
    }
  }, []);

  return null;
}
