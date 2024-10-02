import HeroNosotros from "@/components/heroNosotros/HeroNosotros";
import Historia from "@/components/historia/Historia";

export default function page() {
  return (
    <main>
      <HeroNosotros arriba="SOBRE" abajo="NOSOTROS" />
      <Historia />
    </main>
  );
}
