var questionBank = [

/* ================== 5.1 STATIC STRUCTURAL MODELLING ================== */
{
  section: "5.1",
  title: "Static Structural Modelling",
  cheat: "Static modelling = Structure (WHAT exists). Dynamic modelling = Behavior (HOW it works).",
  questions: [
    { q: "Static structural modelling primarily focuses on:", o:["System behavior over time","The structure of the system","The order of messages","The algorithms used"], a:1 },
    { q: "Which view represents the static structure of the system?", o:["Dynamic view","Static view","Interaction view","Users view"], a:1 },
    { q: "Which diagram is part of the Static View?", o:["Sequence diagram","Activity diagram","Class diagram","State diagram"], a:2 },
    { q: "Static modelling answers which question about the system?", o:["HOW the system behaves","WHEN events occur","WHAT elements exist in the system","WHY the system is built"], a:2 },
    { q: "The essential step in object-oriented design is modelling:", o:["Class diagrams","Activity diagrams","Use-case diagrams","State diagrams"], a:0 }
  ]
},

/* ================== 5.2 CLASS DIAGRAM ================== */
{
  section: "5.2",
  title: "Class Diagrams",
  cheat: "Class Diagrams: Set of classes/interfaces & relationships. Used in both Analysis (conceptual) and Design (implementation).",
  questions: [
    { q: "A class diagram consists of:", o:["Actors and Use Cases","Classes, interfaces, and relationships","States and transitions","Messages and lifelines"], a:1 },
    { q: "Which class diagram type is developed in the analysis phase?", o:["Design class diagram","Conceptual (Domain) model","Deployment diagram","Sequence diagram"], a:1 },
    { q: "The Design Class Diagram describes the system from the:", o:["User point of view","Marketing point of view","Software developer point of view","Tester point of view"], a:2 },
    { q: "Does an Analysis Class Diagram contain implementation details (like visibility)?", o:["Yes, always","No, it is conceptual","Yes, for Java only","Yes, for C++ only"], a:1 },
    { q: "A Design Class Diagram is a detailed version of:", o:["The Use Case diagram","The Activity diagram","The Analysis Class diagram","The Component diagram"], a:2 }
  ]
},

/* ================== 5.3 CLASS ================== */
{
  section: "5.3",
  title: "Class",
  cheat: "Class = Blueprint/Concept. Consists of Attributes + Operations. Example: 'Student' is a class, 'John' is an object.",
  questions: [
    { q: "A UML Class represents:", o:["A specific runtime object","A class or interface concept","A database table only","A hardware component"], a:1 },
    { q: "A class consists of a set of:", o:["Inputs and outputs","Attributes and operations","Keys and values","Messages and signals"], a:1 },
    { q: "In the notation 'Student', 'Student' represents the:", o:["Attribute","Operation","Class Name","Visibility"], a:2 },
    { q: "Which of the following is an example of a Class (not an object)?", o:["justin_bieber","Person","12345","date_of_birth"], a:1 },
    { q: "In Java, a class is defined using which keyword?", o:["struct","interface","class","object"], a:2 }
  ]
},

/* ================== 5.4 ATTRIBUTES ================== */
{
  section: "5.4",
  title: "Attributes",
  cheat: "Attributes = Characteristics/Data. Format: 'name : type = default_value'.",
  questions: [
    { q: "Attributes represent the:", o:["Behavior of the class","Necessary data of class instances","Interaction between classes","User interface"], a:1 },
    { q: "Which of the following is a correct attribute notation?", o:["calculate() : int","name : string","Student","+"], a:1 },
    { q: "If a characteristic (like 'Salary') is complex or debatable, it should be modeled as:", o:["An attribute","A separate Class","An operation","A package"], a:1 },
    { q: "In 'count : integer = 10', what is '10'?", o:["The type","The name","The default value","The visibility"], a:2 },
    { q: "Attributes are typically usually placed in which part of the class box?", o:["Top compartment","Middle compartment","Bottom compartment","Outside the box"], a:1 }
  ]
},

/* ================== 5.5 OPERATIONS / METHODS ================== */
{
  section: "5.5",
  title: "Operations / Methods",
  cheat: "Operations = Behavior/Responsibility. Format: 'name(parameters) : return_type'.",
  questions: [
    { q: "Operations represent the:", o:["Characteristics of the class","Behaviors of class instances","Links between objects","Deployment location"], a:1 },
    { q: "Which of the following describes the behaviour of a class?", o:["Attributes","Associations","Operations","Multiplicity"], a:2 },
    { q: "In the notation 'area() : double', what does 'double' represent?", o:["The name","The arguments","The returned type","The visibility"], a:2 },
    { q: "Derived attributes (like /age calculated from DOB) are often implemented as:", o:["Static variables","Methods/Operations","Database keys","Interfaces"], a:1 },
    { q: "Operations are placed in which part of the class box?", o:["Top","Middle","Bottom","On the line"], a:2 }
  ]
},

/* ================== 5.6 VISIBILITY ================== */
{
  section: "5.6",
  title: "Visibility",
  cheat: "+ Public (everyone), - Private (only me), # Protected (me + kids).",
  questions: [
    { q: "Which symbol represents 'Public' visibility?", o:["-","#","+","/"], a:2 },
    { q: "Which symbol represents 'Private' visibility?", o:["+","-","#","*"], a:1 },
    { q: "Which symbol represents 'Protected' visibility (visible to subclasses)?", o:["-","+","~","#"], a:3 },
    { q: "If an attribute is private, it is visible:", o:["Outside the class","Only to objects of the class","To all subclasses","To the whole package"], a:1 },
    { q: "Getters and Setters are usually used to manipulate:", o:["Public operations","Private attributes","Protected classes","Static links"], a:1 }
  ]
},

/* ================== 5.7 ASSOCIATION ================== */
{
  section: "5.7",
  title: "Association",
  cheat: "Association = Link between classes. Has Name, Role, and Multiplicity.",
  questions: [
    { q: "An association is used to show:", o:["How classes inherit from each other","How classes are linked together","The internal state of a class","The hardware deployment"], a:1 },
    { q: "Each end of an association is called a:", o:["Pointer","Link","Role","Method"], a:2 },
    { q: "Associations are by default:", o:["Unidirectional","Bidirectional","Private","Protected"], a:1 },
    { q: "Navigability (arrowhead) on an association indicates:", o:["Inheritance","Directional association","Aggregation","Composition"], a:1 },
    { q: "When using a directional association, the target class is often implemented as:", o:["A subclass","An attribute inside the source class","A separate package","An interface"], a:1 }
  ]
},

/* ================== 5.8 MULTIPLICITY ================== */
{
  section: "5.8",
  title: "Multiplicity",
  cheat: "Multiplicity = How many. 1 (only 1), 0..1 (optional), * (many), 1..* (at least 1).",
  questions: [
    { q: "What does the multiplicity '1..*' mean?", o:["Zero or many","One and only one","From one to many","Zero or one"], a:2 },
    { q: "What does the multiplicity '0..1' mean?", o:["Exactly one","Zero or only one","Many","At least one"], a:1 },
    { q: "What does the symbol '*' represent in multiplicity?", o:["Exactly one","Zero or many","From one to many","Unknown"], a:1 },
    { q: "If a Bank has exactly one Manager, the multiplicity is:", o:["0..1","1..*","*","1"], a:3 },
    { q: "Multiplicity is defined at:", o:["The center of the class","The attribute name","The ends of an association","The operation return type"], a:2 }
  ]
},

/* ================== 5.9 INHERITANCE (GENERALIZATION) ================== */
{
  section: "5.9",
  title: "Inheritance",
  cheat: "Inheritance = 'Is-a' relationship. Triangle arrow pointing to Parent. (Child is a Parent).",
  questions: [
    { q: "Inheritance is also known as:", o:["Association","Aggregation","Generalization/Specialization","Composition"], a:2 },
    { q: "In inheritance, the subclass:", o:["Is a part of the superclass","Is a kind of superclass","Owns the superclass","Describes the superclass"], a:1 },
    { q: "The 'Substitution Principle' states that:", o:["Superclasses can replace subclasses","Subclass objects can play the role of the parent-class","Attributes can replace methods","Interfaces can replace classes"], a:1 },
    { q: "Which symbol represents inheritance?", o:["Diamond","Solid line with arrow","Line with hollow triangle","Dotted line"], a:2 },
    { q: "A 'discriminator' in inheritance describes:", o:["The visibility level","The multiplicity","The criterion for specialization","The number of objects"], a:2 }
  ]
},

/* ================== 5.10 AGGREGATION ================== */
{
  section: "5.10",
  title: "Aggregation",
  cheat: "Aggregation = 'Has-a' (weak). White Diamond. Part can exist without Whole.",
  questions: [
    { q: "Aggregation expresses which type of relationship?", o:["Is-a","Whole-part (weak)","Generalization","Implementation"], a:1 },
    { q: "Which symbol denotes Aggregation?", o:["Black diamond","White (hollow) diamond","Triangle","Arrow"], a:1 },
    { q: "In Aggregation, if the 'Whole' is destroyed, the 'Part':", o:["Must be destroyed","Can continue to exist","Becomes an interface","Is deleted automatically"], a:1 },
    { q: "Which phrase best describes Aggregation?", o:["A Student is a Person","A Car has a Wheel","A Cat is an Animal","A Square is a Polygon"], a:1 },
    { q: "The diamond symbol is placed on which side?", o:["The 'Part' side","The 'Whole' (Aggregate) side","In the middle","On both sides"], a:1 }
  ]
},

/* ================== 5.11 COMPOSITION ================== */
{
  section: "5.11",
  title: "Composition",
  cheat: "Composition = 'Part-of' (Strong). Black Diamond. Part dies if Whole dies.",
  questions: [
    { q: "Composition is a:", o:["Weak form of aggregation","Strong form of aggregation","Type of inheritance","Type of interface"], a:1 },
    { q: "Which symbol denotes Composition?", o:["White diamond","Black (filled) diamond","Triangle","Dotted arrow"], a:1 },
    { q: "In Composition, if the 'Whole' is destroyed:", o:["The parts are also destroyed","The parts survive","The parts are moved","Nothing happens to parts"], a:0 },
    { q: "Which example best fits Composition?", o:["University and Student","Library and Book","Folder and File (File cannot exist without Folder)","Car and Passenger"], a:2 },
    { q: "Composition implies:", o:["Shared ownership","Exclusive ownership and lifecycle","No ownership","Remote communication"], a:1 }
  ]
},

/* ================== 5.12 DEPENDENCY & INTERFACE ================== */
{
  section: "5.12",
  title: "Dependency & Interface",
  cheat: "Dependency = 'Uses' (dashed arrow). Interface = Behavior only (no implementation).",
  questions: [
    { q: "Dependency indicates that:", o:["A class inherits from another","A class is composed of another","A class uses/depends on another","A class contains another"], a:2 },
    { q: "Dependency is usually represented by:", o:["A solid line","A dashed line with an arrow","A diamond","A triangle"], a:1 },
    { q: "An Abstract Class:", o:["Cannot have instances/objects","Has all methods implemented","Cannot have subclasses","Is the same as an object"], a:0 },
    { q: "An Interface specifies:", o:["Implementation details","Attributes only","Operations without implementation","Private data"], a:2 },
    { q: "Which notation is used for an Interface?", o:["<<interface>>","{abstract}","[class]","(static)"], a:0 }
  ]
}

];
