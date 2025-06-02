import React from 'react';
import IconClassificadorDominioV2 from '../assets/images/classificador_dominiov2.svg?react';
import IconOrganizadorCte from '../assets/images/organizador_cte.svg?react';
import IconImportadorNfse from '../assets/images/importador_nfse.svg?react';
import IconXmlParaExcel from '../assets/images/xml_para_excel.svg?react';
import IconCorretorChaveAcesso from '../assets/images/corretor_chave_acesso.svg?react';

/* -------------------------------------------------------------------- */
/* 1. Dados dos cards – contêm o ícone e uma descrição curta            */
/* -------------------------------------------------------------------- */
const departmentCardData = [
  { id: 'classificador_dominiov2', icon: <IconClassificadorDominioV2 />, description: 'Classifica XMLs e simplifica a importação no Domínio.' },
  { id: 'organizador_cte',    icon: <IconOrganizadorCte   />, description: 'Classifica CT-es em pastas por regime tributário e agiliza a importação.' },
  { id: 'importador_nfse',  icon: <IconImportadorNfse />, description: 'Extrai dados de NFS-e via IA e gera planilha Excel pronta para importar.' },
  { id: 'xml_para_excel',  icon: <IconXmlParaExcel />, description: 'Converte arquivos XML em planilhas Excel otimizadas para análise fiscal.' },
  { id: 'corretor_chave_acesso',          icon: <IconCorretorChaveAcesso         />, description: 'Limpa chaves NF-e, removendo caracteres inválidos e a deixando apta ao uso.' },
];

/* ------------------------------------------------------ */
/* 2. Card: renderiza o ícone do setor e overlay com descrição */
/* ------------------------------------------------------ */
const DepartmentCard = ({
  icon,
  description,
}: {
  icon: React.ReactNode;
  description: string;
}) => (
  <div
    tabIndex={0}
    className="
      group relative w-full pt-[100%]  /* quadrado responsivo */
      overflow-hidden shadow-lg 
      dark:shadow-lg dark:shadow-black/40 /* Updated shadow for dark theme */
      transition-transform duration-300 ease-in-out
      hover:scale-[1.03] focus:scale-[1.03]
      focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-accent
    "
  >
    {/* Camada do ícone */}
    <div
      className="
        absolute inset-0 flex items-center justify-center
        transition-all duration-300 ease-in-out
        group-hover:scale-105 group-hover:opacity-80
        group-focus:scale-105 group-focus:opacity-80 
      "
    >
      {React.cloneElement(icon as React.ReactElement, {
        className: 'w-full h-full',
      })}
    </div>

    {/* Overlay com descrição para telas md e maiores */}
    <div
      className="
        absolute inset-0 bg-black/60 dark:bg-black/70
        flex items-end p-4 text-white /* Text color within card overlay - assuming always white */
        opacity-0 translate-y-4
        transition-all duration-300 ease-in-out
        group-hover:opacity-100 group-hover:translate-y-0
        group-focus:opacity-100 group-focus:translate-y-0
        hidden md:flex 
      "
    >
      <p className="text-sm leading-snug font-medium">{description}</p>
    </div>
  </div>
);

/* ----------------------------------------- */
/* 3. Dashboard: seção de Ferramentas       */
/* ----------------------------------------- */
const DashboardContent = () => (
  <main className="flex-1 p-8 overflow-y-auto">
    {/* Ferramentas */}
    <section className="mb-12">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-[color:var(--foreground)] mb-2">Ferramentas</h1>
      <p className="text-gray-600 dark:text-[color:var(--muted-foreground)] mb-6">
        Acesse o hub de soluções tributárias
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10"> 
        {departmentCardData.map(({ id, icon, description }) => (
          <div key={id} className="flex flex-col items-center">
            <DepartmentCard icon={icon} description={description} />
            <div className="md:hidden mt-2 text-gray-700 dark:text-[color:var(--muted-foreground)] text-xs font-semibold text-left w-full px-1">
              {description}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Últimas atualizações */}
    <section>
      <h2 className="text-4xl font-bold text-gray-800 dark:text-[color:var(--foreground)] mb-2">
        Últimas atualizações
      </h2>
      <p className="text-gray-600 dark:text-[color:var(--muted-foreground)] mb-6">
        Leia as última atualizações da Glip
      </p>
      <div className="bg-white dark:bg-[#2A2A2A] p-6 rounded-lg shadow dark:shadow-md dark:shadow-black/40">
        <p className="text-gray-500 dark:text-[color:var(--muted-foreground)]">Nenhuma atualização no momento.</p>
      </div>
    </section>
  </main>
);

export default DashboardContent;
