import { MobileFrame } from './MobileFrame';
import { WifiOff, AlertCircle, SearchX, RefreshCw } from 'lucide-react';

export function ErrorScreens() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {/* No Connection */}
      <MobileFrame title="No Connection">
        <div className="h-full flex flex-col items-center justify-center p-8 pt-16">
          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
              <WifiOff className="w-12 h-12 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl">No Internet Connection</h2>
              <p className="text-sm text-muted-foreground max-w-xs">
                Please check your network settings and try again
              </p>
            </div>
            <button className="mt-6 px-8 py-3 bg-primary text-primary-foreground rounded-xl flex items-center gap-2">
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
          </div>
        </div>
      </MobileFrame>

      {/* Generic Error */}
      <MobileFrame title="Error State">
        <div className="h-full flex flex-col items-center justify-center p-8 pt-16">
          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-24 h-24 bg-destructive/10 rounded-full flex items-center justify-center">
              <AlertCircle className="w-12 h-12 text-destructive" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl">Something Went Wrong</h2>
              <p className="text-sm text-muted-foreground max-w-xs">
                We encountered an unexpected error. Our team has been notified.
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full max-w-xs mt-6">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-xl">
                Retry
              </button>
              <button className="px-8 py-3 border border-border rounded-xl">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </MobileFrame>

      {/* No Results */}
      <MobileFrame title="Empty State">
        <div className="h-full flex flex-col p-8 pt-16">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-3 bg-input-background rounded-xl"
              defaultValue="vintage camera"
            />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
              <SearchX className="w-12 h-12 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl">No Results Found</h2>
              <p className="text-sm text-muted-foreground max-w-xs">
                Try adjusting your search or filters to find what you're looking for
              </p>
            </div>
            <button className="mt-6 px-8 py-3 border border-border rounded-xl">
              Clear Filters
            </button>
          </div>
        </div>
      </MobileFrame>
    </div>
  );
}
