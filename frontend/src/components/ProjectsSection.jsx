import React, { useState } from "react";

const projectData = [
  {
    id: 1,
    title: "Project Cyberscape",
    description: "AI-driven threat intelligence platform.",
    imageUrl:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    layout: "large",
    link: "#",
  },
  {
    id: 2,
    title: "Neuro-Link",
    description: "Next-gen brain-computer interface.",
    imageUrl:
      "https://images.unsplash.com/photo-1578496781985-9bdb9eaf5d06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    layout: "small",
    link: "#",
  },
  {
    id: 3,
    title: "Quantum Core",
    description: "Decentralized quantum computing network.",
    imageUrl:
      "https://images.unsplash.com/photo-1614369679743-5dcb5a3d4b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    layout: "small",
    link: "#",
  },
  {
    id: 4,
    title: "Data Haven",
    description: "Encrypted personal data vault.",
    imageUrl:
      "https://images.unsplash.com/photo-1581091870622-1e7b2b7ff84e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    layout: "small",
    link: "#",
  },
  {
    id: 5,
    title: "Project Chimera",
    description: "Genetic sequencing and modification suite.",
    imageUrl:
      "https://images.unsplash.com/photo-1629381357364-4e6b2a99fd56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    layout: "small",
    link: "#",
  },
  {
    id: 6,
    title: "Aurora Sync",
    description: "Cloud-native workflow automation tool.",
    imageUrl:
      "https://images.unsplash.com/photo-1581092339680-f2e1e6f2b35f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    layout: "small",
    link: "#",
  },
  {
    id: 7,
    title: "SkyNet AI",
    description: "Autonomous infrastructure management.",
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    layout: "large",
    link: "#",
  },
  {
    id: 8,
    title: "Nano Matrix",
    description: "Nanotech-powered medical diagnostics.",
    imageUrl:
      "https://images.unsplash.com/photo-1622543958533-ea0c1b7c57e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    layout: "small",
    link: "#",
  },
];

const ProjectCard = ({ project }) => {
  const { title, description, imageUrl, layout, link } = project;

  const layoutClasses = {
    large: "md:col-span-2 md:row-span-2",
    small: "md:col-span-1 md:row-span-1",
  };

  return (
    <a
      href={link}
      className={`
        group flex flex-col overflow-hidden rounded-2xl border-2 border-white/10 
        transition-all duration-300 hover:border-green-500/80 hover:shadow-2xl hover:shadow-green-500/20
        ${layoutClasses[layout] || "md:col-span-1 md:row-span-1"}
      `}
    >
      <div className="relative h-60 w-full overflow-hidden md:h-full">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="w-full bg-slate-800/70 p-6 backdrop-blur-md">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-1 text-green-300">{description}</p>
      </div>
    </a>
  );
};

const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const totalPages = Math.ceil(projectData.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = projectData.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  return (
    <section className="bg-[#18174A] py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-left">
          <div className="flex items-center gap-x-4">
            <h3 className="text-sm font-semibold text-slate-400 tracking-[0.2em] uppercase">
              OUR PROJECTS
            </h3>
            <div className="h-px flex-grow bg-slate-700"></div>
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-green-400">
            Turning Ideas Into Reality
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[450px]">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`rounded-md px-4 py-2 text-black font-medium transition-colors ${
              currentPage === 1
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            Previous
          </button>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`rounded-md px-4 py-2 text-black font-medium transition-colors ${
              currentPage === totalPages
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
