import Clientes from "./components/Clientes";
import Presentacion from "./components/HighLightSection";
import Servicios from "./components/Servicies";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <Presentacion />
      <Servicios />
      <Clientes />
    </div>
  );
}
