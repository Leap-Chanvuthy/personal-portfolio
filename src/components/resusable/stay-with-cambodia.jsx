export default function StayWithCambodia() {
  return (
    <div className="fixed top-16 left-0 right-0 z-40 w-full overflow-hidden shadow-xl animate-in fade-in duration-500">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIhdFCjcWpuNQeYtKxx59OZv06rRmHDsWvtQ&s" 
        //   alt="Cambodia Background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-red-900/80 to-blue-900/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl container mx-auto py-4 md:py-5 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-3">
        
        <div className="flex-1 space-y-1">
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-wide drop-shadow-md leading-tight">
            Stand with Cambodia ✊
            <span className="hidden md:inline mx-2 text-white/60">|</span>
            <span className="block md:inline">Justice & Peace for Cambodia Now 🇰🇭</span>
          </h2>

          <p className="text-[11px] sm:text-xs md:text-sm text-gray-200 font-medium max-w-3xl mx-auto md:mx-0 leading-snug">
            End the aggression. Respect Cambodia’s sovereignty. Stop the war. <span className="font-bold underline">#ThailandOpenFire!</span>
          </p>
        </div>

      </div>

      {/* Decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-red-600 to-blue-600" />
    </div>
  );
}
