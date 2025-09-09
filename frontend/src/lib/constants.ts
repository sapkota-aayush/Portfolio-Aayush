// Social media and external links
export const SOCIAL_LINKS = {
  GITHUB: "https://github.com/sapkota-aayush",
  LINKEDIN: "https://www.linkedin.com/in/aayush-sapkota/",
  EMAIL: "aayush@aayussh.com",
} as const;

// Project links
export const PROJECT_LINKS = {
  PORTFOLIO: "https://github.com/sapkota-aayush/Portfolio-Aayush",
  FOLDERLY: "https://github.com/sapkota-aayush/Folderly-Prototype",
  NUMAFLOW: "https://github.com/sapkota-aayush/numaflow",
} as const;

// API configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
} as const;
