// Données projets : modifie ici facilement
export const PROJECTS = [
    {
        title: "UNO Multijoueur",
        subtitle: "Java · JavaFX · Sockets · JDBC",
        tags: ["Java", "JavaFX", "Sockets","JDBC"],
        description: "Client-serveur temps réel : parties, DAO JDBC, scores, reconnections.",
        details: "Développement complet du jeu de cartes UNO en Java avec IntelliJ IDEA dans le cadre du projet de synthèse du second semestre de Licence 2 Informatique à l'Université de Lorraine.\n" +
            "L’application repose sur une architecture client-serveur en Java/JavaFX, avec une gestion des parties, joueurs, cartes et règles via un modèle orienté objet clair et modulaire.\n" +
            "Le serveur centralise la logique du jeu, les tours, les effets de cartes et la communication réseau, tandis que le client JavaFX, conçu selon le modèle MVC, propose une interface graphique intuitive pour jouer en multijoueur en ligne.\n" +
            "Les scores, parties et comptes joueurs sont enregistrés dans une base MySQL à l’aide de JDBC et d’une couche DAO.\n" +
            "Projet réalisé en trinôme, centré sur la mise en pratique des notions de POO, de réseau et de bases de données, ainsi que sur la qualité du code (lisibilité, extensibilité, réutilisabilité) et la collaboration.",
        links: [
            { label: "Lire", href: "#" },
            { label: "Voir", href: "https://www.linkedin.com/in/pareja-dorian/details/projects/" }
        ],
        img: "resources/projects/uno.png"
    },
    {
        title: "Jeu du Pendu",
        subtitle: "JavaFX · FXML · MVC",
        tags: ["Java","JavaFX", "FXML", "MVC"],
        description: "Interface multi-clients, navigation fluide, gestion scores, parties, etc...",
        details: "Développement d’un jeu du Pendu en Java avec interface graphique JavaFX avec Eclipse IDE 2023-12 sur Windows, réalisé dans le cadre du module Interfaces Graphiques en Licence 2 Informatique à l'Université de Lorraine.\n" +
            "L’objectif du projet était de concevoir une interface répondant simultanément aux besoins de plusieurs clients fictifs, chacun ayant ses propres contraintes fonctionnelles et esthétiques.\n" +
            "L’application a été développée selon une architecture MVC (Modèle-Vue-Contrôleur), avec des vues construites via FXML et SceneBuilder. Elle intègre plusieurs interfaces de jeu, un système de gestion des lettres, du score, des erreurs et de la fin de partie, ainsi qu’une navigation fluide et intuitive entre les écrans (menu, règles, jeu, résultats).\n" +
            "Le travail a également porté sur l’ergonomie, la cohérence graphique, la réutilisabilité du code et la gestion des événements utilisateurs (clavier, boutons, ...).\n" +
            "Le projet a impliqué une analyse détaillée des besoins de clients fictifs, la création de maquettes avec Draw.io, puis le développement complet de l’interface graphique à partir du code de jeu fourni en Java (sans interface).\n" +
            "Réalisé en trinôme, ce projet a permis de consolider la maîtrise de JavaFX et d’approfondir la conception d’interfaces centrées utilisateur, tout en appliquant une démarche d’ingénierie logicielle complète.",
        links: [
            { label: "Lire", href: "#" },
            { label: "Voir", href: "https://www.linkedin.com/in/pareja-dorian/details/projects/" }
        ],
        img: "resources/projects/pendu.png"
    },
    {
        title: "IA ChessQuitto",
        subtitle: "Python · MinMax α-β · Heuristiques",
        tags: ["Python","MinMax α-β", "Heuristiques"],
        description: "IA pour 3 variantes (Reine-Dame, Reine-Pion, Reine-Roi) avec évaluation dynamique.",
        details: "Développement d’une Intelligence Artificielle en Python capable de jouer au ChessQuitto, un jeu de stratégie inspiré des échecs et décliné en trois variantes : Reine-Dame, Reine-Pion et Reine-Roi.\n" +
            "Réalisé dans le cadre du module Introduction à l’Intelligence Artificielle en Licence 2 Informatique à l'Université de Lorraine, ce projet visait à concevoir une IA capable d’analyser le plateau, d’évaluer les positions et de prendre des décisions optimales selon la variante jouée.\n" +
            "L’IA repose sur un algorithme MinMax avec élagage alpha-bêta, combiné à une évaluation heuristique pondérée et dynamique intégrant la valeur, la position, la mobilité et la sécurité des pièces, ainsi que les notions de menace, de soutien et de contrôle du plateau.\n" +
            "Trois modules distincts gèrent respectivement la phase de placement, la phase de jeu et l’évaluation contextuelle en fonction du mode sélectionné.\n" +
            "Afin d’ajuster finement les pondérations heuristiques et la profondeur de recherche, plusieurs matchs IA vs IA ont été menés, permettant d’optimiser la réactivité et la stratégie globale du programme.\n" +
            "Projet réalisé en trinôme, alliant rigueur algorithmique, analyse des heuristiques de jeu et application concrète des algorithmes étudiés en cours.\n",
        links: [
            { label: "Lire", href: "#" },
            { label: "Voir", href: "https://www.linkedin.com/in/pareja-dorian/details/projects/" }
        ],
        img: ""
    },
    {
        title: "Bentley–Ottmann",
        subtitle: "C · Structures · Balayage du plan",
        tags: ["C","Algorithmes", "Structures", "Gestion mémoire"],
        description: "Intersections de segments, listes doublement chaînées, ABR, bench.",
        details: "Projet réalisé en C avec CLion dans le cadre du projet de synthèse du premier semestre de Licence 2 Informatique à l'Université de Lorraine.\n" +
            "L’objectif était d’implémenter deux approches permettant de détecter les intersections de segments dans un plan 2D. Un algorithme glouton simple et l’algorithme de Bentley–Ottmann, plus optimisé grâce à la technique du balayage du plan.\n" +
            "Le projet comprend la création complète des structures de données nécessaires (listes doublement chaînées, arbres binaires de recherche, nombres rationnels, points, segments, ...), ainsi que la mise en place de tests unitaires en C pour valider chaque module et algorithme, avec visualisation de certains cas dans GeoGebra.\n" +
            "Les performances des deux algorithmes et des structures associées ont d’abord été analysées théoriquement via leurs complexités en temps d’exécution, puis évaluées expérimentalement à l’aide de scripts Bash générant des instances aléatoires.\n" +
            "D'autres scripts exécutaient automatiquement les algorithmes sur chaque instance et enregistraient les résultats dans des fichiers dédiés.\n" +
            "Les résultats collectés ont ensuite été traités et visualisés dans Excel, sous forme de graphiques comparant les temps d’exécution selon la taille des instances.\n" +
            "Une interface JavaFX (fournie), connectée via JNI, permet également de visualiser les segments et leurs points d’intersection.\n" +
            "Réalisé en binôme, ce projet a également permis une initiation à Git et un approfondissement des connaissances acquises depuis le début de la Licence Informatique, avec un accent particulier sur la rigueur algorithmique, la gestion mémoire, la qualité du code et l’analyse expérimentale des performances.",
        links: [
            { label: "Lire", href: "#" },
            { label: "Voir", href: "https://www.linkedin.com/in/pareja-dorian/details/projects/" }
        ],
        img: ""
    }
];
