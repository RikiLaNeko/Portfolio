import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const techLinks = {
  HTML: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  CSS: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  TypeScript: "https://www.typescriptlang.org/docs/",
  Bootstrap: "https://getbootstrap.com/",
  Java: "https://docs.oracle.com/en/java/",
  Spring: "https://spring.io/",
  NodeJS: "https://nodejs.org/en/docs/",
  Angular: "https://angular.io/docs",
  Docker: "https://docs.docker.com/",
  Git: "https://git-scm.com/doc",
  GitHub: "https://docs.github.com/en/github",
  Android: "https://developer.android.com/docs",
  Bash: "https://www.gnu.org/software/bash/manual/",
  C: "https://en.cppreference.com/w/c",
  "C++": "https://en.cppreference.com/w/cpp",
  Tailwind: "https://tailwindcss.com/docs",
  Express: "https://expressjs.com/",
  Go: "https://golang.org/doc/",
  Kotlin: "https://kotlinlang.org/docs/home.html",
  Linux: "https://www.kernel.org/doc/html/latest/",
  Mariadb: "https://mariadb.com/kb/en/",
  MongoDB: "https://docs.mongodb.com/",
  Mysql: "https://dev.mysql.com/doc/",
  PostgresSQL: "https://www.postgresql.org/docs/",
  Next: "https://nextjs.org/docs",
  Nginx: "https://nginx.org/en/docs/",
  Qt: "https://doc.qt.io/",
  React: "https://reactjs.org/docs/",
  ".NET": "https://learn.microsoft.com/en-us/dotnet/",
  Vuejs: "https://vuejs.org/v2/guide/",
  Svelte: "https://svelte.dev/docs",
};

const projects = [
  {
    title: "NixPKGManager",
    description: "Gestionnaire de paquets pour NixOS codé en Rust",
    link: "https://github.com/RikiLaNeko/NixPKGManager",
  },
  {
    title: "NekoLang",
    description:
      "NekoLang est un langage de programmation simple et interprété, inspiré par la nature enjouée des chats. Il est conçu pour être facile à apprendre et amusant à utiliser. Codé en C",
    link: "https://github.com/RikiLaNeko/NekoLang",
  },
  {
    title: "NekoIDE",
    description: "NekoIDE est un IDE pour NekoLang codé en C++",
    link: "https://github.com/RikiLaNeko/NekoIDE",
  },
  {
    title: "SQlite Clone",
    description: "SQlite Clone est un clone de SQlite codé en C",
    link: "https://github.com/RikiLaNeko/sqlite_clone",
  },
  {
    title: "Dockerwebui",
    description:
      "Interface web pour Docker codée en Go pour le backend et VueJS pour le frontend",
    link: "https://github.com/RikiLaNeko/dockerwebui",
  },
];

const ProjectCard = ({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link?: string;
}) => (
  <li className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-all mb-6">
    <h3 className="text-xl font-semibold text-indigo-400">{title}</h3>
    <p className="text-gray-400 mt-2">{description}</p>
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 mt-4 inline-block"
      >
        Voir sur GitHub
      </a>
    )}
  </li>
);

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Head>
        <title>Chloé Mortreux - Portfolio</title>
      </Head>

      <header className="py-6 text-center">
        <img
          src="/photo/Photo.jpg"
          alt="Chloé Mortreux"
          className="w-32 h-32 rounded-full mx-auto"
        />
        <h1 className="text-4xl font-bold text-indigo-500">Chloé Mortreux</h1>
        <p className="text-lg text-gray-400">
          Concepteur Développeur Full Stack - Java
        </p>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold border-b pb-2 mb-6">À propos</h2>
        <p>
          <strong>Passion pour le développement</strong>
          <br />
          Depuis toujours, je suis passionnée par l'informatique et le
          développement. J’aime explorer de nouvelles technologies et relever
          des défis techniques, que ce soit en programmation système,
          développement web ou encore en création d'outils pour optimiser mon
          environnement de travail.
        </p>
        <br />
        <p>
          <strong>Expérience et compétences</strong>
          <br />
          J'ai travaillé sur divers projets personnels et exploré plusieurs
          langages et frameworks. J’ai notamment conçu <strong>NekoLang</strong>
          , un langage de programmation inspiré de mon amour des chats et des
          langages interprétés.
        </p>
        <br />
        <p>
          Mes compétences couvrent le{" "}
          <strong>développement frontend et backend</strong>, la gestion de
          serveurs et quelques bases en cybersécurité. Je maîtrise des langages
          comme{" "}
          <strong>Java, C, C++, Rust, JavaScript, TypeScript et C#</strong>,
          ainsi que des frameworks tels que{" "}
          <strong>Spring, React, Next.js et ASP.Net</strong>.
        </p>
        <br />
        <p>
          <strong>Objectif professionnel</strong>
          <br />
          Actuellement en formation pour un{" "}
          <strong>
            titre RNCP Niveau 6 en développement Full Stack Java
          </strong>{" "}
          chez <strong>DIGINAMIC</strong>, je recherche une{" "}
          <strong>alternance à partir de février 2025</strong>. Mon objectif est
          d'intégrer une entreprise où je pourrai mettre à profit mes
          compétences tout en continuant à évoluer en tant que{" "}
          <strong>Conceptrice Développeuse Full Stack</strong>.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold border-b pb-2 mb-6">
          Compétences
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(techLinks).map(([tech, link]) => (
            <li
              key={tech}
              className="bg-gray-800 p-3 rounded-lg text-center hover:bg-gray-700 transition-all"
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                {tech}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold border-b pb-2 mb-6">Projets</h2>
        <ul>
          {projects.map(({ title, description, link }) => (
            <ProjectCard
              key={title}
              title={title}
              description={description}
              link={link}
            />
          ))}
        </ul>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold border-b pb-2 mb-6">Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:chloe.mortreux@proton.me" className="text-blue-400">
            chloe.mortreux@proton.me
          </a>
        </p>
        <p>Localisation: Toulouse</p>
        <div className="flex space-x-4 mt-4">
          <a
            href="https://github.com/RikiLaNeko"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-2xl hover:text-white"
          >
            <FaGithub />
          </a>
          <a href="#" className="text-gray-400 text-2xl hover:text-white">
            <FaLinkedin />
          </a>
        </div>
      </section>
    </div>
  );
}
