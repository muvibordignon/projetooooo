'use client';

import { useState } from 'react';
import Sidebar from './components/sidebar';

export default function HomePage() {
  const [emailLogin, setEmailLogin] = useState('');
  const [senhaLogin, setSenhaLogin] = useState('');
  
  const [emailCadastro, setEmailCadastro] = useState('');
  const [senhaCadastro, setSenhaCadastro] = useState('');

  const [erroLogin, setErroLogin] = useState('');
  const [sucessoLogin, setSucessoLogin] = useState('');
  const [erroCadastro, setErroCadastro] = useState('');
  const [sucessoCadastro, setSucessoCadastro] = useState('');

  const handleCadastro = (e: React.FormEvent) => {
    e.preventDefault();
    setErroCadastro('');
    setSucessoCadastro('');

    if (!emailCadastro || !senhaCadastro) {
      setErroCadastro('Preencha todos os campos para se cadastrar.');
      return;
    }

    const usuariosCadastrados = JSON.parse(localStorage.getItem('usuariosSistema') || '[]');
    const usuarioExiste = usuariosCadastrados.find((u: any) => u.email === emailCadastro);
    
    if (usuarioExiste) {
      setErroCadastro('Este e-mail já está cadastrado!');
      return;
    }

    const novoUsuario = { email: emailCadastro, senha: senhaCadastro };
    usuariosCadastrados.push(novoUsuario);
    localStorage.setItem('usuariosSistema', JSON.stringify(usuariosCadastrados));

    setSucessoCadastro('Usuário cadastrado com sucesso! Agora faça o login.');
    setEmailCadastro('');
    setSenhaCadastro('');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErroLogin('');
    setSucessoLogin('');

    if (!emailLogin || !senhaLogin) {
      setErroLogin('Por favor, preencha todos os campos.');
      return;
    }

    const novaTentativa = {
      email: emailLogin,
      senha: senhaLogin,
      hora: new Date().toLocaleString('pt-BR')
    };
    const historicoPrevio = JSON.parse(localStorage.getItem('historicoLogins') || '[]');
    historicoPrevio.unshift(novaTentativa);
    localStorage.setItem('historicoLogins', JSON.stringify(historicoPrevio));

    const usuariosCadastrados = JSON.parse(localStorage.getItem('usuariosSistema') || '[]');
    const contaEncontrada = usuariosCadastrados.find(
      (u: any) => u.email === emailLogin && u.senha === senhaLogin
    );

    if (!contaEncontrada) {
      setErroLogin('E-mail ou senha incorretos! Verifique se você já se cadastrou.');
      return;
    }

    localStorage.setItem('usuarioLogado', 'true');
    setSucessoLogin('Login efetuado com sucesso! Páginas liberadas.');
    setEmailLogin('');
    setSenhaLogin('');
  };

  const handleLoginSocialSimulado = (provedor: string) => {
    setErroLogin('');
    setSucessoLogin(`Integração com o ${provedor} detectada! (Ambiente de testes: Acesso concedido).`);
    localStorage.setItem('usuarioLogado', 'true');
    
    const novaTentativa = {
      email: `auth_via_${provedor.toLowerCase()}@OAuth2.com`,
      senha: `[TOKEN_CRIPTOGRAFADO_${provedor.toUpperCase()}]`,
      hora: new Date().toLocaleString('pt-BR')
    };
    const historicoPrevio = JSON.parse(localStorage.getItem('historicoLogins') || '[]');
    historicoPrevio.unshift(novaTentativa);
    localStorage.setItem('historicoLogins', JSON.stringify(historicoPrevio));
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-50">
      <header className="flex h-16 w-full items-center justify-between bg-slate-900 px-6 text-white shadow-md">
        <h1 className="text-xl font-bold">Minha Aplicação Next.js</h1>
        <div className="rounded-md bg-neutral-800 px-4 py-2 text-sm font-semibold text-green-500">
          Status: Online
        </div>
      </header>

      <div className="grid min-h-[calc(100vh-4rem)] w-full grid-cols-[16rem_1fr]">
        <Sidebar />

        <section className="min-h-full w-full p-8 flex flex-col justify-center space-y-8">
          <div className="space-y-1">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wide">Acesso ao Sistema</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Gerenciamento de Contas</h2>
            <p className="text-sm text-slate-500">Crie a sua conta na área de cadastro para conseguir validar a autenticação de login.</p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full max-w-6xl">
            {/* CARD 1: CADASTRO */}
            <div className="w-full bg-white p-8 rounded-xl shadow-md border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="mb-6 text-center xl:text-left">
                  <h3 className="text-xl font-bold text-slate-800"> Criar Nova Conta</h3>
                  <p className="mt-1 text-sm text-slate-500">Cadastre os seus dados para salvá-los no sistema</p>
                </div>

                {erroCadastro && <div className="mb-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700 text-sm rounded font-medium">{erroCadastro}</div>}
                {sucessoCadastro && <div className="mb-4 p-3 bg-green-100 border-l-4 border-green-500 text-green-700 text-sm rounded font-medium">{sucessoCadastro}</div>}

                <form onSubmit={handleCadastro} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">E-mail de Cadastro</label>
                    <input 
                      type="email" 
                      className="w-full p-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      value={emailCadastro} 
                      onChange={(e) => setEmailCadastro(e.target.value)} 
                      placeholder="novo-usuario@gmail.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Definir Senha</label>
                    <input 
                      type="password" 
                      className="w-full p-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      value={senhaCadastro} 
                      onChange={(e) => setSenhaCadastro(e.target.value)} 
                      placeholder="••••••••" 
                    />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white p-2.5 rounded-md font-semibold hover:bg-blue-700 transition-colors shadow-sm mt-2">
                    Salvar Cadastro
                  </button>
                </form>
              </div>
            </div>

            {/* CARD 2: LOGIN */}
            <div className="w-full bg-white p-8 rounded-xl shadow-md border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="mb-6 text-center xl:text-left">
                  <h3 className="text-xl font-bold text-slate-800"> Área de Autenticação</h3>
                  <p className="mt-1 text-sm text-slate-500">Entre com suas credenciais para verificar o acesso</p>
                </div>

                {erroLogin && <div className="mb-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700 text-sm rounded font-medium">{erroLogin}</div>}
                {sucessoLogin && <div className="mb-4 p-3 bg-green-100 border-l-4 border-green-500 text-green-700 text-sm rounded font-medium">{sucessoLogin}</div>}

                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">E-mail</label>
                    <input 
                      type="email" 
                      className="w-full p-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900" 
                      value={emailLogin} 
                      onChange={(e) => setEmailLogin(e.target.value)} 
                      placeholder="exemplo@teste.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Senha</label>
                    <input 
                      type="password" 
                      className="w-full p-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900" 
                      value={senhaLogin} 
                      onChange={(e) => setSenhaLogin(e.target.value)} 
                      placeholder="••••••••" 
                    />
                  </div>
                  <button type="submit" className="w-full bg-slate-900 text-white p-2.5 rounded-md font-semibold hover:bg-slate-800 transition-colors shadow-sm mt-2">
                    Verificar Dados
                  </button>
                </form>

                <div className="relative my-6 flex items-center justify-center">
                  <div className="absolute inset-0 border-t border-slate-200"></div>
                  <span className="relative bg-white px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Ou entre com</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button 
                    type="button"
                    onClick={() => handleLoginSocialSimulado('Google')}
                    className="flex items-center justify-center gap-2 border border-slate-300 hover:border-slate-400 p-2.5 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24">
                      <path fill="#EA4335" d="M12.2 5c1.7 0 3 .7 3.7 1.4l2.8-2.8C16.8 1.8 14.7 1 12.2 1 7.6 1 3.7 3.6 1.9 7.4l3.4 2.7C6.2 6.9 9 5 12.2 5z"/>
                      <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12.2v4.4h6.4c-.3 1.5-1.1 2.7-2.4 3.5l3.6 2.8c2.1-2 3.7-4.9 3.7-8.4z"/>
                      <path fill="#FBBC05" d="M5.3 14.3c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7C1.1 8.5.6 10.2.6 12s.5 3.5 1.3 5l3.4-2.7z"/>
                      <path fill="#34A853" d="M12.2 19c-3.2 0-6-1.9-6.9-5.1L1.9 16.6C3.7 20.4 7.6 23 12.2 23c2.9 0 5.4-1 7.2-2.7l-3.6-2.8c-1 .6-2.2 1.5-3.6 1.5z"/>
                    </svg>
                    Google
                  </button>

                  <button 
                    type="button"
                    onClick={() => handleLoginSocialSimulado('GitHub')}
                    className="flex items-center justify-center gap-2 border border-slate-300 hover:border-slate-400 p-2.5 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1.1 1.5 1.1.9 1.5 2.3 1.1 2.9.8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 015 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.4 4.7-4.6 4.9.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0022 12c0-5.5-4.5-10-10-10z"/>
                    </svg>
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-4 rounded-xl shadow-md max-w-6xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Desenvolvido por:</span>
            <div className="flex gap-4 text-sm font-medium">
              <span className="bg-slate-800 px-3 py-1.5 rounded-md border border-slate-700">Murillo Bordignon Castilho Rodrigues Luricy</span>
              <span className="bg-slate-800 px-3 py-1.5 rounded-md border border-slate-700">Victória Bordignon Castilho Rodrigues Luricy</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}