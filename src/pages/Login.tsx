import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ParticleEffect from "@/components/ParticleEffect";
import { useToast } from "@/hooks/use-toast";
import { LogIn } from "lucide-react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (email === "test@example.com" && password === "password") {
      toast({
        title: "Login Successful!",
        description: "Welcome back!",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid email or password.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-20">
      <ParticleEffect />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-fantasy font-bold mb-6 text-glow">
            Login
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access your account to manage your settings and preferences.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="glass-panel p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="bg-secondary/20 border-accent/30 focus:border-accent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="bg-secondary/20 border-accent/30 focus:border-accent"
                />
              </div>

              <Button 
                type="submit" 
                className="btn-celestial w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Logging in..."
                ) : (
                  <>
                    <LogIn className="mr-2 h-5 w-5" />
                    Login
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
