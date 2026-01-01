import { GitHubUser } from '../types';

export const fetchGitHubUser = async (username: string): Promise<GitHubUser | null> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if (!response.ok) {
      throw new Error(`GitHub API Error: ${response.statusText}`);
    }

    const data: GitHubUser = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch GitHub user:', error);
    return null;
  }
};