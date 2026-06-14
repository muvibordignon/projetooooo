'use client';

import Sidebar from '../components/sidebar';
import VerificarAcesso from '../components/verificar-acesso';
import fotoTema from '../components/caa.png'; 

export default function MainProjetoPage() {
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

          <main className="p-8 flex justify-center overflow-y-auto max-h-[calc(100vh-4rem)]">
            <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-md border border-slate-200 space-y-8">
              
              <div className="space-y-2 border-b border-slate-100 pb-4">
                <span className="text-sm font-bold text-blue-600 uppercase tracking-wide">Tema Principal</span>
                <h2 className="text-3xl font-extrabold text-slate-900">O que é a Comunicação Alternativa baseada em Símbolos?</h2>
              </div>

              <div className="w-full flex flex-col items-center justify-center bg-slate-50 p-4 rounded-xl border border-slate-100">
                <img 
                  src={fotoTema.src} 
                  alt="Símbolos de Comunicação Alternativa" 
                  className="max-h-72 object-contain rounded-lg shadow-md"
                />
                <span className="text-xs text-slate-400 mt-2 italic">Exemplo visual de prancha de comunicação pictográfica</span>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  A <strong>Comunicação Alternativa e Aumentativa (CAA)</strong> engloba um conjunto de ferramentas e estratégias criadas para substituir ou complementar a fala de pessoas que não conseguem se comunicar verbalmente.
                </p>
                <p>
                  Para indivíduos dentro do Transtorno do Espectro Autista (TEA) em nível de suporte 3 (considerado severo), o uso de sistemas pictográficos — ou seja, baseados em símbolos, fotos e figuras — é um dos métodos mais eficientes.
                </p>
                <p className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg text-slate-800 font-medium">
                  💡 Esses softwares funcionam através do conceito de associação visual clara. Como muitas pessoas com autismo severo processam informações visuais muito melhor do que estímulos auditivos ou textos longos, elas associam uma imagem diretamente ao objeto, à ação ou ao sentimento que desejam expressar.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 border-l-4 border-slate-800 pl-3">
                  Como Funcionam os Aplicativos de CAA na Prática?
                </h3>
                <p className="text-slate-600 text-sm">
                  A dinâmica desses aplicativos é bastante intuitiva e geralmente se baseia no sistema PECS (Picture Exchange Communication System). O funcionamento padrão envolve as seguintes etapas:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 border border-slate-200 rounded-xl bg-slate-50/50">
                    <span className="text-xl">🗂️</span>
                    <h4 className="font-bold text-slate-800 mt-2 text-sm">Pranchas Organizadoras</h4>
                    <p className="text-xs text-slate-500 mt-1">A tela exibe uma grade cheia de figuras organizadas por categorias coloridas (Alimentação, Sentimentos, Ações).</p>
                  </div>
                  <div className="p-4 border border-slate-200 rounded-xl bg-slate-50/50">
                    <span className="text-xl">🔊</span>
                    <h4 className="font-bold text-slate-800 mt-2 text-sm">Voz Sintetizada (TTS)</h4>
                    <p className="text-xs text-slate-500 mt-1">Ao tocar na imagem, o app imediatamente reproduz o som em voz alta, gerando um retorno sonoro rápido.</p>
                  </div>
                  <div className="p-4 border border-slate-200 rounded-xl bg-slate-50/50">
                    <span className="text-xl">🗣️</span>
                    <h4 className="font-bold text-slate-800 mt-2 text-sm">Construção de Frases</h4>
                    <p className="text-xs text-slate-500 mt-1">O usuário pode tocar em uma sequência de símbolos como "Eu quero" + "Comer" + "Maçã", e o aplicativo lê tudo completo.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 border-l-4 border-slate-800 pl-3">
                  Principais Aplicativos Disponíveis no Mercado
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border border-slate-100 rounded-xl bg-slate-900 text-white shadow-inner">
                    <h4 className="font-bold text-blue-400">Proloquo2Go</h4>
                    <p className="text-xs text-slate-400 mt-1">Um dos mais famosos do mundo. Altamente personalizável, possui um vocabulário imenso que cresce junto com as habilidades do usuário.</p>
                  </div>
                  <div className="p-4 border border-slate-100 rounded-xl bg-slate-900 text-white shadow-inner">
                    <h4 className="font-bold text-green-400">Livox</h4>
                    <p className="text-xs text-slate-400 mt-1">Desenvolvido no Brasil e premiado internacionalmente. Usa algoritmos inteligentes para se adaptar às capacidades motoras e cognitivas.</p>
                  </div>
                  <div className="p-4 border border-slate-100 rounded-xl bg-slate-900 text-white shadow-inner">
                    <h4 className="font-bold text-indigo-400">Tobii Dynavox (Snap Core)</h4>
                    <p className="text-xs text-slate-400 mt-1">Baseado fortemente em pesquisas científicas. Foca no vocabulário essencial por meio de rotinas estruturadas.</p>
                  </div>
                  <div className="p-4 border border-slate-100 rounded-xl bg-slate-900 text-white shadow-inner">
                    <h4 className="font-bold text-purple-400">LetMeTalk</h4>
                    <p className="text-xs text-slate-400 mt-1">Opção gratuita e muito acessível. Permite alinhar as imagens em uma barra superior para montar e ler as frases.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 border-l-4 border-slate-800 pl-3">
                  O Impacto no Desenvolvimento e na Qualidade de Vida
                </h3>
                <div className="space-y-3">
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-slate-900 text-sm">1. Redução de Comportamentos Inadequados e Crises</h4>
                    <p className="text-xs text-slate-600 mt-1">As crises no autismo severo vêm da frustração de não conseguir se expressar. Ganhando uma voz via figuras, a ansiedade cai drasticamente.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-slate-900 text-sm">2. Autonomia e Inclusão Real</h4>
                    <p className="text-xs text-slate-600 mt-1">O usuário passa a ter poder de escolha: decide o que comer, o que vestir e interage diretamente com as pessoas.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-slate-900 text-sm">3. Estímulo à Fala Natural (Quebra de Mito)</h4>
                    <p className="text-xs text-slate-600 mt-1">Ouvir o som sintetizado ao tocar na figura estimula o cérebro linguisticamente, auxiliando a destravar falas residuais.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-center">
                <h4 className="font-bold text-slate-800 text-sm">Considerações Finais</h4>
                <p className="text-xs text-slate-500 mt-1 max-w-2xl mx-auto">Os softwares de comunicação garantem a dignidade humana. O tablet se transforma na própria voz de quem é não-verbal.</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </VerificarAcesso>
  );
}