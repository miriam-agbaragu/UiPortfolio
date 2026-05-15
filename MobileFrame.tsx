interface MobileFrameProps {
  children: React.ReactNode;
  title?: string;
}

export function MobileFrame({ children, title }: MobileFrameProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      {title && <h3 className="text-sm text-muted-foreground">{title}</h3>}
      <div className="relative">
        {/* Phone frame */}
        <div className="w-[375px] h-[812px] bg-black rounded-[3rem] p-3 shadow-2xl">
          {/* Screen */}
          <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10" />
            {/* Content */}
            <div className="w-full h-full overflow-y-auto">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
