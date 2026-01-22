
import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools';
  icon?: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}

// Fix: Added ChatMessage interface which was missing but required by AIChat.tsx
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
