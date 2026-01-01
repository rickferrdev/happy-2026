import React from 'react';
import { GitHubUser } from '../types';
import { Github, ExternalLink, Loader2 } from 'lucide-react';

interface FooterProps {
  user: GitHubUser | null;
  loading: boolean;
}

export const Footer: React.FC<FooterProps> = ({ user, loading }) => {
  return (
    <footer className="mt-20 py-12 border-t border-slate-100 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {loading ? (
          <div className="flex justify-center items-center space-x-2 text-slate-400">
            <Loader2 className="animate-spin w-5 h-5" />
            <span className="text-sm">Carregando informações do desenvolvedor...</span>
          </div>
        ) : user ? (
          <div className="flex flex-col items-center animate-fade-in-up">
            <a 
              href={user.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute -inset-1 rounded-full bg-slate-100 opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
              <img 
                src={user.avatar_url} 
                alt={user.name} 
                className="relative w-16 h-16 rounded-full border-2 border-white shadow-sm object-cover mb-4 transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            
            <h3 className="text-lg font-bold text-slate-900 mb-1">{user.name}</h3>
            <p className="text-slate-500 text-sm mb-4 max-w-md mx-auto">{user.bio}</p>
            
            <div className="flex items-center gap-4 text-xs font-semibold tracking-wider text-slate-400 uppercase">
              <span className="flex items-center gap-1">
                 {user.public_repos} Repositórios
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <a 
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center gap-1 hover:text-slate-800 transition-colors"
              >
                <Github className="w-4 h-4" />
                @{user.login} <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>
        ) : (
           <div className="text-slate-400 text-sm">
              <p>Desenvolvido por RickFerrDev</p>
           </div>
        )}

        <div className="mt-12 text-slate-300 text-xs">
          &copy; {new Date().getFullYear()} - Projeto Demonstrativo de Fim de Ano
        </div>
      </div>
    </footer>
  );
};