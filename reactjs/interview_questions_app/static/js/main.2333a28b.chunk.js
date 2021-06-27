(this["webpackJsonp27-interview-questions-app"]=this["webpackJsonp27-interview-questions-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(7),r=a.n(i),l=a(2),o=a(3),c=a(5),u=a(4),d=(a(12),a(0)),f=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.categoryData,a=e.levelsData,n=e.updateCategory,s=e.updateLevel,i=e.selectedCategory,r=e.selectedLevel;return Object(d.jsxs)("div",{className:"filters-container",children:[Object(d.jsxs)("div",{className:"filter-container",children:[Object(d.jsx)("p",{className:"filter-label",children:"LANGUAGE"}),Object(d.jsx)("select",{className:"filter-select",onChange:function(e){return n(e.target.value)},value:i,children:t.map((function(e){var t=e.id,a=e.language;return Object(d.jsx)("option",{children:a},t)}))})]}),Object(d.jsxs)("div",{className:"filter-container",children:[Object(d.jsx)("p",{className:"filter-label",children:"DIFFICULTY LEVEL"}),Object(d.jsx)("select",{className:"filter-select",onChange:function(e){return s(e.target.value)},value:r,children:a.map((function(e){var t=e.id,a=e.level;return Object(d.jsx)("option",{children:a},t)}))})]})]})}}]),a}(n.Component),h=(a(14),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={showAnswer:!1},e.toggleState=function(){return e.setState((function(e){return{showAnswer:!e.showAnswer}}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.questionText,a=e.answerText,n=e.language,s=e.difficultyLevel,i=this.state.showAnswer;return Object(d.jsxs)("div",{className:"question-container",children:[Object(d.jsxs)("div",{className:"tags-container",children:[Object(d.jsx)("span",{className:"tag level-tag",children:s}),Object(d.jsx)("span",{className:"tag language-tag",children:n})]}),Object(d.jsx)("h1",{className:"question-text",children:t}),Object(d.jsxs)("button",{type:"button",onClick:this.toggleState,className:"show-button",children:["Show",!i&&Object(d.jsx)("img",{className:"arrow",alt:"down arrow",src:"https://assets.ccbp.in/frontend/react-js/down-arrow.png"}),i&&Object(d.jsx)("img",{className:"arrow",alt:"up arrow",src:"https://assets.ccbp.in/frontend/react-js/up-arrow.png"})]}),i&&Object(d.jsx)("p",{className:"question-answer",children:a})]})}}]),a}(n.Component)),p=(a(15),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={level:"ALL",category:"ALL"},e.updateCategory=function(t){return e.setState((function(e){return{level:e.level,category:t}}))},e.updateLevel=function(t){return e.setState((function(e){return{level:t,category:e.category}}))},e.renderQuestions=function(e){return e.map((function(e){var t=e.id,a=e.questionText,n=e.answerText,s=e.language,i=e.difficultyLevel;return Object(d.jsx)(h,{questionText:a,answerText:n,language:s,difficultyLevel:i},t)}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.category,a=e.level,n=this.props,s=n.questionsData,i=n.levelsData,r=n.categoryData,l=s.filter((function(e){var n=e.language,s=e.difficultyLevel;return("ALL"===t||n===t)&&("ALL"===a||s===a)}));return Object(d.jsxs)("div",{className:"app-container",children:[Object(d.jsxs)("div",{className:"header-section",children:[Object(d.jsxs)("h1",{className:"header-title",children:["30 Seconds ",Object(d.jsx)("br",{})," of Interviews"]}),Object(d.jsx)("img",{alt:"background",src:"https://assets.ccbp.in/frontend/react-js/interview-questions-img.png",className:"header-image"})]}),Object(d.jsxs)("div",{className:"body-section",children:[Object(d.jsx)(f,{updateCategory:this.updateCategory,updateLevel:this.updateLevel,levelsData:i,categoryData:r,selectedCategory:t,selectedLevel:a}),this.renderQuestions(l)]})]})}}]),a}(n.Component)),g=(a(16),[{id:0,questionText:"Which browsers support HTML5?",answerText:"The latest versions of Google Chrome, Apple Safari, Mozilla Firefox, and Opera all support most of the HTML5 features.",language:"HTML",difficultyLevel:"EASY"},{id:1,questionText:"How to insert a copyright symbol on a browser page?",answerText:"You can insert a copyright symbol by using &copy; or &#169; in an HTML file.",language:"HTML",difficultyLevel:"MEDIUM"},{id:2,questionText:"What is the difference between span and div?",answerText:"A div is a block-level element and a span is an inline element. The div should be used to wrap sections of a document, while use spans to wrap small portions of text, images, etc.",language:"HTML",difficultyLevel:"HARD"},{id:3,questionText:"Why Use CSS?",answerText:"CSS is used to define styles for your web pages, including the design, layout, and variations in display for different devices and screen sizes.",language:"CSS",difficultyLevel:"EASY"},{id:4,questionText:"What is RWD?",answerText:"RWD stands for Responsive Web Design. This technique is used to display the designed page perfectly on every screen size and device, for example, mobile, tablet, desktop, and laptop. You do not need to create a different page for each device.",language:"CSS",difficultyLevel:"MEDIUM"},{id:5,questionText:"How would you use media queries in a mobile-first approach?",answerText:"There\u2019s no way to avoid these nowadays, everyone expects their website to work on mobile devices, even if they don\u2019t specifically ask for it. The most common approach is the mobile-first one. All styles outside of media queries are targeted at mobile devices. Then, through progressively larger media queries, you can style larger screens one step at a time.",language:"CSS",difficultyLevel:"HARD"},{id:6,questionText:"Which company developed JavaScript?",answerText:"Netscape is the software company who developed JavaScript.",language:"JAVASCRIPT",difficultyLevel:"EASY"},{id:7,questionText:"What is this keyword in JavaScript?",answerText:"This keyword refers to the object from where it was called.",language:"JAVASCRIPT",difficultyLevel:"MEDIUM"},{id:8,questionText:"What is the difference between null & undefined?",answerText:"Undefined means a variable has been declared but has not yet been assigned a value. On the other hand, null is an assignment value. It can be assigned to a variable as a representation of no value. Also, undefined and null are two distinct types: undefined is a type itself (undefined) while null is an object.",language:"JAVASCRIPT",difficultyLevel:"HARD"}]),v=[{id:0,level:"ALL"},{id:1,level:"EASY"},{id:2,level:"MEDIUM"},{id:3,level:"HARD"}],b=[{id:0,language:"ALL"},{id:1,language:"HTML"},{id:2,language:"CSS"},{id:3,language:"JAVASCRIPT"}],j=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsx)(p,{questionsData:g,categoryData:b,levelsData:v})}}]),a}(n.Component);r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.2333a28b.chunk.js.map