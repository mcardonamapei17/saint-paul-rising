import { Button } from "@/components/ui/button";

const CaucusBanner = () => {
  return (
    <section className="bg-campaign-green py-16 md:py-20 texture-green relative overflow-hidden">
      {/* Desktop: Original design */}
      <div className="hidden md:block">
        <div className="container text-center">
          <h2 className="font-display text-campaign-cream text-2xl md:text-4xl lg:text-5xl leading-tight">
            PRECINCT CAUCUS IS{" "}
            <span className="text-campaign-yellow">FEBRUARY 3RD!</span>
          </h2>
          <p className="font-display text-campaign-cream text-xl md:text-2xl mt-2">
            SIGN UP AND MAKE YOUR VOICE HEARD!
          </p>
          <a href="https://dfl.org/caucus/">
            <Button variant="heroYellow" size="lg" className="mt-6">
              Learn How to Caucus
            </Button>
          </a>
        </div>
      </div>

      {/* Mobile: iOS style with glassmorphism */}
      <div className="md:hidden relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-64 h-64 bg-campaign-yellow/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto">
            {/* Headline */}
            <h2 className="font-display text-campaign-cream text-3xl md:text-4xl lg:text-5xl mb-4 text-center font-bold">
              PRECINCT CAUCUS IS{" "}
              <span className="text-campaign-yellow">FEBRUARY 3RD!</span>
            </h2>
            
            {/* Subtext */}
            <p className="font-display text-campaign-cream/90 text-lg md:text-xl mb-8 text-center">
              SIGN UP AND MAKE YOUR VOICE HEARD!
            </p>

            {/* Button - iOS style card with glassmorphism */}
            <div className="max-w-xl mx-auto">
              <div 
                className="backdrop-blur-xl bg-white/10 rounded-3xl p-6 border border-white/20"
                style={{ 
                  borderRadius: '1.5rem',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)'
                }}
              >
                <a href="https://dfl.org/caucus/" className="block">
                  <Button 
                    variant="heroYellow" 
                    size="lg" 
                    className="w-full rounded-full h-14 text-base font-semibold active:scale-[0.97] active:opacity-90 transition-all duration-200 hover:scale-[1.02]"
                    style={{ 
                      borderRadius: '9999px',
                      boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.15)'
                    }}
                  >
                    Learn How to Caucus
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaucusBanner;
