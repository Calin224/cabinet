"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Serviciu() {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return null;

  return (
    <div className="py-12">
      <div className="relative flex items-center justify-center p-20 mb-12 max-w-6xl mx-auto">
        <Image src="/poza-cons.jpg" fill className="object-cover -z-10" />
        <h1 className="text-2xl text-white font-bold text-center uppercase">
          CONSILIERE FILOZOFICA
        </h1>
      </div>
      <div className="max-w-6xl mx-auto flex space-y-4 flex-col px-4">
        <p className="text-justify">
          Consilierea filosofică vizează construirea, împreună cu clientul, a
          unei scheme filosofice care să ajute la identificarea problemei și a
          posibilelor sale rezolvări. Această schemă include gândirea critică,
          motivația etică și morală, analiza existențială, dialogul socratic,
          teoria budistă cu privire la atașament etc. 1 <br />
          <br />
          <p className="text-justify">
            În principiu, un plan de vindecare spirituală în care poate fi
            utilizată consilierea filosofică poate avea următoarea formă:
          </p>
          <ul className="list-disc space-y-10 mt-5">
            <li>
              <p className="font-bold">ETAPA 1</p>
              <br />
              <p>
                Identificarea problemei, sau interviul preliminar, ședință în
                cadrul căreia consilierul se asigură, printre altele, că nu se
                află în fața unei persoane cu tulburări psihice grave, caz în
                care se recomandă opinia unui specialist.
              </p>
            </li>
            <li>
              <p className="font-bold">ETAPA 2</p>
              <br />
              <p>Identificarea emoțiilor care apar în relație cu problema.</p>
            </li>
            <li>
              <p className="font-bold">ETAPA 3</p>
              <br />
              <p>
                Analiza mijloacelor prin care ar putea fi rezolvată problema. În
                cazul în care clientul înclină spre o abordare spirituală,
                atunci se poate introduce, pe lângă hipnoză, meditație sau
                rugăciune, și una dintre tehnicile șamanice de vindecare
                spirituală, cu explicațiile de rigoare. Spre exemplu, atunci
                când o femeie divorțează, dacă suferința devine din ce în ce mai
                persistentă cu trecerea timpului, iar frica zilei de mâine o
                copleșește, se poate vorbi despre pierderea unei părți de
                suflet, care, din perspectivă șamanică, se refugiază din calea
                traumei și se ascunde undeva, iar rolul șamanului este să o
                aducă înapoi.
              </p>
            </li>
            <li>
              <p className="font-bold">ETAPA 4</p>
              <br />
              <p>
                In etapa de contemplare se integrează experiența șamanică,
                proces care poate fi la fel de anevoios ca și etapa anterioară,
                deoarece a spiritual experience, however powerful, if
                unprocessed, does not have the power to stimulate transformation
                2 . În faza de integrare a experienței spirituale de vindecare,
                consider că discuțiile dintre consilierul filosofic și client ar
                trebui să aibă ca punct de sprijin istoria religiilor, din
                perspectivă filosofică. Clientul poate fi conștientizat cu
                privire la faptul că toate religiile mari, care stau la temelia
                concepților filosofice de azi, budismul, taoismul și
                pitagoreismul, conțin elemente șamanice. <br /> Această etapă
                importantă este recomandată a fi efectuată cu cei care au
                instrumentele necesare. Filosofii posedă instrumente precum
                dialogul socratic, gândirea critică și creativă, capacitatea de
                raționament, conceptualizarea, crearea de criterii, exerciții de
                gândire, contemplare ghidată și multe altele.
              </p>
            </li>
            <li>
              <p className="font-bold">ETAPA 5</p> <br />
              <p>
                este etapa echilibrului, cea în care clientul este pe deplin
                conștient de cauza emoțională și spirituală a problemei pentru
                care a cerut sprijinul consilierului filosofic, fiind gata să ia
                decizii sănătoase în privința viitorului, cu o nouă deschidere
                către spiritualitate și cu o nouă înțelegere a relațiilor umane.
                În această etapă, clientul ar putea să înțeleagă mult mai bine,
                prin prisma experienței personale, opinia lui Grof cu privire la
                întoarcerea către interiorul nostru, ca și metodă de combatere a
                problemelor existențiale cu care omenirea se confruntă astăzi:
                „Maestrii spirituali din toate timpurile par a fi de acord ca
                numai urmarirea obiectivelor materiale nu poate sa aduca
                împlinire, fericire si pace interioara. Criza globala care se
                amplifica rapid, deteriorarea morala si nemultumirea crescînda
                care însotesc cresterea bogatiei materiale în societatile
                industriale sînt martori ai acestui vechi adevar. În literatura
                mistica pare sa existe un acord general ca remediul pentru raul
                existential de care sufera omenirea este întoarcerea catre
                interior, cautarea raspunsurilor în propriul nostru psihic si
                parcurgerea unei profunde transformari psihospirituale .
              </p>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}
