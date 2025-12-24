questionBank = [

/* ================== 1. REQUIREMENTS ================== */
{
  section: 1,
  title: "Requirements – Definition",
  cheat: "Requirement = WHAT system must do OR system characteristic. NOT HOW.",
  questions: [
    { q: "A requirement describes:", o:["HOW the system is implemented","WHAT the system must do","Programming language","Framework"], a:1 },
    { q: "A requirement can describe a:", o:["Source code","System characteristic","Algorithm","Database schema"], a:1 },
    { q: "Which is NOT a requirement?", o:["User goal","System characteristic","How the system is implemented","Business rule"], a:2 },
    { q: "Requirements focus on:", o:["HOW","WHAT","Tools","Technology"], a:1 },
    { q: "Implementation details belong to:", o:["Requirements","Design","NOT requirements","User needs"], a:2 }
  ]
},

/* ================== 2. SDLC IMPORTANCE ================== */
{
  section: 2,
  title: "SDLC & Importance of Requirements",
  cheat: "Requirements determination is the most critical SDLC step. 50% failures due to requirements.",
  questions: [
    { q: "The most critical SDLC step is:", o:["Design","Implementation","Requirements determination","Testing"], a:2 },
    { q: "50% of system failures are due to:", o:["Coding","Testing","Requirements","Deployment"], a:2 },
    { q: "Changes are easiest during:", o:["Testing","Maintenance","Requirements phase","Deployment"], a:2 },
    { q: "Poor requirements often cause:", o:["Success","Lower cost","System failure","Better UI"], a:2 },
    { q: "Requirements determination occurs in:", o:["Early SDLC","Late SDLC","Maintenance","Deployment"], a:0 }
  ]
},

/* ================== 3. AS-IS vs TO-BE ================== */
{
  section: 3,
  title: "As-is vs To-be System",
  cheat: "As-is = current system. To-be = proposed/future system.",
  questions: [
    { q: "As-is system refers to:", o:["Future system","Proposed system","Current system","Ideal system"], a:2 },
    { q: "To-be system refers to:", o:["Legacy system","Current system","Proposed system","Broken system"], a:2 },
    { q: "Which represents the current situation?", o:["To-be","As-is","Future","Target"], a:1 },
    { q: "Which represents the future system?", o:["As-is","Legacy","To-be","Current"], a:2 },
    { q: "Document analysis mainly studies:", o:["To-be","As-is","Future users","New technology"], a:1 }
  ]
},

/* ================== 4. ITERATIVE / INCREMENTAL ================== */
{
  section: 4,
  title: "Iterative & Incremental Development",
  cheat: "Iterative = repeated cycles. Incremental = deliver in parts. Used in OOSAD.",
  questions: [
    { q: "Iterative development means:", o:["Build once","Repeated cycles","Skip testing","Single delivery"], a:1 },
    { q: "Incremental development means:", o:["All at once","Deliver in parts","No planning","No feedback"], a:1 },
    { q: "Iterative & incremental development is used in:", o:["Waterfall","OOSAD","Maintenance","Deployment"], a:1 },
    { q: "Incremental delivery refers to:", o:["One release","Multiple small releases","No release","Late release"], a:1 },
    { q: "Iterative development focuses on:", o:["One cycle","Repeated refinement","No change","Final version"], a:1 }
  ]
},

/* ================== 5. FUNCTIONAL REQUIREMENTS ================== */
{
  section: 5,
  title: "Functional Requirements",
  cheat: "Functional requirements describe WHAT the system does (process, data, logic).",
  questions: [
    { q: "Functional requirements describe:", o:["System quality","WHAT the system does","HOW it is built","Performance"], a:1 },
    { q: "Process requirements are:", o:["Functional","Non-functional","Security","UI"], a:0 },
    { q: "Data requirements are:", o:["Non-functional","Functional","Usability","Reliability"], a:1 },
    { q: "Business logic belongs to:", o:["Functional","Non-functional","UI","Security"], a:0 },
    { q: "Which is functional?", o:["Response <2s","User can withdraw money","High security","Easy to use"], a:1 }
  ]
},

/* ================== 6. NON-FUNCTIONAL REQUIREMENTS ================== */
{
  section: 6,
  title: "Non-functional Requirements",
  cheat: "Non-functional requirements describe system qualities.",
  questions: [
    { q: "Performance requirements are:", o:["Functional","Non-functional","Process","Data"], a:1 },
    { q: "Usability requirements are:", o:["Functional","Process","Non-functional","Logic"], a:2 },
    { q: "Security requirements are:", o:["Functional","Non-functional","Process","Data"], a:1 },
    { q: "Reliability refers to:", o:["User actions","System quality","Business logic","Algorithms"], a:1 },
    { q: "Non-functional requirements focus on:", o:["WHAT","System qualities","User goals","Processes"], a:1 }
  ]
},

/* ================== 7. REQUIREMENTS DEFINITION ================== */
{
  section: 7,
  title: "Requirements Definition",
  cheat: "Functional + Non-functional. Outline format. Prioritized. Defines scope. Input for later phases.",
  questions: [
    { q: "Requirements definition includes:", o:["Functional only","Non-functional only","Both","Source code"], a:2 },
    { q: "Requirements definition is documented in:", o:["Source code","Outline (list) format","ER diagram","Prototype"], a:1 },
    { q: "Prioritized requirements are:", o:["Deleted","Ordered by importance","Implemented first","Tested last"], a:1 },
    { q: "Requirements definition defines system:", o:["UI","Scope","Database","Algorithm"], a:1 },
    { q: "Requirements definition is input for:", o:["Design","Deployment","Maintenance","Testing"], a:0 },
    { q: "Functional & non-functional appear in:", o:["Design","Requirements definition","Implementation","Testing"], a:1 }
  ]
},

/* ================== 8. REQUIREMENTS DETERMINATION ================== */
{
  section: 8,
  title: "Requirements Determination",
  cheat: "Analysts + users. Business & IT collaboration.",
  questions: [
    { q: "Requirements determination involves:", o:["Developers only","Analysts and users","Testers only","Managers only"], a:1 },
    { q: "Best identification requires:", o:["Business only","IT only","Business and IT","Customers only"], a:2 },
    { q: "Key participants are:", o:["Designers","Analysts","Testers","Programmers"], a:1 },
    { q: "Users are involved because they:", o:["Code","Know needs","Deploy","Test"], a:1 },
    { q: "Requirements determination focuses on:", o:["Coding","Understanding needs","Testing","Deployment"], a:1 }
  ]
},

/* ================== 9. PROBLEMS ================== */
{
  section: 9,
  title: "Problems in Requirements",
  cheat: "No access to users. Inadequate specs. Scope creep. Late changes.",
  questions: [
    { q: "Scope creep refers to:", o:["Stable scope","Uncontrolled changes","Clear scope","Validation"], a:1 },
    { q: "No access to users is a:", o:["Benefit","Problem","Tool","Technique"], a:1 },
    { q: "Inadequate specs cause:", o:["Clear scope","Problems","Better design","Fast coding"], a:1 },
    { q: "Late changes usually cause:", o:["Less work","Rework","Success","No impact"], a:1 },
    { q: "Difficult validation is a:", o:["Benefit","Problem","Solution","Tool"], a:1 }
  ]
},

/* ================== 10. BPA ================== */
{
  section: 10,
  title: "Business Process Automation (BPA)",
  cheat: "Automates As-is system. Least change.",
  questions: [
    { q: "BPA focuses on:", o:["To-be","As-is","Future","New"], a:1 },
    { q: "BPA is characterized by:", o:["Most change","Moderate change","Least change","No change"], a:2 },
    { q: "BPA automates:", o:["Redesigned process","Current process","Future process","Removed process"], a:1 },
    { q: "BPA mainly improves:", o:["Innovation","Efficiency","UI","Architecture"], a:1 },
    { q: "BPA changes level is:", o:["High","Medium","Low","None"], a:2 }
  ]
},

/* ================== 11. BPI ================== */
{
  section: 11,
  title: "Business Process Improvement (BPI)",
  cheat: "Improves existing processes. Moderate change.",
  questions: [
    { q: "BPI involves change level:", o:["Least","Moderate","Most","None"], a:1 },
    { q: "BPI focuses on:", o:["Improving existing process","Redesign","Removal","Automation only"], a:0 },
    { q: "BPI is more aggressive than:", o:["BPR","BPA","Agile","Scrum"], a:1 },
    { q: "BPI improves:", o:["As-is process","To-be only","Architecture","Legacy"], a:0 },
    { q: "BPI change level is:", o:["Low","Moderate","High","None"], a:1 }
  ]
},

/* ================== 12. BPR ================== */
{
  section: 12,
  title: "Business Process Reengineering (BPR)",
  cheat: "Redesign processes. Most change. Focus on To-be.",
  questions: [
    { q: "BPR involves:", o:["Least","Moderate","Most","None"], a:2 },
    { q: "BPR focuses on:", o:["As-is","To-be","Legacy","Tools"], a:1 },
    { q: "BPR results in:", o:["Small improvement","Incremental change","Complete redesign","Automation"], a:2 },
    { q: "BPR is used for:", o:["Minor issues","Major problems","Stable process","No change"], a:1 },
    { q: "BPR change level is:", o:["Low","Moderate","High","None"], a:2 }
  ]
},

/* ================== 13. REQUIREMENTS GATHERING ================== */
{
  section: 13,
  title: "Requirements Gathering",
  cheat: "Goal: uncover all requirements before design.",
  questions: [
    { q: "Goal of requirements gathering is to:", o:["Write code","Uncover requirements","Design UI","Test system"], a:1 },
    { q: "Requirements gathering occurs:", o:["Before design","After coding","After testing","During deployment"], a:0 },
    { q: "Gathering is done to:", o:["Skip analysis","Understand needs","Reduce scope","Deploy faster"], a:1 },
    { q: "Requirements gathering happens:", o:["Early SDLC","Late SDLC","Maintenance","Deployment"], a:0 },
    { q: "Main output of gathering is:", o:["Source code","Requirements","UI","Database"], a:1 }
  ]
},

/* ================== 14. INTERVIEWS ================== */
{
  section: 14,
  title: "Interviews",
  cheat: "Most popular technique. Open, closed, probing.",
  questions: [
    { q: "Most popular technique is:", o:["Questionnaire","Interview","Observation","JAD"], a:1 },
    { q: "Open-ended questions:", o:["Limit answers","Encourage discussion","End interview","Skip topics"], a:1 },
    { q: "Closed-ended questions give:", o:["Stories","Yes/No","Opinions","Details"], a:1 },
    { q: "Probing questions are used to:", o:["Clarify details","End interview","Limit scope","Change topic"], a:0 },
    { q: "Interviews involve:", o:["Groups","One or few users","No users","Documents"], a:1 }
  ]
},

/* ================== 15. JAD ================== */
{
  section: 15,
  title: "Joint Application Development (JAD)",
  cheat: "Structured group meeting with users & analysts.",
  questions: [
    { q: "JAD is a:", o:["Interview","Group meeting","Observation","Survey"], a:1 },
    { q: "JAD participants include:", o:["Users only","Analysts only","Users and analysts","Developers only"], a:2 },
    { q: "JAD requires a:", o:["Programmer","Facilitator","Tester","Manager"], a:1 },
    { q: "JAD sessions are:", o:["Unplanned","Structured","Informal","Random"], a:1 },
    { q: "JAD helps to:", o:["Increase conflict","Increase consensus","Delay project","Skip analysis"], a:1 }
  ]
},

/* ================== 16. QUESTIONNAIRES / OBS / DOC ================== */
{
  section: 16,
  title: "Questionnaires, Observation & Document Analysis",
  cheat: "Questionnaires = large groups. Observation = watch users. Document analysis = As-is.",
  questions: [
    { q: "Questionnaires are suitable for:", o:["Small groups","Large populations","One user","Developers"], a:1 },
    { q: "Observation means:", o:["Asking users","Watching users","Reading documents","Meeting"], a:1 },
    { q: "Document analysis studies:", o:["To-be","As-is","Future users","New tech"], a:1 },
    { q: "Observation focuses on:", o:["Opinions","Actual behavior","Future needs","Reports"], a:1 },
    { q: "Questionnaires collect:", o:["Code","Responses","UI","Design"], a:1 }
  ]
},

/* ================== 17. USE-CASE DIAGRAM ================== */
{
  section: 17,
  title: "Use-case Diagram",
  cheat: "Shows user perspective and system boundary.",
  questions: [
    { q: "Use-case diagram shows:", o:["Database","User perspective","Code","UI"], a:1 },
    { q: "Use-case diagram defines:", o:["System boundary","Algorithms","UI color","Database"], a:0 },
    { q: "Actor appears in:", o:["Class diagram","Use-case diagram","ERD","Flowchart"], a:1 },
    { q: "Use-case diagram focuses on:", o:["Implementation","User interaction","Technology","Database"], a:1 },
    { q: "System boundary represents:", o:["Code","Scope","UI","DB"], a:1 }
  ]
},

/* ================== 18. USE-CASE ================== */
{
  section: 18,
  title: "Use-case",
  cheat: "High-level user goal. UI-independent.",
  questions: [
    { q: "A use-case represents:", o:["Internal processing","User goal","UI design","Database"], a:1 },
    { q: "Use-cases are:", o:["UI-dependent","UI-independent","Code-dependent","DB-dependent"], a:1 },
    { q: "Which is NOT a use-case?", o:["Withdraw money","Transfer funds","Confirm amount","Check balance"], a:2 },
    { q: "Use-cases describe:", o:["Algorithms","Interaction sequence","Database","UI color"], a:1 },
    { q: "Use-cases focus on:", o:["System internals","User needs","Code","Performance"], a:1 }
  ]
},

/* ================== 19. ACTOR ================== */
{
  section: 19,
  title: "Actor",
  cheat: "Actor = role played by user or external system.",
  questions: [
    { q: "An actor represents:", o:["User","Role","Screen","Database"], a:1 },
    { q: "Actors can be:", o:["Users only","Systems only","Users or external systems","Databases"], a:2 },
    { q: "One actor can represent:", o:["One user","Many users","One screen","One DB"], a:1 },
    { q: "Actors interact with:", o:["Classes","Use-cases","Tables","Methods"], a:1 },
    { q: "Which is NOT an actor?", o:["Customer","ATM system","Database table","Payment gateway"], a:2 }
  ]
},

/* ================== 20. INCLUDE / EXTEND ================== */
{
  section: 20,
  title: "Use-case Relationships",
  cheat: "<<include>> = mandatory. <<extend>> = optional/exceptional.",
  questions: [
    { q: "<<include>> relationship means:", o:["Optional","Mandatory","Conditional","Rare"], a:1 },
    { q: "<<extend>> relationship means:", o:["Mandatory","Optional","Always","Shared"], a:1 },
    { q: "Shared behavior uses:", o:["Extend","Include","Actor","System"], a:1 },
    { q: "Exceptional behavior uses:", o:["Include","Extend","Actor","Boundary"], a:1 },
    { q: "Include behavior is:", o:["Conditional","Always executed","Optional","Rare"], a:1 }
  ]
},

/* ================== 21. BUILDING USE-CASE ================== */
{
  section: 21,
  title: "Building Use-case Diagram",
  cheat: "Define boundary → actors → use-cases → relationships → verify.",
  questions: [
    { q: "First step in building a use-case diagram is:", o:["Identify actors","Define boundary","Identify use-cases","Verify"], a:1 },
    { q: "Second step is:", o:["Define boundary","Identify actors","Verify","Code"], a:1 },
    { q: "After identifying actors, next is:", o:["Verify","Identify use-cases","Draw UI","Deploy"], a:1 },
    { q: "Last step is:", o:["Actors","Relationships","Verify","Implement"], a:2 },
    { q: "Verification ensures:", o:["Code","Correct representation","UI","Performance"], a:1 }
  ]
},

/* ================== 22. CLASSIFICATION ================== */
{
  section: 22,
  title: "Classification of Use-cases",
  cheat: "Classified by risk, architecture, large functionality, new technology, customer interest.",
  questions: [
    { q: "Risk classification focuses on:", o:["UI","Uncertainty","Users","Cost"], a:1 },
    { q: "Architecture classification focuses on:", o:["Roles","System structure","UI","Rules"], a:1 },
    { q: "Large functionality refers to:", o:["Small tasks","Major functions","Buttons","Reports"], a:1 },
    { q: "New technology classification focuses on:", o:["Users","Tools","Novelty","Cost"], a:2 },
    { q: "Customer interest focuses on:", o:["Developers","Managers","Users","System size"], a:2 }
  ]
}

];

