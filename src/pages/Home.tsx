import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ParticleEffect from "@/components/ParticleEffect";
import heroBg from "@/assets/hero-bg.jpg";
import bangIsdAvatar from "@/assets/bang-isd-avatar.jpg";
import { Users, GamepadIcon, CreditCard } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <ParticleEffect />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center hero-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(42, 45, 55, 0.7), rgba(62, 77, 96, 0.7)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-4 text-center z-10">
          {/* Avatar */}
          <div className="mb-8 inline-block">
            <img
              src={bangIsdAvatar}
              alt="Bang Isd Avatar"
              className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto shadow-[var(--shadow-aqua-glow)] border-4 border-gold/30 hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Main Title */}
          <h1 className="text-hero mb-6 font-fantasy">
            Bang Isd Official
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gold mb-12 font-medium text-glow">
            Streaming • Mabar • Top-Up
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
            <Link to="/social" className="w-full md:w-auto">
             <button className="btn-custom">
                <Users className="mr-2 h-5 w-5" />
                Social Media
              </Button>
            </Link>
            
            <Link to="/mabar" className="w-full md:w-auto">
              <button className="btn-custom">
                <GamepadIcon className="mr-2 h-5 w-5" />
                Mabar Queue
              </Button>
            </Link>
            
            <Link to="/topup" className="w-full md:w-auto">
              <button className="btn-custom">
                <CreditCard className="mr-2 h-5 w-5" />
                Game Top-Up
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center shadow-[var(--shadow-gold-glow)]">
            <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-fantasy text-center mb-16 text-glow">
            Streamer Gaming Indonesia
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 text-center transition-all duration-300">
              <Users className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-fantasy font-semibold mb-4">Connect & Stream</h3>
              <p className="text-muted-foreground">
                Follow my gaming journey across all social platforms and join live streams
              </p>
            </div>
            
            <div className="glass-panel p-8 text-center transition-all duration-300">
              <GamepadIcon className="w-16 h-16 text-orange mx-auto mb-4" />
              <h3 className="text-xl font-fantasy font-semibold mb-4">Mabar Together</h3>
              <p className="text-muted-foreground">
                Join the queue for collaborative gaming sessions and make new friends
              </p>
            </div>
            
            <div className="glass-panel p-8 text-center transition-all duration-300">
              <CreditCard className="w-16 h-16 text-purple mx-auto mb-4" />
              <h3 className="text-xl font-fantasy font-semibold mb-4">Easy Top-Up</h3>
              <p className="text-muted-foreground">
                Quick and secure game currency top-up services for your favorite games
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
