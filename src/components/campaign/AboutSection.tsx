import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import communityPhoto from "@/assets/persona.jpg";

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

        {/* Grid with image on left and text on right */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
      </div>
    </section>
  );
};

export default AboutSection;
