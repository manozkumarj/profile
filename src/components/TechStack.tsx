import html from './../assets/html5.svg';
import css from './../assets/css3.svg';
import js from './../assets/javascript.svg';
import ts from './../assets/typescript.svg';
import react from './../assets/react.svg';
import next from './../assets/next.webp';
import tailwindcss from './../assets/tailwindcss.svg';
import reactNative from './../assets/react-native-logo.webp';
import node from './../assets/nodejs.svg';
import express from './../assets/express.svg';
import postman from './../assets/postman.svg';
import bootstrap from './../assets/bootstrap.svg';
import redux from './../assets/redux.svg';
import sass from './../assets/sass.svg';
import mysql from './../assets/mysql.svg';
import mongodb from './../assets/mongodb.svg';
import heroku from './../assets/heroku.svg';
import git from './../assets/git.svg';
import firebase from './../assets/firebase.svg';
import prisma from './../assets/prisma-svgrepo-com.svg';
import postgreSQL from './../assets/postgreSQL.webp';
import docker from './../assets/docker.svg';
import aws from './../assets/aws.svg';
import python from './../assets/Python.svg';
import fastAPI from './../assets/FastAPI.svg';
import figma from './../assets/Figma.svg';
import jira from './../assets/Jira.svg';
import gitHubActions from './../assets/GitHubActions.svg';
import jest from './../assets/Jest.svg';
import cypress from './../assets/Cypress.svg';
import redis from './../assets/Redis.svg';
import angular from './../assets/Angular.svg';
import toast from "react-hot-toast";

const techsAndTools = [
    {
        name: "HTML5",
        icon: <img src={html} alt="HTML5" className="w-8 h-8" />
    },
    {
        name: "CSS3",
        icon: <img src={css} alt="CSS3" className="w-8 h-8" />
    },
    {
        name: "JavaScript",
        icon: <img src={js} alt="JavaScript" className="w-8 h-8" />
    },
    {
        name: "TypeScript",
        icon: <img src={ts} alt="TypeScript" className="w-8 h-8" />
    },
    {
        name: "React",
        icon: <img src={react} alt="React" className="w-8 h-8" />
    },
    {
        name: "Node.js",
        icon: <img src={node} alt="Node.js" className="w-8 h-8" />
    },
    {
        name: "Python",
        icon: <img src={python} alt="Python" className="w-8 h-8" />
    },
    {
        name: "FastAPI",
        icon: <img src={fastAPI} alt="FastAPI" className="w-8 h-8" />
    },
    {
        name: "Docker",
        icon: <img src={docker} alt="Docker" className="w-8 h-8" />
    },
    {
        name: "Git",
        icon: <img src={git} alt="Git" className="w-8 h-8" />
    },
    {
        name: "Figma",
        icon: <img src={figma} alt="Figma" className="w-8 h-8" />
    },
    {
        name: "Express",
        icon: <img src={express} alt="Express" className="w-8 h-8" />
    },
    {
        name: "Next.js",
        icon: <img src={next} alt="Next.js" className="w-8 h-8" />
    },
    {
        name: "Tailwind CSS",
        icon: <img src={tailwindcss} alt="Tailwind CSS" className="w-8 h-8" />
    },
    {
        name: "React Native",
        icon: <img src={reactNative} alt="React Native" className="w-8 h-8" />
    },
    {
        name: "Postman",
        icon: <img src={postman} alt="Postman" className="w-8 h-8" />
    },
    {
        name: "Bootstrap",
        icon: <img src={bootstrap} alt="Bootstrap" className="w-8 h-8" />
    },
    {
        name: "Redux",
        icon: <img src={redux} alt="Redux" className="w-8 h-8" />
    },
    {
        name: "Sass",
        icon: <img src={sass} alt="Sass" className="w-8 h-8" />
    },
    {
        name: "MySQL",
        icon: <img src={mysql} alt="MySQL" className="w-8 h-8" />
    },
    {
        name: "PostgreSQL",
        icon: <img src={postgreSQL} alt="PostgreSQL" className="w-8 h-8" />
    },
    {
        name: "MongoDB",
        icon: <img src={mongodb} alt="MongoDB" className="w-8 h-8" />
    },
    {
        name: "Prisma",
        icon: <img src={prisma} alt="Prisma" className="w-8 h-8" />
    },
    {
        name: "Firebase",
        icon: <img src={firebase} alt="Firebase" className="w-8 h-8" />
    },
    {
        name: "Heroku",
        icon: <img src={heroku} alt="Heroku" className="w-8 h-8" />
    },
    {
        name: "AWS",
        icon: <img src={aws} alt="AWS" className="w-8 h-8" />
    },
    {
        name: "Jira",
        icon: <img src={jira} alt="Jira" className="w-8 h-8" />
    },
    {
        name: "GitHub Actions",
        icon: <img src={gitHubActions} alt="GitHub Actions" className="w-8 h-8" />
    },
    {
        name: "Jest",
        icon: <img src={jest} alt="Jest" className="w-8 h-8" />
    },
    {
        name: "Cypress",
        icon: <img src={cypress} alt="Cypress" className="w-8 h-8" />
    },
    {
        name: "Redis",
        icon: <img src={redis} alt="Redis" className="w-8 h-8" />
    },
    {
        name: "Angular",
        icon: <img src={angular} alt="Angular" className="w-8 h-8" />
    },
];

const notify = (_title: string) => toast.success(`${_title}`);

const TechStack = () => {
    return (
        <section className="flex-1 px-6 py-12 pt-4 lg:px-12" id="tech-stack">
            <div className=" flex items-center justify-center max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                    Technologies and Tools
                </h2>
            </div>
            <div className="w-full px-6 py-6 lg:px-12 relative z-50">
                <p className="max-w-7xl mx-auto flex items-center justify-between text-gray-600 dark:text-gray-400">
                    Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.
                </p>
                <div className="max-w-7xl mx-auto flex items-center justify-between text-gray-600 dark:text-gray-400 mt-8">
                    <div className="w-full grid grid-cols-5 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-4 gap-6">
                        {techsAndTools.map((tech) => (
                            <div key={tech.name} onClick={() => notify(tech.name)} className="flex gap-5 items-center max-sm:justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:scale-105 transform transition-transform duration-200 border !border-gray-100 dark:!border-gray-200 cursor-pointer">
                                {tech.icon}
                                <span className="text-sm text-gray-700 dark:text-gray-300">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
