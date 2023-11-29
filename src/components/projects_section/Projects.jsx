import Project_card from "../project_card/Project_card";
import first from "./imgs/project1.jpg";
import second from "./imgs/project2.jpg";
import third from "./imgs/project3.jpg";
import forth from "./imgs/project4.jpg";
import fifth from "./imgs/project5.jpg";
import sixth from "./imgs/project6.jpg";

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
    {
      img: forth,
      langs: ["jsx", "css", "javascript", "node.js", "express js", "mongo db"],
      title: "Elx Academy",
      disc: "A full stack application for registering students who wants to learn tech skills",
      link: "https://elx-academy.netlify.app/"
    },
    {
      img: fifth,
      langs: ["jsx", "css", "javascript", "node.js", "express js", "mongo db"],
      title: "My Students Records",
      disc: "A full stack application for taking down my students records to keep track of their training period",
      link: "https://mystudentsrecords.netlify.app/"
    },
    {
      img: sixth,
      langs: ["jsx", "css", "javascript", "node.js", "express js"],
      title: "Frank AI",
      disc: "A clone of ChatGpt making use of Open AI's API for the development.",
      link: "https://frankai.netlify.app"
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
