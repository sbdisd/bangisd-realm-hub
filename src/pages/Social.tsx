import { Button } from "@/components/ui/button";
import ParticleEffect from "@/components/ParticleEffect";
import bangIsdAvatar from "@/assets/bang-isd-avatar.jpg";
import { Youtube, ExternalLink, Users } from "lucide-react";
import { useEffect, useState } from "react";

const Social = () => {
  const socialLinks = [
    {
      name: "YouTube",
      icon: Youtube,
      color: "text-red-500",
      url: "https://www.youtube.com/@bangisd",
      description: "Gaming content & tutorials"
    },
    {
      name: "Discord",
      icon: Users,
      color: "text-indigo-400",
      url: "https://discord.com/invite/abxMbqNH6w",
      description: "Join our community and chat with me live!"
    }
  ];

  const [latestVideoId, setLatestVideoId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Ganti dengan API Key dan Channel ID Anda
  const YOUTUBE_API_KEY = "AIzaSyDn8rDHnqMjX-9mo-lkCEvwLewL2v7Sfa4";
  const YOUTUBE_CHANNEL_ID = "UC1JoEzzcJG48seclqxIgoqw"; // Contoh: UC_your_channel_id

  useEffect(() => {
    const getLatestVideo = async () => {
      // Setiap channel memiliki playlist 'uploads' khusus.
      // ID-nya adalah Channel ID dengan 'UC' di awal diganti menjadi 'UU'.
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
      setError("Harap konfigurasikan YouTube API Key dan Channel ID di file Social.tsx.");
    }
  }, []);


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
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 max-w-2xl gap-6 mb-16">
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
        </div>

        {/* Featured Content Section */}
        <div className="glass-panel p-8 mb-16">
          <h2 className="text-3xl font-fantasy font-bold text-center mb-8 text-gold text-glow">
            Latest Content
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
