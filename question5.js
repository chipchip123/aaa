questionBank = [

/* ========= 5.1 CLASS DIAGRAM ========= */
{
  section: 5.1,
  title: "Class Diagram",
  cheat: "Class diagram models static structure of the system.",
  questions: [
    { q: "Class diagram represents:", o: ["Dynamic behavior","Static structure","Workflow","Execution"], a: 1 },
    { q: "Class diagram focuses on:", o: ["HOW system runs","WHAT exists in system","Timing","Messages"], a: 1 },
    { q: "Class diagram is used mainly in:", o: ["Analysis & Design","Testing","Deployment","Maintenance"], a: 0 },
    { q: "Class diagram builds:", o: ["UI","System skeleton","Test cases","Algorithms"], a: 1 },
    { q: "Class diagram shows:", o: ["Messages","Classes & relationships","States","Timing"], a: 1 }
  ]
},

/* ========= 5.2 ANALYSIS vs DESIGN ========= */
{
  section: 5.2,
  title: "Analysis vs Design Class Diagram",
  cheat: "Analysis = user view. Design = implementation view.",
  questions: [
    { q: "Analysis class diagram avoids:", o: ["User concepts","Implementation details","Domain objects","Requirements"], a: 1 },
    { q: "Design class diagram includes:", o: ["Concepts only","Attributes & methods","User goals","Use-cases"], a: 1 },
    { q: "Visibility symbols appear in:", o: ["Analysis","Design","Use-case","Activity"], a: 1 },
    { q: "Design class diagram is created after:", o: ["Coding","Analysis","Testing","Deployment"], a: 1 },
    { q: "Design diagram targets:", o: ["Users","Developers","Managers","Customers"], a: 1 }
  ]
},

/* ========= 5.3 CLASS RELATIONSHIPS ========= */
{
  section: 5.3,
  title: "Class Relationships",
  cheat: "Relationships: association, inheritance, aggregation, composition, dependency.",
  questions: [
    { q: "Inheritance represents:", o: ["Has-a","Uses","Is-a","Part-of"], a: 2 },
    { q: "Aggregation implies:", o: ["Strong ownership","Weak ownership","No relation","Inheritance"], a: 1 },
    { q: "Composition implies:", o: ["Independent lifecycle","Strong ownership","Temporary use","No relation"], a: 1 },
    { q: "Dependency indicates:", o: ["Permanent link","Temporary usage","Whole-part","Is-a"], a: 1 },
    { q: "Multiplicity defines:", o: ["Visibility","Number of instances","Methods","Attributes"], a: 1 }
  ]
},

/* ========= 5.4 OBJECT DIAGRAM ========= */
{
  section: 5.4,
  title: "Object Diagram",
  cheat: "Object diagram = snapshot of object instances at a specific time.",
  questions: [
    { q: "Object diagram shows:", o: ["Classes","Objects","Methods","States"], a: 1 },
    { q: "Object diagram is:", o: ["Dynamic view","Static snapshot","Workflow","Behavior"], a: 1 },
    { q: "Object diagram is instance of:", o: ["Class diagram","Use-case","Sequence","State"], a: 0 },
    { q: "Object name is written:", o: ["Bold","Italic","Underlined","Uppercase"], a: 2 },
    { q: "Object diagram helps understand:", o: ["Runtime snapshot","UI","Algorithms","Code syntax"], a: 0 }
  ]
},

/* ========= 5.5 COUPLING & COHESION ========= */
{
  section: 5.5,
  title: "Coupling & Cohesion",
  cheat: "Good design = low coupling, high cohesion.",
  questions: [
    { q: "Low coupling means:", o: ["Many dependencies","Few dependencies","Strong ownership","Inheritance"], a: 1 },
    { q: "High cohesion indicates:", o: ["Unrelated tasks","Single responsibility","Many purposes","Weak design"], a: 1 },
    { q: "Which is a benefit of low coupling?", o: ["Hard maintenance","Easy change","High risk","Tight dependency"], a: 1 },
    { q: "Which is NOT a benefit of high cohesion?", o: ["Clarity","Maintainability","Unrelated responsibilities","Reuse"], a: 2 },
    { q: "Best design aims for:", o: ["High coupling","Low cohesion","Low coupling & high cohesion","High coupling & cohesion"], a: 2 }
  ]
}

];
