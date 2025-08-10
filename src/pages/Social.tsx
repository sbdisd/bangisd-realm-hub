import { Button } from "@/components/ui/button";
import ParticleEffect from "@/components/ParticleEffect";
import bangIsdAvatar from "@/assets/bang-isd-avatar.jpg";
import { Youtube, Instagram, Twitter, Twitch, ExternalLink } from "lucide-react";

const Social = () => {
  const socialLinks = [
    {
      name: "YouTube",
      icon: Youtube,
      color: "text-red-500",
      url: "#",
      description: "Gaming content & tutorials"
    },
    {
      name: "Instagram",
      icon: Instagram,
      color: "text-pink-500",
      url: "#",
      description: "Behind the scenes & daily updates"
    },
    {
      name: "Twitter",
      icon: Twitter,
      color: "text-blue-400",
      url: "#",
      description: "Gaming news & quick updates"
    },
    {
      name: "Twitch",
      icon: Twitch,
      color: "text-purple-500",
      url: "#",
      description: "Live streaming & interactive gaming"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <ParticleEffect />
      
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <img
              src={bangIsdAvatar}
              alt="Bang Isd"
              className="w-32 h-32 rounded-full mx-auto shadow-[var(--shadow-aqua-glow)] border-4 border-gold/30"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-fantasy font-bold mb-6 text-glow">
            Bang Isd
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Welcome to my digital realm! I'm a passionate gamer and content creator, 
            sharing epic gaming moments and building an amazing community together.
          </p>
          
          <Button className="btn-celestial">
            <ExternalLink className="mr-2 h-5 w-5" />
            Follow All Platforms
          </Button>
        </div>

        {/* Social Links Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                className="glass-panel p-6 text-center transition-all duration-300 group"
              >
                <IconComponent className={`w-12 h-12 mx-auto mb-4 ${social.color} group-hover:scale-110 transition-transform`} />
                <h3 className="font-fantasy font-semibold text-lg mb-2">{social.name}</h3>
                <p className="text-sm text-muted-foreground">{social.description}</p>
              </a>
            );
          })}
        </div>

        {/* Featured Content Section */}
        <div className="glass-panel p-8 mb-16">
          <h2 className="text-3xl font-fantasy font-bold text-center mb-8 text-gold text-glow">
            Latest Content
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* YouTube Embed Placeholder */}
            <div className="bg-secondary/20 rounded-lg aspect-video flex items-center justify-center border-2 border-accent/20 glass-panel">
              <div className="text-center">
                <Youtube className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <p className="text-muted-foreground">Latest YouTube Video</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Connect your YouTube channel to display videos here
                </p>
              </div>
            </div>
            
            {/* Instagram Feed Placeholder */}
            <div className="bg-secondary/20 rounded-lg aspect-video flex items-center justify-center border-2 border-accent/20 glass-panel">
              <div className="text-center">
                <Instagram className="w-16 h-16 text-pink-500 mx-auto mb-4" />
                <p className="text-muted-foreground">Instagram Feed</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Connect your Instagram to show latest posts
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-panel p-6 text-center">
              <div className="text-2xl font-bold text-accent mb-2">1.2K</div>
              <div className="text-sm text-muted-foreground">Followers</div>
            </div>
            <div className="glass-panel p-6 text-center">
              <div className="text-2xl font-bold text-orange mb-2">350+</div>
              <div className="text-sm text-muted-foreground">Videos</div>
            </div>
            <div className="glass-panel p-6 text-center">
              <div className="text-2xl font-bold text-purple mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Total Views</div>
            </div>
            <div className="glass-panel p-6 text-center">
              <div className="text-2xl font-bold text-gold mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Active</div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Social;