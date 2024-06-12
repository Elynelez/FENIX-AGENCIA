"use client";

import { useState } from 'react';
import { IoIosHeart, IoLogoWhatsapp, IoIosStar } from 'react-icons/io';
import girls from '../../girls.json'

type Girl = {
  id: number;
  name: string;
  photo: string;
  description: string;
  price: string;
  services: string[];
};

const ProductPage = ({ params }: {
  params: { id: string }
}) => {
  const data = girls.find((obj: Girl) => obj.id.toString() === params.id);

  if (!data) {
    return <div>perra no encontranda</div>;
  }

  const [activeImg, setActiveImage] = useState(data.photo[0])

  const [amount, setAmount] = useState(1);

  return (
    <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center m-20'>
      <div className='flex flex-col gap-6 lg:w-2/4'>
        <img src={activeImg} alt="" className='w-50 h-full aspect-square object-cover rounded-xl' />
        <div className='flex flex-row justify-between h-24'>
          {data.photo.map((img) => (
            <img src={img} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(img)} />
          ))}
        </div>
      </div>
      {/* ABOUT */}
      <div className='flex flex-col gap-4 lg:w-2/4'>
        <div>
          <span className=' text-violet-600 font-semibold'>{data.services.join(", ")}</span>
          <h1 className='text-3xl font-bold'>{data.name}</h1>
        </div>
        <p className='text-gray-700'>
          {data.description}
        </p>
        <h6 className='text-2xl font-semibold'>{data.price}<span>/hora</span></h6>
        <div className='flex flex-row items-center gap-10'>
          <button className='bg-violet-800 text-white font-semibold py-4 px-16 rounded-xl h-full' onClick={() => setAmount((prev) => prev + 1)}><IoIosHeart /></button>
          <button className='bg-green-800 text-white font-semibold py-4 px-16 rounded-xl h-full' onClick={() => setAmount((prev) => prev + 1)}><IoLogoWhatsapp /></button>
          <button className='bg-gray-800 text-white font-semibold py-4 px-16 rounded-xl h-full' onClick={() => setAmount((prev) => prev + 1)}><IoIosStar /></button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
