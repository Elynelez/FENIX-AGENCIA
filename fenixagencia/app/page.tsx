import Image from "next/image";

const array = [
  {
    id: 1,
    name: "mujer 1",
    photo: "https://www.laststicker.com/i/cards/2428/1.jpg",
    description: "Descripción del mujer 1",
    price: "$10.00",
    services: ["Servicio A", "Servicio B"]
  },
  {
    id: 2,
    name: "mujer 2",
    photo: "https://www.laststicker.com/i/cards/2428/2.jpg",
    description: "Descripción del mujer 2",
    price: "$15.00",
    services: ["Servicio C", "Servicio D"]
  },
  {
    id: 3,
    name: "mujer 3",
    photo: "https://www.laststicker.com/i/cards/2428/3.jpg",
    description: "Descripción del mujer 3",
    price: "$20.00",
    services: ["Servicio E", "Servicio F"]
  },
  {
    id: 4,
    name: "mujer 4",
    photo: "https://www.laststicker.com/i/cards/2428/4.jpg",
    description: "Descripción del mujer 4",
    price: "$25.00",
    services: ["Servicio G", "Servicio H"]
  },
  {
    id: 5,
    name: "mujer 5",
    photo: "https://www.laststicker.com/i/cards/2428/5.jpg",
    description: "Descripción del mujer 5",
    price: "$30.00",
    services: ["Servicio I", "Servicio J"]
  },
  {
    id: 6,
    name: "mujer 6",
    photo: "https://www.laststicker.com/i/cards/2428/6.jpg",
    description: "Descripción del mujer 6",
    price: "$35.00",
    services: ["Servicio K", "Servicio L"]
  },
  {
    id: 7,
    name: "mujer 7",
    photo: "https://www.laststicker.com/i/cards/2428/7.jpg",
    description: "Descripción del mujer 7",
    price: "$40.00",
    services: ["Servicio M", "Servicio N"]
  },
  {
    id: 8,
    name: "mujer 8",
    photo: "https://www.laststicker.com/i/cards/2428/8.jpg",
    description: "Descripción del mujer 8",
    price: "$45.00",
    services: ["Servicio O", "Servicio P"]
  },
  {
    id: 9,
    name: "mujer 9",
    photo: "https://www.laststicker.com/i/cards/2428/9.jpg",
    description: "Descripción del mujer 9",
    price: "$50.00",
    services: ["Servicio Q", "Servicio R"]
  },
  {
    id: 10,
    name: "mujer 10",
    photo: "https://www.laststicker.com/i/cards/2428/10.jpg",
    description: "Descripción del mujer 10",
    price: "$55.00",
    services: ["Servicio S", "Servicio T"]
  },
  {
    id: 11,
    name: "mujer 11",
    photo: "https://www.laststicker.com/i/cards/2428/11.jpg",
    description: "Descripción del mujer 11",
    price: "$60.00",
    services: ["Servicio U", "Servicio V"]
  },
  {
    id: 12,
    name: "mujer 12",
    photo: "https://www.laststicker.com/i/cards/2428/12.jpg",
    description: "Descripción del mujer 12",
    price: "$65.00",
    services: ["Servicio W", "Servicio X"]
  },
  {
    id: 13,
    name: "mujer 13",
    photo: "https://www.laststicker.com/i/cards/2428/13.jpg",
    description: "Descripción del mujer 13",
    price: "$70.00",
    services: ["Servicio Y", "Servicio Z"]
  },
  {
    id: 14,
    name: "mujer 14",
    photo: "https://www.laststicker.com/i/cards/2428/14.jpg",
    description: "Descripción del mujer 14",
    price: "$75.00",
    services: ["Servicio AA", "Servicio BB"]
  },
  {
    id: 15,
    name: "mujer 15",
    photo: "https://www.laststicker.com/i/cards/2428/15.jpg",
    description: "Descripción del mujer 15",
    price: "$80.00",
    services: ["Servicio CC", "Servicio DD"]
  }
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {array.slice(0, 12).map(fpre => (
            <div key={fpre.id} className="p-4 rounded-lg bg-gray-300">
              <a href={`/${fpre.name}`}>
                <figure className="mb-4">
                  <img src={fpre.photo} alt={fpre.name} className="w-full h-auto rounded-lg w-[300px] sm:w-[450px] h-[200px] sm:h-[250px]" />
                </figure>
              </a>
              <div>
                <h2 className="text-xl font-bold mb-2 text-gray-400">{fpre.name}</h2>
                <p className="text-lg mb-2 text-gray-400">{fpre.price}</p>
                <p className="text-sm text-gray-400">{fpre.services.join(", ")}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;


