"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return null;

  return (
    <div className="bg-[url('/image.jpg')] bg-cover bg-center text-white">
      <section class=""> 
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 class="mb-8 text-4xl tracking-tight font-extrabold ">
            Intrebari frecvente
          </h2>
          <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            <div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium ">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Ce este „vindecarea spirituală”?
                </h3>
                <p class="">
                  Vindecarea spirituală are loc la nivelul sufletului și vizează
                  dimensiunile spirituale/energetice ale unei boli. Vindecătorii
                  spirituali sunt sensibili la realitățile spirituale și
                  neobișnuite, lucrând cu ghizi spirituali pentru a aduce înapoi
                  părțile sufletului care au fost pierdute sau fragmentate. De
                  asemenea, ajută la îndepărtarea paraziților și entităților
                  spirituale negative, a căror prezență conduc la pierderea
                  puterii unei persoane, adică la îmbolnăvirea trupului sau
                  minții acesteia. Cu alte cuvinte, vindecarea spirituală o
                  ajută să-și recapete puterea înnăscută.
                </p>
              </div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium ">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Tehnicile de vindecare spirituală sunt compatibile cu
                  utilizarea substanțelor interzise?
                </h3>
                <p class="">
                  Nu, eu personal interzic cu strictețe utilizarea
                  halucinogenelor și a tuturor drogurilor în practica mea. Deși
                  astfel de lucruri sunt acceptabile în alte locuri pe glob, mai
                  ales în America de Sud, cred că siguranța mea și a clienților
                  mei nu pot fi garantate prin prisma consumului de droguri. Un
                  vindecător spiritual trebuie să-și mențină controlul asupra
                  minții și corpului în timp ce se află într-o stare alterată de
                  conștiință.
                </p>
              </div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium ">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  În ce constă recuperarea animalului de putere?
                </h3>
                <p class="">
                  Recuperarea animalului de putere este o modalitate blândă, dar
                  foarte eficientă și profundă de a-ți restabili puterea
                  interioară, pe care, în urma unor traume, ai pierdut-o. Este o
                  vindecare frumoasă în care terapeutul călătorește în plan
                  spiritual pentru a-ți găsi animalul de putere și pentru a ți-l
                  aduce înapoi. Indiferent dacă tu crezi că animalul de putere
                  este o forță interioară, un spirit exterior ție sau pur și
                  simplu un arhetip care există în subconștientul tău, animalul
                  de putere îți înapoiază vitalitatea și te protejează,
                  conferindu-ți încredere în tine, echilibru și vitalitate.
                  Fiecare animal de putere deține o mare înțelepciune și îți
                  aduce daruri vindecătoare.
                </p>
              </div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium ">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  De unde știu dacă am nevoie de o vindecare spirituală?
                </h3>
                <p class="">
                  <ul className="list-disc list-inside">
                    <li>
                      Dacă nu te-ai mai simțit „tu însuți” de ceva vreme sau
                      dacă te-ai schimbat în urma unor evenimente care au avut
                      loc în viața ta.
                    </li>
                    <li>
                      Dacă nu te mai simți un „întreg” și dacă, deși ai
                      consultat un specialist medic/psiholog, nu reușești să
                      treci peste o anumită traumă.
                    </li>
                    <li>
                      Dacă te simți dezamăgit, trist, descurajat, deznădăjduit
                      sau neputincios.
                    </li>
                    <li>
                      Dacă te simți dezamăgit, trist, descurajat, deznădăjduit
                      sau neputincios.
                    </li>{" "}
                    <li>
                      Dacă te simți pierdut, deconectat, fără sens sau scop.
                    </li>
                    <li>
                      Dacă te confrunți cu oboseală cronică, depresie, atacuri
                      de panică.
                    </li>
                    <li>
                      Nenorocirea continuă și accidentele pot fi adesea un
                      indicator că este necesară recuperarea puterii.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium ">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  De câte sesiuni de vindecare spirituală voi avea nevoie?
                </h3>
                <p class="">
                  Terapeutul face o călătorie preliminară de „divinație” înainte
                  de a trece la orice vindecare, apoi discută cu clientul
                  rezultatele călătoriei înainte de a merge mai departe. În
                  funcție de natura vindecării și de timpul de procesare și
                  integrare, se stabilește numărul de sesiuni. Este posibil să
                  apară modificări imediat sau ar putea dura mai mult. Iarăși,
                  depinde de natura problemei clientului. Vindecarea spirituală
                  conține câteva momente specifice, procesul este mult mai
                  sensibil, însă vine cu rezultate deosebite.
                </p>
              </div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium ">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Cât durează o sesiune de vindecare?
                </h3>
                <p class="">
                  De la 60 de minute până la 2 ore.
                </p>
              </div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium ">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Cât durează procesul de vindecare?
                </h3>
                <p class="">
                  Depinde de tine și de voința ta de a te vindeca. De asemenea,
                  depinde de problemele pe care le ai și de mijloacele
                  terapeutice pe care le preferi. Uneori, vindecarea are loc cu
                  o singură ședință. Alteori, poate să dureze 10 ședințe. Din
                  experiență personală pot spune că tehnicile de vindecare
                  străvechi au eficacitate sporită, însă aplicarea lor depinde
                  de gradul de spiritualitate al clientului și de nivelul lui de
                  acceptare a lumii spirituale. Mă refer aici atât la hipnoză
                  cât și la recuperarea părților de suflet, extracții etc.
                  Consilierea filosofică, ca și consilierea de dezvoltare
                  personală sau cea vocațională, se adresează clienților care au
                  probleme existențiale aici și acum. Aceste persoane se
                  confruntă cu niște dileme referitoare, de exemplu, la
                  schimbarea locului de muncă, la divorț, decesul unei persoane
                  dragi etc. Terapia poate să ducă la rezultate bune în câteva
                  ședințe. Consilierea filosofică conține câteva etape
                  specifice, pe care le-am descris în secțiunea CE ESTE
                  CONSILIEREA FILOSOFICĂ?, care pot fi parcurse mult mai repede,
                  dacă problema ține de clarificarea unor neînțelegeri sau
                  dileme existențiale. Însă, chiar și dacă o singură sesiune
                  poate aduce schimbări puternice în viața cuiva, recomand în
                  general parcurgerea a cel puțin 3-5 sesiuni pentru a crea
                  rezultate semnificative și de durată, dar, din nou, acest
                  lucru depinde de nevoile specifice ale clientului. Pentru
                  persoanele care suferă de boli fizice grave sau boli grave
                  poate dura puțin mai mult, ceea ce e normal.
                </p>
              </div>

              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium ">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Este procesul de vindecare spirituală „dureros”?
                </h3>
                <p class="">
                  Nu! Dimpotrivă, este o practică blândă, non-evazivă, de a
                  reintegra adevărata esență a cuiva.
                </p>
              </div>

              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium ">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Sunt vindecările spirituale și hipnoza periculoase pentru
                  femeile însărcinate?
                </h3>
                <p class="">
                  Deoarece regăsirea sufletului se referă la integralitatea
                  clientului, nu poate fi nimic rău în împuternicirea unei femei
                  însărcinate. Mai mult, copilul nenăscut va fi și el
                  împuternicit, pentru că se va afla în apropierea unui ajutor
                  spiritual. Tiparele toxice ale mamei se pot disipa în cadrul
                  ședințelor de vindecare spirituală, iar copilul poate fi
                  eliberat de karma ancestrală. Or, acesta este un dar atât de
                  prețios!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
