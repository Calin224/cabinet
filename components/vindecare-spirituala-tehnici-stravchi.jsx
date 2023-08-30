"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export const VindecareSpiritualaTehniciStravechi = () => {
  const [open, setOpen] = useState(false);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return null;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative flex items-center justify-center p-28 mb-12 ">
        <Image
          src="/hipnoza-home.jpeg"
          alt="image"
          fill
          className="object-cover -z-10"
        />
        <h1 className="text-3xl text-white font-bold text-center">
          CE ESTE VINDECAREA SPIRITUALA?
        </h1>
      </div>
      <div className="space-y-5 mt-12 px-4">
        <p className="text-justify">
          L-aș contrazice, cu modestie, pe Malraux: Nu religios va fi secolul
          acesta, ci spiritual. Și nu pentru că ar fi ceva în neregulă cu
          religiile, ci pentru că noi, oamenii, nu am știut să utlilizăm
          corespunzător prețioasele informații ascunse între paginile cărților
          sacre. Întoarcerea către vechile practici spirituale este una dintre
          conseciențele eșecului nostru de comprehensiune sau de hermeneutică a
          mesajului mesianic. Valorile primite de la Iisus sunt inestimabile.
          Iubirea este darul cel mai de preț primit de la el și, totuși, în
          primele secole creștine, cei prigoniți au devenit abuzatori. E un
          fenomen binecunoscut în psihologie. Triunghiul relațional
          Victimă-Abuzator-Salvator este o formă toxică pentru cei implicați.
          Într-o familie disfuncțională, de exemplu, membrii joacă pe rând cele
          trei roluri. Se pot sustrage din lanțul cauzal doar cei care reușesc
          să se vindece emoțional. Altfel, repetă la infinit roluri care îi fac
          nefericiți și toxici atât pentru ei cât și pentru ceilalți.
          Extrapolând, marea familie creștină a ieșit nevindecată din cunoscuta
          prigoană care a durat până în secolul IV. Nu a avut timp să se
          maturizeze „emoțional”, pentru că împăratul creștin Constantin cel
          Mare a decretat religia creștină religie „licită” (acceptată printre
          celelalte, precreștine), apoi religie de stat. Dintr-odată regină,
          religia (mă refer desigur la exponenții săi) nu a știut ce să facă cu
          puterea, devenind din victimă abuzator. În numele blândului Iisus,
          creștinii au ucis, persecutat, abuzat – adică exact ceea ce Iisus
          propovăduise să nu facă. Exemplul celebrei femei filosof Hypatia din
          Alexandria, care a fost ucisă cu o cruzime inimaginabilă de creștini,
          doar pentru că a refuzat să renunțe la ideile ei filosofice, de altfel
          pașnice, este unul extrem de elocvent în acest sens.
        </p>

        <p className="text-justify">
          Un alt motiv pentru care auzim tot mai des vorbindu-se în zilele
          noastre despre spiritualitate este cel al conștientizării răului pe
          care aceeași specie, omul, o produce pământului prin actele sale
          nesăbuite. O idee greșit înțeleasă din Biblie și cultivată de secole
          în rândul credincioșilor, în principal de prelați, este aceea că
          pământul ne aparține și că animalele au fost create de Dumnezeu ca să
          ne folosim noi, de ele, după bunul nostru plac. Aud adesea persoane
          care frecventează biserica zicând că animalele nu au suflet. Cu alte
          cuvinte, putem să ne purtăm oricum cu ele. Să le lovim, să le
          batjocorim, să le ucidem și să le mâncăm. Încă mai există în satele
          românești fenomenul de tăiere a porcului, o perioadă sinistră, care
          are loc în zilele premergătoare Crăciunului. Pe scurt, se strâng mai
          mulți credincioși în jurul porcului legat, care se zbate, și îl
          înjunghie. E o distracție pentru ei. Se zice că porcul știe cu o zi
          înainte că urmează să fie sacrificat, nu am habar cum, dar știe.
          Plânge cu groază toată noaptea. Ca noi toți, porcul se teme de moarte.
          La fel se întâmplă cu mieii și cu iezii de Paști, o altă sărbătoare
          centrată pe rememorarea zilelor în care Iisus a propovăduit iubirea,
          compasiunea și pacea. Dar Iisus nu a mâncat niciodată carne de porc,
          fiind evreu. De Paștele iudaic, tradiția culinară era orientată spre
          consumul de miel. Or, Iisus nici măcar miel nu a mâncat, pentru că
          Iisus știa că prin consumul de carne nivelul energetic scade dramatic
          și, odată cu el, și puterea vindecătoare. Cel mult Iisus ar fi putut
          mânca pește. Nu vă întrebați de ce oare în interiorul mânăstirilor,
          indiferent de orientare religioasă, călugării nu mănâncă niciodată
          carne? Am auzit pe unii și pe alții că asceții nu muncesc, motiv
          pentru care nu au nevoie de proteine. Greșit. O mânăstire este o
          comunitate umană în miniatură, fiecare membru are atribuții și da, în
          afară de închinăciune, acolo se muncește din greu.
        </p>

        <p className="font-bold text-justify">
          Nu pot să nu constat că Iisus a fost ucis întocmai ca animalele
          sacrificate în cinstea lui. Fără milă și fără îndurare. Un paradox pe
          care lumea spirituală de azi încearcă să-l dilueze.
        </p>

        <p className="text-justify">
          Cât despre pământ, ideea greu de înțeles pentru unii e că nu ne
          aparține. Pământul e doar o gazdă, minunată și primitoare, atât pentru
          noi cât și pentru celelalte specii. Simțul proprietății ne-a
          dezumanizat, așa cum avea să observe filosoful francez Jean Jacques
          Rousseau? Posibil. Pofta de înavuțire, lăcomia, egoismul, aceste
          trăsături specifice doar omului, dintre toți locuitorii planetei, au
          dus, în timp, la deteriorarea dramatică a acesteia. Cutremure,
          tsunami, incendii de păduri și inundații, consecințe ale actelor
          reprobabile ale omului, au atras rapide si ireversibile schimbari
          planetare. Sigur că schimbări planetare apar oricum, schimbarea e un
          act necesar al evoluției. Dar poate că există și alte căi de
          metamorfozare. La urma urmei, fluturele iese din cocon natural, nu în
          urma unor traume sau fărădelegi. În contextul global actual, așa de
          deprimant, vechi forme de spiritualitate, așa cum este și
          „șamanismul”, apar ca un pansament blând și eficient pentru spiritele
          rănite în lupta fără sens care se numește viețuire, iar calea de
          vindecare pe care ne-o propun rezidă în reconectarea omului cu natura
          și, în cele din urmă, cu adevăratul său sine.
        </p>
        <p className="italic text-justify">
          Șamanismul contemporan este o consecință firească a conștientizării
          sacralității Pământului pe care îl locuim. Dacă până acum stilul de
          viață șamanic, aflat într-o profundă comuniune cu natura, s-a transmis
          mai ușor în zonele geografice greu accesibile, așa cum sunt jungla sau
          culmele munților, astăzi observăm că șamanismul poate să reziste
          oriunde, chiar și în marile citadele ale civilizației contemporane.
        </p>
        <p className="text-justify">
          În sens șamanic, toate bolile vin din dezechilibru și înstrăinare în
          relație cu natura, cu ceilalți, cu noi înșine. Conștientizarea
          importanței acestei relații pentru sănătatea noastră, a tuturor, e
          primul pas spre vindecare. Așa cum arată PhD Steve Serr, „o
          reconectare umană completă cu pământul nostru este o cerință pentru
          sustenabilitatea nu doar a planetei, ci și a umanității. Bolile de
          care suferim, din punct de vedere psihologic, social și ecologic se
          datorează, în mare măsură, atitudinii noastre greșite față de pământ.
          Trebuie să pricepem odată pentru totdeauna că acțiunile noastre de azi
          ne îndreaptă spre dezastru” 2 .
        </p>
      </div>

      {open ? (
        <Button variant="link" onClick={handleClose}>
          Inchide
        </Button>
      ) : (
        <Button variant="link" onClick={handleOpen}>
          Citeste mai mult
        </Button>
      )}

      {open && (
        <div>
          <div>
            <div className="relative flex items-center justify-center p-28 mb-12">
              <Image
                alt="image"
                src="/vindecare-home.jpeg"
                fill
                className="object-cover -z-10"
              />
              <h1 className="text-2xl text-white font-bold text-center">
                DE UNDE ȘI PÂNĂ UNDE NIȘTE TEHNICI DE VINDECARE STRĂVECHI AU
                FOST REUNITE SUB CUPOLA „ȘAMANISMULUI”?
              </h1>
            </div>
            <div className="space-y-5">
              <p className="text-justify">
                De fapt, tehnicile de vindecare ancestrale au primit de la
                Mircea Eliade denumirea generică de „șamanism”, cuvânt care
                suferă astăzi de lipsă de credibilitate, trăgând după sine în
                jos întreaga gândire și întregul mod de viețuire pe care
                încearcă să le definească.
              </p>
              <p className="text-justify font-bold">
                Chiar dacă o să încerc să restabilesc sfera corectă de
                cuprindere a acestui termen, care a fost consacrat în urma unor
                cercetări laborioase de Eliade și care a fost pe nedrept
                terfelit în cadrul unui linșaj teologico-mediatic prelungit
                vreme de secole, prefer înlocuirea lui cu sintagma „vindecare
                spirituală”. De ce? Din cauza falșilor șamani care fac bani
                profitând de neștiința sau disperarea oamenilor, care atrag
                grupuri în America de Sud sau mai știu eu unde, promițându-le
                călătorii în alte lumi și revelații spectaculoase în urma
                consumului de droguri. În vechime nu exista așa ceva. Șamanul
                era preotul/vindecătorul tribului, adică singura persoană care
                făcea călătoriile spirituale de divinație și care se ocupa de
                vindecarea membrilor comunității. Era un fenomen cât se poate de
                serios și de respectabil. Nu oricine putea fi șaman. Nu oricine
                putea călători în lumea de sus sau de jos, din simplul motiv că
                aceste călătorii sunt primejdioase pentru neinițiați.
              </p>
              <p className="text-justify">
                Potrivit cercetărilor lui Mircea Eliade, termenul
                &quot;șamanism&quot; e derivat din cuvântul turc antic „šamán”,
                referitor la funcția de preot. După Eliade, „dacă prin acest
                termen înţelegem orice fenomen extatic şi orice tehnică magică,
                este evident faptul că vor fi depistate unele aspecte „şamanice“
                la indo- europeni sau la alte colectivităţi etnice sau
                culturale” 3 . Termenul „șaman” ar conține în sfera sa un soi de
                vrăjitor bun sau un medicine man. Astfel, „el e socotit
                vindecător, asemenea tuturor vracilor, și fachir, asemenea
                tuturor magicienilor, primitivi sau moderni. Dar el este, în
                plus, psihopomp, și poate fi și preot, mistic și poet.” 4
              </p>
              <p className="text-justify">
                Din DEX aflăm că șamanismul e „o religie animistă, primitivă,
                care are la bază credinţa că slujitorii cultului pot
                influenţa spiritele bune sau rele printr-
                un ritual special, manifestat prin extaz religios,
                prin dansuri şi prin formule magice, practicată de unele
                populaţii din nordul şi centrul Asiei, de diverse triburi de
                eschimoşi şi de indieni din America de Nord, din America de Sud,
                din Indonezia şi din Africa. – Din fr. chamanisme”. O definiție
                care nu cuprinde nici pe departe întreaga bogăție semantică a
                termenului… Mai aproape de adevăr s-a situat Ioan Petru Culianu,
                care a propus sintagma „şamanism dincolo de şamanism”, extinzând
                foarte mult zona clasică de manifestare a şamanismului
                propriu-zis. El a prelungit peste hotarele prestabilite nu doar
                zona geografică (Asia Centrală şi de Nord), ci şi zona
                „ideologică” (incluzându-i pe iatromanţii greci, pe vrăjitorii
                europeni etc.).
              </p>
              <p className="text-justify">
                Termenul a devenit popular în afara zonei culturale și
                lingvistice de baștină, astfel încât vorbim de șamanism azi fie
                când ne raportăm la vracii sud- americani, fie la societățile
                primitive care încă se mai regăsesc disipate pe glob, acolo unde
                indivizii încă se situează într-o profundă relație cu pământul,
                fie la o formă postmodernă de șamanism (neo-șamanism) ce se
                dezvoltă cu repeziciune în rândul comunităților umane moderne.
                Acest lucru este valabil și pentru alte culturi spirituale
                împrăștiate pe glob.
              </p>
              <p className="text-justify">
                Dincolo de definiții și de încadrări conceptuale, „șamanismul”
                este, de fapt, o tradiție spirituală și culturală care reflectă
                una dintre cele mai vechi forme de vindecare. Se spune că a
                apărut acum peste 10.000 de ani, fiind practicat pe scară largă
                în America de Sud, Oceania, China, Manciuria, Mongolia, Tibet
                sau în Coreea. Urme ale practicilor șamanice apar, potrivit lui
                Eliade, și în Moldova secolului XVII, dar în privința vechimii
                acestora istoricul s-a declarat reticent. Mai mult, a conchis că
                practicile magico-extatice ale vracilor moldoveni (așa numiții
                incantores) semănau izbitor cu cele ale șamanilor
                central-asisatici pentru simplul motiv că ar fi fost aduse pe
                teritoriul țării noastre de o populație central-asiatică 6 ,
                adică de unguri. În plus, avea să spună Culianu, referindu-se la
                legitimitatea utilizării termenului „șamanism” în cazul vracilor
                greci, „dacă iatromanţii sunt numiţi şamani sau nu, este doar o
                chestiune de convenţie.”
              </p>
              <p className="text-justify">
                În timp ce lucra pentru Departamentul de istorie a religiilor de
                la Universitatea din Chicago, la începutul anilor 1950, Mircea
                Eliade a avansat ideea că așa-zisul șamanism a fost religia
                strămoșilor noștri, având rădăcini în paleolitic, și că, nu se
                știe cum, a reușit să supraviețuiască alături de alte religii
                istorice și contemporane. Cam în aceeași perioadă
                istorică, psihologul Carl Jung vorbea despre natura religioasă a
                psihicului uman, despre arhetipuri și despre inconștienul
                colectiv. Ambii cercetători, cu contribuții remarcabile în
                domeniul științei, au atras atenția așadar asupra existenței
                unei dimensiuni neglijate de filosofia modernă, dar care
                cucerește din ce în ce mai mult teren în prezent:
                spiritualitatea. Eliade și Jung se cunoșteau destul de bine, ei
                petrecând mai multe veri într-o stațiune balneară din Elveția,
                alături de gruparea Eranos. Membrii acestei grupări, savanți din
                toată lumea, discutau despre religie, spiritualitate, filosofie,
                știință, politică și societate, în cadrul unor conferințe
                prestigioase, ale căror rezultate au fost publicate și au condus
                la consolidarea istoriei religiilor din perspectivă
                interdisciplinară (analizându-i relațiile cu alte discipline,
                precum psihologia, literatura, antropologia etc.). Chiar dacă au
                abordat diferit fenomenul religios, Eliade și Jung au ajuns la
                unele concluzii comune. Astfel,
                <span className="italic">
                  ceea ce i-a legat cel mai mult pe cei doi a fost interesul
                  pentru studierea și definirea arhetipului (Jung) și a mitului
                  (Eliade). Acestea au fost unele dintre elementele centrale ale
                  operei celor doi exegeți. Fiecare a studiat și s-a raportat
                  la mit și arhetip din perspective diferite, dar rezultatele
                  cercetărilor lor au avut puncte de intersecție. Optica lor
                  asupra arhetipului pare uneori că merge până la identificarea
                  totală, diferențele de interpretare fiind foarte subtile.
                  Ambii au trăit cu credința că în spatele dezvoltării omului
                  occidental se află un inconștient colectiv (folosind conceptul
                  lui Jung), un nivel care face apel la omul primordial, la
                  miturile și credințele străvechi, care depășesc luciditatea
                  omului care vrea cu orice preț să se agațe de prezentul
                  istoric. Aceștia erau fascinați de raportarea la sacru a
                  omului modern. Filosofia lui Eliade, potrivit
                  căreia Dumnezeu s-a retras și așteaptă să fie descoperit prin
                  intermediul miturilor a fost adesea comentată în comparație cu
                  filosofiile lui Nietzsche, Hegel sau Jung 8 .
                </span>{" "}
                Eliade a descoperit că șamanul tradițional acționa în stare de
                extaz, obținută printr-o transă indusă cu ajutorul dansului sau
                prin lovirea tobei, având ca misiune personală vindecarea
                membrilor grupului său. „Astfel, el intră în contact cu lumea
                supraumană, efectuează o călătorie în paradis sau coboară în
                lumea subterană, întâlnește spirite călăuzitoare, prietenoase
                sau ostile și își îndeplinește misiunea” – avea să arate Eliade.
                Așadar șamanismul presupune existența unor practici de vindecare
                spirituală și de profundă conectare cu natura înconjurătoare,
                care s-au manifestat de-a lungul istoriei prin folosirea unor
                instrumente muzicale precum tobele, prin vorbirea cu lumea
                spiritelor și, uneori, prin apel la substanțe halucinogene. De
                fapt, ayahuasca, vestita planta care se presupune că poate
                induce transa, este specifică practicilor vindecătoare din
                America de Sud, acolo unde vindecătorul se numește… Acolo
                termenul „șaman” nu este cunoscut, cum nu e cunoscut de fapt
                decât în Siberia ca atare. Un cunoscut antropolog, Michael
                Harner, a întreprins cercetări științifice laborioase în
                domeniu, înglobând elemente șamanice culese personal într-o
                teorie pe care el a numit-o „șamanism de bază”, sfârșind prin a
                deveni el însuși practician șamanic. Steve Serr spune că noi
                cunoaștem esența patrimoniului ancestral șamanic din vestul
                Europei grație cercetărilor altui antropolog celebru, Tom Cowan,
                care și-a descoperit astfel propriile rădăcini șamanice celtice.
                Antropologul american de origine peruviană Carlos Castaneda ar
                fi audiat în anii ’60 cursurile de istorie a religiilor ţinute
                de Mircea Eliade la University of California. Volumele publicate
                de Castaneda în perioada 1968-1972 (12 cărți traduse în 17
                limbi, 8 milioane de exemplare vândute) au avut ca subiect
                iniţierea sa de către un şaman, Don Juan Matus, din tribul
                nord-mexican Yaqui, cu ajutorul unor plante halucinogene.
                Castaneda a fost adulat de unii și contestat de mulți alții.
                Chiar și Ioan Petru Culianu „l-a considerat pe Castaneda un
                „fals antropolog“, care îşi prezenta ficţiunile narco-iniţiatice
                drept experienţe autentice şi cercetări antropologice de teren”
                9 . Mai târziu, Culianu avea să spună despre Eliade că ar fi
                fost „un fel de grand oncle al lui Carlos Castaneda” 10 , și că
                „a reuşit să devină un savant respectat în ciuda operei sale de
                ficţiune care, citită de prea multă lume, a fost de prea multe
                ori prost înţeleasă” 11 .
              </p>
            </div>
          </div>

          <div>
            <div className="relative flex items-center justify-center p-28 mb-12 mt-12">
              <Image
                alt="image"
                src="/vindecare-home-1.jpeg"
                fill
                className="object-cover -z-10"
              />
              <h1 className="text-2xl text-white font-bold text-center uppercase">
                Este sau nu necesară utilizarea halucinogenelor în timpul
                călătoriilor șamanice?
              </h1>
            </div>
            <div className="space-y-5">
              <p className="text-justify">
                Chiar dacă în Siberia (de unde, ne amintim, Eliade a împrumutat
                termenul care avea să definească „oficial” aceste practici,
                indiferent de zona lor geografică) inducția hipnotică șamanică
                se realizează cu ajutorul zgomotului repetitiv de tobe și dans,
                istoricul religiilor și-a orientat atenția cu precădere spre
                transele provocate de ingerarea unor substanţele psihoactive,
                specific practicilor șamanice din America de Sud.
              </p>
              <p className="text-justify">
                Inspirat de Eliade, Ioan Petru Culianu „a decelat trei tipuri
                distincte de producere a extazelor şi viziunilor
                extramundane: Altered States of Consciousness (stări modificate
                ale conştienţei), Out-of-Body Experiences (experienţe în afara
                corpului) şi Near-Death Experiences (experienţe la limita
                morţii). În primele două tipuri de provocare a extazelor şi
                viziunilor se apelează uneori la consumul de plante psihotrope”
                12 . Se spune că însuși Culianu utiliza droguri ca să
                experimenteze călătoriile șamanice.
              </p>
              <p className="text-justify">
                Experienţa religioasă zarathustriană a fost și ea pusă în
                relație cu practicile şamanilor central-asiatici. Și într-un caz
                și în celălat se pare că se foloseau plante psihotrope, precum
                canabisul, în vederea obținerii transei 13 .
              </p>
              <p className="text-justify">
                Unii cercetători au identificat prezența șamanismului și în
                Grecia Antică. Ioan Petru Culianu credea că Pitagora din Samos,
                Abaris din Hyperboreea, Aristeu din Proconessos sau Epimenide
                din Creta, pe care el i-a numit iatromantes, 14 foloseau anumite
                practici şamanice, precum intoxicarea cu plante halucinogene sau
                euforizante, călătorii extatice, părăsirea trupului de către
                suflet, catalepsia, abstinenţa, previziunea, ubicuitatea,
                anamneza, iatromagia etc. 15
              </p>
              <p className="text-justify italic">
                Una dintre ierburile psihotrope utilizate de iatromanţi ar fi o
                plantă, greu de identificat chiar şi pentru Pliniu cel Bătrân
                (Naturalis Historia XXII, 33, 73-75),
                numită alimos (uneori halimos), cu sensul „fără foame”. Ar fi o
                vegetală care, consumată în cantităţi mici, suspendă foamea.
                Culianu a susţinut că este vorba de o specie locală de plantă,
                asemănătoare cu frunzele de coca din America de Sud
                (Erythroxylum coca), „conţinând vreun alcaloid euforizant care
                taie senzaţia de foame”. „După informaţiile lui Maxim din Tyr
                privind caracterul viziunilor lui Epimenide – a conchis
                istoricul religiilor –, nu se poate exclude ca acestea să fi
                fost produse de un halucinogen“ 16 .
              </p>
              <p className="text-justify">
                Din punctul meu de vedere și în urma experiențelor personale,
                transa șamanică, atât de asemănătoare cu transa hipnotică,
                necesită prezența conștientului, a „observatorului ascuns”
                (Hilgard, 1978), care să mărturisească, cu luciditate, despre
                experiența trăită. Chiar dacă este profund relaxat, conștientul
                trebuie să fie acolo pe tot parcursul călătoriei. Zgomotul tobei
                este astfel perfect pentru inducerea transei. E inofensiv și în
                același timp eficient. În schimb, folosirea substanțelor
                halucinogene poate provoca apariția unor imagini sau sunete
                înșelătoare, greu de apreciat de unde vin. Nu am încercat și
                nici nu voi încerca vreodată, pentru simplu motiv că nu mi se
                pare nici necesar, nici interesant și nici sigur pentru
                sănătatea mea mintală.
              </p>
              <p className="text-justify font-bold">
                Acesta este un motiv în plus care mă determină să folosesc
                sintagma de „vindecare spirituală”, în loc de șamanism, pentru
                că acoperă mult mai bine întreaga paletă de tehnici străvechi de
                vindecare așa cum eu mi le-am apropriat și în care substanțele
                psihotrope nu-și au rostul.
              </p>
            </div>
          </div>

          <div>
            <div className="relative flex items-center justify-center p-28 mb-12 mt-12">
              <Image
                alt="image"
                src="/hipnoza-home-2.jpeg"
                fill
                className="object-cover -z-10"
              />
              <h1 className="text-2xl text-white font-bold text-center uppercase">
                CE ROST ARE „ȘAMANISMUL” ÎN ZILELE NOASTRE?
              </h1>
            </div>
            <div className="space-y-5">
              <p className="text-justify">
                Cercetările în domeniul istoriei religiilor l-au determinat pe
                Eliade să creadă că spiritualitatea avea să învingă gândirea
                caracteristică perioadei moderne 17 . În opinia lui Eliade,
                ființele umane arhaice ar fi fost orientate în timp și spațiu.
                În schimb, ființele umane moderne ar fi dezorientate, chiar dacă
                și în subconștienul acestora se regăsesc simboluri religioase.
                Un articol recent (2023) în The Economist, atrage atenția că
                șamanismul este religia cu cea mai mare creștere în zilele
                noastre. The Economist semnalează că popularitatea în creștere a
                acestei „religii” are ca și cauză anxietatea legată de
                schimbările climatice 18 . Cu toate acestea, șamanismul nu poate
                fi încadrat în categoria largă a fenomenelor religioase, în
                orice caz, nu așa cum sunt definite acestea în mod tradițional.
                În același timp, trebuie precizat că nu are nicio legătură cu
                magia neagră. Un practician șamanic cere ajutorul spiritelor de
                lumină în vederea vindecării spirituale, ceea ce se situează la
                polul opus față de „blesteme” sau „farmece”. Această vindecare
                spirituală vine pe fondul deconectării noastre de la adevărata
                relație cu celelalte ființe vii și, în plan general, cu întreaga
                natură. Așa cum constată și Phd Steve Serr, șeful școlii de
                șamanism pe care am frecventat-o vreme de trei ani 19 ,
                „mașinile ne separă de călătorii din celelalte mașini. Stăm în
                birouri și locuri de muncă situate în clădiri cu ziduri care ne
                ascund de soare, de cer și de obiectele vii și non-vii. Ne
                întoarcem la casele care nu numai că sunt separate fizic unele
                de altele, ci sunt construite într-un mod care normalizează
                psiho-social probabilitatea ca noi să nu îi cunoaștem pe oamenii
                care trec pe stradă sau care locuiesc peste drum. Acest
                sentiment de separare ne-a fost transmis din copilărie. Am
                crescut crezând că e ceva normal. Consecința este că oamenii se
                luptă astăzi cu o singurătate profundă și persistentă.
                Conștienți sau nu, ne e sete de conectare, pentru că, de fapt,
                am devenit despărțiți de comunitatea noastră de ființe umane și
                de lumea noastră extraordinară într-un fel absolut artificial.
                Am devenit despărțiți de miracol” 20 . Steve Serr, vorbește
                despre „fragmentare” și despre „pierderea intimității” care vin
                la pachet cu această înstrăinare față de adevăratele noastre
                valori umane, considerând că practicile șamanice sunt extrem de
                utile în recuperarea conștinței noastre strămoșești, adică a
                înțelegerii importanței conexiunii autentice cu lumea, la nivel
                energetic, spiritual și emotional.
              </p>
              <p className="text-justify italic">
                Din înțelegerea holistică spirituală, când începem să acceptăm
                că nu suntem separați ci, în mod inextricabil, conectați, într-o
                lume care se află simultan sub pielea noastră și care se extinde
                la întreaga planetă, înțelegem de ce indianul apaș s-a adresat
                copacului cu recunoștință, înainte de a-l tăia, pentru a-și
                construi o barcă canoe 21 .
              </p>
              <p className="text-justify">
                Conștiința spirituală presupune starea de nediferențiere față de
                celelalte ființe vii, un soi de unitate în diversitate, aspecte
                conținute și de dogmele creștine sau de alte religii, însă greu
                de înțeles în afara trăirii personale.
              </p>
              <p className="text-justify italic">
                Holismul centrat pe Pământ reprezintă o erupție contemporană a
                dorinței umane ancestrale de conectare profundă, fiind alcătuit
                din aspecte pe care le-ai putea recunoaște ca indigene, șamanice
                sau drept expresii ale altor spiritualități. Este o orientare
                către o lume în care unul este de fapt amestecat într-o
                combinație fluidă. Budiștii, dar și misticii împărtășesc în
                diferite moduri aceeași sete de unitate. Însă este atât de greu
                pentru omenire să se perceapă ca o parte a întregului.
                Dimpotrivă, ne vedem pe noi înșine, separați, plimbându-ne de-a
                lungul Pământului sau zburând cu avionul pe deasupra lui, ca și
                cum am fi într-o oarecare vizită. Într-adevăr, în general ne
                gândim la noi înșine că sosim pe Pământ atunci când ne naștem și
                că plecăm atunci când murim. În șamanism, nu există nicio
                separare între sacru și lumesc. Practicile șamanice ne conduc
                acasă, prin recunoașterea legăturii noastre primare cu Pământul,
                cu toate ființele sale și cu ceea ce strămoșii noștri înțelegeau
                prin lume spirituală. Arhetipul unității spirituale comune,
                dorința de integritate și vindecare ne cheamă înapoi,
                îndemnându-ne la stabilirea unei relații intime cu natura, cu
                noi înșine și cu ceilalți 22 .
              </p>
              <p className="text-justify">
                În perioada contemporană, marcată de o evoluție tehnologică fără
                precedent, tradițiile străvechi renasc, în mod paradoxal,
                inclusiv sub forma modernă a neo-șamanismului. Strămoșii noștri
                știau că ființa umană este holistică. Ei știau, așadar, că
                suntem mai mult decât un creier „care există pentru că gândește”
                și un corp care nu pare să vrea să meargă în armonie cu gândirea
                rațională a creierului. Perioada filosofică modernă, debutând cu
                raționalitatea lui Descartes, a condus la accentuarea
                importanței gândirii analitice în detrimentul spiritualității,
                curent care a dominat omenirea timp de mai multe secole. Astăzi
                însă știința nu face decât să confirme existența unor dimensiuni
                inexplicabile până mai ieri. Fizica cuantică vorbește despre
                apariția simultană a unui foton în spații diferite. Acest lucru
                ne ajută să înțelegem rațional omniprezența lui Dumnezeu, despre
                care mărturisește dogmatica creștină, ceea ce în trecut era greu
                de digerat altfel decât pe calea revelației.
              </p>
              <p className="text-justify">
                Vindecările spirituale diferă radical de tehnicile medicinei
                tradiționale, fără să intre în conflict însă cu acestea. Ele
                includ o gamă largă de tehnici și metode care s-au format în
                timpul preistoriei și au supraviețuit de-a lungul veacurilor,
                grație unor societăți așa-zis primitive care au continuat să le
                cultive departe de lumea civilizată. De aceea, limbajul specific
                acestor vindecări păstrează încă un bagaj conceptual străvechi,
                din care fac parte sintagme precum „ghizi spirituali” sau
                „animale de putere”, „lumea de sus” sau „lumea de jos” etc., iar
                de aici apar întrebări dificile cu privire la faptul dacă
                ființele spirituale sunt sau nu &quot;reale&quot;. Un bigot,
                care crede că e o infamie să crezi că poți comunica cu îngerii
                sau cu spiritele de lumină, spre exemplu, sau un ateu, care
                crede că e o prostie să susții așa ceva, nu vor accepta
                niciodată limbajul și tehnicile spirituale. Așadar, tehnicile
                spirituale nu li se adresează lor, din păcate.
              </p>
              <p className="text-justify">
                O persoană rațională, însă, care vrea să înțeleagă cum
                funcționează aceste tehnici din punct de vedere psihologic, află
                că ghizii spirituali și animalele de putere pot fi un fel de
                maeștri interiori care ne comunică informații importante despre
                noi înșine și ne ajută să ne redobândim puterea personală.
                Ființele spirituale și spațiile sacre percepute în timpul
                transei, șamanice sau hipnotice, pot fi considerate drept niște
                simple tehnici imagistice care ne ajută să accedem un nivel
                profund al conștiinței noastre, acolo unde vindecarea are loc
                rapid, nedureros și sigur.
              </p>
              <p className="text-justify- italic">
                Dacă acceptăm conștiința șamanică și aplicăm tehnicile sale (cum
                ar fi călătoria șamanică), obținem un instrument puternic și
                util atunci când ne concentrăm asupra unor lucruri precum
                creșterea personală, conștiința de sine, realizarea puterii
                noastre naturale și înnăscute și încurajarea de a face schimbări
                în viața noastră care ne țin mai aproape de cine suntem cu
                adevărat. Șamanismul, ca o cale către sănătatea psihologică și
                potențială vindecare &quot;funcționează&quot; indiferent de ceea
                ce se crede. Și influența pe care o are psihicul asupra restului
                vieții noastre este imensă. Ne aflăm în mijlocul atâtor lucruri
                care suferă și trebuie să se vindece în jurul nostru, pe pământ,
                în comunitatea noastră și în noi înșine. Când acceptăm că
                Pământul este „artistul” minunat care ne-a sculptat și dacă ne
                luăm locul în funcționarea mai largă a întregului din care
                suntem doar o parte, facem să crească și să înflorească atât
                propriul sine cât și planeta pământ, care este, de fapt, grădina
                noastră 23 .
              </p>
              <p className="text-justify">
                În acest sens, șamanismul și vindecarea spirituală devin
                instrumente psihologice contemporane care ne ajută să călătorim
                în profunzimea ființei noastre.
              </p>
            </div>
          </div>

          {open && (
            <Button variant="link" onClick={handleClose}>
              Inchide
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
