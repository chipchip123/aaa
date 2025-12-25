var questionBank = [

/* ================== 5.1 STATIC STRUCTURAL MODELLING ================== */
{
  section: "5.1",
  title: "Static Structural Modelling",
  cheat: "Static = structure, not behavior. Answers WHAT exists.",
  questions: [
    { q: "Static structural modelling focuses on:", o:["System behavior","System structure","Execution order","Message flow"], a:1 },
    { q: "Static structure describes:", o:["Runtime interaction","Relationships and classes","Timing","State changes"], a:1 },
    { q: "Which diagram shows static structure?", o:["Sequence","Activity","Class","State"], a:2 },
    { q: "Static modelling answers:", o:["HOW system behaves","WHEN messages are sent","WHAT exists in system","HOW algorithms work"], a:2 },
    { q: "Static models are created mainly during:", o:["Testing","Design","Deployment","Maintenance"], a:1 },
    { q: "Static modelling ignores:", o:["Attributes","Relationships","Runtime behavior","Operations"], a:2 }
  ]
},

/* ================== 5.2 CLASS DIAGRAM ================== */
{
  section: "5.2",
  title: "Class Diagram",
  cheat: "Class diagram = backbone of static structure.",
  questions: [
    { q: "A class diagram represents:", o:["Workflow","Static structure","State transitions","Message order"], a:1 },
    { q: "Class diagrams show:", o:["Objects at runtime","Classes and relationships","Execution flow","Timing"], a:1 },
    { q: "Which is NOT shown in a class diagram?", o:["Attributes","Operations","States","Associations"], a:2 },
    { q: "Class diagram is mainly used in:", o:["Analysis only","Design only","Analysis and design","Testing"], a:2 },
    { q: "A class diagram answers:", o:["WHEN","HOW FAST","WHAT","WHY"], a:2 }
  ]
},

/* ================== 5.3 CLASS ================== */
{
  section: "5.3",
  title: "Class",
  cheat: "Class = blueprint. Object = instance.",
  questions: [
    { q: "A class is a:", o:["Specific object","Blueprint","Message","State"], a:1 },
    { q: "A class defines:", o:["Only data","Only behavior","Data and behavior","Execution order"], a:2 },
    { q: "Which is an example of a class?", o:["customer1","Customer","login()","balance"], a:1 },
    { q: "Objects are created from:", o:["Attributes","Classes","Operations","Methods"], a:1 },
    { q: "A class represents:", o:["One instance","Multiple instances","Runtime value","UI screen"], a:1 }
  ]
},

/* ================== 5.4 ATTRIBUTE ================== */
{
  section: "5.4",
  title: "Attribute",
  cheat: "Attribute = data/state of a class.",
  questions: [
    { q: "An attribute represents:", o:["Behavior","Data","Message","Relationship"], a:1 },
    { q: "Attributes are shown in:", o:["Top compartment","Middle compartment","Bottom compartment","Outside class"], a:1 },
    { q: "Which is an attribute?", o:["withdraw()","Customer","balance","transfer()"], a:2 },
    { q: "Attributes usually have:", o:["Visibility and type","Only name","Only value","Only method"], a:0 },
    { q: "Attributes describe:", o:["What class does","What class knows","How class behaves","When class executes"], a:1 }
  ]
},

/* ================== 5.5 OPERATION / METHOD ================== */
{
  section: "5.5",
  title: "Operation / Method",
  cheat: "Operation = behavior/function of a class.",
  questions: [
    { q: "An operation represents:", o:["Data","Behavior","Relationship","State"], a:1 },
    { q: "Operations are shown in:", o:["Top compartment","Middle compartment","Bottom compartment","Outside class"], a:2 },
    { q: "Which is an operation?", o:["balance","Customer","withdraw()","accountId"], a:2 },
    { q: "Operations describe:", o:["What class knows","What class does","What class owns","What class stores"], a:1 },
    { q: "Operation parameters describe:", o:["Data stored","Input/output","Relationships","Visibility"], a:1 }
  ]
},

/* ================== 5.6 VISIBILITY ================== */
{
  section: "5.6",
  title: "Visibility",
  cheat: "+ public, - private, # protected",
  questions: [
    { q: "Public visibility is denoted by:", o:["-","#","+", "~"], a:2 },
    { q: "Private visibility is denoted by:", o:["#","+","-","~"], a:2 },
    { q: "Protected visibility is denoted by:", o:["~","#","+","-"], a:1 },
    { q: "Which visibility allows access by subclasses?", o:["Private","Public","Protected","Package"], a:2 },
    { q: "Visibility controls:", o:["Execution speed","Access level","Data type","Object creation"], a:1 }
  ]
},

/* ================== 5.7 ASSOCIATION ================== */
{
  section: "5.7",
  title: "Association",
  cheat: "Association = relationship between classes.",
  questions: [
    { q: "An association represents:", o:["Inheritance","Relationship","Behavior","State"], a:1 },
    { q: "Association connects:", o:["Objects only","Classes","Methods","Attributes"], a:1 },
    { q: "Multiplicity defines:", o:["Direction","Number of instances","Visibility","Type"], a:1 },
    { q: "Which is an association example?", o:["Customer owns Account","Customer inherits Person","Account part of Bank","Order composed of Items"], a:0 },
    { q: "Association is a:", o:["Structural relationship","Behavioral diagram","State change","Execution flow"], a:0 }
  ]
},

/* ================== 5.8 MULTIPLICITY ================== */
{
  section: "5.8",
  title: "Multiplicity",
  cheat: "1, 0..1, 1..*, *",
  questions: [
    { q: "Multiplicity indicates:", o:["Direction","Number of instances","Visibility","Ownership"], a:1 },
    { q: "1..* means:", o:["Zero or one","Exactly one","One or more","Many optional"], a:2 },
    { q: "0..1 means:", o:["Exactly one","At least one","Zero or one","Many"], a:2 },
    { q: "* means:", o:["One","Zero","Many","At least one"], a:2 },
    { q: "Multiplicity is placed near:", o:["Class name","Attribute","Association end","Operation"], a:2 }
  ]
},

/* ================== 5.9 GENERALIZATION (INHERITANCE) ================== */
{
  section: "5.9",
  title: "Generalization / Inheritance",
  cheat: "is-a relationship. Triangle arrow.",
  questions: [
    { q: "Generalization represents:", o:["has-a","is-a","uses-a","owns-a"], a:1 },
    { q: "Inheritance allows:", o:["Code duplication","Reuse","Deletion","Encapsulation"], a:1 },
    { q: "Which arrow represents inheritance?", o:["Diamond","Triangle","Circle","Line"], a:1 },
    { q: "Subclass inherits:", o:["Nothing","Only attributes","Attributes and operations","Only methods"], a:2 },
    { q: "Generalization is a:", o:["Behavioral relationship","Structural relationship","State change","Message"], a:1 }
  ]
},

/* ================== 5.10 AGGREGATION ================== */
{
  section: "5.10",
  title: "Aggregation",
  cheat: "has-a (weak). White diamond.",
  questions: [
    { q: "Aggregation represents:", o:["is-a","has-a (weak)","part-of (strong)","dependency"], a:1 },
    { q: "Aggregation uses which symbol?", o:["Black diamond","White diamond","Triangle","Arrow"], a:1 },
    { q: "In aggregation, part can:", o:["Exist independently","Never exist alone","Be destroyed always","Be shared"], a:0 },
    { q: "Aggregation is weaker than:", o:["Association","Composition","Generalization","Dependency"], a:1 },
    { q: "Aggregation implies:", o:["Ownership","Loose ownership","Strong lifecycle","No relationship"], a:1 }
  ]
},

/* ================== 5.11 COMPOSITION ================== */
{
  section: "5.11",
  title: "Composition",
  cheat: "part-of (strong). Black diamond.",
  questions: [
    { q: "Composition represents:", o:["Weak has-a","Strong part-of","is-a","uses-a"], a:1 },
    { q: "Composition uses which symbol?", o:["White diamond","Black diamond","Triangle","Arrow"], a:1 },
    { q: "In composition, part:", o:["Can exist independently","Depends on whole","Is optional","Is shared"], a:1 },
    { q: "Composition implies:", o:["Loose coupling","Strong lifecycle dependency","No ownership","Inheritance"], a:1 },
    { q: "If whole is destroyed, part:", o:["Remains","Is destroyed","Is reused","Is ignored"], a:1 }
  ]
},

/* ================== 5.12 AGGREGATION vs COMPOSITION ================== */
{
  section: "5.12",
  title: "Aggregation vs Composition",
  cheat: "Aggregation = weak. Composition = strong.",
  questions: [
    { q: "Which has strong ownership?", o:["Association","Aggregation","Composition","Dependency"], a:2 },
    { q: "Which allows independent existence?", o:["Composition","Aggregation","Inheritance","Dependency"], a:1 },
    { q: "White diamond means:", o:["Composition","Aggregation","Inheritance","Association"], a:1 },
    { q: "Black diamond means:", o:["Association","Aggregation","Composition","Dependency"], a:2 },
    { q: "Lifecycle dependency exists in:", o:["Aggregation","Composition","Association","Generalization"], a:1 }
  ]
}

];
