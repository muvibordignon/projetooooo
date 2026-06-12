'use client';

import Sidebar from '../components/sidebar';
import VerificarAcesso from '../components/verificar-acesso';

export default function DisciplinaPage() {
  return (
    <VerificarAcesso>
      <div className="min-h-screen w-full flex flex-col bg-slate-50">
        {/* Navbar */}
        <header className="flex h-16 w-full items-center justify-between bg-slate-900 px-6 text-white shadow-md">
          <h1 className="text-xl font-bold">Minha Aplicação Next.js</h1>
          <div className="rounded-md bg-neutral-800 px-4 py-2 text-sm font-semibold text-green-500">
            Status: Online
          </div>
        </header>

        {/* Grid com Sidebar + Conteúdo */}
        <div className="grid min-h-[calc(100vh-4rem)] w-full grid-cols-[16rem_1fr]">
          <Sidebar />

          <main className="p-8 flex items-start justify-center overflow-y-auto max-h-[calc(100vh-4rem)]">
            <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-md border border-slate-200 space-y-6 mt-4">
              
              {/* Cabeçalho da Página */}
              <div className="space-y-2 border-b border-slate-100 pb-4">
                <span className="text-sm font-bold text-blue-600 uppercase tracking-wide">Grade Curricular </span>
                <h2 className="text-3xl font-extrabold text-slate-900">Disciplinas do Curso</h2>
                <p className="text-sm text-slate-500">Componentes curriculares voltados ao desenvolvimento tecnológico e estruturação de sistemas.</p>
              </div>
              
              {/* Grid das Disciplinas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Disciplina 1: TICS I */}
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-3 flex flex-col justify-between transition-all hover:shadow-sm">
                  <div className="space-y-2">
                    <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                      Módulo Teórico/Prático
                    </span>
                    <h3 className="font-extrabold text-xl text-slate-900">TICS I</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Introdução às Tecnologias da Informação e Comunicação. Aborda os fundamentos de hardware, redes, sistemas operacionais e como as ferramentas digitais atuam na infraestrutura de soluções modernas de software.
                    </p>
                  </div>
                </div>

                {/* Disciplina 2: Programação Web I */}
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-3 flex flex-col justify-between transition-all hover:shadow-sm">
                  <div className="space-y-2">
                    <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                      Módulo Técnico
                    </span>
                    <h3 className="font-extrabold text-xl text-slate-900">Programação Web I</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Foco no desenvolvimento de aplicações para a internet. Compreende a estruturação de páginas web utilizando linguagens de marcação e estilização, lógica de programação client-side e os primeiros passos na construção de interfaces dinâmicas.
                    </p>
                  </div>
                </div>

              </div>

              {/* Informação de Rodapé */}
              <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg text-xs text-slate-700 leading-relaxed mt-4">
                <strong>Nota de Integração:</strong> Ambos os componentes curriculares servem como alicerce fundamental para o desenvolvimento e compreensão do ecossistema deste projeto, unindo os conceitos de infraestrutura de rede (TICS) com a interface final que o usuário interage (Web).
              </div>

            </div>
          </main>
        </div>
      </div>
    </VerificarAcesso>
  );
}