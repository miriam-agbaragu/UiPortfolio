import { MobileFrame } from './MobileFrame';
import {
  Home,
  Search,
  Bell,
  User,
  Heart,
  MessageCircle,
  Share2,
  TrendingUp,
  ShoppingBag
} from 'lucide-react';

export function MobileAppScreens() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {/* Social Feed */}
      <MobileFrame title="Social Feed">
        <div className="h-full flex flex-col bg-background">
          {/* Header */}
          <div className="p-4 pt-12 border-b border-border flex items-center justify-between">
            <h1 className="text-xl">Feed</h1>
            <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
              <Bell className="w-5 h-5" />
            </button>
          </div>

          {/* Feed */}
          <div className="flex-1 overflow-y-auto">
            {[1, 2].map((post) => (
              <div key={post} className="border-b border-border p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full" />
                  <div className="flex-1">
                    <p className="text-sm">Jane Cooper</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <p className="text-sm mb-3">
                  Just finished an amazing hike! The views were absolutely breathtaking 🏔️
                </p>
                <div className="w-full h-48 bg-gradient-to-br from-blue-200 to-purple-200 rounded-xl mb-3" />
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <button className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Heart className="w-5 h-5" />
                      <span>124</span>
                    </button>
                    <button className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MessageCircle className="w-5 h-5" />
                      <span>12</span>
                    </button>
                  </div>
                  <button className="text-muted-foreground">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Nav */}
          <div className="border-t border-border p-4 flex justify-around">
            <Home className="w-6 h-6" />
            <Search className="w-6 h-6 text-muted-foreground" />
            <Bell className="w-6 h-6 text-muted-foreground" />
            <User className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </MobileFrame>

      {/* Dashboard */}
      <MobileFrame title="Dashboard">
        <div className="h-full flex flex-col bg-background p-6 pt-12">
          {/* Header */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">Welcome back,</p>
            <h1 className="text-2xl">Miriam Ufoma</h1>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl p-4 text-white">
              <p className="text-sm opacity-80 mb-2">Total Sales</p>
              <p className="text-2xl">$12.5k</p>
              <div className="flex items-center gap-1 text-xs mt-2">
                <TrendingUp className="w-3 h-3" />
                <span>+12%</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-4 text-white">
              <p className="text-sm opacity-80 mb-2">Orders</p>
              <p className="text-2xl">142</p>
              <div className="flex items-center gap-1 text-xs mt-2">
                <TrendingUp className="w-3 h-3" />
                <span>+8%</span>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="flex-1">
            <h3 className="text-sm mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">New order received</p>
                    <p className="text-xs text-muted-foreground">2 min ago</p>
                  </div>
                  <span className="text-sm">$89.00</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MobileFrame>

      {/* Profile */}
      <MobileFrame title="Profile">
        <div className="h-full flex flex-col bg-background">
          {/* Header with cover */}
          <div className="h-32 bg-gradient-to-r from-purple-400 to-pink-400 relative">
            <div className="absolute -bottom-12 left-6">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full border-4 border-white" />
            </div>
          </div>

          {/* Profile content */}
          <div className="flex-1 pt-16 px-6">
            <div className="mb-6">
              <h1 className="text-xl mb-1">Alex Morgan</h1>
              <p className="text-sm text-muted-foreground">@alexmorgan</p>
            </div>

            <div className="flex gap-6 mb-6">
              <div className="text-center">
                <p className="text-xl">289</p>
                <p className="text-xs text-muted-foreground">Posts</p>
              </div>
              <div className="text-center">
                <p className="text-xl">12.5k</p>
                <p className="text-xs text-muted-foreground">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-xl">742</p>
                <p className="text-xs text-muted-foreground">Following</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Product designer & creative enthusiast 🎨
              Sharing my journey in design and tech
            </p>

            <div className="flex gap-3 mb-6">
              <button className="flex-1 bg-primary text-primary-foreground py-3 rounded-xl">
                Edit Profile
              </button>
              <button className="px-6 border border-border rounded-xl">
                Share
              </button>
            </div>

            {/* Photo grid */}
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((photo) => (
                <div key={photo} className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </MobileFrame>
    </div>
  );
}
