// Auto-generated from data/i18n/fr/resources.json. Do not edit by hand.
// Run: node scripts/build-localized-data.js
(function (root) {
    "use strict";
    var catalog = {
  "version": 1,
  "templates": [
    {
      "id": "project-charter",
      "title": "Charte de projet",
      "phase": "Define",
      "minBelt": "white",
      "icon": "fa-file-signature",
      "estimatedMinutes": 30,
      "description": "Autorisez le projet en définissant le problème, l'objectif, la portée, l'équipe, les mesures et les jalons.",
      "fields": [
        {
          "key": "projectName",
          "label": "Nom du projet",
          "type": "text",
          "section": "Bases du projet",
          "required": true,
          "wide": true,
          "placeholder": "Réduire les variations de remplissage des lignes d'embouteillage"
        },
        {
          "key": "projectLead",
          "label": "Chef de projet",
          "type": "text",
          "placeholder": "Nom et niveau de ceinture"
        },
        {
          "key": "sponsor",
          "label": "Commanditaire exécutif",
          "type": "text",
          "placeholder": "Nom et rôle"
        },
        {
          "key": "startDate",
          "label": "Date de début",
          "type": "date"
        },
        {
          "key": "targetDate",
          "label": "Achèvement de l'objectif",
          "type": "date"
        },
        {
          "key": "problemStatement",
          "label": "Énoncé du problème",
          "type": "textarea",
          "section": "Analyse de rentabilisation",
          "required": true,
          "rows": 3,
          "wide": true,
          "help": "Indiquez ce qui ne va pas, où, quand et dans quelle mesure. Évitez les causes et les solutions.",
          "placeholder": "De janvier à mars, la ligne 2 a produit 4,2% de bouteilles sous-remplies..."
        },
        {
          "key": "businessCase",
          "label": "Analyse de rentabilisation",
          "type": "textarea",
          "section": "Analyse de rentabilisation",
          "required": true,
          "rows": 3,
          "wide": true,
          "placeholder": "Expliquez le client, le coût, la conformité ou l’impact stratégique."
        },
        {
          "key": "goalStatement",
          "label": "Énoncé d'objectif",
          "type": "textarea",
          "section": "Analyse de rentabilisation",
          "required": true,
          "rows": 2,
          "wide": true,
          "help": "Incluez une mesure, une référence, un objectif et une date limite.",
          "placeholder": "Réduisez la variation de remplissage de 3,8 ml à 1,5 ml d’ici le 30 juin."
        },
        {
          "key": "scopeIn",
          "label": "Dans le champ d'application",
          "type": "textarea",
          "section": "Portée",
          "rows": 3,
          "placeholder": "Remplisseur de la ligne 2, changements, méthode de l'opérateur et inspection du remplissage."
        },
        {
          "key": "scopeOut",
          "label": "Hors de portée",
          "type": "textarea",
          "section": "Portée",
          "rows": 3,
          "placeholder": "Refonte du fournisseur de bouteilles, ligne 1 et manutention de l'entrepôt."
        },
        {
          "key": "successMetrics",
          "label": "Indicateurs de réussite",
          "type": "table",
          "section": "Mesures",
          "required": true,
          "minRows": 3,
          "columns": [
            {
              "key": "metric",
              "label": "Métrique",
              "type": "text",
              "placeholder": "Écart type du volume de remplissage"
            },
            {
              "key": "baseline",
              "label": "Référence",
              "type": "text",
              "placeholder": "3,8 ml"
            },
            {
              "key": "target",
              "label": "Cible",
              "type": "text",
              "placeholder": "1,5 ml"
            },
            {
              "key": "dataSource",
              "label": "Source de données",
              "type": "text",
              "placeholder": "Jauge de remplissage"
            }
          ]
        },
        {
          "key": "team",
          "label": "Équipe de base",
          "type": "table",
          "section": "Équipe et jalons",
          "required": true,
          "minRows": 3,
          "columns": [
            {
              "key": "name",
              "label": "Nom",
              "type": "text"
            },
            {
              "key": "role",
              "label": "Rôle",
              "type": "text",
              "placeholder": "Sponsor, responsable, opérateur"
            },
            {
              "key": "responsibility",
              "label": "Responsabilité",
              "type": "text"
            }
          ]
        },
        {
          "key": "milestones",
          "label": "Jalons",
          "type": "table",
          "section": "Équipe et jalons",
          "required": true,
          "minRows": 3,
          "columns": [
            {
              "key": "milestone",
              "label": "Jalon",
              "type": "text",
              "placeholder": "Définir la porte"
            },
            {
              "key": "date",
              "label": "Date",
              "type": "date"
            },
            {
              "key": "status",
              "label": "Statut",
              "type": "select",
              "options": [
                "Prévu",
                "En cours",
                "Complet",
                "À risque"
              ]
            }
          ]
        }
      ],
      "example": {
        "projectName": "Réduire les variations de remplissage des lignes d'embouteillage",
        "projectLead": "Jordan Lee - Ceinture verte",
        "sponsor": "Priya Shah - Directrice de l'usine",
        "startDate": "2026-01-12",
        "targetDate": "2026-06-30",
        "problemStatement": "De janvier à mars, la ligne 2 a produit 4,2 % de bouteilles sous-remplies et 2,1 % de bouteilles surremplies, entraînant des retouches et des plaintes de clients.",
        "businessCase": "Les variations de remplissage entraînent une perte annuelle estimée à 84 000 $ en cadeaux de produits, en retouches et en commandes de remplacement accélérées.",
        "goalStatement": "Réduisez l’écart type du volume de remplissage de 3,8 ml à 1,5 ml et éliminez les sous-remplissages inférieurs à 499,5 ml d’ici le 30 juin 2026.",
        "scopeIn": "Remplisseur de la ligne 2, méthode de changement, vérifications de configuration de l'opérateur, jauge de remplissage et transfert de quart de travail.",
        "scopeOut": "Refonte du fournisseur de bouteilles, ligne 1, gestion de l'entrepôt et modifications des emballages clients.",
        "successMetrics": [
          {
            "metric": "Écart type du volume de remplissage",
            "baseline": "3,8 ml",
            "target": "1,5 ml",
            "dataSource": "Jauge de remplissage"
          },
          {
            "metric": "Taux de sous-remplissage",
            "baseline": "4.2%",
            "target": "0.5%",
            "dataSource": "Contrôle qualité"
          },
          {
            "metric": "Coût annuel du cadeau",
            "baseline": "$84,000",
            "target": "$20,000",
            "dataSource": "Rapport financier"
          }
        ],
        "team": [
          {
            "name": "Jordan Lee",
            "role": "Chef de projet",
            "responsibility": "Exécution du DMAIC et animation d’équipe"
          },
          {
            "name": "Priya Shah",
            "role": "Parrainer",
            "responsibility": "Ressources et approbations de portes"
          },
          {
            "name": "Mateo Ruiz",
            "role": "Opérateur de ligne",
            "responsibility": "Connaissance des processus et collecte de données"
          },
          {
            "name": "Avery Chen",
            "role": "Entretien",
            "responsibility": "Calibrage et réparations de remplissage"
          }
        ],
        "milestones": [
          {
            "milestone": "Définir la porte",
            "date": "2026-01-26",
            "status": "Complet"
          },
          {
            "milestone": "Porte de mesure",
            "date": "2026-03-06",
            "status": "En cours"
          },
          {
            "milestone": "Améliorer le pilote",
            "date": "2026-05-15",
            "status": "Prévu"
          },
          {
            "milestone": "Transfert de contrôle",
            "date": "2026-06-30",
            "status": "Prévu"
          }
        ]
      }
    },
    {
      "id": "sipoc",
      "title": "SIPOC",
      "phase": "Define",
      "minBelt": "white",
      "icon": "fa-diagram-project",
      "estimatedMinutes": 25,
      "description": "Cartographiez les fournisseurs, les intrants, les étapes du processus, les extrants et les clients à un niveau élevé.",
      "fields": [
        {
          "key": "processName",
          "label": "Nom du processus",
          "type": "text",
          "section": "Limites du processus",
          "required": true,
          "wide": true,
          "placeholder": "Processus de remplissage et de bouchage de la ligne d'embouteillage 2"
        },
        {
          "key": "owner",
          "label": "Propriétaire du processus",
          "type": "text",
          "section": "Limites du processus"
        },
        {
          "key": "startPoint",
          "label": "Commence quand",
          "type": "text",
          "section": "Limites du processus",
          "placeholder": "Les bouteilles vides entrent dans le remplisseur"
        },
        {
          "key": "endPoint",
          "label": "Se termine quand",
          "type": "text",
          "section": "Limites du processus",
          "placeholder": "Les bouteilles bouchées entrent dans l'étiqueteuse"
        },
        {
          "key": "sipocRows",
          "label": "Carte SIPOC",
          "type": "table",
          "section": "Carte SIPOC",
          "required": true,
          "minRows": 5,
          "help": "Les lignes montrent le flux principal. Un fournisseur peut alimenter plusieurs entrées et une étape peut produire plusieurs sorties.",
          "columns": [
            {
              "key": "supplier",
              "label": "Fournisseur",
              "type": "text",
              "placeholder": "Fournisseur de bouteilles"
            },
            {
              "key": "input",
              "label": "Saisir",
              "type": "text",
              "placeholder": "Flacon propre de 500 ml"
            },
            {
              "key": "step",
              "label": "Étape du processus",
              "type": "text",
              "placeholder": "Remplir la bouteille"
            },
            {
              "key": "output",
              "label": "Sortir",
              "type": "text",
              "placeholder": "Bouteille remplie"
            },
            {
              "key": "customer",
              "label": "Client",
              "type": "text",
              "placeholder": "Gare du Cap"
            }
          ]
        },
        {
          "key": "notes",
          "label": "Notes limites et hypothèses",
          "type": "textarea",
          "section": "Carte SIPOC",
          "rows": 3,
          "wide": true
        }
      ],
      "example": {
        "processName": "Processus de remplissage et de bouchage de la ligne d'embouteillage 2",
        "owner": "Priya Shah",
        "startPoint": "Les bouteilles vides entrent dans le remplisseur",
        "endPoint": "Les bouteilles bouchées entrent dans l'étiqueteuse",
        "sipocRows": [
          {
            "supplier": "Fournisseur de bouteilles",
            "input": "Flacon propre de 500 ml",
            "step": "Load bottles",
            "output": "Flux de bouteilles aligné",
            "customer": "Remplisseur"
          },
          {
            "supplier": "Réservoir de produit",
            "input": "Boisson finie",
            "step": "Fill bottle",
            "output": "Bouteille remplie",
            "customer": "Gare du Cap"
          },
          {
            "supplier": "Fournisseur de casquettes",
            "input": "Casquette et doublure",
            "step": "Place and torque cap",
            "output": "Bouteille bouchée",
            "customer": "Étiqueteuse"
          },
          {
            "supplier": "Entretien",
            "input": "Remplisseur calibré",
            "step": "Verify fill weight",
            "output": "Remplir le dossier d'inspection",
            "customer": "QA"
          },
          {
            "supplier": "QA",
            "input": "Norme d'échantillonnage",
            "step": "Release lot",
            "output": "Lot de production lancé",
            "customer": "Entrepôt"
          }
        ],
        "notes": "Le champ d'application commence après le déchargement des bouteilles et se termine avant l'étiquetage. Les changements de réservoirs de produits sont inclus ; la conception des bouteilles du fournisseur est exclue."
      }
    },
    {
      "id": "voc-sheet",
      "title": "Feuille de COV",
      "phase": "Define",
      "minBelt": "yellow",
      "icon": "fa-comments",
      "estimatedMinutes": 30,
      "description": "Capturez les voix, les besoins, les sources et les priorités des clients avant de les traduire en CTQ.",
      "fields": [
        {
          "key": "projectName",
          "label": "Nom du projet",
          "type": "text",
          "section": "Portée de la recherche",
          "required": true,
          "wide": true
        },
        {
          "key": "customerSegment",
          "label": "Segment de clientèle",
          "type": "text",
          "section": "Portée de la recherche",
          "placeholder": "Clients de l'embouteillage au détail"
        },
        {
          "key": "method",
          "label": "Méthode de collecte",
          "type": "select",
          "section": "Portée de la recherche",
          "options": [
            "Entretiens",
            "Groupe de discussion",
            "Enquête",
            "Plaintes",
            "Écoute sociale",
            "Observation",
            "Mixte"
          ]
        },
        {
          "key": "sampleSize",
          "label": "Personnes ou dossiers examinés",
          "type": "number",
          "section": "Portée de la recherche",
          "min": 1
        },
        {
          "key": "period",
          "label": "Période de collecte",
          "type": "text",
          "section": "Portée de la recherche",
          "placeholder": "Janvier-mars 2026"
        },
        {
          "key": "voices",
          "label": "Voix des clients",
          "type": "table",
          "section": "Voix du client",
          "required": true,
          "minRows": 4,
          "columns": [
            {
              "key": "customer",
              "label": "Client",
              "type": "text",
              "placeholder": "Acheteur au détail"
            },
            {
              "key": "verbatim",
              "label": "Verbatim ou observation",
              "type": "text"
            },
            {
              "key": "need",
              "label": "Besoin sous-jacent",
              "type": "text"
            },
            {
              "key": "source",
              "label": "Source",
              "type": "text",
              "placeholder": "Entretien, plainte"
            },
            {
              "key": "priority",
              "label": "Priorité",
              "type": "select",
              "options": [
                "Haut",
                "Moyen",
                "Faible"
              ]
            }
          ]
        },
        {
          "key": "themes",
          "label": "Thèmes et implications",
          "type": "textarea",
          "section": "Synthèse",
          "rows": 4,
          "wide": true
        }
      ],
      "example": {
        "projectName": "Réduire les variations de remplissage des lignes d'embouteillage",
        "customerSegment": "Clients de l'embouteillage au détail",
        "method": "Mixte",
        "sampleSize": 42,
        "period": "Janvier-mars 2026",
        "voices": [
          {
            "customer": "Acheteur au détail",
            "verbatim": "Certaines caisses semblent courtes et les clients se plaignent en rayon.",
            "need": "Volume de remplissage constant dans chaque bouteille",
            "source": "Interview",
            "priority": "Haut"
          },
          {
            "customer": "Distributeur",
            "verbatim": "Nous recevons davantage de crédits de remplacement pour les sous-remplissages.",
            "need": "Quantité et qualité de caisses fiables",
            "source": "Complaint log",
            "priority": "Haut"
          },
          {
            "customer": "Opérateur de ligne",
            "verbatim": "La charge dérive après les changements et nous l'ajustons au toucher.",
            "need": "Configuration de changement stable",
            "source": "Observation",
            "priority": "Haut"
          },
          {
            "customer": "Auditeur qualité",
            "verbatim": "Les enregistrements de remplissage sont complets mais l'échantillonnage est incohérent.",
            "need": "Inspection traçable et cohérente",
            "source": "Audit",
            "priority": "Moyen"
          }
        ],
        "themes": "Les clients se soucient de la cohérence d’une bouteille à l’autre et de la fiabilité des caisses. Les opérateurs ont besoin d’une norme de changement reproductible. Les données d'inspection existent mais ne sont pas utilisées assez rapidement pour détecter les dérives."
      }
    },
    {
      "id": "ctq-tree",
      "title": "Arbre CTQ",
      "phase": "Define",
      "minBelt": "green",
      "icon": "fa-sitemap",
      "estimatedMinutes": 30,
      "description": "Traduisez les besoins des clients en facteurs déterminants, en exigences essentielles à la qualité et en spécifications mesurables.",
      "fields": [
        {
          "key": "projectName",
          "label": "Nom du projet",
          "type": "text",
          "section": "Besoin du client",
          "required": true,
          "wide": true
        },
        {
          "key": "customer",
          "label": "Client principal",
          "type": "text",
          "section": "Besoin du client",
          "required": true
        },
        {
          "key": "need",
          "label": "Besoin du client",
          "type": "textarea",
          "section": "Besoin du client",
          "required": true,
          "rows": 2,
          "wide": true,
          "placeholder": "J'ai besoin que chaque bouteille contienne la quantité indiquée."
        },
        {
          "key": "tree",
          "label": "Flux CTQ",
          "type": "table",
          "section": "Flux CTQ",
          "required": true,
          "minRows": 4,
          "columns": [
            {
              "key": "need",
              "label": "Besoin",
              "type": "text"
            },
            {
              "key": "driver",
              "label": "Conducteur",
              "type": "text"
            },
            {
              "key": "ctq",
              "label": "CTQ",
              "type": "text"
            },
            {
              "key": "measure",
              "label": "Measure",
              "type": "text"
            },
            {
              "key": "spec",
              "label": "Spécification",
              "type": "text"
            }
          ]
        },
        {
          "key": "validation",
          "label": "Validation avec le client",
          "type": "textarea",
          "section": "Validation",
          "rows": 3,
          "wide": true
        }
      ],
      "example": {
        "projectName": "Réduire les variations de remplissage des lignes d'embouteillage",
        "customer": "Client d'embouteillage au détail",
        "need": "J'ai besoin que chaque bouteille contienne la quantité indiquée et arrive dans un étui propre et en bon état.",
        "tree": [
          {
            "need": "Montant correct",
            "driver": "Remplissage précis",
            "ctq": "Volume de remplissage dans les limites de tolérance",
            "measure": "Volume de remplissage en ml",
            "spec": "499,5-500,7 ml"
          },
          {
            "need": "Montant correct",
            "driver": "Charge stable",
            "ctq": "Faible variation de remplissage",
            "measure": "Écart type",
            "spec": "<= 1,5 ml"
          },
          {
            "need": "Aucune fuite",
            "driver": "Intégrité du capuchon",
            "ctq": "Couple de serrage dans la plage",
            "measure": "Couple en N cm",
            "spec": "18-24 Ncm"
          },
          {
            "need": "Cas propre",
            "driver": "Aucun déversement",
            "ctq": "Aucun résidu de produit",
            "measure": "Défauts visuels par cas",
            "spec": "0 défaut"
          }
        ],
        "validation": "Confirmé dans la revue trimestrielle des clients. Le client a classé la cohérence du remplissage en premier et la propreté des caisses en deuxième position."
      }
    },
    {
      "id": "data-collection-plan",
      "title": "Plan de collecte de données",
      "phase": "Measure",
      "minBelt": "yellow",
      "icon": "fa-clipboard-list",
      "estimatedMinutes": 35,
      "description": "Définissez ce qu'il faut mesurer, comment le mesurer, qui le collecte et comment la qualité des mesures sera protégée.",
      "fields": [
        {
          "key": "projectName",
          "label": "Nom du projet",
          "type": "text",
          "section": "Propriété du régime",
          "required": true,
          "wide": true
        },
        {
          "key": "owner",
          "label": "Propriétaire des données",
          "type": "text",
          "section": "Propriété du régime"
        },
        {
          "key": "startDate",
          "label": "Début de la collecte",
          "type": "date",
          "section": "Propriété du régime"
        },
        {
          "key": "endDate",
          "label": "Fin de la collecte",
          "type": "date",
          "section": "Propriété du régime"
        },
        {
          "key": "measures",
          "label": "Mesures",
          "type": "table",
          "section": "Mesures et méthodes",
          "required": true,
          "minRows": 4,
          "columns": [
            {
              "key": "measure",
              "label": "Measure",
              "type": "text"
            },
            {
              "key": "definition",
              "label": "Définition opérationnelle",
              "type": "text"
            },
            {
              "key": "type",
              "label": "Type de données",
              "type": "select",
              "options": [
                "Continu",
                "Attribut",
                "Ordinal"
              ]
            },
            {
              "key": "method",
              "label": "Méthode de collecte",
              "type": "text"
            },
            {
              "key": "frequency",
              "label": "Fréquence",
              "type": "text"
            },
            {
              "key": "sampleSize",
              "label": "Taille de l'échantillon",
              "type": "text"
            },
            {
              "key": "owner",
              "label": "Collectionneur",
              "type": "text"
            }
          ]
        },
        {
          "key": "integrity",
          "label": "Vérification de l’intégrité des données et du système de mesure",
          "type": "textarea",
          "section": "Contrôles de qualité",
          "rows": 3,
          "wide": true
        },
        {
          "key": "risks",
          "label": "Risques et imprévus en matière de recouvrement",
          "type": "textarea",
          "section": "Contrôles de qualité",
          "rows": 3,
          "wide": true
        }
      ],
      "example": {
        "projectName": "Réduire les variations de remplissage des lignes d'embouteillage",
        "owner": "Jordan Lee",
        "startDate": "2026-01-19",
        "endDate": "2026-02-27",
        "measures": [
          {
            "measure": "Volume de remplissage",
            "definition": "Volume net de produit mesuré par la jauge de remplissage calibrée en sortie de remplisseuse",
            "type": "Continuous",
            "method": "Exportation automatisée des jauges",
            "frequency": "Toutes les 15 minutes",
            "sampleSize": "20 bouteilles consécutives par équipe",
            "owner": "Opérateur de ligne"
          },
          {
            "measure": "Taux de sous-remplissage",
            "definition": "Flacons de moins de 499,5 ml divisés par flacons inspectés",
            "type": "Attribute",
            "method": "Échantillonnage d'assurance qualité",
            "frequency": "Horaire",
            "sampleSize": "12 bouteilles",
            "owner": "Technicien assurance qualité"
          },
          {
            "measure": "Durée de basculement",
            "definition": "Minutes entre la dernière bonne bouteille et la première bonne bouteille après le changement",
            "type": "Continuous",
            "method": "Journal de quart de travail",
            "frequency": "Chaque changement",
            "sampleSize": "Tous les changements",
            "owner": "Chef de quart"
          },
          {
            "measure": "Nombre d'ajustements de l'opérateur",
            "definition": "Nombre d'ajustements de remplissage effectués au cours d'un quart de travail",
            "type": "Attribute",
            "method": "Fiche d'observation",
            "frequency": "Chaque quart de travail",
            "sampleSize": "Tous les quarts de travail",
            "owner": "Membre de l'équipe"
          }
        ],
        "integrity": "Vérifiez la jauge de remplissage par rapport à un poids de contrôle certifié de 500 ml au début de chaque quart de travail. Deux observateurs collectent la première semaine en parallèle. Gelez l’enregistrement d’étalonnage de la jauge pour l’étude.",
        "risks": "La jauge peut dériver au cours de l'étude. La maintenance vérifiera l’étalonnage chaque semaine. Si le technicien QA est absent, le responsable de l'équipe utilise le kit d'échantillonnage de secours."
      }
    },
    {
      "id": "fishbone",
      "title": "Diagramme en arête de poisson",
      "phase": "Analyze",
      "minBelt": "yellow",
      "icon": "fa-fish",
      "estimatedMinutes": 30,
      "description": "Réfléchissez et organisez les causes potentielles dans les 6 millions de catégories avant de les tester avec des données.",
      "fields": [
        {
          "key": "problem",
          "label": "Énoncé de l'effet ou du problème",
          "type": "textarea",
          "section": "Problème",
          "required": true,
          "rows": 2,
          "wide": true,
          "placeholder": "Le volume de remplissage varie au-delà des spécifications de 499,5 à 500,7 ml."
        },
        {
          "key": "team",
          "label": "Équipe de brainstorming",
          "type": "text",
          "section": "Problème",
          "placeholder": "Opérateurs, maintenance, QA, superviseur"
        },
        {
          "key": "sessionDate",
          "label": "Date de la séance",
          "type": "date",
          "section": "Problème"
        },
        {
          "key": "causes",
          "label": "Causes des candidats",
          "type": "table",
          "section": "6 millions de causes",
          "required": true,
          "minRows": 8,
          "columns": [
            {
              "key": "category",
              "label": "Catégorie",
              "type": "select",
              "options": [
                "Homme",
                "Machine",
                "Matériel",
                "Méthode",
                "Mesures",
                "Mère Nature"
              ]
            },
            {
              "key": "cause",
              "label": "Cause potentielle",
              "type": "text"
            },
            {
              "key": "evidence",
              "label": "Preuve ou question",
              "type": "text"
            },
            {
              "key": "priority",
              "label": "Priorité",
              "type": "select",
              "options": [
                "Haut",
                "Moyen",
                "Faible"
              ]
            }
          ]
        },
        {
          "key": "rootCauses",
          "label": "Causes sélectionnées pour vérification",
          "type": "textarea",
          "section": "Plan de vérification",
          "rows": 3,
          "wide": true
        }
      ],
      "example": {
        "problem": "Le volume de remplissage varie au-delà de la spécification de 499,5 à 500,7 ml, créant des sous-remplissages et des pertes de produit.",
        "team": "Opérateurs, maintenance, QA, superviseur",
        "sessionDate": "2026-02-12",
        "causes": [
          {
            "category": "Homme",
            "cause": "Les opérateurs ajustent le remplissage au toucher après le changement",
            "evidence": "Aucune méthode d'ajustement standard n'existe",
            "priority": "Haut"
          },
          {
            "category": "Machine",
            "cause": "Usure du robinet de remplissage",
            "evidence": "La valve 4 a été remplacée deux fois l'année dernière",
            "priority": "Haut"
          },
          {
            "category": "Matériel",
            "cause": "La hauteur de la bouteille varie selon le lot du fournisseur",
            "evidence": "L'inspection à l'arrivée montre une plage de 0,6 mm",
            "priority": "Moyen"
          },
          {
            "category": "Méthode",
            "cause": "Le temps de purge du changement n'est pas standardisé",
            "evidence": "Temps de purge observés de 4 à 11 minutes",
            "priority": "Haut"
          },
          {
            "category": "Mesures",
            "cause": "La jauge de remplissage n'est pas vérifiée à chaque quart de travail",
            "evidence": "Le journal d'étalonnage présente des lacunes",
            "priority": "Moyen"
          },
          {
            "category": "Mère Nature",
            "cause": "La température du produit change la viscosité",
            "evidence": "Les courses de l'après-midi montrent plus de variation",
            "priority": "Moyen"
          }
        ],
        "rootCauses": "Vérifiez le temps de purge du changement, la méthode de réglage de l'opérateur, l'état de la vanne de remplissage et la température du produit à l'aide des données de la ligne. Ne sélectionnez pas de cause première tant que les données n'ont pas été examinées."
      }
    },
    {
      "id": "five-whys",
      "title": "5 pourquoi",
      "phase": "Analyze",
      "minBelt": "white",
      "icon": "fa-circle-question",
      "estimatedMinutes": 20,
      "description": "Passez d'un problème spécifique à une cause fondamentale vérifiée et à une contre-mesure.",
      "fields": [
        {
          "key": "problem",
          "label": "Énoncé du problème",
          "type": "textarea",
          "section": "Problème",
          "required": true,
          "rows": 2,
          "wide": true
        },
        {
          "key": "containment",
          "label": "Action de confinement",
          "type": "textarea",
          "section": "Problème",
          "rows": 2,
          "wide": true
        },
        {
          "key": "why1",
          "label": "Pourquoi 1",
          "type": "textarea",
          "section": "Pourquoi la chaîne",
          "rows": 2,
          "wide": true
        },
        {
          "key": "why2",
          "label": "Pourquoi 2",
          "type": "textarea",
          "section": "Pourquoi la chaîne",
          "rows": 2,
          "wide": true
        },
        {
          "key": "why3",
          "label": "Pourquoi 3",
          "type": "textarea",
          "section": "Pourquoi la chaîne",
          "rows": 2,
          "wide": true
        },
        {
          "key": "why4",
          "label": "Pourquoi 4",
          "type": "textarea",
          "section": "Pourquoi la chaîne",
          "rows": 2,
          "wide": true
        },
        {
          "key": "why5",
          "label": "Pourquoi 5",
          "type": "textarea",
          "section": "Pourquoi la chaîne",
          "rows": 2,
          "wide": true
        },
        {
          "key": "rootCause",
          "label": "Cause première vérifiée",
          "type": "textarea",
          "section": "Action",
          "required": true,
          "rows": 3,
          "wide": true,
          "help": "Confirmez la cause avec des preuves, pas seulement un consensus de groupe."
        },
        {
          "key": "countermeasure",
          "label": "Contre-mesure",
          "type": "textarea",
          "section": "Action",
          "required": true,
          "rows": 3,
          "wide": true
        },
        {
          "key": "owner",
          "label": "Propriétaire de l'action",
          "type": "text",
          "section": "Action"
        },
        {
          "key": "dueDate",
          "label": "Date d'échéance",
          "type": "date",
          "section": "Action"
        },
        {
          "key": "verification",
          "label": "Vérification",
          "type": "textarea",
          "section": "Action",
          "rows": 2,
          "wide": true
        }
      ],
      "example": {
        "problem": "La ligne 2 a produit 4,2 % de bouteilles sous-remplies au cours de la première équipe de janvier.",
        "containment": "Tous les lots suspects ont été mis en quarantaine et réinspectés. Le remplissage a été arrêté pendant que l'équipe examinait la configuration.",
        "why1": "Le produit de remplissage ne délivrait pas le volume cible au début de l'analyse.",
        "why2": "La charge n'a pas été purgée assez longtemps après le changement de produit.",
        "why3": "La norme de changement ne précise pas de temps de purge.",
        "why4": "La norme a été rédigée avant l'introduction de la nouvelle formulation du produit.",
        "why5": "Le processus de contrôle des modifications n'exigeait pas que la norme de configuration des charges soit révisée lorsque la viscosité changeait.",
        "rootCause": "La norme de changement n'a pas été mise à jour après la modification de la formulation du produit, ce qui a entraîné des temps de purge incohérents.",
        "countermeasure": "Ajoutez des temps de purge spécifiques au produit et une vérification des bouteilles à la norme de changement.",
        "owner": "Mateo Ruiz",
        "dueDate": "2026-03-20",
        "verification": "Auditez les 10 prochains changements et confirmez que la première bouteille atteint l’objectif de remplissage avant la sortie de la production."
      }
    },
    {
      "id": "pareto",
      "title": "Analyse Pareto",
      "phase": "Analyze",
      "minBelt": "yellow",
      "icon": "fa-chart-column",
      "estimatedMinutes": 25,
      "description": "Classez les catégories de défauts ou de problèmes et séparez les quelques éléments essentiels des nombreux éléments utiles.",
      "fields": [
        {
          "key": "problem",
          "label": "Problème en cours d'analyse",
          "type": "text",
          "section": "Source de données",
          "required": true,
          "wide": true,
          "placeholder": "Défauts sur les lignes d'embouteillage, janvier-mars 2026"
        },
        {
          "key": "dataSource",
          "label": "Source de données",
          "type": "text",
          "section": "Source de données",
          "placeholder": "Journal des défauts d'assurance qualité"
        },
        {
          "key": "period",
          "label": "Période",
          "type": "text",
          "section": "Source de données",
          "placeholder": "Janvier-mars 2026"
        },
        {
          "key": "counts",
          "label": "Nombre de catégories",
          "type": "table",
          "section": "Nombre de catégories",
          "required": true,
          "minRows": 6,
          "sortBy": "compter",
          "sortLabel": "Trier par nombre",
          "help": "Entrez les décomptes, puis triez par ordre décroissant. La part et le pourcentage cumulé sont calculés automatiquement.",
          "columns": [
            {
              "key": "category",
              "label": "Catégorie",
              "type": "text",
              "placeholder": "Sous-remplissage"
            },
            {
              "key": "count",
              "label": "Compter",
              "type": "number",
              "min": 0,
              "step": 1
            },
            {
              "key": "share",
              "label": "Partager",
              "compute": {
                "op": "pourcentage du total",
                "field": "compter"
              }
            },
            {
              "key": "cumulative",
              "label": "Cumulatif",
              "compute": {
                "op": "Pourcentage cumulatif",
                "field": "compter"
              }
            }
          ]
        },
        {
          "key": "conclusion",
          "label": "Conclusion et orientation",
          "type": "textarea",
          "section": "Conclusion",
          "rows": 3,
          "wide": true,
          "help": "Identifiez les quelques catégories qui représentent environ 80 % du total."
        }
      ],
      "example": {
        "problem": "Défauts sur les lignes d'embouteillage, janvier-mars 2026",
        "dataSource": "Journal des défauts d'assurance qualité",
        "period": "Janvier-mars 2026",
        "counts": [
          {
            "category": "Sous-remplissage",
            "count": 86
          },
          {
            "category": "Désalignement des étiquettes",
            "count": 24
          },
          {
            "category": "Couple de serrage",
            "count": 18
          },
          {
            "category": "Dommages aux joints",
            "count": 11
          },
          {
            "category": "Déborder",
            "count": 9
          },
          {
            "category": "Bouteille sale",
            "count": 4
          }
        ],
        "conclusion": "Le sous-remplissage constitue la catégorie la plus importante et, avec le désalignement des étiquettes et le couple de serrage des bouchons, représente la majeure partie du nombre de défauts. Concentrez le premier cycle d’amélioration sur le sous-remplissage."
      }
    },
    {
      "id": "fmea",
      "title": "FMEA",
      "phase": "Analyze",
      "minBelt": "green",
      "icon": "fa-triangle-exclamation",
      "estimatedMinutes": 45,
      "description": "Hiérarchisez les modes de défaillance par gravité, occurrence et détection, avec le calcul automatique du RPN.",
      "fields": [
        {
          "key": "processName",
          "label": "Processus ou produit",
          "type": "text",
          "section": "Portée de l'étude",
          "required": true,
          "wide": true
        },
        {
          "key": "team",
          "label": "L'équipe AMDEC",
          "type": "text",
          "section": "Portée de l'étude"
        },
        {
          "key": "reviewDate",
          "label": "Date de révision",
          "type": "date",
          "section": "Portée de l'étude"
        },
        {
          "key": "scope",
          "label": "Portée et hypothèses",
          "type": "textarea",
          "section": "Portée de l'étude",
          "rows": 2,
          "wide": true
        },
        {
          "key": "failures",
          "label": "Modes de défaillance",
          "type": "table",
          "section": "Modes de défaillance",
          "required": true,
          "minRows": 5,
          "help": "Évaluez la gravité, l'occurrence et la détection de 1 à 10. RPN = S x O x D et se met à jour automatiquement. RPN 200 ou supérieur est surligné en rouge ; 100-199 ambre.",
          "columns": [
            {
              "key": "step",
              "label": "Étape du processus",
              "type": "text"
            },
            {
              "key": "failure",
              "label": "Mode de défaillance",
              "type": "text"
            },
            {
              "key": "effect",
              "label": "Effet",
              "type": "text"
            },
            {
              "key": "severity",
              "label": "S",
              "type": "number",
              "min": 1,
              "max": 10,
              "step": 1,
              "width": "58px"
            },
            {
              "key": "occurrence",
              "label": "O",
              "type": "number",
              "min": 1,
              "max": 10,
              "step": 1,
              "width": "58px"
            },
            {
              "key": "detection",
              "label": "D",
              "type": "number",
              "min": 1,
              "max": 10,
              "step": 1,
              "width": "58px"
            },
            {
              "key": "rpn",
              "label": "RPN",
              "compute": {
                "op": "multiplier",
                "fields": [
                  "gravité",
                  "occurrence",
                  "détection"
                ]
              },
              "thresholds": {
                "high": 200,
                "medium": 100
              },
              "width": "72px"
            },
            {
              "key": "action",
              "label": "Action recommandée",
              "type": "text"
            },
            {
              "key": "owner",
              "label": "Propriétaire",
              "type": "text"
            },
            {
              "key": "status",
              "label": "Statut",
              "type": "select",
              "options": [
                "Ouvrir",
                "En cours",
                "Complet"
              ]
            }
          ]
        },
        {
          "key": "actions",
          "label": "Actions prioritaires et notes de révision",
          "type": "textarea",
          "section": "Plan d'action",
          "rows": 3,
          "wide": true
        }
      ],
      "example": {
        "processName": "Ligne d'embouteillage 2 remplissage et bouchage",
        "team": "Maintenance, opérateurs, assurance qualité, ingénierie",
        "reviewDate": "2026-02-20",
        "scope": "Concentrez-vous sur les étapes de remplissage, de bouchage et de changement. L'emballage et la palettisation sont hors du champ de cette étude.",
        "failures": [
          {
            "step": "Fill bottle",
            "failure": "Sous-remplissage",
            "effect": "Réclamation client et refonte",
            "severity": 8,
            "occurrence": 6,
            "detection": 4,
            "action": "Installez la norme de purge spécifique au produit et vérifiez la première bouteille",
            "owner": "Jordan Lee",
            "status": "En cours"
          },
          {
            "step": "Fill bottle",
            "failure": "Déborder",
            "effect": "Dons et déversements de produits",
            "severity": 5,
            "occurrence": 4,
            "detection": 3,
            "action": "Ajouter une alarme automatique de tendance du volume de remplissage",
            "owner": "Avery Chen",
            "status": "Ouvrir"
          },
          {
            "step": "Place cap",
            "failure": "Faible couple de serrage",
            "effect": "Fuite pendant le transport",
            "severity": 9,
            "occurrence": 3,
            "detection": 5,
            "action": "Ajouter une vérification du couple toutes les 30 minutes",
            "owner": "Technicien assurance qualité",
            "status": "Ouvrir"
          },
          {
            "step": "Changeover",
            "failure": "Mauvaise recette de remplissage sélectionnée",
            "effect": "Volume de remplissage incorrect pour l'ensemble du cycle",
            "severity": 8,
            "occurrence": 2,
            "detection": 2,
            "action": "Ajouter un verrouillage d'analyse de recette avant le démarrage",
            "owner": "Ingénierie",
            "status": "Ouvrir"
          },
          {
            "step": "Fill bottle",
            "failure": "Vanne de remplissage usée",
            "effect": "Volume incohérent entre les buses",
            "severity": 7,
            "occurrence": 4,
            "detection": 6,
            "action": "Ajoutez l’inspection de l’usure des vannes à la maintenance préventive",
            "owner": "Entretien",
            "status": "Ouvrir"
          }
        ],
        "actions": "Donnez la priorité aux normes de verrouillage de mauvaise recette et de purge sous-remplissage, car elles combinent une gravité élevée et une détection faible. Re-notez l'AMDEC après le pilote."
      }
    },
    {
      "id": "solution-matrix",
      "title": "Matrice de solutions",
      "phase": "Improve",
      "minBelt": "green",
      "icon": "fa-table-cells-large",
      "estimatedMinutes": 30,
      "description": "Comparez les solutions candidates par rapport à leur impact, leur faisabilité, leur coût et leurs risques à l'aide d'un score transparent.",
      "fields": [
        {
          "key": "problem",
          "label": "Problème ou opportunité",
          "type": "text",
          "section": "Contexte décisionnel",
          "required": true,
          "wide": true
        },
        {
          "key": "decisionOwner",
          "label": "Propriétaire de la décision",
          "type": "text",
          "section": "Contexte décisionnel"
        },
        {
          "key": "decisionDate",
          "label": "Date de la décision",
          "type": "date",
          "section": "Contexte décisionnel"
        },
        {
          "key": "criteria",
          "label": "Conseils de notation",
          "type": "textarea",
          "section": "Contexte décisionnel",
          "rows": 2,
          "wide": true,
          "help": "Utilisez une échelle de 1 à 5 pour chaque critère. Le total donne un poids égal à chaque critère ; ajustez la discussion si l’équipe utilise des poids différents."
        },
        {
          "key": "solutions",
          "label": "Solutions candidates",
          "type": "table",
          "section": "Notation des solutions",
          "required": true,
          "minRows": 4,
          "help": "Notez l’impact, la faisabilité, le coût et le risque de 1 (médiocre) à 5 (excellent). Le total est calculé automatiquement.",
          "columns": [
            {
              "key": "solution",
              "label": "Solution",
              "type": "text"
            },
            {
              "key": "impact",
              "label": "Impact",
              "type": "number",
              "min": 1,
              "max": 5,
              "step": 1,
              "width": "78px"
            },
            {
              "key": "feasibility",
              "label": "Faisabilité",
              "type": "number",
              "min": 1,
              "max": 5,
              "step": 1,
              "width": "78px"
            },
            {
              "key": "cost",
              "label": "Coût",
              "type": "number",
              "min": 1,
              "max": 5,
              "step": 1,
              "width": "78px"
            },
            {
              "key": "risk",
              "label": "Risque",
              "type": "number",
              "min": 1,
              "max": 5,
              "step": 1,
              "width": "78px"
            },
            {
              "key": "total",
              "label": "Total",
              "compute": {
                "op": "somme",
                "fields": [
                  "impact",
                  "faisabilité",
                  "coût",
                  "risque"
                ]
              },
              "thresholds": {
                "high": 17,
                "medium": 13
              },
              "tone": "bien",
              "width": "72px"
            },
            {
              "key": "decision",
              "label": "Décision",
              "type": "select",
              "options": [
                "Choisi",
                "Pilote",
                "Prise",
                "Rejeté"
              ]
            }
          ]
        },
        {
          "key": "rationale",
          "label": "Justification de la décision",
          "type": "textarea",
          "section": "Décision",
          "rows": 3,
          "wide": true
        }
      ],
      "example": {
        "problem": "Réduisez les variations de changement et les sous-remplissages sur la ligne 2.",
        "decisionOwner": "Priya Shah",
        "decisionDate": "2026-04-10",
        "criteria": "L'impact reflète la réduction attendue des défauts. La faisabilité reflète les temps d'arrêt et les compétences. Le coût reflète les dépenses de mise en œuvre. Le risque reflète l’exposition à la sécurité et à la qualité du produit.",
        "solutions": [
          {
            "solution": "Norme de purge spécifique au produit",
            "impact": 5,
            "feasibility": 5,
            "cost": 5,
            "risk": 4,
            "decision": "Choisi"
          },
          {
            "solution": "Alarme de tendance de remplissage automatique",
            "impact": 4,
            "feasibility": 3,
            "cost": 3,
            "risk": 4,
            "decision": "Pilote"
          },
          {
            "solution": "Remplacer toutes les vannes de remplissage",
            "impact": 4,
            "feasibility": 2,
            "cost": 1,
            "risk": 3,
            "decision": "Prise"
          },
          {
            "solution": "Ajouter un deuxième contrôle opérateur",
            "impact": 2,
            "feasibility": 4,
            "cost": 4,
            "risk": 3,
            "decision": "Rejeté"
          }
        ],
        "rationale": "La norme de purge présente le meilleur équilibre entre impact, faisabilité, coût et risque. L'alarme de tendance est une deuxième phase utile si les résultats pilotes montrent une dérive entre les inspections."
      }
    },
    {
      "id": "control-plan",
      "title": "Plan de contrôle",
      "phase": "Control",
      "minBelt": "green",
      "icon": "fa-sliders",
      "estimatedMinutes": 40,
      "description": "Documentez comment le processus amélioré sera surveillé, qui répond et ce qui se passe lorsqu'un signal se produit.",
      "fields": [
        {
          "key": "processName",
          "label": "Nom du processus",
          "type": "text",
          "section": "Propriété du régime",
          "required": true,
          "wide": true
        },
        {
          "key": "owner",
          "label": "Propriétaire du processus",
          "type": "text",
          "section": "Propriété du régime"
        },
        {
          "key": "effectiveDate",
          "label": "Date d'entrée en vigueur",
          "type": "date",
          "section": "Propriété du régime"
        },
        {
          "key": "revision",
          "label": "Révision",
          "type": "text",
          "section": "Propriété du régime",
          "placeholder": "1.0"
        },
        {
          "key": "controls",
          "label": "Éléments de contrôle",
          "type": "table",
          "section": "Éléments de contrôle",
          "required": true,
          "minRows": 5,
          "columns": [
            {
              "key": "step",
              "label": "Étape du processus",
              "type": "text"
            },
            {
              "key": "item",
              "label": "Élément de contrôle",
              "type": "text"
            },
            {
              "key": "spec",
              "label": "Spécification",
              "type": "text"
            },
            {
              "key": "method",
              "label": "Méthode de contrôle",
              "type": "text"
            },
            {
              "key": "frequency",
              "label": "Fréquence",
              "type": "text"
            },
            {
              "key": "owner",
              "label": "Propriétaire",
              "type": "text"
            },
            {
              "key": "reaction",
              "label": "Plan de réaction",
              "type": "text"
            }
          ]
        },
        {
          "key": "monitoring",
          "label": "Notes de surveillance et d’escalade",
          "type": "textarea",
          "section": "Surveillance",
          "rows": 3,
          "wide": true
        }
      ],
      "example": {
        "processName": "Processus de remplissage de la ligne d'embouteillage 2",
        "owner": "Priya Shah",
        "effectiveDate": "2026-06-01",
        "revision": "1.0",
        "controls": [
          {
            "step": "Changeover",
            "item": "Temps de purge",
            "spec": "Produit A : 8 minutes",
            "method": "Liste de contrôle de configuration et contrôle de la première bouteille",
            "frequency": "Chaque changement",
            "owner": "Opérateur de ligne",
            "reaction": "Ligne d'arrêt ; répéter la purge ; informer le chef d'équipe"
          },
          {
            "step": "Fill",
            "item": "Volume de remplissage",
            "spec": "499,5-500,7 ml",
            "method": "Jauge de remplissage et échantillon horaire d'assurance qualité",
            "frequency": "Toutes les 15 minutes",
            "owner": "Opérateur de ligne",
            "reaction": "Ajuster le remplissage ; quarantaine depuis le dernier bon contrôle"
          },
          {
            "step": "Cap",
            "item": "Couple de serrage",
            "spec": "18-24 Ncm",
            "method": "Testeur de couple",
            "frequency": "Toutes les 30 minutes",
            "owner": "Technicien assurance qualité",
            "reaction": "Remplacez la tête du capuchon ; refaire un test ; retenir le produit"
          },
          {
            "step": "Measurement",
            "item": "Calibrage de la jauge de remplissage",
            "spec": "À moins de 0,2 ml du poids de contrôle",
            "method": "Poids de contrôle certifié",
            "frequency": "Début du quart de travail",
            "owner": "Chef de quart",
            "reaction": "Recalibrer ou retirer la jauge du service"
          },
          {
            "step": "Response",
            "item": "Alarme de tendance",
            "spec": "Trois points consécutifs d'un côté du centre",
            "method": "Examen des cartes SPC",
            "frequency": "Chaque quart de travail",
            "owner": "Propriétaire du processus",
            "reaction": "Ouvrir une enquête et examiner le dossier de maintenance"
          }
        ],
        "monitoring": "Le propriétaire du processus examine quotidiennement le tableau de bord SPC. Un signal répété déclenche un contrôle de confinement de 30 minutes. Signalez le problème au directeur de l'usine si deux signaux se produisent en une semaine."
      }
    },
    {
      "id": "project-closure",
      "title": "Liste de contrôle de clôture du projet",
      "phase": "Control",
      "minBelt": "green",
      "icon": "fa-clipboard-check",
      "estimatedMinutes": 25,
      "description": "Confirmez les résultats, le transfert, la documentation et les leçons apprises avant de clôturer le projet.",
      "fields": [
        {
          "key": "projectName",
          "label": "Nom du projet",
          "type": "text",
          "section": "Résumé du projet",
          "required": true,
          "wide": true
        },
        {
          "key": "projectLead",
          "label": "Chef de projet",
          "type": "text",
          "section": "Résumé du projet"
        },
        {
          "key": "sponsor",
          "label": "Parrainer",
          "type": "text",
          "section": "Résumé du projet"
        },
        {
          "key": "closureDate",
          "label": "Date de fermeture",
          "type": "date",
          "section": "Résumé du projet"
        },
        {
          "key": "resultsSummary",
          "label": "Résumé des résultats",
          "type": "textarea",
          "section": "Résultats",
          "required": true,
          "rows": 3,
          "wide": true,
          "placeholder": "Référence, objectif, résultat réel et avantage financier."
        },
        {
          "key": "lessonsLearned",
          "label": "Leçons apprises",
          "type": "textarea",
          "section": "Résultats",
          "required": true,
          "rows": 3,
          "wide": true
        },
        {
          "key": "closureChecklist",
          "label": "Liste de contrôle de fermeture",
          "type": "checklist",
          "section": "Liste de contrôle de fermeture",
          "required": true,
          "items": [
            "Les objectifs du projet et les CTQ ont été atteints",
            "Les résultats d'amélioration ont été validés avec des données",
            "Le plan de contrôle est actif et détenu",
            "La documentation du processus et la formation ont été mises à jour",
            "Les avantages financiers ont été vérifiés auprès des Finances",
            "Les leçons apprises ont été capturées et partagées",
            "La reconnaissance des équipes et des sponsors est terminée",
            "Clôture du projet approuvée par le sponsor"
          ]
        },
        {
          "key": "signoff",
          "label": "Se déconnecter",
          "type": "table",
          "section": "Se déconnecter",
          "required": true,
          "minRows": 3,
          "columns": [
            {
              "key": "role",
              "label": "Rôle",
              "type": "text",
              "placeholder": "Parrainer"
            },
            {
              "key": "name",
              "label": "Nom",
              "type": "text"
            },
            {
              "key": "date",
              "label": "Date",
              "type": "date"
            },
            {
              "key": "status",
              "label": "Statut",
              "type": "select",
              "options": [
                "En attente",
                "Signé"
              ]
            }
          ]
        }
      ],
      "example": {
        "projectName": "Réduire les variations de remplissage des lignes d'embouteillage",
        "projectLead": "Jordan Lee",
        "sponsor": "Priya Shah",
        "closureDate": "2026-06-28",
        "resultsSummary": "L'écart type de remplissage est passé de 3,8 ml à 1,3 ml, dépassant ainsi l'objectif de 1,5 ml. Le taux de sous-utilisation est passé de 4,2 % à 0,3 %. Les Finances ont vérifié 61 000 $ de bénéfices annuels.",
        "lessonsLearned": "La norme de changement était le contrôle à effet de levier le plus élevé. L’implication des opérateurs dans le projet pilote a amélioré l’adoption. Une vérification antérieure des jauges aurait raccourci la phase de mesure.",
        "closureChecklist": [
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          false
        ],
        "signoff": [
          {
            "role": "Chef de projet",
            "name": "Jordan Lee",
            "date": "2026-06-28",
            "status": "Signé"
          },
          {
            "role": "Propriétaire du processus",
            "name": "Priya Shah",
            "date": "2026-06-28",
            "status": "Signé"
          },
          {
            "role": "Finance",
            "name": "Dana Brooks",
            "date": "2026-06-27",
            "status": "Signé"
          }
        ]
      }
    }
  ]
};
    if (typeof module === "object" && module.exports) module.exports = catalog;
    root.RESOURCE_CATALOG = catalog;
}(typeof globalThis !== "undefined" ? globalThis : this));
