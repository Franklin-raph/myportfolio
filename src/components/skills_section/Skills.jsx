const Skills = () => {
  const skills = [
    {
      title: "Languages",
      languages: ["HTML", "CSS", "JavaScript", "Python", "Php", "Arduino"],
    },
    { title: "Databases", languages: ["PostgreSQL", "Mongo Db"] },
    {
      title: "Tools",
      languages: [
        "VSCode",
        "Figma",
        "Adobe-Photoshop",
        "Adobe-Illustrator",
        "Git-Bash",
        "Font Awesome",
      ],
    },
    {
      title: "Other",
      languages: ["EJS", "SCSS", "REDUX", "REDUX-TOOL-KIT"],
    },
    {
      title: "Frameworks",
      languages: [
        "React",
        "Bootstrap",
        "Tailwind",
        "Material-Ui",
        "Express.js",
      ],
    },
  ];
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div className=" mb-10">
          <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-[#C778DD]">#</span>skills
            </div>
            <div className="line w-1/3 h-px bg-[#C778DD]"></div>
          </div>
        </div>
        {/* bottom */}
        <div className=" flex flex-wrap gap-10 justify-between items-center text-white">
          {/* left */}
          <div className="mx-auto">
            <img className=" w-full mx-auto" src={require("./imgs/shapes.png")} alt="" />
          </div>
          {/* right & mapping */}
          <div className=" mx-auto flex justify-around md:justify-end flex-wrap w-10/12 md:w-1/2 gap-4">
            {skills.map(({ title, languages }) => {
              return (
                <>
                  <div className="w-[90%] sm:w-[45%] lg:w-[30%] border border-[#ABB2BF]">
                    <div className=" p-2">
                      <h2 className=" font-semibold">{title}</h2>
                    </div>
                    <div className=" flex gap-2 border-t border-[#ABB2BF] flex-wrap p-2 text-[#ABB2BF]">
                      {languages.map((e) => {
                        return <span>{e}</span>;
                      })}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
