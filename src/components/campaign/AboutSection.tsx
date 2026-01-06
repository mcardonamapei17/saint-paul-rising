import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import communityPhoto from "@/assets/ali.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="bg-campaign-cream py-20">
      <div className="container">
        {/* Title centered above everything */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-campaign-blue text-4xl md:text-5xl mb-6">
            MEET ALI
          </h2>
        </div>

        {/* Desktop: Grid with image on left and text on right */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
          {/* Image on left */}
          <div>
            <img 
              src={communityPhoto} 
              alt="Ali connecting with community members" 
              className="w-full rounded-sm shadow-strong"
            />
          </div>

          {/* Text on right */}
          <div className="font-body text-foreground text-lg space-y-4">
            <p>
                <strong className="text-campaign-blue">
                  My name is Abshir Ali
                </strong>
                , and I am running for the Minnesota House of Representatives in
                District 65B. I was raised in{" "}
                <strong className="text-campaign-blue">Saint Paul</strong> in a
                community full of {""}{" "}
                <strong className="text-campaign-blue">
                  resilience, culture, and potential
                </strong>{" "}
                {""} but also one that has too often been overlooked and
                underinvested in. {""} Growing up here shaped how I see {""}
                <strong className="text-campaign-blue">leadership</strong>
                
                . I
                learned early that real change does not come from talking about
                communities. <strong className="text-campaign-blue">It comes from standing with them and doing the
                work</strong>.
              </p>
              <p>
                I am running because {' '} <strong className="text-campaign-blue"> District 65B </strong>  deserves representation that {' '} <strong className="text-campaign-blue"> listens, leads, and delivers. </strong> This campaign is about building a future where {' '}<strong className="text-campaign-blue"> every neighborhood is valued, every voice matters, and the next generation can see themselves in the people fighting for them at the Capitol. </strong>
              </p>

            <Link to="/about">
              <Button variant="action" size="lg" className="mt-8">
                Learn More About Ali &gt;
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile: iOS style cards */}
        <div className="md:hidden relative overflow-hidden py-8">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-0 w-64 h-64 bg-campaign-yellow/8 rounded-full blur-3xl" />
            <div className="absolute bottom-40 left-0 w-48 h-48 bg-campaign-green/8 rounded-full blur-2xl" />
          </div>
          
          <div className="relative z-10 px-4 space-y-6">
            {/* Image - iOS style card */}
            <div className="max-w-2xl mx-auto">
              <div 
                className="relative rounded-3xl overflow-hidden"
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
            <div className="max-w-2xl mx-auto">
              <div 
                className="backdrop-blur-xl bg-white/70 rounded-3xl p-6 md:p-8 border border-white/60 font-body text-foreground text-base md:text-lg space-y-4"
                style={{ 
                  borderRadius: '1.5rem',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08)'
                }}
              >
                <p>
                  <strong className="text-campaign-blue">
                    My name is Abshir Ali
                  </strong>
                  , and I am running for the Minnesota House of Representatives in
                  District 65B. I was raised in{" "}
                  <strong className="text-campaign-blue">Saint Paul</strong> in a
                  community full of {""}{" "}
                  <strong className="text-campaign-blue">
                    resilience, culture, and potential
                  </strong>{" "}
                  {""} but also one that has too often been overlooked and
                  underinvested in. {""} Growing up here shaped how I see {""}
                  <strong className="text-campaign-blue">leadership</strong>
                  
                  . I
                  learned early that real change does not come from talking about
                  communities. <strong className="text-campaign-blue">It comes from standing with them and doing the
                  work</strong>.
                </p>
                <p>
                  I am running because {' '} <strong className="text-campaign-blue"> District 65B </strong>  deserves representation that {' '} <strong className="text-campaign-blue"> listens, leads, and delivers. </strong> This campaign is about building a future where {' '}<strong className="text-campaign-blue"> every neighborhood is valued, every voice matters, and the next generation can see themselves in the people fighting for them at the Capitol. </strong>
                </p>
              </div>
            </div>

            {/* Button - iOS style card */}
            <div className="max-w-2xl mx-auto">
              <div 
                className="backdrop-blur-xl bg-white/70 rounded-3xl p-6 border border-white/60"
                style={{ 
                  borderRadius: '1.5rem',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08)'
                }}
              >
                <Link to="/about" className="block">
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
