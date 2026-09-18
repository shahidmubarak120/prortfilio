import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBG = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      await loadSlim(window.tsParticles);
      setInit(true);
    };
    initParticles();
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: { value: 60 },
          color: { value: "#6366f1" },
          links: {
            enable: true,
            color: "#8b5cf6",
            distance: 150,
          },
          move: {
            enable: true,
            speed: 2,
          },
          size: { value: 3 },
        },
      }}
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default ParticlesBG;



