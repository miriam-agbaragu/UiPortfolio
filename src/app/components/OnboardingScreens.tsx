import { MobileFrame } from './MobileFrame';
import { ChevronRight, Sparkles, Shield, Zap } from 'lucide-react';

export function OnboardingScreens() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {/* Welcome Screen */}
      <MobileFrame title="Welcome">
        <div className="h-full flex flex-col items-center justify-between p-8 pt-16 pb-12 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="flex-1 flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl flex items-center justify-center">
              <Sparkles className="w-16 h-16 text-white" />
            </div>
          </div>
          <div className="text-center space-y-4">
            <h1 className="text-3xl">Welcome to Aurtentics</h1>
            <p className="text-muted-foreground">
              Discover a new way to manage your daily tasks with ease
            </p>
          </div>
          <button className="w-full bg-primary text-primary-foreground py-4 rounded-2xl flex items-center justify-center gap-2">
            Get Started
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </MobileFrame>

      {/* Feature 1 */}
      <MobileFrame title="Feature Highlight">
        <div className="h-full flex flex-col items-center justify-between p-8 pt-16 pb-12">
          <div className="w-20 h-1 bg-muted rounded-full mb-8" />
          <div className="flex-1 flex items-center justify-center">
            <div className="w-40 h-40 bg-blue-100 rounded-full flex items-center justify-center">
              <Shield className="w-20 h-20 text-blue-600" />
            </div>
          </div>
          <div className="text-center space-y-4">
            <h2 className="text-2xl">Secure & Private</h2>
            <p className="text-muted-foreground">
              Your data is encrypted end-to-end and never shared with third parties
            </p>
          </div>
          <div className="flex gap-2 mt-8">
            <div className="w-2 h-2 rounded-full bg-muted" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-muted" />
          </div>
          <div className="w-full flex gap-3 mt-6">
            <button className="flex-1 py-3 border border-border rounded-xl">Skip</button>
            <button className="flex-1 py-3 bg-primary text-primary-foreground rounded-xl">Next</button>
          </div>
        </div>
      </MobileFrame>

      {/* Feature 2 */}
      <MobileFrame title="Quick Setup">
        <div className="h-full flex flex-col items-center justify-between p-8 pt-16 pb-12">
          <div className="w-20 h-1 bg-muted rounded-full mb-8" />
          <div className="flex-1 flex items-center justify-center">
            <div className="w-40 h-40 bg-amber-100 rounded-full flex items-center justify-center">
              <Zap className="w-20 h-20 text-amber-600" />
            </div>
          </div>
          <div className="text-center space-y-4">
            <h2 className="text-2xl">Lightning Fast</h2>
            <p className="text-muted-foreground">
              Get started in seconds with our streamlined setup process
            </p>
          </div>
          <div className="flex gap-2 mt-8">
            <div className="w-2 h-2 rounded-full bg-muted" />
            <div className="w-2 h-2 rounded-full bg-muted" />
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
          <button className="w-full bg-primary text-primary-foreground py-4 rounded-2xl mt-6">
            Continue
          </button>
        </div>
      </MobileFrame>
    </div>
  );
}
