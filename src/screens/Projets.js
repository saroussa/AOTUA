import React from "react"
import { Chrono } from "react-chrono";

export default function Projets() {
  const items = [
    {
    title: "1er Juin 2015",
    cardTitle: "",
    url: "http://www.history.com",
    cardSubtitle:"	Démarrage officiel de l’AOTU-A 1er Juin 2015",
    cardDetailedText: "	Démarrage officiel de l’AOTU-A 1er Juin 2015",
    media: {
      type: "IMAGE",
      source: {
        url: require("../assets/img/LogoAOTUA.jpg")
      }
    }
  },
    {
    title: "Juillet 2015",
    cardTitle: "",
    url: "http://www.history.com",
    cardSubtitle:"Installation de Mr KHOUKHI Mourad DG de L’AOTU-A ,",
    cardDetailedText: "Installation de Mr KHOUKHI Mourad DG de L’AOTU-A ,et départ de Mr BENAZZOUZ Rachid",
    media: {
      type: "IMAGE",
      source: {
        url: require("../assets/img/LogoAOTUA.jpg")
      }
    }
  },
    {
    title: "02 au 13 Aôut 2015",
    cardTitle: "",
    url: "http://www.history.com",
    cardSubtitle:"Trainings auprès des opérateurs de transport",
    cardDetailedText: "Le système d’exploitation de transport terrestre de l’ETUSA du 02 au 13 Aôut 2015",
    media: {
      type: "IMAGE",
      source: {
        url: require("../assets/img/LogoAOTUA.jpg")
      }
    }
  },
    {
    title: "28 au 29 Oct 2015",
    cardTitle: "",
    url: "http://www.history.com",
    cardSubtitle:"Le système de transport par câble",
    cardDetailedText: "Le système de transport par câble du 28 au 29 Oct 2015",
    media: {
      type: "IMAGE",
      source: {
        url: require("../assets/img/LogoAOTUA.jpg")
      }
    }
  },
    {
    title: "27 Déc 2015",
    cardTitle: "",
    url: "http://www.history.com",
    cardSubtitle:"Visites de travail",
    cardDetailedText: "Visites de travail Poste de commandes centralisé (PCC) et des stations du métro d’Alger le 27 Déc 2015",
    media: {
      type: "IMAGE",
      source: {
        url: require("../assets/img/LogoAOTUA.jpg")
      }
    }
  },
    {
    title: "25 Nov 2015",
    cardTitle: "",
    url: "http://www.history.com",
    cardSubtitle:"Gare SOGRAL Carroubier",
    cardDetailedText: "Gare SOGRAL Carroubier le 25 Nov 2015",
    media: {
      type: "IMAGE",
      source: {
        url: require("../assets/img/LogoAOTUA.jpg")
      }
    }
  },
    {
    title: "30 Déc 2015",
    cardTitle: "",
    url: "http://www.history.com",
    cardSubtitle:"Ateliers RATP el Djazaier",
    cardDetailedText: "Ateliers RATP el Djazaier le 30 Déc 2015",
    media: {
      type: "IMAGE",
      source: {
        url:"https://elmouchir.caci.dz/assets/images/entreprise/13054.jpg"
      }
    }
  },
    {
    title: "07 Mars 2016",
    cardTitle: "",
    url: "http://www.history.com",
    cardSubtitle:"HB Technologies",
    cardDetailedText: "HB Technologies le 07 Mars 2016",
    media: {
      type: "IMAGE",
      source: {
        url: require("../assets/img/LogoAOTUA.jpg")
      }
    }
  },
    {
    title: "16 Fév 2016",
    cardTitle: "",
    url: "http://www.history.com",
    cardSubtitle:"Visite UITP",
    cardDetailedText: "Visite UITP le 16 Fév 2016 siège Aotu-a",
    media: {
      type: "IMAGE",
      source: {
        url: require("../assets/img/LogoAOTUA.jpg")
      }
    }
  },
    {
    title: "30 Oct 2016",
    cardTitle: "",
    url: "http://www.history.com",
    cardSubtitle:"Nouvelle ligne ferroviaire Birtouta –Zéralda",
    cardDetailedText: "Nouvelle ligne ferroviaire Birtouta –Zéralda le 30 Oct 2016",
    media: {
      type: "IMAGE",
      source: {
        url: require("../assets/img/LogoAOTUA.jpg")
      }
    }
  },
    {
    title: "19 Nov 2015",
    cardTitle: "",
    url: "http://www.history.com",
    cardSubtitle:"Echange international",
    cardDetailedText: "Echange international Téléconférence UITP le 19 Nov 2015",
    media: {
      type: "IMAGE",
      source: {
        url: require("../assets/img/LogoAOTUA.jpg")
      }
    }
  },
    {
    title: "24 Nov 2015",
    cardTitle: "",
    url: "http://www.history.com",
    cardSubtitle:"Présentations régulières des experts en transport",
    cardDetailedText: "Présentations régulières des experts en transport La circulation routière, présentée par Mr MESSOUD Nacer le 24 Nov 2015",
    media: {
      type: "IMAGE",
      source: {
        url: require("../assets/img/LogoAOTUA.jpg")
      }
    }
  },

];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Chrono slideShow={true} items={items} />
    </div>
  )
}