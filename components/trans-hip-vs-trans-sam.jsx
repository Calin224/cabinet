"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const TransHipVsTransSam = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="max-w-6xl mx-auto mt-12 mb-12">
      <div className="relative flex items-center justify-center p-28 mb-12 mt-12">
        <Image
          src="/transhipvstranssam.jpeg"
          fill
          className="object-cover -z-10"
        />
        <h1 className="text-2xl text-white font-bold text-center uppercase">
          Transa șamanică/spirituală vs transa hipnotică
        </h1>
      </div>
      <div className="space-y-5">
        <p className="text-justify">
          Am arătat că originea hipnozei a fost convențional plasată în Egiptul
          și Grecia Antică 1 . Însă precursorii hipnozei moderne se regăsesc și
          șamanismul tribal, așa cum citim în Manualul Ghildei Naționale a
          Hipnotiștilor Americani. Așadar, având în vedere cele de mai sus,
          putem spune că utilizarea stărilor modificate de conștiință a apărut
          cu mult timp în urmă, posibil în Paleolitic, în comunitățile tribale
          ale „șamanilor” din trecutul îndepărtat. Urme ale utilizării hipnozei
          și ale tehnicilor șamanice/spirituale se regăsesc departe în timp, dar
          și pe toată suprafața globului, conținând o serie de similitudini pe
          care o să le menționez în cele ce urmează. Ca și transa
          șamanică/spirituală, transa hipnotică este o stare alterată de
          conștiință, cu localizare în starea theta 2 , având în comun mai multe
          elemente, precum ritmul, atenția defocalizată, sau disocierea. Dacă în
          transa hipnotică se folosesc inducții (care includ tehnici de relaxare
          progresivă și un anume ritm al vocii, o anume intensitate,
          repetitivitate etc.), călătoriile șamanice au la bază, în principal,
          tobele ritmice.
        </p>
        <p className="text-justify italic">
          Dar pentru ce sunt stările alterate de conștiință? Mai devreme, în
          epoca modernă, am ajuns să credem că gândirea rațională era tot ce
          aveam nevoie. Desigur, trebuie să gândim rațional la lucruri, dar, am
          descoperit acum, gândirea rațională nu este suficientă. Mai degrabă,
          trebuie să funcționeze împreună cu alte moduri naturale de gândire sau
          cu alte funcții naturale ale creierului. Marii muzicieni, dansatori,
          autori, artiști, artiști marțiali, poeți și chiar inventatori și
          oameni de știință au folosit în mod semnificativ visarea cu ochii
          deschiși, imaginația, intuiția și chiar relaxarea. În special,
          soluțiile la problemă apar adesea într-un fulger de „inspirație”
          atunci când nu ne concentrăm asupra problemei și, cel mai adesea,
          atunci când ne relaxăm. 3
        </p>
        <p className="text-justify">
          Strămoșii noștri îndepărtați știau foarte bine că stările modificate
          de conștiință servesc unui scop profund. Șamanii antici, de exemplu
          (iar aici putem include și „hipnoterapeuții” avant-la-lettre),
          foloseau aceste stări de conștiință pentru vindecare. Mai târziu,
          misticii religioși (creștini, budiști, taoiști, sufiști etc.) le-au
          folosit pentru comunicarea cu divinitatea, numindu- le stări
          „revelatorii”. De asemenea, atunci când creează, artiștii intră și ei
          într-o stare modificată de conștiință. Este fenomenul pe care care
          Irina Mavrodin îl descrie, cu referire la arta literară, drept „mâna
          care scrie”, dat fiind că niciun scriitor nu poate explica de unde și
          cum îi vine inspirația. Extrapolând, o mână invizibilă pare a se
          suprapune peste mâna creatorului, orientând mișcările instrumentului
          artistic cu o precizie de-a dreptul matematică.
        </p>
        <p className="text-justify">
          Ritmul tobelor, folosite de vindecătorii șamanici cu scopul de a
          induce transa, a fost asociat de specialiști cu ritmul bătăilor
          inimii. Astfel,{" "}
          <span className="italic">
            bătăile inimii controlează fluxul de sânge prin corp și afectează
            starea de spirit a individului și invers. De asemenea, inima bate
            rapid când suntem supărați și încetinește când suntem relaxați, de
            exemplu. Deci există o legătură directă între ritm și conștiință 4 .
          </span>
          Trecem prin diferite stări modificate de conștiință în fiecare zi
          (când dormim, când ne relaxăm, când călătorim cu mașina sau cu trenul
          și visăm cu ochii deschiși, când ne imaginăm sau, dimpotrivă, când ne
          concentrăm intens asupra unui lucru etc.). Stările modificate de
          conștiință sunt căi de acces către subconștientul nostru sau, mai bine
          spus, către noi înșine.
        </p>
        <p className="text-justify">
          Atât în transa hipnotică cât și în transa șamanică urmărim să creăm o
          relație autentică cu adevăratul nostru sine. În timpul transei, mintea
          conștientă rămâne prezentă, atâta doar că se relaxează, luând forma
          unui „observator ascuns” calm și întru-totul lucid.
        </p>
      </div>
    </div>
  );
};
