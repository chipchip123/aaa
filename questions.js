const questionBank = [

/* ================== 1. REQUIREMENTS ================== */
{
  section: 1,
  title: "Requirements – WHAT vs HOW",
  questions: [
    {
      q: "A requirement focuses on:",
      o: ["HOW the system is implemented", "WHAT the system must do", "Programming language", "Framework"],
      a: 1,
      e: "Keyword: WHAT → Requirement. HOW → Implementation (NOT requirement)."
    },
    {
      q: "Which best describes a requirement?",
      o: ["Algorithm design", "System characteristic", "Source code", "Database schema"],
      a: 1,
      e: "System characteristics (performance, security…) are requirements."
    },
    {
      q: "Which is NOT a requirement?",
      o: ["User goal", "System characteristic", "How the system is implemented", "What the system must do"],
      a: 2,
      e: "HOW = implementation detail."
    },
    {
      q: "Performance is classified as:",
      o: ["Implementation", "System characteristic", "Algorithm", "Framework"],
      a: 1,
      e: "Performance = system characteristic → requirement."
    },
    {
      q: "Requirements focus on WHAT rather than:",
      o: ["User needs", "System goals", "HOW the system works internally", "Business rules"],
      a: 2,
      e: "WHAT not HOW."
    }
  ]
},

/* ================== 2. SDLC & IMPORTANCE ================== */
{
  section: 2,
  title: "SDLC & Importance of Requirements",
  questions: [
    {
      q: "The most critical step of SDLC is:",
      o: ["Design", "Implementation", "Requirements determination", "Testing"],
      a: 2,
      e: "Most critical step → requirements determination."
    },
    {
      q: "More than 50% of system failures are caused by:",
      o: ["Coding errors", "Poor testing", "Requirements problems", "Deployment issues"],
      a: 2,
      e: "50% failures → requirements."
    },
    {
      q: "Changes are easiest during:",
      o: ["Testing", "Maintenance", "Requirements phase", "Deployment"],
      a: 2,
      e: "Changes easiest in requirements phase."
    },
    {
      q: "Incorrect requirements often lead to:",
      o: ["Lower cost", "System success", "System failure", "Better design"],
      a: 2,
      e: "Bad requirements → failure."
    },
    {
      q: "Why is requirements determination important?",
      o: ["Because it reduces testing", "Because it defines what to build", "Because it selects technology", "Because it writes code"],
      a: 1,
      e: "Requirements define WHAT to build."
    }
  ]
},

/* ================== 3. AS-IS vs TO-BE ================== */
{
  section: 3,
  title: "As-is vs To-be System",
  questions: [
    {
      q: "As-is system refers to:",
      o: ["Future system", "Proposed system", "Current system", "Ideal system"],
      a: 2,
      e: "As-is = current system."
    },
    {
      q: "To-be system refers to:",
      o: ["Legacy system", "Current system", "Proposed system", "Broken system"],
      a: 2,
      e: "To-be = future / proposed system."
    },
    {
      q: "Which pair is correct?",
      o: ["As-is = future, To-be = current", "As-is = current, To-be = future", "Both are current", "Both are future"],
      a: 1,
      e: "As-is → current, To-be → future."
    },
    {
      q: "Document analysis mainly studies:",
      o: ["To-be system", "As-is system", "Future users", "New technology"],
      a: 1,
      e: "Document analysis focuses on As-is."
    },
    {
      q: "BPR focuses more on:",
      o: ["As-is system", "To-be system", "Current technology", "Legacy process"],
      a: 1,
      e: "BPR focuses on To-be."
    }
  ]
},

/* ================== 4. ITERATIVE / INCREMENTAL ================== */
{
  section: 4,
  title: "Iterative & Incremental Development",
  questions: [
    {
      q: "Iterative development means:",
      o: ["Build once", "Repeat development cycles", "Skip testing", "Skip design"],
      a: 1,
      e: "Iterative = repeat cycles."
    },
    {
      q: "Incremental development means:",
      o: ["All features at once", "Features delivered in parts", "No planning", "Only testing"],
      a: 1,
      e: "Incremental = build step by step."
    },
    {
      q: "Iterative & incremental are characteristics of:",
      o: ["Waterfall", "OOSAD", "Maintenance", "Deployment"],
      a: 1,
      e: "OOSAD uses iterative & incremental."
    },
    {
      q: "Which approach reduces risk?",
      o: ["Big-bang delivery", "Iterative development", "Late testing", "No feedback"],
      a: 1,
      e: "Iterative reduces risk."
    },
    {
      q: "Incremental delivery allows:",
      o: ["Late feedback", "Early user feedback", "No feedback", "No change"],
      a: 1,
      e: "Incremental → early feedback."
    }
  ]
},

/* 👉 CÁC PHẦN 5 → 21: 
   Functional req, Non-functional req, Req definition, Determination, Problems,
   BPA, BPI, BPR, Gathering, Interviews, JAD, Questionnaires/Obs/Doc,
   Use-case diagram, Use-case, Actor, Include/Extend,
   Building UC, Classification
   → cùng CẤU TRÚC như trên
*/
];
