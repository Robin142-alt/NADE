export type PageRoute = 
  | 'home'
  | 'about'
  | 'work'
  | 'sign-language'
  | 'hub'
  | 'advocacy'
  | 'resources'
  | 'stories'
  | 'news'
  | 'get-involved'
  | 'contact';

export type ContrastMode = 'default' | 'high-contrast-dark' | 'high-contrast-yellow';
export type TextSizeMode = 'normal' | 'large' | 'xlarge';

export interface AccessibilitySettings {
  contrast: ContrastMode;
  textSize: TextSizeMode;
  dyslexiaFont: boolean;
  reducedMotion: boolean;
  highlightLinks: boolean;
  screenReaderGuide: boolean;
}

export interface RegionInfo {
  id: 'hhohho' | 'manzini' | 'lubombo' | 'shiselweni';
  name: string;
  capital: string;
  focus: string;
  initiatives: string[];
  keyCentres: string[];
  coordinates: { x: number; y: number };
}

export interface Programme {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  color: string;
  highlights: string[];
  strategicGoal: string;
  verifiedContext?: string;
}

export interface ESLSignItem {
  id: string;
  word: string;
  siswatiWord?: string;
  category: 'Greetings' | 'Family' | 'Education' | 'Health' | 'Emergency' | 'Workplace' | 'Government Services' | 'Everyday';
  description: string;
  handshapeDescription: string;
  movementDescription: string;
  facialExpressionNote?: string;
  usageContext: string;
  videoPlaceholderUrl?: string;
  isVerifiedPlaceholder: boolean;
}

export interface VideoHubItem {
  id: string;
  title: string;
  category: 'News' | 'Health' | 'Education' | 'Government' | 'Rights' | 'Emergency';
  duration: string;
  date: string;
  presenter: string;
  summary: string;
  transcript: string;
  topics: string[];
}

export interface StoryItem {
  id: string;
  name: string;
  role: string;
  category: 'Deaf Leaders' | 'Students' | 'Entrepreneurs' | 'Advocates' | 'Artists' | 'Athletes' | 'Community Champions';
  location: string;
  quote: string;
  story: string;
  isVerifiedExample: boolean;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'Sign Language' | 'Education' | 'Health' | 'Rights & Policy' | 'Employment' | 'Reports' | 'Training';
  format: 'PDF' | 'Video' | 'Document' | 'External Link';
  fileSize?: string;
  datePublished: string;
  summary: string;
  downloadLabel: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  category: 'News' | 'Announcements' | 'Events' | 'Advocacy' | 'Community Stories' | 'Media';
  date: string;
  author: string;
  summary: string;
  content: string[];
  readTime: string;
}

export interface LeadershipMember {
  name: string;
  title: string;
  roleDescription: string;
  isVerified: boolean;
}
