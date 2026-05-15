import { MobileFrame } from './MobileFrame';
import { ShoppingBag, CreditCard, Check, Lock, ChevronRight } from 'lucide-react';

export function CheckoutScreens() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {/* Cart */}
      <MobileFrame title="Shopping Cart">
        <div className="h-full flex flex-col bg-background">
          {/* Header */}
          <div className="p-6 pt-12 border-b border-border">
            <h1 className="text-2xl">SHOPPING CART</h1>
            <p className="text-sm text-muted-foreground mt-1">3 items</p>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex gap-4">
                <div className="w-20 h-20 bg-muted rounded-xl" />
                <div className="flex-1">
                  <h3 className="text-sm">PULL-ON TROUSERS</h3>
                  <p className="text-xs text-muted-foreground mt-1">Black • Size M</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <button className="w-6 h-6 border border-border rounded text-xs">−</button>
                      <span className="text-sm">1</span>
                      <button className="w-6 h-6 border border-border rounded text-xs">+</button>
                    </div>
                    <span className="text-sm">$129.99</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-border space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>$389.97</span>
            </div>
            <button className="w-full bg-primary text-primary-foreground py-4 rounded-xl flex items-center justify-center gap-2">
              Proceed to Checkout
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </MobileFrame>

      {/* Payment */}
      <MobileFrame title="Payment">
        <div className="h-full flex flex-col bg-background">
          {/* Header */}
          <div className="p-6 pt-12 border-b border-border">
            <h1 className="text-2xl">PAYMENT METHOD</h1>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Card */}
            <div className="w-full h-48 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <CreditCard className="w-8 h-8 mb-8" />
                <p className="text-sm opacity-80 mb-2">Card Number</p>
                <p className="text-xl tracking-wider mb-6">•••• •••• •••• 4242</p>
                <div className="flex justify-between">
                  <div>
                    <p className="text-xs opacity-80">Expires</p>
                    <p className="text-sm">12/30</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs opacity-80">CVV</p>
                    <p className="text-sm">•••</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Add new card */}
            <button className="w-full py-4 border-2 border-dashed border-border rounded-xl text-muted-foreground">
              + Add New Card
            </button>

            {/* Security note */}
            <div className="flex gap-3 p-4 bg-muted/50 rounded-xl">
              <Lock className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground">
                Your payment information is encrypted and secure
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-border space-y-4">
            <div className="flex justify-between">
              <span>Total</span>
              <span className="text-xl">$389.97</span>
            </div>
            <button className="w-full bg-primary text-primary-foreground py-4 rounded-xl">
              Pay Now
            </button>
          </div>
        </div>
      </MobileFrame>

      {/* Success */}
      <MobileFrame title="Order Confirmation">
        <div className="h-full flex flex-col items-center justify-center p-8 pt-16 bg-gradient-to-b from-green-50 to-background">
          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-12 h-12 text-white" strokeWidth={3} />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl">Order Confirmed!</h2>
              <p className="text-sm text-muted-foreground max-w-xs">
                Your order #ORD-12345 has been placed successfully
              </p>
            </div>

            {/* Order summary */}
            <div className="w-full max-w-xs space-y-3 mt-8">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Order Total</span>
                <span>$389.97</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Estimated Delivery</span>
                <span>May 20, 2026</span>
              </div>
            </div>

            <div className="w-full flex flex-col gap-3 mt-8">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-xl">
                Track Order
              </button>
              <button className="px-8 py-3 border border-border rounded-xl">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </MobileFrame>
    </div>
  );
}
