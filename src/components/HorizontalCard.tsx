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
            <div className='flex py-2 md: justify-between py-0 '>
                <div>
                    <h3 className='font-medium'>{heading}</h3>
                    <div className='font-medium text-gray-600'>{subheading}</div>
                </div>
                <div className='text-right'>
                    <div className='font-medium text-gray-600 '>{location}</div>
                    <div className='font-medium text-gray-600'>{duration}</div>
                </div>
            </div>
            <ul className='list-disc marker:text-gray-600 ml-5 '>
                {description.map(item => <li className="text-sm text-gray-600 lg:text-base">{item}</li>)}
            </ul>
        </div>
    );
}

export default HorizontalCard;
