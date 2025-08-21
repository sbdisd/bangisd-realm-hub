import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ParticleEffect from "@/components/ParticleEffect";
import heroBg from "@/assets/hero-bg.jpg";
import bangIsdAvatar from "@/assets/bang-is-d-avatar.jpg";
import { Users, GamepadIcon, CreditCard, MessageCircle, Youtube } from "lucide-react";
import { useEffect, useState } from "react";

const Home = () => {
  const [latestVideoId, setLatestVideoId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Ganti dengan API Key dan Channel ID Anda
  const YOUTUBE_API_KEY = "GANTI_DENGAN_API_KEY_ANDA";
  const YOUTUBE_CHANNEL_ID = "GANTI_DENGAN_CHANNEL_ID_ANDA"; // Contoh: UC_your_channel_id

  useEffect(() => {
    const getLatestVideo = async () => {
      const UPLOADS_PLAYLIST_ID = YOUTUBE_CHANNEL_ID.replace('UC', 'UU');

      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${UPLOADS_PLAYLIST_ID}&maxResults=1&key=${YOUTUBE_API_KEY}`);
        if (!response.ok) {
          throw new Error('Gagal mengambil data dari YouTube API. Pastikan API Key benar.');
        }
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          setLatestVideoId(data.items[0].snippet.resourceId.videoId);
        } else {
          setError("Tidak ada video yang ditemukan di channel ini.");
        }
      } catch (err: any) {
        setError(err.message);
        console.error("Error fetching latest video:", err);
      } finally {
        setIsLoading(false);
      }
    };

    if (YOUTUBE_API_KEY !== "GANTI_DENGAN_API_KEY_ANDA" && YOUTUBE_CHANNEL_ID !== "GANTI_DENGAN_CHANNEL_ID_ANDA") {
      getLatestVideo();
    } else {
      setIsLoading(false);
      setError("Harap konfigurasikan YouTube API Key dan Channel ID di file Home.tsx.");
    }
  }, []);

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
             <Button className="btn-custom">
                <Users className="mr-2 h-5 w-5" />
                Social Media
              </Button>
            </Link>
            <Link to="https://discord.com/invite/abxMbqNH6w" className="w-full md:w-auto">
             <Button className="btn-custom">
                <MessageCircle className="mr-2 h-5 w-5" />
                Join Discord
              </Button>
            </Link>
            
            <Link to="/mabar" className="w-full md:w-auto">
              <Button className="btn-custom">
                <GamepadIcon className="mr-2 h-5 w-5" />
                Mabar Queue
              </Button>
            </Link>
            
            <Link to="/topup" className="w-full md:w-auto">
              <Button className="btn-custom">
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

      {/* Latest Video Section */}
      <section className="py-20 px-4 bg-background/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-fantasy text-center mb-16 text-glow">
            Latest Video
          </h2>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl aspect-video bg-secondary/20 rounded-lg border-2 border-accent/20 glass-panel overflow-hidden">
              {isLoading ? (
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-muted-foreground">Memuat video terbaru...</p>
                </div>
              ) : error ? (
                <div className="w-full h-full flex items-center justify-center p-4">
                  <p className="text-destructive text-center">{error}</p>
                </div>
              ) : latestVideoId ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${latestVideoId}`}
                  title="Latest YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-muted-foreground">Video tidak ditemukan.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
