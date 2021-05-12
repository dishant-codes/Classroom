(this["webpackJsonpreact-stater"]=this["webpackJsonpreact-stater"]||[]).push([[3],{278:function(e,t,c){},279:function(e,t,c){},281:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(0),j=[{id:1,title:Object(n.jsxs)(n.Fragment,{children:[" 1",")"," Functions :- "]}),descp:Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:["\xa0Oracle SQL supplies a rich library of in-built function , which can be employed for various task .",Object(n.jsx)("br",{})]}),Object(n.jsxs)("li",{children:["\xa0The Essential Capabilities of a function can be the case conversion of string . In String or a sub-string operation , mathematical computation on numeric data operations on date type value .",Object(n.jsx)("br",{})]}),Object(n.jsx)("li",{children:"\xa0SQL function optionally take arguments from user and mandatory return the value."}),Object(n.jsxs)("li",{children:["On-broader Category there are 2 types of function ",Object(n.jsx)("br",{}),"i.e.",Object(n.jsx)("br",{}),"Single Row Function ","&"," ",Object(n.jsx)("br",{}),"Multiple Row Function"]})]})})},{id:2,title:Object(n.jsxs)(n.Fragment,{children:[" 2 ",")"," Types of Function :- "]}),descp:Object(n.jsxs)(n.Fragment,{children:["\xa0\xa0",Object(n.jsxs)("strong",{children:[" A ",")"," Single Row Function "]}),Object(n.jsx)("br",{}),"\xa0\xa0\xa0Single Row Function are one who work on a single row and return one output per row.",Object(n.jsx)("br",{}),"\xa0\xa0\xa0\xa0 ",Object(n.jsx)("em",{children:"eg. ,"})," ",Object(n.jsx)("br",{}),"\xa0\xa0\xa0\xa0\xa0\xa0length and case conversion functions are single row function",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"\xa0\xa0",Object(n.jsxs)("strong",{children:[" B ",")"," Multiple Row Function "]}),Object(n.jsx)("br",{}),"\xa0\xa0\xa0 Multiple Row Function work upon group of rows & return one result for complete set of rows, they are also known as"," ",Object(n.jsx)("strong",{children:Object(n.jsx)("u",{children:"group function "})})]})}],r=c(37),l=c.n(r);c(279);var i=function(e){return Object(s.useEffect)((function(){l.a.highlightAll()}),[]),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"mt-1 mb-1 ",children:Object(n.jsx)("pre",{children:Object(n.jsx)("code",{language:e.language,children:e.code})})})})},d=[{id:1,title:Object(n.jsxs)(n.Fragment,{children:[" 1",")"," CREATE :-"]}),descp:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsxs)("p",{children:["\xa0Create Command is used to create a table in the database .",Object(n.jsx)("br",{})]})}),Object(n.jsxs)("li",{children:["The"," ",Object(n.jsx)("span",{style:{backgroundColor:"black",padding:"0px 6px 1px 6px"},children:"CREATE TABLE"})," ","command defines each column has minimum of three attributes . ",Object(n.jsx)("br",{})]})]}),Object(n.jsxs)("ul",{style:{listStyleType:"square",marginLeft:"2em"},children:[Object(n.jsx)("li",{children:"Name"}),Object(n.jsx)("li",{style:{marginTop:"0px"},children:"Data Type "}),Object(n.jsx)("li",{style:{marginTop:"0px"},children:" Size (Column Width )"})]}),Object(n.jsx)("b",{children:" Syntax :-"}),Object(n.jsx)(i,{language:"sql",code:"CREATE TABLE table_name (\n    column_name1 data_type(size),\n    column_name2 data_type(size);\n);"}),Object(n.jsx)("b",{children:" Ex :-"}),Object(n.jsx)(i,{language:"sql",code:"CREATE TABLE persons (\n    Person_Id  int ,\n    Last_Name varchar(225) ,\n    First_Name varchar(225) ,\n    Address varchar(225) ,\n    City varchar(225) ,\n);"})]})},{id:2,title:Object(n.jsxs)(n.Fragment,{children:[" 2 ",")"," ALTER :- "]}),descp:Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"ALTER Command will be used to modify the structure of the existing table using ALTER we can do following things ."}),Object(n.jsx)("br",{}),Object(n.jsx)("li",{children:"Add new columns to the table."}),Object(n.jsx)("b",{children:"Syntax :-"}),Object(n.jsx)("br",{}),Object(n.jsx)(i,{language:"sql",code:"ALTER TABLE student ADD ( Location varchar2(30));"}),Object(n.jsxs)("li",{children:["Removing existing column from table.",Object(n.jsx)("br",{}),Object(n.jsx)("b",{children:"Syntex:-"}),Object(n.jsx)(i,{language:"sql",code:"ALTER TABLE <table_name> DROP COLUMN column_name \nALTER TABLE student DROP COLUMN course"})]}),Object(n.jsxs)("li",{children:["Modify columns data type size of the table",Object(n.jsx)("br",{}),Object(n.jsx)("b",{children:"Example :- "}),Object(n.jsx)(i,{language:"sql",code:"ALTER TABLE Student MODIFY (Name varchar2(20));"}),Object(n.jsx)("span",{style:{color:"violet",fontWeight:"bold"},children:Object(n.jsx)("u",{children:"Change the name of the column of the table :-"})}),Object(n.jsx)("br",{}),Object(n.jsx)("b",{children:"Syntax :-"}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{style:{marginBottom:"2px"}}),Object(n.jsx)(i,{language:"sql",code:"ALTER TABLE <table_name> RENAME COLUMN <Old_name> TO <New_name>"}),Object(n.jsx)("b",{children:"Example :-"}),Object(n.jsx)(i,{language:"sql",code:"ALTER TABLE student RENAME COLUMN Location TO Branch"})]})]})})},{id:3,title:Object(n.jsxs)(n.Fragment,{children:["3",")"," TRUNCATE"]}),descp:Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("ul",{children:Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"TRUNCATE"})," command used to remove the data from the table.",Object(n.jsx)("br",{}),Object(n.jsx)("b",{children:"Syntax :-"}),Object(n.jsx)("div",{style:{marginBottom:"2px"}}),Object(n.jsx)(i,{language:"sql",code:"TRUNCATE TABLE <table_name>"}),Object(n.jsx)("b",{children:"Ex :-"}),Object(n.jsx)(i,{language:"sql",code:"TRUNCATE TABLE Student"})]})})})},{id:4,title:Object(n.jsxs)(n.Fragment,{children:["4",")"," DROP"]}),descp:Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"DROP"})," Command used to remove table from the database."]}),Object(n.jsxs)("li",{children:["It removes entire table from the database along with data present in it.",Object(n.jsx)("br",{}),Object(n.jsx)("b",{children:"Syntax :-"}),Object(n.jsx)("div",{style:{marginBottom:"2px"}}),Object(n.jsx)(i,{language:"sql",code:"DROP TABLE <table_name>"}),Object(n.jsx)("b",{children:"Ex :-"}),Object(n.jsx)(i,{language:"sql",code:"DROP TABLE Student"})]})]})})},{id:5,title:Object(n.jsxs)(n.Fragment,{children:["5",")"," RENAME"]}),descp:Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"RENMAE"})," Command used to change the name of database objects like table , view etc."]}),Object(n.jsxs)("li",{children:["Using this command we can change only the name of database object not the columns of the table.",Object(n.jsx)("br",{}),Object(n.jsx)("b",{children:"Syntax :-"}),Object(n.jsx)("div",{style:{marginBottom:"2px"}}),Object(n.jsx)(i,{language:"sql",code:"RENAME TABLE <Old_name> TO <New_name>"}),Object(n.jsx)("b",{children:"Ex :-"}),Object(n.jsx)(i,{language:"sql",code:"RENAME Student TO Student_data"})]})]})})}],a=[{id:1,title:Object(n.jsx)(n.Fragment,{}),descp:Object(n.jsxs)(n.Fragment,{children:["Using SQL Command CREATE TABLE ","&"," views of five schemas for any organization like college, bank, hospital, travel agency, books details."]})},{id:2,title:Object(n.jsxs)(n.Fragment,{children:[" 1",")"," STUDENT_DETAILS :-"]}),descp:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(i,{code:" SQL > CREATE TABLE STUDENT_DETAILS (ROLL_NO INT, NAME VARCHAR(20), CLASS VARCHAR(20),BRANCH VARCHAR(20),PERCENTAGE FLOAT(4));\n SQL > DESC STUDENT_DETAILS \n SQL > INSERT INTO STUDENT_DETAILS VALUES (10,'AAA','II Year','B.Sc IT','74.0');\n SQL > INSERT INTO STUDENT_DETAILS VALUES (2,'BBB','II Year','B.Sc IT','58.7');\n SQL > INSERT INTO STUDENT_DETAILS VALUES (15,'CCC','II Year','B.Sc IT','72.8');\n SQL > INSERT INTO STUDENT_DETAILS VALUES (9,'DDD','II Year','B.Sc IT','54.4');\n SQL > INSERT INTO STUDENT_DETAILS VALUES (11,'EEE','II Year','B.Sc IT','70.2');",language:"sql"}),Object(n.jsx)("div",{class:"table-responsive",children:Object(n.jsxs)("table",{class:"table bg-dark table-sm align-middle",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"ROLL_NO"}),Object(n.jsx)("th",{scope:"col",children:"NAME"}),Object(n.jsx)("th",{scope:"col",children:"CLASS"}),Object(n.jsx)("th",{scope:"col",children:"BRANCH"}),Object(n.jsx)("th",{scope:"col",children:"PERCENTAGE"})]})}),Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:"10"}),Object(n.jsx)("td",{children:"AAA"}),Object(n.jsx)("td",{children:"II Year"}),Object(n.jsx)("td",{children:"B.Sc IT "}),Object(n.jsx)("td",{children:"74.0"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:"2"}),Object(n.jsx)("td",{children:"BBB"}),Object(n.jsx)("td",{children:"II Year"}),Object(n.jsx)("td",{children:"B.Sc IT "}),Object(n.jsx)("td",{children:"58.7"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:"15"}),Object(n.jsx)("td",{children:"CCC"}),Object(n.jsx)("td",{children:"II Year"}),Object(n.jsx)("td",{children:"B.Sc IT "}),Object(n.jsx)("td",{children:"72.8"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:"9"}),Object(n.jsx)("td",{children:"DDD"}),Object(n.jsx)("td",{children:"II Year"}),Object(n.jsx)("td",{children:"B.Sc IT "}),Object(n.jsx)("td",{children:"54.4"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:"11"}),Object(n.jsx)("td",{children:"EEE"}),Object(n.jsx)("td",{children:"II Year"}),Object(n.jsx)("td",{children:"B.Sc IT "}),Object(n.jsx)("td",{children:"70.2"})]})]})]})})]})},{id:3,title:Object(n.jsxs)(n.Fragment,{children:["2",")"," ACCOUNT_DETAILS :-"]}),descp:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(i,{code:" SQL > CREATE TABLE ACCOUNT_DETAILS (AC_NO NUMBER, AC_HOLDER VARCHAR(20), AC_TYPE VARCHAR(20),BALANCE NUMBER,LOAN VARCHAR(10));\n SQL > DESC ACCOUNT_DETAILS \n SQL > INSERT INTO  ACCOUNT_DETAILS VALUES (01,'AAA','SAVING',4000,'NO');\n SQL > INSERT INTO  ACCOUNT_DETAILS VALUES (02,'BBB','SAVING',5400,'NO');\n SQL > INSERT INTO  ACCOUNT_DETAILS VALUES (03,'CCC','SAVING',6400,'NO');\n SQL > INSERT INTO  ACCOUNT_DETAILS VALUES (04,'DDD','SAVING',4000,'YES');",language:"sql"}),Object(n.jsx)("div",{class:"table-responsive",children:Object(n.jsxs)("table",{class:"table bg-dark table-sm align-middle",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"AC_NO"}),Object(n.jsx)("th",{scope:"col",children:"AC_HOLDER"}),Object(n.jsx)("th",{scope:"col",children:"AC_TYPE"}),Object(n.jsx)("th",{scope:"col",children:"BALANCE"}),Object(n.jsx)("th",{scope:"col",children:"LOAN"})]})}),Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:"01"}),Object(n.jsx)("td",{children:"AAA"}),Object(n.jsx)("td",{children:"SAVING"}),Object(n.jsx)("td",{children:"4000"}),Object(n.jsx)("td",{children:"NO"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:"02"}),Object(n.jsx)("td",{children:"BBB"}),Object(n.jsx)("td",{children:"SAVING"}),Object(n.jsx)("td",{children:"5400"}),Object(n.jsx)("td",{children:"NO"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:"03"}),Object(n.jsx)("td",{children:"CCC"}),Object(n.jsx)("td",{children:"SAVING"}),Object(n.jsx)("td",{children:"6400"}),Object(n.jsx)("td",{children:"NO"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:"04"}),Object(n.jsx)("td",{children:"DDD"}),Object(n.jsx)("td",{children:"SAVING"}),Object(n.jsx)("td",{children:"4000"}),Object(n.jsx)("td",{children:"YES"})]})]})]})})]})}],b=(c(278),c(10)),O=[{id:0,heading:"ADBMS TPOICS",data:Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"adbcard-2",children:[Object(n.jsx)("h6",{children:Object(n.jsx)(b.a,{style:{cursor:"pointer",textDecoration:"none",color:"inherit"},smooth:!0,to:"/Classroom/adbms#1",activeClassName:"selected",children:"\ud83d\udc49 SQL Function"})}),Object(n.jsx)("h6",{children:Object(n.jsx)(b.a,{style:{cursor:"pointer",textDecoration:"none",color:"inherit"},smooth:!0,to:"/Classroom/adbms#2",activeClassName:"selected",children:"\ud83d\udc49 Methods"})}),Object(n.jsx)("h6",{children:Object(n.jsx)(b.a,{style:{cursor:"pointer",textDecoration:"none",color:"inherit"},smooth:!0,to:"/Classroom/adbms#3",activeClassName:"selected",children:"\ud83d\udc49 SQL Database For Oraganizations"})})]})})},{id:"1",heading:"SQL Function ",data:Object(n.jsx)(n.Fragment,{children:j.map((function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"adbcard-2",children:[Object(n.jsx)("b",{children:e.title}),Object(n.jsx)("p",{children:e.descp})]})})}))})},{id:"2",heading:"Methods",data:Object(n.jsx)(n.Fragment,{children:d.map((function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"adbcard-2",children:[Object(n.jsx)("b",{children:e.title}),Object(n.jsx)(n.Fragment,{children:e.descp})]})})}))})},{id:"3",heading:"SQL Database For Oraganizations",data:Object(n.jsx)(n.Fragment,{children:a.map((function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"adbcard-2",children:[Object(n.jsx)("b",{children:e.title}),Object(n.jsx)(n.Fragment,{children:e.descp})]})})}))})}];t.default=function(){return Object(n.jsx)(n.Fragment,{children:O.map((function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"adbcard-1 my-2",id:e.id,children:[Object(n.jsx)("h1",{className:"adbhead my-2",children:e.heading}),Object(n.jsx)(n.Fragment,{children:e.data})]})})}))})}}}]);
//# sourceMappingURL=3.6383e163.chunk.js.map