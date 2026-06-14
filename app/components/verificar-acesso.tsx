'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function VerificarAcesso({ children }: { children: React.ReactNode }) {
  const [estaLogado, setEstaLogado] = useState<boolean | null>(null);

  useEffect(() => {
    const autenticado = localStorage.getItem('usuarioLogado') === 'true';
    setEstaLogado(autenticado);
  }, []);

  if (estaLogado === null) {
    return <div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-500 text-sm">Carregando permissões...</div>;
  }

  if (!estaLogado) {
    return (
      <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-xl p-8 shadow-md text-center space-y-6">
          <div className="text-4xl">🚫</div>
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold text-slate-900">Acesso Bloqueado</h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Esta é uma rota protegida. Você precisa efetuar o login ou registrar uma conta na página inicial para acessar este conteúdo.
            </p>
          </div>
          <Link href="/" className="inline-block w-full bg-slate-900 text-white p-2.5 rounded-md font-semibold hover:bg-slate-800 transition-colors shadow-sm text-sm">
            Voltar para a Página Inicial
          </Link>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}