import { skills } from "./shared";
import type { Resume } from "./types";

export const fr: Resume = {
  name: "Rezazi Mohamed Abdelbasset",
  shortName: "Abdelbasset Rezazi",
  title: "Développeur Full Stack & Ingénieur Logiciel",
  intro:
    "Je crée des applications web et mobiles avec React, Next.js et Node.js, avec un grand soin du détail dans le design et un code propre et maintenable.",
  about: [
    "Je suis développeur full stack et ingénieur logiciel, titulaire d'un Master en génie logiciel de l'USTHB. Passionné par les standards du web et du mobile, je cherche toujours à améliorer mes compétences et à apprendre des autres.",
    "Aujourd'hui, je suis développeur front-end chez DadyCar, où je conçois des produits de santé, de gestion de flotte et de gestion de garage, et le week-end j'enseigne le développement web full stack chez BrainerX. J'accorde une grande importance à la communication, au souci du détail dans le design et à la valeur du code sur le long terme.",
  ],
  location: "Alger / Médéa, Algérie",
  facts: [
    { label: "Basé à", value: "Alger / Médéa, Algérie" },
    { label: "Diplôme", value: "Master en génie logiciel" },
    { label: "Langues", value: "Arabe, anglais, français" },
    { label: "Hackathons", value: "2e place, Seba9 Hackathon" },
  ],
  skillGroups: [
    { title: "Frontend", items: skills.frontend },
    { title: "Mobile", items: skills.mobile },
    { title: "Backend", items: skills.backend },
    { title: "Bases de données & outils", items: skills.data },
    { title: "IA & vibe coding", items: skills.ai },
  ],
  experience: [
    {
      organization: "BrainerX",
      role: "Formateur web",
      start: "2025-06",
      end: null,
      meta: "Le week-end",
      summary: "J'enseigne le développement web full stack aux étudiants.",
      points: [
        "Le fonctionnement du web, de la requête à l'affichage.",
        "Frontend : HTML, CSS, JavaScript, le DOM et React.",
        "Backend : Node.js, Express, MongoDB, authentification et autorisation.",
      ],
    },
    {
      organization: "Cevital SPA",
      role: "Projet de fin d'études (Master) — Plateforme de formation centralisée",
      start: "2025-02",
      end: "2025-05",
      points: [
        "Conception et développement d'une plateforme centralisée de gestion des formations pour le groupe Cevital, afin de simplifier la planification, le suivi et l'évaluation dans 26 filiales.",
        "Collaboration avec les équipes RH et techniques pour analyser les besoins, proposer l'architecture et mettre en œuvre une solution évolutive adaptée aux exigences de l'entreprise.",
        "Intégration de fonctionnalités d'aide à la décision pour améliorer l'efficacité des formations et soutenir la planification RH stratégique grâce aux données.",
      ],
    },
    {
      organization: "DadyCar",
      role: "Développeur Front-end",
      start: "2023-12",
      end: null,
      meta: "Temps partiel · À distance (France)",
      points: [
        "Développement d'une plateforme de santé pour la chirurgie prénatale : la patiente répond à un questionnaire guidé, un algorithme calcule automatiquement le résultat, et le médecin le consulte directement sans reposer les questions.",
        "Travail sur l'application Fleet, un compagnon pour les chauffeurs, avec des fonctionnalités de collecte de données pour l'entreprise et des outils pour les chauffeurs comme l'autopartage et la réservation de garages et de services.",
        "Travail sur une application de gestion de garage qui centralise les prestations, rendez-vous, congés, paiements, factures, devis, fournisseurs et véhicules.",
        "Participation à la refonte du site principal de l'entreprise.",
      ],
    },
    {
      organization: "Factory Degitale",
      role: "Développeur Front-end",
      start: "2023-06",
      end: "2023-09",
      meta: "Temps plein",
      points: [
        "Développement de deux tableaux de bord e-commerce pour deux applications mobiles différentes.",
        "Progression rapide aux côtés de nombreux développeurs seniors.",
      ],
    },
  ],
  community: [
    {
      organization: "GDG & WTM Algiers",
      role: "Chef de l'équipe dev — Hackathon IWD'23",
      start: "2023-02",
      end: "2023-03",
      points: [
        "Gestion du flux de développement du site IWD'23.",
        "Préparation du thème du hackathon : « UTOPIA, Dare to Create a Perfect World ».",
        "Mentorat des participants en développement web pendant le hackathon.",
      ],
    },
    {
      organization: "Google Developer Student Club USTHB",
      role: "Co-responsable web",
      start: "2022-11",
      end: "2023-04",
      points: [
        "Responsable de tout ce qui concerne le développement web au sein du club.",
        "Animation d'ateliers de développement web.",
        "Réalisation et encadrement de projets de développement.",
      ],
    },
    {
      organization: "Google Developer Group Algiers",
      role: "Membre",
      start: "2022-01",
      end: "2024-10",
      points: [
        "Vainqueur du GIP, le hackathon interne d'intégration des nouveaux membres.",
        "Chef d'équipe de développement, formateur et mentor en développement web.",
        "Réalisation de projets et organisation d'événements.",
      ],
    },
  ],
  featuredProjects: [
    {
      title: "Focus Care",
      context: "DadyCar",
      kind: "Santé",
      description:
        "Un questionnaire guidé dont les réponses sont évaluées automatiquement par un algorithme : le médecin voit le résultat dès le rendez-vous.",
    },
    {
      title: "DadyCar Fleet",
      context: "DadyCar",
      kind: "Mobilité",
      description:
        "Tout ce dont les chauffeurs ont besoin au quotidien — autopartage, réservation de garages et de services — plus la collecte de données pour l'entreprise.",
    },
    {
      title: "Application de gestion de garage",
      context: "DadyCar",
      kind: "Gestion",
      description:
        "Centralise prestations, rendez-vous, congés, paiements, factures, devis, fournisseurs et véhicules des garages automobiles.",
    },
    {
      title: "Plateforme de formation centralisée",
      context: "Groupe Cevital",
      kind: "Entreprise",
      description:
        "Planifie, suit et évalue les formations dans 26 filiales, avec une aide à la décision pour la planification RH stratégique.",
    },
  ],
  personalProjects: [
    {
      title: "Dz Imposters",
      kind: "Full stack",
      description: "Une plateforme pour signaler et évaluer les clients en ligne qui reçoivent la marchandise sans la retourner.",
    },
    { title: "Plateforme d'apprentissage en ligne", kind: "Full stack", description: "Une plateforme full stack de cours en ligne pour les apprenants." },
    { title: "Système de gestion des PFE", kind: "Full stack", description: "Gestion des projets de fin d'études à l'université." },
    { title: "Clone d'Airbnb", kind: "Full stack", description: "Un clone full stack de la plateforme de location." },
    { title: "Clones de Facebook, Instagram et Discord", kind: "Full stack", description: "Des clones full stack de trois réseaux sociaux." },
    { title: "Clone de Deliveroo 2.0", kind: "Mobile", description: "Un clone mobile de l'application de livraison de repas." },
    { title: "Clone mobile d'Instagram", kind: "Mobile", description: "Un clone mobile de l'application de partage de photos." },
    { title: "Application de films", kind: "Mobile", description: "Une application mobile pour parcourir des films." },
    { title: "Site de restaurant & landing pages", kind: "Web", description: "Un site de restaurant et plusieurs landing pages." },
  ],
  education: [
    {
      degree: "Master en génie logiciel",
      school: "Université des Sciences et de la Technologie Houari Boumediene (USTHB)",
      period: "2023 – 2025",
    },
    {
      degree: "Licence en informatique",
      school: "Université des Sciences et de la Technologie Houari Boumediene (USTHB)",
      period: "2020 – 2023",
      detail: "Moyenne : 13,09 / 20",
    },
    {
      degree: "Baccalauréat en techniques mathématiques",
      school: "Lycée Kemel Zemerline, Médéa",
      period: "2020",
      detail: "Moyenne : 15,71 / 20",
    },
  ],
  achievements: [
    "2e place — Seba9 Hackathon",
    "Vainqueur — GIP, hackathon interne du GDG Algiers",
    "Participant — Hackathon DevFest Algiers 2022",
  ],
  languages: ["Arabe", "Anglais", "Français"],
};
