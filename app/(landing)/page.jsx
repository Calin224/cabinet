import { CodulEtic } from "@/components/codul-etic";
import { DespreMineLanding } from "@/components/despre-mine-landing";
import { Hero } from "@/components/hero-landing";
import Hipnoza from "@/components/hipnoza";
import { ServiciiLanding } from "@/components/servicii-landing";
import { TransHipVsTransSam } from "@/components/trans-hip-vs-trans-sam";
import { CeEsteVindecareaLanding } from "@/components/ultima-landing";

export default function Home() {
  return (
    <div>
      <Hero title="CABINET DE IMAGISTICA SPIRITUALA" />
      {/* <ServiciiLanding title="Servicii de vindecare spirituala" /> */}
      <DespreMineLanding />
      <div className="my-12"></div>
      <CeEsteVindecareaLanding />
      <Hipnoza />

      <div className="px-4">
        <TransHipVsTransSam />
      </div>
      <div className="px-4">
        <CodulEtic />
      </div>
    </div>
  );
}
