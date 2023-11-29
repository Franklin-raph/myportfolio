import Project_card from "../project_card/Project_card";
import first from "./imgs/project1.jpg";
import second from "./imgs/project2.jpg";
import third from "./imgs/project3.jpg";

const Projects = () => {
  // date
  const projects = [
    {
      img: first,
      langs: ["jsx", "css", "javascript", "react", "tailwind css", "node js", "express js", "mongo db"],
      title: "E-Invoice",
      disc: "A Sass for recording sales and generating of receipts both in pdf format and image",
      link: "https://invoice-application-three.vercel.app/"
    },
    {
      img: second,
      langs: ["html", "css", "javascript", "owl carousel"],
      title: "Homyz",
      disc: "A landing page for a real estate website",
      link: "https://frank-real-estate.netlify.app"
    },
    {
      img: third,
      langs: ["jsx", "css", "javascript", "node.js", "express js", "mongo db"],
      title: "Class Monitor",
      disc: "A full stack application for taking down my students records, assignments and projects",
      link: "https://classmonitor.netlify.app/"
    },
  ];

  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div className=" flex justify-between items-center gap-5">
          {/* left */}
          <div data-aos="fade-down" className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-[#C778DD]">#</span>projects
            </div>
            <div className="line w-2/3 h-px bg-[#C778DD]"></div>
          </div>
          {/* right */}
          <div className=" text-white font-medium">
            <a href="">
              <span>View all ~~&gt;</span>
            </a>
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-wrap justify-between gap-4 my-12">
          {/* cards */}
          {projects.map(({ img, langs, title, disc, link }) => {
            return (
              <>
                <Project_card
                  img={img}
                  langs={langs}
                  title={title}
                  disc={disc}
                  link={link}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
