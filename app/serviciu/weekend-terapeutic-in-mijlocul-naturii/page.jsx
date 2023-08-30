'use client'

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Serviciu() {
    const [mount, setMount] = useState(false)
    
    useEffect(() => {
        setMount(true)
    }, [])

    if (!mount) return null
  return (
    <div className="py-12">
      <div className="relative flex items-center justify-center p-20 mb-12 max-w-6xl mx-auto">
        <Image src="/weekend.jpeg" alt="image"  fill className="object-cover -z-10" />
        <h1 className="text-2xl text-white font-bold text-center uppercase">
          weekend terapeutic
        </h1>
      </div>
      <div className="max-w-6xl mx-auto flex space-y-4 flex-col px-4">
        <p className="text-justify">
          Vindecarea emoțională se realizează rapid și eficient în mijlocul
          naturii. La urma urmei, suferințele psihice ale omului modern se află
          în strânsă legătură cu dezrădăcinarea lui personală, cu distanțarea de
          ceea ce înseamnă autenticitate. Trăim între betoane, separați de
          ziduri și ne deplasăm cu mașina, vorbim la telefon cu orele sau stăm
          pe net, urmărind toate prostiile și uitând de noi. Cine mai observă în
          acest context nefericit ramurile de copaci care se profilează, din ce
          în ce mai timid, pe cerul încărcat de noxe? Suntem rupți de ceilalți,
          dar, mai ales de noi înșine.
        </p>

        <p className="text-justify">
          Este motivul pentru care mi-am dorit să-mi construiesc o casă la țară
          și, după îndelungi căutări, mi-am achiziționat o proprietate în
          Arcani, un sat civilizat situat în județul Gorj, aproape de Cheile
          Sohodolului, Mânăstirea Tismana și de casa memorială a lui Constantin
          Brâncuși. Prin spatele grădinii mele curge Jaleșul, cântecul păsărilor
          răsună dintre ramurile copacilor cu veselie și seara, când cerul este
          senin, stelele strălucesc minunat deasupra munților. Vara, pe marginea
          Jaleșului 1 , au loc uneori spectacole magice ale licuricilor. După un
          timp, locuința din Arcani, dintr-o casă de vacanță pentru mine, a
          devenit un proiect pentru vindecarea celorlalți, adică un retreat,
          unde te invit să mă însoțești, în călătorii de vindecare și de
          relaxare. Dacă suferi de oricare dintre aceste simptome: oboseală
          cronică, boală cronică, depresie, stima de sine scăzută, frică,
          slăbiciune, sau pur și simplu te simți puțin dezamăgit, ai nevoie de o
          ceremonie pentru a restabili echilibrul și armonia în mintea, corpul
          și spiritul tău. Vei putea beneficia în inima primitoare a Gorjului
          de: <br />
          <br />
          <span className="font-bold text-lg">
            CĂLĂTORII GHIDATE, ÎN CADRUL CĂRORA O SĂ FACI CUNOȘTINȚĂ:
          </span>
          <ul className="list-disc space-y-10 mt-5">
            <li>
              <p className="font-bold">CU ANIMALUL TĂU DE PUTERE</p>
              <br />
              <p>
                Călătoria pentru a-ți întâlni animalul de putere are un rol
                vindecător incredibil. Animalul tău de putere te alege și face
                parte din tine. Reprezintă calități de care ai sau de care ai
                nevoie în viața ta.
              </p>
            </li>
            <li>
              <p className="font-bold">CU SINELE TĂU SUPERIOR</p>
              <br />
              <p>
                Sinele tău superior este întregul care te cuprinde pe tine, cel
                de aici și de acum, dar și toate celelalte ipostaze ale tale.
                Este partea din tine care locuiește în eter, dar este totodată
                conectat cu tine. Sinele tău Superior este cel care este în
                posesia contractului tău spiritual, a planului tău de viață.
                Este oceanul în care tu, cel întrupat, ești o picătură, fără să
                te dizolvi.
              </p>
            </li>
            <li>
              <p className="font-bold">CU COPILUL TĂU INTERIOR</p>
              <br />
              <p>
                Copilul tău interior trebuie să fie iubit, să se simtă acceptat,
                în siguranță, hrănit și sprijinit. Călătoria pentru a-ți întâlni
                și a-ți hrăni copilul interior te ajută să înlocuiești tiparele
                negative de gândire cu altele care să atragă pacea, dragostea și
                seninătatea în sufletul tău.
              </p>
            </li>
            <li>
              <p className="font-bold">
                CĂLĂTORII SPIRITUALE DE VINDECAREA ANCESTRALĂ
              </p>
              <br />
              <p>
                Ca și noi, strămoșii noștri au fost afectați de anumite traume
                emoționale pe care nu le-au rezolvat în timpul vieții lor,
                astfel încât ni le-au transmis transgenerațional. Am primit
                aceste dureri, răni, traume, de la ascendenți printr-un contract
                sufletesc, sperând că le putem rezolva noi acum. Iar aceste
                traume familiale nerezolvate, chiar și din trecutul îndepărtat,
                ne pot cauza obstacole energetice de- a lungul acestei vieți,
                fiind resimțite, să zicem, ca niște blesteme și fiind atât de
                puternice încât ne pot provoca deconectarea de la adevăratul
                nostru sine. Totodată, traumele ancestrale ne pot face să ne
                simțim blocați în cicluri existențiale iterative, care par să nu
                aibă nicio ieșire sau un sfârșit și care apar adesea sub forma
                unor tulburări și boli transmisibile genetic. Orice familie
                prezintă cicluri de probleme similare, cum ar fi adicțiile,
                bolile cardiovasculare, cancerul, depresia, abuzurile sexuale,
                schizofrenia etc. Vindecarea ancestrală presupune depășirea
                obstacolelor ancestrale, prin recuperarea după anumite boli sau
                traume, reconectarea membrilor familiei, care ar putea să nu fi
                vorbit de ceva vreme, înțelegerea profundă a situației grupului
                familial, eliberarea de tipare ori comportamente care nu ne mai
                servesc etc.
              </p>
            </li>
            <li>
              <p className="font-bold">EXERCIȚII DE ÎMPĂMÂNTARE</p> <br />
              <p>
                Împământarea constă în reconectarea corpului cu electronii
                stocați în pământ, aducându-ne într-o stare de calmitate și
                relaxare profundă.
              </p>
            </li>
            <li>
              <p className="font-bold">TEHNICI DE RELAXARE PRIN HIPNOZĂ</p>
            </li>
            <li>
              <p className="font-bold">PLIMBĂRI ȘAMANICE ÎN NATURĂ</p>
            </li>
            <li className="mb-12">
              <p className="font-bold">
                CEREMONII DE CONECTARE CU NATURA ÎNCONJURĂTOARE
              </p>
            </li>
          </ul>
        </p>

        <p className="text-justify">
        Te aștept pe acest meleag de poveste (etimologic, cuvântul „arcan”
provine din lat. arcanum, de arcanus, însemnând  „secret”, „loc tainic,
ascuns” 2. 
        </p>

        
      </div>

      <p className="text-center font-bold mt-12">
      Oferta de weekend conține cazare+terapie de grup, la un preț avantajos
pentru clienții mei.
      </p>
    </div>
  );
}
