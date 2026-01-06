import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import communityPhoto from "@/assets/ali.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="bg-campaign-cream pt-20">
      {/* Title - Normal flow, not absolute */}
      <div className="relative z-20 text-center pb-12 px-4">
        <h1 className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight font-bold">
          <span 
            className="text-campaign-blue block" 
            style={{ textShadow: '2px 2px 0 hsl(45 90% 55% / 0.5)' }}
          >
            MEET ALI
          </span>
        </h1>
      </div>

      {/* Desktop Content Section - min-h-screen starts here */}
      <div className="hidden md:block relative min-h-screen overflow-hidden bg-campaign-cream">
        {/* White Background - Right Side (desktop) */}
        <div 
          className="absolute right-0 top-0 h-full z-0 overflow-hidden"
          style={{ top: '0', height: '100%', width: '55%' }}
        >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-campaign-cream/90" />
        
        {/* Decorative accent line - thicker */}
        <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-b from-campaign-green via-campaign-yellow to-campaign-blue" />
        
        {/* Decorative geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-campaign-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-campaign-green/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-8 w-16 h-16 bg-campaign-blue/10 rounded-full blur-xl" />
        
        {/* Decorative lines pattern */}
        <div className="absolute top-0 left-0 w-32 h-full opacity-5">
          <div className="absolute top-0 left-0 w-px h-full bg-campaign-blue" />
          <div className="absolute top-0 left-8 w-px h-full bg-campaign-green" />
          <div className="absolute top-0 left-16 w-px h-full bg-campaign-yellow" />
        </div>
        
        {/* Corner accent */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-campaign-yellow/20" />
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-campaign-green/20" />
      </div>

      {/* Background Image - Left Side (desktop) */}
      <div 
        className="hidden md:block absolute left-0 top-0 h-full overflow-hidden z-0"
        style={{ top: '0', height: '90%', width: '45%' }}
      >
        <img 
          src={communityPhoto} 
          alt="Ali connecting with community members" 
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Desktop Content - Right Side */}
      <div className="flex absolute right-0 top-0 h-full z-10 items-center w-[55%]" style={{ top: '0', height: '90%' }}>
        <div className="pr-8 md:pr-12 lg:pr-16 pl-6 md:pl-8 lg:pl-10 w-full h-full flex flex-col justify-center py-8 md:py-12">
          {/* Right Column - Text & CTA */}
          <div className="flex flex-col gap-6 justify-center relative z-10 h-full">
            {/* Decorative element before text */}
            <div className="flex items-center gap-4 mb-2">
              <div className="w-2 h-2 bg-campaign-blue rounded-full" />
              <div className="w-12 h-1 bg-gradient-to-r from-campaign-green to-campaign-yellow" />
            </div>
            
            {/* Main Text */}
            <div className="font-body text-foreground text-lg space-y-4">
              <p>
                <strong className="text-campaign-blue">
                  My name is Abshir Ali
                </strong>
                , and I am running for the Minnesota House of Representatives in
                District 65B. I was raised in{" "}
                <strong className="text-campaign-blue">Saint Paul</strong> in a
                community full of{" "}
                <strong className="text-campaign-blue">
                  resilience, culture, and potential
                </strong>{" "}
                but also one that has too often been overlooked and
                underinvested in. Growing up here shaped how I see{" "}
                <strong className="text-campaign-blue">leadership</strong>. I
                learned early that real change does not come from talking about
                communities. <strong className="text-campaign-blue">It comes from standing with them and doing the work</strong>.
              </p>
             {/*  <p>
                I have spent years{" "}
                <strong className="text-campaign-blue">organizing, building coalitions, and serving in leadership roles</strong> that put me at the intersection of community and government. I have worked inside city systems and alongside residents,{" "}
                <strong className="text-campaign-blue">helping turn ideas into action and making sure everyday people have a voice in decisions that affect their lives.</strong> Those experiences taught me how policy is made and how it should be made.
              </p> */}
              <p>
                I am a young leader, but I am not new to responsibility. I bring{" "}
                <strong className="text-campaign-blue">vision, energy, and a deep understanding of how to move institutions</strong> while staying grounded in the needs of the people. I believe Minnesota is strongest when leadership reflects the communities it serves and when government{" "}
                <strong className="text-campaign-blue">works with urgency, integrity, and compassion</strong>.
              </p>
              <p>
                I am running because{" "}
                <strong className="text-campaign-blue">District 65B</strong> deserves representation that{" "}
                <strong className="text-campaign-blue">listens, leads, and delivers.</strong> This campaign is about building a future where{" "}
                <strong className="text-campaign-blue">every neighborhood is valued, every voice matters, and the next generation can see themselves in the people fighting for them at the Capitol.</strong>
              </p>
            </div>

            {/* Decorative divider */}
            <div className="flex items-center gap-3 my-4">
              <div className="w-24 h-px bg-gradient-to-l from-campaign-yellow to-transparent" />
              <div className="w-2 h-2 bg-campaign-blue rounded-full" />
              <div className="w-12 h-1 bg-gradient-to-r from-campaign-yellow to-campaign-green" />
            </div>

            {/* CTA Button */}
            <Link to="/about" className="inline-block">
              <Button variant="action" size="lg" className="mt-4">
                Learn More About Ali &gt;
              </Button>
            </Link>
          </div>
        </div>
      </div>
      </div>

      {/* Mobile Design - iOS Style */}
      <div className="md:hidden relative z-10 py-8 px-4 sm:px-6 space-y-6 w-full overflow-x-hidden">
        {/* Background with subtle gradient - iOS style */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-campaign-cream via-campaign-cream/80 to-transparent" />
          {/* Floating orbs - iOS style */}
          <div className="absolute top-32 right-4 w-32 h-32 bg-campaign-yellow/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-48 -left-16 w-24 h-24 bg-campaign-green/8 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        </div>

        {/* Image - iOS style card */}
        <div className="relative mb-4 w-full">
          <div 
            className="relative rounded-3xl overflow-hidden shadow-2xl w-full"
            style={{ 
              borderRadius: '1.5rem',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08)'
            }}
          >
            <img 
              src={communityPhoto} 
              alt="Ali connecting with community members" 
              className="w-full h-auto object-cover"
            />
            {/* Subtle vignette effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Text - iOS style card */}
        <div className="mb-4 relative w-full">
          <div 
            className="backdrop-blur-xl bg-white/70 rounded-3xl p-4 sm:p-6 border border-white/60 font-body text-foreground text-sm sm:text-base space-y-4 w-full"
            style={{ 
              borderRadius: '1.5rem',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08)'
            }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-campaign-yellow/5 to-transparent rounded-full blur-2xl" />
            
            <div className="relative z-10 space-y-4">
              <p>
                <strong className="text-campaign-blue">
                  My name is Abshir Ali
                </strong>
                , and I am running for the Minnesota House of Representatives in
                District 65B. I was raised in{" "}
                <strong className="text-campaign-blue">Saint Paul</strong> in a
                community full of{" "}
                <strong className="text-campaign-blue">
                  resilience, culture, and potential
                </strong>{" "}
                but also one that has too often been overlooked and
                underinvested in. Growing up here shaped how I see{" "}
                <strong className="text-campaign-blue">leadership</strong>. I
                learned early that real change does not come from talking about
                communities. <strong className="text-campaign-blue">It comes from standing with them and doing the work</strong>.
              </p>
              <p>
                I am running because{" "}
                <strong className="text-campaign-blue">District 65B</strong> deserves representation that{" "}
                <strong className="text-campaign-blue">listens, leads, and delivers.</strong> This campaign is about building a future where{" "}
                <strong className="text-campaign-blue">every neighborhood is valued, every voice matters, and the next generation can see themselves in the people fighting for them at the Capitol.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Button - iOS style card */}
        <div className="relative w-full">
          <div 
            className="backdrop-blur-xl bg-white/70 rounded-3xl p-4 sm:p-6 border border-white/60 w-full"
            style={{ 
              borderRadius: '1.5rem',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08)'
            }}
          >
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-campaign-green/5 to-transparent rounded-full blur-xl" />
            
            <Link to="/about" className="block relative z-10">
              <Button 
                variant="action" 
                size="lg" 
                className="w-full rounded-full h-14 text-base font-semibold active:scale-[0.97] active:opacity-90 transition-all duration-200 hover:scale-[1.02]"
                style={{ 
                  borderRadius: '9999px',
                  boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.15)'
                }}
              >
                Learn More About Ali &gt;
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
