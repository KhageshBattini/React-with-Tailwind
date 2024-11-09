import React from "react";
import { skills } from "../data";

const Skills = () => {
  return (
    <section className="py-20 algin-element" id="skills">
      <div className="border-b border-gray-200 pb-5">
        <h2 className="text-3xl font-medium tracking-wider capitalize">
          Tech Lover
        </h2>
      </div>
      <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => {
          const { id, title, icon, text } = skill;
          return (
            <article key={id}>
              <span>{icon}</span>
              <h4 className="mt-6 font-bold">{title}</h4>
              <p className="mt-2 text-slate-500">{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
