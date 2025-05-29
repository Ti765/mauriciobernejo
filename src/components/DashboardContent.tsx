import React from 'react';

const departmentCardData = [
  {
    title: "Tributário",
    playlist: "Playlist 1",
    description: "dnd",
    gradient: "bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400",
  },
  {
    title: "Contábil",
    playlist: "Playlist 2",
    description: "Description of playlist",
    gradient: "bg-gradient-to-br from-green-500 via-teal-400 to-emerald-300",
  },
  {
    title: "Financeiro",
    playlist: "Playlist 2",
    description: "Description of playlist",
    gradient: "bg-gradient-to-br from-sky-500 via-indigo-400 to-blue-300",
  },
  {
    title: "Tecnologia",
    playlist: "Playlist 2",
    description: "Description of playlist",
    gradient: "bg-gradient-to-br from-red-600 via-pink-500 to-rose-400",
  },
  {
    title: "D.P.",
    playlist: "Playlist 2",
    description: "Description of playlist",
    gradient: "bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400", 
  },
];

const DepartmentCard = ({ title, playlist, description, gradient }) => (
  <div className={`rounded-lg shadow-lg p-5 flex flex-col justify-between h-48 ${gradient}`}>
    <div>
      <h3 className="text-white text-xl font-bold drop-shadow-md">{title}</h3>
    </div>
    <div>
      <p className="text-white text-sm font-semibold drop-shadow-sm">{playlist}</p>
      <p className="text-white text-xs drop-shadow-sm">{description}</p>
    </div>
  </div>
);

const DashboardContent = () => {
  return (
    <main className="flex-1 p-8 bg-white overflow-y-auto">
      {/* Departamentos Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Departamentos</h1>
        <p className="text-gray-600 mb-6">Acesse seu departamento para biblioteca de ferramentas</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {departmentCardData.map((card) => (
            <DepartmentCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      {/* Últimas atualizações Section */}
      <section>
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Últimas atualizações</h2>
        <p className="text-gray-600 mb-6">Leia as última atualizações da Glip</p>
        {/* Placeholder for updates content. You can add a similar grid here if needed. */}
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <p className="text-gray-500">Nenhuma atualização no momento.</p>
        </div>
      </section>
    </main>
  );
};

export default DashboardContent;
