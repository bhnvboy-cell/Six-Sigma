// Auto-generated from data/i18n/fr/curriculum.json and lessons/*.json. Do not edit by hand.
// Run: node scripts/build-localized-data.js
const curriculumData = {
  "version": "2.0",
  "updated": "2026-10-29",
  "source": "Aligned to ASQ, IASSC, and ISO 13053 Bodies of Knowledge",
  "belts": [
    {
      "id": "white",
      "name": "Ceinture blanche",
      "level": 1,
      "color": "white",
      "icon": "fa-medal",
      "lessonTarget": "8-10",
      "studyTime": "6-8 heures",
      "audience": "Nouveaux employés, personnel de première ligne, superviseurs et toute personne rejoignant un projet d'amélioration pour la première fois.",
      "prerequisites": "Aucun. Commencez ici sans aucune connaissance préalable.",
      "previousRecap": "Pas de ceinture précédente. Ce cours commence par le langage partagé de la qualité, du gaspillage, de la variation et du DMAIC.",
      "outcomes": [
        "Expliquer ce qu'est le Lean Six Sigma et d'où il vient",
        "Reconnaître le gaspillage, les variations, les défauts et le coût d'une mauvaise qualité",
        "Décrire VOC, CTQ, DMAIC et les rôles de la ceinture",
        "Apporter des données et des idées utiles à un projet d'équipe"
      ],
      "modules": [
        {
          "id": "white-1",
          "number": 1,
          "title": "Fondations de qualité",
          "duration": "90 minutes",
          "summary": "Construisez le langage commun de la qualité : d'où viennent Six Sigma et Lean, pourquoi une mauvaise qualité coûte de l'argent, comment les clients définissent la valeur et pourquoi la variation est importante.",
          "lessons": [
            {
              "id": "W1.1",
              "order": 1,
              "title": "Histoire de Six Sigma et du Lean",
              "objective": "Trace Six Sigma de Motorola et GE, et Lean de Toyota Production System.",
              "content": {
                "why": "Savoir d'où viennent Lean et Six Sigma vous aide à comprendre pourquoi ces outils existent. Ils n’ont pas été inventés comme théorie ; il s'agissait de réponses pratiques à de réels problèmes de qualité et de rapidité.",
                "what": "Six Sigma est une méthode de qualité qui réduit les variations et les défauts. Motorola l'a développé dans les années 1980 et Bill Smith en a été l'un des principaux architectes. General Electric et Jack Welch l’ont rendu célèbre dans les années 1990. Lean est une méthode rapide et fluide issue du système de production Toyota, dirigé par Taiichi Ohno. Lean élimine les déchets ; Six Sigma réduit les variations. Lean Six Sigma combine les deux.",
                "how": [
                  "Commencez par les exigences du client, pas par l’outil.",
                  "Mesurez le taux de défauts ou le délai de livraison actuel.",
                  "Utilisez DMAIC pour rechercher et réduire les variations.",
                  "Utilisez les outils Lean pour supprimer les attentes, les mouvements, les stocks et les retouches.",
                  "Standardisez la méthode améliorée et continuez à mesurer."
                ],
                "where": "Utilisez l'histoire comme contexte, pas comme preuve. Un hôpital peut utiliser Six Sigma pour réduire les erreurs de médication et Lean pour réduire les temps d'attente des patients. Une banque peut utiliser Six Sigma pour réduire les retouches de prêts et Lean pour accélérer les approbations. Les équipes informatiques utilisent les deux pour réduire les défauts de version et les attentes entre les équipes.",
                "when_not": "Ne copiez pas un programme célèbre simplement parce que GE ou Toyota l'ont utilisé. Ne considérez pas Lean comme une autorisation pour réduire le personnel, et ne considérez pas Six Sigma comme un simple cours de statistiques.",
                "common_mistakes": [
                  "Penser Lean concerne uniquement les outils et Six Sigma concerne uniquement les mathématiques.",
                  "Copier le programme d'une autre organisation sans l'adapter au processus local.",
                  "Utiliser l'historique pour justifier une solution avant de collecter des données."
                ],
                "quick_check": [
                  {
                    "q": "Quelle entreprise a développé Six Sigma ?",
                    "answer": "Motorola.",
                    "explanation": "Motorola a développé Six Sigma dans les années 1980 ; GE l'a ensuite popularisé."
                  },
                  {
                    "q": "Quel est l’objectif principal du Lean ?",
                    "answer": "Supprimer les déchets et améliorer le flux.",
                    "explanation": "Le Lean est né du système de production Toyota et se concentre sur la valeur, le flux, l'attraction et l'élimination des déchets."
                  },
                  {
                    "q": "Pourquoi combiner Lean et Six Sigma ?",
                    "answer": "Lean améliore la vitesse et le flux tandis que Six Sigma améliore la qualité et la cohérence.",
                    "explanation": "Ensemble, ils abordent à la fois le gaspillage et la variation."
                  }
                ],
                "recap": [
                  "Six Sigma réduit les variations et les défauts ; Motorola et GE sont au cœur de son histoire.",
                  "Lean réduit le gaspillage et améliore le flux ; il est né de Toyota.",
                  "Lean Six Sigma combine les deux, mais les exigences du client passent toujours en premier."
                ]
              }
            },
            {
              "id": "W1.2",
              "order": 2,
              "title": "Bases de la qualité et coût d’une mauvaise qualité",
              "objective": "Définissez les coûts de qualité, de prévention, d’évaluation et d’échec, et calculez un exemple simple de COPQ.",
              "content": {
                "why": "Une mauvaise qualité coûte cher, mais le coût est souvent caché dans les retouches, les retours, les inspections et la perte de clients. Les dirigeants donnent la priorité aux problèmes qu’ils peuvent percevoir en termes d’argent et d’impact sur les clients.",
                "what": "La qualité signifie répondre de manière cohérente aux exigences des clients. Ce n'est pas la même chose que le luxe ou la qualité. Le coût d’une mauvaise qualité (COPQ) est le coût total d’un travail mal exécuté du premier coup. Il comprend quatre parties : les coûts de prévention tels que la formation et les examens de conception, les coûts d'évaluation tels que l'inspection et les tests, les coûts de défaillance interne tels que la mise au rebut et la reprise avant la livraison, et les coûts de défaillance externes tels que les retours, les plaintes, la garantie et la perte d'activité.",
                "how": [
                  "Énumérez les quatre catégories COPQ.",
                  "Estimez le coût dans chaque catégorie pour un processus ou un mois.",
                  "Ajoutez les catégories pour obtenir le COPQ total.",
                  "Divisez par unités ou revenus pour comparer équitablement.",
                  "Donnez la priorité à la plus grande catégorie contrôlable."
                ],
                "where": "Une clinique peut compter les coûts de réadmission, un détaillant peut compter les retours et les réexpéditions, une usine peut compter les rebuts et les reprises, et une équipe informatique peut compter les heures de correction de bugs. Utilisez COPQ lorsque vous avez besoin d’une analyse de rentabilisation ou d’une liste de priorités.",
                "when_not": "N'utilisez pas COPQ comme système comptable complet et ne comptez pas en double les coûts qui appartiennent déjà à une autre catégorie. Ne l’utilisez pas pour faire honte aux individus ; le but est d’améliorer le processus.",
                "common_mistakes": [
                  "En ne comptant que les rebuts et en ignorant l'inspection, les retouches et les clients perdus.",
                  "Compter deux fois le même coût dans deux catégories.",
                  "Utiliser des estimations approximatives comme résultats financiers exacts sans validation."
                ],
                "quick_check": [
                  {
                    "q": "Lequel de ces éléments constitue un coût de défaillance externe ?",
                    "answer": "Retours clients et réclamations au titre de la garantie.",
                    "explanation": "Les pannes externes se produisent après que le client a reçu le produit ou le service."
                  },
                  {
                    "q": "Un processus produit 1 000 unités, comporte 40 défauts et chaque défaut coûte 25 $ à réparer. Quel est le coût d’une défaillance interne ?",
                    "answer": "$1,000.",
                    "explanation": "40 défauts x 25 $ = 1 000 $."
                  },
                  {
                    "q": "Quelles sont les quatre catégories COPQ ?",
                    "answer": "Prévention, évaluation, échec interne et échec externe.",
                    "explanation": "Ces quatre catégories couvrent le coût de la mauvaise qualité."
                  }
                ],
                "recap": [
                  "La qualité signifie répondre constamment aux exigences des clients.",
                  "Le COPQ comprend les coûts de prévention, d’évaluation, de défaillance interne et de défaillance externe.",
                  "Utilisez COPQ pour prioriser les améliorations et élaborer une analyse de rentabilisation, sans blâmer les gens."
                ]
              }
            },
            {
              "id": "W1.3",
              "order": 3,
              "title": "Clients : VOC et CTQ",
              "objective": "Transformez les souhaits des clients en exigences mesurables en termes de qualité.",
              "content": {
                "why": "L’amélioration n’a d’importance que si elle change quelque chose qui intéresse les clients. Un processus peut paraître plus rapide ou moins cher en interne tout en détériorant l’expérience client.",
                "what": "La voix du client (VOC) est l'ensemble des besoins, des désirs, des plaintes et des attentes des clients. Critique à la qualité (CTQ) est une exigence mesurable dérivée du COV. Un arbre CTQ relie un large besoin client à un moteur puis à une caractéristique mesurable. Par exemple, « Je veux une réponse rapide » peut devenir « délai d'obtention de la première réponse en moins de quatre heures ».",
                "how": [
                  "Recueillez les COV à partir d’entretiens, d’enquêtes, de plaintes et d’observations.",
                  "Regroupez les déclarations similaires par thèmes.",
                  "Traduisez chaque thème en un CTQ mesurable.",
                  "Fixez un objectif ou une spécification et une méthode de mesure.",
                  "Vérifiez le CTQ auprès des clients ou du personnel de première ligne."
                ],
                "where": "Utilisez VOC et CTQ dans toutes les industries. Dans le domaine des soins de santé, « je veux être vu rapidement » peut devenir « un délai d'arrivée chez le clinicien inférieur à 20 minutes ». Dans le secteur bancaire, « Je souhaite connaître le statut de mon prêt » peut devenir « mise à jour du statut dans un délai d'un jour ouvrable ». Dans le domaine de l'éducation, « Je veux des commentaires utiles » peut devenir « un retour d'information dans les cinq jours ».",
                "when_not": "Ne vous fiez pas uniquement à une enquête si vous pouvez observer le processus. Ne créez pas de CTQ sans un vrai client ou un client interne clair. Ne pas utiliser de COV lorsque l'exigence est une règle légale ou de sécurité ; ce sont des exigences obligatoires, pas des préférences.",
                "common_mistakes": [
                  "Confondre une solution avec un besoin, comme « nous avons besoin d'une nouvelle application » au lieu de « nous avons besoin de réponses plus rapides ».",
                  "Créer trop de CTQ et perdre la concentration.",
                  "Écrire un CTQ qui ne peut pas être mesuré."
                ],
                "quick_check": [
                  {
                    "q": "Que signifie COV ?",
                    "answer": "Voix du client.",
                    "explanation": "VOC est l'ensemble des besoins et des attentes des clients."
                  },
                  {
                    "q": "Qu’est-ce qui fait un bon CTQ ?",
                    "answer": "Elle est mesurable et liée à un besoin client.",
                    "explanation": "Un CTQ traduit un besoin en quelque chose que le processus peut mesurer."
                  },
                  {
                    "q": "Un client dit : « Je veux que ma commande arrive à temps ». Quel CTQ est le meilleur ?",
                    "answer": "Pourcentage de commandes livrées à la date promise.",
                    "explanation": "Ce CTQ est mesurable et reflète directement le besoin du client."
                  }
                ],
                "recap": [
                  "VOC capture ce dont les clients ont besoin et ce qu’ils apprécient.",
                  "CTQ traduit les COV en une exigence mesurable.",
                  "Un CTQ utile a un objectif, une méthode de mesure et un lien client clairs."
                ]
              }
            },
            {
              "id": "W1.4",
              "order": 4,
              "title": "Variation et défauts",
              "objective": "Expliquez la variation des causes communes et spéciales et définissez un défaut dans un langage simple.",
              "content": {
                "why": "La variation rend les processus imprévisibles. Même lorsque la moyenne semble bonne, les variations peuvent créer des défauts, des retards et des clients mécontents.",
                "what": "La variation est la différence entre les extrants ou les résultats du processus au fil du temps. La variation de cause commune est normale et intégrée au processus. La variation de cause particulière provient d'un événement spécifique, tel qu'une panne de machine, l'arrivée d'un nouveau fournisseur ou une hausse soudaine de la demande. Un défaut est un résultat qui ne répond pas à une spécification ou à une exigence. Une unité défectueuse peut présenter un ou plusieurs défauts.",
                "how": [
                  "Définir la caractéristique et la spécification.",
                  "Collectez les données dans l’ordre chronologique.",
                  "Tracez un graphique ou un histogramme.",
                  "Recherchez des modèles, des valeurs aberrantes et des changements.",
                  "Supprimez d’abord les causes spéciales, puis réduisez la variation des causes communes."
                ],
                "where": "Un café peut suivre le temps de service ; un hôpital peut suivre le temps d'attente ; une équipe logicielle peut suivre les défauts de version ; une banque peut suivre les délais d'approbation. Utilisez l’analyse des variations chaque fois que le processus est suffisamment stable pour être étudié et que le client a une exigence mesurable.",
                "when_not": "Ne réagissez pas à chaque point de données comme s’il s’agissait d’une cause particulière ; c'est de la falsification et cela ne fait qu'empirer les choses. N'essayez pas de réduire les variations dans un processus qui est fondamentalement incapable et doit être repensé.",
                "common_mistakes": [
                  "Traiter la variation normale de cause commune comme un événement spécial.",
                  "Blâmer un individu pour la variation causée par le processus.",
                  "Utiliser trop peu de points de données pour voir un modèle."
                ],
                "quick_check": [
                  {
                    "q": "Qu’est-ce qu’une variation de cause commune ?",
                    "answer": "Variation normale intégrée à un processus stable.",
                    "explanation": "La variation de cause commune est la variation continue et attendue du processus."
                  },
                  {
                    "q": "Le temps de service est généralement de 5 à 7 minutes, mais un client attend 45 minutes. Quel type de variation l’attente de 45 minutes est-elle probable ?",
                    "answer": "Variation pour cause spéciale.",
                    "explanation": "Il s’agit d’un événement inhabituel qui sort du cadre normal."
                  },
                  {
                    "q": "Qu'est-ce qu'un défaut ?",
                    "answer": "Un résultat qui ne répond pas à une spécification ou à une exigence.",
                    "explanation": "Un défaut est un manquement à une exigence."
                  }
                ],
                "recap": [
                  "La variation est la différence dans les résultats du processus au fil du temps.",
                  "La variation de cause commune est normale ; la variation de cause spéciale provient d’une source spécifique.",
                  "Réduisez d’abord les causes spéciales, puis travaillez sur la variation des causes communes."
                ]
              }
            },
            {
              "id": "W1.5",
              "order": 5,
              "title": "Vue d'ensemble DMAIC",
              "objective": "Décrivez les cinq phases du DMAIC et la question principale à laquelle chaque phase répond.",
              "content": {
                "why": "DMAIC offre aux équipes un chemin discipliné depuis un problème vague jusqu'à une solution éprouvée. Cela évite de passer aux correctifs et aide à conserver le gain.",
                "what": "DMAIC signifie Définir, Mesurer, Analyser, Améliorer, Contrôler. Définir clarifie le problème, le client, l’objectif et la portée. Mesure établit une référence et vérifie les données. L'analyse trouve les causes profondes. Améliorer les solutions de sélection et de test. Control normalise et surveille le nouveau processus. Chaque phase se termine par un examen de porte.",
                "how": [
                  "Définir : rédigez un énoncé du problème, un objectif, une portée et une équipe.",
                  "Mesurer : collecter des données de référence et valider le système de mesure.",
                  "Analyser : utilisez des graphiques, des outils de causes profondes et des tests pour trouver les causes.",
                  "Améliorer : choisissez une solution, pilotez-la et confirmez le résultat.",
                  "Contrôle : documentez la norme, surveillez la métrique et attribuez un propriétaire."
                ],
                "where": "Utilisez DMAIC pour améliorer un processus existant dans les domaines de la santé, de la banque, de la vente au détail, de la fabrication, de l'informatique ou de l'éducation. Par exemple, un laboratoire a 30 % de rapports en retard. Définir le problème et l'objectif ; Mesurez la ligne de base ; Analyser le ramassage et le groupage du courrier ; Améliorez-vous avec un scan de code-barres ; Contrôle avec un graphique journalier et un propriétaire. Utilisez plutôt DMADV lorsque vous concevez un nouveau processus à partir de zéro.",
                "when_not": "N'utilisez pas DMAIC pour une solution simple et évidente ou pour un problème de sécurité urgent ; utilisez d’abord un kaizen rapide ou un confinement immédiat. Ne sautez pas Mesure simplement parce que l’équipe pense connaître le problème.",
                "common_mistakes": [
                  "Passer directement de Définir à Améliorer.",
                  "Ignorer la mesure de base, de sorte que l'équipe ne peut pas prouver le gain.",
                  "Mettre fin au projet sans plan de contrôle ni propriétaire."
                ],
                "quick_check": [
                  {
                    "q": "Quelles sont les cinq phases DMAIC dans l’ordre ?",
                    "answer": "Définir, Mesurer, Analyser, Améliorer, Contrôler.",
                    "explanation": "DMAIC est la séquence d’amélioration standard."
                  },
                  {
                    "q": "Quelle phase établit la référence ?",
                    "answer": "Mesure.",
                    "explanation": "La phase Mesurer définit et collecte les données de référence."
                  },
                  {
                    "q": "Quel est l’objectif de la phase de contrôle ?",
                    "answer": "Standardiser et surveiller le processus amélioré afin que les gains perdurent.",
                    "explanation": "Le contrôle confirme la nouvelle méthode et attribue la propriété continue."
                  }
                ],
                "recap": [
                  "DMAIC est un cheminement en cinq phases allant du problème à l’amélioration durable.",
                  "Mesurer et analyser pour éviter de deviner ; Améliorer les solutions de tests.",
                  "Le contrôle est ce qui fait durer le gain."
                ]
              }
            }
          ]
        },
        {
          "id": "white-2",
          "number": 2,
          "title": "Personnes, déchets et premiers projets",
          "duration": "80 minutes",
          "summary": "Apprenez à voir les huit gaspillages, à comprendre qui fait quoi sur un projet et à adopter la culture et les habitudes qui permettent l'amélioration.",
          "lessons": [
            {
              "id": "W2.1",
              "order": 1,
              "title": "Les 8 déchets",
              "objective": "Identifiez les huit gaspillages dans les domaines de la santé, de la vente au détail, de la fabrication, de l'informatique, de la banque et de l'éducation.",
              "content": {
                "why": "Le gaspillage est un travail qui consomme du temps, de l’argent ou des efforts sans ajouter de valeur pour le client. Apprendre à voir le gaspillage est la première compétence pratique du Lean, car la majeure partie est cachée à la vue de tous.",
                "what": "Lean définit huit gaspillages, souvent appelés TIMWOODS : le transport, l'inventaire, le mouvement, l'attente, la surproduction, la surtraitement, les défauts et les compétences inutilisées. La valeur est ce pour quoi le client est prêt à payer ; les déchets, c'est tout le reste. Certains gaspillages sont nécessaires, comme les inspections légalement requises, l’objectif est donc de les réduire et non de les supprimer aveuglément.",
                "how": [
                  "Parcourez le processus du début à la fin et énumérez chaque étape.",
                  "Marquez chaque étape comme étant une valeur ajoutée, une non-valeur nécessaire ou un gaspillage.",
                  "Classez les déchets en utilisant les huit catégories.",
                  "Mesurez le gaspillage en termes de temps, de coût, de distance ou de défauts.",
                  "Choisissez un déchet, testez un petit changement et mesurez à nouveau."
                ],
                "where": "Dans une clinique, les patients qui attendent sont des déchets, le personnel qui se dirige vers une imprimante distante est un mouvement, les fournitures périmées sont un inventaire et la rentrée des mêmes données est un traitement excessif. En informatique, attendre les approbations, c'est attendre, les compétences de développeur inutilisées sont des talents inutilisés et les tickets rouverts sont des défauts. Utilisez les huit gaspillages chaque fois que vous avez besoin d’un langage rapide et partagé pour ce qui ralentit un processus.",
                "when_not": "Ne supprimez pas une marche simplement parce qu’elle ressemble à un déchet. Les contrôles de sécurité, les examens réglementaires et les approbations requises par le client peuvent être des travaux nécessaires sans valeur ajoutée.",
                "common_mistakes": [
                  "Assimiler la réduction des déchets à la réduction des effectifs.",
                  "Confondre les gens occupés avec un travail précieux.",
                  "Suppression d'un contrôle qui évite un défaut grave."
                ],
                "quick_check": [
                  {
                    "q": "Que signifie le W de TIMWOODS ?",
                    "answer": "En attendant.",
                    "explanation": "TIMWOODS : transport, inventaire, mouvement, attente, surproduction, surtraitement, défauts, compétences."
                  },
                  {
                    "q": "Une infirmière marche 200 mètres pour collecter des fournitures chaque heure. De quels déchets s'agit-il ?",
                    "answer": "Mouvement.",
                    "explanation": "La marche en elle-même n’apporte aucune valeur ajoutée au patient."
                  },
                  {
                    "q": "Est-ce que tous les déchets de travail sans valeur ajoutée doivent être éliminés ?",
                    "answer": "Non. Certains travaux sans valeur ajoutée sont nécessaires, comme des contrôles de sécurité ou légaux.",
                    "explanation": "Le travail nécessaire sans valeur ajoutée doit être réduit autant que possible, et non éliminé aveuglément."
                  }
                ],
                "recap": [
                  "Les huit gaspillages sont le transport, l'inventaire, le mouvement, l'attente, la surproduction, la surtraitement, les défauts et les compétences inutilisées.",
                  "La valeur est définie par le client.",
                  "Certains travaux sans valeur ajoutée sont nécessaires ; réduisez-le soigneusement."
                ]
              }
            },
            {
              "id": "W2.2",
              "order": 2,
              "title": "Rôles et responsabilités",
              "objective": "Expliquez les rôles de ceinture blanche, jaune, verte, noire et de maître noir ainsi que le rôle de sponsor.",
              "content": {
                "why": "Les projets d’amélioration stagnent lorsque personne ne sait qui décide, qui fait le travail et à qui appartient le résultat. Des rôles clairs transforment les bonnes intentions en projets réalisés.",
                "what": "Un sponsor ou un champion fournit de l’autorité, des ressources et aide à éliminer les obstacles. Le propriétaire du processus est propriétaire du processus après le projet et maintient le gain. Une ceinture noire dirige des projets complexes à temps plein et encadre les autres. Une ceinture verte mène des projets à temps partiel dans son propre territoire. Les ceintures jaunes et blanches participent et mènent de petites améliorations locales. Un Master Black Belt régit le déploiement et développe les capacités. Les membres de l'équipe, les experts en la matière, les propriétaires de données et les partenaires financiers fournissent leurs connaissances et leur validation.",
                "how": [
                  "Nommez le sponsor et confirmez les décisions qu'il peut prendre.",
                  "Identifiez le propriétaire du processus qui vivra avec le changement.",
                  "Choisissez un responsable et une petite équipe possédant les connaissances nécessaires.",
                  "Convenez des engagements de temps et du respect de la cadence.",
                  "Écrivez un RACI simple : qui est responsable, responsable, consulté et informé."
                ],
                "where": "Utilisez la clarté des rôles sur chaque projet, en particulier les projets interfonctionnels. Dans un projet de sortie d'hôpital, le sponsor peut être le directeur des opérations, le propriétaire du processus, le responsable du service, le responsable, une infirmière de la ceinture verte et le propriétaire des données, un analyste informatique. Dans une banque, le responsable du processus peut être le responsable des opérations et le partenaire financier valide les avantages.",
                "when_not": "Ne créez pas de rôle pour chaque tâche et n'invitez pas tout le monde à chaque réunion. N'acceptez pas un sponsor qui ne peut pas lever les barrières et n'attendez pas la fin pour identifier le propriétaire du processus.",
                "common_mistakes": [
                  "Un sponsor de nom seulement qui n'assiste jamais et ne décide jamais.",
                  "Pas de propriétaire de processus, donc le gain disparaît après le projet.",
                  "Une équipe si grande que les décisions et les responsabilités disparaissent."
                ],
                "quick_check": [
                  {
                    "q": "À qui appartient le processus une fois le projet d’amélioration terminé ?",
                    "answer": "Le propriétaire du processus.",
                    "explanation": "Le propriétaire du processus maintient la nouvelle norme et surveille les performances."
                  },
                  {
                    "q": "Quel est le rôle principal d’un porteur de projet ?",
                    "answer": "Fournissez de l’autorité, des ressources et aidez à éliminer les obstacles.",
                    "explanation": "Le sponsor est le propriétaire principal qui permet le projet."
                  },
                  {
                    "q": "Que signifie RACI ?",
                    "answer": "Responsable, imputable, consulté, informé.",
                    "explanation": "RACI clarifie les droits de décision et la communication."
                  }
                ],
                "recap": [
                  "Chaque projet a besoin d'un sponsor, d'un propriétaire de processus et d'un responsable clair.",
                  "Adaptez le rôle de ceinture à la complexité du projet et au temps disponible.",
                  "Utilisez RACI pour rendre les droits de décision explicites."
                ]
              }
            },
            {
              "id": "W2.3",
              "order": 3,
              "title": "Culture et mentalité",
              "objective": "Décrivez le respect des personnes, les décisions basées sur des données et une culture d'apprentissage sans reproche.",
              "content": {
                "why": "Les outils ne soutiennent pas le changement à eux seuls. Les gens soutiennent le changement lorsqu’ils se sentent en sécurité pour s’exprimer, faire confiance aux données et voir les dirigeants modéliser le nouveau comportement.",
                "what": "La culture est l’ensemble des croyances et des comportements partagés qui façonnent la façon dont le travail est effectué. L’état d’esprit est la façon dont les gens interprètent les problèmes et leur rôle dans leur résolution. Une culture de la qualité se concentre sur le client, utilise les données plutôt que le blâme, traite les problèmes comme des opportunités d'apprentissage, respecte les gens et attend des dirigeants qu'ils se rendent là où le travail se déroule.",
                "how": [
                  "Renseignez-vous sur le processus, pas sur la personne : « Qu'est-ce qui a permis cette erreur ?",
                  "Allez au gemba et observez le vrai travail.",
                  "Remerciez les personnes qui ont signalé des problèmes et des quasi-accidents.",
                  "Utilisez les données pour tester les hypothèses et partager ouvertement les résultats.",
                  "Faites de l’amélioration une partie courante des réunions, et non un événement spécial."
                ],
                "where": "La culture est importante partout, mais elle est particulièrement visible dans les secteurs de la santé, de l’aviation, de l’industrie manufacturière et de l’informatique, où les gens peuvent cacher leurs erreurs pour éviter d’être blâmés. Dans un hôpital, un dirigeant qui récompense le signalement des erreurs peut voir les erreurs signalées augmenter avant que les préjudices ne diminuent ; cela peut être le signe d’une sécurité améliorée, et non d’une moins bonne performance.",
                "when_not": "N'utilisez pas la « culture » comme excuse pour des données manquantes, des rôles peu clairs ou une mauvaise conception des processus. Ne forcez pas la positivité lorsque les gens soulèvent des préoccupations légitimes en matière de sécurité ou d’éthique.",
                "common_mistakes": [
                  "Blâmer les individus pour les problèmes inhérents au processus.",
                  "Lancer des outils avant de construire la confiance et la sécurité psychologique.",
                  "Dire « nous avons un problème de culture » sans changer le comportement des dirigeants."
                ],
                "quick_check": [
                  {
                    "q": "Qu'est-ce que la sécurité psychologique ?",
                    "answer": "La conviction que vous pouvez exprimer vos problèmes ou vos idées sans être puni.",
                    "explanation": "La sécurité psychologique soutient l’apprentissage et la détection précoce des problèmes."
                  },
                  {
                    "q": "Un leader demande : « Qu'est-ce qui a permis cette erreur dans le processus ? au lieu de « Qui a fait ça ? » Quel comportement le leader modélise-t-il ?",
                    "answer": "Un état d’esprit sans reproche et axé sur les processus.",
                    "explanation": "La question attire l’attention sur les causes du système plutôt que sur les individus."
                  },
                  {
                    "q": "Pourquoi les erreurs signalées peuvent-elles augmenter après l’amélioration de la culture de sécurité ?",
                    "answer": "Les gens se sentent plus en sécurité en signalant des problèmes qui étaient auparavant cachés.",
                    "explanation": "Davantage de rapports peuvent révéler le véritable taux d'erreur avant qu'il ne baisse."
                  }
                ],
                "recap": [
                  "La culture est façonnée par les comportements quotidiens, en particulier par le comportement des dirigeants.",
                  "Concentrez-vous sur le processus, sans blâmer, et veillez à ce que vous puissiez vous exprimer en toute sécurité.",
                  "Les outils fonctionnent mieux lorsque la confiance et l’apprentissage basé sur les données passent avant tout."
                ]
              }
            },
            {
              "id": "W2.4",
              "order": 4,
              "title": "Votre premier projet d'amélioration",
              "objective": "Utilisez une histoire simple de style A3 pour planifier une petite amélioration sûre.",
              "content": {
                "why": "Un petit premier projet renforce la confiance, crée une victoire visible et enseigne la méthode sans vous submerger. Cela vous donne également des preuves pour persuader les autres.",
                "what": "Un bon premier projet est de petite envergure, mesurable, suffisamment riche en données pour être étudié, important pour le client, sous votre influence et réalisable en quatre à huit semaines. Utilisez DMAIC ou un simple cycle planifier-faire-vérifier-agir. Une charte d'une page indique le problème, l'objectif, la portée, l'équipe, les mesures et le calendrier.",
                "how": [
                  "Choisissez un problème récurrent dans votre propre espace de travail.",
                  "Écrivez un énoncé du problème avec des preuves : quoi, où, quand et combien.",
                  "Fixez-vous un objectif mesurable et une base de référence.",
                  "Cartographiez le processus et trouvez une cause profonde probable.",
                  "Testez un petit changement, mesurez le résultat et standardisez ce qui fonctionne."
                ],
                "where": "Utilisez cette approche pour un transfert de ticket d'assistance, une étape d'enregistrement en clinique, un processus de retour au détail ou un rapport toujours en retard. Exemple : une équipe de support a 20 % de tickets rouverts car des informations clés sont manquantes. L'équipe ajoute un champ obligatoire, le teste pendant deux semaines et réduit les retouches à 8 %.",
                "when_not": "Ne commencez pas par un problème politiquement sensible, interfonctionnel, à forte intensité de capital ou mal mesuré. Ne choisissez pas un projet pour lequel vous n’avez aucune influence sur le processus ou aucun accès aux données.",
                "common_mistakes": [
                  "Portée trop grande pour un premier projet.",
                  "Aucune référence, donc l’équipe ne peut pas prouver d’amélioration.",
                  "Commencer par une solution préférée plutôt qu’un problème et des données."
                ],
                "quick_check": [
                  {
                    "q": "Qu’est-ce qu’un bon premier projet d’amélioration ?",
                    "answer": "Petite portée, mesurable, pertinent pour le client et réalisable en quelques semaines.",
                    "explanation": "Un premier projet doit être suffisamment petit pour être terminé et tirer des leçons."
                  },
                  {
                    "q": "Pourquoi une base de référence est-elle importante ?",
                    "answer": "Il montre les performances actuelles et vous permet de prouver si le changement a fonctionné.",
                    "explanation": "Sans base de référence, les allégations d’amélioration ne sont que des opinions."
                  },
                  {
                    "q": "Que devez-vous faire après la réussite d’un projet pilote ?",
                    "answer": "Standardisez le changement et affectez un propriétaire pour le surveiller.",
                    "explanation": "La normalisation et l’appropriation font durer les gains."
                  }
                ],
                "recap": [
                  "Commencez petit, mesurez la ligne de base et terminez en quelques semaines.",
                  "Utilisez une cause fondamentale et un changement testé plutôt qu’une refonte radicale.",
                  "Standardisez la victoire et partagez le résultat."
                ]
              }
            }
          ]
        }
      ],
      "coverageChecklist": [
        {
          "topic": "Histoire (Motorola, GE)",
          "lessons": [
            "W1.1"
          ]
        },
        {
          "topic": "Les bases de la qualité",
          "lessons": [
            "W1.2"
          ]
        },
        {
          "topic": "Coût de mauvaise qualité",
          "lessons": [
            "W1.2"
          ]
        },
        {
          "topic": "Clients (VOC, CTQ)",
          "lessons": [
            "W1.3"
          ]
        },
        {
          "topic": "8 déchets",
          "lessons": [
            "W2.1"
          ]
        },
        {
          "topic": "Variation",
          "lessons": [
            "W1.4"
          ]
        },
        {
          "topic": "Défauts",
          "lessons": [
            "W1.4"
          ]
        },
        {
          "topic": "DMAIC en aperçu",
          "lessons": [
            "W1.5"
          ]
        },
        {
          "topic": "Rôles",
          "lessons": [
            "W2.2"
          ]
        },
        {
          "topic": "Culture",
          "lessons": [
            "W2.3"
          ]
        }
      ],
      "project": {
        "title": "Nettoyer un transfert client",
        "brief": "Choisissez un transfert qui vous appartient (par exemple, un transfert de patient, un transfert de commande ou un ticket d'assistance). Cartographiez ce qui se passe, identifiez deux gaspillages, mesurez la durée du transfert, testez un petit changement et confirmez le résultat."
      },
      "exam": {
        "questions": 25,
        "passingScore": 80,
        "format": "25 questions à choix multiples avec quatre options et explications."
      },
      "cheatSheet": [
        "COPQ = prévention + évaluation + échec interne + coûts d'échec externe",
        "VOC = voix du client ; CTQ = essentiel à la qualité, une exigence client mesurable",
        "DMAIC = Définir, Mesurer, Analyser, Améliorer, Contrôler",
        "8 déchets = transport, inventaire, mouvement, attente, surproduction, surtraitement, défauts, compétences"
      ],
      "nextChecklist": [
        "Je peux expliquer Lean vs Six Sigma en une phrase chacun.",
        "Je peux nommer les phases DMAIC dans l'ordre.",
        "Je peux repérer au moins trois déchets dans mon propre espace de travail.",
        "Je peux expliquer ce que signifient VOC et CTQ."
      ]
    },
    {
      "id": "yellow",
      "name": "Ceinture jaune",
      "level": 2,
      "color": "yellow",
      "icon": "fa-certificate",
      "lessonTarget": "15-17",
      "studyTime": "15-20 heures",
      "audience": "Membres de l'équipe, superviseurs et propriétaires de processus qui soutiennent les projets Green Belt et Black Belt.",
      "prerequisites": "Ceinture blanche ou sensibilisation à la qualité de base équivalente.",
      "previousRecap": "Récapitulatif de la ceinture blanche : la qualité signifie répondre aux exigences des clients ; le gaspillage et la variation créent des défauts et des coûts ; DMAIC est la voie d’amélioration ; chacun a un rôle.",
      "outcomes": [
        "Cartographier un processus avec SIPOC et une cartographie des processus",
        "Construire une charte de projet de base et une fiche de collecte de données",
        "Utilisez Pareto, l'arête de poisson, les 5 pourquoi, les feuilles de contrôle et les graphiques de base",
        "Contribuer au brainstorming, aux 5S et à l'amélioration en équipe",
        "Expliquer comment un plan de contrôle et une carte de contrôle de base soutiennent une amélioration"
      ],
      "modules": [
        {
          "id": "yellow-1",
          "number": 1,
          "title": "Pensée processus",
          "duration": "70 minutes",
          "summary": "Considérez le travail comme un processus avec les fournisseurs, les intrants, les étapes, les extrants et les clients. Apprenez à définir les limites du processus et à dessiner ce qui se passe réellement, et non ce que les gens pensent.",
          "lessons": [
            {
              "id": "Y1.1",
              "order": 1,
              "title": "Pensée processus",
              "objective": "Expliquez les entrées, les sorties, les limites et le client d'un processus.",
              "content": {
                "why": "Le travail se déroule à travers des processus et non par des tâches isolées. Voir l'ensemble du processus vous aide à déterminer où la valeur est créée, où les retards entrent et où les défauts sont transmis à la personne suivante.",
                "what": "Un processus est un ensemble d'étapes qui transforment les entrées en sorties pour un client. Les intrants comprennent les matériaux, les informations, les personnes et l’énergie. Les résultats incluent des produits, des services et des informations. Un processus a des limites, des fournisseurs, des clients, des transferts et généralement un goulot d'étranglement. La pensée processus se concentre sur le flux et la valeur client plutôt que sur les départements ou les individus.",
                "how": [
                  "Nommez le processus et son objectif en une phrase.",
                  "Définissez les limites de début et de fin.",
                  "Énumérez les principales entrées et sorties.",
                  "Identifiez les fournisseurs et les clients, y compris les internes.",
                  "Parcourez le processus et marquez les étapes, les transferts et les retards à valeur ajoutée.",
                  "Choisissez un domaine problématique à étudier avec des données."
                ],
                "where": "Utilisez la pensée processus partout où le travail se répète. Dans le domaine de la santé, suivez un patient de son admission à sa sortie. Dans le commerce de détail, suivez une commande du clic jusqu'à la livraison. En informatique, suivez un incident du signalement à la résolution. En banque, suivez un prêt depuis la demande jusqu'au financement. En éducation, suivre un étudiant de sa candidature à son inscription.",
                "when_not": "N’utilisez pas la pensée processus pour une tâche ponctuelle et unique sans étapes répétables. Ne cartographiez pas à un niveau si bas que l'équipe se noie dans les détails et perd la vue du client.",
                "common_mistakes": [
                  "Cartographier le processus idéal plutôt que le processus réel.",
                  "Ignorer les transferts, où les retards et les erreurs se concentrent souvent.",
                  "Fixer des limites si larges que le projet ne peut pas être achevé."
                ],
                "quick_check": [
                  {
                    "q": "Quelles sont les trois parties fondamentales de tout processus ?",
                    "answer": "Entrées, étapes du processus et sorties.",
                    "explanation": "Un processus transforme les entrées en sorties pour un client."
                  },
                  {
                    "q": "Pourquoi les transferts sont-ils importants dans la réflexion processus ?",
                    "answer": "Ce sont des points communs où se produisent des retards, des erreurs et des pertes d’informations.",
                    "explanation": "Le travail attend souvent ou change de mains aux frontières départementales."
                  },
                  {
                    "q": "Une équipe cartographie un processus depuis le premier contact client jusqu'à la facture finale. Qu’ont-ils défini ?",
                    "answer": "Les limites du processus.",
                    "explanation": "Les limites indiquent où commence et se termine le processus."
                  }
                ],
                "recap": [
                  "Un processus transforme les entrées en sorties pour un client.",
                  "Les limites, les fournisseurs, les clients et les transferts définissent la vue du processus.",
                  "Cartographiez le processus réel, pas le processus idéal."
                ]
              }
            },
            {
              "id": "Y1.2",
              "order": 2,
              "title": "SIPOC",
              "objective": "Construisez un diagramme Fournisseurs, Entrées, Processus, Sorties, Clients.",
              "content": {
                "why": "SIPOC donne à une équipe une vue d'une page d'un processus et de ses limites avant une cartographie détaillée. Cela aligne tout le monde sur le périmètre et évite que le projet ne dérive.",
                "what": "SIPOC signifie Fournisseurs, Entrées, Processus, Sorties et Clients. Les fournisseurs fournissent les intrants. Le processus transforme ces entrées en quatre à sept étapes de haut niveau. Les résultats vont aux clients, qui peuvent être internes ou externes. SIPOC est un outil de définition de la portée, et non un organigramme détaillé.",
                "how": [
                  "Écrivez le nom et le but du processus.",
                  "Définissez les points de début et de fin.",
                  "Répertoriez les sorties et les clients qui les reçoivent.",
                  "Répertoriez les intrants et les fournisseurs qui les fournissent.",
                  "Décrivez le processus en quatre à sept étapes de haut niveau, dans l'ordre.",
                  "Examinez le diagramme avec le propriétaire du processus et le personnel de première ligne."
                ],
                "where": "Utilisez SIPOC au début d'un projet DMAIC, lors d'un atelier de cadrage ou lorsque plusieurs services ont besoin d'une vue partagée. Pour la sortie des patients, les fournisseurs peuvent être le personnel de la pharmacie, du laboratoire et du service ; les entrées sont les médicaments, les résultats des tests et les critères de sortie ; les résultats sont le résumé de sortie, les médicaments et le rendez-vous de suivi ; les clients sont le patient, la famille et le prestataire de soins primaires.",
                "when_not": "N'utilisez pas SIPOC pour une analyse détaillée des causes profondes ; utilisez une carte de processus, une arête de poisson ou 5 pourquoi. Ne répertoriez pas chaque micro-étape, sinon vous perdez la vue de haut niveau.",
                "common_mistakes": [
                  "Transformer la colonne de processus en un organigramme détaillé.",
                  "Confondre les clients internes et externes.",
                  "Construire le SIPOC seul et ne jamais le valider avec les personnes qui font le travail."
                ],
                "quick_check": [
                  {
                    "q": "Que signifie SIPOC ?",
                    "answer": "Fournisseurs, intrants, processus, résultats, clients.",
                    "explanation": "SIPOC est un outil de cadrage de processus de haut niveau."
                  },
                  {
                    "q": "Combien d’étapes de processus un SIPOC doit-il généralement afficher ?",
                    "answer": "Quatre à sept étapes de haut niveau.",
                    "explanation": "SIPOC reste à un niveau élevé ; trop de détails va à l’encontre de son objectif."
                  },
                  {
                    "q": "Qui sont les clients d’un SIPOC ?",
                    "answer": "Les personnes ou les groupes qui reçoivent les résultats du processus, internes ou externes.",
                    "explanation": "Les clients peuvent être en dehors de l'organisation ou dans le service voisin."
                  }
                ],
                "recap": [
                  "SIPOC résume les fournisseurs, les intrants, les processus, les extrants et les clients.",
                  "Utilisez quatre à sept étapes de haut niveau et des limites claires.",
                  "Validez le SIPOC avec le propriétaire du processus et le personnel de première ligne."
                ]
              }
            },
            {
              "id": "Y1.3",
              "order": 3,
              "title": "Cartographie des processus",
              "objective": "Créez un couloir ou un organigramme et signalez les transferts et les points de décision.",
              "content": {
                "why": "Une cartographie des processus montre comment le travail se déroule réellement, y compris les décisions, les transferts et les boucles de reprise. Cela rend visibles les retards et les points d’échec afin que l’équipe puisse les cibler.",
                "what": "Un organigramme utilise des symboles standard : un ovale pour le début et la fin, un rectangle pour une étape du processus, un losange pour une décision et un D pour le retard. Une carte à couloirs ajoute des couloirs pour chaque personne ou service, ce qui rend les transferts évidents. Un transfert est tout transfert de travail entre des personnes ou des groupes. Les boucles de retravail montrent où le travail recule.",
                "how": [
                  "Définissez le début et la fin du processus.",
                  "Parcourez le processus et énumérez les étapes dans l’ordre dans lequel elles se produisent réellement.",
                  "Attribuez chaque étape à un couloir pour la personne ou le service qui l'effectue.",
                  "Ajoutez des points de décision, des transferts, des retards et des boucles de retouche.",
                  "Validez la carte avec le personnel de première ligne.",
                  "Marquez les étapes qui ajoutent de la valeur et celles qui créent du gaspillage."
                ],
                "where": "Utilisez des schémas de processus pour tout processus récurrent présentant des retards, des erreurs ou une propriété peu claire. Dans un centre de support, un ticket passe du client au tri, puis à l'affectation, à l'enquête et à la résolution. Le transfert du niveau un au niveau deux ajoute souvent de l'attente, et les informations manquantes créent une boucle de retravail. Dans le domaine des soins de santé, cartographiez le transfert d'un patient du service des urgences vers un service pour voir l'attente et la saisie de données en double.",
                "when_not": "Ne passez pas des semaines à cartographier un processus qui est sur le point d'être remplacé. Ne créez pas de carte détaillée si l'équipe n'a besoin que d'une portée de haut niveau ; utilisez plutôt SIPOC.",
                "common_mistakes": [
                  "Cartographier le processus officiel plutôt que le processus réel.",
                  "Laisser de côté les transferts et les boucles de retravail.",
                  "Cartographie à un niveau qui ne répond pas à la question du projet."
                ],
                "quick_check": [
                  {
                    "q": "Que représente un symbole de diamant sur un organigramme ?",
                    "answer": "Un point de décision.",
                    "explanation": "Les diamants montrent où le processus bifurque en fonction d'une condition."
                  },
                  {
                    "q": "Qu'est-ce qu'un transfert ?",
                    "answer": "Un transfert de travail d’une personne ou d’un groupe à une autre.",
                    "explanation": "Les transferts sont des sources courantes de retard et de perte d’informations."
                  },
                  {
                    "q": "Pourquoi utiliser des couloirs ?",
                    "answer": "Pour montrer qui effectue chaque étape et rendre les transferts visibles.",
                    "explanation": "Les couloirs organisent les étapes par rôle ou par service."
                  }
                ],
                "recap": [
                  "Les cartes de processus montrent le flux réel, y compris les décisions, les transferts et les retouches.",
                  "Les couloirs clarifient la propriété et exposent les retards de transfert.",
                  "Validez la carte avec les personnes qui effectuent les travaux."
                ]
              }
            }
          ]
        },
        {
          "id": "yellow-2",
          "number": 2,
          "title": "DMAIC, chartes et contrôle",
          "duration": "90 minutes",
          "summary": "Approfondissez le DMAIC et découvrez les questions de base de la charte : pourquoi le projet existe, quelle est sa portée, comment le succès est mesuré et qui est responsable. Terminez par la phase de contrôle pour que le gain soit conservé après la clôture du projet.",
          "lessons": [
            {
              "id": "Y2.1",
              "order": 1,
              "title": "DMAIC en détail",
              "objective": "Énumérez les activités et les livrables clés de chaque phase DMAIC.",
              "content": {
                "why": "Les ceintures jaunes doivent savoir ce qui se passe dans chaque phase DMAIC et quel résultat est attendu. Ces connaissances vous aident à contribuer à un travail utile et empêchent l'équipe de sauter des étapes critiques.",
                "what": "Définir produit la charte, les exigences du client, le SIPOC, l'équipe, le problème et l'objectif. Measure produit un plan de collecte de données, des données de référence et une vérification de base de la qualité des mesures. Analyse produit des cartes de processus, des outils de causes profondes, des graphiques et des causes validées. Améliorer produit des solutions testées, un pilote et un plan de mise en œuvre. Le contrôle produit un plan de contrôle, un travail standard, une surveillance et un plan de réponse.",
                "how": [
                  "Compléter les principaux livrables de la phase en cours.",
                  "Passez en revue les livrables avec le sponsor et le propriétaire du processus.",
                  "Organisez un examen de porte et décidez si vous souhaitez continuer.",
                  "Documentez les décisions, les risques et les actions ouvertes.",
                  "Transférer le résultat approuvé dans la phase suivante."
                ],
                "where": "Utilisez DMAIC pour améliorer un processus existant. Un laboratoire avec des rapports tardifs définit le problème et l'objectif, mesure la ligne de base, analyse le ramassage et le traitement par lots des coursiers, s'améliore avec une lecture de code-barres et contrôle avec un graphique quotidien et un propriétaire. Utilisez la même logique de phase dans les domaines bancaire, de la vente au détail, de la fabrication, de l'informatique et de l'éducation.",
                "when_not": "N'utilisez pas DMAIC pour concevoir un tout nouveau processus ; utilisez DMADV. N'exécutez pas un projet DMAIC complet pour une solution simple et évidente ; utilisez un PDCA ou un Kaizen rapide. Pour un problème de sécurité urgent, commencez par contenir le problème.",
                "common_mistakes": [
                  "Sauter Mesurer et passer de Définir à Analyser.",
                  "Traiter l’analyse comme un débat d’opinions plutôt que de preuves.",
                  "Clôture du projet sans plan de contrôle ni propriétaire de processus."
                ],
                "quick_check": [
                  {
                    "q": "Quelle phase DMAIC produit la ligne de base ?",
                    "answer": "Mesure.",
                    "explanation": "Measure définit la métrique et collecte les données de base."
                  },
                  {
                    "q": "Qu’est-ce qu’un examen de porte ?",
                    "answer": "Un point de contrôle où l'équipe et le sponsor décident si la phase est terminée et si le projet doit se poursuivre.",
                    "explanation": "Les examens de porte empêchent les travaux faibles d’avancer."
                  },
                  {
                    "q": "Quelle phase prouve qu’une solution a fonctionné ?",
                    "answer": "Améliorez-vous, avec un pilote et une mesure avant-après.",
                    "explanation": "Améliorer teste le changement ; Le contrôle le maintient alors."
                  }
                ],
                "recap": [
                  "Chaque phase DMAIC comporte des livrables spécifiques et un examen de porte.",
                  "Mesurer et analyser permettent au projet de s'appuyer sur des données probantes.",
                  "Le contrôle est nécessaire pour que l’amélioration dure."
                ]
              }
            },
            {
              "id": "Y2.2",
              "order": 2,
              "title": "Bases de la charte de projet",
              "objective": "Rédigez un énoncé du problème, un objectif, une portée, une équipe et un plan d'étape.",
              "content": {
                "why": "Une charte de projet est le contrat entre l'équipe et le sponsor. Cela évite les dérives, clarifie la responsabilité et donne à chacun une définition commune du succès.",
                "what": "Une charte comprend l'analyse de rentabilisation, un énoncé du problème, un objectif mesurable, les limites du champ d'application et hors du champ d'application, les rôles de l'équipe, les jalons, les mesures, les contraintes, les hypothèses et les approbations. Un bon énoncé du problème décrit quoi, où, quand et combien, sans nommer de cause ni de solution. Un bon objectif est spécifique, mesurable, réalisable, pertinent et limité dans le temps.",
                "how": [
                  "Rédigez l’énoncé du problème avec des preuves de base.",
                  "Écrivez un objectif mesurable et une date cible.",
                  "Définissez ce qui est dans la portée et explicitement ce qui est hors de portée.",
                  "Nommez le sponsor, le propriétaire du processus, le chef d'équipe et les membres de l'équipe.",
                  "Fixez des jalons pour chaque phase DMAIC.",
                  "Définissez la métrique principale et obtenez l’approbation du sponsor."
                ],
                "where": "Utilisez une charte pour chaque projet d’amélioration, notamment transversal. Exemple : « Vingt pour cent des tickets d'assistance sont rouverts car les informations requises sont manquantes. » L’objectif pourrait être de réduire le taux de réouverture en dessous de 8 % en huit semaines. La portée est le formulaire de prise de ticket ; le remplacement du système CRM est hors de portée.",
                "when_not": "Ne créez pas une charte complète pour une petite solution qui prend une heure ; utilisez une simple liste de tâches. Ne laissez pas la charte devenir un document rédigé une seule fois et jamais revu.",
                "common_mistakes": [
                  "Une vague déclaration de problème telle que « les billets sont mauvais ».",
                  "Mettre une solution préférée dans l’énoncé du problème.",
                  "Aucune référence, aucune mesure ou aucun propriétaire de processus nommé."
                ],
                "quick_check": [
                  {
                    "q": "Que doit contenir un énoncé de problème ?",
                    "answer": "Quoi, où, quand et combien, avec des preuves.",
                    "explanation": "Un énoncé du problème décrit l'écart, et non la cause ou la solution."
                  },
                  {
                    "q": "Pourquoi définir des éléments hors champ ?",
                    "answer": "Pour éviter toute dérive de la portée et garder le projet concentré.",
                    "explanation": "Des limites explicites aident l’équipe à dire non à un travail sans rapport."
                  },
                  {
                    "q": "Qui doit approuver la charte ?",
                    "answer": "Le sponsor, avec la contribution du propriétaire du processus.",
                    "explanation": "L’approbation du sponsor confirme l’autorité, les ressources et les attentes."
                  }
                ],
                "recap": [
                  "Une charte définit le problème, l'objectif, la portée, l'équipe, les mesures et les jalons.",
                  "Gardez les causes et les solutions en dehors de l’énoncé du problème.",
                  "Obtenez l’approbation du sponsor et revisitez la charte lors des examens aux portes."
                ]
              }
            },
            {
              "id": "Y2.3",
              "order": 3,
              "title": "Plans de contrôle et SPC de base",
              "objective": "Élaborez un plan de contrôle et lisez un tableau de contrôle de base afin que l’amélioration soit durable.",
              "content": {
                "why": "Les améliorations diminuent lorsque tout le monde revient à l’ancienne méthode. La phase de contrôle protège le gain en rendant la nouvelle méthode visible, mesurable, appropriée et facile à suivre. Un plan de contrôle et une simple carte de contrôle indiquent au propriétaire du processus quand agir et quand laisser le processus tranquille.",
                "what": "Un plan de contrôle est un accord d'une page qui nomme la mesure, l'objectif ou la spécification, comment et à quelle fréquence elle est mesurée, à qui elle appartient et que faire lorsqu'elle dépasse les limites. Une carte de contrôle trace la métrique au fil du temps avec une ligne centrale et des limites afin que l'équipe puisse séparer la variation normale d'un signal réel. Pour les données continues, un graphique d'individus et de plage mobile (I-MR) est un point de départ courant ; pour le décompte des défauts ou des réussites/échecs, un tableau P ou C convient. Le travail standard, la gestion visuelle et la correction des erreurs (poka-yoke) soutiennent le plan en faisant de la bonne méthode la méthode la plus simple.",
                "how": [
                  "Convenez d’une métrique principale et de sa cible ou de ses spécifications.",
                  "Définissez la méthode de mesure, la taille de l’échantillon, la fréquence et le propriétaire des données.",
                  "Tracez une analyse ou une carte de contrôle et calculez les limites uniquement une fois que le processus est stable.",
                  "Rédigez un plan de réaction indiquant qui fait quoi lorsqu'un signal apparaît.",
                  "Mettez à jour le travail standard, la formation et les contrôles visuels pour correspondre à la nouvelle méthode.",
                  "Remettez le plan au propriétaire du processus et examinez-le à une cadence fixe."
                ],
                "where": "Utilisez des plans de contrôle après chaque amélioration, pas seulement dans la fabrication. Exemple : une clinique réduit les absences aux rendez-vous avec des appels de rappel. Le plan de contrôle suit le taux de non-présentation chaque semaine, nomme le responsable de la réception comme propriétaire et exige une réunion chaque fois que deux semaines dépassent 8 %. Une équipe logicielle suit les défauts échappés par version sur une carte P et examine la règle lorsqu'un signal apparaît. Dans une usine, un tableau I-MR du volume de remplissage indique quand ajuster le remplissage.",
                "when_not": "Ne calculez pas les limites de contrôle à partir d'un processus instable ou de produits et d'équipes mélangés ; stratifier et stabiliser d’abord. Ne transformez pas le plan de contrôle en un long classeur que personne ne lit. Ne réagissez pas sur chaque point ; utilisez les règles du graphique. Ne définissez pas de plan de contrôle sans propriétaire nommé et sans plan de réaction.",
                "common_mistakes": [
                  "Aucun propriétaire de processus nommé ni aucun plan de réaction.",
                  "Mesurer une métrique différente de celle améliorée par le projet.",
                  "Recalculer les limites de contrôle à chaque fois qu'un point semble mauvais.",
                  "Traiter la variation de cause commune comme une cause particulière et procéder à un ajustement excessif.",
                  "Laisser le plan de contrôle dans le dossier du projet plutôt que dans le processus."
                ],
                "quick_check": [
                  {
                    "q": "Qu'est-ce qui fait partie d'un plan de contrôle ?",
                    "answer": "La métrique, la cible ou la spécification, la méthode de mesure, la fréquence, le propriétaire et le plan de réaction.",
                    "explanation": "Un plan de contrôle rend explicite la surveillance et la réponse."
                  },
                  {
                    "q": "Pourquoi les limites de contrôle devraient-elles attendre que le processus soit stable ?",
                    "answer": "Les limites d'un processus instable décrivent l'instabilité et non la variation normale.",
                    "explanation": "Stabilisez et stratifiez d’abord, puis fixez des limites."
                  },
                  {
                    "q": "A quoi sert un plan de réaction ?",
                    "answer": "Il indique au propriétaire quoi vérifier et faire lorsque le graphique signale un changement.",
                    "explanation": "Un signal sans réponse ne maintient pas le gain."
                  }
                ],
                "recap": [
                  "Les plans de contrôle nomment la métrique, la méthode, la fréquence, le propriétaire et le plan de réaction.",
                  "Les cartes de contrôle séparent les variations normales des signaux réels.",
                  "Le travail standard et la correction des erreurs font que la nouvelle méthode perdure."
                ]
              }
            }
          ]
        },
        {
          "id": "yellow-3",
          "number": 3,
          "title": "Données et graphiques de base",
          "duration": "90 minutes",
          "summary": "Collectez des données fiables et affichez-les honnêtement. Entraînez-vous à vérifier les feuilles de contrôle, les graphiques d'exécution, les histogrammes, les graphiques à barres et l'analyse de Pareto.",
          "lessons": [
            {
              "id": "Y3.1",
              "order": 1,
              "title": "Types de données",
              "objective": "Distinguer les données continues et discrètes et choisir un résumé adapté.",
              "content": {
                "why": "Le type de données détermine quels résumés, graphiques et tests sont valides. Traiter les données catégorielles comme des étiquettes continues ou moyennes conduit à des conclusions erronées.",
                "what": "Les données continues peuvent prendre n'importe quelle valeur dans une plage et sont mesurées : temps, poids, longueur, température ou coût. Les données discrètes comptent les catégories ou les occurrences : réussite ou échec, type de défaut, nombre de plaintes ou nombre de patients. Les données discrètes peuvent être binaires, comptées ou ordinales. Les données continues sont résumées avec la moyenne, la médiane, l'écart type et la plage ; les données discrètes sont résumées avec les décomptes, les proportions, les pourcentages et le mode.",
                "how": [
                  "Énoncez la question à laquelle vous devez répondre.",
                  "Identifiez si les données sont continues ou discrètes.",
                  "Choisissez un résumé qui correspond au type de données.",
                  "Vérifiez comment les données seront enregistrées et vérifiées.",
                  "Tracez un graphique qui correspond à la question et au type de données."
                ],
                "where": "Dans la fabrication, le diamètre est continu tandis que le type de défaut est discret. Dans le domaine des soins de santé, la durée du séjour est continue tandis que la réadmission, oui ou non, est discrète. Dans le commerce de détail, la valeur de la commande est continue tandis que le motif du retour est catégorique. En informatique, le temps de réponse est continu tandis que la gravité est ordinale. Utilisez le type de données pour choisir des résumés avant d'ouvrir un outil graphique.",
                "when_not": "Ne calculez pas la moyenne des étiquettes de catégorie telles que la couleur ou le département. N'utilisez pas d'histogramme pour les catégories. Ne transformez pas les données continues en réussite ou en échec trop tôt, car vous perdez la capacité de voir les variations.",
                "common_mistakes": [
                  "Faire la moyenne des catégories et signaler un nombre dénué de sens.",
                  "Utiliser un graphique qui ne correspond pas au type de données.",
                  "Mélanger des unités ou des périodes de temps dans un même résumé."
                ],
                "quick_check": [
                  {
                    "q": "Quelles sont les données continues ?",
                    "answer": "Il est temps de résoudre un ticket.",
                    "explanation": "Le temps est mesuré sur une échelle continue."
                  },
                  {
                    "q": "Une enquête enregistre la satisfaction comme mauvaise, passable ou bonne. De quel type de données s’agit-il ?",
                    "answer": "Données catégorielles ordinales.",
                    "explanation": "Les catégories ont un ordre, mais la distance qui les sépare n'est pas une quantité mesurée."
                  },
                  {
                    "q": "Qu'est-ce qu'un bon résumé des types de défauts ?",
                    "answer": "Nombres ou pourcentages par catégorie, affichés dans un graphique à barres ou Pareto.",
                    "explanation": "Les données catégorielles sont résumées par fréquence."
                  }
                ],
                "recap": [
                  "Les données continues sont mesurées ; les données discrètes sont comptées ou catégorisées.",
                  "Faites correspondre le résumé et le graphique au type de données.",
                  "Ne faites pas la moyenne des étiquettes et ne masquez pas les variations continues trop tôt."
                ]
              }
            },
            {
              "id": "Y3.2",
              "order": 2,
              "title": "Feuilles de contrôle",
              "objective": "Concevez un formulaire simple qui facilite l’enregistrement et la vérification des données.",
              "content": {
                "why": "De bonnes données commencent par un bon enregistrement. Une feuille de contrôle rend la collecte cohérente, réduit les erreurs et facilite la vérification lorsque les données sont examinées ultérieurement.",
                "what": "Une feuille de contrôle est un formulaire structuré permettant d'enregistrer des données en temps réel. Il définit quoi enregistrer, quand, où, qui et comment. Les types courants incluent des feuilles de pointage pour les types de défauts, des feuilles de localisation, des feuilles de fréquence et des listes de contrôle simples. Une feuille de contrôle utile est courte, sans ambiguïté et comprend la date, l'heure, l'équipe, le collecteur, le processus et des définitions claires pour chaque catégorie.",
                "how": [
                  "Définissez la question et les données nécessaires pour y répondre.",
                  "Répertoriez les catégories ou les colonnes.",
                  "Rédigez une définition claire et un exemple pour chaque catégorie.",
                  "Ajoutez des champs de date, d’heure, d’équipe, de collecteur et de processus.",
                  "Pilotez le formulaire avec quelques utilisateurs et révisez-le.",
                  "Vérifiez quotidiennement les entrées et résolvez rapidement les enregistrements peu clairs."
                ],
                "where": "Utilisez des feuilles de contrôle pour le nombre de défauts de fabrication, les temps d'attente dans le secteur de la santé, les motifs de retour dans le commerce de détail, les catégories de tickets en informatique et les soumissions tardives dans le secteur de l'éducation. Ils sont particulièrement utiles lorsque le personnel de première ligne, très occupé, doit enregistrer des données pendant le travail plutôt qu'après.",
                "when_not": "N'utilisez pas de feuille de contrôle pour des données qui existent déjà de manière fiable dans un système. Ne créez pas un formulaire de cinquante colonnes que personne ne remplira. Ne collectez pas de données sans définitions, car différentes personnes enregistreront différemment le même événement.",
                "common_mistakes": [
                  "Catégories qui se chevauchent ou ne s’excluent pas mutuellement.",
                  "Pas de définitions, donc les collectionneurs interprètent les catégories différemment.",
                  "Un formulaire si complexe que les gens sautent des champs ou inventent des raccourcis."
                ],
                "quick_check": [
                  {
                    "q": "Quel est l’objectif principal d’une feuille de contrôle ?",
                    "answer": "Pour enregistrer les données de manière cohérente en temps réel.",
                    "explanation": "Un formulaire standard réduit les variations et les erreurs dans la collecte de données."
                  },
                  {
                    "q": "Que doit contenir chaque feuille de contrôle ?",
                    "answer": "Effacez les catégories, les définitions, la date et l’heure, le collecteur et le processus.",
                    "explanation": "Ces champs rendent les données traçables et vérifiables."
                  },
                  {
                    "q": "Une équipe découvre que 30 % des entrées de défauts se trouvent dans la catégorie « autres ». Que devraient-ils faire ?",
                    "answer": "Passez en revue les « autres » commentaires et affinez les catégories.",
                    "explanation": "Une grande catégorie « autre » signifie généralement que des catégories sont manquantes ou peu claires."
                  }
                ],
                "recap": [
                  "Les feuilles de contrôle standardisent la collecte de données en temps réel.",
                  "Gardez le formulaire simple, définissez chaque catégorie et pilotez-le.",
                  "Vérifiez les données quotidiennement et affinez les catégories lorsque le nombre « autres » augmente."
                ]
              }
            },
            {
              "id": "Y3.3",
              "order": 3,
              "title": "Graphiques de base",
              "objective": "Choisissez et interprétez des diagrammes de séquences, des histogrammes et des graphiques à barres.",
              "content": {
                "why": "Les graphiques révèlent des modèles que les tableaux cachent. Le bon graphique aide une équipe à voir rapidement les variations, la répartition et les priorités, sans les induire en erreur.",
                "what": "Un diagramme de séquences trace les données par ordre chronologique avec une ligne centrale et montre les tendances, les changements, les cycles et les valeurs aberrantes. Un histogramme regroupe les données continues dans des groupes et affiche la forme, le centre, la répartition, les espaces et les valeurs aberrantes. Un graphique à barres compare les nombres ou les valeurs entre les catégories. Choisissez par question : la tendance temporelle utilise un graphique de séquences, la distribution utilise un histogramme et la comparaison de catégories utilise un graphique à barres.",
                "how": [
                  "Énoncez la question à laquelle le tableau doit répondre.",
                  "Identifiez le type de données.",
                  "Choisissez le tableau correspondant.",
                  "Étiquetez les deux axes, les unités et la période de temps.",
                  "Tracez toutes les données dans le bon ordre.",
                  "Recherchez des modèles et vérifiez-les par rapport aux connaissances sur les processus."
                ],
                "where": "Utilisez des diagrammes d'exécution pour les défauts quotidiens, les temps d'attente, les ventes ou les temps de réponse. Utilisez des histogrammes pour les délais de livraison, la durée du séjour des patients ou la durée des appels. Utilisez des graphiques à barres pour les motifs de réclamation, les types de défauts ou les comparaisons régionales. Un diagramme de séquences peut révéler un changement après un nouveau processus ; un histogramme peut révéler deux pics issus de deux décalages.",
                "when_not": "N'utilisez pas d'histogramme pour les données catégorielles. N'utilisez pas de graphique à barres pour une tendance temporelle à moins que le temps ne soit véritablement catégorique. N'utilisez pas de diagramme de séquences pour les catégories non ordonnées et évitez les diagrammes 3D ou circulaires lorsqu'une comparaison précise est importante.",
                "common_mistakes": [
                  "Choisir un graphique qui ne correspond pas au type de données.",
                  "Tronquer un axe pour que les petites différences paraissent grandes.",
                  "Regrouper trop de catégories dans un seul graphique."
                ],
                "quick_check": [
                  {
                    "q": "Quel graphique montre le mieux une tendance au fil du temps ?",
                    "answer": "Un diagramme de parcours.",
                    "explanation": "Exécutez les graphiques en traçant les données dans l'ordre chronologique avec une ligne centrale."
                  },
                  {
                    "q": "Quel graphique montre le mieux la distribution des données continues ?",
                    "answer": "Un histogramme.",
                    "explanation": "Les histogrammes regroupent les valeurs continues dans des groupes."
                  },
                  {
                    "q": "Quel graphique compare le mieux le nombre de plaintes par catégorie ?",
                    "answer": "Un graphique à barres.",
                    "explanation": "Les graphiques à barres comparent les valeurs entre les catégories."
                  }
                ],
                "recap": [
                  "Les graphiques d'exécution montrent les modèles temporels ; les histogrammes montrent les distributions ; les graphiques à barres comparent les catégories.",
                  "Étiquetez les axes, les unités et les périodes.",
                  "Choisissez le graphique en fonction de la question et du type de données, et non par habitude."
                ]
              }
            },
            {
              "id": "Y3.4",
              "order": 4,
              "title": "Analyse Pareto",
              "objective": "Utilisez la règle des 80/20 pour prioriser les quelques causes qui créent l’essentiel du problème.",
              "content": {
                "why": "Toutes les causes ne sont pas égales. L'analyse Pareto aide une équipe à se concentrer sur les quelques causes qui créent l'essentiel du problème au lieu d'essayer de tout résoudre d'un coup.",
                "what": "Le principe de Pareto dit qu’environ 80 % des effets proviennent d’environ 20 % des causes. Un graphique de Pareto est un graphique à barres trié du plus grand au plus petit avec une ligne de pourcentage cumulé. Les barres indiquent la fréquence ; la ligne indique la part du total qui a été prise en compte. Les « quelques personnes vitales » sont les catégories qui contribuent le plus à l'effet.",
                "how": [
                  "Définissez le problème, la période et l’unité de comptage.",
                  "Choisissez des catégories mutuellement exclusives.",
                  "Collectez les décomptes pour chaque catégorie.",
                  "Triez les catégories de la plus grande à la plus petite.",
                  "Calculez chaque pourcentage et le pourcentage cumulé.",
                  "Dessinez les barres et la ligne cumulée.",
                  "Sélectionnez les principales catégories qui atteignent environ 80 % et étudiez-les."
                ],
                "where": "Utilisez Pareto pour les types de défauts, les plaintes des clients, les raisons de temps d'arrêt, les causes de réadmission à l'hôpital, les catégories d'incidents informatiques et les raisons de retour au détail. Exemple : 100 commandes en retard réparties en trafic 40, four 25, chauffeur 20, adresse 10 et autres 5. Les pourcentages cumulés sont 40 %, 65 %, 85 %, 95 % et 100 %, les trois premières catégories représentent donc 85 % du problème.",
                "when_not": "N'utilisez pas Pareto pour des données continues sans créer de catégories significatives. Ne l'utilisez pas lorsque les catégories se chevauchent ou lorsque « autre » est grand. Ne présumez pas que la répartition est exactement de 80/20 et n’ignorez pas un problème de sécurité basse fréquence qui cause toujours de graves dommages.",
                "common_mistakes": [
                  "Laisser les barres non triées.",
                  "Utiliser des catégories qui se chevauchent ou un grand compartiment « autre ».",
                  "Traiter Pareto comme une preuve de cause plutôt que comme un outil de priorisation."
                ],
                "quick_check": [
                  {
                    "q": "Que combine un diagramme de Pareto ?",
                    "answer": "Barres triées et ligne de pourcentage cumulé.",
                    "explanation": "Il montre à la fois la fréquence et la contribution cumulée."
                  },
                  {
                    "q": "Quels sont les « quelques personnes vitales » ?",
                    "answer": "Le petit nombre de catégories qui expliquent l’essentiel de l’effet.",
                    "explanation": "Ce sont les catégories prioritaires à étudier."
                  },
                  {
                    "q": "Un défaut basse fréquence provoque de graves dommages. Pareto devrait-il vous faire l’ignorer ?",
                    "answer": "Non. La gravité et la sécurité peuvent l’emporter sur la fréquence.",
                    "explanation": "Pareto donne la priorité à la fréquence, pas seulement au risque."
                  }
                ],
                "recap": [
                  "Pareto trie les catégories et ajoute une ligne de pourcentage cumulé.",
                  "Concentrez-vous sur les quelques catégories vitales qui créent le plus d’effet.",
                  "Utilisez la gravité et le risque parallèlement à la fréquence."
                ]
              }
            }
          ]
        },
        {
          "id": "yellow-4",
          "number": 4,
          "title": "Cause profonde et bases du Lean",
          "duration": "90 minutes",
          "summary": "Passez des symptômes aux causes en utilisant les arêtes de poisson et les 5 pourquoi, puis éliminez les frictions quotidiennes avec les 5S et la pensée Lean de base.",
          "lessons": [
            {
              "id": "Y4.1",
              "order": 1,
              "title": "Diagramme en arête de poisson",
              "objective": "Réfléchissez aux causes concernant les personnes, les processus, les équipements, les matériaux, les mesures et l'environnement.",
              "content": {
                "why": "Les diagrammes en arête de poisson aident une équipe à réfléchir à de nombreuses causes possibles avant de passer à une seule. Ils organisent la réflexion et exposent les domaines que l’équipe n’a pas pris en compte.",
                "what": "Un diagramme en arête de poisson, ou Ishikawa, place l'effet ou le problème en tête et les causes possibles sur les os. Les catégories courantes sont les personnes, les processus, les équipements, les matériaux, les mesures et l'environnement, souvent appelées les 6M. Les causes se divisent en sous-causes. Le diagramme est un outil de brainstorming et d’organisation ; cela ne prouve pas quelle cause est réelle.",
                "how": [
                  "Écrivez un problème ou un effet spécifique en tête du diagramme.",
                  "Mettez-vous d’accord sur les principales catégories de causes.",
                  "Les idées de brainstorming sont silencieuses pour que les membres silencieux de l'équipe contribuent.",
                  "Placez chaque cause sur l’os concerné.",
                  "Demandez pourquoi ajouter des sous-causes lorsque cela est utile.",
                  "Utilisez le vote par points ou les données pour sélectionner les causes probables.",
                  "Validez les causes sélectionnées avec des données avant d’agir."
                ],
                "where": "Utilisez l'arête de poisson pour les défauts de fabrication, les retards dans les soins de santé, les incidents informatiques, les plaintes des détaillants, les erreurs bancaires et les soumissions tardives dans le domaine de l'éducation. Pour les rapports de laboratoire en retard, les causes peuvent inclure le personnel et la formation sous Personnes, le traitement par lots et le ramassage par courrier sous Processus, les pannes d'imprimante ou d'analyseur sous Équipement, et la circulation ou la météo sous Environnement.",
                "when_not": "N'utilisez pas une arête de poisson comme seule analyse. N'incluez pas les causes sur lesquelles l'équipe ne peut pas influencer et ne laissez pas une personne bruyante dominer la session. Ne confondez pas le problème avec ses causes.",
                "common_mistakes": [
                  "Un énoncé du problème si vaste que le diagramme devient ingérable.",
                  "Écrire des solutions sur les os plutôt que sur les causes.",
                  "Ignorer la validation et traiter chaque idée comme une cause avérée."
                ],
                "quick_check": [
                  {
                    "q": "Qu'est-ce qui se trouve en tête d'un diagramme en arête de poisson ?",
                    "answer": "L’effet ou le problème étudié.",
                    "explanation": "Le chef expose le problème ; les os contiennent des causes possibles."
                  },
                  {
                    "q": "Quelles sont les catégories 6M courantes ?",
                    "answer": "Personnes, processus, équipements, matériaux, mesures et environnement.",
                    "explanation": "Ces catégories incitent à une large recherche des causes."
                  },
                  {
                    "q": "Un diagramme en arête de poisson prouve-t-il la cause profonde ?",
                    "answer": "Non. Il organise les causes possibles qui doivent être validées avec des données.",
                    "explanation": "Fishbone est un outil de brainstorming, pas une preuve."
                  }
                ],
                "recap": [
                  "Fishbone organise les causes possibles autour des 6M.",
                  "Réfléchissez globalement, puis validez les causes probables avec des données.",
                  "Gardez l'effet spécifique et gardez les solutions hors des os."
                ]
              }
            },
            {
              "id": "Y4.2",
              "order": 2,
              "title": "5 pourquoi",
              "objective": "Posez des questions ciblées sur le pourquoi jusqu'à ce que la cause première exploitable soit trouvée.",
              "content": {
                "why": "5 Whys fait passer une équipe des symptômes aux causes profondes exploitables sans statistiques complexes. C’est simple, mais il est facile de faire de mauvais résultats si les réponses sont acceptées sans preuves.",
                "what": "Les 5 Pourquoi sont une technique de questionnement : demandez pourquoi à plusieurs reprises jusqu'à ce que vous atteigniez une cause sur laquelle vous pouvez agir. Ce n’est pas une règle selon laquelle la réponse doit être composée exactement de cinq questions. Commencez par un problème spécifique, vérifiez chaque réponse et arrêtez-vous lorsque la cause est à la fois exploitable et étayée par des preuves. Concentrez-vous sur le processus, et non sur le fait de blâmer les gens, et faites une branche lorsqu'il y a plusieurs causes.",
                "how": [
                  "Énoncez le problème avec les données.",
                  "Demandez pourquoi le problème est survenu.",
                  "Vérifiez la réponse avec des preuves ou des observations.",
                  "Demandez à nouveau pourquoi à propos de la réponse vérifiée.",
                  "Continuez jusqu'à ce que vous atteigniez une cause fondamentale exploitable.",
                  "Testez la cause, corrigez-la et confirmez le résultat."
                ],
                "where": "Utilisez 5 pourquoi après qu'une arête de poisson ou un Pareto ait réduit les causes probables. Exemple : les rapports de laboratoire sont en retard. Pourquoi? Le coursier arrive après la date limite. Pourquoi? Le ramassage est prévu à 17h00 mais les rapports sont prêts à 17h30. Pourquoi? Le laboratoire attend de regrouper tous les tests. Pourquoi? Il n’y a pas de règle de priorité pour les tests statistiques. La cause première est l’absence de règle de priorisation ; le correctif est une coupure de statistiques et une collecte dédiée.",
                "when_not": "N'utilisez pas une seule chaîne de 5 Pourquoi pour un problème complexe avec plusieurs causes interagissantes ; branche à la place. Ne l’utilisez pas lorsque vous n’avez aucune preuve ou lorsque le véritable objectif est de blâmer quelqu’un.",
                "common_mistakes": [
                  "S'arrêter à un symptôme tel que « le personnel était occupé ».",
                  "Accepter des opinions comme des faits sans vérification.",
                  "S'arrêter à « l'erreur humaine » au lieu de demander ce qui a permis l'erreur."
                ],
                "quick_check": [
                  {
                    "q": "Quel est l’objectif des 5 Pourquoi ?",
                    "answer": "Atteindre une cause fondamentale exploitable, et ne pas se contenter de poser cinq questions.",
                    "explanation": "Le chiffre cinq est un guide ; le véritable test est de savoir si la cause est exploitable et vérifiée."
                  },
                  {
                    "q": "Pourquoi faut-il éviter de s'arrêter à « l'erreur humaine » ?",
                    "answer": "Il identifie rarement les conditions du processus qui ont permis l'erreur.",
                    "explanation": "Demandez ce qui, dans le processus, a rendu l'erreur possible ou difficile à détecter."
                  },
                  {
                    "q": "Que faire lorsqu'un problème a plusieurs causes ?",
                    "answer": "Branchez le questionnement et étudiez chaque cause séparément.",
                    "explanation": "Une seule chaîne linéaire peut manquer des causes en interaction."
                  }
                ],
                "recap": [
                  "5 Pourquoi passe du symptôme à la cause vérifiée et exploitable.",
                  "Utilisez des preuves à chaque étape et concentrez-vous sur le processus.",
                  "Branchez lorsque plusieurs causes existent."
                ]
              }
            },
            {
              "id": "Y4.3",
              "order": 3,
              "title": "5S",
              "objective": "Triez, mettez en ordre, faites briller, standardisez et maintenez.",
              "content": {
                "why": "5S crée un lieu de travail propre, organisé et sûr où les déchets et les anomalies sont faciles à détecter. Il prend en charge le travail standard et contribue à la pérennité des améliorations.",
                "what": "Les cinq étapes sont Trier, Mettre en ordre, Briller, Standardiser et Maintenir. Le tri supprime les éléments inutiles. Mis en ordre, tout est clair. Briller signifie nettoyer et inspecter. Standardiser crée des règles, des étiquettes et des normes visuelles. Maintenir les habitudes, les audits et l’appropriation. Certaines organisations ajoutent la sécurité comme sixième S.",
                "how": [
                  "Choisissez un domaine et définissez son objectif.",
                  "Triez les éléments et marquez rouge tout ce qui n’est pas nécessaire.",
                  "Définissez des emplacements, des étiquettes et des limites visuelles.",
                  "Nettoyez la zone et inspectez les problèmes pendant le nettoyage.",
                  "Rédigez des normes avec des photos, des listes de contrôle et des propriétaires.",
                  "Planifiez des audits et examinez régulièrement les résultats."
                ],
                "where": "Utilisez les 5S dans les ateliers de fabrication, les salles de fournitures des hôpitaux, les entrepôts de vente au détail, les succursales bancaires, les salles de classe et les disques informatiques partagés. Exemple : une salle de fournitures d'hôpital supprime les articles périmés, étiquette les bacs par niveau, nettoie et inspecte les étagères, affiche une présentation standard et effectue des audits chaque semaine. Une équipe numérique peut appliquer les mêmes étapes à un Drive partagé ou à une file d’attente de billetterie.",
                "when_not": "N'exécutez pas 5S comme un nettoyage ponctuel sans normes ni propriété. Ne jetez pas d’éléments sans un processus de décision rouge et n’appliquez pas les 5S à une zone qui est sur le point d’être repensée.",
                "common_mistakes": [
                  "Faire le ménage, mais sans jamais établir de normes ou d'habitudes d'audit.",
                  "Les éléments marqués en rouge disparaissent sans décision.",
                  "Juger 5S par l'apparence plutôt que par la sécurité, le flux et le temps de recherche."
                ],
                "quick_check": [
                  {
                    "q": "Quels sont les cinq S dans l’ordre ?",
                    "answer": "Trier, mettre en ordre, briller, normaliser, maintenir.",
                    "explanation": "Chaque étape s’appuie sur la précédente."
                  },
                  {
                    "q": "Que comprend Shine à part le nettoyage ?",
                    "answer": "Inspecter la zone et l’équipement pour déceler toute anomalie.",
                    "explanation": "Le nettoyage est aussi l’occasion de détecter les usures, les fuites et les éléments manquants."
                  },
                  {
                    "q": "Pourquoi le maintien est-il important ?",
                    "answer": "Sans audits, sans propriété et sans habitudes, le quartier retrouve son ancien état.",
                    "explanation": "Sustain transforme les 5S en une routine plutôt qu'en un événement."
                  }
                ],
                "recap": [
                  "5S signifie trier, mettre en ordre, briller, standardiser, maintenir.",
                  "Les normes visuelles et l’appropriation font que le résultat reste fidèle.",
                  "Utilisez 5S pour améliorer la sécurité, le flux et le temps de recherche, pas seulement l'apparence."
                ]
              }
            },
            {
              "id": "Y4.4",
              "order": 4,
              "title": "Lean de base",
              "objective": "Utilisez la valeur, le flux, l’attraction et la perfection pour réduire les attentes et les retouches.",
              "content": {
                "why": "La pensée Lean aide les équipes à améliorer le flux et à réduire les attentes et les retouches sans grands projets d'investissement. Il complète l'accent mis par Six Sigma sur la réduction des variations.",
                "what": "Les cinq principes Lean sont la valeur, la chaîne de valeur, le flux, l'attraction et la perfection. La valeur est définie par le client. La chaîne de valeur est la séquence d'étapes qui créent de la valeur. Le flux signifie que le travail se déroule en douceur, sans retards de traitement par lots. Pull signifie que le travail est déclenché par la demande plutôt que poussé devant elle. La perfection signifie une amélioration continue. Les outils courants incluent le travail standard, la gestion visuelle, le kanban et le flux monobloc.",
                "how": [
                  "Définir la valeur du point de vue du client.",
                  "Cartographiez la chaîne de valeur et identifiez les retards et les gaspillages.",
                  "Améliorez le flux en réduisant la taille des lots et les transferts inutiles.",
                  "Introduisez le pull là où la demande et l’offre le rendent pratique.",
                  "Standardisez la nouvelle méthode et continuez à vous améliorer."
                ],
                "where": "Utilisez Lean dans les secteurs de la fabrication, de la santé, de la vente au détail, de l’informatique, de la banque et de l’éducation. Exemple : une banque regroupe les approbations de prêts, les demandes attendent donc un examen quotidien. La formation croisée et un système de traction quotidien réduisent le délai de livraison de dix jours à quatre. Dans le domaine des soins de santé, le fait de rapprocher les fournitures du point d’utilisation réduit les déplacements et les attentes des infirmières.",
                "when_not": "N’introduisez pas d’attraction là où la demande est très variable ou où l’offre est limitée sans tampons appropriés. Ne supprimez pas les contrôles nécessaires pour accélérer un processus et ne recherchez pas le flux au détriment de la sécurité ou de la qualité.",
                "common_mistakes": [
                  "Considérer le Lean comme un exercice de réduction des coûts ou d’effectifs.",
                  "Installer Kanban sans stabiliser le processus au préalable.",
                  "Ignorer la variabilité de la demande et créer de nouveaux goulots d’étranglement."
                ],
                "quick_check": [
                  {
                    "q": "Quels sont les cinq principes Lean ?",
                    "answer": "Valeur, flux de valeur, flux, attraction et perfection.",
                    "explanation": "Ces principes guident la réduction des déchets et l’amélioration des flux."
                  },
                  {
                    "q": "Que signifie tirer ?",
                    "answer": "Le travail est déclenché par la demande du client plutôt que poussé en avant.",
                    "explanation": "Pull réduit la surproduction et l’excès de travail en cours."
                  },
                  {
                    "q": "Pourquoi la réduction de la taille des lots peut-elle améliorer le flux ?",
                    "answer": "Des lots plus petits réduisent le temps d’attente et accélèrent les retours.",
                    "explanation": "Le travail avance dans le processus de manière plus continue."
                  }
                ],
                "recap": [
                  "Lean améliore la valeur, le flux, l’attraction et la perfection.",
                  "Réduisez la taille des lots et les transferts pour raccourcir les délais.",
                  "Standardisez l’amélioration et accordez la priorité à la sécurité et à la qualité."
                ]
              }
            }
          ]
        },
        {
          "id": "yellow-5",
          "number": 5,
          "title": "Les gens et le travail d'équipe",
          "duration": "50 minutes",
          "summary": "Générez de meilleures idées et aidez une équipe à prendre des décisions sans perdre les voix discrètes ou les preuves.",
          "lessons": [
            {
              "id": "Y5.1",
              "order": 1,
              "title": "Remue-méninges",
              "objective": "Exécutez une génération silencieuse d’idées et un regroupement par affinité avant de juger les idées.",
              "content": {
                "why": "Les bonnes solutions nécessitent de nombreuses idées avant d’être sélectionnées. Le brainstorming génère des options et engage l’équipe, mais seulement lorsqu’il est mené de manière à éviter tout jugement et toute domination précoces.",
                "what": "Le brainstorming signifie générer d’abord de nombreuses idées et les évaluer ensuite. Les méthodes utiles incluent le brainstorming silencieux, le partage à tour de rôle, la rédaction de réflexions et le regroupement par affinité. Les règles sont les suivantes : viser la quantité, retenir les critiques, s'appuyer sur les idées des autres, accueillir les idées folles et maintenir une conversation à la fois. Après avoir généré des idées, regroupez-les et votez avant de les évaluer avec les données.",
                "how": [
                  "Énoncez une question claire pour la session.",
                  "Donnez à chacun cinq à dix minutes pour rédiger ses idées en silence.",
                  "Partagez vos idées à tour de rôle sans les juger.",
                  "Clarifiez uniquement, puis regroupez les idées similaires avec une cartographie d'affinité.",
                  "Utilisez le vote par points pour sélectionner les candidats les plus forts.",
                  "Évaluez les meilleures idées avec des données et un petit test."
                ],
                "where": "Utilisez le brainstorming pour l’analyse des causes profondes, la conception de solutions, la planification de projets et les réunions d’équipe. Exemple : une clinique souhaite réduire l'attente. Les idées se regroupent en planification, personnel, espace et communication. L'équipe vote, puis teste les deux meilleures idées et mesure l'effet.",
                "when_not": "Ne réfléchissez pas lorsque la réponse est fixée par la réglementation, la sécurité ou des données claires. N'utilisez pas le brainstorming pour prendre une décision urgente en matière de sécurité et ne laissez pas un manager dominer ou critiquer les idées pendant la génération.",
                "common_mistakes": [
                  "Juger les idées pendant qu’elles sont encore en train d’être générées.",
                  "Laisser une personne dominer la conversation.",
                  "Se terminant par une liste d'idées mais sans évaluation ni propriétaire."
                ],
                "quick_check": [
                  {
                    "q": "Quelle est la première règle du brainstorming ?",
                    "answer": "Générez des idées sans les juger.",
                    "explanation": "Les critiques précoces réduisent le nombre et la variété des idées."
                  },
                  {
                    "q": "Pourquoi recourir au brainstorming silencieux ?",
                    "answer": "Cela donne aux membres les plus discrets une chance de contribuer et réduit la domination.",
                    "explanation": "Écrire des idées crée d’abord une session plus équilibrée."
                  },
                  {
                    "q": "Que doit-il se passer une fois les idées générées ?",
                    "answer": "Regroupez, votez et évaluez les meilleures idées avec des données.",
                    "explanation": "La génération n’est que la première étape ; la sélection et les tests viennent ensuite."
                  }
                ],
                "recap": [
                  "Générez d’abord de nombreuses idées et jugez plus tard.",
                  "Utilisez la génération silencieuse et le regroupement par affinité pour inclure tout le monde.",
                  "Évaluez les meilleures idées avec des données et un petit test."
                ]
              }
            },
            {
              "id": "Y5.2",
              "order": 2,
              "title": "Travail d'équipe",
              "objective": "Définissez les rôles, les règles de base, les règles de décision et les habitudes de réunion pour une équipe d'amélioration.",
              "content": {
                "why": "L’amélioration est un travail d’équipe. Des rôles clairs, des règles de base et des règles de décision maintiennent les réunions productives et évitent que le projet ne s'enlise dans la confusion.",
                "what": "Une équipe efficace a un objectif clair, des rôles définis, des règles de base, une règle de décision, une cadence de réunion et une sécurité psychologique. Les rôles peuvent inclure celui de responsable, de facilitateur, d’enregistreur, de chronométreur, de propriétaire de données et de sponsor. Les règles de base peuvent couvrir les heures de début et de fin, un intervenant à la fois, le respect et la documentation des décisions. Les règles de décision incluent le consensus, le consentement ou le leader décide après contribution.",
                "how": [
                  "Définir le but de l'équipe et le résultat attendu.",
                  "Attribuez des rôles et confirmez les engagements de temps.",
                  "Convenez de règles de base et d’une règle de décision.",
                  "Établissez un ordre du jour et une cadence de réunion.",
                  "Enregistrez les décisions, les actions, les propriétaires et les dates d'échéance.",
                  "Examinez l’efficacité de l’équipe et ajustez-la."
                ],
                "where": "Utilisez des pratiques de travail d'équipe claires sur chaque projet, en particulier les projets interfonctionnels. Exemple : une équipe de projet de sortie se réunit chaque semaine, fait tourner l'animateur, utilise un journal d'action et prend des décisions par consentement. Chaque réunion se termine par un propriétaire et une date pour chaque action.",
                "when_not": "Ne surchargez pas une petite tâche à deux. N’utilisez pas le consensus lorsqu’il existe déjà un responsable décisionnel clair et ne laissez pas les règles de base devenir une bureaucratie.",
                "common_mistakes": [
                  "Pas de rôles clairs ni de règle de décision.",
                  "Des réunions sans ordre du jour, sans actions ni suivi.",
                  "Éviter les conflits afin que les vrais problèmes ne soient jamais résolus."
                ],
                "quick_check": [
                  {
                    "q": "Pourquoi une équipe a-t-elle besoin d’une règle de décision ?",
                    "answer": "Clarifier la manière dont les décisions seront prises et éviter les blocages.",
                    "explanation": "Une règle de décision indique à l'équipe si elle doit utiliser le consensus, le consentement ou la décision du leader."
                  },
                  {
                    "q": "Que devrait avoir chaque action ?",
                    "answer": "Un propriétaire et une date d'échéance.",
                    "explanation": "Les actions sans propriété ni dates ne sont généralement pas réalisées."
                  },
                  {
                    "q": "Quel est le rôle de l'animateur ?",
                    "answer": "Pour guider le processus, garder l’équipe concentrée et garantir que chacun contribue.",
                    "explanation": "L'animateur gère le processus de la réunion, pas les décisions relatives au contenu."
                  }
                ],
                "recap": [
                  "Un objectif, des rôles, des règles de base et des règles de décision claires rendent les équipes efficaces.",
                  "Enregistrez les décisions et les actions avec les propriétaires et les dates.",
                  "Examinez le fonctionnement de l’équipe, pas seulement ce qu’elle produit."
                ]
              }
            }
          ]
        }
      ],
      "coverageChecklist": [
        {
          "topic": "Pensée processus",
          "lessons": [
            "Y1.1"
          ]
        },
        {
          "topic": "SIPOC",
          "lessons": [
            "Y1.2"
          ]
        },
        {
          "topic": "Cartographie des processus",
          "lessons": [
            "Y1.3"
          ]
        },
        {
          "topic": "DMAIC en détail",
          "lessons": [
            "Y2.1"
          ]
        },
        {
          "topic": "Les bases de la charte de projet",
          "lessons": [
            "Y2.2"
          ]
        },
        {
          "topic": "Plans de contrôle et SPC de base",
          "lessons": [
            "Y2.3"
          ]
        },
        {
          "topic": "Types de données",
          "lessons": [
            "Y3.1"
          ]
        },
        {
          "topic": "Feuilles de contrôle",
          "lessons": [
            "Y3.2"
          ]
        },
        {
          "topic": "Graphiques de base",
          "lessons": [
            "Y3.3"
          ]
        },
        {
          "topic": "Pareto",
          "lessons": [
            "Y3.4"
          ]
        },
        {
          "topic": "Arête de poisson",
          "lessons": [
            "Y4.1"
          ]
        },
        {
          "topic": "5 pourquoi",
          "lessons": [
            "Y4.2"
          ]
        },
        {
          "topic": "5S",
          "lessons": [
            "Y4.3"
          ]
        },
        {
          "topic": "Lean de base",
          "lessons": [
            "Y4.4"
          ]
        },
        {
          "topic": "Remue-méninges",
          "lessons": [
            "Y5.1"
          ]
        },
        {
          "topic": "Travail d'équipe",
          "lessons": [
            "Y5.2"
          ]
        }
      ],
      "project": {
        "title": "Réduire l'attente dans un processus de service",
        "brief": "Cartographiez un processus de service avec SIPOC et un organigramme, collectez deux semaines de données de temps d'attente sur une feuille de contrôle, créez un diagramme de Pareto des raisons de retard, exécutez une analyse des 5 pourquoi sur la principale raison et rédigez un plan de contrôle d'une page pour le processus amélioré."
      },
      "exam": {
        "questions": 40,
        "passingScore": 80,
        "format": "40 questions à choix multiples avec quatre options et explications."
      },
      "cheatSheet": [
        "SIPOC = Fournisseurs, Entrées, Processus, Sorties, Clients",
        "Principe de Pareto : environ 80 % des effets proviennent d'environ 20 % des causes",
        "5 Pourquoi : demandez pourquoi jusqu'à ce que vous atteigniez une cause sur laquelle vous pouvez agir",
        "5S = Trier, Mettre en ordre, Faire briller, Standardiser, Maintenir",
        "Plan de contrôle = métrique, cible, méthode de surveillance, fréquence, propriétaire et plan de réaction"
      ],
      "nextChecklist": [
        "Je peux dessiner un SIPOC pour un processus que je possède.",
        "Je peux créer une feuille de contrôle et un graphique de Pareto.",
        "Je peux faciliter une discussion des 5 Pourquoi sans blâmer personne.",
        "Je peux expliquer comment 5S prend en charge le flux.",
        "Je peux rédiger un plan de contrôle et lire une carte de contrôle de base."
      ]
    },
    {
      "id": "green",
      "name": "Ceinture verte",
      "level": 3,
      "color": "green",
      "icon": "fa-trophy",
      "lessonTarget": "25-30",
      "studyTime": "40-60 heures",
      "audience": "Chefs de projet et propriétaires de processus qui dirigent des projets DMAIC à temps partiel avec une ceinture noire ou un sponsor.",
      "prerequisites": "Ceinture jaune ou expérience équivalente en amélioration des processus.",
      "previousRecap": "Récapitulatif de la ceinture jaune : les processus ont des fournisseurs, des entrées, des étapes, des sorties et des clients ; les données doivent être collectées de manière cohérente ; Pareto, Fishbone et 5 Why aident à trouver les causes.",
      "outcomes": [
        "Diriger un projet DMAIC de petite à moyenne taille, de l'affrètement au contrôle",
        "Planifier les études de collecte de données, d’échantillonnage et de système de mesure",
        "Utiliser des statistiques descriptives, des tests de capacité, des tests d'hypothèse et une régression simple",
        "Sélectionner et piloter des solutions et transmettre un plan de contrôle"
      ],
      "modules": [
        {
          "id": "green-1",
          "number": 1,
          "title": "Define",
          "duration": "90 minutes",
          "summary": "Transformez une vague plainte en un projet limité avec un client clair, un objectif mesurable et des parties prenantes nommées.",
          "lessons": [
            {
              "id": "G1.1",
              "order": 1,
              "title": "Charte de projet",
              "objective": "Rédigez un énoncé du problème, un objectif, une portée, une analyse de rentabilisation, une équipe et un calendrier.",
              "content": {
                "why": "Une charte est le contrat entre l'équipe du projet et le sponsor. Les ceintures vertes dirigent souvent des projets, une charte claire est donc essentielle pour le contrôle de la portée, des ressources et une définition mesurable du succès.",
                "what": "Une charte Green Belt comprend l'analyse de rentabilisation, l'énoncé du problème, l'objectif SMART, les limites du champ d'application et hors du champ d'application, les rôles de l'équipe, le calendrier et les jalons, les mesures principales, les risques, les contraintes et les approbations. L’énoncé du problème décrit quoi, où, quand et combien, avec des preuves de base, et évite de nommer une cause ou une solution. L'analyse de rentabilisation relie le projet à l'impact sur le client, au coût d'une mauvaise qualité ou à la stratégie.",
                "how": [
                  "Collectez les données de base avant de rédiger l’énoncé du problème.",
                  "Décrivez l'écart avec quoi, où, quand et combien.",
                  "Écrivez un objectif spécifique, mesurable, réalisable, pertinent et limité dans le temps.",
                  "Définissez les limites du processus et répertoriez explicitement les travaux hors de portée.",
                  "Nommez le sponsor, le propriétaire du processus, le chef d'équipe et les membres de l'équipe.",
                  "Définissez des jalons pour définir, mesurer, analyser, améliorer et contrôler.",
                  "Définissez la métrique principale, la source de données et les avantages attendus.",
                  "Obtenez l’approbation du sponsor avant le début d’une importante collecte de données."
                ],
                "where": "Utilisez une charte complète pour chaque projet Green Belt, en particulier pour les travaux transversaux. Exemple : les patients admis attendent en moyenne 6,2 heures entre leur arrivée aux urgences et un lit d'hospitalisation, contre un objectif de 4 heures. L’objectif est de réduire la médiane à 4 heures d’ici 12 semaines. La portée s'étend de l'arrivée d'urgence à l'attribution du lit ; les nouvelles constructions sont hors de portée.",
                "when_not": "Ne créez pas une charte complète pour une petite réparation qui prend une heure ; utilisez une liste de tâches. N'utilisez pas la charte pour verrouiller une solution privilégiée avant que l'équipe n'ait analysé le problème.",
                "common_mistakes": [
                  "Mettre une cause ou une solution dans l’énoncé du problème.",
                  "Un objectif vague tel que « améliorer le flux » sans mesure ni date.",
                  "Pas de référence, pas de propriétaire de processus ou une portée si large que le projet ne peut pas se terminer."
                ],
                "quick_check": [
                  {
                    "q": "Que doit éviter un énoncé de problème ?",
                    "answer": "Nommer une cause ou une solution privilégiée.",
                    "explanation": "L'énoncé du problème décrit le manque de données probantes ; les causes sont étudiées plus tard."
                  },
                  {
                    "q": "Pourquoi une ligne de base est-elle importante dans une charte ?",
                    "answer": "Il montre les performances actuelles et rend crédibles l’objectif et les bénéfices ultérieurs.",
                    "explanation": "Sans base de référence, l’équipe ne peut pas prouver d’amélioration."
                  },
                  {
                    "q": "Que signifie hors de portée ?",
                    "answer": "Travaux que le projet ne traitera pas.",
                    "explanation": "Les exclusions explicites empêchent la dérive de la portée."
                  }
                ],
                "recap": [
                  "Une charte définit le problème, l'objectif, la portée, l'équipe, les mesures et les jalons.",
                  "Utilisez les données de base et gardez les causes et les solutions en dehors de l'énoncé du problème.",
                  "L'approbation du sponsor confirme l'autorité, les ressources et les attentes."
                ]
              }
            },
            {
              "id": "G1.2",
              "order": 2,
              "title": "Parties prenantes",
              "objective": "Cartographiez l’influence et l’intérêt et planifiez l’engagement.",
              "content": {
                "why": "Les projets échouent lorsque les personnes clés sont surprises, exclues ou résistent activement. La cartographie des parties prenantes aide l'équipe à planifier l'engagement avant qu'il ne devienne un problème.",
                "what": "Une partie prenante est toute personne concernée par le projet ou capable de l'influencer. Un outil courant est la grille influence-intérêt. Les parties prenantes à forte influence et à fort intérêt sont gérées en étroite collaboration. Une influence élevée et un faible intérêt restent satisfaits. Une faible influence et un intérêt élevé sont tenus informés. La faible influence et le faible intérêt sont surveillés. L'équipe évalue également la position de chaque partie prenante : partisan, neutre ou bloqueur.",
                "how": [
                  "Énumérez toutes les personnes affectées par ou capables d’influencer le projet.",
                  "Évaluez l’influence et l’intérêt de chaque partie prenante.",
                  "Placez-les sur la grille influence-intérêt.",
                  "Évaluez leur position actuelle et ce dont ils ont besoin.",
                  "Choisissez une méthode et une fréquence d’engagement.",
                  "Attribuez un propriétaire pour chaque relation clé.",
                  "Examinez la carte à chaque porte du projet."
                ],
                "where": "Utilisez la cartographie des parties prenantes sur des projets interfonctionnels, réglementés ou politiquement sensibles. Dans un projet de sortie d'hôpital, le directeur des opérations et les directeurs de service ont une grande influence et un grand intérêt ; L'informatique peut avoir une grande influence mais un intérêt moindre ; les patients et les familles suscitent un grand intérêt et devraient être inclus dans le cadre de groupes de discussion ou d'enquêtes.",
                "when_not": "Ne construisez pas une grande carte des parties prenantes pour une petite solution locale avec deux participants. Ne confondez pas les parties prenantes avec les clients et ne considérez pas l'engagement comme une communication ponctuelle.",
                "common_mistakes": [
                  "Il manque un bloqueur de clé jusqu'à la fin du projet.",
                  "Communiquer uniquement vers le haut et ignorer le personnel de première ligne.",
                  "Une carte sans plan d'engagement, sans propriétaire ou sans suivi."
                ],
                "quick_check": [
                  {
                    "q": "Comment gérer une partie prenante à forte influence et à fort intérêt ?",
                    "answer": "En étroite collaboration, avec un engagement et une implication réguliers dans les décisions.",
                    "explanation": "Ces parties prenantes peuvent fortement influencer le projet et se soucier du résultat."
                  },
                  {
                    "q": "Pourquoi cartographier la position des parties prenantes ?",
                    "answer": "Comprendre qui soutient, est neutre ou peut bloquer le projet.",
                    "explanation": "Stance aide l'équipe à adapter l'engagement et à répondre aux préoccupations."
                  },
                  {
                    "q": "Quand faut-il revoir la cartographie des parties prenantes ?",
                    "answer": "Aux portes du projet et lorsque les circonstances changent.",
                    "explanation": "L'influence, l'intérêt et la position peuvent changer au cours du projet."
                  }
                ],
                "recap": [
                  "Cartographiez les parties prenantes par influence et par intérêt, puis planifiez leur engagement.",
                  "Évaluez la position et attribuez un propriétaire aux relations clés.",
                  "Incluez le personnel de première ligne, et pas seulement les dirigeants."
                ]
              }
            },
            {
              "id": "G1.3",
              "order": 3,
              "title": "COV et CTQ",
              "objective": "Traduire le langage du client en CTQ et spécifications mesurables.",
              "content": {
                "why": "Les ceintures vertes doivent garantir que le projet résout un problème client, et non une commodité interne. Les CTQ transforment le langage du client en spécifications mesurables auxquelles le processus peut être tenu.",
                "what": "La voix du client provient d'entretiens, d'enquêtes, de plaintes, de groupes de discussion, d'observations et de données de garantie. Un arbre CTQ relie un besoin général à un moteur puis à une exigence mesurable. Chaque CTQ a besoin d'une définition opérationnelle, d'un objectif, de limites de spécification et d'une définition claire des défauts. Les limites de spécification définissent les performances acceptables ; ce ne sont pas les mêmes que les limites de contrôle.",
                "how": [
                  "Recueillez les COV à partir de plusieurs sources, pas seulement d'une seule enquête.",
                  "Regroupez les déclarations similaires par thèmes.",
                  "Construisez une arborescence CTQ du besoin au pilote en passant par l'exigence mesurable.",
                  "Définissez la métrique, la cible et les limites de spécification supérieures ou inférieures.",
                  "Définissez ce qui constitue un défaut.",
                  "Validez le CTQ et les spécifications avec les clients ou les experts en processus."
                ],
                "where": "Utilisez VOC et CTQ dans chaque projet Green Belt. Exemple : un client dit : « Je veux que ma décision de prêt soit rapide. » Le conducteur est le moment de la décision. Le CTQ c'est le délai entre une demande complète et une décision, avec un objectif de deux jours ouvrables et une spécification supérieure de trois jours. Une décision qui prend plus de trois jours est un défaut.",
                "when_not": "N'inventez pas de CTQ sans la contribution du client. Ne confondez pas un CTQ avec une solution, telle que « nous avons besoin d'une nouvelle application ». Les exigences légales, de sécurité et réglementaires sont des exigences obligatoires et non des préférences facultatives du client.",
                "common_mistakes": [
                  "Rédaction des besoins dans un langage de solution.",
                  "Créer trop de CTQ et perdre la concentration.",
                  "Fixer un cahier des charges sans vérifier qu'il est mesurable et réalisable."
                ],
                "quick_check": [
                  {
                    "q": "À quoi se connecte un arbre CTQ ?",
                    "answer": "Un besoin du client avec des pilotes et des exigences mesurables.",
                    "explanation": "L'arbre traduit la voix du client en métriques de processus."
                  },
                  {
                    "q": "Quelle est la différence entre une limite de spécification et une limite de contrôle ?",
                    "answer": "Une limite de spécification définit les exigences du client ou de conception ; une limite de contrôle décrit la variation du processus.",
                    "explanation": "Les spécifications proviennent des exigences ; les limites de contrôle proviennent des données de processus."
                  },
                  {
                    "q": "Qu’est-ce qui rend un CTQ utilisable ?",
                    "answer": "Il est mesurable, a un objectif ou une spécification et a une définition claire du défaut.",
                    "explanation": "Sans cela, l’équipe ne peut pas le mesurer ou l’améliorer."
                  }
                ],
                "recap": [
                  "VOC capture les besoins des clients ; Les CTQ les rendent mesurables.",
                  "Définissez la métrique, la cible, les limites de spécification et la règle de défaut.",
                  "Validez les CTQ avec les clients et gardez-les concentrés."
                ]
              }
            }
          ]
        },
        {
          "id": "green-2",
          "number": 2,
          "title": "Measure",
          "duration": "4 heures",
          "summary": "Créez un système de mesure fiable, décrivez les données et comparez les performances des processus avec les spécifications du client.",
          "lessons": [
            {
              "id": "G2.1",
              "order": 1,
              "title": "Plan de collecte de données",
              "objective": "Définissez quoi, où, quand, qui et comment collecter des données.",
              "content": {
                "why": "Sans plan de collecte de données, les données sont souvent incomplètes, incohérentes ou incapables de répondre à la question du projet. Un plan garantit que les bonnes données sont collectées de la bonne manière.",
                "what": "Un plan de collecte de données définit la définition métrique et opérationnelle, le type de données, la source, l'emplacement, le collecteur, le moment, la méthode d'échantillonnage, la taille de l'échantillon, le formulaire d'enregistrement et la méthode de validation. Il prévoit également une analyse du système de mesure. Les données existantes doivent être utilisées lorsqu’elles sont fiables ; de nouvelles données sont nécessaires lorsque les données actuelles ne peuvent pas répondre à la question.",
                "how": [
                  "Écrivez la question à laquelle les données doivent répondre.",
                  "Définissez la métrique de manière opérationnelle, y compris les points de début et d'arrêt.",
                  "Choisissez la source de données et vérifiez sa qualité.",
                  "Décidez de la méthode d’échantillonnage et de la taille de l’échantillon.",
                  "Concevez ou sélectionnez le formulaire d’enregistrement.",
                  "Piloter le plan et former les collecteurs.",
                  "Vérifiez l’exactitude et l’exhaustivité d’un échantillon de dossiers."
                ],
                "where": "Utilisez un plan de collecte de données à chaque phase de mesure et pour toute décision importante. Exemple : pour le service d'urgence, le début est l'horodatage d'arrivée et la fin est l'horodatage d'attribution des lits d'hospitalisation. La source est le dossier de santé électronique. Recueillez tous les patients admis pendant quatre semaines, stratifiez-les par équipe et par jour, et validez vingt enregistrements par rapport au système source.",
                "when_not": "Ne collectez pas de nouvelles données lorsque des données validées existantes répondent déjà à la question. Ne collectez pas de données sans poser une question claire et ne collectez pas trop de données simplement parce que les données sont disponibles.",
                "common_mistakes": [
                  "Des définitions opérationnelles vagues que différents collectionneurs interprètent différemment.",
                  "Aucun plan d'échantillonnage, les données sont donc pratiques plutôt que représentatives.",
                  "Ignorer l’analyse du système de mesure et faire confiance aux mauvaises données."
                ],
                "quick_check": [
                  {
                    "q": "Qu’est-ce qu’une définition opérationnelle ?",
                    "answer": "Une description précise de la façon dont une métrique est mesurée, y compris les règles de démarrage, d'arrêt et de comptage.",
                    "explanation": "Cela garantit que différentes personnes mesurent la même chose de la même manière."
                  },
                  {
                    "q": "Quand faut-il utiliser les données existantes ?",
                    "answer": "Lorsqu’ils sont fiables, pertinents et suffisants pour répondre à la question.",
                    "explanation": "La collecte de nouvelles données prend du temps et doit être justifiée."
                  },
                  {
                    "q": "Pourquoi piloter un plan de collecte de données ?",
                    "answer": "Pour rechercher des définitions peu claires, des champs manquants et des problèmes de collecte avant le déploiement complet.",
                    "explanation": "Un pilote évite des semaines de données inutilisables."
                  }
                ],
                "recap": [
                  "Un plan de collecte de données définit la métrique, la source, l'échantillonnage, les collecteurs et la validation.",
                  "Utiliser des définitions opérationnelles et piloter le plan.",
                  "Préférez les données existantes fiables aux nouvelles collectes inutiles."
                ]
              }
            },
            {
              "id": "G2.2",
              "order": 2,
              "title": "Échantillonnage",
              "objective": "Choisissez des échantillons aléatoires, stratifiés ou systématiques et évitez les biais.",
              "content": {
                "why": "Mesurer chaque unité est souvent impossible ou trop coûteux. Un bon échantillon permet à l’équipe de déduire la population avec une incertitude connue ; un échantillon biaisé conduit à des conclusions erronées.",
                "what": "La population est toute unité d’intérêt ; l'échantillon est le sous-ensemble mesuré. L'échantillonnage aléatoire donne à chaque unité une chance égale et réduit les biais de sélection. L'échantillonnage stratifié divise la population en groupes homogènes, tels que l'équipe ou la région, et des échantillons au sein de chacun. L'échantillonnage systématique prend chaque kième unité mais peut s'aligner sur un modèle caché. L'échantillonnage de commodité est facile mais souvent biaisé.",
                "how": [
                  "Définir la population et la base de sondage.",
                  "Choisissez un échantillonnage aléatoire, stratifié ou systématique pour répondre à la question.",
                  "Décidez de la taille de l’échantillon en fonction de la confiance, de la marge d’erreur et de la variabilité.",
                  "Sélectionnez les unités en utilisant une méthode aléatoire et documentez-les.",
                  "Vérifiez la représentativité de l’échantillon.",
                  "Enregistrez les non-réponses ou les données manquantes et ajustez le plan."
                ],
                "where": "Utilisez l'échantillonnage pour les audits, les enquêtes auprès des clients, les contrôles de qualité et les études de processus. Exemple : une équipe a 1 000 factures par mois et en sélectionne 100 au hasard avec un générateur de nombres aléatoires. Ils stratifient par factures de fin de mois et factures régulières afin que les deux types soient représentés. Ils évitent de prélever uniquement les factures faciles à récupérer.",
                "when_not": "Ne pas échantillonner lorsque la population est petite ou que le risque est élevé et qu’une inspection à 100 % est requise. N’utilisez pas d’échantillon de convenance pour tirer des conclusions sur une population et n’ignorez pas le biais de non-réponse.",
                "common_mistakes": [
                  "Utiliser les unités les plus faciles d’accès.",
                  "Échantillonnage d’une seule équipe, région ou type de produit.",
                  "Un échantillon si petit que la marge d’erreur est trop large pour être utile."
                ],
                "quick_check": [
                  {
                    "q": "Quel est le principal avantage de l’échantillonnage aléatoire ?",
                    "answer": "Cela réduit le biais de sélection et prend en charge l’inférence sur la population.",
                    "explanation": "Chaque unité a une chance égale d'être sélectionnée."
                  },
                  {
                    "q": "Quand l’échantillonnage stratifié est-il utile ?",
                    "answer": "Lorsque la population comprend des groupes distincts qui doivent être représentés.",
                    "explanation": "L'échantillonnage au sein de chaque groupe garantit la couverture de segments importants."
                  },
                  {
                    "q": "Pourquoi un échantillon de convenance peut-il être trompeur ?",
                    "answer": "Il se peut que cela surreprésente les unités faciles d’accès et oublie des pans importants de la population.",
                    "explanation": "L’échantillonnage de convenance n’est pas aléatoire et peut créer un biais de sélection."
                  }
                ],
                "recap": [
                  "Définissez la population, la base de sondage, la méthode et la taille.",
                  "Utilisez un échantillonnage aléatoire ou stratifié pour réduire les biais.",
                  "Évitez les échantillons de convenance à des fins d’inférence et vérifiez la représentativité."
                ]
              }
            },
            {
              "id": "G2.3",
              "order": 3,
              "title": "Analyse du système de mesure",
              "objective": "Exécutez un Gage R&R et interprétez le% GRR et le nombre de catégories distinctes.",
              "content": {
                "why": "La variation des mesures peut ressembler à une variation du processus. Avant l'analyse de capacité ou le test d'hypothèse, confirmez que le système de mesure peut distinguer les bonnes pièces des mauvaises.",
                "what": "L'analyse du système de mesure évalue l'exactitude par le biais, la linéarité et la stabilité, et la précision par la répétabilité et la reproductibilité. La répétabilité est une variation lorsqu'un évaluateur mesure la même pièce à plusieurs reprises. La reproductibilité est la variation entre les évaluateurs mesurant les mêmes pièces. Une étude de Gage R&R estime les deux. %GRR compare la variation de mesure à la variation totale ; plus bas c'est mieux. Le nombre de catégories distinctes, ou NDC, indique le nombre de niveaux différents que le système peut distinguer.",
                "how": [
                  "Sélectionnez dix pièces qui couvrent la gamme réelle du processus.",
                  "Faites appel à deux ou trois évaluateurs qui effectuent normalement la mesure.",
                  "Demandez à chaque évaluateur de mesurer chaque pièce deux ou trois fois, dans un ordre aléatoire et à l'aveugle.",
                  "Analysez l'étude dans Minitab sous Stat > Quality Tools > Gage Study > Gage R&R, ou dans un modèle Excel validé.",
                  "Interpréter le %GRR : un taux inférieur à 10 % est généralement acceptable, un taux de 10 à 30 % est acceptable sous certaines conditions et un taux supérieur à 30 % est généralement inacceptable.",
                  "Vérifiez NDC ; cinq catégories ou plus sont souhaitables. S'il est faible, améliorez le système avant de collecter les données de processus."
                ],
                "where": "Utilisez Gage R&R pour l'inspection dimensionnelle, les tests en laboratoire, le temps de traitement des appels, la notation des enquêtes et toute mesure qui déterminera une décision. Exemple : un système de mesure comporte 18 % de GRR et quatre catégories distinctes. C'est acceptable sous certaines conditions, donc l'équipe améliore le luminaire avant d'utiliser les données pour une étude de capacité.",
                "when_not": "N'exécutez pas un R&R Gage standard sur des tests destructifs ; utilisez une conception imbriquée. N'utilisez pas un seul évaluateur, car cela manque de reproductibilité. Ne sautez pas MSA lorsque les données justifient une décision coûteuse.",
                "common_mistakes": [
                  "Utiliser des pièces qui ne représentent pas la gamme de processus.",
                  "Ne pas aveugler les évaluateurs sur les lectures précédentes.",
                  "Blâmer le processus pour la variation créée par le système de mesure."
                ],
                "quick_check": [
                  {
                    "q": "Quelle est la différence entre répétabilité et reproductibilité ?",
                    "answer": "La répétabilité est la variation effectuée par un évaluateur sur la même pièce ; la reproductibilité est une variation entre les évaluateurs.",
                    "explanation": "Gage R&R sépare la variation de l'équipement de la variation de l'évaluateur."
                  },
                  {
                    "q": "Que mesure le %GRR ?",
                    "answer": "Variation de mesure en pourcentage de la variation totale.",
                    "explanation": "Un %GRR inférieur signifie que le système de mesure est mieux à même de voir les différences réelles des processus."
                  },
                  {
                    "q": "Quelle valeur NDC est souhaitable ?",
                    "answer": "Cinq catégories distinctes ou plus.",
                    "explanation": "NDC indique combien de niveaux le système de mesure peut distinguer."
                  }
                ],
                "recap": [
                  "MSA vérifie si le système de mesure est suffisamment précis et exact.",
                  "Gage R&R sépare la répétabilité de la reproductibilité.",
                  "Utilisez %GRR et NDC pour décider s’il convient d’améliorer le système de mesure."
                ]
              }
            },
            {
              "id": "G2.4",
              "order": 4,
              "title": "Statistiques descriptives",
              "objective": "Calculez et interprétez la moyenne, la médiane, l’écart type et la plage.",
              "content": {
                "why": "Les statistiques descriptives résument le centre, la propagation et la forme avant l'inférence. Ils révèlent des valeurs aberrantes, des biais et une instabilité qu’une moyenne à elle seule cacherait.",
                "what": "La moyenne est la moyenne arithmétique. La médiane est la valeur médiane lorsque les données sont classées. Le mode est la valeur la plus fréquente. La plage est le maximum moins le minimum. L'écart type estime la distance typique par rapport à la moyenne et la variance est son carré. L'intervalle interquartile correspond au troisième quartile moins le premier quartile. Utilisez la médiane et l'IQR pour les données asymétriques ou les données comportant des valeurs aberrantes ; utilisez la moyenne et l’écart type pour les données à peu près symétriques.",
                "how": [
                  "Tracez les données avant de les résumer.",
                  "Calculez le centre avec la moyenne ou la médiane.",
                  "Calculez l'écart avec l'écart type, la plage ou l'IQR.",
                  "Recherchez les valeurs aberrantes, les asymétries et les pics multiples.",
                  "Choisissez le résumé qui correspond à la forme et à la question."
                ],
                "where": "Utilisez des statistiques descriptives pour les références, les comparaisons avant et après, les entrées de capacités et les contrôles de qualité des données. Exemple : les temps de service sont de 10, 12, 11, 13, 12 et 60 minutes. La moyenne est d'environ 19,7 minutes, mais la médiane est de 12 minutes car la valeur de 60 minutes est une valeur aberrante. Ne signaler que la moyenne exagérerait l’expérience typique.",
                "when_not": "N'utilisez pas la moyenne seule pour les données asymétriques ou les données comportant des valeurs aberrantes. Ne comparez pas les écarts types sans contexte et n’ignorez pas l’ordre temporel lorsque le processus peut changer.",
                "common_mistakes": [
                  "Signaler une moyenne pour des données fortement asymétriques.",
                  "Utiliser l’écart type sans vérifier les valeurs aberrantes.",
                  "Utiliser des formules de population lorsque les données constituent un échantillon."
                ],
                "quick_check": [
                  {
                    "q": "Quel résumé est le plus robuste aux valeurs aberrantes ?",
                    "answer": "La médiane.",
                    "explanation": "La médiane dépend de la position et non de la taille des valeurs extrêmes."
                  },
                  {
                    "q": "Que décrit l’écart type ?",
                    "answer": "La répartition typique des données autour de la moyenne.",
                    "explanation": "Un écart type plus grand signifie plus de variation."
                  },
                  {
                    "q": "Pourquoi tracer les données avant de calculer les statistiques ?",
                    "answer": "Pour voir la forme, les valeurs aberrantes, les écarts et les multiples pics cachés par un seul nombre.",
                    "explanation": "Les graphiques évitent les résumés trompeurs."
                  }
                ],
                "recap": [
                  "La moyenne, la médiane, l'écart type, la plage et l'IQR décrivent différents aspects des données.",
                  "Utilisez la médiane et l'IQR pour les données asymétriques ou les valeurs aberrantes.",
                  "Tracez toujours les données avant de choisir un résumé."
                ]
              }
            },
            {
              "id": "G2.5",
              "order": 5,
              "title": "Distribution normale",
              "objective": "Utilisez la règle 68-95-99.7 et vérifiez la normalité avant l'analyse de capacité.",
              "content": {
                "why": "De nombreuses méthodes de capabilité et d’hypothèse supposent une normalité approximative. La courbe normale et la règle 68-95-99,7 aident l'équipe à interpréter les variations et à reconnaître quand cette hypothèse n'est pas sûre.",
                "what": "Une distribution normale est en forme de cloche et symétrique, définie par sa moyenne et son écart type. Environ 68 % des valeurs se situent à moins d’un écart type de la moyenne, environ 95 % à moins de deux et environ 99,7 % à moins de trois. Un score z est le nombre d'écarts types d'une valeur par rapport à la moyenne : z est égal à x moins la moyenne, divisé par l'écart type. Vérifiez la normalité avec un histogramme, un diagramme de probabilité normale et un test tel qu'Anderson-Darling.",
                "how": [
                  "Tracez un histogramme et un tracé de probabilité normale.",
                  "Exécutez un test de normalité et interprétez la valeur p dans son contexte.",
                  "N'oubliez pas qu'une valeur p élevée ne prouve pas la normalité ; il échoue seulement à le rejeter.",
                  "Si ce n'est pas normal, envisagez une transformation, une méthode non paramétrique ou une distribution différente.",
                  "Revérifiez les hypothèses après toute transformation."
                ],
                "where": "Utilisez des contrôles de normalité avant les études de capacité, les cartes de contrôle et les tests T. Exemple : un processus a une moyenne de 100 et un écart type de 10, donc environ 95 % des valeurs se situent entre 80 et 120. Une valeur de 125 a un score z de 2,5. Dans Excel, utilisez NORM.DIST ou NORM.S.DIST ; dans Minitab, utilisez Graphique > Tracé de probabilité.",
                "when_not": "Ne présumez pas la normalité des temps de cycle, des décomptes ou des proportions asymétriques. Ne vous fiez pas à un test de normalité avec un petit échantillon et ne transformez pas les données sans expliquer ce que signifie le résultat transformé.",
                "common_mistakes": [
                  "Traiter chaque ensemble de données comme d’habitude.",
                  "Utiliser un test de normalité comme seul contrôle.",
                  "Confondre la règle empirique des 95 % avec un intervalle de confiance de 95 %."
                ],
                "quick_check": [
                  {
                    "q": "Environ quel pourcentage de données normales se situe à moins de deux écarts types de la moyenne ?",
                    "answer": "Environ 95%.",
                    "explanation": "La règle empirique donne environ 68 %, 95 % et 99,7 % pour un, deux et trois écarts types."
                  },
                  {
                    "q": "Un processus a une moyenne de 50 et un écart type de 5. Quel est le score z pour 62 ?",
                    "answer": "2.4.",
                    "explanation": "z est égal à (62 - 50) / 5 = 2,4."
                  },
                  {
                    "q": "Un test de normalité donne p = 0,01. Que doit faire l’équipe ?",
                    "answer": "Traitez la normalité comme discutable et envisagez une transformation, une autre distribution ou une méthode non paramétrique.",
                    "explanation": "Une petite valeur p est une preuve contre la normalité."
                  }
                ],
                "recap": [
                  "Les données normales sont symétriques et résumées par moyenne et écart type.",
                  "Utilisez la règle 68-95-99,7 et les scores z pour interpréter la variation.",
                  "Vérifiez la normalité avant les méthodes qui la supposent."
                ]
              }
            },
            {
              "id": "G2.6",
              "order": 6,
              "title": "Niveau Sigma et DPMO",
              "objective": "Convertissez les défauts et les opportunités en niveaux DPMO et sigma.",
              "content": {
                "why": "Le niveau Sigma et le DPMO placent la qualité sur une échelle commune et relient les défauts à la capacité du processus. Ils aident les équipes à comparer et à suivre les améliorations.",
                "what": "Une opportunité est une chance qu'un défaut se produise. Le DPMO correspond aux défauts divisés par les unités multipliées par les opportunités, multipliés par un million. Le rendement est égal à un moins les défauts divisé par les opportunités. Le niveau Sigma est trouvé à partir de DPMO en utilisant la distribution normale inverse. De nombreuses organisations ajoutent un décalage de 1,5 sigma pour tenir compte de la dérive à long terme ; indiquez toujours si le numéro est à court ou à long terme.",
                "how": [
                  "Définissez clairement un défaut et une opportunité.",
                  "Comptez les défauts, les unités et les opportunités sur la même période.",
                  "Calculez le DPMO : les défauts divisés par les unités multipliés par les opportunités, puis multipliés par un million.",
                  "Convertissez DPMO en valeur z avec la normale inverse, puis ajoutez 1,5 si vous utilisez la convention à long terme.",
                  "Dans Excel, utilisez NORM.S.INV(1 - DPMO/1000000) + 1.5.",
                  "Comparez les performances de base et améliorées en utilisant les mêmes définitions."
                ],
                "where": "Utilisez DPMO et le niveau sigma pour les défauts de fabrication, les erreurs de service, les processus de soins de santé et le travail transactionnel. Exemple : 10 défauts répartis sur 1 000 unités avec cinq opportunités chacun donnent 10 divisé par 5 000, soit 0,002. Cela représente 2 000 DPMO et un rendement de 99,8 %. La normale inverse de 0,998 est d’environ 2,88 ; l'ajout du décalage de 1,5 donne environ 4,38 sigma.",
                "when_not": "Ne gonflez pas le nombre d’opportunités pour améliorer le niveau sigma. N'utilisez pas DPMO lorsque les définitions de défauts sont incohérentes et ne comparez pas les niveaux sigma entre les processus avec des définitions d'opportunités différentes.",
                "common_mistakes": [
                  "Compter les unités défectueuses comme des défauts, ou l’inverse.",
                  "Utiliser le mauvais nombre d’opportunités.",
                  "Oublier de préciser si le décalage de 1,5 a été appliqué."
                ],
                "quick_check": [
                  {
                    "q": "Cinq défauts, 500 unités et quatre opportunités par unité. Qu’est-ce que le DPMO ?",
                    "answer": "2 500 DPMO.",
                    "explanation": "5 / (500 x 4) = 0,0025, soit 2 500 par million."
                  },
                  {
                    "q": "Que représente un décalage de 1,5 sigma ?",
                    "answer": "Un ajustement pour la dérive du processus à long terme.",
                    "explanation": "Le changement est une convention ; l'équipe doit indiquer si elle a été utilisée."
                  },
                  {
                    "q": "Pourquoi les définitions des opportunités doivent-elles être cohérentes ?",
                    "answer": "Différents nombres d'opportunités modifient le niveau DPMO et sigma, rendant les comparaisons invalides.",
                    "explanation": "Le niveau Sigma n’est comparable que lorsque les règles de comptage sont les mêmes."
                  }
                ],
                "recap": [
                  "DPMO est égal aux défauts divisés par les unités multipliées par les opportunités, multipliées par un million.",
                  "Le niveau Sigma provient de la normale inverse du rendement, souvent avec un décalage de 1,5.",
                  "Gardez les définitions des défauts et des opportunités cohérentes."
                ]
              }
            },
            {
              "id": "G2.7",
              "order": 7,
              "title": "Cp et Cpk",
              "objective": "Calculer les indices de capacité et expliquer la différence entre la capacité potentielle et réelle.",
              "content": {
                "why": "Les indices de capacité comparent la répartition et le centrage du processus avec les limites des spécifications. Ils montrent si le processus peut répondre aux exigences et s'il faut réduire les variations ou se recentrer.",
                "what": "Cp est égal à la largeur de spécification divisée par six sigma : (USL - LSL) / (6 sigma). Il décrit la capacité potentielle si le processus était parfaitement centré. Cpk est égal au minimum de (USL - moyenne) / (3 sigma) et (moyenne - LSL) / (3 sigma). Cela tient compte du centrage, donc Cpk est toujours inférieur ou égal à Cp. Ppk utilise un sigma global à long terme. Les cibles sont un Cpk d'au moins 1,33, avec une force de 1,67 ou plus.",
                "how": [
                  "Confirmez que le processus est stable et que les données sont à peu près normales.",
                  "Estimez le sigma en utilisant la variation intra-sous-groupe pour Cp et Cpk.",
                  "Calculez Cp à partir de la largeur de spécification.",
                  "Calculez Cpk à partir de la distance jusqu'à la limite de spécification la plus proche.",
                  "Décidez si vous souhaitez réduire la variation ou déplacer la moyenne.",
                  "Revérifiez la capacité après l’amélioration."
                ],
                "where": "Utilisez l'analyse de capacité pour les tolérances de fabrication, les spécifications de temps de service, les délais d'exécution du laboratoire et la précision des transactions. Exemple : USL 20, LSL 10, moyenne 16 et sigma 1,5. Cp est égal à 10/9 = 1,11. Cpk est égal au minimum de (20 - 16) / 4,5 = 0,89 et (16 - 10) / 4,5 = 1,33, donc Cpk est de 0,89. Le processus n’est pas capable ; centrer la moyenne sur 15 ferait monter Cpk à 1,11.",
                "when_not": "Ne calculez pas Cp ou Cpk sur un processus instable. N'utilisez pas d'indice de capacité basé sur la normale pour des données clairement non normales sans une méthode appropriée. Ne comparez pas les indices calculés avec des spécifications ou des conventions sigma différentes.",
                "common_mistakes": [
                  "En utilisant le sigma global mais en appelant le résultat Cp.",
                  "Ignorer le centrage et rapporter uniquement Cp.",
                  "Capacité de calcul avant de vérifier la stabilité."
                ],
                "quick_check": [
                  {
                    "q": "Quelle est la différence entre Cp et Cpk ?",
                    "answer": "Cp mesure la propagation potentielle ; Cpk tient également compte du centrage.",
                    "explanation": "Un processus peut avoir un bon Cp mais un mauvais Cpk s'il est décentré."
                  },
                  {
                    "q": "USL 30, LSL 10, moyenne 22, sigma 2. Que sont Cp et Cpk ?",
                    "answer": "Cp = 1,67 et Cpk = 1,33.",
                    "explanation": "Cp = 20/12 = 1,67 ; Cpk = min(8/6, 12/6) = 1,33."
                  },
                  {
                    "q": "Un processus a Cpk 0,8. Qu'est-ce que cela suggère ?",
                    "answer": "Le processus n’est pas performant et produit probablement des défauts.",
                    "explanation": "Un Cpk inférieur à 1,0 signifie que la spécification est plus étroite que l'étendue du processus par rapport à la moyenne."
                  }
                ],
                "recap": [
                  "Cp mesure la capacité potentielle ; Cpk mesure la capacité réelle avec centrage.",
                  "Cpk est toujours inférieur ou égal à Cp.",
                  "Confirmez la stabilité et la normalité avant de faire confiance aux indices de capacité."
                ]
              }
            }
          ]
        },
        {
          "id": "green-3",
          "number": 3,
          "title": "Analyze",
          "duration": "4 heures",
          "summary": "Utilisez des graphiques, des outils de causes profondes, des analyses de risques et des tests statistiques pour distinguer les causes réelles du bruit.",
          "lessons": [
            {
              "id": "G3.1",
              "order": 1,
              "title": "Graphiques et affichages de données",
              "objective": "Sélectionnez des histogrammes, des diagrammes en boîte, des diagrammes d'exécution et des nuages ​​de points pour la question.",
              "content": {
                "why": "Les graphiques révèlent des modèles, des valeurs aberrantes et des relations que cachent les statistiques récapitulatives. Le bon affichage rend les données faciles à interpréter ; un mauvais affichage peut induire l'équipe en erreur.",
                "what": "Un histogramme montre la distribution des données continues : forme, centre, répartition, lacunes et valeurs aberrantes. Un diagramme en boîte compare les distributions entre les groupes en utilisant la médiane, les quartiles, l'intervalle interquartile et les valeurs aberrantes. Un diagramme de séquences trace les données dans le temps afin de révéler les tendances, les changements et les cycles. Un nuage de points montre la relation entre deux variables continues, notamment la direction, la force, la forme et les valeurs aberrantes.",
                "how": [
                  "Énoncez la question à laquelle le graphique doit répondre.",
                  "Identifiez les types de données et le nombre de groupes.",
                  "Choisissez l'affichage : histogramme ou diagramme en boîte pour la distribution, diagramme d'exécution pour le temps, nuage de points pour les relations.",
                  "Étiquetez les deux axes, les unités et la période de temps.",
                  "Tracez toutes les données et recherchez des modèles ou des points inhabituels.",
                  "Vérifiez le modèle par rapport aux connaissances du processus avant de tirer des conclusions."
                ],
                "where": "Utilisez des graphiques dans tout le DMAIC. Dans un centre d'appels, un histogramme montre la répartition du temps de traitement, un diagramme en boîte compare les équipes, un graphique d'exécution montre les tendances quotidiennes et un nuage de points explore le temps de traitement par rapport à la satisfaction. Dans le domaine des soins de santé, un diagramme de parcours peut montrer le temps d'attente avant et après un changement ; un box plot peut comparer les quartiers.",
                "when_not": "N'utilisez pas d'histogramme pour les données catégorielles. N'utilisez pas de nuage de points lorsqu'une variable est catégorielle. Évitez les graphiques 3D ou les diagrammes circulaires lorsqu'une comparaison précise est importante, et ne tronquez pas les axes pour exagérer les différences.",
                "common_mistakes": [
                  "Choisir un graphique qui ne correspond pas à la question ou au type de données.",
                  "Tronquer un axe pour qu'un petit changement paraisse important.",
                  "Traiter un modèle dans un graphique comme preuve de cause."
                ],
                "quick_check": [
                  {
                    "q": "Quel graphique montre le mieux une distribution de données continues ?",
                    "answer": "Un histogramme.",
                    "explanation": "Les histogrammes regroupent les valeurs continues dans des groupes et affichent la forme et la répartition."
                  },
                  {
                    "q": "Quel graphique compare les distributions entre plusieurs groupes ?",
                    "answer": "Une boîte à moustaches.",
                    "explanation": "Les boîtes à moustaches montrent la médiane, les quartiles et les valeurs aberrantes pour chaque groupe."
                  },
                  {
                    "q": "Quel graphique montre la relation entre deux variables continues ?",
                    "answer": "Un nuage de points.",
                    "explanation": "Les nuages ​​de points affichent des valeurs appariées et révèlent la direction et la force."
                  }
                ],
                "recap": [
                  "Faites correspondre le graphique à la question et au type de données.",
                  "Les histogrammes et les diagrammes en boîte montrent les distributions ; les graphiques d'exécution affichent l'heure ; les nuages ​​de points montrent les relations.",
                  "Les graphiques suggèrent des tendances, mais les causes nécessitent une analyse plus approfondie."
                ]
              }
            },
            {
              "id": "G3.2",
              "order": 2,
              "title": "Analyse des causes profondes",
              "objective": "Combinez les arêtes de poisson, les 5 pourquoi, la stratification et l'observation des processus.",
              "content": {
                "why": "Les équipes sautent souvent vers des solutions avant de comprendre le problème. L'analyse structurée des causes profondes augmente la certitude que le correctif s'attaque à la cause réelle plutôt qu'à un symptôme.",
                "what": "L'analyse des causes profondes est une enquête structurée qui combine l'observation des processus, les diagrammes en arête de poisson, les 5 pourquoi, la stratification, l'analyse de Pareto et les contrôles statistiques. La stratification divise les données par équipe, produit, région, opérateur ou autre facteur pour voir où se concentre le problème. Une cause profonde est la raison sous-jacente pour laquelle un problème survient ; les causes contributives rendent la situation pire ou plus probable.",
                "how": [
                  "Définissez le problème avec des données et une métrique claire.",
                  "Cartographiez le processus et observez le travail là où il se produit.",
                  "Réfléchissez aux causes possibles avec un diagramme en arête de poisson.",
                  "Stratifiez les données pour déterminer où et quand le problème survient.",
                  "Utilisez 5 pourquoi sur les causes les plus probables, en vérifiant chaque réponse.",
                  "Confirmez la cause avec des données, un pilote ou une comparaison conçue.",
                  "Sélectionnez la cause première et associez-la à une solution exploitable."
                ],
                "where": "Utilisez l’analyse des causes profondes des défauts, des retards, des erreurs, des plaintes et des incidents. Exemple : les rapports de laboratoire sont en retard. La stratification montre que le problème est concentré dans les tests statistiques effectués sur le quart de soir. Une arête de poisson et 5 Pourquoi indiquent que les tests statistiques sont groupés avec des tests de routine. Un pilote avec un seuil de priorité confirme la cause et réduit les rapports en retard.",
                "when_not": "Ne démarrez pas l’analyse des causes profondes avant que le problème ne soit clairement défini. N'utilisez pas une enquête complète pour un correctif simple et connu. Ne vous arrêtez pas à la corrélation ou à la première cause plausible.",
                "common_mistakes": [
                  "Choisir d’abord une solution, puis rechercher des causes qui la soutiennent.",
                  "Accepter une seule cause sans vérifier les interactions.",
                  "Laisser de côté les personnes de première ligne qui savent comment le travail se déroule réellement."
                ],
                "quick_check": [
                  {
                    "q": "A quoi sert la stratification ?",
                    "answer": "Il divise les données en groupes pour voir où se concentre un problème.",
                    "explanation": "La stratification par équipe, produit ou région réduit souvent rapidement la cause."
                  },
                  {
                    "q": "Pourquoi combiner arête de poisson et 5 Pourquoi ?",
                    "answer": "Fishbone élargit la recherche des causes ; 5 Pourquoi analyse les plus probables.",
                    "explanation": "Ensemble, ils soutiennent une réflexion à la fois divergente et ciblée."
                  },
                  {
                    "q": "Comment confirmer une cause profonde suspectée ?",
                    "answer": "Avec des données, un pilote ou une comparaison conçue.",
                    "explanation": "Une cause plausible ne suffit pas ; il faut le tester."
                  }
                ],
                "recap": [
                  "L'analyse des causes profondes combine l'observation, les outils de causes, la stratification et les données.",
                  "Confirmez la cause avant de mettre en œuvre une solution.",
                  "Incluez les connaissances de première ligne et évitez les reproches."
                ]
              }
            },
            {
              "id": "G3.3",
              "order": 3,
              "title": "FMEA",
              "objective": "Évaluez la gravité, l’occurrence et la détection et hiérarchisez les modes de défaillance.",
              "content": {
                "why": "L'AMDEC détecte les modes de défaillance avant qu'ils ne causent des dommages, afin que l'équipe puisse prévenir les problèmes plutôt que d'y réagir. C’est particulièrement utile lorsqu’un processus ou une conception change.",
                "what": "L'analyse des modes de défaillance et de leurs effets répertorie chaque mode de défaillance, son effet, sa gravité, sa cause, son occurrence, les contrôles actuels et sa détection. La gravité, l'occurrence et la détection sont notées de 1 à 10. Le numéro de priorité du risque est égal à la gravité multipliée par l'occurrence et par la détection. Un RPN plus élevé signifie une priorité plus élevée, mais un score de gravité élevé exige une attention même lorsque le RPN est faible. Certaines organisations utilisent des tables de priorité d'action au lieu de RPN.",
                "how": [
                  "Définir le processus ou la portée de la conception et constituer une équipe interfonctionnelle.",
                  "Répertorier les modes d'échec : comment l'étape pourrait échouer.",
                  "Décrivez l'effet sur le client ou l'étape en aval et notez la gravité.",
                  "Identifiez les causes et l’occurrence du score.",
                  "Répertoriez les contrôles actuels et la détection des scores.",
                  "Calculez le RPN et hiérarchisez les éléments de haute gravité et à RPN élevé.",
                  "Attribuez des actions, des propriétaires et des dates, puis notez à nouveau après les actions."
                ],
                "where": "Utilisez l'AMDEC dans les domaines de la fabrication, des soins de santé, des logiciels, des services et de la conception. Exemple : la saisie d'une commande de médicaments peut échouer en cas de dose erronée. La gravité est de 9, l'occurrence est de 4 et la détection est de 3, ce qui donne un RPN de 108. L'ajout de la lecture de codes-barres réduit l'occurrence à 1 et la détection à 2, ce qui abaisse le RPN à 18.",
                "when_not": "N’exécutez pas l’AMDEC comme un exercice de paperasse ponctuel. Ne laissez pas un RPN faible prévaloir sur un score de gravité élevé, et n'obtenez pas de score sans les personnes qui connaissent le processus.",
                "common_mistakes": [
                  "Des modes de défaillance vagues sur lesquels il est impossible d’agir.",
                  "Gonfler ou dégonfler les scores pour les adapter à une priorité préférée.",
                  "Aucune action assignée ni aucune nouvelle notation après améliorations."
                ],
                "quick_check": [
                  {
                    "q": "Comment est calculé le RPN ?",
                    "answer": "Détection des temps d'occurrence et de gravité.",
                    "explanation": "Chaque facteur est noté de 1 à 10, donc le RPN va de 1 à 1 000."
                  },
                  {
                    "q": "Pourquoi une panne de haute gravité peut-elle nécessiter une action même avec un faible RPN ?",
                    "answer": "Les conséquences peuvent être inacceptables, quelle que soit la fréquence.",
                    "explanation": "La gravité reflète le préjudice, et non seulement la probabilité."
                  },
                  {
                    "q": "Que doit-il se passer une fois les actions mises en œuvre ?",
                    "answer": "Réévaluez la gravité, l’occurrence et la détection pour confirmer la réduction du risque.",
                    "explanation": "L'AMDEC est un document évolutif, pas une liste unique."
                  }
                ],
                "recap": [
                  "L'AMDEC donne la priorité aux modes de défaillance en utilisant la gravité, l'occurrence, la détection et le RPN.",
                  "Une gravité élevée mérite toujours une attention particulière.",
                  "Attribuez des actions et réévaluez-les pour confirmer la réduction des risques."
                ]
              }
            },
            {
              "id": "G3.4",
              "order": 4,
              "title": "Bases des tests d’hypothèses",
              "objective": "Formez des hypothèses nulles et alternatives et interprétez correctement les valeurs p.",
              "content": {
                "why": "Les ceintures vertes ont besoin de savoir si une différence observée est réelle ou simplement due au hasard. Les tests d’hypothèses empêchent les équipes de réagir au bruit et de passer à côté des effets réels.",
                "what": "L’hypothèse nulle ne fait état d’aucune différence ni d’aucun effet. L’alternative énonce une différence ou un effet. Choisissez un test en fonction du type de données et de la conception : t à un échantillon, t à deux échantillons, t apparié, ANOVA, test du chi carré ou test de proportion. Le niveau de signification, alpha, est souvent de 0,05. La valeur p est la probabilité que les données soient au moins aussi extrêmes que celles observées, en supposant que la valeur nulle est vraie. Ce n’est pas la probabilité que la valeur nulle soit vraie.",
                "how": [
                  "Énoncez la question pratique.",
                  "Écrivez les hypothèses nulles et alternatives.",
                  "Choisissez alpha et le test approprié.",
                  "Vérifiez les hypothèses de test.",
                  "Exécutez le test et lisez la valeur p et l’intervalle de confiance.",
                  "Si p est inférieur à alpha, rejetez la valeur nulle ; sinon, ne le rejetez pas.",
                  "Interprétez l’ampleur de l’effet et son importance pratique."
                ],
                "where": "Utilisez des tests d'hypothèse pour comparer les équipes, les fournisseurs, les performances avant et après ou les groupes. Exemple : comparez le délai d’exécution moyen pour deux équipes. Le nul est égal aux moyens ; l'alternative est des moyens différents. Un test t à deux échantillons donne p = 0,02 avec alpha 0,05, donc rejetez la valeur nulle. L'intervalle de confiance à 95 % pour la différence est de 2 à 18 minutes, ce qui peut être ou non important en pratique.",
                "when_not": "Ne testez pas un processus instable. Ne recherchez pas les valeurs p en testant de nombreuses combinaisons. Ne confondez pas signification statistique et signification pratique, et n'utilisez pas de test à deux échantillons lorsque les données sont appariées.",
                "common_mistakes": [
                  "Dire la valeur p correspond à la probabilité que la valeur nulle soit vraie.",
                  "Dire « accepter le nul » au lieu de « ne pas rejeter le nul ».",
                  "Ignorer les hypothèses, l’ampleur de l’effet ou les tests multiples."
                ],
                "quick_check": [
                  {
                    "q": "Que signifie p = 0,03 avec alpha 0,05 ?",
                    "answer": "Rejetez l’hypothèse nulle.",
                    "explanation": "Le résultat observé est peu probable sous la valeur nulle au niveau de signification choisi."
                  },
                  {
                    "q": "Que signifie p = 0,20 avec alpha 0,05 ?",
                    "answer": "Ne parvient pas à rejeter l’hypothèse nulle.",
                    "explanation": "Il n’y a pas suffisamment de preuves pour rejeter la nullité ; la valeur nulle n'est pas prouvée."
                  },
                  {
                    "q": "Qu'est-ce qu'une erreur de type I ?",
                    "answer": "Rejeter une véritable hypothèse nulle.",
                    "explanation": "Une erreur de type I est un faux positif ; alpha est sa probabilité."
                  }
                ],
                "recap": [
                  "Les tests d'hypothèse comparent les effets observés avec le hasard.",
                  "Interprétez les valeurs p par rapport à l’alpha et rapportez la taille de l’effet.",
                  "L’importance statistique ne signifie pas automatiquement l’importance pratique."
                ]
              }
            },
            {
              "id": "G3.5",
              "order": 5,
              "title": "Corrélation",
              "objective": "Mesurez la force et la direction d’une relation linéaire.",
              "content": {
                "why": "La corrélation aide les équipes à rechercher les relations entre les variables et à décider où approfondir leurs recherches. C’est également une source courante de fausses conclusions lorsque l’on suppose qu’il y a un lien de causalité.",
                "what": "Le coefficient de corrélation r va de -1 à +1. Une valeur proche de +1 indique une forte relation linéaire positive ; près de -1 indique une forte relation négative ; près de 0 indique peu ou pas de relation linéaire. Le carré de r est la proportion de variation partagée par les deux variables. La corrélation de Pearson est utilisée pour les relations linéaires entre des variables continues ; La corrélation de Spearman est utilisée pour les relations monotones, les données ordinales ou les données avec des valeurs aberrantes.",
                "how": [
                  "Tracez un nuage de points avant de calculer la corrélation.",
                  "Vérifiez la linéarité, les valeurs aberrantes et les groupes séparés.",
                  "Choisissez Pearson ou Spearman en fonction des données.",
                  "Calculez r et, si nécessaire, sa valeur p.",
                  "Interpréter la force et la direction dans leur contexte.",
                  "Étudiez la causalité avec une expérience ou une conception plus solide."
                ],
                "where": "Utilisez la corrélation pour filtrer les variables avant la régression ou la conception d'expériences. Les exemples incluent les heures d'étude par rapport aux résultats de l'examen, le temps d'attente par rapport à la satisfaction ou la température par rapport au taux de défauts. Si les heures d'étude et le score ont r = 0,6, la relation est modérée et positive, et le r au carré est de 0,36, ce qui signifie que 36 % de la variation est partagée.",
                "when_not": "N'utilisez pas la corrélation pour des relations clairement non linéaires. Ne l'utilisez pas avec des données catégorielles ; utilisez plutôt un test du chi carré. Ne déduisez pas la causalité à partir de la corrélation, car une confusion, une causalité inverse ou une coïncidence peuvent expliquer le modèle.",
                "common_mistakes": [
                  "Conclure qu’une variable provoque l’autre.",
                  "Ignorer les valeurs aberrantes ou les modèles courbes qui déforment r.",
                  "Combiner différents groupes et créer une corrélation globale trompeuse."
                ],
                "quick_check": [
                  {
                    "q": "Qu'indique r = -0,8 ?",
                    "answer": "Une forte relation linéaire négative.",
                    "explanation": "À mesure qu’une variable augmente, l’autre tend à diminuer."
                  },
                  {
                    "q": "Qu'indique r = 0 ?",
                    "answer": "Aucune relation linéaire.",
                    "explanation": "Il peut toujours y avoir une relation non linéaire, c'est pourquoi un nuage de points est important."
                  },
                  {
                    "q": "La corrélation prouve-t-elle la causalité ?",
                    "answer": "Non, cela montre uniquement l’association.",
                    "explanation": "La confusion, la causalité inverse ou le hasard peuvent créer une corrélation."
                  }
                ],
                "recap": [
                  "La corrélation mesure la force et la direction d'une relation linéaire.",
                  "Tracez d'abord les données et vérifiez les valeurs aberrantes et la non-linéarité.",
                  "La corrélation n’est pas la causalité."
                ]
              }
            },
            {
              "id": "G3.6",
              "order": 6,
              "title": "Régression simple",
              "objective": "Ajustez une ligne, interprétez la pente et le R au carré et vérifiez les résidus.",
              "content": {
                "why": "La régression quantifie une relation et permet la prédiction, pas seulement la détection. Il estime dans quelle mesure un changement dans une variable est associé à un changement dans la réponse.",
                "what": "La régression linéaire simple correspond à une droite : y est égal à b0 plus b1 fois x, plus l'erreur. La pente b1 est la variation prévue de y pour une augmentation d’une unité de x. L'ordonnée à l'origine b0 est le y prédit lorsque x est nul, ce qui peut ne pas avoir de sens. R au carré est la proportion de variation de y expliquée par x. Un résidu est observé moins prévu. Vérifiez la linéarité, l'indépendance, la variance constante et les résidus normaux avant de vous fier à l'inférence.",
                "how": [
                  "Tracez un nuage de points et recherchez un motif linéaire.",
                  "Ajustez le modèle dans Excel à l'aide de Régression ou LINEST, ou dans Minitab à l'aide de Stat > Régression > Ajuster le modèle de régression.",
                  "Interprétez la pente, l'origine, le R au carré, la valeur p et l'intervalle de confiance.",
                  "Examinez les tracés résiduels pour détecter la courbure, les variations de propagation et les valeurs aberrantes.",
                  "Vérifiez les points influents et l’étendue des données.",
                  "Utilisez le modèle pour la prédiction uniquement dans la plage observée."
                ],
                "where": "Utilisez la régression pour les facteurs de coûts, le temps de cycle, la qualité et l'optimisation des processus. Exemple : le temps d'attente par rapport à la satisfaction a une pente de -0,8 points par minute et un R au carré de 0,45. Une augmentation de dix minutes est associée à un score de satisfaction inférieur d'environ huit points. Le modèle explique 45 % de la variation, donc d’autres facteurs comptent également.",
                "when_not": "N'utilisez pas de régression simple pour une relation clairement courbe. N'extrapolez pas au-delà de la plage de données et n'alléguez pas de causalité à partir d'une régression observationnelle. N'ajustez pas un modèle à un processus instable ou à des groupes agrégés sans vérifier les données sous-jacentes.",
                "common_mistakes": [
                  "Traiter un R carré élevé comme une preuve que le modèle est correct.",
                  "Ignorer les tracés résiduels et les valeurs aberrantes influentes.",
                  "Utiliser la régression pour affirmer que x provoque y."
                ],
                "quick_check": [
                  {
                    "q": "Que signifie la pente dans une régression simple ?",
                    "answer": "Changement prévu dans la réponse pour une augmentation d’une unité du prédicteur.",
                    "explanation": "La pente estime la force et la direction de la relation linéaire."
                  },
                  {
                    "q": "Que mesure le R au carré ?",
                    "answer": "La proportion de variation dans la réponse expliquée par le modèle.",
                    "explanation": "Le R au carré va de 0 à 1 et ne constitue pas en soi un bon modèle."
                  },
                  {
                    "q": "Pourquoi vérifier les parcelles résiduelles ?",
                    "answer": "Pour détecter la courbure, la répartition inégale, les valeurs aberrantes et autres violations d'hypothèses.",
                    "explanation": "Les modèles résiduels révèlent des problèmes que les statistiques récapitulatives peuvent cacher."
                  }
                ],
                "recap": [
                  "La régression simple estime une relation linéaire et prend en charge la prédiction.",
                  "Interprétez ensemble la pente, le R au carré et les résidus.",
                  "N’extrapolez pas et ne déduisez pas de causalité à partir de la seule régression."
                ]
              }
            },
            {
              "id": "G3.7",
              "order": 7,
              "title": "ANOVA Introduction",
              "objective": "Comparez les moyennes de trois groupes ou plus et lisez le test F.",
              "content": {
                "why": "Comparer plusieurs groupes avec des tests t répétés augmente le risque de faux positif. L'ANOVA teste si les moyennes d'un groupe diffèrent tout en contrôlant le taux d'erreur global.",
                "what": "ANOVA signifie Analyse de Variance. L'hypothèse nulle est que toutes les moyennes des groupes sont égales ; l’alternative est qu’au moins une moyenne diffère. La statistique F est la variation entre les groupes divisée par la variation au sein du groupe. Un grand F signifie que les différences entre les groupes sont grandes par rapport au bruit à l'intérieur des groupes. Un résultat significatif n’identifie pas quel groupe diffère ; utilisez un test post-hoc tel que Tukey.",
                "how": [
                  "Définir la réponse et les groupes.",
                  "Tracez des boîtes à moustaches pour voir le modèle et vérifier les valeurs aberrantes.",
                  "Vérifiez les hypothèses : groupes indépendants, résidus approximativement normaux et répartition similaire.",
                  "Exécutez une ANOVA unidirectionnelle dans Excel Data Analysis ou Minitab.",
                  "Lisez la statistique F et la valeur p.",
                  "Si cela est significatif, effectuez un test post-hoc pour identifier les différents groupes.",
                  "Indiquez l’ampleur de l’effet et son importance pratique, pas seulement la valeur p."
                ],
                "where": "Utilisez l'ANOVA pour comparer les fournisseurs, les équipes, les machines, les régions, les méthodes de formation ou les départements. Exemple : le temps moyen de traitement des appels entre quatre équipes donne F = 4,8 et p = 0,004, donc au moins une équipe diffère. Une comparaison Tukey montre que l’équipe C est plus lente. L’équipe étudie ensuite les différences en matière de charge de travail, de personnel et de processus.",
                "when_not": "N'utilisez pas d'ANOVA unidirectionnelle ordinaire pour des mesures répétées sur les mêmes unités sans le modèle approprié. Ne l'utilisez pas lorsque les hypothèses sont gravement violées ; considérez Welch ANOVA ou Kruskal-Wallis. Utilisez un test t pour deux groupes.",
                "common_mistakes": [
                  "Exécution de plusieurs tests t au lieu d’une seule ANOVA.",
                  "S'arrêter à une valeur p significative sans test post-hoc.",
                  "Ignorer les variances inégales ou les résidus non normaux."
                ],
                "quick_check": [
                  {
                    "q": "Que teste l’ANOVA ?",
                    "answer": "Si les moyennes de trois groupes ou plus diffèrent.",
                    "explanation": "Le nul est que toutes les moyennes de groupe sont égales."
                  },
                  {
                    "q": "Qu'indique une grande statistique F ?",
                    "answer": "La variation entre les groupes est importante par rapport à la variation au sein du groupe.",
                    "explanation": "Cela suggère que les moyennes du groupe peuvent différer."
                  },
                  {
                    "q": "Que faire après une ANOVA significative ?",
                    "answer": "Exécutez un test post-hoc pour identifier les groupes qui diffèrent.",
                    "explanation": "L'ANOVA à elle seule ne permet pas de déterminer quel groupe est différent."
                  }
                ],
                "recap": [
                  "L'ANOVA compare les moyennes de trois groupes ou plus.",
                  "Un test F significatif nécessite une analyse post-hoc pour localiser les différences.",
                  "Vérifiez les hypothèses et signalez l’ampleur de l’effet."
                ]
              }
            }
          ]
        },
        {
          "id": "green-4",
          "number": 4,
          "title": "Improve",
          "duration": "2,5 heures",
          "summary": "Choisissez des solutions fondées sur des preuves, testez-les en toute sécurité, corrigez le processus contre les erreurs et commencez à concevoir des expériences.",
          "lessons": [
            {
              "id": "G4.1",
              "order": 1,
              "title": "Sélection de solutions",
              "objective": "Utilisez l’impact, les efforts, les risques et les coûts pour choisir parmi les solutions candidates.",
              "content": {
                "why": "Les équipes génèrent de nombreuses solutions possibles. Une méthode de sélection transparente empêche les idées favorites de gagner et aide l'équipe à choisir une option efficace, réalisable et durable.",
                "what": "La sélection de solutions compare les candidats en termes d'impact, d'effort, de temps, de coût, de risque, de faisabilité et d'acceptation des parties prenantes. Les outils courants incluent la matrice impact-effort, la notation pondérée, la matrice de Pugh, l’analyse coûts-avantages et l’évaluation des risques. La solution doit s’attaquer à la cause profonde vérifiée et améliorer le CTQ. Une solution prometteuse est généralement testée avant sa mise en œuvre complète.",
                "how": [
                  "Reformulez la cause première vérifiée et le CTQ qu’elle affecte.",
                  "Répertoriez les solutions candidates sans encore les évaluer.",
                  "Convenez des critères et des pondérations avec l’équipe et le sponsor.",
                  "Notez chaque candidat et calculez un total pondéré.",
                  "Évaluez les risques, la faisabilité et les conséquences imprévues.",
                  "Sélectionnez un ou deux candidats pour un projet pilote.",
                  "Documentez la justification et la décision."
                ],
                "where": "Utilisez la sélection de solutions dans chaque phase d’amélioration. Exemple : une clinique souhaite réduire l'attente. L’ajout d’une deuxième infirmière de triage obtient un impact élevé, un effort et un coût moyens, et un risque faible. L'allongement des heures entraîne un impact moyen et un effort élevé. Les nouveaux logiciels présentent un coût élevé et des délais de livraison longs. L’équipe pilote d’abord l’infirmière de triage.",
                "when_not": "N'utilisez pas de notation pour justifier une décision déjà prise. N'ignorez pas les contraintes réglementaires ou de sécurité et ne sélectionnez pas de solution avant que la cause première n'ait été vérifiée.",
                "common_mistakes": [
                  "Choisir une solution préférée avant d’évaluer les alternatives.",
                  "Critères de pondération pour produire un gagnant prédéterminé.",
                  "Ignorer les efforts de mise en œuvre, les risques ou l’acceptation des parties prenantes."
                ],
                "quick_check": [
                  {
                    "q": "Qu’est-ce qu’une matrice impact-effort aide une équipe à faire ?",
                    "answer": "Comparez les solutions en fonction de l’impact attendu et de l’effort de mise en œuvre.",
                    "explanation": "Il met en évidence les gains rapides et signale les options nécessitant beaucoup d’efforts et à faible impact."
                  },
                  {
                    "q": "Pourquoi lier une solution à la cause première vérifiée ?",
                    "answer": "Pour augmenter les chances que le correctif supprime réellement le problème.",
                    "explanation": "Une solution qui ne s’attaque pas à la cause ne peut traiter que les symptômes."
                  },
                  {
                    "q": "Pourquoi un projet pilote avant une mise en œuvre complète ?",
                    "answer": "Tester la solution en conditions réelles avec un risque limité.",
                    "explanation": "Un projet pilote fournit des preuves et révèle des effets inattendus."
                  }
                ],
                "recap": [
                  "Sélectionnez des solutions en fonction de l'impact, de l'effort, du risque, du coût et de la faisabilité.",
                  "Liez la solution à la cause première vérifiée et au CTQ.",
                  "Pilotez le candidat le plus fort avant de le mettre à l’échelle."
                ]
              }
            },
            {
              "id": "G4.2",
              "order": 2,
              "title": "Tests pilotes",
              "objective": "Concevez un petit essai avec des mesures de réussite claires et un plan de restauration.",
              "content": {
                "why": "Un pilote teste une solution en conditions réelles avec un risque limité. Il fournit des preuves avant un déploiement complet et révèle les problèmes qu'un plan ou une simulation manquerait.",
                "what": "Un plan pilote définit l'objectif, la portée, le site ou l'équipe, la durée, les mesures de réussite, la référence, les rôles, la formation, la collecte de données, la communication, le plan de restauration et les critères de décision. L'équipe compare les performances du pilote avec la référence ou un groupe témoin. Une décision d’y aller, de ne pas y aller ou d’adaptation est prise à partir de données et non d’enthousiasme.",
                "how": [
                  "Rédigez l’objectif du pilote et les mesures de réussite.",
                  "Choisissez une zone, une équipe ou un quart de travail représentatif.",
                  "Établissez une base de référence avant le début du projet pilote.",
                  "Former les personnes qui utiliseront la nouvelle méthode.",
                  "Exécutez le pilote suffisamment longtemps pour constater un effet stable.",
                  "Collectez des données et surveillez les conséquences inattendues.",
                  "Comparez les résultats et décidez d’évoluer, de vous adapter ou d’arrêter.",
                  "Documenter les leçons apprises pour le déploiement."
                ],
                "where": "Utilisez des projets pilotes dans les domaines de la santé, de la fabrication, des logiciels, de la vente au détail, de la banque et de l'éducation. Exemple : la lecture de codes-barres est testée dans un service pendant quatre semaines. La base de référence est de douze erreurs médicamenteuses par mois et l’objectif est une réduction de 50 %. Le projet pilote enregistre cinq erreurs par mois sans retard dans le flux de travail, ce qui permet à l'équipe de s'adapter à d'autres services.",
                "when_not": "Ne pas piloter dans une zone non représentative et généraliser sans vérifier. Ne sautez pas la ligne de base et n'exécutez pas le pilote trop brièvement pour voir l'effet. N'ignorez pas les effets secondaires sur les autres départements.",
                "common_mistakes": [
                  "Aucun critère de réussite ni référence.",
                  "Pas de plan de retour en arrière si le pilote crée un problème sérieux.",
                  "Ignorer les commentaires du personnel et les conséquences inattendues."
                ],
                "quick_check": [
                  {
                    "q": "Pourquoi un pilote a-t-il besoin d’une base de référence ?",
                    "answer": "Comparer les performances du pilote avec les performances actuelles.",
                    "explanation": "Sans base de référence, l’équipe ne peut pas dire si le changement a fonctionné."
                  },
                  {
                    "q": "Qu'est-ce qu'un plan de restauration ?",
                    "answer": "Une manière prédéfinie de revenir à l'ancienne méthode si le pilote échoue ou cause des dommages.",
                    "explanation": "Cela limite les risques lors des tests."
                  },
                  {
                    "q": "Quelles décisions peuvent suivre un pilote ?",
                    "answer": "Évoluez, adaptez ou arrêtez.",
                    "explanation": "Le résultat du pilote détermine la prochaine étape."
                  }
                ],
                "recap": [
                  "Un pilote teste une solution avec des mesures claires et un risque limité.",
                  "Utilisez une référence, une zone représentative et un plan de restauration.",
                  "Décidez d’évoluer, d’adapter ou d’arrêter en fonction des données."
                ]
              }
            },
            {
              "id": "G4.3",
              "order": 3,
              "title": "Poka-Yoké",
              "objective": "Ajoutez des dispositifs de détection des erreurs ou des contrôles qui préviennent ou détectent les erreurs.",
              "content": {
                "why": "L'erreur humaine est inévitable. Poka-yoke conçoit le processus de manière à ce que les erreurs soient difficiles à commettre ou soient détectées immédiatement, ce qui est plus fiable que les rappels ou la formation seuls.",
                "what": "Poka-yoke signifie protection contre les erreurs. La prévention rend une erreur impossible ou très difficile, comme un connecteur qui ne s'adapte que dans un seul sens. La détection détecte immédiatement une erreur, comme par exemple un scanner qui rejette le mauvais bracelet patient. Un bon poka-yoke est simple, proche de l'œuvre, et conçu avec les personnes qui l'utilisent. Elle est plus efficace lorsqu’elle est associée à une analyse des causes profondes.",
                "how": [
                  "Identifiez le mode de défaillance à l’aide de l’AMDEC ou de l’analyse des causes profondes.",
                  "Comprenez comment et où l'erreur se produit.",
                  "Choisissez d’abord la prévention ; recourir à la détection si la prévention n’est pas pratique.",
                  "Concevez une règle simple en matière d'appareil, de contrôle ou de logiciel.",
                  "Testez-le avec de vrais utilisateurs dans le flux de travail réel.",
                  "Surveillez les nouvelles erreurs ou solutions de contournement.",
                  "Standardisez et attribuez la propriété."
                ],
                "where": "Utilisez Poka-Yoke dans les montages de fabrication, la lecture de codes-barres de médicaments, la validation de formulaires logiciels, les connecteurs à code couleur, les étapes de séquence forcée et les contrôles de liste de contrôle. Exemple : scanner le bracelet du patient et le code-barres du médicament évite de donner le mauvais médicament au mauvais patient. Un exemple plus simple est un client de messagerie qui avertit lorsque le message mentionne une pièce jointe mais qu'aucune n'est jointe.",
                "when_not": "Ne comptez pas sur le poka-yoke pour des erreurs de jugement complexes qui nécessitent une formation ou une aide à la décision. Ne créez pas tellement d’alertes que les gens les ignorent. N'ajoutez pas de périphérique sans tester s'il correspond au flux de travail réel.",
                "common_mistakes": [
                  "Choisir la détection lorsque la prévention est pratique.",
                  "Ajout d'alarmes que les utilisateurs désactivent ou ignorent.",
                  "Traiter le poka-yoke comme un substitut à la recherche de la cause profonde."
                ],
                "quick_check": [
                  {
                    "q": "Quelle est la différence entre prévention et détection en poka-yoke ?",
                    "answer": "La prévention rend une erreur impossible ou difficile ; la détection l’attrape immédiatement.",
                    "explanation": "La prévention est généralement plus forte car l’erreur n’atteint jamais le client."
                  },
                  {
                    "q": "Pourquoi le poka-yoke est-il plus fiable qu'un rappel ?",
                    "answer": "Cela modifie le processus afin que l'erreur soit bloquée ou détectée, plutôt que de compter sur la mémoire.",
                    "explanation": "Les rappels peuvent être oubliés ; une protection contre les erreurs bien conçue est intégrée au travail."
                  },
                  {
                    "q": "Que faire après avoir installé un poka-yoke ?",
                    "answer": "Surveillez les nouvelles erreurs, les solutions de contournement et les effets inattendus.",
                    "explanation": "Les utilisateurs peuvent trouver des moyens de contourner un contrôle qui ne correspond pas au flux de travail."
                  }
                ],
                "recap": [
                  "Poka-yoke prévient les erreurs ou les détecte immédiatement.",
                  "Privilégiez la prévention, gardez la conception simple et testez-la auprès des utilisateurs.",
                  "Associez la protection contre les erreurs à l’analyse et à la surveillance des causes profondes."
                ]
              }
            },
            {
              "id": "G4.4",
              "order": 4,
              "title": "Outils Lean pour l’amélioration",
              "objective": "Appliquez le flux, le tirage, le travail standard et la réflexion sur un changement rapide.",
              "content": {
                "why": "Les ceintures vertes doivent souvent améliorer le flux et les délais, et pas seulement les taux de défauts. Les outils Lean réduisent les attentes, les retards de lots et les retouches sans investissement important en capital.",
                "what": "Le flux signifie que le travail se déroule en douceur avec un minimum de lots et de transferts. Pull signifie que la demande en aval déclenche le travail au lieu de pousser le travail avant les besoins. Le travail standard documente la méthode, la séquence et les contrôles de qualité les plus connus. Le changement rapide, ou SMED, sépare la configuration interne de la configuration externe et réduit le temps de changement. Le temps Takt est le temps de travail disponible divisé par la demande du client.",
                "how": [
                  "Cartographiez la chaîne de valeur et identifiez les retards et les transferts.",
                  "Calculez le temps takt à partir du temps disponible et de la demande du client.",
                  "Réduisez la taille des lots et les approbations inutiles.",
                  "Introduisez le pull là où la demande et l’offre le rendent pratique.",
                  "Standardisez la méthode la plus connue et formez-vous à celle-ci.",
                  "Réduisez le temps de changement en déplaçant le travail en dehors de la fenêtre de changement."
                ],
                "where": "Utilisez les outils Lean dans les secteurs de la fabrication, de la santé, de la banque, de l'informatique, de la vente au détail et de l'éducation. Exemple : une clinique dispose de 480 minutes de temps disponible et de 60 patients, le temps takt est donc de 8 minutes. Si l’étape en cours prend 12 minutes, il s’agit d’un goulot d’étranglement. L'équipe redistribue le travail et standardise la nouvelle méthode pour rapprocher le pas du takt.",
                "when_not": "Ne forcez pas le tirage là où la demande est très variable ou où l’offre est limitée sans tampons appropriés. Ne supprimez pas les contrôles nécessaires pour accélérer un processus et n’utilisez pas les outils Lean comme substitut à la réduction des variations.",
                "common_mistakes": [
                  "Installer Kanban avant que le processus ne soit stable.",
                  "Réduire la taille des lots sans vérifier la capacité en aval.",
                  "Rédiger un travail standard sans formation ni implication de première ligne."
                ],
                "quick_check": [
                  {
                    "q": "Comment est calculé le temps takt ?",
                    "answer": "Temps de travail disponible divisé par la demande du client.",
                    "explanation": "Le Takt time détermine le rythme dont le processus a besoin pour répondre à la demande des clients."
                  },
                  {
                    "q": "Que signifie tirer dans le Lean ?",
                    "answer": "Le travail est déclenché par la demande en aval plutôt que poussé avant elle.",
                    "explanation": "Pull réduit la surproduction et l’excès de travail en cours."
                  },
                  {
                    "q": "Quel est l’objectif d’un changement rapide ?",
                    "answer": "Réduire le temps et le gaspillage nécessaires pour passer d’un produit ou d’une tâche à un autre.",
                    "explanation": "Des changements plus courts permettent des lots plus petits et un flux plus flexible."
                  }
                ],
                "recap": [
                  "Les outils Lean améliorent le flux, le tirage, le travail standard et le changement.",
                  "Utilisez le takt time pour comprendre le rythme requis.",
                  "Stabilisez le processus et impliquez les personnes qui effectuent le travail."
                ]
              }
            },
            {
              "id": "G4.5",
              "order": 5,
              "title": "Présentation du DOE",
              "objective": "Expliquez les facteurs, les niveaux, les réponses et pourquoi les expériences surpassent les tests à un facteur.",
              "content": {
                "why": "Tester un facteur à la fois manque des interactions et gaspille des exécutions. Le plan d’expériences teste plusieurs facteurs ensemble et montre quels paramètres sont réellement importants.",
                "what": "Un facteur est une variable d'entrée ; un niveau est un paramètre de ce facteur ; une réponse est la sortie mesurée ; une analyse est un essai expérimental. Un effet principal est la variation moyenne de la réponse lorsqu'un facteur change. Une interaction signifie que l’effet d’un facteur dépend du niveau d’un autre. La randomisation protège contre les variables cachées et la réplication fournit une estimation de l'erreur expérimentale.",
                "how": [
                  "Définir l’objectif et la métrique de réponse.",
                  "Choisissez les facteurs et leurs niveaux.",
                  "Sélectionnez un plan, tel qu'une factorielle complète à deux niveaux ou une factorielle fractionnaire pour le dépistage.",
                  "Randomisez l’ordre d’exécution et incluez les répétitions.",
                  "Exécutez l’expérience et enregistrez la réponse.",
                  "Analysez les principaux effets et interactions dans un logiciel tel que Minitab.",
                  "Exécutez des essais de confirmation avec les paramètres recommandés."
                ],
                "where": "Utilisez DOE pour l’optimisation des processus, la conception des produits et la robustesse. Exemple : la température du four à 150 ou 170 degrés et la durée à 20 ou 30 minutes affectent la résistance. Un plan deux par deux avec deux répétitions nécessite huit analyses. Si la meilleure température dépend du temps, les facteurs interagissent et doivent être combinés et non un par un.",
                "when_not": "N'utilisez pas le DOE lorsque les facteurs sont dangereux ou impossibles à contrôler. N'expérimentez pas avant que le système de mesure soit adéquat et ne confondez pas les effets en sautant la randomisation.",
                "common_mistakes": [
                  "Changer un facteur à la fois et manquer d’interactions.",
                  "Pas de réplication, l'équipe ne peut donc pas estimer l'erreur.",
                  "Trop de facteurs dans une seule expérience sans plan de sélection."
                ],
                "quick_check": [
                  {
                    "q": "Qu’est-ce qu’un facteur dans le DOE ?",
                    "answer": "Une variable d'entrée qui est délibérément modifiée dans l'expérience.",
                    "explanation": "Les facteurs sont définis à différents niveaux pour voir leur effet sur la réponse."
                  },
                  {
                    "q": "Qu'est-ce qu'une interaction ?",
                    "answer": "Lorsque l’effet d’un facteur dépend du niveau d’un autre facteur.",
                    "explanation": "Les interactions sont l’une des principales raisons pour lesquelles le DOE surpasse les tests un facteur à la fois."
                  },
                  {
                    "q": "Pourquoi randomiser l'ordre d'exécution ?",
                    "answer": "Pour se protéger contre les variables cachées telles que le temps, la température ou la dérive de l'opérateur.",
                    "explanation": "La randomisation propage des effets incontrôlés à travers l’expérience."
                  }
                ],
                "recap": [
                  "Le DOE teste plusieurs facteurs et estime les principaux effets et interactions.",
                  "Randomisez, reproduisez et utilisez une conception adaptée à l’objectif.",
                  "Confirmez l’optimum prévu avec des exécutions de validation."
                ]
              }
            }
          ]
        },
        {
          "id": "green-5",
          "number": 5,
          "title": "Control",
          "duration": "2 heures",
          "summary": "Conservez les gains en surveillant le processus, en documentant la nouvelle norme et en attribuant une responsabilité claire.",
          "lessons": [
            {
              "id": "G5.1",
              "order": 1,
              "title": "Cartes de contrôle",
              "objective": "Sélectionnez les cartes X-bar/R, I-MR, p, np, c ou u et appliquez les règles de base.",
              "content": {
                "why": "Les cartes de contrôle séparent les variations de cause commune des signaux de cause spéciale. Ils indiquent à l’équipe quand agir et quand laisser le processus tranquille, ce qui est essentiel pour pérenniser une amélioration.",
                "what": "Pour des données continues, utilisez une carte X-bar et R pour les petits sous-groupes, une carte X-bar et S pour les sous-groupes plus grands ou une carte I-MR pour les valeurs individuelles. Pour les données d'attribut, utilisez un diagramme p pour la proportion de défauts avec une taille d'échantillon variable, un diagramme np pour le nombre de défectueux avec une taille d'échantillon constante, un diagramme c pour les défauts par unité avec une taille d'unité constante ou un diagramme u pour les défauts par unité avec une taille d'unité variable. Les limites de contrôle proviennent des données de processus et non des spécifications.",
                "how": [
                  "Choisissez le graphique en fonction du type de données, de la taille du sous-groupe et de la taille de l'échantillon.",
                  "Collectez environ 20 à 25 sous-groupes ou points de base.",
                  "Calculez la ligne médiane et les limites de contrôle.",
                  "Tracez les nouvelles données dans l’ordre chronologique.",
                  "Appliquez des règles pour les points au-delà des limites, des courses, des tendances et des modèles inhabituels.",
                  "Recherchez les causes particulières avant de modifier le processus.",
                  "Recalculez les limites uniquement après un changement de processus connu."
                ],
                "where": "Utilisez des graphiques de contrôle pour les dimensions de fabrication, les temps d'attente dans les hôpitaux, les rapports en retard, les taux de défauts, le temps de traitement des appels et les erreurs de transaction. Exemple : un graphique I-MR suit le temps d'attente quotidien, un graphique à barres X et R suit cinq échantillons par heure et un graphique P suit le pourcentage de rapports en retard lorsque le volume varie.",
                "when_not": "N'utilisez pas les limites de spécification comme limites de contrôle. Ne recalculez pas les limites uniquement pour masquer un signal et n'utilisez pas de diagramme attributaire pour les données continues.",
                "common_mistakes": [
                  "Choisir le mauvais graphique pour le type de données.",
                  "Trop peu de points de référence, produisant des limites peu fiables.",
                  "Réagir à une variation de cause commune comme s’il s’agissait d’une cause particulière."
                ],
                "quick_check": [
                  {
                    "q": "Quel graphique est utilisé pour les mesures individuelles au fil du temps ?",
                    "answer": "Un graphique I-MR.",
                    "explanation": "Les graphiques I-MR suivent les valeurs individuelles et la plage de déplacement."
                  },
                  {
                    "q": "Quel graphique est utilisé pour la proportion de défectueux avec une taille d'échantillon variable ?",
                    "answer": "Un tableau p.",
                    "explanation": "Les graphiques p permettent de varier la taille de l’échantillon."
                  },
                  {
                    "q": "D’où viennent les limites de contrôle ?",
                    "answer": "À partir des données du processus et non des spécifications du client.",
                    "explanation": "Les limites de contrôle décrivent la variation naturelle du processus."
                  }
                ],
                "recap": [
                  "Faites correspondre la carte de contrôle au type de données et à la taille de l’échantillon.",
                  "Les limites de contrôle proviennent des données de processus et non des spécifications.",
                  "Recherchez les causes particulières et recalculez uniquement après des modifications du processus."
                ]
              }
            },
            {
              "id": "G5.2",
              "order": 2,
              "title": "Plans de contrôle",
              "objective": "Documentez les métriques, l’échantillonnage, les réactions et les propriétaires.",
              "content": {
                "why": "Les améliorations diminuent sans surveillance. Un plan de contrôle définit comment le processus sera surveillé, qui réagit en cas de dérive et comment les gains seront protégés.",
                "what": "Un plan de contrôle répertorie l'étape du processus, la métrique ou CTQ, la spécification, la méthode de mesure, la taille et la fréquence de l'échantillon, le graphique ou la méthode de surveillance, le plan de réaction, le propriétaire et le chemin de remontée d'informations. Le plan de réaction indique ce qu'il faut vérifier, qui prévenir, comment contenir le problème et quelles mesures correctives prendre. Le plan est lié aux travaux standard, à l'AMDEC et aux cartes de contrôle.",
                "how": [
                  "Identifiez les mesures critiques qui doivent être surveillées.",
                  "Définir la méthode et la fréquence de mesure.",
                  "Choisissez le graphique ou l’approche de suivi et le déclencheur de l’action.",
                  "Rédigez un plan de réaction spécifique pour chaque déclencheur.",
                  "Attribuez un propriétaire et un chemin d’escalade.",
                  "Formez les personnes qui utiliseront le plan.",
                  "Auditez le plan et mettez-le à jour lorsque le processus change."
                ],
                "where": "Utilisez un plan de contrôle pour chaque processus amélioré, en particulier lors du transfert du projet. Exemple : les erreurs de médication sont suivies mensuellement sur un graphique P. Si le taux dépasse la limite de contrôle, le propriétaire vérifie les rapports, examine les cas, vérifie si le travail standard a été suivi et en informe le responsable de la pharmacie.",
                "when_not": "Ne créez pas un plan de contrôle que personne n’utilise. Ne surveillez pas trop de métriques au point de perdre les plus importantes, et ne définissez pas de déclencheur sans capacité de réponse.",
                "common_mistakes": [
                  "Aucun propriétaire nommé ni chemin d'escalade.",
                  "Un plan de réaction qui dit seulement « enquêter » sans étapes spécifiques.",
                  "Surveillance des métriques retardées sans avertissement précoce."
                ],
                "quick_check": [
                  {
                    "q": "Que doit contenir un plan de réaction ?",
                    "answer": "Que vérifier, qui informer, comment contenir le problème et quelles mesures correctives prendre.",
                    "explanation": "Un plan de réaction spécifique rend le suivi réalisable."
                  },
                  {
                    "q": "Pourquoi un plan de contrôle a-t-il besoin d'un propriétaire ?",
                    "answer": "Quelqu’un doit être responsable de la surveillance et de la réponse.",
                    "explanation": "Sans appropriation, les signaux sont souvent ignorés."
                  },
                  {
                    "q": "Quand un plan de contrôle doit-il être mis à jour ?",
                    "answer": "Lorsque le processus, la mesure ou le risque change.",
                    "explanation": "Un plan obsolète peut surveiller une mauvaise chose."
                  }
                ],
                "recap": [
                  "Un plan de contrôle définit les métriques, l'échantillonnage, les déclencheurs, les réactions et les propriétaires.",
                  "Précisez le plan de réaction et attribuez des responsabilités.",
                  "Auditez et mettez à jour le plan lorsque le processus change."
                ]
              }
            },
            {
              "id": "G5.3",
              "order": 3,
              "title": "SOP et normalisation",
              "objective": "Rédigez un travail standard utilisable et entraînez-vous à celui-ci.",
              "content": {
                "why": "Le travail standard est la base des gains durables. Sans une norme claire, les gens reviennent aux anciennes méthodes et les améliorations disparaissent lentement.",
                "what": "Une procédure opérationnelle standard documente la méthode la plus connue pour une tâche. Le travail standard va plus loin en définissant la séquence, le calendrier, les contrôles de qualité, la sécurité et le résultat attendu. Une SOP utilisable comprend l'objectif, la portée, les rôles, les instructions étape par étape, les visuels, les points de décision, les exceptions et l'historique des révisions. Il doit être rédigé avec les personnes qui effectuent le travail et disponible sur le lieu d'utilisation.",
                "how": [
                  "Observez et documentez la meilleure méthode actuelle.",
                  "Impliquez les personnes qui effectuent le travail.",
                  "Rédigez la procédure avec des photos, des captures d'écran ou des diagrammes simples.",
                  "Testez le brouillon dans le flux de travail réel et révisez-le.",
                  "Former les utilisateurs et vérifier les compétences.",
                  "Placez l'étalon au point d'utilisation.",
                  "Vérifier le respect et réviser grâce au contrôle des changements."
                ],
                "where": "Utilisez un travail standard dans les domaines de la santé, de la fabrication, des services, de l'informatique, de la banque et de l'éducation. Exemple : une liste de contrôle de décharge répertorie chaque étape, le propriétaire, le calendrier et le chemin d'escalade. Cela réduit les étapes manquées et rend les transferts prévisibles. Une équipe logicielle peut utiliser une liste de contrôle de publication de la même manière.",
                "when_not": "N'écrivez pas de procédure rigide pour un travail véritablement créatif ou très variable sans règles de décision claires. Ne créez pas de documents de bibliothèque que personne ne lit et ne standardisez pas un processus avant qu'il ne soit amélioré.",
                "common_mistakes": [
                  "Rédiger la SOP sans les personnes qui font le travail.",
                  "Rendre le document trop long ou difficile à utiliser sur le lieu de travail.",
                  "Aucun processus de formation, d’audit ou de révision."
                ],
                "quick_check": [
                  {
                    "q": "Qu’est-ce qui rend une SOP utilisable ?",
                    "answer": "Des étapes, des visuels, des rôles, des exceptions et un accès clairs au point d'utilisation.",
                    "explanation": "Une SOP utilisable soutient le vrai travail plutôt que de ramasser la poussière."
                  },
                  {
                    "q": "Pourquoi impliquer le personnel de première ligne dans la rédaction des travaux standards ?",
                    "answer": "Ils connaissent le processus réel et peuvent identifier les étapes pratiques et les points d’échec.",
                    "explanation": "La participation améliore la précision et l’adoption."
                  },
                  {
                    "q": "Le travail standard est-il permanent ?",
                    "answer": "Non. Il doit être mis à jour via le contrôle des modifications lorsqu’une meilleure méthode est éprouvée.",
                    "explanation": "Le travail standard est actuellement la meilleure méthode, et non une règle figée."
                  }
                ],
                "recap": [
                  "Le travail standard documente la méthode, la séquence et les contrôles de qualité les plus connus.",
                  "Écrivez-le avec les utilisateurs, testez-le, formez-le et conservez-le au point d'utilisation.",
                  "Vérifier le respect et améliorer la norme grâce au contrôle des changements."
                ]
              }
            }
          ]
        },
        {
          "id": "green-6",
          "number": 6,
          "title": "Gestion de projet et logiciels",
          "duration": "2 heures",
          "summary": "Exécutez le projet de manière professionnelle et utilisez Excel ou Minitab pour les analyses de base.",
          "lessons": [
            {
              "id": "G6.1",
              "order": 1,
              "title": "Gestion de projet",
              "objective": "Planifiez les tâches, gérez les risques, communiquez le statut et clôturez le projet.",
              "content": {
                "why": "Les projets de la ceinture verte nécessitent une planification, une gestion des risques, une communication et une clôture. Les outils techniques seuls ne donnent pas de résultats si le travail est en retard, si la portée dérive ou si le transfert est faible.",
                "what": "La gestion de projet d'amélioration couvre la portée, le calendrier, les ressources, les parties prenantes, les risques, la communication, les contrôles de qualité, le contrôle des modifications et la clôture. Une structure de répartition du travail divise le travail en tâches gérables. Un diagramme de Gantt montre le calendrier et les dépendances. Un journal RAID suit les risques, les hypothèses, les problèmes et les dépendances. Les examens du péage confirment que chaque phase DMAIC est terminée.",
                "how": [
                  "Définissez la portée, les livrables et les dates des jalons.",
                  "Construisez une structure de répartition du travail et estimez l’effort.",
                  "Séquencer les tâches et identifier le chemin critique.",
                  "Tenez un journal RAID et examinez-le chaque semaine.",
                  "Communiquer le statut au sponsor et aux parties prenantes.",
                  "Organisez des examens de porte avant de passer à la phase suivante.",
                  "Clôturez le projet avec un transfert de responsabilité, les leçons apprises et la validation des avantages."
                ],
                "where": "Utilisez la gestion de projet sur chaque projet Green Belt, en particulier le travail interfonctionnel. Exemple : un projet de décharge de douze semaines comporte une répartition du travail par phase DMAIC, un diagramme de Gantt, un stand-up hebdomadaire, un journal RAID, des revues de porte avec le sponsor et un transfert au responsable du service.",
                "when_not": "Ne construisez pas un plan de projet lourd pour une petite solution qui prend une journée. Ne vous fiez pas à un diagramme de Gantt sans comprendre les dépendances, et n'ignorez pas les risques car le travail technique semble simple.",
                "common_mistakes": [
                  "Aucune répartition du travail, donc les tâches et les propriétaires ne sont pas clairs.",
                  "Un calendrier optimiste sans imprévu.",
                  "Aucun journal des risques, mauvaise communication ou aucune clôture formelle."
                ],
                "quick_check": [
                  {
                    "q": "Qu'est-ce qu'un journal RAID ?",
                    "answer": "Un journal des risques, des hypothèses, des problèmes et des dépendances.",
                    "explanation": "RAID maintient les menaces et les contraintes du projet visibles."
                  },
                  {
                    "q": "Quel est le chemin critique ?",
                    "answer": "La plus longue séquence de tâches dépendantes qui détermine la durée du projet.",
                    "explanation": "Un retard sur le chemin critique retarde l’ensemble du projet."
                  },
                  {
                    "q": "Pourquoi clôturer un projet ?",
                    "answer": "Pour confirmer les avantages, transférer la propriété et capturer les leçons apprises.",
                    "explanation": "La clôture empêche le projet de s’effondrer sans responsabilité."
                  }
                ],
                "recap": [
                  "Planifiez la portée, le calendrier, les risques, la communication et les portes.",
                  "Utilisez une structure de répartition du travail, un diagramme de Gantt et un journal RAID.",
                  "Clôturez avec le transfert de responsabilité, la validation des avantages et les leçons apprises."
                ]
              }
            },
            {
              "id": "G6.2",
              "order": 2,
              "title": "Notions de base sur Excel et Minitab",
              "objective": "Utilisez des statistiques descriptives, des cartes de contrôle, des capacités et des tests T dans le logiciel.",
              "content": {
                "why": "Les ceintures vertes ont besoin de logiciels pour analyser les données de manière efficace et reproductible. Savoir quel outil utiliser et vérifier ses hypothèses permet d’éviter les erreurs et de gagner du temps.",
                "what": "Excel est utile pour les statistiques descriptives, les graphiques d'exécution, les histogrammes, les nuages ​​de points, la régression, les tests t et l'ANOVA simple. Minitab est plus puissant pour Gage R&R, l'analyse de capabilité, les cartes de contrôle, la régression, l'ANOVA et la conception d'expériences. Les deux outils nécessitent des données claires, la bonne méthode et l’interprétation des hypothèses et des graphiques.",
                "how": [
                  "Nettoyer et structurer les données avant analyse.",
                  "Choisissez la méthode qui correspond à la question et au type de données.",
                  "Exécutez l'analyse dans Excel ou Minitab.",
                  "Vérifiez les hypothèses et les graphiques de diagnostic.",
                  "Interprétez le résultat, y compris l’ampleur de l’effet et les intervalles de confiance.",
                  "Enregistrez le fichier avec un nom de version clair.",
                  "Documentez les étapes afin que l’analyse puisse être répétée."
                ],
                "where": "Utilisez Excel pour des résumés rapides et des graphiques simples, et Minitab pour des statistiques avancées et DOE. Exemple : un test t sur deux échantillons peut être exécuté dans les deux outils ; comparez la valeur p et l’intervalle de confiance. Une étude de capabilité est généralement plus rapide dans Minitab sous Stat > Outils qualité > Analyse de capabilité > Normal.",
                "when_not": "N'utilisez pas de logiciel sans comprendre la méthode et ses hypothèses. Ne faites pas confiance aveuglément aux paramètres par défaut et n'utilisez pas Excel pour des DOE complexes lorsqu'un package statistique validé est disponible.",
                "common_mistakes": [
                  "Analyser le mauvais type de données ou inclure des lignes masquées.",
                  "Utiliser l'alpha par défaut sans vérifier la norme du projet.",
                  "Ignorer les vérifications d'hypothèses et les tracés de diagnostic."
                ],
                "quick_check": [
                  {
                    "q": "Quel outil est généralement le plus puissant pour le DOE et l’analyse de capabilité ?",
                    "answer": "Minitab.",
                    "explanation": "Minitab dispose de menus dédiés au DOE, aux capacités, au MSA et aux cartes de contrôle."
                  },
                  {
                    "q": "Que devez-vous faire avant d’exécuter une analyse ?",
                    "answer": "Nettoyez les données et confirmez que la méthode correspond à la question et au type de données.",
                    "explanation": "Une bonne analyse commence par de bonnes données et la bonne méthode."
                  },
                  {
                    "q": "Pourquoi documenter les étapes d’analyse ?",
                    "answer": "Le travail peut ainsi être répété, révisé et défendu.",
                    "explanation": "La reproductibilité est essentielle pour la confiance et l’audit."
                  }
                ],
                "recap": [
                  "Excel gère des résumés rapides et des tests simples ; Minitab gère les statistiques avancées et le DOE.",
                  "Nettoyez les données, choisissez la bonne méthode et vérifiez les hypothèses.",
                  "Documentez l’analyse afin qu’elle puisse être reproduite."
                ]
              }
            }
          ]
        }
      ],
      "coverageChecklist": [
        {
          "topic": "Définir : charte",
          "lessons": [
            "G1.1"
          ]
        },
        {
          "topic": "Définir : les parties prenantes",
          "lessons": [
            "G1.2"
          ]
        },
        {
          "topic": "Définir : COV/CTQ",
          "lessons": [
            "G1.3"
          ]
        },
        {
          "topic": "Mesure : forfait de données",
          "lessons": [
            "G2.1"
          ]
        },
        {
          "topic": "Mesure : échantillonnage",
          "lessons": [
            "G2.2"
          ]
        },
        {
          "topic": "Mesure : MSA",
          "lessons": [
            "G2.3"
          ]
        },
        {
          "topic": "Mesure : statistiques descriptives",
          "lessons": [
            "G2.4"
          ]
        },
        {
          "topic": "Mesure : distribution normale",
          "lessons": [
            "G2.5"
          ]
        },
        {
          "topic": "Mesure : niveau sigma",
          "lessons": [
            "G2.6"
          ]
        },
        {
          "topic": "Mesure : DPMO",
          "lessons": [
            "G2.6"
          ]
        },
        {
          "topic": "Mesure : Cp/Cpk",
          "lessons": [
            "G2.7"
          ]
        },
        {
          "topic": "Analyser : graphiques",
          "lessons": [
            "G3.1"
          ]
        },
        {
          "topic": "Analyser : la cause première",
          "lessons": [
            "G3.2"
          ]
        },
        {
          "topic": "Analyser : AMDEC",
          "lessons": [
            "G3.3"
          ]
        },
        {
          "topic": "Analyser : bases des tests d'hypothèses",
          "lessons": [
            "G3.4"
          ]
        },
        {
          "topic": "Analyser : corrélation",
          "lessons": [
            "G3.5"
          ]
        },
        {
          "topic": "Analyser : régression simple",
          "lessons": [
            "G3.6"
          ]
        },
        {
          "topic": "Analyser : introduction de l'ANOVA",
          "lessons": [
            "G3.7"
          ]
        },
        {
          "topic": "Améliorer : sélection de solutions",
          "lessons": [
            "G4.1"
          ]
        },
        {
          "topic": "Améliorer : pilote",
          "lessons": [
            "G4.2"
          ]
        },
        {
          "topic": "Améliorer : poka-yoke",
          "lessons": [
            "G4.3"
          ]
        },
        {
          "topic": "Améliorer : outils Lean",
          "lessons": [
            "G4.4"
          ]
        },
        {
          "topic": "Améliorer : introduction du DOE",
          "lessons": [
            "G4.5"
          ]
        },
        {
          "topic": "Contrôle : cartes de contrôle",
          "lessons": [
            "G5.1"
          ]
        },
        {
          "topic": "Contrôle : plan de contrôle",
          "lessons": [
            "G5.2"
          ]
        },
        {
          "topic": "Contrôle : SOP",
          "lessons": [
            "G5.3"
          ]
        },
        {
          "topic": "Gestion de projet",
          "lessons": [
            "G6.1"
          ]
        },
        {
          "topic": "Bases d'Excel/Minitab",
          "lessons": [
            "G6.2"
          ]
        }
      ],
      "project": {
        "title": "Réduire les absences aux rendez-vous",
        "brief": "Nourrissez un projet visant à réduire les non-présentations dans une clinique, une agence bancaire ou un centre de services. Créez un plan de données, vérifiez le système de mesure, évaluez le taux de non-présentation, exécutez un test de Pareto et d'hypothèse, testez une solution de rappel et transmettez une carte de contrôle et un plan de contrôle."
      },
      "exam": {
        "questions": 60,
        "passingScore": 80,
        "format": "60 questions à choix multiples avec quatre options et explications, y compris des calculs."
      },
      "cheatSheet": [
        "Z = (X - moyenne) / écart type",
        "DPMO = défauts / (unités x opportunités) x 1 000 000",
        "Cp = (USL - LSL) / 6 sigma ; Cpk = min((USL - moyenne)/3 sigma, (moyenne - LSL)/3 sigma)",
        "p-value < alpha: reject the null hypothesis"
      ],
      "nextChecklist": [
        "Je peux construire un plan de collecte de données et un plan d'échantillonnage.",
        "Je peux interpréter un Gage R&R et un rapport de capacité.",
        "Je peux choisir un test d’hypothèse de base pour une question.",
        "Je peux remettre une carte de contrôle et un plan de contrôle."
      ]
    },
    {
      "id": "black",
      "name": "Ceinture noire",
      "level": 4,
      "color": "black",
      "icon": "fa-crown",
      "lessonTarget": "35-45",
      "studyTime": "80-100 heures",
      "audience": "Leaders de l'amélioration à temps plein qui dirigent des projets complexes et interfonctionnels et coachent les Green Belts.",
      "prerequisites": "Certification Green Belt et réalisation d’au moins un projet DMAIC.",
      "previousRecap": "Récapitulatif de la ceinture verte : les projets DMAIC ont besoin d'une charte, de mesures fiables, d'analyses de capacités, de tests d'hypothèses, de pilotes et de plans de contrôle ; la régression simple et l’ANOVA soutiennent les décisions.",
      "outcomes": [
        "Diriger des projets DMAIC et de conception complexes dans toutes les fonctions",
        "Appliquez des statistiques avancées, une régression et des expériences conçues",
        "Gérer les systèmes de mesure d'attributs, les données non normales et les SPC avancés",
        "Intégrer Lean, DFSS, le leadership du changement, la finance et le mentorat"
      ],
      "modules": [
        {
          "id": "black-1",
          "number": 1,
          "title": "Probabilité et inférence",
          "duration": "5 heures",
          "summary": "Construisez la base statistique pour une prise de décision avancée : distributions, échantillonnage, confiance, puissance et boîte à outils complète de test d'hypothèses.",
          "lessons": [
            {
              "id": "B1.1",
              "order": 1,
              "title": "Distributions de probabilité",
              "objective": "Reconnaissez les modèles normaux, binomiaux, de Poisson, exponentiels et Weibull.",
              "content": {
                "why": "La distribution derrière les données détermine quelles méthodes de capacité, de carte de contrôle et d'hypothèse sont valides. Choisir la mauvaise distribution peut produire des conclusions sûres mais erronées.",
                "what": "La distribution normale est continue, symétrique et définie par la moyenne et l'écart type ; il s'adapte à de nombreuses variables de mesure. La distribution binomiale compte les réussites dans un nombre fixe d'essais indépendants avec une probabilité constante, comme la réussite ou l'échec. La distribution de Poisson compte les événements dans un temps ou un espace fixe, tels que les défauts par unité ou les arrivées par heure. La distribution exponentielle modélise le temps entre les événements de Poisson. La distribution de Weibull est flexible pour les données de durée de vie et de fiabilité et peut représenter des taux de défaillance croissants, constants ou décroissants.",
                "how": [
                  "Identifiez le type de données : mesure continue, résultat binaire, décompte ou temps entre les événements.",
                  "Tracez un histogramme ou un tracé de probabilité.",
                  "Proposez une distribution qui correspond au processus de génération de données.",
                  "Ajustez la distribution et vérifiez l’adéquation.",
                  "Utilisez la distribution ajustée dans l'analyse de capacité, de contrôle ou de fiabilité.",
                  "Validez le choix avec la connaissance des processus et de nouvelles données."
                ],
                "where": "Utilisez vos connaissances en matière de distribution en matière de fiabilité de la fabrication, d'arrivées de soins de santé, de centres d'appels, de transactions bancaires et d'incidents informatiques. Exemple : les appels par heure suivent souvent un modèle de Poisson, le temps entre les appels suit un modèle exponentiel, la proportion d'appels abandonnés est binomiale et la durée de vie de l'équipement peut suivre un modèle de Weibull.",
                "when_not": "Ne forcez pas une distribution normale sur les comptes ou les proportions. N'utilisez pas de modèle binomial lorsque les essais sont dépendants ou que la probabilité change, et n'utilisez pas Poisson lorsque les événements se regroupent ou que la variance dépasse de loin la moyenne.",
                "common_mistakes": [
                  "En supposant que chaque ensemble de données est normal.",
                  "Ignorer la surdispersion dans les données de comptage.",
                  "Ajuster une distribution sans vérifier l'adéquation de l'ajustement."
                ],
                "quick_check": [
                  {
                    "q": "Quelle distribution modélise le nombre de succès dans un nombre fixe d’essais indépendants ?",
                    "answer": "La distribution binomiale.",
                    "explanation": "Les données binomiales ont deux résultats et une probabilité de succès constante."
                  },
                  {
                    "q": "Quelle distribution est souvent utilisée pour les données de délai de défaillance avec un taux de défaillance flexible ?",
                    "answer": "La distribution de Weibull.",
                    "explanation": "Les paramètres de forme et d'échelle de Weibull permettent un risque croissant, constant ou décroissant."
                  },
                  {
                    "q": "Quels modèles de distribution comptent les événements dans un temps ou un espace fixe ?",
                    "answer": "La distribution de Poisson.",
                    "explanation": "Poisson modélise le nombre d'événements rares tels que les défauts par unité ou les arrivées par heure."
                  }
                ],
                "recap": [
                  "Faites correspondre la distribution au processus de génération de données.",
                  "Normal, binomial, Poisson, exponentiel et Weibull couvrent les situations Lean Six Sigma courantes.",
                  "Ajustez et vérifiez la distribution avant de l'utiliser pour l'inférence."
                ]
              }
            },
            {
              "id": "B1.2",
              "order": 2,
              "title": "Distributions d'échantillonnage et théorème central limite",
              "objective": "Expliquez pourquoi les moyennes des échantillons se comportent de manière prévisible.",
              "content": {
                "why": "L'inférence statistique repose sur des distributions d'échantillonnage. Le théorème central limite explique pourquoi les moyennes des échantillons se comportent de manière prévisible et pourquoi les intervalles de confiance et les tests fonctionnent.",
                "what": "Une distribution d'échantillonnage est la distribution d'une statistique, telle que la moyenne, sur des échantillons répétés. L'erreur type est l'écart type de cette statistique. Pour une moyenne, l’erreur type est sigma divisé par la racine carrée de n. Le théorème central limite dit que pour un grand échantillon, la distribution de la moyenne de l’échantillon est approximativement normale, quelle que soit la forme de la population. La moyenne de l’échantillon est égale à la moyenne de la population et l’écart diminue à mesure que n augmente.",
                "how": [
                  "Définissez la population, la taille de l’échantillon et les statistiques.",
                  "Prenez des échantillons répétés ou simulez-le.",
                  "Tracez la distribution des moyennes de l’échantillon.",
                  "Calculez l’erreur type.",
                  "Appliquez le théorème central limite lorsque l’échantillon est suffisamment grand.",
                  "Utilisez-le pour les intervalles de confiance ou les tests d’hypothèses."
                ],
                "where": "Utilisez des distributions d'échantillonnage pour les enquêtes, les audits, les cartes de contrôle et toute inférence sur une moyenne ou une proportion. Exemple : une population a une moyenne de 100 et un écart type de 20. Avec n = 25, l'erreur type est de 4, donc la moyenne de l'échantillon est approximativement normale avec une moyenne de 100 et un écart type de 4. Avec n = 100, l'erreur type tombe à 2.",
                "when_not": "N'appliquez pas aveuglément le théorème central limite à des échantillons minuscules ou à des données extrêmement asymétriques. Pour les proportions, vérifiez que np et n(1-p) sont suffisamment grands. Pour les données dépendantes telles que les séries chronologiques, utilisez des méthodes qui tiennent compte de l'autocorrélation.",
                "common_mistakes": [
                  "Confondre l'écart type des données avec l'erreur type de la moyenne.",
                  "Croire au théorème rend les données brutes normales.",
                  "Utiliser n = 30 comme règle universelle pour les données fortement asymétriques."
                ],
                "quick_check": [
                  {
                    "q": "Quelle est l’erreur type de la moyenne ?",
                    "answer": "L'écart type de la population divisé par la racine carrée de n.",
                    "explanation": "Il décrit la répartition des moyennes d’échantillon sur des échantillons répétés."
                  },
                  {
                    "q": "Que dit le théorème central limite ?",
                    "answer": "Pour des échantillons suffisamment grands, la moyenne de l’échantillon est à peu près normalement distribuée.",
                    "explanation": "Cela est vrai même lorsque la population n’est pas normale, sous réserve de la taille et de la forme de l’échantillon."
                  },
                  {
                    "q": "Qu’arrive-t-il à l’erreur type à mesure que la taille de l’échantillon augmente ?",
                    "answer": "Elle diminue proportionnellement à la racine carrée de n.",
                    "explanation": "Des échantillons plus grands donnent des estimations plus précises."
                  }
                ],
                "recap": [
                  "Les distributions d'échantillonnage décrivent comment les statistiques varient entre des échantillons répétés.",
                  "L'erreur standard de la moyenne est sigma divisé par la racine carrée de n.",
                  "Le théorème central limite prend en charge l’inférence avec de grands échantillons."
                ]
              }
            },
            {
              "id": "B1.3",
              "order": 3,
              "title": "Intervalles de confiance",
              "objective": "Interprétez les estimations d’intervalle pour les moyennes, les proportions et les différences.",
              "content": {
                "why": "Une estimation ponctuelle sans incertitude est incomplète. Les intervalles de confiance montrent la précision d'une estimation et la plage de valeurs plausibles, ce qui permet de prendre de meilleures décisions.",
                "what": "Un intervalle de confiance est une estimation plus ou moins une valeur critique multipliée par une erreur standard. Pour une moyenne avec un sigma inconnu, utilisez la barre x plus ou moins t fois s divisé par la racine carrée de n. Pour une proportion, utilisez p-hat plus ou moins z fois l'erreur standard, ou un intervalle de Wilson pour les petits échantillons. Pour une différence, calculez la différence et son erreur type. Un intervalle de 95 % signifie que si l'échantillonnage était répété, environ 95 % de ces intervalles contiendraient le véritable paramètre.",
                "how": [
                  "Identifiez le paramètre : moyenne, proportion ou différence.",
                  "Vérifiez les hypothèses pour l’intervalle.",
                  "Calculez l’estimation et l’erreur type.",
                  "Choisissez la valeur critique pour le niveau de confiance.",
                  "Construisez l’intervalle.",
                  "Interprétez-le dans le contexte du processus et de la décision pratique.",
                  "Comparez l'intervalle avec une cible ou une spécification, le cas échéant."
                ],
                "where": "Utilisez des intervalles de confiance pour les comparaisons avant et après, les comparaisons de fournisseurs, les résultats d'enquêtes et les études de capacité. Exemple : le temps d'attente moyen est de 30 minutes, s = 8 et n = 25. Avec t = 2,064, l'intervalle est de 30 plus ou moins 3,30, soit 26,7 à 33,3 minutes. Si un objectif de 25 se situe en dehors de l’intervalle, le processus est probablement supérieur à l’objectif.",
                "when_not": "N'utilisez pas un simple intervalle de Wald pour de très petites proportions. Ne traitez pas les intervalles de confiance qui se chevauchent comme un test d’hypothèse formel et n’ignorez pas les données groupées ou appariées.",
                "common_mistakes": [
                  "Dire qu'il y a une probabilité de 95 % que le paramètre se situe dans cet intervalle spécifique.",
                  "Utiliser z lorsque t est approprié pour un sigma inconnu.",
                  "Confondre un intervalle de confiance avec un intervalle de prédiction."
                ],
                "quick_check": [
                  {
                    "q": "Que signifie un intervalle de confiance à 95 % ?",
                    "answer": "Environ 95 % des intervalles d’échantillons répétés contiendraient le vrai paramètre.",
                    "explanation": "La confiance réside dans la procédure et non dans un intervalle spécifique."
                  },
                  {
                    "q": "Qu’est-ce qui rend un intervalle de confiance plus étroit ?",
                    "answer": "Confiance plus faible, moins de variabilité ou échantillon plus grand.",
                    "explanation": "La largeur dépend de la valeur critique, de l’erreur standard et de la taille de l’échantillon."
                  },
                  {
                    "q": "Pourquoi déclarer un intervalle de confiance plutôt qu’une simple valeur p ?",
                    "answer": "Il montre l’ampleur et la précision de l’effet, et pas seulement sa signification statistique.",
                    "explanation": "Les intervalles soutiennent l’interprétation pratique."
                  }
                ],
                "recap": [
                  "Les intervalles de confiance quantifient l'incertitude autour d'une estimation.",
                  "Interprétez la procédure, pas la probabilité d’un seul intervalle.",
                  "Indiquez l'intervalle et sa signification pratique."
                ]
              }
            },
            {
              "id": "B1.4",
              "order": 4,
              "title": "Puissance et taille de l'échantillon",
              "objective": "Équilibrez l'alpha, le bêta, la taille de l'effet et la taille de l'échantillon.",
              "content": {
                "why": "Les études sous-puissantes passent à côté des effets réels, tandis que les études trop puissantes gaspillent des ressources et signalent des différences insignifiantes comme significatives. La planification de la puissance et de la taille de l’échantillon évite ces deux problèmes.",
                "what": "Alpha est le taux d’erreur de type I, le risque d’un faux positif. La bêta est le taux d'erreur de type II, la probabilité de manquer un effet réel. La puissance est un moins le bêta, la chance de détecter un effet existant. La puissance dépend de l'alpha, de la taille de l'effet, de la variabilité, de la taille de l'échantillon et du test. Des effets plus importants et des échantillons plus grands augmentent la puissance. L’effet minimum détectable est la plus petite différence que l’étude est conçue pour détecter.",
                "how": [
                  "Définissez le test et l’effet que vous devez détecter.",
                  "Estimez la variabilité à partir de données pilotes ou de connaissances sur les processus.",
                  "Réglez l'alpha, souvent 0,05, et la puissance cible, souvent 0,80 ou 0,90.",
                  "Choisissez l’effet minimum détectable qui compte pratiquement.",
                  "Calculez la taille d'échantillon requise dans Minitab ou G*Power.",
                  "Ajuster pour tenir compte de l'abandon, de la non-réponse ou de l'analyse de sous-groupes.",
                  "Revérifiez l’alimentation une fois la conception définitive."
                ],
                "where": "Utilisez l'analyse de puissance pour le DOE, les projets pilotes, les enquêtes, les tests A/B et les études avant et après. Exemple : détectez une différence de cinq minutes avec un écart type de 10, un alpha de 0,05 et une puissance de 0,80. Un calcul sur deux échantillons donne environ 63 observations par groupe en utilisant l'approximation normale.",
                "when_not": "N'utilisez pas une taille d'échantillon arbitraire telle que 30. N'ignorez pas la taille de l'effet pratique et ne comptez pas sur le pouvoir post-hoc après l'étude pour expliquer un résultat non significatif.",
                "common_mistakes": [
                  "Aucune analyse de puissance avant la collecte des données.",
                  "Utiliser une taille d’effet irréaliste.",
                  "Ignorer les comparaisons multiples ou l'abandon."
                ],
                "quick_check": [
                  {
                    "q": "Qu'est-ce que le pouvoir ?",
                    "answer": "La probabilité de détecter un véritable effet, égale à un moins bêta.",
                    "explanation": "Une puissance plus élevée signifie un risque moindre de faux négatif."
                  },
                  {
                    "q": "Qu’arrive-t-il à la puissance lorsque la taille de l’échantillon augmente ?",
                    "answer": "La puissance augmente.",
                    "explanation": "Des échantillons plus grands réduisent l’erreur standard et facilitent la détection des effets réels."
                  },
                  {
                    "q": "Qu’est-ce que la version bêta ?",
                    "answer": "Le taux d’erreur de type II, la probabilité de ne pas détecter un effet réel.",
                    "explanation": "La puissance est un moins la version bêta."
                  }
                ],
                "recap": [
                  "Le pouvoir est la chance de détecter un véritable effet.",
                  "Planifiez ensemble l'alpha, le bêta, la taille de l'effet, la variabilité et la taille de l'échantillon.",
                  "Utilisez des logiciels et des tailles d’effet pratiques, et non des exemples de règles arbitraires."
                ]
              }
            },
            {
              "id": "B1.5",
              "order": 5,
              "title": "Choisir le bon test d'hypothèse",
              "objective": "Sélectionnez un test parmi le type de données, le nombre de groupes et les hypothèses.",
              "content": {
                "why": "Un mauvais test invalide la conclusion. Les ceintures noires doivent choisir le test en fonction du type de données, du nombre de groupes et des hypothèses, puis expliquer leur choix à l'équipe.",
                "what": "Pour les données continues, utilisez un test t à un échantillon contre une cible, un test t à deux échantillons pour deux groupes indépendants, un test t apparié pour avant et après sur les mêmes unités et une ANOVA pour trois groupes ou plus. Pour les données catégorielles, utilisez le chi carré pour l'indépendance ou la qualité de l'ajustement, un test à deux proportions pour deux groupes ou McNemar pour les données binaires appariées. Lorsque la normalité ou l'égalité de variance échoue, utilisez Mann-Whitney, Kruskal-Wallis ou un test de signe. Utilisez la corrélation de Pearson ou de Spearman pour l'association.",
                "how": [
                  "Énoncez la question pratique.",
                  "Identifiez le type de réponse : continue, binaire, numérique ou ordinale.",
                  "Comptez les groupes et déterminez si les données sont appariées.",
                  "Vérifiez l’indépendance, la normalité et l’égalité de variance.",
                  "Sélectionnez le test de correspondance ou une alternative robuste.",
                  "Exécutez le test et interprétez la valeur p, l’intervalle de confiance et la taille de l’effet.",
                  "Confirmez la conclusion avec des tracés et des connaissances sur les processus."
                ],
                "where": "Utilisez la sélection de tests tout au long d’Analyse. Exemple : comparez la satisfaction sur une échelle de 1 à 5 dans trois cliniques avec Kruskal-Wallis. Comparez les taux de défauts avant et après sur les mêmes lignes de production avec un test couplé, ou McNemar si le résultat est binaire. Comparez la résistance moyenne de deux fournisseurs avec un test t sur deux échantillons.",
                "when_not": "N'utilisez pas de test t pour trois groupes ou plus. N'utilisez pas le chi carré avec de très petits comptes attendus sans un test exact. N'ignorez pas une conception appariée ou une dépendance dans les données.",
                "common_mistakes": [
                  "Choisir un test familier au lieu de celui qui correspond à la conception.",
                  "Ignorer les hypothèses et ne pas utiliser une alternative robuste.",
                  "Exécution de nombreux tests sans ajustement pour plusieurs comparaisons."
                ],
                "quick_check": [
                  {
                    "q": "Quel test compare les moyennes de trois groupes indépendants ou plus ?",
                    "answer": "ANOVA unidirectionnelle.",
                    "explanation": "L'ANOVA teste si au moins une moyenne de groupe diffère."
                  },
                  {
                    "q": "Quel test compare les mesures avant et après sur les mêmes unités ?",
                    "answer": "Un test t apparié.",
                    "explanation": "La conception par paires tient compte de la corrélation au sein de chaque unité."
                  },
                  {
                    "q": "Quel test vérifie l'indépendance entre deux variables catégorielles ?",
                    "answer": "Un test du chi carré d’indépendance.",
                    "explanation": "Le chi carré compare les fréquences observées et attendues dans un tableau de contingence."
                  }
                ],
                "recap": [
                  "Choisissez le test parmi la question, le type de réponse, les groupes et l'appariement.",
                  "Vérifiez les hypothèses et utilisez des alternatives robustes si nécessaire.",
                  "Interprétez l’ampleur de l’effet et sa signification pratique, pas seulement la valeur p."
                ]
              }
            },
            {
              "id": "B1.6",
              "order": 6,
              "title": "Tests t",
              "objective": "Exécutez des tests t à un échantillon, à deux échantillons et appariés.",
              "content": {
                "why": "Les tests t sont les bêtes de somme pour comparer des moyennes continues, mais ils sont faciles à utiliser à mauvais escient. La conception, le couplage et les hypothèses doivent correspondre à la question.",
                "what": "Un test t sur un échantillon compare une moyenne à une cible. Un test t à deux échantillons compare les moyennes de deux groupes indépendants. Un test t apparié compare deux mesures sur la même unité et supprime la variation d'une unité à l'autre. La statistique du test est la différence divisée par son erreur type, et le résultat est une valeur t, une valeur p et un intervalle de confiance. Utilisez la version de Welch lorsque les écarts diffèrent. Indiquez une taille d'effet telle que le d de Cohen, et pas seulement la signification.",
                "how": [
                  "Indiquez la comparaison et indiquez si les groupes sont indépendants ou par paires.",
                  "Tracez les données et recherchez les valeurs aberrantes.",
                  "Vérifiez la normalité approximative et, pour les groupes indépendants, la variance égale.",
                  "Sélectionnez le test à un échantillon, à deux échantillons, de Welch ou apparié.",
                  "Exécutez le test et examinez l’intervalle de confiance et la taille de l’effet.",
                  "Interpréter le résultat en termes de processus et en termes pratiques."
                ],
                "where": "Utilisez des tests T pour les comparaisons de fournisseurs, la formation avant et après, le processus par rapport à l'objectif et les mesures appariées. Exemple : mesurez les 12 mêmes lignes de production avant et après un changement et utilisez un test t apparié. Comparez deux fournisseurs indépendants avec un test à deux échantillons ou Welch. Comparez la moyenne d'une ligne par rapport à une cible avec un test sur un échantillon.",
                "when_not": "N'utilisez pas de test t pour trois groupes ou plus ; utiliser l'ANOVA. Ne l'utilisez pas pour des résultats ordinaux, des données fortement dépendantes ou des valeurs aberrantes graves sans une alternative solide. Ne traitez pas les observations appariées comme indépendantes.",
                "common_mistakes": [
                  "Ignorer l'appariement et utiliser un test de groupes indépendants.",
                  "Exécution de plusieurs tests t au lieu d'ANOVA pour plusieurs groupes.",
                  "Signaler une valeur p sans la taille de la différence."
                ],
                "quick_check": [
                  {
                    "q": "Quel test t compare les mêmes unités avant et après un changement ?",
                    "answer": "Le test t apparié.",
                    "explanation": "Le couplage tient compte de la corrélation entre les mesures sur la même unité."
                  },
                  {
                    "q": "Quand faut-il utiliser le test t de Welch ?",
                    "answer": "Lorsque deux groupes indépendants ont des variances inégales.",
                    "explanation": "Le test de Welch ne suppose pas des variances égales dans la population."
                  },
                  {
                    "q": "Pourquoi rapporter une taille d’effet avec un test t ?",
                    "answer": "Cela montre si la différence est significative dans la pratique.",
                    "explanation": "Une petite valeur p peut accompagner une différence insignifiante dans de grands échantillons."
                  }
                ],
                "recap": [
                  "Faites correspondre le test t au plan : un échantillon, des groupes indépendants ou des paires.",
                  "Vérifiez les hypothèses et utilisez le test de Welch lorsque les variances diffèrent.",
                  "Indiquez l'intervalle de confiance et l'ampleur de l'effet, pas seulement la valeur p."
                ]
              }
            },
            {
              "id": "B1.7",
              "order": 7,
              "title": "ANOVA",
              "objective": "Exécutez une ANOVA unidirectionnelle et bidirectionnelle et interprétez les interactions.",
              "content": {
                "why": "L'ANOVA compare trois moyennes de groupe ou plus tout en contrôlant le taux de faux positifs. Il montre également si des facteurs interagissent, ce que des tests t distincts manqueraient.",
                "what": "L'ANOVA unidirectionnelle teste si au moins une moyenne de groupe diffère en comparant la variation entre les groupes avec la variation au sein du groupe à l'aide d'une statistique F. L'ANOVA bidirectionnelle teste deux facteurs et leur interaction. Un résultat significatif signifie qu'au moins une moyenne diffère, donc des tests de suivi tels que Tukey identifient les groupes qui diffèrent. L'ANOVA suppose des observations indépendantes, des résidus approximativement normaux et des variances égales. Signalez la taille de l’effet, telle que l’êta au carré, et inspectez les parcelles résiduelles.",
                "how": [
                  "Énoncez les facteurs, les groupes et les hypothèses nulles.",
                  "Vérifiez la conception, l’indépendance et la taille des échantillons de groupe.",
                  "Tracez les groupes et inspectez la variabilité.",
                  "Montez le modèle unidirectionnel ou bidirectionnel.",
                  "Passez en revue le test F, la valeur p et l’interaction.",
                  "Exécutez des comparaisons post-hoc si le facteur est significatif.",
                  "Vérifiez les tracés résiduels et signalez la taille de l’effet."
                ],
                "where": "Utilisez l'ANOVA pour comparer les fournisseurs, les machines, les équipes, les cliniques ou les régions. Exemple : comparez le temps de cycle moyen de trois fournisseurs. Si le test global est significatif, les comparaisons Tukey montrent quels fournisseurs diffèrent. Dans une étude bidirectionnelle, testez si la température et la pression affectent le rendement et si leur interaction est importante.",
                "when_not": "N'utilisez pas d'ANOVA ordinaire avec une non-normalité grave ou des variances inégales ; utilisez Welch ANOVA ou Kruskal-Wallis. Ne l'utilisez pas pour des mesures répétées sur les mêmes unités sans modèle de mesures répétées. Les conceptions complexes et déséquilibrées peuvent nécessiter une régression ou un modèle linéaire général.",
                "common_mistakes": [
                  "Exécution de plusieurs tests t au lieu d’une ANOVA.",
                  "Ignorer une interaction significative.",
                  "S'arrêter à la valeur p sans analyse post-hoc ou de l'ampleur de l'effet."
                ],
                "quick_check": [
                  {
                    "q": "Que vous dit une ANOVA unidirectionnelle significative ?",
                    "answer": "Au moins une moyenne de groupe diffère, mais pas laquelle.",
                    "explanation": "Des comparaisons post-hoc identifient les différences spécifiques."
                  },
                  {
                    "q": "Qu’est-ce qu’une interaction en ANOVA bidirectionnelle ?",
                    "answer": "L'effet d'un facteur dépend du niveau de l'autre facteur.",
                    "explanation": "Une interaction signifie que les facteurs n’agissent pas indépendamment."
                  },
                  {
                    "q": "Quelle méthode de suivi contrôle l’erreur lors de la comparaison des moyennes de plusieurs groupes ?",
                    "answer": "Le test de différence honnêtement significatif de Tukey.",
                    "explanation": "Tukey s'ajuste pour plusieurs comparaisons par paires."
                  }
                ],
                "recap": [
                  "L'ANOVA compare les moyennes de trois groupes ou plus ou de plusieurs facteurs.",
                  "Un résultat significatif nécessite un suivi pour identifier les différents groupes.",
                  "Vérifiez les résidus et interprétez les interactions et les tailles d’effet."
                ]
              }
            },
            {
              "id": "B1.8",
              "order": 8,
              "title": "Tests non paramétriques",
              "objective": "Utilisez Mann-Whitney, Kruskal-Wallis et signez des tests lorsque les hypothèses échouent.",
              "content": {
                "why": "Les tests paramétriques peuvent échouer avec des données ordinales, de petits échantillons ou des valeurs aberrantes graves. Les tests non paramétriques fournissent des comparaisons valides lorsque leurs hypothèses sont plus appropriées.",
                "what": "Les tests non paramétriques utilisent des classements plutôt que des moyennes brutes. Mann-Whitney compare deux groupes indépendants, le rang signé de Wilcoxon compare les données appariées, Kruskal-Wallis compare trois groupes indépendants ou plus et le test des signes compare les résultats appariés par direction. Ces tests sont robustes aux valeurs aberrantes et à la non-normalité, mais ils comparent généralement les distributions ou les médianes plutôt que les moyennes. Ils perdent un peu de leur pouvoir lorsque les hypothèses de la théorie normale sont réellement valables.",
                "how": [
                  "Identifiez pourquoi l’hypothèse paramétrique échoue.",
                  "Déterminez si la conception est indépendante ou jumelée et combien de groupes existent.",
                  "Choisissez le test basé sur le classement correspondant.",
                  "Énoncez l’hypothèse en termes de médianes ou de distributions.",
                  "Exécutez le test et examinez la valeur p et la taille de l’effet.",
                  "Tracez les données et interprétez le résultat dans son contexte."
                ],
                "where": "Utilisez des tests non paramétriques pour les scores de satisfaction, les temps d'attente asymétriques, les petits projets pilotes, les données d'enquête ordinales et les évaluations subjectives. Exemple : comparez la satisfaction des patients sur une échelle de 1 à 5 dans trois cliniques avec Kruskal-Wallis. Comparez les temps de réparation asymétriques de deux dépôts avec Mann-Whitney.",
                "when_not": "N'utilisez pas de tests non paramétriques automatiquement pour chaque ensemble de données. Certains tests supposent toujours des formes de distribution similaires lors de l'interprétation d'un changement de lieu. Les conceptions complexes, les covariables et les mesures répétées peuvent nécessiter un modèle généralisé.",
                "common_mistakes": [
                  "Traiter un résultat non paramétrique comme une comparaison de moyennes.",
                  "Ignorer la forme de la distribution lors de l'interprétation du résultat.",
                  "En supposant qu'un test de classement sauve une taille d'échantillon inadéquate."
                ],
                "quick_check": [
                  {
                    "q": "Quel test compare deux groupes indépendants sans hypothèse de normalité ?",
                    "answer": "Le test de Mann-Whitney.",
                    "explanation": "Il compare les classements plutôt que les moyennes brutes."
                  },
                  {
                    "q": "Quel test compare de manière non paramétrique trois groupes indépendants ou plus ?",
                    "answer": "Le test de Kruskal-Wallis.",
                    "explanation": "Il s'agit de l'alternative basée sur le classement à l'ANOVA unidirectionnelle."
                  },
                  {
                    "q": "Quel test convient aux données ordinales appariées ?",
                    "answer": "Le test de classement signé de Wilcoxon.",
                    "explanation": "Il utilise les rangs des différences appariées."
                  }
                ],
                "recap": [
                  "Utilisez des tests basés sur le classement lorsque les hypothèses paramétriques ne sont pas crédibles.",
                  "Faites correspondre le test entre les groupes indépendants et les groupes jumelés et le nombre de groupes.",
                  "Interprétez les médianes ou les distributions, pas les moyennes."
                ]
              }
            },
            {
              "id": "B1.9",
              "order": 9,
              "title": "Tests du chi carré",
              "objective": "Testez l’indépendance et l’adéquation des données catégorielles.",
              "content": {
                "why": "De nombreuses questions d'amélioration impliquent des catégories, telles que le type de défaut, la réussite ou l'échec, ou le segment de clientèle. Les tests du chi carré montrent si les fréquences des catégories diffèrent des attentes ou sont associées.",
                "what": "Un test d'ajustement du chi carré compare les décomptes observés aux décomptes attendus à partir d'une distribution hypothétique. Un test d'indépendance du chi carré vérifie si deux variables catégorielles sont associées dans un tableau de contingence. Les sommes statistiques sont au carré des différences observées moins les différences attendues divisées par les nombres attendus. Utilisez le test exact de Fisher pour les petites tables 2x2. Le V de Cramer résume la force de l’association. Le test de McNemar est le bon choix pour les données binaires appariées.",
                "how": [
                  "Définissez les catégories et construisez un tableau de fréquence.",
                  "Énoncez les hypothèses.",
                  "Vérifiez les comptes attendus, généralement au moins cinq par cellule.",
                  "Exécutez le test du chi carré ou une alternative exacte.",
                  "Inspectez les résidus standardisés pour localiser les cellules inhabituelles.",
                  "Indiquez la valeur p, la taille de l'effet et le modèle pratique."
                ],
                "where": "Utilisez des tests du chi carré pour les types de défauts par équipe, réussite ou échec par fournisseur, réponses à l'enquête par région et adhésion par service. Exemple : tester si la catégorie de défaut est associée à la ligne de production. Si le résultat est significatif, les résidus montrent quelle ligne et quelle catégorie de défaut déterminent l'association.",
                "when_not": "N'utilisez pas l'indépendance du chi carré pour les données appariées ; utilisez McNemar. Ne vous y fiez pas lorsque les comptes attendus sont très faibles sans un test précis. Évitez de traiter les catégories ordinales comme non ordonnées si une méthode ordinale est disponible.",
                "common_mistakes": [
                  "Utilisation d'un test du chi carré sur des données appariées avant et après.",
                  "Ignorer les petits décomptes attendus.",
                  "Réclamer la causalité auprès d’une association."
                ],
                "quick_check": [
                  {
                    "q": "Quel test du chi carré vérifie si deux variables catégorielles sont associées ?",
                    "answer": "L'épreuve de l'indépendance.",
                    "explanation": "Il compare les décomptes observés et attendus dans un tableau de contingence."
                  },
                  {
                    "q": "Quel test est approprié pour les résultats binaires appariés ?",
                    "answer": "Le test de McNemar.",
                    "explanation": "McNemar explique l'appariement des réponses avant et après."
                  },
                  {
                    "q": "Que devez-vous vérifier avant de faire confiance à un test du chi carré ?",
                    "answer": "Les décomptes attendus sont suffisamment importants ou utilisent un test exact.",
                    "explanation": "Les petits nombres attendus rendent l’approximation du chi carré peu fiable."
                  }
                ],
                "recap": [
                  "Les tests du chi carré comparent les fréquences catégorielles ou les associations de tests.",
                  "Vérifiez les décomptes attendus et utilisez des tests précis si nécessaire.",
                  "Utilisez les résidus et les tailles d’effet pour expliquer le modèle."
                ]
              }
            }
          ]
        },
        {
          "id": "black-2",
          "number": 2,
          "title": "Systèmes de mesure",
          "duration": "2 heures",
          "summary": "Étendez MSA aux jugements de réussite/d'échec et catégoriques, et comprenez l'étalonnage et l'incertitude.",
          "lessons": [
            {
              "id": "B2.1",
              "order": 1,
              "title": "Attribut MSA",
              "objective": "Exécutez une analyse d’accord d’attribut et interprétez kappa.",
              "content": {
                "why": "L'inspection des attributs dépend de décisions humaines ou de jauge. Si les évaluateurs ne sont pas d'accord avec eux-mêmes, entre eux ou avec la norme, les données sur les défauts ne sont pas fiables et les conclusions sur l'amélioration peuvent être erronées.",
                "what": "L'analyse de l'accord des attributs mesure la répétabilité au sein des évaluateurs, la reproductibilité entre les évaluateurs et l'exactitude par rapport à une norme connue. Kappa ajuste son accord au hasard. Les valeurs supérieures à environ 0,90 sont excellentes, 0,70 à 0,90 sont acceptables pour les décisions à faible risque et les valeurs inférieures signalent un problème. Le pourcentage d’accord à lui seul peut sembler bon, même lorsque l’accord aléatoire est élevé. Pour les notes ordinales, utilisez un kappa pondéré ou le coefficient de Kendall.",
                "how": [
                  "Définir la caractéristique et la règle de décision.",
                  "Sélectionnez 30 à 50 pièces couvrant toute la gamme, y compris les cas limites.",
                  "Utilisez deux ou trois évaluateurs et deux ou trois essais.",
                  "Randomisez et aveuglez les échantillons et les essais.",
                  "Incluez une norme connue ou une évaluation d’expert.",
                  "Analysez l’accord au sein d’un évaluateur, entre évaluateurs et par rapport à la norme.",
                  "Recyclez-vous, clarifiez les définitions ou améliorez la jauge, puis répétez l'étude."
                ],
                "where": "Utilisez l'attribut MSA pour l'inspection visuelle, les jauges go/no-go, la classification des défauts, l'examen des documents et le diagnostic clinique. Exemple : trois inspecteurs évaluent deux fois 30 pièces. Le kappa intra-évaluateur est de 0,95, mais le kappa entre évaluateurs est de 0,55, ce qui indique des définitions incohérentes plutôt qu'une mauvaise répétabilité individuelle.",
                "when_not": "N'utilisez pas l'analyse d'accord d'attributs pour les mesures continues ; utiliser une étude R&R de jauge. Ne vous fiez pas aux résultats provenant de pièces non représentatives ou d’une norme manquante. Kappa peut être affecté par la prévalence, alors interprétez-le avec la conception de l'étude.",
                "common_mistakes": [
                  "Utilisation d’échantillons trop peu nombreux ou non représentatifs.",
                  "Rapport du pourcentage de concordance sans kappa.",
                  "Ne pas aveugler les évaluateurs ou randomiser les essais."
                ],
                "quick_check": [
                  {
                    "q": "Que mesure l’accord intra-évaluateur ?",
                    "answer": "Répétabilité, ou si un évaluateur est d'accord avec lui-même à travers les essais.",
                    "explanation": "La même personne évalue les mêmes parties plus d’une fois."
                  },
                  {
                    "q": "Pourquoi utiliser le kappa au lieu du pourcentage d’accord ?",
                    "answer": "Kappa s'ajuste à l'accord attendu par hasard.",
                    "explanation": "Le pourcentage d’accord peut surestimer la cohérence."
                  },
                  {
                    "q": "Que suggère le désaccord entre évaluateurs ?",
                    "answer": "Définitions, formations ou méthodes de mesure incohérentes.",
                    "explanation": "Les problèmes de reproductibilité nécessitent généralement une standardisation."
                  }
                ],
                "recap": [
                  "L'attribut MSA valide la répétabilité, la reproductibilité et l'exactitude.",
                  "Utilisez des pièces représentatives, une mise en aveugle, une randomisation et une norme.",
                  "Interprétez le kappa et recherchez la source du désaccord."
                ]
              }
            },
            {
              "id": "B2.2",
              "order": 2,
              "title": "Incertitude de mesure et étalonnage",
              "objective": "Séparez l’étalonnage, le biais, la linéarité et l’incertitude.",
              "content": {
                "why": "Un autocollant d’étalonnage ne rend pas une mesure exacte. Chaque mesure comporte une incertitude, et les décisions proches d'une limite de spécification peuvent être erronées à moins que cette incertitude ne soit comprise.",
                "what": "L'étalonnage compare un instrument avec un étalon traçable et établit le biais et la correction. L'incertitude de mesure est la plage susceptible de contenir la valeur réelle. Les sources incluent la résolution, la répétabilité, la reproductibilité, le biais, la linéarité, la stabilité, l'environnement et l'étalon de référence. La linéarité décrit la manière dont l'erreur change sur toute la plage. Un bilan d'incertitude de mesure combine les incertitudes standard en quadrature et l'incertitude élargie multipliée par un facteur de couverture, souvent deux, pour un niveau de confiance d'environ 95 %.",
                "how": [
                  "Définir la mesure et la règle de tolérance ou de décision.",
                  "Énumérez toutes les sources d’incertitude significatives.",
                  "Quantifiez chaque source avec des données ou des spécifications.",
                  "Combinez les incertitudes standards et calculez l’incertitude élargie.",
                  "Comparez l'incertitude avec la tolérance et définissez une bande de garde si nécessaire.",
                  "Calibrez selon un calendrier basé sur les risques et surveillez la dérive.",
                  "Documentez la traçabilité et revérifiez après une réparation ou un changement environnemental."
                ],
                "where": "Utilisez l'analyse d'incertitude pour les pieds à coulisse, les balances, les thermomètres, les manomètres, les tests de laboratoire et les appareils cliniques. Exemple : la tolérance d'une pièce est de plus ou moins 0,10 mm et l'incertitude de mesure est de plus ou moins 0,02 mm. N'acceptez que les pièces à plus ou moins 0,08 mm, ou tenez compte formellement du risque de fausse acceptation.",
                "when_not": "Ne confondez pas l’étalonnage avec une étude R&R d’un instrument. L'étalonnage gère la traçabilité et le biais moyen, tandis que la R&R des jauges traite la variation. Ne considérez pas un instrument calibré comme exact et n’ignorez pas l’incertitude dans les décisions de réussite ou d’échec.",
                "common_mistakes": [
                  "Associer l’étalonnage à une précision parfaite.",
                  "Ignorer la linéarité, la dérive et les effets environnementaux.",
                  "Prendre des décisions de conformité sans garde-fou."
                ],
                "quick_check": [
                  {
                    "q": "Qu’établit l’étalonnage ?",
                    "answer": "Traçabilité à un étalon et au biais ou correction de l'instrument.",
                    "explanation": "L'étalonnage relie la lecture de l'instrument à une référence connue."
                  },
                  {
                    "q": "Comment est calculée l’incertitude élargie ?",
                    "answer": "Multipliez l’incertitude type combinée par un facteur de couverture, souvent deux.",
                    "explanation": "Un facteur de deux donne une couverture d'environ 95 % pour une distribution normale."
                  },
                  {
                    "q": "Pourquoi utiliser une bande de garde proche des limites des spécifications ?",
                    "answer": "Réduire le risque d’accepter une pièce hors spécifications en raison d’une erreur de mesure.",
                    "explanation": "La bande de garde éloigne les mesures incertaines de la limite."
                  }
                ],
                "recap": [
                  "L'étalonnage établit la traçabilité et le biais, et non l'incertitude nulle.",
                  "Construisez un budget d’incertitude et calculez l’incertitude élargie.",
                  "Utilisez des bandes de garde lorsque l’incertitude de mesure est importante pour la décision."
                ]
              }
            }
          ]
        },
        {
          "id": "black-3",
          "number": 3,
          "title": "Régression et modélisation",
          "duration": "3 heures",
          "summary": "Modélisez les relations avec plusieurs prédicteurs et résultats binaires, puis vérifiez si le modèle est digne de confiance.",
          "lessons": [
            {
              "id": "B3.1",
              "order": 1,
              "title": "Régression multiple",
              "objective": "Interprétez les coefficients, le R-carré ajusté et les tests globaux du modèle.",
              "content": {
                "why": "Les processus ont généralement plusieurs pilotes. La régression multiple estime l'effet indépendant de chaque prédicteur tout en contrôlant les autres et prend en charge la prédiction.",
                "what": "Le modèle exprime une réponse continue sous la forme d'une ordonnée à l'origine plus un coefficient pour chaque prédicteur plus une erreur. Un coefficient est le changement attendu dans la réponse pour une augmentation d’une unité de ce prédicteur, en maintenant les autres constants. Le test F global demande si le modèle explique la variation au-delà du hasard, tandis que les tests t individuels évaluent les coefficients. Le R au carré ajusté pénalise les prédicteurs inutiles. Vérifiez la linéarité, l'indépendance, les résidus normaux, la variance égale et la multicolinéarité.",
                "how": [
                  "Définir la réponse et les prédicteurs candidats à partir de la connaissance du processus.",
                  "Tracez les relations et recherchez les anomalies.",
                  "Ajustez le modèle et examinez le test global et les coefficients.",
                  "Vérifier les diagnostics résiduels et la multicolinéarité.",
                  "Affinez le modèle sans surajuster.",
                  "Validez avec des données nouvelles ou conservées.",
                  "Interpréter les coefficients et les intervalles en unités pratiques."
                ],
                "where": "Utilisez la régression multiple pour comparer le temps de cycle par rapport au personnel et à la demande, le rendement par rapport à la température et à la pression, le coût par rapport au volume et à la gamme de produits, ou le temps d'attente par rapport au personnel et aux arrivées. Exemple : un coefficient négatif de 0,8 minute par membre du personnel supplémentaire signifie que l'attente moyenne diminue de 0,8 minute lorsque la demande reste constante.",
                "when_not": "Ne déduisez pas la causalité à partir des données d’observation. N’extrapolez pas au-delà de la plage observée. Ne forcez pas un modèle linéaire lorsque la courbure ou les interactions sont importantes, et n'incluez pas de nombreux prédicteurs corrélés sans vérifier le modèle.",
                "common_mistakes": [
                  "Traiter un R carré élevé comme preuve de causalité.",
                  "Ignorer les diagnostics et la validation résiduels.",
                  "Suppression des prédicteurs basés uniquement sur les valeurs p."
                ],
                "quick_check": [
                  {
                    "q": "Comment interprète-t-on un coefficient de régression ?",
                    "answer": "Le changement dans la réponse par changement d'unité dans ce prédicteur, en maintenant les autres constants.",
                    "explanation": "Le coefficient est un effet ajusté."
                  },
                  {
                    "q": "Pourquoi utiliser le R carré ajusté ?",
                    "answer": "Cela pénalise les prédicteurs qui n’améliorent pas suffisamment le modèle.",
                    "explanation": "Le R carré ordinaire augmente toujours lorsque des prédicteurs sont ajoutés."
                  },
                  {
                    "q": "Que vous dit le test F global ?",
                    "answer": "Si le modèle dans son ensemble explique une quantité significative de variation.",
                    "explanation": "Cela ne montre pas quels prédicteurs individuels sont importants."
                  }
                ],
                "recap": [
                  "La régression multiple estime les effets ajustés et soutient la prédiction.",
                  "Vérifiez les hypothèses, les diagnostics et la validation.",
                  "Interprétez les coefficients dans leur contexte et non comme des effets causals automatiques."
                ]
              }
            },
            {
              "id": "B3.2",
              "order": 2,
              "title": "Régression logistique",
              "objective": "Modélisez les résultats oui/non avec des rapports de cotes.",
              "content": {
                "why": "Les résultats binaires tels que la réussite ou l’échec, le défaut ou l’absence de défaut, le désabonnement ou le maintien ne peuvent pas être correctement modélisés avec la régression linéaire ordinaire. La régression logistique modélise la probabilité de l'événement.",
                "what": "La régression logistique modélise les log-cotes d'un événement en tant que fonction linéaire de prédicteurs. Un coefficient se convertit en rapport de cotes par exponentiation. Un rapport de cotes supérieur à un signifie des probabilités plus élevées que l'événement se produise pour une augmentation d'une unité du prédicteur, les autres étant maintenus constants ; en dessous de un signifie des chances inférieures. Les probabilités prédites restent entre zéro et un. Évaluez l’adéquation du modèle avec la déviance, l’AIC, l’étalonnage et la discrimination telle que la zone ROC.",
                "how": [
                  "Définissez l’événement et codez-le comme un contre zéro.",
                  "Sélectionnez des prédicteurs en utilisant la connaissance des processus.",
                  "Ajustez le modèle et examinez le test global et les coefficients.",
                  "Convertissez les coefficients en rapports de cotes avec des intervalles de confiance.",
                  "Évaluez la discrimination, l’étalonnage et les points d’influence.",
                  "Validez avec les données d'exclusion et choisissez un seuil de décision basé sur les coûts.",
                  "Communiquez soigneusement les rapports de cotes."
                ],
                "where": "Utilisez la régression logistique pour déterminer la probabilité de défaut par fournisseur ou par équipe, la réussite ou l'échec par méthode de formation, la réadmission des patients, le défaut de paiement du prêt, le roulement du personnel et le taux de désabonnement des clients. Exemple : un rapport de cotes de 1,8 pour 10 degrés signifie une probabilité 80 % plus élevée, et non une probabilité 80 % plus élevée.",
                "when_not": "N'utilisez pas la régression linéaire pour une réponse binaire. Ne présentez pas un rapport de cotes comme un rapport de risque lorsque l’événement est courant. Des événements rares ou de petits échantillons peuvent nécessiter des méthodes pénalisées ou exactes, et une séparation parfaite signale un problème de conception.",
                "common_mistakes": [
                  "Interpréter un rapport de cotes comme une probabilité ou un risque.",
                  "Ignorer l'étalonnage et utiliser uniquement la zone ROC.",
                  "Utilisation d'un seuil par défaut de 0,5 sans tenir compte des coûts de décision."
                ],
                "quick_check": [
                  {
                    "q": "Que signifie un rapport de cotes supérieur à un ?",
                    "answer": "Les chances de l'événement sont plus élevées à mesure que le prédicteur augmente.",
                    "explanation": "Le coefficient exponentié compare les probabilités d'un changement d'une unité."
                  },
                  {
                    "q": "Que prédit la régression logistique ?",
                    "answer": "La probabilité de l'événement binaire.",
                    "explanation": "Le modèle log-odds est transformé en une probabilité comprise entre zéro et un."
                  },
                  {
                    "q": "Pourquoi évaluer l’étalonnage ainsi que la discrimination ?",
                    "answer": "Un modèle peut bien classer les cas mais donne néanmoins des probabilités inexactes.",
                    "explanation": "L'étalonnage vérifie si les probabilités prédites correspondent aux taux observés."
                  }
                ],
                "recap": [
                  "La régression logistique modélise les résultats binaires via des log-cotes.",
                  "Les rapports de cotes décrivent les probabilités relatives et non les probabilités.",
                  "Vérifiez les coûts d’étalonnage, de discrimination, de validation et de décision."
                ]
              }
            },
            {
              "id": "B3.3",
              "order": 3,
              "title": "Diagnostic de régression",
              "objective": "Vérifiez les résidus, l’effet de levier, l’influence et le manque d’ajustement.",
              "content": {
                "why": "Une régression peut avoir un R carré élevé tout en violant les hypothèses. Les diagnostics montrent si le modèle est digne de confiance et où il échoue.",
                "what": "Les résidus sont observés moins les valeurs ajustées. Un tracé des résidus par rapport à l'ajustement vérifie la linéarité et l'égalité de la variance. Un diagramme de probabilité normale vérifie la normalité résiduelle. Indépendance du contrôle des résidus par rapport à l'ordre, en particulier pour les données ordonnées dans le temps. L'effet de levier mesure le caractère inhabituel d'une valeur prédictive, tandis que les mesures de distance de Cook influencent le modèle ajusté. Un test de manque d'ajustement utilise des observations répétées pour détecter une forme de modèle inadéquate.",
                "how": [
                  "Ajustez le modèle et examinez les statistiques récapitulatives.",
                  "Tracez les résidus par rapport aux valeurs ajustées et par rapport à l'ordre.",
                  "Vérifiez le tracé de probabilité normale.",
                  "Identifiez les points à fort effet de levier et à forte influence.",
                  "Étudiez les modèles et confirmez la qualité des données avant de modifier quoi que ce soit.",
                  "Ajoutez des termes, transformez des variables ou utilisez des méthodes robustes, le cas échéant.",
                  "Remonter et valider le modèle révisé."
                ],
                "where": "Utilisez des diagnostics pour chaque régression, analyse DOE et modèle prédictif. Exemple : un tracé résiduel en forme d'entonnoir indique une variance inégale. Un motif courbe suggère un terme quadratique manquant. Un point avec une grande distance de Cook doit être vérifié pour une erreur de données ou une cause particulière.",
                "when_not": "Ne supprimez pas automatiquement les valeurs aberrantes uniquement pour améliorer l’ajustement. Ne vous fiez pas uniquement aux diagnostics avec de très petits échantillons. Les données de séries chronologiques nécessitent des contrôles et des méthodes d'autocorrélation explicites.",
                "common_mistakes": [
                  "Juger un modèle uniquement par R-carré.",
                  "Ignorer les modèles résiduels.",
                  "Confondre levier et influence."
                ],
                "quick_check": [
                  {
                    "q": "Que suggère un modèle courbe des valeurs résiduelles par rapport aux valeurs ajustées ?",
                    "answer": "Il manque une courbure ou un terme non linéaire dans le modèle.",
                    "explanation": "Des modèles résiduels systématiques indiquent un manque d’ajustement."
                  },
                  {
                    "q": "Que mesure la distance de Cook ?",
                    "answer": "L'influence d'une observation sur le modèle ajusté.",
                    "explanation": "Il combine effet de levier et taille résiduelle."
                  },
                  {
                    "q": "Pourquoi tracer les résidus par rapport à l'ordre d'observation ?",
                    "answer": "Pour vérifier la dépendance ou la dérive dans le temps.",
                    "explanation": "Les modèles par ordre suggèrent une autocorrélation."
                  }
                ],
                "recap": [
                  "Les diagnostics testent les hypothèses derrière la régression.",
                  "Étudiez les points influents avant de changer de modèle.",
                  "Utilisez des modèles résiduels pour guider une meilleure forme de modèle."
                ]
              }
            },
            {
              "id": "B3.4",
              "order": 4,
              "title": "Multicolinéarité et construction de modèles",
              "objective": "Détectez les prédicteurs corrélés et choisissez un modèle parcimonieux.",
              "content": {
                "why": "Les prédicteurs corrélés rendent les coefficients instables et difficiles à interpréter. Une construction minutieuse du modèle produit un modèle plus simple qui est plus susceptible de se généraliser.",
                "what": "La multicolinéarité se produit lorsque les prédicteurs sont fortement corrélés. Les facteurs d’inflation de variance supérieurs à cinq sont préoccupants et supérieurs à dix sont graves. Les symptômes incluent des erreurs types importantes, des coefficients instables et des signes inattendus. Les solutions incluent la suppression ou la combinaison de prédicteurs, l'utilisation de la connaissance des processus, le centrage des termes d'interaction, la régression de crête ou les composants principaux. La construction de modèles équilibre l’explication, la prédiction, la parcimonie et la validation.",
                "how": [
                  "Précisez si l’objectif est une explication ou une prédiction.",
                  "Prédicteurs d’écran avec tracés et contrôles de corrélation.",
                  "Ajustez un modèle candidat et calculez les VIF.",
                  "Supprimez, combinez ou transformez les prédicteurs corrélés avec une justification.",
                  "Comparez les modèles à l’aide du R carré ajusté ou prédit, de l’AIC et de la validation.",
                  "Respectez la hiérarchie lorsque des interactions sont présentes.",
                  "Documentez le modèle final et ses limites."
                ],
                "where": "Utilisez ces méthodes avec de nombreuses variables de processus, données d'enquête, indicateurs financiers et données de capteurs. Exemple : les températures de la zone du four sont fortement corrélées. Conservez une variable représentative ou créez un composite plutôt que d'interpréter deux coefficients instables.",
                "when_not": "N’utilisez pas la sélection par étapes pour remplacer la réflexion processus. Ne supprimez pas une variable uniquement parce que son VIF est élevé. Si l’objectif est une pure prédiction et que le modèle est stable sur de nouvelles données, la multicolinéarité peut être tolérable.",
                "common_mistakes": [
                  "Interpréter les coefficients instables comme des effets réels.",
                  "Surajustement d'un modèle complexe aux données d'entraînement.",
                  "Dragage de données sans validation."
                ],
                "quick_check": [
                  {
                    "q": "Quelle valeur VIF signale souvent une multicolinéarité sérieuse ?",
                    "answer": "Au-dessus d'une dizaine.",
                    "explanation": "Les valeurs supérieures à cinq sont préoccupantes et celles supérieures à dix sont graves."
                  },
                  {
                    "q": "Qu'arrive-t-il aux erreurs types des coefficients en cas de multicolinéarité ?",
                    "answer": "Ils augmentent, rendant les estimations instables.",
                    "explanation": "Les prédicteurs corrélés rendent difficiles l’estimation des effets distincts."
                  },
                  {
                    "q": "Pourquoi valider un modèle construit sur de nouvelles données ?",
                    "answer": "Vérifier qu’il généralise plutôt que surajustement.",
                    "explanation": "L’ajustement de la formation à lui seul peut récompenser une complexité inutile."
                  }
                ],
                "recap": [
                  "La multicolinéarité gonfle l'incertitude et déstabilise les coefficients.",
                  "Utilisez les VIF, la connaissance des processus et la parcimonie pour créer des modèles.",
                  "Validez le modèle final avant de faire confiance à ses prédictions."
                ]
              }
            }
          ]
        },
        {
          "id": "black-4",
          "number": 4,
          "title": "Conception d'expériences",
          "duration": "4 heures",
          "summary": "Concevez des expériences efficaces, examinez de nombreux facteurs, optimisez les réponses et rendez les conceptions robustes au bruit.",
          "lessons": [
            {
              "id": "B4.1",
              "order": 1,
              "title": "DOE factoriel complet",
              "objective": "Concevoir et analyser une factorielle complète avec les principaux effets et interactions.",
              "content": {
                "why": "Changer un facteur à la fois manque des interactions et gaspille des courses. Une expérience factorielle complète révèle les principaux effets et interactions de manière structurée et efficace.",
                "what": "Un plan factoriel complet teste chaque combinaison de niveaux de facteurs. Avec k facteurs à deux niveaux, il faut deux pour les k exécutions. Les effets principaux mesurent le changement moyen en réponse lorsqu'un facteur passe de faible à élevé. Les interactions se produisent lorsque l’effet d’un facteur dépend du niveau d’un autre. Les points centraux détectent la courbure et la réplication fournit une estimation indépendante de l'erreur. La randomisation protège contre les effets d’ordre.",
                "how": [
                  "Définir l’objectif, la réponse, les facteurs, les niveaux et les contraintes pratiques.",
                  "Choisissez le plan factoriel et le nombre de répétitions.",
                  "Ajoutez des points centraux si la courbure est possible.",
                  "Randomisez l’ordre d’exécution et enregistrez chaque condition.",
                  "Exécutez l’expérience et vérifiez la qualité de la mesure de la réponse.",
                  "Analysez avec l'ANOVA, les tracés d'effets et les tracés d'interaction.",
                  "Exécutez des essais de confirmation avec les paramètres sélectionnés."
                ],
                "where": "Utilisez le DOE factoriel complet pour le rendement par rapport à la température et au temps, les performances du logiciel par rapport aux paramètres de configuration, le temps d'attente par rapport aux règles de personnel et de planification, ainsi que les études de formulation. Exemple : trois facteurs à deux niveaux nécessitent huit analyses, plus des points centraux pour vérifier la courbure.",
                "when_not": "N'utilisez pas une factorielle complète lorsqu'il y a trop de facteurs pour le budget ; l'écran en premier. Ne l'utilisez pas pour un optimal non linéaire sans ajouter de points de surface de réponse. Les facteurs difficiles à modifier peuvent nécessiter une conception en parcelles divisées.",
                "common_mistakes": [
                  "Changer un facteur à la fois et manquer d’interactions.",
                  "Échec de la randomisation ou de la réplication.",
                  "Choisir des plages de facteurs trop étroites pour révéler des effets."
                ],
                "quick_check": [
                  {
                    "q": "Combien d’exécutions nécessite une factorielle complète à deux niveaux avec quatre facteurs avant la réplication ?",
                    "answer": "Seize courses.",
                    "explanation": "Deux puissance quatre est égal à seize."
                  },
                  {
                    "q": "Que détectent les points centraux ?",
                    "answer": "Courbure de la surface de réponse.",
                    "explanation": "Une différence entre la moyenne centrale et la moyenne factorielle suggère une courbure."
                  },
                  {
                    "q": "Pourquoi randomiser l'ordre d'exécution ?",
                    "answer": "Pour se protéger contre les tendances temporelles et les nuisances non mesurées.",
                    "explanation": "La randomisation évite de confondre l’ordre avec les facteurs."
                  }
                ],
                "recap": [
                  "Les factorielles complètes estiment efficacement les principaux effets et interactions.",
                  "Utilisez la réplication, les points centraux et la randomisation.",
                  "Confirmez les paramètres sélectionnés avec une analyse de suivi."
                ]
              }
            },
            {
              "id": "B4.2",
              "order": 2,
              "title": "DOE factoriel fractionnaire",
              "objective": "Dépistez de nombreux facteurs avec des conceptions de résolution III, IV et V.",
              "content": {
                "why": "Les factorielles complètes croissent de façon exponentielle, donc le dépistage de nombreux facteurs nécessite une fraction délibérée. Les factorielles fractionnaires identifient les quelques facteurs essentiels avant l'optimisation.",
                "what": "Une factorielle fractionnaire utilise une fraction sélectionnée du plan complet. La résolution III conçoit des effets principaux alias avec des interactions à deux facteurs. La résolution IV définit des effets principaux clairs mais alias des interactions à deux facteurs les uns avec les autres. La résolution V définit des effets principaux clairs et des interactions à deux facteurs. L'alias signifie que les effets ne peuvent pas être séparés sans exécutions supplémentaires. Un repliement peut supprimer les effets clés, et les conceptions Plackett-Burman sont utiles pour un filtrage approximatif.",
                "how": [
                  "Énumérez les facteurs et les interactions plausibles.",
                  "Choisissez une résolution basée sur le risque d'alias.",
                  "Créez la conception fractionnée et inspectez la structure d’alias.",
                  "Randomisez et exécutez l’expérience.",
                  "Analysez les effets et identifiez les quelques éléments essentiels.",
                  "Utilisez des exécutions de suivi ou un repli pour résoudre l'ambiguïté.",
                  "Déplacez les facteurs prometteurs vers une conception à plus haute résolution ou d’optimisation."
                ],
                "where": "Utilisez des factorielles fractionnaires pour examiner six à douze facteurs dans le développement de processus, les études de simulation et les premiers essais de fabrication. Exemple : examinez huit facteurs en 16 exécutions à la résolution IV, puis étudiez les facteurs importants avec une surface factorielle ou de réponse complète.",
                "when_not": "N'utilisez pas la résolution III lorsque les interactions sont probables et importantes. N’interprétez pas les effets crénelés comme s’ils étaient indépendants. Les conceptions de criblage ne sont pas des conceptions d’optimisation.",
                "common_mistakes": [
                  "Ignorer la structure des alias.",
                  "Choisir une résolution trop basse pour le risque.",
                  "Arrêt après dépistage sans confirmation."
                ],
                "quick_check": [
                  {
                    "q": "Que signifie la résolution IV ?",
                    "answer": "Les principaux effets sont clairs, mais les interactions à deux facteurs sont liées les unes aux autres.",
                    "explanation": "La résolution IV protège les effets principaux mais pas toutes les interactions."
                  },
                  {
                    "q": "Qu’est-ce que l’alias ?",
                    "answer": "Deux effets ou plus qui ne peuvent pas être estimés séparément dans un plan.",
                    "explanation": "La fraction du design crée une confusion parmi les effets."
                  },
                  {
                    "q": "Pourquoi utiliser un repli ?",
                    "answer": "Désaliaser les effets importants en ajoutant des exécutions complémentaires.",
                    "explanation": "Un repli sépare les effets qui ont été confondus."
                  }
                ],
                "recap": [
                  "Les factorielles fractionnaires filtrent de nombreux facteurs avec moins d'exécutions.",
                  "La résolution et la structure des alias déterminent ce qui peut être interprété.",
                  "Suivez le dépistage avec confirmation ou optimisation."
                ]
              }
            },
            {
              "id": "B4.3",
              "order": 3,
              "title": "Blocage et randomisation",
              "objective": "Protégez les expériences des variables nuisibles.",
              "content": {
                "why": "Les variables nuisibles telles que l'équipe, le lot, le jour ou l'opérateur peuvent ressembler à des effets de traitement. La randomisation et le blocage protègent l’expérience de ces influences cachées.",
                "what": "La randomisation attribue l'ordre d'exécution au hasard, de sorte que les tendances non mesurées ne correspondent pas aux facteurs. Bloquer les groupes expérimentaux similaires, tels que les exécutions d'un jour ou d'un lot. Une conception en blocs complets randomisés exécute chaque traitement une fois par bloc. L'analyse inclut un terme de bloc, supprimant la variation de bloc à bloc de l'erreur. Lorsque les facteurs sont difficiles à modifier, un plan en parcelles divisées peut s’avérer nécessaire même s’il restreint la randomisation.",
                "how": [
                  "Identifiez les variables de nuisance connues et les contraintes pratiques.",
                  "Décidez si vous souhaitez bloquer ou utiliser une structure en parcelles divisées.",
                  "Randomisez l’ordre de traitement dans chaque bloc.",
                  "Exécutez l’expérience et enregistrez l’adhésion au bloc.",
                  "Incluez des blocs dans le modèle statistique.",
                  "Vérifiez les résidus et confirmez que les blocs se sont comportés comme prévu.",
                  "Interprétez les effets du traitement après avoir pris en compte les blocs."
                ],
                "where": "Utilisez le blocage pour plusieurs équipes, machines, lots, plateaux, opérateurs, jours ou emplacements. Exemple : effectuez huit traitements sur deux jours. Bloquez par jour, randomisez les huit traitements de chaque jour et incluez le jour dans le modèle.",
                "when_not": "Ne bloquez pas sur une variable confondue avec un facteur. Ne créez pas trop de blocs pour que les degrés de liberté d'erreur deviennent trop petits. N'analysez pas un plan restreint comme s'il était complètement randomisé.",
                "common_mistakes": [
                  "Ignorer la randomisation car l'ordre d'exécution semble pratique.",
                  "Ignorer les blocs connus dans l'analyse.",
                  "Confondre une variable de bloc avec un facteur de traitement."
                ],
                "quick_check": [
                  {
                    "q": "Quel est le but de la randomisation ?",
                    "answer": "Pour éviter que des tendances non mesurées ne soient confondues avec des traitements.",
                    "explanation": "L’ordre aléatoire répartit les effets nuisibles entre les traitements."
                  },
                  {
                    "q": "Qu’est-ce qu’un plan en blocs complets randomisés ?",
                    "answer": "Une conception dans laquelle chaque traitement apparaît une fois dans chaque bloc.",
                    "explanation": "Les blocs sont des groupes homogènes et les traitements y sont randomisés."
                  },
                  {
                    "q": "Pourquoi inclure un terme bloc dans le modèle ?",
                    "answer": "Supprimer la variation d’un bloc à l’autre de l’estimation de l’erreur.",
                    "explanation": "Cela améliore la précision des comparaisons de traitements."
                  }
                ],
                "recap": [
                  "Randomisez pour vous protéger contre les effets d’ordre inconnus.",
                  "Bloquez les variables nuisibles connues pour améliorer la précision.",
                  "Analysez la conception que vous avez réellement exécutée."
                ]
              }
            },
            {
              "id": "B4.4",
              "order": 4,
              "title": "Méthodes de surface de réponse",
              "objective": "Trouvez des réglages optimaux avec les conceptions composites centrales ou Box-Behnken.",
              "content": {
                "why": "Le dépistage détecte des facteurs importants, mais les meilleurs réglages se situent souvent sur une surface de réponse courbe. Les méthodes de surface de réponse modélisent la courbure et localisent un optimal.",
                "what": "La méthodologie de la surface de réponse correspond à un modèle du second ordre avec des termes linéaires, d'interaction et carrés. Les plans composites centraux combinent des points factoriels ou fractionnaires avec des points axiaux et des points centraux. Les conceptions Box-Behnken utilisent trois niveaux et évitent les combinaisons de coins extrêmes. Les tracés de contour et de surface montrent la forme de la réponse. L'optimisation trouve les paramètres qui répondent à un objectif ou maximisent ou minimisent la réponse tout en respectant les contraintes.",
                "how": [
                  "Confirmez les facteurs importants du dépistage.",
                  "Définissez la réponse, les contraintes et la région acceptable.",
                  "Choisissez un design central composite ou Box-Behnken.",
                  "Randomisez et exécutez l’expérience.",
                  "Ajustez le modèle quadratique et vérifiez le manque d'ajustement.",
                  "Utilisez des tracés de contour et un optimiseur pour sélectionner les paramètres.",
                  "Exécutez des essais de confirmation et vérifiez la robustesse."
                ],
                "where": "Utilisez les méthodes de surface de réponse pour le rendement en fonction de la température et du temps, l'optimisation de la formulation, le temps de cycle par rapport aux paramètres et le réglage des performances. Exemple : après avoir examiné la température, la pression et le catalyseur, utilisez une conception composite centrale pour trouver la combinaison qui maximise le rendement.",
                "when_not": "N’utilisez pas les méthodes de surface de réponse avant d’avoir examiné de nombreux facteurs. Ne pas extrapoler en dehors de la région expérimentale. N'optimisez pas une moyenne sans tenir compte de la variation et des contraintes.",
                "common_mistakes": [
                  "Ajustement d'un modèle quadratique sans suffisamment de points de conception.",
                  "Extrapoler au-delà de la région étudiée.",
                  "Ignorer les exécutions de confirmation."
                ],
                "quick_check": [
                  {
                    "q": "Quels termes distinguent un modèle de surface de réponse d'un modèle de premier ordre ?",
                    "answer": "Termes au carré et interactions qui capturent la courbure.",
                    "explanation": "Les termes de second ordre permettent un optimum à l’intérieur de l’espace de conception."
                  },
                  {
                    "q": "Qu’est-ce qu’une conception composite centrale ?",
                    "answer": "Un plan factoriel ou fractionnaire augmenté de points axiaux et centraux.",
                    "explanation": "Les points ajoutés prennent en charge l'estimation des termes quadratiques."
                  },
                  {
                    "q": "Pourquoi réaliser des essais de confirmation ?",
                    "answer": "Pour vérifier que les paramètres optimaux prévus fonctionnent comme prévu.",
                    "explanation": "Les modèles sont des approximations et doivent être vérifiés dans la pratique."
                  }
                ],
                "recap": [
                  "Les méthodes de surface de réponse modélisent la courbure et optimisent les paramètres.",
                  "Utilisez des conceptions composites centrales ou Box-Behnken avec suffisamment de points.",
                  "Confirmez les paramètres prévus et restez à l’intérieur de la région étudiée."
                ]
              }
            },
            {
              "id": "B4.5",
              "order": 5,
              "title": "Conception robuste et Taguchi",
              "objective": "Réduisez la sensibilité au bruit à l’aide de facteurs de contrôle et de bruit.",
              "content": {
                "why": "Un processus qui ne fonctionne bien que dans des conditions idéales est fragile. La conception robuste trouve des réglages qui maintiennent les performances stables malgré le bruit inévitable.",
                "what": "Une conception robuste sépare les facteurs de contrôle, que l'équipe peut définir, des facteurs de bruit, difficiles ou coûteux à contrôler. Les méthodes Taguchi utilisent des tableaux orthogonaux et des rapports signal/bruit pour des réponses plus grandes sont meilleures, plus petites sont meilleures ou nominales sont les meilleures. Les réseaux intérieurs et extérieurs combinent des conditions de contrôle et de bruit. La fonction de perte de qualité exprime le coût de l’écart par rapport à l’objectif. Modèles d'optimisation robustes et modernes à la fois moyenne et variance.",
                "how": [
                  "Définir la réponse idéale et le coût de la déviation.",
                  "Identifiez les facteurs de contrôle et les facteurs de bruit importants.",
                  "Choisissez un réseau expérimental et une stratégie de bruit.",
                  "Exécutez l’expérience dans des conditions de bruit.",
                  "Analyser la réponse moyenne et le rapport signal/bruit.",
                  "Sélectionnez des paramètres avec des performances élevées et une faible sensibilité.",
                  "Confirmez la robustesse sous un bruit réaliste."
                ],
                "where": "Utilisez une conception robuste pour les tolérances de fabrication, les variations de matériaux, les conditions environnementales, les différences entre les fournisseurs et l'utilisation par le client. Exemple : choisissez une recette qui conserve le goût et la texture malgré les variations normales de température du four.",
                "when_not": "N'utilisez pas les rapports signal/bruit mécaniquement sans comprendre la réponse. N'ignorez pas les interactions et ne traitez pas les facteurs de bruit comme des facteurs de contrôle. Une conception robuste complète, mais ne remplace pas, la réduction des variations et le contrôle des processus.",
                "common_mistakes": [
                  "Optimiser uniquement la moyenne et ignorer la variation.",
                  "Confondre les facteurs de bruit et les facteurs de contrôle.",
                  "A défaut de confirmer les performances sous bruit."
                ],
                "quick_check": [
                  {
                    "q": "Qu'est-ce qu'un facteur de bruit ?",
                    "answer": "Variable qui affecte la réponse mais qui est difficile ou coûteuse à contrôler.",
                    "explanation": "La conception robuste réduit la sensibilité à ces facteurs."
                  },
                  {
                    "q": "Que résume un rapport signal sur bruit ?",
                    "answer": "Performance par rapport à la variation pour une caractéristique de qualité choisie.",
                    "explanation": "Différentes formules s'appliquent à « plus grand est mieux », « plus petit est mieux » et « nominal est le meilleur »."
                  },
                  {
                    "q": "Quel est l’objectif d’une conception robuste ?",
                    "answer": "Pour obtenir des performances stables dans des conditions de bruit.",
                    "explanation": "Les meilleurs réglages sont insensibles aux variations inévitables."
                  }
                ],
                "recap": [
                  "La conception robuste réduit la sensibilité aux facteurs de bruit.",
                  "Utilisez délibérément les facteurs de contrôle et de bruit.",
                  "Confirmez que les paramètres sélectionnés fonctionnent sous une variation réaliste."
                ]
              }
            }
          ]
        },
        {
          "id": "black-5",
          "number": 5,
          "title": "SPC et capacités avancés",
          "duration": "2,5 heures",
          "summary": "Surveillez les processus complexes avec des graphiques avancés et gérez les capacités lorsque les données ne sont pas normales ou que les exécutions sont courtes.",
          "lessons": [
            {
              "id": "B5.1",
              "order": 1,
              "title": "CPS avancé",
              "objective": "Utilisez les graphiques CUSUM, EWMA et multivariés de manière appropriée.",
              "content": {
                "why": "Les graphiques Shewhart traditionnels détectent bien les changements importants, mais sont lents pour les changements mineurs et durables. Les graphiques avancés améliorent la sensibilité pour les processus à faibles défauts, à haute capacité ou multivariés.",
                "what": "Les cartes CUSUM accumulent les écarts par rapport à une cible et détectent les petits changements persistants. Les cartes EWMA utilisent une moyenne pondérée qui donne plus d'influence aux observations récentes et peut être ajustée pour de petits changements. Les graphiques multivariés tels que le T-carré de Hotelling et le MEWMA surveillent ensemble plusieurs caractéristiques corrélées. Les limites de contrôle sont basées sur le processus de référence et la longueur moyenne d'exécution décrit la rapidité avec laquelle un graphique signale. Ces graphiques supposent généralement des observations indépendantes.",
                "how": [
                  "Définissez la caractéristique, la cible et le sous-groupe rationnel.",
                  "Établir une base de référence stable pour la phase I.",
                  "Vérifiez la distribution et l’autocorrélation.",
                  "Sélectionnez un graphique en fonction de la taille de l'équipe, du débit de données et des dimensions.",
                  "Définissez les paramètres et les limites du graphique.",
                  "Surveillez les données de la phase II et étudiez les signaux rapidement.",
                  "Mettez à jour les limites uniquement après un changement de processus permanent vérifié."
                ],
                "where": "Utilisez le SPC avancé dans les processus de semi-conducteurs, chimiques, pharmaceutiques, de latence informatique, de centres d’appels et de soins de santé. Exemple : une carte EWMA avec une constante de lissage de 0,2 détecte un décalage d'un sigma plus rapidement qu'une carte Shewhart. Un CUSUM avec une valeur de référence de 0,5 et un intervalle de décision de 5 est réglé pour de petits décalages.",
                "when_not": "N'appliquez pas de limites de contrôle avant que le processus ne soit stable. N'utilisez pas de limites standard sur des données fortement autocorrélées sans ajustement. Les graphiques multivariés nécessitent une base de référence adéquate et une interprétation minutieuse des signaux.",
                "common_mistakes": [
                  "Utiliser uniquement une carte Shewhart pour de petits changements soutenus.",
                  "Ignorer l'autocorrélation.",
                  "Traiter les limites de spécification comme des limites de contrôle."
                ],
                "quick_check": [
                  {
                    "q": "Quel graphique accumule les écarts par rapport à la cible pour détecter les petits changements ?",
                    "answer": "La carte CUSUM.",
                    "explanation": "Il additionne les écarts au fil du temps et signale une dérive persistante."
                  },
                  {
                    "q": "Que contrôle la constante de lissage EWMA ?",
                    "answer": "Quel poids reçoivent les observations récentes.",
                    "explanation": "Des valeurs plus petites mettent l’accent sur l’historique et détectent des changements plus petits."
                  },
                  {
                    "q": "Quand les graphiques multivariés sont-ils utiles ?",
                    "answer": "Lorsque plusieurs caractéristiques corrélées doivent être surveillées ensemble.",
                    "explanation": "Ils détectent les décalages combinés que des graphiques distincts peuvent manquer."
                  }
                ],
                "recap": [
                  "Les graphiques avancés ciblent les petits changements, les dérives ou plusieurs caractéristiques.",
                  "Établissez une base de référence stable et vérifiez l’indépendance.",
                  "Étudiez les signaux et mettez à jour les limites uniquement après un changement réel."
                ]
              }
            },
            {
              "id": "B5.2",
              "order": 2,
              "title": "Capacité non normale",
              "objective": "Transformez les données ou ajustez une distribution avant de calculer la capacité.",
              "content": {
                "why": "Cp et Cpk supposent un processus stable et normal. Les appliquer à des données asymétriques, limitées ou dénombrées peut gravement fausser les taux de défauts et les priorités d'amélioration.",
                "what": "La capacité non normale commence par un contrôle de stabilité et un contrôle de distribution. Les options incluent la transformation des données, par exemple avec une transformation Box-Cox, log ou racine carrée, ou l'ajustement d'une distribution appropriée telle que lognormale, Weibull ou gamma. La capacité est ensuite calculée à partir du modèle ajusté et exprimée en parties par million hors spécifications attendues. Signalez le modèle et validez-le, car un mauvais ajustement produit une capacité trompeuse.",
                "how": [
                  "Confirmez que le processus est stable.",
                  "Tracez les données et testez la normalité.",
                  "Choisissez une transformation ou une distribution ajustée en fonction des données et du processus.",
                  "Vérifiez l'adéquation.",
                  "Calculez le taux et la capacité hors spécifications attendus.",
                  "Comparez les résultats avec les spécifications et surveillez au fil du temps.",
                  "Traduisez le résultat en unités d'origine pour la communication."
                ],
                "where": "Utilisez des fonctionnalités non normales pour les temps de cycle, les temps d'attente, les concentrations, la durée de vie, le nombre de défauts et le nombre de particules. Exemple : le temps d'attente des patients est fortement asymétrique vers la droite. Ajustez une distribution log-normale et signalez le pourcentage attendu au-delà de l'objectif de niveau de service plutôt qu'un Cpk normal.",
                "when_not": "Ne calculez pas la capacité sur un processus instable. Ne forcez pas un modèle normal et n'utilisez pas de transformation sans vérifier l'ajustement. Ne confondez pas les limites de contrôle avec les limites de spécification.",
                "common_mistakes": [
                  "Signalement du Cpk normal pour les données asymétriques.",
                  "Transformer les données sans valider le modèle.",
                  "Ignorer la stabilité avant de calculer la capacité."
                ],
                "quick_check": [
                  {
                    "q": "Pourquoi le Cpk normal peut-il être trompeur pour les données faussées ?",
                    "answer": "Il estime les probabilités extrêmes en utilisant une distribution symétrique.",
                    "explanation": "La queue réelle peut être beaucoup plus grande ou plus petite que l'estimation normale."
                  },
                  {
                    "q": "Que faut-il vérifier avant un calcul de capabilité ?",
                    "answer": "Stabilité du processus et adéquation de la distribution.",
                    "explanation": "La capacité n’a de sens que pour un processus stable et correctement modélisé."
                  },
                  {
                    "q": "Qu’exprime une valeur PPM attendue ?",
                    "answer": "Nombre prévu d'unités hors spécifications par million.",
                    "explanation": "Cela traduit la capacité en taux de défauts."
                  }
                ],
                "recap": [
                  "La capacité nécessite de la stabilité et une distribution adaptée.",
                  "Transformez ou ajustez un modèle non normal et validez-le.",
                  "Signaler les taux hors spécifications attendus en termes pratiques."
                ]
              }
            },
            {
              "id": "B5.3",
              "order": 3,
              "title": "CPS à court terme",
              "objective": "Surveillez les petits lots avec des graphiques standardisés ou cibles.",
              "content": {
                "why": "Les cartes de contrôle traditionnelles nécessitent une base de référence substantielle, ce que les petites séries et la production à forte mixité ne fournissent pas. Le SPC à court terme rend possible la surveillance avec des données limitées.",
                "what": "Le SPC à court terme standardise les observations relatives à la cible et à la variation à court terme de chaque pièce ou produit. Un graphique standardisé trace des valeurs de type z afin que différentes parties puissent partager un graphique. Les graphiques de cible ou d'écart par rapport à la valeur nominale représentent la différence par rapport à la cible. Les graphiques de groupe combinent des pièces similaires dans une famille. Les limites peuvent être basées sur des lignes de base courtes ou sur des méthodes exactes basées sur de petits échantillons. La démarche ne doit pas mutualiser contrairement aux processus.",
                "how": [
                  "Définissez des familles de pièces avec des processus et des variations similaires.",
                  "Établissez un objectif et une courte référence pour chaque partie.",
                  "Standardisez les observations en utilisant la moyenne partielle et l’écart type.",
                  "Choisissez un graphique standardisé, cible ou de groupe.",
                  "Fixez des limites et surveillez les valeurs standardisées.",
                  "Étudiez les signaux et séparez les changements de configuration des changements de processus.",
                  "Mettez à jour les lignes de base lorsque le processus change de façon permanente."
                ],
                "where": "Utilisez le SPC à court terme dans les ateliers de travail, la fabrication à faible volume et à forte diversité, les produits personnalisés, les opérations pharmaceutiques par lots et les processus de demande de service. Exemple : cinq pièces personnalisées comportant dix essais chacune peuvent être standardisées au sein d'une pièce et tracées sur un seul graphique.",
                "when_not": "Ne mutualisez pas des produits dont les processus sont fondamentalement différents. N'utilisez pas de cartes X-bar et R standard avec trop peu de sous-groupes. Ne recalibrez pas les limites simplement pour masquer un décalage.",
                "common_mistakes": [
                  "Utiliser une base de référence inadéquate.",
                  "Combiner des produits différents en un seul groupe.",
                  "Traiter les limites de spécification comme des limites de contrôle."
                ],
                "quick_check": [
                  {
                    "q": "Quelle est l’idée clé derrière un graphique standardisé à court terme ?",
                    "answer": "Transformez chaque observation par rapport à sa cible et à sa variation spécifiques à la pièce.",
                    "explanation": "Les valeurs standardisées peuvent être tracées ensemble sur de courtes séries."
                  },
                  {
                    "q": "Qu'est-ce qu'un graphique cible ?",
                    "answer": "Un graphique des écarts par rapport à un objectif nominal.",
                    "explanation": "Il se concentre sur la distance entre chaque résultat et la valeur souhaitée."
                  },
                  {
                    "q": "Pourquoi les familles partielles doivent-elles être similaires ?",
                    "answer": "La mise en commun, contrairement aux processus, crée des variations et des limites trompeuses.",
                    "explanation": "Le graphique suppose une structure de variation sous-jacente commune."
                  }
                ],
                "recap": [
                  "Le SPC à court terme standardise ou cible les données pour gérer des références limitées.",
                  "Regroupez uniquement les produits et processus similaires.",
                  "Distinguez les changements de configuration des véritables changements de processus."
                ]
              }
            }
          ]
        },
        {
          "id": "black-6",
          "number": 6,
          "title": "Lean et DFSS",
          "duration": "4 heures",
          "summary": "Intégrez les outils de flux Lean à Six Sigma et concevez de nouveaux processus dès la première fois avec DMADV, QFD et Kano.",
          "lessons": [
            {
              "id": "B6.1",
              "order": 1,
              "title": "Intégration Lean Six Sigma",
              "objective": "Combinez la réduction des déchets et la réduction des variations dans une seule stratégie.",
              "content": {
                "why": "Lean et Six Sigma résolvent différentes parties du même problème. Lean élimine le gaspillage et améliore le flux, tandis que Six Sigma réduit les variations et les défauts. Les intégrer évite une rapidité sans qualité ou des statistiques sans flux.",
                "what": "Lean se concentre sur la valeur, la chaîne de valeur, le flux, l’attraction et la perfection. Il s’attaque aux huit gaspillages : transport, inventaire, mouvement, attente, surproduction, surtraitement, défauts et talents inutilisés. Six Sigma utilise le DMAIC et des méthodes statistiques pour réduire les variations. Une stratégie intégrée utilise le Lean pour exposer les gaspillages et stabiliser les flux, puis Six Sigma pour résoudre les variations tenaces, et s'applique à la fois à la sélection et au maintien des projets.",
                "how": [
                  "Cartographiez la chaîne de valeur et identifiez les gaspillages et les variations.",
                  "Quantifiez l’impact commercial des deux.",
                  "Priorisez les projets qui améliorent le flux et la qualité.",
                  "Appliquez des outils Lean pour les gaspillages évidents et Six Sigma pour les variations complexes.",
                  "Mesurez ensemble le délai de livraison, le taux de défauts et la capacité.",
                  "Impliquez les personnes qui font le travail.",
                  "Standardiser et surveiller le processus amélioré."
                ],
                "where": "Utilisez le Lean Six Sigma intégré dans le flux des patients, les délais de fabrication, les approbations bancaires, l'exécution des commandes et les opérations de service. Exemple : un service d'urgence utilise la cartographie de la chaîne de valeur pour réduire les attentes et le SPC pour réduire les variations des délais d'exécution des laboratoires.",
                "when_not": "N'utilisez pas de statistiques complexes pour corriger des gaspillages évidents. N'exécutez pas d'événements Lean qui ignorent la variation des défauts. Ne déployez pas d’outils sans un problème et un besoin client clairement définis.",
                "common_mistakes": [
                  "Traiter Lean et Six Sigma comme des programmes concurrents.",
                  "Optimiser les étapes locales plutôt que l’ensemble du flux.",
                  "Organiser des événements sans maintien en puissance ni mesure."
                ],
                "quick_check": [
                  {
                    "q": "Quelle est la priorité du Lean ?",
                    "answer": "Supprimer les déchets et améliorer le flux.",
                    "explanation": "Le Lean augmente la vitesse et réduit le travail sans valeur ajoutée."
                  },
                  {
                    "q": "Quel est l’objectif principal de Six Sigma ?",
                    "answer": "Réduire les variations et les défauts à l’aide de données et de statistiques.",
                    "explanation": "Six Sigma améliore la cohérence et les capacités."
                  },
                  {
                    "q": "Pourquoi intégrer Lean et Six Sigma ?",
                    "answer": "Améliorer à la fois la vitesse et la qualité sans échanger l’une contre l’autre.",
                    "explanation": "Le flux expose la variation et la réduction de la variation maintient le flux."
                  }
                ],
                "recap": [
                  "Lean améliore le flux ; Six Sigma améliore la cohérence.",
                  "Intégrer les outils autour du client et de la chaîne de valeur.",
                  "Mesurez à la fois les délais et la qualité, puis maintenez le gain."
                ]
              }
            },
            {
              "id": "B6.2",
              "order": 2,
              "title": "Cartographie de la chaîne de valeur",
              "objective": "Cartographier les flux de matériaux et d’informations et calculer les délais.",
              "content": {
                "why": "Les améliorations locales peuvent échouer si l’ensemble du flux reste lent. La cartographie de la chaîne de valeur montre le processus de bout en bout, y compris les délais d'attente et d'information qui manquent à l'analyse au niveau des étapes.",
                "what": "Une carte de la chaîne de valeur affiche le client, le fournisseur, les zones de processus, l'inventaire, le flux d'informations et une échelle de délais. Il sépare le temps à valeur ajoutée du temps sans valeur ajoutée. Le Takt time détermine le rythme de la demande des clients. Les mesures de processus incluent le temps de cycle, la disponibilité, le pourcentage d'achèvement et de précision et la taille du lot. La carte de l'état actuel expose les déchets et la carte de l'état futur définit un meilleur flux avec les propriétaires et les actions.",
                "how": [
                  "Sélectionnez une famille de produits ou de services avec un flux similaire.",
                  "Parcourez le processus réel et enregistrez les informations et le flux de matériaux.",
                  "Dessinez la carte de l’état actuel avec l’inventaire et les temps d’attente.",
                  "Collectez des données sur le temps de cycle, la disponibilité, la qualité et la demande.",
                  "Calculez le délai de livraison, le temps takt et le ratio de valeur ajoutée.",
                  "Concevez l’état futur et marquez les opportunités Kaizen.",
                  "Créez un plan de mise en œuvre avec les propriétaires et les dates."
                ],
                "where": "Utilisez la cartographie de la chaîne de valeur dans la fabrication, les parcours de soins de santé, le traitement des prêts, la livraison de logiciels et l'exécution des commandes. Exemple : une carte de l'état actuel montre 12 jours de délai mais seulement 45 minutes de travail à valeur ajoutée, révélant que l'attente est l'opportunité dominante.",
                "when_not": "Ne cartographiez pas chaque famille de produits à la fois. Ne créez pas une carte qui n’est jamais utilisée. N'ignorez pas le flux d'informations et ne planifiez pas depuis une salle de conférence sans observer le travail.",
                "common_mistakes": [
                  "Cartographie sans observation gemba ni données réelles.",
                  "Confondre temps de traitement et délai de livraison.",
                  "Création d'une carte de l'état futur sans propriétaires ni plan."
                ],
                "quick_check": [
                  {
                    "q": "Que comprend le délai de livraison ?",
                    "answer": "Tout le temps écoulé depuis la demande du client jusqu'à la livraison, y compris l'attente.",
                    "explanation": "Elle va au-delà de la durée pendant laquelle le travail est activement effectué."
                  },
                  {
                    "q": "Qu’est-ce que le temps takt ?",
                    "answer": "Temps de travail disponible divisé par la demande du client.",
                    "explanation": "Il fixe le rythme nécessaire pour répondre à la demande."
                  },
                  {
                    "q": "Pourquoi cartographier les flux d’informations ainsi que les flux de matières ?",
                    "answer": "Les retards et les erreurs d’information entraînent souvent des attentes et des retouches.",
                    "explanation": "Une carte complète montre comment le travail est déclenché et coordonné."
                  }
                ],
                "recap": [
                  "Les cartes de flux de valeur révèlent les flux et les attentes de bout en bout.",
                  "Utilisez des données réelles et l'observation Gemba.",
                  "Transformez la carte de l’état futur en actions détenues."
                ]
              }
            },
            {
              "id": "B6.3",
              "order": 3,
              "title": "TPM",
              "objective": "Améliorez la fiabilité des équipements grâce à une maintenance autonome et planifiée.",
              "content": {
                "why": "Les pannes d'équipement perturbent le flux, la qualité et la sécurité tout en imposant des réserves coûteuses. La maintenance productive totale intègre la fiabilité dans le travail quotidien au lieu d'attendre les pannes.",
                "what": "TPM vise à maximiser l’efficacité des équipements grâce à la maintenance autonome, à la maintenance planifiée et préventive, aux techniques prédictives, à la maintenance de qualité, à la formation, à la sécurité et à la gestion précoce des équipements. L’efficacité globale de l’équipement combine disponibilité, performances et qualité. Les six grosses pertes sont les pannes, la configuration et le réglage, le ralenti et les arrêts mineurs, la vitesse réduite, les défauts et reprises, et les pertes au démarrage. Les opérateurs effectuent des soins de base tels que le nettoyage, l'inspection, la lubrification et le serrage.",
                "how": [
                  "Mesurez l’OEE de référence et classez les pertes.",
                  "Restaurer l’état de base de l’équipement et corriger les défauts majeurs.",
                  "Former les opérateurs à la maintenance autonome.",
                  "Établissez un calendrier de maintenance planifiée et prédictive.",
                  "Améliorez la planification de l’installation, des pièces de rechange et de la maintenance.",
                  "Suivez l'OEE et les pertes avec l'équipe.",
                  "Standardiser et auditer le système de maintenance."
                ],
                "where": "Utilisez le TPM dans la fabrication, les équipements hospitaliers, les opérations de flotte, l'infrastructure informatique et les installations. Exemple : OEE correspond à 80 % de temps de disponibilité, 85 % de temps de performance, 95 % de qualité, soit environ 64,6 %. L'analyse des pertes montre si les pannes, la vitesse ou les défauts méritent la priorité.",
                "when_not": "Ne transformez pas le TPM en campagne de nettoyage et ne blâmez pas les opérateurs pour les pannes d’équipement. Ne le lancez pas sans temps de leadership, formation et support de maintenance. N'utilisez pas l'OEE comme tableau de bord autonome sans contexte.",
                "common_mistakes": [
                  "Nettoyer une fois au lieu de maintenir l'état de base.",
                  "Suivi de l'OEE sans analyser les six pertes.",
                  "Faire fonctionner l’équipement jusqu’en panne pour éviter les temps d’arrêt pour maintenance."
                ],
                "quick_check": [
                  {
                    "q": "Quelles sont les trois composantes qui composent l’OEE ?",
                    "answer": "Disponibilité, performance et qualité.",
                    "explanation": "Leur multiplication montre la production efficace de l'équipement."
                  },
                  {
                    "q": "Qu’est-ce que la maintenance autonome ?",
                    "answer": "Propriété de l'opérateur du nettoyage de base, de l'inspection et de l'entretien mineur.",
                    "explanation": "Les opérateurs détectent et préviennent les détériorations à un stade précoce."
                  },
                  {
                    "q": "Quel est l’objectif clé du TPM ?",
                    "answer": "Équipement fiable avec un minimum de temps d’arrêt imprévus.",
                    "explanation": "Le TPM déplace les efforts de la réparation réactive vers la prévention."
                  }
                ],
                "recap": [
                  "Le TPM améliore la fiabilité et l’efficacité des équipements.",
                  "Utilisez l’OEE et l’analyse des pertes pour cibler l’amélioration.",
                  "Combinez les soins de l’opérateur avec la maintenance planifiée et prédictive."
                ]
              }
            },
            {
              "id": "B6.4",
              "order": 4,
              "title": "SMED",
              "objective": "Réduisez le temps de changement en séparant le travail interne et externe.",
              "content": {
                "why": "De longs changements entraînent des lots importants, des stocks excédentaires et une perte de capacité. SMED réduit le temps de changement afin que le processus puisse répondre avec flexibilité à la demande.",
                "what": "L'échange de matrices en une minute sépare le travail de changement interne, qui nécessite l'arrêt de la machine, du travail externe, qui peut être effectué pendant son fonctionnement. La méthode convertit le travail interne en travail externe, rationalise les deux et standardise la nouvelle procédure. Le temps de changement est mesuré à partir de la dernière pièce en bon état avant le changement jusqu'à la première pièce en bon état après celui-ci. L’idéal est des minutes à un chiffre, mais l’objectif pratique dépend du risque et du volume.",
                "how": [
                  "Observez et filmez le changement en cours.",
                  "Séparer les activités internes et externes.",
                  "Chronométrez chaque activité et identifiez les gaspillages.",
                  "Convertissez autant de travail interne que possible en externe.",
                  "Rationalisez les pinces, les outils, la mise en scène et le travail parallèle.",
                  "Standardisez les rôles et utilisez une liste de contrôle.",
                  "Pilotez, mesurez et pérennisez le nouveau basculement."
                ],
                "where": "Utilisez SMED dans la fabrication, la rotation des salles d'opération, la configuration du laboratoire, le déploiement de logiciels, l'impression et la préparation des services. Exemple : réduisez un changement de 90 minutes à 25 minutes en pré-équipant les outils à l'extérieur et en remplaçant les boulons par des colliers rapides.",
                "when_not": "Ne supprimez pas les contrôles de sécurité ou de qualité pour gagner du temps. Ne présumez pas que chaque étape actuelle est nécessaire. Ne considérez pas le SMED comme un événement ponctuel sans travail et soutien standard.",
                "common_mistakes": [
                  "Commencer avec de nouveaux outils au lieu de séparer le travail interne et externe.",
                  "Mesurer uniquement les temps d'arrêt de la machine, et non la première bonne pièce par rapport à la première bonne pièce.",
                  "Ne pas standardiser et former la nouvelle méthode."
                ],
                "quick_check": [
                  {
                    "q": "Qu’est-ce que le travail de transition interne ?",
                    "answer": "Travail qui ne peut être effectué que lorsque la machine est à l'arrêt.",
                    "explanation": "L’objectif est de convertir le travail interne en externe lorsque cela est possible."
                  },
                  {
                    "q": "Comment le temps de changement est-il mesuré ?",
                    "answer": "De la dernière bonne partie avant le changement à la première bonne partie après celui-ci.",
                    "explanation": "Cela capture la totalité du temps de production perdu."
                  },
                  {
                    "q": "Que signifie l’objectif d’une minute ?",
                    "answer": "Un changement mesuré en minutes à un chiffre.",
                    "explanation": "Il s’agit d’un objectif ambitieux et non d’une exigence universelle."
                  }
                ],
                "recap": [
                  "SMED sépare le travail de changement interne et externe.",
                  "Convertissez le travail interne en externe et rationalisez le reste.",
                  "Standardiser, mesurer et pérenniser l’amélioration."
                ]
              }
            },
            {
              "id": "B6.5",
              "order": 5,
              "title": "Travail standard",
              "objective": "Documentez la meilleure méthode actuelle avec takt, séquence et inventaire.",
              "content": {
                "why": "Sans norme, chaque personne et chaque équipe effectue son travail différemment. Le travail standard réduit les variations, soutient la formation et la sécurité et crée une base d'amélioration.",
                "what": "Le travail standard documente la meilleure méthode actuelle, y compris le temps takt, la séquence de travail, l'inventaire standard, le temps de cycle et les points clés de qualité et de sécurité. Il est créé avec les personnes qui effectuent le travail et leur appartient. Ce n'est pas une règle permanente ; c'est la meilleure méthode actuelle et doit être mise à jour lorsque le processus change. Les formats courants incluent des tableaux de combinaison de travail standard, des feuilles de répartition des tâches et des instructions de travail visuelles.",
                "how": [
                  "Observez le travail réel et identifiez les exigences du client.",
                  "Calculez le temps takt à partir de la demande et du temps disponible.",
                  "Divisez le travail en étapes et mesurez chaque étape.",
                  "Concevez une séquence équilibrée avec un inventaire standard.",
                  "Documenter les points de qualité, de sécurité et d’équipement.",
                  "Former les opérateurs et vérifier leur compréhension.",
                  "Auditer, améliorer et mettre à jour la norme."
                ],
                "where": "Utiliser des travaux standard en matière d'assemblage, de protocoles de soins de santé, de méthodes de laboratoire, de scripts de service, de logistique et de processus administratifs. Exemple : le temps takt est de 60 secondes et le temps de cycle conçu est de 55 secondes, laissant une capacité de variation et de récupération.",
                "when_not": "N'écrivez pas de normes sans les opérateurs et ne les utilisez pas pour la microgestion. Ne standardisez pas un processus instable avant de réduire les variations majeures. Le travail du savoir peut nécessiter des normes flexibles qui définissent les résultats et les contraintes.",
                "common_mistakes": [
                  "Créer des documents qui restent sur une étagère.",
                  "Ne pas former ou auditer la norme.",
                  "Ne jamais mettre à jour la norme après amélioration."
                ],
                "quick_check": [
                  {
                    "q": "Qu’est-ce que le temps takt ?",
                    "answer": "Temps de travail disponible divisé par la demande du client.",
                    "explanation": "Il fixe le rythme que le processus doit respecter."
                  },
                  {
                    "q": "Qui devrait aider à créer une œuvre standard ?",
                    "answer": "Les personnes qui effectuent le travail.",
                    "explanation": "L’implication de l’opérateur améliore la précision et l’appropriation."
                  },
                  {
                    "q": "Pourquoi le travail standard est-il une base d’amélioration ?",
                    "answer": "Vous ne pouvez pas améliorer de manière fiable un processus qui n’est pas standardisé.",
                    "explanation": "Une méthode stable rend visible l’effet des changements."
                  }
                ],
                "recap": [
                  "Le travail standard capture la meilleure méthode actuelle.",
                  "Incluez le takt, la séquence, l’inventaire et les points clés.",
                  "Impliquez les opérateurs et mettez à jour la norme à mesure que le processus s’améliore."
                ]
              }
            },
            {
              "id": "B6.6",
              "order": 6,
              "title": "5S et Management Visuel",
              "objective": "Créez un lieu de travail explicite et autonettoyant.",
              "content": {
                "why": "L'encombrement, les outils manquants et l'état flou créent des retards, des défauts et des risques pour la sécurité. Un lieu de travail visuel met en évidence d’un seul coup d’œil les conditions normales et anormales.",
                "what": "La méthode 5S utilise le tri, la mise en ordre, la brillance, la standardisation et le maintien. Le tri supprime ce qui n'est pas nécessaire. Mettre en ordre donne à tout un emplacement clair. Shine nettoie et inspecte. Standardiser crée des règles visuelles et des responsabilités. Maintenir les habitudes et les audits. La gestion visuelle utilise des étiquettes, des tableaux fantômes, des marquages ​​au sol, des andons, des kanban et des tableaux de bord pour que le lieu de travail s'explique.",
                "how": [
                  "Basez la zone avec des photos et une promenade dans les déchets.",
                  "Triez les éléments avec des balises rouges et une règle de disposition.",
                  "Définissez les emplacements en fonction de la fréquence d’utilisation et de l’ergonomie.",
                  "Nettoyer et inspecter les équipements et les espaces.",
                  "Créez des normes visuelles et une appropriation.",
                  "Auditez régulièrement et coachez immédiatement.",
                  "Étendre aux zones connexes uniquement après les travaux de maintien en puissance."
                ],
                "where": "Utilisez les 5S et la gestion visuelle dans les ateliers, les laboratoires, les bureaux, les salles de fournitures des hôpitaux, les entrepôts et les espaces de travail numériques. Exemple : un tableau fantôme pour les outils réduit le temps de recherche et rend immédiatement visible un outil manquant.",
                "when_not": "Ne lancez pas 5S comme un concours de nettoyage. N'ajoutez pas de fouillis visuel qui cache les signaux importants. Ne vous lancez pas sans appropriation et sans plan de maintien en puissance.",
                "common_mistakes": [
                  "Aucun maintien après le nettoyage initial.",
                  "Étiquettes et emplacements sans système logique.",
                  "Utiliser les audits pour blâmer plutôt que pour améliorer."
                ],
                "quick_check": [
                  {
                    "q": "Quels sont les cinq S ?",
                    "answer": "Triez, mettez de l’ordre, faites briller, standardisez et maintenez.",
                    "explanation": "Ils créent et maintiennent un lieu de travail organisé."
                  },
                  {
                    "q": "Qu’est-ce que le management visuel ?",
                    "answer": "Utiliser des signaux visuels pour rendre évidents l’état et les anomalies.",
                    "explanation": "Les exemples incluent les andons, les marquages ​​au sol et les tableaux d'ombre."
                  },
                  {
                    "q": "Pourquoi le sustain est-il le S le plus difficile ?",
                    "answer": "Cela nécessite des habitudes, de l’appropriation et un suivi régulier.",
                    "explanation": "Le nettoyage initial s’estompe sans système de gestion."
                  }
                ],
                "recap": [
                  "5S crée un lieu de travail organisé et explicite.",
                  "La gestion visuelle rend visibles les conditions anormales.",
                  "Le maintien nécessite une appropriation, des audits et un encadrement."
                ]
              }
            },
            {
              "id": "B6.7",
              "order": 7,
              "title": "Conception pour Six Sigma (DMADV)",
              "objective": "Définir, mesurer, analyser, concevoir et vérifier un nouveau processus ou produit.",
              "content": {
                "why": "Réparer un processus mal conçu peut être coûteux et lent. Design for Six Sigma intègre dès le départ les capacités dans un nouveau produit, service ou processus.",
                "what": "DFSS utilise DMADV : définir, mesurer, analyser, concevoir et vérifier. Définir clarifie l’analyse de rentabilisation et les exigences du client. Measure traduit la voix du client en exigences essentielles à la qualité. Analyse développe et évalue les concepts de conception. La conception optimise le concept choisi et évalue les risques. Vérifier prouve la capacité grâce à des pilotes, des tests de fiabilité et de validation. Les outils incluent QFD, Kano, FMEA, DOE, simulation Monte Carlo et conception de tolérances.",
                "how": [
                  "Définir le projet, les clients et l'analyse de rentabilisation.",
                  "Mesurez les CTQ et traduisez les besoins des clients.",
                  "Analyser les concepts par rapport aux exigences et aux risques.",
                  "Concevoir le produit ou le processus et optimiser les performances.",
                  "Prévoyez la capacité, la fiabilité et les modes de défaillance.",
                  "Vérifiez avec les pilotes, les tests et le transfert.",
                  "Surveillez la conception lancée et capturez les leçons apprises."
                ],
                "where": "Utilisez DMADV pour les nouveaux produits, services, processus, logiciels et installations. Exemple : concevoir un nouveau processus d'admission des patients en définissant des CTQ, en évaluant les concepts de flux, en simulant la demande et en pilotant avant le lancement complet.",
                "when_not": "N'utilisez pas DMADV lorsqu'un processus existant présente un problème connu ; DMAIC est généralement approprié. Ne sautez pas la vérification ou la conception sans la contribution du client. Ne considérez pas un pilote comme un substitut aux preuves de capacité et de fiabilité.",
                "common_mistakes": [
                  "Appliquer la pensée DMAIC à un nouveau design.",
                  "Sauter la voix du client et la traduction CTQ.",
                  "Attendre le lancement pour tester les capacités et les risques."
                ],
                "quick_check": [
                  {
                    "q": "Que signifient les lettres DMADV ?",
                    "answer": "Définir, mesurer, analyser, concevoir et vérifier.",
                    "explanation": "DMADV est la feuille de route DFSS pour les nouvelles conceptions."
                  },
                  {
                    "q": "Quand DMADV est-il préféré à DMAIC ?",
                    "answer": "Lors de la conception d’un nouveau produit, service ou processus.",
                    "explanation": "DMAIC améliore un processus existant ; DMADV en crée un nouveau."
                  },
                  {
                    "q": "Pourquoi la vérification est-elle essentielle dans DMADV ?",
                    "answer": "Cela prouve que la conception répond aux CTQ et fonctionne de manière fiable dans la pratique.",
                    "explanation": "Les prédictions de conception doivent être testées avant le lancement."
                  }
                ],
                "recap": [
                  "DMADV conçoit de nouveaux processus et produits pour la capacité.",
                  "Traduisez les besoins des clients en CTQ et vérifiez la conception.",
                  "Utilisez DFSS lorsque le processus n'existe pas encore."
                ]
              }
            },
            {
              "id": "B6.8",
              "order": 8,
              "title": "QFD",
              "objective": "Traduisez les besoins des clients en exigences de conception avec la House of Quality.",
              "content": {
                "why": "Les équipes peuvent optimiser les fonctionnalités que les clients n'apprécient pas. Le déploiement des fonctions qualité traduit la voix du client en exigences de conception, de sorte que les décisions d'ingénierie et de processus restent liées aux besoins du client.",
                "what": "La Maison de la Qualité est la matrice centrale de QFD. Les besoins des clients sont le quoi, les exigences techniques sont le comment, et la matrice des relations évalue dans quelle mesure chaque exigence technique affecte chaque besoin. Le toit montre des corrélations entre les exigences techniques. Des notes et des objectifs compétitifs complètent la maison. L’importance pondérée permet de prioriser les exigences. QFD peut se répercuter sur la planification des produits, des pièces, des processus et de la production.",
                "how": [
                  "Recueillez et structurez les déclarations de la voix du client.",
                  "Hiérarchisez les besoins des clients par importance.",
                  "Identifiez les exigences techniques mesurables.",
                  "Relations de taux et corrélations techniques.",
                  "Comparez les concurrents et fixez des objectifs.",
                  "Calculez les priorités pondérées et résolvez les compromis.",
                  "Intégrez les priorités aux plans de conception et de contrôle."
                ],
                "where": "Utilisez QFD pour les nouveaux produits, la conception de services, les fonctionnalités logicielles, les services de santé et la conception d'installations. Exemple : les clients disent que le processus doit être facile à utiliser. Liens QFD qui doivent répondre à des exigences mesurables telles que les étapes, le temps d'attente, le taux d'erreur et l'accessibilité.",
                "when_not": "N'utilisez pas QFD comme un exercice de paperasse ponctuel. N'inventez pas les besoins des clients sans recherche. Ne construisez pas une matrice si grande que l’équipe ne puisse pas agir dessus.",
                "common_mistakes": [
                  "Deviner la voix du client.",
                  "Attribuer arbitrairement des scores relationnels.",
                  "Fixer des objectifs sans propriétaires ni suivi."
                ],
                "quick_check": [
                  {
                    "q": "Quels sont les quoi et comment dans une Maison de Qualité ?",
                    "answer": "Les besoins du client et le comment sont les exigences techniques.",
                    "explanation": "La matrice relie les souhaits du client aux caractéristiques de conception mesurables."
                  },
                  {
                    "q": "Que montre le toit de la Maison de la Qualité ?",
                    "answer": "Corrélations entre les exigences techniques.",
                    "explanation": "Il révèle les compromis et les synergies entre les choix de conception."
                  },
                  {
                    "q": "Pourquoi pondérer les besoins des clients ?",
                    "answer": "Hiérarchiser les exigences techniques par importance du client.",
                    "explanation": "La pondération concentre les ressources sur ce qui compte le plus."
                  }
                ],
                "recap": [
                  "QFD traduit les besoins des clients en exigences techniques.",
                  "Utilisez les évaluations relationnelles et les objectifs concurrentiels pour établir des priorités.",
                  "Intégrez les priorités aux décisions de conception et de processus."
                ]
              }
            },
            {
              "id": "B6.9",
              "order": 9,
              "title": "Modèle Kano",
              "objective": "Classez les fonctionnalités comme de base, performantes ou plus agréables.",
              "content": {
                "why": "Toutes les fonctionnalités n’affectent pas la satisfaction de la même manière. Le modèle Kano empêche les équipes de surinvestir dans des fonctionnalités que les clients remarquent à peine ou de sous-investir dans des éléments de base dont l'absence provoque l'insatisfaction.",
                "what": "Kano classe les fonctionnalités comme incontournables, performantes, attrayantes, indifférentes ou inversées. Les fonctionnalités incontournables provoquent l’insatisfaction lorsqu’elles sont manquantes mais ne ravissent pas lorsqu’elles sont présentes. Les fonctionnalités de performance produisent une satisfaction proportionnelle à la qualité de leur prestation. Les caractéristiques attrayantes ravissent lorsqu’elles sont présentes mais ne provoquent pas d’insatisfaction lorsqu’elles sont absentes. Au fil du temps, on s’attend souvent à des fonctionnalités attrayantes. La conception de l'enquête pose des questions fonctionnelles et dysfonctionnelles pour chaque fonctionnalité.",
                "how": [
                  "Répertoriez les caractéristiques ou les exigences des candidats.",
                  "Rédigez des questions d'enquête appariées sur les fonctions et les dysfonctions.",
                  "Recueillez les réponses de segments de clientèle représentatifs.",
                  "Classez chaque fonctionnalité à l’aide du tableau d’évaluation Kano.",
                  "Analysez les différences par segment et dans le temps.",
                  "Donnez la priorité aux fonctionnalités incontournables en premier, puis aux performances et aux plaisirs sélectionnés."
                ],
                "where": "Utilisez Kano pour les fonctionnalités des produits, la conception des services, les applications mobiles, les équipements hôteliers et les expériences de soins de santé. Exemple : une chambre d'hôpital propre est indispensable, un temps d'attente plus court est une performance et un appel de suivi inattendu peut être attrayant.",
                "when_not": "Ne présumez pas qu’un segment de clientèle représente tous les clients. Ne poursuivez pas les délices avant de réparer les bases manquantes. Ne considérez pas les classifications comme permanentes ; les attentes changent.",
                "common_mistakes": [
                  "Enquêter uniquement sur les questions positives.",
                  "Traiter les catégories Kano comme statiques.",
                  "Ignorer les différences de segments."
                ],
                "quick_check": [
                  {
                    "q": "Qu'est-ce qu'une fonctionnalité incontournable ?",
                    "answer": "Une fonctionnalité dont l’absence provoque l’insatisfaction mais dont la présence n’enchante pas.",
                    "explanation": "Les fonctionnalités indispensables sont des attentes fondamentales."
                  },
                  {
                    "q": "Qu'est-ce qu'une fonctionnalité de performance ?",
                    "answer": "Une fonctionnalité où la satisfaction augmente à mesure que les performances s’améliorent.",
                    "explanation": "Les caractéristiques de performance suivent une relation à peu près linéaire."
                  },
                  {
                    "q": "Qu’est-ce qu’une fonctionnalité intéressante ?",
                    "answer": "Une fonctionnalité qui ravit lorsqu’elle est présente mais ne provoque pas d’insatisfaction lorsqu’elle est absente.",
                    "explanation": "Les fonctionnalités attrayantes sont des différenciateurs inattendus."
                  }
                ],
                "recap": [
                  "Kano sépare les fonctionnalités de base, de performance et agréables.",
                  "Corrigez les exigences indispensables avant de chasser les ravisseurs.",
                  "Revoyez les classifications à mesure que les attentes des clients évoluent."
                ]
              }
            }
          ]
        },
        {
          "id": "black-7",
          "number": 7,
          "title": "Leadership et finances",
          "duration": "3 heures",
          "summary": "Dirigez des changements complexes, construisez des pipelines de projets, prouvez des avantages financiers et développez d’autres ceintures.",
          "lessons": [
            {
              "id": "B7.1",
              "order": 1,
              "title": "AMDEC avancée",
              "objective": "Utilisez la priorité des actions, l’examen des risques et l’intégration avec les plans de contrôle.",
              "content": {
                "why": "Un classement de base des risques peut inciter les équipes à résoudre des problèmes de faible gravité tout en ignorant les modes de défaillance graves. L'AMDEC avancée hiérarchise les risques de manière à protéger les clients et à lier les actions aux contrôles.",
                "what": "L'AMDEC identifie les modes de défaillance, leurs effets et leurs causes. La gravité évalue l'impact, l'occurrence évalue la probabilité et la détection évalue la chance de détecter la défaillance avant l'impact. Le numéro de priorité traditionnel des risques multiplie la gravité, l’occurrence et la détection, mais il traite des risques très différents comme équivalents. La méthode de priorité d’action AIAG-VDA met l’accent sur la gravité et attire l’attention sur les combinaisons hautement prioritaires. Les actions doivent d’abord prévenir les causes, puis améliorer la détection et alimenter le plan de contrôle.",
                "how": [
                  "Définir la portée et la structure de la conception ou du processus.",
                  "Répertoriez les fonctions et les modes de défaillance potentiels.",
                  "Décrire les effets et attribuer la gravité.",
                  "Identifiez les causes et évaluez l’occurrence.",
                  "Énumérez les contrôles de prévention et de détection actuels.",
                  "Attribuez la priorité aux actions et sélectionnez les actions.",
                  "Réévaluer les risques et mettre à jour le plan de contrôle et les travaux standards."
                ],
                "where": "Utilisez l'AMDEC pour les processus de conception, de fabrication, de logiciels, de soins de santé et de service. Exemple : un mode de défaillance de gravité 10 et d'occurrence 4 reste hautement prioritaire même lorsque la détection est forte, car l'effet est catastrophique.",
                "when_not": "N'utilisez pas un simple seuil RPN comme seule règle de décision. Ne laissez pas l’AMDEC devenir de la paperasse. N'ignorez pas les facteurs humains, n'utilisez pas d'erreurs ou d'interactions entre les modes de défaillance.",
                "common_mistakes": [
                  "Priorisation par RPN seul.",
                  "Investir uniquement dans la détection plutôt que dans la prévention.",
                  "Défaut de mise à jour de l'AMDEC et du plan de contrôle."
                ],
                "quick_check": [
                  {
                    "q": "Que représentent la gravité, l’occurrence et la détection ?",
                    "answer": "Impact de l'effet, probabilité de la cause et capacité de détection avant l'impact.",
                    "explanation": "Ensemble, ils décrivent le risque d’un mode de défaillance."
                  },
                  {
                    "q": "Pourquoi la priorité à l'action est-elle préférée à la RPN seule ?",
                    "answer": "Cela donne plus de poids à la gravité et évite les équivalences trompeuses des scores.",
                    "explanation": "Différentes combinaisons de risques peuvent produire le même RPN."
                  },
                  {
                    "q": "Que doit mettre à jour une action AMDEC ?",
                    "answer": "Le plan de contrôle, les travaux standards et les documents de processus associés.",
                    "explanation": "Les contrôles des risques doivent être intégrés à la manière dont le processus se déroule."
                  }
                ],
                "recap": [
                  "L'AMDEC identifie les modes de défaillance, les effets, les causes et les contrôles.",
                  "Donnez la priorité aux risques de gravité élevée et prévenez les causes avant d’améliorer la détection.",
                  "Reliez les actions AMDEC aux plans de contrôle et aux travaux standards."
                ]
              }
            },
            {
              "id": "B7.2",
              "order": 2,
              "title": "Gestion du changement",
              "objective": "Utilisez une approche structurée pour développer la prise de conscience, le désir, les connaissances, les capacités et le renforcement.",
              "content": {
                "why": "Les solutions techniques échouent lorsque les gens ne les adoptent pas. La gestion du changement renforce la prise de conscience, les capacités et l’engagement nécessaires pour que l’amélioration perdure.",
                "what": "ADKAR décrit cinq résultats : la conscience du besoin de changement, le désir de participer, la connaissance de la façon de changer, la capacité à performer et le renforcement pour perdurer. L’analyse des parties prenantes identifie qui est concerné et quelle influence elles ont. Le parrainage, la communication, la formation, le coaching et la gestion des résistances sont coordonnés tout au long du projet.",
                "how": [
                  "Définir le changement et son impact sur chaque groupe de parties prenantes.",
                  "Évaluer l’état de préparation et les sources de résistance.",
                  "Sensibilisez-vous avec des raisons professionnelles et personnelles claires.",
                  "Engagez des sponsors et des influenceurs pour créer du désir.",
                  "Fournir une formation et des pratiques pour développer les connaissances et les capacités.",
                  "Mesurez l’adoption et éliminez les obstacles.",
                  "Renforcez avec la reconnaissance, les audits et les systèmes mis à jour."
                ],
                "where": "Utilisez la gestion du changement pour les changements de processus, les déploiements de logiciels, les protocoles de soins de santé, les transformations Lean et les nouvelles normes de travail. Exemple : un plan de contrôle échoue parce que les opérateurs n'étaient pas impliqués, n'ont pas compris pourquoi c'était important et n'ont bénéficié d'aucun encadrement après la formation.",
                "when_not": "Ne traitez pas la gestion du changement comme une simple annonce. Ne présumez pas que la formation crée des capacités ou des désirs. N'ignorez pas la résistance et ne vous fiez pas uniquement à l'e-mail d'un sponsor.",
                "common_mistakes": [
                  "Communiquer une fois et déclarer le changement terminé.",
                  "Ignorer le désir et se concentrer uniquement sur l'entraînement.",
                  "A défaut de renforcer la nouvelle voie."
                ],
                "quick_check": [
                  {
                    "q": "Que signifie ADKAR ?",
                    "answer": "Conscience, désir, connaissance, capacité et renforcement.",
                    "explanation": "Il décrit les éléments constitutifs du changement individuel."
                  },
                  {
                    "q": "Pourquoi le désir est-il important ?",
                    "answer": "Les gens doivent choisir de soutenir et de participer au changement.",
                    "explanation": "La connaissance à elle seule ne crée pas d’engagement."
                  },
                  {
                    "q": "Qu'est-ce que le renforcement ?",
                    "answer": "Actions qui font perdurer le nouveau comportement après sa mise en œuvre.",
                    "explanation": "La reconnaissance, les audits et les systèmes soutiennent l’adoption."
                  }
                ],
                "recap": [
                  "Le changement réussit grâce aux personnes, et pas seulement à la conception technique.",
                  "Utilisez ADKAR pour diagnostiquer où l’adoption échoue.",
                  "Parrainez, communiquez, formez, coachez et renforcez."
                ]
              }
            },
            {
              "id": "B7.3",
              "order": 3,
              "title": "Direction d'équipe",
              "objective": "Diriger des équipes interfonctionnelles, gérer les conflits et prendre des décisions.",
              "content": {
                "why": "Les ceintures noires dirigent des équipes interfonctionnelles sans autorité directe. Des rôles clairs, des conflits constructifs et des décisions judicieuses déterminent si l'équipe tient ses promesses.",
                "what": "Les équipes passent généralement par la formation, la prise d’assaut, la normalisation et la performance. Une charte définit l'objectif, la portée, les rôles et les droits de décision. RACI précise qui est responsable, responsable, consulté et informé. Les conflits de tâches autour des idées peuvent améliorer les décisions, tandis que les conflits relationnels sapent la confiance. Les méthodes de décision comprennent le commandement, la consultation, le consensus et l'accord unanime. La sécurité psychologique aide les gens à parler des risques et des erreurs.",
                "how": [
                  "Créez une charte et des rôles clairs.",
                  "Établissez des règles de base et respectez les normes.",
                  "Utilisez des agendas structurés et de la facilitation.",
                  "Séparez les conflits de tâches des conflits personnels.",
                  "Choisissez une méthode de décision adaptée aux enjeux.",
                  "Documentez les décisions, les propriétaires et les dates.",
                  "Donnez votre avis et reconnaissez les progrès."
                ],
                "where": "Utilisez le leadership d'équipe dans les projets DMAIC, les événements Kaizen, les équipes de conception et les conseils d'amélioration interfonctionnels. Exemple : une équipe dont les droits de décision ne sont pas clairs continue de revenir sur le même choix. Un RACI et une méthode de décision déclarée résolvent la boucle.",
                "when_not": "N'évitez pas les conflits et appelez cela l'harmonie. N'utilisez pas le consensus pour chaque décision ; cela peut ralentir des choix urgents. Ne faites pas de microgestion des membres qualifiés de l’équipe.",
                "common_mistakes": [
                  "Rôles et droits de décision peu clairs.",
                  "Pensée de groupe et silence sur les risques.",
                  "Décisions enregistrées sans propriétaires ni délais."
                ],
                "quick_check": [
                  {
                    "q": "Qu'est-ce que la sécurité psychologique ?",
                    "answer": "Un climat où les gens peuvent s’exprimer sans crainte d’humiliation ou de punition.",
                    "explanation": "Il soutient l’apprentissage, l’identification des risques et un débat honnête."
                  },
                  {
                    "q": "Quelle est la différence entre un conflit de tâche et un conflit relationnel ?",
                    "answer": "Le conflit de tâches concerne les idées ; le conflit relationnel est personnel.",
                    "explanation": "Les conflits de tâches peuvent être productifs, tandis que les conflits relationnels nuisent généralement à l'équipe."
                  },
                  {
                    "q": "Quand une décision de commandement est-elle appropriée ?",
                    "answer": "Quand la rapidité et une responsabilité claire comptent plus qu’une large contribution.",
                    "explanation": "Le leader décide et explique la logique."
                  }
                ],
                "recap": [
                  "Dirigez grâce à la clarté, la confiance et des décisions structurées.",
                  "Encouragez le débat sur les tâches tout en limitant les conflits personnels.",
                  "Documenter les décisions et demander des comptes à l’équipe."
                ]
              }
            },
            {
              "id": "B7.4",
              "order": 4,
              "title": "Sélection de projets",
              "objective": "Hiérarchisez les projets en fonction de leur impact, de leur faisabilité, de leur risque et de leur adéquation stratégique.",
              "content": {
                "why": "Les ressources d’amélioration sont limitées. Un processus de sélection discipliné garantit que l'organisation travaille sur des projets présentant la plus grande valeur stratégique et des chances réalistes de succès.",
                "what": "La sélection des projets compare les candidats en fonction de leur adéquation stratégique, de leur impact client et financier, de leur faisabilité, de leur risque, de leur urgence et de leur valeur d'apprentissage. Une matrice de notation pondérée rend les critères explicites et comparables. Le portefeuille doit équilibrer les gains rapides avec des efforts stratégiques plus importants et éviter de surcharger les mêmes personnes ou fonctions. Un projet sélectionné nécessite un énoncé clair du problème, une base de référence, un objectif, une portée, un sponsor et un engagement en termes de ressources.",
                "how": [
                  "Recueillez les problèmes des candidats issus de la stratégie, des clients, des opérations et des employés.",
                  "Définir les critères de sélection et convenir des pondérations.",
                  "Notez chaque candidat avec des preuves, pas seulement avec son opinion.",
                  "Vérifiez la faisabilité, la disponibilité des données, l’autorité et les ressources.",
                  "Examinez le portefeuille pour en vérifier l’équilibre et les dépendances.",
                  "Sélectionnez les projets et attribuez des sponsors.",
                  "Charte chaque projet avec une base de référence et un objectif mesurables."
                ],
                "where": "Utilisez la sélection de projets dans la planification annuelle, les pipelines DMAIC, les portefeuilles Lean et les conseils d'amélioration continue. Exemple : un projet avec un impact client élevé mais sans référence fiable peut nécessiter un court projet de mesure avant l'affrètement complet.",
                "when_not": "N’utilisez pas de matrice de notation comme substitut au jugement. Ne sélectionnez pas uniquement des projets faciles ou uniquement des projets favoris. N'approuvez pas un travail sans sponsor et sans capacité d'exécution.",
                "common_mistakes": [
                  "Choisir des projets qui ne sont pas liés à la stratégie.",
                  "Commencer sans une ligne de base ni un énoncé clair du problème.",
                  "Sélectionner des projets trop vastes pour être terminés."
                ],
                "quick_check": [
                  {
                    "q": "Que doit inclure une note de sélection de projet ?",
                    "answer": "Adéquation stratégique, impact, faisabilité, risque et urgence.",
                    "explanation": "Plusieurs critères empêchent une sélection basée sur un seul biais."
                  },
                  {
                    "q": "Pourquoi concilier gains rapides et projets stratégiques ?",
                    "answer": "Créer une dynamique tout en créant de la valeur à long terme.",
                    "explanation": "Un portefeuille a besoin à la fois de crédibilité et de transformation."
                  },
                  {
                    "q": "Que doit contenir un projet charté ?",
                    "answer": "Un problème, une base de référence, un objectif, une portée, un sponsor et des ressources clairs.",
                    "explanation": "Ces éléments rendent le projet exécutable et mesurable."
                  }
                ],
                "recap": [
                  "Sélectionner des projets avec des critères stratégiques et de faisabilité explicites.",
                  "Équilibrez le portefeuille et évitez de surcharger les ressources.",
                  "Affrétez uniquement des projets avec une base de référence, un objectif et un sponsor."
                ]
              }
            },
            {
              "id": "B7.5",
              "order": 5,
              "title": "Analyse financière (COPQ, ROI)",
              "objective": "Construisez un dossier de prestations avec des économies matérielles et matérielles.",
              "content": {
                "why": "Les projets d’amélioration rivalisent pour attirer l’attention du capital et de la direction. Un dossier financier crédible montre si le bénéfice est réel, à quelle vitesse il se produit et combien il en coûte pour le réaliser.",
                "what": "Le coût d’une mauvaise qualité comprend les coûts d’échec interne, d’échec externe, d’évaluation et de prévention. Les économies concrètes réduisent les dépenses réelles, tandis que les économies douces évitent les coûts ou augmentent la capacité et peuvent nécessiter une validation. Le retour sur investissement compare les bénéfices nets au coût du projet. Le retour sur investissement montre la rapidité avec laquelle l'investissement est récupéré. La valeur actuelle nette et le taux de rendement interne tiennent compte des flux de trésorerie pluriannuels et de la valeur temporelle de l'argent.",
                "how": [
                  "Établir une référence et une méthode de mesure validées.",
                  "Quantifiez les avantages matériels et immatériels grâce à la finance.",
                  "Incluez les coûts de mise en œuvre, de fonctionnement et de maintien.",
                  "Calculez le retour sur investissement, le retour sur investissement et la VAN ou le TRI, selon le cas.",
                  "Testez les hypothèses avec une analyse de sensibilité.",
                  "Obtenir l'examen et l'approbation des finances.",
                  "Suivez les avantages réalisés après la mise en œuvre."
                ],
                "where": "Utilisez l'analyse financière pour les projets de réduction des défauts, d'amélioration du temps de cycle, de libération de capacité, de réduction de garantie et de fidélisation de la clientèle. Exemple : les économies de main-d'œuvre ne sont difficiles à réaliser que si des postes sont supprimés ou redéployés ; sinon, il peut s'agir d'économies de capacité ou d'économies indirectes.",
                "when_not": "Ne comptez pas les économies théoriques qui n’atteignent jamais le budget. Ne comptez pas deux fois les avantages d’un projet à l’autre. N’ignorez pas les coûts permanents et ne présentez pas les économies douces comme de l’argent liquide.",
                "common_mistakes": [
                  "Aucune référence validée.",
                  "Avantages à double compte.",
                  "Traiter la capacité libérée comme une économie de trésorerie automatique."
                ],
                "quick_check": [
                  {
                    "q": "Quelle est la différence entre l’épargne dure et l’épargne douce ?",
                    "answer": "Les économies substantielles réduisent les dépenses réelles ; les économies douces évitent les coûts ou la capacité libre.",
                    "explanation": "L’épargne douce nécessite généralement une validation financière."
                  },
                  {
                    "q": "Que mesure le retour sur investissement ?",
                    "answer": "Le temps nécessaire pour récupérer l’investissement du projet.",
                    "explanation": "Un retour sur investissement plus court signifie un retour d’argent plus rapide."
                  },
                  {
                    "q": "Pourquoi utiliser la VAN pour des projets pluriannuels ?",
                    "answer": "Il prend en compte la valeur temporelle de l’argent dans les flux de trésorerie futurs.",
                    "explanation": "Les bénéfices futurs valent moins que les bénéfices immédiats."
                  }
                ],
                "recap": [
                  "Élaborez l’analyse de rentabilisation sur une base de référence validée.",
                  "Séparez les économies matérielles, les économies logicielles et la libération de capacité.",
                  "Utilisez le retour sur investissement, le retour sur investissement et la VAN ou le TRI évalués par les finances."
                ]
              }
            },
            {
              "id": "B7.6",
              "order": 6,
              "title": "Mentorat",
              "objective": "Coachez les ceintures vertes et examinez la logique et les statistiques du projet.",
              "content": {
                "why": "Le mentorat multiplie la capacité d’amélioration. Les ceintures vertes et les équipes de projet ont besoin de conseils pour appliquer les bonnes méthodes, éviter les efforts inutiles et développer leur jugement.",
                "what": "Le mentorat développe les capacités d'une autre personne grâce à des conseils, des questions, des commentaires et des examens de porte. Il diffère du coaching en combinant révision technique et développement de carrière et de leadership. Un mentor examine la charte, les données, l'analyse et le plan de contrôle sans prendre en charge le travail. Un mentorat efficace utilise l’apprentissage des adultes, des attentes claires, des enregistrements réguliers et des actions documentées.",
                "how": [
                  "Convenez des objectifs de développement et des attentes du projet.",
                  "Évaluez les compétences actuelles et les lacunes.",
                  "Créez un plan de mentorat avec des points de révision.",
                  "Posez des questions avant de donner des réponses.",
                  "Examinez la logique, les données et les statistiques du projet aux portes.",
                  "Donnez des commentaires spécifiques et convenez des prochaines actions.",
                  "Évaluez les progrès et faites remonter les risques réels."
                ],
                "where": "Utilisez le mentorat pour les projets Green Belt, le développement Black Belt, les leaders Lean et les sponsors d’amélioration. Exemple : lors d'une porte Définir, le mentor demande à la ceinture verte de prouver la ligne de base et la portée plutôt que de réécrire la charte à sa place.",
                "when_not": "Ne faites pas de mentorat sans l’expertise, le temps ou l’objectivité nécessaires pour vous aider. Ne faites pas le projet pour le mentoré. Évitez les conflits d’intérêts lorsque vous encadrez une personne que vous évaluez également.",
                "common_mistakes": [
                  "Résoudre le problème au lieu de renforcer les capacités.",
                  "Se concentrer uniquement sur les outils et ignorer le leadership.",
                  "Donner des commentaires vagues sans suivi."
                ],
                "quick_check": [
                  {
                    "q": "Quel est le rôle d'un mentor ?",
                    "answer": "Pour guider le développement, remettre en question la réflexion et soutenir le propre travail du mentoré.",
                    "explanation": "Le mentorat renforce les capacités plutôt que de prendre le relais."
                  },
                  {
                    "q": "Pourquoi utiliser des questions dans le mentorat ?",
                    "answer": "Ils aident le mentoré à raisonner et à construire un jugement indépendant.",
                    "explanation": "Les questions créent un apprentissage que les réponses seules ne suffisent pas."
                  },
                  {
                    "q": "Que doit-il se passer lors d’une revue de projet ?",
                    "answer": "Le mentor vérifie la logique, les preuves et l’état de préparation avant la phase suivante.",
                    "explanation": "Les examens de porte empêchent les travaux faibles d’avancer."
                  }
                ],
                "recap": [
                  "Le mentorat développe les personnes tout en protégeant la qualité des projets.",
                  "Guidez avec des questions, des preuves et des commentaires spécifiques.",
                  "Ne reprenez pas le projet du mentoré."
                ]
              }
            }
          ]
        }
      ],
      "coverageChecklist": [
        {
          "topic": "Statistiques avancées et distributions de probabilité",
          "lessons": [
            "B1.1",
            "B1.2"
          ]
        },
        {
          "topic": "Attribut MSA",
          "lessons": [
            "B2.1"
          ]
        },
        {
          "topic": "Tests d'hypothèses complets (tests t)",
          "lessons": [
            "B1.6"
          ]
        },
        {
          "topic": "ANOVA",
          "lessons": [
            "B1.7"
          ]
        },
        {
          "topic": "Non paramétrique",
          "lessons": [
            "B1.8"
          ]
        },
        {
          "topic": "Chi carré",
          "lessons": [
            "B1.9"
          ]
        },
        {
          "topic": "Régression multiple",
          "lessons": [
            "B3.1"
          ]
        },
        {
          "topic": "Régression logistique",
          "lessons": [
            "B3.2"
          ]
        },
        {
          "topic": "DOE complet",
          "lessons": [
            "B4.1"
          ]
        },
        {
          "topic": "DOE fractionnaire",
          "lessons": [
            "B4.2"
          ]
        },
        {
          "topic": "Méthodes de surface de réponse",
          "lessons": [
            "B4.4"
          ]
        },
        {
          "topic": "CPS avancé",
          "lessons": [
            "B5.1"
          ]
        },
        {
          "topic": "Capacité anormale",
          "lessons": [
            "B5.2"
          ]
        },
        {
          "topic": "Lean Six Sigma",
          "lessons": [
            "B6.1"
          ]
        },
        {
          "topic": "Cartographie de la chaîne de valeur",
          "lessons": [
            "B6.2"
          ]
        },
        {
          "topic": "TPM",
          "lessons": [
            "B6.3"
          ]
        },
        {
          "topic": "Conception pour Six Sigma (DMADV)",
          "lessons": [
            "B6.7"
          ]
        },
        {
          "topic": "QFD",
          "lessons": [
            "B6.8"
          ]
        },
        {
          "topic": "Kano",
          "lessons": [
            "B6.9"
          ]
        },
        {
          "topic": "FMEA",
          "lessons": [
            "B7.1"
          ]
        },
        {
          "topic": "Gestion du changement",
          "lessons": [
            "B7.2"
          ]
        },
        {
          "topic": "Direction d'équipe",
          "lessons": [
            "B7.3"
          ]
        },
        {
          "topic": "Sélection de projets",
          "lessons": [
            "B7.4"
          ]
        },
        {
          "topic": "Analyse financière (COPQ, ROI)",
          "lessons": [
            "B7.5"
          ]
        },
        {
          "topic": "Mentorat",
          "lessons": [
            "B7.6"
          ]
        }
      ],
      "project": {
        "title": "Réduisez les délais d’exécution et les défauts dans un processus interfonctionnel",
        "brief": "Dirigez un projet DMAIC complet sur un processus complexe tel que l'approbation de prêt, la sortie d'un patient ou la sortie d'un logiciel. Incluez MSA, capacité, tests d’hypothèses, régression, une expérience conçue, un pilote et un plan de contrôle avec validation financière."
      },
      "exam": {
        "questions": 100,
        "passingScore": 80,
        "format": "100 questions à choix multiples avec quatre options et explications, y compris les calculs et l'interprétation des résultats."
      },
      "cheatSheet": [
        "Utilisez des tests non paramétriques lorsque les hypothèses de normalité ou d’égalité de variance échouent.",
        "R au carré explique la variance ; Le R au carré ajusté pénalise les prédicteurs supplémentaires.",
        "Les conceptions de la résolution IV n’aliasent pas les effets principaux avec des interactions à deux facteurs.",
        "Capacité sur des données non normales : transformer, ajuster une distribution ou utiliser des méthodes non paramétriques."
      ],
      "nextChecklist": [
        "Je peux choisir et interpréter un test d’hypothèse à partir d’un scénario.",
        "Je peux construire et diagnostiquer un modèle de régression multiple.",
        "Je peux concevoir et analyser une expérience de dépistage.",
        "Je peux diriger un projet transversal et encadrer une Green Belt."
      ]
    },
    {
      "id": "master-black",
      "name": "Maître ceinture noire",
      "level": 5,
      "color": "master",
      "icon": "fa-star",
      "lessonTarget": "20-25",
      "studyTime": "60-80 heures",
      "audience": "Des ceintures noires expérimentées qui conçoivent des déploiements, gouvernent des portefeuilles, consultent sur les statistiques et renforcent les capacités organisationnelles.",
      "prerequisites": "Certification Black Belt et expérience dans la direction de projets complexes.",
      "previousRecap": "Récapitulatif de la ceinture noire : les projets complexes nécessitent des statistiques avancées, des expériences conçues, Lean et DFSS, un leadership en matière de changement et des avantages financiers validés.",
      "outcomes": [
        "Déployer la stratégie avec Hoshin Kanri et piloter un portefeuille d'amélioration",
        "Valider les avantages financiers et sélectionner les projets par valeur stratégique",
        "Coachez les ceintures noires et consultez sur des questions statistiques avancées",
        "Concevoir des formations, créer une culture et intégrer l'analyse et l'Industrie 4.0",
        "Appliquer les normes et l'éthique de certification ISO 13053, ASQ et IASSC"
      ],
      "modules": [
        {
          "id": "master-1",
          "number": 1,
          "title": "Déploiement de la stratégie",
          "duration": "4 heures",
          "summary": "Connectez le travail d'amélioration à la stratégie via Hoshin Kanri, la gouvernance, la sélection de portefeuille et les avantages financiers validés.",
          "lessons": [
            {
              "id": "M1.1",
              "order": 1,
              "title": "Hoshin Kanri",
              "objective": "Transformez les objectifs stratégiques en priorités d’amélioration annuelles.",
              "content": {
                "why": "Les portefeuilles d'amélioration dérivent lorsque les projets sont sélectionnés localement et que la stratégie reste dans un document de planification. Hoshin Kanri relie l'orientation à long terme aux priorités annuelles, aux projets et au travail quotidien.",
                "what": "Hoshin Kanri est le déploiement de stratégie. Il commence par une véritable vision du Nord, fixe des objectifs de percée sur trois à cinq ans et les traduit en objectifs annuels et en priorités d'amélioration. La matrice X relie les objectifs à long terme, les objectifs annuels, les initiatives d'amélioration et les cibles à améliorer. Catchball aligne les objectifs et les ressources à travers les niveaux. Des examens réguliers appliquent la planification-exécution-vérification-action au déploiement lui-même, et pas seulement aux projets.",
                "how": [
                  "Définir la vision et les lacunes stratégiques les plus importantes.",
                  "Fixez-vous un petit nombre d’objectifs de percée sur trois à cinq ans.",
                  "Traduisez-les en objectifs annuels et en cibles mesurables.",
                  "Construisez la matrice X et liez les priorités aux projets.",
                  "Cascadez les objectifs via le catchball et convenez des ressources.",
                  "Examinez les progrès à une cadence régulière et ajustez-les.",
                  "Connectez le déploiement à la gestion quotidienne et au travail standard."
                ],
                "where": "Utilisez Hoshin Kanri dans les entreprises, les systèmes de santé, les agences publiques et les fabricants multisites. Exemple : un objectif sur trois ans visant à réduire les délais de livraison de 30 % devient des objectifs annuels en matière de flux, de qualité et de performance des fournisseurs, chacun étant lié à des projets détenus.",
                "when_not": "Ne transformez pas Hoshin en une longue liste d’objectifs annuels. Ne répercutez pas les cibles sans ressources ni autorité. Ne remplacez pas le déploiement de stratégie par la gestion quotidienne et la résolution de problèmes.",
                "common_mistakes": [
                  "Fixer trop de priorités.",
                  "Sauter le catchball et imposer des cibles.",
                  "Examiner les progrès seulement une fois par an."
                ],
                "quick_check": [
                  {
                    "q": "Qu’est-ce que Hoshin Kanri ?",
                    "answer": "Déploiement d'une stratégie qui aligne les objectifs à long terme avec les priorités annuelles et les travaux d'amélioration.",
                    "explanation": "Il relie la direction, les ressources, les projets et la révision."
                  },
                  {
                    "q": "Quel est le lien entre la matrice X ?",
                    "answer": "Objectifs à long terme, objectifs annuels, priorités d’amélioration et cibles.",
                    "explanation": "La matrice rend visible l’alignement stratégique."
                  },
                  {
                    "q": "Pourquoi limiter le nombre d’objectifs révolutionnaires à un faible nombre ?",
                    "answer": "Concentrer les ressources et l’attention sur les lacunes les plus importantes.",
                    "explanation": "Trop de priorités diluent l’exécution."
                  }
                ],
                "recap": [
                  "Hoshin Kanri aligne la stratégie, les projets et le travail quotidien.",
                  "Utilisez quelques objectifs révolutionnaires et une matrice X.",
                  "Déployez via catchball et examinez avec PDCA."
                ]
              }
            },
            {
              "id": "M1.2",
              "order": 2,
              "title": "Déploiement de stratégie et catchball",
              "objective": "Utilisez le catchball pour aligner les objectifs, les ressources et les mesures.",
              "content": {
                "why": "Une stratégie n’est déployée que lorsque les équipes locales la comprennent, la façonnent et s’approprient leur part. Catchball transforme un objectif de premier niveau en un plan réalisable sans perdre l'intention stratégique.",
                "what": "Catchball est un dialogue structuré et itératif entre les niveaux de l’organisation. Les dirigeants partagent la direction, les contraintes et les objectifs. Les équipes réagissent avec des connaissances, des capacités, des risques et des idées d’amélioration locales. Les objectifs, les ressources et le calendrier sont négociés jusqu'à ce qu'ils soient ambitieux mais réalisables. Le résultat est documenté dans les plans de déploiement, les A3 et les cadences de révision. Le catchball n’est ni un commandement imposé d’en haut, ni un consensus illimité.",
                "how": [
                  "Rédiger les objectifs stratégiques et les cibles de déploiement.",
                  "Informez chaque niveau de l’orientation, de la justification et des contraintes.",
                  "Demandez aux équipes de rédiger des plans locaux et d’identifier les lacunes.",
                  "Vérifiez l’alignement vertical et entre les fonctions.",
                  "Négociez les ressources, le calendrier et les mesures.",
                  "Documentez les plans convenus, les propriétaires et les dates de révision.",
                  "Examinez les progrès et renégociez lorsque les conditions changent."
                ],
                "where": "Utilisez catchball dans Hoshin Kanri, la planification annuelle, les programmes de transformation et les déploiements multi-sites. Exemple : un objectif hospitalier visant à réduire la durée du séjour est discuté avec les responsables cliniques, opérationnels et financiers afin que la capacité en lits, la sécurité et la planification des sorties soient alignées.",
                "when_not": "N'utilisez pas de catchball pour diluer chaque cible jusqu'à ce que ce soit facile. Ne laissez pas cela devenir une réunion sans fin. Ne sautez pas la documentation ou la révision.",
                "common_mistakes": [
                  "Annoncer des objectifs sans écouter les contraintes locales.",
                  "Permettre que des objectifs fonctionnels contradictoires restent non résolus.",
                  "Omission d'enregistrer les accords et les propriétaires."
                ],
                "quick_check": [
                  {
                    "q": "Qu’est-ce que le catchball ?",
                    "answer": "Dialogue itératif pour aligner les objectifs, les ressources et les plans locaux à tous les niveaux.",
                    "explanation": "Il combine orientation stratégique et connaissance locale."
                  },
                  {
                    "q": "Pourquoi le catchball n’est-il pas simplement un consensus ?",
                    "answer": "Les dirigeants conservent leur intention stratégique tandis que les équipes négocient une exécution réalisable.",
                    "explanation": "L’objectif est l’alignement et non l’accord unanime sur tout."
                  },
                  {
                    "q": "Que devrait résulter du catchball ?",
                    "answer": "Plans documentés avec propriétaires, mesures, ressources et dates de révision.",
                    "explanation": "Le dialogue doit se transformer en action responsable."
                  }
                ],
                "recap": [
                  "Catchball aligne stratégie et exécution grâce à un dialogue structuré.",
                  "Équilibrer l’ambition avec les capacités et contraintes locales.",
                  "Documentez les accords et examinez-les régulièrement."
                ]
              }
            },
            {
              "id": "M1.3",
              "order": 3,
              "title": "Gouvernance du programme",
              "objective": "Concevez des comités de pilotage, examinez la cadence et les voies d'escalade.",
              "content": {
                "why": "Les grands programmes d’amélioration échouent lorsque les droits de décision, la responsabilité et l’escalade ne sont pas clairs. La gouvernance permet d’aligner, de financer et de contrôler le travail sans devenir une bureaucratie.",
                "what": "La gouvernance du programme définit qui décide, qui est responsable, comment les projets sont agréés et comment les risques sont augmentés. Les éléments typiques comprennent un comité de pilotage, un bureau de gestion du programme, des sponsors, des rôles de ceinture, des étapes, des examens de portefeuille, un suivi des avantages et un chemin de remontée des problèmes. La gouvernance donne la direction et élimine les obstacles ; la direction gère le travail quotidien. Un RACI rend les droits de décision explicites.",
                "how": [
                  "Définir les résultats et la portée du programme.",
                  "Établir le comité de pilotage et les droits de décision.",
                  "Clarifiez les rôles des sponsors, des chefs de projet, des ceintures et du PMO.",
                  "Charte des projets et définition des étapes.",
                  "Définir des mécanismes de reporting, de risque et d’escalade.",
                  "Allouez des ressources et résolvez les conflits entre projets.",
                  "Examinez les avantages et rééquilibrez le portefeuille."
                ],
                "where": "Utilisez la gouvernance des programmes pour les déploiements Lean Six Sigma d'entreprise, les bureaux de transformation, les programmes multi-sites et les changements réglementaires ou technologiques importants. Exemple : un comité de pilotage résout un conflit de ressources entre deux projets de grande valeur au lieu de laisser les deux stagner.",
                "when_not": "Ne créez pas de couches de gouvernance qui ralentissent chaque décision. Ne confondez pas un PMO avec le propriétaire d’entreprise responsable. Ne procédez pas à des examens de porte comme des tampons en caoutchouc.",
                "common_mistakes": [
                  "Droits de propriété et de décision peu clairs.",
                  "Trop de comités dont les pouvoirs se chevauchent.",
                  "Approuver des projets sans suivi des avantages."
                ],
                "quick_check": [
                  {
                    "q": "Quel est le but de la gouvernance du programme ?",
                    "answer": "Définir les droits de décision, la responsabilité, la gestion des risques et l’alignement.",
                    "explanation": "La gouvernance maintient le programme contrôlé et stratégiquement aligné."
                  },
                  {
                    "q": "En quoi la gouvernance diffère-t-elle de la gestion ?",
                    "answer": "La gouvernance définit l'orientation et la surveillance ; la direction exécute le travail quotidien.",
                    "explanation": "Les deux sont nécessaires, mais leur rôle n’est pas le même."
                  },
                  {
                    "q": "A quoi sert une porte de scène ?",
                    "answer": "Il examine les preuves et l’état de préparation avant que les travaux avancent.",
                    "explanation": "Les barrières empêchent les projets faibles de consommer plus de ressources."
                  }
                ],
                "recap": [
                  "La gouvernance clarifie les décisions, la responsabilité et l’escalade.",
                  "Gardez les structures légères et concentrez-vous sur l’élimination des obstacles.",
                  "Reliez les portes aux preuves et à la réalisation des avantages."
                ]
              }
            },
            {
              "id": "M1.4",
              "order": 4,
              "title": "Sélection du portefeuille de projets",
              "objective": "Équilibrez l’impact, le risque, la capacité et l’adéquation stratégique.",
              "content": {
                "why": "Les entreprises ont plus d’idées d’amélioration que de capacités. La sélection du portefeuille équilibre la valeur stratégique, le risque, la faisabilité et les contraintes de ressources dans l'ensemble de l'organisation.",
                "what": "La sélection de portefeuille est un processus récurrent et non une approbation unique. Les candidats sont notés en fonction de leur adéquation stratégique, de leur impact client et financier, de leur faisabilité, de leur risque, de leur urgence et de leur valeur d'apprentissage. Le portefeuille doit correspondre aux personnes disponibles, au capital et à l'attention de la direction. Les dépendances, la duplication et l'équilibre du cycle de vie sont pris en compte. Les étapes et les critères d'arrêt permettent aux projets faibles de s'arrêter plus tôt.",
                "how": [
                  "Inventorier les projets candidats et les besoins d’amélioration.",
                  "Convenez de critères stratégiques et financiers pondérés.",
                  "Notez les candidats avec des preuves validées.",
                  "Évaluez la capacité, les dépendances et les risques.",
                  "Sélectionnez un portefeuille équilibré et attribuez des sponsors.",
                  "Examinez les performances et rééquilibrez-les à une cadence définie.",
                  "Arrêter ou reconcevoir les projets qui ne justifient plus un investissement."
                ],
                "where": "Utilisez la sélection de portefeuilles dans les opérations multisites, les programmes de transformation, les portefeuilles de produits et les bureaux d'amélioration de l'entreprise. Exemple : un portefeuille comprend des gains opérationnels rapides, un projet numérique stratégique et une initiative de renforcement des capacités plutôt que de financer un seul type.",
                "when_not": "N’optimisez pas chaque fonction localement aux dépens de l’entreprise. Ne financez pas toutes les idées valables. Ne considérez pas le portefeuille comme fixe pour l’année.",
                "common_mistakes": [
                  "Aucun lien explicite avec la stratégie.",
                  "Trop de projets actifs pour la capacité disponible.",
                  "Aucun critère de mise à mort ni rééquilibrage périodique."
                ],
                "quick_check": [
                  {
                    "q": "Pourquoi la sélection de portefeuille est-elle récurrente ?",
                    "answer": "Les priorités, les capacités et les données probantes évoluent avec le temps.",
                    "explanation": "Un rééquilibrage régulier permet de conserver les ressources sur les travaux à plus forte valeur ajoutée."
                  },
                  {
                    "q": "Que doit équilibrer un portefeuille ?",
                    "answer": "Valeur stratégique, risque, faisabilité, calendrier et renforcement des capacités.",
                    "explanation": "Un portefeuille équilibré évite une concentration excessive."
                  },
                  {
                    "q": "Pourquoi définir des critères de mise à mort ?",
                    "answer": "Arrêter les projets qui ne justifient plus la poursuite des investissements.",
                    "explanation": "Les sorties anticipées libèrent de la capacité pour de meilleures opportunités."
                  }
                ],
                "recap": [
                  "Gérer les travaux d'amélioration en tant que portefeuille d'entreprise.",
                  "Équilibrez stratégie, valeur, risque et capacité.",
                  "Révisez régulièrement et arrêtez rapidement les projets faibles."
                ]
              }
            },
            {
              "id": "M1.5",
              "order": 5,
              "title": "Validation financière",
              "objective": "Vérifiez les économies réalisées, évitez les doubles comptes et suivez leur réalisation.",
              "content": {
                "why": "Les allégations d’amélioration perdent leur crédibilité lorsque les économies sont théoriques, comptabilisées deux fois ou n’apparaissent jamais dans les états financiers. La validation financière rend le dossier des prestations défendable.",
                "what": "La validation financière confirme la référence, le type de prestation, le calendrier et l'impact en espèces avec le financement. Les économies importantes affectent les dépenses ou les flux de trésorerie. Les économies indirectes évitent des coûts ou des capacités libres et peuvent nécessiter un redéploiement pour devenir réalité. L'analyse peut utiliser le retour sur investissement, le retour sur investissement, la VAN ou le TRI. Un système de suivi des avantages attribue la propriété et compare les résultats prévus aux résultats réalisés. La validation vérifie également la double comptabilisation et les coûts permanents.",
                "how": [
                  "Définir l’hypothèse du bénéfice et la méthode de mesure.",
                  "Validez la référence avec les opérations et les finances.",
                  "Classez les avantages en versions matérielles, logicielles ou de capacité.",
                  "Incluez les coûts de mise en œuvre, de fonctionnement et de maintien.",
                  "Calculez le retour sur investissement, le retour sur investissement et la VAN ou le TRI, selon le cas.",
                  "Obtenez l’approbation financière et désignez un propriétaire des avantages.",
                  "Suivez les bénéfices réalisés et réconciliez les écarts."
                ],
                "where": "Utilisez la validation financière pour les portefeuilles, les programmes de transformation, les projets d'investissement et les projets DMAIC individuels. Exemple : la réduction des heures supplémentaires constitue une économie importante uniquement lorsque le budget des heures supplémentaires diminue réellement ; la capacité libérée est limitée jusqu’à ce qu’elle soit redéployée ou vendue.",
                "when_not": "N’acceptez pas les demandes d’épargne non validées. Ne comptez pas les avantages théoriques ou comptés deux fois. Ne traitez pas l’épargne indirecte comme de l’argent liquide sans accord de financement.",
                "common_mistakes": [
                  "Aucune référence validée.",
                  "Comptabiliser la libération de capacité comme une économie de trésorerie automatique.",
                  "Ne pas savoir si les avantages ont été réalisés."
                ],
                "quick_check": [
                  {
                    "q": "Qu’est-ce qui rend l’épargne difficile ?",
                    "answer": "Cela affecte les dépenses réelles, le compte de résultat ou les flux de trésorerie.",
                    "explanation": "Les économies matérielles sont des améliorations financières vérifiables."
                  },
                  {
                    "q": "Pourquoi impliquer la finance dès le début ?",
                    "answer": "Valider la référence, le type de prestations et les hypothèses financières.",
                    "explanation": "Un examen précoce évite les litiges et les réclamations exagérées."
                  },
                  {
                    "q": "Qu'est-ce qu'un outil de suivi des avantages ?",
                    "answer": "Un enregistrement des avantages prévus par rapport aux avantages réalisés avec les propriétaires et le calendrier.",
                    "explanation": "Cela permet de garder la réalisation des bénéfices visible et responsable."
                  }
                ],
                "recap": [
                  "Validez les références et les types d’avantages avec le service financier.",
                  "Séparez les économies matérielles, les économies logicielles et la libération de capacité.",
                  "Suivez la réalisation et rapprochez les avantages prévus des avantages réels."
                ]
              }
            }
          ]
        },
        {
          "id": "master-2",
          "number": 2,
          "title": "Coaching et Conseil",
          "duration": "3 heures",
          "summary": "Développez des ceintures et des leaders grâce au coaching, au mentorat, au conseil statistique et à la conception de formations.",
          "lessons": [
            {
              "id": "M2.1",
              "order": 1,
              "title": "Ceintures d'entraînement",
              "objective": "Utilisez des questions, des observations et des commentaires pour améliorer la réflexion sur le projet.",
              "content": {
                "why": "La certification ne garantit pas la réussite du projet. Le coaching aide les ceintures à appliquer des méthodes, à réfléchir aux problèmes et à renforcer la confiance tout en protégeant la qualité du projet.",
                "what": "Le coaching est une conversation structurée qui améliore les performances grâce à des objectifs, des observations, des questions, des commentaires et des actions. Le modèle GROW utilise l'objectif, la réalité, les options et la volonté. Un coach demande plus qu'il ne dit, aide la ceinture à raisonner et examine les preuves aux portes du projet. Le coaching couvre à la fois la méthode technique et le comportement de leadership. Cela diffère du mentorat, qui est un développement de carrière plus large, et de la gestion des performances, qui évalue formellement la personne.",
                "how": [
                  "Convenez des objectifs du coaching et des attentes du projet.",
                  "Observez le travail, les données et les interactions de l'équipe.",
                  "Utilisez des questions pour tester la logique et les hypothèses.",
                  "Donnez des commentaires spécifiques liés aux preuves.",
                  "Convenez des actions et des dates de suivi.",
                  "Examiner les progrès aux portes du projet.",
                  "Augmentez les risques lorsque la capacité ou le support est manquant."
                ],
                "where": "Utilisez le coaching pour les ceintures vertes et noires, les chefs de projet, les praticiens Lean et les sponsors d'amélioration. Exemple : un coach demande à un Green Belt d'expliquer pourquoi l'échantillon choisi conforte la conclusion plutôt que de recalculer l'analyse à sa place.",
                "when_not": "Ne résolvez pas le projet pour le coaché. Ne coachez pas sans confiance, sans temps ou sans expertise pertinente. Ne transformez pas le coaching en une évaluation surprise des performances.",
                "common_mistakes": [
                  "Donner des réponses au lieu de construire un raisonnement.",
                  "Donner de vagues commentaires sans preuve.",
                  "Ignorer le suivi et la responsabilité."
                ],
                "quick_check": [
                  {
                    "q": "Que signifie GROW ?",
                    "answer": "Objectif, réalité, options et volonté.",
                    "explanation": "Il s’agit d’un modèle de conversation de coaching structuré."
                  },
                  {
                    "q": "En quoi le coaching diffère-t-il du mentorat ?",
                    "answer": "Le coaching se concentre sur la performance et les objectifs spécifiques ; le mentorat est un développement plus large.",
                    "explanation": "Les deux développent des capacités mais servent des objectifs différents."
                  },
                  {
                    "q": "Pourquoi un coach devrait-il poser des questions ?",
                    "answer": "Développer le jugement indépendant et l’appropriation du coaché.",
                    "explanation": "Les questions créent un apprentissage que les réponses seules ne suffisent pas."
                  }
                ],
                "recap": [
                  "Coachez avec des questions, des preuves et des commentaires spécifiques.",
                  "Concentrez-vous à la fois sur la méthode technique et sur le leadership.",
                  "Renforcez les capacités plutôt que de prendre en charge le travail."
                ]
              }
            },
            {
              "id": "M2.2",
              "order": 2,
              "title": "Mentorat et renforcement des capacités",
              "objective": "Construisez un pipeline de ceintures et d’experts en la matière.",
              "content": {
                "why": "Quelques ceintures solides ne peuvent pas transformer une organisation. Le renforcement des capacités crée un pipeline durable de praticiens, de dirigeants et de coachs internes.",
                "what": "Le renforcement des capacités est un système, pas un catalogue de cours. Il comprend un modèle de compétences, une évaluation des compétences, des parcours d'apprentissage, une certification, des projets de pratique, du coaching, des communautés de pratique et une gestion des connaissances. Le principe 70-20-10 met l'accent sur l'apprentissage par le biais d'un travail et de relations stimulantes, soutenu par une formation formelle. Le mentorat offre un développement à long terme et une orientation professionnelle. Les progrès doivent être mesurés par la compétence démontrée et non par les heures de présence.",
                "how": [
                  "Définir les compétences pour chaque ceinture et rôle de leadership.",
                  "Évaluer les capacités et les lacunes actuelles.",
                  "Concevoir des parcours d’apprentissage et des exigences de certification.",
                  "Combinez formation, projets pratiques, coaching et mentorat.",
                  "Construire des communautés de pratique et de partage de connaissances.",
                  "Évaluer les capacités démontrées et les résultats du projet.",
                  "Actualisez le modèle à mesure que la stratégie et la technologie évoluent."
                ],
                "where": "Utilisez le renforcement des capacités pour les programmes de ceinture, les leaders Lean, les spécialistes techniques et la planification de la succession. Exemple : un candidat Green Belt termine une formation, applique des outils sur un projet réel, reçoit un coaching aux portes et démontre ses compétences avant la certification.",
                "when_not": "N’assimilez pas les heures de formation aux capacités. Ne faites pas de mentorat sans structure ni attentes. Ne créez pas de dépendance dans laquelle le mentor apporte toujours la réponse.",
                "common_mistakes": [
                  "Formation unique sans pratique.",
                  "Aucune évaluation des compétences ni norme de certification.",
                  "Pas de sponsoring ni de temps de développement."
                ],
                "quick_check": [
                  {
                    "q": "Que signifie 70-20-10 ?",
                    "answer": "La majeure partie de l’apprentissage vient de l’expérience et des relations, la formation formelle ne représentant qu’une composante mineure.",
                    "explanation": "Il équilibre la pratique sur le terrain, le coaching et les cours."
                  },
                  {
                    "q": "Comment évaluer la capacité ?",
                    "answer": "Grâce à une compétence démontrée et aux résultats du projet.",
                    "explanation": "La participation seule ne démontre pas la capacité."
                  },
                  {
                    "q": "Pourquoi créer des communautés de pratique ?",
                    "answer": "Partager des connaissances, résoudre des problèmes et pérenniser l’apprentissage.",
                    "explanation": "Les communautés connectent les praticiens au-delà de la formation formelle."
                  }
                ],
                "recap": [
                  "Développez les capacités grâce à un système et non à des cours isolés.",
                  "Combinez pratique, coaching, mentorat et évaluation.",
                  "Mesurer les compétences et les résultats démontrés."
                ]
              }
            },
            {
              "id": "M2.3",
              "order": 3,
              "title": "Conseil statistique",
              "objective": "Diagnostiquer les problèmes d’analyse et recommander des méthodes défendables.",
              "content": {
                "why": "Les conseils statistiques façonnent les décisions, les investissements et les risques. Un statisticien-conseil doit définir le véritable problème, choisir des méthodes défendables et communiquer clairement son incertitude.",
                "what": "Le conseil statistique suit un processus structuré : contrat avec le client, clarification de la décision, définition de l'estimation, évaluation de la provenance des données, sélection d'une méthode, vérification des hypothèses, test de sensibilité, interprétation et transfert. Il sépare la signification statistique de la signification pratique et explique l'incertitude en termes commerciaux. Un bon conseil documente également les données et le code, respecte l'éthique et reconnaît lorsque les données disponibles ne peuvent pas répondre à la question.",
                "how": [
                  "Clarifiez la décision et la question à laquelle les données doivent répondre.",
                  "Définissez la population, la réponse et la comparaison.",
                  "Évaluez la qualité, l’échantillonnage et la mesure des données.",
                  "Choisissez une méthode qui correspond au design.",
                  "Vérifiez les hypothèses et effectuez des analyses de sensibilité.",
                  "Expliquez les résultats avec des intervalles et un impact pratique.",
                  "Documenter l’analyse et suivre l’utilisation."
                ],
                "where": "Utilisez le conseil statistique dans les revues de projets, le DOE, la régression, le MSA, la capacité, la fiabilité et la modélisation prédictive. Exemple : une équipe demande quel fournisseur est le meilleur. Le consultant vérifie d'abord si les échantillons sont comparables et si le système de mesure est adéquat.",
                "when_not": "N’acceptez pas une question mal formulée et ne vous précipitez pas sur une méthode. Ne sur-ajustez pas et n’impliquez pas de fausses certitudes. N’analysez pas les données dont la provenance ou la qualité est inconnue.",
                "common_mistakes": [
                  "Commencer par une méthode préférée au lieu de la question.",
                  "Ignorer la provenance des données et les erreurs de mesure.",
                  "Surcharger les clients avec du jargon au lieu d'une interprétation pertinente pour la décision."
                ],
                "quick_check": [
                  {
                    "q": "Que doit clarifier en premier un consultant en statistiques ?",
                    "answer": "La décision et la question à laquelle les données doivent répondre.",
                    "explanation": "La sélection de la méthode suit la formulation du problème."
                  },
                  {
                    "q": "Pourquoi la provenance des données est-elle importante ?",
                    "answer": "Il détermine si les données peuvent étayer l’inférence souhaitée.",
                    "explanation": "Conclusions sur les limites de qualité de l’échantillonnage et des mesures."
                  },
                  {
                    "q": "Qu’est-ce que l’analyse de sensibilité ?",
                    "answer": "Vérifier si les conclusions sont valables sous des hypothèses alternatives raisonnables.",
                    "explanation": "Il teste la robustesse du résultat."
                  }
                ],
                "recap": [
                  "Cadrez la décision avant de choisir une méthode.",
                  "Évaluez la qualité des données et vérifiez les hypothèses.",
                  "Communiquez clairement l’incertitude et l’impact pratique."
                ]
              }
            },
            {
              "id": "M2.4",
              "order": 4,
              "title": "Conception de la formation",
              "objective": "Concevoir des programmes basés sur la pratique avec évaluation et transfert.",
              "content": {
                "why": "La formation doit changer ce que les gens peuvent faire, et pas seulement ce qu'ils ont entendu. Une bonne conception renforce les compétences et transfère l’apprentissage au travail réel.",
                "what": "La conception de la formation suit généralement ADDIE : analyse, conception, développement, mise en œuvre et évaluation. Des objectifs d’apprentissage clairs décrivent des performances observables. L’apprentissage des adultes favorise la pertinence, la pratique, le feedback et le renforcement espacé. L'évaluation peut utiliser les niveaux de Kirkpatrick : réaction, apprentissage, comportement et résultats. Les approches mixtes combinent enseignement, simulation, coaching et missions sur le terrain.",
                "how": [
                  "Analysez l’écart de performance et l’audience.",
                  "Rédigez des objectifs d’apprentissage mesurables.",
                  "Activités de conception, pratique et évaluation.",
                  "Développer du matériel et les piloter.",
                  "Offrez des opportunités de candidature.",
                  "Évaluez l’apprentissage, le changement de comportement et les résultats.",
                  "Améliorez la conception en vous basant sur des preuves."
                ],
                "where": "Utilisez la conception de formation pour les programmes de ceinture, les déploiements de logiciels, les programmes de sécurité, le développement du leadership et la certification technique. Exemple : un cours de statistiques comprend un ensemble de données réelles, une mission de projet et un coaching plutôt que des cours magistraux seuls.",
                "when_not": "N'utilisez pas de formation lorsque la cause première est des attentes floues, des outils manquants ou une mauvaise conception des processus. Ne comptez pas sur des cours magistraux uniquement pour des compétences complexes. N’évaluez pas uniquement les scores de satisfaction.",
                "common_mistakes": [
                  "Dumping de contenu sans pratique.",
                  "Aucun projet de transfert vers l'emploi.",
                  "Évaluer la réaction mais pas l'apprentissage ou les résultats."
                ],
                "quick_check": [
                  {
                    "q": "Que signifie ADDIE ?",
                    "answer": "Analyse, conception, développement, mise en œuvre et évaluation.",
                    "explanation": "Il s’agit d’un processus de conception pédagogique structuré."
                  },
                  {
                    "q": "Qu’est-ce qui rend un objectif d’apprentissage utile ?",
                    "answer": "Il décrit les performances observables qui peuvent être évaluées.",
                    "explanation": "Des objectifs clairs guident la conception et l’évaluation."
                  },
                  {
                    "q": "Quels sont les quatre niveaux de Kirkpatrick ?",
                    "answer": "Réaction, apprentissage, comportement et résultats.",
                    "explanation": "Ils évaluent la formation depuis la réponse immédiate jusqu'à l'impact commercial."
                  }
                ],
                "recap": [
                  "Concevez la formation autour de la performance et non de la couverture du contenu.",
                  "Utilisez la pratique, les commentaires et le transfert au travail.",
                  "Évaluez l’apprentissage, le comportement et les résultats."
                ]
              }
            }
          ]
        },
        {
          "id": "master-3",
          "number": 3,
          "title": "Transformation d'entreprise",
          "duration": "4 heures",
          "summary": "Améliorez l'amélioration à l'échelle de l'entreprise grâce au DFSS, à la gestion du changement, à la culture, aux tableaux de bord prospectifs et à l'analyse comparative.",
          "lessons": [
            {
              "id": "M3.1",
              "order": 1,
              "title": "Entreprise DFSS",
              "objective": "Déployez des méthodes de conception dans le développement de produits, de services et de processus.",
              "content": {
                "why": "DFSS offre le plus de valeur lorsqu'il est géré à l'échelle d'un portefeuille d'entreprise, et non appliqué projet par projet. Enterprise DFSS relie la capacité de conception à la stratégie, aux fournisseurs et aux décisions de lancement.",
                "what": "Enterprise DFSS applique les méthodes de conception Six-Sigma à un portefeuille de nouveaux produits, services et processus. Il utilise les feuilles de route standard DMADV ou DFSS, les portes d'étape, la voix du client, le flux CTQ, QFD, FMEA, DOE, la simulation Monte Carlo, la fiabilité et la conception pour X. La gouvernance équilibre la vitesse, le risque et l’utilisation des ressources. La réutilisation des connaissances et l’intégration des fournisseurs améliorent la cohérence et les délais de mise sur le marché.",
                "how": [
                  "Alignez le portefeuille de conception avec la stratégie et les besoins des clients.",
                  "Établir une feuille de route DFSS standard et des critères d’entrée.",
                  "Construisez des équipes de conception et des capacités interfonctionnelles.",
                  "Traduisez les COV en CTQ et en exigences de conception.",
                  "Appliquer les méthodes de risque, d’expérimentation, de simulation et de fiabilité.",
                  "Intégrez les fournisseurs et les opérations de fabrication ou de service dès le début.",
                  "Vérifiez la capacité et capturez les leçons pour les réutiliser."
                ],
                "where": "Utilisez le DFSS d'entreprise dans le développement de produits, la conception de services, les logiciels, les soins de santé et les projets d'investissement. Exemple : une équipe de plate-forme utilise les normes CTQ et FMEA communes à toutes les variantes de produits, réduisant ainsi le travail de conception en double et les échecs tardifs.",
                "when_not": "N’appliquez pas l’ensemble de l’appareil DFSS à des modifications mineures à faible risque. Ne laissez pas les barrières et la documentation étouffer l’innovation. Ne considérez pas DFSS comme une liste de contrôle d'outils sans contexte client et commercial.",
                "common_mistakes": [
                  "Exécution de DFSS en tant que projets isolés sans vue de portefeuille.",
                  "Travail de voix du client tardif ou faible.",
                  "Ignorer la vérification et la réutilisation des leçons."
                ],
                "quick_check": [
                  {
                    "q": "Qu’est-ce qu’Enterprise DFSS ?",
                    "answer": "Appliquer DFSS à l’ensemble d’un portefeuille avec une gouvernance et des méthodes communes.",
                    "explanation": "Il étend la capacité de conception au-delà des projets individuels."
                  },
                  {
                    "q": "Pourquoi intégrer les fournisseurs tôt ?",
                    "answer": "Pour réduire les risques de conception, les retouches et les retards de lancement.",
                    "explanation": "La capacité du fournisseur affecte la faisabilité et la qualité de la conception."
                  },
                  {
                    "q": "Qu’est-ce que le flux CTQ ?",
                    "answer": "Traduire les exigences des clients en exigences de conception mesurables.",
                    "explanation": "Il relie la voix du client aux décisions de conception."
                  }
                ],
                "recap": [
                  "Gérez DFSS en tant que portefeuille d'entreprise avec des normes communes.",
                  "Traduire les besoins des clients en CTQ et exigences de conception.",
                  "Vérifiez la capacité et réutilisez les leçons dans tous les projets."
                ]
              }
            },
            {
              "id": "M3.2",
              "order": 2,
              "title": "Changement organisationnel",
              "objective": "Utilisez des modèles de changement, des plans des parties prenantes et du renforcement.",
              "content": {
                "why": "Les grandes transformations modifient les rôles, les systèmes et les relations de pouvoir. Un déploiement techniquement solide peut toujours échouer si les gens ne comprennent pas, ne soutiennent pas ou ne savent pas comment travailler selon la nouvelle méthode.",
                "what": "Le changement organisationnel aligne le leadership, la communication, les capacités, les incitations et la structure. La séquence de Kotter construit l'urgence, une coalition directrice, une vision, la communication, l'autonomisation, les victoires à court terme, la consolidation et l'ancrage. ADKAR diagnostique l'état de préparation individuel et le modèle de Lewin décrit le dégel, le changement et la recongélation. L’évolution nécessite l’engagement des managers intermédiaires et des systèmes de performance alignés.",
                "how": [
                  "Élaborez un argumentaire clair en faveur du changement et une vision convaincante.",
                  "Formez une coalition avec autorité et crédibilité.",
                  "Évaluez l’état de préparation et la résistance des parties prenantes.",
                  "Communiquez à plusieurs reprises via plusieurs canaux.",
                  "Impliquez les gens et éliminez les obstacles structurels.",
                  "Obtenez des gains visibles à court terme.",
                  "Ancrez les changements dans les rôles, les incitations et le travail standard."
                ],
                "where": "Utilisez le changement organisationnel pour les déploiements Lean Six Sigma, les déploiements ERP ou technologiques, les restructurations, les fusions et les nouveaux modèles opérationnels. Exemple : une entreprise lance un nouveau processus de planification mais ne modifie pas les incitations des planificateurs, de sorte que le comportement revient aux anciennes priorités.",
                "when_not": "Ne considérez pas le changement comme un seul plan de communication. N'ignorez pas les incitations et le pouvoir. Ne déclarez pas la victoire après le pilote.",
                "common_mistakes": [
                  "Parrainage exécutif faible ou absent.",
                  "Sauter les cadres intermédiaires qui influencent le travail quotidien.",
                  "A défaut de renforcer le changement après le lancement."
                ],
                "quick_check": [
                  {
                    "q": "Pourquoi les managers intermédiaires sont-ils essentiels au changement ?",
                    "answer": "Ils traduisent les orientations dans le travail quotidien et influencent leur adoption.",
                    "explanation": "Ils relient l’intention du leadership à la réalité de première ligne."
                  },
                  {
                    "q": "Qu'est-ce qu'une victoire à court terme ?",
                    "answer": "Un premier résultat visible et crédible qui crée une dynamique.",
                    "explanation": "Les victoires démontrent que le changement peut fonctionner."
                  },
                  {
                    "q": "Que signifie ancrer un changement ?",
                    "answer": "L'intégrer dans les rôles, les incitations, les processus et la culture.",
                    "explanation": "L'ancrage empêche le retour aux anciennes méthodes."
                  }
                ],
                "recap": [
                  "Le changement nécessite du leadership, de l’engagement, des capacités et du renforcement.",
                  "Créez une urgence, des coalitions et des victoires visibles.",
                  "Ancrer le changement dans les systèmes et les routines quotidiennes."
                ]
              }
            },
            {
              "id": "M3.3",
              "order": 3,
              "title": "Bâtiment culturel",
              "objective": "Intégrez l’amélioration, le respect et les décisions basées sur les données au travail quotidien.",
              "content": {
                "why": "Les outils et les projets disparaissent sans une culture qui soutient la résolution de problèmes, la transparence et l'apprentissage. La culture détermine si l’amélioration devient un comportement quotidien ou un programme temporaire.",
                "what": "La culture est le modèle de croyances, de comportements et de symboles partagés. Il est façonné par le comportement des dirigeants, les routines, les mesures, les récompenses, l'embauche et les histoires plus que par les slogans. Une culture d’amélioration continue valorise les clients, les données, le respect des personnes, la sécurité psychologique et l’apprentissage de l’échec. Les réunions quotidiennes, les promenades gemba, la réflexion A3 et le travail standard des dirigeants rendent la culture visible et enseignable.",
                "how": [
                  "Évaluez les croyances et les comportements actuels avec des preuves.",
                  "Définir les quelques comportements qui expriment la culture souhaitée.",
                  "Engagez les dirigeants à modéliser ces comportements de manière visible.",
                  "Alignez les mesures, la reconnaissance, la promotion et l’embauche.",
                  "Créez des routines quotidiennes qui renforcent la résolution de problèmes.",
                  "Enseigner et coacher les comportements par la pratique.",
                  "Mesurez les progrès et corrigez les incohérences."
                ],
                "where": "Utilisez le renforcement de la culture dans les transformations d’entreprise, les programmes de sécurité, les systèmes qualité et les fusions. Exemple : les dirigeants demandent d'abord les mauvaises nouvelles dans les évaluations, récompensent publiquement l'identification précoce des problèmes et arrêtent de blâmer les individus pour les défaillances du système.",
                "when_not": "N'essayez pas de changer la culture avec des affiches ou des slogans. Ne copiez pas la culture d'une autre organisation sans vous adapter au contexte. N’utilisez pas la culture comme excuse pour éviter les problèmes structurels.",
                "common_mistakes": [
                  "Les dirigeants disent une chose et en récompensent une autre.",
                  "Une reconnaissance qui privilégie la lutte contre les incendies à la prévention.",
                  "Aucune routine quotidienne pour renforcer le comportement souhaité."
                ],
                "quick_check": [
                  {
                    "q": "Qu’est-ce qui façonne le plus fortement la culture ?",
                    "answer": "Comportement, routines, mesures et récompenses du leader.",
                    "explanation": "Ce qui est mesuré et récompensé indique ce qui compte."
                  },
                  {
                    "q": "Pourquoi la sécurité psychologique fait-elle partie de la culture d’amélioration ?",
                    "answer": "Les gens doivent pouvoir soulever des problèmes et des erreurs sans crainte.",
                    "explanation": "Les problèmes cachés ne peuvent être résolus."
                  },
                  {
                    "q": "Qu’est-ce que le travail standard d’un leader ?",
                    "answer": "Une routine documentée de comportements de leader qui renforcent le système d'exploitation.",
                    "explanation": "Elle rend la culture visible à travers des actions quotidiennes."
                  }
                ],
                "recap": [
                  "La culture se construit à travers des comportements, des routines et des systèmes.",
                  "Les dirigeants doivent modéliser et récompenser les comportements souhaités.",
                  "Utilisez la gestion quotidienne pour rendre visible la culture d’amélioration."
                ]
              }
            },
            {
              "id": "M3.4",
              "order": 4,
              "title": "Tableau de bord prospectif",
              "objective": "Connectez les mesures financières, client, processus et apprentissage.",
              "content": {
                "why": "Les mesures financières rendent compte du passé. Un tableau de bord équilibré ajoute des mesures sur les clients, les processus et les capacités qui montrent si la stratégie est exécutée et si les performances futures sont en cours de construction.",
                "what": "Le tableau de bord prospectif utilise quatre perspectives : financière, client, processus interne, et apprentissage et croissance. Une carte stratégique montre les liens de cause à effet entre les objectifs. Chaque objectif comporte des mesures, des cibles et des initiatives. Les mesures avancées prédisent les résultats futurs, tandis que les mesures retardées confirment les résultats. La carte de pointage doit être répercutée et examinée, et non utilisée comme une longue liste de KPI sans rapport.",
                "how": [
                  "Clarifier la stratégie et les thèmes stratégiques.",
                  "Définir des objectifs dans chaque perspective.",
                  "Construisez une carte stratégique avec des liens de causalité.",
                  "Sélectionnez quelques mesures, objectifs et initiatives.",
                  "Cascadez les tableaux de bord vers les unités et les équipes.",
                  "Examinez les résultats et apprenez à une cadence régulière.",
                  "Ajustez les objectifs et les initiatives à mesure que la stratégie évolue."
                ],
                "where": "Utilisez le tableau de bord prospectif dans les entreprises, les organismes publics, les organisations à but non lucratif et les opérations multisites. Exemple : un hôpital associe la formation du personnel et la culture de sécurité à la fiabilité des processus, à l'expérience des patients et à la performance financière.",
                "when_not": "Ne transformez pas la carte de pointage en un vidage de KPI. N’ignorez pas la logique causale et la stratégie. Ne compliquez pas trop les mesures et n’utilisez pas uniquement les résultats financiers.",
                "common_mistakes": [
                  "Trop de mesures sans orientation stratégique.",
                  "Aucun lien entre les indicateurs avancés et retardés.",
                  "Examiner le tableau de bord sans prendre de décision."
                ],
                "quick_check": [
                  {
                    "q": "Quelles sont les quatre perspectives du tableau de bord équilibré ?",
                    "answer": "Finances, clients, processus internes, apprentissage et croissance.",
                    "explanation": "Ils équilibrent les résultats avec les moteurs de la performance future."
                  },
                  {
                    "q": "Qu'est-ce qu'une carte stratégique ?",
                    "answer": "Un diagramme de cause à effet reliant les objectifs stratégiques.",
                    "explanation": "Il montre comment les capacités et les processus déterminent les résultats."
                  },
                  {
                    "q": "Quelle est la différence entre les mesures avancées et retardées ?",
                    "answer": "Les principales mesures prédisent : les mesures tardives confirment les résultats.",
                    "explanation": "Les deux sont nécessaires pour gérer les performances."
                  }
                ],
                "recap": [
                  "Équilibrer les mesures financières et non financières.",
                  "Utilisez une carte stratégique pour montrer la logique causale.",
                  "Gardez la carte de pointage ciblée et examinez-la pour prendre des décisions."
                ]
              }
            },
            {
              "id": "M3.5",
              "order": 5,
              "title": "Analyse comparative",
              "objective": "Comparez les performances avec les meilleurs processus de leur catégorie et adaptez les pratiques.",
              "content": {
                "why": "L'analyse comparative révèle des écarts de performance et de meilleures pratiques, mais copier des chiffres sans comprendre le contexte peut conduire à de mauvaises cibles et à une imitation ratée.",
                "what": "L'analyse comparative compare les processus, les pratiques et les résultats par rapport à des références internes ou externes. Les types incluent interne, compétitif, fonctionnel et générique. Une étude disciplinée définit le processus, mesure l’état actuel, sélectionne des partenaires comparables, collecte des données valides, analyse les lacunes, adapte les pratiques, met en œuvre et examine. La normalisation et la compréhension des processus empêchent les comparaisons entre des pommes et des oranges.",
                "how": [
                  "Définir le processus, la portée et les mesures de performance.",
                  "Établir une base de référence interne fiable.",
                  "Sélectionnez des partenaires de référence comparables.",
                  "Recueillir des données sur les résultats et les pratiques habilitantes.",
                  "Normaliser et analyser les écarts.",
                  "Adapter plutôt que copier aveuglément les pratiques.",
                  "Piloter, mettre en œuvre et mesurer l’amélioration."
                ],
                "where": "Utilisez l'analyse comparative dans les domaines de la fabrication, des soins de santé, des opérations de services, des chaînes d'approvisionnement et des services publics. Exemple : comparez le temps passé entre le service d'urgence et le médecin après ajustement en fonction de l'acuité des patients et de la composition des cas.",
                "when_not": "Ne comparez pas les processus qui ne sont pas comparables. Ne vous arrêtez pas à un écart numérique sans comprendre les pratiques. Ne copiez pas la solution d'une autre organisation sans vous adapter aux contraintes locales.",
                "common_mistakes": [
                  "Comparaison de métriques non normalisées.",
                  "Utiliser des données de mauvaise qualité ou autodéclarées.",
                  "Traiter la visite sur site comme un livrable plutôt que comme une mise en œuvre."
                ],
                "quick_check": [
                  {
                    "q": "Qu’est-ce que le benchmarking fonctionnel ?",
                    "answer": "Comparer un processus similaire dans différentes industries ou organisations.",
                    "explanation": "Il recherche les meilleures pratiques au-delà des concurrents directs."
                  },
                  {
                    "q": "Pourquoi normaliser les données de référence ?",
                    "answer": "Faire des comparaisons équitables malgré des échelles, des combinaisons ou des conditions différentes.",
                    "explanation": "La normalisation évite les écarts trompeurs."
                  },
                  {
                    "q": "Que doit-il se passer après une étude de référence ?",
                    "answer": "Adapter, piloter, mettre en œuvre et mesurer la pratique.",
                    "explanation": "L’apprentissage doit se transformer en action."
                  }
                ],
                "recap": [
                  "Comparez à la fois les résultats et les pratiques habilitantes.",
                  "Assurer la comparabilité et la qualité des données.",
                  "Adaptez-vous et mettez en œuvre plutôt que de copier aveuglément."
                ]
              }
            }
          ]
        },
        {
          "id": "master-4",
          "number": 4,
          "title": "Analyse et industrie 4.0",
          "duration": "2 heures",
          "summary": "Intégrez l’analyse moderne, l’automatisation et la gouvernance des données dans le travail d’amélioration.",
          "lessons": [
            {
              "id": "M4.1",
              "order": 1,
              "title": "Analyse et industrie 4.0",
              "objective": "Utilisez des capteurs, des tableaux de bord, des modèles prédictifs et l'automatisation.",
              "content": {
                "why": "Les capteurs, les systèmes connectés et les grands ensembles de données créent de nouvelles façons de prédire et de contrôler les performances. Les Master Black Belts doivent connecter l’analyse aux problèmes de processus réels et gérer les risques.",
                "what": "L'Industrie 4.0 comprend l'IoT, les systèmes cyber-physiques, les plateformes cloud, les jumeaux numériques, l'automatisation et l'IA ou l'apprentissage automatique. L'analyse va du descriptif et du diagnostic au prédictif et prescriptif. Un pipeline de données fiable, la qualité des données, la validation du modèle, le déploiement et la surveillance sont nécessaires. La technologie opérationnelle et la technologie de l’information doivent converger en toute sécurité. L'analyse doit soutenir une décision définie et non exister en tant que vitrine technologique.",
                "how": [
                  "Définissez le problème, la décision et la valeur en jeu.",
                  "Évaluez la disponibilité, la qualité et la gouvernance des données.",
                  "Choisissez des analyses descriptives, prédictives ou prescriptives.",
                  "Pilotez avec des experts en processus et validez le modèle.",
                  "Déployez avec surveillance, maintenance et sécurité.",
                  "Mesurez l’impact commercial et faites évoluer ce qui fonctionne.",
                  "Gérez la confidentialité, les préjugés, la sécurité et l’adoption des changements."
                ],
                "where": "Utilisez l'analyse et l'Industrie 4.0 pour la maintenance prédictive, l'inspection basée sur la vision, la prévision de la demande, l'optimisation de la chaîne d'approvisionnement et la prévision des risques cliniques. Exemple : les données des capteurs prédisent une panne d'équipement, mais le processus de maintenance et le système de pièces de rechange doivent également changer pour que la prédiction crée de la valeur.",
                "when_not": "N'utilisez pas d'analyses avancées pour un problème simple que des outils standards peuvent résoudre. N’ignorez pas la mauvaise qualité des données ou la mauvaise connaissance des processus. Ne déployez pas de modèles sans surveillance et gouvernance.",
                "common_mistakes": [
                  "Projets axés sur la technologie sans décision ni argumentaire de valeur.",
                  "Modèles de formation sur des données biaisées ou peu fiables.",
                  "Aucun plan de maintenance du modèle ou d’adoption opérationnelle."
                ],
                "quick_check": [
                  {
                    "q": "Qu’est-ce que l’analyse prédictive ?",
                    "answer": "Utiliser des données pour estimer les résultats ou les risques futurs.",
                    "explanation": "Les modèles prédictifs soutiennent les décisions avant que les événements ne se produisent."
                  },
                  {
                    "q": "Pourquoi la gouvernance des données est-elle essentielle ?",
                    "answer": "Il garantit la qualité, la sécurité, la confidentialité et une utilisation appropriée des données.",
                    "explanation": "Les modèles sont aussi fiables que leurs données et leurs contrôles."
                  },
                  {
                    "q": "Qu’est-ce qu’un jumeau numérique ?",
                    "answer": "Modèle virtuel d'un actif physique ou d'un processus utilisé pour la surveillance et la simulation.",
                    "explanation": "Les jumeaux numériques prennent en charge la prédiction, l'optimisation et les tests."
                  }
                ],
                "recap": [
                  "Commencez l’analyse avec une décision et un argumentaire de valeur.",
                  "Garantir la qualité, la validation, la sécurité et la gouvernance des données.",
                  "Connectez les modèles aux processus de changement et aux résultats commerciaux."
                ]
              }
            },
            {
              "id": "M4.2",
              "order": 2,
              "title": "Gouvernance des données et éthique",
              "objective": "Protégez la confidentialité, garantissez la qualité des données et utilisez les analyses de manière responsable.",
              "content": {
                "why": "L’analyse et l’amélioration dépendent de données auxquelles les gens peuvent faire confiance et qu’ils utilisent de manière responsable. Une mauvaise gouvernance crée de mauvaises décisions, des atteintes à la vie privée, des modèles biaisés et une perte de crédibilité.",
                "what": "La gouvernance des données définit la propriété, la gestion, les normes de qualité, l'accès, la conservation et les contrôles du cycle de vie. L'éthique des données aborde la confidentialité, le consentement, l'équité, la transparence, la responsabilité et la surveillance humaine. Les rôles incluent les propriétaires de données, les gestionnaires et les dépositaires. Des réglementations telles que le RGPD et la HIPAA fixent des exigences légales, mais la pratique éthique va au-delà d'une conformité minimale. Les modèles doivent être suffisamment explicables pour la décision et surveillés pour détecter les biais et les dérives.",
                "how": [
                  "Inventorier les données et définir leur finalité et leur sensibilité.",
                  "Attribuez des responsabilités de propriété, d’intendance et d’accès.",
                  "Définissez des normes de qualité, de rétention et de métadonnées.",
                  "Mener des évaluations d’impact sur la vie privée et l’éthique.",
                  "Testez les biais et surveillez les performances du modèle.",
                  "Documenter les décisions et fournir un examen humain si nécessaire.",
                  "Auditer la conformité et former l’organisation."
                ],
                "where": "Utilisez la gouvernance et l’éthique des données dans les soins de santé, la finance, les ressources humaines, l’analyse client et les systèmes critiques pour la sécurité. Exemple : un modèle de recrutement doit être testé pour déterminer son impact disparate, explicable par les décideurs et soumis à un examen humain.",
                "when_not": "Ne traitez pas la gouvernance comme une question uniquement informatique. Ne collectez pas de données sans finalité ou consentement défini. Ne présumez pas qu’un modèle est juste parce qu’il utilise des variables neutres.",
                "common_mistakes": [
                  "Pas de propriété claire des données.",
                  "Tout collecter et conserver indéfiniment.",
                  "Déployer des modèles opaques sans responsabilité."
                ],
                "quick_check": [
                  {
                    "q": "Qu’est-ce que la gestion des données ?",
                    "answer": "Responsabilité de la qualité, de la signification et de l'utilisation appropriée des données.",
                    "explanation": "Les stewards gèrent les données au nom de l’entreprise."
                  },
                  {
                    "q": "Pourquoi tester les biais des modèles ?",
                    "answer": "Détecter les résultats injustes ou préjudiciables entre les groupes.",
                    "explanation": "Des données ou une conception biaisées peuvent produire des décisions discriminatoires."
                  },
                  {
                    "q": "Qu’est-ce que la surveillance humaine dans l’analyse ?",
                    "answer": "Une personne examine ou peut annuler les décisions de modèle conséquentes.",
                    "explanation": "La surveillance soutient la responsabilité et la sécurité."
                  }
                ],
                "recap": [
                  "Gouvernez les données grâce à des contrôles de propriété, de qualité, d’accès et de cycle de vie.",
                  "Appliquez la confidentialité, l’équité, la transparence et la responsabilité.",
                  "Surveillez les modèles et tenez les humains responsables des décisions qui en découlent."
                ]
              }
            }
          ]
        },
        {
          "id": "master-5",
          "number": 5,
          "title": "Normes et certifications",
          "duration": "2,5 heures",
          "summary": "Comprendre les normes et les attentes éthiques derrière la certification et le déploiement.",
          "lessons": [
            {
              "id": "M5.1",
              "order": 1,
              "title": "ISO 13053",
              "objective": "Expliquer la norme ISO pour les méthodes et les rôles Six Sigma.",
              "content": {
                "why": "Les organisations mondiales ont besoin d’une référence commune pour les rôles, les méthodes et la qualité Six Sigma. La norme ISO 13053 fournit des lignes directrices internationales qui soutiennent la cohérence et la crédibilité.",
                "what": "La norme ISO 13053 aborde les principes fondamentaux de Six Sigma ainsi que les outils et techniques DMAIC. Il couvre les rôles, les compétences, la sélection des projets, le déploiement, la mesure des processus, l'analyse, l'amélioration et le contrôle. La norme est une orientation et non une garantie de résultats commerciaux. Il peut être utilisé pour aligner les attentes en matière de formation, de gouvernance et de projet sur l’ensemble des sites et des fournisseurs.",
                "how": [
                  "Cartographier les pratiques actuelles par rapport à la norme.",
                  "Identifiez les lacunes dans les rôles, les méthodes et la gouvernance.",
                  "Alignez les attentes en matière de formation et de certification.",
                  "Documentez l’approche de déploiement et les preuves.",
                  "Former les dirigeants et les praticiens à la norme.",
                  "Auditer l’alignement et améliorer le système.",
                  "Révisez la norme à mesure qu’elle évolue."
                ],
                "where": "Utilisez la norme ISO 13053 dans les déploiements multinationaux, les programmes de qualité des fournisseurs, les industries réglementées et les organisations recherchant un langage d'amélioration commun. Exemple : une entreprise aligne les programmes d'études de la ceinture et les portes des projets dans toutes les régions en utilisant la norme comme référence.",
                "when_not": "Ne poursuivez pas l’alignement comme un exercice de paperasse. Ne laissez pas la norme remplacer le jugement ou l’orientation client. Ne présumez pas qu’un modèle de mise en œuvre convient à chaque organisation.",
                "common_mistakes": [
                  "Se concentrer sur un certificat plutôt que sur une capacité.",
                  "Créer de la documentation sans changer les pratiques.",
                  "Comprendre à tort la norme comme une recette prescriptive."
                ],
                "quick_check": [
                  {
                    "q": "Que couvre la norme ISO 13053 ?",
                    "answer": "Principes fondamentaux, rôles, DMAIC, outils et conseils de déploiement de Six Sigma.",
                    "explanation": "Il constitue une référence internationale pour la pratique Six Sigma."
                  },
                  {
                    "q": "La norme ISO 13053 est-elle une garantie de résultats ?",
                    "answer": "Non, il s’agit d’un guide pour une pratique cohérente.",
                    "explanation": "Les résultats commerciaux dépendent de l’exécution et du contexte."
                  },
                  {
                    "q": "Pourquoi utiliser une norme commune sur tous les sites ?",
                    "answer": "Pour aligner le langage, les rôles et les attentes en matière de qualité.",
                    "explanation": "La cohérence soutient la comparaison et la gouvernance."
                  }
                ],
                "recap": [
                  "La norme ISO 13053 fournit des lignes directrices internationales Six Sigma.",
                  "Utilisez-le pour aligner les rôles, les méthodes et le déploiement.",
                  "Concentrez-vous sur les capacités et les résultats, pas sur la paperasse."
                ]
              }
            },
            {
              "id": "M5.2",
              "order": 2,
              "title": "Normes ASQ et IASSC",
              "objective": "Comparez les organismes de certification, les BoK et les attentes aux examens.",
              "content": {
                "why": "Les organismes professionnels définissent des corpus de connaissances et des normes de certification. Les comprendre aide les organisations à développer des capacités crédibles et à comparer les options de formation.",
                "what": "ASQ propose des certifications telles que Certified Six Sigma Green Belt, Black Belt et Manager of Quality/Organisational Excellence. L'IASSC propose des certifications Green et Black Belt avec son propre corpus de connaissances. Les programmes diffèrent en termes d'éligibilité, de contenu des examens, d'exigences du projet et de recertification. La certification démontre des connaissances et, dans certains programmes, une expérience de projet, mais elle ne prouve pas en soi l'impact commercial.",
                "how": [
                  "Sélectionnez la norme qui correspond aux besoins de l'organisation.",
                  "Cartographiez le programme d’études avec l’ensemble des connaissances.",
                  "Évaluer à la fois les connaissances et l’application pratique.",
                  "Choisissez une formation et une surveillance crédibles.",
                  "Exigez des projets réels et des preuves, le cas échéant.",
                  "Maintenir la certification et le développement continu.",
                  "Évaluez si les praticiens certifiés produisent des résultats."
                ],
                "where": "Utilisez ces normes pour le recrutement, la certification interne, l’approvisionnement en formation et les parcours de carrière. Exemple : une entreprise mappe son programme Green Belt sur les sujets ASQ et IASSC, puis ajoute une véritable exigence de projet et de coaching.",
                "when_not": "Ne considérez pas la certification comme une preuve de réussite du projet. Ne présumez pas que les normes sont identiques. N'achetez pas de certification sans évaluation pratique.",
                "common_mistakes": [
                  "Gérer une usine de certification.",
                  "Test uniquement la mémorisation.",
                  "Ignorer la recertification et le développement continu."
                ],
                "quick_check": [
                  {
                    "q": "Que définit un corpus de connaissances ?",
                    "answer": "Les sujets et compétences attendus pour une certification.",
                    "explanation": "Il guide la conception des programmes et des examens."
                  },
                  {
                    "q": "Pourquoi ajouter des preuves de projet à la certification ?",
                    "answer": "Confirmer que les connaissances peuvent être appliquées dans la pratique.",
                    "explanation": "Les examens à eux seuls ne démontrent pas la capacité du projet."
                  },
                  {
                    "q": "Les certifications ASQ et IASSC sont-elles identiques ?",
                    "answer": "Non, ils ont des exigences et des connaissances différentes.",
                    "explanation": "Les organisations doivent les comparer soigneusement."
                  }
                ],
                "recap": [
                  "Les normes professionnelles définissent les attentes en matière de connaissances et de certification.",
                  "Combinez l’évaluation des connaissances avec des preuves pratiques.",
                  "Évaluer la certification par capacité et résultats."
                ]
              }
            },
            {
              "id": "M5.3",
              "order": 3,
              "title": "Certification et éthique",
              "objective": "Appliquer les règles de véracité, de compétence, de confidentialité et de conflit d’intérêts.",
              "content": {
                "why": "La certification ne crée la confiance que lorsqu’elle est rigoureuse et éthique. Une certification faible nuit à la crédibilité et peut propager de mauvaises pratiques.",
                "what": "La certification comprend généralement l'éligibilité, la formation, l'examen, les preuves de projet et la recertification. L'éthique couvre les limites des compétences, la confidentialité, les conflits d'intérêts, l'intégrité des données, les affirmations véridiques, la sécurité et le traitement équitable. Les codes professionnels exigent que les praticiens travaillent dans le cadre de leur expertise et évitent de déformer leurs résultats ou leurs qualifications. Un organisme de certification a besoin de normes claires, d’une évaluation indépendante et d’un processus de plainte ou de violation.",
                "how": [
                  "Définir l’éligibilité, les compétences et les exigences en matière de preuves.",
                  "Utilisez des évaluations valides et fiables.",
                  "Vérifier les projets et les références.",
                  "Publier un code d’éthique et une politique en matière de conflits d’intérêts.",
                  "Assurer la recertification et la formation continue.",
                  "Enquêter équitablement sur les plaintes.",
                  "Publier les résultats et améliorer le programme."
                ],
                "where": "Utilisez les normes de certification et d’éthique pour les programmes de ceinture internes, les accréditations externes, la qualification des fournisseurs et le développement professionnel. Exemple : un candidat à la ceinture doit soumettre un projet réel avec une base de référence vérifiée, une analyse, un plan de contrôle et une confirmation du sponsor.",
                "when_not": "Ne certifiez pas uniquement sur la performance aux examens pour les rôles qui nécessitent une candidature. Ne tolérez pas les réclamations frauduleuses concernant les projets. Ne pratiquez pas en dehors de vos compétences.",
                "common_mistakes": [
                  "Certifier sans preuves de projet vérifiées.",
                  "Aucune recertification ni développement continu.",
                  "Ignorer les conflits d’intérêts ou les plaintes éthiques."
                ],
                "quick_check": [
                  {
                    "q": "Pourquoi les preuves de projet sont-elles importantes dans la certification ?",
                    "answer": "Cela montre que les connaissances ont été appliquées à un problème réel.",
                    "explanation": "L'application est différente de la performance à l'examen."
                  },
                  {
                    "q": "Que signifie travailler dans le cadre de la compétence ?",
                    "answer": "Ne pratiquez que là où vous possédez les connaissances et les compétences nécessaires pour être fiable.",
                    "explanation": "Il protège les clients et la profession."
                  },
                  {
                    "q": "Pourquoi avoir une recertification ?",
                    "answer": "Veiller à ce que les praticiens maintiennent leurs connaissances et compétences actuelles.",
                    "explanation": "Les méthodes et les normes évoluent avec le temps."
                  }
                ],
                "recap": [
                  "La certification nécessite une évaluation rigoureuse et une application vérifiée.",
                  "L'éthique protège les clients, les données et la crédibilité professionnelle.",
                  "Exiger une recertification et appliquer les normes."
                ]
              }
            }
          ]
        },
        {
          "id": "master-6",
          "number": 6,
          "title": "Leadership et valeur",
          "duration": "3 heures",
          "summary": "Dirigez un déploiement, prouvez la valeur et soutenez l’amélioration au-delà des projets individuels.",
          "lessons": [
            {
              "id": "M6.1",
              "order": 1,
              "title": "Changer la direction",
              "objective": "Diriger les dirigeants à travers la résistance, la politique et les priorités concurrentes.",
              "content": {
                "why": "Le leadership du changement n’est pas la même chose que la gestion de projet. Les dirigeants doivent créer de la confiance, modéliser de nouveaux comportements et maintenir leur attention lorsque l’amélioration devient difficile.",
                "what": "Le leadership en matière de changement crée une urgence, une vision convaincante, une coalition solide et un engagement émotionnel. Il communique par des actions ainsi que par des paroles, élimine les barrières et répartit le leadership entre les niveaux. Les dirigeants racontent une histoire crédible, prennent des décisions symboliques et restent visibles. Ils gèrent la résistance avec empathie et preuves plutôt qu’avec autorité seule.",
                "how": [
                  "Créez un argumentaire clair en faveur du changement et une vision partagée.",
                  "Construisez une coalition crédible et influente.",
                  "Communiquez de manière cohérente et écoutez activement.",
                  "Modélisez les comportements et les décisions que vous attendez.",
                  "Supprimer les barrières structurelles et politiques.",
                  "Célébrez les progrès et apprenez des échecs.",
                  "Ancrer le changement dans les systèmes, les rôles et les routines."
                ],
                "where": "Utilisez le leadership du changement dans les transformations, les fusions, les déploiements numériques, les programmes de sécurité et le changement culturel. Exemple : un responsable d'usine participe aux réunions quotidiennes, demande d'abord les mauvaises nouvelles et donne suite aux barrières levées par les opérateurs.",
                "when_not": "Ne comptez pas uniquement sur l’autorité et la conformité. Ne déléguez pas le changement à une équipe de projet sans parrainage visible. N'ignorez pas l'émotion et la perte.",
                "common_mistakes": [
                  "Messages incohérents entre les paroles et les actions.",
                  "Attention du leadership qui disparaît après le lancement.",
                  "Traiter la résistance comme une déloyauté plutôt que comme une information."
                ],
                "quick_check": [
                  {
                    "q": "Pourquoi les dirigeants doivent-ils modéliser le changement ?",
                    "answer": "Les gens regardent davantage les comportements que les annonces.",
                    "explanation": "La crédibilité dépend d’une action cohérente."
                  },
                  {
                    "q": "Qu’est-ce que le leadership distribué ?",
                    "answer": "Leadership du changement partagé entre les niveaux et les fonctions.",
                    "explanation": "Cela élargit l’appropriation au-delà de l’équipe de direction."
                  },
                  {
                    "q": "Comment les dirigeants devraient-ils traiter la résistance ?",
                    "answer": "En tant qu’informations à comprendre et à traiter, pas simplement à supprimer.",
                    "explanation": "La résistance révèle souvent de véritables obstacles ou préoccupations."
                  }
                ],
                "recap": [
                  "Diriger le changement grâce à une vision, une crédibilité et un comportement visible.",
                  "Construisez des coalitions et répartissez la propriété.",
                  "Maintenir l’attention et ancrer le changement."
                ]
              }
            },
            {
              "id": "M6.2",
              "order": 2,
              "title": "ROI et réalisation des avantages",
              "objective": "Suivez les coûts, les avantages, les flux de trésorerie et la valeur au fil du temps.",
              "content": {
                "why": "Un projet n’a pas de valeur car il se termine à temps ; cela est précieux lorsque les avantages promis sont mesurés, réalisés et durables. La réalisation des avantages maintient l’amélioration liée à l’analyse de rentabilisation.",
                "what": "La gestion de la réalisation des avantages identifie les avantages, définit la manière dont ils seront mesurés, attribue des propriétaires, suit les progrès et confirme les résultats après la mise en œuvre. Un registre des avantages enregistre la référence, l'objectif, le calendrier, le propriétaire et les preuves. Les avantages peuvent être des économies concrètes, des économies indirectes, une réduction des coûts, une libération de capacité, une réduction des risques ou des résultats pour les clients. Les résultats sont des livrables ; les résultats sont des changements dans les performances ; les avantages sont la valeur mesurable créée.",
                "how": [
                  "Définir les avantages et les inconvénients dans la charte du projet.",
                  "Établir une référence et une méthode de mesure validées.",
                  "Attribuez un propriétaire de bénéfice et un plan de réalisation.",
                  "Examiner les prévisions de bénéfices aux portes du projet.",
                  "Mesurez les résultats réels après la mise en œuvre.",
                  "Réconcilier avec la finance et combler les lacunes.",
                  "Maintenir les contrôles et la propriété après le transfert."
                ],
                "where": "Utilisez la réalisation des avantages pour les portefeuilles, les transformations, les projets technologiques et les projets DMAIC individuels. Exemple : la réduction des coûts liés aux défauts est suivie pendant six mois après la clôture du projet pour confirmer que les économies atteignent le budget.",
                "when_not": "Ne comptez pas les bénéfices théoriques qui n’atteignent jamais l’entreprise. N'arrêtez pas le suivi à la clôture du projet. Ne comptez pas deux fois le même avantage dans tous les projets.",
                "common_mistakes": [
                  "Aucun avantage pour le propriétaire après la clôture du projet.",
                  "Aucune référence ni aucune preuve.",
                  "Traiter l’épargne douce comme de l’argent garanti."
                ],
                "quick_check": [
                  {
                    "q": "Quelle est la différence entre un résultat et un résultat ?",
                    "answer": "Un résultat est un livrable ; un résultat est un changement de performance ou de comportement.",
                    "explanation": "Les avantages proviennent des résultats, et non seulement des extrants."
                  },
                  {
                    "q": "Pourquoi attribuer un bénéficiaire aux avantages ?",
                    "answer": "Rendre quelqu'un responsable du suivi et de la réalisation des bénéfices.",
                    "explanation": "La propriété empêche les avantages de disparaître après le lancement."
                  },
                  {
                    "q": "Que doit contenir un registre des prestations ?",
                    "answer": "Référence, objectif, calendrier, propriétaire et preuves pour chaque avantage.",
                    "explanation": "Cela rend la réalisation des bénéfices vérifiable et visible."
                  }
                ],
                "recap": [
                  "Gérez les avantages depuis la ligne de base jusqu’à la réalisation.",
                  "Attribuez des propriétaires et suivez les résultats après la clôture du projet.",
                  "Concilier les prestations réclamées avec les finances et les preuves."
                ]
              }
            },
            {
              "id": "M6.3",
              "order": 3,
              "title": "Capstone : diriger un déploiement",
              "objective": "Créez une feuille de route de déploiement, un modèle de gouvernance et un plan de mesure.",
              "content": {
                "why": "Diriger un déploiement nécessite d'intégrer la stratégie, la gouvernance, le portefeuille, les capacités, le changement et les avantages. La pierre angulaire teste si un Master Black Belt peut construire un système, pas seulement exécuter un projet.",
                "what": "Une feuille de route de déploiement évalue la maturité et l'état de préparation, aligne le programme sur la stratégie, définit la gouvernance et les rôles, sélectionne un portefeuille équilibré, renforce les capacités, standardise les méthodes et gère la culture et le changement. Le déploiement passe généralement par la mobilisation, la conception, le pilotage, la mise à l'échelle et le maintien. Le succès dépend du parrainage, de personnes compétentes, de mesures utiles et de renforcement.",
                "how": [
                  "Évaluer l’état de préparation, la maturité et les priorités stratégiques de l’organisation.",
                  "Obtenez un mandat et construisez une coalition.",
                  "Concevoir la gouvernance, les rôles, les normes et les critères de portefeuille.",
                  "Pilote avec des équipes compétentes et un sponsoring visible.",
                  "Renforcez vos capacités grâce à la formation, au coaching et à la pratique.",
                  "Faites évoluer ce qui fonctionne et adaptez-vous aux conditions locales.",
                  "Examinez les résultats, maintenez les routines et actualisez la stratégie."
                ],
                "where": "Utilisez le leadership en matière de déploiement au niveau de l’entreprise, du site ou au niveau fonctionnel. Exemple : un site démarre avec une seule chaîne de valeur et un petit portefeuille, prouve ses résultats, développe des coachs internes, puis s'étend à d'autres chaînes de valeur avec des normes communes.",
                "when_not": "Ne lancez pas un déploiement big-bang sans capacité ni parrainage. Ne copiez pas le modèle d'une autre organisation sans adaptation. Ne considérez pas le déploiement comme un lancement unique.",
                "common_mistakes": [
                  "Pas de parrainage exécutif ni de mandat clair.",
                  "Mise à l'échelle avant que le pilote ne démontre ses capacités.",
                  "Se concentrer sur les outils tout en ignorant la culture, la gouvernance et les avantages."
                ],
                "quick_check": [
                  {
                    "q": "Qu'est-ce qu'une séquence de déploiement sensée ?",
                    "answer": "Mobiliser, concevoir, piloter, mettre à l’échelle et pérenniser.",
                    "explanation": "Il construit des preuves et des capacités avant une large expansion."
                  },
                  {
                    "q": "Pourquoi piloter avant de faire évoluer ?",
                    "answer": "Tester l’approche et renforcer les capacités avec un risque limité.",
                    "explanation": "Les projets pilotes fournissent un apprentissage avant un engagement plus large."
                  },
                  {
                    "q": "Que doit inclure le maintien en puissance ?",
                    "answer": "Propriété, routines, mesure et renforcement.",
                    "explanation": "Sans cela, les résultats s'érodent après le lancement."
                  }
                ],
                "recap": [
                  "Dirigez le déploiement en tant que système, et non en tant que série de projets.",
                  "Développez le parrainage, la gouvernance, les capacités et un portefeuille équilibré.",
                  "Pilotez, mettez à l’échelle et maintenez avec mesure et renforcement."
                ]
              }
            }
          ]
        }
      ],
      "coverageChecklist": [
        {
          "topic": "Déploiement de la stratégie (Hoshin Kanri)",
          "lessons": [
            "M1.1",
            "M1.2"
          ]
        },
        {
          "topic": "Gouvernance du programme",
          "lessons": [
            "M1.3"
          ]
        },
        {
          "topic": "Sélection du portefeuille de projets",
          "lessons": [
            "M1.4"
          ]
        },
        {
          "topic": "Validation financière",
          "lessons": [
            "M1.5"
          ]
        },
        {
          "topic": "Coaching et mentorat",
          "lessons": [
            "M2.1",
            "M2.2"
          ]
        },
        {
          "topic": "Conseil statistique",
          "lessons": [
            "M2.3"
          ]
        },
        {
          "topic": "Entreprise DFSS",
          "lessons": [
            "M3.1"
          ]
        },
        {
          "topic": "Changement organisationnel",
          "lessons": [
            "M3.2"
          ]
        },
        {
          "topic": "Bâtiment culturel",
          "lessons": [
            "M3.3"
          ]
        },
        {
          "topic": "Conception de la formation",
          "lessons": [
            "M2.4"
          ]
        },
        {
          "topic": "Tableau de bord équilibré",
          "lessons": [
            "M3.4"
          ]
        },
        {
          "topic": "Analyse comparative",
          "lessons": [
            "M3.5"
          ]
        },
        {
          "topic": "Intégration de l'analyse et de l'industrie 4.0",
          "lessons": [
            "M4.1"
          ]
        },
        {
          "topic": "Éthique",
          "lessons": [
            "M4.2",
            "M5.3"
          ]
        },
        {
          "topic": "Normes de certification (ISO 13053, ASQ, IASSC)",
          "lessons": [
            "M5.1",
            "M5.2"
          ]
        }
      ],
      "project": {
        "title": "Élaborer un plan de déploiement d'amélioration de l'entreprise",
        "brief": "Créez un plan de déploiement sur 12 mois pour une organisation multi-sites : carte stratégique, priorités Hoshin, gouvernance, portefeuille, pipeline de formation, validation financière et tableau de bord équilibré."
      },
      "exam": {
        "questions": 100,
        "passingScore": 80,
        "format": "100 questions à choix multiples basées sur des cas avec quatre options et explications."
      },
      "cheatSheet": [
        "Hoshin Kanri aligne les objectifs de rupture avec la gestion quotidienne.",
        "Les économies importantes affectent le compte de résultat ou les flux de trésorerie ; des économies douces ou des coûts théoriques sont évités.",
        "La sélection du portefeuille équilibre la valeur, le risque, la capacité et l’adéquation stratégique.",
        "ISO 13053 décrit les méthodes et les rôles Six Sigma ; L'ASQ et l'IASSC définissent les BoK et les examens."
      ],
      "nextChecklist": [
        "Je peux lier un portefeuille de projets à des objectifs stratégiques.",
        "Je peux coacher une ceinture noire à travers un désaccord statistique.",
        "Je peux concevoir un parcours de formation et de certification.",
        "Je peux valider les avantages financiers sans double comptage."
      ]
    }
  ]
};

window.curriculumData = curriculumData;
