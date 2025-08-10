import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ParticleEffect from "@/components/ParticleEffect";
import { useToast } from "@/hooks/use-toast";
import { GamepadIcon, Users, Clock, Send } from "lucide-react";

const Mabar = () => {
  const [formData, setFormData] = useState({
    nickname: "",
    gameTitle: "",
    gameId: "",
    preferredTime: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const gameOptions = [
    "Mobile Legends",
    "PUBG Mobile",
    "Free Fire",
    "Genshin Impact",
    "Call of Duty Mobile",
    "Valorant",
    "Roblox",
    "Minecraft",
    "Other"
  ];

  const timeSlots = [
    "Morning (08:00 - 12:00)",
    "Afternoon (12:00 - 17:00)",
    "Evening (17:00 - 22:00)",
    "Night (22:00 - 02:00)",
    "Flexible"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // Here you would typically send to Google Sheets or your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Queue Joined Successfully! 🎮",
        description: "You've been added to the mabar queue. I'll contact you soon!",
      });

      // Reset form
      setFormData({
        nickname: "",
        gameTitle: "",
        gameId: "",
        preferredTime: "",
        notes: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to join queue. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <ParticleEffect />
      
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-fantasy font-bold mb-6 text-glow">
            Mabar Queue
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the queue to play together! Fill out the form below and I'll reach out to coordinate our gaming session.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Queue Info */}
            <div className="space-y-8">
              <div className="glass-panel p-8">
                <h2 className="text-2xl font-fantasy font-bold mb-6 text-accent">
                  Queue Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Users className="w-8 h-8 text-peach" />
                    <div>
                      <h3 className="font-semibold">Current Queue</h3>
                      <p className="text-sm text-muted-foreground">12 players waiting</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Clock className="w-8 h-8 text-accent" />
                    <div>
                      <h3 className="font-semibold">Average Wait Time</h3>
                      <p className="text-sm text-muted-foreground">2-4 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <GamepadIcon className="w-8 h-8 text-peach" />
                    <div>
                      <h3 className="font-semibold">Most Popular Games</h3>
                      <p className="text-sm text-muted-foreground">Mobile Legends, PUBG Mobile</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-8">
                <h3 className="text-xl font-fantasy font-bold mb-4 text-accent">
                  Queue Rules
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Be respectful and friendly to all players</li>
                  <li>• Have a stable internet connection</li>
                  <li>• Be available during your selected time slot</li>
                  <li>• Communication via Discord is preferred</li>
                  <li>• Have fun and enjoy the game!</li>
                </ul>
              </div>
            </div>

            {/* Queue Form */}
            <div className="glass-panel p-8">
              <h2 className="text-2xl font-fantasy font-bold mb-6 text-peach">
                Join the Queue
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nickname">In-Game Nickname *</Label>
                  <Input
                    id="nickname"
                    value={formData.nickname}
                    onChange={(e) => handleInputChange("nickname", e.target.value)}
                    placeholder="Enter your in-game name"
                    required
                    className="bg-secondary/20 border-accent/30 focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gameTitle">Game Title *</Label>
                  <Select value={formData.gameTitle} onValueChange={(value) => handleInputChange("gameTitle", value)}>
                    <SelectTrigger className="bg-secondary/20 border-accent/30 focus:border-accent">
                      <SelectValue placeholder="Select a game" />
                    </SelectTrigger>
                    <SelectContent>
                      {gameOptions.map((game) => (
                        <SelectItem key={game} value={game}>{game}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gameId">Game ID/Username</Label>
                  <Input
                    id="gameId"
                    value={formData.gameId}
                    onChange={(e) => handleInputChange("gameId", e.target.value)}
                    placeholder="Your game ID or username"
                    className="bg-secondary/20 border-accent/30 focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredTime">Preferred Time Slot *</Label>
                  <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                    <SelectTrigger className="bg-secondary/20 border-accent/30 focus:border-accent">
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    placeholder="Any special requests or additional information..."
                    rows={4}
                    className="bg-secondary/20 border-accent/30 focus:border-accent resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="btn-peach w-full"
                  disabled={isSubmitting || !formData.nickname || !formData.gameTitle || !formData.preferredTime}
                >
                  {isSubmitting ? (
                    "Joining Queue..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Join Mabar Queue
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mabar;