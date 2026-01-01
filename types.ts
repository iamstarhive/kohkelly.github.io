
import React from 'react';

export interface ExpertiseItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ExperienceItem {
  period: string;
  title: string;
  detail: string;
}

export interface ExperienceSubsection {
  title: string;
  achievements: string[];
}

export interface ExperienceSection {
  category: string;
  icon: React.ReactNode;
  role: string;
  period: string;
  location?: string;
  subsections: ExperienceSubsection[];
}

export interface Artwork {
  id: string;
  title: string;
  imagePath: string;
  license: string;
  featured: boolean;
  year?: string;
  medium?: string;
  description?: string;
}
