import { loader } from '../assets';

const Loader = ({title}) => (
  <div className='w-full-flex justify-center items-center flex-col '>
    <img src={loader} alt="loader" className='w-32 h-32 object-contain'></img>
    <h1 className='text-2xl font-bold text-white mt-2'>
      {title  || 'Loading...'}</h1>
  </div>
);

export default Loader;
