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
};

const projects = [
  {
    title: "Projet 1",
    description: "Analyse et conception d'une application",
  },
  {
    title: "Projet 2",
    description: "Développement Back avec Spring",
  },
  {
    title: "Projet 3",
    description: "Développement Front avec Angular",
  },
  {
    title: "Projet 4",
    description: "Mise en place des composants NoSQL",
  },
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
];

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Head>
        <title>Chloé Mortreux - Portfolio</title>
      </Head>

      <header className="py-6 text-center">
        <h1 className="text-4xl font-bold text-indigo-500">Chloé Mortreux</h1>
        <p className="text-lg text-gray-400">
          Concepteur Développeur Full Stack - Java
        </p>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold border-b pb-2 mb-6">À propos</h2>
        <p>
          Étudiante chez DIGINAMIC, je prépare un titre RNCP Niveau 6 en
          développement Full Stack Java. Je suis à la recherche d’un contrat
          d’alternance à partir de février 2025.
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
          {projects.map(({ title, description, link, language }) => (
            <li
              key={title}
              className="bg-gray-800 p-3 rounded-lg text-center hover:bg-gray-700 transition-all"
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
              <p>{description}</p>
            </li>
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
            {/* Ajouter le lien LinkedIn */}
            <FaLinkedin />
          </a>
        </div>
      </section>
    </div>
  );
}
