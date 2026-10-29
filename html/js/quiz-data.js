const quizBank = {
    white: [
        {
            q: "What does DMAIC stand for?",
            options: ["Define, Measure, Analyze, Improve, Control", "Design, Make, Assess, Implement, Check", "Determine, Map, Analyze, Improve, Confirm", "Define, Manage, Analyze, Implement, Close"],
            correct: 0,
            explanation: "DMAIC is the core Six Sigma improvement method."
        },
        {
            q: "Six Sigma was developed at which company?",
            options: ["Toyota", "Motorola", "General Electric", "Ford"],
            correct: 1,
            explanation: "Motorola developed Six Sigma in the 1980s; GE later made it famous."
        },
        {
            q: "Cost of poor quality (COPQ) includes which costs?",
            options: ["Only marketing costs", "Prevention, appraisal, internal failure, and external failure costs", "Only employee salaries", "Only raw material costs"],
            correct: 1,
            explanation: "COPQ covers prevention, appraisal, internal failure, and external failure costs."
        },
        {
            q: "A CTQ is best described as:",
            options: ["A customer complaint", "A measurable customer requirement", "A type of control chart", "A project sponsor"],
            correct: 1,
            explanation: "CTQ means critical to quality: a customer need translated into a measurable requirement."
        },
        {
            q: "Which of these is one of the 8 wastes?",
            options: ["Innovation", "Waiting", "Training", "Forecasting"],
            correct: 1,
            explanation: "Waiting is one of the 8 wastes; innovation, training, and forecasting are not."
        },
        {
            q: "Variation that is always present in a stable process is called:",
            options: ["Special cause variation", "Common cause variation", "Assignable variation", "Measurement error"],
            correct: 1,
            explanation: "Common cause variation is the natural, ongoing variation of a stable process."
        },
        {
            q: "A defect is:",
            options: ["Any customer suggestion", "Any output that does not meet a specification or requirement", "Any process step", "Any employee mistake"],
            correct: 1,
            explanation: "A defect is an output that fails to meet a requirement or specification."
        },
        {
            q: "A White Belt typically:",
            options: ["Leads complex cross-functional projects", "Supports projects with data collection and local improvements", "Certifies other belts", "Owns the project budget"],
            correct: 1,
            explanation: "White Belts support projects and apply basic tools in their own work."
        },
        {
            q: "VOC stands for:",
            options: ["Voice of the Customer", "Variation of Cost", "Value of Control", "Verification of Compliance"],
            correct: 0,
            explanation: "VOC is the voice of the customer: what customers need and value."
        },
        {
            q: "The main goal of Lean is to:",
            options: ["Increase inventory", "Reduce waste and improve flow", "Add more approvals", "Replace all statistics"],
            correct: 1,
            explanation: "Lean focuses on removing waste and improving flow from the customer's point of view."
        },
        {
            q: "Lean thinking grew primarily from which system?",
            options: ["The Ford assembly line", "The Toyota Production System", "Motorola's quality program", "ISO 9001"],
            correct: 1,
            explanation: "Lean grew from the Toyota Production System, with Taiichi Ohno as a key figure."
        },
        {
            q: "Entering the same customer data into three separate systems is an example of:",
            options: ["Waiting", "Overprocessing", "Transportation", "Inventory"],
            correct: 1,
            explanation: "Overprocessing means doing more work than the customer requires, such as redundant data entry."
        },
        {
            q: "Producing reports that nobody reads is an example of:",
            options: ["Overproduction", "Motion", "Defects", "Unused skills"],
            correct: 0,
            explanation: "Overproduction means making more output than the customer needs or can use."
        },
        {
            q: "Who is responsible for sustaining the process after an improvement project ends?",
            options: ["The sponsor", "The process owner", "The finance partner", "The White Belt"],
            correct: 1,
            explanation: "The process owner owns the process and its results after the project closes."
        },
        {
            q: "Which role typically leads a complex cross-functional project full-time?",
            options: ["White Belt", "Yellow Belt", "Green Belt", "Black Belt"],
            correct: 3,
            explanation: "Black Belts lead complex projects full-time and coach Green Belts."
        },
        {
            q: "What is the best first step when starting a DMAIC project?",
            options: ["Choose a solution", "Define the problem and goal", "Run a hypothesis test", "Buy new software"],
            correct: 1,
            explanation: "Define clarifies the problem, customer, goal, and scope before data collection or solutions."
        },
        {
            q: "A one-time machine breakdown that causes a delay is an example of:",
            options: ["Common cause variation", "Special cause variation", "Normal variation", "Measurement error"],
            correct: 1,
            explanation: "Special cause variation comes from a specific event outside the normal process pattern."
        },
        {
            q: "A CTQ tree connects a customer need to:",
            options: ["A supplier", "A measurable requirement", "A project budget", "A control chart"],
            correct: 1,
            explanation: "A CTQ tree translates a broad customer need into measurable drivers and requirements."
        },
        {
            q: "Training and design reviews are examples of which COPQ category?",
            options: ["Prevention", "Appraisal", "Internal failure", "External failure"],
            correct: 0,
            explanation: "Prevention costs are spent to stop defects before they happen."
        },
        {
            q: "A hospital tracks readmissions after patients go home. This is primarily an example of:",
            options: ["Prevention cost", "Appraisal cost", "External failure cost", "Internal failure cost"],
            correct: 2,
            explanation: "External failure costs occur after the customer receives the service."
        },
        {
            q: "In the eight wastes, unused employee ideas and skills are called:",
            options: ["Waiting", "Overproduction", "Unused talent", "Transportation"],
            correct: 2,
            explanation: "Unused talent is the waste of not using people's knowledge, skills, and ideas."
        },
        {
            q: "A good problem statement should include:",
            options: ["A preferred solution and budget", "What, where, when, and how much", "Only a goal", "Names of people to blame"],
            correct: 1,
            explanation: "A useful problem statement describes the gap with evidence: what, where, when, and magnitude."
        },
        {
            q: "Which step is necessary non-value-added work?",
            options: ["Reworking a defect", "A legally required safety inspection", "Waiting for a batch to fill", "Excess inventory"],
            correct: 1,
            explanation: "Necessary non-value-added work does not add customer value but is required; reduce it where possible."
        },
        {
            q: "What is the best action after a pilot succeeds?",
            options: ["Stop measuring", "Standardize the change and assign an owner", "Remove the control plan", "Start a new project immediately"],
            correct: 1,
            explanation: "Standardization and ownership make the improvement last."
        },
        {
            q: "Which is a sign of a healthy improvement culture?",
            options: ["No problems are ever reported", "People report problems without fear of blame", "Leaders blame staff for errors", "Teams hide near misses"],
            correct: 1,
            explanation: "Psychological safety encourages early reporting and learning from problems."
        }
    ],
    yellow: [
        {
            q: "SIPOC stands for:",
            options: ["Suppliers, Inputs, Process, Outputs, Customers", "Steps, Inputs, People, Outputs, Controls", "Suppliers, Ideas, Process, Owners, Costs", "Systems, Inputs, Process, Outputs, Checks"],
            correct: 0,
            explanation: "SIPOC provides a high-level view of a process and its boundaries."
        },
        {
            q: "The Pareto principle is often summarized as:",
            options: ["50/50 rule", "80/20 rule", "90/10 rule", "70/30 rule"],
            correct: 1,
            explanation: "Roughly 80% of effects come from about 20% of causes."
        },
        {
            q: "A fishbone diagram is used to:",
            options: ["Calculate capability", "Brainstorm possible causes of a problem", "Build a control chart", "Write an SOP"],
            correct: 1,
            explanation: "The fishbone (Ishikawa) diagram organizes possible causes into categories."
        },
        {
            q: "The main purpose of 5 Whys is to:",
            options: ["Assign blame", "Find an actionable root cause", "Count defects", "Set specifications"],
            correct: 1,
            explanation: "5 Whys asks why repeatedly to move from symptoms to root causes."
        },
        {
            q: "The first step of 5S is:",
            options: ["Shine", "Sort", "Standardize", "Sustain"],
            correct: 1,
            explanation: "5S begins with Sort: remove what is not needed."
        },
        {
            q: "A check sheet is used to:",
            options: ["Forecast demand", "Record data in a standard, repeatable way", "Replace a control chart", "Calculate ROI"],
            correct: 1,
            explanation: "A check sheet is a simple form for consistent data collection."
        },
        {
            q: "A process map should show:",
            options: ["Only the final output", "Steps, decisions, handoffs, and delays", "Only employee names", "Only financial data"],
            correct: 1,
            explanation: "A good process map shows how work actually flows, including handoffs and decision points."
        },
        {
            q: "A project charter should include:",
            options: ["Problem, goal, scope, team, and timeline", "Only a budget", "Only a list of employees", "Only the final solution"],
            correct: 0,
            explanation: "The charter defines the project boundary, purpose, and accountability."
        },
        {
            q: "During brainstorming, the best first rule is:",
            options: ["Judge every idea immediately", "Defer judgment and generate many ideas", "Only accept manager ideas", "Limit the team to two ideas"],
            correct: 1,
            explanation: "Deferring judgment increases idea generation before evaluation."
        },
        {
            q: "Basic Lean thinking focuses on:",
            options: ["Adding approvals", "Value, flow, pull, and perfection", "Increasing batch size", "Maximizing inventory"],
            correct: 1,
            explanation: "Lean thinking connects value, flow, pull, and continuous improvement."
        },
        {
            q: "What best defines a process?",
            options: ["A single task done by one person", "A set of steps that turns inputs into outputs for a customer", "A department org chart", "A list of employee goals"],
            correct: 1,
            explanation: "A process transforms inputs into outputs for a customer."
        },
        {
            q: "A transfer of work from one team to another is called:",
            options: ["A bottleneck", "A handoff", "A specification", "A control limit"],
            correct: 1,
            explanation: "Handoffs are common points where delays and information loss occur."
        },
        {
            q: "In a SIPOC diagram, who receives the process outputs?",
            options: ["Suppliers", "Inputs", "Customers", "Process owners"],
            correct: 2,
            explanation: "Customers receive the outputs; they can be internal or external."
        },
        {
            q: "How many high-level steps should a SIPOC usually show?",
            options: ["One or two", "Four to seven", "Ten to fifteen", "Twenty or more"],
            correct: 1,
            explanation: "SIPOC stays at a high level, usually with four to seven process steps."
        },
        {
            q: "On a flowchart, what does a diamond represent?",
            options: ["Start or end", "Process step", "Decision point", "Delay"],
            correct: 2,
            explanation: "A diamond shows where the process branches based on a condition."
        },
        {
            q: "Why are swimlanes used on a process map?",
            options: ["To show who performs each step and expose handoffs", "To calculate process capability", "To list customer complaints", "To set specification limits"],
            correct: 0,
            explanation: "Swimlanes organize steps by role or department and make handoffs visible."
        },
        {
            q: "Which DMAIC phase establishes the baseline?",
            options: ["Define", "Measure", "Analyze", "Improve"],
            correct: 1,
            explanation: "Measure defines the metric and collects baseline data."
        },
        {
            q: "What is a DMAIC gate review?",
            options: ["A checkpoint to decide whether the phase is complete and the project should proceed", "A financial audit", "A customer survey", "A control chart rule"],
            correct: 0,
            explanation: "Gate reviews prevent weak work from moving to the next phase."
        },
        {
            q: "A good problem statement includes:",
            options: ["A preferred solution", "What, where, when, and how much", "Only a goal", "The names of people to blame"],
            correct: 1,
            explanation: "A problem statement describes the gap with evidence, not a cause or solution."
        },
        {
            q: "Why does a charter define out-of-scope work?",
            options: ["To increase the budget", "To prevent scope creep and keep the team focused", "To avoid measuring results", "To replace the process owner"],
            correct: 1,
            explanation: "Explicit boundaries help the team say no to unrelated work."
        },
        {
            q: "Which of these is continuous data?",
            options: ["Defect type", "Department name", "Time to resolve a ticket", "Pass or fail"],
            correct: 2,
            explanation: "Time is measured on a continuous scale."
        },
        {
            q: "Satisfaction recorded as poor, fair, or good is:",
            options: ["Continuous data", "Ordinal categorical data", "A histogram", "A defect rate"],
            correct: 1,
            explanation: "The categories have an order, so they are ordinal."
        },
        {
            q: "What is the main purpose of a check sheet?",
            options: ["To record data consistently in real time", "To calculate capability", "To replace a process map", "To forecast demand"],
            correct: 0,
            explanation: "A standard check sheet reduces variation and errors in data collection."
        },
        {
            q: "A check sheet has 30% of entries in 'other.' What does this usually mean?",
            options: ["The process is perfect", "Categories need review or refinement", "The data are continuous", "The sample is too large"],
            correct: 1,
            explanation: "A large 'other' category usually means categories are missing or unclear."
        },
        {
            q: "Which chart is best for showing a trend over time?",
            options: ["Histogram", "Run chart", "Bar chart", "Pareto chart"],
            correct: 1,
            explanation: "Run charts plot data in time order with a center line."
        },
        {
            q: "Which chart is best for showing the distribution of continuous data?",
            options: ["Histogram", "Run chart", "Pareto chart", "Swimlane map"],
            correct: 0,
            explanation: "Histograms group continuous values into bins."
        },
        {
            q: "A Pareto chart combines:",
            options: ["Sorted bars and a cumulative percentage line", "Two histograms", "A run chart and a fishbone", "A pie chart and a control limit"],
            correct: 0,
            explanation: "The bars show frequency and the line shows cumulative contribution."
        },
        {
            q: "A low-frequency defect causes serious harm. What should the team do?",
            options: ["Ignore it because Pareto focuses on frequency", "Treat it as a priority because severity and risk also matter", "Move it to 'other'", "Average it with common defects"],
            correct: 1,
            explanation: "Pareto prioritizes frequency, but severity and safety can outweigh frequency."
        },
        {
            q: "What goes at the head of a fishbone diagram?",
            options: ["The effect or problem being studied", "The chosen solution", "The project budget", "The process owner"],
            correct: 0,
            explanation: "The head states the problem; the bones hold possible causes."
        },
        {
            q: "Does a fishbone diagram prove the root cause?",
            options: ["Yes, if all 6Ms are used", "Yes, if the team agrees", "No, possible causes must be validated with data", "No, because it only shows solutions"],
            correct: 2,
            explanation: "Fishbone is a brainstorming and organizing tool, not proof of cause."
        },
        {
            q: "What is the goal of 5 Whys?",
            options: ["To ask exactly five questions", "To reach a verified, actionable root cause", "To assign blame", "To calculate DPMO"],
            correct: 1,
            explanation: "Five is a guide; the real test is whether the cause is actionable and verified."
        },
        {
            q: "Why should a team avoid stopping at 'human error' in 5 Whys?",
            options: ["It is always the true root cause", "It rarely explains the process conditions that allowed the error", "It takes too many questions", "It is not allowed in DMAIC"],
            correct: 1,
            explanation: "Ask what in the process made the error possible or hard to detect."
        },
        {
            q: "What is the correct order of 5S?",
            options: ["Sort, Set in order, Shine, Standardize, Sustain", "Shine, Sort, Sustain, Standardize, Set in order", "Set in order, Sort, Shine, Sustain, Standardize", "Standardize, Sort, Shine, Set in order, Sustain"],
            correct: 0,
            explanation: "5S starts with Sort and ends with Sustain."
        },
        {
            q: "What does Shine include besides cleaning?",
            options: ["Ordering new supplies", "Inspecting for abnormalities", "Writing the project charter", "Calculating ROI"],
            correct: 1,
            explanation: "Cleaning is also a chance to detect wear, leaks, and missing items."
        },
        {
            q: "What are the five Lean principles?",
            options: ["Define, Measure, Analyze, Improve, Control", "Value, value stream, flow, pull, perfection", "Sort, Set, Shine, Standardize, Sustain", "Plan, Do, Check, Act, Sustain"],
            correct: 1,
            explanation: "Lean thinking connects value, value stream, flow, pull, and perfection."
        },
        {
            q: "In Lean, pull means:",
            options: ["Pushing work to the next step as fast as possible", "Triggering work based on customer demand", "Maximizing inventory", "Adding approvals"],
            correct: 1,
            explanation: "Pull reduces overproduction and excess work in progress."
        },
        {
            q: "What is the first rule of brainstorming?",
            options: ["Criticize ideas immediately", "Generate ideas without judging them", "Only the manager speaks", "Limit the team to three ideas"],
            correct: 1,
            explanation: "Early criticism reduces the number and variety of ideas."
        },
        {
            q: "Why use silent brainstorming?",
            options: ["To reduce domination and include quieter team members", "To slow the meeting down", "To avoid documenting ideas", "To make the facilitator decide"],
            correct: 0,
            explanation: "Writing ideas first creates a more balanced session."
        },
        {
            q: "Why does a team need a decision rule?",
            options: ["To clarify how decisions will be made and prevent stalls", "To replace the project charter", "To avoid measuring results", "To increase the number of meetings"],
            correct: 0,
            explanation: "A decision rule tells the team whether to use consensus, consent, or leader decision."
        },
        {
            q: "What should every action item have?",
            options: ["An owner and a due date", "A budget and a sponsor", "A control chart", "A fishbone diagram"],
            correct: 0,
            explanation: "Actions without ownership and dates usually do not get done."
        }
    ],
    green: [
        {
            q: "A Gage R&R study estimates:",
            options: ["Process capability", "Repeatability and reproducibility of a measurement system", "Customer demand", "Project ROI"],
            correct: 1,
            explanation: "Gage R&R separates equipment variation (repeatability) from appraiser variation (reproducibility)."
        },
        {
            q: "%GRR below 10% is generally considered:",
            options: ["Unacceptable", "Acceptable", "A special cause", "A capability index"],
            correct: 1,
            explanation: "Below 10% is generally acceptable; 10-30% may be conditionally acceptable."
        },
        {
            q: "Cpk is calculated as:",
            options: ["(USL - LSL) / 6 sigma", "min((USL - mean)/3 sigma, (mean - LSL)/3 sigma)", "DPMO / 1,000,000", "Mean / standard deviation"],
            correct: 1,
            explanation: "Cpk uses the distance from the mean to the nearest specification limit."
        },
        {
            q: "DPMO equals:",
            options: ["Defects / units", "Defects / (units x opportunities) x 1,000,000", "Units / defects", "Sigma / 6"],
            correct: 1,
            explanation: "DPMO is defects per million opportunities."
        },
        {
            q: "A p-value below alpha means:",
            options: ["Accept the null hypothesis", "Reject the null hypothesis", "Prove the alternative is true", "The data are invalid"],
            correct: 1,
            explanation: "When p < alpha, the result is statistically significant, so reject the null hypothesis."
        },
        {
            q: "A Type I error is:",
            options: ["Failing to reject a false null hypothesis", "Rejecting a true null hypothesis", "A measurement error", "A sampling error"],
            correct: 1,
            explanation: "Type I error is a false positive: rejecting a true null hypothesis."
        },
        {
            q: "ANOVA is used to compare:",
            options: ["Two proportions", "Means of three or more groups", "Two standard deviations", "One data point"],
            correct: 1,
            explanation: "ANOVA compares means across three or more groups."
        },
        {
            q: "A correlation coefficient ranges from:",
            options: ["0 to 1", "-1 to 1", "-100 to 100", "0 to 100"],
            correct: 1,
            explanation: "Correlation ranges from -1 (perfect negative) to +1 (perfect positive)."
        },
        {
            q: "A control chart is designed to detect:",
            options: ["Customer complaints", "Special cause variation", "Project scope changes", "Employee turnover"],
            correct: 1,
            explanation: "Control charts distinguish common cause variation from special cause signals."
        },
        {
            q: "Poka-yoke means:",
            options: ["Mistake-proofing", "Cost cutting", "Random sampling", "Design of experiments"],
            correct: 0,
            explanation: "Poka-yoke prevents errors or makes them immediately visible."
        },
        {
            q: "Which set of items belongs in a project charter?",
            options: ["Problem, goal, scope, team, and timeline", "Only the final solution", "Only a list of defects", "Only the control chart"],
            correct: 0,
            explanation: "A charter defines the problem, goal, scope, team, metric, and milestones."
        },
        {
            q: "A well-written problem statement should avoid:",
            options: ["A baseline measure", "Naming a cause or preferred solution", "The location of the problem", "The size of the gap"],
            correct: 1,
            explanation: "The problem statement describes the gap; causes are investigated later."
        },
        {
            q: "A stakeholder with high influence and high interest should be:",
            options: ["Monitored with minimal effort", "Managed closely and involved in decisions", "Kept satisfied with occasional updates", "Ignored unless they complain"],
            correct: 1,
            explanation: "High-influence, high-interest stakeholders can strongly affect the project and care about the outcome."
        },
        {
            q: "What is the main purpose of stakeholder mapping?",
            options: ["To calculate project ROI", "To plan engagement based on influence and interest", "To replace the project charter", "To select the statistical test"],
            correct: 1,
            explanation: "Stakeholder mapping helps the team plan who to engage and how often."
        },
        {
            q: "A critical-to-quality requirement should be:",
            options: ["A vague customer wish", "Measurable and linked to a customer need", "A preferred solution", "A control chart rule"],
            correct: 1,
            explanation: "A CTQ translates a customer need into a measurable requirement."
        },
        {
            q: "What is the difference between specification limits and control limits?",
            options: ["They are the same thing", "Specifications come from requirements; control limits come from process data", "Control limits come from customers; specifications come from operators", "Specifications only apply to attribute data"],
            correct: 1,
            explanation: "Specifications define acceptable performance; control limits describe natural process variation."
        },
        {
            q: "An operational definition describes:",
            options: ["The project budget", "Exactly how a metric is measured and counted", "The team meeting schedule", "The final solution"],
            correct: 1,
            explanation: "Operational definitions ensure different people measure the same thing the same way."
        },
        {
            q: "When is it appropriate to use existing data instead of collecting new data?",
            options: ["Whenever the data are easy to find", "When the data are reliable, relevant, and sufficient", "Only when the sample is larger than 1,000", "Never; new data are always required"],
            correct: 1,
            explanation: "Existing data should be used when they can answer the question reliably."
        },
        {
            q: "What is the main benefit of random sampling?",
            options: ["It guarantees a perfect sample", "It reduces selection bias", "It eliminates measurement error", "It removes the need for a sample size calculation"],
            correct: 1,
            explanation: "Random sampling gives every unit an equal chance of selection."
        },
        {
            q: "Stratified sampling is most useful when:",
            options: ["The population contains distinct groups that must be represented", "Every unit is identical", "The sample size is one", "The data are purely categorical"],
            correct: 0,
            explanation: "Stratified sampling ensures important groups are represented."
        },
        {
            q: "Which measure of center is most robust to outliers?",
            options: ["Mean", "Median", "Range", "Standard deviation"],
            correct: 1,
            explanation: "The median depends on position, not the size of extreme values."
        },
        {
            q: "Standard deviation describes:",
            options: ["The most frequent value", "The typical spread of data around the mean", "The largest value", "The number of defects"],
            correct: 1,
            explanation: "A larger standard deviation means more variation around the mean."
        },
        {
            q: "In a normal distribution, about what percentage of values lies within two standard deviations of the mean?",
            options: ["50%", "68%", "95%", "99.7%"],
            correct: 2,
            explanation: "The empirical rule gives approximately 68%, 95%, and 99.7% for one, two, and three standard deviations."
        },
        {
            q: "How is a z-score calculated?",
            options: ["(x - mean) / standard deviation", "mean / standard deviation", "(x + mean) / range", "standard deviation / mean"],
            correct: 0,
            explanation: "A z-score expresses how many standard deviations a value lies from the mean."
        },
        {
            q: "Five defects, 500 units, and four opportunities per unit give what DPMO?",
            options: ["250", "1,000", "2,500", "4,000"],
            correct: 2,
            explanation: "5 / (500 x 4) = 0.0025, which is 2,500 defects per million opportunities."
        },
        {
            q: "The 1.5-sigma shift used in many sigma-level calculations accounts for:",
            options: ["Measurement error", "Long-term process drift", "Sample size", "Specification width"],
            correct: 1,
            explanation: "The shift is a convention for long-term process drift."
        },
        {
            q: "What is the main difference between Cp and Cpk?",
            options: ["Cp accounts for centering; Cpk does not", "Cp measures potential spread; Cpk accounts for centering", "Cpk is always larger than Cp", "Cp is used only for attribute data"],
            correct: 1,
            explanation: "Cp describes potential capability; Cpk reflects actual centering."
        },
        {
            q: "A process with Cpk of 0.8 is generally:",
            options: ["Highly capable", "Marginally capable", "Not capable", "Perfectly centered"],
            correct: 2,
            explanation: "A Cpk below 1.0 indicates the process is not capable."
        },
        {
            q: "Which graph best shows the distribution of continuous data?",
            options: ["Histogram", "Pareto chart", "Swimlane map", "Run chart"],
            correct: 0,
            explanation: "Histograms group continuous values into bins and show shape and spread."
        },
        {
            q: "Which graph is best for comparing distributions across several groups?",
            options: ["Box plot", "Pie chart", "Scatter plot", "Control chart"],
            correct: 0,
            explanation: "Box plots compare median, quartiles, and outliers across groups."
        },
        {
            q: "What does stratification do in root cause analysis?",
            options: ["It splits data into groups to see where the problem concentrates", "It removes all variation", "It proves causation", "It replaces the need for data"],
            correct: 0,
            explanation: "Stratification by shift, product, or region often narrows the cause quickly."
        },
        {
            q: "How should a suspected root cause be confirmed?",
            options: ["By team vote", "With data, a pilot, or a designed comparison", "By the sponsor's opinion", "By choosing the most expensive solution"],
            correct: 1,
            explanation: "A plausible cause must be tested with evidence."
        },
        {
            q: "How is the risk priority number in FMEA calculated?",
            options: ["Severity + occurrence + detection", "Severity x occurrence x detection", "Severity / occurrence / detection", "Occurrence x detection only"],
            correct: 1,
            explanation: "RPN ranges from 1 to 1,000 because each factor is scored from 1 to 10."
        },
        {
            q: "A failure mode has low RPN but severity 10. What should the team do?",
            options: ["Ignore it because the RPN is low", "Act because high severity can outweigh frequency", "Move it to the 'other' category", "Average it with other failure modes"],
            correct: 1,
            explanation: "High severity can require action even when the RPN is low."
        },
        {
            q: "A correlation coefficient of -0.8 indicates:",
            options: ["A weak positive relationship", "A strong negative linear relationship", "No relationship", "A causal relationship"],
            correct: 1,
            explanation: "As one variable increases, the other tends to decrease."
        },
        {
            q: "Which statement about correlation is correct?",
            options: ["Correlation proves causation", "Correlation shows association, not causation", "Correlation only applies to categorical data", "A correlation of zero proves no relationship of any kind"],
            correct: 1,
            explanation: "Confounding, reverse causation, or chance can create correlation."
        },
        {
            q: "In simple regression, the slope represents:",
            options: ["The predicted change in the response for a one-unit increase in the predictor", "The total variation in the response", "The probability that the model is true", "The number of groups"],
            correct: 0,
            explanation: "The slope estimates the strength and direction of the linear relationship."
        },
        {
            q: "R-squared measures:",
            options: ["The slope of the line", "The proportion of response variation explained by the model", "The p-value", "The sample size"],
            correct: 1,
            explanation: "R-squared ranges from 0 to 1 and does not by itself prove a good model."
        },
        {
            q: "A large F-statistic in ANOVA suggests:",
            options: ["Between-group variation is large relative to within-group variation", "All group means are identical", "The sample size is too small", "The response is categorical"],
            correct: 0,
            explanation: "A large F suggests the group means may differ."
        },
        {
            q: "After a significant one-way ANOVA, what should the team do?",
            options: ["Stop because the analysis is complete", "Run a post-hoc test to identify which groups differ", "Switch to a pie chart", "Recalculate the control limits"],
            correct: 1,
            explanation: "ANOVA alone does not say which group is different."
        },
        {
            q: "What does an impact-effort matrix help a team do?",
            options: ["Compare solutions by expected impact and implementation effort", "Calculate DPMO", "Design an experiment", "Write an SOP"],
            correct: 0,
            explanation: "It highlights quick wins and flags high-effort, low-impact options."
        },
        {
            q: "Why should a solution be linked to the verified root cause?",
            options: ["To increase the chance the fix removes the problem", "To make the project more expensive", "To avoid measuring results", "To replace the control plan"],
            correct: 0,
            explanation: "A solution that does not address the cause may only treat symptoms."
        },
        {
            q: "Why does a pilot need a baseline?",
            options: ["To compare pilot performance with current performance", "To increase the sample size", "To select the team", "To write the charter"],
            correct: 0,
            explanation: "Without a baseline, the team cannot tell whether the change worked."
        },
        {
            q: "What is the purpose of a rollback plan in a pilot?",
            options: ["To return to the old method if the pilot fails or causes harm", "To calculate capability", "To select a control chart", "To replace the baseline"],
            correct: 0,
            explanation: "A rollback plan limits risk during testing."
        },
        {
            q: "What is the difference between prevention and detection in poka-yoke?",
            options: ["Prevention makes an error impossible or difficult; detection catches it immediately", "Detection prevents errors; prevention finds them later", "They are identical", "Prevention applies only to software"],
            correct: 0,
            explanation: "Prevention is generally stronger because the error never reaches the customer."
        },
        {
            q: "Why is poka-yoke generally more reliable than a reminder?",
            options: ["It changes the process so the error is blocked or caught", "It relies on people remembering", "It increases the number of approvals", "It eliminates the need for training"],
            correct: 0,
            explanation: "Well-designed mistake-proofing is built into the work."
        },
        {
            q: "How is takt time calculated?",
            options: ["Available work time divided by customer demand", "Customer demand divided by available time", "Total defects divided by units", "Setup time divided by batch size"],
            correct: 0,
            explanation: "Takt time sets the pace the process needs to meet customer demand."
        },
        {
            q: "In Lean, pull means:",
            options: ["Work is triggered by downstream demand", "Work is pushed as early as possible", "Inventory is maximized", "Approvals are added"],
            correct: 0,
            explanation: "Pull reduces overproduction and excess work in progress."
        },
        {
            q: "In DOE, a factor is:",
            options: ["An input variable deliberately changed in the experiment", "The measured output", "A random error", "The sample size"],
            correct: 0,
            explanation: "Factors are set at different levels to see their effect on the response."
        },
        {
            q: "Why randomize the run order in an experiment?",
            options: ["To protect against lurking variables", "To make the experiment longer", "To eliminate the need for replicates", "To guarantee a significant result"],
            correct: 0,
            explanation: "Randomization spreads uncontrolled effects across the experiment."
        },
        {
            q: "Which control chart is used for individual measurements over time?",
            options: ["I-MR", "p chart", "np chart", "X-bar and R with subgroups of five"],
            correct: 0,
            explanation: "I-MR charts track individual values and the moving range."
        },
        {
            q: "Which chart is used for the proportion defective when sample size varies?",
            options: ["p chart", "np chart", "c chart", "I-MR chart"],
            correct: 0,
            explanation: "p charts allow the sample size to vary."
        },
        {
            q: "What should a control plan reaction plan include?",
            options: ["What to check, whom to notify, containment, and corrective action", "Only the name of the sponsor", "Only the specification limit", "Only a graph"],
            correct: 0,
            explanation: "A specific reaction plan makes monitoring actionable."
        },
        {
            q: "Why does a control plan need a named owner?",
            options: ["Someone must be accountable for monitoring and responding", "To increase the project budget", "To replace the process owner", "To avoid training"],
            correct: 0,
            explanation: "Without ownership, signals are often ignored."
        },
        {
            q: "What makes an SOP usable?",
            options: ["Clear steps, visuals, roles, exceptions, and access at the point of use", "A long narrative with no visuals", "Only a list of signatures", "A document stored away from the work"],
            correct: 0,
            explanation: "A usable SOP supports the real work rather than gathering dust."
        },
        {
            q: "Is standard work permanent?",
            options: ["No; it is the current best method and can be improved through change control", "Yes; it must never change", "Only if the sponsor approves every step", "Only for manufacturing"],
            correct: 0,
            explanation: "Standard work is the current best method, not a frozen rule."
        },
        {
            q: "What is a RAID log used for in project management?",
            options: ["Tracking risks, assumptions, issues, and dependencies", "Calculating DPMO", "Selecting a control chart", "Writing an SOP"],
            correct: 0,
            explanation: "RAID keeps project threats and constraints visible."
        },
        {
            q: "What is the critical path in a project schedule?",
            options: ["The longest sequence of dependent tasks that determines project duration", "The shortest task in the project", "The list of all stakeholders", "The project budget"],
            correct: 0,
            explanation: "Delay on the critical path delays the whole project."
        },
        {
            q: "Which tool is generally stronger for DOE and capability analysis?",
            options: ["Minitab", "Notepad", "PowerPoint", "A calculator"],
            correct: 0,
            explanation: "Minitab has dedicated menus for DOE, capability, MSA, and control charts."
        },
        {
            q: "Why document the steps of a statistical analysis?",
            options: ["So the work can be repeated, reviewed, and defended", "To make the file larger", "To avoid checking assumptions", "To replace the project charter"],
            correct: 0,
            explanation: "Reproducibility is essential for trust and audit."
        }
    ],
    black: [
        {
            q: "The Central Limit Theorem says that:",
            options: ["All data are normal", "Sample means tend toward normality as sample size grows", "Large samples are always biased", "Variation disappears with large samples"],
            correct: 1,
            explanation: "For sufficiently large samples, the sampling distribution of the mean is approximately normal."
        },
        {
            q: "Statistical power is:",
            options: ["The probability of rejecting a true null", "The probability of detecting a true effect", "The probability of a Type I error", "The sample mean"],
            correct: 1,
            explanation: "Power is 1 - beta, the chance of finding an effect that is really there."
        },
        {
            q: "A non-parametric test is most appropriate when:",
            options: ["Data are perfectly normal with equal variances", "Distributional assumptions are not met", "The sample is enormous", "You want to avoid all assumptions"],
            correct: 1,
            explanation: "Non-parametric tests are useful when normality or other assumptions are questionable."
        },
        {
            q: "Logistic regression is used when the response is:",
            options: ["Continuous", "Binary (yes/no)", "A count", "Always normal"],
            correct: 1,
            explanation: "Logistic regression models the probability of a binary outcome."
        },
        {
            q: "R-squared measures:",
            options: ["The slope of the line", "The proportion of variation explained by the model", "The p-value", "The sample size"],
            correct: 1,
            explanation: "R-squared is the fraction of response variation explained by the predictors."
        },
        {
            q: "Multicollinearity means:",
            options: ["The response is binary", "Predictors are highly correlated with each other", "The residuals are normal", "The sample is too large"],
            correct: 1,
            explanation: "Multicollinearity makes coefficient estimates unstable and hard to interpret."
        },
        {
            q: "Fractional factorial designs are used to:",
            options: ["Screen many factors with fewer runs", "Eliminate all interactions", "Avoid randomization", "Replace capability analysis"],
            correct: 0,
            explanation: "Fractional factorials reduce runs when many factors are candidates."
        },
        {
            q: "Response surface methods are used to:",
            options: ["Find optimum factor settings", "Test for normality only", "Build control plans", "Calculate COPQ"],
            correct: 0,
            explanation: "RSM models curvature and helps locate optimal settings."
        },
        {
            q: "An EWMA chart is especially useful for:",
            options: ["Detecting small shifts", "Only attribute data", "Designing experiments", "Calculating sample size"],
            correct: 0,
            explanation: "EWMA weights recent data more heavily and detects small process shifts."
        },
        {
            q: "For non-normal capability analysis, a good approach is to:",
            options: ["Ignore the distribution", "Transform the data or fit an appropriate distribution", "Use only the mean", "Double the specification limits"],
            correct: 1,
            explanation: "Transform or fit a suitable distribution before estimating capability."
        }
,
        {
            q: "Which distribution models the number of successes in a fixed number of independent trials?",
            options: ["Binomial","Normal","Exponential","Weibull"],
            correct: 0,
            explanation: "The binomial distribution has a fixed number of trials with two outcomes and a constant success probability."
        },
        {
            q: "Which distribution is continuous, symmetric, and defined by its mean and standard deviation?",
            options: ["Normal","Poisson","Binomial","Exponential"],
            correct: 0,
            explanation: "The normal distribution is the classic continuous, symmetric distribution."
        },
        {
            q: "A Weibull distribution is especially useful for:",
            options: ["Time-to-failure and reliability data","Pass or fail counts","Defects per unit","Survey Likert scores only"],
            correct: 0,
            explanation: "The Weibull shape and scale parameters make it flexible for reliability and life data."
        },
        {
            q: "The standard error of the sample mean is:",
            options: ["Sigma divided by the square root of n","Sigma times n","The sample mean","The range"],
            correct: 0,
            explanation: "The standard error of the mean is the population standard deviation divided by the square root of the sample size."
        },
        {
            q: "As sample size increases, the standard error of the mean:",
            options: ["Decreases","Increases","Stays exactly the same","Becomes negative"],
            correct: 0,
            explanation: "The standard error shrinks in proportion to the square root of n."
        },
        {
            q: "The Central Limit Theorem is most useful because it:",
            options: ["Describes the sampling distribution of the mean for large samples","Makes raw data normal","Eliminates the need for sampling","Guarantees no outliers"],
            correct: 0,
            explanation: "It supports normal-based inference about means when the sample is sufficiently large."
        },
        {
            q: "A 95% confidence interval means that:",
            options: ["About 95% of intervals from repeated samples would contain the true parameter","There is a 95% chance the parameter is in this specific interval","95% of the data lie in the interval","The process is 95% capable"],
            correct: 0,
            explanation: "The confidence is in the procedure across repeated sampling, not in one realized interval."
        },
        {
            q: "Which change makes a confidence interval wider?",
            options: ["Increasing the confidence level","Increasing the sample size","Reducing variability","Reducing the confidence level"],
            correct: 0,
            explanation: "A higher confidence level requires a larger critical value and therefore a wider interval."
        },
        {
            q: "When the population standard deviation is unknown, a confidence interval for a mean uses:",
            options: ["The t distribution","The binomial distribution","The Poisson distribution","No critical value"],
            correct: 0,
            explanation: "The t distribution accounts for estimating the standard deviation from the sample."
        },
        {
            q: "Statistical power is the probability of:",
            options: ["Detecting a true effect","Rejecting a true null hypothesis","Making a Type I error","Accepting every hypothesis"],
            correct: 0,
            explanation: "Power equals one minus beta, the chance of detecting an effect that exists."
        },
        {
            q: "Increasing sample size, all else equal, does what to power?",
            options: ["Increases it","Decreases it","Leaves it unchanged","Makes it zero"],
            correct: 0,
            explanation: "Larger samples reduce standard error and make real effects easier to detect."
        },
        {
            q: "Alpha is the probability of:",
            options: ["A Type I error","A Type II error","Detecting a true effect","Accepting the alternative"],
            correct: 0,
            explanation: "Alpha is the false-positive rate for rejecting a true null hypothesis."
        },
        {
            q: "Which test compares means across three or more independent groups?",
            options: ["One-way ANOVA","Paired t-test","McNemar test","Chi-square goodness of fit"],
            correct: 0,
            explanation: "ANOVA tests whether at least one group mean differs while controlling Type I error."
        },
        {
            q: "Which test is appropriate for before-and-after measurements on the same units?",
            options: ["Paired t-test","Two-sample t-test","Chi-square independence","One-way ANOVA"],
            correct: 0,
            explanation: "The paired t-test accounts for correlation within each unit."
        },
        {
            q: "Which test checks whether two categorical variables are associated?",
            options: ["Chi-square test of independence","Paired t-test","One-sample t-test","Multiple regression"],
            correct: 0,
            explanation: "The independence test compares observed and expected counts in a contingency table."
        },
        {
            q: "Welch's t-test is preferred when:",
            options: ["Two independent groups have unequal variances","The data are paired","There are three or more groups","The response is categorical"],
            correct: 0,
            explanation: "Welch's test does not assume equal population variances."
        },
        {
            q: "A major benefit of a paired t-test is that it:",
            options: ["Removes unit-to-unit variation from the comparison","Eliminates the need for data","Allows three or more groups","Works only for proportions"],
            correct: 0,
            explanation: "Analyzing within-unit differences increases precision when units vary."
        },
        {
            q: "A significant one-way ANOVA means:",
            options: ["At least one group mean differs","Every group mean differs","The largest group is best","The variances are equal"],
            correct: 0,
            explanation: "The overall test detects at least one difference; post-hoc tests identify which groups differ."
        },
        {
            q: "An interaction in two-way ANOVA means:",
            options: ["The effect of one factor depends on the level of the other","Both factors are insignificant","The residuals are normal","The sample is paired"],
            correct: 0,
            explanation: "An interaction means the factors do not act independently."
        },
        {
            q: "Which follow-up method compares group means after ANOVA while controlling error?",
            options: ["Tukey's test","McNemar's test","Kappa","Durbin-Watson"],
            correct: 0,
            explanation: "Tukey's honestly significant difference procedure adjusts for multiple comparisons."
        },
        {
            q: "Mann-Whitney is the non-parametric alternative to:",
            options: ["The two-sample t-test","One-way ANOVA","The chi-square test","Logistic regression"],
            correct: 0,
            explanation: "Mann-Whitney compares two independent groups using ranks."
        },
        {
            q: "Kruskal-Wallis is the non-parametric alternative to:",
            options: ["One-way ANOVA","Paired t-test","Chi-square independence","Multiple regression"],
            correct: 0,
            explanation: "Kruskal-Wallis compares three or more independent groups using ranks."
        },
        {
            q: "Chi-square tests generally require:",
            options: ["Expected counts of at least about five per cell, or an exact test","Normally distributed categories","Paired observations","A continuous response"],
            correct: 0,
            explanation: "Small expected counts make the chi-square approximation unreliable."
        },
        {
            q: "Which test is appropriate for paired binary before-and-after data?",
            options: ["McNemar's test","Chi-square goodness of fit","Two-sample t-test","Mann-Whitney"],
            correct: 0,
            explanation: "McNemar's test accounts for the pairing of binary responses."
        },
        {
            q: "A chi-square test of independence examines:",
            options: ["Association between two categorical variables","Difference between two means","Normality of residuals","Variance inflation"],
            correct: 0,
            explanation: "It compares observed and expected frequencies in a contingency table."
        },
        {
            q: "Kappa adjusts attribute agreement for:",
            options: ["Agreement expected by chance","Measurement units","Sample size only","Specification limits"],
            correct: 0,
            explanation: "Kappa corrects percent agreement for chance agreement."
        },
        {
            q: "Within-appraiser agreement in an attribute MSA measures:",
            options: ["Repeatability","Reproducibility","Accuracy against a standard","Linearity"],
            correct: 0,
            explanation: "The same appraiser evaluates the same parts more than once."
        },
        {
            q: "Calibration primarily establishes:",
            options: ["Traceability to a standard and instrument bias","Zero measurement uncertainty","A perfect gage R&R","The process capability"],
            correct: 0,
            explanation: "Calibration links readings to a reference and identifies bias or correction."
        },
        {
            q: "An expanded uncertainty using coverage factor two corresponds to roughly:",
            options: ["95% confidence","50% confidence","99.999% confidence","No confidence"],
            correct: 0,
            explanation: "For an approximately normal distribution, k equals two gives about 95% coverage."
        },
        {
            q: "A multiple regression coefficient represents:",
            options: ["The change in the response per unit change in a predictor, holding others constant","The total variation in the response","The correlation between residuals","The sample size"],
            correct: 0,
            explanation: "The coefficient is an adjusted effect for that predictor."
        },
        {
            q: "Adjusted R-squared is useful because it:",
            options: ["Penalizes predictors that do not improve the model enough","Always increases when predictors are added","Measures causation","Replaces residual analysis"],
            correct: 0,
            explanation: "Unlike ordinary R-squared, it adjusts for the number of predictors."
        },
        {
            q: "The overall F test in multiple regression asks whether:",
            options: ["The model as a whole explains significant variation","Every coefficient is nonzero","The residuals are independent","The sample is large enough"],
            correct: 0,
            explanation: "It tests the model overall, not each individual predictor."
        },
        {
            q: "Extrapolating a regression model is risky because:",
            options: ["The relationship may not hold outside the observed range","Regression cannot make predictions","R-squared becomes zero","Residuals disappear"],
            correct: 0,
            explanation: "Models are validated only within the range of observed data."
        },
        {
            q: "Logistic regression models:",
            options: ["The log-odds of a binary event","A continuous response with constant variance","Counts per unit only","The mean of three groups"],
            correct: 0,
            explanation: "It links predictors to the log-odds and then to a probability."
        },
        {
            q: "An odds ratio greater than one means:",
            options: ["Higher odds of the event as the predictor increases","Lower odds of the event","The event is impossible","The model has no effect"],
            correct: 0,
            explanation: "Exponentiating a positive coefficient gives an odds ratio above one."
        },
        {
            q: "The area under the ROC curve primarily assesses:",
            options: ["Discrimination between events and non-events","Calibration of predicted probabilities","Multicollinearity","Normality of predictors"],
            correct: 0,
            explanation: "AUC measures how well the model ranks or separates the two classes."
        },
        {
            q: "A funnel-shaped residual-versus-fitted plot suggests:",
            options: ["Unequal variance","Perfect linearity","Independence","Normality"],
            correct: 0,
            explanation: "Changing spread of residuals indicates heteroscedasticity."
        },
        {
            q: "Cook's distance is used to identify:",
            options: ["Influential observations","The best predictor","The sample size","The confidence level"],
            correct: 0,
            explanation: "Cook's distance combines leverage and residual size to measure influence."
        },
        {
            q: "A variance inflation factor above ten indicates:",
            options: ["Severe multicollinearity","No correlation","A binary response","Perfect normality"],
            correct: 0,
            explanation: "VIFs above ten signal that coefficients may be unstable."
        },
        {
            q: "A reasonable remedy for multicollinearity is to:",
            options: ["Remove or combine highly correlated predictors","Add more correlated predictors","Ignore the standard errors","Use a smaller sample"],
            correct: 0,
            explanation: "Combining or removing redundant predictors stabilizes the model."
        },
        {
            q: "How many runs are in a two-level full factorial with four factors before replication?",
            options: ["16","8","32","4"],
            correct: 0,
            explanation: "Two to the fourth power equals sixteen."
        },
        {
            q: "Center points in a factorial design are used to detect:",
            options: ["Curvature","Randomization","Blocking","Multicollinearity"],
            correct: 0,
            explanation: "A difference between center and factorial averages suggests curvature."
        },
        {
            q: "Randomizing run order protects against:",
            options: ["Time trends and unmeasured nuisance effects","All measurement error","The need for replication","Interactions"],
            correct: 0,
            explanation: "Randomization prevents order from being confounded with treatments."
        },
        {
            q: "Replication in an experiment provides:",
            options: ["An independent estimate of experimental error","A guarantee of significance","A way to avoid randomization","A substitute for center points"],
            correct: 0,
            explanation: "Replicate runs allow the error variance to be estimated."
        },
        {
            q: "A resolution IV design means:",
            options: ["Main effects are clear, but two-factor interactions are aliased with each other","All interactions are estimable","Main effects are aliased with each other","No factors are estimable"],
            correct: 0,
            explanation: "Resolution IV protects main effects but not all two-factor interactions."
        },
        {
            q: "A foldover design is used to:",
            options: ["De-alias important effects","Increase the number of factors","Remove the need for replicates","Eliminate blocking"],
            correct: 0,
            explanation: "Complementary runs separate effects that were confounded."
        },
        {
            q: "Blocking is used to:",
            options: ["Remove known nuisance variation between homogeneous groups","Increase the number of treatments","Avoid randomization","Replace replication"],
            correct: 0,
            explanation: "Blocks group similar experimental units so nuisance variation is not confounded with treatments."
        },
        {
            q: "In a randomized complete block design, each block contains:",
            options: ["Every treatment once","Only one treatment","No replication","Only center points"],
            correct: 0,
            explanation: "Each block is a complete set of treatments, randomized within the block."
        },
        {
            q: "A central composite design adds which points to a factorial or fractional design?",
            options: ["Axial and center points","Only duplicate corner points","Only blocking points","Only noise factors"],
            correct: 0,
            explanation: "Axial and center points support estimation of quadratic terms."
        },
        {
            q: "Response surface methods are typically used to:",
            options: ["Find optimum settings after important factors are known","Screen dozens of factors initially","Replace measurement system analysis","Calculate kappa"],
            correct: 0,
            explanation: "RSM models curvature and optimizes a smaller set of important factors."
        },
        {
            q: "A noise factor in robust design is:",
            options: ["A variable that affects the response but is hard or expensive to control","A factor the team can freely set","Always a blocking variable","A type of center point"],
            correct: 0,
            explanation: "Robust design seeks settings that are insensitive to noise factors."
        },
        {
            q: "The goal of robust design is to:",
            options: ["Achieve stable performance across noise conditions","Maximize the mean only","Eliminate all variation","Avoid confirmation runs"],
            correct: 0,
            explanation: "The best settings perform well even when noise factors vary."
        },
        {
            q: "A CUSUM chart is especially useful for:",
            options: ["Detecting small sustained shifts","Only categorical data","Designing experiments","Calculating sample size"],
            correct: 0,
            explanation: "CUSUM accumulates deviations from target to detect small persistent changes."
        },
        {
            q: "In an EWMA chart, a smaller smoothing constant generally:",
            options: ["Gives more weight to historical data and detects smaller shifts","Ignores history completely","Eliminates the need for control limits","Works only for attribute data"],
            correct: 0,
            explanation: "A smaller lambda smooths more and is sensitive to small shifts."
        },
        {
            q: "For non-normal capability, a valid approach is to:",
            options: ["Transform the data or fit an appropriate distribution","Assume normality regardless","Use only the process mean","Ignore specification limits"],
            correct: 0,
            explanation: "Capability should be based on a model that fits the data."
        },
        {
            q: "Capability analysis is meaningful only when the process is:",
            options: ["Stable","Always increasing","Unmeasured","Out of control"],
            correct: 0,
            explanation: "A stable process is required before capability indices can be interpreted."
        },
        {
            q: "Short-run SPC standardizes observations using:",
            options: ["Part-specific targets and short-term variation","Specification limits","The overall company average only","Customer complaints"],
            correct: 0,
            explanation: "Standardization lets different short runs share a chart."
        },
        {
            q: "Group charts should combine products that are:",
            options: ["Similar in process and variation structure","Completely unrelated","Always the highest volume","Produced on different equipment only"],
            correct: 0,
            explanation: "Pooling unlike processes creates misleading limits and signals."
        },
        {
            q: "Lean primarily focuses on:",
            options: ["Removing waste and improving flow","Reducing variation with statistics only","Financial auditing","Designing experiments"],
            correct: 0,
            explanation: "Lean targets non-value-added work and flow."
        },
        {
            q: "Six Sigma primarily focuses on:",
            options: ["Reducing variation and defects with data","Increasing inventory","Eliminating all documentation","Avoiding measurement"],
            correct: 0,
            explanation: "Six Sigma uses structured methods and statistics to improve consistency."
        },
        {
            q: "Lead time in a value stream map includes:",
            options: ["All elapsed time from request to delivery, including waiting","Only value-added processing time","Only machine cycle time","Only setup time"],
            correct: 0,
            explanation: "Lead time captures waiting as well as processing."
        },
        {
            q: "Takt time is calculated as:",
            options: ["Available work time divided by customer demand","Demand divided by inventory","Process time times batch size","Total lead time divided by defects"],
            correct: 0,
            explanation: "Takt time sets the pace required to meet customer demand."
        },
        {
            q: "OEE is the product of:",
            options: ["Availability, performance, and quality","Speed, cost, and inventory","Safety, morale, and cost","Yield, scrap, and lead time"],
            correct: 0,
            explanation: "Overall Equipment Effectiveness combines these three components."
        },
        {
            q: "Autonomous maintenance means:",
            options: ["Operators perform basic cleaning, inspection, and minor maintenance","Maintenance is outsourced","Equipment is run to failure","Operators never touch equipment"],
            correct: 0,
            explanation: "Operators take ownership of basic equipment condition."
        },
        {
            q: "Internal changeover work is work that:",
            options: ["Can only be done while the machine is stopped","Can be done while the machine runs","Requires no tools","Is always unnecessary"],
            correct: 0,
            explanation: "SMED aims to convert internal work to external work."
        },
        {
            q: "SMED measures changeover from:",
            options: ["The last good part before the change to the first good part after it","The start of setup to the end of paperwork","The first tool change to the last","The previous shift to the next"],
            correct: 0,
            explanation: "This measures the full lost production time."
        },
        {
            q: "Standard work typically includes:",
            options: ["Takt time, work sequence, and standard inventory","Only a job title","Only safety rules","Only financial targets"],
            correct: 0,
            explanation: "Standard work defines the current best method and its key elements."
        },
        {
            q: "Standard work should be:",
            options: ["The current best method, updated when the process improves","Permanent and never changed","Written without operator input","A substitute for training"],
            correct: 0,
            explanation: "It is a baseline for improvement, not a frozen rule."
        },
        {
            q: "The five S's are:",
            options: ["Sort, set in order, shine, standardize, sustain","Safety, speed, savings, service, sustain","Sort, sample, study, solve, sustain","Standardize, simplify, speed, serve, sell"],
            correct: 0,
            explanation: "5S creates and maintains an organized workplace."
        },
        {
            q: "Visual management makes:",
            options: ["Normal and abnormal conditions obvious at a glance","All problems invisible","Documents longer","Audits unnecessary"],
            correct: 0,
            explanation: "Visual signals help people see status and deviations quickly."
        },
        {
            q: "DMADV stands for:",
            options: ["Define, Measure, Analyze, Design, Verify","Define, Measure, Analyze, Develop, Validate","Design, Measure, Assess, Deploy, Verify","Define, Manage, Analyze, Deliver, Validate"],
            correct: 0,
            explanation: "DMADV is the DFSS roadmap for designing new processes or products."
        },
        {
            q: "DFSS is most appropriate when:",
            options: ["Designing a new product, service, or process","Fixing a known problem in an existing process","Only monitoring a stable process","Calculating a confidence interval"],
            correct: 0,
            explanation: "DMAIC is usually better for improving an existing process."
        },
        {
            q: "In QFD, the whats are:",
            options: ["Customer needs","Technical requirements","Control limits","Failure modes"],
            correct: 0,
            explanation: "The whats represent voice-of-the-customer needs."
        },
        {
            q: "The roof of the House of Quality shows:",
            options: ["Correlations among technical requirements","Customer complaints only","The project budget","Control chart limits"],
            correct: 0,
            explanation: "The roof reveals tradeoffs and synergies between technical requirements."
        },
        {
            q: "A must-be Kano feature is one that:",
            options: ["Causes dissatisfaction when absent but does not delight when present","Always delights customers","Has no effect on satisfaction","Is always a performance feature"],
            correct: 0,
            explanation: "Must-be features are basic expectations."
        },
        {
            q: "An attractive Kano feature is one that:",
            options: ["Delights when present but does not cause dissatisfaction when absent","Causes dissatisfaction when absent","Improves linearly with performance","Has no customer effect"],
            correct: 0,
            explanation: "Attractive features are unexpected differentiators."
        },
        {
            q: "In FMEA, severity rates the:",
            options: ["Impact of the failure effect","Likelihood of the cause","Ability to detect the failure","Cost of the project"],
            correct: 0,
            explanation: "Severity describes how bad the effect is."
        },
        {
            q: "Action priority in modern FMEA differs from RPN because it:",
            options: ["Gives more weight to severity and avoids misleading score equivalence","Ignores severity","Uses only detection","Eliminates the need for actions"],
            correct: 0,
            explanation: "Different risk combinations can produce the same RPN, so action priority improves focus."
        },
        {
            q: "In ADKAR, the A stands for:",
            options: ["Awareness","Ability","Analysis","Action"],
            correct: 0,
            explanation: "Awareness is understanding why the change is needed."
        },
        {
            q: "The purpose of reinforcement in change management is to:",
            options: ["Make the new behavior stick","Start the project","Avoid communication","Replace training"],
            correct: 0,
            explanation: "Recognition, audits, and systems sustain adoption."
        },
        {
            q: "Psychological safety means people can:",
            options: ["Speak up about risks and errors without fear of humiliation","Avoid all accountability","Ignore team goals","Make decisions alone"],
            correct: 0,
            explanation: "It supports learning and honest debate."
        },
        {
            q: "In a RACI matrix, the A stands for:",
            options: ["Accountable","Advisory","Approved","Assigned"],
            correct: 0,
            explanation: "The accountable person owns the outcome and decision."
        },
        {
            q: "Project selection should consider:",
            options: ["Strategic fit, impact, feasibility, risk, and urgency","Only the lowest cost","Only the sponsor's preference","Only quick wins"],
            correct: 0,
            explanation: "A balanced set of criteria improves portfolio decisions."
        },
        {
            q: "A balanced improvement portfolio includes:",
            options: ["Quick wins and larger strategic projects","Only long-term projects","Only easy projects","Only projects with no risk"],
            correct: 0,
            explanation: "Balance builds momentum while pursuing strategic value."
        },
        {
            q: "Hard savings are benefits that:",
            options: ["Affect the P&L or cash flow","Are only theoretical","Are customer opinions","Cannot be measured"],
            correct: 0,
            explanation: "Hard savings are real, verifiable financial improvements."
        },
        {
            q: "Payback period measures:",
            options: ["The time required to recover the project investment","The total project cost","The defect rate","The process capability"],
            correct: 0,
            explanation: "Shorter payback means faster recovery of cash."
        },
        {
            q: "NPV is preferred for multiyear projects because it:",
            options: ["Accounts for the time value of money","Ignores cash flow","Always equals ROI","Avoids finance review"],
            correct: 0,
            explanation: "Future cash flows are discounted to present value."
        },
        {
            q: "A mentor's primary goal is to:",
            options: ["Build the mentee's capability rather than take over the work","Complete the project personally","Avoid giving feedback","Replace the sponsor"],
            correct: 0,
            explanation: "Mentoring develops judgment and skills."
        },
        {
            q: "A project gate review checks:",
            options: ["Logic, evidence, and readiness before the next phase","Only the budget","Only team attendance","Only the final report"],
            correct: 0,
            explanation: "Gate reviews prevent weak work from advancing."
        },
        {
            q: "An effective mentoring technique is to:",
            options: ["Ask questions that help the mentee reason","Give the answer immediately","Ignore project data","Avoid follow-up"],
            correct: 0,
            explanation: "Questions build independent judgment and ownership."
        }
    ],
    master: [
        {
            q: "Hoshin Kanri is:",
            options: ["A control chart", "Strategy deployment that aligns goals across the organization", "A sampling method", "A type of MSA"],
            correct: 1,
            explanation: "Hoshin Kanri cascades strategic priorities into improvement work."
        },
        {
            q: "Catchball in strategy deployment means:",
            options: ["A random sample", "Iterative dialogue to align goals and resources", "A control chart rule", "A financial ratio"],
            correct: 1,
            explanation: "Catchball is the back-and-forth alignment process between levels."
        },
        {
            q: "Hard savings are:",
            options: ["Theoretical avoided costs", "Benefits that affect the P&L or cash flow", "Employee satisfaction scores", "Customer opinions"],
            correct: 1,
            explanation: "Hard savings are real, verifiable financial benefits."
        },
        {
            q: "Portfolio selection should balance:",
            options: ["Only cost", "Value, risk, capacity, and strategic fit", "Only speed", "Only the number of projects"],
            correct: 1,
            explanation: "A healthy portfolio balances impact, risk, resources, and strategy."
        },
        {
            q: "ISO 13053 is a standard for:",
            options: ["Financial auditing", "Six Sigma methods and roles", "Software testing", "Environmental management"],
            correct: 1,
            explanation: "ISO 13053 provides guidance on Six Sigma methods and roles."
        },
        {
            q: "ASQ and IASSC are best known as:",
            options: ["Software vendors", "Certification bodies with defined Bodies of Knowledge", "Statistical distributions", "Control chart types"],
            correct: 1,
            explanation: "ASQ and IASSC publish certification standards and BoKs."
        },
        {
            q: "The balanced scorecard includes which perspectives?",
            options: ["Financial, customer, internal process, learning and growth", "Cost, speed, quality, risk", "Define, Measure, Analyze, Improve", "Plan, Do, Check, Act"],
            correct: 0,
            explanation: "The balanced scorecard balances financial and non-financial measures."
        },
        {
            q: "Benchmarking means:",
            options: ["Copying a competitor exactly", "Comparing performance with best-in-class and adapting practices", "Setting a budget", "Running a t-test"],
            correct: 1,
            explanation: "Benchmarking uses external comparisons to identify improvement opportunities."
        },
        {
            q: "A key ethical duty in analytics is:",
            options: ["Using all available data regardless of consent", "Protecting privacy and using data responsibly", "Hiding uncertainty", "Changing results to please leaders"],
            correct: 1,
            explanation: "Ethics requires privacy, honesty, competence, and appropriate use of data."
        },
        {
            q: "A Master Black Belt primarily:",
            options: ["Only runs small local projects", "Deploys strategy, governs portfolios, coaches, and consults", "Avoids statistical work", "Replaces the finance team"],
            correct: 1,
            explanation: "MBBs work at the system level: deployment, governance, coaching, and consulting."
        }
,
        {
            q: "In Hoshin Kanri, the X-matrix links:",
            options: ["Long-term objectives, annual objectives, improvement priorities, and targets","Control limits and specification limits","Only financial budgets","Individual performance ratings"],
            correct: 0,
            explanation: "The X-matrix visually connects strategic direction to deployment priorities and measures."
        },
        {
            q: "A true north objective in Hoshin Kanri is:",
            options: ["A long-term aspirational direction for the organization","A short-term cost cut","A control chart rule","A supplier contract"],
            correct: 0,
            explanation: "True north describes the organization's long-term aspiration."
        },
        {
            q: "Hoshin Kanri reviews should:",
            options: ["Apply PDCA at a regular cadence","Happen only once a year","Focus only on project spend","Replace daily management"],
            correct: 0,
            explanation: "Frequent review and adjustment keep deployment responsive."
        },
        {
            q: "A common Hoshin failure is:",
            options: ["Setting too many priorities","Using too few measures","Involving too many levels","Reviewing progress too often"],
            correct: 0,
            explanation: "Too many priorities dilute focus and resources."
        },
        {
            q: "Catchball is best described as:",
            options: ["Iterative dialogue to align goals, resources, and local plans","A one-way target announcement","A random sampling method","A financial audit"],
            correct: 0,
            explanation: "Catchball is structured two-way alignment between levels."
        },
        {
            q: "A key output of catchball should be:",
            options: ["Documented plans with owners, measures, and review dates","A longer vision statement","A list of excuses","A single annual meeting"],
            correct: 0,
            explanation: "Dialogue must turn into accountable execution plans."
        },
        {
            q: "Catchball becomes ineffective when it:",
            options: ["Dilutes every target until it is easy","Includes local constraints","Documents agreements","Aligns functions"],
            correct: 0,
            explanation: "Catchball should preserve strategic intent while making execution feasible."
        },
        {
            q: "Who should participate in catchball?",
            options: ["Multiple levels and functions affected by the goals","Only the executive team","Only external consultants","Only the finance department"],
            correct: 0,
            explanation: "Cross-level and cross-functional dialogue improves alignment."
        },
        {
            q: "Program governance primarily defines:",
            options: ["Decision rights, accountability, and escalation","The statistical method for each project","The marketing plan","The training curriculum only"],
            correct: 0,
            explanation: "Governance clarifies who decides and who owns outcomes."
        },
        {
            q: "A steering committee should focus on:",
            options: ["Direction, resources, risks, and cross-project conflicts","Daily project tasks","Running statistical analyses","Writing standard work"],
            correct: 0,
            explanation: "Steering committees remove barriers and make portfolio-level decisions."
        },
        {
            q: "A stage gate reviews:",
            options: ["Evidence and readiness before the next phase","Only the project budget","Only team attendance","Only the final report"],
            correct: 0,
            explanation: "Gates prevent weak work from consuming more resources."
        },
        {
            q: "How should a PMO relate to the accountable business owner?",
            options: ["The PMO supports governance; the business owner remains accountable","The PMO owns all benefits","The PMO replaces the sponsor","The PMO avoids reporting"],
            correct: 0,
            explanation: "The PMO enables oversight but does not replace business accountability."
        },
        {
            q: "Portfolio selection should be recurring because:",
            options: ["Priorities, capacity, and evidence change","Projects never change","Finance requires monthly exams","All projects have equal value"],
            correct: 0,
            explanation: "Regular rebalancing keeps resources on the highest-value work."
        },
        {
            q: "Kill criteria in a portfolio are used to:",
            options: ["Stop projects that no longer justify investment","Punish project leaders","Avoid all risk","Guarantee every project succeeds"],
            correct: 0,
            explanation: "Early exits free capacity for better opportunities."
        },
        {
            q: "A portfolio must fit:",
            options: ["Available people, capital, and management attention","Only the number of ideas","Only the marketing calendar","Only external benchmarks"],
            correct: 0,
            explanation: "Capacity is a real constraint on portfolio execution."
        },
        {
            q: "A balanced portfolio typically includes:",
            options: ["Quick wins and larger strategic projects","Only long-term projects","Only low-risk projects","Only projects in one function"],
            correct: 0,
            explanation: "Balance builds momentum while pursuing strategic value."
        },
        {
            q: "Financial validation confirms:",
            options: ["The baseline, benefit type, timing, and cash impact","Only the project schedule","Only customer satisfaction","Only the number of belts"],
            correct: 0,
            explanation: "Finance validates whether claimed benefits are real and measurable."
        },
        {
            q: "Soft savings usually require:",
            options: ["Validation and possible redeployment to become cash","No evidence","Double counting","A control chart"],
            correct: 0,
            explanation: "Soft savings may represent avoided cost or freed capacity, not automatic cash."
        },
        {
            q: "A benefit tracker compares:",
            options: ["Planned benefits with realized benefits","Employees with managers","Control limits with specifications","Suppliers with customers"],
            correct: 0,
            explanation: "Tracking shows whether benefits actually materialize."
        },
        {
            q: "Double counting benefits is dangerous because it:",
            options: ["Overstates the value of the portfolio","Improves finance accuracy","Reduces project risk","Simplifies governance"],
            correct: 0,
            explanation: "The same benefit counted twice inflates the business case."
        },
        {
            q: "The GROW coaching model stands for:",
            options: ["Goal, Reality, Options, Will","Grow, Review, Organize, Work","Goal, Result, Output, Work","Guide, Reflect, Observe, Win"],
            correct: 0,
            explanation: "GROW structures a coaching conversation toward action."
        },
        {
            q: "Coaching differs from mentoring mainly because coaching:",
            options: ["Focuses on specific performance goals","Is always longer term","Avoids feedback","Requires no expertise"],
            correct: 0,
            explanation: "Coaching targets performance; mentoring is broader development."
        },
        {
            q: "An effective coach primarily:",
            options: ["Asks questions that build the coachee's reasoning","Gives the answer immediately","Avoids evidence","Takes over the project"],
            correct: 0,
            explanation: "Questions build independent judgment and ownership."
        },
        {
            q: "A coaching mistake is:",
            options: ["Solving the project for the coachee","Giving specific feedback","Observing the work","Following up on actions"],
            correct: 0,
            explanation: "Coaching should build capability, not create dependency."
        },
        {
            q: "The 70-20-10 principle emphasizes:",
            options: ["Experience, relationships, and formal training in that order","Only classroom training","Only online courses","Only certification exams"],
            correct: 0,
            explanation: "Most capability develops through challenging work and coaching."
        },
        {
            q: "Capability should be evaluated through:",
            options: ["Demonstrated competence and project results","Training hours only","Attendance records","Number of slides"],
            correct: 0,
            explanation: "Application and results matter more than seat time."
        },
        {
            q: "A community of practice helps by:",
            options: ["Sharing knowledge and solving problems across practitioners","Replacing all training","Eliminating governance","Avoiding standard work"],
            correct: 0,
            explanation: "Communities connect practitioners and sustain learning."
        },
        {
            q: "Certification is strongest when it includes:",
            options: ["Verified application and project evidence","Only a multiple-choice exam","Only payment of a fee","Only attendance"],
            correct: 0,
            explanation: "Evidence of application distinguishes capability from test performance."
        },
        {
            q: "The first step in statistical consulting is to:",
            options: ["Clarify the decision and the question","Choose a favorite test","Collect more data","Write the final report"],
            correct: 0,
            explanation: "Method selection follows problem framing."
        },
        {
            q: "Data provenance matters because it:",
            options: ["Determines whether the data can support the intended inference","Guarantees normality","Eliminates uncertainty","Replaces sensitivity analysis"],
            correct: 0,
            explanation: "Sampling, measurement, and collection methods limit conclusions."
        },
        {
            q: "Sensitivity analysis checks whether:",
            options: ["Conclusions hold under reasonable alternative assumptions","The p-value is below 0.05","The sample is large","The software is fast"],
            correct: 0,
            explanation: "It tests the robustness of the result."
        },
        {
            q: "A common consulting mistake is:",
            options: ["Starting with a method instead of the question","Checking assumptions","Documenting data","Explaining uncertainty"],
            correct: 0,
            explanation: "Method-first consulting can answer the wrong question."
        },
        {
            q: "ADDIE stands for:",
            options: ["Analysis, Design, Development, Implementation, Evaluation","Analyze, Define, Deliver, Improve, Evaluate","Assess, Design, Deploy, Inspect, Explain","Ask, Develop, Implement, Evaluate"],
            correct: 0,
            explanation: "ADDIE is a structured instructional design process."
        },
        {
            q: "A useful learning objective describes:",
            options: ["Observable performance that can be assessed","A vague topic","The instructor's credentials","The course length"],
            correct: 0,
            explanation: "Clear objectives guide design and evaluation."
        },
        {
            q: "Kirkpatrick's four levels are:",
            options: ["Reaction, learning, behavior, and results","Plan, do, check, act","Define, measure, analyze, improve","Input, process, output, feedback"],
            correct: 0,
            explanation: "They evaluate training from reaction to business results."
        },
        {
            q: "Training transfer is improved by:",
            options: ["On-the-job application and coaching","Lecture-only delivery","No practice","Evaluating satisfaction only"],
            correct: 0,
            explanation: "Transfer requires practice and support in the real work environment."
        },
        {
            q: "Enterprise DFSS means:",
            options: ["Applying DFSS across a portfolio with common governance and methods","Running one isolated design project","Avoiding customer input","Replacing all Lean work"],
            correct: 0,
            explanation: "Enterprise DFSS scales design capability across the organization."
        },
        {
            q: "CTQ flowdown translates:",
            options: ["Customer requirements into measurable design requirements","Control limits into specifications","Costs into budgets","Projects into portfolios"],
            correct: 0,
            explanation: "CTQs connect voice of the customer to design decisions."
        },
        {
            q: "Suppliers should be integrated early in DFSS to:",
            options: ["Reduce design risk, rework, and launch delays","Increase paperwork","Avoid verification","Replace customer research"],
            correct: 0,
            explanation: "Supplier capability affects design feasibility and quality."
        },
        {
            q: "Full DFSS is least appropriate for:",
            options: ["A low-risk minor change to an existing process","A new product platform","A new service design","A complex new facility"],
            correct: 0,
            explanation: "Scale the rigor to the risk and novelty of the design."
        },
        {
            q: "Kotter's first step in change is to:",
            options: ["Create a sense of urgency","Declare victory","Reward the old behavior","Avoid communication"],
            correct: 0,
            explanation: "Urgency motivates action and coalition building."
        },
        {
            q: "Middle managers are critical because they:",
            options: ["Translate direction into daily work and influence adoption","Only approve budgets","Avoid front-line contact","Replace executive sponsorship"],
            correct: 0,
            explanation: "They connect leadership intent with operational reality."
        },
        {
            q: "Short-term wins are important because they:",
            options: ["Build momentum and demonstrate that change can work","Replace the vision","End the change effort","Avoid measurement"],
            correct: 0,
            explanation: "Visible early results sustain commitment."
        },
        {
            q: "Anchoring a change means:",
            options: ["Embedding it in roles, incentives, processes, and culture","Announcing it once","Removing all controls","Returning to old methods"],
            correct: 0,
            explanation: "Anchoring prevents reversion after the launch."
        },
        {
            q: "Culture is shaped most strongly by:",
            options: ["Leader behavior, routines, metrics, and rewards","Posters and slogans","The building layout only","External advertising"],
            correct: 0,
            explanation: "What leaders do and reward signals what matters."
        },
        {
            q: "Psychological safety supports improvement by:",
            options: ["Letting people raise problems and errors without fear","Avoiding accountability","Eliminating standards","Discouraging questions"],
            correct: 0,
            explanation: "Hidden problems cannot be solved."
        },
        {
            q: "Leader standard work is:",
            options: ["A documented routine of leader behaviors that reinforce the operating system","A list of financial targets","A project charter","A control chart"],
            correct: 0,
            explanation: "It makes culture visible through daily actions."
        },
        {
            q: "Culture change is least likely to succeed when it relies on:",
            options: ["Slogans without changes in behavior or systems","Leader modeling","Aligned rewards","Daily routines"],
            correct: 0,
            explanation: "Slogans alone do not change behavior."
        },
        {
            q: "The balanced scorecard perspectives are:",
            options: ["Financial, customer, internal process, and learning and growth","Cost, speed, quality, and risk","Define, measure, analyze, and improve","Plan, do, check, and act"],
            correct: 0,
            explanation: "It balances results with the drivers of future performance."
        },
        {
            q: "A strategy map shows:",
            options: ["Cause-and-effect links between strategic objectives","Only financial results","A project schedule","A control chart"],
            correct: 0,
            explanation: "The map explains how capabilities and processes drive outcomes."
        },
        {
            q: "A leading measure:",
            options: ["Predicts future results","Confirms past results only","Is always financial","Cannot be tracked"],
            correct: 0,
            explanation: "Leading measures provide early signals about future performance."
        },
        {
            q: "A common scorecard mistake is:",
            options: ["Creating a KPI dump with no strategic focus","Using a strategy map","Reviewing results","Balancing perspectives"],
            correct: 0,
            explanation: "Too many unrelated measures dilute attention."
        },
        {
            q: "Benchmarking should compare:",
            options: ["Both results and enabling practices","Only prices","Only marketing materials","Only organizational charts"],
            correct: 0,
            explanation: "Understanding practices explains why results differ."
        },
        {
            q: "Normalization in benchmarking helps ensure:",
            options: ["Fair comparison despite differences in scale or mix","That all metrics are ignored","That competitors share data","That results are always identical"],
            correct: 0,
            explanation: "Normalization prevents apples-to-oranges comparisons."
        },
        {
            q: "Functional benchmarking compares:",
            options: ["A similar process across different industries or organizations","Only direct competitors","Only internal departments","Only financial ratios"],
            correct: 0,
            explanation: "Functional benchmarking looks beyond the industry for best practice."
        },
        {
            q: "After a benchmark study, the organization should:",
            options: ["Adapt, pilot, implement, and measure the practice","File the report and stop","Copy the practice exactly","Avoid measurement"],
            correct: 0,
            explanation: "Learning must turn into adapted action."
        },
        {
            q: "Industry 4.0 includes:",
            options: ["IoT, cyber-physical systems, cloud, automation, and advanced analytics","Only manual assembly","Only financial accounting","Only traditional SPC"],
            correct: 0,
            explanation: "Industry 4.0 connects physical operations with digital data and intelligence."
        },
        {
            q: "Predictive analytics is used to:",
            options: ["Estimate future outcomes or risk","Describe past data only","Replace all process knowledge","Avoid data quality"],
            correct: 0,
            explanation: "Predictive models support decisions before events occur."
        },
        {
            q: "A digital twin is:",
            options: ["A virtual model of a physical asset or process","A duplicate paper record","A type of control chart","A financial audit"],
            correct: 0,
            explanation: "Digital twins support monitoring, simulation, and optimization."
        },
        {
            q: "A common analytics failure is:",
            options: ["Technology-first projects without a decision or value case","Defining the problem first","Validating the model","Monitoring performance"],
            correct: 0,
            explanation: "Analytics must serve a real decision and business need."
        },
        {
            q: "Data governance defines:",
            options: ["Ownership, quality, access, retention, and lifecycle controls","Only software licenses","Only marketing content","Only project schedules"],
            correct: 0,
            explanation: "Governance makes data trustworthy and responsibly used."
        },
        {
            q: "Data stewardship is responsibility for:",
            options: ["Data quality, meaning, and appropriate use","Only hardware maintenance","Only financial reporting","Only user training"],
            correct: 0,
            explanation: "Stewards manage data on behalf of the business."
        },
        {
            q: "Bias testing in analytics is important because:",
            options: ["Models can produce unfair or harmful outcomes across groups","It guarantees perfect predictions","It replaces human oversight","It eliminates the need for data governance"],
            correct: 0,
            explanation: "Biased data or design can lead to discriminatory decisions."
        },
        {
            q: "Human oversight in consequential analytics means:",
            options: ["A person can review or override model decisions","The model is never monitored","No one is accountable","All decisions are automated"],
            correct: 0,
            explanation: "Oversight supports accountability and safety."
        },
        {
            q: "ISO 13053 provides guidance on:",
            options: ["Six Sigma methods, roles, and DMAIC","Financial auditing","Software licensing","Environmental permits"],
            correct: 0,
            explanation: "It is an international reference for Six Sigma practice."
        },
        {
            q: "ISO 13053 alignment guarantees:",
            options: ["Consistent guidance, not guaranteed business results","Profit growth","Perfect projects","Zero defects"],
            correct: 0,
            explanation: "The standard supports practice; results depend on execution."
        },
        {
            q: "A benefit of ISO 13053 across sites is:",
            options: ["A common language for roles, methods, and expectations","Less need for data","Automatic certification","No governance"],
            correct: 0,
            explanation: "Common standards improve consistency and comparability."
        },
        {
            q: "ISO 13053 implementation should avoid:",
            options: ["Becoming a paperwork exercise without practice change","Aligning roles","Training practitioners","Reviewing deployment"],
            correct: 0,
            explanation: "The goal is capability, not documentation alone."
        },
        {
            q: "A body of knowledge defines:",
            options: ["The topics and competencies expected for a certification","A company's strategy","A control chart","A financial statement"],
            correct: 0,
            explanation: "It guides curriculum and assessment."
        },
        {
            q: "ASQ and IASSC are:",
            options: ["Certification bodies with defined Bodies of Knowledge","Statistical software packages","Control chart types","Sampling distributions"],
            correct: 0,
            explanation: "Both organizations publish certification standards."
        },
        {
            q: "Project evidence in certification demonstrates:",
            options: ["That knowledge can be applied in practice","Only exam speed","Only attendance","Only membership"],
            correct: 0,
            explanation: "Application is different from test performance."
        },
        {
            q: "ASQ and IASSC certifications are:",
            options: ["Different in requirements and bodies of knowledge","Always identical","Only financial credentials","Not recognized by employers"],
            correct: 0,
            explanation: "Organizations should compare requirements carefully."
        },
        {
            q: "Rigorous certification should assess:",
            options: ["Both knowledge and practical application","Only payment","Only popularity","Only years of service"],
            correct: 0,
            explanation: "Knowledge and application together build credibility."
        },
        {
            q: "Working within competence means:",
            options: ["Practicing only where you have the knowledge and skill to be reliable","Accepting every assignment","Avoiding all statistics","Hiding limitations"],
            correct: 0,
            explanation: "Competence boundaries protect clients and the profession."
        },
        {
            q: "Recertification exists to:",
            options: ["Ensure practitioners maintain current knowledge and skills","Increase fees only","Replace project evidence","Avoid ethics"],
            correct: 0,
            explanation: "Methods and standards evolve over time."
        },
        {
            q: "A core certification ethic is:",
            options: ["Confidentiality, integrity, and truthful reporting","Changing results to please leaders","Claiming credentials you do not hold","Ignoring conflicts of interest"],
            correct: 0,
            explanation: "Ethics protect trust in the profession."
        },
        {
            q: "Change leadership differs from project management because it:",
            options: ["Builds belief, commitment, and sustained attention","Only tracks tasks and budgets","Avoids communication","Ignores culture"],
            correct: 0,
            explanation: "Change leadership addresses the human and political side of transformation."
        },
        {
            q: "Leaders model change through:",
            options: ["Consistent actions and decisions","Announcements only","Delegating all behavior","Avoiding visibility"],
            correct: 0,
            explanation: "People watch what leaders do more than what they say."
        },
        {
            q: "Resistance to change should be treated as:",
            options: ["Information about barriers and concerns","Disloyalty","A reason to stop listening","A purely personal defect"],
            correct: 0,
            explanation: "Resistance often reveals real risks or unmet needs."
        },
        {
            q: "Distributed leadership means:",
            options: ["Change leadership shared across levels and functions","Only the CEO leads","No one is accountable","Leadership is outsourced"],
            correct: 0,
            explanation: "Broad ownership increases reach and sustainability."
        },
        {
            q: "Benefits realization management includes:",
            options: ["Identifying, planning, measuring, tracking, and sustaining benefits","Only project closure","Only cost cutting","Only customer surveys"],
            correct: 0,
            explanation: "Benefits must be managed beyond project delivery."
        },
        {
            q: "A benefit owner is accountable for:",
            options: ["Tracking and realizing a defined benefit","Only approving expenses","Only writing the charter","Only running meetings"],
            correct: 0,
            explanation: "Ownership prevents benefits from being orphaned."
        },
        {
            q: "An outcome differs from an output because an outcome is:",
            options: ["A change in performance or behavior","A delivered document","A project task","A meeting"],
            correct: 0,
            explanation: "Outputs enable outcomes, but outcomes create value."
        },
        {
            q: "A post-implementation review should:",
            options: ["Verify whether promised benefits were realized","Celebrate launch only","Ignore finance","Stop all measurement"],
            correct: 0,
            explanation: "Reviews compare actual results with the business case."
        },
        {
            q: "A sensible deployment sequence is:",
            options: ["Mobilize, design, pilot, scale, and sustain","Scale, pilot, design, mobilize, stop","Launch everywhere at once","Train only, then stop"],
            correct: 0,
            explanation: "The sequence builds evidence and capability before expansion."
        },
        {
            q: "Piloting before scaling helps by:",
            options: ["Testing the approach and building capability with limited risk","Avoiding all measurement","Eliminating sponsorship","Guaranteeing success"],
            correct: 0,
            explanation: "Pilots generate learning before wider commitment."
        },
        {
            q: "Deployment sustainment requires:",
            options: ["Ownership, routines, measurement, and reinforcement","A single launch event","No governance","No capability building"],
            correct: 0,
            explanation: "Without reinforcement, results erode after launch."
        },
        {
            q: "A common deployment failure is:",
            options: ["Scaling before capability and sponsorship are in place","Piloting first","Building internal coaches","Reviewing benefits"],
            correct: 0,
            explanation: "Premature scaling spreads weakness instead of capability."
        },
        {
            q: "The Master Black Belt capstone integrates:",
            options: ["Strategy, governance, portfolio, capability, change, and benefits","Only statistical tests","Only training delivery","Only project charters"],
            correct: 0,
            explanation: "Deployment leadership requires an integrated system view."
        },
        {
            q: "Scaling a deployment should focus on:",
            options: ["Expanding what works with capable people and local adaptation","Copying every detail without context","Removing measurement","Abandoning governance"],
            correct: 0,
            explanation: "Scale proven practices while adapting to local conditions."
        }
    ]
};
