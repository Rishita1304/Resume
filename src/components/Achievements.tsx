const Achievements = () => {

    const achievements = [
        {
            title: "Achieved a Top 5 position in the ByteVerse Hackathon hosted by NIT Patna in 2023.",
            // description: "Asia's biggest hackathon conducted by MoE's Innovation Cell, developed a blockchain-based application to track farm produce, improving transparency in the supply chain."
        },
        {
            title: "Mentored and organized technical events, contributing to the growth and development of our college.",
            // description: "International hackathon hosted in collaboration with 20+ countries, created a chatbot for farmers to resolve their queries."
        }
    ];

    return (
        <>
            <h2 className='font-mono font-bold text-[color:var(--primary)]'>ACHIEVEMENTS</h2>
            <ul className='list-disc marker:text-gray-600 ml-5'>
                {
                    achievements.map(achievement =>
                        <li className='mb-1'> <h3 className='font-medium'>{achievement.title}</h3></li>
                    )
                }
            </ul>
        </>
    );
}

export default Achievements;
