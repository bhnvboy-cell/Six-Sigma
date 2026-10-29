(function (root) {
    "use strict";
    var catalog = {
        "version": 1,
        "templates": [
            {
                "id": "project-charter",
                "title": "Project Charter",
                "phase": "Define",
                "minBelt": "white",
                "icon": "fa-file-signature",
                "estimatedMinutes": 30,
                "description": "Authorize the project by defining the problem, goal, scope, team, metrics, and milestones.",
                "fields": [
                    {
                        "key": "projectName",
                        "label": "Project name",
                        "type": "text",
                        "section": "Project basics",
                        "required": true,
                        "wide": true,
                        "placeholder": "Reduce bottling line fill variation"
                    },
                    {
                        "key": "projectLead",
                        "label": "Project lead",
                        "type": "text",
                        "placeholder": "Name and belt level"
                    },
                    {
                        "key": "sponsor",
                        "label": "Executive sponsor",
                        "type": "text",
                        "placeholder": "Name and role"
                    },
                    {
                        "key": "startDate",
                        "label": "Start date",
                        "type": "date"
                    },
                    {
                        "key": "targetDate",
                        "label": "Target completion",
                        "type": "date"
                    },
                    {
                        "key": "problemStatement",
                        "label": "Problem statement",
                        "type": "textarea",
                        "section": "Business case",
                        "required": true,
                        "rows": 3,
                        "wide": true,
                        "help": "State what is wrong, where, when, and how much. Avoid causes and solutions.",
                        "placeholder": "From January to March, line 2 produced 4.2% underfilled bottles..."
                    },
                    {
                        "key": "businessCase",
                        "label": "Business case",
                        "type": "textarea",
                        "section": "Business case",
                        "required": true,
                        "rows": 3,
                        "wide": true,
                        "placeholder": "Explain the customer, cost, compliance, or strategic impact."
                    },
                    {
                        "key": "goalStatement",
                        "label": "Goal statement",
                        "type": "textarea",
                        "section": "Business case",
                        "required": true,
                        "rows": 2,
                        "wide": true,
                        "help": "Include a metric, baseline, target, and deadline.",
                        "placeholder": "Reduce fill variation from 3.8 ml to 1.5 ml by 30 June."
                    },
                    {
                        "key": "scopeIn",
                        "label": "In scope",
                        "type": "textarea",
                        "section": "Scope",
                        "rows": 3,
                        "placeholder": "Line 2 filler, changeovers, operator method, and fill inspection."
                    },
                    {
                        "key": "scopeOut",
                        "label": "Out of scope",
                        "type": "textarea",
                        "section": "Scope",
                        "rows": 3,
                        "placeholder": "Bottle supplier redesign, line 1, and warehouse handling."
                    },
                    {
                        "key": "successMetrics",
                        "label": "Success metrics",
                        "type": "table",
                        "section": "Measures",
                        "required": true,
                        "minRows": 3,
                        "columns": [
                            {
                                "key": "metric",
                                "label": "Metric",
                                "type": "text",
                                "placeholder": "Fill volume standard deviation"
                            },
                            {
                                "key": "baseline",
                                "label": "Baseline",
                                "type": "text",
                                "placeholder": "3.8 ml"
                            },
                            {
                                "key": "target",
                                "label": "Target",
                                "type": "text",
                                "placeholder": "1.5 ml"
                            },
                            {
                                "key": "dataSource",
                                "label": "Data source",
                                "type": "text",
                                "placeholder": "Fill gauge"
                            }
                        ],
                        "columnKeys": {}
                    },
                    {
                        "key": "team",
                        "label": "Core team",
                        "type": "table",
                        "section": "Team and milestones",
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
                                "label": "Role",
                                "type": "text",
                                "placeholder": "Sponsor, lead, operator"
                            },
                            {
                                "key": "responsibility",
                                "label": "Responsibility",
                                "type": "text"
                            }
                        ],
                        "columnKeys": {}
                    },
                    {
                        "key": "milestones",
                        "label": "Milestones",
                        "type": "table",
                        "section": "Team and milestones",
                        "required": true,
                        "minRows": 3,
                        "columns": [
                            {
                                "key": "milestone",
                                "label": "Milestone",
                                "type": "text",
                                "placeholder": "Define gate"
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
                                    "Planned",
                                    "In progress",
                                    "Complete",
                                    "At risk"
                                ]
                            }
                        ],
                        "columnKeys": {}
                    }
                ],
                "example": {
                    "projectName": "Reduce bottling line fill variation",
                    "projectLead": "Jordan Lee - Green Belt",
                    "sponsor": "Priya Shah - Plant Manager",
                    "startDate": "2026-01-12",
                    "targetDate": "2026-06-30",
                    "problemStatement": "From January to March, line 2 produced 4.2% underfilled bottles and 2.1% overfilled bottles, creating rework and customer complaints.",
                    "businessCase": "Fill variation causes an estimated $84,000 annual loss in product giveaway, rework, and expedited replacement orders.",
                    "goalStatement": "Reduce fill volume standard deviation from 3.8 ml to 1.5 ml and eliminate underfills below 499.5 ml by 30 June 2026.",
                    "scopeIn": "Line 2 filler, changeover method, operator setup checks, fill gauge, and shift handoff.",
                    "scopeOut": "Bottle supplier redesign, line 1, warehouse handling, and customer packaging changes.",
                    "successMetrics": [
                        {
                            "metric": "Fill volume standard deviation",
                            "baseline": "3.8 ml",
                            "target": "1.5 ml",
                            "dataSource": "Fill gauge"
                        },
                        {
                            "metric": "Underfill rate",
                            "baseline": "4.2%",
                            "target": "0.5%",
                            "dataSource": "QA inspection"
                        },
                        {
                            "metric": "Annual giveaway cost",
                            "baseline": "$84,000",
                            "target": "$20,000",
                            "dataSource": "Finance report"
                        }
                    ],
                    "team": [
                        {
                            "name": "Jordan Lee",
                            "role": "Project lead",
                            "responsibility": "DMAIC execution and team facilitation"
                        },
                        {
                            "name": "Priya Shah",
                            "role": "Sponsor",
                            "responsibility": "Resources and gate approvals"
                        },
                        {
                            "name": "Mateo Ruiz",
                            "role": "Line operator",
                            "responsibility": "Process knowledge and data collection"
                        },
                        {
                            "name": "Avery Chen",
                            "role": "Maintenance",
                            "responsibility": "Filler calibration and repairs"
                        }
                    ],
                    "milestones": [
                        {
                            "milestone": "Define gate",
                            "date": "2026-01-26",
                            "status": "Complete"
                        },
                        {
                            "milestone": "Measure gate",
                            "date": "2026-03-06",
                            "status": "In progress"
                        },
                        {
                            "milestone": "Improve pilot",
                            "date": "2026-05-15",
                            "status": "Planned"
                        },
                        {
                            "milestone": "Control handoff",
                            "date": "2026-06-30",
                            "status": "Planned"
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
                "description": "Map suppliers, inputs, process steps, outputs, and customers at a high level.",
                "fields": [
                    {
                        "key": "processName",
                        "label": "Process name",
                        "type": "text",
                        "section": "Process boundaries",
                        "required": true,
                        "wide": true,
                        "placeholder": "Bottling line 2 fill and cap process"
                    },
                    {
                        "key": "owner",
                        "label": "Process owner",
                        "type": "text",
                        "section": "Process boundaries"
                    },
                    {
                        "key": "startPoint",
                        "label": "Starts when",
                        "type": "text",
                        "section": "Process boundaries",
                        "placeholder": "Empty bottles enter the filler"
                    },
                    {
                        "key": "endPoint",
                        "label": "Ends when",
                        "type": "text",
                        "section": "Process boundaries",
                        "placeholder": "Capped bottles enter the labeler"
                    },
                    {
                        "key": "sipocRows",
                        "label": "SIPOC map",
                        "type": "table",
                        "section": "SIPOC map",
                        "required": true,
                        "minRows": 5,
                        "help": "Rows show the main flow. A supplier can feed more than one input and a step can produce several outputs.",
                        "columns": [
                            {
                                "key": "supplier",
                                "label": "Supplier",
                                "type": "text",
                                "placeholder": "Bottle supplier"
                            },
                            {
                                "key": "input",
                                "label": "Input",
                                "type": "text",
                                "placeholder": "Clean 500 ml bottle"
                            },
                            {
                                "key": "step",
                                "label": "Process step",
                                "type": "text",
                                "placeholder": "Fill bottle"
                            },
                            {
                                "key": "output",
                                "label": "Output",
                                "type": "text",
                                "placeholder": "Filled bottle"
                            },
                            {
                                "key": "customer",
                                "label": "Customer",
                                "type": "text",
                                "placeholder": "Cap station"
                            }
                        ],
                        "columnKeys": {}
                    },
                    {
                        "key": "notes",
                        "label": "Boundary notes and assumptions",
                        "type": "textarea",
                        "section": "SIPOC map",
                        "rows": 3,
                        "wide": true
                    }
                ],
                "example": {
                    "processName": "Bottling line 2 fill and cap process",
                    "owner": "Priya Shah",
                    "startPoint": "Empty bottles enter the filler",
                    "endPoint": "Capped bottles enter the labeler",
                    "sipocRows": [
                        {
                            "supplier": "Bottle supplier",
                            "input": "Clean 500 ml bottle",
                            "step": "Load bottles",
                            "output": "Aligned bottle stream",
                            "customer": "Filler"
                        },
                        {
                            "supplier": "Product tank",
                            "input": "Finished beverage",
                            "step": "Fill bottle",
                            "output": "Filled bottle",
                            "customer": "Cap station"
                        },
                        {
                            "supplier": "Cap supplier",
                            "input": "Cap and liner",
                            "step": "Place and torque cap",
                            "output": "Capped bottle",
                            "customer": "Labeler"
                        },
                        {
                            "supplier": "Maintenance",
                            "input": "Calibrated filler",
                            "step": "Verify fill weight",
                            "output": "Fill inspection record",
                            "customer": "QA"
                        },
                        {
                            "supplier": "QA",
                            "input": "Sampling standard",
                            "step": "Release lot",
                            "output": "Released production lot",
                            "customer": "Warehouse"
                        }
                    ],
                    "notes": "The scope starts after bottle unloading and ends before labeling. Product tank changeovers are included; supplier bottle design is excluded."
                }
            },
            {
                "id": "voc-sheet",
                "title": "VOC Sheet",
                "phase": "Define",
                "minBelt": "yellow",
                "icon": "fa-comments",
                "estimatedMinutes": 30,
                "description": "Capture customer voices, needs, sources, and priority before translating them into CTQs.",
                "fields": [
                    {
                        "key": "projectName",
                        "label": "Project name",
                        "type": "text",
                        "section": "Research scope",
                        "required": true,
                        "wide": true
                    },
                    {
                        "key": "customerSegment",
                        "label": "Customer segment",
                        "type": "text",
                        "section": "Research scope",
                        "placeholder": "Retail bottling customers"
                    },
                    {
                        "key": "method",
                        "label": "Collection method",
                        "type": "select",
                        "section": "Research scope",
                        "options": [
                            "Interviews",
                            "Focus group",
                            "Survey",
                            "Complaints",
                            "Social listening",
                            "Observation",
                            "Mixed"
                        ]
                    },
                    {
                        "key": "sampleSize",
                        "label": "People or records reviewed",
                        "type": "number",
                        "section": "Research scope",
                        "min": 1
                    },
                    {
                        "key": "period",
                        "label": "Collection period",
                        "type": "text",
                        "section": "Research scope",
                        "placeholder": "January-March 2026"
                    },
                    {
                        "key": "voices",
                        "label": "Customer voices",
                        "type": "table",
                        "section": "Voice of the customer",
                        "required": true,
                        "minRows": 4,
                        "columns": [
                            {
                                "key": "customer",
                                "label": "Customer",
                                "type": "text",
                                "placeholder": "Retail buyer"
                            },
                            {
                                "key": "verbatim",
                                "label": "Verbatim or observation",
                                "type": "text"
                            },
                            {
                                "key": "need",
                                "label": "Underlying need",
                                "type": "text"
                            },
                            {
                                "key": "source",
                                "label": "Source",
                                "type": "text",
                                "placeholder": "Interview, complaint"
                            },
                            {
                                "key": "priority",
                                "label": "Priority",
                                "type": "select",
                                "options": [
                                    "High",
                                    "Medium",
                                    "Low"
                                ]
                            }
                        ],
                        "columnKeys": {}
                    },
                    {
                        "key": "themes",
                        "label": "Themes and implications",
                        "type": "textarea",
                        "section": "Synthesis",
                        "rows": 4,
                        "wide": true
                    }
                ],
                "example": {
                    "projectName": "Reduce bottling line fill variation",
                    "customerSegment": "Retail bottling customers",
                    "method": "Mixed",
                    "sampleSize": 42,
                    "period": "January-March 2026",
                    "voices": [
                        {
                            "customer": "Retail buyer",
                            "verbatim": "Some cases look short and customers complain at the shelf.",
                            "need": "Consistent fill volume in every bottle",
                            "source": "Interview",
                            "priority": "High"
                        },
                        {
                            "customer": "Distributor",
                            "verbatim": "We are receiving more replacement credits for underfills.",
                            "need": "Reliable case quantity and quality",
                            "source": "Complaint log",
                            "priority": "High"
                        },
                        {
                            "customer": "Line operator",
                            "verbatim": "The filler drifts after changeovers and we adjust it by feel.",
                            "need": "Stable changeover setup",
                            "source": "Observation",
                            "priority": "High"
                        },
                        {
                            "customer": "Quality auditor",
                            "verbatim": "Fill records are complete but sampling is inconsistent.",
                            "need": "Traceable and consistent inspection",
                            "source": "Audit",
                            "priority": "Medium"
                        }
                    ],
                    "themes": "Customers care about bottle-to-bottle consistency and case reliability. Operators need a repeatable changeover standard. Inspection data exists but is not used quickly enough to detect drift."
                }
            },
            {
                "id": "ctq-tree",
                "title": "CTQ Tree",
                "phase": "Define",
                "minBelt": "green",
                "icon": "fa-sitemap",
                "estimatedMinutes": 30,
                "description": "Translate customer needs into drivers, critical-to-quality requirements, and measurable specifications.",
                "fields": [
                    {
                        "key": "projectName",
                        "label": "Project name",
                        "type": "text",
                        "section": "Customer need",
                        "required": true,
                        "wide": true
                    },
                    {
                        "key": "customer",
                        "label": "Primary customer",
                        "type": "text",
                        "section": "Customer need",
                        "required": true
                    },
                    {
                        "key": "need",
                        "label": "Customer need",
                        "type": "textarea",
                        "section": "Customer need",
                        "required": true,
                        "rows": 2,
                        "wide": true,
                        "placeholder": "I need every bottle to contain the labeled amount."
                    },
                    {
                        "key": "tree",
                        "label": "CTQ flow-down",
                        "type": "table",
                        "section": "CTQ flow-down",
                        "required": true,
                        "minRows": 4,
                        "columns": [
                            {
                                "key": "need",
                                "label": "Need",
                                "type": "text"
                            },
                            {
                                "key": "driver",
                                "label": "Driver",
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
                                "label": "Specification",
                                "type": "text"
                            }
                        ],
                        "columnKeys": {}
                    },
                    {
                        "key": "validation",
                        "label": "Validation with the customer",
                        "type": "textarea",
                        "section": "Validation",
                        "rows": 3,
                        "wide": true
                    }
                ],
                "example": {
                    "projectName": "Reduce bottling line fill variation",
                    "customer": "Retail bottling customer",
                    "need": "I need every bottle to contain the labeled amount and arrive in a clean, undamaged case.",
                    "tree": [
                        {
                            "need": "Correct amount",
                            "driver": "Accurate fill",
                            "ctq": "Fill volume within tolerance",
                            "measure": "Fill volume in ml",
                            "spec": "499.5-500.7 ml"
                        },
                        {
                            "need": "Correct amount",
                            "driver": "Stable filler",
                            "ctq": "Low fill variation",
                            "measure": "Standard deviation",
                            "spec": "<= 1.5 ml"
                        },
                        {
                            "need": "No leaks",
                            "driver": "Cap integrity",
                            "ctq": "Cap torque in range",
                            "measure": "Torque in N cm",
                            "spec": "18-24 N cm"
                        },
                        {
                            "need": "Clean case",
                            "driver": "No spills",
                            "ctq": "No product residue",
                            "measure": "Visual defects per case",
                            "spec": "0 defects"
                        }
                    ],
                    "validation": "Confirmed in the customer quarterly review. The customer ranked fill consistency first and case cleanliness second."
                }
            },
            {
                "id": "data-collection-plan",
                "title": "Data Collection Plan",
                "phase": "Measure",
                "minBelt": "yellow",
                "icon": "fa-clipboard-list",
                "estimatedMinutes": 35,
                "description": "Define what to measure, how to measure it, who collects it, and how measurement quality will be protected.",
                "fields": [
                    {
                        "key": "projectName",
                        "label": "Project name",
                        "type": "text",
                        "section": "Plan ownership",
                        "required": true,
                        "wide": true
                    },
                    {
                        "key": "owner",
                        "label": "Data owner",
                        "type": "text",
                        "section": "Plan ownership"
                    },
                    {
                        "key": "startDate",
                        "label": "Collection start",
                        "type": "date",
                        "section": "Plan ownership"
                    },
                    {
                        "key": "endDate",
                        "label": "Collection end",
                        "type": "date",
                        "section": "Plan ownership"
                    },
                    {
                        "key": "measures",
                        "label": "Measures",
                        "type": "table",
                        "section": "Measures and methods",
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
                                "label": "Operational definition",
                                "type": "text"
                            },
                            {
                                "key": "type",
                                "label": "Data type",
                                "type": "select",
                                "options": [
                                    "Continuous",
                                    "Attribute",
                                    "Ordinal"
                                ]
                            },
                            {
                                "key": "method",
                                "label": "Collection method",
                                "type": "text"
                            },
                            {
                                "key": "frequency",
                                "label": "Frequency",
                                "type": "text"
                            },
                            {
                                "key": "sampleSize",
                                "label": "Sample size",
                                "type": "text"
                            },
                            {
                                "key": "owner",
                                "label": "Collector",
                                "type": "text"
                            }
                        ],
                        "columnKeys": {}
                    },
                    {
                        "key": "integrity",
                        "label": "Data integrity and measurement-system checks",
                        "type": "textarea",
                        "section": "Quality controls",
                        "rows": 3,
                        "wide": true
                    },
                    {
                        "key": "risks",
                        "label": "Collection risks and contingencies",
                        "type": "textarea",
                        "section": "Quality controls",
                        "rows": 3,
                        "wide": true
                    }
                ],
                "example": {
                    "projectName": "Reduce bottling line fill variation",
                    "owner": "Jordan Lee",
                    "startDate": "2026-01-19",
                    "endDate": "2026-02-27",
                    "measures": [
                        {
                            "measure": "Fill volume",
                            "definition": "Net product volume measured by the calibrated fill gauge at the filler exit",
                            "type": "Continuous",
                            "method": "Automated gauge export",
                            "frequency": "Every 15 minutes",
                            "sampleSize": "20 consecutive bottles per shift",
                            "owner": "Line operator"
                        },
                        {
                            "measure": "Underfill rate",
                            "definition": "Bottles below 499.5 ml divided by bottles inspected",
                            "type": "Attribute",
                            "method": "QA sampling",
                            "frequency": "Hourly",
                            "sampleSize": "12 bottles",
                            "owner": "QA technician"
                        },
                        {
                            "measure": "Changeover duration",
                            "definition": "Minutes from last good bottle to first good bottle after changeover",
                            "type": "Continuous",
                            "method": "Shift log",
                            "frequency": "Each changeover",
                            "sampleSize": "All changeovers",
                            "owner": "Shift lead"
                        },
                        {
                            "measure": "Operator adjustment count",
                            "definition": "Number of filler adjustments made during a shift",
                            "type": "Attribute",
                            "method": "Observation sheet",
                            "frequency": "Each shift",
                            "sampleSize": "All shifts",
                            "owner": "Team member"
                        }
                    ],
                    "integrity": "Verify the fill gauge against a certified 500 ml check weight at the start of each shift. Two observers collect the first week in parallel. Freeze the gauge calibration record for the study.",
                    "risks": "The gauge may drift during the study. Maintenance will check calibration weekly. If the QA technician is absent, the shift lead uses the backup sampling kit."
                }
            },
            {
                "id": "fishbone",
                "title": "Fishbone Diagram",
                "phase": "Analyze",
                "minBelt": "yellow",
                "icon": "fa-fish",
                "estimatedMinutes": 30,
                "description": "Brainstorm and organize potential causes across the 6M categories before testing them with data.",
                "fields": [
                    {
                        "key": "problem",
                        "label": "Effect or problem statement",
                        "type": "textarea",
                        "section": "Problem",
                        "required": true,
                        "rows": 2,
                        "wide": true,
                        "placeholder": "Fill volume varies beyond the 499.5-500.7 ml specification."
                    },
                    {
                        "key": "team",
                        "label": "Brainstorm team",
                        "type": "text",
                        "section": "Problem",
                        "placeholder": "Operators, maintenance, QA, supervisor"
                    },
                    {
                        "key": "sessionDate",
                        "label": "Session date",
                        "type": "date",
                        "section": "Problem"
                    },
                    {
                        "key": "causes",
                        "label": "Candidate causes",
                        "type": "table",
                        "section": "6M causes",
                        "required": true,
                        "minRows": 8,
                        "columns": [
                            {
                                "key": "category",
                                "label": "Category",
                                "type": "select",
                                "options": [
                                    "Man",
                                    "Machine",
                                    "Material",
                                    "Method",
                                    "Measurement",
                                    "Mother Nature"
                                ]
                            },
                            {
                                "key": "cause",
                                "label": "Potential cause",
                                "type": "text"
                            },
                            {
                                "key": "evidence",
                                "label": "Evidence or question",
                                "type": "text"
                            },
                            {
                                "key": "priority",
                                "label": "Priority",
                                "type": "select",
                                "options": [
                                    "High",
                                    "Medium",
                                    "Low"
                                ]
                            }
                        ],
                        "columnKeys": {}
                    },
                    {
                        "key": "rootCauses",
                        "label": "Causes selected for verification",
                        "type": "textarea",
                        "section": "Verification plan",
                        "rows": 3,
                        "wide": true
                    }
                ],
                "example": {
                    "problem": "Fill volume varies beyond the 499.5-500.7 ml specification, creating underfills and product giveaway.",
                    "team": "Operators, maintenance, QA, supervisor",
                    "sessionDate": "2026-02-12",
                    "causes": [
                        {
                            "category": "Man",
                            "cause": "Operators adjust the filler by feel after changeover",
                            "evidence": "No standard adjustment method exists",
                            "priority": "High"
                        },
                        {
                            "category": "Machine",
                            "cause": "Filler valve wear",
                            "evidence": "Valve 4 was replaced twice last year",
                            "priority": "High"
                        },
                        {
                            "category": "Material",
                            "cause": "Bottle height varies by supplier lot",
                            "evidence": "Incoming inspection shows 0.6 mm range",
                            "priority": "Medium"
                        },
                        {
                            "category": "Method",
                            "cause": "Changeover purge time is not standardized",
                            "evidence": "Observed purge times from 4 to 11 minutes",
                            "priority": "High"
                        },
                        {
                            "category": "Measurement",
                            "cause": "Fill gauge not checked every shift",
                            "evidence": "Calibration log has gaps",
                            "priority": "Medium"
                        },
                        {
                            "category": "Mother Nature",
                            "cause": "Product temperature changes viscosity",
                            "evidence": "Afternoon runs show more variation",
                            "priority": "Medium"
                        }
                    ],
                    "rootCauses": "Verify changeover purge time, operator adjustment method, filler valve condition, and product temperature using the line data. Do not select a root cause until the data are reviewed."
                }
            },
            {
                "id": "five-whys",
                "title": "5 Whys",
                "phase": "Analyze",
                "minBelt": "white",
                "icon": "fa-circle-question",
                "estimatedMinutes": 20,
                "description": "Drill from a specific problem to a verified root cause and a countermeasure.",
                "fields": [
                    {
                        "key": "problem",
                        "label": "Problem statement",
                        "type": "textarea",
                        "section": "Problem",
                        "required": true,
                        "rows": 2,
                        "wide": true
                    },
                    {
                        "key": "containment",
                        "label": "Containment action",
                        "type": "textarea",
                        "section": "Problem",
                        "rows": 2,
                        "wide": true
                    },
                    {
                        "key": "why1",
                        "label": "Why 1",
                        "type": "textarea",
                        "section": "Why chain",
                        "rows": 2,
                        "wide": true
                    },
                    {
                        "key": "why2",
                        "label": "Why 2",
                        "type": "textarea",
                        "section": "Why chain",
                        "rows": 2,
                        "wide": true
                    },
                    {
                        "key": "why3",
                        "label": "Why 3",
                        "type": "textarea",
                        "section": "Why chain",
                        "rows": 2,
                        "wide": true
                    },
                    {
                        "key": "why4",
                        "label": "Why 4",
                        "type": "textarea",
                        "section": "Why chain",
                        "rows": 2,
                        "wide": true
                    },
                    {
                        "key": "why5",
                        "label": "Why 5",
                        "type": "textarea",
                        "section": "Why chain",
                        "rows": 2,
                        "wide": true
                    },
                    {
                        "key": "rootCause",
                        "label": "Verified root cause",
                        "type": "textarea",
                        "section": "Action",
                        "required": true,
                        "rows": 3,
                        "wide": true,
                        "help": "Confirm the cause with evidence, not just group consensus."
                    },
                    {
                        "key": "countermeasure",
                        "label": "Countermeasure",
                        "type": "textarea",
                        "section": "Action",
                        "required": true,
                        "rows": 3,
                        "wide": true
                    },
                    {
                        "key": "owner",
                        "label": "Action owner",
                        "type": "text",
                        "section": "Action"
                    },
                    {
                        "key": "dueDate",
                        "label": "Due date",
                        "type": "date",
                        "section": "Action"
                    },
                    {
                        "key": "verification",
                        "label": "Verification",
                        "type": "textarea",
                        "section": "Action",
                        "rows": 2,
                        "wide": true
                    }
                ],
                "example": {
                    "problem": "Line 2 produced 4.2% underfilled bottles during the first shift in January.",
                    "containment": "All suspect lots were quarantined and re-inspected. The filler was stopped while the team reviewed the setup.",
                    "why1": "The filler was not delivering the target volume at the start of the run.",
                    "why2": "The filler was not purged long enough after the product changeover.",
                    "why3": "The changeover standard does not specify a purge time.",
                    "why4": "The standard was written before the new product formulation was introduced.",
                    "why5": "The change control process did not require the filler setup standard to be reviewed when viscosity changed.",
                    "rootCause": "The changeover standard was not updated after the product formulation changed, allowing inconsistent purge times.",
                    "countermeasure": "Add product-specific purge times and a verification bottle check to the changeover standard.",
                    "owner": "Mateo Ruiz",
                    "dueDate": "2026-03-20",
                    "verification": "Audit the next 10 changeovers and confirm the first bottle meets the fill target before production release."
                }
            },
            {
                "id": "pareto",
                "title": "Pareto Analysis",
                "phase": "Analyze",
                "minBelt": "yellow",
                "icon": "fa-chart-column",
                "estimatedMinutes": 25,
                "description": "Rank defect or problem categories and separate the vital few from the useful many.",
                "fields": [
                    {
                        "key": "problem",
                        "label": "Issue being analyzed",
                        "type": "text",
                        "section": "Data source",
                        "required": true,
                        "wide": true,
                        "placeholder": "Bottling line defects, January-March 2026"
                    },
                    {
                        "key": "dataSource",
                        "label": "Data source",
                        "type": "text",
                        "section": "Data source",
                        "placeholder": "QA defect log"
                    },
                    {
                        "key": "period",
                        "label": "Period",
                        "type": "text",
                        "section": "Data source",
                        "placeholder": "January-March 2026"
                    },
                    {
                        "key": "counts",
                        "label": "Category counts",
                        "type": "table",
                        "section": "Category counts",
                        "required": true,
                        "minRows": 6,
                        "sortBy": "count",
                        "sortLabel": "Sort by count",
                        "help": "Enter counts, then sort descending. Share and cumulative percentage are calculated automatically.",
                        "columns": [
                            {
                                "key": "category",
                                "label": "Category",
                                "type": "text",
                                "placeholder": "Underfill"
                            },
                            {
                                "key": "count",
                                "label": "Count",
                                "type": "number",
                                "min": 0,
                                "step": 1
                            },
                            {
                                "key": "share",
                                "label": "Share",
                                "compute": {
                                    "op": "percentOfTotal",
                                    "field": "count"
                                }
                            },
                            {
                                "key": "cumulative",
                                "label": "Cumulative",
                                "compute": {
                                    "op": "cumulativePercent",
                                    "field": "count"
                                }
                            }
                        ],
                        "columnKeys": {}
                    },
                    {
                        "key": "conclusion",
                        "label": "Conclusion and focus",
                        "type": "textarea",
                        "section": "Conclusion",
                        "rows": 3,
                        "wide": true,
                        "help": "Identify the few categories that account for roughly 80% of the total."
                    }
                ],
                "example": {
                    "problem": "Bottling line defects, January-March 2026",
                    "dataSource": "QA defect log",
                    "period": "January-March 2026",
                    "counts": [
                        {
                            "category": "Underfill",
                            "count": 86
                        },
                        {
                            "category": "Label misalignment",
                            "count": 24
                        },
                        {
                            "category": "Cap torque",
                            "count": 18
                        },
                        {
                            "category": "Seal damage",
                            "count": 11
                        },
                        {
                            "category": "Overfill",
                            "count": 9
                        },
                        {
                            "category": "Dirty bottle",
                            "count": 4
                        }
                    ],
                    "conclusion": "Underfill is the largest category and, together with label misalignment and cap torque, accounts for most of the defect count. Focus the first improvement cycle on underfill."
                }
            },
            {
                "id": "fmea",
                "title": "FMEA",
                "phase": "Analyze",
                "minBelt": "green",
                "icon": "fa-triangle-exclamation",
                "estimatedMinutes": 45,
                "description": "Prioritize failure modes by severity, occurrence, and detection, with automatic RPN calculation.",
                "fields": [
                    {
                        "key": "processName",
                        "label": "Process or product",
                        "type": "text",
                        "section": "Study scope",
                        "required": true,
                        "wide": true
                    },
                    {
                        "key": "team",
                        "label": "FMEA team",
                        "type": "text",
                        "section": "Study scope"
                    },
                    {
                        "key": "reviewDate",
                        "label": "Review date",
                        "type": "date",
                        "section": "Study scope"
                    },
                    {
                        "key": "scope",
                        "label": "Scope and assumptions",
                        "type": "textarea",
                        "section": "Study scope",
                        "rows": 2,
                        "wide": true
                    },
                    {
                        "key": "failures",
                        "label": "Failure modes",
                        "type": "table",
                        "section": "Failure modes",
                        "required": true,
                        "minRows": 5,
                        "help": "Rate severity, occurrence, and detection from 1 to 10. RPN = S x O x D and updates automatically. RPN 200 or higher is highlighted red; 100-199 amber.",
                        "columns": [
                            {
                                "key": "step",
                                "label": "Process step",
                                "type": "text"
                            },
                            {
                                "key": "failure",
                                "label": "Failure mode",
                                "type": "text"
                            },
                            {
                                "key": "effect",
                                "label": "Effect",
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
                                    "op": "multiply",
                                    "fields": [
                                        "severity",
                                        "occurrence",
                                        "detection"
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
                                "label": "Recommended action",
                                "type": "text"
                            },
                            {
                                "key": "owner",
                                "label": "Owner",
                                "type": "text"
                            },
                            {
                                "key": "status",
                                "label": "Status",
                                "type": "select",
                                "options": [
                                    "Open",
                                    "In progress",
                                    "Complete"
                                ]
                            }
                        ],
                        "columnKeys": {}
                    },
                    {
                        "key": "actions",
                        "label": "Priority actions and review notes",
                        "type": "textarea",
                        "section": "Action plan",
                        "rows": 3,
                        "wide": true
                    }
                ],
                "example": {
                    "processName": "Bottling line 2 fill and cap",
                    "team": "Maintenance, operators, QA, engineering",
                    "reviewDate": "2026-02-20",
                    "scope": "Focus on fill, cap, and changeover steps. Packaging and palletizing are out of scope for this review.",
                    "failures": [
                        {
                            "step": "Fill bottle",
                            "failure": "Underfill",
                            "effect": "Customer complaint and rework",
                            "severity": 8,
                            "occurrence": 6,
                            "detection": 4,
                            "action": "Install product-specific purge standard and verify first bottle",
                            "owner": "Jordan Lee",
                            "status": "In progress"
                        },
                        {
                            "step": "Fill bottle",
                            "failure": "Overfill",
                            "effect": "Product giveaway and spill",
                            "severity": 5,
                            "occurrence": 4,
                            "detection": 3,
                            "action": "Add automatic fill-volume trend alarm",
                            "owner": "Avery Chen",
                            "status": "Open"
                        },
                        {
                            "step": "Place cap",
                            "failure": "Low cap torque",
                            "effect": "Leak during transit",
                            "severity": 9,
                            "occurrence": 3,
                            "detection": 5,
                            "action": "Add torque verification every 30 minutes",
                            "owner": "QA technician",
                            "status": "Open"
                        },
                        {
                            "step": "Changeover",
                            "failure": "Wrong filler recipe selected",
                            "effect": "Wrong fill volume for entire run",
                            "severity": 8,
                            "occurrence": 2,
                            "detection": 2,
                            "action": "Add recipe scan interlock before start",
                            "owner": "Engineering",
                            "status": "Open"
                        },
                        {
                            "step": "Fill bottle",
                            "failure": "Worn fill valve",
                            "effect": "Inconsistent volume across nozzles",
                            "severity": 7,
                            "occurrence": 4,
                            "detection": 6,
                            "action": "Add valve wear inspection to preventive maintenance",
                            "owner": "Maintenance",
                            "status": "Open"
                        }
                    ],
                    "actions": "Prioritize the wrong-recipe interlock and underfill purge standard because they combine high severity with weak detection. Re-score the FMEA after the pilot."
                }
            },
            {
                "id": "solution-matrix",
                "title": "Solution Matrix",
                "phase": "Improve",
                "minBelt": "green",
                "icon": "fa-table-cells-large",
                "estimatedMinutes": 30,
                "description": "Compare candidate solutions against impact, feasibility, cost, and risk using a transparent score.",
                "fields": [
                    {
                        "key": "problem",
                        "label": "Problem or opportunity",
                        "type": "text",
                        "section": "Decision context",
                        "required": true,
                        "wide": true
                    },
                    {
                        "key": "decisionOwner",
                        "label": "Decision owner",
                        "type": "text",
                        "section": "Decision context"
                    },
                    {
                        "key": "decisionDate",
                        "label": "Decision date",
                        "type": "date",
                        "section": "Decision context"
                    },
                    {
                        "key": "criteria",
                        "label": "Scoring guidance",
                        "type": "textarea",
                        "section": "Decision context",
                        "rows": 2,
                        "wide": true,
                        "help": "Use a 1-5 scale for every criterion. The total gives equal weight to each criterion; adjust the discussion if the team uses different weights."
                    },
                    {
                        "key": "solutions",
                        "label": "Candidate solutions",
                        "type": "table",
                        "section": "Solution scoring",
                        "required": true,
                        "minRows": 4,
                        "help": "Score impact, feasibility, cost, and risk from 1 (poor) to 5 (excellent). Total is calculated automatically.",
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
                                "label": "Feasibility",
                                "type": "number",
                                "min": 1,
                                "max": 5,
                                "step": 1,
                                "width": "78px"
                            },
                            {
                                "key": "cost",
                                "label": "Cost",
                                "type": "number",
                                "min": 1,
                                "max": 5,
                                "step": 1,
                                "width": "78px"
                            },
                            {
                                "key": "risk",
                                "label": "Risk",
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
                                    "op": "sum",
                                    "fields": [
                                        "impact",
                                        "feasibility",
                                        "cost",
                                        "risk"
                                    ]
                                },
                                "thresholds": {
                                    "high": 17,
                                    "medium": 13
                                },
                                "tone": "good",
                                "width": "72px"
                            },
                            {
                                "key": "decision",
                                "label": "Decision",
                                "type": "select",
                                "options": [
                                    "Selected",
                                    "Pilot",
                                    "Hold",
                                    "Rejected"
                                ]
                            }
                        ],
                        "columnKeys": {}
                    },
                    {
                        "key": "rationale",
                        "label": "Decision rationale",
                        "type": "textarea",
                        "section": "Decision",
                        "rows": 3,
                        "wide": true
                    }
                ],
                "example": {
                    "problem": "Reduce changeover variation and underfills on line 2.",
                    "decisionOwner": "Priya Shah",
                    "decisionDate": "2026-04-10",
                    "criteria": "Impact reflects expected defect reduction. Feasibility reflects downtime and skills. Cost reflects implementation expense. Risk reflects safety and product-quality exposure.",
                    "solutions": [
                        {
                            "solution": "Product-specific purge standard",
                            "impact": 5,
                            "feasibility": 5,
                            "cost": 5,
                            "risk": 4,
                            "decision": "Selected"
                        },
                        {
                            "solution": "Automatic fill trend alarm",
                            "impact": 4,
                            "feasibility": 3,
                            "cost": 3,
                            "risk": 4,
                            "decision": "Pilot"
                        },
                        {
                            "solution": "Replace all filler valves",
                            "impact": 4,
                            "feasibility": 2,
                            "cost": 1,
                            "risk": 3,
                            "decision": "Hold"
                        },
                        {
                            "solution": "Add a second operator check",
                            "impact": 2,
                            "feasibility": 4,
                            "cost": 4,
                            "risk": 3,
                            "decision": "Rejected"
                        }
                    ],
                    "rationale": "The purge standard has the best balance of impact, feasibility, cost, and risk. The trend alarm is a useful second phase if pilot results show drift between inspections."
                }
            },
            {
                "id": "control-plan",
                "title": "Control Plan",
                "phase": "Control",
                "minBelt": "green",
                "icon": "fa-sliders",
                "estimatedMinutes": 40,
                "description": "Document how the improved process will be monitored, who responds, and what happens when a signal occurs.",
                "fields": [
                    {
                        "key": "processName",
                        "label": "Process name",
                        "type": "text",
                        "section": "Plan ownership",
                        "required": true,
                        "wide": true
                    },
                    {
                        "key": "owner",
                        "label": "Process owner",
                        "type": "text",
                        "section": "Plan ownership"
                    },
                    {
                        "key": "effectiveDate",
                        "label": "Effective date",
                        "type": "date",
                        "section": "Plan ownership"
                    },
                    {
                        "key": "revision",
                        "label": "Revision",
                        "type": "text",
                        "section": "Plan ownership",
                        "placeholder": "1.0"
                    },
                    {
                        "key": "controls",
                        "label": "Control items",
                        "type": "table",
                        "section": "Control items",
                        "required": true,
                        "minRows": 5,
                        "columns": [
                            {
                                "key": "step",
                                "label": "Process step",
                                "type": "text"
                            },
                            {
                                "key": "item",
                                "label": "Control item",
                                "type": "text"
                            },
                            {
                                "key": "spec",
                                "label": "Specification",
                                "type": "text"
                            },
                            {
                                "key": "method",
                                "label": "Control method",
                                "type": "text"
                            },
                            {
                                "key": "frequency",
                                "label": "Frequency",
                                "type": "text"
                            },
                            {
                                "key": "owner",
                                "label": "Owner",
                                "type": "text"
                            },
                            {
                                "key": "reaction",
                                "label": "Reaction plan",
                                "type": "text"
                            }
                        ],
                        "columnKeys": {}
                    },
                    {
                        "key": "monitoring",
                        "label": "Monitoring and escalation notes",
                        "type": "textarea",
                        "section": "Monitoring",
                        "rows": 3,
                        "wide": true
                    }
                ],
                "example": {
                    "processName": "Bottling line 2 fill process",
                    "owner": "Priya Shah",
                    "effectiveDate": "2026-06-01",
                    "revision": "1.0",
                    "controls": [
                        {
                            "step": "Changeover",
                            "item": "Purge time",
                            "spec": "Product A: 8 minutes",
                            "method": "Setup checklist and first-bottle check",
                            "frequency": "Each changeover",
                            "owner": "Line operator",
                            "reaction": "Stop line; repeat purge; notify shift lead"
                        },
                        {
                            "step": "Fill",
                            "item": "Fill volume",
                            "spec": "499.5-500.7 ml",
                            "method": "Fill gauge and hourly QA sample",
                            "frequency": "Every 15 minutes",
                            "owner": "Line operator",
                            "reaction": "Adjust filler; quarantine since last good check"
                        },
                        {
                            "step": "Cap",
                            "item": "Cap torque",
                            "spec": "18-24 N cm",
                            "method": "Torque tester",
                            "frequency": "Every 30 minutes",
                            "owner": "QA technician",
                            "reaction": "Replace cap head; re-test; hold product"
                        },
                        {
                            "step": "Measurement",
                            "item": "Fill gauge calibration",
                            "spec": "Within 0.2 ml of check weight",
                            "method": "Certified check weight",
                            "frequency": "Start of shift",
                            "owner": "Shift lead",
                            "reaction": "Recalibrate or remove gauge from service"
                        },
                        {
                            "step": "Response",
                            "item": "Trend alarm",
                            "spec": "Three consecutive points on one side of center",
                            "method": "SPC chart review",
                            "frequency": "Each shift",
                            "owner": "Process owner",
                            "reaction": "Open investigation and review maintenance record"
                        }
                    ],
                    "monitoring": "The process owner reviews the SPC dashboard daily. A repeated signal triggers a 30-minute containment check. Escalate to the plant manager if two signals occur in one week."
                }
            },
            {
                "id": "project-closure",
                "title": "Project Closure Checklist",
                "phase": "Control",
                "minBelt": "green",
                "icon": "fa-clipboard-check",
                "estimatedMinutes": 25,
                "description": "Confirm results, handoff, documentation, and lessons learned before closing the project.",
                "fields": [
                    {
                        "key": "projectName",
                        "label": "Project name",
                        "type": "text",
                        "section": "Project summary",
                        "required": true,
                        "wide": true
                    },
                    {
                        "key": "projectLead",
                        "label": "Project lead",
                        "type": "text",
                        "section": "Project summary"
                    },
                    {
                        "key": "sponsor",
                        "label": "Sponsor",
                        "type": "text",
                        "section": "Project summary"
                    },
                    {
                        "key": "closureDate",
                        "label": "Closure date",
                        "type": "date",
                        "section": "Project summary"
                    },
                    {
                        "key": "resultsSummary",
                        "label": "Results summary",
                        "type": "textarea",
                        "section": "Results",
                        "required": true,
                        "rows": 3,
                        "wide": true,
                        "placeholder": "Baseline, target, actual result, and financial benefit."
                    },
                    {
                        "key": "lessonsLearned",
                        "label": "Lessons learned",
                        "type": "textarea",
                        "section": "Results",
                        "required": true,
                        "rows": 3,
                        "wide": true
                    },
                    {
                        "key": "closureChecklist",
                        "label": "Closure checklist",
                        "type": "checklist",
                        "section": "Closure checklist",
                        "required": true,
                        "items": [
                            "Project objectives and CTQs were met",
                            "Improvement results were validated with data",
                            "Control plan is active and owned",
                            "Process documentation and training were updated",
                            "Financial benefits were verified with Finance",
                            "Lessons learned were captured and shared",
                            "Team and sponsor recognition is complete",
                            "Sponsor approved project closure"
                        ]
                    },
                    {
                        "key": "signoff",
                        "label": "Sign-off",
                        "type": "table",
                        "section": "Sign-off",
                        "required": true,
                        "minRows": 3,
                        "columns": [
                            {
                                "key": "role",
                                "label": "Role",
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
                                    "Pending",
                                    "Signed"
                                ]
                            }
                        ],
                        "columnKeys": {}
                    }
                ],
                "example": {
                    "projectName": "Reduce bottling line fill variation",
                    "projectLead": "Jordan Lee",
                    "sponsor": "Priya Shah",
                    "closureDate": "2026-06-28",
                    "resultsSummary": "Fill standard deviation fell from 3.8 ml to 1.3 ml, beating the 1.5 ml target. Underfill rate fell from 4.2% to 0.3%. Finance verified $61,000 in annual benefit.",
                    "lessonsLearned": "The changeover standard was the highest-leverage control. Involving operators in the pilot improved adoption. Earlier gauge verification would have shortened the Measure phase.",
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
                            "role": "Project lead",
                            "name": "Jordan Lee",
                            "date": "2026-06-28",
                            "status": "Signed"
                        },
                        {
                            "role": "Process owner",
                            "name": "Priya Shah",
                            "date": "2026-06-28",
                            "status": "Signed"
                        },
                        {
                            "role": "Finance",
                            "name": "Dana Brooks",
                            "date": "2026-06-27",
                            "status": "Signed"
                        }
                    ]
                }
            }
        ]
    };
    if (typeof module === "object" && module.exports) module.exports = catalog;
    root.RESOURCE_CATALOG = catalog;
}(typeof globalThis !== "undefined" ? globalThis : this));
