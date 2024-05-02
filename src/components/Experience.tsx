import HorizontalCard from "./HorizontalCard";

const Experience = () => {
    const posres = [
        {
            position: "Project Coordinator",
            company: "Big Data Centre of Excellence",
            location: "Ghaziabad, Uttar Pradesh",
            duration: "September 2022 - Present",
            description: [
                "Worked with a team of four developers to build the official website of Big Data Center Of Excellence, streamlining the current processes.",
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
        "Developed an Assessment Platform serving over 500 students, utilizing socket programming for dynamic leaderboards, resulting in a 25% increase in user engagement.",
        "Implemented load balancing strategies to ensure 90% uptime, even during peak usage, providing a reliable exam experience."
    ],
    },
  ];

  return (
    <section className="mb-5">
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
