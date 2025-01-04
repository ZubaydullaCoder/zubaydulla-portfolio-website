"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { useTranslations } from "next-intl";
import { projectsData } from "@/lib/data";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const t = useTranslations("projects");

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{t("title")}</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project
              {...project}
              title={t(`projectsInfo.${project.id}.title`)}
              description={t(`projectsInfo.${project.id}.description`)}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
