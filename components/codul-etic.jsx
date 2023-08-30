"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const CodulEtic = () => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return null;

  return (
    <div>
      <div className="relative flex items-center justify-center p-20 mb-12 max-w-6xl mx-auto">
        <Image src="/codul-etic.jpg" alt="image"  fill className="object-cover -z-10" />
        <h1 className="text-2xl text-white font-bold text-center uppercase">
          codul etic al vindecatorului spiritual
        </h1>
      </div>
      <div className="max-w-6xl mx-auto">
        <p className="font-bold">TU:</p> <br />
        <ul className="list-disc space-y-3 list-inside">
          <li className="text-justify">
            Ai dreptul să cunoști și să înțelegi diferența între modelul
            spiritual de vindecare și cel tradițional. Munca mea nu este de
            natură medicală și nu trebuie confundată cu niciun tratament de
            acest gen. Deși atât vindecătorii spirituali cât și practicienii
            care folosesc un model medical lucrează în favoarea omului aflat în
            nevoie, &quot;tratamentele&quot; lor se bazează pe date și
            metodologii complet diferite. Există diferențe importante între
            felul în care vindecarea spirituală și &quot;modelul medical&quot;
            înțeleg vindecarea. O practică strictă a vindecării spirituale nu
            percepe lumea prin aceleași &quot;lentile&quot; care revelează de
            obicei probleme precum &quot;hepatita&quot;, &quot;depresia
            clinică&quot; sau &quot;metabolismul&quot;. Acestea sunt fenomene
            conceptualizate și recunoscute în domeniile medicinei, psihologiei
            și nutriției. Deși un vindecător spiritual contemporan instruit
            poate, de asemenea, înțelege și observa astfel de fenomene, acestea
            nu reprezintă domenii spirituale de funcționare. O practică
            spirituală nu conceptualizează și nu se angajează în practici de
            vindecare bazate pe aceste lucruri. Acestea sunt profesii diferite
            care se bazează pe perspective diferite, care utilizează tehnici
            diferite și care, la rândul lor, se bazează pe înțelegeri diferite a
            ceea ce este real și deci important. Deoarece o mare parte din
            lucrarea spirituală implică viețile altora, o să am întotdeauna în
            vedere faptul că domeniul meu de aplicare include aspecte care pot
            fi intime și sensibile. Mai mult, având în vedere disponibilitatea
            unor profesii medicale, psihiatrice, psihologice sau de altă natură,
            o să-ți recomand să te adresezi unui specialist în astfel de
            profesii alternative, dacă voi simți că asta e bine pentru tine.
          </li>
          <li className="text-justify">
            Ar trebui să știi că, dacă te hotărăști să apelezi la mine, voi fi
            pe deplin conectată cu lumea spirituală și pe deplin devotată ție și
            vindecării tale spirituale. Astfel, munca mea pentru tine face parte
            din domeniul spiritual și în acest domeniu voi face tot posibilul
            pentru a te ajuta.
          </li>
          <li className="text-justify">
            Ai dreptul la informațiile pe care o să le primesc de la spiritele
            de ajutor în cadrul muncii specifice pe care o să o fac pentru tine.
          </li>
          <li className="text-justify">
            Ai dreptul să știi că, oricât de sensibile sau intime sunt aceste
            informații, voi păstra confidențialitatea deplină. Te asigur că
            orice informații specifice pe care o să le obțin cu privire la
            problema ta vor fi tratate cu cel mai mare respect și nu vor fi
            împărtășite altora decât dacă îmi vei da permisiunea expresă de a
            face acest lucru.
          </li>
          <li className="text-justify">
            Ai dreptul să fii tratat cu compasiune și respect. Munca mea este în
            folosul tău și va fi realizată cu grijă față de tine. Poți să mă
            oprești în orice moment dacă nu te simți confortabil cu ceea ce fac.
          </li>
        </ul>

        <ul className="list-disc space-y-3 mt-12 list-inside">
          <p className="text-md font-bold">EU</p>
          <li className="text-justify">
            Nu o să grăbesc procesul tău de vindecare, e important ca tu să ai
            timp să procesezi informațiile pe care ghizii spirituali sau
            propriul tău subconștient ți le vor transmite cu ajutorul meu.
          </li>
          <li className="text-justify">
            Nu îți voi ascunde nicio informație obținută în timp ce voi călători
            pentru tine. În același timp, nu o să-ți divulg nicio informație
            care are legătură cu alții, chiar dacă o să o primesc în timpul
            procesului tău de vindecare.
          </li>
          <li className="text-justify">
            Nu o să interpretez informațiile primite de la ghizii spirituali,
            pentru că e vindecarea ta și tot ceea ce mi se dezvăluie te privește
            pe tine, nu pe mine. Rolul meu este de a raporta pur și simplu ceea
            ce aflu și de a face acest lucru cu compasiune. Eu nu servesc decât
            ca interfață între tine și lumea spiritelor vindecătoare. Așadar, eu
            nu sunt un hermeneut al informațiilor primite. Tu ești cel care o să
            le interpretezi, așa cum o să consideri potrivit. Răspunsurile și
            informațiile pe care ni le oferă spiritele apar adesea sub forma
            unor metafore. Această figură de stil este un lucru menit să
            declanșeze asociații. O metaforă nu este clară ci, dimpotrivă, are
            rolul de a dezvolta sensuri aproape organice în timp. Este ceva ce
            trebuie digerat.
          </li>
          <li className="text-justify">
            Nu voi utiliza informațiile primite, dacă pot face rău cuiva.
            Totodată, nu voi încerca să aflu informații despre viața ta, în
            afară de zona în care mi-ai cerut să lucrez.
          </li>
          <li className="text-justify">
            Nu voi folosi informațiile pe care mi le vei comunica în timpul
            transei hipnotice decât în scopul vindecării tale.
          </li>
          <li className="text-justify">
            Nu voi încerca să-ți induc nimic în timpul hipnozei ghidate, decât
            cu acordul tău prealabil.
          </li>
          <li className="text-justify">
            Nu voi face nimic cu intenția de a te răni pe tine sau pe oricine
            altcineva. Scopul meu este de a ajuta și de a vindeca.
          </li>
        </ul>
      </div>
    </div>
  );
};
