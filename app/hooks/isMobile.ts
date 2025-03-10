import { useState, useEffect } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Verificar inicial
    checkIsMobile();

    // Adicionar listener para redimensionamento
    window.addEventListener("resize", checkIsMobile);

    // Limpar listener
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
}
