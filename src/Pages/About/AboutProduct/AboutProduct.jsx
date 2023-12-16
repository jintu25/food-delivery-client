import second from '../../../assets/about/about_6_2.png'
import first from '../../../assets/about/about_6_1.png'
import { BsCheck } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './aboutProdcut.css'
const AboutProduct = () => {
  return (
   <div className="m-auto max-w-screen-xl py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
        <div className='img-box6'>
          <div className='img1'>
            <img src={first} alt="" />
          </div>
          <div className='img2'>
            <img src={second} alt="" />
          </div>
        </div>
        <div className='mx-4 md:mx-0'>
          <h3 className='text-[#eb0029] font-[cursive] text-[20px] font-semibold'>About Company</h3>
          <h1 className='text-[#010f1c] font-bold text-4xl mt-4 mb-10 font-[rubik]'>We Make Sure Quality & <br/> Healthy Foods</h1>
          <p className='text-lg font-medium text-slate-500 mb-6'>Conveys the commitment of the restaurant to prioritize both quality And health in their food offerings. It implies that the recipe.</p>
          <div className='checklist '>
          <ul className='grid grid-cols-2 gap-6 mb-5'>
            <li className='flex items-center text-xl font-semibold text-slate-900'><span className='text-3xl font-bold mr-2 text-[#eb0029]'><BsCheck></BsCheck></span> Food Items management</li>
            <li className='flex items-center text-xl font-semibold text-slate-900'><span className='text-3xl font-bold mr-2 text-[#eb0029]'><BsCheck></BsCheck></span> Food Items management</li>
            <li className='flex items-center text-xl font-semibold text-slate-900'><span className='text-3xl font-bold mr-2 text-[#eb0029]'><BsCheck></BsCheck></span> Food Items management</li>
            <li className='flex items-center text-xl font-semibold text-slate-900'><span className='text-3xl font-bold mr-2 text-[#eb0029]'><BsCheck></BsCheck></span> Food Items management</li>
          </ul>
          </div>
          <button ><Link className='det-btn' to='/contact'>See Details</Link></button>
        </div>
      </div>
   </div>
  );
};

export default AboutProduct;
