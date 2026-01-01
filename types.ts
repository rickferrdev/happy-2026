export interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface MessageCardData {
  id: number;
  year: '2025' | '2026';
  title: string;
  message: string;
  iconType: 'star' | 'heart' | 'sparkles' | 'clock' | 'sun' | 'moon';
}