"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Skill = {
  label: string;
};

function SkillPill({ label }: Skill) {
  return (
    <motion.div
      className={cn(
        "relative select-none",
       "inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium",
        "bg-white text-neutral-700 border-neutral-300",
        "dark:bg-neutral-950 dark:text-neutral-300 dark:border-neutral-700"
      )}
      whileHover={{ y: -1 }}
      transition={{ type: "spring", stiffness: 350, damping: 28 }}
      aria-label={label}
    >
      <span className="leading-none">{label}</span>
    </motion.div>
  );
}

export function SkillsDraggable() {
  const skillGroups: { category: string; skills: Skill[] }[] = [
    {
      category: "Languages",
      skills: [{ label: "Python" }, { label: "Java" }, { label: "C" }],
    },
    {
      category: "Web Technologies",
      skills: [
        { label: "HTML" }, { label: "CSS" }, { label: "JavaScript" },
        { label: "React.js" }, { label: "Node.js" }, { label: "Express.js" },
        { label: "FastAPI" },
      ],
    },
    {
      category: "Cloud & Data Engineering",
      skills: [
        { label: "AWS S3" }, { label: "AWS Glue" }, { label: "Athena" },
        { label: "Redshift" }, { label: "EMR" }, { label: "Kinesis" },
        { label: "Lambda" }, { label: "Lake Formation" }, { label: "DynamoDB" },
      ],
    },
    {
      category: "CS Fundamentals",
      skills: [
        { label: "Data Structures & Algorithms" }, { label: "OOPs" },
        { label: "Complexity Analysis" }, { label: "SQL & Relational Databases" },
      ],
    },
  ];

  return (
    
    <div className="group">
      
      {/* Header */}
      
      <div className="mb-2 sm:mb-2 flex items-center justify-between">
         <h3 className="font-bricolage text-xs sm:text-sm md:text-base font-bold tracking-[0.1em] text-slate-900 dark:text-slate-100">
          Technical Skills
        </h3>
       

       
      </div>

      {/* Skills */}
      <div className="relative space-y-3 sm:space-y-3.5">
        {skillGroups.map(group => (
          <div key={group.category}>
            <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-neutral-500 dark:text-neutral-400">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-2">
              {group.skills.map(skill => (
                <SkillPill key={skill.label} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Minimalist drag affordance */}
      <div className="relative mt-0.5 sm:mt-1 h-2 overflow-hidden">
        <div
          className={cn(
            "absolute left-0 top-1/2 h-px w-20 sm:w-24 -translate-y-1/2",
            "border-t border-dashed border-slate-300 dark:border-slate-600",
            "opacity-0 translate-x-0",
            "transition-all duration-300 ease-out",
            "group-hover:opacity-100 group-hover:translate-x-2 sm:group-hover:translate-x-3"
          )}
        />
      </div>
    </div>
  );
}

export default SkillsDraggable;
