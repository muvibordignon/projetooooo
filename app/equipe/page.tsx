'use client';

import Sidebar from '../components/sidebar';
import VerificarAcesso from '../components/verificar-acesso';

export default function EquipePage() {
  return (
    <VerificarAcesso>
      <div className="min-h-screen w-full flex flex-col bg-slate-50">
        <header className="flex h-16 w-full items-center justify-between bg-slate-900 px-6 text-white shadow-md">
          <h1 className="text-xl font-bold">Minha Aplicação Next.js</h1>
          <div className="rounded-md bg-neutral-800 px-4 py-2 text-sm font-semibold text-green-500">
            Status: Online
          </div>
        </header>

        <div className="grid min-h-[calc(100vh-4rem)] w-full grid-cols-[16rem_1fr]">
          <Sidebar />

          <main className="p-8 flex items-start justify-center">
            <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-md border border-slate-200 space-y-6 mt-4">
              <div>
                <span className="text-sm font-bold text-blue-600 uppercase tracking-wide">Membros</span>
                <h2 className="text-3xl font-extrabold text-slate-900"> Equipe de Desenvolvimento</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Murillo */}
                <div className="p-5 border border-slate-200 rounded-xl bg-slate-50/50 space-y-2">
                  <h3 className="text-lg font-bold text-slate-800">Murillo Bordignon Castilho Rodrigues Luricy</h3>
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-md">
                    Turma: 2DSA
                  </span>
                  <p className="text-sm text-slate-500">Responsável pela arquitetura de páginas, gerenciamento de rotas e integração com o localStorage.</p>
                </div>

                {/* Victória */}
                <div className="p-5 border border-slate-200 rounded-xl bg-slate-50/50 space-y-2">
                  <h3 className="text-lg font-bold text-slate-800">Victória Bordignon Castilho Rodrigues Luricy</h3>
                  <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-2.5 py-1 rounded-md">
                    Turma: 2DSA
                  </span>
                  <p className="text-sm text-slate-500">Responsável pela estilização visual com o Tailwind CSS, espaçamentos, tipografia e experiência de usuário.</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </VerificarAcesso>
  );
}