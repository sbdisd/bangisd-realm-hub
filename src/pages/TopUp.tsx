import { Button } from "@/components/ui/button";
import ParticleEffect from "@/components/ParticleEffect";
import { ExternalLink, Shield, Zap, CreditCard, Star } from "lucide-react";

const TopUp = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "100% safe and encrypted payment processing"
    },
    {
      icon: Zap,
      title: "Instant Delivery",
      description: "Credits delivered to your account within minutes"
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Methods",
      description: "Support for credit cards, e-wallets, and bank transfers"
    },
    {
      icon: Star,
      title: "Best Rates",
      description: "Competitive pricing with frequent bonus offers"
    }
  ];

  const supportedGames = [
    "Mobile Legends",
    "PUBG Mobile", 
    "Free Fire",
    "Genshin Impact",
    "Call of Duty Mobile",
    "Valorant",
    "Roblox",
    "Minecraft",
    "Honor of Kings",
    "Clash of Clans"
  ];

  return (
    <div className="min-h-screen pt-20">
      <ParticleEffect />
      
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-fantasy font-bold mb-6 text-glow">
            Game Top-Up Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Fast, secure, and reliable top-up services for all your favorite games. 
            Get the best rates and instant delivery!
          </p>
          
          <Button className="btn-celestial text-xl px-8 py-4">
            <ExternalLink className="mr-2 h-6 w-6" />
            Visit Top-Up Website
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="glass-panel p-6 text-center transition-all duration-300">
                <IconComponent className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-fantasy font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Supported Games */}
        <div className="glass-panel p-8 mb-16">
          <h2 className="text-3xl font-fantasy font-bold text-center mb-8 text-gold text-glow">
            Supported Games
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {supportedGames.map((game, index) => (
              <div 
                key={index}
                className="bg-secondary/20 rounded-lg p-4 text-center border border-accent/20 hover:border-accent/40 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gradient-celestial rounded-lg mx-auto mb-2 flex items-center justify-center shadow-[var(--shadow-gold-glow)]">
                  <span className="text-xl font-bold text-gold-foreground">
                    {game.charAt(0)}
                  </span>
                </div>
                <p className="text-sm font-medium">{game}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Information */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="glass-panel p-8 text-center">
            <div className="text-4xl font-bold text-accent mb-2">Fast</div>
            <div className="text-lg font-fantasy font-semibold mb-4">Instant Delivery</div>
            <p className="text-muted-foreground">
              Credits delivered within 1-5 minutes after successful payment
            </p>
          </div>
          
          <div className="glass-panel p-8 text-center border-2 border-gold/50">
            <div className="text-4xl font-bold text-gold mb-2">Safe</div>
            <div className="text-lg font-fantasy font-semibold mb-4">100% Secure</div>
            <p className="text-muted-foreground">
              SSL encrypted transactions with money-back guarantee
            </p>
          </div>
          
          <div className="glass-panel p-8 text-center">
            <div className="text-4xl font-bold text-purple mb-2">24/7</div>
            <div className="text-lg font-fantasy font-semibold mb-4">Support</div>
            <p className="text-muted-foreground">
              Round-the-clock customer support for any issues
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center glass-panel p-12">
          <h2 className="text-3xl font-fantasy font-bold mb-6 text-gold text-glow">
            Ready to Power Up Your Game?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied gamers who trust our top-up services. 
            Quick, reliable, and always at the best prices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-celestial text-lg px-8 py-3">
              <ExternalLink className="mr-2 h-5 w-5" />
              Start Top-Up Now
            </Button>
            <Button className="btn-magical text-lg px-8 py-3">
              View Price List
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-muted-foreground">4.9/5 from 2,500+ reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopUp;