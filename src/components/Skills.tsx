const Skills = () => {
  const languages = ["C/C++", "JavaScript", "Typescript", "Python", "Java"];
  const lib = [
    "Next.js",
    "React.js",
    "Redux",
    "React Native",
    "Node.js",
    "Express.js",
  ];
  const tools = [
    "VS Code",
    "Android Studio",
    "Postman",
    "Git",
    "Vercel",
    "Render",
  ];
  const db = ["MongoDB", "MySQL", "Firebase", "PostgreSQL"];

  return (
    <section className="mb-5 lg:mb-2.5">
      <h2 className="font-mono font-bold text-[color:var(--primary)]">
        SKILLS
      </h2>
      <ul className="flex flex-wrap">
        <div className="flex items-center mr-3 ">Languages:</div>{" "}
        {languages.map((language) => (
          <li
            key={language}
            className="text-sm px-2 py-1 mt-1 mr-1 bg-gray-200 rounded-md"
          >
            {language}
          </li>
        ))}
      </ul>
      <ul className="flex flex-wrap">
        <div className="flex items-center mr-3">Lib/Frameworks:</div>{" "}
        {lib.map((l) => (
          <li
            key={l}
            className="text-sm px-2 py-1 mt-1 mr-1 bg-gray-200 rounded-md"
          >
            {l}
          </li>
        ))}
      </ul>
      <ul className="flex flex-wrap">
        <div className="flex items-center mr-3">Developer Tools:</div>{" "}
        {tools.map((t) => (
          <li
            key={t}
            className="text-sm px-2 py-1 mt-1 mr-1 bg-gray-200 rounded-md"
          >
            {t}
          </li>
        ))}
      </ul>
      <ul className="flex flex-wrap">
        <div className="flex items-center mr-3">Databases:</div>{" "}
        {db.map((d) => (
          <li
            key={d}
            className="text-sm px-2 py-1 mt-1 mr-1 bg-gray-200 rounded-md"
          >
            {d}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
