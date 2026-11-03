// Auto-generated from data/i18n/de/curriculum.json and lessons/*.json. Do not edit by hand.
// Run: node scripts/build-localized-data.js
const curriculumData = {
  "version": "2.0",
  "updated": "2026-10-29",
  "source": "Aligned to ASQ, IASSC, and ISO 13053 Bodies of Knowledge",
  "belts": [
    {
      "id": "white",
      "name": "Weißer Gürtel",
      "level": 1,
      "color": "white",
      "icon": "fa-medal",
      "lessonTarget": "8-10",
      "studyTime": "6-8 Stunden",
      "audience": "Neue Mitarbeiter, Mitarbeiter an vorderster Front, Vorgesetzte und alle, die zum ersten Mal an einem Verbesserungsprojekt teilnehmen.",
      "prerequisites": "Keiner. Beginnen Sie hier ohne Vorkenntnisse.",
      "previousRecap": "Kein vorheriger Gürtel. Dieser Kurs beginnt mit der gemeinsamen Sprache von Qualität, Verschwendung, Variation und DMAIC.",
      "outcomes": [
        "Erklären Sie, was Lean Six Sigma ist und woher es kommt",
        "Erkennen Sie Verschwendung, Abweichungen, Mängel und Kosten schlechter Qualität",
        "Beschreiben Sie VOC, CTQ, DMAIC und die Bandrollen",
        "Tragen Sie nützliche Daten und Ideen zu einem Teamprojekt bei"
      ],
      "modules": [
        {
          "id": "white-1",
          "number": 1,
          "title": "Qualitätsgrundlagen",
          "duration": "90 Min",
          "summary": "Bauen Sie die gemeinsame Sprache der Qualität auf: Woher kommen Six Sigma und Lean, warum schlechte Qualität Geld kostet, wie Kunden Wert definieren und warum Variation wichtig ist.",
          "lessons": [
            {
              "id": "W1.1",
              "order": 1,
              "title": "Geschichte von Six Sigma und Lean",
              "objective": "Trace Six Sigma von Motorola und GE und Lean vom Toyota Production System.",
              "content": {
                "why": "Wenn Sie wissen, woher Lean und Six Sigma kommen, können Sie erkennen, warum es diese Tools gibt. Sie wurden nicht als Theorie erfunden; Sie waren praktische Antworten auf echte Qualitäts- und Geschwindigkeitsprobleme.",
                "what": "Six Sigma ist eine Qualitätsmethode, die Abweichungen und Fehler reduziert. Motorola entwickelte es in den 1980er Jahren und Bill Smith war einer der Schlüsselarchitekten. General Electric und Jack Welch machten es in den 1990er Jahren berühmt. Lean ist eine Geschwindigkeits- und Flussmethode, die aus dem Toyota Production System unter der Leitung von Taiichi Ohno hervorgegangen ist. Lean beseitigt Verschwendung; Six Sigma reduziert Variationen. Lean Six Sigma vereint beides.",
                "how": [
                  "Beginnen Sie mit der Kundenanforderung, nicht mit dem Werkzeug.",
                  "Messen Sie die aktuelle Fehlerrate oder Durchlaufzeit.",
                  "Verwenden Sie DMAIC, um Variationen zu finden und zu reduzieren.",
                  "Nutzen Sie Lean-Tools, um Wartezeiten, Bewegungen, Lagerbestände und Nacharbeiten zu vermeiden.",
                  "Standardisieren Sie die verbesserte Methode und messen Sie weiter."
                ],
                "where": "Nutzen Sie die Geschichte als Kontext, nicht als Beweis. Ein Krankenhaus könnte Six Sigma nutzen, um Medikationsfehler zu reduzieren, und Lean nutzen, um die Wartezeiten der Patienten zu verkürzen. Eine Bank könnte Six Sigma nutzen, um die Nachbearbeitung von Krediten zu reduzieren, und Lean nutzen, um Genehmigungen zu beschleunigen. IT-Teams nutzen beides, um Release-Fehler und Wartezeiten zwischen den Teams zu reduzieren.",
                "when_not": "Kopieren Sie kein berühmtes Programm, nur weil GE oder Toyota es verwendet haben. Betrachten Sie Lean nicht als Lizenz zum Personalabbau und betrachten Sie Six Sigma nicht nur als einen Statistikkurs.",
                "common_mistakes": [
                  "Bei Lean geht es nur um Werkzeuge und bei Six Sigma geht es nur um Mathematik.",
                  "Das Programm einer anderen Organisation kopieren, ohne es an den lokalen Prozess anzupassen.",
                  "Nutzen Sie die Historie, um eine Lösung zu begründen, bevor Sie Daten sammeln."
                ],
                "quick_check": [
                  {
                    "q": "Welches Unternehmen hat Six Sigma entwickelt?",
                    "answer": "Motorola.",
                    "explanation": "Motorola entwickelte Six Sigma in den 1980er Jahren; GE machte es später populär."
                  },
                  {
                    "q": "Was ist der Schwerpunkt von Lean?",
                    "answer": "Abfall entfernen und den Fluss verbessern.",
                    "explanation": "Lean ist aus dem Toyota-Produktionssystem hervorgegangen und konzentriert sich auf Wertschöpfung, Fluss, Pull und Abfallbeseitigung."
                  },
                  {
                    "q": "Warum Lean und Six Sigma kombinieren?",
                    "answer": "Lean verbessert Geschwindigkeit und Fluss, während Six Sigma Qualität und Konsistenz verbessert.",
                    "explanation": "Gemeinsam thematisieren sie sowohl Verschwendung als auch Variation."
                  }
                ],
                "recap": [
                  "Six Sigma reduziert Abweichungen und Fehler; Motorola und GE spielen eine zentrale Rolle in seiner Geschichte.",
                  "Lean reduziert Verschwendung und verbessert den Fluss; es ist aus Toyota hervorgegangen.",
                  "Lean Six Sigma vereint beides, die Kundenanforderung steht jedoch immer im Vordergrund."
                ]
              }
            },
            {
              "id": "W1.2",
              "order": 2,
              "title": "Qualitätsgrundlagen und Kosten schlechter Qualität",
              "objective": "Definieren Sie Qualität, Prävention, Bewertung und Fehlerkosten und berechnen Sie ein einfaches COPQ-Beispiel.",
              "content": {
                "why": "Schlechte Qualität ist teuer, aber die Kosten verbergen sich oft in Nacharbeiten, Retouren, Inspektionen und verlorenen Kunden. Führungskräfte priorisieren Probleme, die sie in Bezug auf Geld und Kundenauswirkungen erkennen können.",
                "what": "Qualität bedeutet, Kundenanforderungen konsequent zu erfüllen. Es ist nicht dasselbe wie Luxus oder Klasse. Die Kosten schlechter Qualität (COPQ) sind die Gesamtkosten, die dadurch entstehen, dass die Arbeit nicht gleich beim ersten Mal richtig ausgeführt wird. Es besteht aus vier Teilen: Präventionskosten wie Schulungen und Designprüfungen, Bewertungskosten wie Inspektion und Tests, interne Fehlerkosten wie Ausschuss und Nacharbeit vor der Lieferung und externe Fehlerkosten wie Rücksendungen, Beschwerden, Garantie und entgangene Geschäfte.",
                "how": [
                  "Listen Sie die vier COPQ-Kategorien auf.",
                  "Schätzen Sie die Kosten in jeder Kategorie für einen Prozess oder Monat.",
                  "Fügen Sie die Kategorien hinzu, um den Gesamt-COPQ zu erhalten.",
                  "Teilen Sie die Werte durch Einheiten oder Umsatz, um einen fairen Vergleich zu ermöglichen.",
                  "Priorisieren Sie die größte kontrollierbare Kategorie."
                ],
                "where": "Eine Klinik kann die Kosten für die Wiederaufnahme zählen, ein Einzelhändler kann Retouren und Rücksendungen zählen, eine Fabrik kann Ausschuss und Nacharbeit zählen und ein IT-Team kann Stunden zur Fehlerbehebung zählen. Verwenden Sie COPQ, wenn Sie einen Business Case oder eine Prioritätenliste benötigen.",
                "when_not": "Verwenden Sie COPQ nicht als vollständiges Buchhaltungssystem und zählen Sie keine Kosten doppelt, die bereits in einer anderen Kategorie enthalten sind. Benutzen Sie es nicht, um Einzelpersonen zu beschämen. Der Zweck besteht darin, den Prozess zu verbessern.",
                "common_mistakes": [
                  "Zählen Sie nur Ausschuss und ignorieren Sie Inspektionen, Nacharbeiten und verlorene Kunden.",
                  "Doppelzählung der gleichen Kosten in zwei Kategorien.",
                  "Verwendung grober Schätzungen als exakte Finanzergebnisse ohne Validierung."
                ],
                "quick_check": [
                  {
                    "q": "Welche davon sind externe Ausfallkosten?",
                    "answer": "Kundenretouren und Gewährleistungsansprüche.",
                    "explanation": "Externe Fehler treten auf, nachdem der Kunde das Produkt oder die Dienstleistung erhalten hat."
                  },
                  {
                    "q": "Ein Prozess stellt 1.000 Einheiten her, weist 40 Fehler auf und die Behebung jedes Fehlers kostet 25 US-Dollar. Wie hoch sind die internen Ausfallkosten?",
                    "answer": "$1,000.",
                    "explanation": "40 Mängel x 25 $ = 1.000 $."
                  },
                  {
                    "q": "Was sind die vier COPQ-Kategorien?",
                    "answer": "Prävention, Beurteilung, internes Versagen und externes Versagen.",
                    "explanation": "Diese vier Kategorien decken die Kosten schlechter Qualität ab."
                  }
                ],
                "recap": [
                  "Qualität bedeutet, die Kundenanforderungen konsequent zu erfüllen.",
                  "COPQ umfasst Prävention, Bewertung, interne Fehler und externe Fehlerkosten.",
                  "Nutzen Sie COPQ, um Verbesserungen zu priorisieren und ein Geschäftsszenario zu erstellen, und nicht, um den Leuten die Schuld zu geben."
                ]
              }
            },
            {
              "id": "W1.3",
              "order": 3,
              "title": "Kunden: VOC und CTQ",
              "objective": "Verwandeln Sie Kundenwünsche in messbare, entscheidende Qualitätsanforderungen.",
              "content": {
                "why": "Verbesserungen sind nur dann wichtig, wenn sie etwas ändern, das den Kunden am Herzen liegt. Ein Prozess kann intern schneller oder billiger erscheinen, während das Kundenerlebnis schlechter wird.",
                "what": "Die Stimme des Kunden (VOC) ist die Sammlung von Kundenbedürfnissen, -wünschen, -beschwerden und -erwartungen. Kritisch für die Qualität (CTQ) ist eine messbare Anforderung, die aus dem VOC abgeleitet wird. Ein CTQ-Baum verknüpft ein breites Kundenbedürfnis mit einem Treiber und dann mit einem messbaren Merkmal. Beispielsweise kann „Ich möchte eine schnelle Antwort“ zu „Zeit bis zur ersten Antwort unter vier Stunden“ werden.",
                "how": [
                  "Sammeln Sie VOC aus Interviews, Umfragen, Beschwerden und Beobachtungen.",
                  "Gruppieren Sie ähnliche Aussagen nach Themen.",
                  "Übersetzen Sie jedes Thema in einen messbaren CTQ.",
                  "Legen Sie ein Ziel oder eine Spezifikation und eine Messmethode fest.",
                  "Überprüfen Sie die CTQ mit Kunden oder Mitarbeitern an der Front."
                ],
                "where": "Verwenden Sie VOC und CTQ in jeder Branche. Im Gesundheitswesen kann aus „Ich möchte schnell gesehen werden“ eine „Zeit bis zum Arzttermin unter 20 Minuten“ werden. Im Banking kann „Ich möchte meinen Kreditstatus wissen“ zu „Statusaktualisierung innerhalb eines Werktages“ werden. Im Bildungsbereich kann aus „Ich möchte nützliches Feedback“ zu „Rückmeldung innerhalb von fünf Tagen“ werden.",
                "when_not": "Verlassen Sie sich nicht nur auf eine Umfrage, wenn Sie den Prozess beobachten können. Erstellen Sie kein CTQ ohne einen echten Kunden oder einen klaren internen Kunden. Verwenden Sie keine VOC, wenn es sich um eine gesetzliche oder sicherheitsrelevante Anforderung handelt. Das sind zwingende Anforderungen, keine Präferenzen.",
                "common_mistakes": [
                  "Eine Lösung mit einem Bedarf verwechseln, wie zum Beispiel „Wir brauchen eine neue App“ statt „Wir brauchen schnellere Antworten“.",
                  "Zu viele CTQs erstellen und den Fokus verlieren.",
                  "Schreiben eines CTQ, der nicht gemessen werden kann."
                ],
                "quick_check": [
                  {
                    "q": "Wofür steht VOC?",
                    "answer": "Stimme des Kunden.",
                    "explanation": "VOC ist die Sammlung von Kundenbedürfnissen und -erwartungen."
                  },
                  {
                    "q": "Was macht einen guten CTQ aus?",
                    "answer": "Es ist messbar und mit einem Kundenbedürfnis verknüpft.",
                    "explanation": "Ein CTQ übersetzt einen Bedarf in etwas, das der Prozess messen kann."
                  },
                  {
                    "q": "Ein Kunde sagt: „Ich möchte, dass meine Bestellung pünktlich ankommt.“ Welcher CTQ ist der Beste?",
                    "answer": "Prozentsatz der Bestellungen, die zum versprochenen Termin geliefert wurden.",
                    "explanation": "Dieser CTQ ist messbar und spiegelt direkt das Kundenbedürfnis wider."
                  }
                ],
                "recap": [
                  "VOC erfasst, was Kunden brauchen und schätzen.",
                  "CTQ übersetzt VOC in eine messbare Anforderung.",
                  "Ein nützlicher CTQ hat ein klares Ziel, eine klare Messmethode und eine klare Kundenbeziehung."
                ]
              }
            },
            {
              "id": "W1.4",
              "order": 4,
              "title": "Variation und Mängel",
              "objective": "Erklären Sie häufige und besondere Ursachenvariationen und definieren Sie einen Fehler in einfacher Sprache.",
              "content": {
                "why": "Variation macht Prozesse unvorhersehbar. Selbst wenn der Durchschnitt gut aussieht, können Abweichungen zu Mängeln, Verzögerungen und unzufriedenen Kunden führen.",
                "what": "Variation ist der Unterschied zwischen Ausgaben oder Prozessergebnissen im Zeitverlauf. Abweichungen aufgrund gemeinsamer Ursachen sind normal und in den Prozess integriert. Abweichungen aufgrund besonderer Ursachen sind auf ein bestimmtes Ereignis zurückzuführen, z. B. einen Maschinenausfall, einen neuen Lieferanten oder einen plötzlichen Nachfrageanstieg. Ein Fehler ist eine Ausgabe, die einer Spezifikation oder Anforderung nicht entspricht. Ein defektes Gerät kann einen oder mehrere Defekte aufweisen.",
                "how": [
                  "Definieren Sie das Merkmal und die Spezifikation.",
                  "Sammeln Sie Daten in zeitlicher Reihenfolge.",
                  "Zeichnen Sie ein Laufdiagramm oder Histogramm.",
                  "Suchen Sie nach Mustern, Ausreißern und Verschiebungen.",
                  "Entfernen Sie zuerst Sonderursachen und reduzieren Sie dann die Abweichungen aufgrund gemeinsamer Ursachen."
                ],
                "where": "Ein Café kann die Servicezeit verfolgen; ein Krankenhaus kann die Wartezeit verfolgen; ein Softwareteam kann Release-Mängel verfolgen; Eine Bank kann Genehmigungszeiten verfolgen. Verwenden Sie die Variationsanalyse immer dann, wenn der Prozess stabil genug ist, um untersucht zu werden, und der Kunde eine messbare Anforderung hat.",
                "when_not": "Reagieren Sie nicht auf jeden einzelnen Datenpunkt, als wäre es ein besonderer Anlass; Das ist Manipulation und macht die Sache normalerweise noch schlimmer. Versuchen Sie nicht, die Variation in einem Prozess zu reduzieren, der grundsätzlich nicht in der Lage ist und einer Neugestaltung bedarf.",
                "common_mistakes": [
                  "Behandlung normaler Abweichungen aufgrund gemeinsamer Ursache als besonderes Ereignis.",
                  "Einer Person die Schuld für die durch den Prozess verursachten Abweichungen geben.",
                  "Es werden zu wenige Datenpunkte verwendet, um ein Muster zu erkennen."
                ],
                "quick_check": [
                  {
                    "q": "Was ist eine Variation aufgrund gemeinsamer Ursache?",
                    "answer": "Normale Variation, eingebaut in einen stabilen Prozess.",
                    "explanation": "Häufige Ursachenvariation ist die laufende, erwartete Variation des Prozesses."
                  },
                  {
                    "q": "Eine Servicezeit beträgt in der Regel 5-7 Minuten, ein Kunde wartet jedoch 45 Minuten. Welche Art von Variation wird die 45-minütige Wartezeit wahrscheinlich sein?",
                    "answer": "Variation aus besonderen Gründen.",
                    "explanation": "Es handelt sich um ein ungewöhnliches Ereignis außerhalb des normalen Musters."
                  },
                  {
                    "q": "Was ist ein Defekt?",
                    "answer": "Eine Ausgabe, die eine Spezifikation oder Anforderung nicht erfüllt.",
                    "explanation": "Ein Mangel ist die Nichterfüllung einer Anforderung."
                  }
                ],
                "recap": [
                  "Variation ist der Unterschied in den Prozessergebnissen im Laufe der Zeit.",
                  "Eine Variation aufgrund gemeinsamer Ursachen ist normal; Abweichungen aus besonderen Gründen haben ihren Ursprung in einer bestimmten Quelle.",
                  "Reduzieren Sie zuerst Sonderursachen und arbeiten Sie dann an Variationen aufgrund gemeinsamer Ursachen."
                ]
              }
            },
            {
              "id": "W1.5",
              "order": 5,
              "title": "DMAIC-Übersicht",
              "objective": "Beschreiben Sie die fünf DMAIC-Phasen und die Hauptfragen, die jede Phase beantwortet.",
              "content": {
                "why": "DMAIC bietet Teams einen disziplinierten Weg von einem vagen Problem zu einer bewährten Lösung. Es verhindert das Springen zu Fixes und trägt dazu bei, den Gewinn aufrechtzuerhalten.",
                "what": "DMAIC steht für Define, Measure, Analyze, Improve, Control. Definieren klärt das Problem, den Kunden, das Ziel und den Umfang. Measure erstellt eine Basislinie und überprüft die Daten. Analysieren findet Grundursachen. Verbessern Sie Auswahl- und Testlösungen. Die Steuerung standardisiert und überwacht den neuen Prozess. Jede Phase endet mit einer Gate-Überprüfung.",
                "how": [
                  "Definieren: Schreiben Sie eine Problemstellung, ein Ziel, einen Umfang und ein Team.",
                  "Messen: Basisdaten sammeln und das Messsystem validieren.",
                  "Analysieren: Verwenden Sie Diagramme, Ursachentools und Tests, um Ursachen zu finden.",
                  "Verbessern: Wählen Sie eine Lösung, testen Sie sie und bestätigen Sie das Ergebnis.",
                  "Kontrolle: Dokumentieren Sie den Standard, überwachen Sie die Metrik und weisen Sie einen Eigentümer zu."
                ],
                "where": "Verwenden Sie DMAIC zur Verbesserung eines bestehenden Prozesses im Gesundheitswesen, im Bankwesen, im Einzelhandel, in der Fertigung, in der IT oder im Bildungswesen. Ein Labor hat beispielsweise 30 % verspätete Berichte. Definieren Sie das Problem und das Ziel. Messen Sie die Grundlinie; Analysieren Sie die Abholung und Stapelverarbeitung durch den Kurier. Verbessern Sie mit einem Barcode-Scan; Kontrolle mit einem Tagesdiagramm und einem Eigentümer. Verwenden Sie stattdessen DMADV, wenn Sie einen neuen Prozess von Grund auf entwerfen.",
                "when_not": "Verwenden Sie DMAIC nicht für eine einfache, offensichtliche Lösung oder ein dringendes Sicherheitsproblem; Verwenden Sie zunächst ein schnelles Kaizen oder eine sofortige Eindämmung. Überspringen Sie die Maßnahme nicht, nur weil das Team glaubt, das Problem zu kennen.",
                "common_mistakes": [
                  "Vom Definieren direkt zum Verbessern springen.",
                  "Die Basislinienmessung wird übersprungen, sodass das Team den Gewinn nicht nachweisen kann.",
                  "Beenden des Projekts ohne Kontrollplan und Eigentümer."
                ],
                "quick_check": [
                  {
                    "q": "Wie lauten die fünf DMAIC-Phasen in der Reihenfolge?",
                    "answer": "Definieren, messen, analysieren, verbessern, kontrollieren.",
                    "explanation": "DMAIC ist die Standard-Verbesserungssequenz."
                  },
                  {
                    "q": "In welcher Phase wird die Basislinie festgelegt?",
                    "answer": "Messen.",
                    "explanation": "In der Messphase werden die Basisdaten definiert und erfasst."
                  },
                  {
                    "q": "Was ist der Zweck der Kontrollphase?",
                    "answer": "Den verbesserten Prozess zu standardisieren und zu überwachen, damit der Gewinn anhält.",
                    "explanation": "Die Kontrolle bestätigt die neue Methode und weist das fortlaufende Eigentum zu."
                  }
                ],
                "recap": [
                  "DMAIC ist ein fünfstufiger Weg vom Problem zur nachhaltigen Verbesserung.",
                  "Messen und Analysieren verhindern Vermutungen; Verbessern Sie Testlösungen.",
                  "Kontrolle ist es, die den Gewinn dauerhaft macht."
                ]
              }
            }
          ]
        },
        {
          "id": "white-2",
          "number": 2,
          "title": "Menschen, Verschwendung und erste Projekte",
          "duration": "80 Min",
          "summary": "Lernen Sie, die acht Verschwendungen zu erkennen, zu verstehen, wer was bei einem Projekt tut, und sich die Kultur und Gewohnheiten anzueignen, die dafür sorgen, dass Verbesserungen Bestand haben.",
          "lessons": [
            {
              "id": "W2.1",
              "order": 1,
              "title": "Die 8 Abfälle",
              "objective": "Identifizieren Sie die acht Verschwendungen in den Bereichen Gesundheitswesen, Einzelhandel, Fertigung, IT, Bankwesen und Bildung.",
              "content": {
                "why": "Verschwendung ist Arbeit, die Zeit, Geld oder Mühe verschlingt, ohne einen Mehrwert für den Kunden zu schaffen. Zu lernen, Verschwendung zu erkennen, ist die erste praktische Lean-Fähigkeit, da das meiste davon vor den Augen der Öffentlichkeit verborgen bleibt.",
                "what": "Lean definiert acht Verschwendungen, die oft als TIMWOODS bezeichnet werden: Transport, Inventar, Bewegung, Warten, Überproduktion, Überverarbeitung, Mängel und ungenutzte Fähigkeiten. Wert ist das, wofür der Kunde bereit ist zu zahlen; Abfall ist alles andere. Manche Abfälle sind notwendig, wie zum Beispiel gesetzlich vorgeschriebene Inspektionen. Das Ziel besteht also darin, sie zu reduzieren und nicht, sie blind zu beseitigen.",
                "how": [
                  "Gehen Sie den Prozess von Anfang bis Ende durch und listen Sie jeden Schritt auf.",
                  "Markieren Sie jeden Schritt als Mehrwert, notwendiger Nicht-Wertschöpfer oder Verschwendung.",
                  "Klassifizieren Sie den Abfall anhand der acht Kategorien.",
                  "Messen Sie die Verschwendung in Bezug auf Zeit, Kosten, Entfernung oder Mängel.",
                  "Wählen Sie einen Abfall aus, testen Sie eine kleine Änderung und messen Sie erneut."
                ],
                "where": "In einer Klinik ist das Warten von Patienten Warteverschwendung, der Gang des Personals zu einem entfernten Drucker ist Bewegung, abgelaufene Verbrauchsmaterialien sind Inventar und die erneute Eingabe derselben Daten ist Überverarbeitung. In der IT ist das Warten auf Genehmigungen ein Warten, ungenutzte Entwicklerfähigkeiten sind ungenutztes Talent und wieder geöffnete Tickets sind Mängel. Nutzen Sie die acht Abfälle immer dann, wenn Sie eine schnelle, gemeinsame Sprache für Dinge benötigen, die einen Prozess verlangsamen.",
                "when_not": "Entfernen Sie keine Stufe, nur weil sie wie Verschwendung aussieht. Sicherheitsüberprüfungen, behördliche Überprüfungen und vom Kunden erforderliche Genehmigungen können notwendige, nicht wertschöpfende Arbeiten sein.",
                "common_mistakes": [
                  "Abfallreduzierung mit Personalreduzierung gleichsetzen.",
                  "Vielbeschäftigte Menschen mit wertvoller Arbeit verwechseln.",
                  "Entfernen einer Kontrolle, die einen schwerwiegenden Defekt verhindert."
                ],
                "quick_check": [
                  {
                    "q": "Wofür steht das W in TIMWOODS?",
                    "answer": "Warten.",
                    "explanation": "TIMWOODS: Transport, Inventar, Bewegung, Warten, Überproduktion, Überverarbeitung, Mängel, Fähigkeiten."
                  },
                  {
                    "q": "Jede Stunde läuft eine Krankenschwester 200 Meter, um Vorräte einzusammeln. Welcher Abfall ist das?",
                    "answer": "Bewegung.",
                    "explanation": "Das Gehen selbst stellt für den Patienten keinen Mehrwert dar."
                  },
                  {
                    "q": "Sollen alle nicht wertschöpfenden Arbeitsabfälle beseitigt werden?",
                    "answer": "Nein. Es sind einige nicht wertschöpfende Arbeiten erforderlich, beispielsweise Sicherheits- oder Rechtsprüfungen.",
                    "explanation": "Notwendige, nicht wertschöpfende Arbeiten sollten nach Möglichkeit reduziert und nicht blind eliminiert werden."
                  }
                ],
                "recap": [
                  "Die acht Verschwendungen sind Transport, Inventar, Bewegung, Warten, Überproduktion, Überverarbeitung, Mängel und ungenutzte Fähigkeiten.",
                  "Der Wert wird vom Kunden definiert.",
                  "Es sind einige Arbeiten ohne Mehrwert erforderlich; vorsichtig reduzieren."
                ]
              }
            },
            {
              "id": "W2.2",
              "order": 2,
              "title": "Rollen und Verantwortlichkeiten",
              "objective": "Erklären Sie die Rollen des Weißen, Gelben, Grünen, Schwarzen und Master Black Belt sowie die Sponsorenrolle.",
              "content": {
                "why": "Verbesserungsprojekte geraten ins Stocken, wenn niemand weiß, wer entscheidet, wer die Arbeit erledigt und wem das Ergebnis gehört. Klare Rollen machen aus guten Absichten abgeschlossene Projekte.",
                "what": "Ein Sponsor oder Champion stellt Autorität, Ressourcen und Hilfe beim Abbau von Hindernissen zur Verfügung. Der Prozesseigentümer ist nach dem Projekt Eigentümer des Prozesses und erhält den Gewinn aufrecht. Ein Black Belt leitet hauptberuflich komplexe Projekte und coacht andere. Ein Green Belt leitet nebenberuflich Projekte in seinem eigenen Bereich. Gelb- und Weißgurte beteiligen sich und führen kleine lokale Verbesserungen durch. Ein Master Black Belt regelt den Einsatz und entwickelt Fähigkeiten. Teammitglieder, Fachexperten, Dateneigentümer und Finanzpartner sorgen für Wissen und Validierung.",
                "how": [
                  "Nennen Sie den Sponsor und bestätigen Sie, welche Entscheidungen er treffen kann.",
                  "Identifizieren Sie den Prozessverantwortlichen, der mit der Änderung leben wird.",
                  "Wählen Sie einen Leiter und ein kleines Team mit dem erforderlichen Wissen.",
                  "Vereinbaren Sie Zeitverpflichtungen und Besprechungsrhythmen.",
                  "Schreiben Sie eine einfache RACI: Wer ist verantwortlich, rechenschaftspflichtig, konsultiert und informiert?"
                ],
                "where": "Sorgen Sie bei jedem Projekt für klare Rollenverteilung, insbesondere bei funktionsübergreifenden Projekten. Bei einem Krankenhausentlassungsprojekt könnte der Sponsor der Chief Operating Officer, der Prozessverantwortliche der Stationsleiter, der Leiter eine Green Belt-Krankenschwester und der Datenverantwortliche ein IT-Analyst sein. In einer Bank könnte der Prozessverantwortliche der Betriebsleiter sein und der Finanzpartner validiert den Nutzen.",
                "when_not": "Erstellen Sie nicht für jede Aufgabe eine Rolle und laden Sie nicht jeden zu jedem Meeting ein. Akzeptieren Sie keinen Sponsor, der die Barrieren nicht beseitigen kann, und warten Sie nicht bis zum Ende, um den Prozessverantwortlichen zu identifizieren.",
                "common_mistakes": [
                  "Nur ein Namenssponsor, der nie anwesend ist oder keine Entscheidungen trifft.",
                  "Kein Prozessverantwortlicher, daher verschwindet der Gewinn nach dem Projekt.",
                  "Ein Team, das so groß ist, dass Entscheidungen und Verantwortlichkeit verschwinden."
                ],
                "quick_check": [
                  {
                    "q": "Wem gehört der Prozess nach Abschluss des Verbesserungsprojekts?",
                    "answer": "Der Prozessbesitzer.",
                    "explanation": "Der Prozessverantwortliche hält den neuen Standard aufrecht und überwacht die Leistung."
                  },
                  {
                    "q": "Was ist die Hauptaufgabe eines Projektsponsors?",
                    "answer": "Stellen Sie Autorität und Ressourcen zur Verfügung und helfen Sie, Hindernisse abzubauen.",
                    "explanation": "Der Sponsor ist der Senior-Eigentümer, der das Projekt ermöglicht."
                  },
                  {
                    "q": "Wofür steht RACI?",
                    "answer": "Verantwortlich, rechenschaftspflichtig, konsultiert, informiert.",
                    "explanation": "RACI klärt Entscheidungsrechte und Kommunikation."
                  }
                ],
                "recap": [
                  "Jedes Projekt braucht einen Sponsor, einen Prozessverantwortlichen und eine klare Führung.",
                  "Passen Sie die Gürtelrolle an die Komplexität des Projekts und die Zeitverfügbarkeit an.",
                  "Verwenden Sie RACI, um Entscheidungsrechte explizit zu machen."
                ]
              }
            },
            {
              "id": "W2.3",
              "order": 3,
              "title": "Kultur und Denkweise",
              "objective": "Beschreiben Sie Respekt vor Menschen, datenbasierte Entscheidungen und eine Lernkultur ohne Schuldzuweisungen.",
              "content": {
                "why": "Werkzeuge allein können Veränderungen nicht aufrechterhalten. Menschen halten Veränderungen aufrecht, wenn sie sich sicher fühlen, ihre Stimme zu erheben, den Daten zu vertrauen und zu sehen, wie Führungskräfte das neue Verhalten vorleben.",
                "what": "Kultur ist die Gesamtheit gemeinsamer Überzeugungen und Verhaltensweisen, die die Art und Weise prägen, wie Arbeit erledigt wird. Mindset ist die Art und Weise, wie Menschen Probleme interpretieren und welche Rolle sie bei deren Lösung spielen. Eine Qualitätskultur konzentriert sich auf den Kunden, nutzt Daten statt Schuldzuweisungen, behandelt Probleme als Lerngelegenheiten, respektiert Menschen und erwartet von Führungskräften, dass sie dorthin gehen, wo die Arbeit stattfindet.",
                "how": [
                  "Fragen Sie nach dem Prozess, nicht nach der Person: „Was hat diesen Fehler verursacht?“",
                  "Gehen Sie zur Gemba und beobachten Sie die eigentliche Arbeit.",
                  "Vielen Dank für die Meldung von Problemen und Beinaheunfällen.",
                  "Nutzen Sie Daten, um Annahmen zu testen und Ergebnisse offen zu teilen.",
                  "Machen Sie Verbesserungen zu einem routinemäßigen Bestandteil von Besprechungen und nicht zu einem besonderen Ereignis."
                ],
                "where": "Kultur ist überall wichtig, aber besonders deutlich wird sie im Gesundheitswesen, in der Luftfahrt, in der Fertigung und in der IT, wo Menschen Fehler verbergen, um Schuldzuweisungen zu vermeiden. In einem Krankenhaus kann ein Leiter, der die Meldung von Fehlern belohnt, dafür sorgen, dass die gemeldeten Fehler zunehmen, bevor der Schaden sinkt. Das kann ein Zeichen für verbesserte Sicherheit und nicht für schlechtere Leistung sein.",
                "when_not": "Benutzen Sie „Kultur“ nicht als Entschuldigung für fehlende Daten, unklare Rollen oder schlechtes Prozessdesign. Erzwingen Sie keine positive Einstellung, wenn Menschen berechtigte Sicherheits- oder Ethikbedenken äußern.",
                "common_mistakes": [
                  "Einzelpersonen für in den Prozess eingebaute Probleme verantwortlich machen.",
                  "Einführung von Tools, bevor Vertrauen und psychologische Sicherheit aufgebaut werden.",
                  "Sagen Sie „Wir haben ein Kulturproblem“, ohne das Führungsverhalten zu ändern."
                ],
                "quick_check": [
                  {
                    "q": "Was ist psychologische Sicherheit?",
                    "answer": "Der Glaube, dass man Probleme oder Ideen ungestraft ansprechen kann.",
                    "explanation": "Psychologische Sicherheit unterstützt das Lernen und die frühzeitige Problemerkennung."
                  },
                  {
                    "q": "Ein Leiter fragt: „Was hat diesen Fehler im Prozess verursacht?“ statt „Wer hat das getan?“ Welches Verhalten modelliert die Führungskraft?",
                    "answer": "Eine schuldfreie, prozessorientierte Denkweise.",
                    "explanation": "Die Frage lenkt die Aufmerksamkeit eher auf Systemursachen als auf Einzelpersonen."
                  },
                  {
                    "q": "Warum können gemeldete Fehler zunehmen, nachdem sich die Sicherheitskultur verbessert hat?",
                    "answer": "Menschen fühlen sich sicherer, wenn sie Probleme melden, die zuvor verborgen blieben.",
                    "explanation": "Mehr Berichte können die tatsächliche Fehlerquote aufdecken, bevor sie sinkt."
                  }
                ],
                "recap": [
                  "Kultur wird durch alltägliche Verhaltensweisen geprägt, insbesondere durch das Verhalten von Führungskräften.",
                  "Konzentrieren Sie sich auf den Prozess, nicht auf Schuldzuweisungen, und sorgen Sie dafür, dass Sie Ihre Meinung gefahrlos äußern können.",
                  "Tools funktionieren am besten, wenn Vertrauen und datenbasiertes Lernen an erster Stelle stehen."
                ]
              }
            },
            {
              "id": "W2.4",
              "order": 4,
              "title": "Ihr erstes Verbesserungsprojekt",
              "objective": "Verwenden Sie eine einfache Geschichte im A3-Stil, um eine kleine, sichere Verbesserung zu planen.",
              "content": {
                "why": "Ein kleines erstes Projekt schafft Selbstvertrauen, schafft einen sichtbaren Erfolg und vermittelt die Methode, ohne Sie zu überfordern. Es gibt Ihnen auch Beweise, um andere zu überzeugen.",
                "what": "Ein gutes erstes Projekt hat einen kleinen Umfang, ist messbar, datenreich genug, um es zu studieren, wichtig für den Kunden, liegt in Ihrem Einflussbereich und kann in vier bis acht Wochen abgeschlossen werden. Verwenden Sie DMAIC oder einen einfachen Plan-Do-Check-Act-Zyklus. In einer einseitigen Charta werden Problem, Ziel, Umfang, Team, Metrik und Zeitplan aufgeführt.",
                "how": [
                  "Wählen Sie einen wiederkehrenden Schmerzpunkt in Ihrem eigenen Arbeitsbereich aus.",
                  "Schreiben Sie eine Problemstellung mit Beweisen: Was, wo, wann und wie viel.",
                  "Legen Sie ein messbares Ziel und eine Grundlinie fest.",
                  "Ordnen Sie den Prozess zu und finden Sie eine wahrscheinliche Grundursache.",
                  "Testen Sie eine kleine Änderung, messen Sie das Ergebnis und standardisieren Sie, was funktioniert."
                ],
                "where": "Verwenden Sie diesen Ansatz für die Übergabe eines Support-Tickets, einen Check-in-Schritt in der Klinik, einen Retourenprozess im Einzelhandel oder einen Bericht, der immer zu spät kommt. Beispiel: Ein Support-Team hat 20 % der Tickets erneut geöffnet, weil wichtige Informationen fehlen. Das Team fügt ein erforderliches Feld hinzu, testet es zwei Wochen lang und reduziert die Nacharbeit auf 8 %.",
                "when_not": "Beginnen Sie nicht mit einem politisch sensiblen, funktionsübergreifenden, kapitalintensiven oder schlecht gemessenen Problem. Wählen Sie kein Projekt, bei dem Sie keinen Einfluss auf den Prozess haben oder keinen Zugriff auf Daten haben.",
                "common_mistakes": [
                  "Umfang zu groß für ein erstes Projekt.",
                  "Keine Basislinie, daher kann das Team keine Verbesserung nachweisen.",
                  "Beginnen Sie mit einer Lieblingslösung statt mit einem Problem und Daten."
                ],
                "quick_check": [
                  {
                    "q": "Was macht ein gutes erstes Verbesserungsprojekt aus?",
                    "answer": "Kleiner Umfang, messbar, kundenrelevant und in wenigen Wochen abschließbar.",
                    "explanation": "Ein erstes Projekt sollte klein genug sein, um es abzuschließen und daraus zu lernen."
                  },
                  {
                    "q": "Warum ist eine Grundlinie wichtig?",
                    "answer": "Es zeigt die aktuelle Performance und lässt Sie nachweisen, ob die Änderung funktioniert hat.",
                    "explanation": "Ohne eine Basislinie sind Verbesserungsansprüche nur Meinungen."
                  },
                  {
                    "q": "Was sollten Sie tun, nachdem ein Pilotprojekt erfolgreich war?",
                    "answer": "Standardisieren Sie die Änderung und weisen Sie einen Eigentümer zu, der sie überwacht.",
                    "explanation": "Standardisierung und Eigenverantwortung sorgen dafür, dass der Gewinn dauerhaft bleibt."
                  }
                ],
                "recap": [
                  "Fangen Sie klein an, messen Sie die Grundlinie und sind Sie innerhalb weniger Wochen fertig.",
                  "Verwenden Sie eine Grundursache und eine getestete Änderung anstelle einer umfassenden Neugestaltung.",
                  "Standardisieren Sie den Gewinn und teilen Sie das Ergebnis."
                ]
              }
            }
          ]
        }
      ],
      "coverageChecklist": [
        {
          "topic": "Geschichte (Motorola, GE)",
          "lessons": [
            "W1.1"
          ]
        },
        {
          "topic": "Qualitätsgrundlagen",
          "lessons": [
            "W1.2"
          ]
        },
        {
          "topic": "Kosten für schlechte Qualität",
          "lessons": [
            "W1.2"
          ]
        },
        {
          "topic": "Kunden (VOC, CTQ)",
          "lessons": [
            "W1.3"
          ]
        },
        {
          "topic": "8 Abfälle",
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
          "topic": "Mängel",
          "lessons": [
            "W1.4"
          ]
        },
        {
          "topic": "DMAIC-Übersicht",
          "lessons": [
            "W1.5"
          ]
        },
        {
          "topic": "Rollen",
          "lessons": [
            "W2.2"
          ]
        },
        {
          "topic": "Kultur",
          "lessons": [
            "W2.3"
          ]
        }
      ],
      "project": {
        "title": "Bereinigen Sie eine Kundenübergabe",
        "brief": "Wählen Sie eine Übergabe aus, die Ihnen gehört (z. B. eine Patientenübergabe, eine Auftragsübergabe oder ein Support-Ticket). Zeichnen Sie auf, was passiert, identifizieren Sie zwei Verschwendungen, messen Sie, wie lange die Übergabe dauert, testen Sie eine kleine Änderung und bestätigen Sie das Ergebnis."
      },
      "exam": {
        "questions": 25,
        "passingScore": 80,
        "format": "25 Multiple-Choice-Fragen mit vier Optionen und Erklärungen."
      },
      "cheatSheet": [
        "COPQ = Prävention + Bewertung + interner Fehler + externe Fehlerkosten",
        "VOC = Stimme des Kunden; CTQ = entscheidend für die Qualität, eine messbare Kundenanforderung",
        "DMAIC = Definieren, Messen, Analysieren, Verbessern, Kontrollieren",
        "8 Verschwendungen = Transport, Inventar, Bewegung, Warten, Überproduktion, Überverarbeitung, Mängel, Fähigkeiten"
      ],
      "nextChecklist": [
        "Ich kann Lean vs. Six Sigma jeweils in einem Satz erklären.",
        "Ich kann die DMAIC-Phasen der Reihe nach benennen.",
        "Ich kann in meinem eigenen Arbeitsbereich mindestens drei Abfälle erkennen.",
        "Ich kann erklären, was VOC und CTQ bedeuten."
      ]
    },
    {
      "id": "yellow",
      "name": "Gelber Gürtel",
      "level": 2,
      "color": "yellow",
      "icon": "fa-certificate",
      "lessonTarget": "15-17",
      "studyTime": "15-20 Stunden",
      "audience": "Teammitglieder, Vorgesetzte und Prozessverantwortliche, die Green- und Black Belt-Projekte unterstützen.",
      "prerequisites": "Weißer Gürtel oder gleichwertiges grundlegendes Qualitätsbewusstsein.",
      "previousRecap": "Zusammenfassung des White Belt: Qualität bedeutet, die Anforderungen der Kunden zu erfüllen; Verschwendung und Variation verursachen Mängel und Kosten; DMAIC ist der Verbesserungspfad; Jeder hat eine Rolle.",
      "outcomes": [
        "Bilden Sie einen Prozess mit SIPOC und einer Prozesslandkarte ab",
        "Erstellen Sie eine grundlegende Projektcharta und ein Datenerfassungsblatt",
        "Verwenden Sie Pareto, Fischgrätenmuster, 5-Warum-Diagramme, Kontrollblätter und einfache Diagramme",
        "Tragen Sie zu Brainstorming, 5S und teambasierter Verbesserung bei",
        "Erklären Sie, wie ein Kontrollplan und eine grundlegende Kontrollkarte eine Verbesserung aufrechterhalten"
      ],
      "modules": [
        {
          "id": "yellow-1",
          "number": 1,
          "title": "Prozessdenken",
          "duration": "70 Min",
          "summary": "Betrachten Sie Arbeit als einen Prozess mit Lieferanten, Inputs, Schritten, Outputs und Kunden. Lernen Sie, Prozessgrenzen zu definieren und zu zeichnen, was tatsächlich passiert, und nicht, was die Leute denken, dass es passiert.",
          "lessons": [
            {
              "id": "Y1.1",
              "order": 1,
              "title": "Prozessdenken",
              "objective": "Erklären Sie Inputs, Outputs, Grenzen und den Kunden eines Prozesses.",
              "content": {
                "why": "Arbeit geschieht durch Prozesse, nicht durch isolierte Aufgaben. Wenn Sie den gesamten Prozess betrachten, können Sie herausfinden, wo Wert geschaffen wird, wo es zu Verzögerungen kommt und wo Mängel an die nächste Person weitergegeben werden.",
                "what": "Ein Prozess ist eine Reihe von Schritten, die Inputs in Outputs für einen Kunden umwandeln. Zu den Eingaben gehören Materialien, Informationen, Personen und Energie. Zu den Ergebnissen gehören Produkte, Dienstleistungen und Informationen. Ein Prozess hat Grenzen, Lieferanten, Kunden, Übergaben und normalerweise einen Engpass. Prozessdenken konzentriert sich auf den Fluss und den Kundennutzen und nicht auf Abteilungen oder Einzelpersonen.",
                "how": [
                  "Nennen Sie den Prozess und seinen Zweck in einem Satz.",
                  "Definieren Sie die Start- und Endgrenzen.",
                  "Listen Sie die wichtigsten Ein- und Ausgänge auf.",
                  "Identifizieren Sie die Lieferanten und Kunden, auch interne.",
                  "Gehen Sie den Prozess ab und markieren Sie wertschöpfende Schritte, Übergaben und Verzögerungen.",
                  "Wählen Sie einen Problembereich aus, den Sie mit Daten untersuchen möchten."
                ],
                "where": "Nutzen Sie Prozessdenken überall dort, wo sich die Arbeit wiederholt. Im Gesundheitswesen begleiten Sie einen Patienten von der Aufnahme bis zur Entlassung. Verfolgen Sie im Einzelhandel eine Bestellung vom Klick bis zur Lieferung. Verfolgen Sie in der IT einen Vorfall von der Meldung bis zur Lösung. Verfolgen Sie im Bankwesen einen Kredit von der Beantragung bis zur Finanzierung. Im Bildungsbereich begleiten Sie einen Studenten von der Bewerbung bis zur Einschreibung.",
                "when_not": "Verwenden Sie Prozessdenken nicht für eine einmalige, einzigartige Aufgabe ohne wiederholbare Schritte. Planen Sie nicht auf einem so niedrigen Niveau, dass das Team in Details untergeht und den Blick auf den Kunden verliert.",
                "common_mistakes": [
                  "Abbildung des idealen Prozesses statt des realen.",
                  "Ignorieren von Übergaben, bei denen es häufig zu Verzögerungen und Fehlern kommt.",
                  "Grenzen so weit setzen, dass das Projekt nicht abgeschlossen werden kann."
                ],
                "quick_check": [
                  {
                    "q": "Was sind die drei grundlegenden Teile eines Prozesses?",
                    "answer": "Inputs, Prozessschritte und Outputs.",
                    "explanation": "Ein Prozess wandelt Inputs in Outputs für einen Kunden um."
                  },
                  {
                    "q": "Warum sind Übergaben im Prozessdenken wichtig?",
                    "answer": "Dies sind häufige Punkte, an denen es zu Verzögerungen, Fehlern und Informationsverlusten kommt.",
                    "explanation": "Oftmals wartet Arbeit oder wechselt an Abteilungsgrenzen den Besitzer."
                  },
                  {
                    "q": "Ein Team bildet einen Prozess vom ersten Kundenkontakt bis zur endgültigen Rechnung ab. Was haben sie definiert?",
                    "answer": "Die Prozessgrenzen.",
                    "explanation": "Grenzen geben an, wo der Prozess beginnt und endet."
                  }
                ],
                "recap": [
                  "Ein Prozess wandelt Inputs in Outputs für einen Kunden um.",
                  "Grenzen, Lieferanten, Kunden und Übergaben definieren die Prozessansicht.",
                  "Bilden Sie den realen Prozess ab, nicht den idealen."
                ]
              }
            },
            {
              "id": "Y1.2",
              "order": 2,
              "title": "SIPOC",
              "objective": "Erstellen Sie ein Lieferanten-, Input-, Prozess-, Output- und Kundendiagramm.",
              "content": {
                "why": "SIPOC bietet einem Team eine einseitige Ansicht eines Prozesses und seiner Grenzen vor der detaillierten Zuordnung. Es stimmt alle Beteiligten auf den Umfang ab und verhindert, dass das Projekt ins Wanken gerät.",
                "what": "SIPOC steht für Lieferanten, Inputs, Prozesse, Outputs und Kunden. Lieferanten liefern die Inputs. Der Prozess wandelt diese Eingaben in vier bis sieben Schritten auf hoher Ebene um. Die Ausgaben gehen an Kunden, die sowohl intern als auch extern sein können. SIPOC ist ein Tool zur Festlegung des Umfangs und kein detailliertes Flussdiagramm.",
                "how": [
                  "Schreiben Sie den Prozessnamen und den Zweck.",
                  "Definieren Sie den Start- und Endpunkt.",
                  "Listen Sie die Ergebnisse und die Kunden auf, die sie erhalten.",
                  "Listen Sie die Inputs und die Lieferanten auf, die sie bereitstellen.",
                  "Beschreiben Sie den Prozess der Reihe nach in vier bis sieben übergeordneten Schritten.",
                  "Gehen Sie das Diagramm mit dem Prozessverantwortlichen und den Mitarbeitern an der Front durch."
                ],
                "where": "Nutzen Sie SIPOC zu Beginn eines DMAIC-Projekts, in einem Scoping-Workshop oder immer dann, wenn mehrere Abteilungen eine gemeinsame Sicht benötigen. Bei der Patientenentlassung könnten die Apotheken, das Labor und das Stationspersonal als Lieferanten fungieren. Eingaben sind Medikamente, Testergebnisse und Entlassungskriterien; Ergebnisse sind der Entlassungsbericht, die Medikamente und der Nachsorgetermin; Zu den Kunden zählen der Patient, die Familie und der Erstversorger.",
                "when_not": "Verwenden Sie SIPOC nicht für eine detaillierte Ursachenanalyse; Verwenden Sie eine Prozesslandkarte, Fishbone oder 5 Whys. Listen Sie nicht jeden Mikroschritt auf, sonst verlieren Sie den Überblick.",
                "common_mistakes": [
                  "Umwandlung der Prozessspalte in ein detailliertes Flussdiagramm.",
                  "Verwirrung interner und externer Kunden.",
                  "Erstellen Sie das SIPOC alleine und validieren Sie es nie mit den Leuten, die die Arbeit machen."
                ],
                "quick_check": [
                  {
                    "q": "Wofür steht SIPOC?",
                    "answer": "Lieferanten, Inputs, Prozesse, Outputs, Kunden.",
                    "explanation": "SIPOC ist ein High-Level-Prozess-Scoping-Tool."
                  },
                  {
                    "q": "Wie viele Prozessschritte sollte ein SIPOC normalerweise anzeigen?",
                    "answer": "Vier bis sieben Stufen auf hoher Ebene.",
                    "explanation": "SIPOC bleibt auf hohem Niveau; Zu viele Details machen seinen Zweck zunichte."
                  },
                  {
                    "q": "Wer sind Kunden in einem SIPOC?",
                    "answer": "Die Personen oder Gruppen, die die internen oder externen Prozessergebnisse erhalten.",
                    "explanation": "Kunden können außerhalb der Organisation oder in der nächsten Abteilung sein."
                  }
                ],
                "recap": [
                  "SIPOC fasst Lieferanten, Inputs, Prozesse, Outputs und Kunden zusammen.",
                  "Verwenden Sie vier bis sieben übergeordnete Schritte und klare Grenzen.",
                  "Validieren Sie das SIPOC mit dem Prozessverantwortlichen und den Mitarbeitern an der Front."
                ]
              }
            },
            {
              "id": "Y1.3",
              "order": 3,
              "title": "Prozessabbildung",
              "objective": "Erstellen Sie einen Swimlane oder ein Flussdiagramm und kennzeichnen Sie Übergaben und Entscheidungspunkte.",
              "content": {
                "why": "Eine Prozesslandkarte zeigt, wie die Arbeit tatsächlich abläuft, einschließlich Entscheidungen, Übergaben und Nacharbeitsschleifen. Es macht Verzögerungen und Fehlerquellen sichtbar, sodass das Team diese gezielt angehen kann.",
                "what": "Ein Flussdiagramm verwendet Standardsymbole: ein Oval für Anfang und Ende, ein Rechteck für einen Prozessschritt, eine Raute für eine Entscheidung und ein D für Verzögerung. Eine Swimlane-Karte fügt Bahnen für jede Person oder Abteilung hinzu, sodass Übergaben offensichtlich sind. Eine Übergabe ist jede Übertragung von Arbeit zwischen Personen oder Gruppen. Nacharbeitsschleifen zeigen, wo die Arbeit rückwärts geht.",
                "how": [
                  "Definieren Sie den Beginn und das Ende des Prozesses.",
                  "Gehen Sie den Prozess durch und listen Sie die Schritte in der Reihenfolge auf, in der sie tatsächlich ausgeführt werden.",
                  "Weisen Sie jeden Schritt einer Swimlane für die Person oder Abteilung zu, die ihn ausführt.",
                  "Fügen Sie Entscheidungspunkte, Übergaben, Verzögerungen und Nacharbeitsschleifen hinzu.",
                  "Validieren Sie die Karte mit dem Personal an der Front.",
                  "Markieren Sie die Schritte, die einen Mehrwert schaffen, und diejenigen, die Verschwendung erzeugen."
                ],
                "where": "Verwenden Sie Prozesskarten für alle wiederkehrenden Prozesse mit Verzögerungen, Fehlern oder unklaren Verantwortlichkeiten. In einem Support-Center bewegt sich ein Ticket vom Kunden zur Triage, zum Auftrag, zur Untersuchung und zur Lösung. Die Übergabe von Ebene eins an Ebene zwei führt häufig zu Wartezeiten, und fehlende Informationen führen zu einer Nacharbeitsschleife. Im Gesundheitswesen können Sie eine Patientenverlegung von der Notaufnahme auf eine Station abbilden, um Wartezeiten zu sehen und doppelte Dateneingaben vorzunehmen.",
                "when_not": "Verbringen Sie keine Wochen damit, einen Prozess abzubilden, der ersetzt werden soll. Erstellen Sie keine detaillierte Karte, wenn das Team nur einen übergeordneten Bereich benötigt. Verwenden Sie stattdessen SIPOC.",
                "common_mistakes": [
                  "Abbildung des offiziellen Prozesses statt des echten.",
                  "Übergaben und Nacharbeitsschleifen entfallen.",
                  "Mapping auf einer Ebene, die die Projektfrage nicht beantwortet."
                ],
                "quick_check": [
                  {
                    "q": "Was stellt ein Diamantsymbol in einem Flussdiagramm dar?",
                    "answer": "Ein Entscheidungspunkt.",
                    "explanation": "Rauten zeigen an, wo der Prozess basierend auf einer Bedingung verzweigt."
                  },
                  {
                    "q": "Was ist eine Übergabe?",
                    "answer": "Eine Übertragung von Arbeit von einer Person oder Gruppe auf eine andere.",
                    "explanation": "Übergaben sind häufige Ursachen für Verzögerungen und Informationsverluste."
                  },
                  {
                    "q": "Warum Swimlanes verwenden?",
                    "answer": "Um zu zeigen, wer die einzelnen Schritte ausführt, und um Übergaben sichtbar zu machen.",
                    "explanation": "Swimlanes organisieren Schritte nach Rolle oder Abteilung."
                  }
                ],
                "recap": [
                  "Prozesskarten zeigen den tatsächlichen Ablauf, einschließlich Entscheidungen, Übergaben und Nacharbeiten.",
                  "Swimlanes klären die Eigentumsverhältnisse und decken Übergabeverzögerungen auf.",
                  "Validieren Sie die Karte mit den Leuten, die die Arbeit erledigen."
                ]
              }
            }
          ]
        },
        {
          "id": "yellow-2",
          "number": 2,
          "title": "DMAIC, Charters und Kontrolle",
          "duration": "90 Min",
          "summary": "Gehen Sie tiefer in DMAIC ein und lernen Sie die grundlegenden Fragen der Charta kennen: Warum das Projekt existiert, was es umfasst, wie der Erfolg gemessen wird und wer dafür verantwortlich ist. Beenden Sie die Kontrollphase, damit der Gewinn auch nach Abschluss des Projekts erhalten bleibt.",
          "lessons": [
            {
              "id": "Y2.1",
              "order": 1,
              "title": "DMAIC im Detail",
              "objective": "Listen Sie die wichtigsten Aktivitäten und Ergebnisse jeder DMAIC-Phase auf.",
              "content": {
                "why": "Yellow Belts müssen wissen, was in jeder DMAIC-Phase passiert und welche Ergebnisse erwartet werden. Dieses Wissen hilft Ihnen, nützliche Arbeit zu leisten und verhindert, dass das Team kritische Schritte überspringt.",
                "what": "Define erstellt die Charta, Kundenanforderungen, SIPOC, Team, Problem und Ziel. Measure erstellt einen Datenerfassungsplan, Basisdaten und eine grundlegende Überprüfung der Messqualität. Analyze erstellt Prozesskarten, Ursachentools, Diagramme und validierte Ursachen. Improve erstellt getestete Lösungen, ein Pilotprojekt und einen Implementierungsplan. Die Kontrolle erstellt einen Kontrollplan, Standardarbeit, Überwachung und einen Reaktionsplan.",
                "how": [
                  "Vervollständigen Sie die wichtigsten Ergebnisse für die aktuelle Phase.",
                  "Überprüfen Sie die Ergebnisse mit dem Sponsor und Prozessverantwortlichen.",
                  "Führen Sie eine Gate-Überprüfung durch und entscheiden Sie, ob Sie fortfahren möchten.",
                  "Dokumentieren Sie Entscheidungen, Risiken und offene Maßnahmen.",
                  "Übernehmen Sie die genehmigte Ausgabe in die nächste Phase."
                ],
                "where": "Verwenden Sie DMAIC zur Verbesserung eines bestehenden Prozesses. Ein Labor mit verspäteten Berichten definiert das Problem und das Ziel, misst den Ausgangswert, analysiert die Abholung und Stapelverarbeitung durch den Kurier, verbessert mit einem Barcode-Scan und kontrolliert mit einem Tagesdiagramm und einem Eigentümer. Verwenden Sie die gleiche Phasenlogik im Bankwesen, im Einzelhandel, in der Fertigung, in der IT und im Bildungswesen.",
                "when_not": "Verwenden Sie DMAIC nicht, um einen völlig neuen Prozess zu entwerfen; Verwenden Sie DMADV. Führen Sie kein vollständiges DMAIC-Projekt aus, um eine einfache, offensichtliche Lösung zu finden. Verwenden Sie eine schnelle PDCA oder Kaizen. Bei einem dringenden Sicherheitsproblem dämmen Sie zunächst das Problem ein.",
                "common_mistakes": [
                  "Überspringen von „Messen“ und Springen von „Definieren“ zu „Analysieren“.",
                  "Analysieren als eine Debatte über Meinungen statt über Beweise.",
                  "Abschluss des Projekts ohne Kontrollplan und Prozessverantwortlichen."
                ],
                "quick_check": [
                  {
                    "q": "Welche DMAIC-Phase erzeugt die Basislinie?",
                    "answer": "Messen.",
                    "explanation": "Measure definiert die Metrik und sammelt Basisdaten."
                  },
                  {
                    "q": "Was ist eine Gate-Bewertung?",
                    "answer": "Ein Kontrollpunkt, an dem das Team und der Sponsor entscheiden, ob die Phase abgeschlossen ist und das Projekt fortgesetzt werden soll.",
                    "explanation": "Gate-Reviews verhindern, dass schwache Arbeiten vorankommen."
                  },
                  {
                    "q": "Welche Phase beweist, dass eine Lösung funktioniert hat?",
                    "answer": "Verbessern Sie, mit einer Pilot- und Vorher-Nachher-Messung.",
                    "explanation": "Verbessern testet die Änderung; Die Kontrolle hält es dann aufrecht."
                  }
                ],
                "recap": [
                  "Jede DMAIC-Phase umfasst spezifische Ergebnisse und eine Gate-Überprüfung.",
                  "Durch Messen und Analysieren bleibt das Projekt evidenzbasiert.",
                  "Um die Verbesserung dauerhaft zu machen, ist Kontrolle erforderlich."
                ]
              }
            },
            {
              "id": "Y2.2",
              "order": 2,
              "title": "Grundlagen der Projektcharta",
              "objective": "Schreiben Sie eine Problembeschreibung, ein Ziel, einen Umfang, ein Team und einen Meilensteinplan.",
              "content": {
                "why": "Eine Projektcharta ist der Vertrag zwischen dem Team und dem Sponsor. Es verhindert eine Ausweitung des Handlungsspielraums, klärt die Verantwortlichkeiten und gibt allen eine gemeinsame Definition von Erfolg.",
                "what": "Eine Charta umfasst den Business Case, eine Problemstellung, ein messbares Ziel, innerhalb und außerhalb des Geltungsbereichs liegende Grenzen, Teamrollen, Meilensteine, Metriken, Einschränkungen, Annahmen und Genehmigungen. Eine gute Problemstellung beschreibt, was, wo, wann und wie viel, ohne eine Ursache oder eine Lösung zu nennen. Ein gutes Ziel ist spezifisch, messbar, erreichbar, relevant und terminiert.",
                "how": [
                  "Schreiben Sie die Problemstellung mit Basisbeweisen.",
                  "Schreiben Sie ein messbares Ziel und ein Zieldatum.",
                  "Definieren Sie, was im Geltungsbereich liegt und was explizit außerhalb des Geltungsbereichs liegt.",
                  "Nennen Sie den Sponsor, den Prozessverantwortlichen, den Teamleiter und die Teammitglieder.",
                  "Legen Sie Meilensteine ​​für jede DMAIC-Phase fest.",
                  "Definieren Sie die primäre Metrik und holen Sie sich die Zustimmung des Sponsors."
                ],
                "where": "Verwenden Sie eine Charta für jedes Verbesserungsprojekt, insbesondere für funktionsübergreifende. Beispiel: „Zwanzig Prozent der Support-Tickets werden erneut geöffnet, weil erforderliche Informationen fehlen.“ Das Ziel könnte darin bestehen, die Wiedereröffnungsrate in acht Wochen auf unter 8 % zu senken. Der Geltungsbereich ist das Ticketannahmeformular; Ein Austausch des CRM-Systems liegt außerhalb des Rahmens.",
                "when_not": "Erstellen Sie keinen vollständigen Auftrag für eine kleine Reparatur, die eine Stunde dauert; Verwenden Sie eine einfache Aufgabenliste. Lassen Sie nicht zu, dass die Charta zu einem Dokument wird, das nur einmal geschrieben und nie wieder gelesen wird.",
                "common_mistakes": [
                  "Eine vage Problemaussage wie „Tickets sind schlecht.“",
                  "Einfügen einer bevorzugten Lösung in die Problemstellung.",
                  "Keine Baseline, keine Metrik oder kein benannter Prozessinhaber."
                ],
                "quick_check": [
                  {
                    "q": "Was sollte eine Problemstellung beinhalten?",
                    "answer": "Was, wo, wann und wie viel, mit Beweisen.",
                    "explanation": "Eine Problemstellung beschreibt die Lücke, nicht die Ursache oder Lösung."
                  },
                  {
                    "q": "Warum Elemente außerhalb des Geltungsbereichs definieren?",
                    "answer": "Um eine Ausweitung des Projektumfangs zu verhindern und das Projekt fokussiert zu halten.",
                    "explanation": "Explizite Grenzen helfen dem Team, Nein zu nicht zusammenhängender Arbeit zu sagen."
                  },
                  {
                    "q": "Wer sollte die Charta genehmigen?",
                    "answer": "Der Sponsor, mit Input vom Prozessverantwortlichen.",
                    "explanation": "Die Zustimmung des Sponsors bestätigt Autorität, Ressourcen und Erwartungen."
                  }
                ],
                "recap": [
                  "Eine Charta definiert das Problem, das Ziel, den Umfang, das Team, die Kennzahlen und die Meilensteine.",
                  "Halten Sie Ursachen und Lösungen aus der Problemstellung heraus.",
                  "Holen Sie sich die Zustimmung des Sponsors und sehen Sie sich die Charta bei den Gate-Bewertungen noch einmal an."
                ]
              }
            },
            {
              "id": "Y2.3",
              "order": 3,
              "title": "Kontrollpläne und grundlegende SPC",
              "objective": "Erstellen Sie einen Kontrollplan und lesen Sie ein grundlegendes Kontrolldiagramm, damit die Verbesserung nachhaltig ist.",
              "content": {
                "why": "Verbesserungen verfallen, wenn alle zum Alten zurückkehren. Die Kontrollphase schützt den Gewinn, indem sie die neue Methode sichtbar, messbar, verständlich und einfach zu befolgen macht. Ein Kontrollplan und ein einfaches Kontrolldiagramm sagen dem Prozessverantwortlichen, wann er handeln und wann er den Prozess in Ruhe lassen sollte.",
                "what": "Ein Kontrollplan ist eine einseitige Vereinbarung, die die Metrik, das Ziel oder die Spezifikation benennt, wie und wie oft sie gemessen wird, wem sie gehört und was zu tun ist, wenn sie außerhalb des Bereichs liegt. Ein Kontrolldiagramm stellt die Metrik über die Zeit mit einer Mittellinie und Grenzwerten dar, sodass das Team normale Abweichungen von einem echten Signal trennen kann. Für kontinuierliche Daten ist ein I-MR-Diagramm (Individuals and Moving Range) ein üblicher Ausgangspunkt; Für Fehler- oder Bestanden/Nicht bestanden-Zählungen ist ein p- oder c-Diagramm geeignet. Standardarbeit, visuelles Management und Fehlervermeidung (Poka-Yoke) unterstützen den Plan, indem sie die richtige Methode zur einfachen Methode machen.",
                "how": [
                  "Vereinbaren Sie eine primäre Metrik und deren Ziel oder Spezifikation.",
                  "Definieren Sie die Messmethode, die Stichprobengröße, die Häufigkeit und den Dateneigentümer.",
                  "Zeichnen Sie ein Lauf- oder Kontrolldiagramm und berechnen Sie die Grenzwerte erst, wenn der Prozess stabil ist.",
                  "Schreiben Sie einen Reaktionsplan, der besagt, wer was tut, wenn ein Signal erscheint.",
                  "Aktualisieren Sie Standardarbeit, Schulung und visuelle Kontrollen, um sie an die neue Methode anzupassen.",
                  "Übergeben Sie den Plan an den Prozessverantwortlichen und überprüfen Sie ihn in einem festgelegten Rhythmus."
                ],
                "where": "Verwenden Sie Kontrollpläne nach jeder Verbesserung, nicht nur in der Fertigung. Beispiel: Eine Klinik reduziert das Nichterscheinen von Terminen durch Erinnerungsanrufe. Der Kontrollplan verfolgt wöchentlich die Nichterscheinen-Rate, benennt den Rezeptionsleiter als Eigentümer und erfordert eine Besprechung, wenn die Zahl zweiwöchentlich 8 % übersteigt. Ein Softwareteam verfolgt entgangene Fehler pro Release in einem p-Diagramm und überprüft die Regel, wenn ein Signal auftritt. In einer Fabrik zeigt ein I-MR-Diagramm des Füllvolumens, wann der Füller angepasst werden muss.",
                "when_not": "Berechnen Sie keine Kontrollgrenzen aus einem instabilen Prozess oder aus gemischten Produkten und Schichten. zunächst schichten und stabilisieren. Machen Sie den Kontrollplan nicht zu einem langen Ordner, den niemand liest. Reagieren Sie nicht auf jeden Punkt; Verwenden Sie die Diagrammregeln. Erstellen Sie keinen Kontrollplan ohne einen benannten Eigentümer und einen Reaktionsplan.",
                "common_mistakes": [
                  "Kein benannter Prozessverantwortlicher oder kein Reaktionsplan.",
                  "Messung einer anderen Kennzahl als der, die das Projekt verbessert hat.",
                  "Die Kontrollgrenzen werden jedes Mal neu berechnet, wenn ein Punkt schlecht aussieht.",
                  "Abweichungen aufgrund gemeinsamer Ursachen werden als Sonderursachen behandelt und übermäßig angepasst.",
                  "Belassen Sie den Kontrollplan in der Projektdatei statt beim Prozess."
                ],
                "quick_check": [
                  {
                    "q": "Was gehört in einen Kontrollplan?",
                    "answer": "Die Metrik, das Ziel oder die Spezifikation, die Messmethode, die Häufigkeit, der Eigentümer und der Reaktionsplan.",
                    "explanation": "Ein Kontrollplan macht Überwachung und Reaktion explizit."
                  },
                  {
                    "q": "Warum sollten Kontrollgrenzen warten, bis der Prozess stabil ist?",
                    "answer": "Grenzwerte eines instabilen Prozesses beschreiben die Instabilität, nicht die normale Variation.",
                    "explanation": "Zuerst stabilisieren und schichten, dann Grenzen setzen."
                  },
                  {
                    "q": "Was ist der Zweck eines Reaktionsplans?",
                    "answer": "Es teilt dem Eigentümer mit, was er überprüfen und tun muss, wenn das Diagramm eine Änderung signalisiert.",
                    "explanation": "Ein Signal ohne Antwort hält die Verstärkung nicht aufrecht."
                  }
                ],
                "recap": [
                  "Kontrollpläne benennen die Metrik, Methode, Häufigkeit, Eigentümer und Reaktionsplan.",
                  "Regelkarten trennen normale Abweichungen von realen Signalen.",
                  "Standardarbeit und Fehlersicherheit sorgen dafür, dass die neue Methode Bestand hat."
                ]
              }
            }
          ]
        },
        {
          "id": "yellow-3",
          "number": 3,
          "title": "Daten und Basisdiagramme",
          "duration": "90 Min",
          "summary": "Sammeln Sie vertrauenswürdige Daten und zeigen Sie diese ehrlich an. Üben Sie Prüfblätter, Laufdiagramme, Histogramme, Balkendiagramme und Pareto-Analysen.",
          "lessons": [
            {
              "id": "Y3.1",
              "order": 1,
              "title": "Datentypen",
              "objective": "Unterscheiden Sie zwischen kontinuierlichen und diskreten Daten und wählen Sie eine geeignete Zusammenfassung.",
              "content": {
                "why": "Die Art der Daten bestimmt, welche Zusammenfassungen, Diagramme und Tests gültig sind. Die Behandlung kategorialer Daten als kontinuierliche oder gemittelte Bezeichnungen führt zu falschen Schlussfolgerungen.",
                "what": "Kontinuierliche Daten können jeden beliebigen Wert in einem Bereich annehmen und werden gemessen: Zeit, Gewicht, Länge, Temperatur oder Kosten. Diskrete Daten zählen Kategorien oder Vorkommnisse: bestanden oder nicht bestanden, Fehlertyp, Anzahl der Beschwerden oder Anzahl der Patienten. Diskrete Daten können binär, gezählt oder ordinal sein. Kontinuierliche Daten werden mit Mittelwert, Median, Standardabweichung und Bereich zusammengefasst; Diskrete Daten werden mit Anzahl, Anteilen, Prozentsätzen und dem Modus zusammengefasst.",
                "how": [
                  "Geben Sie die Frage an, die Sie beantworten müssen.",
                  "Identifizieren Sie, ob die Daten kontinuierlich oder diskret sind.",
                  "Wählen Sie eine Zusammenfassung, die zum Datentyp passt.",
                  "Prüfen Sie, wie die Daten erfasst und überprüft werden.",
                  "Zeichnen Sie ein Diagramm, das der Frage und dem Datentyp entspricht."
                ],
                "where": "In der Fertigung ist der Durchmesser kontinuierlich, während die Fehlerart diskret ist. Im Gesundheitswesen ist die Aufenthaltsdauer kontinuierlich, während die Wiederaufnahme mit „Ja“ oder „Nein“ diskret erfolgt. Im Einzelhandel ist der Bestellwert kontinuierlich, während der Rückgabegrund kategorisch ist. In der IT ist die Reaktionszeit kontinuierlich, während der Schweregrad ordinal ist. Verwenden Sie den Datentyp, um Zusammenfassungen auszuwählen, bevor Sie ein Diagrammtool öffnen.",
                "when_not": "Berechnen Sie nicht den Mittelwert von Kategoriebezeichnungen wie Farbe oder Abteilung. Verwenden Sie kein Histogramm für Kategorien. Wandeln Sie kontinuierliche Daten nicht zu früh in „Gut“ oder „Nicht bestanden“ um, da Sie sonst die Möglichkeit verlieren, Abweichungen zu erkennen.",
                "common_mistakes": [
                  "Kategorien mitteln und eine bedeutungslose Zahl melden.",
                  "Verwenden eines Diagramms, das nicht zum Datentyp passt.",
                  "Mischen von Einheiten oder Zeiträumen in derselben Zusammenfassung."
                ],
                "quick_check": [
                  {
                    "q": "Was sind kontinuierliche Daten?",
                    "answer": "Zeit, ein Ticket zu lösen.",
                    "explanation": "Die Zeit wird kontinuierlich gemessen."
                  },
                  {
                    "q": "Eine Umfrage erfasst die Zufriedenheit als schlecht, mittelmäßig oder gut. Um welche Art von Daten handelt es sich?",
                    "answer": "Ordinale kategoriale Daten.",
                    "explanation": "Die Kategorien haben eine Reihenfolge, aber der Abstand zwischen ihnen ist keine gemessene Größe."
                  },
                  {
                    "q": "Was ist eine gute Zusammenfassung für Fehlertypen?",
                    "answer": "Zählungen oder Prozentsätze nach Kategorie, angezeigt in einem Balkendiagramm oder Pareto.",
                    "explanation": "Kategoriale Daten werden nach Häufigkeit zusammengefasst."
                  }
                ],
                "recap": [
                  "Kontinuierliche Daten werden gemessen; Diskrete Daten werden gezählt oder kategorisiert.",
                  "Passen Sie die Zusammenfassung und das Diagramm an den Datentyp an.",
                  "Mitteln Sie Beschriftungen nicht und blenden Sie kontinuierliche Variationen nicht zu früh aus."
                ]
              }
            },
            {
              "id": "Y3.2",
              "order": 2,
              "title": "Scheckblätter",
              "objective": "Entwerfen Sie ein einfaches Formular, das die Aufzeichnung und Überprüfung von Daten erleichtert.",
              "content": {
                "why": "Gute Daten beginnen mit einer guten Aufzeichnung. Ein Prüfblatt sorgt für eine konsistente Erfassung, reduziert Fehler und erleichtert die Überprüfung bei der späteren Überprüfung der Daten.",
                "what": "Ein Kontrollblatt ist ein strukturiertes Formular zur Erfassung von Daten in Echtzeit. Es definiert, was wann, wo, wer und wie aufgezeichnet werden soll. Zu den gängigen Typen gehören Zähllisten für Fehlertypen, Standortblätter, Häufigkeitsblätter und einfache Checklisten. Ein nützliches Prüfblatt ist kurz, eindeutig und enthält Datum, Uhrzeit, Schicht, Sammler, Prozess und klare Definitionen für jede Kategorie.",
                "how": [
                  "Definieren Sie die Frage und die zur Beantwortung erforderlichen Daten.",
                  "Listen Sie die Kategorien oder Spalten auf.",
                  "Schreiben Sie für jede Kategorie eine klare Definition und ein Beispiel.",
                  "Fügen Sie Datums-, Uhrzeit-, Schicht-, Sammler- und Prozessfelder hinzu.",
                  "Testen Sie das Formular mit einigen Benutzern und überarbeiten Sie es.",
                  "Überprüfen Sie Einträge täglich und klären Sie unklare Datensätze schnell."
                ],
                "where": "Verwenden Sie Prüfblätter für die Anzahl der Mängel in der Fertigung, Wartezeiten im Gesundheitswesen, Rückgabegründe im Einzelhandel, Ticketkategorien in der IT und verspätete Einreichungen im Bildungswesen. Sie sind besonders nützlich, wenn vielbeschäftigte Mitarbeiter an vorderster Front Daten während der Arbeit und nicht erst danach aufzeichnen müssen.",
                "when_not": "Verwenden Sie kein Prüfblatt für Daten, die bereits zuverlässig in einem System vorhanden sind. Erstellen Sie kein Formular mit fünfzig Spalten, das niemand ausfüllen kann. Sammeln Sie keine Daten ohne Definitionen, da verschiedene Personen dasselbe Ereignis unterschiedlich aufzeichnen.",
                "common_mistakes": [
                  "Kategorien, die sich überschneiden oder sich nicht gegenseitig ausschließen.",
                  "Keine Definitionen, daher interpretieren Sammler Kategorien unterschiedlich.",
                  "Ein Formular, das so komplex ist, dass Menschen Felder überspringen oder Verknüpfungen erfinden."
                ],
                "quick_check": [
                  {
                    "q": "Was ist der Hauptzweck eines Scheckblatts?",
                    "answer": "Daten konsistent in Echtzeit aufzeichnen.",
                    "explanation": "Ein Standardformular reduziert Abweichungen und Fehler bei der Datenerfassung."
                  },
                  {
                    "q": "Was sollte jedes Scheckblatt enthalten?",
                    "answer": "Klare Kategorien, Definitionen, Datum und Uhrzeit, Sammler und Prozess.",
                    "explanation": "Diese Felder machen die Daten nachvollziehbar und überprüfbar."
                  },
                  {
                    "q": "Ein Team stellt fest, dass 30 % der Fehlereinträge im Bereich „Sonstige“ liegen. Was sollen sie tun?",
                    "answer": "Überprüfen Sie die „anderen“ Kommentare und verfeinern Sie die Kategorien.",
                    "explanation": "Eine große „Sonstige“-Kategorie bedeutet normalerweise, dass Kategorien fehlen oder unklar sind."
                  }
                ],
                "recap": [
                  "Prüfblätter standardisieren die Datenerfassung in Echtzeit.",
                  "Halten Sie das Formular einfach, definieren Sie jede Kategorie und steuern Sie es.",
                  "Überprüfen Sie die Daten täglich und verfeinern Sie die Kategorien, wenn „Sonstige“ zunimmt."
                ]
              }
            },
            {
              "id": "Y3.3",
              "order": 3,
              "title": "Grundlegende Diagramme",
              "objective": "Wählen und interpretieren Sie Laufdiagramme, Histogramme und Balkendiagramme.",
              "content": {
                "why": "Diagramme offenbaren Muster, die Tabellen verbergen. Das richtige Diagramm hilft einem Team, Variationen, Verteilungen und Prioritäten schnell zu erkennen, ohne es in die Irre zu führen.",
                "what": "Ein Laufdiagramm stellt Daten in zeitlicher Reihenfolge mit einer Mittellinie dar und zeigt Trends, Verschiebungen, Zyklen und Ausreißer an. Ein Histogramm gruppiert kontinuierliche Daten in Abschnitte und zeigt Form, Mitte, Streuung, Lücken und Ausreißer. Ein Balkendiagramm vergleicht Anzahlen oder Werte über Kategorien hinweg. Wählen Sie nach Frage: Für den Zeittrend wird ein Laufdiagramm verwendet, für die Verteilung ein Histogramm und für den Kategorievergleich ein Balkendiagramm.",
                "how": [
                  "Geben Sie die Frage an, die das Diagramm beantworten soll.",
                  "Identifizieren Sie den Datentyp.",
                  "Wählen Sie das passende Diagramm.",
                  "Beschriften Sie beide Achsen, Einheiten und Zeitraum.",
                  "Zeichnen Sie alle Daten in der richtigen Reihenfolge auf.",
                  "Suchen Sie nach Mustern und vergleichen Sie diese mit Prozesswissen."
                ],
                "where": "Verwenden Sie Laufdiagramme für tägliche Fehler, Wartezeiten, Verkäufe oder Reaktionszeiten. Verwenden Sie Histogramme für Lieferzeiten, Patientenaufenthaltsdauer oder Anrufdauer. Nutzen Sie Balkendiagramme für Reklamationsgründe, Fehlerarten oder regionale Vergleiche. Ein Laufdiagramm kann eine Verschiebung nach einem neuen Prozess aufzeigen; Ein Histogramm kann zwei Spitzen aus zwei Schichten erkennen lassen.",
                "when_not": "Verwenden Sie kein Histogramm für kategoriale Daten. Verwenden Sie kein Balkendiagramm für einen Zeittrend, es sei denn, die Zeit ist wirklich kategorisch. Verwenden Sie kein Laufdiagramm für ungeordnete Kategorien und vermeiden Sie 3D- oder Kreisdiagramme, wenn es auf einen präzisen Vergleich ankommt.",
                "common_mistakes": [
                  "Auswahl eines Diagramms, das nicht zum Datentyp passt.",
                  "Eine Achse kürzen, damit kleine Unterschiede groß erscheinen.",
                  "Zu viele Kategorien in ein Diagramm packen."
                ],
                "quick_check": [
                  {
                    "q": "Welches Diagramm zeigt am besten einen Trend im Zeitverlauf?",
                    "answer": "Ein Laufdiagramm.",
                    "explanation": "Führen Sie Diagramme aus, in denen Daten in zeitlicher Reihenfolge mit einer Mittellinie dargestellt werden."
                  },
                  {
                    "q": "Welches Diagramm zeigt die Verteilung kontinuierlicher Daten am besten?",
                    "answer": "Ein Histogramm.",
                    "explanation": "Histogramme gruppieren kontinuierliche Werte in Bins."
                  },
                  {
                    "q": "Welches Diagramm vergleicht die Anzahl der Beschwerden nach Kategorie am besten?",
                    "answer": "Ein Balkendiagramm.",
                    "explanation": "Balkendiagramme vergleichen Werte über Kategorien hinweg."
                  }
                ],
                "recap": [
                  "Laufdiagramme zeigen Zeitmuster; Histogramme zeigen Verteilungen; Balkendiagramme vergleichen Kategorien.",
                  "Beschriften Sie Achsen, Einheiten und Zeiträume.",
                  "Wählen Sie das Diagramm anhand der Frage und des Datentyps aus, nicht nach Gewohnheit."
                ]
              }
            },
            {
              "id": "Y3.4",
              "order": 4,
              "title": "Pareto-Analyse",
              "objective": "Verwenden Sie die 80/20-Regel, um die wenigen Ursachen zu priorisieren, die das größte Problem verursachen.",
              "content": {
                "why": "Nicht alle Ursachen sind gleich. Die Pareto-Analyse hilft einem Team, sich auf die wenigen Ursachen zu konzentrieren, die den größten Teil des Problems verursachen, anstatt zu versuchen, alles auf einmal zu beheben.",
                "what": "Das Pareto-Prinzip besagt, dass etwa 80 % der Wirkungen auf etwa 20 % der Ursachen zurückzuführen sind. Ein Pareto-Diagramm ist ein vom größten zum kleinsten sortiertes Balkendiagramm mit einer kumulativen Prozentlinie. Die Balken zeigen die Frequenz; Die Zeile zeigt, wie viel von der Gesamtsumme berücksichtigt wurde. Die „wichtigen Wenigen“ sind die Kategorien, die den größten Teil des Effekts ausmachen.",
                "how": [
                  "Definieren Sie das Problem, den Zeitraum und die Zähleinheit.",
                  "Wählen Sie sich gegenseitig ausschließende Kategorien.",
                  "Sammeln Sie Zählungen für jede Kategorie.",
                  "Sortieren Sie die Kategorien vom größten zum kleinsten.",
                  "Berechnen Sie jeden Prozentsatz und den kumulativen Prozentsatz.",
                  "Zeichnen Sie die Balken und die Summenlinie.",
                  "Wählen Sie die Top-Kategorien aus, die etwa 80 % erreichen, und untersuchen Sie sie."
                ],
                "where": "Verwenden Sie Pareto für Fehlertypen, Kundenbeschwerden, Ausfallgründe, Gründe für die Wiederaufnahme ins Krankenhaus, Kategorien von IT-Vorfällen und Gründe für die Rückgabe im Einzelhandel. Beispiel: 100 verspätete Bestellungen, aufgeteilt in Verkehr 40, Ofen 25, Fahrer 20, Adresse 10 und andere 5. Die kumulierten Prozentsätze betragen 40 %, 65 %, 85 %, 95 % und 100 %, sodass die ersten drei Kategorien 85 % des Problems ausmachen.",
                "when_not": "Verwenden Sie Pareto nicht für kontinuierliche Daten, ohne aussagekräftige Kategorien zu erstellen. Verwenden Sie es nicht, wenn sich Kategorien überschneiden oder wenn „Sonstiges“ groß ist. Gehen Sie nicht davon aus, dass die Aufteilung genau 80/20 beträgt, und ignorieren Sie nicht ein Sicherheitsproblem im Niederfrequenzbereich, das dennoch ernsthafte Schäden verursacht.",
                "common_mistakes": [
                  "Lassen Sie die Riegel unsortiert.",
                  "Verwenden Sie überlappende Kategorien oder einen großen Bereich „Andere“.",
                  "Behandeln Sie Pareto als Beweis der Ursache und nicht als Priorisierungsinstrument."
                ],
                "quick_check": [
                  {
                    "q": "Was kombiniert ein Pareto-Diagramm?",
                    "answer": "Sortierte Balken und eine kumulative Prozentlinie.",
                    "explanation": "Es zeigt sowohl die Häufigkeit als auch den kumulativen Beitrag."
                  },
                  {
                    "q": "Was sind die „lebenswichtigen Wenigen“?",
                    "answer": "Die geringe Anzahl von Kategorien, die den größten Teil des Effekts ausmachen.",
                    "explanation": "Dies sind die zu untersuchenden Prioritätskategorien."
                  },
                  {
                    "q": "Ein niederfrequenter Defekt verursacht schwere Schäden. Sollte Pareto Sie dazu bringen, es zu ignorieren?",
                    "answer": "Nein. Schwere und Sicherheit können wichtiger sein als die Häufigkeit.",
                    "explanation": "Pareto priorisiert die Häufigkeit, nicht nur das Risiko."
                  }
                ],
                "recap": [
                  "Pareto sortiert Kategorien und fügt eine kumulative Prozentlinie hinzu.",
                  "Konzentrieren Sie sich auf die wenigen wichtigen Kategorien, die den größten Effekt erzielen.",
                  "Benutzen Sie neben der Häufigkeit auch Schweregrad und Risiko."
                ]
              }
            }
          ]
        },
        {
          "id": "yellow-4",
          "number": 4,
          "title": "Grundursache und Lean-Grundlagen",
          "duration": "90 Min",
          "summary": "Gehen Sie von den Symptomen zu den Ursachen über, indem Sie Fischgrätenmuster und 5 Warums anwenden, und beseitigen Sie dann alltägliche Reibungen mit 5S und grundlegendem Lean-Denken.",
          "lessons": [
            {
              "id": "Y4.1",
              "order": 1,
              "title": "Fischgrätendiagramm",
              "objective": "Brainstormen Sie Ursachen für Menschen, Prozesse, Geräte, Materialien, Messungen und Umgebung.",
              "content": {
                "why": "Fischgrätendiagramme helfen einem Team dabei, viele mögliche Ursachen zu erarbeiten, bevor es sich auf eine konzentriert. Sie organisieren das Denken und legen Bereiche offen, die das Team nicht berücksichtigt hat.",
                "what": "Ein Fischgräten- oder Ishikawa-Diagramm ordnet die Auswirkung oder das Problem an die Spitze und mögliche Ursachen an den Knochen. Gängige Kategorien sind „Menschen“, „Prozess“, „Ausrüstung“, „Materialien“, „Messung“ und „Umgebung“, oft auch als „6Ms“ bezeichnet. Ursachen verzweigen sich in Unterursachen. Das Diagramm ist ein Brainstorming- und Organisationstool. es beweist nicht, welche Ursache real ist.",
                "how": [
                  "Schreiben Sie ein bestimmtes Problem oder eine bestimmte Auswirkung an den Kopf des Diagramms.",
                  "Vereinbaren Sie die Hauptursachenkategorien.",
                  "Brainstorming führt dazu, dass stille Teammitglieder im Stillen etwas beitragen.",
                  "Platzieren Sie jede Ursache auf dem entsprechenden Knochen.",
                  "Fragen Sie, warum Unterursachen hinzugefügt werden sollten, wenn dies sinnvoll ist.",
                  "Verwenden Sie Dot-Voting oder Daten, um wahrscheinliche Ursachen auszuwählen.",
                  "Validieren Sie die ausgewählten Ursachen anhand von Daten, bevor Sie handeln."
                ],
                "where": "Verwenden Sie Fishbone bei Herstellungsfehlern, Verzögerungen im Gesundheitswesen, IT-Vorfällen, Beschwerden im Einzelhandel, Bankfehlern und verspäteten Einreichungen im Bildungsbereich. Zu den Ursachen für verspätete Laborberichte können unter „Personen“ Personal und Schulung, unter „Prozess“ Batch- und Kurierabholung, unter „Geräte“ Fehler bei Druckern oder Analysegeräten und unter „Umgebung“ Verkehr oder Wetter gehören.",
                "when_not": "Verwenden Sie keine Fischgräte als einzige Analyse. Berücksichtigen Sie keine Ursachen, auf die das Team keinen Einfluss hat, und lassen Sie nicht zu, dass eine lautstarke Person die Sitzung dominiert. Verwechseln Sie das Problem nicht mit seinen Ursachen.",
                "common_mistakes": [
                  "Eine Problemstellung, die so weit gefasst ist, dass das Diagramm unüberschaubar wird.",
                  "Lösungen auf die Knochen schreiben statt Ursachen.",
                  "Überspringen Sie die Validierung und behandeln Sie jede Idee als nachgewiesene Ursache."
                ],
                "quick_check": [
                  {
                    "q": "Was steht an der Spitze eines Fischgrätendiagramms?",
                    "answer": "Der Effekt oder das Problem, das untersucht wird.",
                    "explanation": "Der Leiter stellt das Problem dar; Die Knochen bergen mögliche Ursachen."
                  },
                  {
                    "q": "Was sind die gängigen 6M-Kategorien?",
                    "answer": "Menschen, Prozesse, Ausrüstung, Materialien, Messung und Umwelt.",
                    "explanation": "Diese Kategorien veranlassen eine umfassende Ursachensuche."
                  },
                  {
                    "q": "Beweist ein Fischgrätendiagramm die Ursache?",
                    "answer": "Nein. Es organisiert mögliche Ursachen, die mit Daten validiert werden müssen.",
                    "explanation": "Fishbone ist ein Brainstorming-Tool, kein Beweis."
                  }
                ],
                "recap": [
                  "Fishbone ordnet mögliche Ursachen rund um die 6Ms.",
                  "Machen Sie ein umfassendes Brainstorming und validieren Sie dann wahrscheinliche Ursachen anhand von Daten.",
                  "Halten Sie die Wirkung spezifisch und halten Sie Lösungen von den Knochen fern."
                ]
              }
            },
            {
              "id": "Y4.2",
              "order": 2,
              "title": "5 Warum",
              "objective": "Stellen Sie gezielte Warum-Fragen, bis die umsetzbare Grundursache gefunden ist.",
              "content": {
                "why": "5 Whys führt ein Team ohne komplexe Statistiken von Symptomen zu umsetzbaren Grundursachen. Es ist einfach, aber es ist leicht, etwas falsch zu machen, wenn Antworten ohne Beweise akzeptiert werden.",
                "what": "5 Whys ist eine Fragetechnik: Fragen Sie wiederholt nach dem Warum, bis Sie eine Ursache gefunden haben, auf die Sie reagieren können. Es ist keine Regel, dass die Antwort genau fünf Fragen umfassen muss. Beginnen Sie mit einem bestimmten Problem, überprüfen Sie jede Antwort und hören Sie auf, wenn die Ursache umsetzbar und durch Beweise gestützt ist. Konzentrieren Sie sich auf den Prozess, nicht darauf, anderen die Schuld zu geben, und verzweigen Sie, wenn es mehrere Ursachen gibt.",
                "how": [
                  "Nennen Sie das Problem mit den Daten.",
                  "Fragen Sie, warum das Problem aufgetreten ist.",
                  "Überprüfen Sie die Antwort durch Beweise oder Beobachtungen.",
                  "Fragen Sie noch einmal nach dem Warum zur verifizierten Antwort.",
                  "Fahren Sie fort, bis Sie eine umsetzbare Grundursache gefunden haben.",
                  "Testen Sie die Ursache, beheben Sie sie und bestätigen Sie das Ergebnis."
                ],
                "where": "Verwenden Sie 5 Whys, nachdem ein Fischgrätenmuster oder Pareto die wahrscheinlichen Ursachen eingegrenzt hat. Beispiel: Laborberichte sind verspätet. Warum? Der Kurier trifft nach der Sperrfrist ein. Warum? Die Abholung ist für 17:00 Uhr geplant, die Berichte sind jedoch um 17:30 Uhr fertig. Warum? Das Labor wartet darauf, alle Tests stapelweise durchzuführen. Warum? Für Statistiktests gibt es keine Prioritätsregel. Die Hauptursache ist die fehlende Priorisierungsregel; Die Lösung ist ein Stat-Cutoff und eine dedizierte Aufnahme.",
                "when_not": "Verwenden Sie nicht eine einzige 5-Why-Kette für ein komplexes Problem mit mehreren zusammenwirkenden Ursachen; Verzweigen Sie stattdessen. Verwenden Sie es nicht, wenn Sie keine Beweise haben oder wenn der eigentliche Zweck darin besteht, jemandem die Schuld zu geben.",
                "common_mistakes": [
                  "Stoppen bei einem Symptom wie „Das Personal war beschäftigt.“",
                  "Meinungen ohne Überprüfung als Tatsachen akzeptieren.",
                  "Beim „menschlichen Fehler“ stehen bleiben, anstatt zu fragen, was den Fehler zugelassen hat."
                ],
                "quick_check": [
                  {
                    "q": "Was ist das Ziel von 5 Whys?",
                    "answer": "Um eine umsetzbare Grundursache zu finden und nicht nur fünf Fragen zu stellen.",
                    "explanation": "Die Zahl fünf ist ein Leitfaden; Der eigentliche Test besteht darin, ob die Ursache umsetzbar und verifiziert ist."
                  },
                  {
                    "q": "Warum sollten Sie es vermeiden, beim „menschlichen Versagen“ stehen zu bleiben?",
                    "answer": "Es werden selten die Prozessbedingungen identifiziert, die den Fehler verursacht haben.",
                    "explanation": "Fragen Sie, was dabei dazu geführt hat, dass der Fehler möglich oder schwer zu erkennen war."
                  },
                  {
                    "q": "Was tun, wenn ein Problem mehrere Ursachen hat?",
                    "answer": "Verzweigen Sie die Befragung und untersuchen Sie jede Ursache einzeln.",
                    "explanation": "Eine einzelne lineare Kette kann interagierende Ursachen übersehen."
                  }
                ],
                "recap": [
                  "5 Whys führt vom Symptom zur verifizierten, umsetzbaren Ursache.",
                  "Nutzen Sie bei jedem Schritt Beweise und konzentrieren Sie sich auf den Prozess.",
                  "Verzweigen, wenn mehrere Ursachen vorliegen."
                ]
              }
            },
            {
              "id": "Y4.3",
              "order": 3,
              "title": "5S",
              "objective": "Sortieren, ordnen, glänzen, standardisieren und aufrechterhalten.",
              "content": {
                "why": "5S schafft einen sauberen, organisierten und sicheren Arbeitsplatz, an dem Verschwendung und Auffälligkeiten leicht zu erkennen sind. Es unterstützt die Standardarbeit und trägt dazu bei, dass Verbesserungen dauerhaft bleiben.",
                "what": "Die fünf Schritte sind Sortieren, Ordnen, Glanz, Standardisieren und Erhalten. Sortieren entfernt unnötige Elemente. Ordnung gibt allem ein klares Zuhause. Glanz bedeutet sauber und inspizieren. Standardisieren erstellt Regeln, Etiketten und visuelle Standards. Sustain baut Gewohnheiten, Audits und Eigenverantwortung auf. Einige Organisationen fügen Sicherheit als sechstes S hinzu.",
                "how": [
                  "Wählen Sie einen Bereich aus und definieren Sie seinen Zweck.",
                  "Sortieren Sie die Elemente und kennzeichnen Sie alles Unnötige mit einem roten Etikett.",
                  "Legen Sie Standorte, Beschriftungen und visuelle Grenzen fest.",
                  "Reinigen Sie den Bereich und prüfen Sie, ob beim Reinigen Probleme auftreten.",
                  "Schreiben Sie Standards mit Fotos, Checklisten und Eigentümern.",
                  "Planen Sie regelmäßig Audits und überprüfen Sie die Ergebnisse."
                ],
                "where": "Verwenden Sie 5S in Produktionshallen, Versorgungsräumen von Krankenhäusern, Lagerräumen im Einzelhandel, Bankfilialen, Schulklassen und gemeinsam genutzten IT-Laufwerken. Beispiel: Ein Versorgungsraum eines Krankenhauses entfernt abgelaufene Artikel, beschriftet Behälter nach Füllstand, reinigt und inspiziert Regale, veröffentlicht ein Standardlayout und führt wöchentliche Audits durch. Ein digitales Team kann dieselben Schritte auf eine gemeinsame Fahrt oder eine Ticketwarteschlange anwenden.",
                "when_not": "Führen Sie 5S nicht als einmalige Bereinigung ohne Standards und Eigentumsrechte aus. Entsorgen Sie keine Gegenstände ohne einen Red-Tag-Entscheidungsprozess und wenden Sie 5S nicht auf einen Bereich an, der neu gestaltet werden soll.",
                "common_mistakes": [
                  "Aufräumen, aber niemals Standards festlegen oder Prüfgewohnheiten festlegen.",
                  "Mit roten Markierungen versehene Elemente verschwinden ohne Entscheidung.",
                  "Beurteilen Sie 5S nach Aussehen statt nach Sicherheit, Fluss und Suchzeit."
                ],
                "quick_check": [
                  {
                    "q": "Wie lauten die fünf S in der Reihenfolge?",
                    "answer": "Sortieren, in Ordnung bringen, glänzen, standardisieren, aufrechterhalten.",
                    "explanation": "Jeder Schritt baut auf dem vorherigen auf."
                  },
                  {
                    "q": "Was beinhaltet Shine außer der Reinigung?",
                    "answer": "Überprüfen des Bereichs und der Ausrüstung auf Anomalien.",
                    "explanation": "Die Reinigung ist auch eine Möglichkeit, Verschleiß, Undichtigkeiten und fehlende Teile zu erkennen."
                  },
                  {
                    "q": "Warum ist Nachhaltigkeit wichtig?",
                    "answer": "Ohne Kontrollen, Eigentum und Gewohnheiten kehrt das Gebiet in seinen alten Zustand zurück.",
                    "explanation": "Sustain macht 5S zu einer Routine und nicht zu einem Ereignis."
                  }
                ],
                "recap": [
                  "5S ist Sortieren, Ordnen, Glänzen, Standardisieren, Erhalten.",
                  "Visuelle Standards und Eigenverantwortung sorgen dafür, dass das Ergebnis hängen bleibt.",
                  "Nutzen Sie 5S, um Sicherheit, Ablauf und Suchzeit zu verbessern, nicht nur das Aussehen."
                ]
              }
            },
            {
              "id": "Y4.4",
              "order": 4,
              "title": "Basic Lean",
              "objective": "Nutzen Sie Mehrwert, Fluss, Anziehungskraft und Perfektion, um Wartezeiten und Nacharbeit zu reduzieren.",
              "content": {
                "why": "Lean Thinking hilft Teams, den Arbeitsablauf zu verbessern und Wartezeiten und Nacharbeiten zu reduzieren, ohne dass große Kapitalprojekte erforderlich sind. Es ergänzt den Fokus von Six Sigma auf die Reduzierung von Variationen.",
                "what": "Die fünf Lean-Prinzipien sind Wert, Wertstrom, Fluss, Zug und Perfektion. Der Wert wird vom Kunden definiert. Der Wertstrom ist die Abfolge von Schritten, die Wert schaffen. Flow bedeutet, dass die Arbeit reibungslos und ohne Batch-Verzögerungen abläuft. Pull bedeutet, dass Arbeit durch die Nachfrage ausgelöst und nicht vorgeschoben wird. Perfektion bedeutet kontinuierliche Verbesserung. Zu den gängigen Tools gehören Standardarbeit, visuelles Management, Kanban und One-Piece-Flow.",
                "how": [
                  "Definieren Sie den Wert aus Kundensicht.",
                  "Bilden Sie den Wertstrom ab und identifizieren Sie Verzögerungen und Verschwendung.",
                  "Verbessern Sie den Ablauf, indem Sie die Batchgröße und unnötige Übergaben reduzieren.",
                  "Führen Sie Pull dort ein, wo Nachfrage und Angebot es praktikabel machen.",
                  "Standardisieren Sie die neue Methode und verbessern Sie sie weiter."
                ],
                "where": "Nutzen Sie Lean in der Fertigung, im Gesundheitswesen, im Einzelhandel, in der IT, im Bankwesen und im Bildungswesen. Beispiel: Eine Bank bündelt Kreditgenehmigungen, sodass die Anträge auf eine tägliche Prüfung warten. Cross-Training und ein tägliches Pull-System verkürzen die Vorlaufzeit von zehn auf vier Tage. Im Gesundheitswesen reduziert die Verlagerung von Verbrauchsmaterialien in die Nähe des Verbrauchsorts die Bewegungsfreiheit und das Warten der Pflege.",
                "when_not": "Führen Sie Pull nicht ein, wenn die Nachfrage stark schwankt oder das Angebot ohne entsprechende Puffer begrenzt ist. Entfernen Sie nicht die notwendigen Kontrollen, um einen Prozess schneller erscheinen zu lassen, und verfolgen Sie keinen Ablauf auf Kosten der Sicherheit oder Qualität.",
                "common_mistakes": [
                  "Behandeln Sie Lean als eine Kostensenkungs- oder Personalzählungsmaßnahme.",
                  "Kanban installieren, ohne den Prozess vorher zu stabilisieren.",
                  "Nachfrageschwankungen werden ignoriert und neue Engpässe entstehen."
                ],
                "quick_check": [
                  {
                    "q": "Was sind die fünf Lean-Prinzipien?",
                    "answer": "Wert, Wertstrom, Fluss, Anziehungskraft und Perfektion.",
                    "explanation": "Diese Grundsätze leiten die Abfallreduzierung und die Verbesserung des Flusses."
                  },
                  {
                    "q": "Was bedeutet ziehen?",
                    "answer": "Die Arbeit wird durch die Kundennachfrage ausgelöst und nicht vorangetrieben.",
                    "explanation": "Pull reduziert Überproduktion und übermäßige laufende Arbeiten."
                  },
                  {
                    "q": "Warum kann eine Reduzierung der Chargengröße den Durchfluss verbessern?",
                    "answer": "Kleinere Chargen verkürzen die Wartezeit und beschleunigen die Rückmeldung.",
                    "explanation": "Die Arbeit durchläuft den Prozess kontinuierlicher."
                  }
                ],
                "recap": [
                  "Lean verbessert Wert, Fluss, Anziehungskraft und Perfektion.",
                  "Reduzieren Sie die Chargengröße und Übergaben, um die Durchlaufzeit zu verkürzen.",
                  "Standardisieren Sie die Verbesserung und stellen Sie sicher, dass Sicherheit und Qualität an erster Stelle stehen."
                ]
              }
            }
          ]
        },
        {
          "id": "yellow-5",
          "number": 5,
          "title": "Menschen und Teamarbeit",
          "duration": "50 Min",
          "summary": "Generieren Sie bessere Ideen und helfen Sie einem Team, Entscheidungen zu treffen, ohne die leisen Stimmen oder Beweise zu verlieren.",
          "lessons": [
            {
              "id": "Y5.1",
              "order": 1,
              "title": "Brainstorming",
              "objective": "Führen Sie eine stille Ideengenerierung und Affinitätsgruppierung durch, bevor Sie Ideen beurteilen.",
              "content": {
                "why": "Gute Lösungen brauchen vor der Auswahl viele Ideen. Brainstorming generiert Optionen und bindet das Team ein, aber nur, wenn es so durchgeführt wird, dass frühzeitiges Urteilen und Dominanz vermieden werden.",
                "what": "Brainstorming bedeutet, zunächst viele Ideen zu generieren und diese später zu bewerten. Zu den nützlichen Methoden gehören stilles Brainstorming, Round-Robin-Sharing, Brainwriting und Affinitätsgruppierung. Die Regeln lauten: Quantität anstreben, Kritik zurückhalten, auf den Ideen anderer aufbauen, wilde Ideen willkommen heißen und ein Gespräch nach dem anderen führen. Nachdem Sie Ideen generiert haben, gruppieren Sie sie und stimmen Sie ab, bevor Sie sie mit Daten bewerten.",
                "how": [
                  "Stellen Sie eine klare Frage für die Sitzung.",
                  "Geben Sie jedem fünf bis zehn Minuten Zeit, um im Stillen Ideen aufzuschreiben.",
                  "Tauschen Sie Ideen rund um die Uhr aus, ohne sie zu beurteilen.",
                  "Klären Sie nur, und gruppieren Sie dann ähnliche Ideen mithilfe der Affinitätszuordnung.",
                  "Nutzen Sie Dot-Voting, um die stärksten Kandidaten auszuwählen.",
                  "Bewerten Sie die Top-Ideen anhand von Daten und einem kleinen Test."
                ],
                "where": "Nutzen Sie Brainstorming für Ursachenanalyse, Lösungsentwurf, Projektplanung und Teambesprechungen. Beispiel: Eine Klinik möchte Wartezeiten verkürzen. Die Ideen gruppieren sich in Planung, Personal, Raum und Kommunikation. Das Team stimmt ab, testet dann die beiden besten Ideen und misst die Wirkung.",
                "when_not": "Machen Sie kein Brainstorming, wenn die Antwort durch Vorschriften, Sicherheit oder eindeutige Daten festgelegt ist. Nutzen Sie Brainstorming nicht für eine dringende Sicherheitsentscheidung und lassen Sie nicht zu, dass ein Manager Ideen während der Generierung dominiert oder kritisiert.",
                "common_mistakes": [
                  "Ideen beurteilen, während sie noch entstehen.",
                  "Lassen Sie eine Person das Gespräch dominieren.",
                  "Am Ende steht eine Ideenliste, aber keine Bewertung oder Eigentümer."
                ],
                "quick_check": [
                  {
                    "q": "Was ist die erste Regel beim Brainstorming?",
                    "answer": "Generieren Sie Ideen, ohne sie zu beurteilen.",
                    "explanation": "Frühe Kritik verringert die Anzahl und Vielfalt der Ideen."
                  },
                  {
                    "q": "Warum stilles Brainstorming nutzen?",
                    "answer": "Es gibt ruhigeren Mitgliedern die Möglichkeit, einen Beitrag zu leisten, und verringert die Dominanz.",
                    "explanation": "Das erste Schreiben von Ideen sorgt für eine ausgewogenere Sitzung."
                  },
                  {
                    "q": "Was soll passieren, nachdem Ideen generiert wurden?",
                    "answer": "Gruppieren, stimmen Sie ab und bewerten Sie die Top-Ideen anhand von Daten.",
                    "explanation": "Die Generierung ist nur der erste Schritt; Als nächstes folgen Auswahl und Prüfung."
                  }
                ],
                "recap": [
                  "Generieren Sie zunächst viele Ideen und beurteilen Sie sie später.",
                  "Nutzen Sie stille Generierung und Affinitätsgruppierung, um alle einzubeziehen.",
                  "Bewerten Sie die besten Ideen anhand von Daten und einem kleinen Test."
                ]
              }
            },
            {
              "id": "Y5.2",
              "order": 2,
              "title": "Teamarbeit",
              "objective": "Definieren Sie Rollen, Grundregeln, Entscheidungsregeln und Besprechungsgewohnheiten für ein Verbesserungsteam.",
              "content": {
                "why": "Verbesserung ist Teamarbeit. Klare Rollen, Grundregeln und Entscheidungsregeln sorgen dafür, dass Meetings produktiv bleiben und verhindern, dass das Projekt ins Stocken gerät.",
                "what": "Ein effektives Team hat einen klaren Zweck, definierte Rollen, Grundregeln, eine Entscheidungsregel, einen Besprechungsrhythmus und psychologische Sicherheit. Zu den Rollen können Leiter, Moderator, Rekorder, Zeitnehmer, Dateneigentümer und Sponsor gehören. Grundregeln könnten Start- und Endzeiten, jeweils ein Redner, Respekt und die Dokumentation von Entscheidungen umfassen. Zu den Entscheidungsregeln gehören Konsens, Zustimmung oder Entscheidungen des Leiters nach Eingabe.",
                "how": [
                  "Definieren Sie den Zweck und das erwartete Ergebnis des Teams.",
                  "Weisen Sie Rollen zu und bestätigen Sie Zeitverpflichtungen.",
                  "Vereinbaren Sie Grundregeln und eine Entscheidungsregel.",
                  "Legen Sie eine Tagesordnung und einen Besprechungsrhythmus fest.",
                  "Erfassen Sie Entscheidungen, Aktionen, Eigentümer und Fälligkeitstermine.",
                  "Überprüfen Sie die Teameffektivität und passen Sie sie an."
                ],
                "where": "Wenden Sie bei jedem Projekt klare Teamarbeitspraktiken an, insbesondere bei funktionsübergreifenden. Beispiel: Ein Entlassungsprojektteam trifft sich wöchentlich, wechselt den Moderator, verwendet ein Aktionsprotokoll und trifft Entscheidungen im Einvernehmen. Jedes Meeting endet mit einem Eigentümer und einem Datum für jede Aktion.",
                "when_not": "Bearbeiten Sie eine kleine Zwei-Personen-Aufgabe nicht zu sehr. Verwenden Sie keinen Konsens, wenn es bereits einen klaren Entscheidungsträger gibt, und lassen Sie nicht zu, dass Grundregeln zu Bürokratie werden.",
                "common_mistakes": [
                  "Keine klaren Rollen oder Entscheidungsregeln.",
                  "Besprechungen ohne Tagesordnung, Aktionen oder Folgemaßnahmen.",
                  "Vermeiden Sie Konflikte, damit echte Probleme nie gelöst werden."
                ],
                "quick_check": [
                  {
                    "q": "Warum braucht ein Team eine Entscheidungsregel?",
                    "answer": "Um zu klären, wie Entscheidungen getroffen werden, und um Verzögerungen zu verhindern.",
                    "explanation": "Eine Entscheidungsregel sagt dem Team, ob Konsens, Zustimmung oder Führungsentscheidung verwendet werden soll."
                  },
                  {
                    "q": "Was sollte jede Aktion haben?",
                    "answer": "Ein Eigentümer und ein Fälligkeitsdatum.",
                    "explanation": "Aktionen ohne Eigentümerschaft und Termine werden in der Regel nicht durchgeführt."
                  },
                  {
                    "q": "Was ist die Rolle des Moderators?",
                    "answer": "Um den Prozess zu leiten, das Team konzentriert zu halten und sicherzustellen, dass jeder seinen Beitrag leistet.",
                    "explanation": "Der Moderator verwaltet den Besprechungsprozess, nicht die inhaltlichen Entscheidungen."
                  }
                ],
                "recap": [
                  "Klare Ziele, Rollen, Grundregeln und Entscheidungsregeln machen Teams effektiv.",
                  "Erfassen Sie Entscheidungen und Maßnahmen mit Eigentümern und Daten.",
                  "Überprüfen Sie, wie das Team arbeitet, nicht nur, was es produziert."
                ]
              }
            }
          ]
        }
      ],
      "coverageChecklist": [
        {
          "topic": "Prozessdenken",
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
          "topic": "Prozessabbildung",
          "lessons": [
            "Y1.3"
          ]
        },
        {
          "topic": "DMAIC im Detail",
          "lessons": [
            "Y2.1"
          ]
        },
        {
          "topic": "Grundlagen der Projektcharta",
          "lessons": [
            "Y2.2"
          ]
        },
        {
          "topic": "Kontrollpläne und grundlegende SPC",
          "lessons": [
            "Y2.3"
          ]
        },
        {
          "topic": "Datentypen",
          "lessons": [
            "Y3.1"
          ]
        },
        {
          "topic": "Überprüfen Sie die Blätter",
          "lessons": [
            "Y3.2"
          ]
        },
        {
          "topic": "Grundlegende Diagramme",
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
          "topic": "Fischgräte",
          "lessons": [
            "Y4.1"
          ]
        },
        {
          "topic": "5 Warum",
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
          "topic": "Basic Lean",
          "lessons": [
            "Y4.4"
          ]
        },
        {
          "topic": "Brainstorming",
          "lessons": [
            "Y5.1"
          ]
        },
        {
          "topic": "Teamarbeit",
          "lessons": [
            "Y5.2"
          ]
        }
      ],
      "project": {
        "title": "Reduzieren Sie Wartezeiten in einem Serviceprozess",
        "brief": "Bilden Sie einen Serviceprozess mit SIPOC und einem Flussdiagramm ab, sammeln Sie zwei Wochen Wartezeitdaten auf einem Prüfblatt, erstellen Sie ein Pareto-Diagramm der Verzögerungsgründe, führen Sie eine 5-Why-Analyse für den Hauptgrund durch und entwerfen Sie einen einseitigen Kontrollplan für den verbesserten Prozess."
      },
      "exam": {
        "questions": 40,
        "passingScore": 80,
        "format": "40 Multiple-Choice-Fragen mit vier Optionen und Erklärungen."
      },
      "cheatSheet": [
        "SIPOC = Lieferanten, Inputs, Prozesse, Outputs, Kunden",
        "Pareto-Prinzip: Etwa 80 % der Wirkungen entstehen durch etwa 20 % der Ursachen",
        "5 Warum: Fragen Sie nach dem Warum, bis Sie eine Ursache gefunden haben, auf die Sie reagieren können",
        "5S = Sortieren, in Ordnung bringen, glänzen, standardisieren, aufrechterhalten",
        "Kontrollplan = Metrik, Ziel, Überwachungsmethode, Häufigkeit, Eigentümer und Reaktionsplan"
      ],
      "nextChecklist": [
        "Ich kann einen SIPOC für einen Prozess zeichnen, der mir gehört.",
        "Ich kann ein Kontrollblatt und ein Pareto-Diagramm erstellen.",
        "Ich kann ein 5-Warum ermöglichen, ohne einer Person die Schuld zu geben.",
        "Ich kann erklären, wie 5S den Fluss unterstützt.",
        "Ich kann einen Kontrollplan entwerfen und eine einfache Kontrollkarte lesen."
      ]
    },
    {
      "id": "green",
      "name": "Grüner Gürtel",
      "level": 3,
      "color": "green",
      "icon": "fa-trophy",
      "lessonTarget": "25-30",
      "studyTime": "40-60 Stunden",
      "audience": "Projektleiter und Prozessverantwortliche, die nebenberuflich DMAIC-Projekte mit einem Black Belt oder Sponsor durchführen.",
      "prerequisites": "Yellow Belt oder gleichwertige Erfahrung in der Prozessverbesserung.",
      "previousRecap": "Zusammenfassung des Gelben Gürtels: Prozesse haben Lieferanten, Inputs, Schritte, Outputs und Kunden; Daten müssen konsistent erfasst werden; Pareto, Fischgrätenmuster und 5 Warum helfen bei der Ursachensuche.",
      "outcomes": [
        "Leiten Sie ein kleines bis mittleres DMAIC-Projekt von der Gründung bis zur Kontrolle",
        "Planen Sie Datenerfassung, Probenahme und Messsystemstudien",
        "Verwenden Sie deskriptive Statistiken, Fähigkeitstests, Hypothesentests und einfache Regression",
        "Wählen Sie Lösungen aus, testen Sie sie und übergeben Sie einen Kontrollplan"
      ],
      "modules": [
        {
          "id": "green-1",
          "number": 1,
          "title": "Define",
          "duration": "90 Min",
          "summary": "Verwandeln Sie eine vage Beschwerde in ein begrenztes Projekt mit einem klaren Kunden, einem messbaren Ziel und benannten Stakeholdern.",
          "lessons": [
            {
              "id": "G1.1",
              "order": 1,
              "title": "Projektcharta",
              "objective": "Schreiben Sie eine Problemstellung, ein Ziel, einen Umfang, einen Business Case, ein Team und einen Zeitplan.",
              "content": {
                "why": "Eine Charta ist der Vertrag zwischen dem Projektteam und dem Sponsor. Green Belts leiten oft Projekte, daher ist eine klare Charta für die Kontrolle des Umfangs, der Ressourcen und einer messbaren Definition des Erfolgs unerlässlich.",
                "what": "Eine Green Belt-Charta umfasst den Geschäftsfall, die Problemstellung, das SMART-Ziel, innerhalb und außerhalb des Geltungsbereichs liegende Grenzen, Teamrollen, Zeitplan und Meilensteine, primäre Metrik, Risiken, Einschränkungen und Genehmigungen. Die Problemstellung beschreibt was, wo, wann und wie viel anhand grundlegender Beweise und vermeidet die Nennung einer Ursache oder Lösung. Der Business Case verknüpft das Projekt mit den Kundenauswirkungen, den Kosten schlechter Qualität oder der Strategie.",
                "how": [
                  "Sammeln Sie Basisdaten, bevor Sie die Problemstellung schreiben.",
                  "Beschreiben Sie die Lücke mit Was, Wo, Wann und Wie viel.",
                  "Schreiben Sie ein spezifisches, messbares, erreichbares, relevantes und zeitgebundenes Ziel.",
                  "Definieren Sie die Prozessgrenzen und listen Sie Arbeiten außerhalb des Umfangs explizit auf.",
                  "Nennen Sie den Sponsor, den Prozessverantwortlichen, den Teamleiter und die Teammitglieder.",
                  "Legen Sie Meilensteine ​​für Definieren, Messen, Analysieren, Verbessern und Steuern fest.",
                  "Definieren Sie die primäre Metrik, Datenquelle und den erwarteten Nutzen.",
                  "Holen Sie sich die Zustimmung des Sponsors, bevor mit der umfangreichen Datenerfassung begonnen wird."
                ],
                "where": "Verwenden Sie für jedes Green Belt-Projekt, insbesondere für funktionsübergreifende Arbeiten, eine vollständige Charta. Beispiel: Eingelieferte Patienten warten durchschnittlich 6,2 Stunden vom Eintreffen des Notfalls bis zu einem stationären Bett, gegenüber einem Zielwert von 4 Stunden. Ziel ist es, den Median innerhalb von 12 Wochen auf 4 Stunden zu reduzieren. Der Umfang reicht von der Ankunft im Notfall bis zur Bettenzuweisung. Neubauten fallen nicht in den Geltungsbereich.",
                "when_not": "Erstellen Sie keinen vollständigen Auftrag für eine kleine Reparatur, die eine Stunde dauert; Verwenden Sie eine Aufgabenliste. Nutzen Sie die Charta nicht, um eine bevorzugte Lösung festzulegen, bevor das Team das Problem analysiert hat.",
                "common_mistakes": [
                  "Einfügen einer Ursache oder Lösung in die Problemstellung.",
                  "Ein vages Ziel wie „Flow verbessern“ ohne Kennzahl oder Datum.",
                  "Keine Basislinie, kein Prozessverantwortlicher oder Umfang, der so umfassend ist, dass das Projekt nicht abgeschlossen werden kann."
                ],
                "quick_check": [
                  {
                    "q": "Was sollte eine Problemstellung vermeiden?",
                    "answer": "Nennen Sie eine Ursache oder eine bevorzugte Lösung.",
                    "explanation": "Die Problemstellung beschreibt die Lücke mit den Beweisen; Die Ursachen werden später untersucht."
                  },
                  {
                    "q": "Warum ist eine Baseline in einer Charta wichtig?",
                    "answer": "Es zeigt die aktuelle Leistung und macht das Ziel und den späteren Nutzen glaubwürdig.",
                    "explanation": "Ohne eine Baseline kann das Team keine Verbesserung nachweisen."
                  },
                  {
                    "q": "Was bedeutet außerhalb des Geltungsbereichs?",
                    "answer": "Arbeiten, die das Projekt nicht behandeln wird.",
                    "explanation": "Explizite Ausschlüsse verhindern Scope Creep."
                  }
                ],
                "recap": [
                  "Eine Charta definiert das Problem, das Ziel, den Umfang, das Team, die Metrik und die Meilensteine.",
                  "Verwenden Sie Basisdaten und halten Sie Ursachen und Lösungen aus der Problemstellung heraus.",
                  "Die Zustimmung des Sponsors bestätigt Autorität, Ressourcen und Erwartungen."
                ]
              }
            },
            {
              "id": "G1.2",
              "order": 2,
              "title": "Stakeholder",
              "objective": "Ordnen Sie Einfluss und Interesse zu und planen Sie das Engagement.",
              "content": {
                "why": "Projekte scheitern, wenn Schlüsselpersonen überrascht, ausgeschlossen oder aktiv Widerstand geleistet werden. Das Stakeholder-Mapping hilft dem Team, das Engagement zu planen, bevor es zu einem Problem wird.",
                "what": "Ein Stakeholder ist jeder, der von dem Projekt betroffen ist oder Einfluss darauf nehmen kann. Ein gängiges Instrument ist das Einfluss-Interessen-Raster. Stakeholder mit hohem Einfluss und großem Interesse werden eng betreut. Hoher Einfluss und geringes Interesse werden befriedigt. Geringer Einfluss und hohes Interesse werden informiert. Geringe Einflussnahme und geringe Zinsen werden überwacht. Das Team bewertet außerdem die Haltung jedes Stakeholders: Unterstützer, Neutraler oder Blocker.",
                "how": [
                  "Listen Sie alle Personen auf, die von dem Projekt betroffen sind oder Einfluss darauf nehmen können.",
                  "Bewerten Sie den Einfluss und das Interesse jedes Stakeholders.",
                  "Tragen Sie sie in das Einfluss-Interessen-Raster ein.",
                  "Bewerten Sie ihre aktuelle Haltung und was sie brauchen.",
                  "Wählen Sie eine Interaktionsmethode und -häufigkeit.",
                  "Weisen Sie jeder Schlüsselbeziehung einen Eigentümer zu.",
                  "Überprüfen Sie die Karte an jedem Projekttor."
                ],
                "where": "Nutzen Sie die Stakeholder-Zuordnung für funktionsübergreifende, regulierte oder politisch sensible Projekte. Bei einem Krankenhausentlassungsprojekt haben der Chief Operating Officer und die Stationsleiter großen Einfluss und großes Interesse; Die IT mag einen großen Einfluss haben, aber ein geringeres Interesse; Patienten und Familien haben großes Interesse und sollten durch Fokusgruppen oder Umfragen einbezogen werden.",
                "when_not": "Erstellen Sie keine große Stakeholder-Map für eine kleine lokale Lösung mit zwei Teilnehmern. Verwechseln Sie Stakeholder nicht mit Kunden und betrachten Sie Engagement nicht als einmalige Kommunikation.",
                "common_mistakes": [
                  "Bis zum Ende des Projekts fehlte ein Schlüsselblocker.",
                  "Nur nach oben kommunizieren und das Personal an der Front ignorieren.",
                  "Eine Karte ohne Engagement-Plan, Besitzer oder Follow-up."
                ],
                "quick_check": [
                  {
                    "q": "Wie sollte ein Stakeholder mit großem Einfluss und hohem Interesse gemanagt werden?",
                    "answer": "Eng, mit regelmäßigem Engagement und Einbindung in Entscheidungen.",
                    "explanation": "Diese Stakeholder können das Projekt stark beeinflussen und sich um das Ergebnis kümmern."
                  },
                  {
                    "q": "Warum die Haltung der Stakeholder abbilden?",
                    "answer": "Um zu verstehen, wer das Projekt unterstützt, neutral ist oder möglicherweise blockiert.",
                    "explanation": "Stance hilft dem Team dabei, das Engagement anzupassen und auf Bedenken einzugehen."
                  },
                  {
                    "q": "Wann sollte die Stakeholder-Map überprüft werden?",
                    "answer": "An Projekttoren und wenn sich die Umstände ändern.",
                    "explanation": "Einfluss, Interesse und Haltung können sich während des Projekts ändern."
                  }
                ],
                "recap": [
                  "Ordnen Sie Stakeholder nach Einfluss und Interesse zu und planen Sie dann das Engagement.",
                  "Bewerten Sie die Haltung und weisen Sie Schlüsselbeziehungen einen Eigentümer zu.",
                  "Beziehen Sie Mitarbeiter an vorderster Front mit ein, nicht nur Führungskräfte."
                ]
              }
            },
            {
              "id": "G1.3",
              "order": 3,
              "title": "VOC und CTQ",
              "objective": "Übersetzen Sie die Kundensprache in messbare CTQs und Spezifikationen.",
              "content": {
                "why": "Green Belts müssen sicherstellen, dass das Projekt ein Kundenproblem löst und nicht eine interne Annehmlichkeit. CTQs wandeln die Kundensprache in messbare Spezifikationen um, an die sich der Prozess halten kann.",
                "what": "Die Stimme des Kunden stammt aus Interviews, Umfragen, Beschwerden, Fokusgruppen, Beobachtungen und Garantiedaten. Ein CTQ-Baum verknüpft einen allgemeinen Bedarf mit einem Treiber und dann mit einer messbaren Anforderung. Jede CTQ benötigt eine betriebliche Definition, ein Ziel, Spezifikationsgrenzen und eine klare Fehlerdefinition. Spezifikationsgrenzen definieren eine akzeptable Leistung; Sie sind nicht dasselbe wie Kontrollgrenzen.",
                "how": [
                  "Sammeln Sie VOC aus mehreren Quellen, nicht nur aus einer einzigen Umfrage.",
                  "Gruppieren Sie ähnliche Aussagen nach Themen.",
                  "Erstellen Sie einen CTQ-Baum vom Bedarf über den Treiber bis hin zur messbaren Anforderung.",
                  "Definieren Sie die Metrik, das Ziel sowie die oberen oder unteren Spezifikationsgrenzen.",
                  "Definieren Sie, was als Mangel gilt.",
                  "Validieren Sie die CTQ und Spezifikation mit Kunden oder Prozessexperten."
                ],
                "where": "Verwenden Sie VOC und CTQ in jedem Green Belt-Projekt. Beispiel: Ein Kunde sagt: „Ich möchte meine Kreditentscheidung schnell treffen.“ Der Fahrer ist die Entscheidungszeit. Die CTQ ist die Zeit vom vollständigen Antrag bis zur Entscheidung, mit einer Zielvorgabe von zwei Werktagen und einer Obergrenze von drei Tagen. Eine Entscheidung, die länger als drei Tage in Anspruch nimmt, stellt einen Mangel dar.",
                "when_not": "Erfinden Sie CTQs nicht ohne Kundeneingaben. Verwechseln Sie einen CTQ nicht mit einer Lösung wie „Wir brauchen eine neue App“. Bei rechtlichen, sicherheitstechnischen und behördlichen Anforderungen handelt es sich um zwingende Anforderungen und nicht um optionale Kundenpräferenzen.",
                "common_mistakes": [
                  "Schreibbedürfnisse in Lösungssprache.",
                  "Zu viele CTQs erstellen und den Fokus verlieren.",
                  "Festlegung einer Spezifikation, ohne zu prüfen, ob sie messbar und erreichbar ist."
                ],
                "quick_check": [
                  {
                    "q": "Was verbindet ein CTQ-Baum?",
                    "answer": "Ein Kundenbedürfnis nach Treibern und messbaren Anforderungen.",
                    "explanation": "Der Baum übersetzt die Stimme des Kunden in Prozessmetriken."
                  },
                  {
                    "q": "Was ist der Unterschied zwischen einer Spezifikationsgrenze und einer Kontrollgrenze?",
                    "answer": "Eine Spezifikationsgrenze definiert Kunden- oder Designanforderungen; Eine Kontrollgrenze beschreibt die Prozessschwankung.",
                    "explanation": "Spezifikationen ergeben sich aus Anforderungen; Kontrollgrenzen stammen aus Prozessdaten."
                  },
                  {
                    "q": "Was macht einen CTQ nutzbar?",
                    "answer": "Es ist messbar, hat ein Ziel oder eine Spezifikation und eine klare Fehlerdefinition.",
                    "explanation": "Ohne diese kann das Team es nicht messen oder verbessern."
                  }
                ],
                "recap": [
                  "VOC erfasst Kundenbedürfnisse; CTQs machen sie messbar.",
                  "Definieren Sie die Metrik, das Ziel, die Spezifikationsgrenzen und die Fehlerregel.",
                  "Validieren Sie CTQs mit Kunden und sorgen Sie dafür, dass sie sich konzentrieren."
                ]
              }
            }
          ]
        },
        {
          "id": "green-2",
          "number": 2,
          "title": "Measure",
          "duration": "4 Stunden",
          "summary": "Erstellen Sie ein vertrauenswürdiges Messsystem, beschreiben Sie die Daten und vergleichen Sie die Prozessleistung mit den Kundenspezifikationen.",
          "lessons": [
            {
              "id": "G2.1",
              "order": 1,
              "title": "Datenerfassungsplan",
              "objective": "Definieren Sie, was, wo, wann, wer und wie Daten erfasst werden sollen.",
              "content": {
                "why": "Ohne einen Datenerfassungsplan sind die Daten häufig unvollständig, inkonsistent oder können die Projektfrage nicht beantworten. Ein Plan stellt sicher, dass die richtigen Daten auf die richtige Weise erfasst werden.",
                "what": "Ein Datenerfassungsplan definiert die Metrik- und Betriebsdefinition, den Datentyp, die Quelle, den Standort, den Sammler, den Zeitpunkt, die Stichprobenmethode, die Stichprobengröße, die Aufzeichnungsform und die Validierungsmethode. Außerdem ist eine Messsystemanalyse geplant. Vorhandene Daten sollten verwendet werden, wenn sie zuverlässig sind; Neue Daten werden benötigt, wenn die aktuellen Daten die Frage nicht beantworten können.",
                "how": [
                  "Schreiben Sie die Frage auf, die die Daten beantworten müssen.",
                  "Definieren Sie die Metrik operativ, einschließlich Start- und Stopppunkten.",
                  "Wählen Sie die Datenquelle und überprüfen Sie deren Qualität.",
                  "Legen Sie die Stichprobenmethode und die Stichprobengröße fest.",
                  "Entwerfen oder wählen Sie die Aufnahmeform aus.",
                  "Pilotieren Sie den Plan und schulen Sie die Sammler.",
                  "Überprüfen Sie eine Stichprobe der Aufzeichnungen auf Richtigkeit und Vollständigkeit."
                ],
                "where": "Verwenden Sie in jeder Maßnahmenphase und bei jeder wichtigen Entscheidung einen Datenerfassungsplan. Beispiel: Für die Bearbeitungszeit in der Notaufnahme ist der Anfang der Ankunftszeitstempel und das Ende der Zeitstempel der stationären Bettenzuweisung. Die Quelle ist die elektronische Gesundheitsakte. Sammeln Sie alle aufgenommenen Patienten vier Wochen lang, stratifizieren Sie sie nach Schicht und Tag und validieren Sie zwanzig Datensätze mit dem Quellsystem.",
                "when_not": "Sammeln Sie keine neuen Daten, wenn vorhandene validierte Daten die Frage bereits beantworten. Sammeln Sie keine Daten ohne eine klare Frage und sammeln Sie nicht zu viel, nur weil Daten verfügbar sind.",
                "common_mistakes": [
                  "Vage operative Definitionen, die von verschiedenen Sammlern unterschiedlich interpretiert werden.",
                  "Kein Stichprobenplan, daher sind die Daten eher praktisch als repräsentativ.",
                  "Verzichten Sie auf die Analyse von Messsystemen und vertrauen Sie auf schlechte Daten."
                ],
                "quick_check": [
                  {
                    "q": "Was ist eine operative Definition?",
                    "answer": "Eine genaue Beschreibung, wie eine Metrik gemessen wird, einschließlich Start-, Stopp- und Zählregeln.",
                    "explanation": "Dadurch wird sichergestellt, dass verschiedene Personen dasselbe auf die gleiche Weise messen."
                  },
                  {
                    "q": "Wann sollen vorhandene Daten genutzt werden?",
                    "answer": "Wenn sie zuverlässig, relevant und ausreichend sind, um die Frage zu beantworten.",
                    "explanation": "Das Sammeln neuer Daten kostet Zeit und sollte gerechtfertigt sein."
                  },
                  {
                    "q": "Warum einen Datenerfassungsplan testen?",
                    "answer": "Um unklare Definitionen, fehlende Felder und Sammlungsprobleme vor der vollständigen Einführung zu finden.",
                    "explanation": "Ein Pilot verhindert wochenlange unbrauchbare Daten."
                  }
                ],
                "recap": [
                  "Ein Datenerfassungsplan definiert die Metrik, Quelle, Stichprobe, Sammler und Validierung.",
                  "Verwenden Sie operative Definitionen und steuern Sie den Plan.",
                  "Bevorzugen Sie zuverlässige vorhandene Daten gegenüber unnötiger Neuerfassung."
                ]
              }
            },
            {
              "id": "G2.2",
              "order": 2,
              "title": "Probenahme",
              "objective": "Wählen Sie zufällige, geschichtete oder systematische Stichproben und vermeiden Sie Verzerrungen.",
              "content": {
                "why": "Die Messung jeder Einheit ist oft unmöglich oder zu kostspielig. Eine gute Stichprobe ermöglicht es dem Team, Rückschlüsse auf die Population mit bekannter Unsicherheit zu ziehen; Eine verzerrte Stichprobe führt zu falschen Schlussfolgerungen.",
                "what": "Die Bevölkerung ist jede interessierende Einheit; Die Probe ist die gemessene Teilmenge. Zufällige Stichproben geben jeder Einheit die gleichen Chancen und verringern die Auswahlverzerrung. Bei der geschichteten Stichprobe wird die Bevölkerung in homogene Gruppen, z. B. Schicht oder Region, und Stichproben innerhalb jeder Gruppe unterteilt. Die systematische Stichprobenentnahme nimmt jede k-te Einheit in Anspruch, kann sich aber an einem verborgenen Muster orientieren. Convenience-Sampling ist einfach, aber oft voreingenommen.",
                "how": [
                  "Definieren Sie die Grundgesamtheit und den Stichprobenrahmen.",
                  "Wählen Sie je nach Fragestellung zufällige, geschichtete oder systematische Stichproben.",
                  "Bestimmen Sie die Stichprobengröße anhand von Konfidenz, Fehlertoleranz und Variabilität.",
                  "Wählen Sie Einheiten nach einem Zufallsverfahren aus und dokumentieren Sie dies.",
                  "Überprüfen Sie die Stichprobe auf Repräsentativität.",
                  "Erfassen Sie Antwortausfälle oder fehlende Daten und passen Sie den Plan an."
                ],
                "where": "Nutzen Sie Stichproben für Audits, Kundenbefragungen, Qualitätsprüfungen und Prozessstudien. Beispiel: Ein Team hat 1.000 Rechnungen pro Monat und wählt mit einem Zufallsgenerator zufällig 100 aus. Sie sind nach Monatsendrechnungen und regulären Rechnungen geschichtet, sodass beide Arten dargestellt werden. Sie vermeiden es, nur die Rechnungen zu stichproben, die leicht abzurufen sind.",
                "when_not": "Führen Sie keine Proben durch, wenn die Population klein ist oder das Risiko hoch ist und eine 100-prozentige Kontrolle erforderlich ist. Verwenden Sie keine Zufallsstichprobe, um Rückschlüsse auf eine Grundgesamtheit zu ziehen, und ignorieren Sie nicht den Non-Response-Bias.",
                "common_mistakes": [
                  "Verwenden Sie die Einheiten, die am einfachsten zugänglich sind.",
                  "Bemusterung nur einer Schicht, Region oder Produktart.",
                  "Eine Stichprobe, die so klein ist, dass die Fehlerspanne zu groß ist, um nützlich zu sein."
                ],
                "quick_check": [
                  {
                    "q": "Was ist der Hauptvorteil der Zufallsstichprobe?",
                    "answer": "Es reduziert die Selektionsverzerrung und unterstützt Rückschlüsse auf die Bevölkerung.",
                    "explanation": "Jede Einheit hat die gleiche Chance, ausgewählt zu werden."
                  },
                  {
                    "q": "Wann ist eine geschichtete Stichprobe sinnvoll?",
                    "answer": "Wenn die Bevölkerung unterschiedliche Gruppen enthält, die vertreten sein sollten.",
                    "explanation": "Die Stichprobenziehung innerhalb jeder Gruppe stellt die Abdeckung wichtiger Segmente sicher."
                  },
                  {
                    "q": "Warum kann eine Convenience-Probe irreführend sein?",
                    "answer": "Es kann sein, dass leicht erreichbare Einheiten überrepräsentiert sind und wichtige Teile der Bevölkerung fehlen.",
                    "explanation": "Convenience-Sampling ist nicht zufällig und kann zu Selektionsverzerrungen führen."
                  }
                ],
                "recap": [
                  "Definieren Sie die Grundgesamtheit, den Stichprobenrahmen, die Methode und den Umfang.",
                  "Verwenden Sie Zufallsstichproben oder geschichtete Stichproben, um Verzerrungen zu reduzieren.",
                  "Vermeiden Sie Convenience-Stichproben für Rückschlüsse und prüfen Sie die Repräsentativität."
                ]
              }
            },
            {
              "id": "G2.3",
              "order": 3,
              "title": "Messsystemanalyse",
              "objective": "Führen Sie eine Gage R&R durch und interpretieren Sie %GRR und die Anzahl unterschiedlicher Kategorien.",
              "content": {
                "why": "Messabweichungen können wie Prozessabweichungen aussehen. Stellen Sie vor der Fähigkeitsanalyse oder dem Testen von Hypothesen sicher, dass das Messsystem gute von schlechten Teilen unterscheiden kann.",
                "what": "Bei der Messsystemanalyse wird die Genauigkeit anhand von Bias, Linearität und Stabilität sowie die Präzision anhand von Wiederholbarkeit und Reproduzierbarkeit bewertet. Wiederholbarkeit ist die Variation, wenn ein Gutachter dasselbe Teil wiederholt misst. Unter Reproduzierbarkeit versteht man die Abweichung zwischen Gutachtern, die dieselben Teile messen. Eine Gage R&R-Studie schätzt beides. %GRR vergleicht die Messabweichung mit der Gesamtabweichung; niedriger ist besser. Die Anzahl der unterschiedlichen Kategorien (NDC) gibt an, wie viele verschiedene Ebenen das System unterscheiden kann.",
                "how": [
                  "Wählen Sie zehn Teile aus, die den realen Prozessbereich abdecken.",
                  "Beauftragen Sie zwei bis drei Gutachter, die normalerweise die Messung durchführen.",
                  "Lassen Sie jeden Gutachter jedes Teil zwei- oder dreimal in zufälliger Reihenfolge und blind messen.",
                  "Analysieren Sie die Studie in Minitab unter Statistik > Qualitätstools > Gage-Studie > Gage R&R oder in einer validierten Excel-Vorlage.",
                  "Interpretieren Sie %GRR: unter 10 % ist im Allgemeinen akzeptabel, 10–30 % sind bedingt akzeptabel und über 30 % sind normalerweise inakzeptabel.",
                  "NDC prüfen; fünf oder mehr Kategorien sind wünschenswert. Wenn es schwach ist, verbessern Sie das System, bevor Sie Prozessdaten sammeln."
                ],
                "where": "Verwenden Sie Gage R&R für Maßprüfungen, Labortests, Anrufbearbeitungszeiten, Umfragebewertungen und alle Messungen, die eine Entscheidung beeinflussen. Beispiel: Ein Messsystem hat 18 % GRR und vier verschiedene Kategorien. Es ist bedingt akzeptabel, daher verbessert das Team die Vorrichtung, bevor es die Daten für eine Fähigkeitsstudie verwendet.",
                "when_not": "Führen Sie bei zerstörenden Tests keinen standardmäßigen Gage R&R durch; Verwenden Sie ein verschachteltes Design. Verwenden Sie nicht nur einen Gutachter, da dies die Reproduzierbarkeit beeinträchtigt. Lassen Sie die MSA nicht aus, wenn die Daten eine kostspielige Entscheidung rechtfertigen.",
                "common_mistakes": [
                  "Verwendung von Teilen, die nicht den Prozessbereich repräsentieren.",
                  "Versäumnis, Gutachter hinsichtlich früherer Messwerte blind zu machen.",
                  "Den Prozess für die durch das Messsystem verursachten Abweichungen verantwortlich machen."
                ],
                "quick_check": [
                  {
                    "q": "Was ist der Unterschied zwischen Wiederholbarkeit und Reproduzierbarkeit?",
                    "answer": "Wiederholbarkeit ist die Abweichung eines Gutachters am gleichen Teil; Reproduzierbarkeit ist die Variation zwischen Gutachtern.",
                    "explanation": "Gage R&R trennt Gerätevariationen von Gutachtervariationen."
                  },
                  {
                    "q": "Was misst %GRR?",
                    "answer": "Messvariation als Prozentsatz der Gesamtvariation.",
                    "explanation": "Ein niedrigerer %GRR bedeutet, dass das Messsystem tatsächliche Prozessunterschiede besser erkennen kann."
                  },
                  {
                    "q": "Welcher NDC-Wert ist wünschenswert?",
                    "answer": "Fünf oder mehr unterschiedliche Kategorien.",
                    "explanation": "NDC gibt an, wie viele Stufen das Messsystem unterscheiden kann."
                  }
                ],
                "recap": [
                  "MSA prüft, ob das Messsystem genau und präzise genug ist.",
                  "Gage R&R trennt Wiederholbarkeit von Reproduzierbarkeit.",
                  "Verwenden Sie %GRR und NDC, um zu entscheiden, ob das Messsystem verbessert werden soll."
                ]
              }
            },
            {
              "id": "G2.4",
              "order": 4,
              "title": "Beschreibende Statistik",
              "objective": "Berechnen und interpretieren Sie Mittelwert, Median, Standardabweichung und Bereich.",
              "content": {
                "why": "Deskriptive Statistiken fassen Zentrum, Ausbreitung und Form vor der Schlussfolgerung zusammen. Sie offenbaren Ausreißer, Abweichungen und Instabilitäten, die ein Durchschnittswert allein verbergen würde.",
                "what": "Der Mittelwert ist das arithmetische Mittel. Der Median ist der Mittelwert bei der Sortierung der Daten. Der Modus ist der häufigste Wert. Der Bereich ist das Maximum minus das Minimum. Die Standardabweichung schätzt den typischen Abstand vom Mittelwert und die Varianz ist sein Quadrat. Der Interquartilbereich ist das dritte Quartil minus das erste Quartil. Verwenden Sie Median und IQR für verzerrte Daten oder Daten mit Ausreißern. Verwenden Sie Mittelwert und Standardabweichung für ungefähr symmetrische Daten.",
                "how": [
                  "Zeichnen Sie die Daten grafisch auf, bevor Sie sie zusammenfassen.",
                  "Berechnen Sie den Mittelpunkt mit Mittelwert oder Median.",
                  "Berechnen Sie die Streuung mit Standardabweichung, Spanne oder IQR.",
                  "Suchen Sie nach Ausreißern, Verzerrungen und mehreren Spitzen.",
                  "Wählen Sie die Zusammenfassung, die zur Form und zur Frage passt."
                ],
                "where": "Verwenden Sie deskriptive Statistiken für Baselines, Vorher-Nachher-Vergleiche, Fähigkeitseingaben und Datenqualitätsprüfungen. Beispiel: Die Servicezeiten betragen 10, 12, 11, 13, 12 und 60 Minuten. Der Mittelwert liegt bei etwa 19,7 Minuten, der Median liegt jedoch bei 12 Minuten, da der 60-Minuten-Wert ein Ausreißer ist. Die Angabe nur des Mittelwerts würde die typische Erfahrung übertreiben.",
                "when_not": "Verwenden Sie den Mittelwert nicht allein für verzerrte Daten oder Daten mit Ausreißern. Vergleichen Sie Standardabweichungen nicht ohne Kontext und ignorieren Sie nicht die zeitliche Reihenfolge, wenn sich der Prozess möglicherweise verschiebt.",
                "common_mistakes": [
                  "Angabe eines Mittelwerts für stark verzerrte Daten.",
                  "Verwendung der Standardabweichung ohne Prüfung auf Ausreißer.",
                  "Verwendung von Populationsformeln, wenn es sich bei den Daten um eine Stichprobe handelt."
                ],
                "quick_check": [
                  {
                    "q": "Welche Zusammenfassung ist robuster gegenüber Ausreißern?",
                    "answer": "Der Median.",
                    "explanation": "Der Median hängt von der Position und nicht von der Größe der Extremwerte ab."
                  },
                  {
                    "q": "Was beschreibt die Standardabweichung?",
                    "answer": "Die typische Streuung der Daten um den Mittelwert.",
                    "explanation": "Eine größere Standardabweichung bedeutet mehr Variation."
                  },
                  {
                    "q": "Warum Daten grafisch darstellen, bevor Statistiken berechnet werden?",
                    "answer": "Um Formen, Ausreißer, Lücken und mehrere Spitzen zu sehen, die eine einzelne Zahl verbirgt.",
                    "explanation": "Grafiken verhindern irreführende Zusammenfassungen."
                  }
                ],
                "recap": [
                  "Mittelwert, Median, Standardabweichung, Bereich und IQR beschreiben verschiedene Aspekte von Daten.",
                  "Verwenden Sie Median und IQR für verzerrte Daten oder Ausreißer.",
                  "Stellen Sie die Daten immer grafisch dar, bevor Sie eine Zusammenfassung auswählen."
                ]
              }
            },
            {
              "id": "G2.5",
              "order": 5,
              "title": "Normalverteilung",
              "objective": "Verwenden Sie die 68-95-99,7-Regel und überprüfen Sie die Normalität vor der Fähigkeitsanalyse.",
              "content": {
                "why": "Viele Fähigkeits- und Hypothesenmethoden gehen von einer ungefähren Normalität aus. Die Normalkurve und die 68-95-99,7-Regel helfen dem Team, Variationen zu interpretieren und zu erkennen, wann diese Annahme unsicher ist.",
                "what": "Eine Normalverteilung ist glockenförmig und symmetrisch und wird durch ihren Mittelwert und ihre Standardabweichung definiert. Etwa 68 % der Werte liegen innerhalb einer Standardabweichung vom Mittelwert, etwa 95 % innerhalb von zwei und etwa 99,7 % innerhalb von drei. Ein Z-Score ist die Anzahl der Standardabweichungen, um die ein Wert vom Mittelwert abweicht: z ist gleich x minus dem Mittelwert, dividiert durch die Standardabweichung. Überprüfen Sie die Normalität mit einem Histogramm, einem Normalwahrscheinlichkeitsdiagramm und einem Test wie Anderson-Darling.",
                "how": [
                  "Zeichnen Sie ein Histogramm und ein Normalwahrscheinlichkeitsdiagramm.",
                  "Führen Sie einen Normalitätstest durch und interpretieren Sie den p-Wert im Kontext.",
                  "Denken Sie daran, dass ein hoher p-Wert keine Normalität beweist; es scheitert nur daran, es abzulehnen.",
                  "Wenn die Verteilung nicht normal ist, ziehen Sie eine Transformation, eine nichtparametrische Methode oder eine andere Verteilung in Betracht.",
                  "Überprüfen Sie die Annahmen nach jeder Transformation erneut."
                ],
                "where": "Verwenden Sie Normalitätsprüfungen vor Fähigkeitsstudien, Regelkarten und T-Tests. Beispiel: Ein Prozess hat einen Mittelwert von 100 und eine Standardabweichung von 10, sodass etwa 95 % der Werte zwischen 80 und 120 liegen. Ein Wert von 125 hat einen Z-Score von 2,5. Verwenden Sie in Excel NORM.DIST oder NORM.S.DIST; Verwenden Sie in Minitab Diagramm > Wahrscheinlichkeitsdiagramm.",
                "when_not": "Gehen Sie bei abweichenden Zykluszeiten, Zählungen oder Proportionen nicht von Normalität aus. Verlassen Sie sich nicht auf einen Normalitätstest mit einer kleinen Stichprobe und transformieren Sie keine Daten, ohne zu erklären, was das transformierte Ergebnis bedeutet.",
                "common_mistakes": [
                  "Behandeln Sie jeden Datensatz als normal.",
                  "Verwendung eines Normalitätstests als einzige Überprüfung.",
                  "Verwechslung der empirischen 95 %-Regel mit einem 95 %-Konfidenzintervall."
                ],
                "quick_check": [
                  {
                    "q": "Ungefähr wie viel Prozent der Normaldaten liegen innerhalb von zwei Standardabweichungen vom Mittelwert?",
                    "answer": "Etwa 95 %.",
                    "explanation": "Die empirische Regel ergibt ungefähr 68 %, 95 % und 99,7 % für eine, zwei und drei Standardabweichungen."
                  },
                  {
                    "q": "Ein Prozess hat einen Mittelwert von 50 und eine Standardabweichung von 5. Wie hoch ist der Z-Score für 62?",
                    "answer": "2.4.",
                    "explanation": "z entspricht (62 - 50) / 5 = 2,4."
                  },
                  {
                    "q": "Ein Normalitätstest ergibt p = 0,01. Was soll das Team tun?",
                    "answer": "Behandeln Sie die Normalität als fragwürdig und ziehen Sie eine Transformation, eine andere Verteilung oder eine nichtparametrische Methode in Betracht.",
                    "explanation": "Ein kleiner p-Wert ist ein Beweis gegen die Normalität."
                  }
                ],
                "recap": [
                  "Normale Daten sind symmetrisch und werden nach Mittelwert und Standardabweichung zusammengefasst.",
                  "Verwenden Sie die 68-95-99,7-Regel und Z-Scores, um die Variation zu interpretieren.",
                  "Überprüfen Sie die Normalität vor Methoden, die sie annehmen."
                ]
              }
            },
            {
              "id": "G2.6",
              "order": 6,
              "title": "Sigma Level und DPMO",
              "objective": "Wandeln Sie Fehler und Chancen in DPMO und Sigma-Ebene um.",
              "content": {
                "why": "Sigma-Level und DPMO stellen Qualität auf einen gemeinsamen Maßstab und verbinden Mängel mit der Prozessfähigkeit. Sie helfen Teams beim Benchmarking und beim Verfolgen von Verbesserungen.",
                "what": "Eine Chance ist die Chance, dass ein Fehler auftritt. DPMO ist Fehler dividiert durch Einheiten mal Chancen, multipliziert mit einer Million. Der Ertrag ist eins minus Mängel dividiert durch Chancen. Das Sigma-Niveau wird aus DPMO unter Verwendung der inversen Normalverteilung ermittelt. Viele Organisationen fügen eine 1,5-Sigma-Verschiebung hinzu, um der langfristigen Abweichung Rechnung zu tragen. Geben Sie immer an, ob es sich um eine kurzfristige oder langfristige Nummer handelt.",
                "how": [
                  "Definieren Sie einen Mangel und eine Chance klar.",
                  "Zählen Sie Fehler, Einheiten und Chancen im gleichen Zeitraum.",
                  "DPMO berechnen: Fehler dividiert durch Einheiten mal Chancen, dann multipliziert mit einer Million.",
                  "Konvertieren Sie DPMO mit der Umkehrnormalen in einen Z-Wert und addieren Sie dann 1,5, wenn Sie die Langzeitkonvention verwenden.",
                  "Verwenden Sie in Excel NORM.S.INV(1 - DPMO/1000000) + 1,5.",
                  "Vergleichen Sie die Basisleistung und die verbesserte Leistung mit denselben Definitionen."
                ],
                "where": "Verwenden Sie DPMO und Sigma-Ebene für Herstellungsfehler, Servicefehler, Prozesse im Gesundheitswesen und Transaktionsarbeiten. Beispiel: 10 Fehler in 1.000 Einheiten mit jeweils fünf Möglichkeiten ergeben 10 geteilt durch 5.000 oder 0,002. Das sind 2.000 DPMO und eine Ausbeute von 99,8 %. Der inverse Normalwert von 0,998 beträgt etwa 2,88; Das Hinzufügen der 1,5-Verschiebung ergibt etwa 4,38 Sigma.",
                "when_not": "Erhöhen Sie nicht die Anzahl der Gelegenheiten, damit die Sigma-Ebene besser aussieht. Verwenden Sie DPMO nicht, wenn Fehlerdefinitionen inkonsistent sind, und vergleichen Sie nicht die Sigma-Ebenen zwischen Prozessen mit unterschiedlichen Opportunity-Definitionen.",
                "common_mistakes": [
                  "Defekte Einheiten werden als Defekte gezählt oder umgekehrt.",
                  "Die falsche Anzahl an Möglichkeiten nutzen.",
                  "Ich habe vergessen anzugeben, ob die 1,5-Schicht angewendet wurde."
                ],
                "quick_check": [
                  {
                    "q": "Fünf Fehler, 500 Einheiten und vier Möglichkeiten pro Einheit. Was ist DPMO?",
                    "answer": "2.500 DPMO.",
                    "explanation": "5 / (500 x 4) = 0,0025, also 2.500 pro Million."
                  },
                  {
                    "q": "Was bedeutet eine 1,5-Sigma-Verschiebung?",
                    "answer": "Eine Anpassung für langfristige Prozessdrift.",
                    "explanation": "Die Verschiebung ist eine Konvention; Das Team muss angeben, ob es verwendet wurde."
                  },
                  {
                    "q": "Warum müssen Chancendefinitionen konsistent sein?",
                    "answer": "Unterschiedliche Opportunity-Zählungen ändern DPMO und Sigma-Level, wodurch Vergleiche ungültig werden.",
                    "explanation": "Das Sigma-Niveau ist nur dann vergleichbar, wenn die Zählregeln gleich sind."
                  }
                ],
                "recap": [
                  "DPMO entspricht Fehlern geteilt durch Einheiten mal Chancen mal eine Million.",
                  "Das Sigma-Niveau ergibt sich aus dem umgekehrten Normalwert der Rendite, häufig mit einer Verschiebung von 1,5.",
                  "Halten Sie die Fehler- und Chancendefinitionen konsistent."
                ]
              }
            },
            {
              "id": "G2.7",
              "order": 7,
              "title": "Cp und Cpk",
              "objective": "Berechnen Sie Fähigkeitsindizes und erklären Sie den Unterschied zwischen potenzieller und tatsächlicher Fähigkeit.",
              "content": {
                "why": "Fähigkeitsindizes vergleichen die Prozessausbreitung und -zentrierung mit Spezifikationsgrenzen. Sie zeigen, ob der Prozess den Anforderungen gerecht wird und ob die Variation reduziert oder neu zentriert werden sollte.",
                "what": "Cp entspricht der Spezifikationsbreite dividiert durch sechs Sigma: (USL – LSL) / (6 Sigma). Es beschreibt die potenzielle Leistungsfähigkeit, wenn der Prozess perfekt zentriert wäre. Cpk entspricht dem Minimum von (USL – Mittelwert) / (3 Sigma) und (Mittelwert – LSL) / (3 Sigma). Es berücksichtigt die Zentrierung, sodass Cpk immer kleiner oder gleich Cp ist. Ppk verwendet das allgemeine Langzeit-Sigma. Ziele sind ein Cpk von mindestens 1,33, wobei 1,67 oder höher stark sind.",
                "how": [
                  "Bestätigen Sie, dass der Prozess stabil ist und die Daten ungefähr normal sind.",
                  "Schätzen Sie das Sigma mithilfe der Variation innerhalb der Untergruppe für Cp und Cpk.",
                  "Berechnen Sie Cp aus der Spezifikationsbreite.",
                  "Berechnen Sie Cpk aus der Entfernung zur nächstgelegenen Spezifikationsgrenze.",
                  "Entscheiden Sie, ob Sie die Variation reduzieren oder den Mittelwert verschieben möchten.",
                  "Überprüfen Sie die Fähigkeit nach der Verbesserung erneut."
                ],
                "where": "Nutzen Sie die Fähigkeitsanalyse für Fertigungstoleranzen, Servicezeitspezifikationen, Labordurchlaufzeiten und Transaktionsgenauigkeit. Beispiel: USL 20, LSL 10, Mittelwert 16 und Sigma 1,5. Cp entspricht 10 / 9 = 1,11. Cpk entspricht dem Minimum von (20 – 16) / 4,5 = 0,89 und (16 – 10) / 4,5 = 1,33, also beträgt Cpk 0,89. Der Prozess ist nicht fähig; Eine Zentrierung des Mittelwerts auf 15 würde den Cpk-Wert auf 1,11 erhöhen.",
                "when_not": "Berechnen Sie Cp oder Cpk nicht für einen instabilen Prozess. Verwenden Sie keinen normalbasierten Fähigkeitsindex für eindeutig nicht normale Daten ohne eine geeignete Methode. Vergleichen Sie keine Indizes, die mit unterschiedlichen Spezifikationen oder Sigma-Konventionen berechnet wurden.",
                "common_mistakes": [
                  "Verwenden Sie das Gesamtsigma, nennen Sie das Ergebnis jedoch Cp.",
                  "Zentrierung ignorieren und nur Cp melden.",
                  "Berechnung der Fähigkeit vor der Stabilitätsprüfung."
                ],
                "quick_check": [
                  {
                    "q": "Was ist der Unterschied zwischen Cp und Cpk?",
                    "answer": "Cp misst die potenzielle Ausbreitung; Cpk berücksichtigt auch die Zentrierung.",
                    "explanation": "Ein Prozess kann einen guten Cp, aber einen schlechten Cpk haben, wenn er außermittig ist."
                  },
                  {
                    "q": "USL 30, LSL 10, Mittelwert 22, Sigma 2. Was sind Cp und Cpk?",
                    "answer": "Cp = 1,67 und Cpk = 1,33.",
                    "explanation": "Cp = 20 / 12 = 1,67; Cpk = min(8/6, 12/6) = 1,33."
                  },
                  {
                    "q": "Ein Prozess hat Cpk 0,8. Was bedeutet das?",
                    "answer": "Der Prozess ist nicht leistungsfähig und führt wahrscheinlich zu Fehlern.",
                    "explanation": "Ein Cpk unter 1,0 bedeutet, dass die Spezifikation enger ist als die Prozessstreuung im Verhältnis zum Mittelwert."
                  }
                ],
                "recap": [
                  "Cp misst die potenzielle Fähigkeit; Cpk misst die tatsächliche Leistungsfähigkeit mit Zentrierung.",
                  "Cpk ist immer kleiner oder gleich Cp.",
                  "Bestätigen Sie Stabilität und Normalität, bevor Sie Fähigkeitsindizes vertrauen."
                ]
              }
            }
          ]
        },
        {
          "id": "green-3",
          "number": 3,
          "title": "Analyze",
          "duration": "4 Stunden",
          "summary": "Verwenden Sie Diagramme, Ursachentools, Risikoanalysen und statistische Tests, um reale Ursachen von Lärm zu trennen.",
          "lessons": [
            {
              "id": "G3.1",
              "order": 1,
              "title": "Grafiken und Datenanzeigen",
              "objective": "Wählen Sie Histogramme, Boxplots, Laufdiagramme und Streudiagramme für die Frage aus.",
              "content": {
                "why": "Diagramme offenbaren Muster, Ausreißer und Beziehungen, die zusammenfassende Statistiken verbergen. Durch die richtige Anzeige sind die Daten leicht zu interpretieren; Die falsche Anzeige kann das Team in die Irre führen.",
                "what": "Ein Histogramm zeigt die Verteilung kontinuierlicher Daten: Form, Mitte, Streuung, Lücken und Ausreißer. Ein Boxplot vergleicht Verteilungen zwischen Gruppen anhand des Medians, der Quartile, des Interquartilbereichs und der Ausreißer. Ein Laufdiagramm stellt Daten in zeitlicher Reihenfolge dar, um Trends, Verschiebungen und Zyklen aufzuzeigen. Ein Streudiagramm zeigt die Beziehung zwischen zwei kontinuierlichen Variablen, einschließlich Richtung, Stärke, Form und Ausreißern.",
                "how": [
                  "Geben Sie die Frage an, die die Grafik beantworten soll.",
                  "Identifizieren Sie die Datentypen und die Anzahl der Gruppen.",
                  "Wählen Sie die Anzeige: Histogramm oder Boxplot für die Verteilung, Laufdiagramm für die Zeit, Streudiagramm für Beziehungen.",
                  "Beschriften Sie beide Achsen, Einheiten und Zeitraum.",
                  "Zeichnen Sie alle Daten grafisch auf und suchen Sie nach Mustern oder ungewöhnlichen Punkten.",
                  "Vergleichen Sie das Muster mit dem Prozesswissen, bevor Sie Schlussfolgerungen ziehen."
                ],
                "where": "Verwenden Sie im gesamten DMAIC Diagramme. In einem Callcenter zeigt ein Histogramm die Verteilung der Bearbeitungszeit, ein Boxplot vergleicht Teams, ein Laufdiagramm zeigt tägliche Trends und ein Streudiagramm untersucht die Bearbeitungszeit im Vergleich zur Zufriedenheit. Im Gesundheitswesen kann ein Laufdiagramm die Wartezeit vor und nach einer Änderung anzeigen; Ein Boxplot kann Bezirke vergleichen.",
                "when_not": "Verwenden Sie kein Histogramm für kategoriale Daten. Verwenden Sie kein Streudiagramm, wenn eine Variable kategorial ist. Vermeiden Sie 3D- oder Kreisdiagramme, wenn es auf einen präzisen Vergleich ankommt, und kürzen Sie keine Achsen, um Unterschiede zu übertreiben.",
                "common_mistakes": [
                  "Auswahl eines Diagramms, das nicht zur Frage oder zum Datentyp passt.",
                  "Eine Achse kürzen, sodass eine kleine Änderung groß aussieht.",
                  "Ein Muster in einem Diagramm als Beweis für die Ursache behandeln."
                ],
                "quick_check": [
                  {
                    "q": "Welches Diagramm zeigt die Verteilung kontinuierlicher Daten am besten?",
                    "answer": "Ein Histogramm.",
                    "explanation": "Histogramme gruppieren kontinuierliche Werte in Klassen und zeigen Form und Streuung."
                  },
                  {
                    "q": "Welches Diagramm vergleicht die Verteilungen über mehrere Gruppen hinweg?",
                    "answer": "Ein Boxplot.",
                    "explanation": "Boxplots zeigen Median, Quartile und Ausreißer für jede Gruppe."
                  },
                  {
                    "q": "Welcher Graph zeigt die Beziehung zwischen zwei kontinuierlichen Variablen?",
                    "answer": "Ein Streudiagramm.",
                    "explanation": "Streudiagramme zeigen gepaarte Werte an und verraten Richtung und Stärke."
                  }
                ],
                "recap": [
                  "Passen Sie das Diagramm an die Frage und den Datentyp an.",
                  "Histogramme und Boxplots zeigen Verteilungen; Laufdiagramme zeigen die Zeit an; Streudiagramme zeigen Zusammenhänge.",
                  "Diagramme deuten auf Muster hin, die Ursachen bedürfen jedoch einer weiteren Analyse."
                ]
              }
            },
            {
              "id": "G3.2",
              "order": 2,
              "title": "Ursachenanalyse",
              "objective": "Kombinieren Sie Fishbone, 5 Whys, Stratifizierung und Prozessbeobachtung.",
              "content": {
                "why": "Teams suchen oft nach Lösungen, bevor sie das Problem verstehen. Eine strukturierte Ursachenanalyse erhöht die Sicherheit, dass die Lösung die tatsächliche Ursache und nicht ein Symptom behebt.",
                "what": "Die Ursachenanalyse ist eine strukturierte Untersuchung, die Prozessbeobachtung, Fischgrätendiagramme, 5 Whys, Stratifizierung, Pareto-Analyse und statistische Überprüfungen kombiniert. Bei der Schichtung werden die Daten nach Schicht, Produkt, Region, Betreiber oder einem anderen Faktor aufgeteilt, um zu sehen, wo sich das Problem konzentriert. Eine Grundursache ist der zugrunde liegende Grund, warum ein Problem auftritt. Mitwirkende Ursachen machen es schlimmer oder wahrscheinlicher.",
                "how": [
                  "Definieren Sie das Problem mit Daten und einer klaren Metrik.",
                  "Ordnen Sie den Prozess zu und beobachten Sie die Arbeit dort, wo sie stattfindet.",
                  "Brainstorming möglicher Ursachen mithilfe eines Fischgrätendiagramms.",
                  "Stratifizieren Sie die Daten, um einzugrenzen, wo und wann das Problem auftritt.",
                  "Verwenden Sie 5 Warums für die wahrscheinlichsten Ursachen und überprüfen Sie jede Antwort.",
                  "Bestätigen Sie die Ursache anhand von Daten, einem Pilotprojekt oder einem geplanten Vergleich.",
                  "Wählen Sie die Grundursache aus und verknüpfen Sie sie mit einer umsetzbaren Lösung."
                ],
                "where": "Nutzen Sie die Ursachenanalyse für Mängel, Verzögerungen, Fehler, Beschwerden und Vorfälle. Beispiel: Laborberichte sind verspätet. Die Schichtung zeigt, dass sich das Problem auf Statistiktests in der Abendschicht konzentriert. Ein Fishbone und 5 Whys deuten darauf hin, Statistiktests mit Routinetests zu bündeln. Ein Pilot mit Prioritätsabschaltung bestätigt die Ursache und reduziert verspätete Meldungen.",
                "when_not": "Beginnen Sie nicht mit der Ursachenanalyse, bevor das Problem klar definiert ist. Verwenden Sie keine vollständige Untersuchung für eine einfache, bekannte Lösung. Bleiben Sie nicht bei der Korrelation oder der ersten plausiblen Ursache stehen.",
                "common_mistakes": [
                  "Zuerst eine Lösung wählen und dann nach unterstützenden Ursachen suchen.",
                  "Akzeptieren einer einzelnen Ursache, ohne Wechselwirkungen zu prüfen.",
                  "Die Leute an vorderster Front, die wissen, wie die Arbeit wirklich abläuft, werden außen vor gelassen."
                ],
                "quick_check": [
                  {
                    "q": "Was bewirkt die Schichtung?",
                    "answer": "Es teilt Daten in Gruppen auf, um zu sehen, wo sich ein Problem konzentriert.",
                    "explanation": "Durch die Schichtung nach Schicht, Produkt oder Region lässt sich die Ursache oft schnell eingrenzen."
                  },
                  {
                    "q": "Warum Fischgrätenmuster und 5 Warums kombinieren?",
                    "answer": "Fishbone erweitert die Suche nach Ursachen; 5 Whys geht auf wahrscheinliche ein.",
                    "explanation": "Gemeinsam unterstützen sie sowohl divergentes als auch fokussiertes Denken."
                  },
                  {
                    "q": "Wie soll eine vermutete Grundursache bestätigt werden?",
                    "answer": "Mit Daten, einem Pilotprojekt oder einem entworfenen Vergleich.",
                    "explanation": "Eine plausible Ursache reicht nicht aus; es muss getestet werden."
                  }
                ],
                "recap": [
                  "Die Ursachenanalyse kombiniert Beobachtung, Ursachentools, Schichtung und Daten.",
                  "Bestätigen Sie die Ursache, bevor Sie eine Lösung implementieren.",
                  "Beziehen Sie das Wissen an vorderster Front ein und vermeiden Sie Schuldzuweisungen."
                ]
              }
            },
            {
              "id": "G3.3",
              "order": 3,
              "title": "FMEA",
              "objective": "Bewerten Sie Schweregrad, Auftreten und Erkennung und priorisieren Sie Fehlermodi.",
              "content": {
                "why": "FMEA findet Fehlerarten, bevor sie Schaden verursachen, sodass das Team Probleme verhindern kann, anstatt auf sie zu reagieren. Dies ist besonders wertvoll, wenn sich ein Prozess oder Design ändert.",
                "what": "Die Fehlermöglichkeits- und Auswirkungsanalyse listet jeden Fehlermodus, seine Auswirkung, seinen Schweregrad, seine Ursache, sein Auftreten, seine aktuellen Kontrollen und seine Erkennung auf. Schweregrad, Vorkommen und Entdeckung werden mit 1 bis 10 bewertet. Die Risikoprioritätszahl ist Schweregrad mal Vorkommen mal Entdeckung. Eine höhere RPN bedeutet eine höhere Priorität, aber ein hoher Schweregrad erfordert Aufmerksamkeit, selbst wenn die RPN niedrig ist. Einige Organisationen verwenden Aktionsprioritätstabellen anstelle von RPN.",
                "how": [
                  "Definieren Sie den Prozess- oder Designumfang und stellen Sie ein funktionsübergreifendes Team zusammen.",
                  "Fehlermodi auflisten: Wie der Schritt fehlschlagen könnte.",
                  "Beschreiben Sie die Auswirkung auf den Kunden oder den nachgelagerten Schritt und bewerten Sie den Schweregrad.",
                  "Identifizieren Sie Ursachen und bewerten Sie das Auftreten.",
                  "Listen Sie aktuelle Kontrollen und Score-Erkennung auf.",
                  "Berechnen Sie die RPN und priorisieren Sie Elemente mit hohem Schweregrad und hoher RPN.",
                  "Weisen Sie Aktionen, Eigentümer und Daten zu und bewerten Sie die Aktionen anschließend erneut."
                ],
                "where": "Nutzen Sie FMEA in den Bereichen Fertigung, Gesundheitswesen, Software, Service und Design. Beispiel: Die Eingabe einer Medikamentenverordnung kann aufgrund einer falschen Dosierung fehlschlagen. Der Schweregrad ist 9, das Vorkommen ist 4 und die Erkennung ist 3, was einen RPN von 108 ergibt. Durch Hinzufügen des Barcode-Scannens wird das Vorkommen auf 1 und die Erkennung auf 2 reduziert, wodurch der RPN auf 18 gesenkt wird.",
                "when_not": "Führen Sie FMEA nicht als einmalige bürokratische Übung durch. Lassen Sie nicht zu, dass ein niedriger RPN einen hohen Schweregradwert außer Kraft setzt, und erzielen Sie keine Punkte ohne die Personen, die den Prozess kennen.",
                "common_mistakes": [
                  "Vage Fehlermodi, auf die nicht reagiert werden kann.",
                  "Werte erhöhen oder verringern, um sie an eine bevorzugte Priorität anzupassen.",
                  "Keine zugewiesenen Aktionen oder keine erneute Bewertung nach Verbesserungen."
                ],
                "quick_check": [
                  {
                    "q": "Wie wird der RPN berechnet?",
                    "answer": "Schweregrad mal Auftreten mal Erkennung.",
                    "explanation": "Jeder Faktor wird mit 1 bis 10 bewertet, sodass der RPN zwischen 1 und 1.000 liegt."
                  },
                  {
                    "q": "Warum kann ein schwerwiegender Fehler auch bei einer niedrigen RPN Maßnahmen erfordern?",
                    "answer": "Die Folgen können unabhängig von der Häufigkeit inakzeptabel sein.",
                    "explanation": "Der Schweregrad spiegelt den Schaden wider, nicht nur die Wahrscheinlichkeit."
                  },
                  {
                    "q": "Was soll passieren, nachdem Maßnahmen umgesetzt wurden?",
                    "answer": "Bewerten Sie Schweregrad, Vorkommen und Erkennung erneut, um die Risikominderung zu bestätigen.",
                    "explanation": "FMEA ist ein lebendiges Dokument, keine einmalige Liste."
                  }
                ],
                "recap": [
                  "FMEA priorisiert Fehlermodi anhand von Schweregrad, Auftreten, Erkennung und RPZ.",
                  "Ein hoher Schweregrad verdient immer Aufmerksamkeit.",
                  "Weisen Sie Maßnahmen zu und bewerten Sie sie erneut, um die Risikominderung zu bestätigen."
                ]
              }
            },
            {
              "id": "G3.4",
              "order": 4,
              "title": "Grundlagen des Hypothesentests",
              "objective": "Bilden Sie Null- und Alternativhypothesen und interpretieren Sie p-Werte richtig.",
              "content": {
                "why": "Green Belts müssen wissen, ob ein beobachteter Unterschied real ist oder einfach auf Zufall beruht. Das Testen von Hypothesen verhindert, dass Teams auf Lärm reagieren und tatsächliche Auswirkungen übersehen.",
                "what": "Die Nullhypothese besagt, dass es keinen Unterschied oder keinen Effekt gibt. Die Alternative gibt einen Unterschied oder Effekt an. Wählen Sie einen Test basierend auf Datentyp und Design: T-Test bei einer Stichprobe, T-Test bei zwei Stichproben, gepaarter T-Test, ANOVA, Chi-Quadrat-Test oder ein Proportionaltest. Das Signifikanzniveau Alpha liegt häufig bei 0,05. Der p-Wert ist die Wahrscheinlichkeit, dass Daten mindestens so extrem sind wie beobachtet, vorausgesetzt, dass der Nullwert wahr ist. Es ist nicht die Wahrscheinlichkeit, dass die Null wahr ist.",
                "how": [
                  "Formulieren Sie die praktische Frage.",
                  "Schreiben Sie die Null- und Alternativhypothese auf.",
                  "Wählen Sie Alpha und den entsprechenden Test.",
                  "Überprüfen Sie die Testannahmen.",
                  "Führen Sie den Test durch und lesen Sie den p-Wert und das Konfidenzintervall ab.",
                  "Wenn p kleiner als Alpha ist, lehnen Sie die Null ab. Andernfalls lehnen Sie es nicht ab.",
                  "Interpretieren Sie die Effektgröße und die praktische Bedeutung."
                ],
                "where": "Verwenden Sie Hypothesentests, um Schichten, Lieferanten, Vorher-Nachher-Leistungen oder Gruppen zu vergleichen. Beispiel: Vergleichen Sie die mittlere Durchlaufzeit für zwei Schichten. Die Null bedeutet gleich; Die Alternative sind andere Mittel. Ein t-Test bei zwei Stichproben ergibt p = 0,02 mit Alpha 0,05, also lehnen Sie die Null ab. Das 95 %-Konfidenzintervall für die Differenz beträgt 2 bis 18 Minuten, was in der Praxis wichtig sein kann oder auch nicht.",
                "when_not": "Testen Sie keinen instabilen Prozess. Suchen Sie nicht nach p-Werten, indem Sie viele Kombinationen testen. Verwechseln Sie statistische Signifikanz nicht mit praktischer Signifikanz und verwenden Sie keinen Zwei-Stichproben-Test, wenn die Daten gepaart werden.",
                "common_mistakes": [
                  "Der p-Wert ist die Wahrscheinlichkeit, dass die Null wahr ist.",
                  "Sagen Sie „Akzeptiere die Null“ statt „Akzeptiere die Null nicht.“",
                  "Ignorieren von Annahmen, Effektgrößen oder mehreren Tests."
                ],
                "quick_check": [
                  {
                    "q": "Was bedeutet p = 0,03 mit Alpha 0,05?",
                    "answer": "Lehnen Sie die Nullhypothese ab.",
                    "explanation": "Es ist unwahrscheinlich, dass das beobachtete Ergebnis auf dem gewählten Signifikanzniveau unter Null liegt."
                  },
                  {
                    "q": "Was bedeutet p = 0,20 mit Alpha 0,05?",
                    "answer": "Die Nullhypothese kann nicht abgelehnt werden.",
                    "explanation": "Es gibt nicht genügend Beweise, um die Null abzulehnen; Die Null ist nicht wahr."
                  },
                  {
                    "q": "Was ist ein Fehler vom Typ I?",
                    "answer": "Ablehnung einer wahren Nullhypothese.",
                    "explanation": "Ein Fehler vom Typ I ist ein falsch positives Ergebnis. Alpha ist seine Wahrscheinlichkeit."
                  }
                ],
                "recap": [
                  "Hypothesentests vergleichen beobachtete Effekte mit dem Zufall.",
                  "Interpretieren Sie p-Werte im Vergleich zu Alpha und berichten Sie über die Effektgröße.",
                  "Statistische Signifikanz bedeutet nicht automatisch praktische Bedeutung."
                ]
              }
            },
            {
              "id": "G3.5",
              "order": 5,
              "title": "Korrelation",
              "objective": "Messen Sie die Stärke und Richtung einer linearen Beziehung.",
              "content": {
                "why": "Mithilfe der Korrelation können Teams nach Beziehungen zwischen Variablen suchen und entscheiden, wo weitere Untersuchungen durchgeführt werden sollen. Es ist auch eine häufige Quelle falscher Schlussfolgerungen, wenn ein Kausalzusammenhang angenommen wird.",
                "what": "Der Korrelationskoeffizient r reicht von -1 bis +1. Ein Wert nahe +1 weist auf eine starke positive lineare Beziehung hin; nahe -1 weist auf eine starke negative Beziehung hin; nahe 0 weist auf eine geringe oder keine lineare Beziehung hin. Das Quadrat von r ist der Variationsanteil, den die beiden Variablen gemeinsam haben. Die Pearson-Korrelation wird für lineare Beziehungen zwischen kontinuierlichen Variablen verwendet; Die Spearman-Korrelation wird für monotone Beziehungen, ordinale Daten oder Daten mit Ausreißern verwendet.",
                "how": [
                  "Zeichnen Sie ein Streudiagramm, bevor Sie die Korrelation berechnen.",
                  "Prüfen Sie auf Linearität, Ausreißer und separate Gruppen.",
                  "Wählen Sie basierend auf den Daten Pearson oder Spearman.",
                  "Berechnen Sie r und, falls erforderlich, seinen p-Wert.",
                  "Interpretieren Sie Stärke und Richtung im Kontext.",
                  "Untersuchen Sie die Ursache mit einem Experiment oder einem stärkeren Design."
                ],
                "where": "Verwenden Sie die Korrelation, um Variablen vor der Regression oder der Versuchsplanung zu überprüfen. Beispiele hierfür sind Lernstunden im Vergleich zu Prüfungsergebnissen, Wartezeit im Vergleich zur Zufriedenheit oder Temperatur im Vergleich zur Fehlerrate. Wenn Lernstunden und Punktzahl r = 0,6 haben, ist die Beziehung moderat und positiv, und das R-Quadrat beträgt 0,36, was bedeutet, dass 36 % der Variation geteilt werden.",
                "when_not": "Verwenden Sie Korrelation nicht für eindeutig nichtlineare Beziehungen. Verwenden Sie es nicht mit kategorialen Daten. Verwenden Sie stattdessen einen Chi-Quadrat-Test. Schließen Sie nicht aus der Korrelation auf eine Kausalität, da das Muster durch Verwirrung, umgekehrte Kausalität oder Zufall erklärt werden kann.",
                "common_mistakes": [
                  "Schlussfolgerung, dass eine Variable die andere verursacht.",
                  "Ignorieren von Ausreißern oder gekrümmten Mustern, die r verzerren.",
                  "Kombinieren verschiedener Gruppen und Erstellen einer irreführenden Gesamtkorrelation."
                ],
                "quick_check": [
                  {
                    "q": "Was bedeutet r = -0,8?",
                    "answer": "Eine starke negative lineare Beziehung.",
                    "explanation": "Wenn eine Variable zunimmt, nimmt die andere tendenziell ab."
                  },
                  {
                    "q": "Was bedeutet r = 0?",
                    "answer": "Keine lineare Beziehung.",
                    "explanation": "Möglicherweise besteht immer noch ein nichtlinearer Zusammenhang, weshalb ein Streudiagramm wichtig ist."
                  },
                  {
                    "q": "Beweist Korrelation eine Kausalität?",
                    "answer": "Nein. Es wird nur die Assoziation angezeigt.",
                    "explanation": "Durch Verwirrung, umgekehrte Kausalität oder Zufall kann eine Korrelation entstehen."
                  }
                ],
                "recap": [
                  "Korrelation misst die Stärke und Richtung einer linearen Beziehung.",
                  "Stellen Sie die Daten zunächst grafisch dar und prüfen Sie sie auf Ausreißer und Nichtlinearität.",
                  "Korrelation ist keine Kausalität."
                ]
              }
            },
            {
              "id": "G3.6",
              "order": 6,
              "title": "Einfache Regression",
              "objective": "Passen Sie eine Linie an, interpretieren Sie Steigung und R-Quadrat und prüfen Sie die Residuen.",
              "content": {
                "why": "Die Regression quantifiziert eine Beziehung und ermöglicht eine Vorhersage, nicht nur eine Erkennung. Es schätzt, wie stark eine Änderung einer Variablen mit einer Änderung der Antwort verbunden ist.",
                "what": "Eine einfache lineare Regression passt eine Linie an: y ist gleich b0 plus b1 mal x, plus Fehler. Die Steigung b1 ist die vorhergesagte Änderung von y für einen Anstieg von x um eine Einheit. Der Achsenabschnitt b0 ist das vorhergesagte y, wenn x Null ist, was möglicherweise nicht aussagekräftig ist. R-Quadrat ist der Anteil der Variation in y, der durch x erklärt wird. Es wird ein Residuum beobachtet minus vorhergesagt. Überprüfen Sie Linearität, Unabhängigkeit, konstante Varianz und normale Residuen, bevor Sie der Inferenz vertrauen.",
                "how": [
                  "Zeichnen Sie ein Streudiagramm und prüfen Sie, ob ein lineares Muster vorliegt.",
                  "Passen Sie das Modell in Excel mithilfe von Regression oder LINEST oder in Minitab mithilfe von Statistik > Regression > Regressionsmodell anpassen an.",
                  "Interpretieren Sie Steigung, Achsenabschnitt, R-Quadrat, p-Wert und Konfidenzintervall.",
                  "Untersuchen Sie Residuendiagramme auf Krümmung, sich ändernde Streuung und Ausreißer.",
                  "Überprüfen Sie Einflusspunkte und die Reichweite der Daten.",
                  "Verwenden Sie das Modell zur Vorhersage nur innerhalb des beobachteten Bereichs."
                ],
                "where": "Nutzen Sie die Regression für Kostentreiber, Zykluszeit, Qualität und Prozessoptimierung. Beispiel: Wartezeit versus Zufriedenheit hat eine Steigung von -0,8 Punkten pro Minute und ein R-Quadrat von 0,45. Eine Steigerung um zehn Minuten ist mit einem um etwa acht Punkte niedrigeren Zufriedenheitswert verbunden. Das Modell erklärt 45 % der Variation, daher spielen auch andere Faktoren eine Rolle.",
                "when_not": "Verwenden Sie die einfache Regression nicht für eine eindeutig gekrümmte Beziehung. Extrapolieren Sie nicht über den Datenbereich hinaus und behaupten Sie nicht, dass die Ursache auf einer beobachteten Regression beruht. Passen Sie ein Modell nicht an einen instabilen Prozess oder an aggregierte Gruppen an, ohne die zugrunde liegenden Daten zu überprüfen.",
                "common_mistakes": [
                  "Betrachten Sie ein hohes R-Quadrat als Beweis dafür, dass das Modell korrekt ist.",
                  "Ignorieren von Restdiagrammen und einflussreichen Ausreißern.",
                  "Verwenden Sie die Regression, um zu behaupten, dass x y verursacht."
                ],
                "quick_check": [
                  {
                    "q": "Was bedeutet die Steigung bei der einfachen Regression?",
                    "answer": "Die vorhergesagte Änderung der Antwort für einen Anstieg des Prädiktors um eine Einheit.",
                    "explanation": "Die Steigung schätzt die Stärke und Richtung der linearen Beziehung."
                  },
                  {
                    "q": "Was misst das R-Quadrat?",
                    "answer": "Der Anteil der Variation in der Antwort, die durch das Modell erklärt wird.",
                    "explanation": "Das R-Quadrat reicht von 0 bis 1 und stellt an sich kein gutes Modell dar."
                  },
                  {
                    "q": "Warum Restplots prüfen?",
                    "answer": "Zur Erkennung von Krümmungen, ungleicher Ausbreitung, Ausreißern und anderen Verstößen gegen Annahmen.",
                    "explanation": "Restmuster offenbaren Probleme, die zusammenfassende Statistiken verbergen können."
                  }
                ],
                "recap": [
                  "Die einfache Regression schätzt eine lineare Beziehung und unterstützt die Vorhersage.",
                  "Interpretieren Sie Steigung, R-Quadrat und Residuen gemeinsam.",
                  "Extrapolieren oder schließen Sie keine Kausalität allein aus der Regression."
                ]
              }
            },
            {
              "id": "G3.7",
              "order": 7,
              "title": "ANOVA-Einführung",
              "objective": "Vergleichen Sie Mittelwerte über drei oder mehr Gruppen und lesen Sie den F-Test.",
              "content": {
                "why": "Der Vergleich mehrerer Gruppen mit wiederholten T-Tests erhöht die Wahrscheinlichkeit eines falsch positiven Ergebnisses. ANOVA testet, ob sich irgendwelche Gruppenmittelwerte unterscheiden, während gleichzeitig die Gesamtfehlerrate kontrolliert wird.",
                "what": "ANOVA steht für Varianzanalyse. Die Nullhypothese besagt, dass alle Gruppenmittelwerte gleich sind; Die Alternative besteht darin, dass mindestens ein Mittelwert unterschiedlich ist. Die F-Statistik ist die Variation zwischen Gruppen geteilt durch die Variation innerhalb der Gruppe. Ein großes F bedeutet, dass die Unterschiede zwischen den Gruppen im Vergleich zum Rauschen innerhalb der Gruppen groß sind. Ein signifikantes Ergebnis gibt nicht an, welche Gruppe sich unterscheidet; Verwenden Sie einen Post-hoc-Test wie Tukey.",
                "how": [
                  "Definieren Sie die Reaktion und die Gruppen.",
                  "Plotbox-Plots, um das Muster zu erkennen und auf Ausreißer zu prüfen.",
                  "Überprüfen Sie die Annahmen: unabhängige Gruppen, ungefähr normale Residuen und ähnliche Streuung.",
                  "Führen Sie eine einfaktorielle ANOVA in Excel Data Analysis oder Minitab aus.",
                  "Lesen Sie die F-Statistik und den p-Wert.",
                  "Wenn dies signifikant ist, führen Sie einen Post-hoc-Test durch, um die unterschiedlichen Gruppen zu identifizieren.",
                  "Geben Sie die Effektgröße und die praktische Bedeutung an, nicht nur den p-Wert."
                ],
                "where": "Verwenden Sie ANOVA, um Lieferanten, Schichten, Maschinen, Regionen, Schulungsmethoden oder Abteilungen zu vergleichen. Beispiel: Die mittlere Anrufbearbeitungszeit über vier Teams ergibt F = 4,8 und p = 0,004, sodass mindestens ein Team unterschiedlich ist. Ein Tukey-Vergleich zeigt, dass Team C langsamer ist. Anschließend untersucht das Team Arbeitsbelastung, Personalbesetzung und Prozessunterschiede.",
                "when_not": "Verwenden Sie keine gewöhnliche einfaktorielle ANOVA für wiederholte Messungen an denselben Einheiten ohne das entsprechende Modell. Verwenden Sie es nicht, wenn Annahmen schwerwiegend verletzt werden. Betrachten Sie die Welch-ANOVA oder Kruskal-Wallis. Verwenden Sie einen T-Test für zwei Gruppen.",
                "common_mistakes": [
                  "Führen Sie viele t-Tests anstelle einer ANOVA durch.",
                  "Stoppen bei einem signifikanten p-Wert ohne Post-hoc-Test.",
                  "Ungleiche Varianzen oder nicht normale Residuen werden ignoriert."
                ],
                "quick_check": [
                  {
                    "q": "Was testet ANOVA?",
                    "answer": "Ob sich die Mittelwerte von drei oder mehr Gruppen unterscheiden.",
                    "explanation": "Die Null bedeutet, dass alle Gruppenmittelwerte gleich sind."
                  },
                  {
                    "q": "Was sagt eine große F-Statistik aus?",
                    "answer": "Die Variation zwischen den Gruppen ist im Vergleich zur Variation innerhalb der Gruppe groß.",
                    "explanation": "Dies deutet darauf hin, dass die Gruppenmittelwerte unterschiedlich sein können."
                  },
                  {
                    "q": "Was sollten Sie nach einer signifikanten ANOVA tun?",
                    "answer": "Führen Sie einen Post-hoc-Test durch, um festzustellen, welche Gruppen sich unterscheiden.",
                    "explanation": "Die ANOVA allein sagt nicht aus, welche Gruppe anders ist."
                  }
                ],
                "recap": [
                  "ANOVA vergleicht Mittelwerte über drei oder mehr Gruppen.",
                  "Ein signifikanter F-Test erfordert eine Post-hoc-Analyse, um Unterschiede zu lokalisieren.",
                  "Überprüfen Sie die Annahmen und geben Sie die Effektgröße an."
                ]
              }
            }
          ]
        },
        {
          "id": "green-4",
          "number": 4,
          "title": "Improve",
          "duration": "2,5 Stunden",
          "summary": "Wählen Sie nachweisbare Lösungen, testen Sie sie sicher, machen Sie den Prozess fehlersicher und beginnen Sie mit der Gestaltung von Experimenten.",
          "lessons": [
            {
              "id": "G4.1",
              "order": 1,
              "title": "Lösungsauswahl",
              "objective": "Nutzen Sie Auswirkungen, Aufwand, Risiko und Kosten, um zwischen möglichen Lösungen auszuwählen.",
              "content": {
                "why": "Teams generieren viele mögliche Lösungen. Eine transparente Auswahlmethode verhindert, dass sich Lieblingsideen durchsetzen und hilft dem Team, eine Option auszuwählen, die effektiv, machbar und nachhaltig ist.",
                "what": "Bei der Lösungsauswahl werden Kandidaten hinsichtlich Wirkung, Aufwand, Zeit, Kosten, Risiko, Durchführbarkeit und Akzeptanz durch die Stakeholder verglichen. Zu den gängigen Tools gehören die Impact-Effort-Matrix, die gewichtete Bewertung, die Pugh-Matrix, die Kosten-Nutzen-Analyse und die Risikobewertung. Die Lösung muss die verifizierte Grundursache angehen und die CTQ verbessern. Eine vielversprechende Lösung wird in der Regel vor der vollständigen Implementierung erprobt.",
                "how": [
                  "Geben Sie die verifizierte Grundursache und die betroffene CTQ erneut an.",
                  "Listen Sie die möglichen Lösungen auf, ohne sie noch zu bewerten.",
                  "Vereinbaren Sie Kriterien und Gewichte mit dem Team und dem Sponsor.",
                  "Bewerten Sie jeden Kandidaten und berechnen Sie eine gewichtete Summe.",
                  "Bewerten Sie Risiko, Machbarkeit und unbeabsichtigte Folgen.",
                  "Wählen Sie einen oder zwei Kandidaten für einen Piloten aus.",
                  "Dokumentieren Sie die Begründung und die Entscheidung."
                ],
                "where": "Nutzen Sie die Lösungsauswahl in jeder Verbesserungsphase. Beispiel: Eine Klinik möchte Wartezeiten verkürzen. Die Hinzuziehung einer zweiten Triage-Krankenschwester schneidet bei der Auswirkung gut, bei Aufwand und Kosten als mittel und beim Risiko als gering ab. Eine Verlängerung der Arbeitszeit erzielt mittlere Auswirkungen und hohen Aufwand. Neue Software zeichnet sich durch hohe Kosten und lange Vorlaufzeiten aus. Das Team steuert zuerst die Triage-Krankenschwester.",
                "when_not": "Nutzen Sie das Scoring nicht zur Rechtfertigung einer bereits getroffenen Entscheidung. Ignorieren Sie keine gesetzlichen oder sicherheitsrelevanten Einschränkungen und wählen Sie keine Lösung aus, bevor die Grundursache überprüft wurde.",
                "common_mistakes": [
                  "Wählen Sie eine Lieblingslösung, bevor Sie Alternativen bewerten.",
                  "Gewichtungskriterien zur Ermittlung eines vorher festgelegten Gewinners.",
                  "Implementierungsaufwand, Risiko oder Akzeptanz der Stakeholder werden ignoriert."
                ],
                "quick_check": [
                  {
                    "q": "Was hilft eine Impact-Effort-Matrix einem Team?",
                    "answer": "Vergleichen Sie Lösungen nach erwarteter Wirkung und Implementierungsaufwand.",
                    "explanation": "Es hebt schnelle Erfolge hervor und weist auf Optionen mit hohem Aufwand und geringen Auswirkungen hin."
                  },
                  {
                    "q": "Warum eine Lösung mit der verifizierten Grundursache verknüpfen?",
                    "answer": "Um die Chance zu erhöhen, dass das Problem tatsächlich behoben wird.",
                    "explanation": "Eine Lösung, die nicht die Ursache bekämpft, kann möglicherweise nur die Symptome behandeln."
                  },
                  {
                    "q": "Warum ein Pilotprojekt vor der vollständigen Implementierung?",
                    "answer": "Die Lösung unter realen Bedingungen mit begrenztem Risiko testen.",
                    "explanation": "Ein Pilot liefert Beweise und deckt unbeabsichtigte Auswirkungen auf."
                  }
                ],
                "recap": [
                  "Wählen Sie Lösungen anhand von Auswirkungen, Aufwand, Risiko, Kosten und Machbarkeit aus.",
                  "Verknüpfen Sie die Lösung mit der verifizierten Grundursache und CTQ.",
                  "Testen Sie den stärksten Kandidaten, bevor Sie skalieren."
                ]
              }
            },
            {
              "id": "G4.2",
              "order": 2,
              "title": "Pilotversuche",
              "objective": "Entwerfen Sie einen kleinen Versuch mit klaren Erfolgsmaßstäben und einem Rollback-Plan.",
              "content": {
                "why": "Ein Pilot testet eine Lösung unter realen Bedingungen mit begrenztem Risiko. Es liefert Beweise vor einem vollständigen Rollout und deckt Probleme auf, die ein Plan oder eine Simulation übersehen würde.",
                "what": "Ein Pilotplan definiert Ziel, Umfang, Standort oder Schicht, Dauer, Erfolgskennzahlen, Basislinie, Rollen, Schulung, Datenerfassung, Kommunikation, Rollback-Plan und Entscheidungskriterien. Das Team vergleicht die Leistung des Piloten mit der Ausgangsleistung oder einer Kontrollgruppe. Die Entscheidung „Go“, „No Go“ oder „Adapt“ wird auf der Grundlage von Daten getroffen, nicht aus Begeisterung.",
                "how": [
                  "Schreiben Sie das Pilotziel und die Erfolgskennzahlen auf.",
                  "Wählen Sie einen repräsentativen Bereich, ein Team oder eine Schicht.",
                  "Legen Sie vor Beginn des Pilotprojekts eine Basislinie fest.",
                  "Schulen Sie die Leute, die die neue Methode anwenden werden.",
                  "Lassen Sie den Piloten lange genug laufen, um einen stabilen Effekt zu sehen.",
                  "Sammeln Sie Daten und überwachen Sie unbeabsichtigte Folgen.",
                  "Vergleichen Sie die Ergebnisse und entscheiden Sie, ob Sie skalieren, anpassen oder aufhören möchten.",
                  "Dokumentieren Sie die gewonnenen Erkenntnisse für den Rollout."
                ],
                "where": "Nutzen Sie Pilotprojekte in den Bereichen Gesundheitswesen, Fertigung, Software, Einzelhandel, Bankwesen und Bildung. Beispiel: Das Scannen von Barcodes wird vier Wochen lang auf einer Station im Pilotversuch durchgeführt. Der Ausgangswert liegt bei zwölf Medikationsfehlern pro Monat und das Ziel ist eine Reduzierung um 50 %. Das Pilotprojekt erfasst fünf Fehler pro Monat ohne Verzögerung im Arbeitsablauf, sodass das Team auf andere Stationen ausgeweitet werden kann.",
                "when_not": "Pilotieren Sie nicht in einem nicht repräsentativen Bereich und verallgemeinern Sie, ohne es zu überprüfen. Überspringen Sie nicht die Grundlinie und lassen Sie den Piloten nicht zu kurz laufen, um den Effekt zu sehen. Ignorieren Sie nicht die Nebenwirkungen auf andere Abteilungen.",
                "common_mistakes": [
                  "Keine Erfolgskriterien oder Grundlinie.",
                  "Kein Rollback-Plan, wenn der Pilot ein ernstes Problem verursacht.",
                  "Ignorieren von Mitarbeiterfeedback und unbeabsichtigten Konsequenzen."
                ],
                "quick_check": [
                  {
                    "q": "Warum braucht ein Pilot eine Basislinie?",
                    "answer": "Vergleich der Pilotenleistung mit der aktuellen Leistung.",
                    "explanation": "Ohne eine Baseline kann das Team nicht sagen, ob die Änderung funktioniert hat."
                  },
                  {
                    "q": "Was ist ein Rollback-Plan?",
                    "answer": "Eine vordefinierte Möglichkeit, zur alten Methode zurückzukehren, wenn das Pilotprojekt fehlschlägt oder Schaden anrichtet.",
                    "explanation": "Es begrenzt das Risiko während des Tests."
                  },
                  {
                    "q": "Welche Entscheidungen kann ein Pilot treffen?",
                    "answer": "Skalieren, anpassen oder stoppen.",
                    "explanation": "Das Pilotergebnis bestimmt den nächsten Schritt."
                  }
                ],
                "recap": [
                  "Ein Pilot testet eine Lösung mit klaren Metriken und begrenztem Risiko.",
                  "Verwenden Sie eine Baseline, einen repräsentativen Bereich und einen Rollback-Plan.",
                  "Entscheiden Sie, ob Sie datenbasiert skalieren, anpassen oder stoppen möchten."
                ]
              }
            },
            {
              "id": "G4.3",
              "order": 3,
              "title": "Poka-Yoke",
              "objective": "Fügen Sie fehlersichere Geräte oder Kontrollen hinzu, die Fehler verhindern oder erkennen.",
              "content": {
                "why": "Menschliches Versagen ist unvermeidlich. Poka-Yoke gestaltet den Prozess so, dass Fehler schwer zu machen sind oder sofort erkannt werden, was zuverlässiger ist als Erinnerungen oder Schulungen allein.",
                "what": "Poka-Yoke bedeutet Fehlervermeidung. Durch die Vorbeugung wird ein Fehler unmöglich oder sehr erschwert, beispielsweise wenn ein Stecker nur in einer Richtung passt. Die Erkennung erkennt einen Fehler sofort, etwa wenn ein Scanner das falsche Patientenarmband ablehnt. Gutes Poka-Yoke ist einfach, nah an der Arbeit und wird gemeinsam mit den Menschen entwickelt, die es verwenden. Es ist am effektivsten, wenn es mit einer Ursachenanalyse kombiniert wird.",
                "how": [
                  "Identifizieren Sie den Fehlermodus mithilfe von FMEA oder Ursachenanalyse.",
                  "Verstehen Sie, wie und wo der Fehler auftritt.",
                  "Wählen Sie zuerst Prävention; Verwenden Sie die Erkennung, wenn eine Prävention nicht praktikabel ist.",
                  "Entwerfen Sie ein einfaches Gerät, eine einfache Prüfung oder eine Softwareregel.",
                  "Testen Sie es mit echten Benutzern im echten Workflow.",
                  "Überwachen Sie auf neue Fehler oder Problemumgehungen.",
                  "Standardisieren und Eigentumsrechte zuweisen."
                ],
                "where": "Verwenden Sie Poka-Yoke in Fertigungsvorrichtungen, beim Scannen von Medikamenten-Barcodes, bei der Software-Formularvalidierung, bei farbcodierten Anschlüssen, bei erzwungenen Sequenzschritten und bei Checklistenkontrollen. Beispiel: Das Scannen des Patientenarmbandes und des Medikamenten-Barcodes verhindert, dass dem falschen Patienten das falsche Medikament verabreicht wird. Ein einfacheres Beispiel ist ein E-Mail-Client, der warnt, wenn in der Nachricht ein Anhang erwähnt wird, dieser aber nicht angehängt ist.",
                "when_not": "Verlassen Sie sich bei komplexen Beurteilungsfehlern, die Schulung oder Entscheidungsunterstützung erfordern, nicht auf Poka-Yoke. Erstellen Sie nicht so viele Warnungen, dass die Leute sie ignorieren. Fügen Sie kein Gerät hinzu, ohne zu testen, ob es zum tatsächlichen Arbeitsablauf passt.",
                "common_mistakes": [
                  "Wählen Sie die Erkennung, wenn Prävention praktisch ist.",
                  "Hinzufügen von Alarmen, die Benutzer deaktivieren oder ignorieren.",
                  "Die Behandlung von Poka-Yoke ist ein Ersatz für die Suche nach der Grundursache."
                ],
                "quick_check": [
                  {
                    "q": "Was ist der Unterschied zwischen Prävention und Erkennung bei Poka-Yoke?",
                    "answer": "Vorbeugung macht einen Fehler unmöglich oder erschwert; Die Erkennung erkennt es sofort.",
                    "explanation": "Prävention ist im Allgemeinen stärker, da der Fehler nie den Kunden erreicht."
                  },
                  {
                    "q": "Warum ist Poka-Yoke zuverlässiger als eine Erinnerung?",
                    "answer": "Es ändert den Prozess, sodass der Fehler blockiert oder abgefangen wird, anstatt sich auf den Speicher zu verlassen.",
                    "explanation": "Erinnerungen können vergessen werden; Eine gut durchdachte Fehlerkorrektur ist in die Arbeit integriert."
                  },
                  {
                    "q": "Was sollten Sie nach der Installation eines Poka-Yoke tun?",
                    "answer": "Überwachen Sie auf neue Fehler, Problemumgehungen und unbeabsichtigte Auswirkungen.",
                    "explanation": "Es kann sein, dass Menschen Wege finden, ein Steuerelement zu umgehen, das nicht zum Arbeitsablauf passt."
                  }
                ],
                "recap": [
                  "Poka-Yoke verhindert Fehler bzw. erkennt sie sofort.",
                  "Bevorzugen Sie Prävention, halten Sie das Design einfach und testen Sie es mit Benutzern.",
                  "Kombinieren Sie Fehlersicherheit mit Ursachenanalyse und -überwachung."
                ]
              }
            },
            {
              "id": "G4.4",
              "order": 4,
              "title": "Schlanke Tools zur Verbesserung",
              "objective": "Wenden Sie Flow, Pull, Standardarbeit und schnelles Umstellungsdenken an.",
              "content": {
                "why": "Green Belts müssen häufig den Fluss und die Durchlaufzeit verbessern, nicht nur die Fehlerraten. Schlanke Tools reduzieren Wartezeiten, Chargenverzögerungen und Nacharbeiten ohne große Kapitalinvestitionen.",
                "what": "Flow bedeutet, dass die Arbeit reibungslos mit minimaler Stapelverarbeitung und minimalen Übergaben abläuft. Pull bedeutet, dass die nachgelagerte Nachfrage Arbeit auslöst, anstatt die Arbeit vor den Bedarf zu schieben. Ein Standardwerk dokumentiert die bekanntesten Methoden-, Ablauf- und Qualitätsprüfungen. Quick Changeover (SMED) trennt die interne Einrichtung von der externen Einrichtung und verkürzt die Umrüstzeit. Die Taktzeit ist die verfügbare Arbeitszeit dividiert durch die Kundennachfrage.",
                "how": [
                  "Ordnen Sie den Wertstrom zu und identifizieren Sie Verzögerungen und Übergaben.",
                  "Berechnen Sie die Taktzeit aus der verfügbaren Zeit und der Kundennachfrage.",
                  "Reduzieren Sie Losgrößen und unnötige Genehmigungen.",
                  "Führen Sie Pull dort ein, wo Nachfrage und Angebot es praktikabel machen.",
                  "Standardisieren Sie die bekannteste Methode und trainieren Sie sie.",
                  "Reduzieren Sie die Umrüstzeit, indem Sie die Arbeit außerhalb des Umrüstfensters verlagern."
                ],
                "where": "Nutzen Sie Lean-Tools in der Fertigung, im Gesundheitswesen, im Bankwesen, in der IT, im Einzelhandel und im Bildungswesen. Beispiel: Eine Klinik hat 480 Minuten verfügbare Zeit und 60 Patienten, die Taktzeit beträgt also 8 Minuten. Wenn der aktuelle Schritt 12 Minuten dauert, liegt ein Engpass vor. Das Team verteilt die Arbeit neu und standardisiert die neue Methode, um den Schritt näher an den Takt zu bringen.",
                "when_not": "Erzwingen Sie keinen Pull-Ansatz, wenn die Nachfrage stark schwankt oder das Angebot ohne entsprechende Puffer begrenzt ist. Entfernen Sie nicht die notwendigen Kontrollen, um einen Prozess schneller erscheinen zu lassen, und verwenden Sie Lean-Tools nicht als Ersatz für die Reduzierung von Variationen.",
                "common_mistakes": [
                  "Kanban installieren, bevor der Prozess stabil ist.",
                  "Reduzieren Sie die Chargengröße, ohne die nachgelagerte Kapazität zu überprüfen.",
                  "Verfassen von Standardwerken ohne Schulung oder Einbindung an vorderster Front."
                ],
                "quick_check": [
                  {
                    "q": "Wie wird die Taktzeit berechnet?",
                    "answer": "Verfügbare Arbeitszeit dividiert durch die Kundennachfrage.",
                    "explanation": "Die Taktzeit legt das Tempo fest, das der Prozess benötigt, um die Kundennachfrage zu erfüllen."
                  },
                  {
                    "q": "Was bedeutet Pull im Lean?",
                    "answer": "Arbeit wird durch nachgelagerte Nachfrage ausgelöst und nicht vorangetrieben.",
                    "explanation": "Pull reduziert Überproduktion und übermäßige laufende Arbeiten."
                  },
                  {
                    "q": "Was ist das Ziel einer schnellen Umstellung?",
                    "answer": "Reduzierung des Zeitaufwands und der Verschwendung, die für den Wechsel von einem Produkt oder einer Aufgabe zu einem anderen erforderlich sind.",
                    "explanation": "Kürzere Umrüstzeiten ermöglichen kleinere Chargen und einen flexibleren Ablauf."
                  }
                ],
                "recap": [
                  "Schlanke Tools verbessern den Fluss, die Zugkraft, die Standardarbeit und die Umstellung.",
                  "Nutzen Sie die Taktzeit, um das erforderliche Tempo zu verstehen.",
                  "Stabilisieren Sie den Prozess und beziehen Sie die Menschen mit ein, die die Arbeit erledigen."
                ]
              }
            },
            {
              "id": "G4.5",
              "order": 5,
              "title": "DOE-Einführung",
              "objective": "Erklären Sie Faktoren, Ebenen, Reaktionen und warum Experimente Ein-Faktor-Tests übertreffen.",
              "content": {
                "why": "Beim Testen jeweils eines Faktors werden Interaktionen übersehen und Durchläufe werden verschwendet. Die Versuchsplanung testet mehrere Faktoren gemeinsam und zeigt, welche Einstellungen tatsächlich wichtig sind.",
                "what": "Ein Faktor ist eine Eingabevariable; ein Level ist eine Einstellung dieses Faktors; eine Antwort ist die gemessene Ausgabe; Ein Lauf ist ein experimenteller Versuch. Ein Haupteffekt ist die durchschnittliche Änderung der Reaktion, wenn sich ein Faktor ändert. Eine Interaktion bedeutet, dass die Wirkung eines Faktors vom Ausmaß eines anderen abhängt. Die Randomisierung schützt vor lauernden Variablen und die Replikation liefert eine Schätzung des experimentellen Fehlers.",
                "how": [
                  "Definieren Sie das Ziel und die Antwortmetrik.",
                  "Wählen Sie die Faktoren und ihre Ebenen.",
                  "Wählen Sie für das Screening ein Design aus, z. B. eine zweistufige vollfaktorielle oder eine gebrochenfaktorielle Methode.",
                  "Randomisieren Sie die Laufreihenfolge und schließen Sie Replikate ein.",
                  "Führen Sie das Experiment durch und zeichnen Sie die Reaktion auf.",
                  "Analysieren Sie Haupteffekte und Wechselwirkungen in Software wie Minitab.",
                  "Führen Sie Bestätigungsversuche mit den empfohlenen Einstellungen durch."
                ],
                "where": "Nutzen Sie DOE für Prozessoptimierung, Produktdesign und Robustheit. Beispiel: Eine Ofentemperatur von 150 oder 170 Grad und eine Zeit von 20 oder 30 Minuten wirken sich auf die Festigkeit aus. Ein Zwei-mal-Zwei-Design mit zwei Replikaten erfordert acht Durchläufe. Wenn die beste Temperatur von der Zeit abhängt, interagieren die Faktoren und sollten gemeinsam und nicht einzeln eingestellt werden.",
                "when_not": "Verwenden Sie DOE nicht, wenn Faktoren unsicher oder nicht kontrollierbar sind. Experimentieren Sie nicht, bevor das Messsystem ausreichend ist, und verfälschen Sie die Effekte nicht durch Überspringen der Randomisierung.",
                "common_mistakes": [
                  "Es wird immer nur ein Faktor nach dem anderen geändert und es fehlen Wechselwirkungen.",
                  "Keine Replikation, daher kann das Team den Fehler nicht abschätzen.",
                  "Zu viele Faktoren in einem Experiment ohne Screening-Design."
                ],
                "quick_check": [
                  {
                    "q": "Was ist ein Faktor beim DOE?",
                    "answer": "Eine Eingabevariable, die im Experiment bewusst verändert wird.",
                    "explanation": "Faktoren werden auf verschiedenen Ebenen festgelegt, um ihre Auswirkung auf die Reaktion zu sehen."
                  },
                  {
                    "q": "Was ist eine Interaktion?",
                    "answer": "Wenn die Wirkung eines Faktors von der Stärke eines anderen Faktors abhängt.",
                    "explanation": "Wechselwirkungen sind ein Hauptgrund dafür, dass DOE Einzelfaktortests übertrifft."
                  },
                  {
                    "q": "Warum die Laufreihenfolge zufällig festlegen?",
                    "answer": "Zum Schutz vor lauernden Variablen wie Zeit, Temperatur oder Bedienerdrift.",
                    "explanation": "Durch die Randomisierung werden unkontrollierte Effekte über das gesamte Experiment verteilt."
                  }
                ],
                "recap": [
                  "Das DOE testet mehrere Faktoren und schätzt die wichtigsten Auswirkungen und Wechselwirkungen ab.",
                  "Randomisieren, replizieren und verwenden Sie ein für das Ziel geeignetes Design.",
                  "Bestätigen Sie das vorhergesagte Optimum mit Validierungsläufen."
                ]
              }
            }
          ]
        },
        {
          "id": "green-5",
          "number": 5,
          "title": "Control",
          "duration": "2 Stunden",
          "summary": "Behalten Sie die Gewinne bei, indem Sie den Prozess überwachen, den neuen Standard dokumentieren und klare Verantwortlichkeiten zuweisen.",
          "lessons": [
            {
              "id": "G5.1",
              "order": 1,
              "title": "Kontrollkarten",
              "objective": "Wählen Sie X-bar/R-, I-MR-, p-, np-, c- oder u-Karten aus und wenden Sie Grundregeln an.",
              "content": {
                "why": "Regelkarten trennen häufig auftretende Abweichungen von Signalen besonderer Ursachen. Sie sagen dem Team, wann es handeln und wann es den Prozess in Ruhe lassen soll, was für die Aufrechterhaltung einer Verbesserung unerlässlich ist.",
                "what": "Für kontinuierliche Daten verwenden Sie eine X-Balken- und R-Karte für kleine Untergruppen, eine X-Balken- und S-Karte für größere Untergruppen oder eine I-MR-Karte für einzelne Werte. Verwenden Sie für Attributdaten ein p-Diagramm für den Anteil fehlerhafter Einheiten mit variabler Stichprobengröße, ein np-Diagramm für die Anzahl fehlerhafter Einheiten mit konstanter Stichprobengröße, ein c-Diagramm für Fehler pro Einheit mit konstanter Einheitengröße oder ein u-Diagramm für Fehler pro Einheit mit variabler Einheitengröße. Kontrollgrenzen ergeben sich aus Prozessdaten, nicht aus Spezifikationen.",
                "how": [
                  "Wählen Sie das Diagramm basierend auf Datentyp, Untergruppengröße und Stichprobengröße aus.",
                  "Sammeln Sie etwa 20 bis 25 Basisuntergruppen oder -punkte.",
                  "Berechnen Sie die Mittellinie und die Kontrollgrenzen.",
                  "Zeichnen Sie neue Daten in zeitlicher Reihenfolge auf.",
                  "Wenden Sie Regeln für Punkte außerhalb der Grenzen, Läufe, Trends und ungewöhnliche Muster an.",
                  "Ermitteln Sie besondere Ursachen, bevor Sie den Prozess ändern.",
                  "Grenzwerte nur nach einer bekannten Prozessänderung neu berechnen."
                ],
                "where": "Verwenden Sie Kontrolldiagramme für Fertigungsabmessungen, Krankenhauswartezeiten, verspätete Berichte, Fehlerraten, Anrufbearbeitungszeit und Transaktionsfehler. Beispiel: Ein I-MR-Diagramm verfolgt die tägliche Wartezeit, ein X-Balken- und R-Diagramm verfolgt fünf Proben pro Stunde und ein p-Diagramm verfolgt den Prozentsatz verspäteter Meldungen bei schwankendem Volumen.",
                "when_not": "Verwenden Sie Spezifikationsgrenzen nicht als Kontrollgrenzen. Berechnen Sie Grenzwerte nicht neu, nur um ein Signal zu verbergen, und verwenden Sie kein Attributdiagramm für kontinuierliche Daten.",
                "common_mistakes": [
                  "Auswahl des falschen Diagramms für den Datentyp.",
                  "Zu wenige Basispunkte führen zu unzuverlässigen Grenzwerten.",
                  "Auf Abweichungen aus einer gemeinsamen Ursache so reagieren, als ob es sich um eine besondere Ursache handeln würde."
                ],
                "quick_check": [
                  {
                    "q": "Welches Diagramm wird für Einzelmessungen im Zeitverlauf verwendet?",
                    "answer": "Ein I-MR-Diagramm.",
                    "explanation": "I-MR-Diagramme verfolgen einzelne Werte und den Bewegungsbereich."
                  },
                  {
                    "q": "Welches Diagramm wird für den Anteil fehlerhafter Daten bei variabler Stichprobengröße verwendet?",
                    "answer": "Ein p-Diagramm.",
                    "explanation": "p-Diagramme ermöglichen eine Variation der Stichprobengröße."
                  },
                  {
                    "q": "Woher kommen Kontrollgrenzen?",
                    "answer": "Aus den Prozessdaten, nicht aus Kundenvorgaben.",
                    "explanation": "Kontrollgrenzen beschreiben die natürliche Variation des Prozesses."
                  }
                ],
                "recap": [
                  "Passen Sie das Kontrolldiagramm an den Datentyp und die Stichprobengröße an.",
                  "Kontrollgrenzen ergeben sich aus Prozessdaten, nicht aus Spezifikationen.",
                  "Besondere Ursachen untersuchen und erst nach Prozessänderungen neu berechnen."
                ]
              }
            },
            {
              "id": "G5.2",
              "order": 2,
              "title": "Kontrollpläne",
              "objective": "Dokumentieren Sie Metriken, Stichproben, Reaktionen und Eigentümer.",
              "content": {
                "why": "Verbesserungen verfallen ohne Überwachung. Ein Kontrollplan definiert, wie der Prozess überwacht wird, wer bei Abweichungen reagiert und wie der Gewinn geschützt wird.",
                "what": "Ein Kontrollplan listet den Prozessschritt, die Metrik oder CTQ, die Spezifikation, die Messmethode, die Stichprobengröße und -häufigkeit, das Diagramm oder die Überwachungsmethode, den Reaktionsplan, den Eigentümer und den Eskalationspfad auf. Im Reaktionsplan ist festgelegt, was zu prüfen ist, wen Sie zu benachrichtigen haben, wie das Problem eingedämmt werden kann und welche Korrekturmaßnahmen zu ergreifen sind. Der Plan ist mit Standardwerken, FMEA und Regelkarten verknüpft.",
                "how": [
                  "Identifizieren Sie die kritischen Kennzahlen, die überwacht werden müssen.",
                  "Definieren Sie die Messmethode und -frequenz.",
                  "Wählen Sie den Diagramm- oder Überwachungsansatz und den Auslöser für Maßnahmen.",
                  "Schreiben Sie für jeden Auslöser einen spezifischen Reaktionsplan.",
                  "Weisen Sie einen Eigentümer und einen Eskalationspfad zu.",
                  "Schulen Sie die Personen, die den Plan anwenden werden.",
                  "Prüfen Sie den Plan und aktualisieren Sie ihn, wenn sich der Prozess ändert."
                ],
                "where": "Verwenden Sie einen Kontrollplan für jeden verbesserten Prozess, insbesondere bei der Projektübergabe. Beispiel: Medikationsfehler werden monatlich in einer p-Karte verfolgt. Wenn die Rate die Kontrollgrenze überschreitet, überprüft der Eigentümer die Berichterstattung, überprüft die Fälle, prüft, ob die Standardarbeit eingehalten wurde, und benachrichtigt den Apothekenleiter.",
                "when_not": "Erstellen Sie keinen Kontrollplan, den niemand nutzt. Überwachen Sie nicht so viele Kennzahlen, dass die wichtigen verloren gehen, und setzen Sie keinen Auslöser, ohne reagieren zu können.",
                "common_mistakes": [
                  "Kein benannter Eigentümer oder Eskalationspfad.",
                  "Ein Reaktionsplan, der nur „Untersuchen“ ohne konkrete Schritte vorsieht.",
                  "Überwachung verzögerter Kennzahlen ohne Frühwarnung."
                ],
                "quick_check": [
                  {
                    "q": "Was sollte ein Reaktionsplan beinhalten?",
                    "answer": "Was ist zu prüfen, wen zu benachrichtigen, wie das Problem einzudämmen und welche Korrekturmaßnahmen zu ergreifen sind.",
                    "explanation": "Ein spezifischer Reaktionsplan macht die Überwachung umsetzbar."
                  },
                  {
                    "q": "Warum braucht ein Kontrollplan einen Eigentümer?",
                    "answer": "Jemand muss für die Überwachung und Reaktion verantwortlich sein.",
                    "explanation": "Ohne Eigentum werden Signale oft ignoriert."
                  },
                  {
                    "q": "Wann sollte ein Kontrollplan aktualisiert werden?",
                    "answer": "Wenn sich der Prozess, die Metrik oder das Risiko ändert.",
                    "explanation": "Ein veralteter Plan kann das Falsche überwachen."
                  }
                ],
                "recap": [
                  "Ein Kontrollplan definiert Metriken, Stichproben, Auslöser, Reaktionen und Eigentümer.",
                  "Machen Sie den Reaktionsplan konkret und weisen Sie Verantwortlichkeiten zu.",
                  "Prüfen und aktualisieren Sie den Plan, wenn sich der Prozess ändert."
                ]
              }
            },
            {
              "id": "G5.3",
              "order": 3,
              "title": "SOPs und Standardisierung",
              "objective": "Verfassen Sie brauchbare Standardwerke und trainieren Sie diese.",
              "content": {
                "why": "Standardarbeit ist die Grundlage für nachhaltige Erfolge. Ohne einen klaren Standard greifen Menschen auf alte Methoden zurück und die Verbesserung verschwindet langsam.",
                "what": "Eine Standardarbeitsanweisung dokumentiert die bekannteste Methode für eine Aufgabe. Standardarbeit geht darüber hinaus, indem sie Reihenfolge, Zeitplanung, Qualitätsprüfungen, Sicherheit und das erwartete Ergebnis definiert. Eine verwendbare SOP umfasst Zweck, Umfang, Rollen, Schritt-für-Schritt-Anleitungen, Visuals, Entscheidungspunkte, Ausnahmen und den Revisionsverlauf. Es sollte mit den Personen geschrieben werden, die die Arbeit erledigen und am Einsatzort verfügbar sind.",
                "how": [
                  "Beobachten und dokumentieren Sie die aktuell beste Methode.",
                  "Beziehen Sie die Personen mit ein, die die Arbeit ausführen.",
                  "Entwerfen Sie das Verfahren mit Fotos, Screenshots oder einfachen Diagrammen.",
                  "Testen Sie den Entwurf im realen Workflow und überarbeiten Sie ihn.",
                  "Benutzer schulen und Kompetenz prüfen.",
                  "Platzieren Sie den Standard am Einsatzort.",
                  "Überwachen Sie die Einhaltung und überarbeiten Sie sie durch Änderungskontrolle."
                ],
                "where": "Nutzen Sie Standardwerke aus den Bereichen Gesundheitswesen, Fertigung, Service, IT, Bankwesen und Bildung. Beispiel: Eine Entlassungscheckliste listet jeden Schritt, den Eigentümer, den Zeitpunkt und den Eskalationspfad auf. Es reduziert verpasste Schritte und macht Übergaben vorhersehbar. Ein Softwareteam kann eine Release-Checkliste auf die gleiche Weise verwenden.",
                "when_not": "Schreiben Sie kein starres Verfahren für Arbeiten, die wirklich kreativ oder sehr variabel sind, ohne klare Entscheidungsregeln. Erstellen Sie keine Regaldokumente, die niemand liest, und standardisieren Sie keinen Prozess, bevor er verbessert wird.",
                "common_mistakes": [
                  "Schreiben der SOP ohne die Leute, die die Arbeit machen.",
                  "Dadurch wird das Dokument zu lang oder es ist schwierig, es am Arbeitsplatz zu verwenden.",
                  "Kein Schulungs-, Audit- oder Revisionsprozess."
                ],
                "quick_check": [
                  {
                    "q": "Was macht eine SOP nutzbar?",
                    "answer": "Klare Schritte, visuelle Darstellungen, Rollen, Ausnahmen und Zugriff am Einsatzort.",
                    "explanation": "Eine nutzbare SOP unterstützt die eigentliche Arbeit, statt Staub anzusammeln."
                  },
                  {
                    "q": "Warum sollte man Mitarbeiter an vorderster Front in die Erstellung von Standardwerken einbeziehen?",
                    "answer": "Sie kennen den realen Prozess und können praktische Schritte und Fehlerstellen identifizieren.",
                    "explanation": "Die Einbindung verbessert die Genauigkeit und Akzeptanz."
                  },
                  {
                    "q": "Ist Standardarbeit dauerhaft?",
                    "answer": "Nein. Es sollte durch Änderungskontrolle aktualisiert werden, wenn sich eine bessere Methode bewährt hat.",
                    "explanation": "Standardarbeit ist die derzeit beste Methode, keine eingefrorene Regel."
                  }
                ],
                "recap": [
                  "Ein Standardwerk dokumentiert die bekanntesten Methoden-, Ablauf- und Qualitätsprüfungen.",
                  "Schreiben Sie es mit Benutzern, testen Sie es, trainieren Sie es und bewahren Sie es am Einsatzort auf.",
                  "Überprüfen Sie die Einhaltung und verbessern Sie den Standard durch Änderungskontrolle."
                ]
              }
            }
          ]
        },
        {
          "id": "green-6",
          "number": 6,
          "title": "Projektmanagement und Software",
          "duration": "2 Stunden",
          "summary": "Führen Sie das Projekt professionell durch und nutzen Sie Excel oder Minitab für die Kernanalysen.",
          "lessons": [
            {
              "id": "G6.1",
              "order": 1,
              "title": "Projektmanagement",
              "objective": "Planen Sie Aufgaben, verwalten Sie Risiken, kommunizieren Sie den Status und schließen Sie das Projekt ab.",
              "content": {
                "why": "Green Belt-Projekte erfordern Planung, Risikomanagement, Kommunikation und Abschluss. Technische Hilfsmittel allein liefern keine Ergebnisse, wenn die Arbeit verspätet erfolgt, der Umfang abweicht oder die Übergabe schwach ist.",
                "what": "Das Projektmanagement zur Verbesserung umfasst Umfang, Zeitplan, Ressourcen, Stakeholder, Risiken, Kommunikation, Qualitätstore, Änderungskontrolle und Abschluss. Ein Projektstrukturplan unterteilt die Arbeit in überschaubare Aufgaben. Ein Gantt-Diagramm zeigt Zeitablauf und Abhängigkeiten. Ein RAID-Protokoll verfolgt Risiken, Annahmen, Probleme und Abhängigkeiten. Tollgate-Prüfungen bestätigen, dass jede DMAIC-Phase abgeschlossen ist.",
                "how": [
                  "Definieren Sie den Umfang, die zu erbringenden Leistungen und die Meilensteintermine.",
                  "Erstellen Sie einen Projektstrukturplan und schätzen Sie den Aufwand ab.",
                  "Ordnen Sie die Reihenfolge der Aufgaben und identifizieren Sie den kritischen Pfad.",
                  "Führen Sie ein RAID-Protokoll und überprüfen Sie es wöchentlich.",
                  "Teilen Sie dem Sponsor und den Stakeholdern den Status mit.",
                  "Halten Sie Gate-Reviews ab, bevor Sie mit der nächsten Phase fortfahren.",
                  "Schließen Sie das Projekt mit einer Übergabe, gewonnenen Erkenntnissen und einer Nutzenvalidierung ab."
                ],
                "where": "Nutzen Sie Projektmanagement bei jedem Green Belt-Projekt, insbesondere bei funktionsübergreifender Arbeit. Beispiel: Ein zwölfwöchiges Entlassungsprojekt umfasst eine Arbeitsaufschlüsselung nach DMAIC-Phase, ein Gantt-Diagramm, ein wöchentliches Stand-up, ein RAID-Protokoll, Gate-Reviews mit dem Sponsor und eine Übergabe an den Stationsleiter.",
                "when_not": "Erstellen Sie keinen umfangreichen Projektplan für eine kleine Reparatur, die einen Tag dauert. Verlassen Sie sich nicht auf ein Gantt-Diagramm, ohne die Abhängigkeiten zu verstehen, und ignorieren Sie nicht Risiken, weil die technische Arbeit einfach erscheint.",
                "common_mistakes": [
                  "Keine Arbeitsaufteilung, daher sind Aufgaben und Eigentümer unklar.",
                  "Ein optimistischer Zeitplan ohne Eventualitäten.",
                  "Kein Risikoprotokoll, schlechte Kommunikation oder kein formeller Abschluss."
                ],
                "quick_check": [
                  {
                    "q": "Was ist ein RAID-Protokoll?",
                    "answer": "Ein Protokoll der Risiken, Annahmen, Probleme und Abhängigkeiten.",
                    "explanation": "RAID hält Projektbedrohungen und -einschränkungen sichtbar."
                  },
                  {
                    "q": "Was ist der kritische Pfad?",
                    "answer": "Die längste Folge abhängiger Aufgaben, die die Projektdauer bestimmt.",
                    "explanation": "Verzögerungen auf dem kritischen Pfad verzögern das gesamte Projekt."
                  },
                  {
                    "q": "Warum einen Projektabschluss verhängen?",
                    "answer": "Um Vorteile zu bestätigen, Eigentum zu übergeben und gewonnene Erkenntnisse zu erfassen.",
                    "explanation": "Der Abschluss verhindert, dass das Projekt ohne Verantwortung verblasst."
                  }
                ],
                "recap": [
                  "Planen Sie Umfang, Zeitplan, Risiken, Kommunikation und Gates.",
                  "Verwenden Sie einen Projektstrukturplan, ein Gantt-Diagramm und ein RAID-Protokoll.",
                  "Schließen Sie mit der Übergabe, der Leistungsvalidierung und den gewonnenen Erkenntnissen ab."
                ]
              }
            },
            {
              "id": "G6.2",
              "order": 2,
              "title": "Excel- und Minitab-Grundlagen",
              "objective": "Verwenden Sie deskriptive Statistiken, Regelkarten, Fähigkeits- und T-Tests in Software.",
              "content": {
                "why": "Green Belts benötigen Software, um Daten effizient und reproduzierbar zu analysieren. Wenn Sie wissen, welches Tool verwendet werden soll, und seine Annahmen überprüfen, können Fehler vermieden und Zeit gespart werden.",
                "what": "Excel eignet sich für deskriptive Statistiken, Laufdiagramme, Histogramme, Streudiagramme, Regressionen, T-Tests und einfache ANOVA. Minitab eignet sich besser für Gage R&R, Fähigkeitsanalyse, Kontrolldiagramme, Regression, ANOVA und Versuchsplanung. Beide Tools erfordern saubere Daten, die richtige Methode und die Interpretation von Annahmen und Diagrammen.",
                "how": [
                  "Bereinigen und strukturieren Sie die Daten vor der Analyse.",
                  "Wählen Sie die Methode, die zur Frage und zum Datentyp passt.",
                  "Führen Sie die Analyse in Excel oder Minitab aus.",
                  "Überprüfen Sie Annahmen und Diagnosediagramme.",
                  "Interpretieren Sie die Ausgabe, einschließlich Effektgröße und Konfidenzintervalle.",
                  "Speichern Sie die Datei unter einem eindeutigen Versionsnamen.",
                  "Dokumentieren Sie die Schritte, damit die Analyse wiederholt werden kann."
                ],
                "where": "Verwenden Sie Excel für schnelle Zusammenfassungen und einfache Diagramme und Minitab für erweiterte Statistiken und DOE. Beispiel: Ein T-Test bei zwei Stichproben kann in beiden Tools ausgeführt werden. Vergleichen Sie den p-Wert und das Konfidenzintervall. Eine Fähigkeitsstudie ist in Minitab normalerweise schneller unter Statistik > Qualitätswerkzeuge > Fähigkeitsanalyse > Normal.",
                "when_not": "Verwenden Sie keine Software, ohne die Methode und ihre Annahmen zu verstehen. Vertrauen Sie den Standardeinstellungen nicht blind und verwenden Sie Excel nicht für komplexe DOE, wenn ein validiertes Statistikpaket verfügbar ist.",
                "common_mistakes": [
                  "Analysieren Sie den falschen Datentyp oder schließen Sie ausgeblendete Zeilen ein.",
                  "Verwendung des Standard-Alpha, ohne den Projektstandard zu überprüfen.",
                  "Überspringen von Annahmeprüfungen und Diagnosediagrammen."
                ],
                "quick_check": [
                  {
                    "q": "Welches Tool ist im Allgemeinen stärker für die DOE- und Fähigkeitsanalyse?",
                    "answer": "Minitab.",
                    "explanation": "Minitab verfügt über spezielle Menüs für DOE, Fähigkeit, MSA und Regelkarten."
                  },
                  {
                    "q": "Was sollten Sie tun, bevor Sie eine Analyse durchführen?",
                    "answer": "Bereinigen Sie die Daten und bestätigen Sie, dass die Methode mit der Frage und dem Datentyp übereinstimmt.",
                    "explanation": "Eine gute Analyse beginnt mit guten Daten und der richtigen Methode."
                  },
                  {
                    "q": "Warum die Analyseschritte dokumentieren?",
                    "answer": "So kann die Arbeit wiederholt, überprüft und verteidigt werden.",
                    "explanation": "Reproduzierbarkeit ist für Vertrauen und Prüfung von entscheidender Bedeutung."
                  }
                ],
                "recap": [
                  "Excel verarbeitet schnelle Zusammenfassungen und einfache Tests; Minitab verarbeitet erweiterte Statistiken und DOE.",
                  "Bereinigen Sie Daten, wählen Sie die richtige Methode und überprüfen Sie Annahmen.",
                  "Dokumentieren Sie die Analyse, damit sie reproduziert werden kann."
                ]
              }
            }
          ]
        }
      ],
      "coverageChecklist": [
        {
          "topic": "Definieren Sie: Charter",
          "lessons": [
            "G1.1"
          ]
        },
        {
          "topic": "Definieren Sie: Stakeholder",
          "lessons": [
            "G1.2"
          ]
        },
        {
          "topic": "Definieren: VOC/CTQ",
          "lessons": [
            "G1.3"
          ]
        },
        {
          "topic": "Maßnahme: Datentarif",
          "lessons": [
            "G2.1"
          ]
        },
        {
          "topic": "Maßnahme: Probenahme",
          "lessons": [
            "G2.2"
          ]
        },
        {
          "topic": "Maß: MSA",
          "lessons": [
            "G2.3"
          ]
        },
        {
          "topic": "Maßnahme: deskriptive Statistik",
          "lessons": [
            "G2.4"
          ]
        },
        {
          "topic": "Maß: Normalverteilung",
          "lessons": [
            "G2.5"
          ]
        },
        {
          "topic": "Maß: Sigma-Level",
          "lessons": [
            "G2.6"
          ]
        },
        {
          "topic": "Maßnahme: DPMO",
          "lessons": [
            "G2.6"
          ]
        },
        {
          "topic": "Maß: Cp/Cpk",
          "lessons": [
            "G2.7"
          ]
        },
        {
          "topic": "Analysieren: Diagramme",
          "lessons": [
            "G3.1"
          ]
        },
        {
          "topic": "Analysieren: Grundursache",
          "lessons": [
            "G3.2"
          ]
        },
        {
          "topic": "Analysieren: FMEA",
          "lessons": [
            "G3.3"
          ]
        },
        {
          "topic": "Analysieren: Grundlagen des Hypothesentests",
          "lessons": [
            "G3.4"
          ]
        },
        {
          "topic": "Analysieren: Korrelation",
          "lessons": [
            "G3.5"
          ]
        },
        {
          "topic": "Analysieren: einfache Regression",
          "lessons": [
            "G3.6"
          ]
        },
        {
          "topic": "Analysieren: ANOVA-Einführung",
          "lessons": [
            "G3.7"
          ]
        },
        {
          "topic": "Verbessern: Lösungsauswahl",
          "lessons": [
            "G4.1"
          ]
        },
        {
          "topic": "Verbessern: Pilot",
          "lessons": [
            "G4.2"
          ]
        },
        {
          "topic": "Verbessern: Poka-Yoke",
          "lessons": [
            "G4.3"
          ]
        },
        {
          "topic": "Verbessern: Schlanke Tools",
          "lessons": [
            "G4.4"
          ]
        },
        {
          "topic": "Verbessern: DOE-Einführung",
          "lessons": [
            "G4.5"
          ]
        },
        {
          "topic": "Kontrolle: Kontrollkarten",
          "lessons": [
            "G5.1"
          ]
        },
        {
          "topic": "Kontrolle: Kontrollplan",
          "lessons": [
            "G5.2"
          ]
        },
        {
          "topic": "Kontrolle: SOPs",
          "lessons": [
            "G5.3"
          ]
        },
        {
          "topic": "Projektmanagement",
          "lessons": [
            "G6.1"
          ]
        },
        {
          "topic": "Excel/Minitab-Grundlagen",
          "lessons": [
            "G6.2"
          ]
        }
      ],
      "project": {
        "title": "Reduzieren Sie Nichterscheinen bei Terminen",
        "brief": "Chartern Sie ein Projekt, um Nichterscheinen in einer Klinik, Bankfiliale oder einem Servicecenter zu reduzieren. Erstellen Sie einen Datenplan, überprüfen Sie das Messsystem, ermitteln Sie die No-Show-Rate, führen Sie einen Pareto- und Hypothesentest durch, testen Sie eine Erinnerungslösung und übergeben Sie eine Kontrollkarte und einen Kontrollplan."
      },
      "exam": {
        "questions": 60,
        "passingScore": 80,
        "format": "60 Multiple-Choice-Fragen mit vier Optionen und Erklärungen, inklusive Berechnungen."
      },
      "cheatSheet": [
        "Z = (X – Mittelwert) / Standardabweichung",
        "DPMO = Mängel / (Einheiten x Chancen) x 1.000.000",
        "Cp = (USL – LSL) / 6 Sigma; Cpk = min((USL – Mittelwert)/3 Sigma, (Mittelwert – LSL)/3 Sigma)",
        "p-value < alpha: reject the null hypothesis"
      ],
      "nextChecklist": [
        "Ich kann einen Datenerfassungsplan und einen Stichprobenplan erstellen.",
        "Ich kann einen Gage R&R und einen Fähigkeitsbericht interpretieren.",
        "Ich kann für eine Frage einen einfachen Hypothesentest auswählen.",
        "Ich kann eine Kontrollkarte und einen Kontrollplan übergeben."
      ]
    },
    {
      "id": "black",
      "name": "Schwarzer Gürtel",
      "level": 4,
      "color": "black",
      "icon": "fa-crown",
      "lessonTarget": "35-45",
      "studyTime": "80-100 Stunden",
      "audience": "Vollzeit-Verbesserungsleiter, die komplexe, funktionsübergreifende Projekte leiten und Green Belts coachen.",
      "prerequisites": "Green Belt-Zertifizierung und Abschluss von mindestens einem DMAIC-Projekt.",
      "previousRecap": "Zusammenfassung des Grünen Gürtels: DMAIC-Projekte benötigen eine Charta, vertrauenswürdige Messungen, Fähigkeitsanalysen, Hypothesentests, Piloten und Kontrollpläne; einfache Regression und ANOVA unterstützen Entscheidungen.",
      "outcomes": [
        "Leiten Sie komplexe DMAIC- und Designprojekte funktionsübergreifend",
        "Wenden Sie erweiterte Statistiken, Regressionen und geplante Experimente an",
        "Behandeln Sie Attributmesssysteme, nicht normale Daten und erweiterte SPC",
        "Integrieren Sie Lean, DFSS, Change Leadership, Finanzen und Mentoring"
      ],
      "modules": [
        {
          "id": "black-1",
          "number": 1,
          "title": "Wahrscheinlichkeit und Folgerung",
          "duration": "5 Stunden",
          "summary": "Schaffen Sie die statistische Grundlage für eine erweiterte Entscheidungsfindung: Verteilungen, Stichproben, Konfidenz, Aussagekraft und das vollständige Toolkit zum Testen von Hypothesen.",
          "lessons": [
            {
              "id": "B1.1",
              "order": 1,
              "title": "Wahrscheinlichkeitsverteilungen",
              "objective": "Erkennen Sie normale, binomiale, Poisson-, exponentielle und Weibull-Muster.",
              "content": {
                "why": "Die Verteilung hinter den Daten bestimmt, welche Fähigkeiten, Kontrolldiagramme und Hypothesenmethoden gültig sind. Die Wahl der falschen Verteilung kann zu sicheren, aber falschen Schlussfolgerungen führen.",
                "what": "Die Normalverteilung ist kontinuierlich, symmetrisch und durch Mittelwert und Standardabweichung definiert; es passt zu vielen Messvariablen. Die Binomialverteilung zählt Erfolge in einer festen Anzahl unabhängiger Versuche mit einer konstanten Wahrscheinlichkeit, beispielsweise „Bestanden“ oder „Nicht bestanden“. Die Poisson-Verteilung zählt Ereignisse in einem festen Zeitraum oder Raum, beispielsweise Mängel pro Einheit oder Ankünfte pro Stunde. Die Exponentialverteilung modelliert die Zeit zwischen Poisson-Ereignissen. Die Weibull-Verteilung ist flexibel für Lebensdauer- und Zuverlässigkeitsdaten und kann steigende, konstante oder fallende Ausfallraten darstellen.",
                "how": [
                  "Identifizieren Sie den Datentyp: kontinuierliche Messung, binäres Ergebnis, Anzahl oder Zeit zwischen Ereignissen.",
                  "Zeichnen Sie ein Histogramm oder Wahrscheinlichkeitsdiagramm.",
                  "Schlagen Sie eine Verteilung vor, die zum Datengenerierungsprozess passt.",
                  "Passen Sie die Verteilung an und prüfen Sie die Passgenauigkeit.",
                  "Verwenden Sie die angepasste Verteilung in der Fähigkeits-, Steuerungs- oder Zuverlässigkeitsanalyse.",
                  "Validieren Sie die Auswahl mit Prozesswissen und neuen Daten."
                ],
                "where": "Nutzen Sie Vertriebskenntnisse in den Bereichen Produktionszuverlässigkeit, Ankünfte im Gesundheitswesen, Call Center, Banktransaktionen und IT-Vorfälle. Beispiel: Anrufe pro Stunde folgen oft einem Poisson-Muster, die Zeit zwischen Anrufen folgt einem exponentiellen Muster, der Anteil der abgebrochenen Anrufe ist binomial und die Gerätelebensdauer kann einem Weibull-Muster folgen.",
                "when_not": "Erzwingen Sie keine Normalverteilung bei Zählungen oder Proportionen. Verwenden Sie kein Binomialmodell, wenn Versuche abhängig sind oder sich die Wahrscheinlichkeit ändert, und verwenden Sie kein Poisson-Modell, wenn sich Ereignisse häufen oder die Varianz den Mittelwert weit übersteigt.",
                "common_mistakes": [
                  "Vorausgesetzt, jeder Datensatz ist normal.",
                  "Überdispersion in Zähldaten wird ignoriert.",
                  "Anpassen einer Verteilung ohne Überprüfung der Anpassungsgüte."
                ],
                "quick_check": [
                  {
                    "q": "Welche Verteilung modelliert die Anzahl der Erfolge in einer festen Anzahl unabhängiger Versuche?",
                    "answer": "Die Binomialverteilung.",
                    "explanation": "Binomialdaten haben zwei Ergebnisse und eine konstante Erfolgswahrscheinlichkeit."
                  },
                  {
                    "q": "Welche Verteilung wird häufig für Time-to-Failure-Daten mit flexibler Ausfallrate verwendet?",
                    "answer": "Die Weibull-Verteilung.",
                    "explanation": "Weibull-Form- und Skalenparameter ermöglichen eine Erhöhung, Konstanthaltung oder Verringerung der Gefahr."
                  },
                  {
                    "q": "Welche Verteilungsmodelle berücksichtigen Ereignisse in einem bestimmten Zeitraum oder Raum?",
                    "answer": "Die Poisson-Verteilung.",
                    "explanation": "Poisson-Modelle zählen seltene Ereigniszahlen wie Defekte pro Einheit oder Ankünfte pro Stunde."
                  }
                ],
                "recap": [
                  "Passen Sie die Verteilung an den Datengenerierungsprozess an.",
                  "Normal, Binomial, Poisson, Exponential und Weibull decken häufige Lean Six Sigma-Situationen ab.",
                  "Passen Sie die Verteilung an und überprüfen Sie sie, bevor Sie sie als Schlussfolgerung verwenden."
                ]
              }
            },
            {
              "id": "B1.2",
              "order": 2,
              "title": "Stichprobenverteilungen und der zentrale Grenzwertsatz",
              "objective": "Erklären Sie, warum sich Stichprobenmittel vorhersehbar verhalten.",
              "content": {
                "why": "Statistische Schlussfolgerungen basieren auf Stichprobenverteilungen. Der zentrale Grenzwertsatz erklärt, warum sich Stichprobenmittelwerte vorhersehbar verhalten und warum Konfidenzintervalle und Tests funktionieren.",
                "what": "Eine Stichprobenverteilung ist die Verteilung einer Statistik, beispielsweise des Mittelwerts, über wiederholte Stichproben. Der Standardfehler ist die Standardabweichung dieser Statistik. Für einen Mittelwert ist der Standardfehler Sigma dividiert durch die Quadratwurzel von n. Der Zentrale Grenzwertsatz besagt, dass für eine große Stichprobe die Verteilung des Stichprobenmittelwerts unabhängig von der Populationsform annähernd normal ist. Der Mittelwert der Stichprobenmittelwerte entspricht dem Populationsmittelwert, und die Streuung nimmt mit zunehmendem n ab.",
                "how": [
                  "Definieren Sie die Grundgesamtheit, die Stichprobengröße und die Statistik.",
                  "Nehmen Sie wiederholt Proben oder simulieren Sie es.",
                  "Zeichnen Sie die Verteilung der Stichprobenmittelwerte grafisch auf.",
                  "Berechnen Sie den Standardfehler.",
                  "Wenden Sie den zentralen Grenzwertsatz an, wenn die Stichprobe groß genug ist.",
                  "Verwenden Sie es für Konfidenzintervalle oder Hypothesentests."
                ],
                "where": "Verwenden Sie Stichprobenverteilungen für Umfragen, Audits, Kontrolldiagramme und alle Rückschlüsse auf einen Mittelwert oder Anteil. Beispiel: Eine Grundgesamtheit hat einen Mittelwert von 100 und eine Standardabweichung von 20. Bei n = 25 beträgt der Standardfehler 4, sodass der Stichprobenmittelwert mit einem Mittelwert von 100 und einer Standardabweichung von 4 ungefähr normal ist. Bei n = 100 sinkt der Standardfehler auf 2.",
                "when_not": "Wenden Sie den Zentralen Grenzwertsatz nicht blind auf kleine Stichproben oder extrem verzerrte Daten an. Überprüfen Sie für Proportionen, ob np und n(1-p) groß genug sind. Verwenden Sie für abhängige Daten wie Zeitreihen Methoden, die die Autokorrelation berücksichtigen.",
                "common_mistakes": [
                  "Verwechslung der Standardabweichung der Daten mit dem Standardfehler des Mittelwerts.",
                  "Wenn man an den Satz glaubt, werden die Rohdaten normal.",
                  "Verwendung von n = 30 als universelle Regel für stark verzerrte Daten."
                ],
                "quick_check": [
                  {
                    "q": "Was ist der Standardfehler des Mittelwerts?",
                    "answer": "Die Grundgesamtheitsstandardabweichung dividiert durch die Quadratwurzel von n.",
                    "explanation": "Es beschreibt die Streuung der Stichprobenmittelwerte über wiederholte Stichproben."
                  },
                  {
                    "q": "Was sagt der Zentrale Grenzwertsatz?",
                    "answer": "Bei ausreichend großen Stichproben ist der Stichprobenmittelwert annähernd normalverteilt.",
                    "explanation": "Dies gilt auch dann, wenn die Grundgesamtheit nicht normal ist, abhängig von der Stichprobengröße und -form."
                  },
                  {
                    "q": "Was passiert mit dem Standardfehler, wenn die Stichprobengröße zunimmt?",
                    "answer": "Sie nimmt proportional zur Quadratwurzel von n ab.",
                    "explanation": "Größere Stichproben liefern genauere Schätzungen."
                  }
                ],
                "recap": [
                  "Stichprobenverteilungen beschreiben, wie sich Statistiken bei wiederholten Stichproben unterscheiden.",
                  "Der Standardfehler des Mittelwerts ist Sigma dividiert durch die Quadratwurzel von n.",
                  "Der Zentrale Grenzwertsatz unterstützt die Inferenz mit großen Stichproben."
                ]
              }
            },
            {
              "id": "B1.3",
              "order": 3,
              "title": "Konfidenzintervalle",
              "objective": "Interpretieren Sie Intervallschätzungen für Mittelwerte, Anteile und Unterschiede.",
              "content": {
                "why": "Eine Punktschätzung ohne Unsicherheit ist unvollständig. Konfidenzintervalle zeigen die Präzision einer Schätzung und den Bereich plausibler Werte, was bessere Entscheidungen unterstützt.",
                "what": "Ein Konfidenzintervall ist eine Schätzung plus oder minus eines kritischen Werts multipliziert mit einem Standardfehler. Für einen Mittelwert mit unbekanntem Sigma verwenden Sie x-Balken plus oder minus t mal s dividiert durch die Quadratwurzel von n. Verwenden Sie für einen Anteil p-hat plus oder minus z-mal den Standardfehler oder ein Wilson-Intervall für kleine Stichproben. Berechnen Sie für eine Differenz die Differenz und ihren Standardfehler. Ein 95 %-Intervall bedeutet, dass bei wiederholter Probenahme etwa 95 % dieser Intervalle den wahren Parameter enthalten würden.",
                "how": [
                  "Identifizieren Sie den Parameter: Mittelwert, Anteil oder Differenz.",
                  "Überprüfen Sie die Annahmen für das Intervall.",
                  "Berechnen Sie die Schätzung und den Standardfehler.",
                  "Wählen Sie den kritischen Wert für das Konfidenzniveau.",
                  "Konstruieren Sie das Intervall.",
                  "Interpretieren Sie es im Kontext des Prozesses und der praktischen Entscheidung.",
                  "Vergleichen Sie das Intervall gegebenenfalls mit einem Ziel oder einer Spezifikation."
                ],
                "where": "Verwenden Sie Konfidenzintervalle für Vorher-Nachher-Vergleiche, Lieferantenvergleiche, Umfrageergebnisse und Fähigkeitsstudien. Beispiel: Die mittlere Wartezeit beträgt 30 Minuten, s = 8 und n = 25. Bei t = 2,064 beträgt das Intervall 30 plus oder minus 3,30 oder 26,7 bis 33,3 Minuten. Wenn ein Ziel von 25 außerhalb des Intervalls liegt, liegt der Prozess wahrscheinlich über dem Ziel.",
                "when_not": "Verwenden Sie für sehr kleine Anteile kein einfaches Wald-Intervall. Behandeln Sie überlappende Konfidenzintervalle nicht als formalen Hypothesentest und ignorieren Sie Clustering oder gepaarte Daten nicht.",
                "common_mistakes": [
                  "Angenommen, es besteht eine Wahrscheinlichkeit von 95 %, dass der Parameter in diesem bestimmten Intervall liegt.",
                  "Die Verwendung von z, wenn t für ein unbekanntes Sigma geeignet ist.",
                  "Verwechslung eines Konfidenzintervalls mit einem Vorhersageintervall."
                ],
                "quick_check": [
                  {
                    "q": "Was bedeutet ein 95 %-Konfidenzintervall?",
                    "answer": "Etwa 95 % der Intervalle aus wiederholten Proben würden den wahren Parameter enthalten.",
                    "explanation": "Das Vertrauen liegt im Verfahren und nicht in einem bestimmten Intervall."
                  },
                  {
                    "q": "Was macht ein Konfidenzintervall schmaler?",
                    "answer": "Geringeres Vertrauen, geringere Variabilität oder eine größere Stichprobe.",
                    "explanation": "Die Breite hängt vom kritischen Wert, dem Standardfehler und der Stichprobengröße ab."
                  },
                  {
                    "q": "Warum ein Konfidenzintervall angeben und nicht nur einen p-Wert?",
                    "answer": "Es zeigt die Größe und Präzision des Effekts, nicht nur die statistische Signifikanz.",
                    "explanation": "Intervalle unterstützen die praktische Interpretation."
                  }
                ],
                "recap": [
                  "Konfidenzintervalle quantifizieren die Unsicherheit rund um eine Schätzung.",
                  "Interpretieren Sie das Verfahren und nicht die Wahrscheinlichkeit eines einzelnen Intervalls.",
                  "Geben Sie das Intervall und seine praktische Bedeutung an."
                ]
              }
            },
            {
              "id": "B1.4",
              "order": 4,
              "title": "Leistung und Stichprobengröße",
              "objective": "Balance zwischen Alpha, Beta, Effektgröße und Stichprobengröße.",
              "content": {
                "why": "Unterbewertete Studien übersehen tatsächliche Effekte, während überbewertete Studien Ressourcen verschwenden und triviale Unterschiede als signifikant markieren. Die Planung von Trennschärfe und Stichprobengröße verhindert beide Probleme.",
                "what": "Alpha ist die Fehlerrate vom Typ I, die Wahrscheinlichkeit eines falsch positiven Ergebnisses. Beta ist die Fehlerquote vom Typ II, also die Wahrscheinlichkeit, einen echten Effekt zu verpassen. Die Leistung ist eins minus Beta, die Chance, einen vorhandenen Effekt zu erkennen. Die Aussagekraft hängt von Alpha, Effektgröße, Variabilität, Stichprobengröße und dem Test ab. Größere Effekte und größere Samples erhöhen die Leistung. Der minimal erkennbare Effekt ist der kleinste Unterschied, den die Studie ermitteln soll.",
                "how": [
                  "Definieren Sie den Test und den Effekt, den Sie erkennen müssen.",
                  "Schätzen Sie die Variabilität anhand von Pilotdaten oder Prozesskenntnissen.",
                  "Stellen Sie Alpha ein, oft 0,05, und eine Zielstärke, oft 0,80 oder 0,90.",
                  "Wählen Sie den minimal erkennbaren Effekt, der praktisch von Bedeutung ist.",
                  "Berechnen Sie die erforderliche Stichprobengröße in Minitab oder G*Power.",
                  "Berücksichtigen Sie Aussetzer, Antwortausfälle oder Untergruppenanalysen.",
                  "Überprüfen Sie die Stromversorgung erneut, nachdem das Design endgültig ist."
                ],
                "where": "Nutzen Sie Leistungsanalysen für DOE, Pilotprojekte, Umfragen, A/B-Tests und Vorher-Nachher-Studien. Beispiel: Ermitteln Sie eine Fünf-Minuten-Differenz mit einer Standardabweichung von 10, einem Alpha von 0,05 und einer Potenz von 0,80. Eine Berechnung mit zwei Stichproben ergibt etwa 63 Beobachtungen pro Gruppe unter Verwendung der Normalnäherung.",
                "when_not": "Verwenden Sie keine willkürliche Stichprobengröße wie 30. Ignorieren Sie nicht die praktische Effektgröße und verlassen Sie sich nicht auf die Post-hoc-Power nach der Studie, um ein nicht signifikantes Ergebnis zu erklären.",
                "common_mistakes": [
                  "Keine Leistungsanalyse vor der Datenerfassung.",
                  "Verwendung einer unrealistisch kleinen Effektgröße.",
                  "Ignorieren mehrerer Vergleiche oder Ausstieg."
                ],
                "quick_check": [
                  {
                    "q": "Was ist Macht?",
                    "answer": "Die Wahrscheinlichkeit, einen echten Effekt zu erkennen, entspricht eins minus Beta.",
                    "explanation": "Eine höhere Leistung bedeutet eine geringere Wahrscheinlichkeit eines falschen Negativs."
                  },
                  {
                    "q": "Was passiert mit der Trennschärfe, wenn die Stichprobengröße zunimmt?",
                    "answer": "Die Leistung nimmt zu.",
                    "explanation": "Größere Stichproben verringern den Standardfehler und erleichtern die Erkennung realer Effekte."
                  },
                  {
                    "q": "Was ist Beta?",
                    "answer": "Die Fehlerquote vom Typ II, die Wahrscheinlichkeit, einen echten Effekt nicht zu erkennen.",
                    "explanation": "Die Leistung beträgt eins minus Beta."
                  }
                ],
                "recap": [
                  "Macht ist die Chance, eine wahre Wirkung zu entdecken.",
                  "Planen Sie Alpha, Beta, Effektgröße, Variabilität und Stichprobengröße gemeinsam.",
                  "Verwenden Sie Software und praktische Effektgrößen, keine willkürlichen Beispielregeln."
                ]
              }
            },
            {
              "id": "B1.5",
              "order": 5,
              "title": "Auswahl des richtigen Hypothesentests",
              "objective": "Wählen Sie einen Test aus Datentyp, Anzahl der Gruppen und Annahmen aus.",
              "content": {
                "why": "Der falsche Test macht die Schlussfolgerung ungültig. Black Belts müssen den Test anhand des Datentyps, der Anzahl der Gruppen und der Annahmen auswählen und dann dem Team die Wahl erklären.",
                "what": "Für kontinuierliche Daten verwenden Sie einen T-Test bei einer Stichprobe gegen ein Ziel, einen T-Test bei zwei Stichproben für zwei unabhängige Gruppen, einen gepaarten T-Test für Vorher-Nachher bei denselben Einheiten und eine ANOVA für drei oder mehr Gruppen. Verwenden Sie für kategoriale Daten Chi-Quadrat für Unabhängigkeit oder Anpassungsgüte, einen Zwei-Proportionen-Test für zwei Gruppen oder McNemar für gepaarte Binärdaten. Wenn Normalität oder gleiche Varianz fehlschlagen, verwenden Sie Mann-Whitney, Kruskal-Wallis oder einen Vorzeichentest. Verwenden Sie zur Assoziation die Pearson- oder Spearman-Korrelation.",
                "how": [
                  "Formulieren Sie die praktische Frage.",
                  "Identifizieren Sie den Antworttyp: kontinuierlich, binär, Anzahl oder ordinal.",
                  "Zählen Sie die Gruppen und bestimmen Sie, ob die Daten gepaart sind.",
                  "Überprüfen Sie Unabhängigkeit, Normalität und gleiche Varianz.",
                  "Wählen Sie den passenden Test oder eine robuste Alternative.",
                  "Führen Sie den Test durch und interpretieren Sie den p-Wert, das Konfidenzintervall und die Effektgröße.",
                  "Bestätigen Sie die Schlussfolgerung mit Diagrammen und Prozesswissen."
                ],
                "where": "Verwenden Sie die Testauswahl während der gesamten Analyse. Beispiel: Vergleichen Sie die Zufriedenheit auf einer Skala von 1 bis 5 in drei Kliniken mit Kruskal-Wallis. Vergleichen Sie die Fehlerraten vorher und nachher auf denselben Produktionslinien mit einem gepaarten Test oder McNemar, wenn das Ergebnis binär ist. Vergleichen Sie die mittlere Stärke von zwei Lieferanten mit einem T-Test bei zwei Stichproben.",
                "when_not": "Verwenden Sie keinen T-Test für drei oder mehr Gruppen. Verwenden Sie Chi-Quadrat nicht mit sehr kleinen erwarteten Zahlen ohne einen genauen Test. Ignorieren Sie nicht ein paariges Design oder eine Abhängigkeit in den Daten.",
                "common_mistakes": [
                  "Wählen Sie einen bekannten Test anstelle des Tests, der zum Design passt.",
                  "Ignorieren von Annahmen und Versäumnis, eine robuste Alternative zu nutzen.",
                  "Führen Sie viele Tests durch, ohne Anpassungen für mehrere Vergleiche vorzunehmen."
                ],
                "quick_check": [
                  {
                    "q": "Welcher Test vergleicht die Mittelwerte von drei oder mehr unabhängigen Gruppen?",
                    "answer": "Einfaktorielle ANOVA.",
                    "explanation": "ANOVA testet, ob sich mindestens ein Gruppenmittel unterscheidet."
                  },
                  {
                    "q": "Welcher Test vergleicht Vorher- und Nachher-Messungen an denselben Geräten?",
                    "answer": "Ein gepaarter T-Test.",
                    "explanation": "Das gepaarte Design berücksichtigt die Korrelation innerhalb jeder Einheit."
                  },
                  {
                    "q": "Welcher Test prüft die Unabhängigkeit zwischen zwei kategorialen Variablen?",
                    "answer": "Ein Chi-Quadrat-Test der Unabhängigkeit.",
                    "explanation": "Chi-Quadrat vergleicht beobachtete und erwartete Häufigkeiten in einer Kontingenztabelle."
                  }
                ],
                "recap": [
                  "Wählen Sie den Test aus Frage, Antworttyp, Gruppen und Paarung aus.",
                  "Überprüfen Sie Annahmen und nutzen Sie bei Bedarf robuste Alternativen.",
                  "Interpretieren Sie die Effektgröße und die praktische Bedeutung, nicht nur den p-Wert."
                ]
              }
            },
            {
              "id": "B1.6",
              "order": 6,
              "title": "t-Tests",
              "objective": "Führen Sie T-Tests mit einer Stichprobe, zwei Stichproben und gepaarten T-Tests durch.",
              "content": {
                "why": "T-Tests sind die Arbeitspferde für den Vergleich kontinuierlicher Mittelwerte, können aber leicht missbraucht werden. Design, Paarung und Annahmen müssen zur Frage passen.",
                "what": "Ein T-Test bei einer Stichprobe vergleicht einen Mittelwert mit einem Ziel. Ein T-Test mit zwei Stichproben vergleicht Mittelwerte aus zwei unabhängigen Gruppen. Ein gepaarter T-Test vergleicht zwei Messungen an derselben Einheit und beseitigt Abweichungen von Einheit zu Einheit. Die Teststatistik ist die Differenz geteilt durch ihren Standardfehler. Das Ergebnis ist ein t-Wert, ein p-Wert und ein Konfidenzintervall. Verwenden Sie die Welch-Version, wenn die Abweichungen unterschiedlich sind. Geben Sie eine Effektgröße wie Cohens d an, nicht nur die Signifikanz.",
                "how": [
                  "Geben Sie den Vergleich an und geben Sie an, ob die Gruppen unabhängig oder gepaart sind.",
                  "Zeichnen Sie die Daten grafisch auf und prüfen Sie sie auf Ausreißer.",
                  "Überprüfen Sie die ungefähre Normalität und für unabhängige Gruppen die gleiche Varianz.",
                  "Wählen Sie den Test mit einer Stichprobe, zwei Stichproben, dem Welch-Test oder dem gepaarten Test aus.",
                  "Führen Sie den Test durch und überprüfen Sie das Konfidenzintervall und die Effektgröße.",
                  "Interpretieren Sie das Ergebnis prozess- und praxisorientiert."
                ],
                "where": "Verwenden Sie T-Tests für Lieferantenvergleiche, Vorher-Nachher-Schulungen, Prozesse im Vergleich zu Zielen und gepaarte Messungen. Beispiel: Messen Sie die gleichen 12 Produktionslinien vor und nach einer Änderung und verwenden Sie einen gepaarten T-Test. Vergleichen Sie zwei unabhängige Lieferanten mit einem Zwei-Stichproben- oder Welch-Test. Vergleichen Sie den Mittelwert einer Linie mit einem Zielwert mit einem Test mit einer Stichprobe.",
                "when_not": "Verwenden Sie keinen T-Test für drei oder mehr Gruppen. Verwenden Sie ANOVA. Verwenden Sie es nicht für ordinale Ergebnisse, stark abhängige Daten oder schwerwiegende Ausreißer ohne eine robuste Alternative. Behandeln Sie gepaarte Beobachtungen nicht als unabhängig.",
                "common_mistakes": [
                  "Ignorieren der Paarung und Verwendung eines unabhängigen Gruppentests.",
                  "Durchführung mehrerer T-Tests anstelle der ANOVA für mehrere Gruppen.",
                  "Angabe eines p-Werts ohne die Größe der Differenz."
                ],
                "quick_check": [
                  {
                    "q": "Welcher T-Test vergleicht dieselben Einheiten vor und nach einer Änderung?",
                    "answer": "Der gepaarte t-Test.",
                    "explanation": "Durch die Paarung wird die Korrelation zwischen Messungen an derselben Einheit berücksichtigt."
                  },
                  {
                    "q": "Wann sollten Sie den Welch-T-Test verwenden?",
                    "answer": "Wenn zwei unabhängige Gruppen ungleiche Varianzen aufweisen.",
                    "explanation": "Der Welch-Test geht nicht von gleichen Populationsvarianzen aus."
                  },
                  {
                    "q": "Warum eine Effektgröße mit einem t-Test angeben?",
                    "answer": "Es zeigt, ob der Unterschied praktisch sinnvoll ist.",
                    "explanation": "Ein kleiner p-Wert kann bei großen Stichproben mit einem trivialen Unterschied einhergehen."
                  }
                ],
                "recap": [
                  "Passen Sie den T-Test an das Design an: eine Stichprobe, unabhängige Gruppen oder gepaart.",
                  "Überprüfen Sie die Annahmen und verwenden Sie den Welch-Test, wenn die Varianzen unterschiedlich sind.",
                  "Geben Sie das Konfidenzintervall und die Effektgröße an, nicht nur den p-Wert."
                ]
              }
            },
            {
              "id": "B1.7",
              "order": 7,
              "title": "ANOVA",
              "objective": "Führen Sie eine einfaktorielle und zweifaktorielle ANOVA durch und interpretieren Sie Wechselwirkungen.",
              "content": {
                "why": "ANOVA vergleicht drei oder mehr Gruppenmittelwerte und kontrolliert gleichzeitig die Falsch-Positiv-Rate. Es zeigt auch, ob Faktoren interagieren, die separate t-Tests übersehen würden.",
                "what": "Die einfaktorielle ANOVA testet, ob sich mindestens ein Gruppenmittelwert unterscheidet, indem sie die Variation zwischen Gruppen mit der Variation innerhalb der Gruppe unter Verwendung einer F-Statistik vergleicht. Die zweifaktorielle ANOVA testet zwei Faktoren und deren Wechselwirkung. Ein signifikantes Ergebnis bedeutet, dass mindestens ein Mittelwert unterschiedlich ist. Daher können Folgetests wie Tukey ermitteln, welche Gruppen sich unterscheiden. ANOVA geht von unabhängigen Beobachtungen, annähernd normalen Residuen und gleichen Varianzen aus. Berichten Sie über die Effektgröße, z. B. das Eta-Quadrat, und überprüfen Sie die Residuendiagramme.",
                "how": [
                  "Nennen Sie die Faktoren, Gruppen und Nullhypothesen.",
                  "Überprüfen Sie das Design, die Unabhängigkeit und die Gruppenstichprobengrößen.",
                  "Stellen Sie die Gruppen grafisch dar und prüfen Sie die Variabilität.",
                  "Montieren Sie das Einweg- oder Zwei-Wege-Modell.",
                  "Überprüfen Sie den F-Test, den p-Wert und die Interaktion.",
                  "Führen Sie Post-hoc-Vergleiche durch, wenn der Faktor signifikant ist.",
                  "Überprüfen Sie die Residuendiagramme und geben Sie die Effektgröße an."
                ],
                "where": "Verwenden Sie ANOVA, um Lieferanten, Maschinen, Schichten, Kliniken oder Regionen zu vergleichen. Beispiel: Vergleichen Sie die mittlere Zykluszeit von drei Lieferanten. Wenn der Gesamttest aussagekräftig ist, zeigen Tukey-Vergleiche, welche Lieferanten sich unterscheiden. Testen Sie in einer Zwei-Wege-Studie, ob Temperatur und Druck den Ertrag beeinflussen und ob ihre Wechselwirkung von Bedeutung ist.",
                "when_not": "Verwenden Sie keine gewöhnliche ANOVA mit schwerwiegender Nichtnormalität oder ungleichen Varianzen. Verwenden Sie Welch ANOVA oder Kruskal-Wallis. Verwenden Sie es nicht für wiederholte Messungen an denselben Einheiten ohne ein Modell für wiederholte Messungen. Komplexe unausgeglichene Designs erfordern möglicherweise eine Regression oder ein allgemeines lineares Modell.",
                "common_mistakes": [
                  "Ausführen mehrerer T-Tests anstelle einer ANOVA.",
                  "Ignorieren einer wichtigen Interaktion.",
                  "Stoppen beim p-Wert ohne Post-hoc- oder Effektgrößenanalyse."
                ],
                "quick_check": [
                  {
                    "q": "Was sagt Ihnen eine signifikante einfaktorielle ANOVA?",
                    "answer": "Mindestens ein Gruppenmittel unterscheidet sich, aber nicht welcher.",
                    "explanation": "Post-hoc-Vergleiche identifizieren die spezifischen Unterschiede."
                  },
                  {
                    "q": "Was ist eine Interaktion in der zweifaktoriellen ANOVA?",
                    "answer": "Die Wirkung eines Faktors hängt von der Höhe des anderen Faktors ab.",
                    "explanation": "Eine Interaktion bedeutet, dass die Faktoren nicht unabhängig voneinander wirken."
                  },
                  {
                    "q": "Welche Folgemethode kontrolliert Fehler beim Vergleich mehrerer Gruppenmittelwerte?",
                    "answer": "Tukeys ehrlich signifikanter Unterschiedstest.",
                    "explanation": "Tukey passt sich für mehrere paarweise Vergleiche an."
                  }
                ],
                "recap": [
                  "ANOVA vergleicht Mittelwerte über drei oder mehr Gruppen oder mehrere Faktoren.",
                  "Ein signifikantes Ergebnis erfordert eine Nachuntersuchung, um unterschiedliche Gruppen zu identifizieren.",
                  "Überprüfen Sie Residuen und interpretieren Sie Wechselwirkungen und Effektgrößen."
                ]
              }
            },
            {
              "id": "B1.8",
              "order": 8,
              "title": "Nichtparametrische Tests",
              "objective": "Verwenden Sie Mann-Whitney-, Kruskal-Wallis- und Vorzeichentests, wenn Annahmen fehlschlagen.",
              "content": {
                "why": "Parametrische Tests können bei ordinalen Daten, kleinen Stichproben oder schwerwiegenden Ausreißern fehlschlagen. Nichtparametrische Tests liefern gültige Vergleiche, wenn ihre Annahmen angemessener sind.",
                "what": "Nichtparametrische Tests verwenden Ränge statt roher Mittelwerte. Mann-Whitney vergleicht zwei unabhängige Gruppen, Wilcoxon-Signed-Rank vergleicht gepaarte Daten, Kruskal-Wallis vergleicht drei oder mehr unabhängige Gruppen und der Vorzeichentest vergleicht gepaarte Ergebnisse nach Richtung. Diese Tests sind robust gegenüber Ausreißern und Nichtnormalitäten, vergleichen jedoch normalerweise eher Verteilungen oder Mediane als Mittelwerte. Sie verlieren etwas an Aussagekraft, wenn die Annahmen der Normaltheorie tatsächlich gültig sind.",
                "how": [
                  "Identifizieren Sie, warum die parametrische Annahme fehlschlägt.",
                  "Bestimmen Sie, ob das Design unabhängig oder gepaart ist und wie viele Gruppen vorhanden sind.",
                  "Wählen Sie den passenden rangbasierten Test.",
                  "Formulieren Sie die Hypothese in Form von Medianen oder Verteilungen.",
                  "Führen Sie den Test durch und überprüfen Sie den p-Wert und die Effektgröße.",
                  "Stellen Sie die Daten grafisch dar und interpretieren Sie das Ergebnis im Kontext."
                ],
                "where": "Verwenden Sie nichtparametrische Tests für Zufriedenheitswerte, verzerrte Wartezeiten, kleine Piloten, ordinale Umfragedaten und subjektive Bewertungen. Beispiel: Vergleichen Sie die Patientenzufriedenheit auf einer Skala von 1 bis 5 in drei Kliniken mit Kruskal-Wallis. Vergleichen Sie mit Mann-Whitney die unterschiedlichen Reparaturzeiten von zwei Depots.",
                "when_not": "Verwenden Sie nichtparametrische Tests nicht automatisch für jeden Datensatz. Einige Tests gehen bei der Interpretation einer Standortverschiebung immer noch von ähnlichen Verteilungsformen aus. Komplexe Designs, Kovariaten und wiederholte Messungen erfordern möglicherweise ein verallgemeinertes Modell.",
                "common_mistakes": [
                  "Ein nichtparametrisches Ergebnis als Mittelwertvergleich behandeln.",
                  "Bei der Interpretation des Ergebnisses wird die Verteilungsform ignoriert.",
                  "Angenommen, ein Rangtest rettet eine unzureichende Stichprobengröße."
                ],
                "quick_check": [
                  {
                    "q": "Welcher Test vergleicht zwei unabhängige Gruppen ohne Normalitätsannahme?",
                    "answer": "Der Mann-Whitney-Test.",
                    "explanation": "Es vergleicht eher Ränge als rohe Mittelwerte."
                  },
                  {
                    "q": "Welcher Test vergleicht drei oder mehr unabhängige Gruppen nichtparametrisch?",
                    "answer": "Der Kruskal-Wallis-Test.",
                    "explanation": "Es handelt sich um die rangbasierte Alternative zur einfaktoriellen ANOVA."
                  },
                  {
                    "q": "Welcher Test eignet sich für gepaarte Ordinaldaten?",
                    "answer": "Der Wilcoxon-Signed-Rang-Test.",
                    "explanation": "Es verwendet die Ränge gepaarter Differenzen."
                  }
                ],
                "recap": [
                  "Verwenden Sie rangbasierte Tests, wenn parametrische Annahmen nicht glaubwürdig sind.",
                  "Ordnen Sie den Test unabhängig bzw. gepaart und der Anzahl der Gruppen zu.",
                  "Interpretieren Sie Mediane oder Verteilungen, nicht Mittelwerte."
                ]
              }
            },
            {
              "id": "B1.9",
              "order": 9,
              "title": "Chi-Quadrat-Tests",
              "objective": "Testen Sie Unabhängigkeit und Anpassungsgüte für kategoriale Daten.",
              "content": {
                "why": "Viele Verbesserungsfragen beziehen sich auf Kategorien wie Fehlertyp, Bestanden oder Nichtbestehen oder Kundensegment. Chi-Quadrat-Tests zeigen, ob Kategoriehäufigkeiten von den Erwartungen abweichen oder miteinander in Zusammenhang stehen.",
                "what": "Ein Chi-Quadrat-Anpassungstest vergleicht beobachtete Zahlen mit erwarteten Zahlen aus einer hypothetischen Verteilung. Ein Chi-Quadrat-Unabhängigkeitstest prüft, ob zwei kategoriale Variablen in einer Kontingenztabelle verknüpft sind. Die statistischen Summen quadrieren die beobachteten minus erwarteten Unterschiede dividiert durch die erwarteten Zählungen. Verwenden Sie den exakten Fisher-Test für kleine 2x2-Tabellen. Cramers V fasst die Assoziationsstärke zusammen. Für gepaarte Binärdaten ist der McNemar-Test die richtige Wahl.",
                "how": [
                  "Definieren Sie die Kategorien und erstellen Sie eine Häufigkeitstabelle.",
                  "Formulieren Sie die Hypothesen.",
                  "Überprüfen Sie die erwartete Anzahl, normalerweise mindestens fünf pro Zelle.",
                  "Führen Sie den Chi-Quadrat-Test oder eine exakte Alternative durch.",
                  "Untersuchen Sie standardisierte Residuen, um ungewöhnliche Zellen zu lokalisieren.",
                  "Geben Sie den p-Wert, die Effektgröße und das praktische Muster an."
                ],
                "where": "Verwenden Sie Chi-Quadrat-Tests für Fehlertypen nach Schicht, bestanden oder nicht bestanden nach Lieferant, Umfrageantworten nach Region und Einhaltung nach Abteilung. Beispiel: Testen Sie, ob die Fehlerkategorie mit der Produktionslinie verknüpft ist. Wenn das Ergebnis signifikant ist, zeigen die Residuen, welche Linie und Fehlerkategorie die Assoziation auslöst.",
                "when_not": "Verwenden Sie für gepaarte Daten keine Chi-Quadrat-Unabhängigkeit. Verwenden Sie McNemar. Verlassen Sie sich nicht darauf, wenn die erwarteten Zahlen ohne einen genauen Test sehr gering sind. Vermeiden Sie es, Ordinalkategorien als ungeordnet zu behandeln, wenn eine Ordinalmethode verfügbar ist.",
                "common_mistakes": [
                  "Verwendung eines Chi-Quadrat-Tests für gepaarte Vorher-Nachher-Daten.",
                  "Ignorieren kleiner erwarteter Zählungen.",
                  "Geltendmachung einer Schadensursache gegenüber einem Verein."
                ],
                "quick_check": [
                  {
                    "q": "Welcher Chi-Quadrat-Test prüft, ob zwei kategoriale Variablen verknüpft sind?",
                    "answer": "Der Test der Unabhängigkeit.",
                    "explanation": "Es vergleicht beobachtete und erwartete Zählungen in einer Kontingenztabelle."
                  },
                  {
                    "q": "Welcher Test eignet sich für gepaarte binäre Ergebnisse?",
                    "answer": "McNemars Test.",
                    "explanation": "McNemar erklärt die Paarung von Vorher- und Nachher-Antworten."
                  },
                  {
                    "q": "Was sollten Sie prüfen, bevor Sie einem Chi-Quadrat-Test vertrauen?",
                    "answer": "Dass die erwarteten Zahlen groß genug sind, oder einen genauen Test verwenden.",
                    "explanation": "Kleine erwartete Zählungen machen die Chi-Quadrat-Näherung unzuverlässig."
                  }
                ],
                "recap": [
                  "Chi-Quadrat-Tests vergleichen kategoriale Häufigkeiten oder Testassoziationen.",
                  "Überprüfen Sie die erwarteten Zählungen und verwenden Sie bei Bedarf genaue Tests.",
                  "Verwenden Sie Residuen und Effektgrößen, um das Muster zu erklären."
                ]
              }
            }
          ]
        },
        {
          "id": "black-2",
          "number": 2,
          "title": "Messsysteme",
          "duration": "2 Stunden",
          "summary": "Erweitern Sie MSA auf Pass/Fail- und kategoriale Beurteilungen und verstehen Sie Kalibrierung und Unsicherheit.",
          "lessons": [
            {
              "id": "B2.1",
              "order": 1,
              "title": "Attribut MSA",
              "objective": "Führen Sie eine Attributübereinstimmungsanalyse durch und interpretieren Sie Kappa.",
              "content": {
                "why": "Die Attributprüfung hängt von Entscheidungen durch Menschen oder Messgeräte ab. Wenn Gutachter mit sich selbst, untereinander oder mit der Norm nicht einverstanden sind, sind die Fehlerdaten unzuverlässig und die Schlussfolgerungen zur Verbesserung können falsch sein.",
                "what": "Die Attributübereinstimmungsanalyse misst die Wiederholbarkeit innerhalb von Gutachtern, die Reproduzierbarkeit zwischen Gutachtern und die Genauigkeit gegenüber einem bekannten Standard. Kappa passt die Vereinbarung dem Zufall an. Werte über etwa 0,90 sind ausgezeichnet, 0,70 bis 0,90 sind für Entscheidungen mit geringerem Risiko akzeptabel und niedrigere Werte weisen auf ein Problem hin. Die prozentuale Übereinstimmung allein kann gut aussehen, selbst wenn die zufällige Übereinstimmung hoch ist. Verwenden Sie für ordinale Bewertungen einen gewichteten Kappa- oder Kendall-Koeffizienten.",
                "how": [
                  "Definieren Sie das Merkmal und die Entscheidungsregel.",
                  "Wählen Sie 30 bis 50 Teile aus, die das gesamte Spektrum abdecken, einschließlich Grenzfällen.",
                  "Verwenden Sie zwei oder drei Gutachter und zwei oder drei Versuche.",
                  "Randomisieren und verblinden Sie die Proben und Versuche.",
                  "Geben Sie eine bekannte Standard- oder Expertenbewertung an.",
                  "Analysieren Sie die Übereinstimmung innerhalb der Gutachter, zwischen den Gutachtern und im Vergleich zum Standard.",
                  "Trainieren Sie erneut, klären Sie Definitionen oder verbessern Sie das Messgerät und wiederholen Sie dann die Studie."
                ],
                "where": "Verwenden Sie das Attribut MSA für visuelle Inspektion, Gut/Schlecht-Messungen, Fehlerklassifizierung, Dokumentenprüfung und klinische Diagnose. Beispiel: Drei Prüfer begutachten 30 Teile zweimal. Der Kappa innerhalb der Prüfer beträgt 0,95, der Kappa zwischen den Prüfern jedoch 0,55, was eher auf inkonsistente Definitionen als auf eine schlechte individuelle Wiederholbarkeit hinweist.",
                "when_not": "Verwenden Sie die Attributübereinstimmungsanalyse nicht für kontinuierliche Messungen; Verwenden Sie eine Gage-R&R-Studie. Vertrauen Sie nicht auf Ergebnisse aus nicht repräsentativen Teilen oder einem fehlenden Standard. Kappa kann durch die Prävalenz beeinflusst werden. Interpretieren Sie es daher mit dem Studiendesign.",
                "common_mistakes": [
                  "Verwendung zu weniger oder nicht repräsentativer Proben.",
                  "Angabe der prozentualen Übereinstimmung ohne Kappa.",
                  "Versäumnis, Gutachter zu verblinden oder Studien randomisiert durchzuführen."
                ],
                "quick_check": [
                  {
                    "q": "Was misst die Vereinbarung innerhalb des Gutachters?",
                    "answer": "Wiederholbarkeit oder ob ein Gutachter in allen Versuchen mit sich selbst übereinstimmt.",
                    "explanation": "Dieselbe Person bewertet dieselben Teile mehr als einmal."
                  },
                  {
                    "q": "Warum Kappa statt Prozentübereinstimmung verwenden?",
                    "answer": "Kappa passt sich der zufällig erwarteten Einigung an.",
                    "explanation": "Prozentuale Übereinstimmung kann die Konsistenz überbewerten."
                  },
                  {
                    "q": "Was lässt die Meinungsverschiedenheit zwischen den Gutachtern vermuten?",
                    "answer": "Inkonsistente Definitionen, Schulungen oder Messmethoden.",
                    "explanation": "Reproduzierbarkeitsprobleme erfordern in der Regel eine Standardisierung."
                  }
                ],
                "recap": [
                  "Die Attribut-MSA validiert Wiederholbarkeit, Reproduzierbarkeit und Genauigkeit.",
                  "Verwenden Sie repräsentative Teile, Verblindung, Randomisierung und einen Standard.",
                  "Interpretieren Sie Kappa und untersuchen Sie die Ursache der Meinungsverschiedenheit."
                ]
              }
            },
            {
              "id": "B2.2",
              "order": 2,
              "title": "Messunsicherheit und Kalibrierung",
              "objective": "Separate Kalibrierung, Bias, Linearität und Unsicherheit.",
              "content": {
                "why": "Ein Kalibrierungsaufkleber macht eine Messung nicht exakt. Jede Messung ist mit Unsicherheiten behaftet, und Entscheidungen in der Nähe einer Spezifikationsgrenze können falsch sein, wenn diese Unsicherheit nicht verstanden wird.",
                "what": "Bei der Kalibrierung wird ein Instrument mit einem rückverfolgbaren Standard verglichen und ein Bias und eine Korrektur ermittelt. Die Messunsicherheit ist der Bereich, in dem wahrscheinlich der wahre Wert enthalten ist. Zu den Quellen gehören Auflösung, Wiederholbarkeit, Reproduzierbarkeit, Bias, Linearität, Stabilität, Umgebung und der Referenzstandard. Die Linearität beschreibt, wie sich der Fehler im gesamten Bereich ändert. Ein Messunsicherheitsbudget kombiniert Standardunsicherheiten in Quadratur und multipliziert die erweiterte Unsicherheit mit einem Abdeckungsfaktor, oft zwei für eine Konfidenz von etwa 95 %.",
                "how": [
                  "Definieren Sie die Messung und die Toleranz- oder Entscheidungsregel.",
                  "Listen Sie alle wichtigen Unsicherheitsquellen auf.",
                  "Quantifizieren Sie jede Quelle mit Daten oder Spezifikationen.",
                  "Kombinieren Sie Standardunsicherheiten und berechnen Sie die erweiterte Unsicherheit.",
                  "Vergleichen Sie die Unsicherheit mit der Toleranz und legen Sie bei Bedarf ein Schutzband fest.",
                  "Kalibrieren Sie nach einem risikobasierten Zeitplan und überwachen Sie die Abweichung.",
                  "Dokumentieren Sie die Rückverfolgbarkeit und überprüfen Sie sie nach Reparaturen oder Umgebungsveränderungen erneut."
                ],
                "where": "Nutzen Sie die Unsicherheitsanalyse für Messschieber, Waagen, Thermometer, Manometer, Labortests und klinische Geräte. Beispiel: Die Toleranz eines Teils beträgt plus oder minus 0,10 mm und die Messunsicherheit beträgt plus oder minus 0,02 mm. Akzeptieren Sie nur Teile innerhalb von plus oder minus 0,08 mm oder berücksichtigen Sie formell das Risiko einer falschen Annahme.",
                "when_not": "Verwechseln Sie die Kalibrierung nicht mit einer Messgeräte-R&R-Studie. Bei der Kalibrierung geht es um die Rückverfolgbarkeit und die durchschnittliche Abweichung, während bei der Messgeräte-R&R die Variation berücksichtigt wird. Behandeln Sie ein kalibriertes Instrument nicht als exakt und ignorieren Sie nicht die Unsicherheit bei „Gut“ oder „Nicht bestanden“-Entscheidungen.",
                "common_mistakes": [
                  "Kalibrierung wird mit perfekter Genauigkeit gleichgesetzt.",
                  "Ignorieren von Linearität, Drift und Umwelteinflüssen.",
                  "Konformitätsentscheidungen ohne Schutzband treffen."
                ],
                "quick_check": [
                  {
                    "q": "Was stellt die Kalibrierung fest?",
                    "answer": "Rückführbarkeit auf einen Standard und die Vorspannung oder Korrektur des Instruments.",
                    "explanation": "Bei der Kalibrierung wird der Gerätemesswert mit einer bekannten Referenz verknüpft."
                  },
                  {
                    "q": "Wie wird die erweiterte Unsicherheit berechnet?",
                    "answer": "Multiplizieren Sie die kombinierte Standardunsicherheit mit einem Erweiterungsfaktor, häufig zwei.",
                    "explanation": "Ein Faktor von zwei ergibt eine Abdeckung von etwa 95 % für eine Normalverteilung."
                  },
                  {
                    "q": "Warum ein Schutzband in der Nähe der Spezifikationsgrenzen verwenden?",
                    "answer": "Reduzierung des Risikos der Annahme eines Teils, das aufgrund von Messfehlern nicht den Spezifikationen entspricht.",
                    "explanation": "Das Schutzband hält unsichere Messungen vom Grenzwert fern."
                  }
                ],
                "recap": [
                  "Durch die Kalibrierung werden Rückverfolgbarkeit und Abweichung gewährleistet, nicht die Nullunsicherheit.",
                  "Erstellen Sie ein Unsicherheitsbudget und berechnen Sie die erweiterte Unsicherheit.",
                  "Verwenden Sie Schutzbänder, wenn die Messunsicherheit für die Entscheidung von wesentlicher Bedeutung ist."
                ]
              }
            }
          ]
        },
        {
          "id": "black-3",
          "number": 3,
          "title": "Regression und Modellierung",
          "duration": "3 Stunden",
          "summary": "Modellieren Sie Beziehungen mit mehreren Prädiktoren und binären Ergebnissen und prüfen Sie dann, ob das Modell vertrauenswürdig ist.",
          "lessons": [
            {
              "id": "B3.1",
              "order": 1,
              "title": "Multiple Regression",
              "objective": "Interpretieren Sie Koeffizienten, angepasstes R-Quadrat und allgemeine Modelltests.",
              "content": {
                "why": "Prozesse haben in der Regel mehrere Treiber. Die multiple Regression schätzt den unabhängigen Effekt jedes Prädiktors unter Berücksichtigung der anderen und unterstützt die Vorhersage.",
                "what": "Das Modell drückt eine kontinuierliche Antwort als Achsenabschnitt plus einen Koeffizienten für jeden Prädiktor plus Fehler aus. Ein Koeffizient ist die erwartete Änderung der Antwort für einen Anstieg dieses Prädiktors um eine Einheit, während die anderen konstant bleiben. Der Gesamt-F-Test fragt, ob das Modell die Variation über den Zufall hinaus erklärt, während einzelne T-Tests Koeffizienten bewerten. Das angepasste R-Quadrat bestraft unnötige Prädiktoren. Überprüfen Sie Linearität, Unabhängigkeit, normale Residuen, gleiche Varianz und Multikollinearität.",
                "how": [
                  "Definieren Sie die Antwort- und Kandidatenprädiktoren anhand des Prozesswissens.",
                  "Zeichnen Sie Beziehungen auf und suchen Sie nach Anomalien.",
                  "Passen Sie das Modell an und überprüfen Sie den Gesamttest und die Koeffizienten.",
                  "Restdiagnostik und Multikollinearität prüfen.",
                  "Verfeinern Sie das Modell ohne Überanpassung.",
                  "Validieren Sie mit neuen oder zurückgehaltenen Daten.",
                  "Interpretieren Sie Koeffizienten und Intervalle in praktischen Einheiten."
                ],
                "where": "Verwenden Sie eine multiple Regression für Zykluszeit im Vergleich zu Personalbesetzung und Nachfrage, Ertrag im Vergleich zu Temperatur und Druck, Kosten im Vergleich zu Volumen und Produktmix oder Wartezeit im Vergleich zu Personalbesetzung und Ankünften. Beispiel: Ein Koeffizient von minus 0,8 Minuten pro zusätzlichem Mitarbeiter bedeutet, dass die durchschnittliche Wartezeit bei konstanter Nachfrage um 0,8 Minuten sinkt.",
                "when_not": "Schließen Sie keine Kausalität aus Beobachtungsdaten ab. Extrapolieren Sie nicht über den beobachteten Bereich hinaus. Erzwingen Sie kein lineares Modell, wenn Krümmung oder Wechselwirkungen wichtig sind, und schließen Sie nicht viele korrelierte Prädiktoren ein, ohne das Modell zu überprüfen.",
                "common_mistakes": [
                  "Ein hohes R-Quadrat wird als Kausalitätsbeweis betrachtet.",
                  "Restdiagnose und Validierung werden ignoriert.",
                  "Entfernen von Prädiktoren, die nur auf p-Werten basieren."
                ],
                "quick_check": [
                  {
                    "q": "Wie wird ein Regressionskoeffizient interpretiert?",
                    "answer": "Die Änderung der Reaktion pro Einheit ändert sich in diesem Prädiktor und hält andere konstant.",
                    "explanation": "Der Koeffizient ist ein angepasster Effekt."
                  },
                  {
                    "q": "Warum das angepasste R-Quadrat verwenden?",
                    "answer": "Es bestraft Prädiktoren, die das Modell nicht ausreichend verbessern.",
                    "explanation": "Das gewöhnliche R-Quadrat steigt immer, wenn Prädiktoren hinzugefügt werden."
                  },
                  {
                    "q": "Was sagt Ihnen der Gesamt-F-Test?",
                    "answer": "Ob das Modell als Ganzes ein erhebliches Maß an Variation erklärt.",
                    "explanation": "Es wird nicht gezeigt, welche einzelnen Prädiktoren wichtig sind."
                  }
                ],
                "recap": [
                  "Die multiple Regression schätzt angepasste Effekte und unterstützt die Vorhersage.",
                  "Überprüfen Sie Annahmen, Diagnosen und Validierungen.",
                  "Interpretieren Sie Koeffizienten im Kontext und nicht als automatische kausale Effekte."
                ]
              }
            },
            {
              "id": "B3.2",
              "order": 2,
              "title": "Logistische Regression",
              "objective": "Modellieren Sie Ja/Nein-Ergebnisse mit Quotenverhältnissen.",
              "content": {
                "why": "Binäre Ergebnisse wie „Bestanden“ oder „Nicht bestanden“, „Fehler“ oder „kein Fehler“ und „Abwanderung“ oder „Verbleiben“ können mit der gewöhnlichen linearen Regression nicht gut modelliert werden. Die logistische Regression modelliert die Wahrscheinlichkeit des Ereignisses.",
                "what": "Die logistische Regression modelliert die Log-Odds eines Ereignisses als lineare Funktion von Prädiktoren. Ein Koeffizient wird durch Potenzierung in ein Quotenverhältnis umgewandelt. Ein Quotenverhältnis über eins bedeutet höhere Wahrscheinlichkeiten für das Ereignis bei einem Anstieg des Prädiktors um eine Einheit, während andere konstant bleiben. unter eins bedeutet niedrigere Quoten. Die vorhergesagten Wahrscheinlichkeiten liegen zwischen null und eins. Bewerten Sie die Modellanpassung anhand von Abweichung, AIC, Kalibrierung und Diskriminierung, beispielsweise im ROC-Bereich.",
                "how": [
                  "Definieren Sie das Ereignis und kodieren Sie es als Eins versus Null.",
                  "Wählen Sie Prädiktoren mithilfe von Prozesswissen aus.",
                  "Passen Sie das Modell an und überprüfen Sie den Gesamttest und die Koeffizienten.",
                  "Konvertieren Sie Koeffizienten mit Konfidenzintervallen in Quotenverhältnisse.",
                  "Bewerten Sie Diskriminierung, Kalibrierung und Einflusspunkte.",
                  "Validieren Sie mit Holdout-Daten und wählen Sie einen Entscheidungsschwellenwert basierend auf den Kosten.",
                  "Kommunizieren Sie die Quotenverhältnisse sorgfältig."
                ],
                "where": "Verwenden Sie die logistische Regression für die Fehlerwahrscheinlichkeit nach Lieferant oder Schicht, Bestehen oder Nichtbestehen nach Schulungsmethode, Patientenwiederaufnahme, Kreditausfall, Mitarbeiterfluktuation und Kundenabwanderung. Beispiel: Ein Quotenverhältnis von 1,8 pro 10 Grad bedeutet eine um 80 % höhere Quote, nicht eine um 80 % höhere Wahrscheinlichkeit.",
                "when_not": "Verwenden Sie keine lineare Regression für eine binäre Antwort. Stellen Sie ein Quotenverhältnis nicht als Risikoverhältnis dar, wenn das Ereignis häufig vorkommt. Seltene Ereignisse oder kleine Stichproben erfordern möglicherweise bestrafte oder exakte Methoden, und eine perfekte Trennung weist auf ein Designproblem hin.",
                "common_mistakes": [
                  "Ein Odds Ratio als Wahrscheinlichkeit oder Risiko interpretieren.",
                  "Kalibrierung ignorieren und nur den ROC-Bereich verwenden.",
                  "Verwendung eines Standard-Grenzwerts von 0,5 ohne Berücksichtigung der Entscheidungskosten."
                ],
                "quick_check": [
                  {
                    "q": "Was bedeutet ein Quotenverhältnis größer als eins?",
                    "answer": "Höhere Wahrscheinlichkeit des Ereignisses, wenn der Prädiktor steigt.",
                    "explanation": "Der potenzierte Koeffizient vergleicht die Quoten für eine Änderung um eine Einheit."
                  },
                  {
                    "q": "Was sagt die logistische Regression voraus?",
                    "answer": "Die Wahrscheinlichkeit des binären Ereignisses.",
                    "explanation": "Das Log-Odds-Modell wird in eine Wahrscheinlichkeit zwischen Null und Eins umgewandelt."
                  },
                  {
                    "q": "Warum sollte sowohl die Kalibrierung als auch die Diskriminierung beurteilt werden?",
                    "answer": "Ein Modell kann Fälle gut einstufen, aber dennoch ungenaue Wahrscheinlichkeiten angeben.",
                    "explanation": "Bei der Kalibrierung wird überprüft, ob die vorhergesagten Wahrscheinlichkeiten mit den beobachteten Raten übereinstimmen."
                  }
                ],
                "recap": [
                  "Die logistische Regression modelliert binäre Ergebnisse durch Log-Odds.",
                  "Quotenverhältnisse beschreiben relative Chancen, keine Wahrscheinlichkeiten.",
                  "Überprüfen Sie Kalibrierungs-, Diskriminierungs-, Validierungs- und Entscheidungskosten."
                ]
              }
            },
            {
              "id": "B3.3",
              "order": 3,
              "title": "Regressionsdiagnostik",
              "objective": "Überprüfen Sie Residuen, Hebelwirkung, Einfluss und mangelnde Passgenauigkeit.",
              "content": {
                "why": "Eine Regression kann ein hohes R-Quadrat haben und dennoch Annahmen verletzen. Die Diagnose zeigt, ob das Modell vertrauenswürdig ist und wo es versagt.",
                "what": "Residuen werden abzüglich angepasster Werte beobachtet. Ein Residuen-gegen-angepasstes Diagramm prüft die Linearität und die gleiche Varianz. Ein normales Wahrscheinlichkeitsdiagramm prüft die Restnormalität. Residuen versus Reihenfolge prüfen Unabhängigkeit, insbesondere für zeitlich geordnete Daten. Die Hebelwirkung misst, wie ungewöhnlich ein Prädiktorwert ist, während die Cook-Distanz den Einfluss auf das angepasste Modell misst. Bei einem Test auf mangelnde Anpassung werden wiederholte Beobachtungen verwendet, um eine unzureichende Modellform zu erkennen.",
                "how": [
                  "Passen Sie das Modell an und untersuchen Sie die zusammenfassenden Statistiken.",
                  "Stellen Sie die Residuen im Vergleich zu den angepassten Werten und im Vergleich zur Reihenfolge dar.",
                  "Überprüfen Sie das normale Wahrscheinlichkeitsdiagramm.",
                  "Identifizieren Sie Punkte mit hoher Hebelwirkung und großem Einfluss.",
                  "Untersuchen Sie Muster und bestätigen Sie die Datenqualität, bevor Sie etwas ändern.",
                  "Fügen Sie Begriffe hinzu, transformieren Sie Variablen oder verwenden Sie je nach Bedarf robuste Methoden.",
                  "Überarbeiten und validieren Sie das überarbeitete Modell."
                ],
                "where": "Nutzen Sie die Diagnose für jede Regression, DOE-Analyse und jedes Vorhersagemodell. Beispiel: Ein trichterförmiges Residuendiagramm weist auf eine ungleiche Varianz hin. Ein geschwungenes Muster deutet auf einen fehlenden quadratischen Term hin. Ein Punkt mit einer großen Cook-Distanz sollte auf einen Datenfehler oder eine besondere Ursache überprüft werden.",
                "when_not": "Löschen Sie Ausreißer nicht automatisch, nur um die Anpassung zu verbessern. Verlassen Sie sich bei sehr kleinen Proben nicht allein auf die Diagnostik. Zeitreihendaten erfordern explizite Autokorrelationsprüfungen und -methoden.",
                "common_mistakes": [
                  "Ein Modell nur anhand des R-Quadrats beurteilen.",
                  "Restmuster ignorieren.",
                  "Hebelwirkung mit Einfluss verwechseln."
                ],
                "quick_check": [
                  {
                    "q": "Was lässt ein gekrümmtes Muster in Residuen gegenüber angepassten Werten vermuten?",
                    "answer": "Dem Modell fehlt die Krümmung oder ein nichtlinearer Term.",
                    "explanation": "Systematische Restmuster weisen auf mangelnde Passgenauigkeit hin."
                  },
                  {
                    "q": "Was misst Cooks Distanz?",
                    "answer": "Der Einfluss einer Beobachtung auf das angepasste Modell.",
                    "explanation": "Es kombiniert Hebelwirkung und Restgröße."
                  },
                  {
                    "q": "Warum Residuen gegen Beobachtungsreihenfolge darstellen?",
                    "answer": "Zur Prüfung auf Abhängigkeit oder Drift im Laufe der Zeit.",
                    "explanation": "Muster nach Reihenfolge deuten auf eine Autokorrelation hin."
                  }
                ],
                "recap": [
                  "Die Diagnostik testet die Annahmen, die der Regression zugrunde liegen.",
                  "Untersuchen Sie Einflusspunkte, bevor Sie das Modell ändern.",
                  "Verwenden Sie Restmuster, um eine bessere Modellform zu erreichen."
                ]
              }
            },
            {
              "id": "B3.4",
              "order": 4,
              "title": "Multikollinearität und Modellbildung",
              "objective": "Erkennen Sie korrelierte Prädiktoren und wählen Sie ein sparsames Modell.",
              "content": {
                "why": "Korrelierte Prädiktoren machen Koeffizienten instabil und schwer zu interpretieren. Eine sorgfältige Modellbildung führt zu einem einfacheren Modell, das sich eher verallgemeinern lässt.",
                "what": "Multikollinearität tritt auf, wenn Prädiktoren stark korreliert sind. Varianzinflationsfaktoren über fünf sind besorgniserregend und über zehn schwerwiegend. Zu den Symptomen gehören große Standardfehler, instabile Koeffizienten und unerwartete Anzeichen. Zu den Abhilfemaßnahmen gehören das Entfernen oder Kombinieren von Prädiktoren, die Verwendung von Prozesswissen, die Zentrierung von Interaktionstermen, die Ridge-Regression oder Hauptkomponenten. Die Modellbildung bringt Erklärung, Vorhersage, Sparsamkeit und Validierung in Einklang.",
                "how": [
                  "Klären Sie, ob das Ziel eine Erklärung oder eine Vorhersage ist.",
                  "Bildschirmprädiktoren mit Diagrammen und Korrelationsprüfungen.",
                  "Passen Sie ein Kandidatenmodell an und berechnen Sie VIFs.",
                  "Entfernen, kombinieren oder transformieren Sie korrelierte Prädiktoren mit einer Begründung.",
                  "Vergleichen Sie Modelle mit angepasstem oder vorhergesagtem R-Quadrat, AIC und Validierung.",
                  "Respektieren Sie die Hierarchie, wenn Interaktionen vorhanden sind.",
                  "Dokumentieren Sie das endgültige Modell und seine Einschränkungen."
                ],
                "where": "Nutzen Sie diese Methoden mit vielen Prozessvariablen, Umfragedaten, Finanzindikatoren und Sensordaten. Beispiel: Die Temperaturen der Ofenzone sind stark korreliert. Behalten Sie eine repräsentative Variable bei oder erstellen Sie eine zusammengesetzte Variable, anstatt zwei instabile Koeffizienten zu interpretieren.",
                "when_not": "Verwenden Sie die schrittweise Auswahl nicht als Ersatz für Prozessdenken. Löschen Sie eine Variable nicht nur, weil ihr VIF hoch ist. Wenn das Ziel eine reine Vorhersage ist und das Modell auf neuen Daten stabil ist, kann Multikollinearität tolerierbar sein.",
                "common_mistakes": [
                  "Instabile Koeffizienten als reale Effekte interpretieren.",
                  "Überanpassung eines komplexen Modells an Trainingsdaten.",
                  "Datenausbaggerung ohne Validierung."
                ],
                "quick_check": [
                  {
                    "q": "Welcher VIF-Wert weist häufig auf eine schwerwiegende Multikollinearität hin?",
                    "answer": "Über etwa zehn.",
                    "explanation": "Werte über fünf sind besorgniserregend und über zehn sind schwerwiegend."
                  },
                  {
                    "q": "Was passiert mit den Koeffizientenstandardfehlern bei Multikollinearität?",
                    "answer": "Sie nehmen zu, was die Schätzungen instabil macht.",
                    "explanation": "Korrelierte Prädiktoren erschweren die Schätzung einzelner Effekte."
                  },
                  {
                    "q": "Warum ein erstelltes Modell anhand neuer Daten validieren?",
                    "answer": "Um zu überprüfen, ob es verallgemeinert und nicht überpasst.",
                    "explanation": "Allein die Trainingsfitheit kann unnötige Komplexität belohnen."
                  }
                ],
                "recap": [
                  "Multikollinearität erhöht die Unsicherheit und destabilisiert Koeffizienten.",
                  "Nutzen Sie VIFs, Prozesskenntnisse und Sparsamkeit, um Modelle zu erstellen.",
                  "Validieren Sie das endgültige Modell, bevor Sie seinen Vorhersagen vertrauen."
                ]
              }
            }
          ]
        },
        {
          "id": "black-4",
          "number": 4,
          "title": "Versuchsplanung",
          "duration": "4 Stunden",
          "summary": "Entwerfen Sie effiziente Experimente, überprüfen Sie viele Faktoren, optimieren Sie Reaktionen und machen Sie Designs robust gegenüber Rauschen.",
          "lessons": [
            {
              "id": "B4.1",
              "order": 1,
              "title": "Vollfaktorielles DOE",
              "objective": "Entwerfen und analysieren Sie eine vollständige Fakultät mit Haupteffekten und Wechselwirkungen.",
              "content": {
                "why": "Durch das Ändern jeweils eines Faktors werden Interaktionen verpasst und Durchläufe werden verschwendet. Ein vollfaktorielles Experiment deckt die Haupteffekte und Wechselwirkungen auf strukturierte und effiziente Weise auf.",
                "what": "Bei einem vollfaktoriellen Design wird jede Kombination von Faktorstufen getestet. Bei k Faktoren auf zwei Ebenen sind zwei Läufe pro k erforderlich. Haupteffekte messen die durchschnittliche Änderung der Reaktion, wenn ein Faktor von niedrig nach hoch wechselt. Wechselwirkungen treten auf, wenn die Wirkung eines Faktors vom Ausmaß eines anderen abhängt. Mittelpunkte erkennen Krümmungen und die Replikation liefert eine unabhängige Fehlerschätzung. Randomisierung schützt vor Ordnungseffekten.",
                "how": [
                  "Definieren Sie Ziel, Reaktion, Faktoren, Ebenen und praktische Einschränkungen.",
                  "Wählen Sie das faktorielle Design und die Anzahl der Replikate.",
                  "Fügen Sie Mittelpunkte hinzu, wenn eine Krümmung möglich ist.",
                  "Randomisieren Sie die Ausführungsreihenfolge und zeichnen Sie jede Bedingung auf.",
                  "Führen Sie das Experiment durch und überprüfen Sie die Qualität der Antwortmessung.",
                  "Analysieren Sie mit ANOVA, Effektdiagrammen und Interaktionsdiagrammen.",
                  "Führen Sie Bestätigungsversuche mit den ausgewählten Einstellungen durch."
                ],
                "where": "Nutzen Sie die vollständige faktorielle DOE für Ertrag im Vergleich zu Temperatur und Zeit, Softwareleistung im Vergleich zu Konfigurationseinstellungen, Wartezeit im Vergleich zu Personal- und Planungsregeln sowie Formulierungsstudien. Beispiel: Drei Faktoren auf zwei Ebenen erfordern acht Läufe plus Mittelpunkte zur Prüfung auf Krümmung.",
                "when_not": "Verwenden Sie keine vollständige Fakultät, wenn zu viele Faktoren für das Budget vorhanden sind. Bildschirm zuerst. Verwenden Sie es nicht für ein nichtlineares Optimum, ohne Antwortoberflächenpunkte hinzuzufügen. Schwer veränderbare Faktoren erfordern möglicherweise ein Split-Plot-Design.",
                "common_mistakes": [
                  "Es wird immer nur ein Faktor nach dem anderen geändert und es fehlen Wechselwirkungen.",
                  "Fehler bei der Randomisierung oder Replikation.",
                  "Die Auswahl der Faktorbereiche ist zu eng, um Effekte sichtbar zu machen."
                ],
                "quick_check": [
                  {
                    "q": "Wie viele Durchläufe sind vor der Replikation einer zweistufigen Vollfaktorie mit vier Faktoren erforderlich?",
                    "answer": "Sechzehn Läufe.",
                    "explanation": "Zwei hoch vier ergibt sechzehn."
                  },
                  {
                    "q": "Was erkennen Mittelpunkte?",
                    "answer": "Krümmung der Reaktionsfläche.",
                    "explanation": "Ein Unterschied zwischen dem mittleren Mittelwert und dem faktoriellen Mittel lässt auf eine Krümmung schließen."
                  },
                  {
                    "q": "Warum die Laufreihenfolge zufällig festlegen?",
                    "answer": "Zum Schutz vor Zeittrends und nicht gemessenen Belästigungseinflüssen.",
                    "explanation": "Die Randomisierung verhindert, dass die Reihenfolge mit Faktoren verwechselt wird."
                  }
                ],
                "recap": [
                  "Vollfaktorielle Methoden schätzen die Haupteffekte und Wechselwirkungen effizient ab.",
                  "Verwenden Sie Replikation, Mittelpunkte und Randomisierung.",
                  "Bestätigen Sie die gewählten Einstellungen mit einem Folgelauf."
                ]
              }
            },
            {
              "id": "B4.2",
              "order": 2,
              "title": "Bruchfaktorielles DOE",
              "objective": "Screenen Sie viele Faktoren mit Designs der Auflösung III, IV und V.",
              "content": {
                "why": "Vollfaktorielle wachsen exponentiell, daher erfordert das Screening vieler Faktoren einen bewussten Bruchteil. Bruchfaktorielle Berechnungen identifizieren die wenigen entscheidenden Faktoren vor der Optimierung.",
                "what": "Eine gebrochene Fakultät verwendet einen ausgewählten Bruchteil des gesamten Versuchsplans. Resolution III entwirft Alias-Haupteffekte mit Zwei-Faktor-Wechselwirkungen. Resolution IV entwirft klare Haupteffekte, aber auch Zwei-Faktor-Wechselwirkungen untereinander. Resolution V entwirft klare Haupteffekte und Zwei-Faktor-Wechselwirkungen. Aliasing bedeutet, dass Effekte nicht ohne zusätzliche Durchläufe getrennt werden können. Ein Foldover kann wichtige Effekte entaliasen, und Plackett-Burman-Designs sind für eine grobe Überprüfung nützlich.",
                "how": [
                  "Listen Sie die Faktoren und plausiblen Wechselwirkungen auf.",
                  "Wählen Sie eine Auflösung basierend auf dem Aliasing-Risiko.",
                  "Erstellen Sie den Bruchentwurf und überprüfen Sie die Alias-Struktur.",
                  "Randomisieren Sie das Experiment und führen Sie es durch.",
                  "Analysieren Sie die Auswirkungen und identifizieren Sie die wenigen entscheidenden.",
                  "Verwenden Sie Folgeläufe oder einen Foldover, um Unklarheiten aufzulösen.",
                  "Übertragen Sie vielversprechende Faktoren in ein Design mit höherer Auflösung oder Optimierung."
                ],
                "where": "Verwenden Sie Bruchrechnungen, um sechs bis zwölf Faktoren in der Prozessentwicklung, Simulationsstudien und frühen Fertigungsversuchen zu überprüfen. Beispiel: Überprüfen Sie acht Faktoren in 16 Durchläufen mit Auflösung IV und untersuchen Sie dann die wichtigen Faktoren mit einer vollständigen Faktor- oder Antwortoberfläche.",
                "when_not": "Verwenden Sie Auflösung III nicht, wenn Interaktionen wahrscheinlich und wichtig sind. Interpretieren Sie Alias-Effekte nicht so, als wären sie unabhängig. Screening-Designs sind keine Optimierungsdesigns.",
                "common_mistakes": [
                  "Die Alias-Struktur wird ignoriert.",
                  "Für das Risiko eine zu niedrige Auflösung wählen.",
                  "Stoppen nach dem Screening ohne Bestätigung."
                ],
                "quick_check": [
                  {
                    "q": "Was bedeutet Beschluss IV?",
                    "answer": "Die Haupteffekte sind klar, aber die Zwei-Faktor-Wechselwirkungen sind miteinander verfälscht.",
                    "explanation": "Resolution IV schützt die Haupteffekte, aber nicht alle Wechselwirkungen."
                  },
                  {
                    "q": "Was ist Aliasing?",
                    "answer": "Zwei oder mehr Effekte, die in einem Entwurf nicht separat abgeschätzt werden können.",
                    "explanation": "Der Bruchteil des Designs führt zu verwirrenden Effekten."
                  },
                  {
                    "q": "Warum ein Foldover verwenden?",
                    "answer": "Um wichtige Effekte durch Hinzufügen ergänzender Läufe zu entaliasen.",
                    "explanation": "Ein Foldover trennt verwechselte Effekte."
                  }
                ],
                "recap": [
                  "Bruchfaktorielle Analysen prüfen viele Faktoren mit weniger Durchläufen.",
                  "Auflösung und Alias-Struktur bestimmen, was interpretiert werden kann.",
                  "Folgen Sie dem Screening mit Bestätigung oder Optimierung."
                ]
              }
            },
            {
              "id": "B4.3",
              "order": 3,
              "title": "Blockierung und Randomisierung",
              "objective": "Schützen Sie Experimente vor störenden Variablen.",
              "content": {
                "why": "Störende Variablen wie Schicht, Charge, Tag oder Bediener können wie Behandlungseffekte aussehen. Randomisierung und Blockierung schützen das Experiment vor diesen versteckten Einflüssen.",
                "what": "Durch die Randomisierung wird die Laufreihenfolge zufällig zugewiesen, sodass nicht gemessene Trends nicht mit Faktoren übereinstimmen. Durch das Blockieren werden ähnliche Versuchseinheiten gruppiert, beispielsweise Läufe von einem Tag oder einer Charge. Bei einem randomisierten vollständigen Blockdesign wird jede Behandlung einmal pro Block durchgeführt. Die Analyse umfasst einen Blockterm, der Block-zu-Block-Variationen aus dem Fehler entfernt. Wenn Faktoren schwer zu ändern sind, kann ein Split-Plot-Design erforderlich sein, auch wenn es die Randomisierung einschränkt.",
                "how": [
                  "Identifizieren Sie bekannte Störvariablen und praktische Einschränkungen.",
                  "Entscheiden Sie, ob Sie eine Split-Plot-Struktur blockieren oder verwenden möchten.",
                  "Randomisieren Sie die Behandlungsreihenfolge innerhalb jedes Blocks.",
                  "Führen Sie das Experiment durch und zeichnen Sie die Blockmitgliedschaft auf.",
                  "Blöcke in das statistische Modell einbeziehen.",
                  "Überprüfen Sie die Residuen und bestätigen Sie, dass sich die Blöcke wie erwartet verhalten haben.",
                  "Interpretieren Sie Behandlungseffekte nach Berücksichtigung von Blockaden."
                ],
                "where": "Nutzen Sie die Blockierung für mehrere Schichten, Maschinen, Chargen, Tabletts, Bediener, Tage oder Standorte. Beispiel: Führen Sie acht Behandlungen über zwei Tage durch. Blockieren Sie nach Tag, randomisieren Sie die acht Behandlungen innerhalb jedes Tages und beziehen Sie den Tag in das Modell ein.",
                "when_not": "Blockieren Sie nicht eine Variable, die mit einem Faktor verwechselt wird. Erstellen Sie nicht so viele Blöcke, dass die Fehlerfreiheitsgrade zu klein werden. Analysieren Sie ein eingeschränktes Design nicht so, als wäre es vollständig randomisiert.",
                "common_mistakes": [
                  "Überspringen der Randomisierung, da die Ausführungsreihenfolge praktisch erscheint.",
                  "Bekannte Blöcke werden bei der Analyse ignoriert.",
                  "Verwechslung einer Blockvariablen mit einem Behandlungsfaktor."
                ],
                "quick_check": [
                  {
                    "q": "Was ist der Zweck der Randomisierung?",
                    "answer": "Um zu verhindern, dass nicht gemessene Trends mit Behandlungen verwechselt werden.",
                    "explanation": "Die zufällige Reihenfolge verteilt störende Auswirkungen auf die Behandlungen."
                  },
                  {
                    "q": "Was ist ein randomisiertes vollständiges Blockdesign?",
                    "answer": "Ein Design, bei dem jede Behandlung einmal in jedem Block vorkommt.",
                    "explanation": "Blöcke sind homogene Gruppen und die Behandlungen werden innerhalb dieser Gruppen randomisiert."
                  },
                  {
                    "q": "Warum einen Blockterm in das Modell aufnehmen?",
                    "answer": "Um Block-zu-Block-Variationen aus der Fehlerschätzung zu entfernen.",
                    "explanation": "Dies verbessert die Präzision bei Behandlungsvergleichen."
                  }
                ],
                "recap": [
                  "Randomisieren, um vor unbekannten Reihenfolgeeffekten zu schützen.",
                  "Blockieren Sie bekannte Störvariablen, um die Präzision zu verbessern.",
                  "Analysieren Sie den Entwurf, den Sie tatsächlich ausgeführt haben."
                ]
              }
            },
            {
              "id": "B4.4",
              "order": 4,
              "title": "Antwortoberflächenmethoden",
              "objective": "Finden Sie optimale Einstellungen mit Zentralverbund- oder Box-Behnken-Designs.",
              "content": {
                "why": "Beim Screening werden wichtige Faktoren ermittelt, die besten Einstellungen liegen jedoch häufig auf einer gekrümmten Reaktionsoberfläche. Reaktionsflächenmethoden modellieren die Krümmung und ermitteln ein Optimum.",
                "what": "Die Antwortoberflächenmethodik passt ein Modell zweiter Ordnung mit linearen, Interaktions- und quadratischen Termen an. Zentrale Verbundkonstruktionen kombinieren Faktor- oder Bruchpunkte mit Axialpunkten und Mittelpunkten. Box-Behnken-Designs nutzen drei Ebenen und vermeiden extreme Eckkombinationen. Kontur- und Oberflächendiagramme zeigen die Form der Reaktion. Die Optimierung findet Einstellungen, die einem Ziel entsprechen oder die Reaktion unter Berücksichtigung von Einschränkungen maximieren oder minimieren.",
                "how": [
                  "Bestätigen Sie die wichtigen Faktoren aus dem Screening.",
                  "Definieren Sie die Reaktion, Einschränkungen und den akzeptablen Bereich.",
                  "Wählen Sie ein zentrales Verbund- oder Box-Behnken-Design.",
                  "Randomisieren Sie das Experiment und führen Sie es durch.",
                  "Passen Sie das quadratische Modell an und prüfen Sie, ob es passt.",
                  "Verwenden Sie Konturdiagramme und einen Optimierer, um Einstellungen auszuwählen.",
                  "Führen Sie Bestätigungsversuche durch und überprüfen Sie die Robustheit."
                ],
                "where": "Verwenden Sie Reaktionsoberflächenmethoden für Ausbeute im Vergleich zu Temperatur und Zeit, Formulierungsoptimierung, Zykluszeit im Vergleich zu Einstellungen und Leistungsoptimierung. Beispiel: Verwenden Sie nach dem Screening von Temperatur, Druck und Katalysator ein zentrales Verbunddesign, um die Kombination zu finden, die die Ausbeute maximiert.",
                "when_not": "Verwenden Sie keine Response-Surface-Methoden, bevor Sie viele Faktoren überprüft haben. Extrapolieren Sie nicht außerhalb des experimentellen Bereichs. Optimieren Sie einen Mittelwert nicht, ohne Variation und Einschränkungen zu berücksichtigen.",
                "common_mistakes": [
                  "Anpassen eines quadratischen Modells ohne genügend Designpunkte.",
                  "Extrapolation über den untersuchten Bereich hinaus.",
                  "Bestätigungsläufe werden übersprungen."
                ],
                "quick_check": [
                  {
                    "q": "Welche Begriffe unterscheiden ein Antwortoberflächenmodell von einem Modell erster Ordnung?",
                    "answer": "Quadratische Begriffe und Interaktionen, die Krümmungen erfassen.",
                    "explanation": "Terme zweiter Ordnung ermöglichen ein Optimum innerhalb des Designraums."
                  },
                  {
                    "q": "Was ist ein zentrales Verbunddesign?",
                    "answer": "Ein faktorielles oder gebrochenes Design, ergänzt durch Axial- und Mittelpunkte.",
                    "explanation": "Die hinzugefügten Punkte unterstützen die Schätzung quadratischer Terme."
                  },
                  {
                    "q": "Warum Bestätigungstests durchführen?",
                    "answer": "Um zu überprüfen, ob die vorhergesagten optimalen Einstellungen wie erwartet funktionieren.",
                    "explanation": "Modelle sind Näherungswerte und müssen in der Praxis überprüft werden."
                  }
                ],
                "recap": [
                  "Reaktionsflächenmethoden modellieren die Krümmung und optimieren Einstellungen.",
                  "Verwenden Sie zentrale Verbund- oder Box-Behnken-Designs mit ausreichend Punkten.",
                  "Bestätigen Sie die vorhergesagten Einstellungen und bleiben Sie innerhalb des untersuchten Bereichs."
                ]
              }
            },
            {
              "id": "B4.5",
              "order": 5,
              "title": "Robustes Design und Taguchi",
              "objective": "Reduzieren Sie die Geräuschempfindlichkeit mithilfe von Kontroll- und Geräuschfaktoren.",
              "content": {
                "why": "Ein Prozess, der nur unter idealen Bedingungen gut funktioniert, ist fragil. Das robuste Design findet Einstellungen, die die Leistung trotz unvermeidbarer Geräusche stabil halten.",
                "what": "Robustes Design trennt Kontrollfaktoren, die das Team festlegen kann, von Rauschfaktoren, die schwer oder teuer zu kontrollieren sind. Taguchi-Methoden verwenden orthogonale Arrays und Signal-Rausch-Verhältnisse für die Antworten „größer ist besser“, „kleiner ist besser“ oder „nominal ist am besten“. Innere und äußere Arrays kombinieren Kontroll- und Geräuschbedingungen. Die Qualitätsverlustfunktion drückt die Kosten einer Abweichung vom Ziel aus. Moderne robuste Optimierungsmodelle sowohl für Mittelwert als auch für Varianz.",
                "how": [
                  "Definieren Sie die ideale Reaktion und die Kosten einer Abweichung.",
                  "Identifizieren Sie Kontrollfaktoren und wichtige Lärmfaktoren.",
                  "Wählen Sie eine experimentelle Array- und Rauschstrategie.",
                  "Führen Sie das Experiment unter Lärmbedingungen durch.",
                  "Analysieren Sie die mittlere Reaktion und das Signal-Rausch-Verhältnis.",
                  "Wählen Sie Einstellungen mit starker Leistung und geringer Empfindlichkeit.",
                  "Bestätigen Sie die Robustheit bei realistischem Rauschen."
                ],
                "where": "Verwenden Sie ein robustes Design für Fertigungstoleranzen, Materialschwankungen, Umgebungsbedingungen, Lieferantenunterschiede und Kundennutzung. Beispiel: Wählen Sie ein Rezept, das trotz normaler Ofentemperaturschwankungen Geschmack und Textur behält.",
                "when_not": "Verwenden Sie Signal-Rausch-Verhältnisse nicht mechanisch, ohne die Reaktion zu verstehen. Ignorieren Sie Wechselwirkungen nicht und behandeln Sie Lärmfaktoren nicht als Kontrollfaktoren. Robustes Design ergänzt die Variationsreduzierung und Prozesskontrolle, ersetzt sie jedoch nicht.",
                "common_mistakes": [
                  "Optimieren Sie nur den Mittelwert und ignorieren Sie die Variation.",
                  "Verwechslung von Lärmfaktoren mit Kontrollfaktoren.",
                  "Die Leistung unter Lärm konnte nicht bestätigt werden."
                ],
                "quick_check": [
                  {
                    "q": "Was ist ein Lärmfaktor?",
                    "answer": "Eine Variable, die die Reaktion beeinflusst, aber schwer oder teuer zu kontrollieren ist.",
                    "explanation": "Robustes Design reduziert die Empfindlichkeit gegenüber solchen Faktoren."
                  },
                  {
                    "q": "Was fasst ein Signal-Rausch-Verhältnis zusammen?",
                    "answer": "Leistung im Verhältnis zur Variation für ein ausgewähltes Qualitätsmerkmal.",
                    "explanation": "Es gelten unterschiedliche Formeln für „größer ist besser“, „kleiner ist besser“ und „nominal ist am besten“."
                  },
                  {
                    "q": "Was ist das Ziel des robusten Designs?",
                    "answer": "Um eine stabile Leistung bei allen Lärmbedingungen zu erreichen.",
                    "explanation": "Die besten Einstellungen reagieren unempfindlich auf unvermeidbare Schwankungen."
                  }
                ],
                "recap": [
                  "Robustes Design reduziert die Empfindlichkeit gegenüber Lärmfaktoren.",
                  "Setzen Sie Kontroll- und Lärmfaktoren bewusst ein.",
                  "Bestätigen Sie, dass die ausgewählten Einstellungen bei realistischen Abweichungen funktionieren."
                ]
              }
            }
          ]
        },
        {
          "id": "black-5",
          "number": 5,
          "title": "Erweiterte SPC und Funktionalität",
          "duration": "2,5 Stunden",
          "summary": "Überwachen Sie komplexe Prozesse mit erweiterten Diagrammen und verarbeiten Sie Funktionen, wenn die Daten nicht normal sind oder die Durchläufe kurz sind.",
          "lessons": [
            {
              "id": "B5.1",
              "order": 1,
              "title": "Erweiterter SPC",
              "objective": "Verwenden Sie CUSUM-, EWMA- und multivariate Diagramme entsprechend.",
              "content": {
                "why": "Herkömmliche Shewhart-Diagramme erkennen große Veränderungen gut, sind jedoch bei kleinen, anhaltenden Veränderungen langsam. Erweiterte Diagramme verbessern die Empfindlichkeit für Prozesse mit geringer Fehlerquote, hoher Leistungsfähigkeit oder multivariaten Prozessen.",
                "what": "CUSUM-Diagramme akkumulieren Abweichungen von einem Ziel und erkennen kleine anhaltende Verschiebungen. EWMA-Diagramme verwenden einen gewichteten Durchschnitt, der den jüngsten Beobachtungen mehr Einfluss verleiht und auf kleine Verschiebungen abgestimmt werden kann. Multivariate Diagramme wie das T-Quadrat von Hotelling und MEWMA überwachen mehrere korrelierte Merkmale zusammen. Kontrollgrenzen basieren auf dem Basisprozess und die durchschnittliche Lauflänge beschreibt, wie schnell ein Diagramm Signale ausgibt. Diese Diagramme gehen im Allgemeinen von unabhängigen Beobachtungen aus.",
                "how": [
                  "Definieren Sie das Merkmal, das Ziel und die rationale Untergruppe.",
                  "Stellen Sie eine stabile Phase-I-Basislinie her.",
                  "Überprüfen Sie die Verteilung und Autokorrelation.",
                  "Wählen Sie ein Diagramm basierend auf Schichtgröße, Datenrate und Abmessungen aus.",
                  "Legen Sie Diagrammparameter und -grenzen fest.",
                  "Überwachen Sie Phase-II-Daten und untersuchen Sie Signale umgehend.",
                  "Aktualisieren Sie Grenzwerte nur nach einer verifizierten dauerhaften Prozessänderung."
                ],
                "where": "Nutzen Sie fortschrittliches SPC in Halbleiter-, Chemie-, Pharma-, IT-Latenz-, Callcenter- und Gesundheitsprozessen. Beispiel: Ein EWMA-Diagramm mit einer Glättungskonstante von 0,2 erkennt eine Ein-Sigma-Verschiebung schneller als ein Shewhart-Diagramm. Ein CUSUM mit Referenzwert 0,5 und Entscheidungsintervall 5 ist auf kleine Verschiebungen abgestimmt.",
                "when_not": "Wenden Sie keine Kontrollgrenzen an, bevor der Prozess stabil ist. Verwenden Sie keine Standardgrenzen für stark autokorrelierte Daten ohne Anpassung. Multivariate Diagramme erfordern eine angemessene Basislinie und eine sorgfältige Interpretation der Signale.",
                "common_mistakes": [
                  "Für kleine, anhaltende Veränderungen wird nur ein Shewhart-Diagramm verwendet.",
                  "Autokorrelation wird ignoriert.",
                  "Spezifikationsgrenzen als Kontrollgrenzen behandeln."
                ],
                "quick_check": [
                  {
                    "q": "Welches Diagramm akkumuliert Abweichungen vom Ziel, um kleine Verschiebungen zu erkennen?",
                    "answer": "Das CUSUM-Diagramm.",
                    "explanation": "Es summiert Abweichungen über die Zeit und signalisiert anhaltende Abweichungen."
                  },
                  {
                    "q": "Was steuert die EWMA-Glättungskonstante?",
                    "answer": "Welches Gewicht erhalten aktuelle Beobachtungen?",
                    "explanation": "Kleinere Werte betonen den Verlauf und erkennen kleinere Verschiebungen."
                  },
                  {
                    "q": "Wann sind multivariate Diagramme sinnvoll?",
                    "answer": "Wenn mehrere korrelierte Merkmale gemeinsam überwacht werden müssen.",
                    "explanation": "Sie erkennen kombinierte Verschiebungen, die in einzelnen Diagrammen möglicherweise übersehen werden."
                  }
                ],
                "recap": [
                  "Erweiterte Diagramme zielen auf kleine Verschiebungen, Abweichungen oder mehrere Merkmale ab.",
                  "Stellen Sie eine stabile Basis her und überprüfen Sie die Unabhängigkeit.",
                  "Untersuchen Sie Signale und aktualisieren Sie Grenzwerte erst nach einer tatsächlichen Änderung."
                ]
              }
            },
            {
              "id": "B5.2",
              "order": 2,
              "title": "Nicht normale Fähigkeit",
              "objective": "Transformieren Sie Daten oder passen Sie eine Verteilung an, bevor Sie die Leistungsfähigkeit berechnen.",
              "content": {
                "why": "Cp und Cpk gehen von einem stabilen, normalen Prozess aus. Die Anwendung auf verzerrte, begrenzte oder Zähldaten kann Fehlerraten und Verbesserungsprioritäten stark verfälschen.",
                "what": "Die nicht normale Fähigkeit beginnt mit einer Stabilitätsprüfung und einer Verteilungsprüfung. Zu den Optionen gehören die Transformation der Daten, etwa mit einer Box-Cox-, Log- oder Quadratwurzeltransformation, oder die Anpassung einer geeigneten Verteilung, etwa Lognormal, Weibull oder Gamma. Die Leistungsfähigkeit wird dann anhand des angepassten Modells berechnet und als erwartete, außerhalb der Spezifikation liegende Teile pro Million ausgedrückt. Melden Sie das Modell und validieren Sie es, da eine schlechte Anpassung zu irreführenden Fähigkeiten führt.",
                "how": [
                  "Bestätigen Sie, dass der Prozess stabil ist.",
                  "Stellen Sie die Daten grafisch dar und testen Sie die Normalität.",
                  "Wählen Sie basierend auf den Daten und dem Prozess eine Transformation oder angepasste Verteilung.",
                  "Passgenauigkeit prüfen.",
                  "Berechnen Sie die erwartete Rate und Fähigkeit außerhalb der Spezifikation.",
                  "Vergleichen Sie die Ergebnisse mit der Spezifikation und überwachen Sie sie im Laufe der Zeit.",
                  "Übersetzen Sie das Ergebnis zur Kommunikation zurück in die Originaleinheiten."
                ],
                "where": "Verwenden Sie nicht normale Funktionen für Zykluszeiten, Wartezeiten, Konzentrationen, Zuverlässigkeitslebensdauer, Fehleranzahl und Partikelanzahl. Beispiel: Die Wartezeit des Patienten ist stark nach rechts verzerrt. Passen Sie eine logarithmische Normalverteilung an und geben Sie anstelle eines normalen Cpk den erwarteten Prozentsatz über dem Service-Level-Ziel an.",
                "when_not": "Berechnen Sie die Leistungsfähigkeit nicht für einen instabilen Prozess. Erzwingen Sie kein normales Modell und verwenden Sie keine Transformation, ohne die Anpassung zu überprüfen. Kontrollgrenzen nicht mit Spezifikationsgrenzen verwechseln.",
                "common_mistakes": [
                  "Meldung normaler Cpk für verzerrte Daten.",
                  "Daten transformieren, ohne das Modell zu validieren.",
                  "Ignorieren Sie die Stabilität, bevor Sie die Leistungsfähigkeit berechnen."
                ],
                "quick_check": [
                  {
                    "q": "Warum kann der normale Cpk bei verzerrten Daten irreführend sein?",
                    "answer": "Es schätzt Tail-Wahrscheinlichkeiten mithilfe einer symmetrischen Verteilung.",
                    "explanation": "Der tatsächliche Schwanz kann viel größer oder kleiner sein als die normale Schätzung."
                  },
                  {
                    "q": "Was sollten Sie vor einer Fähigkeitsberechnung prüfen?",
                    "answer": "Prozessstabilität und Verteilungsfit.",
                    "explanation": "Fähigkeit ist nur für einen stabilen, angemessen modellierten Prozess von Bedeutung."
                  },
                  {
                    "q": "Was drückt ein erwarteter PPM-Wert aus?",
                    "answer": "Die vorhergesagte Anzahl von außerhalb der Spezifikation liegenden Einheiten pro Million.",
                    "explanation": "Es übersetzt die Fähigkeit in eine Fehlerquote."
                  }
                ],
                "recap": [
                  "Leistungsfähigkeit erfordert Stabilität und eine geeignete Verteilung.",
                  "Transformieren oder passen Sie ein nicht normales Modell an und validieren Sie es.",
                  "Berichten Sie in praktischer Hinsicht über erwartete Abweichungen von der Spezifikation."
                ]
              }
            },
            {
              "id": "B5.3",
              "order": 3,
              "title": "Kurzfristige SPC",
              "objective": "Überwachen Sie kleine Chargen mit Standard- oder Zieldiagrammen.",
              "content": {
                "why": "Herkömmliche Regelkarten benötigen eine umfangreiche Basislinie, die bei kleinen Auflagen und bei der Produktion mit hohem Mix nicht gegeben ist. Kurzzeit-SPC ermöglicht die Überwachung mit begrenzten Daten.",
                "what": "Kurzfristige SPC standardisiert Beobachtungen in Bezug auf das Ziel und die kurzfristige Variation jedes Teils oder Produkts. Ein standardisiertes Diagramm zeichnet Z-ähnliche Werte auf, sodass verschiedene Teile ein Diagramm gemeinsam nutzen können. Ziel- oder Sollabweichungsdiagramme stellen die Abweichung vom Ziel dar. Gruppendiagramme fassen ähnliche Teile zu einer Familie zusammen. Grenzwerte können auf kurzen Basislinien oder exakten Methoden für kleine Stichproben basieren. Der Ansatz darf keine unterschiedlichen Prozesse bündeln.",
                "how": [
                  "Definieren Sie Teilefamilien mit ähnlichen Prozessen und Variationen.",
                  "Legen Sie für jeden Teil ein Ziel und eine kurze Grundlinie fest.",
                  "Standardisieren Sie Beobachtungen mithilfe des Teilmittelwerts und der Standardabweichung.",
                  "Wählen Sie ein Standard-, Ziel- oder Gruppendiagramm.",
                  "Legen Sie Grenzwerte fest und überwachen Sie die normierten Werte.",
                  "Untersuchen Sie Signale und trennen Sie Setup-Änderungen von Prozessverschiebungen.",
                  "Aktualisieren Sie die Baselines, wenn sich der Prozess dauerhaft ändert."
                ],
                "where": "Nutzen Sie Kleinserien-SPC in Lohnfertigungsbetrieben, in der Produktion von High-Mix-Kleinserien, bei kundenspezifischen Produkten, in pharmazeutischen Chargenbetrieben und bei Prozessen für Serviceanfragen. Beispiel: Fünf benutzerdefinierte Teile mit jeweils zehn Durchläufen können innerhalb eines Teils standardisiert und in einem Diagramm dargestellt werden.",
                "when_not": "Bündeln Sie keine Produkte mit grundlegend unterschiedlichen Prozessen. Verwenden Sie keine Standard-X-Balken- und R-Karten mit zu wenigen Untergruppen. Kalibrieren Sie die Grenzwerte nicht neu, nur um eine Verschiebung zu verbergen.",
                "common_mistakes": [
                  "Verwendung einer unzureichenden Basislinie.",
                  "Ungleiche Produkte zu einer Gruppe zusammenfassen.",
                  "Spezifikationsgrenzen als Kontrollgrenzen behandeln."
                ],
                "quick_check": [
                  {
                    "q": "Was ist die Schlüsselidee hinter einem standardisierten kurzfristigen Diagramm?",
                    "answer": "Transformieren Sie jede Beobachtung relativ zu ihrem teilespezifischen Ziel und ihrer Variation.",
                    "explanation": "Standardisierte Werte können über kurze Läufe hinweg grafisch dargestellt werden."
                  },
                  {
                    "q": "Was ist ein Zieldiagramm?",
                    "answer": "Ein Diagramm der Abweichungen von einem nominalen Ziel.",
                    "explanation": "Es konzentriert sich darauf, wie weit jedes Ergebnis vom beabsichtigten Wert entfernt ist."
                  },
                  {
                    "q": "Warum müssen Teilfamilien ähnlich sein?",
                    "answer": "Durch die Bündelung unterschiedlicher Prozesse entstehen irreführende Variationen und Grenzen.",
                    "explanation": "Das Diagramm geht von einer gemeinsamen zugrunde liegenden Variationsstruktur aus."
                  }
                ],
                "recap": [
                  "Kurzfristige SPC standardisiert oder zielt auf Daten ab, um begrenzte Basislinien zu bewältigen.",
                  "Gruppieren Sie nur ähnliche Produkte und Prozesse.",
                  "Unterscheiden Sie Setup-Änderungen von echten Prozessänderungen."
                ]
              }
            }
          ]
        },
        {
          "id": "black-6",
          "number": 6,
          "title": "Lean und DFSS",
          "duration": "4 Stunden",
          "summary": "Integrieren Sie Lean-Flow-Tools mit Six Sigma und entwerfen Sie neue Prozesse gleich beim ersten Mal mit DMADV, QFD und Kano.",
          "lessons": [
            {
              "id": "B6.1",
              "order": 1,
              "title": "Lean Six Sigma-Integration",
              "objective": "Kombinieren Sie Verschwendungsreduzierung und Variantenreduzierung in einer Strategie.",
              "content": {
                "why": "Lean und Six Sigma lösen verschiedene Teile desselben Problems. Lean beseitigt Verschwendung und verbessert den Ablauf, während Six Sigma Abweichungen und Fehler reduziert. Ihre Integration vermeidet Geschwindigkeit ohne Qualität oder Statistiken ohne Fluss.",
                "what": "Lean konzentriert sich auf den Wert, den Wertstrom, den Fluss, die Anziehungskraft und die Perfektion. Es greift die acht Verschwendungen an: Transport, Inventar, Bewegung, Warten, Überproduktion, Überverarbeitung, Mängel und ungenutzte Talente. Six Sigma verwendet DMAIC und statistische Methoden, um Variationen zu reduzieren. Eine integrierte Strategie nutzt Lean, um Verschwendung aufzudecken und den Fluss zu stabilisieren, dann Six Sigma, um hartnäckige Abweichungen zu lösen, und gilt sowohl für die Projektauswahl als auch für die Aufrechterhaltung.",
                "how": [
                  "Ordnen Sie den Wertstrom zu und identifizieren Sie Verschwendung und Abweichungen.",
                  "Quantifizieren Sie die geschäftlichen Auswirkungen beider.",
                  "Priorisieren Sie Projekte, die den Ablauf und die Qualität verbessern.",
                  "Wenden Sie Lean-Tools für offensichtliche Verschwendung und Six Sigma für komplexe Variationen an.",
                  "Messen Sie gemeinsam Durchlaufzeit, Fehlerrate und Leistungsfähigkeit.",
                  "Beziehen Sie die Menschen mit ein, die die Arbeit erledigen.",
                  "Standardisieren und überwachen Sie den verbesserten Prozess."
                ],
                "where": "Nutzen Sie integriertes Lean Six Sigma für den Patientenfluss im Gesundheitswesen, die Fertigungsvorlaufzeit, Bankgenehmigungen, die Auftragsabwicklung und den Servicebetrieb. Beispiel: Eine Notaufnahme nutzt die Wertstromanalyse, um Wartezeiten zu verkürzen, und SPC, um Schwankungen in der Labordurchlaufzeit zu reduzieren.",
                "when_not": "Verwenden Sie keine komplexen Statistiken, um offensichtliche Verschwendung zu beheben. Führen Sie keine Lean-Ereignisse aus, die Fehlervariationen ignorieren. Setzen Sie keine Tools ein, ohne dass ein klar definiertes Problem und ein klar definierter Kundenbedarf vorliegen.",
                "common_mistakes": [
                  "Lean und Six Sigma als konkurrierende Programme behandeln.",
                  "Optimierung lokaler Schritte statt des gesamten Ablaufs.",
                  "Laufveranstaltungen ohne Nachhaltigkeit oder Messung."
                ],
                "quick_check": [
                  {
                    "q": "Was ist der Hauptschwerpunkt von Lean?",
                    "answer": "Abfall entfernen und den Fluss verbessern.",
                    "explanation": "Lean erhöht die Geschwindigkeit und reduziert nicht wertschöpfende Arbeit."
                  },
                  {
                    "q": "Was ist der Hauptschwerpunkt von Six Sigma?",
                    "answer": "Reduzierung von Abweichungen und Fehlern mithilfe von Daten und Statistiken.",
                    "explanation": "Six Sigma verbessert Konsistenz und Leistungsfähigkeit."
                  },
                  {
                    "q": "Warum Lean und Six Sigma integrieren?",
                    "answer": "Geschwindigkeit und Qualität verbessern, ohne das eine gegen das andere einzutauschen.",
                    "explanation": "Der Fluss macht Variationen sichtbar, und die Variationsreduzierung hält den Fluss aufrecht."
                  }
                ],
                "recap": [
                  "Lean verbessert den Fluss; Six Sigma verbessert die Konsistenz.",
                  "Integrieren Sie die Tools rund um den Kunden und den Wertstrom.",
                  "Messen Sie sowohl die Durchlaufzeit als auch die Qualität und sichern Sie sich dann den Gewinn."
                ]
              }
            },
            {
              "id": "B6.2",
              "order": 2,
              "title": "Wertstrom-Mapping",
              "objective": "Bilden Sie den Material- und Informationsfluss ab und berechnen Sie die Durchlaufzeit.",
              "content": {
                "why": "Lokale Verbesserungen können scheitern, wenn der gesamte Prozess langsam bleibt. Die Wertstromzuordnung zeigt den End-to-End-Prozess, einschließlich Wartezeiten und Informationsverzögerungen, die bei der Analyse auf Schrittebene übersehen werden.",
                "what": "Eine Wertstromkarte zeigt den Kunden, Lieferanten, Prozessboxen, den Bestand, den Informationsfluss und eine Durchlaufzeitleiter an. Es trennt wertschöpfende von nicht wertschöpfender Zeit. Die Taktzeit bestimmt das Tempo der Kundennachfrage. Zu den Prozessmetriken gehören Zykluszeit, Betriebszeit, Fertigstellungsgrad und Genauigkeit sowie Chargengröße. Die Karte des aktuellen Zustands macht Verschwendung sichtbar, und die Karte des zukünftigen Zustands definiert einen besseren Fluss mit Eigentümern und Aktionen.",
                "how": [
                  "Wählen Sie eine Produkt- oder Servicefamilie mit ähnlichem Ablauf aus.",
                  "Beobachten Sie den tatsächlichen Prozess und dokumentieren Sie den Informations- und Materialfluss.",
                  "Zeichnen Sie die Ist-Zustandskarte mit Inventar und Wartezeiten.",
                  "Sammeln Sie Zykluszeit-, Betriebszeit-, Qualitäts- und Nachfragedaten.",
                  "Berechnen Sie Durchlaufzeit, Taktzeit und Wertschöpfungsquote.",
                  "Entwerfen Sie den zukünftigen Zustand und markieren Sie Kaizen-Möglichkeiten.",
                  "Erstellen Sie einen Umsetzungsplan mit Eigentümern und Terminen."
                ],
                "where": "Nutzen Sie die Wertstromanalyse in der Fertigung, im Gesundheitswesen, bei der Kreditbearbeitung, bei der Softwarebereitstellung und bei der Auftragsabwicklung. Beispiel: Eine Karte mit dem aktuellen Stand zeigt eine Vorlaufzeit von 12 Tagen, aber nur 45 Minuten wertschöpfende Arbeit, was das Warten als die dominierende Chance erkennen lässt.",
                "when_not": "Ordnen Sie nicht jede Produktfamilie auf einmal zu. Erstellen Sie keine Karte, die nie verwendet wird. Ignorieren Sie nicht den Informationsfluss und gehen Sie nicht aus einem Konferenzraum heraus, ohne die Arbeit zu beobachten.",
                "common_mistakes": [
                  "Kartierung ohne Gemba-Beobachtung oder reale Daten.",
                  "Prozesszeit mit Durchlaufzeit verwechseln.",
                  "Erstellen einer Zukunftszustandskarte ohne Eigentümer oder Plan."
                ],
                "quick_check": [
                  {
                    "q": "Was beinhaltet die Vorlaufzeit?",
                    "answer": "Die gesamte verstrichene Zeit von der Kundenanfrage bis zur Lieferung, inklusive Wartezeit.",
                    "explanation": "Sie ist umfassender als die Zeit, in der die Arbeit aktiv verrichtet wird."
                  },
                  {
                    "q": "Was ist Taktzeit?",
                    "answer": "Verfügbare Arbeitszeit dividiert durch die Kundennachfrage.",
                    "explanation": "Es gibt das Tempo vor, das erforderlich ist, um die Nachfrage zu befriedigen."
                  },
                  {
                    "q": "Warum Informationsfluss und Materialfluss abbilden?",
                    "answer": "Verzögerungen und Fehler bei der Bereitstellung von Informationen führen häufig zu Wartezeiten und Nacharbeiten.",
                    "explanation": "Eine vollständige Karte zeigt, wie die Arbeit ausgelöst und koordiniert wird."
                  }
                ],
                "recap": [
                  "Wertstromkarten zeigen den End-to-End-Fluss und das Warten.",
                  "Verwenden Sie reale Daten und Gemba-Beobachtungen.",
                  "Verwandeln Sie die zukünftige Zustandskarte in eigene Aktionen."
                ]
              }
            },
            {
              "id": "B6.3",
              "order": 3,
              "title": "TPM",
              "objective": "Verbessern Sie die Gerätezuverlässigkeit durch autonome und geplante Wartung.",
              "content": {
                "why": "Geräteausfälle stören den Fluss, die Qualität und die Sicherheit und erzwingen kostspielige Puffer. Total Productive Maintenance integriert Zuverlässigkeit in die tägliche Arbeit, anstatt auf Ausfälle zu warten.",
                "what": "Ziel von TPM ist die Maximierung der Geräteeffektivität durch autonome Wartung, geplante und vorbeugende Wartung, vorausschauende Techniken, Qualitätswartung, Schulung, Sicherheit und frühzeitiges Gerätemanagement. Die Gesamtanlageneffektivität kombiniert Verfügbarkeit, Leistung und Qualität. Die sechs großen Verluste sind Ausfälle, Einrichtung und Einstellung, Leerlauf und kleinere Stopps, reduzierte Geschwindigkeit, Defekte und Nacharbeiten sowie Anlaufverluste. Die Bediener führen grundlegende Wartungsarbeiten wie Reinigung, Inspektion, Schmierung und Festziehen durch.",
                "how": [
                  "Messen Sie die Basis-OEE und klassifizieren Sie Verluste.",
                  "Stellen Sie den Grundzustand der Ausrüstung wieder her und beheben Sie größere Mängel.",
                  "Schulen Sie Betreiber für die autonome Wartung.",
                  "Erstellen Sie einen geplanten und vorausschauenden Wartungsplan.",
                  "Verbessern Sie die Einrichtungs-, Ersatzteil- und Wartungsplanung.",
                  "Verfolgen Sie OEE und Verluste mit dem Team.",
                  "Standardisieren und prüfen Sie das Wartungssystem."
                ],
                "where": "Nutzen Sie TPM in der Fertigung, in der Krankenhausausrüstung, im Flottenbetrieb, in der IT-Infrastruktur und in Einrichtungen. Beispiel: OEE beträgt 80 % Verfügbarkeit mal 85 % Leistung mal 95 % Qualität, also etwa 64,6 %. Die Schadensanalyse zeigt, ob Ausfälle, Geschwindigkeit oder Mängel Vorrang haben.",
                "when_not": "Machen Sie TPM nicht zu einer Reinigungskampagne und geben Sie den Betreibern nicht die Schuld für Geräteausfälle. Starten Sie es nicht ohne Führungszeit, Schulung und Wartungsunterstützung. Verwenden Sie OEE nicht als eigenständige Scorecard ohne Kontext.",
                "common_mistakes": [
                  "Einmal putzen statt Grundzustand erhalten.",
                  "OEE verfolgen, ohne die sechs Verluste zu analysieren.",
                  "Betreiben Sie die Ausrüstung bis zum Ausfall, um Wartungsausfallzeiten zu vermeiden."
                ],
                "quick_check": [
                  {
                    "q": "Aus welchen drei Komponenten besteht OEE?",
                    "answer": "Verfügbarkeit, Leistung und Qualität.",
                    "explanation": "Ihre Multiplikation zeigt die effektive Geräteleistung."
                  },
                  {
                    "q": "Was ist autonome Wartung?",
                    "answer": "Der Betreiber übernimmt die Grundreinigung, Inspektion und kleinere Wartungsarbeiten.",
                    "explanation": "Betreiber erkennen und verhindern Verschlechterungen frühzeitig."
                  },
                  {
                    "q": "Was ist ein Hauptziel von TPM?",
                    "answer": "Zuverlässige Ausrüstung mit minimalen ungeplanten Ausfallzeiten.",
                    "explanation": "TPM verlagert den Aufwand von reaktiver Reparatur auf Prävention."
                  }
                ],
                "recap": [
                  "TPM verbessert die Zuverlässigkeit und Effektivität der Ausrüstung.",
                  "Nutzen Sie OEE- und Verlustanalysen, um Verbesserungen anzustreben.",
                  "Kombinieren Sie die Betreuung des Bedieners mit geplanter und vorausschauender Wartung."
                ]
              }
            },
            {
              "id": "B6.4",
              "order": 4,
              "title": "SMED",
              "objective": "Reduzieren Sie die Umrüstzeit, indem Sie interne und externe Arbeit trennen.",
              "content": {
                "why": "Lange Umrüstungen erfordern große Chargen, Überbestände und Kapazitätsverluste. SMED verkürzt die Umrüstzeit, sodass der Prozess flexibel auf die Nachfrage reagieren kann.",
                "what": "Der einminütige Werkzeugwechsel trennt interne Umrüstarbeiten, die ein Anhalten der Maschine erfordern, von externen Arbeiten, die bei laufender Maschine durchgeführt werden können. Die Methode wandelt interne Arbeit in externe um, rationalisiert beide und standardisiert das neue Verfahren. Die Umrüstzeit wird vom letzten Gutteil vor dem Wechsel bis zum ersten Gutteil danach gemessen. Ideal sind einstellige Minutenzahlen, das praktische Ziel hängt jedoch vom Risiko und Volumen ab.",
                "how": [
                  "Beobachten und filmen Sie die aktuelle Umstellung.",
                  "Trennen Sie interne und externe Aktivitäten.",
                  "Planen Sie jede Aktivität zeitlich und identifizieren Sie Verschwendung.",
                  "Wandeln Sie so viel interne Arbeit wie möglich in externe um.",
                  "Optimieren Sie Klemmen, Werkzeuge, Bereitstellung und parallele Arbeit.",
                  "Standardisieren Sie Rollen und verwenden Sie eine Checkliste.",
                  "Pilotieren, messen und aufrechterhalten Sie die neue Umstellung."
                ],
                "where": "Nutzen Sie SMED in der Fertigung, beim Umschlag im Operationssaal, bei der Einrichtung von Laboren, bei der Softwarebereitstellung, beim Drucken und bei der Servicevorbereitung. Beispiel: Reduzieren Sie einen 90-minütigen Wechsel auf 25 Minuten, indem Sie Werkzeuge extern vorrüsten und Schrauben durch Schnellspanner ersetzen.",
                "when_not": "Entfernen Sie Sicherheits- oder Qualitätsprüfungen nicht, um Zeit zu sparen. Gehen Sie nicht davon aus, dass jeder aktuelle Schritt notwendig ist. Betrachten Sie SMED nicht als einmaliges Ereignis ohne Standardarbeit und Nachhaltigkeit.",
                "common_mistakes": [
                  "Beginnen Sie mit neuen Tools, anstatt interne und externe Arbeit zu trennen.",
                  "Es wird nur die Maschinenstillstandszeit gemessen, nicht das erste Gutteil zum ersten Gutteil.",
                  "Es gelingt nicht, die neue Methode zu standardisieren und zu trainieren."
                ],
                "quick_check": [
                  {
                    "q": "Was sind interne Umstellungsarbeiten?",
                    "answer": "Arbeiten, die nur bei stehender Maschine durchgeführt werden können.",
                    "explanation": "Ziel ist es, interne Arbeit nach Möglichkeit in externe umzuwandeln."
                  },
                  {
                    "q": "Wie wird die Umrüstzeit gemessen?",
                    "answer": "Vom letzten guten Teil vor dem Wechsel bis zum ersten guten Teil danach.",
                    "explanation": "Dadurch wird die gesamte verlorene Produktionszeit erfasst."
                  },
                  {
                    "q": "Was bedeutet das Ein-Minuten-Ziel?",
                    "answer": "Eine Umstellung gemessen im einstelligen Minutenbereich.",
                    "explanation": "Es handelt sich um ein ehrgeiziges Ziel, nicht um eine universelle Anforderung."
                  }
                ],
                "recap": [
                  "SMED trennt interne und externe Umstellungsarbeiten.",
                  "Wandeln Sie interne Arbeit in externe um und rationalisieren Sie den Rest.",
                  "Standardisieren, messen und aufrechterhalten Sie die Verbesserung."
                ]
              }
            },
            {
              "id": "B6.5",
              "order": 5,
              "title": "Standardwerk",
              "objective": "Dokumentieren Sie die aktuell beste Methode mit Takt, Reihenfolge und Inventar.",
              "content": {
                "why": "Ohne einen Standard führt jede Person und jede Schicht ihre Arbeit anders aus. Standardarbeit reduziert Abweichungen, unterstützt Training und Sicherheit und schafft eine Grundlage für Verbesserungen.",
                "what": "Standardarbeit dokumentiert die derzeit beste Methode, einschließlich Taktzeit, Arbeitsreihenfolge, Standardbestand, Zykluszeit sowie wichtige Qualitäts- und Sicherheitspunkte. Es entsteht gemeinsam mit den Menschen, die die Arbeit erledigen, und ist deren Eigentum. Es handelt sich nicht um eine dauerhafte Regel; Dies ist die derzeit beste Methode und muss aktualisiert werden, wenn sich der Prozess ändert. Zu den gängigen Formaten gehören Standard-Arbeitskombinationstabellen, Arbeitsaufschlüsselungsblätter und visuelle Arbeitsanweisungen.",
                "how": [
                  "Beobachten Sie die tatsächliche Arbeit und ermitteln Sie die Kundenanforderungen.",
                  "Berechnen Sie die Taktzeit aus Bedarf und verfügbarer Zeit.",
                  "Teilen Sie die Arbeit in Schritte auf und messen Sie jeden Schritt.",
                  "Entwerfen Sie eine ausgewogene Abfolge mit Standardinventar.",
                  "Dokumentieren Sie Qualitäts-, Sicherheits- und Ausrüstungspunkte.",
                  "Schulung der Bediener und Überprüfung des Verständnisses.",
                  "Prüfen, verbessern und aktualisieren Sie den Standard."
                ],
                "where": "Nutzen Sie Standardarbeiten in den Bereichen Montage, Gesundheitsprotokolle, Labormethoden, Serviceskripte, Logistik und Verwaltungsprozesse. Beispiel: Die Taktzeit beträgt 60 Sekunden und die geplante Zykluszeit beträgt 55 Sekunden, sodass Spielraum für Variation und Erholung bleibt.",
                "when_not": "Schreiben Sie keine Standards ohne die Operatoren und verwenden Sie sie nicht für das Mikromanagement. Standardisieren Sie einen instabilen Prozess nicht, bevor Sie größere Abweichungen reduziert haben. Wissensarbeit erfordert möglicherweise flexible Standards, die Ergebnisse und Einschränkungen definieren.",
                "common_mistakes": [
                  "Dokumente erstellen, die im Regal stehen.",
                  "Versäumnis, den Standard zu schulen oder zu prüfen.",
                  "Aktualisieren Sie den Standard niemals nach einer Verbesserung."
                ],
                "quick_check": [
                  {
                    "q": "Was ist Taktzeit?",
                    "answer": "Verfügbare Arbeitszeit dividiert durch die Kundennachfrage.",
                    "explanation": "Es legt das Tempo fest, das der Prozess einhalten muss."
                  },
                  {
                    "q": "Wer soll bei der Erstellung von Standardwerken helfen?",
                    "answer": "Die Menschen, die die Arbeit ausführen.",
                    "explanation": "Die Einbindung des Bedieners verbessert die Genauigkeit und Eigenverantwortung."
                  },
                  {
                    "q": "Warum ist Standardarbeit eine Grundlage für Verbesserungen?",
                    "answer": "Sie können einen Prozess, der nicht standardisiert ist, nicht zuverlässig verbessern.",
                    "explanation": "Eine stabile Methode macht die Wirkung von Veränderungen sichtbar."
                  }
                ],
                "recap": [
                  "Das Standardwerk erfasst die aktuell beste Methode.",
                  "Berücksichtigen Sie Takt, Reihenfolge, Inventar und Schlüsselpunkte.",
                  "Beziehen Sie Bediener ein und aktualisieren Sie den Standard, wenn sich der Prozess verbessert."
                ]
              }
            },
            {
              "id": "B6.6",
              "order": 6,
              "title": "5S und visuelles Management",
              "objective": "Schaffen Sie einen selbsterklärenden, selbstreinigenden Arbeitsplatz.",
              "content": {
                "why": "Unordnung, fehlende Werkzeuge und unklarer Status führen zu Verzögerungen, Mängeln und Sicherheitsrisiken. Ein visueller Arbeitsplatz macht normale und abnormale Zustände auf einen Blick erkennbar.",
                "what": "Die 5S-Methode verwendet Sortieren, Ordnen, Leuchten, Standardisieren und Aufrechterhalten. Sortieren entfernt, was nicht benötigt wird. Durch die geordnete Anordnung hat alles seinen klaren Platz. Shine reinigt und inspiziert. Standardisieren schafft visuelle Regeln und Verantwortlichkeiten. Sustain baut Gewohnheiten und Audits auf. Das visuelle Management nutzt Etiketten, Schattentafeln, Bodenmarkierungen, Andons, Kanban und Dashboards, damit sich der Arbeitsplatz von selbst erklärt.",
                "how": [
                  "Zeichnen Sie den Bereich mit Fotos und einem Abfallspaziergang auf.",
                  "Sortieren Sie Elemente mit roten Tags und einer Dispositionsregel.",
                  "Legen Sie Standorte basierend auf der Häufigkeit der Nutzung und der Ergonomie fest.",
                  "Reinigen und inspizieren Sie Geräte und Räume.",
                  "Schaffen Sie visuelle Standards und Eigenverantwortung.",
                  "Führen Sie regelmäßig Audits durch und coachen Sie umgehend.",
                  "Erweitern Sie die Aktivitäten erst dann auf verwandte Bereiche, wenn die Aufrechterhaltung funktioniert."
                ],
                "where": "Nutzen Sie 5S und visuelles Management in Werkstätten, Laboren, Büros, Versorgungsräumen von Krankenhäusern, Lagern und digitalen Arbeitsbereichen. Beispiel: Ein Shadowboard für Werkzeuge verkürzt die Suchzeit und macht ein fehlendes Werkzeug sofort sichtbar.",
                "when_not": "Führen Sie 5S nicht als Reinigungswettbewerb durch. Fügen Sie kein visuelles Durcheinander hinzu, das die wichtigen Signale verdeckt. Starten Sie nicht ohne Eigenverantwortung und einen Nachhaltigkeitsplan.",
                "common_mistakes": [
                  "Keine Nachhaltigkeit nach der ersten Reinigung.",
                  "Beschriftungen und Standorte ohne logisches System.",
                  "Audits nutzen, um Schuldzuweisungen statt Verbesserungen vorzunehmen."
                ],
                "quick_check": [
                  {
                    "q": "Was sind die fünf S?",
                    "answer": "Sortieren, ordnen, glänzen, standardisieren und aufrechterhalten.",
                    "explanation": "Sie schaffen und pflegen einen organisierten Arbeitsplatz."
                  },
                  {
                    "q": "Was ist visuelles Management?",
                    "answer": "Verwendung visueller Signale, um Status und Auffälligkeiten deutlich zu machen.",
                    "explanation": "Beispiele hierfür sind Andons, Bodenmarkierungen und Schattenbretter."
                  },
                  {
                    "q": "Warum ist Sustain das härteste S?",
                    "answer": "Es erfordert Gewohnheiten, Eigenverantwortung und regelmäßige Nachsorge.",
                    "explanation": "Die anfängliche Bereinigung lässt ohne Managementsystem nach."
                  }
                ],
                "recap": [
                  "5S schafft einen organisierten, selbsterklärenden Arbeitsplatz.",
                  "Visuelles Management macht abnormale Zustände sichtbar.",
                  "Nachhaltigkeit erfordert Eigenverantwortung, Audits und Coaching."
                ]
              }
            },
            {
              "id": "B6.7",
              "order": 7,
              "title": "Design für Six Sigma (DMADV)",
              "objective": "Definieren, messen, analysieren, entwerfen und überprüfen Sie einen neuen Prozess oder ein neues Produkt.",
              "content": {
                "why": "Die Reparatur eines schlecht konzipierten Prozesses kann teuer und langsam sein. Design for Six Sigma baut die Fähigkeit von Anfang an in ein neues Produkt, eine neue Dienstleistung oder einen neuen Prozess ein.",
                "what": "DFSS verwendet DMADV: Definieren, Messen, Analysieren, Entwerfen und Verifizieren. Define klärt den Business Case und die Kundenanforderungen. Measure übersetzt die Stimme des Kunden in qualitätskritische Anforderungen. Analyze entwickelt und bewertet Designkonzepte. Design optimiert das gewählte Konzept und bewertet das Risiko. Verify weist die Leistungsfähigkeit durch Pilotversuche, Zuverlässigkeitstests und Validierung nach. Zu den Tools gehören QFD, Kano, FMEA, DOE, Monte-Carlo-Simulation und Toleranzdesign.",
                "how": [
                  "Definieren Sie das Projekt, die Kunden und den Geschäftsfall.",
                  "Messen Sie CTQs und übersetzen Sie Kundenbedürfnisse.",
                  "Analysieren Sie Konzepte anhand von Anforderungen und Risiken.",
                  "Entwerfen Sie das Produkt oder den Prozess und optimieren Sie die Leistung.",
                  "Sagen Sie Leistungsfähigkeit, Zuverlässigkeit und Fehlermodi voraus.",
                  "Überprüfung mit Piloten, Tests und Übergabe.",
                  "Überwachen Sie das eingeführte Design und erfassen Sie die gewonnenen Erkenntnisse."
                ],
                "where": "Nutzen Sie DMADV für neue Produkte, Dienstleistungen, Prozesse, Software und Einrichtungen. Beispiel: Entwerfen Sie einen neuen Patientenaufnahmeprozess, indem Sie CTQs definieren, Ablaufkonzepte bewerten, den Bedarf simulieren und vor der vollständigen Einführung Piloten durchführen.",
                "when_not": "Verwenden Sie DMADV nicht, wenn bei einem vorhandenen Prozess ein bekanntes Problem auftritt. DMAIC ist normalerweise angemessen. Überspringen Sie keine Verifizierung oder Gestaltung ohne Kundeneingabe. Betrachten Sie einen Piloten nicht als Ersatz für den Nachweis Ihrer Fähigkeiten und Zuverlässigkeit.",
                "common_mistakes": [
                  "Anwendung des DMAIC-Denkens auf ein neues Design.",
                  "Überspringen der Stimme des Kunden und der CTQ-Übersetzung.",
                  "Warten bis zum Start, um Leistungsfähigkeit und Risiko zu testen."
                ],
                "quick_check": [
                  {
                    "q": "Wofür stehen die Buchstaben in DMADV?",
                    "answer": "Definieren, messen, analysieren, entwerfen und überprüfen.",
                    "explanation": "DMADV ist die DFSS-Roadmap für neue Designs."
                  },
                  {
                    "q": "Wann wird DMADV gegenüber DMAIC bevorzugt?",
                    "answer": "Beim Entwerfen eines neuen Produkts, einer neuen Dienstleistung oder eines neuen Prozesses.",
                    "explanation": "DMAIC verbessert einen bestehenden Prozess; DMADV erstellt ein neues."
                  },
                  {
                    "q": "Warum ist die Verifizierung in DMADV unerlässlich?",
                    "answer": "Es beweist, dass das Design die CTQs erfüllt und in der Praxis zuverlässig funktioniert.",
                    "explanation": "Designvorhersagen müssen vor der Markteinführung getestet werden."
                  }
                ],
                "recap": [
                  "DMADV entwirft neue Prozesse und Produkte für Leistungsfähigkeit.",
                  "Übersetzen Sie Kundenbedürfnisse in CTQs und überprüfen Sie das Design.",
                  "Verwenden Sie DFSS, wenn der Prozess noch nicht existiert."
                ]
              }
            },
            {
              "id": "B6.8",
              "order": 8,
              "title": "QFD",
              "objective": "Übersetzen Sie Kundenbedürfnisse mit dem House of Quality in Designanforderungen.",
              "content": {
                "why": "Teams können Funktionen optimieren, die Kunden nicht schätzen. Quality Function Deployment übersetzt die Stimme des Kunden in Designanforderungen, sodass technische und Prozessentscheidungen mit den Kundenbedürfnissen verknüpft bleiben.",
                "what": "Das House of Quality ist die zentrale QFD-Matrix. Kundenbedürfnisse sind das Was, technische Anforderungen sind das Wie, und die Beziehungsmatrix bewertet, wie stark sich jede technische Anforderung auf jedes Bedürfnis auswirkt. Das Dach zeigt Zusammenhänge zwischen technischen Anforderungen. Wettbewerbsbewertungen und Zielvorgaben runden das Haus ab. Die gewichtete Wichtigkeit hilft bei der Priorisierung von Anforderungen. QFD kann durch Produkt-, Teile-, Prozess- und Produktionsplanung kaskadiert werden.",
                "how": [
                  "Sammeln und strukturieren Sie Kundenaussagen.",
                  "Priorisieren Sie Kundenbedürfnisse nach Wichtigkeit.",
                  "Identifizieren Sie messbare technische Anforderungen.",
                  "Ratenbeziehungen und technische Zusammenhänge.",
                  "Vergleichen Sie Wettbewerber und legen Sie Ziele fest.",
                  "Berechnen Sie gewichtete Prioritäten und lösen Sie Kompromisse.",
                  "Kaskadieren Sie die Prioritäten in Design- und Kontrollplänen."
                ],
                "where": "Nutzen Sie QFD für neue Produkte, Servicedesign, Softwarefunktionen, Gesundheitsdienstleistungen und Anlagendesign. Beispiel: Kunden sagen, dass der Prozess einfach zu bedienen sein sollte. QFD-Links, die messbare Anforderungen wie Schritte, Wartezeit, Fehlerrate und Zugänglichkeit erfordern.",
                "when_not": "Verwenden Sie QFD nicht als einmalige Übung für den Papierkram. Erfinden Sie Kundenbedürfnisse nicht ohne Recherche. Bauen Sie keine Matrix auf, die so groß ist, dass das Team nicht darauf reagieren kann.",
                "common_mistakes": [
                  "Ratende Stimme des Kunden.",
                  "Beziehungswerte willkürlich zuweisen.",
                  "Setzen von Zielen ohne Eigentümer oder Durchsetzung."
                ],
                "quick_check": [
                  {
                    "q": "Was ist das Was und Wie in einem House of Quality?",
                    "answer": "Das Was sind Kundenbedürfnisse und das Wie sind technische Anforderungen.",
                    "explanation": "Die Matrix verknüpft Kundenwünsche mit messbaren Designmerkmalen."
                  },
                  {
                    "q": "Was zeigt das Dach des House of Quality?",
                    "answer": "Zusammenhänge zwischen technischen Anforderungen.",
                    "explanation": "Es zeigt Kompromisse und Synergien zwischen Designentscheidungen auf."
                  },
                  {
                    "q": "Warum Gewicht Kundenbedürfnisse?",
                    "answer": "Priorisierung technischer Anforderungen nach Kundenbedeutung.",
                    "explanation": "Durch die Gewichtung werden die Ressourcen auf das Wichtigste konzentriert."
                  }
                ],
                "recap": [
                  "QFD übersetzt Kundenbedürfnisse in technische Anforderungen.",
                  "Nutzen Sie Beziehungsbewertungen und Wettbewerbsziele, um Prioritäten zu setzen.",
                  "Übertragen Sie Prioritäten auf Design- und Prozessentscheidungen."
                ]
              }
            },
            {
              "id": "B6.9",
              "order": 9,
              "title": "Kano-Modell",
              "objective": "Klassifizieren Sie die Funktionen als einfach, leistungsstark oder erfreulich.",
              "content": {
                "why": "Nicht jede Funktion wirkt sich gleichermaßen auf die Zufriedenheit aus. Das Kano-Modell verhindert, dass Teams zu viel in Funktionen investieren, die Kunden kaum bemerken, oder zu wenig in Grundlagen investieren, deren Fehlen zu Unzufriedenheit führt.",
                "what": "Kano klassifiziert Merkmale als „must-sein“, „leistungsfähig“, „attraktiv“, „indifferent“ oder „umgekehrt“. Unverzichtbare Funktionen verursachen Unzufriedenheit, wenn sie fehlen, erfreuen aber nicht, wenn sie vorhanden sind. Leistungsmerkmale erzeugen Zufriedenheit im Verhältnis dazu, wie gut sie erbracht werden. Attraktive Merkmale erfreuen, wenn sie vorhanden sind, verursachen aber keine Unzufriedenheit, wenn sie fehlen. Mit der Zeit werden oft attraktive Features erwartet. Das Umfragedesign stellt funktionale und dysfunktionale Fragen für jedes Merkmal.",
                "how": [
                  "Listen Sie die Merkmale oder Anforderungen der Kandidaten auf.",
                  "Schreiben Sie paarweise funktionale und dysfunktionale Umfragefragen.",
                  "Sammeln Sie Antworten aus repräsentativen Kundensegmenten.",
                  "Klassifizieren Sie jedes Merkmal mithilfe der Kano-Bewertungstabelle.",
                  "Analysieren Sie Unterschiede nach Segment und im Zeitverlauf.",
                  "Priorisieren Sie zuerst die unverzichtbaren Funktionen, dann die Leistung und ausgewählte Freuden."
                ],
                "where": "Nutzen Sie Kano für Produktfunktionen, Servicedesign, mobile Anwendungen, Hotelannehmlichkeiten und Gesundheitserlebnisse. Beispiel: Ein sauberes Krankenzimmer ist ein Muss, kürzere Wartezeiten sind Leistung und ein unerwarteter Folgeanruf kann attraktiv sein.",
                "when_not": "Gehen Sie nicht davon aus, dass ein Kundensegment alle Kunden repräsentiert. Jagen Sie nicht den Freuden hinterher, bevor Sie fehlende Grundlagen behoben haben. Behandeln Sie Klassifizierungen nicht als dauerhaft; Erwartungen ändern sich.",
                "common_mistakes": [
                  "Befragung nur positiver Fragen.",
                  "Kano-Kategorien werden als statisch behandelt.",
                  "Segmentunterschiede werden ignoriert."
                ],
                "quick_check": [
                  {
                    "q": "Was ist ein Muss?",
                    "answer": "Ein Merkmal, dessen Abwesenheit Unzufriedenheit hervorruft, dessen Anwesenheit jedoch keine Freude bereitet.",
                    "explanation": "Unverzichtbare Funktionen sind grundlegende Erwartungen."
                  },
                  {
                    "q": "Was ist ein Leistungsmerkmal?",
                    "answer": "Eine Funktion, bei der die Zufriedenheit mit zunehmender Leistung steigt.",
                    "explanation": "Leistungsmerkmale folgen einem annähernd linearen Zusammenhang."
                  },
                  {
                    "q": "Was ist ein attraktives Feature?",
                    "answer": "Eine Funktion, die erfreut, wenn sie vorhanden ist, aber keine Unzufriedenheit hervorruft, wenn sie nicht vorhanden ist.",
                    "explanation": "Attraktive Merkmale sind unerwartete Unterscheidungsmerkmale."
                  }
                ],
                "recap": [
                  "Kano unterscheidet zwischen grundlegenden, leistungsstarken und erfreulichen Funktionen.",
                  "Erledigen Sie unbedingt die Anforderungen, bevor Sie sich auf die Jagd nach Freuden machen.",
                  "Überarbeiten Sie die Klassifizierungen, wenn sich die Kundenerwartungen weiterentwickeln."
                ]
              }
            }
          ]
        },
        {
          "id": "black-7",
          "number": 7,
          "title": "Führung und Finanzen",
          "duration": "3 Stunden",
          "summary": "Leiten Sie komplexe Veränderungen, bauen Sie Projektpipelines auf, weisen Sie den finanziellen Nutzen nach und entwickeln Sie andere Gürtel.",
          "lessons": [
            {
              "id": "B7.1",
              "order": 1,
              "title": "Erweiterte FMEA",
              "objective": "Nutzen Sie Aktionspriorität, Risikoüberprüfung und Integration mit Kontrollplänen.",
              "content": {
                "why": "Eine einfache Risikoeinstufung kann Teams dazu verleiten, Probleme mit geringer Schwere zu beheben und dabei schwerwiegende Fehlerarten zu ignorieren. Die erweiterte FMEA priorisiert Risiken auf eine Weise, die Kunden schützt, und verknüpft Maßnahmen mit Kontrollen.",
                "what": "FMEA identifiziert Fehlerarten, deren Auswirkungen und Ursachen. Der Schweregrad bewertet die Auswirkung, das Auftreten die Wahrscheinlichkeit und die Erkennung die Wahrscheinlichkeit, den Fehler vor der Auswirkung zu erkennen. Die herkömmliche Risikoprioritätszahl vervielfacht den Schweregrad, das Auftreten und die Erkennung, behandelt jedoch sehr unterschiedliche Risiken als gleichwertig. Die AIAG-VDA-Aktionsprioritätsmethode betont den Schweregrad und lenkt die Aufmerksamkeit auf Kombinationen mit hoher Priorität. Maßnahmen sollten zunächst Ursachen verhindern, dann die Erkennung verbessern und in den Kontrollplan einfließen.",
                "how": [
                  "Definieren Sie den Umfang und die Struktur des Entwurfs oder Prozesses.",
                  "Listen Sie Funktionen und mögliche Fehlermodi auf.",
                  "Beschreiben Sie die Auswirkungen und weisen Sie deren Schwere zu.",
                  "Identifizieren Sie Ursachen und bewerten Sie das Auftreten.",
                  "Listen Sie aktuelle Präventions- und Erkennungskontrollen auf.",
                  "Weisen Sie Aktionsprioritäten zu und wählen Sie Aktionen aus.",
                  "Bewerten Sie das Risiko neu und aktualisieren Sie den Kontrollplan und die Standardarbeit."
                ],
                "where": "Nutzen Sie FMEA für Design-, Fertigungs-, Software-, Gesundheits- und Serviceprozesse. Beispiel: Ein Fehlermodus mit Schweregrad 10 und Auftreten 4 behält auch bei starker Erkennung hohe Priorität, da die Auswirkung katastrophal ist.",
                "when_not": "Verwenden Sie keinen einfachen RPN-Schwellenwert als einzige Entscheidungsregel. Lassen Sie FMEA nicht zum Papierkram werden. Ignorieren Sie nicht menschliche Faktoren, Anwendungsfehler oder Wechselwirkungen zwischen Fehlermodi.",
                "common_mistakes": [
                  "Priorisierung allein durch RPN.",
                  "Investieren Sie nur in die Erkennung statt in die Prävention.",
                  "Fehler bei der Aktualisierung der FMEA und des Kontrollplans."
                ],
                "quick_check": [
                  {
                    "q": "Was bedeuten Schweregrad, Auftreten und Erkennung?",
                    "answer": "Auswirkung der Wirkung, Wahrscheinlichkeit der Ursache und Fähigkeit zur Erkennung vor der Auswirkung.",
                    "explanation": "Zusammen beschreiben sie das Risiko eines Fehlermodus."
                  },
                  {
                    "q": "Warum wird Aktionspriorität gegenüber RPN allein bevorzugt?",
                    "answer": "Es gibt dem Schweregrad mehr Gewicht und vermeidet irreführende Ergebnisäquivalenzen.",
                    "explanation": "Verschiedene Risikokombinationen können zum gleichen RPN führen."
                  },
                  {
                    "q": "Was sollte eine FMEA-Aktion aktualisieren?",
                    "answer": "Der Kontrollplan, Standardarbeiten und zugehörige Prozessdokumente.",
                    "explanation": "Risikokontrollen müssen in den Prozessablauf eingebettet sein."
                  }
                ],
                "recap": [
                  "FMEA identifiziert Fehlerarten, Auswirkungen, Ursachen und Kontrollen.",
                  "Priorisieren Sie Risiken mit hohem Schweregrad und verhindern Sie Ursachen, bevor Sie die Erkennung verbessern.",
                  "Verknüpfen Sie FMEA-Aktionen mit Kontrollplänen und Standardarbeiten."
                ]
              }
            },
            {
              "id": "B7.2",
              "order": 2,
              "title": "Änderungsmanagement",
              "objective": "Verwenden Sie einen strukturierten Ansatz, um Bewusstsein, Verlangen, Wissen, Fähigkeiten und Verstärkung aufzubauen.",
              "content": {
                "why": "Technische Lösungen scheitern, wenn Menschen sie nicht übernehmen. Change Management schafft das Bewusstsein, die Fähigkeiten und das Engagement, die erforderlich sind, damit Verbesserungen anhalten.",
                "what": "ADKAR beschreibt fünf Ergebnisse: Bewusstsein für die Notwendigkeit einer Veränderung, Wunsch zur Teilnahme, Wissen darüber, wie man sich verändert, Leistungsfähigkeit und Verstärkung zum Durchhalten. Die Stakeholder-Analyse ermittelt, wer betroffen ist und welchen Einfluss sie haben. Sponsoring, Kommunikation, Training, Coaching und Widerstandsmanagement werden während des gesamten Projekts koordiniert.",
                "how": [
                  "Definieren Sie die Änderung und ihre Auswirkungen auf jede Stakeholder-Gruppe.",
                  "Bewerten Sie die Bereitschaft und die Quellen des Widerstands.",
                  "Schaffen Sie Bewusstsein mit klaren geschäftlichen und persönlichen Gründen.",
                  "Binden Sie Sponsoren und Influencer ein, um Begehren zu wecken.",
                  "Bieten Sie Schulungen und Übungen an, um Wissen und Fähigkeiten aufzubauen.",
                  "Messen Sie die Akzeptanz und beseitigen Sie Hindernisse.",
                  "Stärken Sie sich durch Anerkennung, Audits und aktualisierte Systeme."
                ],
                "where": "Nutzen Sie das Änderungsmanagement für Prozessänderungen, Software-Rollouts, Gesundheitsprotokolle, Lean-Transformationen und neue Standardarbeiten. Beispiel: Ein Kontrollplan schlägt fehl, weil die Bediener nicht beteiligt waren, nicht verstanden haben, warum es wichtig ist, und nach der Schulung kein Coaching erhalten haben.",
                "when_not": "Behandeln Sie Change Management nicht als eine einzelne Ankündigung. Gehen Sie nicht davon aus, dass durch Training Fähigkeiten oder Wünsche entstehen. Ignorieren Sie den Widerstand nicht und verlassen Sie sich nicht nur auf die E-Mail eines Sponsors.",
                "common_mistakes": [
                  "Einmal kommunizieren und die Änderung für abgeschlossen erklären.",
                  "Überspringen Sie das Verlangen und konzentrieren Sie sich nur auf das Training.",
                  "Es gelingt nicht, den neuen Weg zu stärken."
                ],
                "quick_check": [
                  {
                    "q": "Wofür steht ADKAR?",
                    "answer": "Bewusstsein, Wunsch, Wissen, Fähigkeit und Verstärkung.",
                    "explanation": "Es beschreibt die Bausteine ​​individueller Veränderung."
                  },
                  {
                    "q": "Warum ist Verlangen wichtig?",
                    "answer": "Die Menschen müssen sich dafür entscheiden, den Wandel zu unterstützen und daran teilzunehmen.",
                    "explanation": "Wissen allein schafft kein Engagement."
                  },
                  {
                    "q": "Was ist Verstärkung?",
                    "answer": "Aktionen, die dafür sorgen, dass das neue Verhalten nach der Implementierung bestehen bleibt.",
                    "explanation": "Anerkennung, Audits und Systeme unterstützen die Akzeptanz."
                  }
                ],
                "recap": [
                  "Veränderung gelingt durch Menschen, nicht nur durch technisches Design.",
                  "Verwenden Sie ADKAR, um zu diagnostizieren, wo die Akzeptanz scheitert.",
                  "Fördern, kommunizieren, schulen, coachen und stärken."
                ]
              }
            },
            {
              "id": "B7.3",
              "order": 3,
              "title": "Teamführung",
              "objective": "Führen Sie funktionsübergreifende Teams, bewältigen Sie Konflikte und treffen Sie Entscheidungen.",
              "content": {
                "why": "Black Belts leiten funktionsübergreifende Teams ohne direkte Autorität. Klare Rollen, konstruktive Konflikte und fundierte Entscheidungen entscheiden darüber, ob das Team liefert.",
                "what": "Teams bewegen sich typischerweise durch Formung, Sturmangriff, Normung und Leistung. Eine Charta definiert Zweck, Umfang, Rollen und Entscheidungsrechte. RACI klärt, wer verantwortlich, rechenschaftspflichtig, konsultiert und informiert ist. Aufgabenkonflikte über Ideen können Entscheidungen verbessern, während Beziehungskonflikte das Vertrauen untergraben. Zu den Entscheidungsmethoden gehören Befehl, Beratung, Konsens und einstimmige Zustimmung. Psychologische Sicherheit hilft Menschen, über Risiken und Fehler zu sprechen.",
                "how": [
                  "Erstellen Sie eine klare Charta und klare Rollen.",
                  "Legen Sie Grundregeln fest und erfüllen Sie Normen.",
                  "Nutzen Sie strukturierte Tagesordnungen und Moderation.",
                  "Trennen Sie Aufgabenkonflikte von persönlichen Konflikten.",
                  "Wählen Sie eine Entscheidungsmethode, die Ihren Anforderungen entspricht.",
                  "Dokumentieren Sie Entscheidungen, Eigentümer und Daten.",
                  "Geben Sie Feedback und erkennen Sie Fortschritte an."
                ],
                "where": "Nutzen Sie Teamführung in DMAIC-Projekten, Kaizen-Veranstaltungen, Designteams und funktionsübergreifenden Verbesserungsräten. Beispiel: Ein Team mit unklaren Entscheidungsrechten überlegt sich immer wieder die gleiche Wahl. Ein RACI und eine angegebene Entscheidungsmethode lösen die Schleife auf.",
                "when_not": "Vermeiden Sie Konflikte nicht und nennen Sie sie Harmonie. Nutzen Sie nicht für jede Entscheidung einen Konsens; es kann dringende Entscheidungen verlangsamen. Führen Sie kein Mikromanagement für qualifizierte Teammitglieder durch.",
                "common_mistakes": [
                  "Unklare Rollen und Entscheidungsrechte.",
                  "Gruppendenken und Schweigen über Risiken.",
                  "Entscheidungen werden ohne Eigentümer oder Fristen erfasst."
                ],
                "quick_check": [
                  {
                    "q": "Was ist psychologische Sicherheit?",
                    "answer": "Ein Klima, in dem Menschen ihre Stimme erheben können, ohne Angst vor Demütigung oder Bestrafung haben zu müssen.",
                    "explanation": "Es unterstützt Lernen, Risikoerkennung und ehrliche Debatte."
                  },
                  {
                    "q": "Was ist der Unterschied zwischen Aufgaben- und Beziehungskonflikt?",
                    "answer": "Bei Aufgabenkonflikten geht es um Ideen; Beziehungskonflikte sind persönlicher Natur.",
                    "explanation": "Aufgabenkonflikte können produktiv sein, während Beziehungskonflikte normalerweise dem Team schaden."
                  },
                  {
                    "q": "Wann ist eine Befehlsentscheidung angemessen?",
                    "answer": "Wenn Schnelligkeit und klare Verantwortlichkeiten wichtiger sind als breiter Input.",
                    "explanation": "Der Leiter entscheidet und erläutert die Gründe."
                  }
                ],
                "recap": [
                  "Führen Sie durch Klarheit, Vertrauen und strukturierte Entscheidungen.",
                  "Fördern Sie Aufgabendebatten und begrenzen Sie gleichzeitig persönliche Konflikte.",
                  "Dokumentieren Sie Entscheidungen und ziehen Sie das Team zur Rechenschaft."
                ]
              }
            },
            {
              "id": "B7.4",
              "order": 4,
              "title": "Projektauswahl",
              "objective": "Priorisieren Sie Projekte nach Wirkung, Machbarkeit, Risiko und strategischer Eignung.",
              "content": {
                "why": "Die Verbesserungsressourcen sind begrenzt. Ein disziplinierter Auswahlprozess stellt sicher, dass die Organisation an Projekten mit dem größten strategischen Wert und realistischen Erfolgsaussichten arbeitet.",
                "what": "Bei der Projektauswahl werden Kandidaten hinsichtlich strategischer Eignung, Kunden- und Finanzauswirkungen, Machbarkeit, Risiko, Dringlichkeit und Lernwert verglichen. Eine gewichtete Bewertungsmatrix macht Kriterien explizit und vergleichbar. Das Portfolio sollte schnelle Erfolge mit größeren strategischen Anstrengungen in Einklang bringen und eine Überlastung derselben Personen oder Funktionen vermeiden. Ein ausgewähltes Projekt benötigt eine klare Problemstellung, Ausgangslage, Ziel, Umfang, Sponsor und Ressourcenzusage.",
                "how": [
                  "Sammeln Sie Kandidatenprobleme aus Strategie, Kunden, Betrieb und Mitarbeitern.",
                  "Auswahlkriterien definieren und Gewichtungen vereinbaren.",
                  "Bewerten Sie jeden Kandidaten mit Beweisen, nicht nur mit der Meinung.",
                  "Überprüfen Sie Machbarkeit, Datenverfügbarkeit, Autorität und Ressourcen.",
                  "Überprüfen Sie das Portfolio auf Gleichgewicht und Abhängigkeiten.",
                  "Wählen Sie Projekte aus und weisen Sie Sponsoren zu.",
                  "Chartern Sie jedes Projekt mit einer messbaren Ausgangslage und einem messbaren Ziel."
                ],
                "where": "Nutzen Sie die Projektauswahl in der Jahresplanung, DMAIC-Pipelines, Lean-Portfolios und Kontinuierlichen Verbesserungsräten. Beispiel: Ein Projekt mit hoher Kundenauswirkung, aber ohne verlässliche Basislinie erfordert möglicherweise ein kurzes Messprojekt vor der vollständigen Vercharterung.",
                "when_not": "Verwenden Sie eine Bewertungsmatrix nicht als Ersatz für die Beurteilung. Wählen Sie nicht nur einfache Projekte oder nur Lieblingsprojekte aus. Genehmigen Sie keine Arbeiten ohne einen Sponsor und die Fähigkeit zur Ausführung.",
                "common_mistakes": [
                  "Auswahl von Projekten, die nicht mit einer Strategie verknüpft sind.",
                  "Beginnen Sie ohne eine Grundlinie oder klare Problemstellung.",
                  "Auswahl von Projekten, die zu umfangreich sind, um abgeschlossen zu werden."
                ],
                "quick_check": [
                  {
                    "q": "Was sollte eine Projektauswahlbewertung beinhalten?",
                    "answer": "Strategische Eignung, Wirkung, Machbarkeit, Risiko und Dringlichkeit.",
                    "explanation": "Mehrere Kriterien verhindern eine Auswahl aufgrund einer einzigen Voreingenommenheit."
                  },
                  {
                    "q": "Warum schnelle Erfolge und strategische Projekte in Einklang bringen?",
                    "answer": "Dynamik aufbauen und gleichzeitig langfristigen Wert liefern.",
                    "explanation": "Ein Portfolio braucht sowohl Glaubwürdigkeit als auch Transformation."
                  },
                  {
                    "q": "Was muss ein Charterprojekt haben?",
                    "answer": "Ein klares Problem, eine klare Ausgangslage, ein klares Ziel, einen klaren Umfang, einen klaren Sponsor und klare Ressourcen.",
                    "explanation": "Diese Elemente machen das Projekt ausführbar und messbar."
                  }
                ],
                "recap": [
                  "Wählen Sie Projekte mit expliziten strategischen und Machbarkeitskriterien aus.",
                  "Balancieren Sie das Portfolio und vermeiden Sie eine Überlastung der Ressourcen.",
                  "Chartern Sie nur Projekte mit einer Basislinie, einem Ziel und einem Sponsor."
                ]
              }
            },
            {
              "id": "B7.5",
              "order": 5,
              "title": "Finanzanalyse (COPQ, ROI)",
              "objective": "Erstellen Sie einen Vorteilsfall mit harten und weichen Ersparnissen.",
              "content": {
                "why": "Verbesserungsprojekte konkurrieren um Kapital und die Aufmerksamkeit des Managements. Ein glaubwürdiger finanzieller Fall zeigt, ob der Nutzen real ist, wie schnell er eintritt und wie hoch die Kosten dafür sind.",
                "what": "Zu den Kosten schlechter Qualität zählen interne Fehler, externe Fehler, Beurteilungs- und Präventionskosten. Harte Einsparungen reduzieren die tatsächlichen Ausgaben, während sanfte Einsparungen Kosten vermeiden oder die Kapazität erhöhen und möglicherweise eine Validierung erfordern. Der Return on Investment vergleicht den Nettonutzen mit den Projektkosten. Payback zeigt, wie schnell sich die Investition amortisiert. Der Kapitalwert und der interne Zinsfuß berücksichtigen mehrjährige Cashflows und den Zeitwert des Geldes.",
                "how": [
                  "Legen Sie eine validierte Basislinie und Messmethode fest.",
                  "Quantifizieren Sie harte und weiche Vorteile mit Finanzmitteln.",
                  "Berücksichtigen Sie die Implementierungs-, Betriebs- und Wartungskosten.",
                  "Berechnen Sie ROI, Amortisation und Kapitalwert bzw. IRR.",
                  "Testen Sie Annahmen mit Sensitivitätsanalyse.",
                  "Holen Sie eine finanzielle Prüfung und Genehmigung ein.",
                  "Verfolgen Sie realisierte Vorteile nach der Implementierung."
                ],
                "where": "Nutzen Sie Finanzanalysen für Fehlerreduzierung, Zykluszeitverbesserung, Kapazitätsfreigabe, Garantiereduzierung und Kundenbindungsprojekte. Beispiel: Arbeitseinsparungen sind nur dann schwierig, wenn Stellen gestrichen oder neu besetzt werden; andernfalls kann es sich um Kapazitäts- oder Soft-Einsparungen handeln.",
                "when_not": "Zählen Sie nicht die theoretischen Einsparungen, die nie das Budget erreichen. Zählen Sie die Vorteile projektübergreifend nicht doppelt. Ignorieren Sie laufende Kosten nicht und stellen Sie weiche Ersparnisse nicht als Bargeld dar.",
                "common_mistakes": [
                  "Keine validierte Basislinie.",
                  "Doppelzählung von Vorteilen.",
                  "Behandlung der freigegebenen Kapazität als automatische Geldeinsparung."
                ],
                "quick_check": [
                  {
                    "q": "Was ist der Unterschied zwischen hartem und weichem Sparen?",
                    "answer": "Harte Einsparungen reduzieren die tatsächlichen Ausgaben; Sanfte Einsparungen vermeiden Kosten oder freie Kapazität.",
                    "explanation": "Sanftes Sparen erfordert in der Regel eine finanzielle Validierung."
                  },
                  {
                    "q": "Was misst die Amortisation?",
                    "answer": "Die Zeit, die zur Amortisierung der Projektinvestitionen erforderlich ist.",
                    "explanation": "Eine kürzere Amortisation bedeutet eine schnellere Rückerstattung des Geldes."
                  },
                  {
                    "q": "Warum den Kapitalwert für mehrjährige Projekte verwenden?",
                    "answer": "Es berücksichtigt den Zeitwert des Geldes über zukünftige Cashflows hinweg.",
                    "explanation": "Zukünftige Vorteile sind weniger wert als unmittelbare Vorteile."
                  }
                ],
                "recap": [
                  "Bauen Sie den Business Case auf einer validierten Basis auf.",
                  "Trennen Sie harte Einsparungen, weiche Einsparungen und Kapazitätsfreigabe.",
                  "Nutzen Sie finanzüberprüfte ROI, Amortisation und NPV oder IRR."
                ]
              }
            },
            {
              "id": "B7.6",
              "order": 6,
              "title": "Mentoring",
              "objective": "Coachen Sie Green Belts und überprüfen Sie die Projektlogik und -statistiken.",
              "content": {
                "why": "Mentoring vervielfacht die Verbesserungsfähigkeit. Green Belts und Projektteams benötigen Anleitung, um die richtigen Methoden anzuwenden, unnötigen Aufwand zu vermeiden und ihr Urteilsvermögen zu verbessern.",
                "what": "Mentoring entwickelt die Fähigkeiten einer anderen Person durch Anleitung, Befragung, Feedback und Gate-Reviews. Es unterscheidet sich vom Coaching durch die Kombination von technischer Überprüfung mit Karriere- und Führungsentwicklung. Ein Mentor überprüft die Charta, die Daten, die Analyse und den Kontrollplan, ohne die Arbeit zu übernehmen. Effektives Mentoring nutzt Erwachsenenbildung, klare Erwartungen, regelmäßige Check-ins und dokumentierte Maßnahmen.",
                "how": [
                  "Vereinbaren Sie Entwicklungsziele und Projekterwartungen.",
                  "Bewerten Sie aktuelle Fähigkeiten und Lücken.",
                  "Erstellen Sie einen Mentoring-Plan mit Überprüfungspunkten.",
                  "Stellen Sie Fragen, bevor Sie Antworten geben.",
                  "Überprüfen Sie die Projektlogik, -daten und -statistiken an den Gates.",
                  "Geben Sie konkretes Feedback und vereinbaren Sie die nächsten Maßnahmen.",
                  "Bewerten Sie den Fortschritt und eskalieren Sie reale Risiken."
                ],
                "where": "Nutzen Sie Mentoring für Green Belt-Projekte, Black Belt-Entwicklung, Lean-Führungskräfte und Verbesserungssponsoren. Beispiel: An einem Define-Gate bittet der Mentor das Green Belt, die Grundlagen und den Umfang zu beweisen, anstatt die Charta für ihn neu zu schreiben.",
                "when_not": "Arbeiten Sie nicht als Mentor ohne Fachwissen, Zeit oder Objektivität, um zu helfen. Machen Sie das Projekt nicht für den Mentee. Vermeiden Sie Interessenkonflikte, wenn Sie jemanden betreuen, den Sie ebenfalls bewerten.",
                "common_mistakes": [
                  "Das Problem lösen statt Fähigkeiten aufbauen.",
                  "Konzentrieren Sie sich nur auf Werkzeuge und ignorieren Sie Führung.",
                  "Geben Sie vages Feedback ohne Folgemaßnahmen."
                ],
                "quick_check": [
                  {
                    "q": "Was ist die Rolle eines Mentors?",
                    "answer": "Um die Entwicklung anzuleiten, das Denken herauszufordern und die eigene Arbeit des Mentees zu unterstützen.",
                    "explanation": "Mentoring baut Fähigkeiten auf, anstatt zu übernehmen."
                  },
                  {
                    "q": "Warum Fragen im Mentoring verwenden?",
                    "answer": "Sie helfen dem Mentee, zu argumentieren und ein unabhängiges Urteilsvermögen aufzubauen.",
                    "explanation": "Fragen erzeugen Lernen, was Antworten allein nicht bewirken."
                  },
                  {
                    "q": "Was sollte bei einem Projekt-Gate-Review passieren?",
                    "answer": "Der Mentor prüft vor der nächsten Phase Logik, Beweise und Bereitschaft.",
                    "explanation": "Gate-Reviews verhindern, dass schwache Arbeiten vorankommen."
                  }
                ],
                "recap": [
                  "Mentoring fördert die Entwicklung von Menschen und schützt gleichzeitig die Projektqualität.",
                  "Leitfaden mit Fragen, Beweisen und spezifischem Feedback.",
                  "Übernehmen Sie nicht das Projekt des Mentees."
                ]
              }
            }
          ]
        }
      ],
      "coverageChecklist": [
        {
          "topic": "Erweiterte Statistiken und Wahrscheinlichkeitsverteilungen",
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
          "topic": "Vollständige Hypothesenprüfung (t-Tests)",
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
          "topic": "Nicht parametrisch",
          "lessons": [
            "B1.8"
          ]
        },
        {
          "topic": "Chi-Quadrat",
          "lessons": [
            "B1.9"
          ]
        },
        {
          "topic": "Multiple Regression",
          "lessons": [
            "B3.1"
          ]
        },
        {
          "topic": "Logistische Regression",
          "lessons": [
            "B3.2"
          ]
        },
        {
          "topic": "Volle DOE",
          "lessons": [
            "B4.1"
          ]
        },
        {
          "topic": "Bruchteil des DOE",
          "lessons": [
            "B4.2"
          ]
        },
        {
          "topic": "Antwortoberflächenmethoden",
          "lessons": [
            "B4.4"
          ]
        },
        {
          "topic": "Erweiterter SPC",
          "lessons": [
            "B5.1"
          ]
        },
        {
          "topic": "Nicht normale Fähigkeit",
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
          "topic": "Wertstrom-Mapping",
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
          "topic": "Design für Six Sigma (DMADV)",
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
          "topic": "Änderungsmanagement",
          "lessons": [
            "B7.2"
          ]
        },
        {
          "topic": "Teamführung",
          "lessons": [
            "B7.3"
          ]
        },
        {
          "topic": "Projektauswahl",
          "lessons": [
            "B7.4"
          ]
        },
        {
          "topic": "Finanzanalyse (COPQ, ROI)",
          "lessons": [
            "B7.5"
          ]
        },
        {
          "topic": "Mentoring",
          "lessons": [
            "B7.6"
          ]
        }
      ],
      "project": {
        "title": "Reduzieren Sie Durchlaufzeiten und Fehler in einem funktionsübergreifenden Prozess",
        "brief": "Leiten Sie ein vollständiges DMAIC-Projekt für einen komplexen Prozess wie Kreditgenehmigungen, Patientenentlassung oder Softwarefreigabe. Dazu gehören MSA, Fähigkeit, Hypothesentests, Regression, ein geplantes Experiment, ein Pilotprojekt und ein Kontrollplan mit finanzieller Validierung."
      },
      "exam": {
        "questions": 100,
        "passingScore": 80,
        "format": "100 Multiple-Choice-Fragen mit vier Optionen und Erklärungen, einschließlich Berechnungen und Ausgabeinterpretation."
      },
      "cheatSheet": [
        "Verwenden Sie nichtparametrische Tests, wenn Normalitäts- oder Varianzgleichheitsannahmen fehlschlagen.",
        "R-Quadrat erklärt Varianz; Das angepasste R-Quadrat bestraft zusätzliche Prädiktoren.",
        "Resolution-IV-Designs aliasen Haupteffekte nicht mit Zwei-Faktor-Wechselwirkungen.",
        "Fähigkeit für nichtnormale Daten: Transformieren, Anpassen einer Verteilung oder Verwenden nichtparametrischer Methoden."
      ],
      "nextChecklist": [
        "Ich kann einen Hypothesentest aus einem Szenario auswählen und interpretieren.",
        "Ich kann ein multiples Regressionsmodell erstellen und diagnostizieren.",
        "Ich kann ein Screening-Experiment entwerfen und analysieren.",
        "Ich kann ein funktionsübergreifendes Projekt leiten und einen Green Belt betreuen."
      ]
    },
    {
      "id": "master-black",
      "name": "Meister des schwarzen Gürtels",
      "level": 5,
      "color": "master",
      "icon": "fa-star",
      "lessonTarget": "20-25",
      "studyTime": "60-80 Stunden",
      "audience": "Erfahrene Black Belts, die Bereitstellungen entwerfen, Portfolios verwalten, zu Statistiken beraten und organisatorische Fähigkeiten aufbauen.",
      "prerequisites": "Black Belt-Zertifizierung und eine Erfolgsbilanz bei der Leitung komplexer Projekte.",
      "previousRecap": "Zusammenfassung des Black Belt: Komplexe Projekte erfordern erweiterte Statistiken, geplante Experimente, Lean und DFSS, Change Leadership und validierte finanzielle Vorteile.",
      "outcomes": [
        "Setzen Sie mit Hoshin Kanri eine Strategie um und verwalten Sie ein Verbesserungsportfolio",
        "Validieren Sie finanzielle Vorteile und wählen Sie Projekte nach strategischem Wert aus",
        "Coachen Sie Black Belts und beraten Sie bei fortgeschrittenen statistischen Fragen",
        "Entwerfen Sie Schulungen, bauen Sie eine Kultur auf und integrieren Sie Analysen und Industrie 4.0",
        "Wenden Sie die Zertifizierungsstandards und Ethiknormen ISO 13053, ASQ und IASSC an"
      ],
      "modules": [
        {
          "id": "master-1",
          "number": 1,
          "title": "Strategiebereitstellung",
          "duration": "4 Stunden",
          "summary": "Verknüpfen Sie Verbesserungsarbeit mit Strategie durch Hoshin Kanri, Governance, Portfolioauswahl und validierte finanzielle Vorteile.",
          "lessons": [
            {
              "id": "M1.1",
              "order": 1,
              "title": "Hoshin Kanri",
              "objective": "Kaskadieren Sie strategische Ziele in jährliche Verbesserungsprioritäten.",
              "content": {
                "why": "Verbesserungsportfolios verschieben sich, wenn Projekte lokal ausgewählt werden und die Strategie in einem Planungsdokument verbleibt. Hoshin Kanri verbindet langfristige Ausrichtung mit jährlichen Prioritäten, Projekten und täglicher Arbeit.",
                "what": "Hoshin Kanri ist Strategieeinsatz. Es beginnt mit einer wahren Nordvision, legt bahnbrechende Ziele für drei bis fünf Jahre fest und setzt sie in jährliche Ziele und Verbesserungsprioritäten um. Die X-Matrix verknüpft langfristige Ziele, Jahresziele, Verbesserungsinitiativen und Verbesserungsziele. Catchball gleicht Ziele und Ressourcen auf allen Ebenen aus. Regelmäßige Überprüfungen wenden Plan-Do-Check-Act auf die Bereitstellung selbst an, nicht nur auf Projekte.",
                "how": [
                  "Definieren Sie die Vision und die wichtigsten strategischen Lücken.",
                  "Legen Sie eine kleine Anzahl bahnbrechender Ziele für einen Zeitraum von drei bis fünf Jahren fest.",
                  "Übersetzen Sie sie in jährliche Ziele und messbare Ziele.",
                  "Erstellen Sie die X-Matrix und verknüpfen Sie Prioritäten mit Projekten.",
                  "Kaskadieren Sie Ziele durch Catchball und einigen Sie sich auf Ressourcen.",
                  "Überprüfen Sie den Fortschritt in regelmäßigen Abständen und passen Sie ihn an.",
                  "Verbinden Sie die Bereitstellung mit der täglichen Verwaltung und der Standardarbeit."
                ],
                "where": "Nutzen Sie Hoshin Kanri in Unternehmen, Gesundheitssystemen, öffentlichen Einrichtungen und Herstellern mit mehreren Standorten. Beispiel: Ein Dreijahresziel, die Vorlaufzeit von der Bestellung bis zur Lieferung um 30 % zu verkürzen, wird zu jährlichen Zielen für Fluss, Qualität und Lieferantenleistung, die jeweils mit eigenen Projekten verknüpft sind.",
                "when_not": "Machen Sie Hoshin nicht zu einer langen Liste von Jahreszielen. Kaskadieren Sie keine Ziele ohne Ressourcen oder Autorität. Ersetzen Sie nicht die Umsetzung einer Strategie durch die tägliche Verwaltung und Problemlösung.",
                "common_mistakes": [
                  "Zu viele Prioritäten setzen.",
                  "Catchball überspringen und Ziele imposant erreichen.",
                  "Überprüfung der Fortschritte nur einmal im Jahr."
                ],
                "quick_check": [
                  {
                    "q": "Was ist Hoshin Kanri?",
                    "answer": "Strategieentwicklung, die langfristige Ziele mit jährlichen Prioritäten und Verbesserungsarbeiten in Einklang bringt.",
                    "explanation": "Es verbindet Richtung, Ressourcen, Projekte und Überprüfung."
                  },
                  {
                    "q": "Was verbindet die X-Matrix?",
                    "answer": "Langfristige Ziele, Jahresziele, Verbesserungsprioritäten und Zielvorgaben.",
                    "explanation": "Die Matrix macht die strategische Ausrichtung sichtbar."
                  },
                  {
                    "q": "Warum die Anzahl der Durchbruchsziele gering halten?",
                    "answer": "Ressourcen und Aufmerksamkeit auf die wichtigsten Lücken richten.",
                    "explanation": "Zu viele Prioritäten verwässern die Ausführung."
                  }
                ],
                "recap": [
                  "Hoshin Kanri stimmt Strategie, Projekte und tägliche Arbeit aufeinander ab.",
                  "Verwenden Sie ein paar bahnbrechende Ziele und eine X-Matrix.",
                  "Bereitstellung durch Catchball und Überprüfung mit PDCA."
                ]
              }
            },
            {
              "id": "M1.2",
              "order": 2,
              "title": "Strategieeinsatz und Catchball",
              "objective": "Nutzen Sie Catchball, um Ziele, Ressourcen und Maßnahmen aufeinander abzustimmen.",
              "content": {
                "why": "Eine Strategie wird nur dann umgesetzt, wenn die lokalen Teams sie verstehen, gestalten und ihren Teil dazu beitragen. Catchball verwandelt ein Top-Ziel in einen realisierbaren Plan, ohne die strategische Absicht zu verlieren.",
                "what": "Catchball ist ein strukturierter, iterativer Dialog zwischen den Ebenen der Organisation. Führungskräfte teilen Richtung, Einschränkungen und Ziele. Die Teams reagieren mit lokalem Wissen, Kapazitäten, Risiken und Verbesserungsideen. Ziele, Ressourcen und Zeitplan werden ausgehandelt, bis sie ehrgeizig, aber erreichbar sind. Das Ergebnis wird in Einsatzplänen, A3s und Überprüfungsrhythmen dokumentiert. Catchball ist weder ein Befehl von oben noch ein uneingeschränkter Konsens.",
                "how": [
                  "Entwerfen Sie strategische Ziele und Einsatzziele.",
                  "Informieren Sie jede Ebene über Richtung, Begründung und Einschränkungen.",
                  "Bitten Sie die Teams, lokale Pläne zu entwerfen und Lücken zu identifizieren.",
                  "Überprüfen Sie die Ausrichtung vertikal und funktionsübergreifend.",
                  "Verhandeln Sie Ressourcen, Zeitplanung und Maßnahmen.",
                  "Dokumentieren Sie vereinbarte Pläne, Eigentümer und Überprüfungstermine.",
                  "Überprüfen Sie den Fortschritt und verhandeln Sie neu, wenn sich die Bedingungen ändern."
                ],
                "where": "Nutzen Sie Catchball in Hoshin Kanri, Jahresplanung, Transformationsprogrammen und Bereitstellungen an mehreren Standorten. Beispiel: Ein Krankenhausziel zur Verkürzung der Aufenthaltsdauer wird mit Klinik-, Betriebs- und Finanzleitern besprochen, damit Bettenkapazität, Sicherheit und Entlassungsplanung aufeinander abgestimmt sind.",
                "when_not": "Verwenden Sie Catchball nicht, um jedes Ziel zu verwässern, bis es einfach ist. Lassen Sie es nicht zu einem endlosen Treffen werden. Überspringen Sie weder die Dokumentation noch die Überprüfung.",
                "common_mistakes": [
                  "Ziele ankündigen, ohne auf lokale Einschränkungen zu achten.",
                  "Zulassen, dass widersprüchliche funktionale Ziele ungelöst bleiben.",
                  "Vereinbarungen und Eigentümer werden nicht erfasst."
                ],
                "quick_check": [
                  {
                    "q": "Was ist Catchball?",
                    "answer": "Iterativer Dialog zur Abstimmung von Zielen, Ressourcen und lokalen Plänen auf allen Ebenen.",
                    "explanation": "Es verbindet strategische Ausrichtung mit lokalem Wissen."
                  },
                  {
                    "q": "Warum ist Catchball nicht einfach Konsens?",
                    "answer": "Führungskräfte behalten ihre strategische Absicht bei, während Teams über eine realisierbare Umsetzung verhandeln.",
                    "explanation": "Das Ziel ist eine Angleichung, nicht eine einstimmige Einigung über alles."
                  },
                  {
                    "q": "Was soll aus Catchball resultieren?",
                    "answer": "Dokumentierte Pläne mit Eigentümern, Maßnahmen, Ressourcen und Überprüfungsterminen.",
                    "explanation": "Aus Dialog muss verantwortungsvolles Handeln werden."
                  }
                ],
                "recap": [
                  "Catchball bringt Strategie und Umsetzung durch strukturierten Dialog in Einklang.",
                  "Bringen Sie Ehrgeiz mit lokalen Kapazitäten und Einschränkungen in Einklang.",
                  "Dokumentieren Sie Vereinbarungen und überprüfen Sie diese regelmäßig."
                ]
              }
            },
            {
              "id": "M1.3",
              "order": 3,
              "title": "Programm-Governance",
              "objective": "Entwerfen Sie Lenkungsausschüsse, Überprüfungsrhythmen und Eskalationspfade.",
              "content": {
                "why": "Große Verbesserungsprogramme scheitern, wenn Entscheidungsrechte, Verantwortlichkeiten und Eskalation unklar sind. Governance sorgt dafür, dass die Arbeit ausgerichtet, finanziert und kontrolliert wird, ohne dass es zu Bürokratie kommt.",
                "what": "Die Programm-Governance definiert, wer entscheidet, wer verantwortlich ist, wie Projekte gechartert werden und wie Risiken eskaliert werden. Zu den typischen Elementen gehören ein Lenkungsausschuss, ein Programmmanagementbüro, Sponsoren, Gürtelrollen, Stage Gates, Portfolioüberprüfungen, Nutzenverfolgung und ein Problem-Eskalationspfad. Governance gibt die Richtung vor und beseitigt Hindernisse; Das Management führt die tägliche Arbeit. Ein RACI macht Entscheidungsrechte explizit.",
                "how": [
                  "Definieren Sie die Ergebnisse und den Umfang des Programms.",
                  "Richten Sie den Lenkungsausschuss und die Entscheidungsrechte ein.",
                  "Klären Sie die Rollen für Sponsoren, Projektleiter, Gürtel und das PMO.",
                  "Chartern Sie Projekte und definieren Sie Bühnentore.",
                  "Legen Sie Berichts-, Risiko- und Eskalationsmechanismen fest.",
                  "Weisen Sie Ressourcen zu und lösen Sie projektübergreifende Konflikte.",
                  "Überprüfen Sie die Vorteile und gleichen Sie das Portfolio neu aus."
                ],
                "where": "Nutzen Sie Programm-Governance für unternehmensweite Lean Six Sigma-Implementierungen, Transformationsbüros, Multi-Site-Programme und große regulatorische oder technologische Änderungen. Beispiel: Ein Lenkungsausschuss löst einen Ressourcenkonflikt zwischen zwei hochwertigen Projekten, anstatt beide ins Stocken zu bringen.",
                "when_not": "Erstellen Sie keine Governance-Ebenen, die jede Entscheidung verlangsamen. Verwechseln Sie ein PMO nicht mit dem verantwortlichen Geschäftsinhaber. Führen Sie Gate-Bewertungen nicht als Stempel durch.",
                "common_mistakes": [
                  "Unklare Eigentums- und Entscheidungsrechte.",
                  "Zu viele Ausschüsse mit überschneidenden Befugnissen.",
                  "Genehmigen von Projekten ohne Nutzenverfolgung."
                ],
                "quick_check": [
                  {
                    "q": "Was ist der Zweck der Programm-Governance?",
                    "answer": "Definieren von Entscheidungsrechten, Verantwortlichkeit, Risikomanagement und Ausrichtung.",
                    "explanation": "Durch die Governance wird das Programm kontrolliert und strategisch ausgerichtet."
                  },
                  {
                    "q": "Wie unterscheidet sich Governance vom Management?",
                    "answer": "Governance gibt die Richtung und Aufsicht vor; Das Management führt die tägliche Arbeit aus.",
                    "explanation": "Beide werden benötigt, aber sie haben nicht die gleiche Rolle."
                  },
                  {
                    "q": "Was macht ein Bühnentor?",
                    "answer": "Es überprüft Beweise und Bereitschaft, bevor mit der Arbeit fortgefahren wird.",
                    "explanation": "Gates verhindern, dass schwache Projekte mehr Ressourcen verbrauchen."
                  }
                ],
                "recap": [
                  "Governance klärt Entscheidungen, Verantwortlichkeit und Eskalation.",
                  "Halten Sie die Strukturen leicht und konzentrieren Sie sich auf die Beseitigung von Barrieren.",
                  "Verknüpfen Sie Gates mit Beweisen und Nutzenrealisierung."
                ]
              }
            },
            {
              "id": "M1.4",
              "order": 4,
              "title": "Auswahl des Projektportfolios",
              "objective": "Bringen Sie Auswirkungen, Risiko, Kapazität und strategische Eignung in Einklang.",
              "content": {
                "why": "Unternehmen haben mehr Verbesserungsideen als Kapazitäten. Die Portfolioauswahl gleicht strategischen Wert, Risiko, Machbarkeit und Ressourcenbeschränkungen im gesamten Unternehmen aus.",
                "what": "Die Portfolioauswahl ist ein wiederkehrender Prozess und keine einmalige Genehmigung. Die Kandidaten werden nach strategischer Eignung, Kunden- und Finanzauswirkungen, Machbarkeit, Risiko, Dringlichkeit und Lernwert bewertet. Das Portfolio muss zu den verfügbaren Mitarbeitern, dem Kapital und der Aufmerksamkeit des Managements passen. Dabei werden Abhängigkeiten, Duplikate und Lebenszyklusbalance berücksichtigt. Durch Stage Gates und Abbruchkriterien können schwache Projekte vorzeitig gestoppt werden.",
                "how": [
                  "Inventarisieren Sie Kandidatenprojekte und Verbesserungsbedarf.",
                  "Vereinbaren Sie gewichtete strategische und finanzielle Kriterien.",
                  "Bewerten Sie Kandidaten mit validierten Beweisen.",
                  "Bewerten Sie Kapazität, Abhängigkeiten und Risiken.",
                  "Wählen Sie ein ausgewogenes Portfolio und weisen Sie Sponsoren zu.",
                  "Überprüfen Sie die Leistung und stellen Sie das Gleichgewicht in einem festgelegten Rhythmus wieder her.",
                  "Stoppen Sie Projekte oder planen Sie sie neu, wenn sie eine Investition nicht mehr rechtfertigen."
                ],
                "where": "Nutzen Sie die Portfolioauswahl für Betriebe mit mehreren Standorten, Transformationsprogramme, Produktportfolios und Unternehmensverbesserungsbüros. Beispiel: Ein Portfolio umfasst schnelle operative Erfolge, ein strategisches digitales Projekt und eine Initiative zum Kompetenzaufbau, anstatt nur einen Typ zu finanzieren.",
                "when_not": "Optimieren Sie nicht jede Funktion lokal auf Kosten des Unternehmens. Finanzieren Sie nicht jede gute Idee. Behandeln Sie das Portfolio nicht als für das Jahr festgelegt.",
                "common_mistakes": [
                  "Kein expliziter Link zur Strategie.",
                  "Zu viele aktive Projekte für die verfügbare Kapazität.",
                  "Keine Kill-Kriterien oder regelmäßige Neuausrichtung."
                ],
                "quick_check": [
                  {
                    "q": "Warum kommt es immer wieder zur Portfolioauswahl?",
                    "answer": "Prioritäten, Kapazitäten und Beweise ändern sich im Laufe der Zeit.",
                    "explanation": "Durch regelmäßige Neuausrichtung bleiben die Ressourcen auf die Arbeit mit dem höchsten Wert konzentriert."
                  },
                  {
                    "q": "Was sollte ein Portfolio ausbalancieren?",
                    "answer": "Strategischer Wert, Risiko, Machbarkeit, Timing und Kompetenzaufbau.",
                    "explanation": "Ein ausgewogenes Portfolio vermeidet Überkonzentration."
                  },
                  {
                    "q": "Warum Tötungskriterien definieren?",
                    "answer": "Projekte zu stoppen, die keine weiteren Investitionen mehr rechtfertigen.",
                    "explanation": "Durch frühzeitige Ausstiege werden Kapazitäten für bessere Chancen frei."
                  }
                ],
                "recap": [
                  "Verwalten Sie Verbesserungsarbeiten als Unternehmensportfolio.",
                  "Bringen Sie Strategie, Wert, Risiko und Kapazität in Einklang.",
                  "Überprüfen Sie regelmäßig und stoppen Sie schwache Projekte frühzeitig."
                ]
              }
            },
            {
              "id": "M1.5",
              "order": 5,
              "title": "Finanzielle Validierung",
              "objective": "Überprüfen Sie echte Einsparungen, vermeiden Sie Doppelzählungen und verfolgen Sie die Realisierung.",
              "content": {
                "why": "Verbesserungsansprüche verlieren an Glaubwürdigkeit, wenn die Einsparungen theoretisch sind, doppelt gezählt werden oder nie in den Jahresabschluss einfließen. Die finanzielle Validierung macht den Leistungsfall vertretbar.",
                "what": "Die finanzielle Validierung bestätigt den Ausgangswert, die Leistungsart, den Zeitpunkt und die finanziellen Auswirkungen auf die Finanzen. Hartes Sparen wirkt sich auf die Ausgaben oder den Cashflow aus. Sanfte Einsparungen vermeiden Kosten oder freie Kapazität und erfordern möglicherweise eine Umverteilung, um real zu werden. Die Analyse kann ROI, Payback, NPV oder IRR verwenden. Ein Benefit-Tracker ordnet die Verantwortlichkeiten zu und vergleicht die geplanten mit den realisierten Ergebnissen. Bei der Validierung werden auch Doppelzählungen und laufende Kosten geprüft.",
                "how": [
                  "Definieren Sie die Nutzenhypothese und die Messmethode.",
                  "Validieren Sie die Basislinie mit Betrieb und Finanzen.",
                  "Klassifizieren Sie Vorteile als Hard-, Soft- oder Capacity-Release.",
                  "Berücksichtigen Sie die Implementierungs-, Betriebs- und Wartungskosten.",
                  "Berechnen Sie ROI, Amortisation und Kapitalwert bzw. IRR.",
                  "Holen Sie die Finanzierungsgenehmigung ein und weisen Sie einen Leistungseigentümer zu.",
                  "Verfolgen Sie realisierte Vorteile und gleichen Sie Abweichungen ab."
                ],
                "where": "Nutzen Sie die Finanzvalidierung für Portfolios, Transformationsprogramme, Kapitalprojekte und einzelne DMAIC-Projekte. Beispiel: Der Abbau von Überstunden ist nur dann eine harte Einsparung, wenn das Überstundenbudget tatsächlich sinkt; Die freigewordene Kapazität bleibt solange bestehen, bis sie erneut bereitgestellt oder verkauft wird.",
                "when_not": "Akzeptieren Sie keine unbestätigten Sparansprüche. Theoretische oder doppelt gezählte Leistungen werden nicht berücksichtigt. Behandeln Sie weiche Ersparnisse ohne Finanzierungsvereinbarung nicht als Bargeld.",
                "common_mistakes": [
                  "Keine validierte Basislinie.",
                  "Zählung der Kapazitätsfreigabe als automatische Geldeinsparung.",
                  "Es kann nicht nachverfolgt werden, ob Vorteile realisiert wurden."
                ],
                "quick_check": [
                  {
                    "q": "Was macht das Sparen schwierig?",
                    "answer": "Es wirkt sich auf die tatsächlichen Ausgaben, die Gewinn- und Verlustrechnung oder den Cashflow aus.",
                    "explanation": "Harte Einsparungen sind nachweisbare finanzielle Verbesserungen."
                  },
                  {
                    "q": "Warum die Finanzierung frühzeitig einbeziehen?",
                    "answer": "Zur Validierung der Basislinie, der Leistungsart und der finanziellen Annahmen.",
                    "explanation": "Eine frühzeitige Prüfung verhindert Streitigkeiten und überhöhte Ansprüche."
                  },
                  {
                    "q": "Was ist ein Benefit-Tracker?",
                    "answer": "Eine Aufzeichnung der geplanten im Vergleich zu realisierten Vorteilen mit Eigentümern und Zeitplan.",
                    "explanation": "Es sorgt dafür, dass die Nutzenrealisierung sichtbar und nachvollziehbar bleibt."
                  }
                ],
                "recap": [
                  "Validieren Sie Basispläne und Leistungsarten mit der Finanzabteilung.",
                  "Trennen Sie harte Einsparungen, weiche Einsparungen und Kapazitätsfreigabe.",
                  "Verfolgen Sie die Realisierung und gleichen Sie geplante und tatsächliche Vorteile ab."
                ]
              }
            }
          ]
        },
        {
          "id": "master-2",
          "number": 2,
          "title": "Coaching und Beratung",
          "duration": "3 Stunden",
          "summary": "Entwickeln Sie Gürtel und Führungskräfte durch Coaching, Mentoring, statistische Beratung und Schulungsdesign.",
          "lessons": [
            {
              "id": "M2.1",
              "order": 1,
              "title": "Coaching-Gürtel",
              "objective": "Nutzen Sie Fragen, Beobachtungen und Feedback, um das Projektdenken zu verbessern.",
              "content": {
                "why": "Eine Zertifizierung ist keine Garantie für den Projekterfolg. Coaching hilft Gürteln dabei, Methoden anzuwenden, Probleme zu durchdenken und Selbstvertrauen aufzubauen, während gleichzeitig die Projektqualität geschützt wird.",
                "what": "Coaching ist ein strukturiertes Gespräch, das die Leistung durch Ziele, Beobachtung, Fragen, Feedback und Maßnahmen verbessert. Das GROW-Modell verwendet Ziel, Realität, Optionen und Willen. Ein Coach fragt mehr als nur erzählt, hilft bei der Argumentation und überprüft Beweise an den Projekttoren. Coaching umfasst sowohl technische Methoden als auch Führungsverhalten. Es unterscheidet sich vom Mentoring, bei dem es um eine umfassendere Karriereentwicklung geht, und vom Leistungsmanagement, bei dem die Person formal bewertet wird.",
                "how": [
                  "Vereinbaren Sie Coaching-Ziele und Projekterwartungen.",
                  "Beobachten Sie die Arbeit, Daten und Teaminteraktionen.",
                  "Verwenden Sie Fragen, um Logik und Annahmen zu testen.",
                  "Geben Sie spezifisches Feedback, das an Beweise gebunden ist.",
                  "Vereinbaren Sie Maßnahmen und Folgetermine.",
                  "Überprüfen Sie den Fortschritt an den Projekttoren.",
                  "Eskalieren Sie Risiken, wenn Fähigkeiten oder Support fehlen."
                ],
                "where": "Nutzen Sie Coaching für Green- und Black Belts, Projektleiter, Lean-Praktiker und Verbesserungssponsoren. Beispiel: Ein Coach bittet einen Green Belt, zu erklären, warum die ausgewählte Stichprobe die Schlussfolgerung stützt, anstatt die Analyse für ihn neu zu berechnen.",
                "when_not": "Lösen Sie das Projekt nicht für den Coachee. Coachen Sie nicht ohne Vertrauen, Zeit oder entsprechendes Fachwissen. Machen Sie das Coaching nicht zu einer überraschenden Leistungsbeurteilung.",
                "common_mistakes": [
                  "Antworten geben statt Argumente aufbauen.",
                  "Geben Sie vages Feedback ohne Beweise.",
                  "Überspringen von Nachverfolgung und Verantwortung."
                ],
                "quick_check": [
                  {
                    "q": "Wofür steht GROW?",
                    "answer": "Ziel, Realität, Optionen und Wille.",
                    "explanation": "Es handelt sich um ein strukturiertes Coaching-Gesprächsmodell."
                  },
                  {
                    "q": "Wie unterscheidet sich Coaching vom Mentoring?",
                    "answer": "Coaching konzentriert sich auf Leistung und konkrete Ziele; Mentoring ist eine umfassendere Entwicklung.",
                    "explanation": "Beide bauen Fähigkeiten auf, dienen aber unterschiedlichen Zwecken."
                  },
                  {
                    "q": "Warum sollte ein Trainer Fragen stellen?",
                    "answer": "Das unabhängige Urteilsvermögen und die Eigenverantwortung des Coachees stärken.",
                    "explanation": "Fragen erzeugen Lernen, was Antworten allein nicht bewirken."
                  }
                ],
                "recap": [
                  "Coachen Sie mit Fragen, Beweisen und spezifischem Feedback.",
                  "Konzentrieren Sie sich sowohl auf technische Methoden als auch auf Führung.",
                  "Bauen Sie Fähigkeiten auf, anstatt die Arbeit zu übernehmen."
                ]
              }
            },
            {
              "id": "M2.2",
              "order": 2,
              "title": "Mentoring und Kompetenzaufbau",
              "objective": "Bauen Sie eine Pipeline von Gürteln und Fachexperten auf.",
              "content": {
                "why": "Ein paar starke Gürtel können eine Organisation nicht verändern. Der Kompetenzaufbau schafft eine nachhaltige Pipeline von Praktikern, Führungskräften und internen Coaches.",
                "what": "Der Kompetenzaufbau ist ein System, kein Kurskatalog. Es umfasst ein Kompetenzmodell, eine Kompetenzbewertung, Lernpfade, Zertifizierung, Praxisprojekte, Coaching, Praxisgemeinschaften und Wissensmanagement. Das 70-20-10-Prinzip legt Wert auf das Lernen durch herausfordernde Arbeit und Beziehungen, unterstützt durch formelle Ausbildung. Mentoring bietet eine längerfristige Entwicklung und Karriereberatung. Der Fortschritt sollte an der nachgewiesenen Kompetenz gemessen werden, nicht an Anwesenheitsstunden.",
                "how": [
                  "Definieren Sie Kompetenzen für jeden Gürtel und jede Führungsrolle.",
                  "Bewerten Sie die aktuellen Kapazitäten und Lücken.",
                  "Entwerfen Sie Lernpfade und Zertifizierungsanforderungen.",
                  "Kombinieren Sie Schulungen, Übungsprojekte, Coaching und Mentoring.",
                  "Bauen Sie Gemeinschaften für Praxis und Wissensaustausch auf.",
                  "Bewerten Sie die nachgewiesenen Fähigkeiten und Projektergebnisse.",
                  "Aktualisieren Sie das Modell, wenn sich Strategie und Technologie ändern."
                ],
                "where": "Nutzen Sie den Kompetenzaufbau für Belt-Programme, Lean-Führungskräfte, technische Spezialisten und Nachfolgeplanung. Beispiel: Ein Green Belt-Kandidat schließt die Schulung ab, wendet Tools bei einem realen Projekt an, erhält Coaching an den Gates und demonstriert seine Kompetenz vor der Zertifizierung.",
                "when_not": "Setzen Sie Schulungsstunden nicht mit Fähigkeiten gleich. Arbeiten Sie als Mentor nicht ohne Struktur oder Erwartungen. Schaffen Sie keine Abhängigkeit, in der der Mentor immer die Antwort liefert.",
                "common_mistakes": [
                  "Einmalige Schulung ohne Übung.",
                  "Keine Kompetenzbewertung oder Zertifizierungsnorm.",
                  "Kein Sponsoring oder Zeit für Entwicklung."
                ],
                "quick_check": [
                  {
                    "q": "Was bedeutet 70-20-10?",
                    "answer": "Das meiste Lernen entsteht durch Erfahrung und Beziehungen, wobei die formelle Ausbildung einen kleineren Teil ausmacht.",
                    "explanation": "Es vereint Praxis, Coaching und Kurse am Arbeitsplatz."
                  },
                  {
                    "q": "Wie soll die Fähigkeit bewertet werden?",
                    "answer": "Durch nachgewiesene Kompetenz und Projektergebnisse.",
                    "explanation": "Anwesenheit allein ist kein Beweis für die Leistungsfähigkeit."
                  },
                  {
                    "q": "Warum Communities of Practice aufbauen?",
                    "answer": "Um Wissen zu teilen, Probleme zu lösen und das Lernen aufrechtzuerhalten.",
                    "explanation": "Gemeinschaften verbinden Praktiker über die formale Ausbildung hinaus."
                  }
                ],
                "recap": [
                  "Bauen Sie Fähigkeiten durch ein System auf, nicht durch isolierte Kurse.",
                  "Kombinieren Sie Praxis, Coaching, Mentoring und Beurteilung.",
                  "Messen Sie nachgewiesene Kompetenz und Ergebnisse."
                ]
              }
            },
            {
              "id": "M2.3",
              "order": 3,
              "title": "Statistische Beratung",
              "objective": "Diagnostizieren Sie Analyseprobleme und empfehlen Sie vertretbare Methoden.",
              "content": {
                "why": "Statistische Beratung prägt Entscheidungen, Investitionen und Risiken. Ein beratender Statistiker muss das eigentliche Problem darlegen, vertretbare Methoden wählen und Unsicherheit klar kommunizieren.",
                "what": "Die statistische Beratung folgt einem strukturierten Prozess: Vertrag mit dem Kunden, Klärung der Entscheidung, Definition des Kostenvoranschlags, Bewertung der Datenherkunft, Auswahl einer Methode, Überprüfung der Annahmen, Test der Sensitivität, Interpretation und Übergabe. Es trennt statistische von praktischer Bedeutung und erklärt Unsicherheit in geschäftlicher Hinsicht. Gute Beratung dokumentiert außerdem Daten und Code, respektiert Ethik und erkennt, wenn die verfügbaren Daten die Frage nicht beantworten können.",
                "how": [
                  "Klären Sie die Entscheidung und die Frage, die die Daten beantworten müssen.",
                  "Definieren Sie die Grundgesamtheit, die Reaktion und den Vergleich.",
                  "Bewerten Sie Datenqualität, Probenahme und Messung.",
                  "Wählen Sie eine Methode, die zum Design passt.",
                  "Überprüfen Sie Annahmen und führen Sie Sensitivitätsanalysen durch.",
                  "Erläutern Sie Ergebnisse mit Intervallen und praktischen Auswirkungen.",
                  "Dokumentieren Sie die Analyse und verfolgen Sie die Verwendung."
                ],
                "where": "Nutzen Sie statistische Beratung bei Projektüberprüfungen, DOE, Regression, MSA, Fähigkeit, Zuverlässigkeit und Vorhersagemodellierung. Beispiel: Ein Team fragt, welcher Lieferant besser ist. Der Berater prüft zunächst, ob die Proben vergleichbar sind und das Messsystem ausreichend ist.",
                "when_not": "Akzeptieren Sie keine schlecht formulierte Frage und eilen Sie nicht zu einer Lösung. Passen Sie nicht zu sehr an und implizieren Sie keine falsche Gewissheit. Analysieren Sie keine Daten, deren Herkunft oder Qualität unbekannt ist.",
                "common_mistakes": [
                  "Beginnen Sie mit einer bevorzugten Methode anstelle der Frage.",
                  "Datenherkunft und Messfehler werden ignoriert.",
                  "Kunden mit Fachjargon überfordern statt mit entscheidungsrelevanter Interpretation."
                ],
                "quick_check": [
                  {
                    "q": "Was sollte ein Statistikberater zunächst klären?",
                    "answer": "Die Entscheidung und die Frage, die die Daten beantworten müssen.",
                    "explanation": "Die Methodenauswahl folgt der Problemstellung."
                  },
                  {
                    "q": "Warum ist die Datenherkunft wichtig?",
                    "answer": "Es bestimmt, ob die Daten die beabsichtigte Schlussfolgerung unterstützen können.",
                    "explanation": "Schlussfolgerungen zu Probenahme- und Messqualitätsgrenzen."
                  },
                  {
                    "q": "Was ist eine Sensitivitätsanalyse?",
                    "answer": "Überprüfen, ob die Schlussfolgerungen unter vernünftigen alternativen Annahmen gelten.",
                    "explanation": "Es testet die Robustheit des Ergebnisses."
                  }
                ],
                "recap": [
                  "Formulieren Sie die Entscheidung, bevor Sie sich für eine Methode entscheiden.",
                  "Bewerten Sie die Datenqualität und überprüfen Sie Annahmen.",
                  "Kommunizieren Sie Unsicherheit und praktische Auswirkungen klar."
                ]
              }
            },
            {
              "id": "M2.4",
              "order": 4,
              "title": "Trainingsdesign",
              "objective": "Entwerfen Sie praxisorientierte Lehrpläne mit Bewertung und Transfer.",
              "content": {
                "why": "Schulungen sollten die Fähigkeiten der Menschen verändern und nicht nur das, was sie gehört haben. Gutes Design baut Kompetenz auf und überträgt das Lernen auf die reale Arbeit.",
                "what": "Das Schulungsdesign orientiert sich im Allgemeinen an ADDIE: Analyse, Design, Entwicklung, Implementierung und Bewertung. Klare Lernziele beschreiben beobachtbare Leistungen. Erwachsenenbildung fördert Relevanz, Übung, Feedback und räumliche Verstärkung. Die Bewertung kann Kirkpatricks Ebenen verwenden: Reaktion, Lernen, Verhalten und Ergebnisse. Blended-Ansätze kombinieren Unterricht, Simulation, Coaching und Aufgaben am Arbeitsplatz.",
                "how": [
                  "Analysieren Sie die Leistungslücke und das Publikum.",
                  "Schreiben Sie messbare Lernziele.",
                  "Designaktivitäten, Praxis und Bewertung.",
                  "Entwickeln Sie Materialien und testen Sie sie.",
                  "Bieten Sie Anwendungsmöglichkeiten.",
                  "Bewerten Sie Lernen, Verhaltensänderungen und Ergebnisse.",
                  "Verbessern Sie das Design auf der Grundlage von Beweisen."
                ],
                "where": "Nutzen Sie das Schulungsdesign für Gürtellehrpläne, Softwareeinführungen, Sicherheitsprogramme, Führungskräfteentwicklung und technische Zertifizierung. Beispiel: Ein Statistikkurs umfasst einen realen Datensatz, eine Projektaufgabe und Coaching und nicht nur Vorlesungen.",
                "when_not": "Nutzen Sie keine Schulungen, wenn die Ursache unklare Erwartungen, fehlende Tools oder eine schlechte Prozessgestaltung sind. Verlassen Sie sich bei komplexen Fertigkeiten nicht auf die reine Vorlesung. Bewerten Sie nicht nur Zufriedenheitswerte.",
                "common_mistakes": [
                  "Content Dumping ohne Übung.",
                  "Kein Transferplan zur Stelle.",
                  "Bewertung der Reaktion, aber nicht des Lernens oder der Ergebnisse."
                ],
                "quick_check": [
                  {
                    "q": "Wofür steht ADDIE?",
                    "answer": "Analyse, Design, Entwicklung, Implementierung und Bewertung.",
                    "explanation": "Es handelt sich um einen strukturierten Unterrichtsgestaltungsprozess."
                  },
                  {
                    "q": "Was macht ein Lernziel nützlich?",
                    "answer": "Es beschreibt eine beobachtbare Leistung, die beurteilt werden kann.",
                    "explanation": "Klare Ziele leiten Design und Bewertung."
                  },
                  {
                    "q": "Was sind Kirkpatricks vier Ebenen?",
                    "answer": "Reaktion, Lernen, Verhalten und Ergebnisse.",
                    "explanation": "Sie bewerten Schulungen von der unmittelbaren Reaktion bis hin zu den geschäftlichen Auswirkungen."
                  }
                ],
                "recap": [
                  "Entwerfen Sie Schulungen rund um die Leistung, nicht um die Inhaltsabdeckung.",
                  "Nutzen Sie Übung, Feedback und Transfer in den Job.",
                  "Bewerten Sie Lernen, Verhalten und Ergebnisse."
                ]
              }
            }
          ]
        },
        {
          "id": "master-3",
          "number": 3,
          "title": "Unternehmenstransformation",
          "duration": "4 Stunden",
          "summary": "Skalieren Sie Verbesserungen im gesamten Unternehmen mit DFSS, Änderungsmanagement, Kultur, Balanced Scorecards und Benchmarking.",
          "lessons": [
            {
              "id": "M3.1",
              "order": 1,
              "title": "Unternehmens-DFSS",
              "objective": "Setzen Sie Designmethoden in der gesamten Produkt-, Service- und Prozessentwicklung ein.",
              "content": {
                "why": "DFSS bietet den größten Nutzen, wenn es im gesamten Unternehmensportfolio verwaltet wird und nicht projektweise angewendet wird. Enterprise DFSS verbindet Designfähigkeiten mit Strategie, Lieferanten und Markteinführungsentscheidungen.",
                "what": "Enterprise DFSS wendet Design-for-Six-Sigma-Methoden für ein Portfolio neuer Produkte, Dienstleistungen und Prozesse an. Es nutzt Standard-DMADV- oder DFSS-Roadmaps, Stage Gates, Voice of the Customer, CTQ Flowdown, QFD, FMEA, DOE, Monte-Carlo-Simulation, Zuverlässigkeit und Design-for-X. Governance gleicht Geschwindigkeit, Risiko und Ressourcennutzung aus. Die Wiederverwendung von Wissen und die Lieferantenintegration verbessern die Konsistenz und die Markteinführungszeit.",
                "how": [
                  "Richten Sie das Designportfolio an der Strategie und den Kundenbedürfnissen aus.",
                  "Erstellen Sie eine Standard-DFSS-Roadmap und Gate-Kriterien.",
                  "Bauen Sie funktionsübergreifende Designteams und -fähigkeiten auf.",
                  "Übersetzen Sie VOC in CTQs und Designanforderungen.",
                  "Wenden Sie Risiko-, Experimentier-, Simulations- und Zuverlässigkeitsmethoden an.",
                  "Integrieren Sie Lieferanten und Fertigungs- oder Servicebetriebe frühzeitig.",
                  "Überprüfen Sie die Leistungsfähigkeit und erfassen Sie Erkenntnisse zur Wiederverwendung."
                ],
                "where": "Nutzen Sie Enterprise DFSS in Produktentwicklung, Servicedesign, Software, Gesundheitswesen und Kapitalprojekten. Beispiel: Ein Plattformteam verwendet gemeinsame CTQ- und FMEA-Standards für alle Produktvarianten und reduziert so doppelte Konstruktionsarbeiten und verspätete Ausfälle.",
                "when_not": "Wenden Sie nicht den gesamten DFSS-Apparat auf geringfügige Änderungen mit geringem Risiko an. Lassen Sie nicht zu, dass Tore und Dokumentation Innovationen behindern. Betrachten Sie DFSS nicht als Tool-Checkliste ohne Kunden- und Geschäftskontext.",
                "common_mistakes": [
                  "Ausführen von DFSS als isolierte Projekte ohne Portfolioansicht.",
                  "Verspätete oder schwache Voice-of-the-Customer-Arbeit.",
                  "Überspringen der Überprüfung und Wiederverwendung von Lektionen."
                ],
                "quick_check": [
                  {
                    "q": "Was ist Enterprise DFSS?",
                    "answer": "Anwendung von DFSS in einem Portfolio mit gemeinsamer Governance und Methoden.",
                    "explanation": "Es skaliert die Designfähigkeit über einzelne Projekte hinaus."
                  },
                  {
                    "q": "Warum Lieferanten frühzeitig einbinden?",
                    "answer": "Um Designrisiken, Nacharbeiten und Verzögerungen bei der Markteinführung zu reduzieren.",
                    "explanation": "Die Leistungsfähigkeit des Lieferanten wirkt sich auf die Machbarkeit und Qualität des Designs aus."
                  },
                  {
                    "q": "Was ist CTQ-Flowdown?",
                    "answer": "Kundenanforderungen in messbare Designanforderungen umsetzen.",
                    "explanation": "Es verbindet die Stimme des Kunden mit Designentscheidungen."
                  }
                ],
                "recap": [
                  "Verwalten Sie DFSS als Unternehmensportfolio mit gemeinsamen Standards.",
                  "Übersetzen Sie Kundenbedürfnisse in CTQs und Designanforderungen.",
                  "Überprüfen Sie die Leistungsfähigkeit und nutzen Sie Erkenntnisse projektübergreifend wieder."
                ]
              }
            },
            {
              "id": "M3.2",
              "order": 2,
              "title": "Organisatorischer Wandel",
              "objective": "Nutzen Sie Veränderungsmodelle, Stakeholder-Pläne und Verstärkung.",
              "content": {
                "why": "Große Transformationen verändern Rollen, Systeme und Machtverhältnisse. Eine technisch einwandfreie Bereitstellung kann immer noch scheitern, wenn die Leute die neue Art nicht verstehen, unterstützen oder nicht wissen, wie sie damit umgehen sollen.",
                "what": "Organisatorische Veränderungen bringen Führung, Kommunikation, Fähigkeiten, Anreize und Struktur in Einklang. Kotters Sequenz baut Dringlichkeit, eine Führungskoalition, eine Vision, Kommunikation, Ermächtigung, kurzfristige Erfolge, Konsolidierung und Verankerung auf. ADKAR diagnostiziert die individuelle Bereitschaft, und Lewins Modell beschreibt das Auftauen, Ändern und erneute Einfrieren. Skalierung erfordert das Engagement der mittleren Führungsebene und abgestimmte Leistungssysteme.",
                "how": [
                  "Entwickeln Sie klare Argumente für Veränderungen und eine überzeugende Vision.",
                  "Bilden Sie eine Koalition mit Autorität und Glaubwürdigkeit.",
                  "Bewerten Sie die Bereitschaft und den Widerstand der Stakeholder.",
                  "Kommunizieren Sie wiederholt über mehrere Kanäle.",
                  "Beziehen Sie Menschen ein und beseitigen Sie strukturelle Barrieren.",
                  "Erzielen Sie sichtbare kurzfristige Erfolge.",
                  "Verankern Sie Veränderungen in Rollen, Anreizen und Standardarbeit."
                ],
                "where": "Nutzen Sie organisatorische Veränderungen für Lean Six Sigma-Implementierungen, ERP- oder Technologie-Rollouts, Umstrukturierungen, Fusionen und neue Betriebsmodelle. Beispiel: Ein Unternehmen startet einen neuen Planungsprozess, ändert aber die Planeranreize nicht, sodass das Verhalten zu alten Prioritäten zurückkehrt.",
                "when_not": "Betrachten Sie Veränderungen nicht nur als Kommunikationsplan. Ignorieren Sie Anreize und Macht nicht. Erklären Sie nicht den Sieg nach dem Piloten.",
                "common_mistakes": [
                  "Schwaches oder fehlendes Sponsoring durch Führungskräfte.",
                  "Überspringen von mittleren Managern, die Einfluss auf die tägliche Arbeit haben.",
                  "Die Änderung konnte nach dem Start nicht verstärkt werden."
                ],
                "quick_check": [
                  {
                    "q": "Warum sind mittlere Führungskräfte bei Veränderungen kritisch?",
                    "answer": "Sie übersetzen die Richtung in die tägliche Arbeit und beeinflussen die Akzeptanz.",
                    "explanation": "Sie verbinden die Führungsabsicht mit der Realität an vorderster Front."
                  },
                  {
                    "q": "Was ist ein kurzfristiger Gewinn?",
                    "answer": "Ein sichtbares, glaubwürdiges frühes Ergebnis, das für Dynamik sorgt.",
                    "explanation": "Siege zeigen, dass der Wandel funktionieren kann."
                  },
                  {
                    "q": "Was bedeutet die Verankerung einer Veränderung?",
                    "answer": "Einbettung in Rollen, Anreize, Prozesse und Kultur.",
                    "explanation": "Durch die Verankerung wird ein Rückfall in alte Gewohnheiten verhindert."
                  }
                ],
                "recap": [
                  "Veränderungen erfordern Führung, Engagement, Fähigkeiten und Verstärkung.",
                  "Schaffen Sie Dringlichkeit, Koalitionen und sichtbare Erfolge.",
                  "Veränderungen in Systemen und Alltagsroutinen verankern."
                ]
              }
            },
            {
              "id": "M3.3",
              "order": 3,
              "title": "Kulturgebäude",
              "objective": "Machen Sie Verbesserung, Respekt und datenbasierte Entscheidungen zu einem Teil Ihrer täglichen Arbeit.",
              "content": {
                "why": "Ohne eine Kultur, die Problemlösung, Transparenz und Lernen unterstützt, verblassen Tools und Projekte. Die Kultur bestimmt, ob Verbesserungen zum täglichen Verhalten oder zu einem vorübergehenden Programm werden.",
                "what": "Kultur ist das Muster gemeinsamer Überzeugungen, Verhaltensweisen und Symbole. Es wird mehr durch Führungsverhalten, Routinen, Kennzahlen, Belohnungen, Einstellungen und Geschichten als durch Slogans geprägt. Eine Kultur der kontinuierlichen Verbesserung schätzt Kunden, Daten, Respekt vor Menschen, psychologische Sicherheit und das Lernen aus Fehlern. Tägliche Huddles, Gemba-Spaziergänge, A3-Denken und Standardarbeit für Führungskräfte machen die Kultur sichtbar und lehrbar.",
                "how": [
                  "Bewerten Sie aktuelle Überzeugungen und Verhaltensweisen anhand von Beweisen.",
                  "Definieren Sie die wenigen Verhaltensweisen, die die gewünschte Kultur ausdrücken.",
                  "Beauftragen Sie Führungskräfte, diese Verhaltensweisen sichtbar vorzuleben.",
                  "Passen Sie Kennzahlen, Anerkennung, Beförderung und Einstellung an.",
                  "Erstellen Sie tägliche Routinen, die das Lösen von Problemen fördern.",
                  "Lehren und coachen Sie die Verhaltensweisen durch Übung.",
                  "Messen Sie den Fortschritt und beheben Sie Inkonsistenzen."
                ],
                "where": "Nutzen Sie den Kulturaufbau bei Unternehmenstransformationen, Sicherheitsprogrammen, Qualitätssystemen und Fusionen. Beispiel: Führungskräfte fragen in Rezensionen zuerst nach schlechten Nachrichten, belohnen öffentlich die frühzeitige Problemerkennung und geben nicht mehr Einzelpersonen die Schuld für Systemausfälle.",
                "when_not": "Versuchen Sie nicht, die Kultur durch Plakate oder Slogans zu verändern. Kopieren Sie nicht die Kultur einer anderen Organisation, ohne sich an den Kontext anzupassen. Benutzen Sie die Kultur nicht als Entschuldigung für die Vermeidung struktureller Probleme.",
                "common_mistakes": [
                  "Führungskräfte sagen das eine und belohnen das andere.",
                  "Anerkennung, die der Brandbekämpfung Vorrang vor der Prävention einräumt.",
                  "Keine täglichen Routinen zur Verstärkung des gewünschten Verhaltens."
                ],
                "quick_check": [
                  {
                    "q": "Was prägt Kultur am stärksten?",
                    "answer": "Führungsverhalten, Routinen, Kennzahlen und Belohnungen.",
                    "explanation": "Was gemessen und belohnt wird, signalisiert, worauf es ankommt."
                  },
                  {
                    "q": "Warum ist psychologische Sicherheit Teil der Verbesserungskultur?",
                    "answer": "Menschen müssen in der Lage sein, Probleme und Fehler ohne Angst anzusprechen.",
                    "explanation": "Versteckte Probleme können nicht gelöst werden."
                  },
                  {
                    "q": "Was ist Führungsstandardwerk?",
                    "answer": "Eine dokumentierte Routine von Führungsverhalten, die das Betriebssystem stärkt.",
                    "explanation": "Es macht Kultur durch tägliches Handeln sichtbar."
                  }
                ],
                "recap": [
                  "Kultur entsteht durch Verhalten, Routinen und Systeme.",
                  "Führungskräfte müssen die gewünschten Verhaltensweisen vorleben und belohnen.",
                  "Nutzen Sie das tägliche Management, um die Verbesserungskultur sichtbar zu machen."
                ]
              }
            },
            {
              "id": "M3.4",
              "order": 4,
              "title": "Balanced Scorecard",
              "objective": "Verbinden Sie Finanz-, Kunden-, Prozess- und Lernmaßnahmen.",
              "content": {
                "why": "Finanzielle Maßnahmen gehören der Vergangenheit an. Eine Balanced Scorecard fügt Kunden-, Prozess- und Leistungskennzahlen hinzu, die zeigen, ob die Strategie umgesetzt wird und ob zukünftige Leistung aufgebaut wird.",
                "what": "Die Balanced Scorecard nutzt vier Perspektiven: Finanzen, Kunden, interne Prozesse sowie Lernen und Wachstum. Eine Strategiekarte zeigt Ursache-Wirkungs-Zusammenhänge zwischen Zielen. Zu jedem Ziel gehören Maßnahmen, Ziele und Initiativen. Führende Maßnahmen prognostizieren zukünftige Ergebnisse, während nachlaufende Maßnahmen die Ergebnisse bestätigen. Die Scorecard sollte kaskadiert und überprüft werden und nicht als lange Liste unabhängiger KPIs verwendet werden.",
                "how": [
                  "Klären Sie die Strategie und die strategischen Themen.",
                  "Definieren Sie Ziele in jeder Perspektive.",
                  "Erstellen Sie eine Strategiekarte mit kausalen Zusammenhängen.",
                  "Wählen Sie einige Maßnahmen, Ziele und Initiativen aus.",
                  "Kaskadieren Sie Scorecards an Einheiten und Teams.",
                  "Überprüfen Sie die Ergebnisse und lernen Sie in regelmäßigen Abständen.",
                  "Passen Sie Ziele und Initiativen an die Weiterentwicklung der Strategie an."
                ],
                "where": "Nutzen Sie die Balanced Scorecard in Unternehmen, öffentlichen Einrichtungen, gemeinnützigen Organisationen und Betrieben mit mehreren Standorten. Beispiel: Ein Krankenhaus verknüpft Personalschulung und Sicherheitskultur mit Prozesszuverlässigkeit, Patientenerfahrung und finanzieller Leistung.",
                "when_not": "Verwandeln Sie die Scorecard nicht in einen KPI-Dump. Ignorieren Sie nicht die kausale Logik und Strategie. Machen Sie die Maßnahmen nicht zu kompliziert und verwenden Sie nicht nur finanzielle Ergebnisse.",
                "common_mistakes": [
                  "Zu viele Maßnahmen ohne strategische Ausrichtung.",
                  "Keine Verbindung zwischen Früh- und Spätindikatoren.",
                  "Überprüfen Sie die Scorecard, ohne Entscheidungen zu treffen."
                ],
                "quick_check": [
                  {
                    "q": "Was sind die vier Balanced-Scorecard-Perspektiven?",
                    "answer": "Finanzen, Kunden, interne Prozesse sowie Lernen und Wachstum.",
                    "explanation": "Sie gleichen die Ergebnisse mit den Treibern der zukünftigen Leistung aus."
                  },
                  {
                    "q": "Was ist eine Strategiekarte?",
                    "answer": "Ein Ursache-Wirkungs-Diagramm, das strategische Ziele verknüpft.",
                    "explanation": "Es zeigt, wie Fähigkeiten und Prozesse zu Ergebnissen führen."
                  },
                  {
                    "q": "Was ist der Unterschied zwischen führenden und nacheilenden Maßnahmen?",
                    "answer": "Führende Maßnahmen prognostizieren; Nachlaufende Maßnahmen bestätigen die Ergebnisse.",
                    "explanation": "Beides wird benötigt, um die Leistung zu verwalten."
                  }
                ],
                "recap": [
                  "Bringen Sie finanzielle und nichtfinanzielle Maßnahmen in Einklang.",
                  "Verwenden Sie eine Strategiekarte, um kausale Logik darzustellen.",
                  "Halten Sie die Scorecard fokussiert und überprüfen Sie sie auf Entscheidungen."
                ]
              }
            },
            {
              "id": "M3.5",
              "order": 5,
              "title": "Benchmarking",
              "objective": "Vergleichen Sie die Leistung mit erstklassigen Prozessen und passen Sie Praktiken an.",
              "content": {
                "why": "Benchmarking deckt Leistungslücken und bessere Praktiken auf, aber das Kopieren von Zahlen ohne Verständnis des Kontexts kann zu schlechten Zielen und fehlgeschlagener Nachahmung führen.",
                "what": "Benchmarking vergleicht Prozesse, Praktiken und Ergebnisse mit internen oder externen Referenzen. Zu den Typen gehören intern, wettbewerbsfähig, funktional und generisch. Eine disziplinierte Studie definiert den Prozess, misst den Ist-Zustand, wählt vergleichbare Partner aus, sammelt valide Daten, analysiert Lücken, passt Praktiken an, implementiert und überprüft. Normalisierung und Prozessverständnis verhindern Vergleiche zwischen Äpfeln und Birnen.",
                "how": [
                  "Definieren Sie den Prozess, den Umfang und die Leistungskennzahlen.",
                  "Schaffen Sie eine verlässliche interne Baseline.",
                  "Wählen Sie vergleichbare Benchmark-Partner aus.",
                  "Sammeln Sie Daten zu Ergebnissen und ermöglichenden Praktiken.",
                  "Normalisieren und analysieren Sie die Lücken.",
                  "Passen Sie Praktiken an, anstatt sie blind zu kopieren.",
                  "Pilotieren, implementieren und messen Sie die Verbesserung."
                ],
                "where": "Nutzen Sie Benchmarking in der Fertigung, im Gesundheitswesen, im Dienstleistungsbetrieb, in Lieferketten und im öffentlichen Dienst. Beispiel: Vergleichen Sie die Zeit zwischen der Tür und dem Arzt in der Notaufnahme nach Anpassung an die Patientenschärfe und den Fallmix.",
                "when_not": "Benchmarken Sie keine Prozesse, die nicht vergleichbar sind. Bleiben Sie nicht bei einer numerischen Lücke stehen, ohne die Vorgehensweisen zu verstehen. Kopieren Sie nicht die Lösung einer anderen Organisation, ohne sich an lokale Einschränkungen anzupassen.",
                "common_mistakes": [
                  "Vergleich nicht normalisierter Metriken.",
                  "Verwendung minderwertiger oder selbst gemeldeter Daten.",
                  "Den Besuch vor Ort als Ergebnis und nicht als Umsetzung betrachten."
                ],
                "quick_check": [
                  {
                    "q": "Was ist funktionales Benchmarking?",
                    "answer": "Vergleich eines ähnlichen Prozesses in verschiedenen Branchen oder Organisationen.",
                    "explanation": "Es sucht nach Best Practices, die über die direkte Konkurrenz hinausgehen."
                  },
                  {
                    "q": "Warum Benchmark-Daten normalisieren?",
                    "answer": "Um Vergleiche trotz unterschiedlicher Größenordnung, Mischung oder Bedingungen fair zu gestalten.",
                    "explanation": "Durch die Normalisierung werden irreführende Lücken verhindert."
                  },
                  {
                    "q": "Was soll nach einer Benchmark-Studie passieren?",
                    "answer": "Passen Sie die Praxis an, testen Sie sie, implementieren Sie sie und messen Sie sie.",
                    "explanation": "Lernen muss in die Tat umgesetzt werden."
                  }
                ],
                "recap": [
                  "Vergleichen Sie sowohl die Ergebnisse als auch die ermöglichenden Praktiken.",
                  "Stellen Sie Vergleichbarkeit und Datenqualität sicher.",
                  "Anpassen und umsetzen, statt blind zu kopieren."
                ]
              }
            }
          ]
        },
        {
          "id": "master-4",
          "number": 4,
          "title": "Analytik und Industrie 4.0",
          "duration": "2 Stunden",
          "summary": "Integrieren Sie moderne Analysen, Automatisierung und Datenverwaltung in die Verbesserungsarbeit.",
          "lessons": [
            {
              "id": "M4.1",
              "order": 1,
              "title": "Analytik und Industrie 4.0",
              "objective": "Nutzen Sie Sensoren, Dashboards, Vorhersagemodelle und Automatisierung.",
              "content": {
                "why": "Sensoren, vernetzte Systeme und große Datensätze schaffen neue Möglichkeiten zur Vorhersage und Steuerung der Leistung. Master Black Belts müssen Analysen mit realen Prozessproblemen verknüpfen und die Risiken beherrschen.",
                "what": "Industrie 4.0 umfasst IoT, cyber-physische Systeme, Cloud-Plattformen, digitale Zwillinge, Automatisierung und KI oder maschinelles Lernen. Die Analytik reicht von deskriptiv und diagnostisch bis hin zu prädiktiv und präskriptiv. Eine zuverlässige Datenpipeline, Datenqualität, Modellvalidierung, Bereitstellung und Überwachung sind erforderlich. Betriebstechnik und Informationstechnik müssen sicher zusammenwachsen. Analysen sollten eine definierte Entscheidung unterstützen und nicht als Technologieschaufenster dienen.",
                "how": [
                  "Definieren Sie das Problem, die Entscheidung und den Wert, um den es geht.",
                  "Bewerten Sie Datenverfügbarkeit, Qualität und Governance.",
                  "Wählen Sie deskriptive, prädiktive oder präskriptive Analyse.",
                  "Pilotieren Sie mit Prozessexperten und validieren Sie das Modell.",
                  "Bereitstellung mit Überwachung, Wartung und Sicherheit.",
                  "Messen Sie die geschäftlichen Auswirkungen und skalieren Sie, was funktioniert.",
                  "Verwalten Sie Datenschutz, Voreingenommenheit, Sicherheit und Änderungsakzeptanz."
                ],
                "where": "Nutzen Sie Analysen und Industrie 4.0 für vorausschauende Wartung, visionäre Inspektion, Bedarfsprognose, Lieferkettenoptimierung und klinische Risikovorhersage. Beispiel: Sensordaten sagen einen Geräteausfall voraus, aber auch der Wartungsprozess und das Ersatzteilsystem müssen sich ändern, damit die Vorhersage einen Wert schafft.",
                "when_not": "Verwenden Sie erweiterte Analysen nicht für ein einfaches Problem, das mit Standardtools gelöst werden kann. Ignorieren Sie nicht schlechte Datenqualität oder Prozesskenntnisse. Stellen Sie keine Modelle ohne Überwachung und Governance bereit.",
                "common_mistakes": [
                  "Technologieorientierte Projekte ohne Entscheidung oder Wertfall.",
                  "Trainingsmodelle anhand voreingenommener oder unzuverlässiger Daten.",
                  "Kein Plan für Modellpflege oder Betriebseinführung."
                ],
                "quick_check": [
                  {
                    "q": "Was ist Predictive Analytics?",
                    "answer": "Verwendung von Daten zur Abschätzung zukünftiger Ergebnisse oder Risiken.",
                    "explanation": "Vorhersagemodelle unterstützen Entscheidungen, bevor Ereignisse eintreten."
                  },
                  {
                    "q": "Warum ist Data Governance so wichtig?",
                    "answer": "Es gewährleistet Datenqualität, Sicherheit, Datenschutz und eine angemessene Nutzung.",
                    "explanation": "Modelle sind nur so vertrauenswürdig wie ihre Daten und Kontrollen."
                  },
                  {
                    "q": "Was ist ein digitaler Zwilling?",
                    "answer": "Ein virtuelles Modell einer physischen Anlage oder eines Prozesses, das zur Überwachung und Simulation verwendet wird.",
                    "explanation": "Digitale Zwillinge unterstützen Vorhersage, Optimierung und Tests."
                  }
                ],
                "recap": [
                  "Beginnen Sie die Analyse mit einer Entscheidung und einem Wertfall.",
                  "Stellen Sie Datenqualität, Validierung, Sicherheit und Governance sicher.",
                  "Verbinden Sie Modelle, um Veränderungen und Geschäftsergebnisse zu verarbeiten."
                ]
              }
            },
            {
              "id": "M4.2",
              "order": 2,
              "title": "Datenverwaltung und Ethik",
              "objective": "Schützen Sie die Privatsphäre, stellen Sie die Datenqualität sicher und nutzen Sie Analysen verantwortungsbewusst.",
              "content": {
                "why": "Analysen und Verbesserungen hängen von Daten ab, denen Menschen vertrauen und die sie verantwortungsvoll nutzen können. Schlechte Regierungsführung führt zu Fehlentscheidungen, Datenschutzverletzungen, voreingenommenen Modellen und Glaubwürdigkeitsverlust.",
                "what": "Data Governance definiert Eigentum, Verwaltung, Qualitätsstandards, Zugriff, Aufbewahrung und Lebenszykluskontrollen. Datenethik befasst sich mit Datenschutz, Einwilligung, Fairness, Transparenz, Rechenschaftspflicht und menschlicher Aufsicht. Zu den Rollen gehören Dateneigentümer, Verwalter und Verwalter. Vorschriften wie DSGVO und HIPAA legen gesetzliche Anforderungen fest, aber ethische Praktiken gehen über die Mindesteinhaltung hinaus. Modelle sollten für die Entscheidung erklärbar genug sein und auf Verzerrung und Drift überwacht werden.",
                "how": [
                  "Inventarisieren Sie Daten und definieren Sie ihren Zweck und ihre Sensibilität.",
                  "Weisen Sie Eigentum, Verwaltung und Zugriffsverantwortung zu.",
                  "Legen Sie Qualitäts-, Aufbewahrungs- und Metadatenstandards fest.",
                  "Führen Sie Datenschutz- und ethische Folgenabschätzungen durch.",
                  "Testen Sie auf Verzerrungen und überwachen Sie die Modellleistung.",
                  "Dokumentieren Sie Entscheidungen und stellen Sie bei Bedarf eine menschliche Überprüfung bereit.",
                  "Überprüfen Sie die Einhaltung und schulen Sie die Organisation."
                ],
                "where": "Nutzen Sie Data Governance und Ethik in den Bereichen Gesundheitswesen, Finanzen, Personalwesen, Kundenanalysen und sicherheitskritische Systeme. Beispiel: Ein Einstellungsmodell muss auf unterschiedliche Auswirkungen getestet, den Entscheidungsträgern erklärt und einer menschlichen Überprüfung unterzogen werden.",
                "when_not": "Behandeln Sie Governance nicht als reines IT-Thema. Sammeln Sie keine Daten ohne definierten Zweck oder Einwilligung. Gehen Sie nicht davon aus, dass ein Modell fair ist, weil es neutrale Variablen verwendet.",
                "common_mistakes": [
                  "Kein klarer Dateneigentum.",
                  "Alles sammeln und auf unbestimmte Zeit aufbewahren.",
                  "Einsatz undurchsichtiger Modelle ohne Verantwortung."
                ],
                "quick_check": [
                  {
                    "q": "Was ist Datenverantwortung?",
                    "answer": "Verantwortung für Datenqualität, Bedeutung und angemessene Verwendung.",
                    "explanation": "Stewards verwalten Daten im Namen des Unternehmens."
                  },
                  {
                    "q": "Warum Modelle auf Voreingenommenheit testen?",
                    "answer": "Um unfaire oder schädliche Ergebnisse gruppenübergreifend zu erkennen.",
                    "explanation": "Voreingenommene Daten oder Designs können zu diskriminierenden Entscheidungen führen."
                  },
                  {
                    "q": "Was ist menschliche Aufsicht in der Analytik?",
                    "answer": "Eine Person überprüft oder kann daraus resultierende Modellentscheidungen außer Kraft setzen.",
                    "explanation": "Aufsicht unterstützt Verantwortung und Sicherheit."
                  }
                ],
                "recap": [
                  "Steuern Sie Daten durch Eigentums-, Qualitäts-, Zugriffs- und Lebenszykluskontrollen.",
                  "Wenden Sie Privatsphäre, Fairness, Transparenz und Verantwortlichkeit an.",
                  "Überwachen Sie Modelle und machen Sie den Menschen für Folgeentscheidungen verantwortlich."
                ]
              }
            }
          ]
        },
        {
          "id": "master-5",
          "number": 5,
          "title": "Standards und Zertifizierung",
          "duration": "2,5 Stunden",
          "summary": "Verstehen Sie die Standards und ethischen Erwartungen hinter der Zertifizierung und Bereitstellung.",
          "lessons": [
            {
              "id": "M5.1",
              "order": 1,
              "title": "ISO 13053",
              "objective": "Erklären Sie den ISO-Standard für Six Sigma-Methoden und -Rollen.",
              "content": {
                "why": "Globale Organisationen benötigen eine gemeinsame Referenz für Six Sigma-Rollen, -Methoden und -Qualität. ISO 13053 bietet internationale Leitlinien, die Konsistenz und Glaubwürdigkeit unterstützen.",
                "what": "ISO 13053 behandelt die Grundlagen von Six Sigma sowie DMAIC-Tools und -Techniken. Es umfasst Rollen, Kompetenzen, Projektauswahl, Bereitstellung, Prozessmessung, Analyse, Verbesserung und Kontrolle. Der Standard ist eine Orientierungshilfe und keine Garantie für Geschäftsergebnisse. Es kann verwendet werden, um Schulungen, Governance und Projekterwartungen standort- und lieferantenübergreifend aufeinander abzustimmen.",
                "how": [
                  "Ordnen Sie aktuelle Praktiken dem Standard zu.",
                  "Identifizieren Sie Lücken in Rollen, Methoden und Governance.",
                  "Stimmen Sie die Schulungs- und Zertifizierungserwartungen aufeinander ab.",
                  "Dokumentieren Sie den Einsatzansatz und die Nachweise.",
                  "Bilden Sie Führungskräfte und Praktiker nach dem Standard aus.",
                  "Überprüfen Sie die Ausrichtung und verbessern Sie das System.",
                  "Überprüfen Sie den Standard, während er sich weiterentwickelt."
                ],
                "where": "Nutzen Sie ISO 13053 bei multinationalen Einsätzen, Lieferantenqualitätsprogrammen, regulierten Branchen und Organisationen, die eine gemeinsame Verbesserungssprache suchen. Beispiel: Ein Unternehmen gleicht Belt-Lehrpläne und Projekt-Gates über Regionen hinweg an und verwendet dabei den Standard als Referenz.",
                "when_not": "Führen Sie die Ausrichtung nicht als Papierkram-Übung durch. Lassen Sie nicht zu, dass der Standard das Urteilsvermögen oder die Kundenorientierung ersetzt. Gehen Sie nicht davon aus, dass für jede Organisation ein Implementierungsmodell geeignet ist.",
                "common_mistakes": [
                  "Konzentration auf ein Zertifikat statt auf Fähigkeiten.",
                  "Dokumentation erstellen, ohne die Praxis zu ändern.",
                  "Missverständnis des Standards als vorschreibendes Rezept."
                ],
                "quick_check": [
                  {
                    "q": "Was deckt ISO 13053 ab?",
                    "answer": "Six Sigma-Grundlagen, Rollen, DMAIC, Tools und Bereitstellungsanleitungen.",
                    "explanation": "Es bietet eine internationale Referenz für die Six Sigma-Praxis."
                  },
                  {
                    "q": "Ist ISO 13053 eine Ergebnisgarantie?",
                    "answer": "Nein, es ist eine Anleitung für eine konsequente Praxis.",
                    "explanation": "Geschäftsergebnisse hängen von der Ausführung und dem Kontext ab."
                  },
                  {
                    "q": "Warum einen gemeinsamen Standard für alle Standorte verwenden?",
                    "answer": "Sprache, Rollen und Qualitätserwartungen aufeinander abstimmen.",
                    "explanation": "Konsistenz unterstützt Vergleich und Governance."
                  }
                ],
                "recap": [
                  "ISO 13053 bietet internationale Six Sigma-Leitlinien.",
                  "Verwenden Sie es, um Rollen, Methoden und Bereitstellung abzustimmen.",
                  "Konzentrieren Sie sich auf Fähigkeiten und Ergebnisse, nicht auf Papierkram."
                ]
              }
            },
            {
              "id": "M5.2",
              "order": 2,
              "title": "ASQ- und IASSC-Standards",
              "objective": "Vergleichen Sie Zertifizierungsstellen, BoKs und Prüfungserwartungen.",
              "content": {
                "why": "Berufsverbände definieren Wissensbestände und Zertifizierungsstandards. Ihr Verständnis hilft Unternehmen dabei, glaubwürdige Kompetenzen aufzubauen und Schulungsoptionen zu vergleichen.",
                "what": "ASQ bietet Zertifizierungen wie Certified Six Sigma Green Belt, Black Belt und Manager of Quality/Organizational Excellence. IASSC bietet Green- und Black-Belt-Zertifizierungen mit eigenem Wissensbestand an. Die Programme unterscheiden sich in Bezug auf Teilnahmeberechtigung, Prüfungsinhalte, Projektanforderungen und Rezertifizierung. Durch die Zertifizierung werden Kenntnisse und in einigen Programmen auch Projekterfahrung nachgewiesen, sie allein beweist jedoch nicht die geschäftliche Auswirkung.",
                "how": [
                  "Wählen Sie den Standard aus, der den Anforderungen der Organisation entspricht.",
                  "Ordnen Sie den Lehrplan dem Wissensbestand zu.",
                  "Bewerten Sie sowohl Wissen als auch praktische Anwendung.",
                  "Wählen Sie eine glaubwürdige Schulung und Aufsicht.",
                  "Erfordern Sie gegebenenfalls reale Projekte und Beweise.",
                  "Aufrechterhaltung der Zertifizierung und Weiterentwicklung.",
                  "Bewerten Sie, ob zertifizierte Praktiker Ergebnisse liefern."
                ],
                "where": "Nutzen Sie diese Standards für Einstellungen, interne Zertifizierungen, Schulungsbeschaffung und Karrierewege. Beispiel: Ein Unternehmen ordnet seinen Green Belt-Lehrplan den ASQ- und IASSC-Themen zu und fügt dann eine echte Projekt- und Coaching-Anforderung hinzu.",
                "when_not": "Betrachten Sie die Zertifizierung nicht als Beweis für den Projekterfolg. Gehen Sie nicht davon aus, dass die Standards identisch sind. Kaufen Sie keine Zertifizierung ohne praktische Prüfung.",
                "common_mistakes": [
                  "Betrieb einer Zertifizierungsfabrik.",
                  "Testen Sie nur das Auswendiglernen.",
                  "Ignorieren von Rezertifizierungen und kontinuierlicher Weiterentwicklung."
                ],
                "quick_check": [
                  {
                    "q": "Was definiert ein Wissensbestand?",
                    "answer": "Die für eine Zertifizierung erwarteten Themen und Kompetenzen.",
                    "explanation": "Es leitet den Lehrplan und die Prüfungsgestaltung."
                  },
                  {
                    "q": "Warum Projektnachweise zur Zertifizierung hinzufügen?",
                    "answer": "Um zu bestätigen, dass Wissen in der Praxis angewendet werden kann.",
                    "explanation": "Prüfungen allein beweisen noch keine Projektfähigkeit."
                  },
                  {
                    "q": "Sind ASQ- und IASSC-Zertifizierungen identisch?",
                    "answer": "Nein, sie haben unterschiedliche Anforderungen und Kenntnisse.",
                    "explanation": "Organisationen sollten sie sorgfältig vergleichen."
                  }
                ],
                "recap": [
                  "Professionelle Standards definieren Wissens- und Zertifizierungserwartungen.",
                  "Kombinieren Sie Wissensbewertung mit praktischen Beweisen.",
                  "Bewerten Sie die Zertifizierung nach Fähigkeiten und Ergebnissen."
                ]
              }
            },
            {
              "id": "M5.3",
              "order": 3,
              "title": "Zertifizierung und Ethik",
              "objective": "Wenden Sie die Regeln für Wahrhaftigkeit, Kompetenz, Vertraulichkeit und Interessenkonflikte an.",
              "content": {
                "why": "Eine Zertifizierung schafft nur dann Vertrauen, wenn sie streng und ethisch ist. Eine schwache Zertifizierung schadet der Glaubwürdigkeit und kann zur Verbreitung schlechter Praktiken führen.",
                "what": "Die Zertifizierung umfasst in der Regel Eignung, Schulung, Prüfung, Projektnachweise und Rezertifizierung. Ethik umfasst Kompetenzgrenzen, Vertraulichkeit, Interessenkonflikte, Datenintegrität, wahrheitsgemäße Behauptungen, Sicherheit und faire Behandlung. Berufsrechtliche Vorschriften verlangen von Praktikern, dass sie im Rahmen ihres Fachwissens arbeiten und falsche Darstellungen von Ergebnissen oder Qualifikationen vermeiden. Eine Zertifizierungsstelle benötigt klare Standards, eine unabhängige Bewertung und einen Prozess für Beschwerden oder Verstöße.",
                "how": [
                  "Definieren Sie Berechtigungs-, Kompetenz- und Nachweisanforderungen.",
                  "Nutzen Sie valide und verlässliche Einschätzungen.",
                  "Überprüfen Sie Projekte und Referenzen.",
                  "Veröffentlichen Sie einen Ethikkodex und eine Richtlinie zu Interessenkonflikten.",
                  "Bieten Sie Rezertifizierung und Weiterbildung an.",
                  "Gehen Sie Beschwerden fair nach.",
                  "Veröffentlichen Sie Ergebnisse und verbessern Sie das Programm."
                ],
                "where": "Nutzen Sie Zertifizierungs- und Ethikstandards für interne Gürtelprogramme, externe Zertifizierungen, Lieferantenqualifizierung und berufliche Entwicklung. Beispiel: Ein Gürtelkandidat muss ein reales Projekt mit einer verifizierten Ausgangslage, Analyse, Kontrollplan und Sponsorenbestätigung einreichen.",
                "when_not": "Zertifizieren Sie für Stellen, für die eine Bewerbung erforderlich ist, nicht nur die Prüfungsleistung. Tolerieren Sie keine betrügerischen Projektansprüche. Üben Sie nicht außerhalb Ihrer Kompetenz.",
                "common_mistakes": [
                  "Zertifizierung ohne verifizierte Projektnachweise.",
                  "Keine Rezertifizierung oder Weiterentwicklung.",
                  "Ignorieren von Interessenkonflikten oder ethischen Beschwerden."
                ],
                "quick_check": [
                  {
                    "q": "Warum sind Projektnachweise bei der Zertifizierung wichtig?",
                    "answer": "Es zeigt, dass Wissen auf ein reales Problem angewendet wurde.",
                    "explanation": "Die Bewerbung unterscheidet sich von der Prüfungsleistung."
                  },
                  {
                    "q": "Was bedeutet Arbeiten innerhalb der Kompetenz?",
                    "answer": "Üben Sie nur dort, wo Sie über das nötige Wissen und Können verfügen, um zuverlässig zu sein.",
                    "explanation": "Es schützt Kunden und den Berufsstand."
                  },
                  {
                    "q": "Warum eine Rezertifizierung?",
                    "answer": "Um sicherzustellen, dass die Praktiker ihr Wissen und ihre Fähigkeiten auf dem neuesten Stand halten.",
                    "explanation": "Methoden und Standards entwickeln sich im Laufe der Zeit weiter."
                  }
                ],
                "recap": [
                  "Die Zertifizierung erfordert eine strenge Bewertung und eine verifizierte Anwendung.",
                  "Ethik schützt Kunden, Daten und professionelle Glaubwürdigkeit.",
                  "Rezertifizierung fordern und Standards durchsetzen."
                ]
              }
            }
          ]
        },
        {
          "id": "master-6",
          "number": 6,
          "title": "Führung und Wert",
          "duration": "3 Stunden",
          "summary": "Leiten Sie eine Bereitstellung, beweisen Sie den Wert und sorgen Sie für nachhaltige Verbesserungen über einzelne Projekte hinaus.",
          "lessons": [
            {
              "id": "M6.1",
              "order": 1,
              "title": "Führung ändern",
              "objective": "Führen Sie Führungskräfte durch Widerstand, Politik und konkurrierende Prioritäten.",
              "content": {
                "why": "Change Leadership ist nicht dasselbe wie Projektmanagement. Führungskräfte müssen Vertrauen schaffen, neues Verhalten vorleben und Aufmerksamkeit aufrechterhalten, wenn Verbesserungen schwierig werden.",
                "what": "Change Leadership schafft Dringlichkeit, eine überzeugende Vision, eine starke Koalition und emotionales Engagement. Es kommuniziert sowohl durch Taten als auch durch Worte, beseitigt Barrieren und verteilt die Führung auf alle Ebenen. Führungskräfte erzählen eine glaubwürdige Geschichte, treffen symbolische Entscheidungen und bleiben sichtbar. Sie bewältigen Widerstand mit Empathie und Beweisen und nicht allein mit Autorität.",
                "how": [
                  "Schaffen Sie klare Argumente für Veränderungen und eine gemeinsame Vision.",
                  "Bilden Sie eine Koalition mit Glaubwürdigkeit und Einfluss.",
                  "Kommunizieren Sie konsequent und hören Sie aktiv zu.",
                  "Modellieren Sie die Verhaltensweisen und Entscheidungen, die Sie erwarten.",
                  "Strukturelle und politische Barrieren beseitigen.",
                  "Feiern Sie Fortschritte und lernen Sie aus Rückschlägen.",
                  "Verankern Sie Veränderungen in Systemen, Rollen und Routinen."
                ],
                "where": "Nutzen Sie Change Leadership bei Transformationen, Fusionen, digitalen Rollouts, Sicherheitsprogrammen und kulturellen Veränderungen. Beispiel: Ein Werksleiter nimmt an den täglichen Besprechungen teil, fragt zuerst nach schlechten Nachrichten und geht den vom Bediener aufgestellten Hindernissen nach.",
                "when_not": "Verlassen Sie sich nicht allein auf Autorität und Compliance. Delegieren Sie die Änderung nicht an ein Projektteam ohne sichtbare Unterstützung. Ignorieren Sie Emotionen und Verlust nicht.",
                "common_mistakes": [
                  "Inkonsistente Botschaften zwischen Worten und Taten.",
                  "Aufmerksamkeit der Führung, die nach der Einführung verschwindet.",
                  "Widerstand als Illoyalität und nicht als Information behandeln."
                ],
                "quick_check": [
                  {
                    "q": "Warum müssen Führungskräfte den Wandel vorleben?",
                    "answer": "Menschen achten mehr auf Verhalten als auf Ankündigungen.",
                    "explanation": "Glaubwürdigkeit hängt vom konsequenten Handeln ab."
                  },
                  {
                    "q": "Was ist verteilte Führung?",
                    "answer": "Change Leadership wird über alle Ebenen und Funktionen hinweg geteilt.",
                    "explanation": "Es weitet die Eigenverantwortung über das Führungsteam hinaus aus."
                  },
                  {
                    "q": "Wie sollten Führungskräfte mit Widerstand umgehen?",
                    "answer": "Als Informationen, die es zu verstehen und anzusprechen gilt, nicht einfach nur zu unterdrücken.",
                    "explanation": "Widerstand offenbart oft echte Barrieren oder Bedenken."
                  }
                ],
                "recap": [
                  "Leiten Sie Veränderungen durch Vision, Glaubwürdigkeit und sichtbares Verhalten.",
                  "Bilden Sie Koalitionen und verteilen Sie Eigentum.",
                  "Halten Sie die Aufmerksamkeit aufrecht und verankern Sie die Veränderung."
                ]
              }
            },
            {
              "id": "M6.2",
              "order": 2,
              "title": "ROI und Nutzenrealisierung",
              "objective": "Verfolgen Sie Kosten, Nutzen, Cashflow und Wert im Zeitverlauf.",
              "content": {
                "why": "Ein Projekt ist nicht wertvoll, weil es pünktlich abgeschlossen wird; Es ist wertvoll, wenn die versprochenen Vorteile gemessen, realisiert und nachhaltig sind. Durch die Realisierung der Vorteile bleibt die Verbesserung mit dem Geschäftsfall verbunden.",
                "what": "Das Benefits-Realisierungsmanagement identifiziert Vorteile, definiert, wie sie gemessen werden, weist Eigentümer zu, verfolgt den Fortschritt und bestätigt die Ergebnisse nach der Implementierung. In einem Leistungsregister werden Ausgangslage, Ziel, Zeitpunkt, Eigentümer und Nachweise erfasst. Vorteile können harte Einsparungen, weiche Einsparungen, Kostenvermeidung, Kapazitätsfreigabe, Risikominderung oder Kundenergebnisse sein. Outputs sind Ergebnisse; Ergebnisse sind Leistungsänderungen; Nutzen ist der messbare Wert, der geschaffen wird.",
                "how": [
                  "Definieren Sie Vor- und Nachteile im Projektauftrag.",
                  "Legen Sie eine validierte Basislinie und Messmethode fest.",
                  "Weisen Sie einen Vorteilseigentümer und einen Umsetzungsplan zu.",
                  "Überprüfen Sie Nutzenprognosen an den Projekttoren.",
                  "Messen Sie die tatsächlichen Ergebnisse nach der Implementierung.",
                  "Vereinbaren Sie die Finanzen und beheben Sie Defizite.",
                  "Behalten Sie die Kontrolle und das Eigentum nach der Übergabe bei."
                ],
                "where": "Nutzen Sie die Nutzenrealisierung für Portfolios, Transformationen, Technologieprojekte und einzelne DMAIC-Projekte. Beispiel: Die reduzierten Fehlerkosten werden sechs Monate nach Projektabschluss verfolgt, um zu bestätigen, dass die Einsparungen das Budget erreichen.",
                "when_not": "Zählen Sie nicht den theoretischen Nutzen, der das Unternehmen nie erreicht. Stoppen Sie die Nachverfolgung nicht bei Projektabschluss. Zählen Sie nicht den gleichen Nutzen projektübergreifend doppelt.",
                "common_mistakes": [
                  "Kein Vorteilseigentümer nach Projektabschluss.",
                  "Keine Basislinie oder Beweisspur.",
                  "Weiche Ersparnisse als garantiertes Bargeld behandeln."
                ],
                "quick_check": [
                  {
                    "q": "Was ist der Unterschied zwischen einem Output und einem Ergebnis?",
                    "answer": "Eine Ausgabe ist ein Liefergegenstand; Ein Ergebnis ist eine Änderung der Leistung oder des Verhaltens.",
                    "explanation": "Vorteile entstehen durch Ergebnisse, nicht nur durch Ergebnisse."
                  },
                  {
                    "q": "Warum einen Vorteilseigentümer zuweisen?",
                    "answer": "Jemanden dafür verantwortlich machen, den Nutzen zu verfolgen und zu realisieren.",
                    "explanation": "Eigentum verhindert, dass Vorteile nach der Einführung verschwinden."
                  },
                  {
                    "q": "Was sollte ein Leistungsregister enthalten?",
                    "answer": "Ausgangswert, Ziel, Zeitpunkt, Eigentümer und Belege für jeden Nutzen.",
                    "explanation": "Es macht die Nutzenrealisierung überprüfbar und sichtbar."
                  }
                ],
                "recap": [
                  "Verwalten Sie die Vorteile von der Grundlinie bis zur Realisierung.",
                  "Weisen Sie Eigentümer zu und verfolgen Sie die Ergebnisse nach Projektabschluss.",
                  "Bringen Sie beanspruchte Leistungen mit Finanzen und Beweisen in Einklang."
                ]
              }
            },
            {
              "id": "M6.3",
              "order": 3,
              "title": "Schlussstein: Einen Einsatz leiten",
              "objective": "Erstellen Sie eine Bereitstellungs-Roadmap, ein Governance-Modell und einen Messplan.",
              "content": {
                "why": "Die Leitung einer Bereitstellung erfordert die Integration von Strategie, Governance, Portfolio, Fähigkeiten, Veränderungen und Vorteilen. Der Schlussstein prüft, ob ein Master Black Belt ein System aufbauen und nicht nur ein Projekt durchführen kann.",
                "what": "Eine Bereitstellungs-Roadmap bewertet Reife und Bereitschaft, richtet das Programm auf die Strategie aus, definiert Governance und Rollen, wählt ein ausgewogenes Portfolio aus, baut Fähigkeiten auf, standardisiert Methoden und verwaltet Kultur und Veränderungen. Die Bereitstellung umfasst in der Regel Mobilisierung, Design, Pilotierung, Skalierung und Aufrechterhaltung. Der Erfolg hängt von Sponsoring, fähigen Menschen, sinnvoller Messung und Verstärkung ab.",
                "how": [
                  "Bewerten Sie die organisatorische Bereitschaft, Reife und strategische Prioritäten.",
                  "Sichern Sie sich ein Mandat und bilden Sie eine Koalition.",
                  "Entwerfen Sie Governance, Rollen, Standards und Portfoliokriterien.",
                  "Pilot mit fähigen Teams und sichtbarem Sponsoring.",
                  "Bauen Sie Fähigkeiten durch Schulung, Coaching und Übung auf.",
                  "Skalieren Sie, was funktioniert, und passen Sie es an die örtlichen Gegebenheiten an.",
                  "Überprüfen Sie die Ergebnisse, halten Sie Routinen aufrecht und aktualisieren Sie die Strategie."
                ],
                "where": "Nutzen Sie die Bereitstellungsführung auf Unternehmens-, Standort- oder Funktionsebene. Beispiel: Eine Site beginnt mit einem Wertstrom und einem kleinen Portfolio, weist Ergebnisse nach, entwickelt interne Coaches und weitet sich dann auf andere Wertströme mit gemeinsamen Standards aus.",
                "when_not": "Starten Sie keinen Big-Bang-Einsatz ohne Kompetenz oder Sponsoring. Kopieren Sie nicht das Modell einer anderen Organisation ohne Anpassung. Behandeln Sie die Bereitstellung nicht als einmaligen Start.",
                "common_mistakes": [
                  "Kein Executive-Sponsoring oder klares Mandat.",
                  "Skalierung, bevor der Pilot seine Fähigkeiten unter Beweis stellt.",
                  "Konzentrieren Sie sich auf Tools und ignorieren Sie dabei Kultur, Governance und Vorteile."
                ],
                "quick_check": [
                  {
                    "q": "Was ist eine sinnvolle Einsatzreihenfolge?",
                    "answer": "Mobilisieren, entwerfen, steuern, skalieren und aufrechterhalten.",
                    "explanation": "Es baut Beweise und Fähigkeiten auf, bevor es sich auf breiter Front ausbreitet."
                  },
                  {
                    "q": "Warum vor der Skalierung ein Pilotprojekt durchführen?",
                    "answer": "Den Ansatz testen und Fähigkeiten mit begrenztem Risiko aufbauen.",
                    "explanation": "Pilotprojekte vermitteln Lernen vor umfassenderem Engagement."
                  },
                  {
                    "q": "Was muss Nachhaltigkeit beinhalten?",
                    "answer": "Eigenverantwortung, Routinen, Messung und Verstärkung.",
                    "explanation": "Ohne diese werden die Ergebnisse nach der Einführung schlechter."
                  }
                ],
                "recap": [
                  "Lead-Deployment als System, nicht als Reihe von Projekten.",
                  "Bauen Sie Sponsoring, Governance, Fähigkeiten und ein ausgewogenes Portfolio auf.",
                  "Pilotieren, skalieren und aufrechterhalten mit Messung und Verstärkung."
                ]
              }
            }
          ]
        }
      ],
      "coverageChecklist": [
        {
          "topic": "Strategieeinsatz (Hoshin Kanri)",
          "lessons": [
            "M1.1",
            "M1.2"
          ]
        },
        {
          "topic": "Programmverwaltung",
          "lessons": [
            "M1.3"
          ]
        },
        {
          "topic": "Auswahl des Projektportfolios",
          "lessons": [
            "M1.4"
          ]
        },
        {
          "topic": "Finanzielle Validierung",
          "lessons": [
            "M1.5"
          ]
        },
        {
          "topic": "Coaching und Mentoring",
          "lessons": [
            "M2.1",
            "M2.2"
          ]
        },
        {
          "topic": "Statistische Beratung",
          "lessons": [
            "M2.3"
          ]
        },
        {
          "topic": "Unternehmens-DFSS",
          "lessons": [
            "M3.1"
          ]
        },
        {
          "topic": "Organisatorischer Wandel",
          "lessons": [
            "M3.2"
          ]
        },
        {
          "topic": "Kulturaufbau",
          "lessons": [
            "M3.3"
          ]
        },
        {
          "topic": "Trainingsdesign",
          "lessons": [
            "M2.4"
          ]
        },
        {
          "topic": "Balanced Scorecard",
          "lessons": [
            "M3.4"
          ]
        },
        {
          "topic": "Benchmarking",
          "lessons": [
            "M3.5"
          ]
        },
        {
          "topic": "Analytics und Industrie 4.0-Integration",
          "lessons": [
            "M4.1"
          ]
        },
        {
          "topic": "Ethik",
          "lessons": [
            "M4.2",
            "M5.3"
          ]
        },
        {
          "topic": "Zertifizierungsstandards (ISO 13053, ASQ, IASSC)",
          "lessons": [
            "M5.1",
            "M5.2"
          ]
        }
      ],
      "project": {
        "title": "Erstellen Sie einen Bereitstellungsplan zur Unternehmensverbesserung",
        "brief": "Erstellen Sie einen 12-monatigen Bereitstellungsplan für eine Organisation mit mehreren Standorten: Strategiekarte, Hoshin-Prioritäten, Governance, Portfolio, Schulungspipeline, finanzielle Validierung und eine Balanced Scorecard."
      },
      "exam": {
        "questions": 100,
        "passingScore": 80,
        "format": "100 fallbasierte Multiple-Choice-Fragen mit vier Optionen und Erklärungen."
      },
      "cheatSheet": [
        "Hoshin Kanri bringt bahnbrechende Ziele mit dem täglichen Management in Einklang.",
        "Harte Einsparungen wirken sich auf die Gewinn- und Verlustrechnung oder den Cashflow aus; Weiche Einsparungen werden vermieden oder theoretische Kosten.",
        "Bei der Portfolioauswahl werden Wert, Risiko, Kapazität und strategische Eignung in Einklang gebracht.",
        "ISO 13053 beschreibt Six Sigma-Methoden und -Rollen; ASQ und IASSC definieren BoKs und Prüfungen."
      ],
      "nextChecklist": [
        "Ich kann ein Projektportfolio mit strategischen Zielen verknüpfen.",
        "Ich kann einen Black Belt durch eine statistische Meinungsverschiedenheit coachen.",
        "Ich kann einen Schulungs- und Zertifizierungspfad entwerfen.",
        "Ich kann finanzielle Vorteile ohne Doppelzählung validieren."
      ]
    }
  ]
};

window.curriculumData = curriculumData;
