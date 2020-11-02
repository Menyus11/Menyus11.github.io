function kockaszámítás() {

    let kockaéle = document.querySelector("#kocka");
    let kockaoldalfelület = (parseInt(kockaéle.value) ** 2);
    let kockafelület = (kockaoldalfelület * 6);
    let kockaűrtartalma = (parseInt(kockaéle.value) ** 3);
    let kockam2 = (kockafelület/10000);
    let kockam3 = (kockaűrtartalma / 1000000);
    
    let kcm2 = document.querySelector("span.ccm2");
    let km2 = document.querySelector("span.cm2");
    let kcm3 = document.querySelector("span.ccm3");
    let km3 = document.querySelector("span.cm3");

    kcm2.innerHTML=kockafelület;
    km2.innerHTML=kockam2;
    kcm3.innerHTML=kockaűrtartalma;
    km3.innerHTML=kockam3;

};

function téglaszámítás() {

    let téglaaéle = document.querySelector("#téglaa");
    let téglabéle = document.querySelector("#téglab");
    let téglacéle = document.querySelector("#téglac");
    let száma = parseInt(téglaaéle.value);
    let számb = parseInt(téglabéle.value);
    let számc = parseInt(téglacéle.value);

    let téglaűrtartalom = (száma * számb * számc);
    let téglafele = (száma * számb) + (száma * számc) + (számb * számc);
    let téglafelület = téglafele * 2;
    let téglam2 = (téglafelület / 10000);
    let téglam3 = (téglaűrtartalom / 1000000);
   
    let tcm2 = document.querySelector("span.tcm2");
    let tm2 = document.querySelector("span.tgm2");
    let tcm3 = document.querySelector("span.tcm3");
    let tm3 = document.querySelector("span.tgm3");

    tcm2.innerHTML=téglafelület;
    tm2.innerHTML=téglam2;
    tcm3.innerHTML=téglaűrtartalom;
    tm3.innerHTML=téglam3;
};

//körterület = r2*pi

function hengerszámítás() {
    
    let hengermagasság = document.querySelector("#hengerh").value;
    let hengersugár = document.querySelector("#hengerr").value;

    let magasságh = parseInt(hengermagasság);
    let sugárr = parseInt(hengersugár);

    let körterület = (sugárr**2)*3.14;
    let körkerület = (sugárr*2)*3.14;
    let palástterület = (magasságh*körkerület);

    let hengerfelület = (körterület*2)+palástterület;
    let hengertérfogat = (körterület*magasságh);

    let hengerm2 = (hengerfelület / 10000);
    let hengerm3 = (hengertérfogat / 1000000);

    let hcm2 = document.querySelector("span.hecm2");
    let hm2 = document.querySelector("span.hem2");
    let hcm3 = document.querySelector("span.hecm3");
    let hm3 = document.querySelector("span.hem3");

    hcm2.innerHTML=hengerfelület;
    hm2.innerHTML=hengerm2;
    hcm3.innerHTML=hengertérfogat;
    hm3.innerHTML=hengerm3;

};

//felszíne: 𝐴=4⋅𝑟2𝜋. térfogata: 𝑉=4⋅𝑟3𝜋/3.

function gömbszámítás() {
    let gömbsugár = document.querySelector("#gömb").value;
    let gsr = parseInt(gömbsugár);

    let gömbfelszín = 4*(gömbsugár**2)*3.14;
    let gömbtrf = 4*(gömbsugár**3)*3.14;
    let gömbtérfogat = (gömbtrf/3);
    let gömbm2 = (gömbfelszín / 10000);
    let gömbm3 = (gömbtérfogat / 1000000);
    let gömbm2ker = (gömbm2.toPrecision(2));
    let gömbm3ker = (gömbm3.toPrecision(2));
    let gömbfelszínker = (gömbfelszín.toFixed(2));
    let gömbtérfogatker = (gömbtérfogat.toFixed(2));
    
    let gcm2 = document.querySelector("span.göcm2");
    let gm2 = document.querySelector("span.göm2");
    let gcm3 = document.querySelector("span.göcm3");
    let gm3 = document.querySelector("span.göm3");

    gcm2.innerHTML=gömbfelszínker;
    gm2.innerHTML=gömbm2ker;
    gcm3.innerHTML=gömbtérfogatker;
    gm3.innerHTML=gömbm3ker;

};
  






















/*function calc() {
    let ár = document.c.típusválasztó.options[document.c.típusválasztó.selectedIndex].value;

    let árak = parseInt(ár)
    let mennyiség = document.querySelector("input[name='darab']");
    let AN = parseInt(mennyiség.value)
    SSP(árak, AN);
}
function SSP(árak, AN) {
    let LV = document.querySelector("span.lóvé");

    {
        let fizetendő = AN * árak;
        LV.innerHTML = fizetendő;
    }
}*/




