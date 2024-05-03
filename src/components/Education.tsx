import HorizontalCard from "./HorizontalCard";

const Education = () => {

    const education = [
        {
            institution: "Dr. A.P.J. Abdul Kalam Technical University",
            degree: "Bachelor of Technology, Computer Science",
            location: "Ghaziabad, Uttar Pradesh",
            duration: "November 2021 - July 2025",
            description: [
                "Current SGPA (Avg.) - 8.2",
                "Courses: Data Structures, Algorithms, DBMS, OS, Software Engineering, Project Management",
            ]
        },
        {
            institution: "St. Patrick's Sr. Sec. School",
            degree: "Senior Secondary - Intermediate",
            location: "Jaunpur, Uttar Pradesh",
            duration: "March 2019 - March 2020",
            description: [
                "Percentage - 90.2%",
                "Active member of Discipline Committee and Dance club"
            ]
        }
    ];

    return (
        <section className='mb-5 lg:mb-2.5'>
            <h2 className='font-mono font-bold text-[color:var(--primary)]'>EDUCATION</h2>
            {
                education.map(edu =>
                    <HorizontalCard
                        heading={edu.institution}
                        subheading={edu.degree}
                        location={edu.location}
                        duration={edu.duration}
                        description={edu.description}
                    />
                )
            }
        </section>
    );
}

export default Education;
