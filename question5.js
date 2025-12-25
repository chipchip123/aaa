questionBank = [

/* ================== 5.1 STATIC STRUCTURAL MODELLING ================== */
{
  section: "5.1",
  title: "Static Structural Modelling",
  cheat: "Static structure = WHAT exists in system (classes, attributes, relationships). NOT behavior.",
  questions: [
    { q:"Static structural modelling focuses on:", o:["System behavior","System structure","Execution flow","Runtime interaction"], a:1 },
    { q:"Static structure describes:", o:["Message order","Relationships among classes","State changes","Control flow"], a:1 },
    { q:"Which diagram mainly represents static structure?", o:["Sequence","Activity","Class","State"], a:2 },
    { q:"Static structural modelling answers:", o:["HOW system behaves","WHEN events occur","WHAT elements exist","WHO executes actions"], a:2 },
    { q:"Static models are mostly used during:", o:["Coding","Design","Testing","Deployment"], a:1 }
  ]
},

/* ================== 5.2 CLASS ================== */
{
  section: "5.2",
  title: "Class",
  cheat: "Class = blueprint describing attributes + operations.",
  questions: [
    { q:"A class represents:", o:["An object","A blueprint","A method","A message"], a:1 },
    { q:"Classes describe:", o:["Only data","Only behavior","Data and behavior","Messages"], a:2 },
    { q:"Which belongs to a class?", o:["Scenario","Attribute","Use-case","Actor"], a:1 },
    { q:"Class diagram shows:", o:["Instances","Blueprints","Runtime flow","Algorithms"], a:1 },
    { q:"Class is defined at:", o:["Runtime","Design time","Execution","Deployment"], a:1 }
  ]
},

/* ================== 5.3 ATTRIBUTE ================== */
{
  section: "5.3",
  title: "Attribute",
  cheat: "Attribute = property/data of a class.",
  questions: [
    { q:"An attribute represents:", o:["Behavior","Property","Message","Operation"], a:1 },
    { q:"Attributes store:", o:["Logic","Data","Control","Flow"], a:1 },
    { q:"Which is an attribute?", o:["withdraw()","balance","login()","transfer()"], a:1 },
    { q:"Attributes are usually shown as:", o:["Methods","Variables","Actors","Messages"], a:1 },
    { q:"Attribute values belong to:", o:["Class","Object","Diagram","Actor"], a:1 }
  ]
},

/* ================== 5.4 OPERATION (METHOD) ================== */
{
  section: "5.4",
  title: "Operation (Method)",
  cheat: "Operation = behavior/function of a class (WHAT it can do).",
  questions: [
    { q:"An operation represents:", o:["Data","Behavior","Relationship","Attribute"], a:1 },
    { q:"Operations describe:", o:["WHAT system does","HOW system implemented","UI design","Database"], a:0 },
    { q:"Which is an operation?", o:["balance","accountId","withdraw()","customerName"], a:2 },
    { q:"Operations correspond closely to:", o:["Functional requirements","Non-functional requirements","UI layout","Deployment"], a:0 },
    { q:"Operations are triggered by:", o:["Classes","Actors","Attributes","Messages"], a:1 }
  ]
},

/* ================== 5.5 ASSOCIATION ================== */
{
  section: "5.5",
  title: "Association",
  cheat: "Association = structural relationship between classes.",
  questions: [
    { q:"Association represents:", o:["Inheritance","Structural relationship","Behavior","Dependency"], a:1 },
    { q:"Association connects:", o:["Objects","Classes","Methods","States"], a:1 },
    { q:"Association is shown using:", o:["Arrow","Line","Diamond","Circle"], a:1 },
    { q:"Association indicates:", o:["Execution order","Link between classes","Message flow","State change"], a:1 },
    { q:"Association exists at:", o:["Runtime only","Design level","Execution level","Deployment"], a:1 }
  ]
},

/* ================== 5.6 MULTIPLICITY ================== */
{
  section: "5.6",
  title: "Multiplicity",
  cheat: "Multiplicity = how many objects participate in a relationship.",
  questions: [
    { q:"Multiplicity specifies:", o:["Order","Quantity","Speed","Direction"], a:1 },
    { q:"Which is a multiplicity?", o:["login()","1..*","Customer","has"], a:1 },
    { q:"1..* means:", o:["Exactly one","At least one","At most one","Zero only"], a:1 },
    { q:"Multiplicity is placed:", o:["Inside class","On association ends","On attributes","On operations"], a:1 },
    { q:"Multiplicity applies to:", o:["Attributes","Associations","States","Messages"], a:1 }
  ]
},

/* ================== 5.7 GENERALIZATION (INHERITANCE) ================== */
{
  section: "5.7",
  title: "Generalization / Inheritance",
  cheat: "Generalization = is-a relationship.",
  questions: [
    { q:"Generalization represents:", o:["has-a","is-a","uses","depends"], a:1 },
    { q:"Inheritance allows:", o:["Code duplication","Reuse","Isolation","Encapsulation loss"], a:1 },
    { q:"Which symbol represents inheritance?", o:["Diamond","Arrow with triangle","Line","Circle"], a:1 },
    { q:"Superclass provides:", o:["Data only","Behavior only","Common features","UI"], a:2 },
    { q:"Subclass:", o:["Cannot add features","Inherits from superclass","Deletes attributes","Breaks design"], a:1 }
  ]
},

/* ================== 5.8 AGGREGATION ================== */
{
  section: "5.8",
  title: "Aggregation",
  cheat: "Aggregation = weak has-a (shared lifetime). White diamond.",
  questions: [
    { q:"Aggregation is a type of:", o:["Inheritance","Association","Dependency","Generalization"], a:1 },
    { q:"Aggregation indicates:", o:["Strong ownership","Weak ownership","Behavior","Control"], a:1 },
    { q:"Aggregation uses:", o:["Black diamond","White diamond","Arrow","Circle"], a:1 },
    { q:"In aggregation, parts:", o:["Cannot exist alone","May exist independently","Are destroyed together","Are inherited"], a:1 },
    { q:"Aggregation is weaker than:", o:["Association","Composition","Dependency","Generalization"], a:1 }
  ]
},

/* ================== 5.9 COMPOSITION ================== */
{
  section: "5.9",
  title: "Composition",
  cheat: "Composition = strong has-a (same lifetime). Black diamond.",
  questions: [
    { q:"Composition indicates:", o:["Weak ownership","Strong ownership","Inheritance","Dependency"], a:1 },
    { q:"Composition uses:", o:["White diamond","Black diamond","Arrow","Line"], a:1 },
    { q:"In composition, parts:", o:["Can exist alone","Share lifetime","Are inherited","Are optional"], a:1 },
    { q:"Composition is stronger than:", o:["Association","Aggregation","Dependency","Generalization"], a:1 },
    { q:"If whole is destroyed, parts:", o:["Remain","Also destroyed","Move","Detach"], a:1 }
  ]
},

/* ================== 5.10 ANALYSIS vs DESIGN CLASS ================== */
{
  section: "5.10",
  title: "Analysis vs Design Class",
  cheat: "Analysis = WHAT. Design = HOW.",
  questions: [
    { q:"Analysis classes focus on:", o:["Implementation","User requirements","Code","Technology"], a:1 },
    { q:"Design classes focus on:", o:["WHAT","HOW","WHY","WHO"], a:1 },
    { q:"Which belongs to design class?", o:["Business concept","Algorithm detail","User goal","Requirement"], a:1 },
    { q:"Analysis models are closer to:", o:["Coding","Problem domain","Database","UI"], a:1 },
    { q:"Design models are closer to:", o:["Requirements","Implementation","Stakeholders","Users"], a:1 }
  ]
}

];
