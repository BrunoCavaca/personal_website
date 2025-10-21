import React from "react";
import PageWrapper from "./components/PageWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Github } from "lucide-react";

export default function Experience() {
  return (
    <PageWrapper title="Experience">
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        This page looks rather empty right now... maybe you can help me fill this up!
      </p>
      {/* KCL x AWS */}
      <Card className="p-6 mb-6 shadow-md rounded-2xl bg-white dark:bg-gray-800">
        <CardContent>
          <h2 className="text-xl font-semibold mb-1">Project Manager & Software Developer @ KCL x AWS</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">October 2025 – Present</p>
          <p className="text-gray-700 dark:text-gray-200">
            Leading a collaborative project between a London Council (TBD) and AWS. Responsible for managing a diverse team,
             aligning efforts towards shared goals, maintaining high team morale, and coordinating meetings and communication.
             As the project is currently in its early stages, responsibilities continue to evolve as objectives are defined.
          </p>
        </CardContent>
      </Card>

      {/* KCL x NHS */}
      <Card className="p-6 mb-6 shadow-md rounded-2xl bg-white dark:bg-gray-800">
        <CardContent>
          <h2 className="text-xl font-semibold mb-1">Communications Lead & Software Developer @ KCL x NHS</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">January 2024 – May 2024</p>
          <p className="text-gray-700 dark:text-gray-200">
            Acted as a Communications Lead between a 9-person software development team and King’s Paediatric Liver Centre (NHS), 
            comprised of doctors, nurses and social workers.This entailed organising meetings, facilitating effective 
            collaboration, translating technical and clinical requirements, and ensuring smooth project communication 
            and delivery.Equally, I acted as a developer within this same project, developing key features such as 
            the ability to login/register and a fully-fledged streaming service. 
          </p>
            <div className="flex gap-4 justify-center">
                <a
                href={"https://github.com/lukasanader/Team-TODO/tree/main"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                >
                <Github size={18} /> GitHub
                </a>
            </div>
        </CardContent>
      </Card>


      {/* Tutor */}
      <Card className="p-6 mb-6 shadow-md rounded-2xl bg-white dark:bg-gray-800">
        <CardContent>
          <h2 className="text-xl font-semibold mb-1">Tutor</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">2025 – Present</p>
          <p className="text-gray-700 dark:text-gray-200">
            I tutor young individuals from the ground up in Computer Science,
            creating interactive resources to guide in the grasping of Python and general computing concepts. 
          </p>
            <div className="flex gap-4 justify-center">
                <a
                href={"https://github.com/BrunoCavaca/Teaching-Python"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                >
                <Github size={18} /> GitHub
                </a>
            </div>
        </CardContent>
      </Card>

      {/* White & Case LLP */}
      <Card className="p-6 mb-6 shadow-md rounded-2xl bg-white dark:bg-gray-800">
        <CardContent>
          <h2 className="text-xl font-semibold mb-1">Intern @ White & Case LLP</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">July 2019 – August 2019</p>
          <p className="text-gray-700 dark:text-gray-200">
            Assisted in and automated email groups between the library department across the
            company using Excel and Outlook, increasing efficiency of information delivery between
            the respective departments.
          </p>
        </CardContent>
      </Card>
    </PageWrapper>
  );
}
