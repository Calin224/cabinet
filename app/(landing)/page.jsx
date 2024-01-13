import { CodulEtic } from "@/components/codul-etic";
import { DespreMineLanding } from "@/components/despre-mine-landing";
import { Hero } from "@/components/hero-landing";
import Hipnoza from "@/components/hipnoza";
import { ServiciiLanding } from "@/components/servicii-landing";
import { TransHipVsTransSam } from "@/components/trans-hip-vs-trans-sam";
// import { CeEsteVindecareaLanding } from "@/components/ultima-landing";
import { VindecareSpiritualaTehniciStravechi } from "@/components/vindecare-spirituala-tehnici-stravchi";

export default function Home() {
  return (
    <div>
      <Hero title="CABINET DE IMAGISTICA SPIRITUALA" />
      {/* <ServiciiLanding title="Servicii de vindecare spirituala" /> */}
      <DespreMineLanding />
      <div className="my-12"></div>

      
    </div>
  );
}
