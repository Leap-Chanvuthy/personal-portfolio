import {FaFigma} from 'react-icons/fa';

const ServiceCard = ({icon , title , body}) =>{
    return (
        <div className="w-full bg-secondary_light p-5 rounded-lg">
            <div className='flex flex-col gap-5 items-start'>
                <FaFigma className='font-extrabold text-2xl text-primary' />
                <h2 className='font-bold text-lg'>{title || 'Title for service card'}</h2>
                <p className='text-sm'>{body || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat id ligula efficitur facilisis. Donec euismod, nisi vel consectetur interdum, nisl nisi cursus nunc, eget tincidunt nunc nisl eget nunc.'}</p>
            </div>
        </div>
    )
}


export default ServiceCard;