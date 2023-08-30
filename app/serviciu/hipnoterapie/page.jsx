"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Serviciu() {
  const [open, setOpen] = useState(false);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return null;

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="py-12 max-w-6xl mx-auto">
      <div className="relative flex items-center justify-center p-28 mb-12">
        <Image src="/hipnoza-1.jpg" fill className="object-cover -z-10" />
        <h1 className="text-2xl text-white font-bold text-center">
          HIPNOTERAPIA SAU TERAPIA PRIN HIPNOZĂ <br />
          STRUCTURA UNEI ȘEDINȚE HIPNOTICE
        </h1>
      </div>
      <div className="space-y-5">
        <p className="text-justify">
          Hipnoterapia reprezintă utilizarea hipnozei în psihoterapie de către
          psihoterapeuți, însă poate fi întâlnită și în alte domenii medicale,
          cum ar fi obstetrica, pediatria, psihiatria și stomatologia, cu
          condiția deținerii unei licențe. În plus, așa cum arată Campbell
          Perry, „hipnoza terapeutică implică grefarea procedurii hipnotice pe
          oricare dintre zecile de psihoterapii recunoscute. Hipnoza a fost
          utilizată cu succes ca o procedură adjuvantă sau auxiliară în terapia
          psihanalitică, gestalt, non-directivă sau oricare dintre numeroasele
          varietăți de modificare a comportamentului care se bazează pe teoria
          învățării. In acest sens, nu există hipnoterapie; doar o serie de
          abordări tradiționale ale psihoterapiei care amalgamează hipnoza cu
          succes ca parte a „pachetului” de tratament ”[Campbell Perry, 2006, p.
          23].
        </p>
        <p className="text-justify">
          Încă de la începuturile sale, hipnoterapia a avut ca scop tratarea
          unor probleme psihologice, psihosomatice, psiho-neurologice și
          psihosociale, constând în întărirea obiceiurilor bune (luarea unor
          decizii prompte sau îmbunătățirea obiceiurilor de studiu etc.),
          înlăturarea relelor obiceiuri (renunțarea la fumat, mușcatul
          unghiilor, supraalimentarea emoțională etc.), stabilirea unor
          obiective și planuri de acţiune pentru eliminarea fobiilor (frica de
          zbor, vorbitul în public, frica de câini, de șerpi etc.),
          îmbunătățirea performanței (în sport, muzică, actorie, vorbire,
          vânzări etc.), schimbarea perspectivei și atitudinii pentru a ajuta un
          client să avanseze (de la problemă la soluție, de la îngrijorare la
          acțiune, de la ceea ce nu se poate face la ce poate etc.), predarea
          instrumentelor și tehnicilor de autoajutorare (autohipnoza),
          vindecarea durerii emoționale, intensificarea vindecării fizice,
          pregătirea nașterii etc.
        </p>
        <p className="text-justify">
          Hipnoterapia modernă este folosită în practica clinică într-o
          varietate de forme 20 . Caformă de psihoterapie și tehnică clinică
          terapeutică, hipnoza este folosită pentru a crea un fel de modificări
          inconștiente ale pacientului prin crearea și dirijarea de noi gânduri,
          sentimente și răspunsuri. Hipnoza este uneori denumită „alterată stare
          de conștiință” în care indivizii pot experimenta o receptivitate
          crescută şi reacții prompte în interiorul lor la niște percepții
          experiențiale. Este o stare de sugestibilitate sporită în care a
          terapeutul poate folosi sugestii care influențează inconștientul
          pacienților, în timp ce mintea lor conștientă rămâne relaxată.
          Procesul ar trebui să fie întreprins de un hipnotizator instruit și
          autorizat să stabilească condiţiile necesare pentru hipnoză.
        </p>
        <p className="text-justify">
          Când vine vorba de scenarii, orice este posibil – spre exemplu,
          autohipnoza este o stare în care subiectul poate să asculte o inducție
          înregistrată, audio sau video, ghidată de de un hipnotist
          experimentat.
        </p>
        <p className="text-justify">
          Inducția hipnotică este a pas necesar pentru a conduce subiectul
          într-o stare de sugestibilitate crescută, o stare în care facultăţile
          critice se reduc și subiectul devine susceptibil de a accepta
          comenzile date de hipnotizator, numită transă. Condițiile necesare
          pentru induce o astfel de stare de transă rezidă în motivație,
          concentrare, imaginație și sugestie, așa cum arată figura de mai jos
          [Wael Mustafa Abu Hassan, 2014].
        </p>
        <div className="max-w-6xl mx-auto">
          <table
            border="1"
            className="w-full border p-4 table-auto border-collapse"
          >
            <tbody>
              <tr className="">
                <td className="px-2 border ">
                  MOTIVAȚIE – SUBIECTUL VREA SĂ FIE HIPNOTIZAT
                </td>
                <td className="px-2 border ">
                  CONCENTRARE – SUBIECTUL VREA SĂ-ȘI FOLOSEASCĂ CAPACITATEA DE
                  CONCENTRARE
                </td>
                <td className="px-2 border ">
                  IMAGINAȚIE – SUBIECTUL VREA SĂ-ȘI FOLOSEASCĂ IMAGINAȚIA
                </td>
                <td className="px-2 border ">
                  SUGESTIE – SUBIECTUL VREA SĂ AUDĂ ȘI SĂ RĂSPUNDĂ LA SUGESTII
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-justify">
          În literatura de specialitate timpurie, inducerea hipnozei a fost
          legată de unele metode concepute pentru a relaxa subiecţii și a-i
          aduce într-o stare de focalizare interioară, astfel încât
          hipnotizatorul să poată crea efecte și schimbări la nivelul
          subconștientului lor. Alternativele moderne includ tehnici de inducție
          precum cea a lui Dave Elman, care folosește diferite strângeri de mână
          pentru a hipnotiza subiectii intr-o perioada scurta de timp (adică 1-4
          minute), sau celebrele stiluri și metode ericksoniene.
        </p>

        <p>Hipnoza are loc de obicei în patru etape principale:</p>
        <ul className="list-decimal list-inside space-y-2">
          <li>
            <span className="font-bold">Etapa de inițiere</span> (adică
            pregătirea hipnozei și etapa de comandă cu privire la relaxare și
            somn). Prima fază a hipnoterapiei este anamneza. Experiențele
            personale relatate de client contribuie la construirea unor transe
            personalizate, în funcție de problemele pentru care s-a prezentat la
            cabinet. Acum are loc și identificarea gradului de sugestibilitate a
            clientului, adică dacă acesta este potrivit pentru hipnoză.
            Măsurarea sensibilității hipnotice este realizată prin intermediul
            unor scale de sensibilitate precum Scala de sensibilitate hipnotică
            Stanford, formele A și B, Scala Harvard, specifică hipnozei de grup,
            sau Scala Barber. Deoarece aplicarea acestor scale este greoaie,
            deoarece conțin foarte mulți itemi, majoritatea clinicienilor
            folosesc itemi izolați, precum testul rigidității brațului, sau al
            oscilației corpului, testul mâinilor magnetice sau cel al
            încleștării degetelor etc.
          </li>
          <li>
            <span className="font-bold">Inducția hipnotică</span>, cu ajutorul
            căreia subiectul intră în transă. inducția are ca finalitate
            reducerea câmpului de concentrare a atenției clientului în
            realitatea imediată și orientarea acestuia către realități interne,
            specifice subconștientului, prin fenomenul disocierii. Cele mai
            cunoscute tehnici de inducție sunt relaxarea musculară progresivă,
            tehnicile de imagerie ghidată, tehnicile de fixare a unor stimuli
            externi, tehnica levitației brațului, precum și tehnica numărării.
            În transă, subiectul poate raporta prezența unor amețeli, senzații
            de greutate în corp, imposibilitatea de a se opune/rezista la
            comenzi, receptivitate la instrucțiunile hipnotizatorului.
            Subiectului i se poate cere să fixeze cu privirea un punct pe
            peretele din fața lui, să ridice brațul (tehnica levitației
            brațului), sau să se concentreze pe un scenariu ghidat de hipnotist
            (în acest caz vorbim despre inducția metaforică sau tehnica
            indirectă de hipnoză, specifică hipnozei eriksoniene 21 . Pe lângă
            inducția metaforică, Erickson folosea și inducția „fără voia
            pacientului”, în cazul clienților rezistenți. În cazul în care
            hipnoterapeutul dorește să verifice profunzimea hipnozei, poate
            folosi tehnici de adâncire a transei. Adâncirea transei se face
            utilizând anumite metode, unele mai simple (ca de exemplu prin
            utilizarea reiterativă a unor sugestii directe, autoritare, de
            genul: ”Închide ochii! Deschide ochii!”), altele mai complicate,
            precum metafora coborârii liftului sau a treptelor, catalepsia
            brațului etc. Stările pe care subiecții le experimentează în transă
            includ, printre altele, orientarea selectivă a atenției, expresia
            lipsită de efort, flexibilitatea orientării în spațiu și timp,
            modificările percepției, distorsiunea timpului, inhibițiile motorii
            etc. [Dafinoiu, p.151].
          </li>
          <li>
            <span className="font-bold">Stadiul de sugestibilitate</span>, când
            hipnotizatorul face sugestii asupra inconștientului subiecților. În
            funcție de personalitatea clientului, precum și de obiectivele
            propuse, terapeutul poate utiliza sugestii directe, caracteristice
            hipnozei tradiționale, eficiente mai ales în lucrul cu clienți care
            cred în magia hipnozei [Dafinoiu, p.50] (asemena sugestii pot fi
            autoritare: „Închide ochii!”, „Dormi”!, „Relaxează-te!” sau
            permisive: „Permite ochilor tăi să se închidă!” etc.), sau
            indirecte, folositoare mai ales cu clienții rezistenți, propuse de
            M. Erickson (de ex.: „Unele persoane se relaxează mai repede dacă
            închid ochii...”). Sugestiile directe au ca finalitate să introducă
            în mintea clientului o anumită idee. Sugestiile indirecte
            dimpotrivă, au ca obiectiv să scoată la suprafață ceea ce se află în
            subconștientul clientului. În timpul hipnozei, subiectul poate primi
            sugestii de întărire a eului, sugestii centrate pe simptom sau pe
            problemă și sugestii posthipnotice. Sugestiile posthipnotice se
            administrează tot în timpul transei și au ca finalitate activarea
            unor comportamente/gânduri/emoții după ieșirea din transă a
            clientului [Dafinoiu, p.59].
          </li>
          <li>
            <span className="font-bold">Ieșirea din hipnoză</span> , care se
            face de obicei prin numărare inversă în cazul hipnozei clasice (cu
            fiecare număr fiind reluate sugestiile terapeutice) sau indirect, în
            cazul hipnozei non-formale („Poți reveni în propriul tău ritp la
            starea de veghe”).
          </li>
        </ul>
        <p>
          După încheierea ședinței de hipnoză, au loc discuții cu privire la
          schimbările prospectate şi soluțiile terapeutice, în cadrul stagiului
          terapeutic.
        </p>
        <p>
          Sumarizând, intervențiile hipnoterapeutice au următoarea structură
          [Dafinoiu, p.150]:
        </p>
        <div>
          <table
            border="1"
            className="border w-full table-auto border-collapse"
          >
            <tbody className="border">
              <tr>
                <td className="border">INDUCEREA TRANSEI </td>
                <td className="border">INTERVENȚIA </td>
                <td className="border">REVENIREA DIN TRANSĂ </td>
              </tr>
              <tr>
                <td className="border border-spacing-2 p-3">
                  <ul className="list-disc list-inside">
                    <li>CREAREA MEDIULUI TERAPEUTIC</li>
                    <li>DISOCIEREA CONȘTIENT- INCONȘTIENT</li>
                  </ul>
                </td>
                <td className="border border-spacing-2 p-3">
                  <ul className="list-disc list-inside">
                    <li>APROFUNDAREA TRANSEI</li>
                    <li>ÎNTĂRIREA EULUI</li>
                    <li>HIPNOANALIZA</li>
                    <li>RECADRAREA</li>
                    <li>INTERVENȚII METAFORICE</li>
                    <li>REZOLVAREA DE PROBLEME</li>
                    <li>INTERVENȚII SPECIFICE</li>
                  </ul>
                </td>
                <td className="border border-spacing-2 p-3">
                  <ul className="list-disc list-inside">
                    <li>ANULAREA SUGESTIILOR ADMINISTRATE ÎN TRANSĂȘTIENT</li>
                    <li>RELUAREA SUGESTIILOR TERAPEUTICE</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-justify">
          Printre proprietățile de bază ale hipnozei clinice care sporesc
          travaliul terapeutic se regăsesc [Himanshi Singh, Pradeep Kumar,
          2020]:
        </p>
        <ul className="list-disc list-inside">
          <li>
            sugestibilitatea crescută sau dorința crescută de a accepta
            sugestiile într-un mod mai puțin critic;
          </li>
          <li>
            îmbunătățirea capacității subiectului de a-și imagina și de a
            interpreta diferite roluri, astfel încât evenimentele imaginate să
            fie trăite ca reale;
          </li>
          <li>
            accesul lărgit la amintirile din copilărie, chiar dacă nu la stadiul
            anterior al dezvoltării cognitive;
          </li>
          <li>
            o toleranță mai mare a incongruențelor logice – așa-numita „logică a
            transei”;
          </li>
          <li>
            răspunsuri de relaxare îmbunătățite, care pot fi învățate și
            aplicate în situații de zi cu zi;
          </li>
          <li>o speranță crescută vizând rezultatele pozitive al terapiei;</li>
          <li>
            o atenție sporită și capacitatea de a nu se ocupa de gânduri și
            sentimente străine;
          </li>
          <li>
            oportunitatea de a crea, dezvolta și controla experiențe
            disociative.
          </li>
        </ul>
      </div>

      <div className="flex justify-center items-center py-12">
        {open ? (
          <Button variant="link" onClick={handleClose}>
            Inchide
          </Button>
        ) : (
          <Button variant="link" onClick={handleClick}>
            Citeste mai mult
          </Button>
        )}
      </div>

      {open && (
        <div>
          <div className="relative flex items-center justify-center p-28 mb-12 max-w-6xl mx-auto">
            <Image src="/hipnoza-2.jpeg" fill className="object-cover -z-10" />
            <h1 className="text-3xl text-white font-bold text-center">
              MITURI CU PRIVIRE LA HIPNOZA
            </h1>
          </div>
          <p className="text-justify">
            Chiar dacă hipnoza în sine nu este o știință, fenomenele sale,
            totuși, s-au dovedit a fi ușor de studiat experimental, utilizând
            procedeele specifice cercetării științifice. Hipnoza este cunoscută
            încă din vechime, având similitudini cu relaxarea sau meditația
            orientală, dar efectele sale au fost când exacerbate (asociate fiind
            cu magia), când negate pe nedrept de sceptici. De aceea, hipnoza a
            stat mult timp sub îndoiala șarlataniei și de-abia în secolul XVIII
            s-a luat în calcul utilizarea sa ca tratament alternativ pentru mai
            multe tulburări, dar „ideea hollywoodiană a unui răufăcător care
            folosește hipnoza pentru a controla mințile” [Holdevici, 2015, p.
            11] nu a dispărut nici în zilele noastre. Cu toate acestea, proasta
            reputație nemeritată a hipnozei se estompează pe zi ce trece.
            Astfel, observăm că tot mai mulți oameni sunt curioși să afle cum
            funcționează și, mai important, cum îi poate ajuta hipnoza.
            Caracteristicile hipnozei nu doar că nu constituie sfera unui
            fenomen supranatural, ci pot fi observate cu ușurință în realitatea
            cotidiană, atunci când, de exemplu, ne lăsăm absorbiți de vizionarea
            unui film sau atunci când mergem cu mașina pe autostradă, lăsându-ne
            „furați” de gânduri sau „absorbiți” de imagini, așa cum adesea ne
            exprimăm când vrem să descriem această stare care ne îngustează
            câmpul conștiinței. În aceste cazuri vorbim despre un fel de
            autohipnoză, cu alte cuvinte ne orientăm gândurile spre interiorul
            nostru [Holdevici, 2015, p. 10]. „Hipnoza implică capacitatea unei
            persoane de a lăsa deoparte judecata critică, fără a renunța complet
            la ea și de a se angaja în simulare și fantezie (Gill & Brenman,
            1959; E. R. Hilgard, 1977). Pentru unii oameni, această imaginație
            poate fi atât de vie și intensă că au probleme în a o diferenția de
            realitate. Într-adevăr, s-ar putea să nu poată face acest lucru”
            [Perry Campbell, 2006, p.2]
          </p>

          <p className="text-justify">
            În ceea ce privește „talentul” de a hipnotiza, ei bine, acesta nu
            califică o persoană în acordarea terapiilor hipnotice, fiind
            obligatorii atât studiile universitare în psihiatrie sau psihologie
            clinică cât și o bază solidă în fenomenele hipnotice. Pe de altă
            parte, un bun hipnotizator nu are, în ciuda miturilor legate de
            acest lucru, un har anume. De fapt, experiența hipnozei are foarte
            puțin de-a face cu abilitățile hipnotizatorului și este în principal
            o chestiune de abilități ale persoanei hipnotizate. Capacitatea de a
            conduce o inducție hipnotică este dobândită ușor și rapid de către o
            persoană care are cel puțin abilități interpersonale moderate și
            care este capabilă să stabilească o relație de încredere și o
            aparență de competență [Perry Campbell, 2006, p.2].
          </p>

          <p className="text-justify">
            Hipnoza nu este nici o tehnică naivă [Himanshi Singh, Pradeep Kumar,
            2020] și nici un fenomen supranatural, ci doar o stare modificată de
            conștiință, de imagerie ghidată sau pur și simplu de relaxare.
            Faptul că hipnotiștii au fost considerați ca deținători ai unor
            puteri paranormale sau că subiectul hipnotizat se transformă în
            robot (sau zombie, după alții) a adus doar dezavantaje fenomenului
            hipnotic [Holdevici, 2015, p. 12].
          </p>

          <p className="text-justify">
            Un alt factor limitator pentru utilizarea hipnoterapiei a fost lipsa
            literaturii de specialitate și a programelor de formare profesională
            care să producă profesioniști în domeniul sănătății mentale,
            deoarece abia la sfârșitul secolului XX au apărut primele preocupări
            sistematice cu privire la etica utilizării hipnozei. Aceste
            preocupări au avut la bază unele îngrijorări referitoare la
            utilizarea hipnozei în cazuri de criminalistică [Coons, 1988, Orne,
            1979], cum ar fi exonerarea unor inculpați vinovați după ce au
            prezentat amintiri false ca dovezi ori controlaul abuziv exercitat
            de hipnotizator asupra unor pacienți aflați în dificultate. Faptul
            că în literatura de specialitate nu au existat dovezi empirice
            riguroase care să demonstreze eficacitatea utilizării hipnozei,
            lipsa protocoalelor și a bunelor practici au condus la tratarea cu
            precauție a acestui subiect. Abia în 2014 Codul de etică al
            Asociației Americane de Consiliere a adus clarificări etice cu
            privire la importanța siguranței clienților care sunt supuși
            hipnozei. Astfel, dacă o intervenție este percepută ca neetică sau
            dăunătoare, atunci Codul recomandă ca astfel de practici să fie
            evitate.
          </p>

          <p className="text-justify">
            Pe de altă parte, revistele științifice în domeniul hipnozei
            clinice, așa cum sunt International Journal of Clinical and
            Experimental Hypnosis, American Journal of Clinical Hypnosis etc, nu
            sunt disponibile prin intermediul bazelor de date electronice
            academice. Un articol publicat în 2017 atrage atenția asupra
            faptului că lipsa de preocupări legate de siguranța și etica
            întrebuințării hipnozei clinice (absența unor ghiduri de bune
            practici, cercetarea empirică limitată, expunerea redusă la discurs,
            literatura de specialitate și formarea profesională etc.) conduce la
            ignorarea hipnozei clinice ca instrument clinic eficient [Jiggins
            Kate C., 2017]. Pe de altă parte, alți cercetători susțin că, de
            fapt, în ultimii 30 de ani, a fost publicat un număr mare de studii
            care concluzionează că hipnoza clinică este o intervenție eficientă
            în tratamentul durerilor cronice, anxietății, obezității, depresiei
            și a altor tulburări [Lynn, Barnes, Deming și Accardi, 2010]. În
            opinia mea, hipnoza câștigă din ce în ce mai multă credibilitate
            datorită eforturilor depuse de specialiști reputați în domeniul
            cercetării științelor medicale. Mai mult, în ultimii ani am observat
            apariția unui interes tot mai mare pentru meditație și practici
            spirituale, cadru benefic fenomenului hipnotic, care poate să
            constituie o premisă importantă în acceptarea hipnozei ca instrument
            de încredere, rapid și eficient în travaliul de vindecare psihică.
          </p>

          <div className="relative flex items-center justify-center p-28 mb-12 mt-12 max-w-6xl mx-auto">
            <Image src="/mindfulness.jpeg" fill className="object-cover -z-10" />
            <h1 className="text-3xl text-white font-bold text-center">
              HIPNOZĂ, RELAXARE ȘI MINDFULNESS
            </h1>
          </div>
          <p className="text-justify">
            În tratamentul anxietății, tehnicile de relaxare sunt acceptate în
            genere ca având efecte benefice, deoarece relaxarea are capacitatea
            de a încetini răspunsul autonom la factorii stresori. Un exemplu de
            tehnică comună de relaxare rezidă în observarea mișcării ritmice a
            inspirației și expirației. Un alt tip de relaxare este relaxarea
            musculară progresivă. Atunci când întâlnește hipnoza clinică,
            relaxarea devine primul pas dintr-un protocol general, urmat de
            inducție, sugestii și întărirea ego-ului. Relaxarea este în această
            situație o metodă care ajută clientul să acceadă la a o stare
            alterată de conștiință, acolo unde terapeutul poate face sugestii
            benefice. Sugestiile pe care terapeutul le aduce clientului în stare
            modificată de conștiință reprezintă o componentă specifică doar
            hipnozei clinice, separând-o astfel de tehnicile simple de relaxare,
            de imageria ghidată și de mindfulness, și având ca rezultat o
            intervenție puternică în rezolvarea problemei. Sugestiile sunt
            concepute pentru a se potrivi nevoilor, obiectivelor și
            personalității clientului, putând să îmbrace forma unor metafore,
            imagini sau chiar narațiuni.
          </p>

          <p className="text-justify">
            Mindfulness, pe de altă parte, rezidă în practicarea meditației,
            având ca finalitate orientarea atenției și concentrării asupra
            clipei prezente. Modul de viață contemporan, în care ne asumăm
            sarcini din ce în ce mai grele și mai multe (stil de viață care a
            primit și o denumire, multitasking), determinându-ne să ne risipim
            atenția în direcții variate, inclusiv pe axa timpului, și
            secătuindu-ne de putere, nu face decât să alimenteze fenomenul
            anxietății. Mindfulness își propune să ne ajute să conștientizăm
            efectele negative pe care un asemenea stil existențial îl provoacă,
            ajutându-ne să ne concentrăm asupra prezentului, dezvoltând o
            atitudine necritică față de noi înșine și învățând să ne observăm,
            prin practicarea nonacțiunii. „Practica mindfulness nu este nouă. Ea
            este ancorată ferm în vechea religie și filosofie a budismului, dar,
            de fapt, cele mai multe religii încorporează în practica lor câte un
            tip de mindfulness. Printre exemple se numără rugăciunea, meditația,
            incantațiile, cititul și recitarea de scripturi și numeroase alte
            practici ritualice” [Brett A. Moore, 2016, p. 86]. Tehnica
            Mindfulness pare a fi eficientă, printre altele, în anxietate,
            depresie, adicții, durere cronică, stres etc. Ce are special față de
            relaxare și hipnoză? În opinia mea, doar faptul că întreaga
            procedură, constând în relaxare mentală/corporală și sugestii
            benefice, se concentrează asupra orientării clientului în clipa
            prezentă. Însă atunci când hipnoza clinică are ca finalitate
            plasarea sugestiilor în prezentul clientului, mindfulness-ul devine
            doar unul dintre pași, ca și relaxarea, de altfel.
          </p>
        </div>
      )}
    </div>
    // </div>
  );
}
