import { useState } from 'react';
import { OnboardingScreens } from './components/OnboardingScreens';
import { ErrorScreens } from './components/ErrorScreens';
import { CheckoutScreens } from './components/CheckoutScreens';
import { MobileAppScreens } from './components/MobileAppScreens';

type TabType = 'flows' | 'onboarding' | 'errors' | 'checkout';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('flows');

  const tabs = [
    { id: 'flows' as const, label: 'Mobile App Flows' },
    { id: 'onboarding' as const, label: 'Onboarding' },
    { id: 'errors' as const, label: 'Error Messages' },
    { id: 'checkout' as const, label: 'Checkout Flow' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-4xl mb-2">Mobile UI Portfolio</h1>
          <p className="text-muted-foreground">
            A collection of mobile app screen designs and user flows
          </p>
        </div>
      </header>

      {/* Tabs */}
      <div className="border-b border-border bg-card sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary text-foreground'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {activeTab === 'flows' && <MobileAppScreens />}
        {activeTab === 'onboarding' && <OnboardingScreens />}
        {activeTab === 'errors' && <ErrorScreens />}
        {activeTab === 'checkout' && <CheckoutScreens />}
      </main>
    </div>
  );
}
