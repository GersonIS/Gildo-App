import Servicios from "./components/Servicies";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <div>
      <section id="inicio" className="pt-16">
        <Slider />
      </section>
      <Servicios />
    </div>
  );
}
