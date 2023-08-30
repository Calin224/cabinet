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
    <div className="py-12">
      <div className="relative flex items-center justify-center p-28 mb-12 max-w-6xl mx-auto">
        <Image src="/hipnoza-2.jpeg" fill className="object-cover -z-10" />
        <h1 className="text-3xl text-white font-bold text-center">
          CE ESTE HIPNOZA
        </h1>
      </div>
      <div className="max-w-6xl mx-auto flex space-y-4 flex-col px-4">
        <p className="text-justify">
          Termenul „hipnoză” denotă o interacțiune între o persoană, denumită
          „hipnotizator”, și o altă persoană, numită „subiect”, în cadrul căreia
          hipnotizatorul încearcă să influențeze percepțiile, sentimentele,
          gândirea și comportamentul subiectului, cerându-i să se concentreze
          asupra ideilor și imaginilor sugerate. Sugestiile pe care le folosește
          hipnotizatorul diferă de instrucțiunile de zi cu zi, fiind
          experimentate de subiect sub forma unei relaționări lipsite de efort.
        </p>

        <p className="text-justify">
          Psihologul Michael Yapko studiază, practică și scrie pe larg despre
          utilizarea hipnozei clinice ca intervenție eficientă pentru
          tratamentul depresiei de peste 40 de ani. El a sintetizat principalele
          orientăți teoretice cu privire la fenomenul hipnozei, după cum
          urmează:
          <ul className="text-disc">
            <li>
              Hipnoza este imagerie dirijată, adică rezultatul ghidării
              clientului de către terapeut, în cadrul unei ședințe bazate pe
              fantezie;
            </li>
            <li>Hipnoza este o stare de conștiință modificată;</li>
            <li>Hipnoza este o stare de relaxare;</li>
            <li>
              Hipnoza este o stare de concentrare prin care subiectul își
              focalizează atenția asupra unei singure idei/stimul senzorial,
              pentru o anumită secvență temporală [Yapko, 1995, p.8].
            </li>
          </ul>
        </p>

        <p className="text-justify">
          De-a lungul timpului au avut loc multe dezbateri cu privire la
          definiția hipnozei, impunându-se cu precădere două, respectiv cea de
          „stare de conștiință modificată” și cea de „stare psihologică
          construită”. Adepții definiției de „stare de conștiință modificată”
          cred că starea de veghe poate fi transformată în transă hipnotică
          folosind anumite tehnici de inducție. Această stare de conștiință
          modificată permite apariția unor fenomene hipnotice precum regresia,
          amnezia catalepsia etc. De asemenea, starea modificată a conștiinței
          ajută clientul să actualizeze o capacitate disociativă care există în
          el dar de care altfel nu este conștient. Teoria neo-disocierii lui
          Hilgard rezidă în faptul că „există sisteme multiple de control care
          nu sunt toate conștiente în același timp. În mod normal, aceste
          sisteme cognitive de control sunt în subordinea unui „ego executiv”,
          structură centrală de control. Când subiectul intră în hipnoză, o
          serie de controale și monitorizări sunt înlăturate...” [Dafinoiu,
          Vargha, 2003, p. 19]. Cu alte cuvinte, când subiectul răspunde la
          sugestiile terapeutului, memoria și percepția îi sunt distorsionate,
          făcând posibilă apariția altor sisteme de control de care altfel nu
          este conștient. În explicitarea teoriei disocierii, Hilgard utilizează
          metafora „Observatorului ascuns”, prin care înțelege partea
          inconștientă a psihismului, care se disociază de partea conștientă în
          timpul transei hipnotice. „Observatorul ascuns” se separă astfel de
          experiențele sugerate de terapeut, astfel încât rămâne oarecum
          obiectiv, permițându-i clientului să participe și să răspundă la
          sugestii, dar, în același timp, să se observe pe sine în timpul
          transei [Dafinoiu, p.99].
        </p>

        <p className="text-justify">
          Cea de-a doua teorie care definește hipnoza drept o stare psihologică
          construită nu este decât o reacție sceptică față de prima. Astfel,
          această orientare evidențiază faptul că fenomenele hipnotice pot fi
          exlicabile cu ajutorul conceptelor din aria psihologiei cognitive și
          sociale (imaginație, atenție, concentrare, relaxare etc.), cu alte
          cuvinte că hipnoza nu există.
        </p>

        <p className="text-justify">
          Însă de 10 ani încoace, specialiștii în cercetarea și practicarea
          hipnozei 1 au căzut oarecum de acord cu privire la faptul că hipnoza
          poate fi definită drept o stare naturală de concentrare și atenție în
          care capacitatea de a primi sugestii este sporită. Pentru orice om,
          stările modificate ale conștiinței sunt o parte naturală a vieţii
          cotidiene. Trecerea de la somn la starea de trezire, visarea cu ochii
          deschiși sau senzația pierderii timpului când suntem complet absorbiți
          de o activitate preferată sunt toate exemple moderne de stări
          modificate de conștiință [American Society of Clinical Hypnosis,
          2013].
        </p>
        {open ? (
          <Button variant="link" onClick={handleClose}>
            Inchide
          </Button>
        ) : (
          <Button variant="link" onClick={handleClick}>
            Citeste mai mult
          </Button>
        )}

        {open && (
          <div>
            <div className="relative flex items-center justify-center p-28 mb-12">
              <Image src="/hipnoza-1.jpg" fill className="object-cover -z-10" />
              <h1 className="text-2xl text-white font-bold text-center">
                SCURT ISTORIC AL HIPNOZEI <br /> STUDII RELEVANTE EFECTUATE ÎN
                DEMONSTRAREA EFICACITĂȚII TEHNICILOR HIPNOTICE
              </h1>
            </div>
            <div className="space-y-5">
              <p className="text-justify">
                Se pare că utilizarea hipnozei în rezolvarea unor probleme de
                sănătate apare în budism, dar și în alte meditații orientale și
                tehnici spirituale ale culturilor din India antică și nu numai.
                Hipnoza își are rădăcinile în istoria antică, atunci când
                egiptenii, spre exemplu, obișnuiau să vindece oamenii în temple,
                prin intermediul viselor, și observăm că filosofia, literatura
                și religia abundă în descrieri ale stărilor de transă, denumite
                adesea „stări extatice”. Între secolele IV-V îH, civilizatia
                greacă cunoaște existența unor asemenea temple, închinate zeului
                vindecator Asclepios. Vechii greci credeau că Asclepios putea
                efectua vindecari miraculoase, prin intermediul preoților, însă
                numai în somn. Așadar terapia prin somn însemna că vindecarea
                avea loc in timp ce persoana bolnava se afla intr-o transa
                profundă, similară somnului, numită incubare, stare în care
                persoana supusă tratamentului putea rămâne până la trei zile. În
                vremurile de aur ale islamului, filosoful arab Avicenna a făcut
                unele observații cu privire la hipnoză, făcând distincția între
                această stare specială și somnul natural. Astfel, în „Cartea
                Vindecării”, Avicenna s-a referit la fenomenul hipnotic ca la o
                „iluzie de lucru”. Din perspectiva lui Avicenna, o persoană ar
                fi putut crea unele condiții în mintea altei persoane, făcând-o
                să accepte realitatea hipnozei [Wael Mustafa Abu Hassan, 2014].
                Însă primele informații documentate despre fenomenul hipnotic se
                cunosc de la sfârșitul secolului al XVIII-lea, atunci când Franz
                Anton Mesmer a folosit sintagma de „magnetism animal” ca
                metaforă pentru ceea ce acum înțelegem prin hipnoză. Maemer a
                devenit celebru în urma descoperirilor sale, care au luat în
                epocă numele de „mesmerism”. În aceeași perioadă, alți doi
                cercetători ai fenomenului care azi poartă numele de hipnoză au
                avut contribuții semnificative. Marchizul de Puysegur a folosit
                sintagma de „somnambulism artificial”, accetuând ideea că
                fenomenele magnetice au fost cel mai probabil obținute în
                condițiile a ceea ce el a numit „un raport exclusiv” dintre
                hipnotizator și hipnotizat. La rândul lui, abatele Jose Custodia
                di Faria a numit hipnoza „somn lucid” și a atras atenția asupra
                observației că între 16-20% din populația studiată de el a fost
                foarte receptivă la realizarea cercetării. Abia în 1843 James
                Braid (1795-1860), un chirurg din Manchester, care a observat
                aspecte similare cu cele pe care le raportase Mesmer, a folosit
                pentru prima dată termenul „hipnoză”, cu referire la metaforele
                propuse de Puysegur și Faria (întrucât termenul provine din
                grecescul hypnosis=a dormi). El a ajuns la concluzia că stările
                de transă apar prin utilizarea unor tehnici de fixare a ochilor
                și închidere a ochilor. În timp, Braid s-a îndepărtat de teoria
                mesmeriană și a creat un concept psihologic pe care l-a numit
                „monoideism”, desemnând concentrarea mentală pe o singură idee
                dominantă, stare în care subiecții sunt sugestibili și își pot
                concentra atenția asupra unei idei care le influențează
                comportamentul [Kirsch I., Lynn S.J., 1995]. În aproximativ
                aceeași perioadă, John Elliotson, președintele Societății Regale
                Londoneze de Medicină și Chirurgie, a realizat cu succes în jur
                de 1834 de operatii, în timp ce pacienţii erau sub hipnoză. Un
                alt contemporan al lui Braid, chirurgul scoțian James Esdaille,
                a condus aproximativ 2.000 operații (inclusiv amputări) ale unor
                pacienti aflați sub hipno-anestezie, care au declarat că nu au
                simțit nicio durere.
              </p>
              <p className="text-justify">
                În 1892, Asociația Medicală Britanică (BMA) a comandat un studiu
                prin care să se evalueze natura și efectele medicale ale
                hipnozei şi hipnoterapiei. Membrii comitetului au raportat o
                deplină satisfacție cu privire la autenticitatea stărilor
                hipnotice și la eficacitatea utilizării hipnozei în ameliorarea
                durerii, asigurarea somnului și alinarea multora afecțiuni
                funcționale.
              </p>
              <p className="text-justify">
                În secolul al XIX-lea, a apărut o altă teorie asupra hipnozei,
                în care metafora somnului a fost corelată cu sugestibilitatea,
                vizând așadar gradul de sugestibilitate al persoanei
                hipnotizate. Cercetătorul A.A. Liebeault a fost cel care a
                definit hipnoza drept un „somn artificial” nediferențiat de
                somnul nocturn, ținând cont de faptul că persoana hipnotizată
                devenea rigidă, incapabilă fiind să reziste solicitărilor
                hipnotizatorului. Liebeault a considerat că sugestia este
                esențială în declanșarea procesului hipnotic.
              </p>
              <p className="text-justify">
                Spre sfârșitul secolului al XIX-lea, au apărut în Franța două
                „școli” de hipnoză, opuse diametral ca abordare și convingeri.
                Hippolyte Bernheim, influențat de Liebeault, a condus o „școală
                de hipnoză” în cadrul Universității din Nancy, promovând
                convingerea că hipnoza poate fi inițiată prin sugestie și
                explicată prin sugestibilitate, cu alte cuvinte că este un
                fenomen normal. Hippolyte Bernheim a folosit timp de patru ani,
                inducții hipnotice în cazul a aproximativ 5.000 de pacienţi, cu
                75% rata de succes observată. În urma acestor eforturi, hipnoza
                devine acum un instrument medical terapeutic acceptat în
                științele medicale. Un alt psiholog celebru în epocă, Émile Coué
                (1857-1926) a mers pe calea deschisă de Liébeault şi Bernheim,
                introducând propria sa metodă de psihoterapie, bazată pe
                autosugestie. În schimb, Jean-Martin Charcot de la La Spitalul
                Salpetriere din Paris, unul dintre cei mai importanți neurologi
                ai vremii, a susținut că hipnoza este o problemă strict
                fizio-patologică, corespunzătoare isteriei. Charcot considera
                starea hipnotică un fenomen neurofiziologic și un semn de boală
                psihică, o stare nervoasă artificială sau experimentală. Pierre
                Janet a susținut această poziție despre hipnoză, dar Hippolyte
                Bernheim, care credea că hipnoza este o funcție a creierului
                normal, s-a opus acestor idei. În această perioadă, au ajuns în
                instanță diferite spețe referitoare la efectele hipnozei.
                Charcot și Bernheim s-au implicat în controversa generată de
                procedurile judiciare, cu rezultat dezastruos pentru studiul
                hipnozei, deoarece nu numai că s-au contrazis în multe privințe,
                dar au și emis opinii greșite, în egală măsură. Din aceste
                motive, interesul profesional pentru hipnoza s-a diminuat,
                urmând a fi revigorat abia în anul 1933, grație lucrării lui
                Clark L. Hull, intitulată Hipnoza și sugestibilitatea. Abordarea
                experimentală a lui Hull a contribuit la reaprinderea
                interesului pentru subiect, dar de scurtă durată, din cauza unor
                probleme încă neclare.
              </p>
              <p className="text-justify">
                În aceeași perioadă, Sigmund Freud a remarcat existența unor
                eșecuri la pacienții aflați în hipnoză „profundă” și succese la
                pacienții care au fost „ușor” hipnotizați. Însă experiența lui
                Freud cu hipnoza clinică a fost de scurtă durată. Freud a
                povestit în autobiografia sa despre momentul în care a renunțat
                la utilizarea formală a hipnozei, atunci când o pacientă și-a
                aruncat brațele în jurul gâtului lui în timpul unei transe
                hipnotice. Freud tocmai descoperise transferul și, pentru a-l
                controla sau elimina, a decis să nu mai folosească inducțiile
                hipnotice. Astfel, în locul tehnicii terapeutice hipnotice, el
                și-a îndreptat atenția către procesul de asociere liberă, ceea
                ce nu a eliminat totalemente apariția transei spontane în cursul
                psihoterapiei [Spiegel H, Spiegel D., 2008].
              </p>
              <p className="text-justify">
                Hipnoza a atras atenția din nou, în timpul celui de-Al Doilea
                Război Mondial, când spitalele de campanie erau adesea lipsite
                de medicamente necesare pentru a trata soldații răniți. Ernst
                Simmel, un psihanalist german, a dezvoltat în acea perioadă o
                tehnică de accesare a materialului reprimat, pe care a numit-o
                hipnoanaliză. Hipnoza a ajuns astfel să joace un rol important
                în tratamentul durerii, luptă, oboseală și nevroză. Cu ajutorul
                tehnicilor hipnotice, un grup mic de hipnoterapeuți a reușit să
                amelioreze suferința răniților în război. Unii dintre acești
                clinicieni au întemeiat la sfârșitul războiului, în 1949,
                Societatea de Hipnoză Clinică și Experimentală (SCEH). Apoi, în
                1957, reputatul cercetător în domeniu, Milton Erickson, a pus
                bazele Societății Americane de Hipnoză Clinică (ASCH).
              </p>
              <p className="text-justify">
                În 1955 Grupul de Medicină al BMA a cerut unui grup de
                cercetare, condus de Ferguson Rodger, să livreze un raport
                cuprinzător despre hipnoza. După doi ani de investigație
                amănunțită, raportul final a fost publicat, cu recomandări în
                privința utilizării hipnozei în scop terapeutic. Printre altele,
                studiul a dovedit eficacitatea hipnozei în tulburări
                psihosomatice şi nevroze, în intervenții stomatologice, dar și
                în ameliorarea durerii în cadrul unor operații chirurgicale.
                Concluziile acestui studiu realizat în Marea Britanie au fost
                recunoscute și de Asociația Medicală Americană (AMA), care a
                stabilit că hipnoza poate fi un instrument în tratamente
                medicale. Între anii 1960 și 1990 s-au dezvoltat trei
                laboratoare majore de cercetare a hipnozei în Statele Unite. În
                plus, în multe țări au apărut societăți naționale importante de
                hipnoză.
              </p>
              <p className="text-justify">
                Grație tehnologiei moderne, studiile hipnozei s-au extins
                remarcabil, având ca efect consolidarea unei baze de date
                internaționale în domeniu. Unele studii au dovedit științific
                faptul că hipnoza are un succes remarcabil în tratamentul
                durerilor de cap și a vertijului la pacienții cu leziuni
                craniene [Cedercreutz, Lahteenmake & Toulikoura, 1976]. precum
                și în tratamentul migrenei [Cedercreutz, 1978]. Alte cercetări
                științifice au stabilit că hipnoterapia are efecte de netăgăduit
                și în reducerea frecvenței și intensității crizelor de astm
                [Collison, 1978]. Studiile efectuate de Gerschman și Burrows în
                anul 1994 au scos în evidență faptul că o persoană înalt
                hipnotizabilă poate fi predispusă la fobii. În cazul fumatului,
                studiul realizat de Perry, Gelfand și Marcovitch în 1979 nu a
                găsit nicio relație între hipnoză și tratamentul acestei
                adicții. În 1982, cercetătorii Wadden și Anderton au realizat un
                alt studiu și au concluzionat că hipnoza este cel mai eficient
                tratament în privința durerii clinice, astmului și a unei
                varietăți de afecțiuni dermatologice (cum ar fi negii și
                urticaria) și mai puțin eficient în tratamentul fumatului,
                excesului de alcool și al pierderii în greutate, acestea din
                urmă fiind considerate comportamente auto-inițiate, având așadar
                o componentă psihologică. În 1995, cercetarea realizată de
                Kirsch, Montgomery și Sapirstein a explorat utilizarea hipnozei
                clinice cu scopul de a îmbunătăți eficacitatea psihoterapiei.
                Începând cu același an, Institutul Național de Sănătate din SUA
                (NIH), a organizat o conferință anuală cu titlul „Integrarea
                comportamentului și relaxării în tratamentul durerii cronice și
                insomniei”, strângând laolaltă cercetările existente în relație
                cu hipnoza și hipnoterapia în privința durerilor cronice,
                incluzând aici diferite tipuri de cancer, sindromul colonului
                iritabil, ori durerile de cap. În 1999, British Medical Journal
                (BMJ) a publicat o revizire clinică privind descoperirile
                cercetării hipnozei, ajungând la următoarele concluzii:
              </p>
              <ul className="list-disc list-inside">
                <li>
                  hipnoza poate fi eficientă în tulburările de panică şi
                  insomnie, în special atunci când este integrată într-un pachet
                  de terapie cognitivă.
                </li>
                <li>
                  hipnoza poate avea o eficiență suficientă în combinație cu
                  terapia cognitiv-comportamentală în afecțiuni precum fobii,
                  obezitate și anxietate.
                </li>
                <li>
                  folosirea tehnicilor de relaxare e eficientă pentru tratarea
                  durerilor acute și cronice.
                </li>
                <li>
                  hipnoza este de mare valoare în astm şi în sindromul colonului
                  iritabil.
                </li>
                <li>
                  hipnoza poate avea o eficiență suficientă pentru tratamentul
                  stărilor de anxietate, durere, greață legate de cancer și
                  vărsături, în special la copii.
                </li>
              </ul>
              <p className="text-justify">
                Din 2000 încoace, numeroase alte studii au relevat importanța
                utilizării hipnozei în tratarea tulburărilor psihice. În 2002 un
                studiu a investigat eficacitatea utilizării hipnozei lui
                Erickson și tehnicii de relaxare Jacobson pentru reducerea
                durerii de osteoartrita, indicând o rată mare de succes a
                tehnicilor hipnotice. În 2003, Flammer și Bongartz (doi eminenți
                cercetătorii germani dinUniversitatea din Konstanz - Germania)
                au făcut public un studiu privind eficacitatea hipnozei clinice
                cu privire la bolile psihosomatice, anxietate, renuntare la
                fumat si controlul durerii în timpul tratamentelor
                stomantologice. Ei au tras concluzia că hipnoterapia este
                suficient de eficientă în aceste cazuri. Wilson, Maddison,
                Roberts, Greenfield și Singh au publicat în 2006 rezultatele
                unui studiu întreprins cu privire la eficacitatea utilizării
                hipnozei în cazul sindromului iritanbil, arătând că hipnoterapia
                aduce beneficii semnificative. În 2007, un studiu realizat de
                Alladin și Alibhai a demonstrat eficiența utilizării hipnozei
                clinice în depresie, respectiv că îmbinarea hipnozei clinice cu
                terapia cognitiv-comportamentală are potențialul de a reduce
                semnificativ simptomele legate de depresie, anxietate și
                deznădejde. Tot în 2007, Cochrane a publicat rezultatele unui
                studiu care au arătat că efectul terapeutic al hipnoterapiei
                este superior față de tratamentele uzuale, în privința durerilor
                abdominale și colonului iritabil. În 2014, Jensen și Patterson
                au realizat o cercetare arătând beneficiile hipnozei în
                managementul durerii cronice. În ultimii ani, au apărut în
                cadrul unor baze de date, cum ar fi Pubmed, Medline, Dynamed
                șiPsycINFO și multe altele, faptul că hipnoterapia este o
                procedură clinică semnificativă în tratamentul unor afecțiuni
                precum depresii, probleme de sexualitate, tulburări de stres
                post traumatic, probleme legate de naștere și travaliu prematur,
                astm, obstetrică, dureri de fibromialgie, dureri dentare,
                tulburări psihosomatice, tulburări de somn, probleme
                cardiovasculare, dureri cronice,dureri de cap și migrene, dureri
                postoperatorii, boli intestinale, tulburări gastrointestinale
                etc. De asemenea, multe alte studii clinice realizate în ultimii
                ani indică pur și simplu că tratamentele hipnotice au un număr
                de efecte pozitive dincolo de orice îndoială.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
