import { useState, useEffect } from 'react';
import type { PageRoute, AccessibilitySettings } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AccessibilityToolbar } from './components/AccessibilityToolbar';
import { InterpreterBookingModal } from './components/InterpreterBookingModal';

// Views
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ProgrammesView } from './views/ProgrammesView';
import { SignDictionaryView } from './views/SignDictionaryView';
import { VideoHubView } from './views/VideoHubView';
import { AdvocacyView } from './views/AdvocacyView';
import { ResourcesView } from './views/ResourcesView';
import { StoriesView } from './views/StoriesView';
import { NewsView } from './views/NewsView';
import { GetInvolvedView } from './views/GetInvolvedView';
import { ContactView } from './views/ContactView';

const defaultAccessibilitySettings: AccessibilitySettings = {
  contrast: 'default',
  textSize: 'normal',
  dyslexiaFont: false,
  reducedMotion: false,
  highlightLinks: false,
  screenReaderGuide: false,
};

function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [isInterpreterModalOpen, setIsInterpreterModalOpen] = useState(false);
  const [accessibilitySettings, setAccessibilitySettings] = useState<AccessibilitySettings>(() => {
    try {
      const saved = localStorage.getItem('nade_a11y_settings');
      return saved ? JSON.parse(saved) : defaultAccessibilitySettings;
    } catch {
      return defaultAccessibilitySettings;
    }
  });

  // Apply accessibility classes to html tag
  useEffect(() => {
    const root = document.documentElement;

    // Contrast
    root.classList.remove('high-contrast-dark', 'high-contrast-yellow');
    if (accessibilitySettings.contrast === 'high-contrast-dark') {
      root.classList.add('high-contrast-dark');
    } else if (accessibilitySettings.contrast === 'high-contrast-yellow') {
      root.classList.add('high-contrast-yellow');
    }

    // Text Size
    root.classList.remove('text-size-large', 'text-size-xlarge');
    if (accessibilitySettings.textSize === 'large') {
      root.classList.add('text-size-large');
    } else if (accessibilitySettings.textSize === 'xlarge') {
      root.classList.add('text-size-xlarge');
    }

    // Dyslexia Font
    if (accessibilitySettings.dyslexiaFont) {
      root.classList.add('font-dyslexia');
    } else {
      root.classList.remove('font-dyslexia');
    }

    // Reduced Motion
    if (accessibilitySettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Highlight Links
    if (accessibilitySettings.highlightLinks) {
      root.classList.add('highlight-links');
    } else {
      root.classList.remove('highlight-links');
    }

    try {
      localStorage.setItem('nade_a11y_settings', JSON.stringify(accessibilitySettings));
    } catch {
      // ignore
    }
  }, [accessibilitySettings]);

  const handleUpdateAccessibility = (newSettings: Partial<AccessibilitySettings>) => {
    setAccessibilitySettings((prev) => ({ ...prev, ...newSettings }));
  };

  const handleResetAccessibility = () => {
    setAccessibilitySettings(defaultAccessibilitySettings);
  };

  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#0F172A] selection:bg-[#E5A93C]/30 selection:text-[#0B1B3D]">
      {/* Accessible Skip to Content Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content (Alt + 1)
      </a>

      {/* Main Sticky Navigation Bar */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenInterpreterModal={() => setIsInterpreterModalOpen(true)}
      />

      {/* Main Page Content Body */}
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        {currentRoute === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenInterpreterModal={() => setIsInterpreterModalOpen(true)}
          />
        )}

        {currentRoute === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenInterpreterModal={() => setIsInterpreterModalOpen(true)}
          />
        )}

        {currentRoute === 'work' && (
          <ProgrammesView
            onNavigate={handleNavigate}
            onOpenInterpreterModal={() => setIsInterpreterModalOpen(true)}
          />
        )}

        {currentRoute === 'sign-language' && (
          <SignDictionaryView />
        )}

        {currentRoute === 'hub' && (
          <VideoHubView />
        )}

        {currentRoute === 'advocacy' && (
          <AdvocacyView
            onNavigate={handleNavigate}
            onOpenInterpreterModal={() => setIsInterpreterModalOpen(true)}
          />
        )}

        {currentRoute === 'resources' && (
          <ResourcesView />
        )}

        {currentRoute === 'stories' && (
          <StoriesView onNavigate={handleNavigate} />
        )}

        {currentRoute === 'news' && (
          <NewsView />
        )}

        {currentRoute === 'get-involved' && (
          <GetInvolvedView
            onNavigate={handleNavigate}
            onOpenInterpreterModal={() => setIsInterpreterModalOpen(true)}
          />
        )}

        {currentRoute === 'contact' && (
          <ContactView
            onOpenInterpreterModal={() => setIsInterpreterModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Persistent Accessibility Settings Toolbar */}
      <AccessibilityToolbar
        settings={accessibilitySettings}
        onUpdateSettings={handleUpdateAccessibility}
        onResetSettings={handleResetAccessibility}
      />

      {/* Certified Interpreter Booking Modal */}
      <InterpreterBookingModal
        isOpen={isInterpreterModalOpen}
        onClose={() => setIsInterpreterModalOpen(false)}
      />
    </div>
  );
}

export default App;
