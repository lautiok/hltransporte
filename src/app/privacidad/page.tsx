import HeroNosotros from "@/components/heroNosotros/HeroNosotros";
import PoliticaPrivacidad from "@/components/politicaPrivacidad/PoliticaPrivacidad";

export default function page() {
  return (
    <main>
      <HeroNosotros abajo="politica de" arriba="privacidad" />
      <PoliticaPrivacidad />
    </main>
  );
}
