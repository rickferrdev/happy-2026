import React, { useEffect, useState } from 'react';
import { fetchGitHubUser } from './services/githubService';
import { GitHubUser } from './types';
import { CARD_DATA } from './constants';
import { Card } from './components/Card';
import { Footer } from './components/Footer';
import { Sparkles, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
    const [user, setUser] = useState<GitHubUser | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadData = async () => {
            setTimeout(async () => {
                const userData = await fetchGitHubUser('rickferrdev');
                setUser(userData);
                setLoading(false);
            }, 800);
        };
        loadData();
    }, []);

    const pastCards = CARD_DATA.filter(c => c.year === '2025');
    const futureCards = CARD_DATA.filter(c => c.year === '2026');

    return (
        <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-slate-200 selection:text-slate-900 flex flex-col">
            <header className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-white to-transparent rounded-full blur-3xl opacity-60 -z-10" />
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm text-xs font-semibold text-slate-500 uppercase tracking-widest mb-8 shadow-sm">
                    <Sparkles className="w-3 h-3 text-slate-400" />
                    <span>Celebração e Renovação</span>
                </div>
                <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900">
                    <span className="block text-slate-300 text-3xl md:text-4xl mb-2 font-light italic">Até 2025,</span>
                    Feliz 2026
                </h1>
                <p className="max-w-xl mx-auto text-slate-500 text-lg leading-relaxed font-light">
                    Uma transição elegante entre o que fomos e o que seremos.
                    Tempo de agradecer o passado e abraçar o futuro.
                </p>
            </header>
            <main className="flex-grow max-w-6xl mx-auto px-6 w-full space-y-24">
                <section>
                    <div className="flex items-center gap-4 mb-10 opacity-70">
                        <h2 className="text-2xl font-bold text-slate-400">2025</h2>
                        <div className="h-px bg-slate-200 flex-grow"></div>
                        <span className="text-xs uppercase tracking-widest text-slate-400">Reflexão</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {pastCards.map(card => (
                            <Card key={card.id} data={card} />
                        ))}
                    </div>
                </section>
                <div className="flex justify-center text-slate-300">
                    <ArrowRight className="w-8 h-8 animate-pulse" />
                </div>
                <section>
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-2xl font-bold text-slate-900">2026</h2>
                        <div className="h-px bg-slate-900 flex-grow"></div>
                        <span className="text-xs uppercase tracking-widest text-slate-500">Aspiração</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {futureCards.map(card => (
                            <Card key={card.id} data={card} />
                        ))}
                    </div>
                </section>
            </main>
            <Footer user={user} loading={loading} />
        </div>
    );
};

export default App;
