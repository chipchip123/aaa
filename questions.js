const questionBank = [

/* ================== 1. REQUIREMENTS – DEFINITION ================== */
{
  section: 1,
  title: "Requirements – Definition (WHAT vs HOW)",
  questions: [
    { q: "A requirement describes:", o: ["HOW the system is implemented", "WHAT the system must do", "Programming language", "Framework"], a: 1, e: "Requirement focuses on WHAT, not HOW." },
    { q: "Which best describes a requirement?", o: ["Algorithm", "System characteristic", "Source code", "Database schema"], a: 1, e: "System characteristics are requirements." },
    { q: "Which is NOT a requirement?", o: ["User goal", "System characteristic", "How the system is implemented", "What the system must do"], a: 2, e: "HOW = implementation, not requirement." },
    { q: "Performance is considered:", o: ["Implementation detail", "System characteristic", "Algorithm", "Framework"], a: 1, e: "Performance is a system characteristic." },
    { q: "Requirements focus on WHAT rather than:", o: ["User needs", "Business rules", "HOW the system works internally", "System goals"], a: 2, e: "WHAT not HOW." }
  ]
},

/* ================== 2. SDLC & IMPORTANCE ================== */
{
  section: 2,
  title: "SDLC & Importance of Requirements",
  questions: [
    { q: "The most critical step of the SDLC is:", o: ["Design", "Implementation", "Requirements determination", "Testing"], a: 2, e: "Requirements determination is the most critical step." },
    { q: "More than 50% of system failures are caused by:", o: ["Coding errors", "Poor testing", "Requirements problems", "Deployment issues"], a: 2, e: "Most failures are due to requirements." },
    { q: "Changes are easiest during which phase?", o: ["Testing", "Maintenance", "Requirements phase", "Deployment"], a: 2, e: "Changes are easiest during requirements." },
    { q: "Poor requirements often lead to:", o: ["Lower cost", "System success", "System failure", "Better UI"], a: 2, e: "Poor requirements cause failure." },
    { q: "Why are requirements critical?", o: ["They define HOW to code", "They define WHAT to build", "They choose tools", "They design UI"], a: 1, e: "Requirements define WHAT to build." }
  ]
},

/* ================== 3. AS-IS vs TO-BE ================== */
{
  section: 3,
  title: "As-is vs To-be System",
  questions: [
    { q: "As-is system refers to:", o: ["Future system", "Proposed system", "Current system", "Ideal system"], a: 2, e: "As-is = current system." },
    { q: "To-be system refers to:", o: ["Current system", "Legacy system", "Proposed system", "Broken system"], a: 2, e: "To-be = future/proposed system." },
    { q: "Which pair is correct?", o: ["As-is = future, To-be = current", "As-is = current, To-be = future", "Both current", "Both future"], a: 1, e: "As-is current, To-be future." },
    { q: "Document analysis mainly studies:", o: ["To-be system", "As-is system", "New technology", "Future users"], a: 1, e: "Document analysis focuses on As-is." },
    { q: "BPR focuses more on:", o: ["As-is", "To-be", "Legacy system", "Existing tools"], a: 1, e: "BPR focuses on To-be." }
  ]
},

/* ================== 4. ITERATIVE & INCREMENTAL ================== */
{
  section: 4,
  title: "Iterative & Incremental Development",
  questions: [
    { q: "Iterative development means:", o: ["Build once", "Repeat cycles", "Skip testing", "Skip design"], a: 1, e: "Iterative = repeated cycles." },
    { q: "Incremental development means:", o: ["All features at once", "Deliver in parts", "No planning", "Only testing"], a: 1, e: "Incremental = step by step." },
    { q: "Iterative & incremental are features of:", o: ["Waterfall", "OOSAD", "Maintenance", "Deployment"], a: 1, e: "OOSAD uses iterative/incremental." },
    { q: "Which approach reduces risk?", o: ["Big-bang delivery", "Iterative development", "Late testing", "No feedback"], a: 1, e: "Iterative reduces risk." },
    { q: "Incremental delivery allows:", o: ["Late feedback", "Early feedback", "No feedback", "No change"], a: 1, e: "Incremental allows early feedback." }
  ]
},

/* ================== 5. FUNCTIONAL REQUIREMENTS ================== */
{
  section: 5,
  title: "Functional Requirements",
  questions: [
    { q: "Process requirements are:", o: ["Functional", "Non-functional", "Security", "UI"], a: 0, e: "Process → Functional." },
    { q: "Data requirements are:", o: ["Non-functional", "Functional", "Reliability", "Usability"], a: 1, e: "Data → Functional." },
    { q: "Business logic belongs to:", o: ["Functional", "Non-functional", "Security", "UI"], a: 0, e: "Logic → Functional." },
    { q: "Functional requirements describe:", o: ["System qualities", "WHAT the system does", "HOW the system is built", "UI colors"], a: 1, e: "Functional = WHAT system does." },
    { q: "Which is a functional requirement?", o: ["Response time < 2s", "User can withdraw money", "High security", "Easy to use"], a: 1, e: "User actions → Functional." }
  ]
},

/* ================== 6. NON-FUNCTIONAL REQUIREMENTS ================== */
{
  section: 6,
  title: "Non-functional Requirements",
  questions: [
    { q: "Performance requirements are:", o: ["Functional", "Non-functional", "Process", "Data"], a: 1, e: "Performance → Non-functional." },
    { q: "Usability requirements are:", o: ["Functional", "Process", "Non-functional", "Logic"], a: 2, e: "Usability → Non-functional." },
    { q: "Security requirements are:", o: ["Functional", "Non-functional", "Process", "Data"], a: 1, e: "Security → Non-functional." },
    { q: "Reliability requirements describe:", o: ["User actions", "System quality", "Business rules", "Algorithms"], a: 1, e: "Reliability = quality." },
    { q: "Non-functional requirements describe:", o: ["WHAT the system does", "System qualities", "User goals", "Processes"], a: 1, e: "Non-functional = qualities." }
  ]
},

/* ================== 7. REQUIREMENTS DEFINITION ================== */
{
  section: 7,
  title: "Requirements Definition",
  questions: [
    { q: "Requirements definition includes:", o: ["Only functional", "Only non-functional", "Functional and non-functional", "Source code"], a: 2, e: "Definition includes both types." },
    { q: "Requirements definition mainly defines:", o: ["UI", "System scope", "Database", "Algorithms"], a: 1, e: "Defines system scope." },
    { q: "Requirements definition is input for:", o: ["Design", "Deployment", "Maintenance", "Testing only"], a: 0, e: "Input for later phases." },
    { q: "Outline format means:", o: ["Detailed code", "List format", "Prototype", "Diagram"], a: 1, e: "Outline = list." },
    { q: "Prioritized requirements means:", o: ["Deleted", "Ordered by importance", "Implemented first", "Tested last"], a: 1, e: "Prioritized = ordered." }
  ]
},

/* ================== 8. REQUIREMENTS DETERMINATION ================== */
{
  section: 8,
  title: "Requirements Determination",
  questions: [
    { q: "Requirements determination involves:", o: ["Developers only", "Analysts and users", "Testers only", "Managers only"], a: 1, e: "Analysts + users." },
    { q: "Requirements are best identified by:", o: ["Business only", "IT only", "Business and IT", "Customers only"], a: 2, e: "Business + IT collaboration." },
    { q: "Which role facilitates requirements understanding?", o: ["Programmer", "System analyst", "Tester", "Designer"], a: 1, e: "Analyst facilitates." },
    { q: "User involvement is important because:", o: ["Users write code", "Users know business needs", "Users test software", "Users deploy systems"], a: 1, e: "Users know needs." },
    { q: "Requirements determination focuses on:", o: ["Coding", "Testing", "Understanding needs", "Deployment"], a: 2, e: "Focus on understanding needs." }
  ]
},

/* ================== 9. PROBLEMS IN REQUIREMENTS ================== */
{
  section: 9,
  title: "Problems in Requirements Determination",
  questions: [
    { q: "A common problem is:", o: ["Clear users", "No access to correct users", "Stable scope", "Fast validation"], a: 1, e: "No access to correct users." },
    { q: "Inadequate requirements specification leads to:", o: ["Clear scope", "Problems", "Better design", "Fast coding"], a: 1, e: "Inadequate specs cause problems." },
    { q: "Requirements not known early cause:", o: ["Less cost", "Rework", "Clear scope", "Fast deployment"], a: 1, e: "Late requirements cause rework." },
    { q: "Scope creep refers to:", o: ["Stable requirements", "Uncontrolled changes", "Clear scope", "Validation"], a: 1, e: "Scope creep = uncontrolled change." },
    { q: "Difficult validation is a:", o: ["Benefit", "Problem", "Tool", "Strategy"], a: 1, e: "Validation difficulty is a problem." }
  ]
},

/* ================== 10. BPA ================== */
{
  section: 10,
  title: "Business Process Automation (BPA)",
  questions: [
    { q: "BPA involves:", o: ["Redesigning processes", "Automating current system", "Major change", "New technology"], a: 1, e: "BPA automates current system." },
    { q: "BPA results in:", o: ["Most change", "Moderate change", "Least change", "No change"], a: 2, e: "BPA = least change." },
    { q: "BPA mainly improves:", o: ["Innovation", "Efficiency", "UI", "Architecture"], a: 1, e: "Automation improves efficiency." },
    { q: "BPA focuses on:", o: ["To-be system", "As-is system", "Future users", "New tools"], a: 1, e: "BPA focuses on As-is." },
    { q: "Which strategy has least risk?", o: ["BPR", "BPI", "BPA", "Agile"], a: 2, e: "BPA has least change and risk." }
  ]
},

/* ================== 11. BPI ================== */
{
  section: 11,
  title: "Business Process Improvement (BPI)",
  questions: [
    { q: "BPI involves:", o: ["Least change", "Moderate change", "Most change", "No change"], a: 1, e: "BPI = moderate change." },
    { q: "BPI focuses on:", o: ["Automation only", "Improving efficiency", "Complete redesign", "New system"], a: 1, e: "BPI improves efficiency." },
    { q: "BPI is more aggressive than:", o: ["BPR", "BPA", "Agile", "Scrum"], a: 1, e: "BPI > BPA." },
    { q: "BPI often uses:", o: ["Duration analysis", "Technology analysis", "Elimination", "Prototyping"], a: 0, e: "BPI uses duration analysis." },
    { q: "BPI focuses on:", o: ["To-be only", "As-is improvement", "New architecture", "Legacy removal"], a: 1, e: "BPI improves As-is." }
  ]
},

/* ================== 12. BPR ================== */
{
  section: 12,
  title: "Business Process Reengineering (BPR)",
  questions: [
    { q: "BPR involves:", o: ["Least change", "Moderate change", "Most change", "No change"], a: 2, e: "BPR = most change." },
    { q: "BPR focuses on:", o: ["As-is system", "To-be system", "Current tools", "Minor improvement"], a: 1, e: "BPR focuses on To-be." },
    { q: "BPR often results in:", o: ["Small improvements", "Incremental change", "Complete redesign", "Automation only"], a: 2, e: "BPR = redesign." },
    { q: "BPR is best used when:", o: ["Processes work well", "Minor issues exist", "Major problems exist", "No problems exist"], a: 2, e: "BPR for major problems." },
    { q: "BPR requires:", o: ["Little effort", "Low risk", "Significant change", "No analysis"], a: 2, e: "BPR requires major change." }
  ]
},

/* ================== 13. REQUIREMENTS GATHERING – OVERVIEW ================== */
{
  section: 13,
  title: "Requirements Gathering – Overview",
  questions: [
    { q: "The purpose of requirements gathering is to:", o: ["Write code", "Uncover all requirements", "Design UI", "Select tools"], a: 1, e: "Gathering uncovers requirements." },
    { q: "Which is NOT a gathering technique?", o: ["Interviews", "JAD", "Coding", "Observation"], a: 2, e: "Coding is not a gathering technique." },
    { q: "Requirements gathering helps to:", o: ["Increase cost", "Build user trust", "Delay project", "Skip analysis"], a: 1, e: "Gathering builds trust." },
    { q: "Late requirements are:", o: ["Easy to handle", "Difficult to incorporate", "Preferred", "Cheap"], a: 1, e: "Late requirements are difficult." },
    { q: "Requirements gathering occurs:", o: ["After coding", "Before design", "During deployment", "After testing"], a: 1, e: "Occurs before design." }
  ]
},

/* ================== 14. INTERVIEWS ================== */
{
  section: 14,
  title: "Interviews",
  questions: [
    { q: "The most popular requirements gathering technique is:", o: ["Questionnaires", "Interviews", "Observation", "JAD"], a: 1, e: "Interviews are most popular." },
    { q: "Open-ended questions are used to:", o: ["Limit answers", "Encourage discussion", "End interviews", "Skip topics"], a: 1, e: "Open-ended encourage discussion." },
    { q: "Closed-ended questions provide:", o: ["Detailed discussion", "Yes/No answers", "Stories", "Examples"], a: 1, e: "Closed-ended = Yes/No." },
    { q: "Probing questions are used to:", o: ["Change topic", "Clarify details", "End interview", "Limit scope"], a: 1, e: "Probing clarifies." },
    { q: "Top-down interviews start with:", o: ["Details", "General questions", "Technical issues", "Code"], a: 1, e: "Top-down starts general." }
  ]
},

/* ================== 15. JAD ================== */
{
  section: 15,
  title: "Joint Application Development (JAD)",
  questions: [
    { q: "JAD is best described as:", o: ["Individual interview", "Group meeting", "Observation", "Survey"], a: 1, e: "JAD = group meeting." },
    { q: "Participants in JAD include:", o: ["Users only", "Analysts only", "Users and analysts", "Developers only"], a: 2, e: "Users + analysts." },
    { q: "A facilitator in JAD:", o: ["Codes system", "Guides discussion", "Tests system", "Deploys system"], a: 1, e: "Facilitator guides discussion." },
    { q: "JAD helps to:", o: ["Reduce communication", "Increase consensus", "Delay project", "Skip analysis"], a: 1, e: "JAD increases consensus." },
    { q: "JAD sessions are usually:", o: ["Short meetings", "Structured workshops", "Unplanned", "Online only"], a: 1, e: "JAD uses structured workshops." }
  ]
},

/* ================== 16. QUESTIONNAIRES / OBSERVATION / DOCUMENT ================== */
{
  section: 16,
  title: "Questionnaires, Observation & Document Analysis",
  questions: [
    { q: "Questionnaires are best for:", o: ["Small groups", "Large populations", "Complex discussion", "Prototyping"], a: 1, e: "Questionnaires suit large populations." },
    { q: "A disadvantage of questionnaires is:", o: ["High cost", "Low response rate", "Too detailed", "Slow analysis"], a: 1, e: "Low response rate." },
    { q: "Observation involves:", o: ["Asking questions", "Watching users", "Reading reports", "Group meetings"], a: 1, e: "Observation = watching users." },
    { q: "A disadvantage of observation is:", o: ["High cost", "Behavior may change", "Low accuracy", "Too slow"], a: 1, e: "Behavior may change." },
    { q: "Document analysis focuses on:", o: ["Future system", "As-is system", "User opinions", "Prototypes"], a: 1, e: "Document analysis studies As-is." }
  ]
},

/* ================== 17. USE-CASE DIAGRAM ================== */
{
  section: 17,
  title: "Use-case Diagram",
  questions: [
    { q: "A use-case diagram shows:", o: ["Database structure", "User perspective", "Program flow", "UI layout"], a: 1, e: "Use-case diagram = user perspective." },
    { q: "Use-case diagrams define:", o: ["Source code", "System boundary", "Algorithms", "UI colors"], a: 1, e: "Defines system boundary." },
    { q: "Which is a component of use-case diagram?", o: ["Table", "Actor", "Class", "Method"], a: 1, e: "Actor is a component." },
    { q: "System boundary shows:", o: ["Internal code", "Scope of system", "UI layout", "Database design"], a: 1, e: "Boundary shows scope." },
    { q: "Use-case diagrams focus on:", o: ["Implementation", "User interactions", "Algorithms", "Technology"], a: 1, e: "Focus on interactions." }
  ]
},

/* ================== 18. USE-CASE ================== */
{
  section: 18,
  title: "Use-case",
  questions: [
    { q: "A use-case represents:", o: ["Internal processing", "User goal", "UI design", "Database schema"], a: 1, e: "Use-case = user goal." },
    { q: "Use-cases are:", o: ["UI-dependent", "UI-independent", "Code-dependent", "Database-dependent"], a: 1, e: "Use-cases are UI-independent." },
    { q: "Which is NOT a use-case?", o: ["Withdraw money", "Transfer funds", "Confirm amount", "Check balance"], a: 2, e: "Confirm amount is internal." },
    { q: "Use-cases describe:", o: ["Algorithms", "Interaction sequences", "Database schema", "UI colors"], a: 1, e: "Describe interactions." },
    { q: "Use-cases focus on:", o: ["System internals", "User needs", "Code structure", "Performance"], a: 1, e: "Focus on user needs." }
  ]
},

/* ================== 19. ACTOR ================== */
{
  section: 19,
  title: "Actor",
  questions: [
    { q: "An actor represents a:", o: ["User", "Role", "Screen", "Database"], a: 1, e: "Actor = role." },
    { q: "Actors can be:", o: ["Users only", "Systems only", "Users or external systems", "Databases"], a: 2, e: "Actors can be users or systems." },
    { q: "One actor may represent:", o: ["One user only", "Many users", "One screen", "One database"], a: 1, e: "One actor ↔ many users." },
    { q: "Actors interact with:", o: ["Classes", "Use-cases", "Tables", "Methods"], a: 1, e: "Actors interact with use-cases." },
    { q: "Which is NOT an actor?", o: ["Customer", "ATM system", "Database table", "External payment system"], a: 2, e: "Database table is not an actor." }
  ]
},

/* ================== 20. USE-CASE RELATIONSHIPS ================== */
{
  section: 20,
  title: "Use-case Relationships (Include & Extend)",
  questions: [
    { q: "<<include>> relationship means:", o: ["Optional behavior", "Mandatory shared behavior", "Exceptional case", "Conditional flow"], a: 1, e: "<<include>> = mandatory." },
    { q: "<<extend>> relationship means:", o: ["Mandatory behavior", "Optional behavior", "Always executed", "Shared behavior"], a: 1, e: "<<extend>> = optional." },
    { q: "Which relationship represents shared behavior?", o: ["Extend", "Include", "Generalization", "Association"], a: 1, e: "Include = shared behavior." },
    { q: "Exceptional behavior is modeled using:", o: ["Include", "Extend", "Actor", "System"], a: 1, e: "Extend models exceptions." },
    { q: "Include relationships are:", o: ["Conditional", "Always executed", "Optional", "Rare"], a: 1, e: "Include = always executed." }
  ]
},

/* ================== 21. BUILDING USE-CASE DIAGRAM ================== */
{
  section: 21,
  title: "Building Use-case Diagram",
  questions: [
    { q: "The first step in building a use-case diagram is:", o: ["Identify actors", "Define system boundary", "Identify use-cases", "Verify diagram"], a: 1, e: "Step 1 = define boundary." },
    { q: "After identifying actors, the next step is:", o: ["Verify diagram", "Identify use-cases", "Draw UI", "Write code"], a: 1, e: "Next step = identify use-cases." },
    { q: "Defining relationships comes after:", o: ["Identifying boundary", "Identifying use-cases", "Verifying diagram", "Drawing UI"], a: 1, e: "Define relationships after use-cases." },
    { q: "The final step is:", o: ["Identify actors", "Define relationships", "Verify diagram", "Implement system"], a: 2, e: "Final step = verify diagram." },
    { q: "Verification ensures:", o: ["Correct code", "Correct requirements representation", "UI beauty", "Performance"], a: 1, e: "Verification ensures correctness." }
  ]
},

/* ================== 22. CLASSIFICATION OF USE-CASES ================== */
{
  section: 22,
  title: "Classification of Use-cases",
  questions: [
    { q: "Classifying use-cases by risk focuses on:", o: ["UI importance", "Technical uncertainty", "User interest", "Database size"], a: 1, e: "Risk = uncertainty." },
    { q: "Classifying by architecture focuses on:", o: ["User roles", "System structure", "UI design", "Business rules"], a: 1, e: "Architecture = system structure." },
    { q: "Large functionality refers to:", o: ["Small tasks", "Major system functions", "UI buttons", "Reports"], a: 1, e: "Large functionality = major functions." },
    { q: "New technology classification focuses on:", o: ["Users", "Tools", "Technological novelty", "Cost"], a: 2, e: "New technology = novelty." },
    { q: "Customer interest classification focuses on:", o: ["Developers", "Managers", "Users", "System size"], a: 2, e: "Customer interest = users." }
  ]
}

];
