import { useEffect } from "react";
import Anime from "../components/Anime"
import Body from "../components/Body"

export default function LandingPage() {
  useEffect(() => {

    wakeUpServer();
  }, []);

  const wakeUpServer  = async () => {
    try {

      const response = await fetch("https://weekend-portal.onrender.com");
      if (response.ok) {
        console.log("Server woke up successfully.");
      } else {
        console.error("Failed to wake up server.");
      }
    } catch (error) {
      console.error("Error waking up server:", error);
    }
  };
  return (
    <Body sidebar>
        <Anime />
    </Body>
  )
}
