
var questionBank = [

/* ================== 7.1 ARCHITECTURAL MODELLING ================== */
{
  section: "7.1",
  title: "Architectural Modelling",
  cheat: "Architecture = high-level structure of system components.",
  questions: [
    { q:"Software architecture describes:", o:["Low-level code","High-level system structure","Algorithms","UI design"], a:1 },
    { q:"Architecture focuses on:", o:["Implementation details","Major components & relationships","Coding style","Syntax"], a:1 },
    { q:"Architectural modelling answers:", o:["HOW code is written","WHAT components exist","WHEN messages are sent","WHO uses system"], a:1 },
    { q:"Architecture is concerned with:", o:["Objects only","Components and connections","States","Activities"], a:1 },
    { q:"Architectural models are created mainly during:", o:["Testing","Design","Maintenance","Deployment"], a:1 }
  ]
},

/* ================== 7.2 COMPONENT ================== */
{
  section: "7.2",
  title: "Component",
  cheat: "Component = replaceable, deployable unit.",
  questions: [
    { q:"A component is:", o:["A class","A deployable unit","An object","A database"], a:1 },
    { q:"Components are:", o:["Not reusable","Reusable and replaceable","Always static","UI only"], a:1 },
    { q:"Component hides:", o:["Architecture","Implementation details","Interfaces","Deployment"], a:1 },
    { q:"Components interact through:", o:["Attributes","Interfaces","States","Methods"], a:1 },
    { q:"Component diagrams show:", o:["Runtime behavior","System structure","Hardware layout","State changes"], a:1 }
  ]
},

/* ================== 7.3 COMPONENT DIAGRAM ================== */
{
  section: "7.3",
  title: "Component Diagram",
  cheat: "Component diagram shows software components & dependencies.",
  questions: [
    { q:"Component diagrams represent:", o:["Classes","Software components","Objects","Messages"], a:1 },
    { q:"Component diagram focuses on:", o:["Dynamic behavior","Implementation structure","Workflow","Timing"], a:1 },
    { q:"Component diagrams are useful for:", o:["Coding","System organization","UI design","Testing"], a:1 },
    { q:"Which is shown in component diagram?", o:["Attributes","Interfaces","States","Activities"], a:1 },
    { q:"Component diagram belongs to:", o:["Behavioral diagrams","Structural diagrams","Dynamic diagrams","Interaction diagrams"], a:1 }
  ]
},

/* ================== 7.4 INTERFACE ================== */
{
  section: "7.4",
  title: "Interface",
  cheat: "Interface defines services a component provides/requires.",
  questions: [
    { q:"An interface specifies:", o:["Implementation","Services","Deployment","State"], a:1 },
    { q:"Provided interface means:", o:["Component needs service","Component offers service","Component is unused","Component is optional"], a:1 },
    { q:"Required interface means:", o:["Component provides service","Component needs service","Component is complete","Component is deployed"], a:1 },
    { q:"Interfaces promote:", o:["Tight coupling","Loose coupling","Inheritance","Duplication"], a:1 },
    { q:"Interfaces hide:", o:["Architecture","Implementation details","Dependencies","Deployment"], a:1 }
  ]
},

/* ================== 7.5 DEPENDENCY ================== */
{
  section: "7.5",
  title: "Dependency",
  cheat: "Dependency = one component relies on another.",
  questions: [
    { q:"Dependency indicates:", o:["Strong ownership","Reliance","Inheritance","Composition"], a:1 },
    { q:"If A depends on B:", o:["A provides service to B","A uses B","A owns B","A inherits B"], a:1 },
    { q:"Dependency is usually drawn as:", o:["Solid line","Dashed arrow","Diamond","Triangle"], a:1 },
    { q:"Dependency implies:", o:["Lifetime control","Temporary reliance","Strong coupling","Composition"], a:1 },
    { q:"Dependencies appear in:", o:["Component diagrams","State diagrams","Activity diagrams","Sequence diagrams"], a:0 }
  ]
},

/* ================== 7.6 ARCHITECTURAL STYLES ================== */
{
  section: "7.6",
  title: "Architectural Styles",
  cheat: "Common styles: Layered, Client–Server, MVC.",
  questions: [
    { q:"Architectural style defines:", o:["Code syntax","Overall system organization","UI color","Algorithms"], a:1 },
    { q:"Layered architecture separates system into:", o:["States","Layers","Objects","Nodes"], a:1 },
    { q:"Client–server architecture divides system into:", o:["Actors & use-cases","Clients & servers","Layers","Objects"], a:1 },
    { q:"MVC separates:", o:["Hardware","Model, View, Controller","Classes","States"], a:1 },
    { q:"Architectural styles help achieve:", o:["Random design","Consistency","Code duplication","Tight coupling"], a:1 }
  ]
},

/* ================== 7.7 DEPLOYMENT MODELLING ================== */
{
  section: "7.7",
  title: "Deployment Modelling",
  cheat: "Deployment = physical distribution of software.",
  questions: [
    { q:"Deployment modelling shows:", o:["Code structure","Physical architecture","Business logic","Algorithms"], a:1 },
    { q:"Deployment focuses on:", o:["Logical design","Hardware & software mapping","Use-cases","States"], a:1 },
    { q:"Deployment diagrams represent:", o:["Runtime behavior","Physical nodes","Class relationships","Workflow"], a:1 },
    { q:"Deployment modelling is done after:", o:["Requirements","Design","Implementation","Testing"], a:1 },
    { q:"Deployment answers:", o:["WHAT system does","WHERE software runs","HOW algorithms work","WHO uses system"], a:1 }
  ]
},

/* ================== 7.8 DEPLOYMENT DIAGRAM ================== */
{
  section: "7.8",
  title: "Deployment Diagram",
  cheat: "Deployment diagram = nodes + artifacts.",
  questions: [
    { q:"Deployment diagram shows:", o:["Components only","Nodes and artifacts","States","Activities"], a:1 },
    { q:"A node represents:", o:["A class","A physical device","An object","An attribute"], a:1 },
    { q:"Artifacts represent:", o:["Source code","Deployed software","States","Messages"], a:1 },
    { q:"Nodes communicate via:", o:["Associations","Communication paths","Inheritance","Activities"], a:1 },
    { q:"Deployment diagram belongs to:", o:["Behavioral","Structural","Architectural","Dynamic"], a:2 }
  ]
},

/* ================== 7.9 NODE ================== */
{
  section: "7.9",
  title: "Node",
  cheat: "Node = hardware or execution environment.",
  questions: [
    { q:"A node is:", o:["A class","A physical or virtual machine","A component","A method"], a:1 },
    { q:"Which is a node?", o:["Customer","Web server","Controller","Service"], a:1 },
    { q:"Nodes host:", o:["Actors","Artifacts","States","Activities"], a:1 },
    { q:"Execution environment is a:", o:["Component","Node","Class","Object"], a:1 },
    { q:"Nodes appear in:", o:["Class diagrams","Deployment diagrams","Activity diagrams","State diagrams"], a:1 }
  ]
},

/* ================== 7.10 ARTIFACT ================== */
{
  section: "7.10",
  title: "Artifact",
  cheat: "Artifact = deployable software unit.",
  questions: [
    { q:"An artifact is:", o:["A class","A deployable file","A state","A node"], a:1 },
    { q:"Examples of artifacts include:", o:[".exe, .jar","Classes","Objects","States"], a:0 },
    { q:"Artifacts are deployed on:", o:["Components","Nodes","Interfaces","Actors"], a:1 },
    { q:"Artifacts represent:", o:["Source concepts","Physical software","Behavior","Requirements"], a:1 },
    { q:"Artifacts appear in:", o:["Component diagrams","Deployment diagrams","State diagrams","Activity diagrams"], a:1 }
  ]
},

/* ================== 7.11 LINK TO CH4–5–6 ================== */
{
  section: "7.11",
  title: "Relation to Ch4, Ch5, Ch6",
  cheat: "Ch4 = what. Ch5 = structure. Ch6 = behavior. Ch7 = physical & architectural.",
  questions: [
    { q:"Use-cases (Ch4) are implemented using:", o:["Deployment diagrams","Components","Nodes","Artifacts"], a:1 },
    { q:"Class diagrams (Ch5) define:", o:["Behavior","Structure","Hardware","Deployment"], a:1 },
    { q:"Dynamic diagrams (Ch6) describe:", o:["WHAT exists","HOW system behaves","WHERE system runs","Hardware"], a:1 },
    { q:"Deployment diagrams (Ch7) show:", o:["Logical structure","Physical structure","Workflow","State"], a:1 },
    { q:"Correct abstraction order is:", o:["Behavior → Structure → Requirements → Deployment",
                                             "Requirements → Structure → Behavior → Deployment",
                                             "Deployment → Behavior → Structure → Requirements",
                                             "Structure → Deployment → Behavior → Requirements"], a:1 }
  ]
}

];
