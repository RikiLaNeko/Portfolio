import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Head>
        <title>Chloé Mortreux - Portfolio</title>
      </Head>

      <header className="py-6 text-center">
        <h1 className="text-4xl font-bold">Chloé Mortreux</h1>
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
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "Bootstrap",
            "Java",
            "Spring",
            "NodeJS",
            "Angular",
            "Docker",
            "Git",
            "GitHub",
            "Android",
            "Bash",
            "C",
            "C++",
            "Tailwind",
            "Express",
            "Go",
            "Kotlin",
            "Linux",
            "Mariadb",
            "MongoDB",
            "Mysql",
            "PostgresSQL",
            "Next",
            "Ngix",
            "Qt",
            "React",
            ".NET",
            "Vuejs",
          ].map((skill) => (
            <li key={skill} className="bg-gray-800 p-3 rounded-lg text-center">
              {skill}
            </li>
          ))}
        </ul>
      </section>
      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold border-b pb-2 mb-6">Projets</h2>
        <ul>
          <li className="mb-4">
            Projet 1 - Analyse et conception d'une application
          </li>
          <li className="mb-4">Projet 2 - Développement Back avec Spring</li>
          <li className="mb-4">Projet 3 - Développement Front avec Angular</li>
          <li className="mb-4">
            Projet 4 - Mise en place des composants NoSQL
          </li>
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
            className="text-gray-400 text-2xl"
          >
            <FaGithub />
          </a>
          <a href="#" className="text-gray-400 text-2xl">
            {" "}
            {/* Ajouter le lien LinkedIn */}
            <FaLinkedin />
          </a>
        </div>
      </section>
    </div>
  );
}
