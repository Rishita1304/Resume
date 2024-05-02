import { FiLink } from 'react-icons/fi';

type ProjectCardProps = {
    title: string,
    url: string,
    description: string,
    stack: string,
};

const Projects = () => {

    const projects = [
        {
            title: "Quizmify - AI-based quiz app",
            url: "https://quizmify.vercel.app",
            stack: "Next.js, OpenAI, NextAuth, Prisma, OAuth",
            description: "It is an AI-powered quiz platform revolutionizing online learning. It offers a scalable, efficient, and engaging environment for creating and taking quizzes.",
        },
        {
            title: "ApnaSafar - Hotel Booking Website",
            url: "https://apna-safar.vercel.app",
            stack: "React.js, Multer, Node.js, Express.js, MongoDB",
            description: "It simplifies hotel booking with its intuitive interface and comprehensive listings. It aggregates offerings from various hotels and resorts, allowing users to seamlessly search, compare, and reserve accommodations.",
            
        },
        {
            title: "UpDriven - Carpooling platform ",
            url: "https://updriven.onrender.com",
            stack: "OAuth, Socket.io, React.js, Node.js",
            description: "It facilitates eco-friendly transportation by connecting drivers and passengers for shared rides. Say goodbye to traffic congestion and carbon emissions with this innovative carpooling solution.",
        },
        {
            title: "E-Shoppers - E-Commerce store",
            url: "https://ecom-fdtv.onrender.com",
            stack: "React.js, Redux, Node.js, MongoDB, Firebase",
            description: "It offers a seamless online shopping experience, featuring a diverse range of products and secure transaction capabilities. From electronics to fashion, customers can explore and purchase items with confidence.",
        }
    ];

    return (
        <section className='mb-5'>
            <h2 className='font-mono font-bold text-[color:var(--primary)]'>PROJECTS</h2>
            {
                projects.map(project =>
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        url={project.url}
                        description={project.description}
                        stack={project.stack}
                    />
                )
            }
        </section>
    );
}

const ProjectCard = ({ title, url, description,stack}: ProjectCardProps) => {
    return (
        <div className='mb-2'>
            <div className='flex gap-2'>

            <h3 className='font-medium'>{title}</h3>
            <a className='flex font-medium text-gray-600' href={url}>
                <FiLink className='my-auto mr-0.5 text-[color:var(--primary)]' />
                Visit 
            </a>
            </div>
            <ul className='ml-5 list-disc marker:text-gray-600'>
                <li className='text-gray-600'>{description}</li>
                <li className='text-gray-600'> Tech Stack: {stack}</li>
            </ul>
        </div>
    );
}

export default Projects;
