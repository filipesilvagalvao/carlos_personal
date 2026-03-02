type Categories = {
    [key: string]: {
        src: string;
        alt: string;
    }[];
}
const categories: Categories = {

    "Feminino": [
        {
            src: "https://ik.imagekit.io/ejkpbo90x/FEMININO/LIVIA%20-%20ENSAIO%202025.jpg%20(35).jpg?tr=w-800,q-60,f-webp",
            alt: "livia andrade"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/FEMININO/JULIANA%20-%20MATHEUS%20(9).jpg?tr=w-800,q-60,f-webp",
            alt: "juliana"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/FEMININO/HELEN%20CRISTINA%20E%20FAMILIA%20(47).jpg?tr=w-800,q-60,f-webp",
            alt: "helen cristina"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/FEMININO/ALINE%20-%20ENSAIO%20SENSUAL%20(43).jpg?tr=w-800,q-60,f-webp",
            alt: "aline gomes"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/FEMININO/POLIANA%20CAMARGOS%20-%20SESSAO%20FEMININA%20(71).jpg?tr=w-800,q-60,f-webp",
            alt: "poliana camargo"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/FEMININO/MARCELA%20COELHO%20-%20ENSAIO%20FEMININO%20(19).jpg?tr=w-800,q-60,f-webp",
            alt: "marcela coelho"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/FEMININO/NAIARA%20FARIA%20-%20SESSAO%20CORPORATIVA%20(25).jpg?tr=w-800,q-60,f-webp",
            alt: "naiara faria"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/FEMININO/IARA%20COFARI%20-%20ENSAIO%20FEMININO%20(9).jpg?tr=w-800,q-60,f-webp",
            alt: "iara cofari"
        },
        
    ],
    "Masculino": [
        {
            src: "https://ik.imagekit.io/ejkpbo90x/MASCULINO/CLEISSON%20ABREU%20%20(13).jpg?tr=w-800,q-60,f-webp",
            alt: "cleiton"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/MASCULINO/ORIGINAL%20(2).jpg?tr=w-800,q-60,f-webp",
            alt: "arthur"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/MASCULINO/JUNNIOR%20SANTOS%20-%20CORPORATIVO%20(31).jpg?tr=w-800,q-60,f-webp",
            alt: "junior santos"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/MASCULINO/LUKAS%20-%20RETRATOS%20(8).jpg?tr=w-800,q-60,f-webp",
            alt: "lukas"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/MASCULINO/EUSTAQUIO%20-%20ENSAIO%20MASCULINO%20(13).jpg?tr=w-800,q-60,f-webp",
            alt: "eustakio"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/MASCULINO/FABIANO%20-%20SESSAO%20ANIVERSARIO%20(11).jpg?tr=w-800,q-60,f-webp",
            alt: "fabiano"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/MASCULINO/GUILHERME%20VELOSO%20-%20RETRATOS%20(9).jpg?tr=w-800,q-60,f-webp",
            alt: "guilherme veloso"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/MASCULINO/SIMAO%20ARAUJO%20%20(13).jpg?tr=w-800,q-60,f-webp",
            alt: "simao araujo"
        },
    ],
    "Casal": [
        {
            src: "https://ik.imagekit.io/ejkpbo90x/CASAL/GABRIELA%20E%20GUSTAVO%20(74).jpg?tr=w-800,q-60,f-webp",
            alt: "gustavo e gabriela"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/CASAL/FILIPE%20E%20OHANA%20-%20PRONTAS%20(1).jpg?tr=w-800,q-60,f-webp",
            alt: "filpe e ohana"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/CASAL/ESTHER%20E%20NICOLAS%20%20(20).JPG?tr=w-800,q-60,f-webp",
            alt: "esther e nicolas"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/CASAL/DEBORA%20E%20FELIPE%20-%20SESS%C3%83O%20CASAL%20(9).jpg?tr=w-800,q-60,f-webp",
            alt: "debora e felipe"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/pre_wedding/2026/jeny-e-mateus/foto-31.jpg?tr=w-800,q-60,f-webp",
            alt: "jeny e mateus"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/CASAL/LEANDRO%20E%20LIARA%20-%20CIVIL%20(31).jpg?tr=w-800,q-60,f-webp",
            alt: "leandro e liara"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/CASAL/J&M%20-%20MATHEUS%20(15).jpg?tr=w-800,q-60,f-webp",
            alt: "j&m"
        },
    ],
    "Gestante": [
        {
            src: "https://ik.imagekit.io/ejkpbo90x/GESTANTE/CAROLINE%20E%20DARLAN%20-%20ENSAIO%20DE%20GESTANTE%20(137).jpg?tr=w-800,q-60,f-webp",
            alt: "caroline"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/GESTANTE/JEANY%20SOARES%20-%20SESSAO%20GESTANTE%20(35).jpg?tr=w-800,q-60,f-webp",
            alt: "jeany soares"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/GESTANTE/JHENYFHER%20E%20VITOR%20-%20SESSAO%20GESTANTE%20(27).jpg?tr=w-800,q-60,f-webp",
            alt: "jhenyfher"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/GESTANTE/NAIARA%20LALESCA%20-%20GESTANTE%20(43).JPG?tr=w-800,q-60,f-webp",
            alt: "naiara lalesca"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/GESTANTE/GR%20%20(19).jpg?tr=w-800,q-60,f-webp",
            alt: "gr"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/GESTANTE/DSC_1669.jpg?tr=w-800,q-60,f-webp",
            alt: "gestante"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/GESTANTE/VERONICA%20-%20GESTANTE%20(55).JPG?tr=w-800,q-60,f-webp",
            alt: "veronica"
        },
    ],
    "Profissional": [
        {
            src: "https://ik.imagekit.io/ejkpbo90x/CORPORATIVO/FLAVIANA%20-%20RETRATOS%20(29).jpg?tr=w-800,q-60,f-webp",
            alt: "flaviana"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/CORPORATIVO/JORDANIA%20FARIA%20-%20PSICOLOGA%20INFANTIL%20(3).jpg?tr=w-800,q-60,f-webp",
            alt: "jordania faria"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/CORPORATIVO/NAIARA%20FARIA%20-%20SESSAO%20CORPORATIVA%20(7).jpg?tr=w-800,q-60,f-webp",
            alt: "naiara faria"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/CORPORATIVO/FRAGATA%20-%20ENSAIO%20DA%20BANDA%20(21).jpg?tr=w-800,q-60,f-webp",
            alt: "banda fragata"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/CORPORATIVO/ALBERTO%20LACERDA%20-%20CIRURGIAO%20DENTISTA%20(10).jpg?tr=w-800,q-60,f-webp",
            alt: "alberto lacerda"
        },
        {
            src: "https://ik.imagekit.io/ejkpbo90x/CORPORATIVO/EDUARDA%20ROCHA%20-%20RETRATOS-3.jpg?tr=w-800,q-60,f-webp",
            alt: "eduarda rocha"
        },
    ]


}

export default categories