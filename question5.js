questionBank = [

/* ================== 1. STATIC STRUCTURAL MODELLING ================== */
{
  section: 1,
  title: "Static Structural Modelling",
  cheat: "Class diagrams represent the static view of the system.",
  questions: [
    { q:"Static structural modelling focuses on:", o:["System behavior","Static view of the system","Runtime interaction","Dynamic flow"], a:1 },
    { q:"Which diagram represents static structure?", o:["Sequence","Class","Activity","State"], a:1 },
    { q:"Static view describes:", o:["Execution order","Relationships and structure","Message flow","Timing"], a:1 },
    { q:"Static modelling ignores:", o:["Classes","Attributes","Runtime behavior","Relationships"], a:2 },
    { q:"Static modelling is mainly done using:", o:["Use-case","Class","Sequence","Activity"], a:1 }
  ]
},

/* ================== 2. CLASS DIAGRAM ================== */
{
  section: 2,
  title: "Class Diagram",
  cheat: "Class diagram shows classes and relationships.",
  questions: [
    { q:"Class diagram consists of:", o:["Objects","Classes and relationships","Messages","Scenarios"], a:1 },
    { q:"Class diagram mainly shows:", o:["Dynamic flow","Static structure","UI","Behavior"], a:1 },
    { q:"Class diagrams are essential in:", o:["Testing","Object-oriented design","Deployment","Maintenance"], a:1 },
    { q:"Class diagram helps build:", o:["UI","System skeleton","Database","Test cases"], a:1 },
    { q:"Which is NOT shown in class diagram?", o:["Attributes","Operations","Relationships","Message order"], a:3 }
  ]
},

/* ================== 3. ANALYSIS vs DESIGN CLASS DIAGRAM ================== */
{
  section: 3,
  title: "Analysis vs Design Class Diagram",
  cheat: "Analysis = user view. Design = developer view.",
  questions: [
    { q:"Analysis class diagram is created in:", o:["Design phase","Analysis phase","Implementation","Testing"], a:1 },
    { q:"Design class diagram is created in:", o:["Analysis phase","Design phase","Requirement phase","Testing"], a:1 },
    { q:"Analysis class diagram represents:", o:["Implementation","User view","Code structure","Language"], a:1 },
    { q:"Design class diagram focuses on:", o:["Concepts","Implementation details","Business rules","User needs"], a:1 },
    { q:"Which contains implementation details?", o:["Analysis diagram","Design diagram","Use-case","Domain model"], a:1 }
  ]
},

/* ================== 4. ANALYSIS CLASS DIAGRAM ================== */
{
  section: 4,
  title: "Analysis Class Diagram",
  cheat: "Conceptual (domain) model. No implementation details.",
  questions: [
    { q:"Analysis class diagram is also called:", o:["Design model","Domain model","Object model","System model"], a:1 },
    { q:"Analysis class diagram captures:", o:["Algorithms","Concepts","Code","Frameworks"], a:1 },
    { q:"Analysis diagram focuses on:", o:["HOW","WHAT concepts exist","Programming language","Visibility"], a:1 },
    { q:"Which is excluded from analysis diagram?", o:["Concepts","Classes","Implementation details","Relationships"], a:2 },
    { q:"Analysis class diagram is mainly for:", o:["Developers","Users & stakeholders","Testers","Maintainers"], a:1 }
  ]
},

/* ================== 5. DESIGN CLASS DIAGRAM ================== */
{
  section: 5,
  title: "Design Class Diagram",
  cheat: "Detailed diagram with attributes, methods, visibility.",
  questions: [
    { q:"Design class diagram is:", o:["Conceptual","Detailed","Abstract","User-oriented"], a:1 },
    { q:"Design class diagram includes:", o:["Concepts only","Attributes and methods","Use-cases","Scenarios"], a:1 },
    { q:"Design diagram is closer to:", o:["User view","Developer view","Business view","Customer view"], a:1 },
    { q:"Design diagram conforms to:", o:["Business rules","Programming language","User needs","Concepts"], a:1 },
    { q:"One analysis class may map to:", o:["One design class","Several design classes","No class","One interface"], a:1 }
  ]
},

/* ================== 6. CLASS ================== */
{
  section: 6,
  title: "Class",
  cheat: "Class = attributes + operations.",
  questions: [
    { q:"A UML class represents:", o:["An object","A class or interface","A method","A variable"], a:1 },
    { q:"A class consists of:", o:["Methods only","Attributes and operations","Objects only","Messages"], a:1 },
    { q:"Operations represent:", o:["Data","Behavior","Structure","Visibility"], a:1 },
    { q:"Attributes represent:", o:["Behavior","Data","Messages","Operations"], a:1 },
    { q:"Design class diagram often uses:", o:["HTML","Java/C++","SQL","Python"], a:1 }
  ]
},

/* ================== 7. ATTRIBUTES ================== */
{
  section: 7,
  title: "Attributes",
  cheat: "Attributes represent data of class instances.",
  questions: [
    { q:"Attributes represent:", o:["Behavior","Data","Operations","Responsibilities"], a:1 },
    { q:"Which is a simple attribute type?", o:["Object","Date","Integer","Class"], a:2 },
    { q:"Default value is written as:", o:["name:type","name=value","type:name","value:name"], a:1 },
    { q:"An attribute should belong to:", o:["Any class","Class owning the data","All classes","Interface"], a:1 },
    { q:"Salary is best modeled as:", o:["Class","Attribute","Method","Operation"], a:1 }
  ]
},

/* ================== 8. OPERATIONS ================== */
{
  section: 8,
  title: "Operations / Methods",
  cheat: "Operations represent behavior.",
  questions: [
    { q:"Operations represent:", o:["Data","Behavior","Attributes","Relationships"], a:1 },
    { q:"Getters and setters are:", o:["Attributes","Operations","Classes","Objects"], a:1 },
    { q:"Operations may include:", o:["Name only","Return type and parameters","Attributes only","Visibility only"], a:1 },
    { q:"Class responsibility is carried out by:", o:["Attributes","Operations","Objects","Relationships"], a:1 },
    { q:"move(p:Point) is an example of:", o:["Attribute","Operation","Class","Association"], a:1 }
  ]
},

/* ================== 9. VISIBILITY ================== */
{
  section: 9,
  title: "Visibility",
  cheat: "+ public, # protected, - private.",
  questions: [
    { q:"Public visibility symbol is:", o:["-","#","+", "*"], a:2 },
    { q:"Private visibility symbol is:", o:["#","+","-","~"], a:2 },
    { q:"Protected visibility symbol is:", o:["#","-","+","*"], a:0 },
    { q:"Private members are visible to:", o:["All classes","Subclasses","Same class only","Packages"], a:2 },
    { q:"Visibility applies to:", o:["Classes only","Attributes & operations","Objects only","Relationships"], a:1 }
  ]
},

/* ================== 10. RELATIONSHIP TYPES ================== */
{
  section: 10,
  title: "Relationship Types",
  cheat: "Association, Inheritance, Aggregation, Composition, Dependency.",
  questions: [
    { q:"Which is NOT a relationship type?", o:["Association","Inheritance","Dependency","Iteration"], a:3 },
    { q:"Inheritance represents:", o:["Has-a","Is-a","Uses","Part-of"], a:1 },
    { q:"Dependency indicates:", o:["Strong ownership","Temporary usage","Whole-part","Generalization"], a:1 },
    { q:"Strongest relationship is:", o:["Association","Aggregation","Composition","Dependency"], a:2 },
    { q:"Whole-part relationship can be:", o:["Association","Aggregation","Composition","All of these"], a:3 }
  ]
},

/* ================== 11. ASSOCIATION ================== */
{
  section: 11,
  title: "Association",
  cheat: "Semantic connection between classes.",
  questions: [
    { q:"Association represents:", o:["Behavior","Semantic connection","Inheritance","Ownership"], a:1 },
    { q:"Association links are between:", o:["Objects","Classes","Methods","Packages"], a:1 },
    { q:"Each end of association is called:", o:["Class","Role","Attribute","Operation"], a:1 },
    { q:"Association is usually:", o:["Unidirectional","Bidirectional","Private","Protected"], a:1 },
    { q:"Association abstracts:", o:["Code","Links between instances","UI","Database"], a:1 }
  ]
},

/* ================== 12. MULTIPLICITY ================== */
{
  section: 12,
  title: "Multiplicity",
  cheat: "Defines number of instances involved.",
  questions: [
    { q:"Multiplicity defines:", o:["Direction","Quantity","Behavior","Visibility"], a:1 },
    { q:"1..* means:", o:["Zero or one","Exactly one","One to many","Zero to many"], a:2 },
    { q:"0..1 means:", o:["Exactly one","Zero or one","Many","One to many"], a:1 },
    { q:"* means:", o:["One","Many","Zero or many","One or many"], a:2 },
    { q:"Multiplicity is written at:", o:["Class center","Association ends","Operation","Attribute"], a:1 }
  ]
},

/* ================== 13. AGGREGATION ================== */
{
  section: 13,
  title: "Aggregation",
  cheat: "Weak whole–part relationship.",
  questions: [
    { q:"Aggregation represents:", o:["Strong ownership","Weak whole-part","Is-a","Temporary use"], a:1 },
    { q:"Parts in aggregation:", o:["Depend on whole","Exist independently","Are destroyed","Are inherited"], a:1 },
    { q:"Aggregation notation is:", o:["Black diamond","White diamond","Arrow","Dashed line"], a:1 },
    { q:"Aggregation is weaker than:", o:["Association","Composition","Dependency","Inheritance"], a:1 },
    { q:"Example of aggregation:", o:["Car–Engine","Team–Player","House–Room","Order–OrderLine"], a:1 }
  ]
},

/* ================== 14. COMPOSITION ================== */
{
  section: 14,
  title: "Composition",
  cheat: "Strong whole–part relationship.",
  questions: [
    { q:"Composition represents:", o:["Weak ownership","Strong whole-part","Is-a","Uses"], a:1 },
    { q:"Parts in composition:", o:["Exist independently","Depend on whole","Are shared","Are inherited"], a:1 },
    { q:"Composition notation is:", o:["White diamond","Black diamond","Arrow","Dashed line"], a:1 },
    { q:"If whole is destroyed, parts are:", o:["Moved","Destroyed","Shared","Copied"], a:1 },
    { q:"Example of composition:", o:["Team–Player","Car–Engine","Library–Book","Company–Employee"], a:1 }
  ]
},

/* ================== 15. INHERITANCE ================== */
{
  section: 15,
  title: "Inheritance / Generalization",
  cheat: "Is-a relationship.",
  questions: [
    { q:"Inheritance represents:", o:["Has-a","Is-a","Uses","Part-of"], a:1 },
    { q:"Superclass contains:", o:["Only data","Common attributes and operations","Private methods","UI"], a:1 },
    { q:"Subclass:", o:["Duplicates code","Inherits superclass","Cannot add methods","Is independent"], a:1 },
    { q:"Inheritance arrow points to:", o:["Subclass","Superclass","Object","Method"], a:1 },
    { q:"Example of inheritance:", o:["Order–Customer","Student–Person","Car–Engine","Team–Player"], a:1 }
  ]
},

/* ================== 16. DEPENDENCY ================== */
{
  section: 16,
  title: "Dependency",
  cheat: "Temporary usage relationship.",
  questions: [
    { q:"Dependency indicates:", o:["Strong ownership","Temporary use","Whole-part","Inheritance"], a:1 },
    { q:"Dependency is drawn using:", o:["Solid line","Dashed arrow","Diamond","Triangle"], a:1 },
    { q:"Dependency often occurs in:", o:["Attributes","Method parameters","Whole-part","Inheritance"], a:1 },
    { q:"Dependency is the:", o:["Strongest","Weakest","Permanent","Static"], a:1 },
    { q:"Dependency implies:", o:["Ownership","Temporary reliance","Containment","Lifetime control"], a:1 }
  ]
},

/* ================== 17. ABSTRACT CLASS ================== */
{
  section: 17,
  title: "Abstract Class",
  cheat: "Cannot be instantiated.",
  questions: [
    { q:"An abstract class:", o:["Can be instantiated","Cannot be instantiated","Has no methods","Has no attributes"], a:1 },
    { q:"Abstract operations are:", o:["Implemented","Not implemented","Private","Static"], a:1 },
    { q:"Abstract class is used to:", o:["Create objects","Provide base behavior","Store data only","Replace interface"], a:1 },
    { q:"Abstract class name is written in:", o:["Normal","Italic","Bold","Underline"], a:1 },
    { q:"Abstract class supports:", o:["Inheritance","Composition","Dependency","Aggregation"], a:0 }
  ]
},

/* ================== 18. INTERFACE ================== */
{
  section: 18,
  title: "Interface",
  cheat: "Defines operations only.",
  questions: [
    { q:"An interface contains:", o:["Attributes","Operations only","Implementation","Objects"], a:1 },
    { q:"Interfaces define a:", o:["Class","Contract","Variable","Object"], a:1 },
    { q:"A class uses interface via:", o:["Extends","Implements","Depends","Aggregates"], a:1 },
    { q:"Interfaces support:", o:["Multiple inheritance","Single inheritance","Composition","Aggregation"], a:0 },
    { q:"Interface operations are:", o:["Implemented","Abstract","Private","Static"], a:1 }
  ]
},

/* ================== 19. OBJECT DIAGRAM ================== */
{
  section: 19,
  title: "Object Diagram",
  cheat: "Snapshot of instances at runtime.",
  questions: [
    { q:"Object diagram shows:", o:["Classes","Objects","Use-cases","Methods"], a:1 },
    { q:"Object diagram represents:", o:["Static structure","Runtime snapshot","Behavior","Flow"], a:1 },
    { q:"Object diagram is an instance of:", o:["Sequence","Class","Use-case","Activity"], a:1 },
    { q:"Object diagram includes:", o:["Classes","Objects and links","Methods","Messages"], a:1 },
    { q:"Object diagram is useful for:", o:["Design only","Understanding examples","Testing only","Deployment"], a:1 }
  ]
},

/* ================== 20. BUILDING CLASS DIAGRAM ================== */
{
  section: 20,
  title: "Building Class Diagram",
  cheat: "Identify classes → attributes → operations → relationships.",
  questions: [
    { q:"First step in building class diagram is:", o:["Add methods","Identify classes","Define relationships","Add visibility"], a:1 },
    { q:"Attributes are added after:", o:["Relationships","Classes","Operations","Objects"], a:1 },
    { q:"Operations define:", o:["Data","Behavior","Visibility","Multiplicity"], a:1 },
    { q:"Relationships are defined after:", o:["Classes","Attributes","Operations","Objects"], a:0 },
    { q:"Class diagram refinement is:", o:["One-time","Iterative","Ignored","Late"], a:1 }
  ]
}

];
