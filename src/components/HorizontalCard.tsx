type HorizontalCardProps = {
    heading: string,
    subheading: string,
    location: string,
    duration: string,
    description: string[]
};

const HorizontalCard = ({ heading, subheading, location, duration, description }: HorizontalCardProps) => {
    return (
        <div className='mb-3'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='font-medium'>{heading}</h3>
                    <div className='font-medium text-gray-600'>{subheading}</div>
                </div>
                <div className='text-right'>
                    <div className='font-medium text-gray-600'>{location}</div>
                    <div className='font-medium text-gray-600'>{duration}</div>
                </div>
            </div>
            <ul className='list-disc marker:text-gray-600 ml-5 '>
                {description.map(item => <li className="text-gray-600">{item}</li>)}
            </ul>
        </div>
    );
}

export default HorizontalCard;
