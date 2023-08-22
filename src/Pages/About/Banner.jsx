import banner from '../../assets/banner/about1.webp';

const Banner = () => {
    return (
        <div className='bg-cover bg-center bg-no-repeat h-80' style={{ backgroundImage: `url(${banner})` }}>
            <div className='flex justify-center items-center h-full bg-black bg-opacity-50'>
                <h1 className='text-white text-3xl font-semibold'>About Us</h1>
            </div>
        </div>
    );
};

export default Banner;





