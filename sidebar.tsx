'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  // Função para fazer Logout
  const handleLogout = () => {
    // Define como false para bloquear o acesso às páginas novamente
    localStorage.setItem('usuarioLogado', 'false');
    
    // Força o redirecionamento imediato para a tela inicial/login
    router.push('/');
    
    // Atualiza a página para garantir que os estados limpem
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  const links = [
    { href: '/', label: 'Página Inicial', icon: '' },
    { href: '/disciplina', label: 'Disciplina', icon: '' },
    { href: '/projeto', label: 'Projeto', icon: '' },
    { href: '/equipe', label: 'Equipe', icon: '' },
    { href: '/historico', label: 'Histórico', icon: '' },
  ];

  return (
    <aside className="w-64 bg-slate-800 text-slate-100 flex flex-col justify-between border-r border-slate-700 min-h-full">
      {/* Bloco Superior: Menu de Navegação */}
      <div className="flex flex-col p-4 space-y-2">
        <div className="px-3 mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
          Navegação
        </div>
        <nav className="flex flex-col gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                <span className="text-base">{link.icon}</span>
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bloco Inferior: Botão de Logout de Segurança */}
      <div className="p-4 border-t border-slate-700 bg-slate-900/30">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-3 py-2.5 bg-red-950/40 hover:bg-red-900/60 text-red-400 hover:text-red-300 border border-red-900/50 rounded-lg text-sm font-semibold transition-all shadow-inner"
        >
          <span></span>
          Sair do Sistema
        </button>
      </div>
    </aside>
  );
}