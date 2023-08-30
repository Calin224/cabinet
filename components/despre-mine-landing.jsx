import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const DespreMineLanding = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-12 gap-x-10 px-4">
      <Image
        src="/poza_profil.jpg"
        width={300}
        height={450}
        className="max-w-[300px] mb-10 rounded border shadow-md self-start"
      />
      <div className="px-4">
        <h1 className="text-2xl font-bold mb-3">Despre mine</h1>
        <p className="max-w-3xl">
          Numele meu este Aurelia-Daniela Stănciulescu. Sunt, printre altele,
          doctor în filosofie, practician șamanic, hipnoterapeut și consilier de
          dezvoltare personală. Mă aflu, de asemenea, la capătul a trei ani de
          formare profesională în domeniul psihoterapiei – specializarea
          hipnoterapie ericksoniană. Sunt de naționalitate română, dar, după ce
          din pură curiozitate mi-am făcut un test ADN în America, am descoperit
          că am rădăcini mongole și manciuriene (locuri unde în vechime se
          practica șamanismul și tibetanismul). Am fost dintotdeauna atrasă de
          latura spirituală a vieții, de acel quelque chose ascuns în spatele
          rigidelor evidențe, dar, îngrijorată de interpretările care apar în
          cazul unor ființe curioase ca și mine să se conecteze și la alte
          realități, am ales să-mi ignor trăirile transcendentale și să-mi
          petrec existența, cum se zice, situându-mă cuminte în rândul lumii...
        </p>
        <Button variant="link">
          <Link href="/despre" className="mr-2 font-bold">Citeste mai mult</Link>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
