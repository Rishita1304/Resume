import HorizontalCard from "./HorizontalCard";

const Experience = () => {
    const posres = [
        {
            position: "Project Coordinator",
            company: "Big Data Centre of Excellence",
            location: "Ghaziabad, Uttar Pradesh",
            duration: "September 2022 - Present",
            description: [
                "Collaborated with a team of four developers to develop and launch the official website for the Big Data Center Of Excellence, enhancing operational efficiency.",
              "Planned and organized more than six events, including workshops, hackathons, and coding contests for college students, with an average of 250 participants per event.",
            //   "Led a team of 6 developers to build a registrar portal and TnP cell portal for a college, streamlining the current processes.",
            ],
          },
    ]
  const experiences = [
    {
      position: "Full-Stack Developer Intern",
      company: "Janatig Pvt. Ltd.",
      location: "Remote, Uttar Pradesh",
      duration: "August 2023 - October 2023",
      description: [
        "Developed an Assessment Platform for 500+ students using socket programming, achieving a 25% increase in user engagement.",
        "Implemented load balancing strategies ensuring 90% uptime during peak usage, ensuring reliable exam experiences."
    ],
    },
  ];

  return (
    <section className="mb-5 lg:mb-2.5">
      <h2 className="font-mono font-bold text-[color:var(--primary)]">POSITION OF RESPONSIBILITY</h2>
      {posres.map((pos) => (
        <HorizontalCard
          heading={pos.position}
          subheading={pos.company}
          location={pos.location}
          duration={pos.duration}
          description={pos.description}
        />
      ))}
      <h2 className="font-mono font-bold text-[color:var(--primary)]">EXPERIENCE</h2>
      {experiences.map((experience) => (
        <HorizontalCard
          heading={experience.position}
          subheading={experience.company}
          location={experience.location}
          duration={experience.duration}
          description={experience.description}
        />
      ))}
    </section>
  );
};

export default Experience;
