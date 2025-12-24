const questionBank = [

/* ========= 1. REQUIREMENTS ========= */
{
  section: 1,
  title: "Requirements – Definition",
  cheat: "Requirement = WHAT system must do OR system characteristic. NOT HOW (implementation).",
  questions: [
    { q: "A requirement describes:", o: ["HOW the system is implemented","WHAT the system must do","Programming language","Framework"], a: 1 },
    { q: "Which best describes a requirement?", o: ["Algorithm","System characteristic","Source code","Database schema"], a: 1 },
    { q: "Which is NOT a requirement?", o: ["User goal","System characteristic","How the system is implemented","What the system must do"], a: 2 },
    { q: "Performance is considered:", o: ["Implementation","System characteristic","Algorithm","Framework"], a: 1 },
    { q: "Requirements focus on WHAT rather than:", o: ["User needs","Business rules","HOW the system works internally","System goals"], a: 2 }
  ]
},

/* ========= 2. SDLC IMPORTANCE ========= */
{
  section: 2,
  title: "SDLC & Importance of Requirements",
  cheat: "Requirements determination is the most critical SDLC step. 50% failures due to requirements.",
  questions: [
    { q: "The most critical SDLC step is:", o: ["Design","Implementation","Requirements determination","Testing"], a: 2 },
    { q: "More than 50% of failures are caused by:", o: ["Coding","Testing","Requirements","Deployment"], a: 2 },
    { q: "Changes are easiest during:", o: ["Testing","Maintenance","Requirements phase","Deployment"], a: 2 },
    { q: "Poor requirements often lead to:", o: ["Success","Lower cost","System failure","Better UI"], a: 2 },
    { q: "Why are requirements important?", o: ["Define HOW to code","Define WHAT to build","Choose tools","Design UI"], a: 1 }
  ]
},

/* ========= 3. AS-IS vs TO-BE ========= */
{
  section: 3,
  title: "As-is vs To-be System",
  cheat: "As-is = current system. To-be = proposed/future system.",
  questions: [
    { q: "As-is system refers to:", o: ["Future system","Proposed system","Current system","Ideal system"], a: 2 },
    { q: "To-be system refers to:", o: ["Legacy system","Current system","Proposed system","Broken system"], a: 2 },
    { q: "Which is correct?", o: ["As-is = future","As-is = current","To-be = past","Both same"], a: 1 },
    { q: "Document analysis studies:", o: ["To-be","As-is","Future users","New tech"], a: 1 },
    { q: "BPR focuses mainly on:", o: ["As-is","To-be","Legacy","Current tools"], a: 1 }
  ]
},

/* ========= 4. ITERATIVE / INCREMENTAL ========= */
{
  section: 4,
  title: "Iterative & Incremental Development",
  cheat: "Iterative = repeated cycles. Incremental = deliver in parts. Used in OOSAD.",
  questions: [
    { q: "Iterative development means:", o: ["Build once","Repeat cycles","Skip testing","Skip design"], a: 1 },
    { q: "Incremental development means:", o: ["All at once","Deliver step by step","No planning","Only testing"], a: 1 },
    { q: "Iterative & incremental belong to:", o: ["Waterfall","OOSAD","Maintenance","Deployment"], a: 1 },
    { q: "Which reduces risk?", o: ["Big bang","Iterative","Late testing","No feedback"], a: 1 },
    { q: "Incremental delivery allows:", o: ["Late feedback","Early feedback","No change","No review"], a: 1 }
  ]
},

/* ========= 5. FUNCTIONAL REQUIREMENTS ========= */
{
  section: 5,
  title: "Functional Requirements",
  cheat: "Functional requirements describe WHAT the system does (process, data, logic).",
  questions: [
    { q: "Process requirements are:", o: ["Functional","Non-functional","Security","UI"], a: 0 },
    { q: "Data requirements are:", o: ["Non-functional","Functional","Usability","Reliability"], a: 1 },
    { q: "Business logic belongs to:", o: ["Functional","Non-functional","UI","Security"], a: 0 },
    { q: "Functional requirements describe:", o: ["System quality","WHAT system does","HOW built","Performance"], a: 1 },
    { q: "Which is functional?", o: ["Response <2s","User can withdraw money","High security","Easy to use"], a: 1 }
  ]
},

/* ========= 6. NON-FUNCTIONAL REQUIREMENTS ========= */
{
  section: 6,
  title: "Non-functional Requirements",
  cheat: "Non-functional requirements describe system qualities (performance, usability, security, reliability).",
  questions: [
    { q: "Performance requirements are:", o: ["Functional","Non-functional","Process","Data"], a: 1 },
    { q: "Usability requirements are:", o: ["Functional","Process","Non-functional","Logic"], a: 2 },
    { q: "Security requirements are:", o: ["Functional","Non-functional","Process","Data"], a: 1 },
    { q: "Reliability describes:", o: ["User actions","System quality","Business rules","Algorithms"], a: 1 },
    { q: "Non-functional requirements focus on:", o: ["WHAT","System qualities","User goals","Processes"], a: 1 }
  ]
},

/* ========= 7. REQUIREMENTS DEFINITION ========= */
{
  section: 7,
  title: "Requirements Definition",
  cheat: "List of functional + non-functional requirements. Defines scope. Input for later phases.",
  questions: [
    { q: "Requirements definition includes:", o: ["Functional only","Non-functional only","Both","Source code"], a: 2 },
    { q: "Requirements definition mainly defines:", o: ["UI","System scope","Database","Algorithms"], a: 1 },
    { q: "Requirements definition is input for:", o: ["Design","Deployment","Maintenance","Testing only"], a: 0 },
    { q: "Outline format means:", o: ["Detailed code","List format","Prototype","Diagram"], a: 1 },
    { q: "Prioritized requirements means:", o: ["Deleted","Ordered by importance","Implemented first","Tested last"], a: 1 }
  ]
},

/* ========= 8. REQUIREMENTS DETERMINATION ========= */
{
  section: 8,
  title: "Requirements Determination",
  cheat: "Involves analysts + users. Business & IT collaboration.",
  questions: [
    { q: "Requirements determination involves:", o: ["Developers only","Analysts and users","Testers only","Managers only"], a: 1 },
    { q: "Requirements are best identified by:", o: ["Business only","IT only","Business and IT","Customers only"], a: 2 },
    { q: "Who facilitates requirements understanding?", o: ["Programmer","System analyst","Tester","Designer"], a: 1 },
    { q: "User involvement is important because:", o: ["Users code","Users know needs","Users test","Users deploy"], a: 1 },
    { q: "Requirements determination focuses on:", o: ["Coding","Testing","Understanding needs","Deployment"], a: 2 }
  ]
},

/* ========= 9. PROBLEMS IN REQUIREMENTS ========= */
{
  section: 9,
  title: "Problems in Requirements Determination",
  cheat: "Common problems: no access to users, inadequate specs, scope creep, late changes.",
  questions: [
    { q: "A common problem is:", o: ["Clear users","No access to correct users","Stable scope","Fast validation"], a: 1 },
    { q: "Inadequate specs lead to:", o: ["Clear scope","Problems","Better design","Fast coding"], a: 1 },
    { q: "Late requirements cause:", o: ["Less cost","Rework","Clear scope","Fast deployment"], a: 1 },
    { q: "Scope creep refers to:", o: ["Stable scope","Uncontrolled changes","Clear scope","Validation"], a: 1 },
    { q: "Difficult validation is a:", o: ["Benefit","Problem","Tool","Strategy"], a: 1 }
  ]
},

/* ========= 10. BPA ========= */
{
  section: 10,
  title: "Business Process Automation (BPA)",
  cheat: "BPA automates current (As-is) system. Least change.",
  questions: [
    { q: "BPA involves:", o: ["Redesign","Automating current system","Major change","New tech"], a: 1 },
    { q: "BPA results in:", o: ["Most change","Moderate change","Least change","No change"], a: 2 },
    { q: "BPA focuses on:", o: ["To-be","As-is","Future users","New tools"], a: 1 },
    { q: "BPA mainly improves:", o: ["Innovation","Efficiency","UI","Architecture"], a: 1 },
    { q: "Which has least risk?", o: ["BPR","BPI","BPA","Agile"], a: 2 }
  ]
},

/* ========= 11. BPI ========= */
{
  section: 11,
  title: "Business Process Improvement (BPI)",
  cheat: "BPI improves existing processes. Moderate change.",
  questions: [
    { q: "BPI involves:", o: ["Least","Moderate","Most","No change"], a: 1 },
    { q: "BPI focuses on:", o: ["Automation only","Improving efficiency","Complete redesign","New system"], a: 1 },
    { q: "BPI is more aggressive than:", o: ["BPR","BPA","Agile","Scrum"], a: 1 },
    { q: "BPI improves:", o: ["To-be only","As-is processes","Architecture","Legacy removal"], a: 1 },
    { q: "BPI change level is:", o: ["Lowest","Moderate","Highest","None"], a: 1 }
  ]
},

/* ========= 12. BPR ========= */
{
  section: 12,
  title: "Business Process Reengineering (BPR)",
  cheat: "BPR redesigns processes. Most change. Focus on To-be.",
  questions: [
    { q: "BPR involves:", o: ["Least","Moderate","Most","No change"], a: 2 },
    { q: "BPR focuses on:", o: ["As-is","To-be","Legacy","Tools"], a: 1 },
    { q: "BPR results in:", o: ["Small improvements","Incremental change","Complete redesign","Automation only"], a: 2 },
    { q: "BPR is used when:", o: ["Minor issues","Major problems","No problems","Stable process"], a: 1 },
    { q: "BPR requires:", o: ["Low effort","Low risk","Significant change","No analysis"], a: 2 }
  ]
},

/* ========= 13. REQUIREMENTS GATHERING OVERVIEW ========= */
{
  section: 13,
  title: "Requirements Gathering – Overview",
  cheat: "Goal: uncover all requirements before design.",
  questions: [
    { q: "Purpose of requirements gathering is to:", o: ["Write code","Uncover requirements","Design UI","Select tools"], a: 1 },
    { q: "Which is NOT a gathering technique?", o: ["Interviews","JAD","Coding","Observation"], a: 2 },
    { q: "Requirements gathering helps to:", o: ["Increase cost","Build trust","Delay project","Skip analysis"], a: 1 },
    { q: "Late requirements are:", o: ["Easy","Difficult","Preferred","Cheap"], a: 1 },
    { q: "Gathering occurs:", o: ["After coding","Before design","During deployment","After testing"], a: 1 }
  ]
},

/* ========= 14. INTERVIEWS ========= */
{
  section: 14,
  title: "Interviews",
  cheat: "Most popular technique. Open, closed, probing. Top-down / bottom-up.",
  questions: [
    { q: "Most popular technique is:", o: ["Questionnaires","Interviews","Observation","JAD"], a: 1 },
    { q: "Open-ended questions:", o: ["Limit answers","Encourage discussion","End interview","Skip topics"], a: 1 },
    { q: "Closed-ended questions give:", o: ["Stories","Yes/No","Examples","Details"], a: 1 },
    { q: "Probing questions are used to:", o: ["Change topic","Clarify details","End interview","Limit scope"], a: 1 },
    { q: "Top-down interviews start with:", o: ["Details","General questions","Technical issues","Code"], a: 1 }
  ]
},

/* ========= 15. JAD ========= */
{
  section: 15,
  title: "Joint Application Development (JAD)",
  cheat: "JAD = structured group meeting with users & analysts. Facilitator required.",
  questions: [
    { q: "JAD is a:", o: ["Interview","Group meeting","Observation","Survey"], a: 1 },
    { q: "Participants include:", o: ["Users only","Analysts only","Users and analysts","Developers only"], a: 2 },
    { q: "Facilitator role is to:", o: ["Code","Guide discussion","Test","Deploy"], a: 1 },
    { q: "JAD helps to:", o: ["Reduce communication","Increase consensus","Delay project","Skip analysis"], a: 1 },
    { q: "JAD sessions are:", o: ["Unplanned","Structured workshops","Short chats","Online only"], a: 1 }
  ]
},

/* ========= 16. QUESTIONNAIRES / OBS / DOC ========= */
{
  section: 16,
  title: "Questionnaires, Observation & Document Analysis",
  cheat: "Questionnaires: large groups. Observation: watch users. Document analysis: As-is.",
  questions: [
    { q: "Questionnaires are best for:", o: ["Small groups","Large populations","Discussion","Prototyping"], a: 1 },
    { q: "Disadvantage of questionnaires:", o: ["High cost","Low response rate","Too detailed","Slow analysis"], a: 1 },
    { q: "Observation involves:", o: ["Asking","Watching users","Reading","Meeting"], a: 1 },
    { q: "Observation disadvantage:", o: ["High cost","Behavior change","Low accuracy","Slow"], a: 1 },
    { q: "Document analysis studies:", o: ["To-be","As-is","User opinions","Prototypes"], a: 1 }
  ]
},

/* ========= 17. USE-CASE DIAGRAM ========= */
{
  section: 17,
  title: "Use-case Diagram",
  cheat: "Shows user perspective and system boundary.",
  questions: [
    { q: "Use-case diagram shows:", o: ["Database","User perspective","Code","UI"], a: 1 },
    { q: "Defines:", o: ["Source code","System boundary","Algorithms","UI colors"], a: 1 },
    { q: "Component of use-case diagram:", o: ["Table","Actor","Class","Method"], a: 1 },
    { q: "System boundary shows:", o: ["Code","Scope","UI","Database"], a: 1 },
    { q: "Focus of use-case diagram:", o: ["Implementation","User interaction","Algorithms","Technology"], a: 1 }
  ]
},

/* ========= 18. USE-CASE ========= */
{
  section: 18,
  title: "Use-case",
  cheat: "Use-case = high-level user goal. UI-independent.",
  questions: [
    { q: "A use-case represents:", o: ["Internal processing","User goal","UI design","Database"], a: 1 },
    { q: "Use-cases are:", o: ["UI-dependent","UI-independent","Code-dependent","DB-dependent"], a: 1 },
    { q: "NOT a use-case:", o: ["Withdraw money","Transfer funds","Confirm amount","Check balance"], a: 2 },
    { q: "Use-cases describe:", o: ["Algorithms","Interaction sequences","Database","UI colors"], a: 1 },
    { q: "Use-cases focus on:", o: ["System internals","User needs","Code","Performance"], a: 1 }
  ]
},

/* ========= 19. ACTOR ========= */
{
  section: 19,
  title: "Actor",
  cheat: "Actor = role played by user or external system.",
  questions: [
    { q: "An actor is a:", o: ["User","Role","Screen","Database"], a: 1 },
    { q: "Actors can be:", o: ["Users only","Systems only","Users or external systems","Databases"], a: 2 },
    { q: "One actor represents:", o: ["One user","Many users","One screen","One DB"], a: 1 },
    { q: "Actors interact with:", o: ["Classes","Use-cases","Tables","Methods"], a: 1 },
    { q: "NOT an actor:", o: ["Customer","ATM system","Database table","Payment gateway"], a: 2 }
  ]
},

/* ========= 20. INCLUDE / EXTEND ========= */
{
  section: 20,
  title: "Use-case Relationships",
  cheat: "<<include>> = mandatory shared behavior. <<extend>> = optional/exceptional.",
  questions: [
    { q: "<<include>> means:", o: ["Optional","Mandatory","Conditional","Exceptional"], a: 1 },
    { q: "<<extend>> means:", o: ["Mandatory","Optional","Always","Shared"], a: 1 },
    { q: "Shared behavior uses:", o: ["Extend","Include","Actor","System"], a: 1 },
    { q: "Exceptional behavior uses:", o: ["Include","Extend","Actor","Boundary"], a: 1 },
    { q: "Include is:", o: ["Conditional","Always executed","Optional","Rare"], a: 1 }
  ]
},

/* ========= 21. BUILDING USE-CASE ========= */
{
  section: 21,
  title: "Building Use-case Diagram",
  cheat: "Steps: define boundary → identify actors → identify use-cases → define relationships → verify.",
  questions: [
    { q: "First step is:", o: ["Identify actors","Define boundary","Identify use-cases","Verify"], a: 1 },
    { q: "After actors, next step:", o: ["Verify","Identify use-cases","Draw UI","Code"], a: 1 },
    { q: "Relationships defined after:", o: ["Boundary","Use-cases","Verification","UI"], a: 1 },
    { q: "Final step is:", o: ["Actors","Relationships","Verify","Implement"], a: 2 },
    { q: "Verification ensures:", o: ["Code","Correct representation","UI","Performance"], a: 1 }
  ]
},

/* ========= 22. CLASSIFICATION ========= */
{
  section: 22,
  title: "Classification of Use-cases",
  cheat: "Use-cases classified by risk, architecture, large functionality, new technology, customer interest.",
  questions: [
    { q: "Risk classification focuses on:", o: ["UI","Uncertainty","Users","Cost"], a: 1 },
    { q: "Architecture classification focuses on:", o: ["Roles","System structure","UI","Rules"], a: 1 },
    { q: "Large functionality refers to:", o: ["Small tasks","Major functions","Buttons","Reports"], a: 1 },
    { q: "New technology focuses on:", o: ["Users","Tools","Novelty","Cost"], a: 2 },
    { q: "Customer interest focuses on:", o: ["Developers","Managers","Users","System size"], a: 2 }
  ]
}

];
