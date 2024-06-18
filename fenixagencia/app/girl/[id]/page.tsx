"use client";

import { useState, useEffect } from 'react';
import { IoIosHeart, IoLogoWhatsapp, IoIosStar } from 'react-icons/io';
import Modal from 'react-modal';
import girls from '../../girls.json'
import { useLocalStorage } from '@/app/components/LocalStorage/LocalStorage';
import Rating from '@mui/material/Rating';

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

  const [activeImg, setActiveImage] = useState(data.photo[0]);
  const [favIcon, setFavIcon] = useLocalStorage<Girl[]>("fav", []);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const addGirlToFavorites = (girl: Girl) => {
    if (!favIcon.some((item) => item.id === girl.id)) {
      setFavIcon((prevFavIcon) => [...prevFavIcon, girl]);
    }
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

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
          <button className='bg-violet-800 text-white font-semibold py-4 px-16 rounded-xl h-full' onClick={() => { addGirlToFavorites(data) }}><IoIosHeart /></button>
          <a href={"https://api.whatsapp.com/send?phone=573207474085&text=" + "hola sapa perra"} target="_blank"><button className='bg-green-800 text-white font-semibold py-4 px-16 rounded-xl h-full' ><IoLogoWhatsapp /></button></a>
          <button className='bg-gray-800 text-white font-semibold py-4 px-16 rounded-xl h-full' onClick={openModal}><IoIosStar /></button>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <button className='relative top-[-30px] left-[400px]' onClick={closeModal}>X</button>
        <div>
          <h2 className='relative top-[-60px] right-10 text-2xl font-bold mb-4'>Comentarios</h2>
          <textarea
            placeholder='Escribe tu comentario...'
            className='border border-gray-300 p-2 rounded-md w-full'
          ></textarea>
          <button className='bg-blue-600 text-white py-2 px-2 rounded-md'>Añadir Comentario</button>
          <Rating
            name="half-rating"
            defaultValue={5}
            precision={0.5}
          />
          <div className='flex flex-col gap-4 limit-group-form'>
            {data.comments.map((comment, index) => (
              <div key={index} className=' p-4 rounded-md'>
                {comment.description}
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ProductPage;
