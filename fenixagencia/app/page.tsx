import Image from "next/image";

let array = [
  {
    id: 1,
    name: "Producto 1",
    photo: "https://www.laststicker.com/i/cards/2428/1.jpg",
    description: "Descripción del Producto 1",
    price: "$10.00",
    services: ["Servicio A", "Servicio B"]
  },
  {
    id: 2,
    name: "Producto 2",
    photo: "https://www.laststicker.com/i/cards/2428/2.jpg",
    description: "Descripción del Producto 2",
    price: "$15.00",
    services: ["Servicio C", "Servicio D"]
  },
  {
    id: 3,
    name: "Producto 3",
    photo: "https://www.laststicker.com/i/cards/2428/3.jpg",
    description: "Descripción del Producto 3",
    price: "$20.00",
    services: ["Servicio E", "Servicio F"]
  },
  {
    id: 4,
    name: "Producto 4",
    photo: "https://www.laststicker.com/i/cards/2428/4.jpg",
    description: "Descripción del Producto 4",
    price: "$25.00",
    services: ["Servicio G", "Servicio H"]
  },
  {
    id: 5,
    name: "Producto 5",
    photo: "https://www.laststicker.com/i/cards/2428/5.jpg",
    description: "Descripción del Producto 5",
    price: "$30.00",
    services: ["Servicio I", "Servicio J"]
  },
  {
    id: 6,
    name: "Producto 6",
    photo: "https://www.laststicker.com/i/cards/2428/6.jpg",
    description: "Descripción del Producto 6",
    price: "$35.00",
    services: ["Servicio K", "Servicio L"]
  },
  {
    id: 7,
    name: "Producto 7",
    photo: "https://www.laststicker.com/i/cards/2428/7.jpg",
    description: "Descripción del Producto 7",
    price: "$40.00",
    services: ["Servicio M", "Servicio N"]
  },
  {
    id: 8,
    name: "Producto 8",
    photo: "https://www.laststicker.com/i/cards/2428/8.jpg",
    description: "Descripción del Producto 8",
    price: "$45.00",
    services: ["Servicio O", "Servicio P"]
  },
  {
    id: 9,
    name: "Producto 9",
    photo: "https://www.laststicker.com/i/cards/2428/9.jpg",
    description: "Descripción del Producto 9",
    price: "$50.00",
    services: ["Servicio Q", "Servicio R"]
  },
  {
    id: 10,
    name: "Producto 10",
    photo: "https://www.laststicker.com/i/cards/2428/10.jpg",
    description: "Descripción del Producto 10",
    price: "$55.00",
    services: ["Servicio S", "Servicio T"]
  },
  {
    id: 11,
    name: "Producto 11",
    photo: "https://www.laststicker.com/i/cards/2428/11.jpg",
    description: "Descripción del Producto 11",
    price: "$60.00",
    services: ["Servicio U", "Servicio V"]
  },
  {
    id: 12,
    name: "Producto 12",
    photo: "https://www.laststicker.com/i/cards/2428/12.jpg",
    description: "Descripción del Producto 12",
    price: "$65.00",
    services: ["Servicio W", "Servicio X"]
  },
  {
    id: 13,
    name: "Producto 13",
    photo: "https://www.laststicker.com/i/cards/2428/13.jpg",
    description: "Descripción del Producto 13",
    price: "$70.00",
    services: ["Servicio Y", "Servicio Z"]
  },
  {
    id: 14,
    name: "Producto 14",
    photo: "https://www.laststicker.com/i/cards/2428/14.jpg",
    description: "Descripción del Producto 14",
    price: "$75.00",
    services: ["Servicio AA", "Servicio BB"]
  },
  {
    id: 15,
    name: "Producto 15",
    photo: "https://www.laststicker.com/i/cards/2428/15.jpg",
    description: "Descripción del Producto 15",
    price: "$80.00",
    services: ["Servicio CC", "Servicio DD"]
  }
];

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">Bienvenido a Mi Sitio</h1>
    </div>
  );
};

export default HomePage;

// <div className="min-h-screen flex flex-col bg-black text-white">
    //   <header className="p-4 bg-gray-800 flex justify-between items-center">
    //     <div className="flex items-center space-x-4">
    //       <a href="/" className="flex items-center space-x-2">
    //         <Image
    //           src="/vercel.svg"
    //           alt="Logo"
    //           width={40}
    //           height={40}
    //         />
    //         <span className="text-2xl font-bold text-white" >INDUCOR</span>
    //       </a>
    //     </div>
    //     <div className="flex items-center space-x-2">
    //       <input
    //         type="text"
    //         placeholder="Buscar..."
    //         className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    //       />
    //       <button className="px-4 py-2 bg-blue-600 rounded text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
    //         Buscar
    //       </button>
    //     </div>
    //   </header>
    //   <main className="bg-black flex-grow p-4">
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    //       {array.map(product => (
    //         <div key={product.id} className="bg-gray-800 p-4 rounded-lg">
    //           <figure className="mb-4">
    //             <img src={product.photo} alt={product.name} className="w-full h-auto rounded-lg" />
    //           </figure>
    //           <div>
    //             <h2 className="text-xl font-bold mb-2">{product.name}</h2>
    //             <p className="text-lg mb-2">{product.price}</p>
    //             <p className="text-sm text-gray-400">{product.services.join(", ")}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </main>
    // </div>
