// Auto-generated from data/i18n/de/resources.json. Do not edit by hand.
// Run: node scripts/build-localized-data.js
(function (root) {
    "use strict";
    var catalog = {
  "version": 1,
  "templates": [
    {
      "id": "project-charter",
      "title": "Projektcharta",
      "phase": "Define",
      "minBelt": "white",
      "icon": "fa-file-signature",
      "estimatedMinutes": 30,
      "description": "Autorisieren Sie das Projekt, indem Sie Problem, Ziel, Umfang, Team, Metriken und Meilensteine ​​definieren.",
      "fields": [
        {
          "key": "projectName",
          "label": "Projektname",
          "type": "text",
          "section": "Projektgrundlagen",
          "required": true,
          "wide": true,
          "placeholder": "Reduzieren Sie Füllschwankungen in der Abfülllinie"
        },
        {
          "key": "projectLead",
          "label": "Projektleitung",
          "type": "text",
          "placeholder": "Name und Gürtelstufe"
        },
        {
          "key": "sponsor",
          "label": "Executive-Sponsor",
          "type": "text",
          "placeholder": "Name und Rolle"
        },
        {
          "key": "startDate",
          "label": "Startdatum",
          "type": "date"
        },
        {
          "key": "targetDate",
          "label": "Zielvervollständigung",
          "type": "date"
        },
        {
          "key": "problemStatement",
          "label": "Problemstellung",
          "type": "textarea",
          "section": "Geschäftsfall",
          "required": true,
          "rows": 3,
          "wide": true,
          "help": "Geben Sie an, was wo, wann und wie viel falsch ist. Vermeiden Sie Ursachen und Lösungen.",
          "placeholder": "Von Januar bis März produzierte Linie 2 4,2 % unterfüllte Flaschen..."
        },
        {
          "key": "businessCase",
          "label": "Geschäftsfall",
          "type": "textarea",
          "section": "Geschäftsfall",
          "required": true,
          "rows": 3,
          "wide": true,
          "placeholder": "Erklären Sie den Kunden, die Kosten, die Compliance oder die strategischen Auswirkungen."
        },
        {
          "key": "goalStatement",
          "label": "Zielaussage",
          "type": "textarea",
          "section": "Geschäftsfall",
          "required": true,
          "rows": 2,
          "wide": true,
          "help": "Geben Sie eine Metrik, einen Ausgangswert, ein Ziel und eine Frist an.",
          "placeholder": "Reduzieren Sie die Füllmenge bis zum 30. Juni von 3,8 ml auf 1,5 ml."
        },
        {
          "key": "scopeIn",
          "label": "Im Umfang",
          "type": "textarea",
          "section": "Umfang",
          "rows": 3,
          "placeholder": "Füller Linie 2, Umstellungen, Bedienermethode und Füllkontrolle."
        },
        {
          "key": "scopeOut",
          "label": "Außerhalb des Gültigkeitsbereichs",
          "type": "textarea",
          "section": "Umfang",
          "rows": 3,
          "placeholder": "Neugestaltung des Flaschenlieferanten, Linie 1 und Lagerabwicklung."
        },
        {
          "key": "successMetrics",
          "label": "Erfolgskennzahlen",
          "type": "table",
          "section": "Maßnahmen",
          "required": true,
          "minRows": 3,
          "columns": [
            {
              "key": "metric",
              "label": "Metrisch",
              "type": "text",
              "placeholder": "Standardabweichung des Füllvolumens"
            },
            {
              "key": "baseline",
              "label": "Grundlinie",
              "type": "text",
              "placeholder": "3,8 ml"
            },
            {
              "key": "target",
              "label": "Ziel",
              "type": "text",
              "placeholder": "1,5 ml"
            },
            {
              "key": "dataSource",
              "label": "Datenquelle",
              "type": "text",
              "placeholder": "Füllstandsanzeige"
            }
          ]
        },
        {
          "key": "team",
          "label": "Kernteam",
          "type": "table",
          "section": "Team und Meilensteine",
          "required": true,
          "minRows": 3,
          "columns": [
            {
              "key": "name",
              "label": "Name",
              "type": "text"
            },
            {
              "key": "role",
              "label": "Rolle",
              "type": "text",
              "placeholder": "Sponsor, Lead, Betreiber"
            },
            {
              "key": "responsibility",
              "label": "Verantwortung",
              "type": "text"
            }
          ]
        },
        {
          "key": "milestones",
          "label": "Meilensteine",
          "type": "table",
          "section": "Team und Meilensteine",
          "required": true,
          "minRows": 3,
          "columns": [
            {
              "key": "milestone",
              "label": "Meilenstein",
              "type": "text",
              "placeholder": "Tor definieren"
            },
            {
              "key": "date",
              "label": "Date",
              "type": "date"
            },
            {
              "key": "status",
              "label": "Status",
              "type": "select",
              "options": [
                "Geplant",
                "Im Gange",
                "Vollständig",
                "Gefährdet"
              ]
            }
          ]
        }
      ],
      "example": {
        "projectName": "Reduzieren Sie Füllschwankungen in der Abfülllinie",
        "projectLead": "Jordan Lee – Grüner Gürtel",
        "sponsor": "Priya Shah – Werksleiterin",
        "startDate": "2026-01-12",
        "targetDate": "2026-06-30",
        "problemStatement": "Von Januar bis März produzierte Linie 2 4,2 % unterfüllte Flaschen und 2,1 % überfüllte Flaschen, was zu Nacharbeiten und Kundenbeschwerden führte.",
        "businessCase": "Füllvariationen führen zu einem geschätzten jährlichen Verlust von 84.000 US-Dollar durch Produktverluste, Nacharbeiten und beschleunigte Ersatzbestellungen.",
        "goalStatement": "Reduzieren Sie die Standardabweichung des Füllvolumens von 3,8 ml auf 1,5 ml und beseitigen Sie Unterfüllungen unter 499,5 ml bis zum 30. Juni 2026.",
        "scopeIn": "Leitung 2-Füller, Umschaltmethode, Bediener-Setup-Prüfungen, Füllstandsanzeige und Schichtübergabe.",
        "scopeOut": "Neugestaltung des Flaschenlieferanten, Linie 1, Lagerhandhabung und Änderungen der Kundenverpackung.",
        "successMetrics": [
          {
            "metric": "Standardabweichung des Füllvolumens",
            "baseline": "3,8 ml",
            "target": "1,5 ml",
            "dataSource": "Füllstandsanzeige"
          },
          {
            "metric": "Unterfüllungsrate",
            "baseline": "4.2%",
            "target": "0.5%",
            "dataSource": "QA-Inspektion"
          },
          {
            "metric": "Jährliche Giveaway-Kosten",
            "baseline": "$84,000",
            "target": "$20,000",
            "dataSource": "Finanzbericht"
          }
        ],
        "team": [
          {
            "name": "Jordan Lee",
            "role": "Projektleitung",
            "responsibility": "DMAIC-Ausführung und Teamförderung"
          },
          {
            "name": "Priya Shah",
            "role": "Sponsor",
            "responsibility": "Ressourcen und Gate-Genehmigungen"
          },
          {
            "name": "Mateo Ruiz",
            "role": "Leitungsbetreiber",
            "responsibility": "Prozesswissen und Datenerfassung"
          },
          {
            "name": "Avery Chen",
            "role": "Wartung",
            "responsibility": "Füllerkalibrierung und Reparaturen"
          }
        ],
        "milestones": [
          {
            "milestone": "Tor definieren",
            "date": "2026-01-26",
            "status": "Vollständig"
          },
          {
            "milestone": "Tor messen",
            "date": "2026-03-06",
            "status": "Im Gange"
          },
          {
            "milestone": "Pilot verbessern",
            "date": "2026-05-15",
            "status": "Geplant"
          },
          {
            "milestone": "Kontrollübergabe",
            "date": "2026-06-30",
            "status": "Geplant"
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
      "description": "Bilden Sie Lieferanten, Inputs, Prozessschritte, Outputs und Kunden auf hohem Niveau ab.",
      "fields": [
        {
          "key": "processName",
          "label": "Prozessname",
          "type": "text",
          "section": "Prozessgrenzen",
          "required": true,
          "wide": true,
          "placeholder": "Abfüll- und Verschlussprozess der Abfülllinie 2"
        },
        {
          "key": "owner",
          "label": "Prozessinhaber",
          "type": "text",
          "section": "Prozessgrenzen"
        },
        {
          "key": "startPoint",
          "label": "Beginnt wann",
          "type": "text",
          "section": "Prozessgrenzen",
          "placeholder": "Leere Flaschen gelangen in den Füller"
        },
        {
          "key": "endPoint",
          "label": "Endet wann",
          "type": "text",
          "section": "Prozessgrenzen",
          "placeholder": "Verschlossene Flaschen gelangen in den Etikettierer"
        },
        {
          "key": "sipocRows",
          "label": "SIPOC-Karte",
          "type": "table",
          "section": "SIPOC-Karte",
          "required": true,
          "minRows": 5,
          "help": "Zeilen zeigen den Hauptfluss. Ein Lieferant kann mehr als einen Input liefern und ein Schritt kann mehrere Outputs erzeugen.",
          "columns": [
            {
              "key": "supplier",
              "label": "Anbieter",
              "type": "text",
              "placeholder": "Flaschenlieferant"
            },
            {
              "key": "input",
              "label": "Eingang",
              "type": "text",
              "placeholder": "500-ml-Flasche reinigen"
            },
            {
              "key": "step",
              "label": "Prozessschritt",
              "type": "text",
              "placeholder": "Flasche füllen"
            },
            {
              "key": "output",
              "label": "Ausgabe",
              "type": "text",
              "placeholder": "Gefüllte Flasche"
            },
            {
              "key": "customer",
              "label": "Kunde",
              "type": "text",
              "placeholder": "Cap-Station"
            }
          ]
        },
        {
          "key": "notes",
          "label": "Grenzhinweise und Annahmen",
          "type": "textarea",
          "section": "SIPOC-Karte",
          "rows": 3,
          "wide": true
        }
      ],
      "example": {
        "processName": "Abfüll- und Verschlussprozess der Abfülllinie 2",
        "owner": "Priya Shah",
        "startPoint": "Leere Flaschen gelangen in den Füller",
        "endPoint": "Verschlossene Flaschen gelangen in den Etikettierer",
        "sipocRows": [
          {
            "supplier": "Flaschenlieferant",
            "input": "500-ml-Flasche reinigen",
            "step": "Load bottles",
            "output": "Ausgerichteter Flaschenstrom",
            "customer": "Füllstoff"
          },
          {
            "supplier": "Produkttank",
            "input": "Fertiges Getränk",
            "step": "Fill bottle",
            "output": "Gefüllte Flasche",
            "customer": "Cap-Station"
          },
          {
            "supplier": "Kappenlieferant",
            "input": "Kappe und Liner",
            "step": "Place and torque cap",
            "output": "Verschlossene Flasche",
            "customer": "Etikettierer"
          },
          {
            "supplier": "Wartung",
            "input": "Kalibrierter Füller",
            "step": "Verify fill weight",
            "output": "Prüfprotokoll ausfüllen",
            "customer": "QA"
          },
          {
            "supplier": "QA",
            "input": "Probenahmestandard",
            "step": "Release lot",
            "output": "Freigegebenes Produktionslos",
            "customer": "Lager"
          }
        ],
        "notes": "Der Umfang beginnt nach dem Entladen der Flasche und endet vor dem Etikettieren. Produkttankwechsel sind inbegriffen; Das Flaschendesign des Lieferanten ist ausgeschlossen."
      }
    },
    {
      "id": "voc-sheet",
      "title": "VOC-Blatt",
      "phase": "Define",
      "minBelt": "yellow",
      "icon": "fa-comments",
      "estimatedMinutes": 30,
      "description": "Erfassen Sie Kundenstimmen, Bedürfnisse, Quellen und Prioritäten, bevor Sie sie in CTQs übersetzen.",
      "fields": [
        {
          "key": "projectName",
          "label": "Projektname",
          "type": "text",
          "section": "Forschungsumfang",
          "required": true,
          "wide": true
        },
        {
          "key": "customerSegment",
          "label": "Kundensegment",
          "type": "text",
          "section": "Forschungsumfang",
          "placeholder": "Abfüllkunden im Einzelhandel"
        },
        {
          "key": "method",
          "label": "Sammelmethode",
          "type": "select",
          "section": "Forschungsumfang",
          "options": [
            "Interviews",
            "Fokusgruppe",
            "Umfrage",
            "Beschwerden",
            "Soziales Zuhören",
            "Beobachtung",
            "Gemischt"
          ]
        },
        {
          "key": "sampleSize",
          "label": "Personen oder Datensätze überprüft",
          "type": "number",
          "section": "Forschungsumfang",
          "min": 1
        },
        {
          "key": "period",
          "label": "Sammelzeitraum",
          "type": "text",
          "section": "Forschungsumfang",
          "placeholder": "Januar-März 2026"
        },
        {
          "key": "voices",
          "label": "Kundenstimmen",
          "type": "table",
          "section": "Stimme des Kunden",
          "required": true,
          "minRows": 4,
          "columns": [
            {
              "key": "customer",
              "label": "Kunde",
              "type": "text",
              "placeholder": "Einzelhandelskäufer"
            },
            {
              "key": "verbatim",
              "label": "Wörtlich oder Beobachtung",
              "type": "text"
            },
            {
              "key": "need",
              "label": "Grundbedürfnis",
              "type": "text"
            },
            {
              "key": "source",
              "label": "Quelle",
              "type": "text",
              "placeholder": "Vorstellungsgespräch, Beschwerde"
            },
            {
              "key": "priority",
              "label": "Priorität",
              "type": "select",
              "options": [
                "Hoch",
                "Medium",
                "Niedrig"
              ]
            }
          ]
        },
        {
          "key": "themes",
          "label": "Themen und Implikationen",
          "type": "textarea",
          "section": "Synthese",
          "rows": 4,
          "wide": true
        }
      ],
      "example": {
        "projectName": "Reduzieren Sie Füllschwankungen in der Abfülllinie",
        "customerSegment": "Abfüllkunden im Einzelhandel",
        "method": "Gemischt",
        "sampleSize": 42,
        "period": "Januar-März 2026",
        "voices": [
          {
            "customer": "Einzelhandelskäufer",
            "verbatim": "Manche Koffer sehen knapp aus und Kunden beschweren sich am Regal.",
            "need": "Gleichbleibendes Füllvolumen in jeder Flasche",
            "source": "Interview",
            "priority": "Hoch"
          },
          {
            "customer": "Verteiler",
            "verbatim": "Wir erhalten mehr Ersatzgutschriften für Unterfüllungen.",
            "need": "Zuverlässige Fallmenge und -qualität",
            "source": "Complaint log",
            "priority": "Hoch"
          },
          {
            "customer": "Leitungsbetreiber",
            "verbatim": "Der Füllstoff driftet nach dem Wechseln und wir passen ihn nach Gefühl an.",
            "need": "Stabiler Umschaltaufbau",
            "source": "Observation",
            "priority": "Hoch"
          },
          {
            "customer": "Qualitätsprüfer",
            "verbatim": "Die Fülldatensätze sind vollständig, aber die Stichprobenentnahme ist inkonsistent.",
            "need": "Nachvollziehbare und konsistente Inspektion",
            "source": "Audit",
            "priority": "Medium"
          }
        ],
        "themes": "Kunden legen Wert auf die Konsistenz von Flasche zu Flasche und die Zuverlässigkeit der Verpackung. Betreiber benötigen einen wiederholbaren Umstellungsstandard. Es liegen Inspektionsdaten vor, die jedoch nicht schnell genug zur Drifterkennung genutzt werden."
      }
    },
    {
      "id": "ctq-tree",
      "title": "CTQ-Baum",
      "phase": "Define",
      "minBelt": "green",
      "icon": "fa-sitemap",
      "estimatedMinutes": 30,
      "description": "Übersetzen Sie Kundenbedürfnisse in Treiber, qualitätskritische Anforderungen und messbare Spezifikationen.",
      "fields": [
        {
          "key": "projectName",
          "label": "Projektname",
          "type": "text",
          "section": "Kundenbedürfnis",
          "required": true,
          "wide": true
        },
        {
          "key": "customer",
          "label": "Hauptkunde",
          "type": "text",
          "section": "Kundenbedürfnis",
          "required": true
        },
        {
          "key": "need",
          "label": "Kundenbedürfnis",
          "type": "textarea",
          "section": "Kundenbedürfnis",
          "required": true,
          "rows": 2,
          "wide": true,
          "placeholder": "Ich brauche, dass jede Flasche die angegebene Menge enthält."
        },
        {
          "key": "tree",
          "label": "CTQ-Abfluss",
          "type": "table",
          "section": "CTQ-Abfluss",
          "required": true,
          "minRows": 4,
          "columns": [
            {
              "key": "need",
              "label": "Brauchen",
              "type": "text"
            },
            {
              "key": "driver",
              "label": "Treiber",
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
              "label": "Spezifikation",
              "type": "text"
            }
          ]
        },
        {
          "key": "validation",
          "label": "Validierung mit dem Kunden",
          "type": "textarea",
          "section": "Validierung",
          "rows": 3,
          "wide": true
        }
      ],
      "example": {
        "projectName": "Reduzieren Sie Füllschwankungen in der Abfülllinie",
        "customer": "Einzelhandelsabfüllkunde",
        "need": "Ich möchte, dass jede Flasche die angegebene Menge enthält und in einer sauberen, unbeschädigten Verpackung ankommt.",
        "tree": [
          {
            "need": "Richtige Menge",
            "driver": "Präzise Füllung",
            "ctq": "Füllvolumen innerhalb der Toleranz",
            "measure": "Füllvolumen in ml",
            "spec": "499,5–500,7 ml"
          },
          {
            "need": "Richtige Menge",
            "driver": "Stabiler Füllstoff",
            "ctq": "Geringe Füllungsvariation",
            "measure": "Standardabweichung",
            "spec": "<= 1,5 ml"
          },
          {
            "need": "Keine Lecks",
            "driver": "Integrität der Kappe",
            "ctq": "Drehmoment im Bereich begrenzen",
            "measure": "Drehmoment in N cm",
            "spec": "18-24 Ncm"
          },
          {
            "need": "Sauberes Gehäuse",
            "driver": "Kein Verschütten",
            "ctq": "Keine Produktrückstände",
            "measure": "Visuelle Mängel pro Fall",
            "spec": "0 Mängel"
          }
        ],
        "validation": "Bestätigt in der vierteljährlichen Kundenbewertung. Für den Kunden stand die Konsistenz der Füllung an erster Stelle und die Sauberkeit des Gehäuses an zweiter Stelle."
      }
    },
    {
      "id": "data-collection-plan",
      "title": "Datenerfassungsplan",
      "phase": "Measure",
      "minBelt": "yellow",
      "icon": "fa-clipboard-list",
      "estimatedMinutes": 35,
      "description": "Definieren Sie, was gemessen werden soll, wie es gemessen werden soll, wer es sammelt und wie die Messqualität geschützt wird.",
      "fields": [
        {
          "key": "projectName",
          "label": "Projektname",
          "type": "text",
          "section": "Eigentümerschaft planen",
          "required": true,
          "wide": true
        },
        {
          "key": "owner",
          "label": "Dateneigentümer",
          "type": "text",
          "section": "Eigentümerschaft planen"
        },
        {
          "key": "startDate",
          "label": "Sammelbeginn",
          "type": "date",
          "section": "Eigentümerschaft planen"
        },
        {
          "key": "endDate",
          "label": "Sammlungsende",
          "type": "date",
          "section": "Eigentümerschaft planen"
        },
        {
          "key": "measures",
          "label": "Maßnahmen",
          "type": "table",
          "section": "Maßnahmen und Methoden",
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
              "label": "Operative Definition",
              "type": "text"
            },
            {
              "key": "type",
              "label": "Datentyp",
              "type": "select",
              "options": [
                "Kontinuierlich",
                "Attribut",
                "Ordinal"
              ]
            },
            {
              "key": "method",
              "label": "Sammelmethode",
              "type": "text"
            },
            {
              "key": "frequency",
              "label": "Frequenz",
              "type": "text"
            },
            {
              "key": "sampleSize",
              "label": "Probengröße",
              "type": "text"
            },
            {
              "key": "owner",
              "label": "Kollektor",
              "type": "text"
            }
          ]
        },
        {
          "key": "integrity",
          "label": "Datenintegrität und Messsystemprüfungen",
          "type": "textarea",
          "section": "Qualitätskontrollen",
          "rows": 3,
          "wide": true
        },
        {
          "key": "risks",
          "label": "Inkassorisiken und Eventualverbindlichkeiten",
          "type": "textarea",
          "section": "Qualitätskontrollen",
          "rows": 3,
          "wide": true
        }
      ],
      "example": {
        "projectName": "Reduzieren Sie Füllschwankungen in der Abfülllinie",
        "owner": "Jordan Lee",
        "startDate": "2026-01-19",
        "endDate": "2026-02-27",
        "measures": [
          {
            "measure": "Füllvolumen",
            "definition": "Nettoproduktvolumen, gemessen mit dem kalibrierten Füllmesser am Füllerausgang",
            "type": "Continuous",
            "method": "Automatisierter Messgerätexport",
            "frequency": "Alle 15 Minuten",
            "sampleSize": "20 aufeinanderfolgende Flaschen pro Schicht",
            "owner": "Leitungsbetreiber"
          },
          {
            "measure": "Unterfüllungsrate",
            "definition": "Flaschen unter 499,5 ml, aufgeteilt nach geprüften Flaschen",
            "type": "Attribute",
            "method": "QS-Probenahme",
            "frequency": "Stündlich",
            "sampleSize": "12 Flaschen",
            "owner": "QS-Techniker"
          },
          {
            "measure": "Umstellungsdauer",
            "definition": "Minuten von der letzten guten Flasche bis zur ersten guten Flasche nach der Umstellung",
            "type": "Continuous",
            "method": "Schichtprotokoll",
            "frequency": "Bei jedem Wechsel",
            "sampleSize": "Alle Umstellungen",
            "owner": "Führungsrolle übernehmen"
          },
          {
            "measure": "Anzahl der Bedieneranpassungen",
            "definition": "Anzahl der während einer Schicht vorgenommenen Fülleranpassungen",
            "type": "Attribute",
            "method": "Beobachtungsblatt",
            "frequency": "Jede Schicht",
            "sampleSize": "Alle Schichten",
            "owner": "Teammitglied"
          }
        ],
        "integrity": "Überprüfen Sie den Füllstandsmesser zu Beginn jeder Schicht anhand eines zertifizierten 500-ml-Kontrollgewichts. Zwei Beobachter sammeln die erste Woche parallel. Frieren Sie den Messgerätkalibrierungsdatensatz für die Studie ein.",
        "risks": "Das Messgerät kann während der Untersuchung abweichen. Die Wartung überprüft wöchentlich die Kalibrierung. Wenn der QA-Techniker abwesend ist, verwendet der Schichtleiter das Ersatz-Probenahmeset."
      }
    },
    {
      "id": "fishbone",
      "title": "Fischgrätendiagramm",
      "phase": "Analyze",
      "minBelt": "yellow",
      "icon": "fa-fish",
      "estimatedMinutes": 30,
      "description": "Brainstormen und organisieren Sie potenzielle Ursachen in den 6M-Kategorien, bevor Sie sie mit Daten testen.",
      "fields": [
        {
          "key": "problem",
          "label": "Wirkungs- oder Problemstellung",
          "type": "textarea",
          "section": "Problem",
          "required": true,
          "rows": 2,
          "wide": true,
          "placeholder": "Das Füllvolumen variiert über die Spezifikation von 499,5–500,7 ml hinaus."
        },
        {
          "key": "team",
          "label": "Brainstorming-Team",
          "type": "text",
          "section": "Problem",
          "placeholder": "Bediener, Wartung, Qualitätssicherung, Vorgesetzter"
        },
        {
          "key": "sessionDate",
          "label": "Sitzungsdatum",
          "type": "date",
          "section": "Problem"
        },
        {
          "key": "causes",
          "label": "Kandidatenursachen",
          "type": "table",
          "section": "6M Ursachen",
          "required": true,
          "minRows": 8,
          "columns": [
            {
              "key": "category",
              "label": "Kategorie",
              "type": "select",
              "options": [
                "Mann",
                "Maschine",
                "Material",
                "Verfahren",
                "Messung",
                "Mutter Natur"
              ]
            },
            {
              "key": "cause",
              "label": "Mögliche Ursache",
              "type": "text"
            },
            {
              "key": "evidence",
              "label": "Beweis oder Frage",
              "type": "text"
            },
            {
              "key": "priority",
              "label": "Priorität",
              "type": "select",
              "options": [
                "Hoch",
                "Medium",
                "Niedrig"
              ]
            }
          ]
        },
        {
          "key": "rootCauses",
          "label": "Zur Überprüfung ausgewählte Ursachen",
          "type": "textarea",
          "section": "Verifizierungsplan",
          "rows": 3,
          "wide": true
        }
      ],
      "example": {
        "problem": "Das Füllvolumen variiert über die Spezifikation von 499,5–500,7 ml hinaus, was zu Unterfüllungen und Produktverlusten führt.",
        "team": "Bediener, Wartung, Qualitätssicherung, Vorgesetzter",
        "sessionDate": "2026-02-12",
        "causes": [
          {
            "category": "Mann",
            "cause": "Nach der Umstellung stellen die Bediener den Füller nach Gefühl ein",
            "evidence": "Es gibt keine Standardanpassungsmethode",
            "priority": "Hoch"
          },
          {
            "category": "Maschine",
            "cause": "Verschleiß am Einfüllventil",
            "evidence": "Ventil 4 wurde letztes Jahr zweimal ausgetauscht",
            "priority": "Hoch"
          },
          {
            "category": "Material",
            "cause": "Die Flaschenhöhe variiert je nach Lieferantencharge",
            "evidence": "Die Eingangskontrolle zeigt einen Bereich von 0,6 mm",
            "priority": "Medium"
          },
          {
            "category": "Verfahren",
            "cause": "Die Umrüstspülzeit ist nicht standardisiert",
            "evidence": "Beobachtete Spülzeiten von 4 bis 11 Minuten",
            "priority": "Hoch"
          },
          {
            "category": "Messung",
            "cause": "Der Füllstandsmesser wurde nicht in jeder Schicht überprüft",
            "evidence": "Das Kalibrierprotokoll weist Lücken auf",
            "priority": "Medium"
          },
          {
            "category": "Mutter Natur",
            "cause": "Die Produkttemperatur verändert die Viskosität",
            "evidence": "Nachmittagsläufe zeigen mehr Abwechslung",
            "priority": "Medium"
          }
        ],
        "rootCauses": "Überprüfen Sie die Umrüstspülzeit, die Bedienereinstellungsmethode, den Zustand des Füllventils und die Produkttemperatur anhand der Leitungsdaten. Wählen Sie keine Grundursache aus, bis die Daten überprüft wurden."
      }
    },
    {
      "id": "five-whys",
      "title": "5 Warum",
      "phase": "Analyze",
      "minBelt": "white",
      "icon": "fa-circle-question",
      "estimatedMinutes": 20,
      "description": "Gehen Sie von einem spezifischen Problem zu einer verifizierten Grundursache und einer Gegenmaßnahme.",
      "fields": [
        {
          "key": "problem",
          "label": "Problemstellung",
          "type": "textarea",
          "section": "Problem",
          "required": true,
          "rows": 2,
          "wide": true
        },
        {
          "key": "containment",
          "label": "Eindämmungsmaßnahme",
          "type": "textarea",
          "section": "Problem",
          "rows": 2,
          "wide": true
        },
        {
          "key": "why1",
          "label": "Warum 1",
          "type": "textarea",
          "section": "Warum Kette",
          "rows": 2,
          "wide": true
        },
        {
          "key": "why2",
          "label": "Warum 2",
          "type": "textarea",
          "section": "Warum Kette",
          "rows": 2,
          "wide": true
        },
        {
          "key": "why3",
          "label": "Warum 3",
          "type": "textarea",
          "section": "Warum Kette",
          "rows": 2,
          "wide": true
        },
        {
          "key": "why4",
          "label": "Warum 4",
          "type": "textarea",
          "section": "Warum Kette",
          "rows": 2,
          "wide": true
        },
        {
          "key": "why5",
          "label": "Warum 5",
          "type": "textarea",
          "section": "Warum Kette",
          "rows": 2,
          "wide": true
        },
        {
          "key": "rootCause",
          "label": "Verifizierte Grundursache",
          "type": "textarea",
          "section": "Aktion",
          "required": true,
          "rows": 3,
          "wide": true,
          "help": "Bestätigen Sie die Ursache mit Beweisen, nicht nur mit Gruppenkonsens."
        },
        {
          "key": "countermeasure",
          "label": "Gegenmaßnahme",
          "type": "textarea",
          "section": "Aktion",
          "required": true,
          "rows": 3,
          "wide": true
        },
        {
          "key": "owner",
          "label": "Aktionseigentümer",
          "type": "text",
          "section": "Aktion"
        },
        {
          "key": "dueDate",
          "label": "Fälligkeitsdatum",
          "type": "date",
          "section": "Aktion"
        },
        {
          "key": "verification",
          "label": "Überprüfung",
          "type": "textarea",
          "section": "Aktion",
          "rows": 2,
          "wide": true
        }
      ],
      "example": {
        "problem": "Linie 2 produzierte in der ersten Schicht im Januar 4,2 % unterfüllte Flaschen.",
        "containment": "Alle verdächtigen Chargen wurden unter Quarantäne gestellt und erneut überprüft. Der Füller wurde gestoppt, während das Team den Aufbau überprüfte.",
        "why1": "Der Füller lieferte zu Beginn des Laufs nicht das Zielvolumen.",
        "why2": "Der Füller wurde nach der Produktumstellung nicht lange genug gespült.",
        "why3": "Die Umstellungsnorm schreibt keine Spülzeit vor.",
        "why4": "Der Standard wurde geschrieben, bevor die neue Produktformulierung eingeführt wurde.",
        "why5": "Der Änderungskontrollprozess erforderte keine Überprüfung des Füllstoff-Setup-Standards, wenn sich die Viskosität änderte.",
        "rootCause": "Der Umstellungsstandard wurde nach der Änderung der Produktformulierung nicht aktualisiert, was zu inkonsistenten Spülzeiten führte.",
        "countermeasure": "Fügen Sie dem Umstellungsstandard produktspezifische Spülzeiten und eine Überprüfung der Flaschen hinzu.",
        "owner": "Mateo Ruiz",
        "dueDate": "2026-03-20",
        "verification": "Prüfen Sie die nächsten 10 Umstellungen und stellen Sie sicher, dass die erste Flasche das Füllziel erreicht, bevor die Produktion freigegeben wird."
      }
    },
    {
      "id": "pareto",
      "title": "Pareto-Analyse",
      "phase": "Analyze",
      "minBelt": "yellow",
      "icon": "fa-chart-column",
      "estimatedMinutes": 25,
      "description": "Ordnen Sie Fehler- oder Problemkategorien und trennen Sie die wenigen wichtigen von den nützlichen vielen.",
      "fields": [
        {
          "key": "problem",
          "label": "Problem wird analysiert",
          "type": "text",
          "section": "Datenquelle",
          "required": true,
          "wide": true,
          "placeholder": "Defekte an der Abfüllanlage, Januar-März 2026"
        },
        {
          "key": "dataSource",
          "label": "Datenquelle",
          "type": "text",
          "section": "Datenquelle",
          "placeholder": "QA-Fehlerprotokoll"
        },
        {
          "key": "period",
          "label": "Zeitraum",
          "type": "text",
          "section": "Datenquelle",
          "placeholder": "Januar-März 2026"
        },
        {
          "key": "counts",
          "label": "Kategorie zählt",
          "type": "table",
          "section": "Kategorie zählt",
          "required": true,
          "minRows": 6,
          "sortBy": "zählen",
          "sortLabel": "Nach Anzahl sortieren",
          "help": "Geben Sie die Anzahl ein und sortieren Sie dann absteigend. Anteil und kumulierter Prozentsatz werden automatisch berechnet.",
          "columns": [
            {
              "key": "category",
              "label": "Kategorie",
              "type": "text",
              "placeholder": "Unterfüllung"
            },
            {
              "key": "count",
              "label": "Zählen",
              "type": "number",
              "min": 0,
              "step": 1
            },
            {
              "key": "share",
              "label": "Aktie",
              "compute": {
                "op": "percentOfTotal",
                "field": "zählen"
              }
            },
            {
              "key": "cumulative",
              "label": "Kumulativ",
              "compute": {
                "op": "kumulativProzent",
                "field": "zählen"
              }
            }
          ]
        },
        {
          "key": "conclusion",
          "label": "Fazit und Fokus",
          "type": "textarea",
          "section": "Abschluss",
          "rows": 3,
          "wide": true,
          "help": "Identifizieren Sie die wenigen Kategorien, die etwa 80 % der Gesamtmenge ausmachen."
        }
      ],
      "example": {
        "problem": "Defekte an der Abfüllanlage, Januar-März 2026",
        "dataSource": "QA-Fehlerprotokoll",
        "period": "Januar-März 2026",
        "counts": [
          {
            "category": "Unterfüllung",
            "count": 86
          },
          {
            "category": "Falsche Ausrichtung des Etiketts",
            "count": 24
          },
          {
            "category": "Drehmoment begrenzen",
            "count": 18
          },
          {
            "category": "Beschädigung der Dichtung",
            "count": 11
          },
          {
            "category": "Überfüllung",
            "count": 9
          },
          {
            "category": "Schmutzige Flasche",
            "count": 4
          }
        ],
        "conclusion": "Unterfüllung ist die größte Kategorie und ist zusammen mit Etikettenfehlausrichtung und Kappendrehmoment für den größten Teil der Fehleranzahl verantwortlich. Konzentrieren Sie sich im ersten Verbesserungszyklus auf die Unterfüllung."
      }
    },
    {
      "id": "fmea",
      "title": "FMEA",
      "phase": "Analyze",
      "minBelt": "green",
      "icon": "fa-triangle-exclamation",
      "estimatedMinutes": 45,
      "description": "Priorisieren Sie Fehlermodi nach Schweregrad, Auftreten und Erkennung mit automatischer RPN-Berechnung.",
      "fields": [
        {
          "key": "processName",
          "label": "Prozess oder Produkt",
          "type": "text",
          "section": "Studienumfang",
          "required": true,
          "wide": true
        },
        {
          "key": "team",
          "label": "FMEA-Team",
          "type": "text",
          "section": "Studienumfang"
        },
        {
          "key": "reviewDate",
          "label": "Überprüfungsdatum",
          "type": "date",
          "section": "Studienumfang"
        },
        {
          "key": "scope",
          "label": "Umfang und Annahmen",
          "type": "textarea",
          "section": "Studienumfang",
          "rows": 2,
          "wide": true
        },
        {
          "key": "failures",
          "label": "Fehlermodi",
          "type": "table",
          "section": "Fehlermodi",
          "required": true,
          "minRows": 5,
          "help": "Bewerten Sie Schweregrad, Auftreten und Erkennung von 1 bis 10. RPN = S x O x D und wird automatisch aktualisiert. RPN 200 oder höher wird rot hervorgehoben; 100-199 Bernstein.",
          "columns": [
            {
              "key": "step",
              "label": "Prozessschritt",
              "type": "text"
            },
            {
              "key": "failure",
              "label": "Fehlermodus",
              "type": "text"
            },
            {
              "key": "effect",
              "label": "Wirkung",
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
                "op": "multiplizieren",
                "fields": [
                  "Schwere",
                  "Auftreten",
                  "Erkennung"
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
              "label": "Empfohlene Maßnahme",
              "type": "text"
            },
            {
              "key": "owner",
              "label": "Eigentümer",
              "type": "text"
            },
            {
              "key": "status",
              "label": "Status",
              "type": "select",
              "options": [
                "Offen",
                "Im Gange",
                "Vollständig"
              ]
            }
          ]
        },
        {
          "key": "actions",
          "label": "Vorrangige Maßnahmen und Überprüfungsnotizen",
          "type": "textarea",
          "section": "Aktionsplan",
          "rows": 3,
          "wide": true
        }
      ],
      "example": {
        "processName": "Abfülllinie 2 füllen und verschließen",
        "team": "Wartung, Bediener, Qualitätssicherung, Engineering",
        "reviewDate": "2026-02-20",
        "scope": "Konzentrieren Sie sich auf die Schritte Füllen, Verschließen und Umstellen. Verpackung und Palettierung sind für diese Überprüfung nicht vorgesehen.",
        "failures": [
          {
            "step": "Fill bottle",
            "failure": "Unterfüllung",
            "effect": "Kundenreklamation und Nacharbeit",
            "severity": 8,
            "occurrence": 6,
            "detection": 4,
            "action": "Installieren Sie den produktspezifischen Spülstandard und überprüfen Sie die erste Flasche",
            "owner": "Jordan Lee",
            "status": "Im Gange"
          },
          {
            "step": "Fill bottle",
            "failure": "Überfüllung",
            "effect": "Produktverlust und Verschütten",
            "severity": 5,
            "occurrence": 4,
            "detection": 3,
            "action": "Fügen Sie einen automatischen Füllvolumen-Trendalarm hinzu",
            "owner": "Avery Chen",
            "status": "Offen"
          },
          {
            "step": "Place cap",
            "failure": "Niedriges Kappendrehmoment",
            "effect": "Leck während des Transports",
            "severity": 9,
            "occurrence": 3,
            "detection": 5,
            "action": "Fügen Sie alle 30 Minuten eine Drehmomentüberprüfung hinzu",
            "owner": "QS-Techniker",
            "status": "Offen"
          },
          {
            "step": "Changeover",
            "failure": "Falsches Füllerrezept ausgewählt",
            "effect": "Falsches Füllvolumen für den gesamten Lauf",
            "severity": 8,
            "occurrence": 2,
            "detection": 2,
            "action": "Fügen Sie vor dem Start eine Rezept-Scan-Verriegelung hinzu",
            "owner": "Maschinenbau",
            "status": "Offen"
          },
          {
            "step": "Fill bottle",
            "failure": "Füllventil verschlissen",
            "effect": "Inkonsistentes Volumen über die Düsen hinweg",
            "severity": 7,
            "occurrence": 4,
            "detection": 6,
            "action": "Ergänzen Sie die vorbeugende Wartung um eine Überprüfung des Ventilverschleißes",
            "owner": "Wartung",
            "status": "Offen"
          }
        ],
        "actions": "Priorisieren Sie den Sperr- und Unterfüllungsbereinigungsstandard für falsche Rezepte, da sie einen hohen Schweregrad mit einer schwachen Erkennung kombinieren. Bewerten Sie die FMEA nach dem Pilotprojekt erneut."
      }
    },
    {
      "id": "solution-matrix",
      "title": "Lösungsmatrix",
      "phase": "Improve",
      "minBelt": "green",
      "icon": "fa-table-cells-large",
      "estimatedMinutes": 30,
      "description": "Vergleichen Sie mögliche Lösungen anhand einer transparenten Bewertung hinsichtlich Auswirkungen, Machbarkeit, Kosten und Risiko.",
      "fields": [
        {
          "key": "problem",
          "label": "Problem oder Chance",
          "type": "text",
          "section": "Entscheidungskontext",
          "required": true,
          "wide": true
        },
        {
          "key": "decisionOwner",
          "label": "Entscheidungseigentümer",
          "type": "text",
          "section": "Entscheidungskontext"
        },
        {
          "key": "decisionDate",
          "label": "Entscheidungsdatum",
          "type": "date",
          "section": "Entscheidungskontext"
        },
        {
          "key": "criteria",
          "label": "Scoring-Anleitung",
          "type": "textarea",
          "section": "Entscheidungskontext",
          "rows": 2,
          "wide": true,
          "help": "Verwenden Sie für jedes Kriterium eine Skala von 1 bis 5. Die Summe gibt jedem Kriterium das gleiche Gewicht; Passen Sie die Diskussion an, wenn das Team unterschiedliche Gewichtungen verwendet."
        },
        {
          "key": "solutions",
          "label": "Kandidatenlösungen",
          "type": "table",
          "section": "Lösungsbewertung",
          "required": true,
          "minRows": 4,
          "help": "Bewerten Sie Auswirkungen, Machbarkeit, Kosten und Risiko mit einer Skala von 1 (schlecht) bis 5 (ausgezeichnet). Die Gesamtsumme wird automatisch berechnet.",
          "columns": [
            {
              "key": "solution",
              "label": "Lösung",
              "type": "text"
            },
            {
              "key": "impact",
              "label": "Auswirkungen",
              "type": "number",
              "min": 1,
              "max": 5,
              "step": 1,
              "width": "78px"
            },
            {
              "key": "feasibility",
              "label": "Durchführbarkeit",
              "type": "number",
              "min": 1,
              "max": 5,
              "step": 1,
              "width": "78px"
            },
            {
              "key": "cost",
              "label": "Kosten",
              "type": "number",
              "min": 1,
              "max": 5,
              "step": 1,
              "width": "78px"
            },
            {
              "key": "risk",
              "label": "Risiko",
              "type": "number",
              "min": 1,
              "max": 5,
              "step": 1,
              "width": "78px"
            },
            {
              "key": "total",
              "label": "Gesamt",
              "compute": {
                "op": "Summe",
                "fields": [
                  "Auswirkungen",
                  "Durchführbarkeit",
                  "kosten",
                  "Risiko"
                ]
              },
              "thresholds": {
                "high": 17,
                "medium": 13
              },
              "tone": "Gut",
              "width": "72px"
            },
            {
              "key": "decision",
              "label": "Entscheidung",
              "type": "select",
              "options": [
                "Ausgewählt",
                "Pilot",
                "Halten",
                "Abgelehnt"
              ]
            }
          ]
        },
        {
          "key": "rationale",
          "label": "Entscheidungsbegründung",
          "type": "textarea",
          "section": "Entscheidung",
          "rows": 3,
          "wide": true
        }
      ],
      "example": {
        "problem": "Reduzieren Sie Wechselschwankungen und Unterfüllungen in Linie 2.",
        "decisionOwner": "Priya Shah",
        "decisionDate": "2026-04-10",
        "criteria": "Die Auswirkung spiegelt die erwartete Fehlerreduzierung wider. Die Machbarkeit spiegelt Ausfallzeiten und Fähigkeiten wider. Die Kosten spiegeln den Implementierungsaufwand wider. Das Risiko spiegelt die Gefährdung durch Sicherheit und Produktqualität wider.",
        "solutions": [
          {
            "solution": "Produktspezifischer Spülstandard",
            "impact": 5,
            "feasibility": 5,
            "cost": 5,
            "risk": 4,
            "decision": "Ausgewählt"
          },
          {
            "solution": "Automatischer Fülltrendalarm",
            "impact": 4,
            "feasibility": 3,
            "cost": 3,
            "risk": 4,
            "decision": "Pilot"
          },
          {
            "solution": "Ersetzen Sie alle Einfüllventile",
            "impact": 4,
            "feasibility": 2,
            "cost": 1,
            "risk": 3,
            "decision": "Halten"
          },
          {
            "solution": "Fügen Sie eine zweite Bedienerprüfung hinzu",
            "impact": 2,
            "feasibility": 4,
            "cost": 4,
            "risk": 3,
            "decision": "Abgelehnt"
          }
        ],
        "rationale": "Der Bereinigungsstandard bietet das beste Gleichgewicht zwischen Auswirkungen, Durchführbarkeit, Kosten und Risiko. Der Trendalarm ist eine nützliche zweite Phase, wenn die Pilotergebnisse zwischen den Inspektionen abweichen."
      }
    },
    {
      "id": "control-plan",
      "title": "Kontrollplan",
      "phase": "Control",
      "minBelt": "green",
      "icon": "fa-sliders",
      "estimatedMinutes": 40,
      "description": "Dokumentieren Sie, wie der verbesserte Prozess überwacht wird, wer reagiert und was passiert, wenn ein Signal auftritt.",
      "fields": [
        {
          "key": "processName",
          "label": "Prozessname",
          "type": "text",
          "section": "Eigentümerschaft planen",
          "required": true,
          "wide": true
        },
        {
          "key": "owner",
          "label": "Prozessinhaber",
          "type": "text",
          "section": "Eigentümerschaft planen"
        },
        {
          "key": "effectiveDate",
          "label": "Datum des Inkrafttretens",
          "type": "date",
          "section": "Eigentümerschaft planen"
        },
        {
          "key": "revision",
          "label": "Revision",
          "type": "text",
          "section": "Eigentümerschaft planen",
          "placeholder": "1.0"
        },
        {
          "key": "controls",
          "label": "Kontrollelemente",
          "type": "table",
          "section": "Kontrollelemente",
          "required": true,
          "minRows": 5,
          "columns": [
            {
              "key": "step",
              "label": "Prozessschritt",
              "type": "text"
            },
            {
              "key": "item",
              "label": "Kontrollelement",
              "type": "text"
            },
            {
              "key": "spec",
              "label": "Spezifikation",
              "type": "text"
            },
            {
              "key": "method",
              "label": "Kontrollmethode",
              "type": "text"
            },
            {
              "key": "frequency",
              "label": "Frequenz",
              "type": "text"
            },
            {
              "key": "owner",
              "label": "Eigentümer",
              "type": "text"
            },
            {
              "key": "reaction",
              "label": "Reaktionsplan",
              "type": "text"
            }
          ]
        },
        {
          "key": "monitoring",
          "label": "Überwachungs- und Eskalationshinweise",
          "type": "textarea",
          "section": "Überwachung",
          "rows": 3,
          "wide": true
        }
      ],
      "example": {
        "processName": "Füllprozess der Abfülllinie 2",
        "owner": "Priya Shah",
        "effectiveDate": "2026-06-01",
        "revision": "1.0",
        "controls": [
          {
            "step": "Changeover",
            "item": "Spülzeit",
            "spec": "Produkt A: 8 Minuten",
            "method": "Checkliste für die Einrichtung und Überprüfung der ersten Flasche",
            "frequency": "Bei jedem Wechsel",
            "owner": "Leitungsbetreiber",
            "reaction": "Stopplinie; Spülung wiederholen; Schichtleiter benachrichtigen"
          },
          {
            "step": "Fill",
            "item": "Füllvolumen",
            "spec": "499,5–500,7 ml",
            "method": "Füllstandsanzeige und stündliche QS-Probe",
            "frequency": "Alle 15 Minuten",
            "owner": "Leitungsbetreiber",
            "reaction": "Füller einstellen; Quarantäne seit der letzten guten Kontrolle"
          },
          {
            "step": "Cap",
            "item": "Drehmoment begrenzen",
            "spec": "18-24 Ncm",
            "method": "Drehmomentprüfer",
            "frequency": "Alle 30 Minuten",
            "owner": "QS-Techniker",
            "reaction": "Ersetzen Sie den Kappenkopf; erneut testen; Produkt halten"
          },
          {
            "step": "Measurement",
            "item": "Kalibrierung des Füllstandsmessers",
            "spec": "Innerhalb von 0,2 ml des Kontrollgewichts",
            "method": "Zertifiziertes Kontrollgewicht",
            "frequency": "Schichtbeginn",
            "owner": "Führungsrolle übernehmen",
            "reaction": "Das Messgerät neu kalibrieren oder außer Betrieb nehmen"
          },
          {
            "step": "Response",
            "item": "Trendalarm",
            "spec": "Drei aufeinanderfolgende Punkte auf einer Seite der Mitte",
            "method": "Überprüfung des SPC-Diagramms",
            "frequency": "Jede Schicht",
            "owner": "Prozessinhaber",
            "reaction": "Führen Sie eine Untersuchung durch und überprüfen Sie das Wartungsprotokoll"
          }
        ],
        "monitoring": "Der Prozessverantwortliche überprüft täglich das SPC-Dashboard. Ein wiederholtes Signal löst eine 30-minütige Eindämmungsprüfung aus. Eskalieren Sie es an den Werksleiter, wenn innerhalb einer Woche zwei Signale auftreten."
      }
    },
    {
      "id": "project-closure",
      "title": "Checkliste für den Projektabschluss",
      "phase": "Control",
      "minBelt": "green",
      "icon": "fa-clipboard-check",
      "estimatedMinutes": 25,
      "description": "Bestätigen Sie Ergebnisse, Übergabe, Dokumentation und gewonnene Erkenntnisse, bevor Sie das Projekt abschließen.",
      "fields": [
        {
          "key": "projectName",
          "label": "Projektname",
          "type": "text",
          "section": "Projektzusammenfassung",
          "required": true,
          "wide": true
        },
        {
          "key": "projectLead",
          "label": "Projektleitung",
          "type": "text",
          "section": "Projektzusammenfassung"
        },
        {
          "key": "sponsor",
          "label": "Sponsor",
          "type": "text",
          "section": "Projektzusammenfassung"
        },
        {
          "key": "closureDate",
          "label": "Schließungsdatum",
          "type": "date",
          "section": "Projektzusammenfassung"
        },
        {
          "key": "resultsSummary",
          "label": "Zusammenfassung der Ergebnisse",
          "type": "textarea",
          "section": "Ergebnisse",
          "required": true,
          "rows": 3,
          "wide": true,
          "placeholder": "Ausgangswert, Ziel, tatsächliches Ergebnis und finanzieller Nutzen."
        },
        {
          "key": "lessonsLearned",
          "label": "Gelernte Lektionen",
          "type": "textarea",
          "section": "Ergebnisse",
          "required": true,
          "rows": 3,
          "wide": true
        },
        {
          "key": "closureChecklist",
          "label": "Checkliste für den Abschluss",
          "type": "checklist",
          "section": "Checkliste für den Abschluss",
          "required": true,
          "items": [
            "Projektziele und CTQs wurden erreicht",
            "Die Verbesserungsergebnisse wurden mit Daten validiert",
            "Der Kontrollplan ist aktiv und im Besitz",
            "Prozessdokumentation und Schulung wurden aktualisiert",
            "Finanzielle Vorteile wurden mit Finance überprüft",
            "Die gewonnenen Erkenntnisse wurden erfasst und weitergegeben",
            "Die Team- und Sponsorenerkennung ist abgeschlossen",
            "Vom Sponsor genehmigter Projektabschluss"
          ]
        },
        {
          "key": "signoff",
          "label": "Abmelden",
          "type": "table",
          "section": "Abmelden",
          "required": true,
          "minRows": 3,
          "columns": [
            {
              "key": "role",
              "label": "Rolle",
              "type": "text",
              "placeholder": "Sponsor"
            },
            {
              "key": "name",
              "label": "Name",
              "type": "text"
            },
            {
              "key": "date",
              "label": "Date",
              "type": "date"
            },
            {
              "key": "status",
              "label": "Status",
              "type": "select",
              "options": [
                "Ausstehend",
                "Unterzeichnet"
              ]
            }
          ]
        }
      ],
      "example": {
        "projectName": "Reduzieren Sie Füllschwankungen in der Abfülllinie",
        "projectLead": "Jordan Lee",
        "sponsor": "Priya Shah",
        "closureDate": "2026-06-28",
        "resultsSummary": "Die Füllstandardabweichung sank von 3,8 ml auf 1,3 ml und übertraf damit den Zielwert von 1,5 ml. Die Unterfüllungsrate sank von 4,2 % auf 0,3 %. Die Finanzabteilung bestätigte einen jährlichen Gewinn von 61.000 US-Dollar.",
        "lessonsLearned": "Der Umschaltstandard war die Steuerung mit dem höchsten Hebel. Die Einbindung der Betreiber in das Pilotprojekt verbesserte die Akzeptanz. Eine frühere Überprüfung des Messgeräts hätte die Messphase verkürzt.",
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
            "role": "Projektleitung",
            "name": "Jordan Lee",
            "date": "2026-06-28",
            "status": "Unterzeichnet"
          },
          {
            "role": "Prozessinhaber",
            "name": "Priya Shah",
            "date": "2026-06-28",
            "status": "Unterzeichnet"
          },
          {
            "role": "Finanzen",
            "name": "Dana Brooks",
            "date": "2026-06-27",
            "status": "Unterzeichnet"
          }
        ]
      }
    }
  ]
};
    if (typeof module === "object" && module.exports) module.exports = catalog;
    root.RESOURCE_CATALOG = catalog;
}(typeof globalThis !== "undefined" ? globalThis : this));
