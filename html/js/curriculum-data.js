// Auto-generated from data/curriculum.json and data/lessons/*.json. Do not edit by hand.
// Run: node scripts/build-curriculum.js
const curriculumData = {
  "version": "2.0",
  "updated": "2026-10-29",
  "source": "Aligned to ASQ, IASSC, and ISO 13053 Bodies of Knowledge",
  "belts": [
    {
      "id": "white",
      "name": "White Belt",
      "level": 1,
      "color": "white",
      "icon": "fa-medal",
      "lessonTarget": "8-10",
      "studyTime": "6-8 hours",
      "audience": "New employees, frontline staff, supervisors, and anyone joining an improvement project for the first time.",
      "prerequisites": "None. Start here with zero prior knowledge.",
      "previousRecap": "No previous belt. This course starts with the shared language of quality, waste, variation, and DMAIC.",
      "outcomes": [
        "Explain what Lean Six Sigma is and where it came from",
        "Recognize waste, variation, defects, and cost of poor quality",
        "Describe VOC, CTQ, DMAIC, and the belt roles",
        "Contribute useful data and ideas to a team project"
      ],
      "modules": [
        {
          "id": "white-1",
          "number": 1,
          "title": "Quality Foundations",
          "duration": "90 min",
          "summary": "Build the shared language of quality: where Six Sigma and Lean came from, why poor quality costs money, how customers define value, and why variation matters.",
          "lessons": [
            {
              "id": "W1.1",
              "order": 1,
              "title": "History of Six Sigma and Lean",
              "objective": "Trace Six Sigma from Motorola and GE, and Lean from the Toyota Production System.",
              "content": {
                "why": "Knowing where Lean and Six Sigma came from helps you see why the tools exist. They were not invented as theory; they were practical responses to real quality and speed problems.",
                "what": "Six Sigma is a quality method that reduces variation and defects. Motorola developed it in the 1980s, and Bill Smith was a key architect. General Electric and Jack Welch made it famous in the 1990s. Lean is a speed and flow method that grew from the Toyota Production System, led by Taiichi Ohno. Lean removes waste; Six Sigma reduces variation. Lean Six Sigma combines both.",
                "how": [
                  "Start with the customer requirement, not with the tool.",
                  "Measure the current defect rate or lead time.",
                  "Use DMAIC to find and reduce variation.",
                  "Use Lean tools to remove waiting, motion, inventory, and rework.",
                  "Standardize the improved method and keep measuring."
                ],
                "where": "Use the history as context, not as proof. A hospital might use Six Sigma to reduce medication errors and Lean to shorten patient wait times. A bank might use Six Sigma to reduce loan rework and Lean to speed approvals. IT teams use both to reduce release defects and waiting between teams.",
                "when_not": "Do not copy a famous program just because GE or Toyota used it. Do not treat Lean as a license to cut staff, and do not treat Six Sigma as only a statistics class.",
                "common_mistakes": [
                  "Thinking Lean is only about tools and Six Sigma is only about math.",
                  "Copying another organization's program without adapting it to the local process.",
                  "Using history to justify a solution before collecting data."
                ],
                "quick_check": [
                  {
                    "q": "Which company developed Six Sigma?",
                    "answer": "Motorola.",
                    "explanation": "Motorola developed Six Sigma in the 1980s; GE later popularized it."
                  },
                  {
                    "q": "What is the main focus of Lean?",
                    "answer": "Removing waste and improving flow.",
                    "explanation": "Lean grew from the Toyota Production System and focuses on value, flow, pull, and waste removal."
                  },
                  {
                    "q": "Why combine Lean and Six Sigma?",
                    "answer": "Lean improves speed and flow while Six Sigma improves quality and consistency.",
                    "explanation": "Together they address both waste and variation."
                  }
                ],
                "recap": [
                  "Six Sigma reduces variation and defects; Motorola and GE are central to its history.",
                  "Lean reduces waste and improves flow; it grew from Toyota.",
                  "Lean Six Sigma combines both, but the customer requirement always comes first."
                ]
              }
            },
            {
              "id": "W1.2",
              "order": 2,
              "title": "Quality Basics and Cost of Poor Quality",
              "objective": "Define quality, prevention, appraisal, and failure costs, and calculate a simple COPQ example.",
              "content": {
                "why": "Poor quality is expensive, but the cost is often hidden in rework, returns, inspections, and lost customers. Leaders prioritize problems they can see in money and customer impact.",
                "what": "Quality means meeting customer requirements consistently. It is not the same as luxury or grade. Cost of poor quality (COPQ) is the total cost of not doing work right the first time. It has four parts: prevention costs such as training and design reviews, appraisal costs such as inspection and testing, internal failure costs such as scrap and rework before delivery, and external failure costs such as returns, complaints, warranty, and lost business.",
                "how": [
                  "List the four COPQ categories.",
                  "Estimate the cost in each category for one process or month.",
                  "Add the categories to get total COPQ.",
                  "Divide by units or revenue to compare fairly.",
                  "Prioritize the largest controllable category."
                ],
                "where": "A clinic can count readmission costs, a retailer can count returns and reshipment, a factory can count scrap and rework, and an IT team can count bug-fix hours. Use COPQ when you need a business case or a priority list.",
                "when_not": "Do not use COPQ as a full accounting system or double-count costs that are already in another category. Do not use it to shame individuals; the purpose is to improve the process.",
                "common_mistakes": [
                  "Counting only scrap and ignoring inspection, rework, and lost customers.",
                  "Double-counting the same cost in two categories.",
                  "Using rough estimates as exact financial results without validation."
                ],
                "quick_check": [
                  {
                    "q": "Which of these is an external failure cost?",
                    "answer": "Customer returns and warranty claims.",
                    "explanation": "External failures happen after the customer receives the product or service."
                  },
                  {
                    "q": "A process makes 1,000 units, has 40 defects, and each defect costs $25 to fix. What is the internal failure cost?",
                    "answer": "$1,000.",
                    "explanation": "40 defects x $25 = $1,000."
                  },
                  {
                    "q": "What are the four COPQ categories?",
                    "answer": "Prevention, appraisal, internal failure, and external failure.",
                    "explanation": "These four categories cover the cost of poor quality."
                  }
                ],
                "recap": [
                  "Quality means consistently meeting customer requirements.",
                  "COPQ includes prevention, appraisal, internal failure, and external failure costs.",
                  "Use COPQ to prioritize improvements and build a business case, not to blame people."
                ]
              }
            },
            {
              "id": "W1.3",
              "order": 3,
              "title": "Customers: VOC and CTQ",
              "objective": "Turn customer wants into measurable critical-to-quality requirements.",
              "content": {
                "why": "Improvement only matters if it changes something customers care about. A process can look faster or cheaper internally while making the customer experience worse.",
                "what": "Voice of the customer (VOC) is the collection of customer needs, wants, complaints, and expectations. Critical to quality (CTQ) is a measurable requirement derived from the VOC. A CTQ tree links a broad customer need to a driver and then to a measurable characteristic. For example, 'I want a quick answer' can become 'time to first response under four hours.'",
                "how": [
                  "Collect VOC from interviews, surveys, complaints, and observation.",
                  "Group similar statements into themes.",
                  "Translate each theme into a measurable CTQ.",
                  "Set a target or specification and a measurement method.",
                  "Check the CTQ with customers or front-line staff."
                ],
                "where": "Use VOC and CTQ in every industry. In healthcare, 'I want to be seen quickly' can become 'arrival-to-clinician time under 20 minutes.' In banking, 'I want to know my loan status' can become 'status update within one business day.' In education, 'I want useful feedback' can become 'feedback returned within five days.'",
                "when_not": "Do not rely only on a survey if you can observe the process. Do not create a CTQ without a real customer or a clear internal customer. Do not use VOC when the requirement is a legal or safety rule; those are mandatory requirements, not preferences.",
                "common_mistakes": [
                  "Confusing a solution with a need, such as 'we need a new app' instead of 'we need faster answers.'",
                  "Creating too many CTQs and losing focus.",
                  "Writing a CTQ that cannot be measured."
                ],
                "quick_check": [
                  {
                    "q": "What does VOC stand for?",
                    "answer": "Voice of the customer.",
                    "explanation": "VOC is the collection of customer needs and expectations."
                  },
                  {
                    "q": "What makes a good CTQ?",
                    "answer": "It is measurable and linked to a customer need.",
                    "explanation": "A CTQ translates a need into something the process can measure."
                  },
                  {
                    "q": "A customer says 'I want my order to arrive on time.' Which CTQ is best?",
                    "answer": "Percentage of orders delivered by the promised date.",
                    "explanation": "This CTQ is measurable and directly reflects the customer need."
                  }
                ],
                "recap": [
                  "VOC captures what customers need and value.",
                  "CTQ translates VOC into a measurable requirement.",
                  "A useful CTQ has a clear target, measurement method, and customer link."
                ]
              }
            },
            {
              "id": "W1.4",
              "order": 4,
              "title": "Variation and Defects",
              "objective": "Explain common and special cause variation and define a defect in plain language.",
              "content": {
                "why": "Variation makes processes unpredictable. Even when the average looks good, variation can create defects, delays, and unhappy customers.",
                "what": "Variation is the difference between outputs or process results over time. Common cause variation is normal and built into the process. Special cause variation comes from a specific event, such as a machine failure, a new supplier, or a sudden demand spike. A defect is an output that does not meet a specification or requirement. A defective unit may have one or more defects.",
                "how": [
                  "Define the characteristic and specification.",
                  "Collect data in time order.",
                  "Plot a run chart or histogram.",
                  "Look for patterns, outliers, and shifts.",
                  "Remove special causes first, then reduce common cause variation."
                ],
                "where": "A coffee shop can track service time; a hospital can track waiting time; a software team can track release defects; a bank can track approval times. Use variation analysis whenever the process is stable enough to study and the customer has a measurable requirement.",
                "when_not": "Do not react to every single data point as if it were special cause; that is tampering and usually makes things worse. Do not try to reduce variation in a process that is fundamentally incapable and needs redesign.",
                "common_mistakes": [
                  "Treating normal common cause variation as a special event.",
                  "Blaming an individual for variation caused by the process.",
                  "Using too few data points to see a pattern."
                ],
                "quick_check": [
                  {
                    "q": "What is common cause variation?",
                    "answer": "Normal variation built into a stable process.",
                    "explanation": "Common cause variation is the ongoing, expected variation of the process."
                  },
                  {
                    "q": "A service time is usually 5-7 minutes, but one customer waits 45 minutes. What type of variation is the 45-minute wait likely to be?",
                    "answer": "Special cause variation.",
                    "explanation": "It is an unusual event outside the normal pattern."
                  },
                  {
                    "q": "What is a defect?",
                    "answer": "An output that does not meet a specification or requirement.",
                    "explanation": "A defect is a failure to meet a requirement."
                  }
                ],
                "recap": [
                  "Variation is the difference in process outputs over time.",
                  "Common cause variation is normal; special cause variation comes from a specific source.",
                  "Reduce special causes first, then work on common cause variation."
                ]
              }
            },
            {
              "id": "W1.5",
              "order": 5,
              "title": "DMAIC Overview",
              "objective": "Describe the five DMAIC phases and the main question each phase answers.",
              "content": {
                "why": "DMAIC gives teams a disciplined path from a vague problem to a proven solution. It prevents jumping to fixes and helps keep the gain.",
                "what": "DMAIC stands for Define, Measure, Analyze, Improve, Control. Define clarifies the problem, customer, goal, and scope. Measure establishes a baseline and checks the data. Analyze finds root causes. Improve selects and tests solutions. Control standardizes and monitors the new process. Each phase ends with a gate review.",
                "how": [
                  "Define: write a problem statement, goal, scope, and team.",
                  "Measure: collect baseline data and validate the measurement system.",
                  "Analyze: use graphs, root cause tools, and tests to find causes.",
                  "Improve: choose a solution, pilot it, and confirm the result.",
                  "Control: document the standard, monitor the metric, and assign an owner."
                ],
                "where": "Use DMAIC for improving an existing process in healthcare, banking, retail, manufacturing, IT, or education. For example, a lab has 30% late reports. Define the problem and goal; Measure the baseline; Analyze the courier pickup and batching; Improve with a barcode scan; Control with a daily chart and an owner. Use DMADV instead when designing a new process from scratch.",
                "when_not": "Do not use DMAIC for a simple, obvious fix or an urgent safety issue; use a quick kaizen or immediate containment first. Do not skip Measure just because the team thinks it knows the problem.",
                "common_mistakes": [
                  "Jumping from Define straight to Improve.",
                  "Skipping baseline measurement, so the team cannot prove the gain.",
                  "Ending the project without a control plan and owner."
                ],
                "quick_check": [
                  {
                    "q": "What are the five DMAIC phases in order?",
                    "answer": "Define, Measure, Analyze, Improve, Control.",
                    "explanation": "DMAIC is the standard improvement sequence."
                  },
                  {
                    "q": "Which phase establishes the baseline?",
                    "answer": "Measure.",
                    "explanation": "The Measure phase defines and collects the baseline data."
                  },
                  {
                    "q": "What is the purpose of the Control phase?",
                    "answer": "To standardize and monitor the improved process so the gain lasts.",
                    "explanation": "Control confirms the new method and assigns ongoing ownership."
                  }
                ],
                "recap": [
                  "DMAIC is a five-phase path from problem to sustained improvement.",
                  "Measure and Analyze prevent guessing; Improve tests solutions.",
                  "Control is what makes the gain last."
                ]
              }
            }
          ]
        },
        {
          "id": "white-2",
          "number": 2,
          "title": "People, Waste, and First Projects",
          "duration": "80 min",
          "summary": "Learn to see the eight wastes, understand who does what on a project, and adopt the culture and habits that make improvement stick.",
          "lessons": [
            {
              "id": "W2.1",
              "order": 1,
              "title": "The 8 Wastes",
              "objective": "Identify the eight wastes in healthcare, retail, manufacturing, IT, banking, and education.",
              "content": {
                "why": "Waste is work that consumes time, money, or effort without adding value for the customer. Learning to see waste is the first practical Lean skill because most of it is hidden in plain sight.",
                "what": "Lean defines eight wastes, often remembered as TIMWOODS: transportation, inventory, motion, waiting, overproduction, overprocessing, defects, and unused skills. Value is what the customer is willing to pay for; waste is everything else. Some waste is necessary, such as legally required inspection, so the goal is to reduce it, not blindly delete it.",
                "how": [
                  "Walk the process from start to finish and list every step.",
                  "Mark each step as value-added, necessary non-value-added, or waste.",
                  "Classify the waste using the eight categories.",
                  "Measure the waste in time, cost, distance, or defects.",
                  "Choose one waste, test a small change, and remeasure."
                ],
                "where": "In a clinic, patients waiting is waiting waste, staff walking to a distant printer is motion, expired supplies are inventory, and re-entering the same data is overprocessing. In IT, waiting for approvals is waiting, unused developer skills is unused talent, and reopened tickets are defects. Use the eight wastes whenever you need a quick, shared language for what is slowing a process down.",
                "when_not": "Do not remove a step just because it looks like waste. Safety checks, regulatory reviews, and customer-required approvals may be necessary non-value-added work.",
                "common_mistakes": [
                  "Equating waste reduction with headcount reduction.",
                  "Confusing busy people with valuable work.",
                  "Removing a control that prevents a serious defect."
                ],
                "quick_check": [
                  {
                    "q": "What does the W in TIMWOODS stand for?",
                    "answer": "Waiting.",
                    "explanation": "TIMWOODS: transportation, inventory, motion, waiting, overproduction, overprocessing, defects, skills."
                  },
                  {
                    "q": "A nurse walks 200 meters to collect supplies each hour. Which waste is this?",
                    "answer": "Motion.",
                    "explanation": "The walking itself does not add value for the patient."
                  },
                  {
                    "q": "Is all non-value-added work waste that should be removed?",
                    "answer": "No. Some non-value-added work is necessary, such as safety or legal checks.",
                    "explanation": "Necessary non-value-added work should be reduced where possible, not eliminated blindly."
                  }
                ],
                "recap": [
                  "The eight wastes are transportation, inventory, motion, waiting, overproduction, overprocessing, defects, and unused skills.",
                  "Value is defined by the customer.",
                  "Some non-value-added work is necessary; reduce it carefully."
                ]
              }
            },
            {
              "id": "W2.2",
              "order": 2,
              "title": "Roles and Responsibilities",
              "objective": "Explain the White, Yellow, Green, Black, and Master Black Belt roles and the sponsor role.",
              "content": {
                "why": "Improvement projects stall when no one knows who decides, who does the work, and who owns the result. Clear roles turn good intentions into completed projects.",
                "what": "A sponsor or champion provides authority, resources, and help removing barriers. The process owner owns the process after the project and sustains the gain. A Black Belt leads complex projects full-time and coaches others. A Green Belt leads projects part-time in their own area. Yellow and White Belts participate and lead small local improvements. A Master Black Belt governs deployment and develops capability. Team members, subject-matter experts, data owners, and finance partners provide knowledge and validation.",
                "how": [
                  "Name the sponsor and confirm what decisions they can make.",
                  "Identify the process owner who will live with the change.",
                  "Choose a lead and a small team with the needed knowledge.",
                  "Agree time commitments and meeting cadence.",
                  "Write a simple RACI: who is responsible, accountable, consulted, and informed."
                ],
                "where": "Use role clarity on every project, especially cross-functional ones. In a hospital discharge project, the sponsor might be the chief operating officer, the process owner the ward manager, the lead a Green Belt nurse, and the data owner an IT analyst. In a bank, the process owner might be the operations manager and the finance partner validates the benefit.",
                "when_not": "Do not create a role for every task or invite everyone to every meeting. Do not accept a sponsor who cannot remove barriers, and do not wait until the end to identify the process owner.",
                "common_mistakes": [
                  "A sponsor in name only who never attends or decides.",
                  "No process owner, so the gain disappears after the project.",
                  "A team so large that decisions and accountability disappear."
                ],
                "quick_check": [
                  {
                    "q": "Who owns the process after the improvement project ends?",
                    "answer": "The process owner.",
                    "explanation": "The process owner sustains the new standard and monitors performance."
                  },
                  {
                    "q": "What is the main role of a project sponsor?",
                    "answer": "Provide authority, resources, and help remove barriers.",
                    "explanation": "The sponsor is the senior owner who enables the project."
                  },
                  {
                    "q": "What does RACI stand for?",
                    "answer": "Responsible, accountable, consulted, informed.",
                    "explanation": "RACI clarifies decision rights and communication."
                  }
                ],
                "recap": [
                  "Every project needs a sponsor, a process owner, and a clear lead.",
                  "Match the belt role to project complexity and time availability.",
                  "Use RACI to make decision rights explicit."
                ]
              }
            },
            {
              "id": "W2.3",
              "order": 3,
              "title": "Culture and Mindset",
              "objective": "Describe respect for people, data-based decisions, and a no-blame learning culture.",
              "content": {
                "why": "Tools do not sustain change by themselves. People sustain change when they feel safe to speak up, trust the data, and see leaders model the new behavior.",
                "what": "Culture is the set of shared beliefs and behaviors that shape how work gets done. Mindset is how people interpret problems and their role in solving them. A quality culture focuses on the customer, uses data instead of blame, treats problems as learning opportunities, respects people, and expects leaders to go to where the work happens.",
                "how": [
                  "Ask about the process, not the person: 'What allowed this error?'",
                  "Go to the gemba and observe the real work.",
                  "Thank people for reporting problems and near misses.",
                  "Use data to test assumptions and share results openly.",
                  "Make improvement a routine part of meetings, not a special event."
                ],
                "where": "Culture matters everywhere, but it is especially visible in healthcare, aviation, manufacturing, and IT, where people may hide errors to avoid blame. In a hospital, a leader who rewards error reporting may see reported errors rise before harm falls; that can be a sign of improved safety, not worse performance.",
                "when_not": "Do not use 'culture' as an excuse for missing data, unclear roles, or poor process design. Do not force positivity when people are raising legitimate safety or ethics concerns.",
                "common_mistakes": [
                  "Blaming individuals for problems built into the process.",
                  "Launching tools before building trust and psychological safety.",
                  "Saying 'we have a culture problem' without changing leader behavior."
                ],
                "quick_check": [
                  {
                    "q": "What is psychological safety?",
                    "answer": "The belief that you can speak up with problems or ideas without punishment.",
                    "explanation": "Psychological safety supports learning and early problem detection."
                  },
                  {
                    "q": "A leader asks 'What in the process allowed this error?' instead of 'Who did this?' What behavior is the leader modeling?",
                    "answer": "A blame-free, process-focused mindset.",
                    "explanation": "The question directs attention to system causes rather than individuals."
                  },
                  {
                    "q": "Why can reported errors rise after a safety culture improves?",
                    "answer": "People feel safer reporting problems that were previously hidden.",
                    "explanation": "More reporting can reveal the true error rate before it falls."
                  }
                ],
                "recap": [
                  "Culture is shaped by daily behaviors, especially leader behavior.",
                  "Focus on the process, not blame, and make it safe to speak up.",
                  "Tools work best when trust and data-based learning come first."
                ]
              }
            },
            {
              "id": "W2.4",
              "order": 4,
              "title": "Your First Improvement Project",
              "objective": "Use a simple A3-style story to plan a small, safe improvement.",
              "content": {
                "why": "A small first project builds confidence, creates a visible win, and teaches the method without overwhelming you. It also gives you evidence to persuade others.",
                "what": "A good first project is small in scope, measurable, data-rich enough to study, important to the customer, within your influence, and completable in four to eight weeks. Use DMAIC or a simple plan-do-check-act cycle. A one-page charter states the problem, goal, scope, team, metric, and timeline.",
                "how": [
                  "Pick one recurring pain point in your own work area.",
                  "Write a problem statement with evidence: what, where, when, and how much.",
                  "Set a measurable goal and a baseline.",
                  "Map the process and find one likely root cause.",
                  "Test one small change, measure the result, and standardize what works."
                ],
                "where": "Use this approach for a support-ticket handoff, a clinic check-in step, a retail returns process, or a report that is always late. Example: a support team has 20% of tickets reopened because key information is missing. The team adds one required field, pilots it for two weeks, and reduces rework to 8%.",
                "when_not": "Do not start with a politically sensitive, cross-functional, capital-intensive, or poorly measured problem. Do not choose a project where you have no influence over the process or no access to data.",
                "common_mistakes": [
                  "Scope too large for a first project.",
                  "No baseline, so the team cannot prove improvement.",
                  "Starting with a favorite solution instead of a problem and data."
                ],
                "quick_check": [
                  {
                    "q": "What makes a good first improvement project?",
                    "answer": "Small scope, measurable, customer-relevant, and completable in weeks.",
                    "explanation": "A first project should be small enough to finish and learn from."
                  },
                  {
                    "q": "Why is a baseline important?",
                    "answer": "It shows the current performance and lets you prove whether the change worked.",
                    "explanation": "Without a baseline, improvement claims are just opinions."
                  },
                  {
                    "q": "What should you do after a pilot succeeds?",
                    "answer": "Standardize the change and assign an owner to monitor it.",
                    "explanation": "Standardization and ownership make the gain last."
                  }
                ],
                "recap": [
                  "Start small, measure the baseline, and finish within weeks.",
                  "Use one root cause and one tested change rather than a sweeping redesign.",
                  "Standardize the win and share the result."
                ]
              }
            }
          ]
        }
      ],
      "coverageChecklist": [
        {
          "topic": "History (Motorola, GE)",
          "lessons": [
            "W1.1"
          ]
        },
        {
          "topic": "Quality basics",
          "lessons": [
            "W1.2"
          ]
        },
        {
          "topic": "Cost of poor quality",
          "lessons": [
            "W1.2"
          ]
        },
        {
          "topic": "Customers (VOC, CTQ)",
          "lessons": [
            "W1.3"
          ]
        },
        {
          "topic": "8 wastes",
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
          "topic": "Defects",
          "lessons": [
            "W1.4"
          ]
        },
        {
          "topic": "DMAIC overview",
          "lessons": [
            "W1.5"
          ]
        },
        {
          "topic": "Roles",
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
        "title": "Clean Up a Customer Handoff",
        "brief": "Pick one handoff you own (for example, a patient transfer, order handoff, or support ticket). Map what happens, identify two wastes, measure how long the handoff takes, test one small change, and confirm the result."
      },
      "exam": {
        "questions": 25,
        "passingScore": 80,
        "format": "Multiple choice and short scenario questions drawn from the lesson quick checks."
      },
      "cheatSheet": [
        "COPQ = prevention + appraisal + internal failure + external failure costs",
        "VOC = voice of the customer; CTQ = critical to quality, a measurable customer requirement",
        "DMAIC = Define, Measure, Analyze, Improve, Control",
        "8 wastes = transportation, inventory, motion, waiting, overproduction, overprocessing, defects, skills"
      ],
      "nextChecklist": [
        "I can explain Lean vs Six Sigma in one sentence each.",
        "I can name the DMAIC phases in order.",
        "I can spot at least three wastes in my own work area.",
        "I can explain what VOC and CTQ mean."
      ]
    },
    {
      "id": "yellow",
      "name": "Yellow Belt",
      "level": 2,
      "color": "yellow",
      "icon": "fa-certificate",
      "lessonTarget": "12-15",
      "studyTime": "15-20 hours",
      "audience": "Team members, supervisors, and process owners who support Green and Black Belt projects.",
      "prerequisites": "White Belt or equivalent basic quality awareness.",
      "previousRecap": "White Belt recap: quality means meeting customer requirements; waste and variation create defects and cost; DMAIC is the improvement path; everyone has a role.",
      "outcomes": [
        "Map a process with SIPOC and a process map",
        "Build a basic project charter and data collection sheet",
        "Use Pareto, fishbone, 5 Whys, check sheets, and basic charts",
        "Contribute to brainstorming, 5S, and team-based improvement"
      ],
      "modules": [
        {
          "id": "yellow-1",
          "number": 1,
          "title": "Process Thinking",
          "duration": "70 min",
          "summary": "See work as a process with suppliers, inputs, steps, outputs, and customers. Learn to define process boundaries and draw what actually happens, not what people think happens.",
          "lessons": [
            {
              "id": "Y1.1",
              "order": 1,
              "title": "Process Thinking",
              "objective": "Explain inputs, outputs, boundaries, and the customer of a process.",
              "content": {
                "why": "Work happens through processes, not isolated tasks. Seeing the whole process helps you find where value is created, where delays enter, and where defects are passed to the next person.",
                "what": "A process is a set of steps that turns inputs into outputs for a customer. Inputs include materials, information, people, and energy. Outputs include products, services, and information. A process has boundaries, suppliers, customers, handoffs, and usually a bottleneck. Process thinking focuses on flow and customer value rather than on departments or individuals.",
                "how": [
                  "Name the process and its purpose in one sentence.",
                  "Define the start and end boundaries.",
                  "List the main inputs and outputs.",
                  "Identify the suppliers and customers, including internal ones.",
                  "Walk the process and mark value-added steps, handoffs, and delays.",
                  "Choose one problem area to study with data."
                ],
                "where": "Use process thinking everywhere work repeats. In healthcare, follow a patient from admission to discharge. In retail, follow an order from click to delivery. In IT, follow an incident from report to resolution. In banking, follow a loan from application to funding. In education, follow a student from application to enrollment.",
                "when_not": "Do not use process thinking for a one-off, unique task with no repeatable steps. Do not map at such a low level that the team drowns in detail and loses the customer view.",
                "common_mistakes": [
                  "Mapping the ideal process instead of the real one.",
                  "Ignoring handoffs, where delays and errors often concentrate.",
                  "Setting boundaries so broad that the project cannot be completed."
                ],
                "quick_check": [
                  {
                    "q": "What are the three basic parts of any process?",
                    "answer": "Inputs, process steps, and outputs.",
                    "explanation": "A process transforms inputs into outputs for a customer."
                  },
                  {
                    "q": "Why are handoffs important in process thinking?",
                    "answer": "They are common points where delays, errors, and information loss occur.",
                    "explanation": "Work often waits or changes hands at departmental boundaries."
                  },
                  {
                    "q": "A team maps a process from the first customer contact to the final invoice. What have they defined?",
                    "answer": "The process boundaries.",
                    "explanation": "Boundaries state where the process starts and ends."
                  }
                ],
                "recap": [
                  "A process turns inputs into outputs for a customer.",
                  "Boundaries, suppliers, customers, and handoffs define the process view.",
                  "Map the real process, not the ideal one."
                ]
              }
            },
            {
              "id": "Y1.2",
              "order": 2,
              "title": "SIPOC",
              "objective": "Build a Suppliers, Inputs, Process, Outputs, Customers diagram.",
              "content": {
                "why": "SIPOC gives a team a one-page view of a process and its boundaries before detailed mapping. It aligns everyone on scope and prevents the project from drifting.",
                "what": "SIPOC stands for Suppliers, Inputs, Process, Outputs, and Customers. Suppliers provide the inputs. The process transforms those inputs in four to seven high-level steps. Outputs go to customers, who may be internal or external. SIPOC is a scope-setting tool, not a detailed flowchart.",
                "how": [
                  "Write the process name and purpose.",
                  "Define the start and end points.",
                  "List the outputs and the customers who receive them.",
                  "List the inputs and the suppliers who provide them.",
                  "Describe the process in four to seven high-level steps, in order.",
                  "Review the diagram with the process owner and front-line staff."
                ],
                "where": "Use SIPOC at the start of a DMAIC project, in a scoping workshop, or whenever several departments need a shared view. For patient discharge, suppliers might be the pharmacy, lab, and ward staff; inputs are medications, test results, and discharge criteria; outputs are the discharge summary, medications, and follow-up appointment; customers are the patient, family, and primary care provider.",
                "when_not": "Do not use SIPOC for detailed root cause analysis; use a process map, fishbone, or 5 Whys. Do not list every micro-step, or you lose the high-level view.",
                "common_mistakes": [
                  "Turning the process column into a detailed flowchart.",
                  "Confusing internal and external customers.",
                  "Building the SIPOC alone and never validating it with the people who do the work."
                ],
                "quick_check": [
                  {
                    "q": "What does SIPOC stand for?",
                    "answer": "Suppliers, Inputs, Process, Outputs, Customers.",
                    "explanation": "SIPOC is a high-level process scoping tool."
                  },
                  {
                    "q": "How many process steps should a SIPOC usually show?",
                    "answer": "Four to seven high-level steps.",
                    "explanation": "SIPOC stays at a high level; too much detail defeats its purpose."
                  },
                  {
                    "q": "Who are customers in a SIPOC?",
                    "answer": "The people or groups who receive the process outputs, internal or external.",
                    "explanation": "Customers can be outside the organization or in the next department."
                  }
                ],
                "recap": [
                  "SIPOC summarizes suppliers, inputs, process, outputs, and customers.",
                  "Use four to seven high-level steps and clear boundaries.",
                  "Validate the SIPOC with the process owner and front-line staff."
                ]
              }
            },
            {
              "id": "Y1.3",
              "order": 3,
              "title": "Process Mapping",
              "objective": "Create a swimlane or flowchart and flag handoffs and decision points.",
              "content": {
                "why": "A process map shows how work actually flows, including decisions, handoffs, and rework loops. It makes delays and failure points visible so the team can target them.",
                "what": "A flowchart uses standard symbols: an oval for start and end, a rectangle for a process step, a diamond for a decision, and a D for delay. A swimlane map adds lanes for each person or department, making handoffs obvious. A handoff is any transfer of work between people or groups. Rework loops show where work goes backward.",
                "how": [
                  "Define the start and end of the process.",
                  "Walk the process and list the steps in the order they really happen.",
                  "Assign each step to a swimlane for the person or department that does it.",
                  "Add decision points, handoffs, delays, and rework loops.",
                  "Validate the map with front-line staff.",
                  "Mark the steps that add value and the ones that create waste."
                ],
                "where": "Use process maps for any recurring process with delays, errors, or unclear ownership. In a support center, a ticket moves from customer to triage to assignment to investigation to resolution. The handoff from level one to level two often adds waiting, and missing information creates a rework loop. In healthcare, map a patient transfer from the emergency department to a ward to see waiting and duplicate data entry.",
                "when_not": "Do not spend weeks mapping a process that is about to be replaced. Do not create a detailed map if the team only needs a high-level scope; use SIPOC instead.",
                "common_mistakes": [
                  "Mapping the official process instead of the real one.",
                  "Leaving out handoffs and rework loops.",
                  "Mapping at a level that does not answer the project question."
                ],
                "quick_check": [
                  {
                    "q": "What does a diamond symbol represent on a flowchart?",
                    "answer": "A decision point.",
                    "explanation": "Diamonds show where the process branches based on a condition."
                  },
                  {
                    "q": "What is a handoff?",
                    "answer": "A transfer of work from one person or group to another.",
                    "explanation": "Handoffs are common sources of delay and information loss."
                  },
                  {
                    "q": "Why use swimlanes?",
                    "answer": "To show who performs each step and make handoffs visible.",
                    "explanation": "Swimlanes organize steps by role or department."
                  }
                ],
                "recap": [
                  "Process maps show the real flow, including decisions, handoffs, and rework.",
                  "Swimlanes clarify ownership and expose handoff delays.",
                  "Validate the map with the people who do the work."
                ]
              }
            }
          ]
        },
        {
          "id": "yellow-2",
          "number": 2,
          "title": "DMAIC and Project Charters",
          "duration": "60 min",
          "summary": "Go deeper into DMAIC and learn the basic charter questions: why the project exists, what is in scope, how success is measured, and who is accountable.",
          "lessons": [
            {
              "id": "Y2.1",
              "order": 1,
              "title": "DMAIC in Detail",
              "objective": "List the key activities and deliverables of each DMAIC phase.",
              "content": {
                "why": "Yellow Belts need to know what happens in each DMAIC phase and what deliverable is expected. That knowledge helps you contribute useful work and prevents the team from skipping critical steps.",
                "what": "Define produces the charter, customer requirements, SIPOC, team, problem, and goal. Measure produces a data collection plan, baseline data, and a basic check of measurement quality. Analyze produces process maps, root cause tools, charts, and validated causes. Improve produces tested solutions, a pilot, and an implementation plan. Control produces a control plan, standard work, monitoring, and a response plan.",
                "how": [
                  "Complete the key deliverables for the current phase.",
                  "Review the deliverables with the sponsor and process owner.",
                  "Hold a gate review and decide whether to proceed.",
                  "Document decisions, risks, and open actions.",
                  "Carry the approved output into the next phase."
                ],
                "where": "Use DMAIC for improving an existing process. A lab with late reports defines the problem and goal, measures the baseline, analyzes courier pickup and batching, improves with a barcode scan, and controls with a daily chart and an owner. Use the same phase logic in banking, retail, manufacturing, IT, and education.",
                "when_not": "Do not use DMAIC to design a brand-new process; use DMADV. Do not run a full DMAIC project for a simple, obvious fix; use a quick PDCA or kaizen. For an urgent safety issue, contain the problem first.",
                "common_mistakes": [
                  "Skipping Measure and jumping from Define to Analyze.",
                  "Treating Analyze as a debate of opinions instead of evidence.",
                  "Closing the project without a Control plan and process owner."
                ],
                "quick_check": [
                  {
                    "q": "Which DMAIC phase produces the baseline?",
                    "answer": "Measure.",
                    "explanation": "Measure defines the metric and collects baseline data."
                  },
                  {
                    "q": "What is a gate review?",
                    "answer": "A checkpoint where the team and sponsor decide whether the phase is complete and the project should proceed.",
                    "explanation": "Gate reviews prevent weak work from moving forward."
                  },
                  {
                    "q": "Which phase proves that a solution worked?",
                    "answer": "Improve, with a pilot and before-and-after measurement.",
                    "explanation": "Improve tests the change; Control then sustains it."
                  }
                ],
                "recap": [
                  "Each DMAIC phase has specific deliverables and a gate review.",
                  "Measure and Analyze keep the project evidence-based.",
                  "Control is required to make the improvement last."
                ]
              }
            },
            {
              "id": "Y2.2",
              "order": 2,
              "title": "Project Charter Basics",
              "objective": "Write a problem statement, goal, scope, team, and milestone plan.",
              "content": {
                "why": "A project charter is the contract between the team and the sponsor. It prevents scope creep, clarifies accountability, and gives everyone a shared definition of success.",
                "what": "A charter includes the business case, a problem statement, a measurable goal, in-scope and out-of-scope boundaries, team roles, milestones, metrics, constraints, assumptions, and approvals. A good problem statement describes what, where, when, and how much, without naming a cause or a solution. A good goal is specific, measurable, achievable, relevant, and time-bound.",
                "how": [
                  "Write the problem statement with baseline evidence.",
                  "Write a measurable goal and target date.",
                  "Define what is in scope and explicitly what is out of scope.",
                  "Name the sponsor, process owner, team lead, and team members.",
                  "Set milestones for each DMAIC phase.",
                  "Define the primary metric and get sponsor sign-off."
                ],
                "where": "Use a charter for every improvement project, especially cross-functional ones. Example: 'Twenty percent of support tickets are reopened because required information is missing.' The goal might be to reduce reopen rate below 8% in eight weeks. The scope is the ticket intake form; replacing the CRM system is out of scope.",
                "when_not": "Do not create a full charter for a tiny fix that takes an hour; use a simple task list. Do not let the charter become a document that is written once and never revisited.",
                "common_mistakes": [
                  "A vague problem statement such as 'tickets are bad.'",
                  "Putting a preferred solution inside the problem statement.",
                  "No baseline, no metric, or no named process owner."
                ],
                "quick_check": [
                  {
                    "q": "What should a problem statement include?",
                    "answer": "What, where, when, and how much, with evidence.",
                    "explanation": "A problem statement describes the gap, not the cause or solution."
                  },
                  {
                    "q": "Why define out-of-scope items?",
                    "answer": "To prevent scope creep and keep the project focused.",
                    "explanation": "Explicit boundaries help the team say no to unrelated work."
                  },
                  {
                    "q": "Who should approve the charter?",
                    "answer": "The sponsor, with input from the process owner.",
                    "explanation": "Sponsor approval confirms authority, resources, and expectations."
                  }
                ],
                "recap": [
                  "A charter defines the problem, goal, scope, team, metrics, and milestones.",
                  "Keep causes and solutions out of the problem statement.",
                  "Get sponsor sign-off and revisit the charter at gate reviews."
                ]
              }
            }
          ]
        },
        {
          "id": "yellow-3",
          "number": 3,
          "title": "Data and Basic Charts",
          "duration": "90 min",
          "summary": "Collect trustworthy data and display it honestly. Practice check sheets, run charts, histograms, bar charts, and Pareto analysis.",
          "lessons": [
            {
              "id": "Y3.1",
              "order": 1,
              "title": "Data Types",
              "objective": "Distinguish continuous and discrete data and choose a suitable summary.",
              "content": {
                "why": "The type of data determines which summaries, charts, and tests are valid. Treating categorical data as continuous, or averaging labels, leads to wrong conclusions.",
                "what": "Continuous data can take any value in a range and is measured: time, weight, length, temperature, or cost. Discrete data counts categories or occurrences: pass or fail, defect type, number of complaints, or number of patients. Discrete data can be binary, count, or ordinal. Continuous data is summarized with mean, median, standard deviation, and range; discrete data is summarized with counts, proportions, percentages, and the mode.",
                "how": [
                  "State the question you need to answer.",
                  "Identify whether the data is continuous or discrete.",
                  "Choose a summary that fits the data type.",
                  "Check how the data will be recorded and verified.",
                  "Plot a chart that matches the question and data type."
                ],
                "where": "In manufacturing, diameter is continuous while defect type is discrete. In healthcare, length of stay is continuous while readmitted yes or no is discrete. In retail, order value is continuous while return reason is categorical. In IT, response time is continuous while severity is ordinal. Use the data type to choose summaries before you open a chart tool.",
                "when_not": "Do not calculate the mean of category labels such as color or department. Do not use a histogram for categories. Do not turn continuous data into pass or fail too early, because you lose the ability to see variation.",
                "common_mistakes": [
                  "Averaging categories and reporting a meaningless number.",
                  "Using a chart that does not match the data type.",
                  "Mixing units or time periods in the same summary."
                ],
                "quick_check": [
                  {
                    "q": "Which is continuous data?",
                    "answer": "Time to resolve a ticket.",
                    "explanation": "Time is measured on a continuous scale."
                  },
                  {
                    "q": "A survey records satisfaction as poor, fair, or good. What type of data is this?",
                    "answer": "Ordinal categorical data.",
                    "explanation": "The categories have an order, but the distance between them is not a measured quantity."
                  },
                  {
                    "q": "What is a good summary for defect types?",
                    "answer": "Counts or percentages by category, shown in a bar chart or Pareto.",
                    "explanation": "Categorical data is summarized by frequency."
                  }
                ],
                "recap": [
                  "Continuous data is measured; discrete data is counted or categorized.",
                  "Match the summary and chart to the data type.",
                  "Do not average labels or hide continuous variation too early."
                ]
              }
            },
            {
              "id": "Y3.2",
              "order": 2,
              "title": "Check Sheets",
              "objective": "Design a simple form that makes data easy to record and verify.",
              "content": {
                "why": "Good data starts with good recording. A check sheet makes collection consistent, reduces errors, and makes verification easy when the data is reviewed later.",
                "what": "A check sheet is a structured form for recording data in real time. It defines what to record, when, where, who, and how. Common types include tally sheets for defect types, location sheets, frequency sheets, and simple checklists. A useful check sheet is short, unambiguous, and includes the date, time, shift, collector, process, and clear definitions for each category.",
                "how": [
                  "Define the question and the data needed to answer it.",
                  "List the categories or columns.",
                  "Write a clear definition and example for each category.",
                  "Add date, time, shift, collector, and process fields.",
                  "Pilot the form with a few users and revise it.",
                  "Verify entries daily and resolve unclear records quickly."
                ],
                "where": "Use check sheets for defect counts in manufacturing, wait times in healthcare, return reasons in retail, ticket categories in IT, and late submissions in education. They are especially useful when busy front-line staff must record data during the work rather than after it.",
                "when_not": "Do not use a check sheet for data that already exists reliably in a system. Do not create a fifty-column form that no one will complete. Do not collect data without definitions, because different people will record the same event differently.",
                "common_mistakes": [
                  "Categories that overlap or are not mutually exclusive.",
                  "No definitions, so collectors interpret categories differently.",
                  "A form so complex that people skip fields or invent shortcuts."
                ],
                "quick_check": [
                  {
                    "q": "What is the main purpose of a check sheet?",
                    "answer": "To record data consistently in real time.",
                    "explanation": "A standard form reduces variation and errors in data collection."
                  },
                  {
                    "q": "What should every check sheet include?",
                    "answer": "Clear categories, definitions, date and time, collector, and process.",
                    "explanation": "These fields make the data traceable and verifiable."
                  },
                  {
                    "q": "A team finds 30% of defect entries are in 'other.' What should they do?",
                    "answer": "Review the 'other' comments and refine the categories.",
                    "explanation": "A large 'other' category usually means categories are missing or unclear."
                  }
                ],
                "recap": [
                  "Check sheets standardize real-time data collection.",
                  "Keep the form simple, define every category, and pilot it.",
                  "Verify data daily and refine categories when 'other' grows."
                ]
              }
            },
            {
              "id": "Y3.3",
              "order": 3,
              "title": "Basic Charts",
              "objective": "Choose and interpret run charts, histograms, and bar charts.",
              "content": {
                "why": "Charts reveal patterns that tables hide. The right chart helps a team see variation, distribution, and priorities quickly, without misleading them.",
                "what": "A run chart plots data in time order with a center line and shows trends, shifts, cycles, and outliers. A histogram groups continuous data into bins and shows shape, center, spread, gaps, and outliers. A bar chart compares counts or values across categories. Choose by question: time trend uses a run chart, distribution uses a histogram, and category comparison uses a bar chart.",
                "how": [
                  "State the question the chart should answer.",
                  "Identify the data type.",
                  "Choose the matching chart.",
                  "Label both axes, units, and time period.",
                  "Plot all the data in the correct order.",
                  "Look for patterns and check them against process knowledge."
                ],
                "where": "Use run charts for daily defects, wait times, sales, or response times. Use histograms for delivery times, patient length of stay, or call duration. Use bar charts for complaint reasons, defect types, or regional comparisons. A run chart can reveal a shift after a new process; a histogram can reveal two peaks from two shifts.",
                "when_not": "Do not use a histogram for categorical data. Do not use a bar chart for a time trend unless time is genuinely categorical. Do not use a run chart for unordered categories, and avoid 3D or pie charts when precise comparison matters.",
                "common_mistakes": [
                  "Choosing a chart that does not fit the data type.",
                  "Truncating an axis so small differences look large.",
                  "Cramming too many categories into one chart."
                ],
                "quick_check": [
                  {
                    "q": "Which chart best shows a trend over time?",
                    "answer": "A run chart.",
                    "explanation": "Run charts plot data in time order with a center line."
                  },
                  {
                    "q": "Which chart best shows the distribution of continuous data?",
                    "answer": "A histogram.",
                    "explanation": "Histograms group continuous values into bins."
                  },
                  {
                    "q": "Which chart best compares complaint counts by category?",
                    "answer": "A bar chart.",
                    "explanation": "Bar charts compare values across categories."
                  }
                ],
                "recap": [
                  "Run charts show time patterns; histograms show distributions; bar charts compare categories.",
                  "Label axes, units, and time periods.",
                  "Choose the chart from the question and data type, not from habit."
                ]
              }
            },
            {
              "id": "Y3.4",
              "order": 4,
              "title": "Pareto Analysis",
              "objective": "Use the 80/20 rule to prioritize the few causes that create most of the problem.",
              "content": {
                "why": "Not all causes are equal. Pareto analysis helps a team focus on the few causes that create most of the problem instead of trying to fix everything at once.",
                "what": "The Pareto principle says roughly 80% of effects come from about 20% of causes. A Pareto chart is a bar chart sorted from largest to smallest with a cumulative percentage line. The bars show frequency; the line shows how much of the total has been accounted for. The 'vital few' are the categories that contribute most of the effect.",
                "how": [
                  "Define the problem, time period, and unit of count.",
                  "Choose mutually exclusive categories.",
                  "Collect counts for each category.",
                  "Sort the categories from largest to smallest.",
                  "Calculate each percentage and the cumulative percentage.",
                  "Draw the bars and the cumulative line.",
                  "Select the top categories that reach about 80% and investigate them."
                ],
                "where": "Use Pareto for defect types, customer complaints, downtime reasons, hospital readmission causes, IT incident categories, and retail return reasons. Example: 100 late orders split into traffic 40, oven 25, driver 20, address 10, and other 5. The cumulative percentages are 40%, 65%, 85%, 95%, and 100%, so the first three categories account for 85% of the problem.",
                "when_not": "Do not use Pareto for continuous data without creating meaningful categories. Do not use it when categories overlap or when 'other' is large. Do not assume the split is exactly 80/20, and do not ignore a low-frequency safety issue that still causes serious harm.",
                "common_mistakes": [
                  "Leaving the bars unsorted.",
                  "Using overlapping categories or a large 'other' bucket.",
                  "Treating Pareto as proof of cause rather than a prioritization tool."
                ],
                "quick_check": [
                  {
                    "q": "What does a Pareto chart combine?",
                    "answer": "Sorted bars and a cumulative percentage line.",
                    "explanation": "It shows both frequency and cumulative contribution."
                  },
                  {
                    "q": "What are the 'vital few'?",
                    "answer": "The small number of categories that account for most of the effect.",
                    "explanation": "These are the priority categories to investigate."
                  },
                  {
                    "q": "A low-frequency defect causes serious harm. Should Pareto make you ignore it?",
                    "answer": "No. Severity and safety can outweigh frequency.",
                    "explanation": "Pareto prioritizes frequency, not risk alone."
                  }
                ],
                "recap": [
                  "Pareto sorts categories and adds a cumulative percentage line.",
                  "Focus on the vital few categories that create most of the effect.",
                  "Use severity and risk alongside frequency."
                ]
              }
            }
          ]
        },
        {
          "id": "yellow-4",
          "number": 4,
          "title": "Root Cause and Lean Basics",
          "duration": "90 min",
          "summary": "Move from symptoms to causes using fishbone and 5 Whys, then remove everyday friction with 5S and basic Lean thinking.",
          "lessons": [
            {
              "id": "Y4.1",
              "order": 1,
              "title": "Fishbone Diagram",
              "objective": "Brainstorm causes across people, process, equipment, materials, measurement, and environment.",
              "content": {
                "why": "Fishbone diagrams help a team brainstorm many possible causes before jumping to one. They organize thinking and expose areas the team has not considered.",
                "what": "A fishbone, or Ishikawa, diagram places the effect or problem at the head and possible causes on bones. Common categories are People, Process, Equipment, Materials, Measurement, and Environment, often called the 6Ms. Causes branch into sub-causes. The diagram is a brainstorming and organizing tool; it does not prove which cause is real.",
                "how": [
                  "Write a specific problem or effect at the head of the diagram.",
                  "Agree on the major cause categories.",
                  "Brainstorm causes silently so quiet team members contribute.",
                  "Place each cause on the relevant bone.",
                  "Ask why to add sub-causes where useful.",
                  "Use dot voting or data to select likely causes.",
                  "Validate the selected causes with data before acting."
                ],
                "where": "Use fishbone for manufacturing defects, healthcare delays, IT incidents, retail complaints, banking errors, and late submissions in education. For late lab reports, causes might include staffing and training under People, batching and courier pickup under Process, printer or analyzer failures under Equipment, and traffic or weather under Environment.",
                "when_not": "Do not use a fishbone as the only analysis. Do not include causes the team cannot influence, and do not let one loud person dominate the session. Do not confuse the problem with its causes.",
                "common_mistakes": [
                  "A problem statement so broad that the diagram becomes unmanageable.",
                  "Writing solutions on the bones instead of causes.",
                  "Skipping validation and treating every idea as a proven cause."
                ],
                "quick_check": [
                  {
                    "q": "What goes at the head of a fishbone diagram?",
                    "answer": "The effect or problem being studied.",
                    "explanation": "The head states the problem; the bones hold possible causes."
                  },
                  {
                    "q": "What are the common 6M categories?",
                    "answer": "People, Process, Equipment, Materials, Measurement, and Environment.",
                    "explanation": "These categories prompt a broad search for causes."
                  },
                  {
                    "q": "Does a fishbone diagram prove the root cause?",
                    "answer": "No. It organizes possible causes that must be validated with data.",
                    "explanation": "Fishbone is a brainstorming tool, not proof."
                  }
                ],
                "recap": [
                  "Fishbone organizes possible causes around the 6Ms.",
                  "Brainstorm broadly, then validate likely causes with data.",
                  "Keep the effect specific and keep solutions off the bones."
                ]
              }
            },
            {
              "id": "Y4.2",
              "order": 2,
              "title": "5 Whys",
              "objective": "Ask focused why questions until the actionable root cause is found.",
              "content": {
                "why": "5 Whys moves a team from symptoms to actionable root causes without complex statistics. It is simple, but it is easy to do poorly if answers are accepted without evidence.",
                "what": "5 Whys is a questioning technique: ask why repeatedly until you reach a cause you can act on. It is not a rule that the answer must be exactly five questions. Start with a specific problem, verify each answer, and stop when the cause is both actionable and supported by evidence. Focus on the process, not on blaming people, and branch when there are multiple causes.",
                "how": [
                  "State the problem with data.",
                  "Ask why the problem happened.",
                  "Verify the answer with evidence or observation.",
                  "Ask why again about the verified answer.",
                  "Continue until you reach an actionable root cause.",
                  "Test the cause, fix it, and confirm the result."
                ],
                "where": "Use 5 Whys after a fishbone or Pareto has narrowed the likely causes. Example: lab reports are late. Why? The courier arrives after the cutoff. Why? Pickup is scheduled at 5:00 but reports are ready at 5:30. Why? The lab waits to batch all tests. Why? There is no priority rule for stat tests. The root cause is the missing prioritization rule; the fix is a stat cutoff and dedicated pickup.",
                "when_not": "Do not use a single 5 Whys chain for a complex problem with several interacting causes; branch instead. Do not use it when you have no evidence or when the real purpose is to blame someone.",
                "common_mistakes": [
                  "Stopping at a symptom such as 'staff were busy.'",
                  "Accepting opinions as facts without verification.",
                  "Stopping at 'human error' instead of asking what allowed the error."
                ],
                "quick_check": [
                  {
                    "q": "What is the goal of 5 Whys?",
                    "answer": "To reach an actionable root cause, not just to ask five questions.",
                    "explanation": "The number five is a guide; the real test is whether the cause is actionable and verified."
                  },
                  {
                    "q": "Why should you avoid stopping at 'human error'?",
                    "answer": "It rarely identifies the process conditions that allowed the error.",
                    "explanation": "Ask what in the process made the error possible or hard to detect."
                  },
                  {
                    "q": "What should you do when a problem has several causes?",
                    "answer": "Branch the questioning and investigate each cause separately.",
                    "explanation": "A single linear chain can miss interacting causes."
                  }
                ],
                "recap": [
                  "5 Whys drives from symptom to verified, actionable cause.",
                  "Use evidence at each step and focus on the process.",
                  "Branch when multiple causes exist."
                ]
              }
            },
            {
              "id": "Y4.3",
              "order": 3,
              "title": "5S",
              "objective": "Apply sort, set in order, shine, standardize, and sustain.",
              "content": {
                "why": "5S creates a clean, organized, and safe workplace where waste and abnormalities are easy to see. It supports standard work and helps improvements last.",
                "what": "The five steps are Sort, Set in order, Shine, Standardize, and Sustain. Sort removes unnecessary items. Set in order gives everything a clear home. Shine means clean and inspect. Standardize creates rules, labels, and visual standards. Sustain builds habits, audits, and ownership. Some organizations add Safety as a sixth S.",
                "how": [
                  "Choose one area and define its purpose.",
                  "Sort items and red-tag anything unnecessary.",
                  "Set locations, labels, and visual boundaries.",
                  "Clean the area and inspect for problems while cleaning.",
                  "Write standards with photos, checklists, and owners.",
                  "Schedule audits and review results regularly."
                ],
                "where": "Use 5S on manufacturing floors, hospital supply rooms, retail stockrooms, bank branches, school classrooms, and IT shared drives. Example: a hospital supply room removes expired items, labels bins by par level, cleans and inspects shelves, posts a standard layout, and audits weekly. A digital team can apply the same steps to a shared drive or ticketing queue.",
                "when_not": "Do not run 5S as a one-time cleanup without standards and ownership. Do not discard items without a red-tag decision process, and do not apply 5S to an area that is about to be redesigned.",
                "common_mistakes": [
                  "Cleaning up but never setting standards or audit habits.",
                  "Red-tagged items disappearing without a decision.",
                  "Judging 5S by appearance instead of safety, flow, and search time."
                ],
                "quick_check": [
                  {
                    "q": "What are the five Ss in order?",
                    "answer": "Sort, Set in order, Shine, Standardize, Sustain.",
                    "explanation": "Each step builds on the previous one."
                  },
                  {
                    "q": "What does Shine include besides cleaning?",
                    "answer": "Inspecting the area and equipment for abnormalities.",
                    "explanation": "Cleaning is also a chance to detect wear, leaks, and missing items."
                  },
                  {
                    "q": "Why is Sustain important?",
                    "answer": "Without audits, ownership, and habits, the area returns to its old state.",
                    "explanation": "Sustain turns 5S into a routine rather than an event."
                  }
                ],
                "recap": [
                  "5S is Sort, Set in order, Shine, Standardize, Sustain.",
                  "Visual standards and ownership make the result stick.",
                  "Use 5S to improve safety, flow, and search time, not just appearance."
                ]
              }
            },
            {
              "id": "Y4.4",
              "order": 4,
              "title": "Basic Lean",
              "objective": "Use value, flow, pull, and perfection to reduce waiting and rework.",
              "content": {
                "why": "Lean thinking helps teams improve flow and reduce waiting and rework without large capital projects. It complements Six Sigma's focus on reducing variation.",
                "what": "The five Lean principles are value, value stream, flow, pull, and perfection. Value is defined by the customer. The value stream is the sequence of steps that create value. Flow means work moves smoothly without batching delays. Pull means work is triggered by demand rather than pushed ahead of it. Perfection means continuous improvement. Common tools include standard work, visual management, kanban, and one-piece flow.",
                "how": [
                  "Define value from the customer's point of view.",
                  "Map the value stream and identify delays and waste.",
                  "Improve flow by reducing batch size and unnecessary handoffs.",
                  "Introduce pull where demand and supply make it practical.",
                  "Standardize the new method and keep improving."
                ],
                "where": "Use Lean in manufacturing, healthcare, retail, IT, banking, and education. Example: a bank batches loan approvals, so applications wait for a daily review. Cross-training and a daily pull system reduce lead time from ten days to four. In healthcare, moving supplies closer to the point of use reduces nursing motion and waiting.",
                "when_not": "Do not introduce pull where demand is highly variable or supply is constrained without appropriate buffers. Do not remove necessary controls to make a process look faster, and do not pursue flow at the expense of safety or quality.",
                "common_mistakes": [
                  "Treating Lean as a cost-cutting or headcount exercise.",
                  "Installing kanban without stabilizing the process first.",
                  "Ignoring demand variability and creating new bottlenecks."
                ],
                "quick_check": [
                  {
                    "q": "What are the five Lean principles?",
                    "answer": "Value, value stream, flow, pull, and perfection.",
                    "explanation": "These principles guide waste reduction and flow improvement."
                  },
                  {
                    "q": "What does pull mean?",
                    "answer": "Work is triggered by customer demand rather than pushed ahead of it.",
                    "explanation": "Pull reduces overproduction and excess work in progress."
                  },
                  {
                    "q": "Why can reducing batch size improve flow?",
                    "answer": "Smaller batches reduce waiting time and speed up feedback.",
                    "explanation": "Work moves through the process more continuously."
                  }
                ],
                "recap": [
                  "Lean improves value, flow, pull, and perfection.",
                  "Reduce batch size and handoffs to shorten lead time.",
                  "Standardize the improvement and keep safety and quality first."
                ]
              }
            }
          ]
        },
        {
          "id": "yellow-5",
          "number": 5,
          "title": "People and Teamwork",
          "duration": "50 min",
          "summary": "Generate better ideas and help a team make decisions without losing the quiet voices or the evidence.",
          "lessons": [
            {
              "id": "Y5.1",
              "order": 1,
              "title": "Brainstorming",
              "objective": "Run silent idea generation and affinity grouping before judging ideas.",
              "content": {
                "why": "Good solutions need many ideas before selection. Brainstorming generates options and engages the team, but only when it is run in a way that avoids early judgment and domination.",
                "what": "Brainstorming means generating many ideas first and evaluating them later. Useful methods include silent brainstorming, round-robin sharing, brainwriting, and affinity grouping. The rules are: aim for quantity, withhold criticism, build on others' ideas, welcome wild ideas, and keep one conversation at a time. After generating ideas, group them and vote before evaluating with data.",
                "how": [
                  "State a clear question for the session.",
                  "Give everyone five to ten minutes to write ideas silently.",
                  "Share ideas round-robin without judging them.",
                  "Clarify only, then group similar ideas with affinity mapping.",
                  "Use dot voting to select the strongest candidates.",
                  "Evaluate the top ideas with data and a small test."
                ],
                "where": "Use brainstorming for root cause analysis, solution design, project planning, and team meetings. Example: a clinic wants to reduce waiting. Ideas group into scheduling, staffing, space, and communication. The team votes, then pilots the top two ideas and measures the effect.",
                "when_not": "Do not brainstorm when the answer is fixed by regulation, safety, or clear data. Do not use brainstorming for an urgent safety decision, and do not let a manager dominate or criticize ideas during generation.",
                "common_mistakes": [
                  "Judging ideas while they are still being generated.",
                  "Letting one person dominate the conversation.",
                  "Ending with a list of ideas but no evaluation or owner."
                ],
                "quick_check": [
                  {
                    "q": "What is the first rule of brainstorming?",
                    "answer": "Generate ideas without judging them.",
                    "explanation": "Early criticism reduces the number and variety of ideas."
                  },
                  {
                    "q": "Why use silent brainstorming?",
                    "answer": "It gives quieter members a chance to contribute and reduces domination.",
                    "explanation": "Writing ideas first creates a more balanced session."
                  },
                  {
                    "q": "What should happen after ideas are generated?",
                    "answer": "Group, vote, and evaluate the top ideas with data.",
                    "explanation": "Generation is only the first step; selection and testing come next."
                  }
                ],
                "recap": [
                  "Generate many ideas first and judge later.",
                  "Use silent generation and affinity grouping to include everyone.",
                  "Evaluate the best ideas with data and a small test."
                ]
              }
            },
            {
              "id": "Y5.2",
              "order": 2,
              "title": "Teamwork",
              "objective": "Define roles, ground rules, decision rules, and meeting habits for an improvement team.",
              "content": {
                "why": "Improvement is teamwork. Clear roles, ground rules, and decision rules keep meetings productive and prevent the project from stalling in confusion.",
                "what": "An effective team has a clear purpose, defined roles, ground rules, a decision rule, a meeting cadence, and psychological safety. Roles can include lead, facilitator, recorder, timekeeper, data owner, and sponsor. Ground rules might cover start and end times, one speaker at a time, respect, and documenting decisions. Decision rules include consensus, consent, or leader decides after input.",
                "how": [
                  "Define the team's purpose and expected result.",
                  "Assign roles and confirm time commitments.",
                  "Agree on ground rules and a decision rule.",
                  "Set an agenda and meeting cadence.",
                  "Record decisions, actions, owners, and due dates.",
                  "Review team effectiveness and adjust."
                ],
                "where": "Use clear teamwork practices on every project, especially cross-functional ones. Example: a discharge project team meets weekly, rotates the facilitator, uses an action log, and makes decisions by consent. Each meeting ends with an owner and date for every action.",
                "when_not": "Do not over-process a small two-person task. Do not use consensus when a clear decision owner already exists, and do not let ground rules become bureaucracy.",
                "common_mistakes": [
                  "No clear roles or decision rule.",
                  "Meetings without an agenda, actions, or follow-up.",
                  "Avoiding conflict so real issues are never resolved."
                ],
                "quick_check": [
                  {
                    "q": "Why does a team need a decision rule?",
                    "answer": "To clarify how decisions will be made and prevent stalls.",
                    "explanation": "A decision rule tells the team whether to use consensus, consent, or leader decision."
                  },
                  {
                    "q": "What should every action have?",
                    "answer": "An owner and a due date.",
                    "explanation": "Actions without ownership and dates usually do not get done."
                  },
                  {
                    "q": "What is the facilitator's role?",
                    "answer": "To guide the process, keep the team focused, and ensure everyone contributes.",
                    "explanation": "The facilitator manages the meeting process, not the content decisions."
                  }
                ],
                "recap": [
                  "Clear purpose, roles, ground rules, and decision rules make teams effective.",
                  "Record decisions and actions with owners and dates.",
                  "Review how the team works, not just what it produces."
                ]
              }
            }
          ]
        }
      ],
      "coverageChecklist": [
        {
          "topic": "Process thinking",
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
          "topic": "Process mapping",
          "lessons": [
            "Y1.3"
          ]
        },
        {
          "topic": "DMAIC in detail",
          "lessons": [
            "Y2.1"
          ]
        },
        {
          "topic": "Project charter basics",
          "lessons": [
            "Y2.2"
          ]
        },
        {
          "topic": "Data types",
          "lessons": [
            "Y3.1"
          ]
        },
        {
          "topic": "Check sheets",
          "lessons": [
            "Y3.2"
          ]
        },
        {
          "topic": "Basic charts",
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
          "topic": "Fishbone",
          "lessons": [
            "Y4.1"
          ]
        },
        {
          "topic": "5 Whys",
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
          "topic": "Teamwork",
          "lessons": [
            "Y5.2"
          ]
        }
      ],
      "project": {
        "title": "Reduce Waiting in a Service Process",
        "brief": "Map one service process with SIPOC and a flowchart, collect two weeks of waiting-time data on a check sheet, build a Pareto chart of delay reasons, and run a 5 Whys on the top reason."
      },
      "exam": {
        "questions": 40,
        "passingScore": 80,
        "format": "Scenario-based multiple choice plus one process-map exercise."
      },
      "cheatSheet": [
        "SIPOC = Suppliers, Inputs, Process, Outputs, Customers",
        "Pareto principle: roughly 80% of effects come from about 20% of causes",
        "5 Whys: ask why until you reach a cause you can act on",
        "5S = Sort, Set in order, Shine, Standardize, Sustain"
      ],
      "nextChecklist": [
        "I can draw a SIPOC for a process I own.",
        "I can build a check sheet and a Pareto chart.",
        "I can facilitate a 5 Whys without blaming a person.",
        "I can explain how 5S supports flow."
      ]
    },
    {
      "id": "green",
      "name": "Green Belt",
      "level": 3,
      "color": "green",
      "icon": "fa-trophy",
      "lessonTarget": "25-30",
      "studyTime": "40-60 hours",
      "audience": "Project leaders and process owners who run DMAIC projects part-time with a Black Belt or sponsor.",
      "prerequisites": "Yellow Belt or equivalent process improvement experience.",
      "previousRecap": "Yellow Belt recap: processes have suppliers, inputs, steps, outputs, and customers; data must be collected consistently; Pareto, fishbone, and 5 Whys help find causes.",
      "outcomes": [
        "Lead a small-to-medium DMAIC project from charter to control",
        "Plan data collection, sampling, and measurement system studies",
        "Use descriptive statistics, capability, hypothesis tests, and simple regression",
        "Select and pilot solutions and hand off a control plan"
      ],
      "modules": [
        {
          "id": "green-1",
          "number": 1,
          "title": "Define",
          "duration": "90 min",
          "summary": "Turn a vague complaint into a bounded project with a clear customer, measurable goal, and named stakeholders.",
          "lessons": [
            {
              "id": "G1.1",
              "order": 1,
              "title": "Project Charter",
              "objective": "Write a problem statement, goal, scope, business case, team, and timeline.",
              "content": {
                "why": "A charter is the contract between the project team and the sponsor. Green Belts often lead projects, so a clear charter is essential for scope control, resources, and a measurable definition of success.",
                "what": "A Green Belt charter includes the business case, problem statement, SMART goal, in-scope and out-of-scope boundaries, team roles, timeline and milestones, primary metric, risks, constraints, and approvals. The problem statement describes what, where, when, and how much, with baseline evidence, and avoids naming a cause or solution. The business case links the project to customer impact, cost of poor quality, or strategy.",
                "how": [
                  "Collect baseline data before writing the problem statement.",
                  "Describe the gap with what, where, when, and how much.",
                  "Write a specific, measurable, achievable, relevant, time-bound goal.",
                  "Define the process boundaries and explicitly list out-of-scope work.",
                  "Name the sponsor, process owner, team lead, and team members.",
                  "Set milestones for Define, Measure, Analyze, Improve, and Control.",
                  "Define the primary metric, data source, and expected benefit.",
                  "Get sponsor sign-off before heavy data collection begins."
                ],
                "where": "Use a full charter for every Green Belt project, especially cross-functional work. Example: admitted patients wait an average of 6.2 hours from emergency arrival to an inpatient bed, against a target of 4 hours. The goal is to reduce the median to 4 hours within 12 weeks. Scope runs from emergency arrival to bed assignment; new construction is out of scope.",
                "when_not": "Do not create a full charter for a small fix that takes an hour; use a task list. Do not use the charter to lock in a preferred solution before the team has analyzed the problem.",
                "common_mistakes": [
                  "Putting a cause or solution inside the problem statement.",
                  "A vague goal such as 'improve flow' with no metric or date.",
                  "No baseline, no process owner, or scope so broad the project cannot finish."
                ],
                "quick_check": [
                  {
                    "q": "What should a problem statement avoid?",
                    "answer": "Naming a cause or a preferred solution.",
                    "explanation": "The problem statement describes the gap with evidence; causes are investigated later."
                  },
                  {
                    "q": "Why is a baseline important in a charter?",
                    "answer": "It shows current performance and makes the goal and later benefit credible.",
                    "explanation": "Without a baseline, the team cannot prove improvement."
                  },
                  {
                    "q": "What does out-of-scope mean?",
                    "answer": "Work the project will not address.",
                    "explanation": "Explicit exclusions prevent scope creep."
                  }
                ],
                "recap": [
                  "A charter defines the problem, goal, scope, team, metric, and milestones.",
                  "Use baseline data and keep causes and solutions out of the problem statement.",
                  "Sponsor sign-off confirms authority, resources, and expectations."
                ]
              }
            },
            {
              "id": "G1.2",
              "order": 2,
              "title": "Stakeholders",
              "objective": "Map influence and interest and plan engagement.",
              "content": {
                "why": "Projects fail when key people are surprised, excluded, or actively resistant. Stakeholder mapping helps the team plan engagement before it becomes a problem.",
                "what": "A stakeholder is anyone affected by the project or able to influence it. A common tool is the influence-interest grid. High influence and high interest stakeholders are managed closely. High influence and low interest are kept satisfied. Low influence and high interest are kept informed. Low influence and low interest are monitored. The team also assesses each stakeholder's stance: supporter, neutral, or blocker.",
                "how": [
                  "List everyone affected by or able to influence the project.",
                  "Rate each stakeholder's influence and interest.",
                  "Plot them on the influence-interest grid.",
                  "Assess their current stance and what they need.",
                  "Choose an engagement method and frequency.",
                  "Assign an owner for each key relationship.",
                  "Review the map at each project gate."
                ],
                "where": "Use stakeholder mapping on cross-functional, regulated, or politically sensitive projects. In a hospital discharge project, the chief operating officer and ward managers are high influence and high interest; IT may be high influence but lower interest; patients and families have high interest and should be included through focus groups or surveys.",
                "when_not": "Do not build a large stakeholder map for a small local fix with two participants. Do not confuse stakeholders with customers, and do not treat engagement as a one-time communication.",
                "common_mistakes": [
                  "Missing a key blocker until late in the project.",
                  "Communicating only upward and ignoring front-line staff.",
                  "A map with no engagement plan, owner, or follow-up."
                ],
                "quick_check": [
                  {
                    "q": "How should a high-influence, high-interest stakeholder be managed?",
                    "answer": "Closely, with regular engagement and involvement in decisions.",
                    "explanation": "These stakeholders can strongly affect the project and care about the outcome."
                  },
                  {
                    "q": "Why map stakeholder stance?",
                    "answer": "To understand who supports, is neutral, or may block the project.",
                    "explanation": "Stance helps the team tailor engagement and address concerns."
                  },
                  {
                    "q": "When should the stakeholder map be reviewed?",
                    "answer": "At project gates and when circumstances change.",
                    "explanation": "Influence, interest, and stance can shift during the project."
                  }
                ],
                "recap": [
                  "Map stakeholders by influence and interest, then plan engagement.",
                  "Assess stance and assign an owner for key relationships.",
                  "Include front-line staff, not just leaders."
                ]
              }
            },
            {
              "id": "G1.3",
              "order": 3,
              "title": "VOC and CTQ",
              "objective": "Translate customer language into measurable CTQs and specifications.",
              "content": {
                "why": "Green Belts must ensure the project solves a customer problem, not an internal convenience. CTQs turn customer language into measurable specifications the process can be held to.",
                "what": "Voice of the customer comes from interviews, surveys, complaints, focus groups, observation, and warranty data. A CTQ tree links a broad need to a driver and then to a measurable requirement. Each CTQ needs an operational definition, target, specification limits, and a clear defect definition. Specification limits define acceptable performance; they are not the same as control limits.",
                "how": [
                  "Collect VOC from several sources, not just one survey.",
                  "Group similar statements into themes.",
                  "Build a CTQ tree from need to driver to measurable requirement.",
                  "Define the metric, target, and upper or lower specification limits.",
                  "Define what counts as a defect.",
                  "Validate the CTQ and specification with customers or process experts."
                ],
                "where": "Use VOC and CTQ in every Green Belt project. Example: a customer says, 'I want my loan decision fast.' The driver is decision time. The CTQ is time from a complete application to a decision, with a target of two business days and an upper specification of three days. A decision taking more than three days is a defect.",
                "when_not": "Do not invent CTQs without customer input. Do not confuse a CTQ with a solution, such as 'we need a new app.' Legal, safety, and regulatory requirements are mandatory requirements, not optional customer preferences.",
                "common_mistakes": [
                  "Writing needs in solution language.",
                  "Creating too many CTQs and losing focus.",
                  "Setting a specification without checking that it is measurable and achievable."
                ],
                "quick_check": [
                  {
                    "q": "What does a CTQ tree connect?",
                    "answer": "A customer need to drivers and measurable requirements.",
                    "explanation": "The tree translates voice of the customer into process metrics."
                  },
                  {
                    "q": "What is the difference between a specification limit and a control limit?",
                    "answer": "A specification limit defines customer or design requirements; a control limit describes process variation.",
                    "explanation": "Specifications come from requirements; control limits come from process data."
                  },
                  {
                    "q": "What makes a CTQ usable?",
                    "answer": "It is measurable, has a target or specification, and has a clear defect definition.",
                    "explanation": "Without these, the team cannot measure or improve it."
                  }
                ],
                "recap": [
                  "VOC captures customer needs; CTQs make them measurable.",
                  "Define the metric, target, specification limits, and defect rule.",
                  "Validate CTQs with customers and keep them focused."
                ]
              }
            }
          ]
        },
        {
          "id": "green-2",
          "number": 2,
          "title": "Measure",
          "duration": "4 hours",
          "summary": "Build a trustworthy measurement system, describe the data, and compare process performance with customer specifications.",
          "lessons": [
            {
              "id": "G2.1",
              "order": 1,
              "title": "Data Collection Plan",
              "objective": "Define what, where, when, who, and how to collect data.",
              "content": {
                "why": "Without a data collection plan, data are often incomplete, inconsistent, or unable to answer the project question. A plan ensures the right data are collected the right way.",
                "what": "A data collection plan defines the metric and operational definition, data type, source, location, collector, timing, sampling method, sample size, recording form, and validation method. It also plans a measurement system analysis. Existing data should be used when they are reliable; new data are needed when the current data cannot answer the question.",
                "how": [
                  "Write the question the data must answer.",
                  "Define the metric operationally, including start and stop points.",
                  "Choose the data source and check its quality.",
                  "Decide the sampling method and sample size.",
                  "Design or select the recording form.",
                  "Pilot the plan and train the collectors.",
                  "Verify a sample of records for accuracy and completeness."
                ],
                "where": "Use a data collection plan in every Measure phase and for any important decision. Example: for emergency department turnaround, start is the arrival timestamp and end is the inpatient bed assignment timestamp. The source is the electronic health record. Collect all admitted patients for four weeks, stratify by shift and day, and validate twenty records against the source system.",
                "when_not": "Do not collect new data when existing validated data already answer the question. Do not collect data without a clear question, and do not over-collect just because data are available.",
                "common_mistakes": [
                  "Vague operational definitions that different collectors interpret differently.",
                  "No sampling plan, so the data are convenient rather than representative.",
                  "Skipping measurement system analysis and trusting bad data."
                ],
                "quick_check": [
                  {
                    "q": "What is an operational definition?",
                    "answer": "A precise description of how a metric is measured, including start, stop, and counting rules.",
                    "explanation": "It ensures different people measure the same thing the same way."
                  },
                  {
                    "q": "When should existing data be used?",
                    "answer": "When they are reliable, relevant, and sufficient to answer the question.",
                    "explanation": "Collecting new data costs time and should be justified."
                  },
                  {
                    "q": "Why pilot a data collection plan?",
                    "answer": "To find unclear definitions, missing fields, and collection problems before full rollout.",
                    "explanation": "A pilot prevents weeks of unusable data."
                  }
                ],
                "recap": [
                  "A data collection plan defines the metric, source, sampling, collectors, and validation.",
                  "Use operational definitions and pilot the plan.",
                  "Prefer reliable existing data over unnecessary new collection."
                ]
              }
            },
            {
              "id": "G2.2",
              "order": 2,
              "title": "Sampling",
              "objective": "Choose random, stratified, or systematic samples and avoid bias.",
              "content": {
                "why": "Measuring every unit is often impossible or too costly. A good sample lets the team infer about the population with known uncertainty; a biased sample leads to wrong conclusions.",
                "what": "The population is every unit of interest; the sample is the subset measured. Random sampling gives every unit an equal chance and reduces selection bias. Stratified sampling divides the population into homogeneous groups, such as shift or region, and samples within each. Systematic sampling takes every kth unit but can align with a hidden pattern. Convenience sampling is easy but often biased.",
                "how": [
                  "Define the population and the sampling frame.",
                  "Choose random, stratified, or systematic sampling to fit the question.",
                  "Decide the sample size from confidence, margin of error, and variability.",
                  "Select units using a random method and document it.",
                  "Check the sample for representativeness.",
                  "Record nonresponse or missing data and adjust the plan."
                ],
                "where": "Use sampling for audits, customer surveys, quality checks, and process studies. Example: a team has 1,000 invoices per month and selects 100 at random with a random number generator. They stratify by month-end and regular invoices so both types are represented. They avoid sampling only the invoices that are easy to retrieve.",
                "when_not": "Do not sample when the population is small or the risk is high and 100% inspection is required. Do not use a convenience sample to make inferences about a population, and do not ignore nonresponse bias.",
                "common_mistakes": [
                  "Using whichever units are easiest to access.",
                  "Sampling only one shift, region, or product type.",
                  "A sample so small that the margin of error is too wide to be useful."
                ],
                "quick_check": [
                  {
                    "q": "What is the main benefit of random sampling?",
                    "answer": "It reduces selection bias and supports inference to the population.",
                    "explanation": "Every unit has an equal chance of being selected."
                  },
                  {
                    "q": "When is stratified sampling useful?",
                    "answer": "When the population contains distinct groups that should be represented.",
                    "explanation": "Sampling within each group ensures coverage of important segments."
                  },
                  {
                    "q": "Why can a convenience sample be misleading?",
                    "answer": "It may over-represent easy-to-reach units and miss important parts of the population.",
                    "explanation": "Convenience sampling is not random and can create selection bias."
                  }
                ],
                "recap": [
                  "Define the population, sampling frame, method, and size.",
                  "Use random or stratified sampling to reduce bias.",
                  "Avoid convenience samples for inference and check representativeness."
                ]
              }
            },
            {
              "id": "G2.3",
              "order": 3,
              "title": "Measurement System Analysis",
              "objective": "Run a Gage R&R and interpret %GRR and number of distinct categories.",
              "content": {
                "why": "Measurement variation can look like process variation. Before capability analysis or hypothesis testing, confirm the measurement system can distinguish good parts from bad ones.",
                "what": "Measurement system analysis evaluates accuracy through bias, linearity, and stability, and precision through repeatability and reproducibility. Repeatability is variation when one appraiser measures the same part repeatedly. Reproducibility is variation between appraisers measuring the same parts. A Gage R&R study estimates both. %GRR compares measurement variation with total variation; lower is better. The number of distinct categories, or NDC, shows how many different levels the system can distinguish.",
                "how": [
                  "Select ten parts that span the real process range.",
                  "Use two or three appraisers who normally perform the measurement.",
                  "Have each appraiser measure each part two or three times, in random order and blind.",
                  "Analyze the study in Minitab under Stat > Quality Tools > Gage Study > Gage R&R, or in a validated Excel template.",
                  "Interpret %GRR: below 10% is generally acceptable, 10-30% is conditionally acceptable, and above 30% is usually unacceptable.",
                  "Check NDC; five or more categories is desirable. If weak, improve the system before collecting process data."
                ],
                "where": "Use Gage R&R for dimensional inspection, lab tests, call handling time, survey scoring, and any measurement that will drive a decision. Example: a measurement system has 18% GRR and four distinct categories. It is conditionally acceptable, so the team improves the fixture before using the data for a capability study.",
                "when_not": "Do not run a standard Gage R&R on destructive tests; use a nested design. Do not use only one appraiser, because that misses reproducibility. Do not skip MSA when the data will justify a costly decision.",
                "common_mistakes": [
                  "Using parts that do not represent the process range.",
                  "Failing to blind appraisers to previous readings.",
                  "Blaming the process for variation created by the measurement system."
                ],
                "quick_check": [
                  {
                    "q": "What is the difference between repeatability and reproducibility?",
                    "answer": "Repeatability is variation by one appraiser on the same part; reproducibility is variation between appraisers.",
                    "explanation": "Gage R&R separates equipment variation from appraiser variation."
                  },
                  {
                    "q": "What does %GRR measure?",
                    "answer": "Measurement variation as a percentage of total variation.",
                    "explanation": "Lower %GRR means the measurement system is better able to see real process differences."
                  },
                  {
                    "q": "What NDC value is desirable?",
                    "answer": "Five or more distinct categories.",
                    "explanation": "NDC indicates how many levels the measurement system can distinguish."
                  }
                ],
                "recap": [
                  "MSA checks whether the measurement system is accurate and precise enough.",
                  "Gage R&R separates repeatability from reproducibility.",
                  "Use %GRR and NDC to decide whether to improve the measurement system."
                ]
              }
            },
            {
              "id": "G2.4",
              "order": 4,
              "title": "Descriptive Statistics",
              "objective": "Calculate and interpret mean, median, standard deviation, and range.",
              "content": {
                "why": "Descriptive statistics summarize center, spread, and shape before inference. They reveal outliers, skew, and instability that an average alone would hide.",
                "what": "The mean is the arithmetic average. The median is the middle value when data are ordered. The mode is the most frequent value. The range is the maximum minus the minimum. Standard deviation estimates the typical distance from the mean, and variance is its square. The interquartile range is the third quartile minus the first quartile. Use median and IQR for skewed data or data with outliers; use mean and standard deviation for roughly symmetric data.",
                "how": [
                  "Plot the data before summarizing it.",
                  "Calculate the center with mean or median.",
                  "Calculate spread with standard deviation, range, or IQR.",
                  "Check for outliers, skew, and multiple peaks.",
                  "Choose the summary that matches the shape and the question."
                ],
                "where": "Use descriptive statistics for baselines, before-and-after comparisons, capability inputs, and data quality checks. Example: service times are 10, 12, 11, 13, 12, and 60 minutes. The mean is about 19.7 minutes, but the median is 12 minutes because the 60-minute value is an outlier. Reporting only the mean would exaggerate the typical experience.",
                "when_not": "Do not use the mean alone for skewed data or data with outliers. Do not compare standard deviations without context, and do not ignore time order when the process may be shifting.",
                "common_mistakes": [
                  "Reporting a mean for heavily skewed data.",
                  "Using standard deviation without checking for outliers.",
                  "Using population formulas when the data are a sample."
                ],
                "quick_check": [
                  {
                    "q": "Which summary is more robust to outliers?",
                    "answer": "The median.",
                    "explanation": "The median depends on position, not on the size of extreme values."
                  },
                  {
                    "q": "What does standard deviation describe?",
                    "answer": "The typical spread of data around the mean.",
                    "explanation": "A larger standard deviation means more variation."
                  },
                  {
                    "q": "Why plot data before calculating statistics?",
                    "answer": "To see shape, outliers, gaps, and multiple peaks that a single number hides.",
                    "explanation": "Graphs prevent misleading summaries."
                  }
                ],
                "recap": [
                  "Mean, median, standard deviation, range, and IQR describe different aspects of data.",
                  "Use median and IQR for skewed data or outliers.",
                  "Always plot the data before choosing a summary."
                ]
              }
            },
            {
              "id": "G2.5",
              "order": 5,
              "title": "Normal Distribution",
              "objective": "Use the 68-95-99.7 rule and check normality before capability analysis.",
              "content": {
                "why": "Many capability and hypothesis methods assume approximate normality. The normal curve and the 68-95-99.7 rule help the team interpret variation and recognize when that assumption is unsafe.",
                "what": "A normal distribution is bell-shaped and symmetric, defined by its mean and standard deviation. About 68% of values fall within one standard deviation of the mean, about 95% within two, and about 99.7% within three. A z-score is the number of standard deviations a value lies from the mean: z equals x minus the mean, divided by the standard deviation. Check normality with a histogram, a normal probability plot, and a test such as Anderson-Darling.",
                "how": [
                  "Plot a histogram and a normal probability plot.",
                  "Run a normality test and interpret the p-value in context.",
                  "Remember that a high p-value does not prove normality; it only fails to reject it.",
                  "If non-normal, consider a transformation, a nonparametric method, or a different distribution.",
                  "Recheck assumptions after any transformation."
                ],
                "where": "Use normality checks before capability studies, control charts, and t-tests. Example: a process has a mean of 100 and a standard deviation of 10, so about 95% of values fall between 80 and 120. A value of 125 has a z-score of 2.5. In Excel, use NORM.DIST or NORM.S.DIST; in Minitab, use Graph > Probability Plot.",
                "when_not": "Do not assume normality for skewed cycle times, counts, or proportions. Do not rely on a normality test with a tiny sample, and do not transform data without explaining what the transformed result means.",
                "common_mistakes": [
                  "Treating every dataset as normal.",
                  "Using a normality test as the only check.",
                  "Confusing the 95% empirical rule with a 95% confidence interval."
                ],
                "quick_check": [
                  {
                    "q": "About what percentage of normal data lies within two standard deviations of the mean?",
                    "answer": "About 95%.",
                    "explanation": "The empirical rule gives approximately 68%, 95%, and 99.7% for one, two, and three standard deviations."
                  },
                  {
                    "q": "A process has mean 50 and standard deviation 5. What is the z-score for 62?",
                    "answer": "2.4.",
                    "explanation": "z equals (62 - 50) / 5 = 2.4."
                  },
                  {
                    "q": "A normality test gives p = 0.01. What should the team do?",
                    "answer": "Treat normality as questionable and consider a transformation, another distribution, or a nonparametric method.",
                    "explanation": "A small p-value is evidence against normality."
                  }
                ],
                "recap": [
                  "Normal data are symmetric and summarized by mean and standard deviation.",
                  "Use the 68-95-99.7 rule and z-scores to interpret variation.",
                  "Check normality before methods that assume it."
                ]
              }
            },
            {
              "id": "G2.6",
              "order": 6,
              "title": "Sigma Level and DPMO",
              "objective": "Convert defects and opportunities into DPMO and sigma level.",
              "content": {
                "why": "Sigma level and DPMO put quality on a common scale and connect defects to process capability. They help teams benchmark and track improvement.",
                "what": "An opportunity is a chance for a defect to occur. DPMO is defects divided by units times opportunities, multiplied by one million. Yield is one minus defects divided by opportunities. Sigma level is found from DPMO using the inverse normal distribution. Many organizations add a 1.5-sigma shift to account for long-term drift; always state whether the number is short-term or long-term.",
                "how": [
                  "Define a defect and an opportunity clearly.",
                  "Count defects, units, and opportunities over the same period.",
                  "Calculate DPMO: defects divided by units times opportunities, then multiplied by one million.",
                  "Convert DPMO to a z-value with the inverse normal, then add 1.5 if using the long-term convention.",
                  "In Excel, use NORM.S.INV(1 - DPMO/1000000) + 1.5.",
                  "Compare baseline and improved performance using the same definitions."
                ],
                "where": "Use DPMO and sigma level for manufacturing defects, service errors, healthcare processes, and transactional work. Example: 10 defects across 1,000 units with five opportunities each gives 10 divided by 5,000, or 0.002. That is 2,000 DPMO and a yield of 99.8%. The inverse normal of 0.998 is about 2.88; adding the 1.5 shift gives about 4.38 sigma.",
                "when_not": "Do not inflate the opportunity count to make the sigma level look better. Do not use DPMO when defect definitions are inconsistent, and do not compare sigma levels across processes with different opportunity definitions.",
                "common_mistakes": [
                  "Counting defective units as defects, or the reverse.",
                  "Using the wrong number of opportunities.",
                  "Forgetting to state whether the 1.5 shift was applied."
                ],
                "quick_check": [
                  {
                    "q": "Five defects, 500 units, and four opportunities per unit. What is DPMO?",
                    "answer": "2,500 DPMO.",
                    "explanation": "5 / (500 x 4) = 0.0025, which is 2,500 per million."
                  },
                  {
                    "q": "What does a 1.5-sigma shift represent?",
                    "answer": "An adjustment for long-term process drift.",
                    "explanation": "The shift is a convention; the team must state whether it was used."
                  },
                  {
                    "q": "Why must opportunity definitions be consistent?",
                    "answer": "Different opportunity counts change DPMO and sigma level, making comparisons invalid.",
                    "explanation": "Sigma level is only comparable when the counting rules are the same."
                  }
                ],
                "recap": [
                  "DPMO equals defects divided by units times opportunities, times one million.",
                  "Sigma level comes from the inverse normal of yield, often with a 1.5 shift.",
                  "Keep defect and opportunity definitions consistent."
                ]
              }
            },
            {
              "id": "G2.7",
              "order": 7,
              "title": "Cp and Cpk",
              "objective": "Calculate capability indices and explain the difference between potential and actual capability.",
              "content": {
                "why": "Capability indices compare process spread and centering with specification limits. They show whether the process can meet requirements and whether to reduce variation or re-center.",
                "what": "Cp equals the specification width divided by six sigma: (USL - LSL) / (6 sigma). It describes potential capability if the process were perfectly centered. Cpk equals the minimum of (USL - mean) / (3 sigma) and (mean - LSL) / (3 sigma). It accounts for centering, so Cpk is always less than or equal to Cp. Ppk uses overall long-term sigma. Targets are Cpk of at least 1.33, with 1.67 or higher strong.",
                "how": [
                  "Confirm the process is stable and the data are approximately normal.",
                  "Estimate sigma using within-subgroup variation for Cp and Cpk.",
                  "Calculate Cp from the specification width.",
                  "Calculate Cpk from the distance to the nearest specification limit.",
                  "Decide whether to reduce variation or move the mean.",
                  "Recheck capability after the improvement."
                ],
                "where": "Use capability analysis for manufacturing tolerances, service time specifications, lab turnaround, and transaction accuracy. Example: USL 20, LSL 10, mean 16, and sigma 1.5. Cp equals 10 / 9 = 1.11. Cpk equals the minimum of (20 - 16) / 4.5 = 0.89 and (16 - 10) / 4.5 = 1.33, so Cpk is 0.89. The process is not capable; centering the mean at 15 would raise Cpk to 1.11.",
                "when_not": "Do not calculate Cp or Cpk on an unstable process. Do not use a normal-based capability index for clearly non-normal data without an appropriate method. Do not compare indices calculated with different specifications or sigma conventions.",
                "common_mistakes": [
                  "Using overall sigma but calling the result Cp.",
                  "Ignoring centering and reporting only Cp.",
                  "Calculating capability before checking stability."
                ],
                "quick_check": [
                  {
                    "q": "What is the difference between Cp and Cpk?",
                    "answer": "Cp measures potential spread; Cpk also accounts for centering.",
                    "explanation": "A process can have good Cp but poor Cpk if it is off-center."
                  },
                  {
                    "q": "USL 30, LSL 10, mean 22, sigma 2. What are Cp and Cpk?",
                    "answer": "Cp = 1.67 and Cpk = 1.33.",
                    "explanation": "Cp = 20 / 12 = 1.67; Cpk = min(8/6, 12/6) = 1.33."
                  },
                  {
                    "q": "A process has Cpk 0.8. What does that suggest?",
                    "answer": "The process is not capable and is likely producing defects.",
                    "explanation": "A Cpk below 1.0 means the specification is narrower than the process spread relative to the mean."
                  }
                ],
                "recap": [
                  "Cp measures potential capability; Cpk measures actual capability with centering.",
                  "Cpk is always less than or equal to Cp.",
                  "Confirm stability and normality before trusting capability indices."
                ]
              }
            }
          ]
        },
        {
          "id": "green-3",
          "number": 3,
          "title": "Analyze",
          "duration": "4 hours",
          "summary": "Use graphs, root cause tools, risk analysis, and statistical tests to separate real causes from noise.",
          "lessons": [
            {
              "id": "G3.1",
              "order": 1,
              "title": "Graphs and Data Displays",
              "objective": "Select histograms, box plots, run charts, and scatter plots for the question.",
              "content": {
                "why": "Graphs reveal patterns, outliers, and relationships that summary statistics hide. The right display makes the data easy to interpret; the wrong display can mislead the team.",
                "what": "A histogram shows the distribution of continuous data: shape, center, spread, gaps, and outliers. A box plot compares distributions across groups using the median, quartiles, interquartile range, and outliers. A run chart plots data in time order to reveal trends, shifts, and cycles. A scatter plot shows the relationship between two continuous variables, including direction, strength, form, and outliers.",
                "how": [
                  "State the question the graph should answer.",
                  "Identify the data types and the number of groups.",
                  "Choose the display: histogram or box plot for distribution, run chart for time, scatter plot for relationships.",
                  "Label both axes, units, and time period.",
                  "Plot all the data and look for patterns or unusual points.",
                  "Check the pattern against process knowledge before drawing conclusions."
                ],
                "where": "Use graphs throughout DMAIC. In a call center, a histogram shows handle-time distribution, a box plot compares teams, a run chart shows daily trends, and a scatter plot explores handle time versus satisfaction. In healthcare, a run chart can show waiting time before and after a change; a box plot can compare wards.",
                "when_not": "Do not use a histogram for categorical data. Do not use a scatter plot when one variable is categorical. Avoid 3D or pie charts when precise comparison matters, and do not truncate axes to exaggerate differences.",
                "common_mistakes": [
                  "Choosing a chart that does not fit the question or data type.",
                  "Truncating an axis so a small change looks large.",
                  "Treating a pattern in a graph as proof of cause."
                ],
                "quick_check": [
                  {
                    "q": "Which graph best shows a distribution of continuous data?",
                    "answer": "A histogram.",
                    "explanation": "Histograms group continuous values into bins and show shape and spread."
                  },
                  {
                    "q": "Which graph compares distributions across several groups?",
                    "answer": "A box plot.",
                    "explanation": "Box plots show median, quartiles, and outliers for each group."
                  },
                  {
                    "q": "Which graph shows the relationship between two continuous variables?",
                    "answer": "A scatter plot.",
                    "explanation": "Scatter plots display paired values and reveal direction and strength."
                  }
                ],
                "recap": [
                  "Match the graph to the question and data type.",
                  "Histograms and box plots show distributions; run charts show time; scatter plots show relationships.",
                  "Graphs suggest patterns, but causes need further analysis."
                ]
              }
            },
            {
              "id": "G3.2",
              "order": 2,
              "title": "Root Cause Analysis",
              "objective": "Combine fishbone, 5 Whys, stratification, and process observation.",
              "content": {
                "why": "Teams often jump to solutions before understanding the problem. Structured root cause analysis increases confidence that the fix addresses the real cause rather than a symptom.",
                "what": "Root cause analysis is a structured investigation that combines process observation, fishbone diagrams, 5 Whys, stratification, Pareto analysis, and statistical checks. Stratification splits data by shift, product, region, operator, or other factor to see where the problem concentrates. A root cause is the underlying reason a problem occurs; contributing causes make it worse or more likely.",
                "how": [
                  "Define the problem with data and a clear metric.",
                  "Map the process and observe the work where it happens.",
                  "Brainstorm possible causes with a fishbone diagram.",
                  "Stratify the data to narrow where and when the problem occurs.",
                  "Use 5 Whys on the most likely causes, verifying each answer.",
                  "Confirm the cause with data, a pilot, or a designed comparison.",
                  "Select the root cause and link it to an actionable solution."
                ],
                "where": "Use root cause analysis for defects, delays, errors, complaints, and incidents. Example: lab reports are late. Stratification shows the problem is concentrated in stat tests on the evening shift. A fishbone and 5 Whys point to batching stat tests with routine tests. A pilot with a priority cutoff confirms the cause and reduces late reports.",
                "when_not": "Do not start root cause analysis before the problem is clearly defined. Do not use a full investigation for a simple, known fix. Do not stop at correlation or at the first plausible cause.",
                "common_mistakes": [
                  "Choosing a solution first and then looking for supporting causes.",
                  "Accepting a single cause without checking interactions.",
                  "Leaving out the front-line people who know how the work really happens."
                ],
                "quick_check": [
                  {
                    "q": "What does stratification do?",
                    "answer": "It splits data into groups to see where a problem is concentrated.",
                    "explanation": "Stratification by shift, product, or region often narrows the cause quickly."
                  },
                  {
                    "q": "Why combine fishbone and 5 Whys?",
                    "answer": "Fishbone broadens the search for causes; 5 Whys drills into likely ones.",
                    "explanation": "Together they support both divergent and focused thinking."
                  },
                  {
                    "q": "How should a suspected root cause be confirmed?",
                    "answer": "With data, a pilot, or a designed comparison.",
                    "explanation": "A plausible cause is not enough; it must be tested."
                  }
                ],
                "recap": [
                  "Root cause analysis combines observation, cause tools, stratification, and data.",
                  "Confirm the cause before implementing a solution.",
                  "Include front-line knowledge and avoid blame."
                ]
              }
            },
            {
              "id": "G3.3",
              "order": 3,
              "title": "FMEA",
              "objective": "Score severity, occurrence, and detection and prioritize failure modes.",
              "content": {
                "why": "FMEA finds failure modes before they cause harm, so the team can prevent problems rather than react to them. It is especially valuable when a process or design is changing.",
                "what": "Failure Mode and Effects Analysis lists each failure mode, its effect, severity, cause, occurrence, current controls, and detection. Severity, occurrence, and detection are scored from 1 to 10. The risk priority number is severity times occurrence times detection. Higher RPN means higher priority, but a high severity score demands attention even when the RPN is low. Some organizations use Action Priority tables instead of RPN.",
                "how": [
                  "Define the process or design scope and assemble a cross-functional team.",
                  "List failure modes: how the step could fail.",
                  "Describe the effect on the customer or downstream step and score severity.",
                  "Identify causes and score occurrence.",
                  "List current controls and score detection.",
                  "Calculate RPN and prioritize high-severity and high-RPN items.",
                  "Assign actions, owners, and dates, then re-score after the actions."
                ],
                "where": "Use FMEA in manufacturing, healthcare, software, service, and design. Example: medication order entry can fail with a wrong dose. Severity is 9, occurrence is 4, and detection is 3, giving an RPN of 108. Adding barcode scanning reduces occurrence to 1 and detection to 2, lowering the RPN to 18.",
                "when_not": "Do not run FMEA as a one-time paperwork exercise. Do not let a low RPN override a high severity score, and do not score without the people who know the process.",
                "common_mistakes": [
                  "Vague failure modes that cannot be acted on.",
                  "Inflating or deflating scores to fit a preferred priority.",
                  "No assigned actions or no re-scoring after improvements."
                ],
                "quick_check": [
                  {
                    "q": "How is RPN calculated?",
                    "answer": "Severity times occurrence times detection.",
                    "explanation": "Each factor is scored from 1 to 10, so RPN ranges from 1 to 1,000."
                  },
                  {
                    "q": "Why can a high-severity failure need action even with a low RPN?",
                    "answer": "The consequences may be unacceptable regardless of frequency.",
                    "explanation": "Severity reflects harm, not just likelihood."
                  },
                  {
                    "q": "What should happen after actions are implemented?",
                    "answer": "Re-score severity, occurrence, and detection to confirm the risk reduction.",
                    "explanation": "FMEA is a living document, not a one-time list."
                  }
                ],
                "recap": [
                  "FMEA prioritizes failure modes using severity, occurrence, detection, and RPN.",
                  "High severity always deserves attention.",
                  "Assign actions and re-score to confirm risk reduction."
                ]
              }
            },
            {
              "id": "G3.4",
              "order": 4,
              "title": "Hypothesis Testing Basics",
              "objective": "Form null and alternative hypotheses and interpret p-values correctly.",
              "content": {
                "why": "Green Belts need to know whether an observed difference is real or simply due to chance. Hypothesis testing prevents teams from reacting to noise and from missing real effects.",
                "what": "The null hypothesis states no difference or no effect. The alternative states a difference or effect. Choose a test based on the data type and design: one-sample t, two-sample t, paired t, ANOVA, chi-square, or a proportion test. The significance level, alpha, is often 0.05. The p-value is the probability of data at least as extreme as observed, assuming the null is true. It is not the probability that the null is true.",
                "how": [
                  "State the practical question.",
                  "Write the null and alternative hypotheses.",
                  "Choose alpha and the appropriate test.",
                  "Check the test assumptions.",
                  "Run the test and read the p-value and confidence interval.",
                  "If p is less than alpha, reject the null; otherwise, fail to reject it.",
                  "Interpret the effect size and practical importance."
                ],
                "where": "Use hypothesis tests to compare shifts, suppliers, before-and-after performance, or groups. Example: compare mean turnaround time for two shifts. The null is equal means; the alternative is different means. A two-sample t-test gives p = 0.02 with alpha 0.05, so reject the null. The 95% confidence interval for the difference is 2 to 18 minutes, which may or may not be practically important.",
                "when_not": "Do not test an unstable process. Do not fish for p-values by testing many combinations. Do not confuse statistical significance with practical significance, and do not use a two-sample test when the data are paired.",
                "common_mistakes": [
                  "Saying the p-value is the probability that the null is true.",
                  "Saying 'accept the null' instead of 'fail to reject the null.'",
                  "Ignoring assumptions, effect size, or multiple testing."
                ],
                "quick_check": [
                  {
                    "q": "What does p = 0.03 mean with alpha 0.05?",
                    "answer": "Reject the null hypothesis.",
                    "explanation": "The observed result is unlikely under the null at the chosen significance level."
                  },
                  {
                    "q": "What does p = 0.20 mean with alpha 0.05?",
                    "answer": "Fail to reject the null hypothesis.",
                    "explanation": "There is not enough evidence to reject the null; the null is not proven true."
                  },
                  {
                    "q": "What is a Type I error?",
                    "answer": "Rejecting a true null hypothesis.",
                    "explanation": "A Type I error is a false positive; alpha is its probability."
                  }
                ],
                "recap": [
                  "Hypothesis tests compare observed effects with chance.",
                  "Interpret p-values against alpha and report effect size.",
                  "Statistical significance does not automatically mean practical importance."
                ]
              }
            },
            {
              "id": "G3.5",
              "order": 5,
              "title": "Correlation",
              "objective": "Measure the strength and direction of a linear relationship.",
              "content": {
                "why": "Correlation helps teams screen for relationships between variables and decide where to investigate further. It is also a common source of false conclusions when causation is assumed.",
                "what": "The correlation coefficient r ranges from -1 to +1. A value near +1 indicates a strong positive linear relationship; near -1 indicates a strong negative relationship; near 0 indicates little or no linear relationship. The square of r is the proportion of variation shared by the two variables. Pearson correlation is used for linear relationships between continuous variables; Spearman correlation is used for monotonic relationships, ordinal data, or data with outliers.",
                "how": [
                  "Plot a scatter plot before calculating correlation.",
                  "Check for linearity, outliers, and separate groups.",
                  "Choose Pearson or Spearman based on the data.",
                  "Calculate r and, if needed, its p-value.",
                  "Interpret strength and direction in context.",
                  "Investigate causation with an experiment or stronger design."
                ],
                "where": "Use correlation to screen variables before regression or design of experiments. Examples include study hours versus exam score, wait time versus satisfaction, or temperature versus defect rate. If study hours and score have r = 0.6, the relationship is moderate and positive, and r-squared is 0.36, meaning 36% of the variation is shared.",
                "when_not": "Do not use correlation for clearly nonlinear relationships. Do not use it with categorical data; use a chi-square test instead. Do not infer causation from correlation, because confounding, reverse causation, or coincidence may explain the pattern.",
                "common_mistakes": [
                  "Concluding that one variable causes the other.",
                  "Ignoring outliers or curved patterns that distort r.",
                  "Combining different groups and creating a misleading aggregate correlation."
                ],
                "quick_check": [
                  {
                    "q": "What does r = -0.8 indicate?",
                    "answer": "A strong negative linear relationship.",
                    "explanation": "As one variable increases, the other tends to decrease."
                  },
                  {
                    "q": "What does r = 0 indicate?",
                    "answer": "No linear relationship.",
                    "explanation": "There may still be a nonlinear relationship, which is why a scatter plot matters."
                  },
                  {
                    "q": "Does correlation prove causation?",
                    "answer": "No. It shows association only.",
                    "explanation": "Confounding, reverse causation, or chance can create correlation."
                  }
                ],
                "recap": [
                  "Correlation measures the strength and direction of a linear relationship.",
                  "Plot the data first and check for outliers and nonlinearity.",
                  "Correlation is not causation."
                ]
              }
            },
            {
              "id": "G3.6",
              "order": 6,
              "title": "Simple Regression",
              "objective": "Fit a line, interpret slope and R-squared, and check residuals.",
              "content": {
                "why": "Regression quantifies a relationship and allows prediction, not just detection. It estimates how much a change in one variable is associated with a change in the response.",
                "what": "Simple linear regression fits a line: y equals b0 plus b1 times x, plus error. The slope b1 is the predicted change in y for a one-unit increase in x. The intercept b0 is the predicted y when x is zero, which may not be meaningful. R-squared is the proportion of variation in y explained by x. A residual is observed minus predicted. Check linearity, independence, constant variance, and normal residuals before trusting inference.",
                "how": [
                  "Plot a scatter plot and check for a linear pattern.",
                  "Fit the model in Excel using Regression or LINEST, or in Minitab using Stat > Regression > Fit Regression Model.",
                  "Interpret the slope, intercept, R-squared, p-value, and confidence interval.",
                  "Examine residual plots for curvature, changing spread, and outliers.",
                  "Check influential points and the range of the data.",
                  "Use the model for prediction only within the observed range."
                ],
                "where": "Use regression for cost drivers, cycle time, quality, and process optimization. Example: wait time versus satisfaction has a slope of -0.8 points per minute and R-squared of 0.45. A ten-minute increase is associated with about an eight-point lower satisfaction score. The model explains 45% of the variation, so other factors also matter.",
                "when_not": "Do not use simple regression for a clearly curved relationship. Do not extrapolate beyond the data range, and do not claim causation from an observational regression. Do not fit a model to an unstable process or to aggregated groups without checking the underlying data.",
                "common_mistakes": [
                  "Treating a high R-squared as proof that the model is correct.",
                  "Ignoring residual plots and influential outliers.",
                  "Using regression to claim that x causes y."
                ],
                "quick_check": [
                  {
                    "q": "What does the slope mean in simple regression?",
                    "answer": "The predicted change in the response for a one-unit increase in the predictor.",
                    "explanation": "The slope estimates the strength and direction of the linear relationship."
                  },
                  {
                    "q": "What does R-squared measure?",
                    "answer": "The proportion of variation in the response explained by the model.",
                    "explanation": "R-squared ranges from 0 to 1 and does not by itself prove a good model."
                  },
                  {
                    "q": "Why check residual plots?",
                    "answer": "To detect curvature, unequal spread, outliers, and other assumption violations.",
                    "explanation": "Residual patterns reveal problems that summary statistics can hide."
                  }
                ],
                "recap": [
                  "Simple regression estimates a linear relationship and supports prediction.",
                  "Interpret slope, R-squared, and residuals together.",
                  "Do not extrapolate or infer causation from regression alone."
                ]
              }
            },
            {
              "id": "G3.7",
              "order": 7,
              "title": "ANOVA Introduction",
              "objective": "Compare means across three or more groups and read the F-test.",
              "content": {
                "why": "Comparing several groups with repeated t-tests inflates the chance of a false positive. ANOVA tests whether any group means differ while controlling the overall error rate.",
                "what": "ANOVA stands for Analysis of Variance. The null hypothesis is that all group means are equal; the alternative is that at least one mean differs. The F-statistic is between-group variation divided by within-group variation. A large F means the differences between groups are large relative to the noise inside groups. A significant result does not identify which group differs; use a post-hoc test such as Tukey.",
                "how": [
                  "Define the response and the groups.",
                  "Plot box plots to see the pattern and check for outliers.",
                  "Check assumptions: independent groups, approximately normal residuals, and similar spread.",
                  "Run one-way ANOVA in Excel Data Analysis or Minitab.",
                  "Read the F-statistic and p-value.",
                  "If significant, run a post-hoc test to identify the differing groups.",
                  "Report effect size and practical importance, not just the p-value."
                ],
                "where": "Use ANOVA to compare suppliers, shifts, machines, regions, training methods, or departments. Example: mean call handling time across four teams gives F = 4.8 and p = 0.004, so at least one team differs. A Tukey comparison shows team C is slower. The team then investigates workload, staffing, and process differences.",
                "when_not": "Do not use ordinary one-way ANOVA for repeated measures on the same units without the appropriate model. Do not use it when assumptions are badly violated; consider Welch ANOVA or Kruskal-Wallis. Use a t-test for two groups.",
                "common_mistakes": [
                  "Running many t-tests instead of one ANOVA.",
                  "Stopping at a significant p-value without a post-hoc test.",
                  "Ignoring unequal variances or non-normal residuals."
                ],
                "quick_check": [
                  {
                    "q": "What does ANOVA test?",
                    "answer": "Whether the means of three or more groups differ.",
                    "explanation": "The null is that all group means are equal."
                  },
                  {
                    "q": "What does a large F-statistic indicate?",
                    "answer": "Between-group variation is large relative to within-group variation.",
                    "explanation": "This suggests the group means may differ."
                  },
                  {
                    "q": "What should you do after a significant ANOVA?",
                    "answer": "Run a post-hoc test to identify which groups differ.",
                    "explanation": "ANOVA alone does not say which group is different."
                  }
                ],
                "recap": [
                  "ANOVA compares means across three or more groups.",
                  "A significant F-test requires post-hoc analysis to locate differences.",
                  "Check assumptions and report effect size."
                ]
              }
            }
          ]
        },
        {
          "id": "green-4",
          "number": 4,
          "title": "Improve",
          "duration": "2.5 hours",
          "summary": "Choose solutions with evidence, test them safely, mistake-proof the process, and begin designing experiments.",
          "lessons": [
            {
              "id": "G4.1",
              "order": 1,
              "title": "Solution Selection",
              "objective": "Use impact, effort, risk, and cost to choose among candidate solutions.",
              "content": {
                "why": "Teams generate many possible solutions. A transparent selection method prevents pet ideas from winning and helps the team choose an option that is effective, feasible, and sustainable.",
                "what": "Solution selection compares candidates on impact, effort, time, cost, risk, feasibility, and stakeholder acceptance. Common tools include the impact-effort matrix, weighted scoring, Pugh matrix, cost-benefit analysis, and risk assessment. The solution must address the verified root cause and improve the CTQ. A promising solution is usually piloted before full implementation.",
                "how": [
                  "Restate the verified root cause and the CTQ it affects.",
                  "List the candidate solutions without evaluating them yet.",
                  "Agree on criteria and weights with the team and sponsor.",
                  "Score each candidate and calculate a weighted total.",
                  "Assess risk, feasibility, and unintended consequences.",
                  "Select one or two candidates for a pilot.",
                  "Document the rationale and the decision."
                ],
                "where": "Use solution selection in every Improve phase. Example: a clinic wants to reduce waiting. Adding a second triage nurse scores high on impact, medium on effort and cost, and low on risk. Extending hours scores medium impact and high effort. New software scores high cost and long lead time. The team pilots the triage nurse first.",
                "when_not": "Do not use scoring to justify a decision that has already been made. Do not ignore regulatory or safety constraints, and do not select a solution before the root cause is verified.",
                "common_mistakes": [
                  "Choosing a favorite solution before evaluating alternatives.",
                  "Weighting criteria to produce a predetermined winner.",
                  "Ignoring implementation effort, risk, or stakeholder acceptance."
                ],
                "quick_check": [
                  {
                    "q": "What does an impact-effort matrix help a team do?",
                    "answer": "Compare solutions by expected impact and implementation effort.",
                    "explanation": "It highlights quick wins and flags high-effort, low-impact options."
                  },
                  {
                    "q": "Why link a solution to the verified root cause?",
                    "answer": "To increase the chance that the fix actually removes the problem.",
                    "explanation": "A solution that does not address the cause may only treat symptoms."
                  },
                  {
                    "q": "Why pilot before full implementation?",
                    "answer": "To test the solution under real conditions with limited risk.",
                    "explanation": "A pilot provides evidence and reveals unintended effects."
                  }
                ],
                "recap": [
                  "Select solutions using impact, effort, risk, cost, and feasibility.",
                  "Link the solution to the verified root cause and CTQ.",
                  "Pilot the strongest candidate before scaling."
                ]
              }
            },
            {
              "id": "G4.2",
              "order": 2,
              "title": "Pilot Testing",
              "objective": "Design a small trial with clear success measures and a rollback plan.",
              "content": {
                "why": "A pilot tests a solution under real conditions with limited risk. It provides evidence before a full rollout and reveals problems that a plan or simulation would miss.",
                "what": "A pilot plan defines the objective, scope, site or shift, duration, success metrics, baseline, roles, training, data collection, communication, rollback plan, and decision criteria. The team compares pilot performance with baseline or a control group. A go, no-go, or adapt decision is made from data, not enthusiasm.",
                "how": [
                  "Write the pilot objective and success metrics.",
                  "Choose a representative area, team, or shift.",
                  "Establish a baseline before the pilot starts.",
                  "Train the people who will use the new method.",
                  "Run the pilot long enough to see a stable effect.",
                  "Collect data and monitor unintended consequences.",
                  "Compare results and decide to scale, adapt, or stop.",
                  "Document lessons learned for the rollout."
                ],
                "where": "Use pilots in healthcare, manufacturing, software, retail, banking, and education. Example: barcode scanning is piloted on one ward for four weeks. The baseline is twelve medication errors per month and the target is a 50% reduction. The pilot records five errors per month with no workflow delay, so the team scales to other wards.",
                "when_not": "Do not pilot in a non-representative area and generalize without checking. Do not skip the baseline or run the pilot too briefly to see the effect. Do not ignore side effects on other departments.",
                "common_mistakes": [
                  "No success criteria or baseline.",
                  "No rollback plan if the pilot creates a serious problem.",
                  "Ignoring staff feedback and unintended consequences."
                ],
                "quick_check": [
                  {
                    "q": "Why does a pilot need a baseline?",
                    "answer": "To compare pilot performance with current performance.",
                    "explanation": "Without a baseline, the team cannot tell whether the change worked."
                  },
                  {
                    "q": "What is a rollback plan?",
                    "answer": "A predefined way to return to the old method if the pilot fails or causes harm.",
                    "explanation": "It limits risk during testing."
                  },
                  {
                    "q": "What decisions can follow a pilot?",
                    "answer": "Scale, adapt, or stop.",
                    "explanation": "The pilot result determines the next step."
                  }
                ],
                "recap": [
                  "A pilot tests a solution with clear metrics and limited risk.",
                  "Use a baseline, a representative area, and a rollback plan.",
                  "Decide to scale, adapt, or stop based on data."
                ]
              }
            },
            {
              "id": "G4.3",
              "order": 3,
              "title": "Poka-Yoke",
              "objective": "Add mistake-proofing devices or checks that prevent or detect errors.",
              "content": {
                "why": "Human error is inevitable. Poka-yoke designs the process so errors are hard to make or are caught immediately, which is more reliable than reminders or training alone.",
                "what": "Poka-yoke means mistake-proofing. Prevention makes an error impossible or very difficult, such as a connector that only fits one way. Detection catches an error immediately, such as a scanner that rejects the wrong patient wristband. Good poka-yoke is simple, close to the work, and designed with the people who use it. It is most effective when paired with root cause analysis.",
                "how": [
                  "Identify the failure mode, using FMEA or root cause analysis.",
                  "Understand how and where the error occurs.",
                  "Choose prevention first; use detection if prevention is not practical.",
                  "Design a simple device, check, or software rule.",
                  "Test it with real users in the real workflow.",
                  "Monitor for new errors or workarounds.",
                  "Standardize and assign ownership."
                ],
                "where": "Use poka-yoke in manufacturing fixtures, medication barcode scanning, software form validation, color-coded connectors, forced sequence steps, and checklist controls. Example: scanning the patient wristband and the medication barcode prevents giving the wrong drug to the wrong patient. A simpler example is an email client that warns when the message mentions an attachment but none is attached.",
                "when_not": "Do not rely on poka-yoke for complex judgment errors that need training or decision support. Do not create so many alerts that people ignore them. Do not add a device without testing whether it fits the real workflow.",
                "common_mistakes": [
                  "Choosing detection when prevention is practical.",
                  "Adding alarms that users disable or ignore.",
                  "Treating poka-yoke as a substitute for finding the root cause."
                ],
                "quick_check": [
                  {
                    "q": "What is the difference between prevention and detection in poka-yoke?",
                    "answer": "Prevention makes an error impossible or difficult; detection catches it immediately.",
                    "explanation": "Prevention is generally stronger because the error never reaches the customer."
                  },
                  {
                    "q": "Why is poka-yoke more reliable than a reminder?",
                    "answer": "It changes the process so the error is blocked or caught, rather than relying on memory.",
                    "explanation": "Reminders can be forgotten; well-designed mistake-proofing is built into the work."
                  },
                  {
                    "q": "What should you do after installing a poka-yoke?",
                    "answer": "Monitor for new errors, workarounds, and unintended effects.",
                    "explanation": "People may find ways around a control that does not fit the workflow."
                  }
                ],
                "recap": [
                  "Poka-yoke prevents errors or detects them immediately.",
                  "Prefer prevention, keep the design simple, and test it with users.",
                  "Pair mistake-proofing with root cause analysis and monitoring."
                ]
              }
            },
            {
              "id": "G4.4",
              "order": 4,
              "title": "Lean Tools for Improvement",
              "objective": "Apply flow, pull, standard work, and quick changeover thinking.",
              "content": {
                "why": "Green Belts often need to improve flow and lead time, not just defect rates. Lean tools reduce waiting, batch delays, and rework without large capital investment.",
                "what": "Flow means work moves smoothly with minimal batching and handoffs. Pull means downstream demand triggers work instead of pushing work ahead of need. Standard work documents the best-known method, sequence, and quality checks. Quick changeover, or SMED, separates internal setup from external setup and reduces changeover time. Takt time is available work time divided by customer demand.",
                "how": [
                  "Map the value stream and identify delays and handoffs.",
                  "Calculate takt time from available time and customer demand.",
                  "Reduce batch sizes and unnecessary approvals.",
                  "Introduce pull where demand and supply make it practical.",
                  "Standardize the best-known method and train to it.",
                  "Reduce changeover time by moving work outside the changeover window."
                ],
                "where": "Use Lean tools in manufacturing, healthcare, banking, IT, retail, and education. Example: a clinic has 480 minutes of available time and 60 patients, so takt time is 8 minutes. If the current step takes 12 minutes, it is a bottleneck. The team redistributes work and standardizes the new method to bring the step closer to takt.",
                "when_not": "Do not force pull where demand is highly variable or supply is constrained without appropriate buffers. Do not remove necessary controls to make a process look faster, and do not use Lean tools as a substitute for reducing variation.",
                "common_mistakes": [
                  "Installing kanban before the process is stable.",
                  "Reducing batch size without checking downstream capacity.",
                  "Writing standard work without training or front-line involvement."
                ],
                "quick_check": [
                  {
                    "q": "How is takt time calculated?",
                    "answer": "Available work time divided by customer demand.",
                    "explanation": "Takt time sets the pace the process needs to meet customer demand."
                  },
                  {
                    "q": "What does pull mean in Lean?",
                    "answer": "Work is triggered by downstream demand rather than pushed ahead of it.",
                    "explanation": "Pull reduces overproduction and excess work in progress."
                  },
                  {
                    "q": "What is the goal of quick changeover?",
                    "answer": "To reduce the time and waste required to switch from one product or task to another.",
                    "explanation": "Shorter changeovers make smaller batches and more flexible flow possible."
                  }
                ],
                "recap": [
                  "Lean tools improve flow, pull, standard work, and changeover.",
                  "Use takt time to understand the required pace.",
                  "Stabilize the process and involve the people who do the work."
                ]
              }
            },
            {
              "id": "G4.5",
              "order": 5,
              "title": "DOE Introduction",
              "objective": "Explain factors, levels, responses, and why experiments beat one-factor tests.",
              "content": {
                "why": "Testing one factor at a time misses interactions and wastes runs. Design of Experiments tests several factors together and shows which settings actually matter.",
                "what": "A factor is an input variable; a level is a setting of that factor; a response is the measured output; a run is one experimental trial. A main effect is the average change in the response when a factor changes. An interaction means the effect of one factor depends on the level of another. Randomization protects against lurking variables, and replication provides an estimate of experimental error.",
                "how": [
                  "Define the objective and the response metric.",
                  "Choose the factors and their levels.",
                  "Select a design, such as a two-level full factorial or a fractional factorial for screening.",
                  "Randomize the run order and include replicates.",
                  "Run the experiment and record the response.",
                  "Analyze main effects and interactions in software such as Minitab.",
                  "Run confirmation trials at the recommended settings."
                ],
                "where": "Use DOE for process optimization, product design, and robustness. Example: oven temperature at 150 or 170 degrees and time at 20 or 30 minutes affect strength. A two-by-two design with two replicates requires eight runs. If the best temperature depends on time, the factors interact and should be set together, not one at a time.",
                "when_not": "Do not use DOE when factors are unsafe or impossible to control. Do not experiment before the measurement system is adequate, and do not confound effects by skipping randomization.",
                "common_mistakes": [
                  "Changing one factor at a time and missing interactions.",
                  "No replication, so the team cannot estimate error.",
                  "Too many factors in one experiment without a screening design."
                ],
                "quick_check": [
                  {
                    "q": "What is a factor in DOE?",
                    "answer": "An input variable that is deliberately changed in the experiment.",
                    "explanation": "Factors are set at different levels to see their effect on the response."
                  },
                  {
                    "q": "What is an interaction?",
                    "answer": "When the effect of one factor depends on the level of another factor.",
                    "explanation": "Interactions are a key reason DOE beats one-factor-at-a-time testing."
                  },
                  {
                    "q": "Why randomize run order?",
                    "answer": "To protect against lurking variables such as time, temperature, or operator drift.",
                    "explanation": "Randomization spreads uncontrolled effects across the experiment."
                  }
                ],
                "recap": [
                  "DOE tests multiple factors and estimates main effects and interactions.",
                  "Randomize, replicate, and use a design suited to the objective.",
                  "Confirm the predicted optimum with validation runs."
                ]
              }
            }
          ]
        },
        {
          "id": "green-5",
          "number": 5,
          "title": "Control",
          "duration": "2 hours",
          "summary": "Keep the gains by monitoring the process, documenting the new standard, and assigning clear ownership.",
          "lessons": [
            {
              "id": "G5.1",
              "order": 1,
              "title": "Control Charts",
              "objective": "Select X-bar/R, I-MR, p, np, c, or u charts and apply basic rules.",
              "content": {
                "why": "Control charts separate common cause variation from special cause signals. They tell the team when to act and when to leave the process alone, which is essential for sustaining an improvement.",
                "what": "For continuous data, use an X-bar and R chart for small subgroups, an X-bar and S chart for larger subgroups, or an I-MR chart for individual values. For attribute data, use a p chart for the proportion defective with variable sample size, an np chart for the number defective with constant sample size, a c chart for defects per unit with constant unit size, or a u chart for defects per unit with variable unit size. Control limits come from process data, not from specifications.",
                "how": [
                  "Choose the chart based on data type, subgroup size, and sample size.",
                  "Collect about 20 to 25 baseline subgroups or points.",
                  "Calculate the center line and control limits.",
                  "Plot new data in time order.",
                  "Apply rules for points beyond limits, runs, trends, and unusual patterns.",
                  "Investigate special causes before changing the process.",
                  "Recalculate limits only after a known process change."
                ],
                "where": "Use control charts for manufacturing dimensions, hospital wait times, late reports, defect rates, call handling time, and transaction errors. Example: an I-MR chart tracks daily waiting time, an X-bar and R chart tracks five samples per hour, and a p chart tracks the percentage of late reports when volume varies.",
                "when_not": "Do not use specification limits as control limits. Do not recalculate limits just to hide a signal, and do not use an attribute chart for continuous data.",
                "common_mistakes": [
                  "Choosing the wrong chart for the data type.",
                  "Too few baseline points, producing unreliable limits.",
                  "Reacting to common cause variation as if it were special cause."
                ],
                "quick_check": [
                  {
                    "q": "Which chart is used for individual measurements over time?",
                    "answer": "An I-MR chart.",
                    "explanation": "I-MR charts track individual values and the moving range."
                  },
                  {
                    "q": "Which chart is used for the proportion defective with variable sample size?",
                    "answer": "A p chart.",
                    "explanation": "p charts allow the sample size to vary."
                  },
                  {
                    "q": "Where do control limits come from?",
                    "answer": "From the process data, not from customer specifications.",
                    "explanation": "Control limits describe the process's natural variation."
                  }
                ],
                "recap": [
                  "Match the control chart to the data type and sample size.",
                  "Control limits come from process data, not specifications.",
                  "Investigate special causes and recalculate only after process changes."
                ]
              }
            },
            {
              "id": "G5.2",
              "order": 2,
              "title": "Control Plans",
              "objective": "Document metrics, sampling, reactions, and owners.",
              "content": {
                "why": "Improvements decay without monitoring. A control plan defines how the process will be watched, who responds when it drifts, and how the gain will be protected.",
                "what": "A control plan lists the process step, metric or CTQ, specification, measurement method, sample size and frequency, chart or monitoring method, reaction plan, owner, and escalation path. The reaction plan says what to check, whom to notify, how to contain the problem, and what corrective action to take. The plan links to standard work, FMEA, and control charts.",
                "how": [
                  "Identify the critical metrics that must be monitored.",
                  "Define the measurement method and frequency.",
                  "Choose the chart or monitoring approach and the trigger for action.",
                  "Write a specific reaction plan for each trigger.",
                  "Assign an owner and an escalation path.",
                  "Train the people who will use the plan.",
                  "Audit the plan and update it when the process changes."
                ],
                "where": "Use a control plan for every improved process, especially at project handover. Example: medication errors are tracked monthly on a p chart. If the rate exceeds the control limit, the owner verifies reporting, reviews the cases, checks whether the standard work was followed, and notifies the pharmacy lead.",
                "when_not": "Do not create a control plan that no one uses. Do not monitor so many metrics that the important ones are lost, and do not set a trigger without the capacity to respond.",
                "common_mistakes": [
                  "No named owner or escalation path.",
                  "A reaction plan that says only 'investigate' without specific steps.",
                  "Monitoring lagging metrics with no early warning."
                ],
                "quick_check": [
                  {
                    "q": "What should a reaction plan include?",
                    "answer": "What to check, whom to notify, how to contain the problem, and what corrective action to take.",
                    "explanation": "A specific reaction plan makes monitoring actionable."
                  },
                  {
                    "q": "Why does a control plan need an owner?",
                    "answer": "Someone must be accountable for monitoring and responding.",
                    "explanation": "Without ownership, signals are often ignored."
                  },
                  {
                    "q": "When should a control plan be updated?",
                    "answer": "When the process, metric, or risk changes.",
                    "explanation": "An outdated plan can monitor the wrong thing."
                  }
                ],
                "recap": [
                  "A control plan defines metrics, sampling, triggers, reactions, and owners.",
                  "Make the reaction plan specific and assign accountability.",
                  "Audit and update the plan when the process changes."
                ]
              }
            },
            {
              "id": "G5.3",
              "order": 3,
              "title": "SOPs and Standardization",
              "objective": "Write usable standard work and train to it.",
              "content": {
                "why": "Standard work is the foundation for sustaining gains. Without a clear standard, people revert to old methods and the improvement slowly disappears.",
                "what": "A standard operating procedure documents the best-known method for a task. Standard work goes further by defining sequence, timing, quality checks, safety, and the expected result. A usable SOP includes purpose, scope, roles, step-by-step instructions, visuals, decision points, exceptions, and revision history. It should be written with the people who do the work and available at the point of use.",
                "how": [
                  "Observe and document the current best method.",
                  "Involve the people who perform the work.",
                  "Draft the procedure with photos, screenshots, or simple diagrams.",
                  "Test the draft in the real workflow and revise it.",
                  "Train users and check competence.",
                  "Place the standard at the point of use.",
                  "Audit adherence and revise through change control."
                ],
                "where": "Use standard work in healthcare, manufacturing, service, IT, banking, and education. Example: a discharge checklist lists each step, the owner, the timing, and the escalation path. It reduces missed steps and makes handoffs predictable. A software team can use a release checklist in the same way.",
                "when_not": "Do not write a rigid procedure for work that is genuinely creative or highly variable without clear decision rules. Do not create shelf documents that no one reads, and do not standardize a process before it is improved.",
                "common_mistakes": [
                  "Writing the SOP without the people who do the work.",
                  "Making the document too long or hard to use at the point of work.",
                  "No training, audit, or revision process."
                ],
                "quick_check": [
                  {
                    "q": "What makes an SOP usable?",
                    "answer": "Clear steps, visuals, roles, exceptions, and access at the point of use.",
                    "explanation": "A usable SOP supports the real work rather than gathering dust."
                  },
                  {
                    "q": "Why involve front-line staff in writing standard work?",
                    "answer": "They know the real process and can identify practical steps and failure points.",
                    "explanation": "Involvement improves accuracy and adoption."
                  },
                  {
                    "q": "Is standard work permanent?",
                    "answer": "No. It should be updated through change control when a better method is proven.",
                    "explanation": "Standard work is the current best method, not a frozen rule."
                  }
                ],
                "recap": [
                  "Standard work documents the best-known method, sequence, and quality checks.",
                  "Write it with users, test it, train to it, and keep it at the point of use.",
                  "Audit adherence and improve the standard through change control."
                ]
              }
            }
          ]
        },
        {
          "id": "green-6",
          "number": 6,
          "title": "Project Management and Software",
          "duration": "2 hours",
          "summary": "Run the project professionally and use Excel or Minitab for the core analyses.",
          "lessons": [
            {
              "id": "G6.1",
              "order": 1,
              "title": "Project Management",
              "objective": "Plan tasks, manage risks, communicate status, and close the project.",
              "content": {
                "why": "Green Belt projects need planning, risk management, communication, and closure. Technical tools alone do not deliver results if the work is late, scope drifts, or the handover is weak.",
                "what": "Project management for improvement covers scope, schedule, resources, stakeholders, risks, communication, quality gates, change control, and closure. A work breakdown structure divides the work into manageable tasks. A Gantt chart shows timing and dependencies. A RAID log tracks risks, assumptions, issues, and dependencies. Tollgate reviews confirm that each DMAIC phase is complete.",
                "how": [
                  "Define the scope, deliverables, and milestone dates.",
                  "Build a work breakdown structure and estimate effort.",
                  "Sequence tasks and identify the critical path.",
                  "Maintain a RAID log and review it weekly.",
                  "Communicate status to the sponsor and stakeholders.",
                  "Hold gate reviews before moving to the next phase.",
                  "Close the project with a handover, lessons learned, and benefit validation."
                ],
                "where": "Use project management on every Green Belt project, especially cross-functional work. Example: a twelve-week discharge project has a work breakdown by DMAIC phase, a Gantt chart, a weekly stand-up, a RAID log, gate reviews with the sponsor, and a handover to the ward manager.",
                "when_not": "Do not build a heavy project plan for a small fix that takes a day. Do not rely on a Gantt chart without understanding dependencies, and do not ignore risks because the technical work looks simple.",
                "common_mistakes": [
                  "No work breakdown, so tasks and owners are unclear.",
                  "An optimistic schedule with no contingency.",
                  "No risk log, poor communication, or no formal closure."
                ],
                "quick_check": [
                  {
                    "q": "What is a RAID log?",
                    "answer": "A log of risks, assumptions, issues, and dependencies.",
                    "explanation": "RAID keeps project threats and constraints visible."
                  },
                  {
                    "q": "What is the critical path?",
                    "answer": "The longest sequence of dependent tasks that determines the project duration.",
                    "explanation": "Delay on the critical path delays the whole project."
                  },
                  {
                    "q": "Why hold a project closure?",
                    "answer": "To confirm benefits, hand over ownership, and capture lessons learned.",
                    "explanation": "Closure prevents the project from fading without accountability."
                  }
                ],
                "recap": [
                  "Plan scope, schedule, risks, communication, and gates.",
                  "Use a work breakdown structure, Gantt chart, and RAID log.",
                  "Close with handover, benefit validation, and lessons learned."
                ]
              }
            },
            {
              "id": "G6.2",
              "order": 2,
              "title": "Excel and Minitab Basics",
              "objective": "Use descriptive statistics, control charts, capability, and t-tests in software.",
              "content": {
                "why": "Green Belts need software to analyze data efficiently and reproducibly. Knowing which tool to use, and checking its assumptions, prevents errors and saves time.",
                "what": "Excel is useful for descriptive statistics, run charts, histograms, scatter plots, regression, t-tests, and simple ANOVA. Minitab is stronger for Gage R&R, capability analysis, control charts, regression, ANOVA, and design of experiments. Both tools require clean data, the correct method, and interpretation of assumptions and plots.",
                "how": [
                  "Clean and structure the data before analysis.",
                  "Choose the method that matches the question and data type.",
                  "Run the analysis in Excel or Minitab.",
                  "Check assumptions and diagnostic plots.",
                  "Interpret the output, including effect size and confidence intervals.",
                  "Save the file with a clear version name.",
                  "Document the steps so the analysis can be repeated."
                ],
                "where": "Use Excel for quick summaries and simple charts, and Minitab for advanced statistics and DOE. Example: a two-sample t-test can be run in both tools; compare the p-value and confidence interval. A capability study is usually faster in Minitab under Stat > Quality Tools > Capability Analysis > Normal.",
                "when_not": "Do not use software without understanding the method and its assumptions. Do not trust default settings blindly, and do not use Excel for complex DOE when a validated statistical package is available.",
                "common_mistakes": [
                  "Analyzing the wrong data type or including hidden rows.",
                  "Using the default alpha without checking the project standard.",
                  "Skipping assumption checks and diagnostic plots."
                ],
                "quick_check": [
                  {
                    "q": "Which tool is generally stronger for DOE and capability analysis?",
                    "answer": "Minitab.",
                    "explanation": "Minitab has dedicated menus for DOE, capability, MSA, and control charts."
                  },
                  {
                    "q": "What should you do before running an analysis?",
                    "answer": "Clean the data and confirm the method matches the question and data type.",
                    "explanation": "Good analysis starts with good data and the right method."
                  },
                  {
                    "q": "Why document the analysis steps?",
                    "answer": "So the work can be repeated, reviewed, and defended.",
                    "explanation": "Reproducibility is essential for trust and audit."
                  }
                ],
                "recap": [
                  "Excel handles quick summaries and simple tests; Minitab handles advanced statistics and DOE.",
                  "Clean data, choose the right method, and check assumptions.",
                  "Document the analysis so it can be reproduced."
                ]
              }
            }
          ]
        }
      ],
      "coverageChecklist": [
        {
          "topic": "Define: charter",
          "lessons": [
            "G1.1"
          ]
        },
        {
          "topic": "Define: stakeholders",
          "lessons": [
            "G1.2"
          ]
        },
        {
          "topic": "Define: VOC/CTQ",
          "lessons": [
            "G1.3"
          ]
        },
        {
          "topic": "Measure: data plan",
          "lessons": [
            "G2.1"
          ]
        },
        {
          "topic": "Measure: sampling",
          "lessons": [
            "G2.2"
          ]
        },
        {
          "topic": "Measure: MSA",
          "lessons": [
            "G2.3"
          ]
        },
        {
          "topic": "Measure: descriptive statistics",
          "lessons": [
            "G2.4"
          ]
        },
        {
          "topic": "Measure: normal distribution",
          "lessons": [
            "G2.5"
          ]
        },
        {
          "topic": "Measure: sigma level",
          "lessons": [
            "G2.6"
          ]
        },
        {
          "topic": "Measure: DPMO",
          "lessons": [
            "G2.6"
          ]
        },
        {
          "topic": "Measure: Cp/Cpk",
          "lessons": [
            "G2.7"
          ]
        },
        {
          "topic": "Analyze: graphs",
          "lessons": [
            "G3.1"
          ]
        },
        {
          "topic": "Analyze: root cause",
          "lessons": [
            "G3.2"
          ]
        },
        {
          "topic": "Analyze: FMEA",
          "lessons": [
            "G3.3"
          ]
        },
        {
          "topic": "Analyze: hypothesis testing basics",
          "lessons": [
            "G3.4"
          ]
        },
        {
          "topic": "Analyze: correlation",
          "lessons": [
            "G3.5"
          ]
        },
        {
          "topic": "Analyze: simple regression",
          "lessons": [
            "G3.6"
          ]
        },
        {
          "topic": "Analyze: ANOVA intro",
          "lessons": [
            "G3.7"
          ]
        },
        {
          "topic": "Improve: solution selection",
          "lessons": [
            "G4.1"
          ]
        },
        {
          "topic": "Improve: pilot",
          "lessons": [
            "G4.2"
          ]
        },
        {
          "topic": "Improve: poka-yoke",
          "lessons": [
            "G4.3"
          ]
        },
        {
          "topic": "Improve: Lean tools",
          "lessons": [
            "G4.4"
          ]
        },
        {
          "topic": "Improve: DOE intro",
          "lessons": [
            "G4.5"
          ]
        },
        {
          "topic": "Control: control charts",
          "lessons": [
            "G5.1"
          ]
        },
        {
          "topic": "Control: control plan",
          "lessons": [
            "G5.2"
          ]
        },
        {
          "topic": "Control: SOPs",
          "lessons": [
            "G5.3"
          ]
        },
        {
          "topic": "Project management",
          "lessons": [
            "G6.1"
          ]
        },
        {
          "topic": "Excel/Minitab basics",
          "lessons": [
            "G6.2"
          ]
        }
      ],
      "project": {
        "title": "Reduce Appointment No-Shows",
        "brief": "Charter a project to reduce no-shows in a clinic, bank branch, or service center. Build a data plan, check the measurement system, baseline the no-show rate, run a Pareto and hypothesis test, pilot a reminder solution, and hand off a control chart and control plan."
      },
      "exam": {
        "questions": 60,
        "passingScore": 80,
        "format": "Multiple choice, calculation questions, and a case-based DMAIC review."
      },
      "cheatSheet": [
        "Z = (X - mean) / standard deviation",
        "DPMO = defects / (units x opportunities) x 1,000,000",
        "Cp = (USL - LSL) / 6 sigma; Cpk = min((USL - mean)/3 sigma, (mean - LSL)/3 sigma)",
        "p-value < alpha: reject the null hypothesis"
      ],
      "nextChecklist": [
        "I can build a data collection plan and a sampling plan.",
        "I can interpret a Gage R&R and a capability report.",
        "I can choose a basic hypothesis test for a question.",
        "I can hand off a control chart and control plan."
      ]
    },
    {
      "id": "black",
      "name": "Black Belt",
      "level": 4,
      "color": "black",
      "icon": "fa-crown",
      "lessonTarget": "35-45",
      "studyTime": "80-100 hours",
      "audience": "Full-time improvement leaders who lead complex, cross-functional projects and coach Green Belts.",
      "prerequisites": "Green Belt certification and completion of at least one DMAIC project.",
      "previousRecap": "Green Belt recap: DMAIC projects need a charter, trustworthy measurement, capability analysis, hypothesis tests, pilots, and control plans; simple regression and ANOVA support decisions.",
      "outcomes": [
        "Lead complex DMAIC and design projects across functions",
        "Apply advanced statistics, regression, and designed experiments",
        "Handle attribute measurement systems, non-normal data, and advanced SPC",
        "Integrate Lean, DFSS, change leadership, finance, and mentoring"
      ],
      "modules": [
        {
          "id": "black-1",
          "number": 1,
          "title": "Probability and Inference",
          "duration": "5 hours",
          "summary": "Build the statistical foundation for advanced decision-making: distributions, sampling, confidence, power, and the full hypothesis testing toolkit.",
          "lessons": [
            {
              "id": "B1.1",
              "order": 1,
              "title": "Probability Distributions",
              "objective": "Recognize normal, binomial, Poisson, exponential, and Weibull patterns.",
              "content": {
                "why": "The distribution behind the data determines which capability, control chart, and hypothesis methods are valid. Choosing the wrong distribution can produce confident but wrong conclusions.",
                "what": "The normal distribution is continuous, symmetric, and defined by mean and standard deviation; it fits many measurement variables. The binomial distribution counts successes in a fixed number of independent trials with a constant probability, such as pass or fail. The Poisson distribution counts events in a fixed time or space, such as defects per unit or arrivals per hour. The exponential distribution models time between Poisson events. The Weibull distribution is flexible for life and reliability data and can represent increasing, constant, or decreasing failure rates.",
                "how": [
                  "Identify the data type: continuous measurement, binary outcome, count, or time between events.",
                  "Plot a histogram or probability plot.",
                  "Propose a distribution that matches the data-generating process.",
                  "Fit the distribution and check goodness of fit.",
                  "Use the fitted distribution in capability, control, or reliability analysis.",
                  "Validate the choice with process knowledge and new data."
                ],
                "where": "Use distribution knowledge in manufacturing reliability, healthcare arrivals, call centers, banking transactions, and IT incidents. Example: calls per hour often follow a Poisson pattern, time between calls follows an exponential pattern, the proportion of abandoned calls is binomial, and equipment life may follow a Weibull pattern.",
                "when_not": "Do not force a normal distribution onto counts or proportions. Do not use a binomial model when trials are dependent or the probability changes, and do not use Poisson when events cluster or the variance far exceeds the mean.",
                "common_mistakes": [
                  "Assuming every dataset is normal.",
                  "Ignoring overdispersion in count data.",
                  "Fitting a distribution without checking goodness of fit."
                ],
                "quick_check": [
                  {
                    "q": "Which distribution models the number of successes in a fixed number of independent trials?",
                    "answer": "The binomial distribution.",
                    "explanation": "Binomial data have two outcomes and a constant success probability."
                  },
                  {
                    "q": "Which distribution is often used for time-to-failure data with a flexible failure rate?",
                    "answer": "The Weibull distribution.",
                    "explanation": "Weibull shape and scale parameters allow increasing, constant, or decreasing hazard."
                  },
                  {
                    "q": "Which distribution models counts of events in a fixed time or space?",
                    "answer": "The Poisson distribution.",
                    "explanation": "Poisson models rare event counts such as defects per unit or arrivals per hour."
                  }
                ],
                "recap": [
                  "Match the distribution to the data-generating process.",
                  "Normal, binomial, Poisson, exponential, and Weibull cover common Lean Six Sigma situations.",
                  "Fit and check the distribution before using it for inference."
                ]
              }
            },
            {
              "id": "B1.2",
              "order": 2,
              "title": "Sampling Distributions and the Central Limit Theorem",
              "objective": "Explain why sample means behave predictably.",
              "content": {
                "why": "Statistical inference relies on sampling distributions. The Central Limit Theorem explains why sample means behave predictably and why confidence intervals and tests work.",
                "what": "A sampling distribution is the distribution of a statistic, such as the mean, across repeated samples. The standard error is the standard deviation of that statistic. For a mean, the standard error is sigma divided by the square root of n. The Central Limit Theorem says that for a large sample, the distribution of the sample mean is approximately normal, regardless of the population shape. The mean of the sample means equals the population mean, and the spread shrinks as n grows.",
                "how": [
                  "Define the population, sample size, and statistic.",
                  "Take repeated samples or simulate it.",
                  "Plot the distribution of the sample means.",
                  "Calculate the standard error.",
                  "Apply the Central Limit Theorem when the sample is large enough.",
                  "Use it for confidence intervals or hypothesis tests."
                ],
                "where": "Use sampling distributions for surveys, audits, control charts, and any inference about a mean or proportion. Example: a population has mean 100 and standard deviation 20. With n = 25, the standard error is 4, so the sample mean is approximately normal with mean 100 and standard deviation 4. With n = 100, the standard error falls to 2.",
                "when_not": "Do not apply the Central Limit Theorem blindly to tiny samples or extremely skewed data. For proportions, check that np and n(1-p) are large enough. For dependent data such as time series, use methods that account for autocorrelation.",
                "common_mistakes": [
                  "Confusing the standard deviation of the data with the standard error of the mean.",
                  "Believing the theorem makes the raw data normal.",
                  "Using n = 30 as a universal rule for heavily skewed data."
                ],
                "quick_check": [
                  {
                    "q": "What is the standard error of the mean?",
                    "answer": "The population standard deviation divided by the square root of n.",
                    "explanation": "It describes the spread of sample means across repeated samples."
                  },
                  {
                    "q": "What does the Central Limit Theorem say?",
                    "answer": "For sufficiently large samples, the sample mean is approximately normally distributed.",
                    "explanation": "This holds even when the population is not normal, subject to sample size and shape."
                  },
                  {
                    "q": "What happens to the standard error as sample size increases?",
                    "answer": "It decreases in proportion to the square root of n.",
                    "explanation": "Larger samples give more precise estimates."
                  }
                ],
                "recap": [
                  "Sampling distributions describe how statistics vary across repeated samples.",
                  "The standard error of the mean is sigma divided by the square root of n.",
                  "The Central Limit Theorem supports inference with large samples."
                ]
              }
            },
            {
              "id": "B1.3",
              "order": 3,
              "title": "Confidence Intervals",
              "objective": "Interpret interval estimates for means, proportions, and differences.",
              "content": {
                "why": "A point estimate without uncertainty is incomplete. Confidence intervals show the precision of an estimate and the range of plausible values, which supports better decisions.",
                "what": "A confidence interval is an estimate plus or minus a critical value times a standard error. For a mean with unknown sigma, use x-bar plus or minus t times s divided by the square root of n. For a proportion, use p-hat plus or minus z times the standard error, or a Wilson interval for small samples. For a difference, calculate the difference and its standard error. A 95% interval means that if sampling were repeated, about 95% of such intervals would contain the true parameter.",
                "how": [
                  "Identify the parameter: mean, proportion, or difference.",
                  "Check the assumptions for the interval.",
                  "Calculate the estimate and standard error.",
                  "Choose the critical value for the confidence level.",
                  "Construct the interval.",
                  "Interpret it in the context of the process and the practical decision.",
                  "Compare the interval with a target or specification when relevant."
                ],
                "where": "Use confidence intervals for before-and-after comparisons, supplier comparisons, survey results, and capability studies. Example: mean wait time is 30 minutes, s = 8, and n = 25. With t = 2.064, the interval is 30 plus or minus 3.30, or 26.7 to 33.3 minutes. If a target of 25 is outside the interval, the process is likely above target.",
                "when_not": "Do not use a simple Wald interval for very small proportions. Do not treat overlapping confidence intervals as a formal hypothesis test, and do not ignore clustering or paired data.",
                "common_mistakes": [
                  "Saying there is a 95% probability that the parameter lies in this specific interval.",
                  "Using z when t is appropriate for an unknown sigma.",
                  "Confusing a confidence interval with a prediction interval."
                ],
                "quick_check": [
                  {
                    "q": "What does a 95% confidence interval mean?",
                    "answer": "About 95% of intervals from repeated samples would contain the true parameter.",
                    "explanation": "The confidence is in the procedure, not in one specific interval."
                  },
                  {
                    "q": "What makes a confidence interval narrower?",
                    "answer": "Lower confidence, less variability, or a larger sample.",
                    "explanation": "Width depends on the critical value, standard error, and sample size."
                  },
                  {
                    "q": "Why report a confidence interval instead of only a p-value?",
                    "answer": "It shows the size and precision of the effect, not just statistical significance.",
                    "explanation": "Intervals support practical interpretation."
                  }
                ],
                "recap": [
                  "Confidence intervals quantify uncertainty around an estimate.",
                  "Interpret the procedure, not the probability of a single interval.",
                  "Report the interval and its practical meaning."
                ]
              }
            },
            {
              "id": "B1.4",
              "order": 4,
              "title": "Power and Sample Size",
              "objective": "Balance alpha, beta, effect size, and sample size.",
              "content": {
                "why": "Underpowered studies miss real effects, while overpowered studies waste resources and flag trivial differences as significant. Power and sample size planning prevents both problems.",
                "what": "Alpha is the Type I error rate, the chance of a false positive. Beta is the Type II error rate, the chance of missing a real effect. Power is one minus beta, the chance of detecting an effect that exists. Power depends on alpha, effect size, variability, sample size, and the test. Larger effects and larger samples increase power. Minimum detectable effect is the smallest difference the study is designed to find.",
                "how": [
                  "Define the test and the effect you need to detect.",
                  "Estimate variability from pilot data or process knowledge.",
                  "Set alpha, often 0.05, and target power, often 0.80 or 0.90.",
                  "Choose the minimum detectable effect that matters practically.",
                  "Calculate the required sample size in Minitab or G*Power.",
                  "Adjust for dropout, nonresponse, or subgroup analysis.",
                  "Recheck power after the design is final."
                ],
                "where": "Use power analysis for DOE, pilots, surveys, A/B tests, and before-and-after studies. Example: detect a five-minute difference with standard deviation 10, alpha 0.05, and power 0.80. A two-sample calculation gives about 63 observations per group using the normal approximation.",
                "when_not": "Do not use an arbitrary sample size such as 30. Do not ignore the practical effect size, and do not rely on post-hoc power after the study to explain a non-significant result.",
                "common_mistakes": [
                  "No power analysis before data collection.",
                  "Using an unrealistically small effect size.",
                  "Ignoring multiple comparisons or dropout."
                ],
                "quick_check": [
                  {
                    "q": "What is power?",
                    "answer": "The probability of detecting a true effect, equal to one minus beta.",
                    "explanation": "Higher power means a lower chance of a false negative."
                  },
                  {
                    "q": "What happens to power when sample size increases?",
                    "answer": "Power increases.",
                    "explanation": "Larger samples reduce standard error and make real effects easier to detect."
                  },
                  {
                    "q": "What is beta?",
                    "answer": "The Type II error rate, the chance of failing to detect a real effect.",
                    "explanation": "Power is one minus beta."
                  }
                ],
                "recap": [
                  "Power is the chance of detecting a true effect.",
                  "Plan alpha, beta, effect size, variability, and sample size together.",
                  "Use software and practical effect sizes, not arbitrary sample rules."
                ]
              }
            },
            {
              "id": "B1.5",
              "order": 5,
              "title": "Choosing the Right Hypothesis Test",
              "objective": "Select a test from the data type, number of groups, and assumptions.",
              "content": {
                "why": "The wrong test invalidates the conclusion. Black Belts must choose the test from the data type, number of groups, and assumptions, then explain the choice to the team.",
                "what": "For continuous data, use a one-sample t-test against a target, a two-sample t-test for two independent groups, a paired t-test for before-and-after on the same units, and ANOVA for three or more groups. For categorical data, use chi-square for independence or goodness of fit, a two-proportion test for two groups, or McNemar for paired binary data. When normality or equal variance fails, use Mann-Whitney, Kruskal-Wallis, or a sign test. Use Pearson or Spearman correlation for association.",
                "how": [
                  "State the practical question.",
                  "Identify the response type: continuous, binary, count, or ordinal.",
                  "Count the groups and determine whether the data are paired.",
                  "Check independence, normality, and equal variance.",
                  "Select the matching test or a robust alternative.",
                  "Run the test and interpret the p-value, confidence interval, and effect size.",
                  "Confirm the conclusion with plots and process knowledge."
                ],
                "where": "Use test selection throughout Analyze. Example: compare satisfaction on a 1-5 scale across three clinics with Kruskal-Wallis. Compare defect rates before and after on the same production lines with a paired test, or McNemar if the outcome is binary. Compare mean strength from two suppliers with a two-sample t-test.",
                "when_not": "Do not use a t-test for three or more groups. Do not use chi-square with very small expected counts without an exact test. Do not ignore a paired design or dependence in the data.",
                "common_mistakes": [
                  "Choosing a familiar test instead of the one that fits the design.",
                  "Ignoring assumptions and failing to use a robust alternative.",
                  "Running many tests without adjusting for multiple comparisons."
                ],
                "quick_check": [
                  {
                    "q": "Which test compares means across three or more independent groups?",
                    "answer": "One-way ANOVA.",
                    "explanation": "ANOVA tests whether at least one group mean differs."
                  },
                  {
                    "q": "Which test compares before-and-after measurements on the same units?",
                    "answer": "A paired t-test.",
                    "explanation": "The paired design accounts for correlation within each unit."
                  },
                  {
                    "q": "Which test checks independence between two categorical variables?",
                    "answer": "A chi-square test of independence.",
                    "explanation": "Chi-square compares observed and expected frequencies in a contingency table."
                  }
                ],
                "recap": [
                  "Choose the test from the question, response type, groups, and pairing.",
                  "Check assumptions and use robust alternatives when needed.",
                  "Interpret effect size and practical meaning, not just the p-value."
                ]
              }
            },
            {
              "id": "B1.6",
              "order": 6,
              "title": "t-Tests",
              "objective": "Run one-sample, two-sample, and paired t-tests.",
              "content": {
                "why": "t-tests are the workhorses for comparing continuous means, but they are easy to misuse. The design, pairing, and assumptions must match the question.",
                "what": "A one-sample t-test compares a mean with a target. A two-sample t-test compares means from two independent groups. A paired t-test compares two measurements on the same unit and removes unit-to-unit variation. The test statistic is the difference divided by its standard error, and the result is a t value, p-value, and confidence interval. Use Welch's version when variances differ. Report an effect size such as Cohen's d, not only significance.",
                "how": [
                  "State the comparison and whether the groups are independent or paired.",
                  "Plot the data and check for outliers.",
                  "Check approximate normality and, for independent groups, equal variance.",
                  "Select the one-sample, two-sample, Welch, or paired test.",
                  "Run the test and review the confidence interval and effect size.",
                  "Interpret the result in process and practical terms."
                ],
                "where": "Use t-tests for supplier comparisons, before-and-after training, process versus target, and paired measurements. Example: measure the same 12 production lines before and after a change and use a paired t-test. Compare two independent suppliers with a two-sample or Welch test. Compare one line's mean against a target with a one-sample test.",
                "when_not": "Do not use a t-test for three or more groups; use ANOVA. Do not use it for ordinal outcomes, heavily dependent data, or severe outliers without a robust alternative. Do not treat paired observations as independent.",
                "common_mistakes": [
                  "Ignoring pairing and using an independent-groups test.",
                  "Running several t-tests instead of ANOVA for multiple groups.",
                  "Reporting a p-value without the size of the difference."
                ],
                "quick_check": [
                  {
                    "q": "Which t-test compares the same units before and after a change?",
                    "answer": "The paired t-test.",
                    "explanation": "Pairing accounts for correlation between measurements on the same unit."
                  },
                  {
                    "q": "When should you use Welch's t-test?",
                    "answer": "When two independent groups have unequal variances.",
                    "explanation": "Welch's test does not assume equal population variances."
                  },
                  {
                    "q": "Why report an effect size with a t-test?",
                    "answer": "It shows whether the difference is practically meaningful.",
                    "explanation": "A small p-value can accompany a trivial difference in large samples."
                  }
                ],
                "recap": [
                  "Match the t-test to the design: one sample, independent groups, or paired.",
                  "Check assumptions and use Welch's test when variances differ.",
                  "Report the confidence interval and effect size, not only the p-value."
                ]
              }
            },
            {
              "id": "B1.7",
              "order": 7,
              "title": "ANOVA",
              "objective": "Run one-way and two-way ANOVA and interpret interactions.",
              "content": {
                "why": "ANOVA compares three or more group means while controlling the false-positive rate. It also shows whether factors interact, which separate t-tests would miss.",
                "what": "One-way ANOVA tests whether at least one group mean differs by comparing between-group variation with within-group variation using an F statistic. Two-way ANOVA tests two factors and their interaction. A significant result means at least one mean differs, so follow-up tests such as Tukey identify which groups differ. ANOVA assumes independent observations, approximately normal residuals, and equal variances. Report effect size, such as eta-squared, and inspect residual plots.",
                "how": [
                  "State the factors, groups, and null hypotheses.",
                  "Check the design, independence, and group sample sizes.",
                  "Plot the groups and inspect variability.",
                  "Fit the one-way or two-way model.",
                  "Review the F test, p-value, and interaction.",
                  "Run post-hoc comparisons if the factor is significant.",
                  "Check residual plots and report effect size."
                ],
                "where": "Use ANOVA to compare suppliers, machines, shifts, clinics, or regions. Example: compare mean cycle time across three suppliers. If the overall test is significant, Tukey comparisons show which suppliers differ. In a two-way study, test whether temperature and pressure affect yield and whether their interaction matters.",
                "when_not": "Do not use ordinary ANOVA with severe non-normality or unequal variances; use Welch ANOVA or Kruskal-Wallis. Do not use it for repeated measures on the same units without a repeated-measures model. Complex unbalanced designs may need regression or a general linear model.",
                "common_mistakes": [
                  "Running multiple t-tests instead of one ANOVA.",
                  "Ignoring a significant interaction.",
                  "Stopping at the p-value without post-hoc or effect-size analysis."
                ],
                "quick_check": [
                  {
                    "q": "What does a significant one-way ANOVA tell you?",
                    "answer": "At least one group mean differs, but not which one.",
                    "explanation": "Post-hoc comparisons identify the specific differences."
                  },
                  {
                    "q": "What is an interaction in two-way ANOVA?",
                    "answer": "The effect of one factor depends on the level of the other factor.",
                    "explanation": "An interaction means the factors do not act independently."
                  },
                  {
                    "q": "Which follow-up method controls error when comparing several group means?",
                    "answer": "Tukey's honestly significant difference test.",
                    "explanation": "Tukey adjusts for multiple pairwise comparisons."
                  }
                ],
                "recap": [
                  "ANOVA compares means across three or more groups or multiple factors.",
                  "A significant result requires follow-up to identify differing groups.",
                  "Check residuals and interpret interactions and effect sizes."
                ]
              }
            },
            {
              "id": "B1.8",
              "order": 8,
              "title": "Non-Parametric Tests",
              "objective": "Use Mann-Whitney, Kruskal-Wallis, and sign tests when assumptions fail.",
              "content": {
                "why": "Parametric tests can fail with ordinal data, small samples, or severe outliers. Non-parametric tests provide valid comparisons when their assumptions are more appropriate.",
                "what": "Non-parametric tests use ranks rather than raw means. Mann-Whitney compares two independent groups, Wilcoxon signed-rank compares paired data, Kruskal-Wallis compares three or more independent groups, and the sign test compares paired outcomes by direction. These tests are robust to outliers and non-normality, but they usually compare distributions or medians rather than means. They lose some power when normal-theory assumptions are actually valid.",
                "how": [
                  "Identify why the parametric assumption fails.",
                  "Determine whether the design is independent or paired and how many groups exist.",
                  "Choose the matching rank-based test.",
                  "State the hypothesis in terms of medians or distributions.",
                  "Run the test and review the p-value and effect size.",
                  "Plot the data and interpret the result in context."
                ],
                "where": "Use non-parametric tests for satisfaction scores, skewed wait times, small pilots, ordinal survey data, and subjective ratings. Example: compare patient satisfaction on a 1-5 scale across three clinics with Kruskal-Wallis. Compare skewed repair times from two depots with Mann-Whitney.",
                "when_not": "Do not use non-parametric tests automatically for every dataset. Some tests still assume similar distribution shapes when interpreting a location shift. Complex designs, covariates, and repeated measures may require a generalized model.",
                "common_mistakes": [
                  "Treating a non-parametric result as a comparison of means.",
                  "Ignoring distribution shape when interpreting the result.",
                  "Assuming a rank test rescues an inadequate sample size."
                ],
                "quick_check": [
                  {
                    "q": "Which test compares two independent groups without a normality assumption?",
                    "answer": "The Mann-Whitney test.",
                    "explanation": "It compares ranks rather than raw means."
                  },
                  {
                    "q": "Which test compares three or more independent groups non-parametrically?",
                    "answer": "The Kruskal-Wallis test.",
                    "explanation": "It is the rank-based alternative to one-way ANOVA."
                  },
                  {
                    "q": "Which test is suitable for paired ordinal data?",
                    "answer": "The Wilcoxon signed-rank test.",
                    "explanation": "It uses the ranks of paired differences."
                  }
                ],
                "recap": [
                  "Use rank-based tests when parametric assumptions are not credible.",
                  "Match the test to independent versus paired and the number of groups.",
                  "Interpret medians or distributions, not means."
                ]
              }
            },
            {
              "id": "B1.9",
              "order": 9,
              "title": "Chi-Square Tests",
              "objective": "Test independence and goodness of fit for categorical data.",
              "content": {
                "why": "Many improvement questions involve categories, such as defect type, pass or fail, or customer segment. Chi-square tests show whether category frequencies differ from expectation or are associated.",
                "what": "A chi-square goodness-of-fit test compares observed counts with expected counts from a hypothesized distribution. A chi-square test of independence checks whether two categorical variables are associated in a contingency table. The statistic sums squared observed-minus-expected differences divided by expected counts. Use Fisher's exact test for small 2x2 tables. Cramer's V summarizes association strength. McNemar's test is the correct choice for paired binary data.",
                "how": [
                  "Define the categories and build a frequency table.",
                  "State the hypotheses.",
                  "Check expected counts, usually at least five per cell.",
                  "Run the chi-square test or an exact alternative.",
                  "Inspect standardized residuals to locate unusual cells.",
                  "Report the p-value, effect size, and practical pattern."
                ],
                "where": "Use chi-square tests for defect types by shift, pass or fail by supplier, survey responses by region, and adherence by department. Example: test whether defect category is associated with production line. If the result is significant, residuals show which line and defect category drive the association.",
                "when_not": "Do not use chi-square independence for paired data; use McNemar. Do not rely on it when expected counts are very small without an exact test. Avoid treating ordinal categories as unordered if an ordinal method is available.",
                "common_mistakes": [
                  "Using a chi-square test on paired before-and-after data.",
                  "Ignoring small expected counts.",
                  "Claiming causation from an association."
                ],
                "quick_check": [
                  {
                    "q": "Which chi-square test checks whether two categorical variables are associated?",
                    "answer": "The test of independence.",
                    "explanation": "It compares observed and expected counts in a contingency table."
                  },
                  {
                    "q": "Which test is appropriate for paired binary outcomes?",
                    "answer": "McNemar's test.",
                    "explanation": "McNemar accounts for the pairing of before-and-after responses."
                  },
                  {
                    "q": "What should you check before trusting a chi-square test?",
                    "answer": "That expected counts are large enough, or use an exact test.",
                    "explanation": "Small expected counts make the chi-square approximation unreliable."
                  }
                ],
                "recap": [
                  "Chi-square tests compare categorical frequencies or test association.",
                  "Check expected counts and use exact tests when needed.",
                  "Use residuals and effect sizes to explain the pattern."
                ]
              }
            }
          ]
        },
        {
          "id": "black-2",
          "number": 2,
          "title": "Measurement Systems",
          "duration": "2 hours",
          "summary": "Extend MSA to pass/fail and categorical judgments, and understand calibration and uncertainty.",
          "lessons": [
            {
              "id": "B2.1",
              "order": 1,
              "title": "Attribute MSA",
              "objective": "Run attribute agreement analysis and interpret kappa.",
              "content": {
                "why": "Attribute inspection depends on human or gauge decisions. If appraisers disagree with themselves, each other, or the standard, defect data are unreliable and improvement conclusions may be wrong.",
                "what": "Attribute agreement analysis measures repeatability within appraisers, reproducibility between appraisers, and accuracy against a known standard. Kappa adjusts agreement for chance. Values above about 0.90 are excellent, 0.70 to 0.90 are acceptable for lower-risk decisions, and lower values signal a problem. Percent agreement alone can look good even when chance agreement is high. For ordinal ratings, use a weighted kappa or Kendall's coefficient.",
                "how": [
                  "Define the characteristic and decision rule.",
                  "Select 30 to 50 parts that span the full range, including borderline cases.",
                  "Use two or three appraisers and two or three trials.",
                  "Randomize and blind the samples and trials.",
                  "Include a known standard or expert rating.",
                  "Analyze within-appraiser, between-appraiser, and versus-standard agreement.",
                  "Retrain, clarify definitions, or improve the gauge, then repeat the study."
                ],
                "where": "Use attribute MSA for visual inspection, go/no-go gauges, defect classification, document review, and clinical diagnosis. Example: three inspectors assess 30 parts twice. Within-appraiser kappa is 0.95, but between-appraiser kappa is 0.55, pointing to inconsistent definitions rather than poor individual repeatability.",
                "when_not": "Do not use attribute agreement analysis for continuous measurements; use a gage R&R study. Do not trust results from unrepresentative parts or a missing standard. Kappa can be affected by prevalence, so interpret it with the study design.",
                "common_mistakes": [
                  "Using too few or unrepresentative samples.",
                  "Reporting percent agreement without kappa.",
                  "Failing to blind appraisers or randomize trials."
                ],
                "quick_check": [
                  {
                    "q": "What does within-appraiser agreement measure?",
                    "answer": "Repeatability, or whether an appraiser agrees with themselves across trials.",
                    "explanation": "The same person assesses the same parts more than once."
                  },
                  {
                    "q": "Why use kappa instead of percent agreement?",
                    "answer": "Kappa adjusts for agreement expected by chance.",
                    "explanation": "Percent agreement can overstate consistency."
                  },
                  {
                    "q": "What does between-appraiser disagreement suggest?",
                    "answer": "Inconsistent definitions, training, or measurement methods.",
                    "explanation": "Reproducibility problems usually require standardization."
                  }
                ],
                "recap": [
                  "Attribute MSA validates repeatability, reproducibility, and accuracy.",
                  "Use representative parts, blinding, randomization, and a standard.",
                  "Interpret kappa and investigate the source of disagreement."
                ]
              }
            },
            {
              "id": "B2.2",
              "order": 2,
              "title": "Measurement Uncertainty and Calibration",
              "objective": "Separate calibration, bias, linearity, and uncertainty.",
              "content": {
                "why": "A calibration sticker does not make a measurement exact. Every measurement has uncertainty, and decisions near a specification limit can be wrong unless that uncertainty is understood.",
                "what": "Calibration compares an instrument with a traceable standard and establishes bias and correction. Measurement uncertainty is the range likely to contain the true value. Sources include resolution, repeatability, reproducibility, bias, linearity, stability, environment, and the reference standard. Linearity describes how error changes across the range. A measurement uncertainty budget combines standard uncertainties in quadrature, and expanded uncertainty multiplies by a coverage factor, often two for about 95% confidence.",
                "how": [
                  "Define the measurement and the tolerance or decision rule.",
                  "List every meaningful uncertainty source.",
                  "Quantify each source with data or specifications.",
                  "Combine standard uncertainties and calculate expanded uncertainty.",
                  "Compare uncertainty with the tolerance and set a guardband if needed.",
                  "Calibrate on a risk-based schedule and monitor drift.",
                  "Document traceability and recheck after repair or environmental change."
                ],
                "where": "Use uncertainty analysis for calipers, scales, thermometers, pressure gauges, laboratory assays, and clinical devices. Example: a part tolerance is plus or minus 0.10 mm and measurement uncertainty is plus or minus 0.02 mm. Accept only parts within plus or minus 0.08 mm, or formally account for the risk of false acceptance.",
                "when_not": "Do not confuse calibration with a gage R&R study. Calibration addresses traceability and average bias, while gage R&R addresses variation. Do not treat a calibrated instrument as exact, and do not ignore uncertainty in pass or fail decisions.",
                "common_mistakes": [
                  "Equating calibration with perfect accuracy.",
                  "Ignoring linearity, drift, and environmental effects.",
                  "Making conformity decisions without a guardband."
                ],
                "quick_check": [
                  {
                    "q": "What does calibration establish?",
                    "answer": "Traceability to a standard and the instrument's bias or correction.",
                    "explanation": "Calibration links the instrument reading to a known reference."
                  },
                  {
                    "q": "How is expanded uncertainty calculated?",
                    "answer": "Multiply combined standard uncertainty by a coverage factor, often two.",
                    "explanation": "A factor of two gives roughly 95% coverage for a normal distribution."
                  },
                  {
                    "q": "Why use a guardband near specification limits?",
                    "answer": "To reduce the risk of accepting an out-of-specification part because of measurement error.",
                    "explanation": "The guardband keeps uncertain measurements away from the limit."
                  }
                ],
                "recap": [
                  "Calibration establishes traceability and bias, not zero uncertainty.",
                  "Build an uncertainty budget and calculate expanded uncertainty.",
                  "Use guardbands when measurement uncertainty is material to the decision."
                ]
              }
            }
          ]
        },
        {
          "id": "black-3",
          "number": 3,
          "title": "Regression and Modeling",
          "duration": "3 hours",
          "summary": "Model relationships with multiple predictors and binary outcomes, then check whether the model is trustworthy.",
          "lessons": [
            {
              "id": "B3.1",
              "order": 1,
              "title": "Multiple Regression",
              "objective": "Interpret coefficients, adjusted R-squared, and overall model tests.",
              "content": {
                "why": "Processes usually have several drivers. Multiple regression estimates the independent effect of each predictor while controlling for the others and supports prediction.",
                "what": "The model expresses a continuous response as an intercept plus a coefficient for each predictor plus error. A coefficient is the expected change in the response for a one-unit increase in that predictor, holding the others constant. The overall F test asks whether the model explains variation beyond chance, while individual t-tests assess coefficients. Adjusted R-squared penalizes unnecessary predictors. Check linearity, independence, normal residuals, equal variance, and multicollinearity.",
                "how": [
                  "Define the response and candidate predictors from process knowledge.",
                  "Plot relationships and screen for anomalies.",
                  "Fit the model and review the overall test and coefficients.",
                  "Check residual diagnostics and multicollinearity.",
                  "Refine the model without overfitting.",
                  "Validate with new or holdout data.",
                  "Interpret coefficients and intervals in practical units."
                ],
                "where": "Use multiple regression for cycle time versus staffing and demand, yield versus temperature and pressure, cost versus volume and product mix, or wait time versus staffing and arrivals. Example: a coefficient of negative 0.8 minutes per additional staff member means average wait falls by 0.8 minutes when demand is held constant.",
                "when_not": "Do not infer causation from observational data. Do not extrapolate beyond the observed range. Do not force a linear model when curvature or interactions are important, and do not include many correlated predictors without checking the model.",
                "common_mistakes": [
                  "Treating a high R-squared as proof of causation.",
                  "Ignoring residual diagnostics and validation.",
                  "Removing predictors based only on p-values."
                ],
                "quick_check": [
                  {
                    "q": "How is a regression coefficient interpreted?",
                    "answer": "The change in the response per one-unit change in that predictor, holding others constant.",
                    "explanation": "The coefficient is an adjusted effect."
                  },
                  {
                    "q": "Why use adjusted R-squared?",
                    "answer": "It penalizes predictors that do not improve the model enough.",
                    "explanation": "Ordinary R-squared always rises when predictors are added."
                  },
                  {
                    "q": "What does the overall F test tell you?",
                    "answer": "Whether the model as a whole explains a significant amount of variation.",
                    "explanation": "It does not show which individual predictors matter."
                  }
                ],
                "recap": [
                  "Multiple regression estimates adjusted effects and supports prediction.",
                  "Check assumptions, diagnostics, and validation.",
                  "Interpret coefficients in context, not as automatic causal effects."
                ]
              }
            },
            {
              "id": "B3.2",
              "order": 2,
              "title": "Logistic Regression",
              "objective": "Model yes/no outcomes with odds ratios.",
              "content": {
                "why": "Binary outcomes such as pass or fail, defect or no defect, and churn or stay cannot be modeled well with ordinary linear regression. Logistic regression models the probability of the event.",
                "what": "Logistic regression models the log-odds of an event as a linear function of predictors. A coefficient converts to an odds ratio by exponentiation. An odds ratio above one means higher odds of the event for a one-unit increase in the predictor, holding others constant; below one means lower odds. Predicted probabilities stay between zero and one. Assess model fit with deviance, AIC, calibration, and discrimination such as the ROC area.",
                "how": [
                  "Define the event and code it as one versus zero.",
                  "Select predictors using process knowledge.",
                  "Fit the model and review the overall test and coefficients.",
                  "Convert coefficients to odds ratios with confidence intervals.",
                  "Assess discrimination, calibration, and influential points.",
                  "Validate with holdout data and choose a decision threshold based on costs.",
                  "Communicate odds ratios carefully."
                ],
                "where": "Use logistic regression for defect probability by supplier or shift, pass or fail by training method, patient readmission, loan default, employee turnover, and customer churn. Example: an odds ratio of 1.8 per 10 degrees means 80% higher odds, not an 80% higher probability.",
                "when_not": "Do not use linear regression for a binary response. Do not present an odds ratio as a risk ratio when the event is common. Rare events or small samples may need penalized or exact methods, and perfect separation signals a design problem.",
                "common_mistakes": [
                  "Interpreting an odds ratio as a probability or risk.",
                  "Ignoring calibration and using only the ROC area.",
                  "Using a default 0.5 cutoff without considering decision costs."
                ],
                "quick_check": [
                  {
                    "q": "What does an odds ratio greater than one mean?",
                    "answer": "Higher odds of the event as the predictor increases.",
                    "explanation": "The exponentiated coefficient compares odds for a one-unit change."
                  },
                  {
                    "q": "What does logistic regression predict?",
                    "answer": "The probability of the binary event.",
                    "explanation": "The log-odds model is transformed into a probability between zero and one."
                  },
                  {
                    "q": "Why assess calibration as well as discrimination?",
                    "answer": "A model can rank cases well but still give inaccurate probabilities.",
                    "explanation": "Calibration checks whether predicted probabilities match observed rates."
                  }
                ],
                "recap": [
                  "Logistic regression models binary outcomes through log-odds.",
                  "Odds ratios describe relative odds, not probabilities.",
                  "Check calibration, discrimination, validation, and decision costs."
                ]
              }
            },
            {
              "id": "B3.3",
              "order": 3,
              "title": "Regression Diagnostics",
              "objective": "Check residuals, leverage, influence, and lack of fit.",
              "content": {
                "why": "A regression can have a high R-squared and still violate assumptions. Diagnostics show whether the model is trustworthy and where it fails.",
                "what": "Residuals are observed minus fitted values. A residuals-versus-fitted plot checks linearity and equal variance. A normal probability plot checks residual normality. Residuals versus order check independence, especially for time-ordered data. Leverage measures how unusual a predictor value is, while Cook's distance measures influence on the fitted model. A lack-of-fit test uses replicate observations to detect an inadequate model form.",
                "how": [
                  "Fit the model and examine summary statistics.",
                  "Plot residuals versus fitted values and versus order.",
                  "Check the normal probability plot.",
                  "Identify high-leverage and high-influence points.",
                  "Investigate patterns and confirm data quality before changing anything.",
                  "Add terms, transform variables, or use robust methods as appropriate.",
                  "Refit and validate the revised model."
                ],
                "where": "Use diagnostics for every regression, DOE analysis, and predictive model. Example: a funnel-shaped residual plot indicates unequal variance. A curved pattern suggests a missing quadratic term. One point with a large Cook's distance should be checked for a data error or a special cause.",
                "when_not": "Do not delete outliers automatically just to improve fit. Do not rely on diagnostics alone with very small samples. Time-series data need explicit autocorrelation checks and methods.",
                "common_mistakes": [
                  "Judging a model only by R-squared.",
                  "Ignoring residual patterns.",
                  "Confusing leverage with influence."
                ],
                "quick_check": [
                  {
                    "q": "What does a curved pattern in residuals versus fitted values suggest?",
                    "answer": "The model is missing curvature or a nonlinear term.",
                    "explanation": "Systematic residual patterns indicate lack of fit."
                  },
                  {
                    "q": "What does Cook's distance measure?",
                    "answer": "The influence of an observation on the fitted model.",
                    "explanation": "It combines leverage and residual size."
                  },
                  {
                    "q": "Why plot residuals against observation order?",
                    "answer": "To check for dependence or drift over time.",
                    "explanation": "Patterns by order suggest autocorrelation."
                  }
                ],
                "recap": [
                  "Diagnostics test the assumptions behind regression.",
                  "Investigate influential points before changing the model.",
                  "Use residual patterns to guide better model form."
                ]
              }
            },
            {
              "id": "B3.4",
              "order": 4,
              "title": "Multicollinearity and Model Building",
              "objective": "Detect correlated predictors and choose a parsimonious model.",
              "content": {
                "why": "Correlated predictors make coefficients unstable and hard to interpret. Careful model building produces a simpler model that is more likely to generalize.",
                "what": "Multicollinearity occurs when predictors are highly correlated. Variance inflation factors above five are concerning and above ten are severe. Symptoms include large standard errors, unstable coefficients, and unexpected signs. Remedies include removing or combining predictors, using process knowledge, centering interaction terms, ridge regression, or principal components. Model building balances explanation, prediction, parsimony, and validation.",
                "how": [
                  "Clarify whether the goal is explanation or prediction.",
                  "Screen predictors with plots and correlation checks.",
                  "Fit a candidate model and calculate VIFs.",
                  "Remove, combine, or transform correlated predictors with a rationale.",
                  "Compare models using adjusted or predicted R-squared, AIC, and validation.",
                  "Respect hierarchy when interactions are present.",
                  "Document the final model and its limitations."
                ],
                "where": "Use these methods with many process variables, survey data, financial indicators, and sensor data. Example: furnace zone temperatures are highly correlated. Keep one representative variable or create a composite rather than interpreting two unstable coefficients.",
                "when_not": "Do not use stepwise selection as a substitute for process thinking. Do not drop a variable only because its VIF is high. If the goal is pure prediction and the model is stable on new data, multicollinearity may be tolerable.",
                "common_mistakes": [
                  "Interpreting unstable coefficients as real effects.",
                  "Overfitting a complex model to training data.",
                  "Data dredging without validation."
                ],
                "quick_check": [
                  {
                    "q": "What VIF value often signals serious multicollinearity?",
                    "answer": "Above about ten.",
                    "explanation": "Values above five are concerning and above ten are severe."
                  },
                  {
                    "q": "What happens to coefficient standard errors under multicollinearity?",
                    "answer": "They increase, making estimates unstable.",
                    "explanation": "Correlated predictors make separate effects hard to estimate."
                  },
                  {
                    "q": "Why validate a built model on new data?",
                    "answer": "To check that it generalizes rather than overfits.",
                    "explanation": "Training fit alone can reward unnecessary complexity."
                  }
                ],
                "recap": [
                  "Multicollinearity inflates uncertainty and destabilizes coefficients.",
                  "Use VIFs, process knowledge, and parsimony to build models.",
                  "Validate the final model before trusting its predictions."
                ]
              }
            }
          ]
        },
        {
          "id": "black-4",
          "number": 4,
          "title": "Design of Experiments",
          "duration": "4 hours",
          "summary": "Design efficient experiments, screen many factors, optimize responses, and make designs robust to noise.",
          "lessons": [
            {
              "id": "B4.1",
              "order": 1,
              "title": "Full Factorial DOE",
              "objective": "Design and analyze a full factorial with main effects and interactions.",
              "content": {
                "why": "Changing one factor at a time misses interactions and wastes runs. A full factorial experiment reveals main effects and interactions in a structured, efficient way.",
                "what": "A full factorial design tests every combination of factor levels. With k factors at two levels, it requires two to the k runs. Main effects measure the average change in response when a factor moves from low to high. Interactions occur when the effect of one factor depends on the level of another. Center points detect curvature, and replication provides an independent estimate of error. Randomization protects against order effects.",
                "how": [
                  "Define the objective, response, factors, levels, and practical constraints.",
                  "Choose the factorial design and number of replicates.",
                  "Add center points if curvature is possible.",
                  "Randomize the run order and record every condition.",
                  "Run the experiment and verify response measurement quality.",
                  "Analyze with ANOVA, effect plots, and interaction plots.",
                  "Run confirmation trials at the selected settings."
                ],
                "where": "Use full factorial DOE for yield versus temperature and time, software performance versus configuration settings, waiting time versus staffing and scheduling rules, and formulation studies. Example: three factors at two levels require eight runs, plus center points to check for curvature.",
                "when_not": "Do not use a full factorial when there are too many factors for the budget; screen first. Do not use it for a nonlinear optimum without adding response-surface points. Hard-to-change factors may require a split-plot design.",
                "common_mistakes": [
                  "Changing one factor at a time and missing interactions.",
                  "Failing to randomize or replicate.",
                  "Choosing factor ranges too narrow to reveal effects."
                ],
                "quick_check": [
                  {
                    "q": "How many runs does a two-level full factorial with four factors require before replication?",
                    "answer": "Sixteen runs.",
                    "explanation": "Two to the fourth power equals sixteen."
                  },
                  {
                    "q": "What do center points detect?",
                    "answer": "Curvature in the response surface.",
                    "explanation": "A difference between the center mean and the factorial mean suggests curvature."
                  },
                  {
                    "q": "Why randomize run order?",
                    "answer": "To protect against time trends and unmeasured nuisance effects.",
                    "explanation": "Randomization prevents order from being confounded with factors."
                  }
                ],
                "recap": [
                  "Full factorials estimate main effects and interactions efficiently.",
                  "Use replication, center points, and randomization.",
                  "Confirm the selected settings with a follow-up run."
                ]
              }
            },
            {
              "id": "B4.2",
              "order": 2,
              "title": "Fractional Factorial DOE",
              "objective": "Screen many factors with resolution III, IV, and V designs.",
              "content": {
                "why": "Full factorials grow exponentially, so screening many factors requires a deliberate fraction. Fractional factorials identify the vital few factors before optimization.",
                "what": "A fractional factorial uses a selected fraction of the full design. Resolution III designs alias main effects with two-factor interactions. Resolution IV designs clear main effects but alias two-factor interactions with each other. Resolution V designs clear main effects and two-factor interactions. Aliasing means effects cannot be separated without additional runs. A foldover can de-alias key effects, and Plackett-Burman designs are useful for rough screening.",
                "how": [
                  "List the factors and plausible interactions.",
                  "Choose a resolution based on the risk of aliasing.",
                  "Create the fractional design and inspect the alias structure.",
                  "Randomize and run the experiment.",
                  "Analyze effects and identify the vital few.",
                  "Use follow-up runs or a foldover to resolve ambiguity.",
                  "Move promising factors into a higher-resolution or optimization design."
                ],
                "where": "Use fractional factorials to screen six to twelve factors in process development, simulation studies, and early manufacturing trials. Example: screen eight factors in 16 runs at resolution IV, then study the important factors with a full factorial or response surface.",
                "when_not": "Do not use resolution III when interactions are likely and important. Do not interpret aliased effects as if they were independent. Screening designs are not optimization designs.",
                "common_mistakes": [
                  "Ignoring the alias structure.",
                  "Choosing too low a resolution for the risk.",
                  "Stopping after screening without confirmation."
                ],
                "quick_check": [
                  {
                    "q": "What does resolution IV mean?",
                    "answer": "Main effects are clear, but two-factor interactions are aliased with each other.",
                    "explanation": "Resolution IV protects main effects but not all interactions."
                  },
                  {
                    "q": "What is aliasing?",
                    "answer": "Two or more effects that cannot be estimated separately in a design.",
                    "explanation": "The design's fraction creates confounding among effects."
                  },
                  {
                    "q": "Why use a foldover?",
                    "answer": "To de-alias important effects by adding complementary runs.",
                    "explanation": "A foldover separates effects that were confounded."
                  }
                ],
                "recap": [
                  "Fractional factorials screen many factors with fewer runs.",
                  "Resolution and alias structure determine what can be interpreted.",
                  "Follow screening with confirmation or optimization."
                ]
              }
            },
            {
              "id": "B4.3",
              "order": 3,
              "title": "Blocking and Randomization",
              "objective": "Protect experiments from nuisance variables.",
              "content": {
                "why": "Nuisance variables such as shift, batch, day, or operator can look like treatment effects. Randomization and blocking protect the experiment from these hidden influences.",
                "what": "Randomization assigns run order by chance so unmeasured trends do not align with factors. Blocking groups experimental units that are similar, such as runs from one day or one batch. A randomized complete block design runs every treatment once per block. The analysis includes a block term, removing block-to-block variation from the error. When factors are hard to change, a split-plot design may be necessary even though it restricts randomization.",
                "how": [
                  "Identify known nuisance variables and practical constraints.",
                  "Decide whether to block or use a split-plot structure.",
                  "Randomize treatment order within each block.",
                  "Run the experiment and record block membership.",
                  "Include blocks in the statistical model.",
                  "Check residuals and confirm that blocks behaved as expected.",
                  "Interpret treatment effects after accounting for blocks."
                ],
                "where": "Use blocking for multiple shifts, machines, batches, trays, operators, days, or locations. Example: run eight treatments across two days. Block by day, randomize the eight treatments within each day, and include day in the model.",
                "when_not": "Do not block on a variable that is confounded with a factor. Do not create so many blocks that error degrees of freedom become too small. Do not analyze a restricted design as if it were completely randomized.",
                "common_mistakes": [
                  "Skipping randomization because the run order seems convenient.",
                  "Ignoring known blocks in the analysis.",
                  "Confounding a block variable with a treatment factor."
                ],
                "quick_check": [
                  {
                    "q": "What is the purpose of randomization?",
                    "answer": "To prevent unmeasured trends from being confounded with treatments.",
                    "explanation": "Random order spreads nuisance effects across treatments."
                  },
                  {
                    "q": "What is a randomized complete block design?",
                    "answer": "A design in which every treatment appears once in each block.",
                    "explanation": "Blocks are homogeneous groups, and treatments are randomized within them."
                  },
                  {
                    "q": "Why include a block term in the model?",
                    "answer": "To remove block-to-block variation from the error estimate.",
                    "explanation": "This improves precision for treatment comparisons."
                  }
                ],
                "recap": [
                  "Randomize to protect against unknown order effects.",
                  "Block on known nuisance variables to improve precision.",
                  "Analyze the design you actually ran."
                ]
              }
            },
            {
              "id": "B4.4",
              "order": 4,
              "title": "Response Surface Methods",
              "objective": "Find optimum settings with central composite or Box-Behnken designs.",
              "content": {
                "why": "Screening finds important factors, but the best settings often lie on a curved response surface. Response surface methods model curvature and locate an optimum.",
                "what": "Response surface methodology fits a second-order model with linear, interaction, and squared terms. Central composite designs combine factorial or fractional points with axial points and center points. Box-Behnken designs use three levels and avoid extreme corner combinations. Contour and surface plots show the shape of the response. Optimization finds settings that meet a target or maximize or minimize the response while respecting constraints.",
                "how": [
                  "Confirm the important factors from screening.",
                  "Define the response, constraints, and acceptable region.",
                  "Choose a central composite or Box-Behnken design.",
                  "Randomize and run the experiment.",
                  "Fit the quadratic model and check lack of fit.",
                  "Use contour plots and an optimizer to select settings.",
                  "Run confirmation trials and verify robustness."
                ],
                "where": "Use response surface methods for yield versus temperature and time, formulation optimization, cycle time versus settings, and performance tuning. Example: after screening temperature, pressure, and catalyst, use a central composite design to find the combination that maximizes yield.",
                "when_not": "Do not use response surface methods before screening many factors. Do not extrapolate outside the experimental region. Do not optimize a mean without considering variation and constraints.",
                "common_mistakes": [
                  "Fitting a quadratic model without enough design points.",
                  "Extrapolating beyond the studied region.",
                  "Skipping confirmation runs."
                ],
                "quick_check": [
                  {
                    "q": "What terms distinguish a response surface model from a first-order model?",
                    "answer": "Squared terms and interactions that capture curvature.",
                    "explanation": "Second-order terms allow an optimum inside the design space."
                  },
                  {
                    "q": "What is a central composite design?",
                    "answer": "A factorial or fractional design augmented with axial and center points.",
                    "explanation": "The added points support estimation of quadratic terms."
                  },
                  {
                    "q": "Why run confirmation trials?",
                    "answer": "To verify that predicted optimum settings perform as expected.",
                    "explanation": "Models are approximations and must be checked in practice."
                  }
                ],
                "recap": [
                  "Response surface methods model curvature and optimize settings.",
                  "Use central composite or Box-Behnken designs with enough points.",
                  "Confirm predicted settings and stay inside the studied region."
                ]
              }
            },
            {
              "id": "B4.5",
              "order": 5,
              "title": "Robust Design and Taguchi",
              "objective": "Reduce sensitivity to noise using control and noise factors.",
              "content": {
                "why": "A process that performs well only under ideal conditions is fragile. Robust design finds settings that keep performance stable despite unavoidable noise.",
                "what": "Robust design separates control factors, which the team can set, from noise factors, which are hard or expensive to control. Taguchi methods use orthogonal arrays and signal-to-noise ratios for larger-is-better, smaller-is-better, or nominal-is-best responses. Inner and outer arrays combine control and noise conditions. The quality loss function expresses the cost of deviation from target. Modern robust optimization models both mean and variance.",
                "how": [
                  "Define the ideal response and the cost of deviation.",
                  "Identify control factors and important noise factors.",
                  "Choose an experimental array and noise strategy.",
                  "Run the experiment across noise conditions.",
                  "Analyze mean response and signal-to-noise ratio.",
                  "Select settings with strong performance and low sensitivity.",
                  "Confirm robustness under realistic noise."
                ],
                "where": "Use robust design for manufacturing tolerances, material variation, environmental conditions, supplier differences, and customer use. Example: choose a recipe that maintains taste and texture despite normal oven-temperature variation.",
                "when_not": "Do not use signal-to-noise ratios mechanically without understanding the response. Do not ignore interactions or treat noise factors as control factors. Robust design complements, but does not replace, variation reduction and process control.",
                "common_mistakes": [
                  "Optimizing only the mean and ignoring variation.",
                  "Confusing noise factors with control factors.",
                  "Failing to confirm performance under noise."
                ],
                "quick_check": [
                  {
                    "q": "What is a noise factor?",
                    "answer": "A variable that affects the response but is difficult or expensive to control.",
                    "explanation": "Robust design reduces sensitivity to such factors."
                  },
                  {
                    "q": "What does a signal-to-noise ratio summarize?",
                    "answer": "Performance relative to variation for a chosen quality characteristic.",
                    "explanation": "Different formulas apply to larger-is-better, smaller-is-better, and nominal-is-best."
                  },
                  {
                    "q": "What is the goal of robust design?",
                    "answer": "To achieve stable performance across noise conditions.",
                    "explanation": "The best settings are insensitive to unavoidable variation."
                  }
                ],
                "recap": [
                  "Robust design reduces sensitivity to noise factors.",
                  "Use control and noise factors deliberately.",
                  "Confirm that selected settings perform under realistic variation."
                ]
              }
            }
          ]
        },
        {
          "id": "black-5",
          "number": 5,
          "title": "Advanced SPC and Capability",
          "duration": "2.5 hours",
          "summary": "Monitor complex processes with advanced charts and handle capability when data are not normal or runs are short.",
          "lessons": [
            {
              "id": "B5.1",
              "order": 1,
              "title": "Advanced SPC",
              "objective": "Use CUSUM, EWMA, and multivariate charts appropriately.",
              "content": {
                "why": "Traditional Shewhart charts detect large shifts well but are slow for small, sustained changes. Advanced charts improve sensitivity for low-defect, high-capability, or multivariate processes.",
                "what": "CUSUM charts accumulate deviations from a target and detect small persistent shifts. EWMA charts use a weighted average that gives recent observations more influence and can be tuned for small shifts. Multivariate charts such as Hotelling's T-squared and MEWMA monitor several correlated characteristics together. Control limits are based on the baseline process, and average run length describes how quickly a chart signals. These charts generally assume independent observations.",
                "how": [
                  "Define the characteristic, target, and rational subgroup.",
                  "Establish a stable Phase I baseline.",
                  "Check distribution and autocorrelation.",
                  "Select a chart based on shift size, data rate, and dimensions.",
                  "Set chart parameters and limits.",
                  "Monitor Phase II data and investigate signals promptly.",
                  "Update limits only after a verified permanent process change."
                ],
                "where": "Use advanced SPC in semiconductor, chemical, pharmaceutical, IT latency, call-center, and healthcare processes. Example: an EWMA chart with a smoothing constant of 0.2 detects a one-sigma shift faster than a Shewhart chart. A CUSUM with reference value 0.5 and decision interval 5 is tuned for small shifts.",
                "when_not": "Do not apply control limits before the process is stable. Do not use standard limits on strongly autocorrelated data without adjustment. Multivariate charts need an adequate baseline and careful interpretation of signals.",
                "common_mistakes": [
                  "Using only a Shewhart chart for small sustained shifts.",
                  "Ignoring autocorrelation.",
                  "Treating specification limits as control limits."
                ],
                "quick_check": [
                  {
                    "q": "Which chart accumulates deviations from target to detect small shifts?",
                    "answer": "The CUSUM chart.",
                    "explanation": "It sums deviations over time and signals persistent drift."
                  },
                  {
                    "q": "What does the EWMA smoothing constant control?",
                    "answer": "How much weight recent observations receive.",
                    "explanation": "Smaller values emphasize history and detect smaller shifts."
                  },
                  {
                    "q": "When are multivariate charts useful?",
                    "answer": "When several correlated characteristics must be monitored together.",
                    "explanation": "They detect combined shifts that separate charts may miss."
                  }
                ],
                "recap": [
                  "Advanced charts target small shifts, drift, or multiple characteristics.",
                  "Establish a stable baseline and check independence.",
                  "Investigate signals and update limits only after real change."
                ]
              }
            },
            {
              "id": "B5.2",
              "order": 2,
              "title": "Non-Normal Capability",
              "objective": "Transform data or fit a distribution before calculating capability.",
              "content": {
                "why": "Cp and Cpk assume a stable, normal process. Applying them to skewed, bounded, or count data can badly misstate defect rates and improvement priorities.",
                "what": "Non-normal capability starts with a stability check and a distribution check. Options include transforming the data, such as with a Box-Cox, log, or square-root transformation, or fitting a suitable distribution such as lognormal, Weibull, or gamma. Capability is then calculated from the fitted model and expressed as expected out-of-specification parts per million. Report the model and validate it, because a poor fit produces misleading capability.",
                "how": [
                  "Confirm the process is stable.",
                  "Plot the data and test normality.",
                  "Choose a transformation or fitted distribution based on the data and process.",
                  "Check goodness of fit.",
                  "Calculate expected out-of-specification rate and capability.",
                  "Compare results with the specification and monitor over time.",
                  "Translate the result back into original units for communication."
                ],
                "where": "Use non-normal capability for cycle times, wait times, concentrations, reliability life, defect counts, and particle counts. Example: patient wait time is strongly right-skewed. Fit a lognormal distribution and report the expected percentage beyond the service-level target rather than a normal Cpk.",
                "when_not": "Do not calculate capability on an unstable process. Do not force a normal model or use a transformation without checking the fit. Do not confuse control limits with specification limits.",
                "common_mistakes": [
                  "Reporting normal Cpk for skewed data.",
                  "Transforming data without validating the model.",
                  "Ignoring stability before calculating capability."
                ],
                "quick_check": [
                  {
                    "q": "Why can normal Cpk be misleading for skewed data?",
                    "answer": "It estimates tail probabilities using a symmetric distribution.",
                    "explanation": "The actual tail may be much larger or smaller than the normal estimate."
                  },
                  {
                    "q": "What should you check before a capability calculation?",
                    "answer": "Process stability and the distribution fit.",
                    "explanation": "Capability is meaningful only for a stable, adequately modeled process."
                  },
                  {
                    "q": "What does an expected PPM value express?",
                    "answer": "The predicted number of out-of-specification units per million.",
                    "explanation": "It translates capability into a defect rate."
                  }
                ],
                "recap": [
                  "Capability requires stability and a suitable distribution.",
                  "Transform or fit a non-normal model and validate it.",
                  "Report expected out-of-specification rates in practical terms."
                ]
              }
            },
            {
              "id": "B5.3",
              "order": 3,
              "title": "Short-Run SPC",
              "objective": "Monitor small batches with standardized or target charts.",
              "content": {
                "why": "Traditional control charts need a substantial baseline, which short runs and high-mix production do not provide. Short-run SPC makes monitoring possible with limited data.",
                "what": "Short-run SPC standardizes observations relative to each part or product's target and short-term variation. A standardized chart plots z-like values so different parts can share a chart. Target or deviation-from-nominal charts plot the difference from target. Group charts combine similar parts into a family. Limits may be based on short baselines or exact small-sample methods. The approach must not pool unlike processes.",
                "how": [
                  "Define part families with similar processes and variation.",
                  "Establish a target and a short baseline for each part.",
                  "Standardize observations using the part mean and standard deviation.",
                  "Choose a standardized, target, or group chart.",
                  "Set limits and monitor the standardized values.",
                  "Investigate signals and separate setup changes from process shifts.",
                  "Update baselines when the process changes permanently."
                ],
                "where": "Use short-run SPC in job shops, high-mix low-volume manufacturing, custom products, batch pharmaceutical operations, and service request processes. Example: five custom parts with ten runs each can be standardized within part and plotted on one chart.",
                "when_not": "Do not pool products with fundamentally different processes. Do not use standard X-bar and R charts with too few subgroups. Do not recalibrate limits simply to hide a shift.",
                "common_mistakes": [
                  "Using an inadequate baseline.",
                  "Combining dissimilar products into one group.",
                  "Treating specification limits as control limits."
                ],
                "quick_check": [
                  {
                    "q": "What is the key idea behind a standardized short-run chart?",
                    "answer": "Transform each observation relative to its part-specific target and variation.",
                    "explanation": "Standardized values can be plotted together across short runs."
                  },
                  {
                    "q": "What is a target chart?",
                    "answer": "A chart of deviations from a nominal target.",
                    "explanation": "It focuses on how far each result is from the intended value."
                  },
                  {
                    "q": "Why must part families be similar?",
                    "answer": "Pooling unlike processes creates misleading variation and limits.",
                    "explanation": "The chart assumes a common underlying variation structure."
                  }
                ],
                "recap": [
                  "Short-run SPC standardizes or targets data to handle limited baselines.",
                  "Group only similar products and processes.",
                  "Distinguish setup changes from genuine process shifts."
                ]
              }
            }
          ]
        },
        {
          "id": "black-6",
          "number": 6,
          "title": "Lean and DFSS",
          "duration": "4 hours",
          "summary": "Integrate Lean flow tools with Six Sigma and design new processes right the first time with DMADV, QFD, and Kano.",
          "lessons": [
            {
              "id": "B6.1",
              "order": 1,
              "title": "Lean Six Sigma Integration",
              "objective": "Combine waste reduction and variation reduction in one strategy.",
              "content": {
                "why": "Lean and Six Sigma solve different parts of the same problem. Lean removes waste and improves flow, while Six Sigma reduces variation and defects. Integrating them avoids speed without quality or statistics without flow.",
                "what": "Lean focuses on value, the value stream, flow, pull, and perfection. It attacks the eight wastes: transportation, inventory, motion, waiting, overproduction, overprocessing, defects, and unused talent. Six Sigma uses DMAIC and statistical methods to reduce variation. An integrated strategy uses lean to expose waste and stabilize flow, then Six Sigma to solve stubborn variation, and applies both to project selection and sustainment.",
                "how": [
                  "Map the value stream and identify waste and variation.",
                  "Quantify the business impact of both.",
                  "Prioritize projects that improve flow and quality.",
                  "Apply lean tools for obvious waste and Six Sigma for complex variation.",
                  "Measure lead time, defect rate, and capability together.",
                  "Involve the people who do the work.",
                  "Standardize and monitor the improved process."
                ],
                "where": "Use integrated Lean Six Sigma in healthcare patient flow, manufacturing lead time, banking approvals, order fulfillment, and service operations. Example: an emergency department uses value stream mapping to reduce waiting and SPC to reduce variation in laboratory turnaround time.",
                "when_not": "Do not use complex statistics to fix obvious waste. Do not run lean events that ignore defect variation. Do not deploy tools without a clearly defined problem and customer need.",
                "common_mistakes": [
                  "Treating Lean and Six Sigma as competing programs.",
                  "Optimizing local steps instead of the whole flow.",
                  "Running events without sustainment or measurement."
                ],
                "quick_check": [
                  {
                    "q": "What is the primary focus of Lean?",
                    "answer": "Removing waste and improving flow.",
                    "explanation": "Lean increases speed and reduces non-value-added work."
                  },
                  {
                    "q": "What is the primary focus of Six Sigma?",
                    "answer": "Reducing variation and defects using data and statistics.",
                    "explanation": "Six Sigma improves consistency and capability."
                  },
                  {
                    "q": "Why integrate Lean and Six Sigma?",
                    "answer": "To improve both speed and quality without trading one for the other.",
                    "explanation": "Flow exposes variation, and variation reduction sustains flow."
                  }
                ],
                "recap": [
                  "Lean improves flow; Six Sigma improves consistency.",
                  "Integrate the tools around the customer and the value stream.",
                  "Measure both lead time and quality, then sustain the gain."
                ]
              }
            },
            {
              "id": "B6.2",
              "order": 2,
              "title": "Value Stream Mapping",
              "objective": "Map material and information flow and calculate lead time.",
              "content": {
                "why": "Local improvements can fail if the whole flow remains slow. Value stream mapping shows the end-to-end process, including waiting and information delays that step-level analysis misses.",
                "what": "A value stream map displays the customer, supplier, process boxes, inventory, information flow, and a lead-time ladder. It separates value-added from non-value-added time. Takt time sets the pace of customer demand. Process metrics include cycle time, uptime, percent complete and accurate, and batch size. The current-state map exposes waste, and the future-state map defines a better flow with owners and actions.",
                "how": [
                  "Select a product or service family with similar flow.",
                  "Walk the actual process and record information and material flow.",
                  "Draw the current-state map with inventory and waiting times.",
                  "Collect cycle time, uptime, quality, and demand data.",
                  "Calculate lead time, takt time, and value-added ratio.",
                  "Design the future state and mark kaizen opportunities.",
                  "Create an implementation plan with owners and dates."
                ],
                "where": "Use value stream mapping in manufacturing, healthcare pathways, loan processing, software delivery, and order fulfillment. Example: a current-state map shows 12 days of lead time but only 45 minutes of value-added work, revealing waiting as the dominant opportunity.",
                "when_not": "Do not map every product family at once. Do not create a map that is never used. Do not ignore information flow, and do not map from a conference room without observing the work.",
                "common_mistakes": [
                  "Mapping without gemba observation or real data.",
                  "Confusing process time with lead time.",
                  "Creating a future-state map without owners or a plan."
                ],
                "quick_check": [
                  {
                    "q": "What does lead time include?",
                    "answer": "All elapsed time from customer request to delivery, including waiting.",
                    "explanation": "It is broader than the time work is actively performed."
                  },
                  {
                    "q": "What is takt time?",
                    "answer": "Available work time divided by customer demand.",
                    "explanation": "It sets the pace required to meet demand."
                  },
                  {
                    "q": "Why map information flow as well as material flow?",
                    "answer": "Delays and errors in information often cause waiting and rework.",
                    "explanation": "A complete map shows how work is triggered and coordinated."
                  }
                ],
                "recap": [
                  "Value stream maps reveal end-to-end flow and waiting.",
                  "Use real data and gemba observation.",
                  "Turn the future-state map into owned actions."
                ]
              }
            },
            {
              "id": "B6.3",
              "order": 3,
              "title": "TPM",
              "objective": "Improve equipment reliability with autonomous and planned maintenance.",
              "content": {
                "why": "Equipment failures disrupt flow, quality, and safety while forcing costly buffers. Total Productive Maintenance builds reliability into daily work instead of waiting for breakdowns.",
                "what": "TPM aims to maximize equipment effectiveness through autonomous maintenance, planned and preventive maintenance, predictive techniques, quality maintenance, training, safety, and early equipment management. Overall Equipment Effectiveness combines availability, performance, and quality. The six big losses are breakdowns, setup and adjustment, idling and minor stops, reduced speed, defects and rework, and startup losses. Operators perform basic care such as cleaning, inspection, lubrication, and tightening.",
                "how": [
                  "Measure baseline OEE and classify losses.",
                  "Restore basic equipment condition and address major defects.",
                  "Train operators for autonomous maintenance.",
                  "Build a planned and predictive maintenance schedule.",
                  "Improve setup, spares, and maintenance planning.",
                  "Track OEE and losses with the team.",
                  "Standardize and audit the maintenance system."
                ],
                "where": "Use TPM in manufacturing, hospital equipment, fleet operations, IT infrastructure, and facilities. Example: OEE is 80% availability times 85% performance times 95% quality, or about 64.6%. The loss analysis shows whether breakdowns, speed, or defects deserve priority.",
                "when_not": "Do not turn TPM into a cleaning campaign or blame operators for equipment failures. Do not launch it without leadership time, training, and maintenance support. Do not use OEE as a standalone scorecard without context.",
                "common_mistakes": [
                  "Cleaning once instead of sustaining basic condition.",
                  "Tracking OEE without analyzing the six losses.",
                  "Running equipment to failure to avoid maintenance downtime."
                ],
                "quick_check": [
                  {
                    "q": "What three components make up OEE?",
                    "answer": "Availability, performance, and quality.",
                    "explanation": "Multiplying them shows effective equipment output."
                  },
                  {
                    "q": "What is autonomous maintenance?",
                    "answer": "Operator ownership of basic cleaning, inspection, and minor maintenance.",
                    "explanation": "Operators detect and prevent deterioration early."
                  },
                  {
                    "q": "What is a key goal of TPM?",
                    "answer": "Reliable equipment with minimal unplanned downtime.",
                    "explanation": "TPM shifts effort from reactive repair to prevention."
                  }
                ],
                "recap": [
                  "TPM improves equipment reliability and effectiveness.",
                  "Use OEE and loss analysis to target improvement.",
                  "Combine operator care with planned and predictive maintenance."
                ]
              }
            },
            {
              "id": "B6.4",
              "order": 4,
              "title": "SMED",
              "objective": "Reduce changeover time by separating internal and external work.",
              "content": {
                "why": "Long changeovers force large batches, excess inventory, and lost capacity. SMED reduces changeover time so the process can respond flexibly to demand.",
                "what": "Single-Minute Exchange of Die separates internal changeover work, which requires the machine to be stopped, from external work, which can be done while it runs. The method converts internal work to external, streamlines both, and standardizes the new procedure. Changeover time is measured from the last good part before the change to the first good part after it. The ideal is single-digit minutes, but the practical target depends on risk and volume.",
                "how": [
                  "Observe and video the current changeover.",
                  "Separate internal and external activities.",
                  "Time each activity and identify waste.",
                  "Convert as much internal work as possible to external.",
                  "Streamline clamps, tools, staging, and parallel work.",
                  "Standardize roles and use a checklist.",
                  "Pilot, measure, and sustain the new changeover."
                ],
                "where": "Use SMED in manufacturing, operating-room turnover, laboratory setup, software deployment, printing, and service preparation. Example: reduce a 90-minute changeover to 25 minutes by pre-staging tools externally and replacing bolts with quick clamps.",
                "when_not": "Do not remove safety or quality checks to save time. Do not assume every current step is necessary. Do not treat SMED as a one-time event without standard work and sustainment.",
                "common_mistakes": [
                  "Starting with new tools instead of separating internal and external work.",
                  "Measuring only machine downtime, not first good part to first good part.",
                  "Failing to standardize and train the new method."
                ],
                "quick_check": [
                  {
                    "q": "What is internal changeover work?",
                    "answer": "Work that can only be done while the machine is stopped.",
                    "explanation": "The goal is to convert internal work to external where possible."
                  },
                  {
                    "q": "How is changeover time measured?",
                    "answer": "From the last good part before the change to the first good part after it.",
                    "explanation": "This captures the full lost production time."
                  },
                  {
                    "q": "What does the single-minute target mean?",
                    "answer": "A changeover measured in single-digit minutes.",
                    "explanation": "It is an aspirational goal, not a universal requirement."
                  }
                ],
                "recap": [
                  "SMED separates internal and external changeover work.",
                  "Convert internal work to external and streamline the rest.",
                  "Standardize, measure, and sustain the improvement."
                ]
              }
            },
            {
              "id": "B6.5",
              "order": 5,
              "title": "Standard Work",
              "objective": "Document the current best method with takt, sequence, and inventory.",
              "content": {
                "why": "Without a standard, every person and shift performs work differently. Standard work reduces variation, supports training and safety, and creates a baseline for improvement.",
                "what": "Standard work documents the current best method, including takt time, work sequence, standard inventory, cycle time, and key quality and safety points. It is created with the people who do the work and is owned by them. It is not a permanent rule; it is the current best way and must be updated when the process changes. Common formats include standard work combination tables, job breakdown sheets, and visual work instructions.",
                "how": [
                  "Observe the actual work and identify the customer requirement.",
                  "Calculate takt time from demand and available time.",
                  "Break the work into steps and measure each step.",
                  "Design a balanced sequence with standard inventory.",
                  "Document quality, safety, and equipment points.",
                  "Train operators and verify understanding.",
                  "Audit, improve, and update the standard."
                ],
                "where": "Use standard work in assembly, healthcare protocols, laboratory methods, service scripts, logistics, and administrative processes. Example: takt time is 60 seconds and the designed cycle time is 55 seconds, leaving capacity for variation and recovery.",
                "when_not": "Do not write standards without the operators or use them to micromanage. Do not standardize an unstable process before reducing major variation. Knowledge work may need flexible standards that define outcomes and constraints.",
                "common_mistakes": [
                  "Creating documents that sit on a shelf.",
                  "Failing to train or audit the standard.",
                  "Never updating the standard after improvement."
                ],
                "quick_check": [
                  {
                    "q": "What is takt time?",
                    "answer": "Available work time divided by customer demand.",
                    "explanation": "It sets the pace the process must meet."
                  },
                  {
                    "q": "Who should help create standard work?",
                    "answer": "The people who perform the work.",
                    "explanation": "Operator involvement improves accuracy and ownership."
                  },
                  {
                    "q": "Why is standard work a baseline for improvement?",
                    "answer": "You cannot reliably improve a process that is not standardized.",
                    "explanation": "A stable method makes the effect of changes visible."
                  }
                ],
                "recap": [
                  "Standard work captures the current best method.",
                  "Include takt, sequence, inventory, and key points.",
                  "Involve operators and update the standard as the process improves."
                ]
              }
            },
            {
              "id": "B6.6",
              "order": 6,
              "title": "5S and Visual Management",
              "objective": "Create a self-explaining, self-cleaning workplace.",
              "content": {
                "why": "Clutter, missing tools, and unclear status create delays, defects, and safety risks. A visual workplace makes normal and abnormal conditions obvious at a glance.",
                "what": "The 5S method uses sort, set in order, shine, standardize, and sustain. Sort removes what is not needed. Set in order gives everything a clear location. Shine cleans and inspects. Standardize creates visual rules and responsibilities. Sustain builds habits and audits. Visual management uses labels, shadow boards, floor markings, andons, kanban, and dashboards so the workplace explains itself.",
                "how": [
                  "Baseline the area with photos and a waste walk.",
                  "Sort items with red tags and a disposition rule.",
                  "Set locations based on frequency of use and ergonomics.",
                  "Clean and inspect equipment and spaces.",
                  "Create visual standards and ownership.",
                  "Audit regularly and coach immediately.",
                  "Expand to related areas only after sustainment works."
                ],
                "where": "Use 5S and visual management on shop floors, laboratories, offices, hospital supply rooms, warehouses, and digital workspaces. Example: a shadow board for tools reduces search time and makes a missing tool immediately visible.",
                "when_not": "Do not run 5S as a cleaning contest. Do not add visual clutter that hides the important signals. Do not launch without ownership and a sustainment plan.",
                "common_mistakes": [
                  "No sustainment after the initial cleanup.",
                  "Labels and locations without a logical system.",
                  "Using audits to blame rather than improve."
                ],
                "quick_check": [
                  {
                    "q": "What are the five S's?",
                    "answer": "Sort, set in order, shine, standardize, and sustain.",
                    "explanation": "They create and maintain an organized workplace."
                  },
                  {
                    "q": "What is visual management?",
                    "answer": "Using visual signals to make status and abnormalities obvious.",
                    "explanation": "Examples include andons, floor markings, and shadow boards."
                  },
                  {
                    "q": "Why is sustain the hardest S?",
                    "answer": "It requires habits, ownership, and regular follow-up.",
                    "explanation": "Initial cleanup fades without a management system."
                  }
                ],
                "recap": [
                  "5S creates an organized, self-explaining workplace.",
                  "Visual management makes abnormal conditions visible.",
                  "Sustainment requires ownership, audits, and coaching."
                ]
              }
            },
            {
              "id": "B6.7",
              "order": 7,
              "title": "Design for Six Sigma (DMADV)",
              "objective": "Define, Measure, Analyze, Design, and Verify a new process or product.",
              "content": {
                "why": "Fixing a poorly designed process can be expensive and slow. Design for Six Sigma builds capability into a new product, service, or process from the start.",
                "what": "DFSS uses DMADV: Define, Measure, Analyze, Design, and Verify. Define clarifies the business case and customer requirements. Measure translates voice of the customer into critical-to-quality requirements. Analyze develops and evaluates design concepts. Design optimizes the chosen concept and assesses risk. Verify proves capability through pilots, reliability testing, and validation. Tools include QFD, Kano, FMEA, DOE, Monte Carlo simulation, and tolerance design.",
                "how": [
                  "Define the project, customers, and business case.",
                  "Measure CTQs and translate customer needs.",
                  "Analyze concepts against requirements and risk.",
                  "Design the product or process and optimize performance.",
                  "Predict capability, reliability, and failure modes.",
                  "Verify with pilots, testing, and handover.",
                  "Monitor the launched design and capture lessons learned."
                ],
                "where": "Use DMADV for new products, services, processes, software, and facilities. Example: design a new patient intake process by defining CTQs, evaluating flow concepts, simulating demand, and piloting before full launch.",
                "when_not": "Do not use DMADV when an existing process has a known problem; DMAIC is usually appropriate. Do not skip verification or design without customer input. Do not treat a pilot as a substitute for capability and reliability evidence.",
                "common_mistakes": [
                  "Applying DMAIC thinking to a new design.",
                  "Skipping voice of the customer and CTQ translation.",
                  "Waiting until launch to test capability and risk."
                ],
                "quick_check": [
                  {
                    "q": "What do the letters in DMADV stand for?",
                    "answer": "Define, Measure, Analyze, Design, and Verify.",
                    "explanation": "DMADV is the DFSS roadmap for new designs."
                  },
                  {
                    "q": "When is DMADV preferred over DMAIC?",
                    "answer": "When designing a new product, service, or process.",
                    "explanation": "DMAIC improves an existing process; DMADV creates a new one."
                  },
                  {
                    "q": "Why is verification essential in DMADV?",
                    "answer": "It proves the design meets CTQs and performs reliably in practice.",
                    "explanation": "Design predictions must be tested before launch."
                  }
                ],
                "recap": [
                  "DMADV designs new processes and products for capability.",
                  "Translate customer needs into CTQs and verify the design.",
                  "Use DFSS when the process does not yet exist."
                ]
              }
            },
            {
              "id": "B6.8",
              "order": 8,
              "title": "QFD",
              "objective": "Translate customer needs into design requirements with the House of Quality.",
              "content": {
                "why": "Teams can optimize features customers do not value. Quality Function Deployment translates voice of the customer into design requirements, so engineering and process decisions stay connected to customer needs.",
                "what": "The House of Quality is the core QFD matrix. Customer needs are the whats, technical requirements are the hows, and the relationship matrix rates how strongly each technical requirement affects each need. The roof shows correlations between technical requirements. Competitive ratings and targets complete the house. Weighted importance helps prioritize requirements. QFD can cascade through product, part, process, and production planning.",
                "how": [
                  "Collect and structure voice-of-the-customer statements.",
                  "Prioritize customer needs by importance.",
                  "Identify measurable technical requirements.",
                  "Rate relationships and technical correlations.",
                  "Benchmark competitors and set targets.",
                  "Calculate weighted priorities and resolve tradeoffs.",
                  "Cascade the priorities into design and control plans."
                ],
                "where": "Use QFD for new products, service design, software features, healthcare services, and facility design. Example: customers say the process should be easy to use. QFD links that need to measurable requirements such as steps, wait time, error rate, and accessibility.",
                "when_not": "Do not use QFD as a one-time paperwork exercise. Do not invent customer needs without research. Do not build a matrix so large that the team cannot act on it.",
                "common_mistakes": [
                  "Guessing voice of the customer.",
                  "Assigning relationship scores arbitrarily.",
                  "Setting targets without owners or follow-through."
                ],
                "quick_check": [
                  {
                    "q": "What are the whats and hows in a House of Quality?",
                    "answer": "The whats are customer needs and the hows are technical requirements.",
                    "explanation": "The matrix links customer wants to measurable design characteristics."
                  },
                  {
                    "q": "What does the roof of the House of Quality show?",
                    "answer": "Correlations among technical requirements.",
                    "explanation": "It reveals tradeoffs and synergies between design choices."
                  },
                  {
                    "q": "Why weight customer needs?",
                    "answer": "To prioritize technical requirements by customer importance.",
                    "explanation": "Weighting focuses resources on what matters most."
                  }
                ],
                "recap": [
                  "QFD translates customer needs into technical requirements.",
                  "Use relationship ratings and competitive targets to prioritize.",
                  "Cascade priorities into design and process decisions."
                ]
              }
            },
            {
              "id": "B6.9",
              "order": 9,
              "title": "Kano Model",
              "objective": "Classify features as basic, performance, or delighter.",
              "content": {
                "why": "Not every feature affects satisfaction the same way. The Kano model prevents teams from overinvesting in features customers barely notice or underinvesting in basics whose absence causes dissatisfaction.",
                "what": "Kano classifies features as must-be, performance, attractive, indifferent, or reverse. Must-be features cause dissatisfaction when missing but do not delight when present. Performance features produce satisfaction in proportion to how well they are delivered. Attractive features delight when present but do not cause dissatisfaction when absent. Over time, attractive features often become expected. Survey design asks functional and dysfunctional questions for each feature.",
                "how": [
                  "List candidate features or requirements.",
                  "Write paired functional and dysfunctional survey questions.",
                  "Collect responses from representative customer segments.",
                  "Classify each feature using the Kano evaluation table.",
                  "Analyze differences by segment and over time.",
                  "Prioritize must-be features first, then performance and selected delighters."
                ],
                "where": "Use Kano for product features, service design, mobile applications, hotel amenities, and healthcare experiences. Example: a clean hospital room is must-be, shorter wait time is performance, and an unexpected follow-up call may be attractive.",
                "when_not": "Do not assume one customer segment represents all customers. Do not chase delighters before fixing missing basics. Do not treat classifications as permanent; expectations change.",
                "common_mistakes": [
                  "Surveying only positive questions.",
                  "Treating Kano categories as static.",
                  "Ignoring segment differences."
                ],
                "quick_check": [
                  {
                    "q": "What is a must-be feature?",
                    "answer": "A feature whose absence causes dissatisfaction but whose presence does not delight.",
                    "explanation": "Must-be features are basic expectations."
                  },
                  {
                    "q": "What is a performance feature?",
                    "answer": "A feature where satisfaction increases as performance improves.",
                    "explanation": "Performance features follow a roughly linear relationship."
                  },
                  {
                    "q": "What is an attractive feature?",
                    "answer": "A feature that delights when present but does not cause dissatisfaction when absent.",
                    "explanation": "Attractive features are unexpected differentiators."
                  }
                ],
                "recap": [
                  "Kano separates basic, performance, and delighting features.",
                  "Fix must-be requirements before chasing delighters.",
                  "Revisit classifications as customer expectations evolve."
                ]
              }
            }
          ]
        },
        {
          "id": "black-7",
          "number": 7,
          "title": "Leadership and Finance",
          "duration": "3 hours",
          "summary": "Lead complex change, build project pipelines, prove financial benefit, and develop other belts.",
          "lessons": [
            {
              "id": "B7.1",
              "order": 1,
              "title": "Advanced FMEA",
              "objective": "Use action priority, risk review, and integration with control plans.",
              "content": {
                "why": "Basic risk ranking can mislead teams into fixing low-severity issues while ignoring severe failure modes. Advanced FMEA prioritizes risk in a way that protects customers and links actions to controls.",
                "what": "FMEA identifies failure modes, their effects, and causes. Severity rates the impact, occurrence rates the likelihood, and detection rates the chance of catching the failure before impact. The traditional risk priority number multiplies severity, occurrence, and detection, but it treats very different risks as equivalent. The AIAG-VDA action priority method emphasizes severity and directs attention to high-priority combinations. Actions should prevent causes first, then improve detection, and feed the control plan.",
                "how": [
                  "Define the scope and structure of the design or process.",
                  "List functions and potential failure modes.",
                  "Describe effects and assign severity.",
                  "Identify causes and rate occurrence.",
                  "List current prevention and detection controls.",
                  "Assign action priority and select actions.",
                  "Re-evaluate risk and update the control plan and standard work."
                ],
                "where": "Use FMEA for design, manufacturing, software, healthcare, and service processes. Example: a failure mode with severity 10 and occurrence 4 remains high priority even when detection is strong, because the effect is catastrophic.",
                "when_not": "Do not use a simple RPN threshold as the only decision rule. Do not let FMEA become paperwork. Do not ignore human factors, use errors, or interactions between failure modes.",
                "common_mistakes": [
                  "Prioritizing by RPN alone.",
                  "Investing only in detection instead of prevention.",
                  "Failing to update the FMEA and control plan."
                ],
                "quick_check": [
                  {
                    "q": "What do severity, occurrence, and detection represent?",
                    "answer": "Impact of the effect, likelihood of the cause, and ability to detect before impact.",
                    "explanation": "Together they describe the risk of a failure mode."
                  },
                  {
                    "q": "Why is action priority preferred over RPN alone?",
                    "answer": "It gives more weight to severity and avoids misleading score equivalence.",
                    "explanation": "Different risk combinations can produce the same RPN."
                  },
                  {
                    "q": "What should an FMEA action update?",
                    "answer": "The control plan, standard work, and related process documents.",
                    "explanation": "Risk controls must be embedded in how the process runs."
                  }
                ],
                "recap": [
                  "FMEA identifies failure modes, effects, causes, and controls.",
                  "Prioritize high-severity risk and prevent causes before improving detection.",
                  "Link FMEA actions to control plans and standard work."
                ]
              }
            },
            {
              "id": "B7.2",
              "order": 2,
              "title": "Change Management",
              "objective": "Use a structured approach to build awareness, desire, knowledge, ability, and reinforcement.",
              "content": {
                "why": "Technical solutions fail when people do not adopt them. Change management builds the awareness, capability, and commitment needed for improvement to stick.",
                "what": "ADKAR describes five outcomes: awareness of the need for change, desire to participate, knowledge of how to change, ability to perform, and reinforcement to sustain. Stakeholder analysis identifies who is affected and how much influence they have. Sponsorship, communication, training, coaching, and resistance management are coordinated throughout the project.",
                "how": [
                  "Define the change and its impact on each stakeholder group.",
                  "Assess readiness and sources of resistance.",
                  "Build awareness with clear business and personal reasons.",
                  "Engage sponsors and influencers to create desire.",
                  "Provide training and practice to build knowledge and ability.",
                  "Measure adoption and remove barriers.",
                  "Reinforce with recognition, audits, and updated systems."
                ],
                "where": "Use change management for process changes, software rollouts, healthcare protocols, Lean transformations, and new standard work. Example: a control plan fails because operators were not involved, did not understand why it mattered, and had no coaching after training.",
                "when_not": "Do not treat change management as a single announcement. Do not assume training creates ability or desire. Do not ignore resistance or rely only on a sponsor email.",
                "common_mistakes": [
                  "Communicating once and declaring the change complete.",
                  "Skipping desire and focusing only on training.",
                  "Failing to reinforce the new way."
                ],
                "quick_check": [
                  {
                    "q": "What does ADKAR stand for?",
                    "answer": "Awareness, Desire, Knowledge, Ability, and Reinforcement.",
                    "explanation": "It describes the building blocks of individual change."
                  },
                  {
                    "q": "Why is desire important?",
                    "answer": "People must choose to support and participate in the change.",
                    "explanation": "Knowledge alone does not create commitment."
                  },
                  {
                    "q": "What is reinforcement?",
                    "answer": "Actions that make the new behavior stick after implementation.",
                    "explanation": "Recognition, audits, and systems sustain adoption."
                  }
                ],
                "recap": [
                  "Change succeeds through people, not just technical design.",
                  "Use ADKAR to diagnose where adoption is breaking down.",
                  "Sponsor, communicate, train, coach, and reinforce."
                ]
              }
            },
            {
              "id": "B7.3",
              "order": 3,
              "title": "Team Leadership",
              "objective": "Lead cross-functional teams, manage conflict, and make decisions.",
              "content": {
                "why": "Black Belts lead cross-functional teams without direct authority. Clear roles, constructive conflict, and sound decisions determine whether the team delivers.",
                "what": "Teams typically move through forming, storming, norming, and performing. A charter defines purpose, scope, roles, and decision rights. RACI clarifies who is responsible, accountable, consulted, and informed. Task conflict about ideas can improve decisions, while relationship conflict undermines trust. Decision methods include command, consultative, consensus, and unanimous agreement. Psychological safety helps people speak up about risks and errors.",
                "how": [
                  "Create a clear charter and roles.",
                  "Set ground rules and meeting norms.",
                  "Use structured agendas and facilitation.",
                  "Separate task conflict from personal conflict.",
                  "Choose a decision method that fits the stakes.",
                  "Document decisions, owners, and dates.",
                  "Give feedback and recognize progress."
                ],
                "where": "Use team leadership in DMAIC projects, kaizen events, design teams, and cross-functional improvement councils. Example: a team with unclear decision rights keeps revisiting the same choice. A RACI and a stated decision method resolve the loop.",
                "when_not": "Do not avoid conflict and call it harmony. Do not use consensus for every decision; it can slow urgent choices. Do not micromanage skilled team members.",
                "common_mistakes": [
                  "Unclear roles and decision rights.",
                  "Groupthink and silence about risks.",
                  "Decisions recorded without owners or deadlines."
                ],
                "quick_check": [
                  {
                    "q": "What is psychological safety?",
                    "answer": "A climate where people can speak up without fear of humiliation or punishment.",
                    "explanation": "It supports learning, risk identification, and honest debate."
                  },
                  {
                    "q": "What is the difference between task and relationship conflict?",
                    "answer": "Task conflict is about ideas; relationship conflict is personal.",
                    "explanation": "Task conflict can be productive, while relationship conflict usually harms the team."
                  },
                  {
                    "q": "When is a command decision appropriate?",
                    "answer": "When speed and clear accountability matter more than broad input.",
                    "explanation": "The leader decides and explains the rationale."
                  }
                ],
                "recap": [
                  "Lead through clarity, trust, and structured decisions.",
                  "Encourage task debate while limiting personal conflict.",
                  "Document decisions and hold the team accountable."
                ]
              }
            },
            {
              "id": "B7.4",
              "order": 4,
              "title": "Project Selection",
              "objective": "Prioritize projects by impact, feasibility, risk, and strategic fit.",
              "content": {
                "why": "Improvement resources are limited. A disciplined selection process ensures the organization works on projects with the greatest strategic value and a realistic chance of success.",
                "what": "Project selection compares candidates on strategic fit, customer and financial impact, feasibility, risk, urgency, and learning value. A weighted scoring matrix makes criteria explicit and comparable. The portfolio should balance quick wins with larger strategic efforts and avoid overloading the same people or functions. A selected project needs a clear problem statement, baseline, goal, scope, sponsor, and resource commitment.",
                "how": [
                  "Collect candidate problems from strategy, customers, operations, and employees.",
                  "Define selection criteria and agree on weights.",
                  "Score each candidate with evidence, not opinion alone.",
                  "Check feasibility, data availability, authority, and resources.",
                  "Review the portfolio for balance and dependencies.",
                  "Select projects and assign sponsors.",
                  "Charter each project with a measurable baseline and goal."
                ],
                "where": "Use project selection in annual planning, DMAIC pipelines, Lean portfolios, and continuous improvement councils. Example: a project with high customer impact but no reliable baseline may need a short measurement project before full chartering.",
                "when_not": "Do not use a scoring matrix as a substitute for judgment. Do not select only easy projects or only pet projects. Do not approve work without a sponsor and the capacity to execute.",
                "common_mistakes": [
                  "Choosing projects that are not linked to strategy.",
                  "Starting without a baseline or clear problem statement.",
                  "Selecting projects that are too broad to finish."
                ],
                "quick_check": [
                  {
                    "q": "What should a project selection score include?",
                    "answer": "Strategic fit, impact, feasibility, risk, and urgency.",
                    "explanation": "Multiple criteria prevent selection based on a single bias."
                  },
                  {
                    "q": "Why balance quick wins and strategic projects?",
                    "answer": "To build momentum while delivering long-term value.",
                    "explanation": "A portfolio needs both credibility and transformation."
                  },
                  {
                    "q": "What must a chartered project have?",
                    "answer": "A clear problem, baseline, goal, scope, sponsor, and resources.",
                    "explanation": "These elements make the project executable and measurable."
                  }
                ],
                "recap": [
                  "Select projects with explicit strategic and feasibility criteria.",
                  "Balance the portfolio and avoid overloading resources.",
                  "Charter only projects with a baseline, goal, and sponsor."
                ]
              }
            },
            {
              "id": "B7.5",
              "order": 5,
              "title": "Financial Analysis (COPQ, ROI)",
              "objective": "Build a benefit case with hard and soft savings.",
              "content": {
                "why": "Improvement projects compete for capital and management attention. A credible financial case shows whether the benefit is real, how quickly it arrives, and what it costs to achieve.",
                "what": "Cost of poor quality includes internal failure, external failure, appraisal, and prevention costs. Hard savings reduce actual spending, while soft savings avoid cost or add capacity and may require validation. Return on investment compares net benefits with project cost. Payback shows how quickly the investment is recovered. Net present value and internal rate of return account for multiyear cash flows and the time value of money.",
                "how": [
                  "Establish a validated baseline and measurement method.",
                  "Quantify hard and soft benefits with finance.",
                  "Include implementation, operating, and sustainment costs.",
                  "Calculate ROI, payback, and NPV or IRR as appropriate.",
                  "Test assumptions with sensitivity analysis.",
                  "Obtain finance review and approval.",
                  "Track realized benefits after implementation."
                ],
                "where": "Use financial analysis for defect reduction, cycle-time improvement, capacity release, warranty reduction, and customer retention projects. Example: labor savings are hard only if positions are eliminated or redeployed; otherwise they may be capacity or soft savings.",
                "when_not": "Do not count theoretical savings that never reach the budget. Do not double-count benefits across projects. Do not ignore ongoing costs or present soft savings as cash.",
                "common_mistakes": [
                  "No validated baseline.",
                  "Double-counting benefits.",
                  "Treating released capacity as automatic cash savings."
                ],
                "quick_check": [
                  {
                    "q": "What is the difference between hard and soft savings?",
                    "answer": "Hard savings reduce actual spending; soft savings avoid cost or free capacity.",
                    "explanation": "Soft savings usually require finance validation."
                  },
                  {
                    "q": "What does payback measure?",
                    "answer": "The time required to recover the project investment.",
                    "explanation": "Shorter payback means faster return of cash."
                  },
                  {
                    "q": "Why use NPV for multiyear projects?",
                    "answer": "It accounts for the time value of money across future cash flows.",
                    "explanation": "Future benefits are worth less than immediate benefits."
                  }
                ],
                "recap": [
                  "Build the business case on a validated baseline.",
                  "Separate hard savings, soft savings, and capacity release.",
                  "Use finance-reviewed ROI, payback, and NPV or IRR."
                ]
              }
            },
            {
              "id": "B7.6",
              "order": 6,
              "title": "Mentoring",
              "objective": "Coach Green Belts and review project logic and statistics.",
              "content": {
                "why": "Mentoring multiplies improvement capability. Green Belts and project teams need guidance to apply the right methods, avoid wasted effort, and grow their judgment.",
                "what": "Mentoring develops another person's capability through guidance, questioning, feedback, and gate reviews. It differs from coaching by combining technical review with career and leadership development. A mentor reviews the charter, data, analysis, and control plan without taking over the work. Effective mentoring uses adult learning, clear expectations, regular check-ins, and documented actions.",
                "how": [
                  "Agree on development goals and project expectations.",
                  "Assess current skills and gaps.",
                  "Create a mentoring plan with review points.",
                  "Ask questions before giving answers.",
                  "Review project logic, data, and statistics at gates.",
                  "Give specific feedback and agree on next actions.",
                  "Evaluate progress and escalate real risks."
                ],
                "where": "Use mentoring for Green Belt projects, Black Belt development, Lean leaders, and improvement sponsors. Example: at a Define gate, the mentor asks the Green Belt to prove the baseline and scope rather than rewriting the charter for them.",
                "when_not": "Do not mentor without the expertise, time, or objectivity to help. Do not do the project for the mentee. Avoid conflicts of interest when mentoring someone you also evaluate.",
                "common_mistakes": [
                  "Solving the problem instead of building capability.",
                  "Focusing only on tools and ignoring leadership.",
                  "Giving vague feedback with no follow-up."
                ],
                "quick_check": [
                  {
                    "q": "What is a mentor's role?",
                    "answer": "To guide development, challenge thinking, and support the mentee's own work.",
                    "explanation": "Mentoring builds capability rather than taking over."
                  },
                  {
                    "q": "Why use questions in mentoring?",
                    "answer": "They help the mentee reason and build independent judgment.",
                    "explanation": "Questions create learning that answers alone do not."
                  },
                  {
                    "q": "What should happen at a project gate review?",
                    "answer": "The mentor checks logic, evidence, and readiness before the next phase.",
                    "explanation": "Gate reviews prevent weak work from advancing."
                  }
                ],
                "recap": [
                  "Mentoring develops people while protecting project quality.",
                  "Guide with questions, evidence, and specific feedback.",
                  "Do not take over the mentee's project."
                ]
              }
            }
          ]
        }
      ],
      "coverageChecklist": [
        {
          "topic": "Advanced statistics and probability distributions",
          "lessons": [
            "B1.1",
            "B1.2"
          ]
        },
        {
          "topic": "Attribute MSA",
          "lessons": [
            "B2.1"
          ]
        },
        {
          "topic": "Full hypothesis testing (t-tests)",
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
          "topic": "Non-parametric",
          "lessons": [
            "B1.8"
          ]
        },
        {
          "topic": "Chi-square",
          "lessons": [
            "B1.9"
          ]
        },
        {
          "topic": "Multiple regression",
          "lessons": [
            "B3.1"
          ]
        },
        {
          "topic": "Logistic regression",
          "lessons": [
            "B3.2"
          ]
        },
        {
          "topic": "Full DOE",
          "lessons": [
            "B4.1"
          ]
        },
        {
          "topic": "Fractional DOE",
          "lessons": [
            "B4.2"
          ]
        },
        {
          "topic": "Response surface methods",
          "lessons": [
            "B4.4"
          ]
        },
        {
          "topic": "Advanced SPC",
          "lessons": [
            "B5.1"
          ]
        },
        {
          "topic": "Non-normal capability",
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
          "topic": "Value stream mapping",
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
          "topic": "Design for Six Sigma (DMADV)",
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
          "topic": "Change management",
          "lessons": [
            "B7.2"
          ]
        },
        {
          "topic": "Team leadership",
          "lessons": [
            "B7.3"
          ]
        },
        {
          "topic": "Project selection",
          "lessons": [
            "B7.4"
          ]
        },
        {
          "topic": "Financial analysis (COPQ, ROI)",
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
        "title": "Reduce Turnaround Time and Defects in a Cross-Functional Process",
        "brief": "Lead a full DMAIC project on a complex process such as loan approvals, patient discharge, or software release. Include MSA, capability, hypothesis testing, regression, a designed experiment, a pilot, and a control plan with financial validation."
      },
      "exam": {
        "questions": 100,
        "passingScore": 80,
        "format": "Multiple choice, calculations, interpretation of software output, and a case-based defense."
      },
      "cheatSheet": [
        "Use non-parametric tests when normality or equal-variance assumptions fail.",
        "R-squared explains variance; adjusted R-squared penalizes extra predictors.",
        "Resolution IV designs do not alias main effects with two-factor interactions.",
        "Capability on non-normal data: transform, fit a distribution, or use non-parametric methods."
      ],
      "nextChecklist": [
        "I can choose and interpret a hypothesis test from a scenario.",
        "I can build and diagnose a multiple regression model.",
        "I can design and analyze a screening experiment.",
        "I can lead a cross-functional project and mentor a Green Belt."
      ]
    },
    {
      "id": "master-black",
      "name": "Master Black Belt",
      "level": 5,
      "color": "master",
      "icon": "fa-star",
      "lessonTarget": "20-25",
      "studyTime": "60-80 hours",
      "audience": "Experienced Black Belts who design deployments, govern portfolios, consult on statistics, and build organizational capability.",
      "prerequisites": "Black Belt certification and a track record of leading complex projects.",
      "previousRecap": "Black Belt recap: complex projects need advanced statistics, designed experiments, Lean and DFSS, change leadership, and validated financial benefits.",
      "outcomes": [
        "Deploy strategy with Hoshin Kanri and govern an improvement portfolio",
        "Validate financial benefits and select projects by strategic value",
        "Coach Black Belts and consult on advanced statistical questions",
        "Design training, build culture, and integrate analytics and Industry 4.0",
        "Apply ISO 13053, ASQ, and IASSC certification standards and ethics"
      ],
      "modules": [
        {
          "id": "master-1",
          "number": 1,
          "title": "Strategy Deployment",
          "duration": "4 hours",
          "summary": "Connect improvement work to strategy through Hoshin Kanri, governance, portfolio selection, and validated financial benefits.",
          "lessons": [
            {
              "id": "M1.1",
              "order": 1,
              "title": "Hoshin Kanri",
              "objective": "Cascade strategic objectives into annual improvement priorities.",
              "content": {
                "why": "Improvement portfolios drift when projects are selected locally and strategy stays in a planning document. Hoshin Kanri connects long-term direction to annual priorities, projects, and daily work.",
                "what": "Hoshin Kanri is strategy deployment. It starts with a true north vision, sets three-to-five-year breakthrough objectives, and translates them into annual objectives and improvement priorities. The X-matrix links long-term objectives, annual objectives, improvement initiatives, and targets to improve. Catchball aligns goals and resources across levels. Regular reviews apply plan-do-check-act to the deployment itself, not only to projects.",
                "how": [
                  "Define the vision and the most important strategic gaps.",
                  "Set a small number of three-to-five-year breakthrough objectives.",
                  "Translate them into annual objectives and measurable targets.",
                  "Build the X-matrix and link priorities to projects.",
                  "Cascade goals through catchball and agree on resources.",
                  "Review progress at a regular cadence and adjust.",
                  "Connect deployment to daily management and standard work."
                ],
                "where": "Use Hoshin Kanri in enterprises, health systems, public agencies, and multi-site manufacturers. Example: a three-year goal to cut order-to-delivery lead time by 30% becomes annual targets for flow, quality, and supplier performance, each linked to owned projects.",
                "when_not": "Do not turn Hoshin into a long list of annual goals. Do not cascade targets without resources or authority. Do not substitute strategy deployment for daily management and problem solving.",
                "common_mistakes": [
                  "Setting too many priorities.",
                  "Skipping catchball and imposing targets.",
                  "Reviewing progress only once a year."
                ],
                "quick_check": [
                  {
                    "q": "What is Hoshin Kanri?",
                    "answer": "Strategy deployment that aligns long-term goals with annual priorities and improvement work.",
                    "explanation": "It connects direction, resources, projects, and review."
                  },
                  {
                    "q": "What does the X-matrix link?",
                    "answer": "Long-term objectives, annual objectives, improvement priorities, and targets.",
                    "explanation": "The matrix makes strategic alignment visible."
                  },
                  {
                    "q": "Why keep the number of breakthrough objectives small?",
                    "answer": "To focus resources and attention on the most important gaps.",
                    "explanation": "Too many priorities dilute execution."
                  }
                ],
                "recap": [
                  "Hoshin Kanri aligns strategy, projects, and daily work.",
                  "Use a few breakthrough objectives and an X-matrix.",
                  "Deploy through catchball and review with PDCA."
                ]
              }
            },
            {
              "id": "M1.2",
              "order": 2,
              "title": "Strategy Deployment and Catchball",
              "objective": "Use catchball to align goals, resources, and measures.",
              "content": {
                "why": "A strategy is only deployed when local teams understand it, shape it, and own their part. Catchball turns a top-level target into a feasible plan without losing strategic intent.",
                "what": "Catchball is structured, iterative dialogue between levels of the organization. Leaders share direction, constraints, and targets. Teams respond with local knowledge, capacity, risks, and improvement ideas. Goals, resources, and timing are negotiated until they are ambitious but achievable. The result is documented in deployment plans, A3s, and review cadences. Catchball is neither top-down command nor unlimited consensus.",
                "how": [
                  "Draft strategic objectives and deployment targets.",
                  "Brief each level on direction, rationale, and constraints.",
                  "Ask teams to draft local plans and identify gaps.",
                  "Review alignment vertically and across functions.",
                  "Negotiate resources, timing, and measures.",
                  "Document agreed plans, owners, and review dates.",
                  "Review progress and renegotiate when conditions change."
                ],
                "where": "Use catchball in Hoshin Kanri, annual planning, transformation programs, and multi-site deployments. Example: a hospital target to reduce length of stay is discussed with clinical, operations, and finance leaders so that bed capacity, safety, and discharge planning are aligned.",
                "when_not": "Do not use catchball to dilute every target until it is easy. Do not let it become an endless meeting. Do not skip documentation or review.",
                "common_mistakes": [
                  "Announcing targets without listening to local constraints.",
                  "Allowing conflicting functional goals to remain unresolved.",
                  "Failing to record agreements and owners."
                ],
                "quick_check": [
                  {
                    "q": "What is catchball?",
                    "answer": "Iterative dialogue to align goals, resources, and local plans across levels.",
                    "explanation": "It combines strategic direction with local knowledge."
                  },
                  {
                    "q": "Why is catchball not simply consensus?",
                    "answer": "Leaders retain strategic intent while teams negotiate feasible execution.",
                    "explanation": "The goal is alignment, not unanimous agreement on everything."
                  },
                  {
                    "q": "What should result from catchball?",
                    "answer": "Documented plans with owners, measures, resources, and review dates.",
                    "explanation": "Dialogue must turn into accountable action."
                  }
                ],
                "recap": [
                  "Catchball aligns strategy and execution through structured dialogue.",
                  "Balance ambition with local capacity and constraints.",
                  "Document agreements and review them regularly."
                ]
              }
            },
            {
              "id": "M1.3",
              "order": 3,
              "title": "Program Governance",
              "objective": "Design steering committees, review cadence, and escalation paths.",
              "content": {
                "why": "Large improvement programs fail when decision rights, accountability, and escalation are unclear. Governance keeps work aligned, funded, and controlled without becoming bureaucracy.",
                "what": "Program governance defines who decides, who is accountable, how projects are chartered, and how risks are escalated. Typical elements include a steering committee, program management office, sponsors, belt roles, stage gates, portfolio reviews, benefit tracking, and an issue-escalation path. Governance sets direction and removes barriers; management runs the day-to-day work. A RACI makes decision rights explicit.",
                "how": [
                  "Define the program outcomes and scope.",
                  "Establish the steering committee and decision rights.",
                  "Clarify roles for sponsors, project leaders, belts, and the PMO.",
                  "Charter projects and define stage gates.",
                  "Set reporting, risk, and escalation mechanisms.",
                  "Allocate resources and resolve cross-project conflicts.",
                  "Review benefits and rebalance the portfolio."
                ],
                "where": "Use program governance for enterprise Lean Six Sigma deployments, transformation offices, multi-site programs, and large regulatory or technology changes. Example: a steering committee resolves a resource conflict between two high-value projects instead of letting both stall.",
                "when_not": "Do not create governance layers that slow every decision. Do not confuse a PMO with the accountable business owner. Do not run gate reviews as rubber stamps.",
                "common_mistakes": [
                  "Unclear ownership and decision rights.",
                  "Too many committees with overlapping authority.",
                  "Approving projects without benefit tracking."
                ],
                "quick_check": [
                  {
                    "q": "What is the purpose of program governance?",
                    "answer": "To define decision rights, accountability, risk management, and alignment.",
                    "explanation": "Governance keeps the program controlled and strategically aligned."
                  },
                  {
                    "q": "How does governance differ from management?",
                    "answer": "Governance sets direction and oversight; management executes daily work.",
                    "explanation": "Both are needed, but they are not the same role."
                  },
                  {
                    "q": "What does a stage gate do?",
                    "answer": "It reviews evidence and readiness before work advances.",
                    "explanation": "Gates prevent weak projects from consuming more resources."
                  }
                ],
                "recap": [
                  "Governance clarifies decisions, accountability, and escalation.",
                  "Keep structures lightweight and focused on removing barriers.",
                  "Link gates to evidence and benefit realization."
                ]
              }
            },
            {
              "id": "M1.4",
              "order": 4,
              "title": "Project Portfolio Selection",
              "objective": "Balance impact, risk, capacity, and strategic fit.",
              "content": {
                "why": "Enterprises have more improvement ideas than capacity. Portfolio selection balances strategic value, risk, feasibility, and resource constraints across the whole organization.",
                "what": "Portfolio selection is a recurring process, not a one-time approval. Candidates are scored on strategic fit, customer and financial impact, feasibility, risk, urgency, and learning value. The portfolio must fit available people, capital, and management attention. Dependencies, duplication, and lifecycle balance are considered. Stage gates and kill criteria allow weak projects to stop early.",
                "how": [
                  "Inventory candidate projects and improvement needs.",
                  "Agree on weighted strategic and financial criteria.",
                  "Score candidates with validated evidence.",
                  "Assess capacity, dependencies, and risk.",
                  "Select a balanced portfolio and assign sponsors.",
                  "Review performance and rebalance at a set cadence.",
                  "Stop or redesign projects that no longer justify investment."
                ],
                "where": "Use portfolio selection across multi-site operations, transformation programs, product portfolios, and enterprise improvement offices. Example: a portfolio includes quick operational wins, a strategic digital project, and a capability-building initiative rather than funding only one type.",
                "when_not": "Do not optimize each function locally at the expense of the enterprise. Do not fund every worthy idea. Do not treat the portfolio as fixed for the year.",
                "common_mistakes": [
                  "No explicit link to strategy.",
                  "Too many active projects for available capacity.",
                  "No kill criteria or periodic rebalancing."
                ],
                "quick_check": [
                  {
                    "q": "Why is portfolio selection recurring?",
                    "answer": "Priorities, capacity, and evidence change over time.",
                    "explanation": "Regular rebalancing keeps resources on the highest-value work."
                  },
                  {
                    "q": "What should a portfolio balance?",
                    "answer": "Strategic value, risk, feasibility, timing, and capability building.",
                    "explanation": "A balanced portfolio avoids overconcentration."
                  },
                  {
                    "q": "Why define kill criteria?",
                    "answer": "To stop projects that no longer justify continued investment.",
                    "explanation": "Early exits free capacity for better opportunities."
                  }
                ],
                "recap": [
                  "Manage improvement work as an enterprise portfolio.",
                  "Balance strategy, value, risk, and capacity.",
                  "Review regularly and stop weak projects early."
                ]
              }
            },
            {
              "id": "M1.5",
              "order": 5,
              "title": "Financial Validation",
              "objective": "Verify hard savings, avoid double counting, and track realization.",
              "content": {
                "why": "Improvement claims lose credibility when savings are theoretical, double-counted, or never reach the financial statements. Financial validation makes the benefit case defensible.",
                "what": "Financial validation confirms the baseline, benefit type, timing, and cash impact with finance. Hard savings affect spending or cash flow. Soft savings avoid cost or free capacity and may require redeployment to become real. The analysis may use ROI, payback, NPV, or IRR. A benefit tracker assigns ownership and compares planned with realized results. Validation also checks for double counting and ongoing costs.",
                "how": [
                  "Define the benefit hypothesis and measurement method.",
                  "Validate the baseline with operations and finance.",
                  "Classify benefits as hard, soft, or capacity release.",
                  "Include implementation, operating, and sustainment costs.",
                  "Calculate ROI, payback, and NPV or IRR as appropriate.",
                  "Obtain finance approval and assign a benefit owner.",
                  "Track realized benefits and reconcile variances."
                ],
                "where": "Use financial validation for portfolios, transformation programs, capital projects, and individual DMAIC projects. Example: reduced overtime is a hard saving only when the overtime budget actually falls; freed capacity is soft until it is redeployed or sold.",
                "when_not": "Do not accept unvalidated savings claims. Do not count theoretical or double-counted benefits. Do not treat soft savings as cash without finance agreement.",
                "common_mistakes": [
                  "No validated baseline.",
                  "Counting capacity release as automatic cash savings.",
                  "Failing to track whether benefits were realized."
                ],
                "quick_check": [
                  {
                    "q": "What makes a saving hard?",
                    "answer": "It affects actual spending, the P&L, or cash flow.",
                    "explanation": "Hard savings are verifiable financial improvements."
                  },
                  {
                    "q": "Why involve finance early?",
                    "answer": "To validate the baseline, benefit type, and financial assumptions.",
                    "explanation": "Early review prevents disputes and overstated claims."
                  },
                  {
                    "q": "What is a benefit tracker?",
                    "answer": "A record of planned versus realized benefits with owners and timing.",
                    "explanation": "It keeps benefit realization visible and accountable."
                  }
                ],
                "recap": [
                  "Validate baselines and benefit types with finance.",
                  "Separate hard savings, soft savings, and capacity release.",
                  "Track realization and reconcile planned versus actual benefits."
                ]
              }
            }
          ]
        },
        {
          "id": "master-2",
          "number": 2,
          "title": "Coaching and Consulting",
          "duration": "3 hours",
          "summary": "Develop belts and leaders through coaching, mentoring, statistical consulting, and training design.",
          "lessons": [
            {
              "id": "M2.1",
              "order": 1,
              "title": "Coaching Belts",
              "objective": "Use questions, observation, and feedback to improve project thinking.",
              "content": {
                "why": "Certification does not guarantee project success. Coaching helps belts apply methods, think through problems, and build confidence while protecting project quality.",
                "what": "Coaching is a structured conversation that improves performance through goals, observation, questions, feedback, and action. The GROW model uses Goal, Reality, Options, and Will. A coach asks more than tells, helps the belt reason, and reviews evidence at project gates. Coaching covers both technical method and leadership behavior. It differs from mentoring, which is broader career development, and from performance management, which evaluates the person formally.",
                "how": [
                  "Agree on coaching goals and project expectations.",
                  "Observe the work, data, and team interactions.",
                  "Use questions to test logic and assumptions.",
                  "Give specific feedback tied to evidence.",
                  "Agree on actions and follow-up dates.",
                  "Review progress at project gates.",
                  "Escalate risks when capability or support is missing."
                ],
                "where": "Use coaching for Green and Black Belts, project leaders, Lean practitioners, and improvement sponsors. Example: a coach asks a Green Belt to explain why the chosen sample supports the conclusion rather than recalculating the analysis for them.",
                "when_not": "Do not solve the project for the coachee. Do not coach without trust, time, or relevant expertise. Do not turn coaching into a surprise performance review.",
                "common_mistakes": [
                  "Telling answers instead of building reasoning.",
                  "Giving vague feedback without evidence.",
                  "Skipping follow-up and accountability."
                ],
                "quick_check": [
                  {
                    "q": "What does GROW stand for?",
                    "answer": "Goal, Reality, Options, and Will.",
                    "explanation": "It is a structured coaching conversation model."
                  },
                  {
                    "q": "How does coaching differ from mentoring?",
                    "answer": "Coaching focuses on performance and specific goals; mentoring is broader development.",
                    "explanation": "Both build capability but serve different purposes."
                  },
                  {
                    "q": "Why should a coach ask questions?",
                    "answer": "To build the coachee's independent judgment and ownership.",
                    "explanation": "Questions create learning that answers alone do not."
                  }
                ],
                "recap": [
                  "Coach with questions, evidence, and specific feedback.",
                  "Focus on both technical method and leadership.",
                  "Build capability rather than taking over the work."
                ]
              }
            },
            {
              "id": "M2.2",
              "order": 2,
              "title": "Mentoring and Capability Building",
              "objective": "Build a pipeline of belts and subject-matter experts.",
              "content": {
                "why": "A few strong belts cannot transform an organization. Capability building creates a sustainable pipeline of practitioners, leaders, and internal coaches.",
                "what": "Capability building is a system, not a course catalog. It includes a competency model, skill assessment, learning paths, certification, practice projects, coaching, communities of practice, and knowledge management. The 70-20-10 principle emphasizes learning through challenging work and relationships, supported by formal training. Mentoring provides longer-term development and career guidance. Progress should be measured through demonstrated competence, not attendance hours.",
                "how": [
                  "Define competencies for each belt and leadership role.",
                  "Assess current capability and gaps.",
                  "Design learning paths and certification requirements.",
                  "Combine training, practice projects, coaching, and mentoring.",
                  "Build communities of practice and knowledge sharing.",
                  "Evaluate demonstrated capability and project results.",
                  "Refresh the model as strategy and technology change."
                ],
                "where": "Use capability building for belt programs, Lean leaders, technical specialists, and succession planning. Example: a Green Belt candidate completes training, applies tools on a real project, receives coaching at gates, and demonstrates competence before certification.",
                "when_not": "Do not equate training hours with capability. Do not mentor without structure or expectations. Do not create dependency in which the mentor always provides the answer.",
                "common_mistakes": [
                  "One-time training with no practice.",
                  "No competency assessment or certification standard.",
                  "No sponsorship or time for development."
                ],
                "quick_check": [
                  {
                    "q": "What does 70-20-10 mean?",
                    "answer": "Most learning comes from experience and relationships, with formal training as a smaller component.",
                    "explanation": "It balances on-the-job practice, coaching, and courses."
                  },
                  {
                    "q": "How should capability be evaluated?",
                    "answer": "Through demonstrated competence and project results.",
                    "explanation": "Attendance alone does not show capability."
                  },
                  {
                    "q": "Why build communities of practice?",
                    "answer": "To share knowledge, solve problems, and sustain learning.",
                    "explanation": "Communities connect practitioners beyond formal training."
                  }
                ],
                "recap": [
                  "Build capability through a system, not isolated courses.",
                  "Combine practice, coaching, mentoring, and assessment.",
                  "Measure demonstrated competence and results."
                ]
              }
            },
            {
              "id": "M2.3",
              "order": 3,
              "title": "Statistical Consulting",
              "objective": "Diagnose analysis problems and recommend defensible methods.",
              "content": {
                "why": "Statistical advice shapes decisions, investments, and risk. A consulting statistician must frame the real problem, choose defensible methods, and communicate uncertainty clearly.",
                "what": "Statistical consulting follows a structured process: contract with the client, clarify the decision, define the estimand, assess data provenance, select a method, check assumptions, test sensitivity, interpret, and hand off. It separates statistical from practical significance and explains uncertainty in business terms. Good consulting also documents data and code, respects ethics, and recognizes when the available data cannot answer the question.",
                "how": [
                  "Clarify the decision and the question the data must answer.",
                  "Define the population, response, and comparison.",
                  "Assess data quality, sampling, and measurement.",
                  "Choose a method that matches the design.",
                  "Check assumptions and run sensitivity analyses.",
                  "Explain findings with intervals and practical impact.",
                  "Document the analysis and follow up on use."
                ],
                "where": "Use statistical consulting in project reviews, DOE, regression, MSA, capability, reliability, and predictive modeling. Example: a team asks which supplier is better. The consultant first checks whether the samples are comparable and the measurement system is adequate.",
                "when_not": "Do not accept a poorly framed question and rush to a method. Do not overfit or imply false certainty. Do not analyze data whose provenance or quality is unknown.",
                "common_mistakes": [
                  "Starting with a favorite method instead of the question.",
                  "Ignoring data provenance and measurement error.",
                  "Overloading clients with jargon instead of decision-relevant interpretation."
                ],
                "quick_check": [
                  {
                    "q": "What should a statistical consultant clarify first?",
                    "answer": "The decision and the question the data must answer.",
                    "explanation": "Method selection follows problem framing."
                  },
                  {
                    "q": "Why is data provenance important?",
                    "answer": "It determines whether the data can support the intended inference.",
                    "explanation": "Sampling and measurement quality limit conclusions."
                  },
                  {
                    "q": "What is sensitivity analysis?",
                    "answer": "Checking whether conclusions hold under reasonable alternative assumptions.",
                    "explanation": "It tests the robustness of the result."
                  }
                ],
                "recap": [
                  "Frame the decision before choosing a method.",
                  "Assess data quality and check assumptions.",
                  "Communicate uncertainty and practical impact clearly."
                ]
              }
            },
            {
              "id": "M2.4",
              "order": 4,
              "title": "Training Design",
              "objective": "Design practice-based curricula with assessment and transfer.",
              "content": {
                "why": "Training should change what people can do, not just what they have heard. Good design builds competence and transfers learning to real work.",
                "what": "Training design commonly follows ADDIE: analysis, design, development, implementation, and evaluation. Clear learning objectives describe observable performance. Adult learning favors relevance, practice, feedback, and spaced reinforcement. Evaluation can use Kirkpatrick's levels: reaction, learning, behavior, and results. Blended approaches combine instruction, simulation, coaching, and on-the-job assignments.",
                "how": [
                  "Analyze the performance gap and the audience.",
                  "Write measurable learning objectives.",
                  "Design activities, practice, and assessment.",
                  "Develop materials and pilot them.",
                  "Deliver with opportunities for application.",
                  "Evaluate learning, behavior change, and results.",
                  "Improve the design based on evidence."
                ],
                "where": "Use training design for belt curricula, software rollouts, safety programs, leadership development, and technical certification. Example: a statistics course includes a real dataset, a project assignment, and coaching rather than lectures alone.",
                "when_not": "Do not use training when the root cause is unclear expectations, missing tools, or poor process design. Do not rely on lecture-only delivery for complex skills. Do not evaluate only satisfaction scores.",
                "common_mistakes": [
                  "Content dumping without practice.",
                  "No transfer plan to the job.",
                  "Evaluating reaction but not learning or results."
                ],
                "quick_check": [
                  {
                    "q": "What does ADDIE stand for?",
                    "answer": "Analysis, Design, Development, Implementation, and Evaluation.",
                    "explanation": "It is a structured instructional design process."
                  },
                  {
                    "q": "What makes a learning objective useful?",
                    "answer": "It describes observable performance that can be assessed.",
                    "explanation": "Clear objectives guide design and evaluation."
                  },
                  {
                    "q": "What are Kirkpatrick's four levels?",
                    "answer": "Reaction, learning, behavior, and results.",
                    "explanation": "They evaluate training from immediate response to business impact."
                  }
                ],
                "recap": [
                  "Design training around performance, not content coverage.",
                  "Use practice, feedback, and transfer to the job.",
                  "Evaluate learning, behavior, and results."
                ]
              }
            }
          ]
        },
        {
          "id": "master-3",
          "number": 3,
          "title": "Enterprise Transformation",
          "duration": "4 hours",
          "summary": "Scale improvement across the enterprise with DFSS, change management, culture, balanced scorecards, and benchmarking.",
          "lessons": [
            {
              "id": "M3.1",
              "order": 1,
              "title": "Enterprise DFSS",
              "objective": "Deploy design methods across product, service, and process development.",
              "content": {
                "why": "DFSS delivers the most value when it is managed across an enterprise portfolio, not applied project by project. Enterprise DFSS connects design capability to strategy, suppliers, and launch decisions.",
                "what": "Enterprise DFSS applies design-for-Six-Sigma methods across a portfolio of new products, services, and processes. It uses standard DMADV or DFSS roadmaps, stage gates, voice of the customer, CTQ flowdown, QFD, FMEA, DOE, Monte Carlo simulation, reliability, and design-for-X. Governance balances speed, risk, and resource use. Knowledge reuse and supplier integration improve consistency and time to market.",
                "how": [
                  "Align the design portfolio with strategy and customer needs.",
                  "Establish a standard DFSS roadmap and gate criteria.",
                  "Build cross-functional design teams and capability.",
                  "Translate VOC into CTQs and design requirements.",
                  "Apply risk, experimentation, simulation, and reliability methods.",
                  "Integrate suppliers and manufacturing or service operations early.",
                  "Verify capability and capture lessons for reuse."
                ],
                "where": "Use enterprise DFSS in product development, service design, software, healthcare, and capital projects. Example: a platform team uses common CTQ and FMEA standards across product variants, reducing duplicated design work and late failures.",
                "when_not": "Do not apply the full DFSS apparatus to low-risk minor changes. Do not let gates and documentation stifle innovation. Do not treat DFSS as a tool checklist without customer and business context.",
                "common_mistakes": [
                  "Running DFSS as isolated projects with no portfolio view.",
                  "Late or weak voice-of-the-customer work.",
                  "Skipping verification and lessons reuse."
                ],
                "quick_check": [
                  {
                    "q": "What is Enterprise DFSS?",
                    "answer": "Applying DFSS across a portfolio with common governance and methods.",
                    "explanation": "It scales design capability beyond individual projects."
                  },
                  {
                    "q": "Why integrate suppliers early?",
                    "answer": "To reduce design risk, rework, and launch delays.",
                    "explanation": "Supplier capability affects design feasibility and quality."
                  },
                  {
                    "q": "What is CTQ flowdown?",
                    "answer": "Translating customer requirements into measurable design requirements.",
                    "explanation": "It connects voice of the customer to design decisions."
                  }
                ],
                "recap": [
                  "Manage DFSS as an enterprise portfolio with common standards.",
                  "Translate customer needs into CTQs and design requirements.",
                  "Verify capability and reuse lessons across projects."
                ]
              }
            },
            {
              "id": "M3.2",
              "order": 2,
              "title": "Organizational Change",
              "objective": "Use change models, stakeholder plans, and reinforcement.",
              "content": {
                "why": "Large transformations change roles, systems, and power relationships. A technically sound deployment can still fail if people do not understand, support, or know how to work in the new way.",
                "what": "Organizational change aligns leadership, communication, capability, incentives, and structure. Kotter's sequence builds urgency, a guiding coalition, a vision, communication, empowerment, short-term wins, consolidation, and anchoring. ADKAR diagnoses individual readiness, and Lewin's model describes unfreezing, changing, and refreezing. Scale requires middle-manager engagement and aligned performance systems.",
                "how": [
                  "Build a clear case for change and a compelling vision.",
                  "Form a coalition with authority and credibility.",
                  "Assess stakeholder readiness and resistance.",
                  "Communicate repeatedly through multiple channels.",
                  "Involve people and remove structural barriers.",
                  "Deliver visible short-term wins.",
                  "Anchor changes in roles, incentives, and standard work."
                ],
                "where": "Use organizational change for Lean Six Sigma deployments, ERP or technology rollouts, restructuring, mergers, and new operating models. Example: a company launches a new planning process but does not change planner incentives, so behavior reverts to old priorities.",
                "when_not": "Do not treat change as a communication plan alone. Do not ignore incentives and power. Do not declare victory after the pilot.",
                "common_mistakes": [
                  "Weak or absent executive sponsorship.",
                  "Skipping middle managers who influence daily work.",
                  "Failing to reinforce the change after launch."
                ],
                "quick_check": [
                  {
                    "q": "Why are middle managers critical in change?",
                    "answer": "They translate direction into daily work and influence adoption.",
                    "explanation": "They connect leadership intent with front-line reality."
                  },
                  {
                    "q": "What is a short-term win?",
                    "answer": "A visible, credible early result that builds momentum.",
                    "explanation": "Wins demonstrate that the change can work."
                  },
                  {
                    "q": "What does anchoring a change mean?",
                    "answer": "Embedding it in roles, incentives, processes, and culture.",
                    "explanation": "Anchoring prevents reversion to old ways."
                  }
                ],
                "recap": [
                  "Change requires leadership, engagement, capability, and reinforcement.",
                  "Build urgency, coalitions, and visible wins.",
                  "Anchor change in systems and daily routines."
                ]
              }
            },
            {
              "id": "M3.3",
              "order": 3,
              "title": "Culture Building",
              "objective": "Make improvement, respect, and data-based decisions part of daily work.",
              "content": {
                "why": "Tools and projects fade without a culture that supports problem solving, transparency, and learning. Culture determines whether improvement becomes daily behavior or a temporary program.",
                "what": "Culture is the pattern of shared beliefs, behaviors, and symbols. It is shaped by leader behavior, routines, metrics, rewards, hiring, and stories more than by slogans. A continuous-improvement culture values customers, data, respect for people, psychological safety, and learning from failure. Daily huddles, gemba walks, A3 thinking, and leader standard work make the culture visible and teachable.",
                "how": [
                  "Assess current beliefs and behaviors with evidence.",
                  "Define the few behaviors that express the desired culture.",
                  "Engage leaders to model those behaviors visibly.",
                  "Align metrics, recognition, promotion, and hiring.",
                  "Build daily routines that reinforce problem solving.",
                  "Teach and coach the behaviors through practice.",
                  "Measure progress and address inconsistencies."
                ],
                "where": "Use culture building in enterprise transformations, safety programs, quality systems, and mergers. Example: leaders ask for bad news first in reviews, publicly reward early problem identification, and stop blaming individuals for system failures.",
                "when_not": "Do not try to change culture with posters or slogans. Do not copy another organization's culture without adapting to context. Do not use culture as an excuse for avoiding structural problems.",
                "common_mistakes": [
                  "Leaders saying one thing and rewarding another.",
                  "Recognition that favors firefighting over prevention.",
                  "No daily routines to reinforce the desired behavior."
                ],
                "quick_check": [
                  {
                    "q": "What shapes culture most strongly?",
                    "answer": "Leader behavior, routines, metrics, and rewards.",
                    "explanation": "What is measured and rewarded signals what matters."
                  },
                  {
                    "q": "Why is psychological safety part of improvement culture?",
                    "answer": "People must be able to raise problems and errors without fear.",
                    "explanation": "Hidden problems cannot be solved."
                  },
                  {
                    "q": "What is leader standard work?",
                    "answer": "A documented routine of leader behaviors that reinforce the operating system.",
                    "explanation": "It makes culture visible through daily actions."
                  }
                ],
                "recap": [
                  "Culture is built through behavior, routines, and systems.",
                  "Leaders must model and reward the desired behaviors.",
                  "Use daily management to make improvement culture visible."
                ]
              }
            },
            {
              "id": "M3.4",
              "order": 4,
              "title": "Balanced Scorecard",
              "objective": "Connect financial, customer, process, and learning measures.",
              "content": {
                "why": "Financial measures report the past. A balanced scorecard adds customer, process, and capability measures that show whether strategy is being executed and whether future performance is being built.",
                "what": "The balanced scorecard uses four perspectives: financial, customer, internal process, and learning and growth. A strategy map shows cause-and-effect links between objectives. Each objective has measures, targets, and initiatives. Leading measures predict future results, while lagging measures confirm outcomes. The scorecard should be cascaded and reviewed, not used as a long list of unrelated KPIs.",
                "how": [
                  "Clarify the strategy and strategic themes.",
                  "Define objectives in each perspective.",
                  "Build a strategy map with causal links.",
                  "Select a few measures, targets, and initiatives.",
                  "Cascade scorecards to units and teams.",
                  "Review results and learn at a regular cadence.",
                  "Adjust objectives and initiatives as strategy evolves."
                ],
                "where": "Use the balanced scorecard in enterprises, public agencies, nonprofits, and multi-site operations. Example: a hospital links staff training and safety culture to process reliability, patient experience, and financial performance.",
                "when_not": "Do not turn the scorecard into a KPI dump. Do not ignore causal logic and strategy. Do not overcomplicate the measures or use only financial results.",
                "common_mistakes": [
                  "Too many measures with no strategic focus.",
                  "No link between leading and lagging indicators.",
                  "Reviewing the scorecard without making decisions."
                ],
                "quick_check": [
                  {
                    "q": "What are the four balanced scorecard perspectives?",
                    "answer": "Financial, customer, internal process, and learning and growth.",
                    "explanation": "They balance results with the drivers of future performance."
                  },
                  {
                    "q": "What is a strategy map?",
                    "answer": "A cause-and-effect diagram linking strategic objectives.",
                    "explanation": "It shows how capabilities and processes drive outcomes."
                  },
                  {
                    "q": "What is the difference between leading and lagging measures?",
                    "answer": "Leading measures predict; lagging measures confirm results.",
                    "explanation": "Both are needed to manage performance."
                  }
                ],
                "recap": [
                  "Balance financial and nonfinancial measures.",
                  "Use a strategy map to show causal logic.",
                  "Keep the scorecard focused and review it for decisions."
                ]
              }
            },
            {
              "id": "M3.5",
              "order": 5,
              "title": "Benchmarking",
              "objective": "Compare performance with best-in-class processes and adapt practices.",
              "content": {
                "why": "Benchmarking reveals performance gaps and better practices, but copying numbers without understanding context can lead to bad targets and failed imitation.",
                "what": "Benchmarking compares processes, practices, and results against internal or external references. Types include internal, competitive, functional, and generic. A disciplined study defines the process, measures the current state, selects comparable partners, collects valid data, analyzes gaps, adapts practices, implements, and reviews. Normalization and process understanding prevent apples-to-oranges comparisons.",
                "how": [
                  "Define the process, scope, and performance measures.",
                  "Establish a reliable internal baseline.",
                  "Select comparable benchmark partners.",
                  "Collect data on results and enabling practices.",
                  "Normalize and analyze the gaps.",
                  "Adapt rather than copy practices blindly.",
                  "Pilot, implement, and measure the improvement."
                ],
                "where": "Use benchmarking in manufacturing, healthcare, service operations, supply chains, and public services. Example: compare emergency-department door-to-doctor time after adjusting for patient acuity and case mix.",
                "when_not": "Do not benchmark processes that are not comparable. Do not stop at a numerical gap without understanding practices. Do not copy another organization's solution without adapting to local constraints.",
                "common_mistakes": [
                  "Comparing unnormalized metrics.",
                  "Using poor-quality or self-reported data.",
                  "Treating the site visit as the deliverable instead of implementation."
                ],
                "quick_check": [
                  {
                    "q": "What is functional benchmarking?",
                    "answer": "Comparing a similar process across different industries or organizations.",
                    "explanation": "It seeks best practices beyond direct competitors."
                  },
                  {
                    "q": "Why normalize benchmark data?",
                    "answer": "To make comparisons fair despite different scale, mix, or conditions.",
                    "explanation": "Normalization prevents misleading gaps."
                  },
                  {
                    "q": "What should happen after a benchmark study?",
                    "answer": "Adapt, pilot, implement, and measure the practice.",
                    "explanation": "Learning must turn into action."
                  }
                ],
                "recap": [
                  "Benchmark both results and enabling practices.",
                  "Ensure comparability and data quality.",
                  "Adapt and implement rather than copy blindly."
                ]
              }
            }
          ]
        },
        {
          "id": "master-4",
          "number": 4,
          "title": "Analytics and Industry 4.0",
          "duration": "2 hours",
          "summary": "Integrate modern analytics, automation, and data governance into improvement work.",
          "lessons": [
            {
              "id": "M4.1",
              "order": 1,
              "title": "Analytics and Industry 4.0",
              "objective": "Use sensors, dashboards, predictive models, and automation.",
              "content": {
                "why": "Sensors, connected systems, and large datasets create new ways to predict and control performance. Master Black Belts must connect analytics to real process problems and govern the risks.",
                "what": "Industry 4.0 includes IoT, cyber-physical systems, cloud platforms, digital twins, automation, and AI or machine learning. Analytics ranges from descriptive and diagnostic to predictive and prescriptive. A reliable data pipeline, data quality, model validation, deployment, and monitoring are required. Operational technology and information technology must converge securely. Analytics should support a defined decision, not exist as a technology showcase.",
                "how": [
                  "Define the problem, decision, and value at stake.",
                  "Assess data availability, quality, and governance.",
                  "Choose descriptive, predictive, or prescriptive analytics.",
                  "Pilot with process experts and validate the model.",
                  "Deploy with monitoring, maintenance, and security.",
                  "Measure business impact and scale what works.",
                  "Manage privacy, bias, safety, and change adoption."
                ],
                "where": "Use analytics and Industry 4.0 for predictive maintenance, vision-based inspection, demand forecasting, supply-chain optimization, and clinical risk prediction. Example: sensor data predicts equipment failure, but the maintenance process and spare-parts system must also change for the prediction to create value.",
                "when_not": "Do not use advanced analytics for a simple problem that standard tools can solve. Do not ignore poor data quality or process knowledge. Do not deploy models without monitoring and governance.",
                "common_mistakes": [
                  "Technology-first projects without a decision or value case.",
                  "Training models on biased or unreliable data.",
                  "No plan for model maintenance or operational adoption."
                ],
                "quick_check": [
                  {
                    "q": "What is predictive analytics?",
                    "answer": "Using data to estimate future outcomes or risk.",
                    "explanation": "Predictive models support decisions before events occur."
                  },
                  {
                    "q": "Why is data governance essential?",
                    "answer": "It ensures data quality, security, privacy, and appropriate use.",
                    "explanation": "Models are only as trustworthy as their data and controls."
                  },
                  {
                    "q": "What is a digital twin?",
                    "answer": "A virtual model of a physical asset or process used for monitoring and simulation.",
                    "explanation": "Digital twins support prediction, optimization, and testing."
                  }
                ],
                "recap": [
                  "Start analytics with a decision and a value case.",
                  "Ensure data quality, validation, security, and governance.",
                  "Connect models to process change and business results."
                ]
              }
            },
            {
              "id": "M4.2",
              "order": 2,
              "title": "Data Governance and Ethics",
              "objective": "Protect privacy, ensure data quality, and use analytics responsibly.",
              "content": {
                "why": "Analytics and improvement depend on data people can trust and use responsibly. Poor governance creates bad decisions, privacy breaches, biased models, and loss of credibility.",
                "what": "Data governance defines ownership, stewardship, quality standards, access, retention, and lifecycle controls. Data ethics addresses privacy, consent, fairness, transparency, accountability, and human oversight. Roles include data owners, stewards, and custodians. Regulations such as GDPR and HIPAA set legal requirements, but ethical practice goes beyond minimum compliance. Models should be explainable enough for the decision and monitored for bias and drift.",
                "how": [
                  "Inventory data and define its purpose and sensitivity.",
                  "Assign ownership, stewardship, and access responsibilities.",
                  "Set quality, retention, and metadata standards.",
                  "Conduct privacy and ethical impact assessments.",
                  "Test for bias and monitor model performance.",
                  "Document decisions and provide human review where needed.",
                  "Audit compliance and train the organization."
                ],
                "where": "Use data governance and ethics in healthcare, finance, human resources, customer analytics, and safety-critical systems. Example: a hiring model must be tested for disparate impact, explainable to decision makers, and subject to human review.",
                "when_not": "Do not treat governance as an IT-only issue. Do not collect data without a defined purpose or consent. Do not assume a model is fair because it uses neutral variables.",
                "common_mistakes": [
                  "No clear data ownership.",
                  "Collecting and retaining everything indefinitely.",
                  "Deploying opaque models without accountability."
                ],
                "quick_check": [
                  {
                    "q": "What is data stewardship?",
                    "answer": "Responsibility for data quality, meaning, and appropriate use.",
                    "explanation": "Stewards manage data on behalf of the business."
                  },
                  {
                    "q": "Why test models for bias?",
                    "answer": "To detect unfair or harmful outcomes across groups.",
                    "explanation": "Biased data or design can produce discriminatory decisions."
                  },
                  {
                    "q": "What is human oversight in analytics?",
                    "answer": "A person reviews or can override consequential model decisions.",
                    "explanation": "Oversight supports accountability and safety."
                  }
                ],
                "recap": [
                  "Govern data through ownership, quality, access, and lifecycle controls.",
                  "Apply privacy, fairness, transparency, and accountability.",
                  "Monitor models and keep humans responsible for consequential decisions."
                ]
              }
            }
          ]
        },
        {
          "id": "master-5",
          "number": 5,
          "title": "Standards and Certification",
          "duration": "2.5 hours",
          "summary": "Understand the standards and ethical expectations behind certification and deployment.",
          "lessons": [
            {
              "id": "M5.1",
              "order": 1,
              "title": "ISO 13053",
              "objective": "Explain the ISO standard for Six Sigma methods and roles.",
              "content": {
                "why": "Global organizations need a common reference for Six Sigma roles, methods, and quality. ISO 13053 provides international guidance that supports consistency and credibility.",
                "what": "ISO 13053 addresses Six Sigma fundamentals and DMAIC tools and techniques. It covers roles, competencies, project selection, deployment, process measurement, analysis, improvement, and control. The standard is guidance, not a guarantee of business results. It can be used to align training, governance, and project expectations across sites and suppliers.",
                "how": [
                  "Map current practices against the standard.",
                  "Identify gaps in roles, methods, and governance.",
                  "Align training and certification expectations.",
                  "Document the deployment approach and evidence.",
                  "Train leaders and practitioners on the standard.",
                  "Audit alignment and improve the system.",
                  "Review the standard as it evolves."
                ],
                "where": "Use ISO 13053 in multinational deployments, supplier quality programs, regulated industries, and organizations seeking a common improvement language. Example: a company aligns belt curricula and project gates across regions using the standard as a reference.",
                "when_not": "Do not pursue alignment as a paperwork exercise. Do not let the standard replace judgment or customer focus. Do not assume one implementation model fits every organization.",
                "common_mistakes": [
                  "Focusing on a certificate rather than capability.",
                  "Creating documentation without changing practice.",
                  "Misunderstanding the standard as a prescriptive recipe."
                ],
                "quick_check": [
                  {
                    "q": "What does ISO 13053 cover?",
                    "answer": "Six Sigma fundamentals, roles, DMAIC, tools, and deployment guidance.",
                    "explanation": "It provides an international reference for Six Sigma practice."
                  },
                  {
                    "q": "Is ISO 13053 a guarantee of results?",
                    "answer": "No, it is guidance for consistent practice.",
                    "explanation": "Business results depend on execution and context."
                  },
                  {
                    "q": "Why use a common standard across sites?",
                    "answer": "To align language, roles, and quality expectations.",
                    "explanation": "Consistency supports comparison and governance."
                  }
                ],
                "recap": [
                  "ISO 13053 provides international Six Sigma guidance.",
                  "Use it to align roles, methods, and deployment.",
                  "Focus on capability and results, not paperwork."
                ]
              }
            },
            {
              "id": "M5.2",
              "order": 2,
              "title": "ASQ and IASSC Standards",
              "objective": "Compare certification bodies, BoKs, and exam expectations.",
              "content": {
                "why": "Professional bodies define bodies of knowledge and certification standards. Understanding them helps organizations build credible capability and compare training options.",
                "what": "ASQ offers certifications such as Certified Six Sigma Green Belt, Black Belt, and Manager of Quality/Organizational Excellence. IASSC offers Green and Black Belt certifications with its own body of knowledge. Programs differ in eligibility, exam content, project requirements, and recertification. Certification demonstrates knowledge and, in some programs, project experience, but it does not by itself prove business impact.",
                "how": [
                  "Select the standard that fits the organization's needs.",
                  "Map the curriculum to the body of knowledge.",
                  "Assess both knowledge and practical application.",
                  "Choose credible training and proctoring.",
                  "Require real projects and evidence where appropriate.",
                  "Maintain certification and continuing development.",
                  "Evaluate whether certified practitioners deliver results."
                ],
                "where": "Use these standards for hiring, internal certification, training procurement, and career paths. Example: a company maps its Green Belt curriculum to ASQ and IASSC topics, then adds a real project and coaching requirement.",
                "when_not": "Do not treat certification as proof of project success. Do not assume standards are identical. Do not buy certification without practical assessment.",
                "common_mistakes": [
                  "Running a certification mill.",
                  "Testing only memorization.",
                  "Ignoring recertification and continuing development."
                ],
                "quick_check": [
                  {
                    "q": "What does a body of knowledge define?",
                    "answer": "The topics and competencies expected for a certification.",
                    "explanation": "It guides curriculum and exam design."
                  },
                  {
                    "q": "Why add project evidence to certification?",
                    "answer": "To confirm that knowledge can be applied in practice.",
                    "explanation": "Exams alone do not demonstrate project capability."
                  },
                  {
                    "q": "Are ASQ and IASSC certifications identical?",
                    "answer": "No, they have different requirements and bodies of knowledge.",
                    "explanation": "Organizations should compare them carefully."
                  }
                ],
                "recap": [
                  "Professional standards define knowledge and certification expectations.",
                  "Combine knowledge assessment with practical evidence.",
                  "Evaluate certification by capability and results."
                ]
              }
            },
            {
              "id": "M5.3",
              "order": 3,
              "title": "Certification and Ethics",
              "objective": "Apply truthfulness, competence, confidentiality, and conflict-of-interest rules.",
              "content": {
                "why": "Certification only creates trust when it is rigorous and ethical. Weak certification damages credibility and can spread poor practice.",
                "what": "Certification typically includes eligibility, training, examination, project evidence, and recertification. Ethics covers competence boundaries, confidentiality, conflicts of interest, data integrity, truthful claims, safety, and fair treatment. Professional codes require practitioners to work within their expertise and to avoid misrepresenting results or credentials. A certification body needs clear standards, independent assessment, and a process for complaints or violations.",
                "how": [
                  "Define eligibility, competencies, and evidence requirements.",
                  "Use valid, reliable assessments.",
                  "Verify projects and references.",
                  "Publish an ethics code and conflict-of-interest policy.",
                  "Provide recertification and continuing education.",
                  "Investigate complaints fairly.",
                  "Publish outcomes and improve the program."
                ],
                "where": "Use certification and ethics standards for internal belt programs, external credentialing, supplier qualification, and professional development. Example: a belt candidate must submit a real project with a verified baseline, analysis, control plan, and sponsor confirmation.",
                "when_not": "Do not certify on exam performance alone for roles that require application. Do not tolerate fraudulent project claims. Do not practice outside your competence.",
                "common_mistakes": [
                  "Certifying without verified project evidence.",
                  "No recertification or continuing development.",
                  "Ignoring conflicts of interest or ethical complaints."
                ],
                "quick_check": [
                  {
                    "q": "Why is project evidence important in certification?",
                    "answer": "It shows that knowledge was applied to a real problem.",
                    "explanation": "Application is different from exam performance."
                  },
                  {
                    "q": "What does working within competence mean?",
                    "answer": "Practicing only where you have the knowledge and skill to be reliable.",
                    "explanation": "It protects clients and the profession."
                  },
                  {
                    "q": "Why have recertification?",
                    "answer": "To ensure practitioners maintain current knowledge and skills.",
                    "explanation": "Methods and standards evolve over time."
                  }
                ],
                "recap": [
                  "Certification needs rigorous assessment and verified application.",
                  "Ethics protect clients, data, and professional credibility.",
                  "Require recertification and enforce standards."
                ]
              }
            }
          ]
        },
        {
          "id": "master-6",
          "number": 6,
          "title": "Leadership and Value",
          "duration": "3 hours",
          "summary": "Lead a deployment, prove value, and sustain improvement beyond individual projects.",
          "lessons": [
            {
              "id": "M6.1",
              "order": 1,
              "title": "Change Leadership",
              "objective": "Lead leaders through resistance, politics, and competing priorities.",
              "content": {
                "why": "Change leadership is not the same as project management. Leaders must create belief, model new behavior, and sustain attention when improvement becomes difficult.",
                "what": "Change leadership builds urgency, a compelling vision, a strong coalition, and emotional commitment. It communicates through actions as well as words, removes barriers, and distributes leadership across levels. Leaders tell a credible story, make symbolic decisions, and stay visible. They manage resistance with empathy and evidence rather than authority alone.",
                "how": [
                  "Create a clear case for change and a shared vision.",
                  "Build a coalition with credibility and influence.",
                  "Communicate consistently and listen actively.",
                  "Model the behaviors and decisions you expect.",
                  "Remove structural and political barriers.",
                  "Celebrate progress and learn from setbacks.",
                  "Anchor change in systems, roles, and routines."
                ],
                "where": "Use change leadership in transformations, mergers, digital rollouts, safety programs, and cultural change. Example: a plant leader attends daily huddles, asks for bad news first, and follows through on operator-raised barriers.",
                "when_not": "Do not rely on authority and compliance alone. Do not delegate the change to a project team without visible sponsorship. Do not ignore emotion and loss.",
                "common_mistakes": [
                  "Inconsistent messages between words and actions.",
                  "Leadership attention that disappears after launch.",
                  "Treating resistance as disloyalty rather than information."
                ],
                "quick_check": [
                  {
                    "q": "Why must leaders model the change?",
                    "answer": "People watch behavior more than announcements.",
                    "explanation": "Credibility depends on consistent action."
                  },
                  {
                    "q": "What is distributed leadership?",
                    "answer": "Change leadership shared across levels and functions.",
                    "explanation": "It broadens ownership beyond the executive team."
                  },
                  {
                    "q": "How should leaders treat resistance?",
                    "answer": "As information to understand and address, not simply suppress.",
                    "explanation": "Resistance often reveals real barriers or concerns."
                  }
                ],
                "recap": [
                  "Lead change through vision, credibility, and visible behavior.",
                  "Build coalitions and distribute ownership.",
                  "Sustain attention and anchor the change."
                ]
              }
            },
            {
              "id": "M6.2",
              "order": 2,
              "title": "ROI and Benefits Realization",
              "objective": "Track costs, benefits, cash flow, and value over time.",
              "content": {
                "why": "A project is not valuable because it closes on time; it is valuable when the promised benefits are measured, realized, and sustained. Benefits realization keeps improvement connected to the business case.",
                "what": "Benefits realization management identifies benefits, defines how they will be measured, assigns owners, tracks progress, and confirms results after implementation. A benefits register records the baseline, target, timing, owner, and evidence. Benefits may be hard savings, soft savings, cost avoidance, capacity release, risk reduction, or customer outcomes. Outputs are deliverables; outcomes are changes in performance; benefits are the measurable value created.",
                "how": [
                  "Define benefits and dis-benefits in the project charter.",
                  "Establish a validated baseline and measurement method.",
                  "Assign a benefit owner and a realization plan.",
                  "Review benefit forecasts at project gates.",
                  "Measure actual results after implementation.",
                  "Reconcile with finance and address shortfalls.",
                  "Sustain controls and ownership after handover."
                ],
                "where": "Use benefits realization for portfolios, transformations, technology projects, and individual DMAIC projects. Example: reduced defect costs are tracked for six months after project closure to confirm that savings reach the budget.",
                "when_not": "Do not count theoretical benefits that never reach the business. Do not stop tracking at project close. Do not double-count the same benefit across projects.",
                "common_mistakes": [
                  "No benefit owner after project closure.",
                  "No baseline or evidence trail.",
                  "Treating soft savings as guaranteed cash."
                ],
                "quick_check": [
                  {
                    "q": "What is the difference between an output and an outcome?",
                    "answer": "An output is a deliverable; an outcome is a change in performance or behavior.",
                    "explanation": "Benefits come from outcomes, not outputs alone."
                  },
                  {
                    "q": "Why assign a benefit owner?",
                    "answer": "To make someone accountable for tracking and realizing the benefit.",
                    "explanation": "Ownership prevents benefits from disappearing after launch."
                  },
                  {
                    "q": "What should a benefits register include?",
                    "answer": "Baseline, target, timing, owner, and evidence for each benefit.",
                    "explanation": "It makes benefit realization auditable and visible."
                  }
                ],
                "recap": [
                  "Manage benefits from baseline through realization.",
                  "Assign owners and track outcomes after project close.",
                  "Reconcile claimed benefits with finance and evidence."
                ]
              }
            },
            {
              "id": "M6.3",
              "order": 3,
              "title": "Capstone: Leading a Deployment",
              "objective": "Build a deployment roadmap, governance model, and measurement plan.",
              "content": {
                "why": "Leading a deployment requires integrating strategy, governance, portfolio, capability, change, and benefits. The capstone tests whether a Master Black Belt can build a system, not just run a project.",
                "what": "A deployment roadmap assesses maturity and readiness, aligns the program with strategy, defines governance and roles, selects a balanced portfolio, builds capability, standardizes methods, and manages culture and change. Deployment typically moves through mobilize, design, pilot, scale, and sustain. Success depends on sponsorship, capable people, useful measurement, and reinforcement.",
                "how": [
                  "Assess organizational readiness, maturity, and strategic priorities.",
                  "Secure a mandate and build a coalition.",
                  "Design governance, roles, standards, and portfolio criteria.",
                  "Pilot with capable teams and visible sponsorship.",
                  "Build capability through training, coaching, and practice.",
                  "Scale what works and adapt to local conditions.",
                  "Review results, sustain routines, and refresh the strategy."
                ],
                "where": "Use deployment leadership at enterprise, site, or functional level. Example: a site starts with one value stream and a small portfolio, proves results, develops internal coaches, and then expands to other value streams with common standards.",
                "when_not": "Do not launch a big-bang deployment without capability or sponsorship. Do not copy another organization's model without adaptation. Do not treat deployment as a one-time launch.",
                "common_mistakes": [
                  "No executive sponsorship or clear mandate.",
                  "Scaling before the pilot demonstrates capability.",
                  "Focusing on tools while ignoring culture, governance, and benefits."
                ],
                "quick_check": [
                  {
                    "q": "What is a sensible deployment sequence?",
                    "answer": "Mobilize, design, pilot, scale, and sustain.",
                    "explanation": "It builds evidence and capability before broad expansion."
                  },
                  {
                    "q": "Why pilot before scaling?",
                    "answer": "To test the approach and build capability with limited risk.",
                    "explanation": "Pilots provide learning before wider commitment."
                  },
                  {
                    "q": "What must sustainment include?",
                    "answer": "Ownership, routines, measurement, and reinforcement.",
                    "explanation": "Without these, results erode after the launch."
                  }
                ],
                "recap": [
                  "Lead deployment as a system, not a series of projects.",
                  "Build sponsorship, governance, capability, and a balanced portfolio.",
                  "Pilot, scale, and sustain with measurement and reinforcement."
                ]
              }
            }
          ]
        }
      ],
      "coverageChecklist": [
        {
          "topic": "Strategy deployment (Hoshin Kanri)",
          "lessons": [
            "M1.1",
            "M1.2"
          ]
        },
        {
          "topic": "Program governance",
          "lessons": [
            "M1.3"
          ]
        },
        {
          "topic": "Project portfolio selection",
          "lessons": [
            "M1.4"
          ]
        },
        {
          "topic": "Financial validation",
          "lessons": [
            "M1.5"
          ]
        },
        {
          "topic": "Coaching and mentoring",
          "lessons": [
            "M2.1",
            "M2.2"
          ]
        },
        {
          "topic": "Statistical consulting",
          "lessons": [
            "M2.3"
          ]
        },
        {
          "topic": "Enterprise DFSS",
          "lessons": [
            "M3.1"
          ]
        },
        {
          "topic": "Organizational change",
          "lessons": [
            "M3.2"
          ]
        },
        {
          "topic": "Culture building",
          "lessons": [
            "M3.3"
          ]
        },
        {
          "topic": "Training design",
          "lessons": [
            "M2.4"
          ]
        },
        {
          "topic": "Balanced scorecard",
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
          "topic": "Analytics and Industry 4.0 integration",
          "lessons": [
            "M4.1"
          ]
        },
        {
          "topic": "Ethics",
          "lessons": [
            "M4.2",
            "M5.3"
          ]
        },
        {
          "topic": "Certification standards (ISO 13053, ASQ, IASSC)",
          "lessons": [
            "M5.1",
            "M5.2"
          ]
        }
      ],
      "project": {
        "title": "Build an Enterprise Improvement Deployment Plan",
        "brief": "Create a 12-month deployment plan for a multi-site organization: strategy map, Hoshin priorities, governance, portfolio, training pipeline, financial validation, and a balanced scorecard."
      },
      "exam": {
        "questions": 100,
        "passingScore": 80,
        "format": "Case-based multiple choice, portfolio defense, and statistical consulting scenarios."
      },
      "cheatSheet": [
        "Hoshin Kanri aligns breakthrough objectives with daily management.",
        "Hard savings affect the P&L or cash flow; soft savings are avoided or theoretical costs.",
        "Portfolio selection balances value, risk, capacity, and strategic fit.",
        "ISO 13053 describes Six Sigma methods and roles; ASQ and IASSC define BoKs and exams."
      ],
      "nextChecklist": [
        "I can link a project portfolio to strategic objectives.",
        "I can coach a Black Belt through a statistical disagreement.",
        "I can design a training and certification pathway.",
        "I can validate financial benefits without double counting."
      ]
    }
  ]
};

window.curriculumData = curriculumData;
