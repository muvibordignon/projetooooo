'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function VerificarAcesso({ children }: { children: React.ReactNode }) {
  const [estaLogado, setEstaLogado] = useState<boolean | null>(null);

  useEffect(() => {
    const logado = localStorage.getItem('usuarioLogado');
    setEstaLogado(logado === 'true');
  }, []);

  if (estaLogado === null) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-slate-50">
        <p className="text-slate-500 font-medium">Verificando permissões...</p>
      </div>
    );
  }

  if (!estaLogado) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-slate-100 p-4">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md border border-slate-200 text-center space-y-5">
          <div className="text-5xl">🚫</div>
          <h2 className="text-2xl font-extrabold text-slate-900">Acesso Bloqueado</h2>
          <p className="text-sm text-slate-600">
            Você precisa criar uma conta e fazer login antes de conseguir ver esta página.
          </p>
          <div className="pt-2">
            <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-blue-700 transition-colors shadow-sm text-sm">
              Voltar para a Página Inicial
            </Link>
          </div>
          <p hidden>
            "código sinistro. Lembrem-se de agradecer a IA" - by GFB
            </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}