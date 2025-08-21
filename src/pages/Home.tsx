import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ParticleEffect from "@/components/ParticleEffect";
import heroBg from "@/assets/hero-bg.jpg";
import bangIsdAvatar from "@/assets/bang-isd-avatar.jpg";
import { Users, GamepadIcon, CreditCard, MessageCircle, Youtube } from "lucide-react";
import { useEffect, useState } from "react";

const Home = () => {
  const [latestVideoId, setLatestVideoId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Ganti dengan API Key dan Channel ID Anda
 const YOUTUBE_API_KEY = "AIzaSyDn8rDHnqMjX-9mo-lkCEvwLewL2v7Sfa4"; 
 const YOUTUBE_CHANNEL_ID = "UC1JoEzzcJG48seclqxIgoqw"; // Contoh: UC_your_channel_id

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
        className="relative min-h-screen flex items-center justify-center hero-bg py-20"
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

          {/* Sub
