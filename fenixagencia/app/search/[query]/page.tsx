// app/search/[query]/page.tsx

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import girls from '../../girls.json'

const SearchPage = ({ params }: { params: { query: string } }) => {
  const query = params.query;

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4 text-gray-500 dark:text-white">Resultados para "{query}"</h1>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow p-4">
          <div className="text-gray-600 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {girls.filter(girl => girl.name.includes(query)).map(girl => (
              <div key={girl.id} className="group-image p-4 rounded-lg ">
                <a href={`/girl/${girl.id}`}>
                  <figure className="mb-4">
                    <img src={girl.photo[0]} alt={girl.name} className="w-full h-auto rounded-lg w-[300px] sm:w-[450px] h-[200px] sm:h-[250px]" />
                  </figure>
                </a>
                <div>
                  <h2 className="text-xl font-bold mb-2 ">{girl.name}</h2>
                  <p className="text-lg mb-2">{girl.price}</p>
                  <p className="text-sm">{girl.services.join(", ")}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SearchPage;