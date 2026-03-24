export const UNIVERSITY_PROJECTS = [
  // Dev Web
  {
    title: "Application web de recettes de cocktails",
    category: "Développement Web",
    tags: ["PHP", "HTML5", "CSS", "Sessions", "Cookies"],
    description: "Application web PHP de gestion de recettes de cocktails. Navigation par hiérarchie d'ingrédients, recherche avancée avec scoring, authentification et système de favoris persistants.",
    details: "Projet réalisé en PHP dans le cadre du module Conception d'Applications Web en L3 Informatique à l'Université de Lorraine.\nL'application permet de naviguer dans un catalogue de 108 recettes de cocktails organisées selon une taxonomie hiérarchique d'ingrédients (ex. Alcool → Alcool fort → Rhum → Rhum blanc), d'effectuer des recherches avancées avec une syntaxe dédiée (+ingrédient voulu, -ingrédient exclu, guillemets pour les expressions multi-mots) et un système de score de pertinence exploitant les relations hiérarchiques entre ingrédients.\nL'application intègre une authentification complète (inscription avec validation, hachage bcrypt, connexion, déconnexion, gestion de profil) et un système de favoris à double persistance, session PHP pour les utilisateurs anonymes, fichiers sérialisés pour les utilisateurs connectés.\nLa persistance des données utilisateurs est assurée par fichiers PHP (pas de base SQL), avec une architecture page-based centrée sur un routeur unique (index.php) et une séparation claire entre utilitaires, templates et assets.\nRéalisé en trinôme, ce projet a permis de mettre en pratique la conception d'une application web complète en PHP, la gestion des sessions et de l'état utilisateur, ainsi que l'implémentation d'algorithmes de recherche et de filtrage.",
    links: [
      { label: "Lire", href: "#" },
      { label: "GitHub", href: "https://github.com/ashigi444/projetCocktails" }
    ],
    img: "public/images/projects/gestion_coktails.jpg"
  },
  {
    title: "Application Angular - Star Wars (TP)",
    category: "Développement Web",
    tags: ["Angular", "TypeScript", "Routing", "Reactive Forms"],
    description: "Application web Angular de gestion d'épisodes Star Wars. Navigation entre vues, formulaire réactif avec prévisualisation en temps réel, directive personnalisée et gestion d'état par service.",
    details: "Travail pratique réalisé seul dans le cadre des modules Développement d'Applications Mobile et Technologies du Web en L3 Informatique à l'Université de Lorraine.\nL'application permet de parcourir une liste d'épisodes Star Wars, de consulter leur détail, de liker/unliker, de créer un nouvel épisode et de s'inscrire à une newsletter.\nLes concepts Angular mis en pratique sont, une architecture par composants avec communication via @Input(), du routing dynamique avec paramètres (:episodeId), de la navigation programmatique, un service injecté en singleton, des pipes natifs (date, number, titlecase), des directives structurelles modernes (@for, @if).\nDeux approches de formulaires ont été implémentées, formulaire template-driven (newsletter) avec ngModel et validation HTML5, et formulaire réactif (création d'épisode) avec FormGroup, FormBuilder, abonnement à valueChanges pour une prévisualisation en temps réel et désactivation du bouton selon l'état de validation.\nUne directive d'attribut personnalisée gère le surlignage au survol via ElementRef avec gestion des couleurs et fallback.\nProjet réalisé avec Angular 21 et TypeScript en mode strict.",
    links: [
      { label: "Lire", href: "#" },
      { label: "GitHub", href: "https://github.com/DorianPRJ7/Star-Wars-Angular-Application" }
    ],
    img: "public/images/projects/starwars_app.jpg"
  },

  // Dev Logiciel
  {
    title: "Moteur de géométrie 2D distribué - C++/Java",
    category: "Développement Logiciel",
    tags: ["C++", "Java", "TCP/IP", "Sockets", "Design Patterns", "JavaFX"],
    description: "Application distribuée C++/Java de gestion de formes géométriques 2D. Client C++ pour la logique métier, serveur Java multi-clients pour la visualisation, communication via sockets TCP/IP et protocole texte personnalisé.",
    details: "Projet réalisé en C++ et Java dans le cadre du module Premiers Pas vers l'Ingénierie du Logiciel en L3 Informatique à l'Université de Lorraine.\nL'application est découpée en deux composants distincts, un client C++ gérant la logique géométrique (segments, cercles, triangles, polygones, groupes composites) et les transformations (translation, homothétie, rotation via matrices 2×2), et un serveur Java multi-clients basé sur JavaFX qui reçoit les commandes de dessin via TCP/IP et les rend graphiquement.\nL'architecture repose sur trois design patterns, le pattern Visiteur découple les opérations de dessin et de sérialisation des classes de formes, la Chaîne de responsabilité gère la désérialisation polymorphe depuis fichier, et le Singleton assure une initialisation unique de la couche réseau avec abstraction cross-platform (Winsock / POSIX).\nLe projet inclut une suite de tests C++ couvrant vecteurs, matrices, formes et transformations, des tests JUnit pour le serveur Java, ainsi qu'une documentation générée via Doxygen (C++) et Javadoc (Java).\nRéalisé en binôme, ce projet met l'accent sur la qualité du code, la séparation des responsabilités et l'application concrète des principes d'ingénierie logicielle.",
    links: [
      { label: "Lire", href: "#" },
      { label: "GitHub", href: "https://github.com/DorianPRJ7/distributed-2d-geometry-engine" }
    ],
    img: "public/images/projects/geometry2D_engine.jpg"
  },
  {
    title: "UNO Multijoueur",
    category: "Développement Logiciel",
    tags: ["Java", "JavaFX", "Sockets","JDBC"],
    description: "Client-serveur, sockets, DAO JDBC. Gestion complète des règles, parties, scores et comptes joueurs avec sauvegarde en base de données.",
    details: "Développement complet du jeu de cartes UNO en Java avec IntelliJ IDEA dans le cadre du projet de synthèse du second semestre de Licence 2 Informatique à l'Université de Lorraine.\nL'application repose sur une architecture client-serveur en Java/JavaFX, avec une gestion des parties, joueurs, cartes et règles via un modèle orienté objet clair et modulaire.\nLe serveur centralise la logique du jeu, les tours, les effets de cartes et la communication réseau, tandis que le client JavaFX, conçu selon le modèle MVC, propose une interface graphique intuitive pour jouer en multijoueur en ligne.\nLes scores, parties et comptes joueurs sont enregistrés dans une base MySQL à l'aide de JDBC et d'une couche DAO.\nProjet réalisé en trinôme, centré sur la mise en pratique des notions de POO, de réseau et de bases de données, ainsi que sur la qualité du code (lisibilité, extensibilité, réutilisabilité) et la collaboration.",
    links: [
      { label: "Lire", href: "#" },
      { label: "GitHub", href: "https://github.com/DorianPRJ7/Jeu-du-Uno-PS4" }
    ],
    img: "public/images/projects/uno.jpg"
  },
  {
    title: "Jeu du Pendu",
    category: "Développement Logiciel",
    tags: ["Java","JavaFX", "FXML", "MVC"],
    description: "Interface graphique fluide et interactive. Gestion des parties, scores et paramètres de l'interface et des parties sans sauvegarde.",
    details: "Développement d'un jeu du Pendu en Java avec interface graphique JavaFX avec Eclipse IDE 2023-12 sur Windows, réalisé dans le cadre du module Interfaces Graphiques en Licence 2 Informatique à l'Université de Lorraine.\nL'objectif du projet était de concevoir une interface répondant simultanément aux besoins de plusieurs clients fictifs, chacun ayant ses propres contraintes fonctionnelles et esthétiques.\nL'application a été développée selon une architecture MVC (Modèle-Vue-Contrôleur), avec des vues construites via FXML et SceneBuilder. Elle intègre plusieurs interfaces de jeu, un système de gestion des lettres, du score, des erreurs et de la fin de partie, ainsi qu'une navigation fluide et intuitive entre les écrans (menu, règles, jeu, résultats).\nLe travail a également porté sur l'ergonomie, la cohérence graphique, la réutilisabilité du code et la gestion des événements utilisateurs (clavier, boutons, ...).\nLe projet a impliqué une analyse détaillée des besoins de clients fictifs, la création de maquettes avec Draw.io, puis le développement complet de l'interface graphique à partir du code de jeu fourni en Java (sans interface).\nRéalisé en trinôme, ce projet a permis de consolider la maîtrise de JavaFX et d'approfondir la conception d'interfaces centrées utilisateur, tout en appliquant une démarche d'ingénierie logicielle complète.",
    links: [
      { label: "Lire", href: "#" },
      { label: "GitHub", href: "https://github.com/DorianPRJ7/Jeu-du-Pendu-PS4" }
    ],
    img: "public/images/projects/pendu.jpg"
  },

  // Algos et IA
  {
    title: "Bentley–Ottmann",
    category: "Algorithmique & IA",
    tags: ["C","Algorithmes", "Structures", "Gestion mémoire", "Scripts"],
    description: "Intersections de segments, gestion de la mémoire, listes doublement chaînées, ABR et comparaison des algorithmes Glouton et de Bentley-Ottmann.",
    details: "Projet réalisé en C avec CLion dans le cadre du projet de synthèse du premier semestre de Licence 2 Informatique à l'Université de Lorraine.\nL'objectif était d'implémenter deux approches permettant de détecter les intersections de segments dans un plan 2D. Un algorithme glouton simple et l'algorithme de Bentley–Ottmann, plus optimisé grâce à la technique du balayage du plan.\nLe projet comprend la création complète des structures de données nécessaires (listes doublement chaînées, arbres binaires de recherche, nombres rationnels, points, segments, ...), ainsi que la mise en place de tests unitaires en C pour valider chaque module et algorithme, avec visualisation de certains cas dans GeoGebra.\nLes performances des deux algorithmes et des structures associées ont d'abord été analysées théoriquement via leurs complexités en temps d'exécution, puis évaluées expérimentalement à l'aide de scripts Bash générant des instances aléatoires.\nD'autres scripts exécutaient automatiquement les algorithmes sur chaque instance et enregistraient les résultats dans des fichiers dédiés.\nLes résultats collectés ont ensuite été traités et visualisés dans Excel, sous forme de graphiques comparant les temps d'exécution selon la taille des instances.\nUne interface JavaFX (fournie), connectée via JNI, permet également de visualiser les segments et leurs points d'intersection.\nRéalisé en binôme, ce projet a également permis une initiation à Git et un approfondissement des connaissances acquises depuis le début de la Licence Informatique, avec un accent particulier sur la rigueur algorithmique, la gestion mémoire, la qualité du code et l'analyse expérimentale des performances.",
    links: [
      { label: "Lire", href: "#" },
      { label: "GitHub", href: "https://github.com/DorianPRJ7/Bentley-Ottmann-PS3" }
    ],
    img: "public/images/projects/bentley-ottmann.jpg"
  },
  {
    title: "IA ChessQuito",
    category: "Algorithmique & IA",
    tags: ["Python","MinMax α-β", "Heuristiques"],
    description: "IA reposant sur un algorithme MinMax avec élagage α-β pour les 3 variantes du ChessQuito (Reine, Reine-Pion, Reine-Roi) avec évaluation dynamique.",
    details: "Développement d'une Intelligence Artificielle en Python capable de jouer au ChessQuito, un jeu de stratégie inspiré des échecs et décliné en trois variantes : Reine-Dame, Reine-Pion et Reine-Roi.\nRéalisé dans le cadre du module Introduction à l'Intelligence Artificielle en Licence 2 Informatique à l'Université de Lorraine, ce projet visait à concevoir une IA capable d'analyser le plateau, d'évaluer les positions et de prendre des décisions optimales selon la variante jouée.\nL'IA repose sur un algorithme MinMax avec élagage alpha-bêta, combiné à une évaluation heuristique pondérée et dynamique intégrant la valeur, la position, la mobilité et la sécurité des pièces, ainsi que les notions de menace, de soutien et de contrôle du plateau.\nTrois modules distincts gèrent respectivement la phase de placement, la phase de jeu et l'évaluation contextuelle en fonction du mode sélectionné.\nAfin d'ajuster finement les pondérations heuristiques et la profondeur de recherche, plusieurs matchs IA vs IA ont été menés, permettant d'optimiser la réactivité et la stratégie globale du programme.\nProjet réalisé en trinôme, alliant rigueur algorithmique, analyse des heuristiques de jeu et application concrète des algorithmes étudiés en cours.\n",
    links: [
      { label: "Lire", href: "#" },
      { label: "GitHub", href: "https://github.com/DorianPRJ7/IA-ChessQuito" }
    ],
    img: "public/images/projects/chessquito.jpg"
  },
  {
    title: "Apprentissage supervisé par régression",
    category: "Algorithmique & IA",
    tags: ["Python", "Pandas", "Scikit-learn", "Régression", "Jupyter"],
    description: "Pipeline complet de data science sur un dataset public (data.gouv.fr). Nettoyage, exploration et prédiction du taux d'insertion professionnelle des diplômés de Master en France.",
    details: "Projet réalisé en Python dans le cadre du module Apprentissage Artificiel Supervisé en L3 Informatique à l'Université de Lorraine.\nÀ partir d'un dataset public (data.gouv.fr) de 19 603 observations et 35 variables sur l'insertion professionnelle des diplômés de Master en France, le projet suit un pipeline complet de data science.\nPhase 1 - nettoyage : suppression des colonnes non pertinentes, remplacement des valeurs manquantes par imputation contextuelle (groupement par discipline et année, puis médiane discipline, puis médiane globale), encodage one-hot de 6 variables catégorielles. Le dataset final atteint 161 features.\nPhase 2 - analyse exploratoire : statistiques descriptives sur le taux d'insertion (moyenne 89,82 %, écart-type 6,67 %), visualisations par domaine d'étude et par région, analyse de corrélations.\nPhase 3 - modélisation : prédiction du taux d'insertion par régression linéaire (baseline) et régression Ridge (régularisation), avec normalisation StandardScaler, séparation train/test et évaluation via MSE, MAE et R².\nRéalisé en binôme, ce projet a permis de mettre en pratique le traitement de données réelles et imparfaites, la visualisation et les bases du machine learning supervisé.",
    links: [
      { label: "Lire", href: "#" },
      { label: "GitHub", href: "https://github.com/DorianPRJ7/Projet_AAS" }
    ],
    img: "public/images/projects/aas.jpg"
  },

  // Bases De Données
  {
    title: "Gestion de location de véhicules - PL/SQL",
    category: "Bases de données",
    tags: ["Oracle", "PL/SQL", "SQL", "MCD/MLD", "Procédures stockées"],
    description: "Conception et implémentation d'un système de gestion de location de véhicules entièrement en base de données Oracle. Schéma normalisé, procédures stockées, facturation dynamique et gestion d'état.",
    details: "Projet réalisé en PL/SQL dans le cadre du module Conception et Manipulation de Bases de Données en L3 Informatique à l'Université de Lorraine.\nL'objectif était de concevoir un système complet de gestion de location de véhicules en implémentant toute la logique métier directement en base de données, sans couche applicative.\nLe schéma relationnel comprend 6 tables normalisées (Types, Formules, Modèles, Véhicules, Locations, Tarifs) avec contraintes d'intégrité référentielle, contraintes CHECK sur les valeurs numériques et identifiants uniques générés par séquences Oracle.\n6 procédures et fonctions principales ont été développées, l'ajout et mise à jour de véhicules, la liste des véhicules disponibles par type, calcul du chiffre d'affaires avec filtres optionnels, l'ouverture d'une location avec validation de disponibilité avec le calcul automatique de la date de retour, le retour de véhicule avec facturation dynamique (prix forfaitaire + surcharge kilométrique au-delà du contrat), et la recommandation de la formule la plus avantageuse selon la durée et le kilométrage prévus.\nChaque procédure intègre une gestion explicite des exceptions avec codes d'erreur distincts selon les cas.\nRéalisé en trinôme, ce projet a permis d'approfondir la modélisation relationnelle, la programmation procédurale en PL/SQL et la conception de systèmes transactionnels robustes.",
    links: [
      { label: "Lire", href: "#" },
      { label: "GitHub", href: "https://github.com/DorianPRJ7/projet-cmbd-L3" }
    ],
    img: ""
  },
  {
    title: "Gestion de location de véhicules - Triggers Oracle",
    category: "Bases de données",
    tags: ["Oracle", "PL/SQL", "Triggers", "SQL", "MCD/MLD"],
    description: "Extension avancée d'un système de location de véhicules Oracle. Automatisation complète du cycle de vie des locations par triggers, retraite automatique des véhicules et suivi du chiffre d'affaires en temps réel.",
    details: "Projet réalisé en PL/SQL dans le cadre du module optionnel Systèmes de Gestion de Bases de Données en L3 Informatique à l'Université de Lorraine, en extension du projet de gestion de location réalisé en CMBD.\nLà où le projet CMBD reposait sur des procédures appelées manuellement, ce projet délègue toute la logique métier à 4 triggers BEFORE, création automatique de la date de retour et récupération du tarif à l'insertion d'une location, calcul des surcharges kilométriques et mise à jour du chiffre d'affaires cumulé (CAV) au retour du véhicule, validation des règles d'annulation (uniquement si le véhicule n'a pas encore roulé) et intégrité référentielle à l'archivage.\nLe cycle de vie complet des véhicules est géré en base : disponible -> location -> retraite (déclenchée automatiquement au dépassement de 50 000 km). Les codes d'erreur Oracle personnalisés (-20001 à -20006) assurent une gestion explicite des violations de règles métier.\nLe projet inclut une suite de tests dédiée couvrant les cas limites et anomalies, ainsi qu'une documentation MCD en plusieurs formats.\nRéalisé en trinôme sur un schéma de 7 tables normalisées.",
    links: [
      { label: "Lire", href: "#" },
      { label: "GitHub", href: "https://github.com/DorianPRJ7/vehicle-rental-database-oracle" }
    ],
    img: ""
  }
];

export const PERSONNAL_PROJECTS = [
  // TODO projets à ajouter
  /*{
    title: "Tableau de bord étudiant (Web)",
    tags:[],
    description:"",
    links:[
      {label:"Lire", href:"#"},
      {label: "GitHub", icon: "icon-github", href: ""}
    ],
    img: ""
  },
  {
    title: "Tableau de bord étudiant (App Mobile)",
    tags:[],
    description:"",
    links:[
      {label:"Lire", href:"#"},
      {label: "GitHub", icon: "icon-github", href: ""}
    ],
    img: ""
  }*/
]
