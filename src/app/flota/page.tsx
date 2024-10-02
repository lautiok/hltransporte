import Flota from "@/components/flota/Flota";
import HeroNosotros from "@/components/heroNosotros/HeroNosotros";

export default function Page() {
  return (
    <main>
      <HeroNosotros arriba="NUESTRA" abajo="FLOTA" />
      <Flota />
    </main>
  );
}
