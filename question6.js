var questionBank = [

/* ================== 6.1 DYNAMIC BEHAVIOUR ================== */
{
  section: "6.1",
  title: "Dynamic Behaviour",
  cheat: "Dynamic = behavior over time. HOW system behaves.",
  questions: [
    { q:"Dynamic behaviour focuses on:", o:["Structure","Behavior over time","Data storage","Architecture"], a:1 },
    { q:"Dynamic modelling answers:", o:["WHAT exists","HOW system behaves","WHAT classes exist","System scope"], a:1 },
    { q:"Dynamic behaviour is concerned with:", o:["Attributes","Operations execution","Class hierarchy","Static links"], a:1 },
    { q:"Dynamic models complement:", o:["Use-case diagram","Class diagram","Deployment diagram","ERD"], a:1 },
    { q:"Dynamic behaviour is represented mainly by:", o:["Structural diagrams","Behavioral diagrams","Architectural diagrams","Database diagrams"], a:1 }
  ]
},

/* ================== 6.2 BEHAVIORAL DIAGRAMS ================== */
{
  section: "6.2",
  title: "Behavioral Diagrams",
  cheat: "Behavioral diagrams show interaction, flow, state.",
  questions: [
    { q:"Which is a behavioral diagram?", o:["Class","Sequence","Component","Deployment"], a:1 },
    { q:"Behavioral diagrams model:", o:["Structure","Behavior","Architecture","Database"], a:1 },
    { q:"Which is NOT a behavioral diagram?", o:["Activity","State","Sequence","Class"], a:3 },
    { q:"Behavioral diagrams focus on:", o:["Static structure","Dynamic behavior","Data schema","UI layout"], a:1 },
    { q:"Behavioral diagrams are used to model:", o:["Runtime behavior","Compilation","Storage","Hardware"], a:0 }
  ]
},

/* ================== 6.3 ACTIVITY DIAGRAM ================== */
{
  section: "6.3",
  title: "Activity Diagram",
  cheat: "Activity = workflow / control flow.",
  questions: [
    { q:"Activity diagram represents:", o:["Structure","Workflow","State changes","Messages"], a:1 },
    { q:"Activity diagrams show:", o:["Data structure","Control flow","Class hierarchy","Architecture"], a:1 },
    { q:"Activities are:", o:["Low-level code","High-level tasks","Classes","Objects"], a:1 },
    { q:"Activity diagram is useful for modeling:", o:["Algorithms only","Business processes","Static relationships","Deployment"], a:1 },
    { q:"Activity diagrams are similar to:", o:["ERD","Flowcharts","Class diagrams","Component diagrams"], a:1 }
  ]
},

/* ================== 6.4 DECISION & MERGE ================== */
{
  section: "6.4",
  title: "Decision & Merge Nodes",
  cheat: "Decision = branching. Guards must be exclusive.",
  questions: [
    { q:"Decision node is used to:", o:["Merge flows","Split flow based on condition","Start activity","End activity"], a:1 },
    { q:"Conditions on decision branches are called:", o:["Events","Guards","States","Actions"], a:1 },
    { q:"Guards in decision node must be:", o:["Optional","Mutually exclusive","Parallel","Sequential"], a:1 },
    { q:"Merge node is used to:", o:["Split flow","Join alternative flows","Run parallel tasks","End process"], a:1 },
    { q:"Decision and merge nodes appear in:", o:["Class diagrams","Activity diagrams","Sequence diagrams","State diagrams"], a:1 }
  ]
},

/* ================== 6.5 FORK & JOIN ================== */
{
  section: "6.5",
  title: "Fork & Join",
  cheat: "Fork = parallel start. Join = parallel end.",
  questions: [
    { q:"Fork node is used to:", o:["Merge paths","Start parallel flows","End activity","Make decisions"], a:1 },
    { q:"Join node is used to:", o:["Split flow","Synchronize parallel flows","Start workflow","Add conditions"], a:1 },
    { q:"Fork creates:", o:["Sequential flow","Parallel activities","Alternative paths","Recursive flow"], a:1 },
    { q:"Join waits for:", o:["One path","All parallel paths","Any path","Guard condition"], a:1 },
    { q:"Fork & join are used in:", o:["Sequence diagrams","Activity diagrams","Class diagrams","Use-case diagrams"], a:1 }
  ]
},

/* ================== 6.6 SWIMLANES ================== */
{
  section: "6.6",
  title: "Swimlanes",
  cheat: "Swimlane = responsibility partition.",
  questions: [
    { q:"Swimlanes are used to:", o:["Show timing","Assign responsibility","Show state","Show messages"], a:1 },
    { q:"Swimlanes separate:", o:["States","Actors/roles","Classes","Objects"], a:1 },
    { q:"Swimlanes help identify:", o:["Attributes","Responsibilities","Data types","Inheritance"], a:1 },
    { q:"Swimlanes appear in:", o:["Sequence diagrams","Activity diagrams","State diagrams","Class diagrams"], a:1 },
    { q:"Each swimlane represents:", o:["One activity","One role/actor","One object","One method"], a:1 }
  ]
},

/* ================== 6.7 STATE DIAGRAM ================== */
{
  section: "6.7",
  title: "State Diagram",
  cheat: "State diagram = object behavior by states.",
  questions: [
    { q:"State diagram models:", o:["Class structure","Object behavior","Workflow","Architecture"], a:1 },
    { q:"State diagrams focus on:", o:["Classes","Objects","Attributes","Operations"], a:1 },
    { q:"State represents:", o:["An action","A condition","A method","A message"], a:1 },
    { q:"State diagrams are best for:", o:["Static systems","Reactive systems","Database design","Deployment"], a:1 },
    { q:"State diagrams describe behavior in terms of:", o:["Messages","States and transitions","Activities","Objects"], a:1 }
  ]
},

/* ================== 6.8 EVENTS & TRANSITIONS ================== */
{
  section: "6.8",
  title: "Events & Transitions",
  cheat: "Event triggers transition.",
  questions: [
    { q:"A transition occurs when:", o:["State ends","Event occurs","Action completes","Time expires"], a:1 },
    { q:"An event is:", o:["A state","A trigger","An action","A condition"], a:1 },
    { q:"Transition connects:", o:["Two classes","Two states","Two objects","Two activities"], a:1 },
    { q:"Which triggers state change?", o:["Attribute","Event","Operation","Guard"], a:1 },
    { q:"Transitions appear in:", o:["Activity diagram","State diagram","Sequence diagram","Class diagram"], a:1 }
  ]
},

/* ================== 6.9 ENTRY / EXIT / DO ================== */
{
  section: "6.9",
  title: "Entry / Exit / Do",
  cheat: "entry = on enter, exit = on leave, do = while in state.",
  questions: [
    { q:"Entry action executes:", o:["When leaving state","When entering state","During transition","After exit"], a:1 },
    { q:"Exit action executes:", o:["When entering state","When leaving state","During state","Before entry"], a:1 },
    { q:"Do activity executes:", o:["On entry","While in state","On exit","On transition"], a:1 },
    { q:"Entry / exit / do belong to:", o:["Activities","States","Transitions","Events"], a:1 },
    { q:"Which diagram uses entry/exit/do?", o:["Sequence","Activity","State","Class"], a:2 }
  ]
},

/* ================== 6.10 SEQUENCE DIAGRAM ================== */
{
  section: "6.10",
  title: "Sequence Diagram",
  cheat: "Sequence = time order of messages.",
  questions: [
    { q:"Sequence diagram emphasizes:", o:["Structure","Time order","State","Workflow"], a:1 },
    { q:"Sequence diagrams show:", o:["Class relationships","Message exchange","Data schema","Deployment"], a:1 },
    { q:"Lifeline represents:", o:["Class","Object","State","Method"], a:1 },
    { q:"Messages are ordered by:", o:["Position","Time","Color","Number"], a:1 },
    { q:"Sequence diagram focuses on:", o:["WHAT","WHEN","WHO","WHY"], a:1 }
  ]
},

/* ================== 6.11 COMMUNICATION DIAGRAM ================== */
{
  section: "6.11",
  title: "Communication Diagram",
  cheat: "Communication = structure + numbered messages.",
  questions: [
    { q:"Communication diagram emphasizes:", o:["Time","Links","State","Workflow"], a:1 },
    { q:"Message order is shown using:", o:["Vertical axis","Numbering","Color","Position"], a:1 },
    { q:"Communication diagrams focus on:", o:["Timing","Object links","Activities","States"], a:1 },
    { q:"Compared to sequence diagram, communication diagram:", o:["Shows more time detail","Shows structural relationships","Uses swimlanes","Shows states"], a:1 },
    { q:"Communication diagram is also called:", o:["Collaboration diagram","Interaction overview","State diagram","Activity diagram"], a:0 }
  ]
},

/* ================== 6.12 SEQUENCE vs COMMUNICATION ================== */
{
  section: "6.12",
  title: "Sequence vs Communication",
  cheat: "Sequence = time. Communication = structure.",
  questions: [
    { q:"Which emphasizes time?", o:["Sequence","Communication","Activity","State"], a:0 },
    { q:"Which emphasizes object relationships?", o:["Sequence","Communication","Activity","State"], a:1 },
    { q:"Which is easier to see message order?", o:["Sequence","Communication","Both","None"], a:0 },
    { q:"Which consumes more space?", o:["Sequence","Communication","Both equal","None"], a:0 },
    { q:"Both are types of:", o:["Structural diagrams","Behavioral diagrams","Architectural diagrams","Deployment diagrams"], a:1 }
  ]
},

/* ================== 6.13 LINK TO CH4 & CH5 ================== */
{
  section: "6.13",
  title: "Relation to Ch4 & Ch5",
  cheat: "Ch4 = requirements. Ch5 = structure. Ch6 = behavior.",
  questions: [
    { q:"Use-cases (Ch4) are realized using:", o:["Class diagrams","Behavioral diagrams","Deployment diagrams","ERD"], a:1 },
    { q:"Class diagrams (Ch5) provide:", o:["Behavior","Structure","Workflow","Timing"], a:1 },
    { q:"Dynamic diagrams (Ch6) show:", o:["WHAT exists","HOW system behaves","System scope","Data schema"], a:1 },
    { q:"Which chapter links use-cases to classes?", o:["Ch4","Ch5","Ch6","Ch7"], a:2 },
    { q:"Correct order is:", o:["Structure → Requirements → Behavior","Requirements → Structure → Behavior","Behavior → Structure → Requirements","Deployment → Behavior → Structure"], a:1 }
  ]
}

];
