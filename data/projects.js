export const UNIVERSITY_PROJECTS = [
  // Dev Web
  {
    title: "Application web de recettes de cocktails",
    category: "D&eacute;veloppement Web",
    tags: ["PHP", "HTML5", "CSS", "Sessions", "Cookies"],
    description: "Application web PHP de gestion de recettes de cocktails. Navigation par hi&eacute;rarchie d'ingr&eacute;dients, recherche avanc&eacute;e avec scoring, authentification et syst&eagrave;me de favoris persistants.",
    details: "Projet r&eacute;alis&eacute; en PHP dans le cadre du module Conception d'Applications Web en L3 Informatique &agrave; l'Universit&eacute; de Lorraine.\nL'application permet de naviguer dans un catalogue de 108 recettes de cocktails organis&eacute;es selon une taxonomie hi&eacute;rarchique d'ingr&eacute;dients (ex. Alcool → Alcool fort → Rhum → Rhum blanc), d'effectuer des recherches avanc&eacute;es avec une syntaxe d&eacute;di&eacute;e (+ingr&eacute;dient voulu, -ingr&eacute;dient exclu, guillemets pour les expressions multi-mots) et un syst&eagrave;me de score de pertinence exploitant les relations hi&eacute;rarchiques entre ingr&eacute;dients.\nL'application int&eagrave;gre une authentification compl&eagrave;te (inscription avec validation, hachage bcrypt, connexion, d&eacute;connexion, gestion de profil) et un syst&eagrave;me de favoris &agrave; double persistance, session PHP pour les utilisateurs anonymes, fichiers s&eacute;rialis&eacute;s pour les utilisateurs connect&eacute;s.\nLa persistance des donn&eacute;es utilisateurs est assur&eacute;e par fichiers PHP (pas de base SQL), avec une architecture page-based centr&eacute;e sur un routeur unique (index.php) et une s&eacute;paration claire entre utilitaires, templates et assets.\nR&eacute;alis&eacute; en trin&ocirc;me, ce projet a permis de mettre en pratique la conception d'une application web compl&eagrave;te en PHP, la gestion des sessions et de l'&eacute;tat utilisateur, ainsi que l'impl&eacute;mentation d'algorithmes de recherche et de filtrage.",
    links: [
      { label: "Lire", href: "#" },
      { label: "GitHub", href: "https://github.com/ashigi444/projetCocktails" }
    ],
    img: "public/images/projects/gestion_coktails.jpg"
  },
  {
    title: "Application Angular - Star Wars (TP)",
    category: "D&eacute;veloppement Web",
    tags: ["Angular", "TypeScript", "Routing", "Reactive Forms"],
    description: "Application web Angular de gestion d'&eacute;pisodes Star Wars. Navigation entre vues, formulaire r&eacute;actif avec pr&eacute;visualisation en temps r&eacute;el, directive personnalis&eacute;e et gestion d'&eacute;tat par service.",
    details: "Travail pratique r&eacute;alis&eacute; seul dans le cadre des modules D&eacute;veloppement d'Applications Mobile et Technologies du Web en L3 Informatique &agrave; l'Universit&eacute; de Lorraine.\nL'application permet de parcourir une liste d'&eacute;pisodes Star Wars, de consulter leur d&eacute;tail, de liker/unliker, de cr&eacute;er un nouvel &eacute;pisode et de s'inscrire &agrave; une newsletter.\nLes concepts Angular mis en pratique sont, une architecture par composants avec communication via @Input(), du routing dynamique avec param&eagrave;tres (:episodeId), de la navigation programmatique, un service inject&eacute; en singleton, des pipes natifs (date, number, titlecase), des directives structurelles modernes (@for, @if).\nDeux approches de formulaires ont &eacute;t&eacute; impl&eacute;ment&eacute;es, formulaire template-driven (newsletter) avec ngModel et validation HTML5, et formulaire r&eacute;actif (cr&eacute;ation d'&eacute;pisode) avec FormGroup, FormBuilder, abonnement &agrave; valueChanges pour une pr&eacute;visualisation en temps r&eacute;el et d&eacute;sactivation du bouton selon l'&eacute;tat de validation.\nUne directive d'attribut personnalis&eacute;e g&eagrave;re le surlignage au survol via ElementRef avec gestion des couleurs et fallback.\nProjet r&eacute;alis&eacute; avec Angular 21 et TypeScript en mode strict.",
    links: [
      { label: "Lire", href: "#" },
      { label: "GitHub", href: "https://github.com/DorianPRJ7/Star-Wars-Angular-Application" }
    ],
    img: "public/images/projects/starwars_app.jpg"
  },

  // Dev Logiciel
  {
    title: "Moteur de g&eacute;om&eacute;trie 2D distribu&eacute; - C++/Java",
    category: "D&eacute;veloppement Logiciel",
    tags: ["C++", "Java", "TCP/IP", "Sockets", "Design Patterns", "JavaFX"],
    description: "Application distribu&eacute;e C++/Java de gestion de formes g&eacute;om&eacute;triques 2D. Client C++ pour la logique m&eacute;tier, serveur Java multi-clients pour la visualisation, communication via sockets TCP/IP et protocole texte personnalis&eacute;.",
    details: "Projet r&eacute;alis&eacute; en C++ et Java dans le cadre du module Premiers Pas vers l'Ing&eacute;nierie du Logiciel en L3 Informatique &agrave; l'Universit&eacute; de Lorraine.\nL'application est d&eacute;coup&eacute;e en deux composants distincts, un client C++ g&eacute;rant la logique g&eacute;om&eacute;trique (segments, cercles, triangles, polygones, groupes composites) et les transformations (translation, homoth&eacute;tie, rotation via matrices 2×2), et un serveur Java multi-clients bas&eacute; sur JavaFX qui re&ccedil;oit les commandes de dessin via TCP/IP et les rend graphiquement.\nL'architecture repose sur trois design patterns, le pattern Visiteur d&eacute;couple les op&eacute;rations de dessin et de s&eacute;rialisation des classes de formes, la Cha&icirc;ne de responsabilit&eacute; g&eagrave;re la d&eacute;s&eacute;rialisation polymorphe depuis fichier, et le Singleton assure une initialisation unique de la couche r&eacute;seau avec abstraction cross-platform (Winsock / POSIX).\nLe projet inclut une suite de tests C++ couvrant vecteurs, matrices, formes et transformations, des tests JUnit pour le serveur Java, ainsi qu'une documentation g&eacute;n&eacute;r&eacute;e via Doxygen (C++) et Javadoc (Java).\nR&eacute;alis&eacute; en bin&ocirc;me, ce projet met l'accent sur la qualit&eacute; du code, la s&eacute;paration des responsabilit&eacute;s et l'application concr&eagrave;te des principes d'ing&eacute;nierie logicielle.",
    links: [
      { label: "Lire", href: "#" },
      { label: "GitHub", href: "https://github.com/DorianPRJ7/distributed-2d-geometry-engine" }
    ],
    img: "public/images/projects/geometry2D_engine.jpg"
  },
  {
    title: "UNO Multijoueur",
    category: "D&eacute;veloppement Logiciel",
    tags: ["Java", "JavaFX", "Sockets","JDBC"],
    description: "Client-serveur, sockets, DAO JDBC. Gestion compl&eagrave;te des r&eagrave;gles, parties, scores et comptes joueurs avec sauvegarde en base de donn&eacute;es.",
    details: "D&eacute;veloppement complet du jeu de cartes UNO en Java avec IntelliJ IDEA dans le cadre du projet de synth&eagrave;se du second semestre de Licence 2 Informatique &agrave; l'Universit&eacute; de Lorraine.\nL'application repose sur une architecture client-serveur en Java/JavaFX, avec une gestion des parties, joueurs, cartes et r&eagrave;gles via un mod&eagrave;le orient&eacute; objet clair et modulaire.\nLe serveur centralise la logique du jeu, les tours, les effets de cartes et la communication r&eacute;seau, tandis que le client JavaFX, con&ccedil;u selon le mod&eagrave;le MVC, propose une interface graphique intuitive pour jouer en multijoueur en ligne.\nLes scores, parties et comptes joueurs sont enregistr&eacute;s dans une base MySQL &agrave; l'aide de JDBC et d'une couche DAO.\nProjet r&eacute;alis&eacute; en trin&ocirc;me, centr&eacute; sur la mise en pratique des notions de POO, de r&eacute;seau et de bases de donn&eacute;es, ainsi que sur la qualit&eacute; du code (lisibilit&eacute;, extensibilit&eacute;, r&eacute;utilisabilit&eacute;) et la collaboration.",
    links: [
      { label: "Lire", href: "#" },
      { label: "GitHub", href: "https://github.com/DorianPRJ7/Jeu-du-Uno-PS4" }
    ],
    img: "public/images/projects/uno.jpg"
  },
  {
    title: "Jeu du Pendu",
    category: "D&eacute;veloppement Logiciel",
    tags: ["Java","JavaFX", "FXML", "MVC"],
    description: "Interface graphique fluide et interactive. Gestion des parties, scores et param&eagrave;tres de l'interface et des parties sans sauvegarde.",
    details: "D&eacute;veloppement d'un jeu du Pendu en Java avec interface graphique JavaFX avec Eclipse IDE 2023-12 sur Windows, r&eacute;alis&eacute; dans le cadre du module Interfaces Graphiques en Licence 2 Informatique &agrave; l'Universit&eacute; de Lorraine.\nL'objectif du projet &eacute;tait de concevoir une interface r&eacute;pondant simultan&eacute;ment aux besoins de plusieurs clients fictifs, chacun ayant ses propres contraintes fonctionnelles et esth&eacute;tiques.\nL'application a &eacute;t&eacute; d&eacute;velopp&eacute;e selon une architecture MVC (Mod&eagrave;le-Vue-Contr&ocirc;leur), avec des vues construites via FXML et SceneBuilder. Elle int&eagrave;gre plusieurs interfaces de jeu, un syst&eagrave;me de gestion des lettres, du score, des erreurs et de la fin de partie, ainsi qu'une navigation fluide et intuitive entre les &eacute;crans (menu, r&eagrave;gles, jeu, r&eacute;sultats).\nLe travail a &eacute;galement port&eacute; sur l'ergonomie, la coh&eacute;rence graphique, la r&eacute;utilisabilit&eacute; du code et la gestion des &eacute;v&eacute;nements utilisateurs (clavier, boutons, ...).\nLe projet a impliqu&eacute; une analyse d&eacute;taill&eacute;e des besoins de clients fictifs, la cr&eacute;ation de maquettes avec Draw.io, puis le d&eacute;veloppement complet de l'interface graphique &agrave; partir du code de jeu fourni en Java (sans interface).\nR&eacute;alis&eacute; en trin&ocirc;me, ce projet a permis de consolider la ma&icirc;trise de JavaFX et d'approfondir la conception d'interfaces centr&eacute;es utilisateur, tout en appliquant une d&eacute;marche d'ing&eacute;nierie logicielle compl&eagrave;te.",
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
    tags: ["C","Algorithmes", "Structures", "Gestion m&eacute;moire", "Scripts"],
    description: "Intersections de segments, gestion de la m&eacute;moire, listes doublement cha&icirc;n&eacute;es, ABR et comparaison des algorithmes Glouton et de Bentley-Ottmann.",
    details: "Projet r&eacute;alis&eacute; en C avec CLion dans le cadre du projet de synth&eagrave;se du premier semestre de Licence 2 Informatique &agrave; l'Universit&eacute; de Lorraine.\nL'objectif &eacute;tait d'impl&eacute;menter deux approches permettant de d&eacute;tecter les intersections de segments dans un plan 2D. Un algorithme glouton simple et l'algorithme de Bentley–Ottmann, plus optimis&eacute; gr&acirc;ce &agrave; la technique du balayage du plan.\nLe projet comprend la cr&eacute;ation compl&eagrave;te des structures de donn&eacute;es n&eacute;cessaires (listes doublement cha&icirc;n&eacute;es, arbres binaires de recherche, nombres rationnels, points, segments, ...), ainsi que la mise en place de tests unitaires en C pour valider chaque module et algorithme, avec visualisation de certains cas dans GeoGebra.\nLes performances des deux algorithmes et des structures associ&eacute;es ont d'abord &eacute;t&eacute; analys&eacute;es th&eacute;oriquement via leurs complexit&eacute;s en temps d'ex&eacute;cution, puis &eacute;valu&eacute;es exp&eacute;rimentalement &agrave; l'aide de scripts Bash g&eacute;n&eacute;rant des instances al&eacute;atoires.\nD'autres scripts ex&eacute;cutaient automatiquement les algorithmes sur chaque instance et enregistraient les r&eacute;sultats dans des fichiers d&eacute;di&eacute;s.\nLes r&eacute;sultats collect&eacute;s ont ensuite &eacute;t&eacute; trait&eacute;s et visualis&eacute;s dans Excel, sous forme de graphiques comparant les temps d'ex&eacute;cution selon la taille des instances.\nUne interface JavaFX (fournie), connect&eacute;e via JNI, permet &eacute;galement de visualiser les segments et leurs points d'intersection.\nR&eacute;alis&eacute; en bin&ocirc;me, ce projet a &eacute;galement permis une initiation &agrave; Git et un approfondissement des connaissances acquises depuis le d&eacute;but de la Licence Informatique, avec un accent particulier sur la rigueur algorithmique, la gestion m&eacute;moire, la qualit&eacute; du code et l'analyse exp&eacute;rimentale des performances.",
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
    description: "IA reposant sur un algorithme MinMax avec &eacute;lagage α-β pour les 3 variantes du ChessQuito (Reine, Reine-Pion, Reine-Roi) avec &eacute;valuation dynamique.",
    details: "D&eacute;veloppement d'une Intelligence Artificielle en Python capable de jouer au ChessQuito, un jeu de strat&eacute;gie inspir&eacute; des &eacute;checs et d&eacute;clin&eacute; en trois variantes : Reine-Dame, Reine-Pion et Reine-Roi.\nR&eacute;alis&eacute; dans le cadre du module Introduction &agrave; l'Intelligence Artificielle en Licence 2 Informatique &agrave; l'Universit&eacute; de Lorraine, ce projet visait &agrave; concevoir une IA capable d'analyser le plateau, d'&eacute;valuer les positions et de prendre des d&eacute;cisions optimales selon la variante jou&eacute;e.\nL'IA repose sur un algorithme MinMax avec &eacute;lagage alpha-b&ecirc;ta, combin&eacute; &agrave; une &eacute;valuation heuristique pond&eacute;r&eacute;e et dynamique int&eacute;grant la valeur, la position, la mobilit&eacute; et la s&eacute;curit&eacute; des pi&eagrave;ces, ainsi que les notions de menace, de soutien et de contr&ocirc;le du plateau.\nTrois modules distincts g&eagrave;rent respectivement la phase de placement, la phase de jeu et l'&eacute;valuation contextuelle en fonction du mode s&eacute;lectionn&eacute;.\nAfin d'ajuster finement les pond&eacute;rations heuristiques et la profondeur de recherche, plusieurs matchs IA vs IA ont &eacute;t&eacute; men&eacute;s, permettant d'optimiser la r&eacute;activit&eacute; et la strat&eacute;gie globale du programme.\nProjet r&eacute;alis&eacute; en trin&ocirc;me, alliant rigueur algorithmique, analyse des heuristiques de jeu et application concr&eagrave;te des algorithmes &eacute;tudi&eacute;s en cours.\n",
    links: [
      { label: "Lire", href: "#" },
      { label: "GitHub", href: "https://github.com/DorianPRJ7/IA-ChessQuito" }
    ],
    img: "public/images/projects/chessquito.jpg"
  },
  {
    title: "Apprentissage supervis&eacute; par r&eacute;gression",
    category: "Algorithmique & IA",
    tags: ["Python", "Pandas", "Scikit-learn", "R&eacute;gression", "Jupyter"],
    description: "Pipeline complet de data science sur un dataset public (data.gouv.fr). Nettoyage, exploration et pr&eacute;diction du taux d'insertion professionnelle des dipl&ocirc;m&eacute;s de Master en France.",
    details: "Projet r&eacute;alis&eacute; en Python dans le cadre du module Apprentissage Artificiel Supervis&eacute; en L3 Informatique &agrave; l'Universit&eacute; de Lorraine.\n&Agrave; partir d'un dataset public (data.gouv.fr) de 19 603 observations et 35 variables sur l'insertion professionnelle des dipl&ocirc;m&eacute;s de Master en France, le projet suit un pipeline complet de data science.\nPhase 1 - nettoyage : suppression des colonnes non pertinentes, remplacement des valeurs manquantes par imputation contextuelle (groupement par discipline et ann&eacute;e, puis m&eacute;diane discipline, puis m&eacute;diane globale), encodage one-hot de 6 variables cat&eacute;gorielles. Le dataset final atteint 161 features.\nPhase 2 - analyse exploratoire : statistiques descriptives sur le taux d'insertion (moyenne 89,82 %, &eacute;cart-type 6,67 %), visualisations par domaine d'&eacute;tude et par r&eacute;gion, analyse de corr&eacute;lations.\nPhase 3 - mod&eacute;lisation : pr&eacute;diction du taux d'insertion par r&eacute;gression lin&eacute;aire (baseline) et r&eacute;gression Ridge (r&eacute;gularisation), avec normalisation StandardScaler, s&eacute;paration train/test et &eacute;valuation via MSE, MAE et R².\nR&eacute;alis&eacute; en bin&ocirc;me, ce projet a permis de mettre en pratique le traitement de donn&eacute;es r&eacute;elles et imparfaites, la visualisation et les bases du machine learning supervis&eacute;.",
    links: [
      { label: "Lire", href: "#" },
      { label: "GitHub", href: "https://github.com/DorianPRJ7/Projet_AAS" }
    ],
    img: "public/images/projects/aas.jpg"
  },

  // Bases De Donn&eacute;es
  {
    title: "Gestion de location de v&eacute;hicules - PL/SQL",
    category: "Bases de donn&eacute;es",
    tags: ["Oracle", "PL/SQL", "SQL", "MCD/MLD", "Proc&eacute;dures stock&eacute;es"],
    description: "Conception et impl&eacute;mentation d'un syst&eagrave;me de gestion de location de v&eacute;hicules enti&eagrave;rement en base de donn&eacute;es Oracle. Sch&eacute;ma normalis&eacute;, proc&eacute;dures stock&eacute;es, facturation dynamique et gestion d'&eacute;tat.",
    details: "Projet r&eacute;alis&eacute; en PL/SQL dans le cadre du module Conception et Manipulation de Bases de Donn&eacute;es en L3 Informatique &agrave; l'Universit&eacute; de Lorraine.\nL'objectif &eacute;tait de concevoir un syst&eagrave;me complet de gestion de location de v&eacute;hicules en impl&eacute;mentant toute la logique m&eacute;tier directement en base de donn&eacute;es, sans couche applicative.\nLe sch&eacute;ma relationnel comprend 6 tables normalis&eacute;es (Types, Formules, Mod&eagrave;les, V&eacute;hicules, Locations, Tarifs) avec contraintes d'int&eacute;grit&eacute; r&eacute;f&eacute;rentielle, contraintes CHECK sur les valeurs num&eacute;riques et identifiants uniques g&eacute;n&eacute;r&eacute;s par s&eacute;quences Oracle.\n6 proc&eacute;dures et fonctions principales ont &eacute;t&eacute; d&eacute;velopp&eacute;es, l'ajout et mise &agrave; jour de v&eacute;hicules, la liste des v&eacute;hicules disponibles par type, calcul du chiffre d'affaires avec filtres optionnels, l'ouverture d'une location avec validation de disponibilit&eacute; avec le calcul automatique de la date de retour, le retour de v&eacute;hicule avec facturation dynamique (prix forfaitaire + surcharge kilom&eacute;trique au-del&agrave; du contrat), et la recommandation de la formule la plus avantageuse selon la dur&eacute;e et le kilom&eacute;trage pr&eacute;vus.\nChaque proc&eacute;dure int&eagrave;gre une gestion explicite des exceptions avec codes d'erreur distincts selon les cas.\nR&eacute;alis&eacute; en trin&ocirc;me, ce projet a permis d'approfondir la mod&eacute;lisation relationnelle, la programmation proc&eacute;durale en PL/SQL et la conception de syst&eagrave;mes transactionnels robustes.",
    links: [
      { label: "Lire", href: "#" },
      { label: "GitHub", href: "https://github.com/DorianPRJ7/projet-cmbd-L3" }
    ],
    img: ""
  },
  {
    title: "Gestion de location de v&eacute;hicules - Triggers Oracle",
    category: "Bases de donn&eacute;es",
    tags: ["Oracle", "PL/SQL", "Triggers", "SQL", "MCD/MLD"],
    description: "Extension avanc&eacute;e d'un syst&eagrave;me de location de v&eacute;hicules Oracle. Automatisation compl&eagrave;te du cycle de vie des locations par triggers, retraite automatique des v&eacute;hicules et suivi du chiffre d'affaires en temps r&eacute;el.",
    details: "Projet r&eacute;alis&eacute; en PL/SQL dans le cadre du module optionnel Syst&eagrave;mes de Gestion de Bases de Donn&eacute;es en L3 Informatique &agrave; l'Universit&eacute; de Lorraine, en extension du projet de gestion de location r&eacute;alis&eacute; en CMBD.\nL&agrave; o&ugrave; le projet CMBD reposait sur des proc&eacute;dures appel&eacute;es manuellement, ce projet d&eacute;l&eagrave;gue toute la logique m&eacute;tier &agrave; 4 triggers BEFORE, cr&eacute;ation automatique de la date de retour et r&eacute;cup&eacute;ration du tarif &agrave; l'insertion d'une location, calcul des surcharges kilom&eacute;triques et mise &agrave; jour du chiffre d'affaires cumul&eacute; (CAV) au retour du v&eacute;hicule, validation des r&eagrave;gles d'annulation (uniquement si le v&eacute;hicule n'a pas encore roul&eacute;) et int&eacute;grit&eacute; r&eacute;f&eacute;rentielle &agrave; l'archivage.\nLe cycle de vie complet des v&eacute;hicules est g&eacute;r&eacute; en base : disponible -> location -> retraite (d&eacute;clench&eacute;e automatiquement au d&eacute;passement de 50 000 km). Les codes d'erreur Oracle personnalis&eacute;s (-20001 &agrave; -20006) assurent une gestion explicite des violations de r&eagrave;gles m&eacute;tier.\nLe projet inclut une suite de tests d&eacute;di&eacute;e couvrant les cas limites et anomalies, ainsi qu'une documentation MCD en plusieurs formats.\nR&eacute;alis&eacute; en trin&ocirc;me sur un sch&eacute;ma de 7 tables normalis&eacute;es.",
    links: [
      { label: "Lire", href: "#" },
      { label: "GitHub", href: "https://github.com/DorianPRJ7/vehicle-rental-database-oracle" }
    ],
    img: ""
  }
];

export const PERSONNAL_PROJECTS = [
  {
    title: "Portfolio personnel",
    category: "D&eacute;veloppement Web",
    tags: ["HTML5", "CSS", "JavaScript", "Vanilla JS"],
    description: "Ce portfolio. Con&ccedil;u et d&eacute;velopp&eacute; from scratch en HTML/CSS/JS vanilla, sans framework. Architecture orient&eacute;e donn&eacute;es, animations canvas et CSS, th&eagrave;me clair/sombre.",
    details: "Projet personnel con&ccedil;u et d&eacute;velopp&eacute; enti&eagrave;rement en HTML, CSS et JavaScript vanilla, sans framework ni bundler.\nL'architecture repose sur une s&eacute;paration claire entre les donn&eacute;es (fichiers JS exportant les constantes de profil, projets, comp&eacute;tences, contact) et le rendu (main.js qui consomme ces donn&eacute;es et g&eacute;n&eagrave;re le DOM dynamiquement).\nLe portfolio int&eagrave;gre plusieurs animations comme un fond de particules interactif sur canvas, un effet de tilt 3D sur la carte hero, des boutons magn&eacute;tiques, et des animations d'apparition via IntersectionObserver.\nLe th&eagrave;me clair/sombre est g&eacute;r&eacute; via un attribut data-theme sur la racine HTML, persist&eacute; en localStorage, avec synchronisation de la meta theme-color pour les navigateurs mobiles.\nLes ic&ocirc;nes sont centralis&eacute;es sous forme de sprite SVG inline, r&eacute;f&eacute;renc&eacute;es par <use href=\"#id\"> pour &eacute;viter les r&eacute;p&eacute;titions et faciliter la maintenance.\nLa navigation mobile est g&eacute;r&eacute;e en JS pur (menus d&eacute;pliants, fermetures au clic ext&eacute;rieur, ...).",
    links: [
      { label: "Lire", href: "#" },
      { label: "GitHub", href: "https://github.com/DorianPRJ7/Portfolio" }
    ],
    img: ""
  }
]
