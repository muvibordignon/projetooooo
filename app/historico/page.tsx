'use client';

import { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar';
import  VerificarAcesso  from '../components/verificar-acesso';

interface LoginRegistro {
  email: string;
  senha: string;
  hora: string;
}

export default function HistoricoPage() {
  const [logins, setLogins] = useState<LoginRegistro[]>([]);

  useEffect(() => {
    const dados = localStorage.getItem('historicoLogins');
    if (dados) {
      setLogins(JSON.parse(dados));
    }
  }, []);

  const limparHistorico = () => {
    localStorage.removeItem('historicoLogins');
    setLogins([]);
  };

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
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span className="text-sm font-bold text-blue-600 uppercase tracking-wide">Monitoramento</span>
                  <h2 className="text-3xl font-extrabold text-slate-900">📋 Histórico de Logins</h2>
                  <p className="text-sm text-slate-500 mt-1">Abaixo estão gravadas todas as tentativas de acesso efetuadas no formulário.</p>
                </div>
                
                {logins.length > 0 && (
                  <button 
                    onClick={limparHistorico}
                    className="bg-red-50 text-red-600 hover:bg-red-100 px-4 py-2 rounded-lg text-sm font-semibold transition-colors self-start sm:self-center border border-red-200"
                  >
                    Limpar Histórico
                  </button>
                )}
              </div>

              {logins.length === 0 ? (
                <div className="p-12 text-center border-2 border-dashed border-slate-200 rounded-xl text-slate-400 text-sm">
                  Nenhuma tentativa de login registrada ainda. Vá à Página Inicial e envie dados no formulário!
                </div>
              ) : (
                <div className="overflow-hidden border border-slate-200 rounded-lg shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
                        <th className="p-4">E-mail Digitado</th>
                        <th className="p-4">Senha Digitada</th>
                        <th className="p-4">Data e Hora</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                      {logins.map((login, index) => (
                        <tr key={index} className="hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-medium text-slate-700">{login.email}</td>
                          <td className="p-4 text-slate-600 font-mono bg-slate-50/30">{login.senha}</td>
                          <td className="p-4 text-slate-500 font-mono">{login.hora}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

            </div>
          </main>
        </div>
      </div>
    </VerificarAcesso>
  );
}