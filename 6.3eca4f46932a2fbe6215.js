(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{GWq6:function(e,t,n){"use strict";n.r(t),n.d(t,"GradesModule",function(){return ce});var a=n("ofXK"),i=n("H4mt"),s=n("tyNb");const o=[{id:0,module:"cloud",name:"ARCL",teachers:[{name:"Yannick Neff"}],coef:3},{id:1,module:"cloud",name:"UBSI",teachers:[{name:"Jean-Christophe Ferry"},{name:"Thomas Cordival"}],coef:1},{id:2,module:"cloud",name:"SOAR",teachers:[{name:"Fr\xe9d\xe9ric Fourdrinier"},{name:"Yannick Neff"}],coef:1},{id:3,module:"management",name:"OPCO",teachers:[{name:"Christophe Andreu"}],coef:2},{id:4,module:"management",name:"AMOA",teachers:[{name:"Guillaume Barbier"}],coef:1},{id:5,module:"applications",name:"ARLA",teachers:[{name:"Lucas Boisserie"},{name:"Florent Fauchille"}],coef:2}],c=[{login:"abele_a",lastname:"abele",firstname:"augustin"},{login:"bryan.andriamasy",lastname:"andriamasy",firstname:"bryan"},{login:"matthieu.aubry",lastname:"aubry",firstname:"matthieu"},{login:"baudoi_c",lastname:"baudoin",firstname:"c\xe9dric"},{login:"arthur.biragnet",lastname:"biragnet",firstname:"arthur"},{login:"oswald.blassou",lastname:"blassou",firstname:"oswald"},{login:"swann.brunet",lastname:"brunet",firstname:"swann"},{login:"chaieb_s",lastname:"chaieb",firstname:"sara"},{login:"clement1.david",lastname:"david",firstname:"cl\xe9ment"},{login:"clement.davin",lastname:"davin",firstname:"clement"},{login:"louise.delduc",lastname:"delduc",firstname:"louise"},{login:"el_haw_m",lastname:"el hawat",firstname:"mickael"},{login:"aminata.faye",lastname:"faye",firstname:"aminata"},{login:"guillaume.grasset",lastname:"grasset",firstname:"guillaume"},{login:"alexandre.gratton",lastname:"gratton",firstname:"alexandre"},{login:"gros_d",lastname:"gros",firstname:"darius"},{login:"romain.jolivet",lastname:"jolivet",firstname:"romain"},{login:"sham.kazemi-joestani",lastname:"kazemi-joestani",firstname:"sham"},{login:"youssef.khattabi-filali",lastname:"khattabi filali",firstname:"youssef"},{login:"jules.lapisardi",lastname:"lapisardi",firstname:"jules"},{login:"arthur.laurent",lastname:"laurent",firstname:"arthur"},{login:"florent.le-francois",lastname:"le francois",firstname:"florent"},{login:"elodie.leger",lastname:"leger",firstname:"elodie"},{login:"peter.lor",lastname:"lor",firstname:"peter"},{login:"louis_e",lastname:"louis",firstname:"camille"},{login:"jean-damien.ly",lastname:"ly",firstname:"jean damien"},{login:"edouard.mahe",lastname:"mahe",firstname:"edouard"},{login:"maland_t",lastname:"malandain",firstname:"timothe"},{login:"ferial.malki",lastname:"malki",firstname:"ferial"},{login:"mebare_h",lastname:"mebarek",firstname:"hamza"},{login:"dylan.meetun",lastname:"meetun",firstname:"dylan"},{login:"sara.mellouk",lastname:"mellouk",firstname:"sara"},{login:"alexis.merle",lastname:"merle",firstname:"alexis"},{login:"didier.muhire",lastname:"muhire",firstname:"didier"},{login:"hadrien.navarro",lastname:"navarro",firstname:"hadrien"},{login:"marieme.ndiaye",lastname:"ndiaye",firstname:"marieme"},{login:"celian.noel",lastname:"noel",firstname:"c\xe9lian"},{login:"nicolas.nys",lastname:"nys",firstname:"nicolas"},{login:"vincent.segu",lastname:"segu",firstname:"vincent"},{login:"victor1.seguin",lastname:"seguin",firstname:"victor"},{login:"clement.shi",lastname:"shi",firstname:"cl\xe9ment"},{login:"sofia.sighar",lastname:"sighar",firstname:"sofia"},{login:"anojhan.sivananthan",lastname:"sivananthan",firstname:"anojhan"},{login:"anne-solene.tefak-bimbia",lastname:"tefak bimbia",firstname:"anne sol\xe8ne"},{login:"kaoutar.touiri",lastname:"touiri",firstname:"kaoutar"},{login:"nathan.tournant",lastname:"tournant",firstname:"nathan"},{login:"trolle_a",lastname:"trollet",firstname:"antoine"},{login:"yahia_i",lastname:"yahia",firstname:"ilyes"},{login:"bruno.zheng",lastname:"zheng",firstname:"bruno"}];var r=n("fXoL"),l=n("vKg+"),u=n("jIHw"),b=n("rEr+"),d=n("7zfz");function m(e,t){1&e&&r.Lb(0,"p-progressSpinner")}function p(e,t){1&e&&(r.Qb(0,"tr"),r.Qb(1,"th",6),r.Bc(2,"Firstname "),r.Lb(3,"p-sortIcon",7),r.Pb(),r.Qb(4,"th",8),r.Bc(5,"Lastname "),r.Lb(6,"p-sortIcon",9),r.Pb(),r.Qb(7,"th"),r.Bc(8,"Grade"),r.Pb(),r.Pb())}function g(e,t){if(1&e&&(r.Qb(0,"tr"),r.Qb(1,"td"),r.Bc(2),r.Pb(),r.Qb(3,"td"),r.Bc(4),r.Pb(),r.Qb(5,"td"),r.Bc(6),r.Pb(),r.Pb()),2&e){const e=t.$implicit;r.zb(2),r.Cc(e.firstname),r.zb(2),r.Cc(e.lastname),r.zb(2),r.Cc(e.grade)}}function f(e,t){if(1&e&&(r.Ob(0),r.Qb(1,"div",1),r.Qb(2,"h1"),r.Bc(3),r.Pb(),r.Qb(4,"p-button",2),r.Bc(5,"Back"),r.Pb(),r.Pb(),r.Qb(6,"p-table",3),r.zc(7,p,9,0,"ng-template",4),r.zc(8,g,7,3,"ng-template",5),r.Pb(),r.Nb()),2&e){const e=r.ac();r.zb(3),r.Cc(e.course.name),r.zb(3),r.hc("value",e.grades)}}let h=(()=>{class e{constructor(e){this.route=e,this.course=null,this.grades=c.map(e=>Object.assign(Object.assign({},e),{grade:Math.floor(20*Math.random())}))}ngOnInit(){this.routeSub=this.route.params.pipe().subscribe(e=>{this.course=o[e["course-id"]]})}ngOnDestroy(){var e;null===(e=this.routeSub)||void 0===e||e.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(r.Kb(s.a))},e.\u0275cmp=r.Eb({type:e,selectors:[["app-course-view"]],decls:2,vars:2,consts:[[4,"ngIf"],[1,"align"],["routerLink","../"],[3,"value"],["pTemplate","header"],["pTemplate","body"],["pSortableColumn","firstname"],["field","firstname"],["pSortableColumn","lastname"],["field","lastname"]],template:function(e,t){1&e&&(r.zc(0,m,1,0,"p-progressSpinner",0),r.zc(1,f,9,2,"ng-container",0)),2&e&&(r.hc("ngIf",!t.course),r.zb(1),r.hc("ngIf",t.course))},directives:[a.l,l.a,u.a,s.b,b.d,d.j,b.c,b.b],styles:[".align[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-direction:row;align-items:center}"]}),e})();var v=n("vkgz"),P=n("IAA7"),C=n("dPl2"),z=n("Ks7X"),Q=n("3Pt+");function y(e,t){1&e&&(r.Qb(0,"tr"),r.Qb(1,"th",7),r.Bc(2,"Firstname "),r.Lb(3,"p-sortIcon",8),r.Pb(),r.Qb(4,"th",9),r.Bc(5,"Lastname "),r.Lb(6,"p-sortIcon",10),r.Pb(),r.Qb(7,"th"),r.Bc(8,"Grade"),r.Pb(),r.Pb())}function w(e,t){if(1&e&&(r.Qb(0,"tr"),r.Qb(1,"td"),r.Bc(2),r.Pb(),r.Qb(3,"td"),r.Bc(4),r.Pb(),r.Qb(5,"p-inputNumber",11),r.Xb("ngModelChange",function(e){return t.$implicit.grade=e}),r.Pb(),r.Pb()),2&e){const e=t.$implicit;r.zb(2),r.Cc(e.firstname),r.zb(2),r.Cc(e.lastname),r.zb(1),r.hc("placeholder","N/A")("ngModel",e.grade)}}function k(e,t){if(1&e){const e=r.Rb();r.Qb(0,"p-tabPanel",1),r.Qb(1,"p-table",2),r.zc(2,y,9,0,"ng-template",3),r.zc(3,w,6,4,"ng-template",4),r.Pb(),r.Qb(4,"button",5),r.Xb("click",function(){return r.tc(e),r.ac().cancelChanges()}),r.Pb(),r.Qb(5,"button",6),r.Xb("click",function(){return r.tc(e),r.ac().saveDialog()}),r.Pb(),r.Pb()}if(2&e){const e=t.$implicit,n=t.index,a=r.ac();r.hc("header",e.name),r.zb(1),r.hc("value",a.grades[n])}}let B=(()=>{class e{constructor(e,t){this.confirmationService=e,this.messageService=t,this.courses=[{name:"ARCL"},{name:"OPCO"},{name:"PIT1"},{name:"OPDI"},{name:"MBTI"}],this.grades=this.courses.map(e=>c.map(t=>Object.assign(Object.assign({},t),{grade:"OPCO"===e.name?null:Math.floor(20*Math.random())})))}cancelChanges(){this.messageService.add({severity:"success",summary:"Service Message",detail:"Changes successfully canceled"})}saveDialog(){this.confirmationService.confirm({message:"Are you sure that you want to save?\nA email will be send to FFO with all changes",accept:()=>{this.messageService.add({severity:"success",summary:"Service Message",detail:"Grades successfully updated"})}})}}return e.\u0275fac=function(t){return new(t||e)(r.Kb(d.b),r.Kb(d.h))},e.\u0275cmp=r.Eb({type:e,selectors:[["app-teacher-grade-view"]],decls:2,vars:1,consts:[[3,"header",4,"ngFor","ngForOf"],[3,"header"],[3,"value"],["pTemplate","header"],["pTemplate","body"],["pButton","","type","button","label","Cancel Changes",1,"p-button-rounded","p-button-danger",3,"click"],["pButton","","type","button","label","Save",1,"p-button-rounded","p-button-success",3,"click"],["pSortableColumn","firstname"],["field","firstname"],["pSortableColumn","lastname"],["field","lastname"],["mode","decimal",3,"placeholder","ngModel","ngModelChange"]],template:function(e,t){1&e&&(r.Qb(0,"p-tabView"),r.zc(1,k,6,2,"p-tabPanel",0),r.Pb()),2&e&&(r.zb(1),r.hc("ngForOf",t.courses))},directives:[C.b,a.k,C.a,b.d,d.j,u.b,b.c,b.b,z.a,Q.e,Q.f],styles:[""]}),e})();function I(e,t){1&e&&(r.Qb(0,"tr"),r.Qb(1,"th",4),r.Bc(2,"Course "),r.Lb(3,"p-sortIcon",5),r.Pb(),r.Qb(4,"th",6),r.Bc(5,"Grade "),r.Lb(6,"p-sortIcon",7),r.Pb(),r.Qb(7,"th",8),r.Bc(8,"Average "),r.Lb(9,"p-sortIcon",9),r.Pb(),r.Pb())}function M(e,t){if(1&e&&(r.Qb(0,"tr"),r.Qb(1,"td"),r.Bc(2),r.Pb(),r.Qb(3,"td"),r.Bc(4),r.Pb(),r.Qb(5,"td"),r.Bc(6),r.Pb(),r.Pb()),2&e){const e=t.$implicit;r.zb(2),r.Cc(e.courseName),r.zb(2),r.Cc(null===e.grade?"N/A":e.grade),r.zb(2),r.Cc(null===e.average?"N/A":e.average)}}let S=(()=>{class e{constructor(){this.grades=[{coursId:1,courseName:"ARCL",grade:12,average:10},{coursId:2,courseName:"OPDI",grade:0,average:2},{coursId:3,courseName:"PIT1",grade:16,average:13},{coursId:4,courseName:"MBTI",grade:18,average:9},{coursId:4,courseName:"OPCO",grade:null,average:null}]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Eb({type:e,selectors:[["app-student-grade-view"]],decls:4,vars:1,consts:[[1,"card"],[3,"value"],["pTemplate","header"],["pTemplate","body"],["pSortableColumn","courseName"],["field","courseName"],["pSortableColumn","grade"],["field","grade"],["pSortableColumn","average"],["field","average"]],template:function(e,t){1&e&&(r.Qb(0,"div",0),r.Qb(1,"p-table",1),r.zc(2,I,10,0,"ng-template",2),r.zc(3,M,7,3,"ng-template",3),r.Pb(),r.Pb()),2&e&&(r.zb(1),r.hc("value",t.grades))},directives:[b.d,d.j,b.c,b.b],styles:[""]}),e})();const O=function(e){return[e]};function L(e,t){if(1&e&&(r.Qb(0,"li"),r.Qb(1,"a",1),r.Bc(2),r.Pb(),r.Pb()),2&e){const e=t.$implicit;r.zb(1),r.hc("routerLink",r.jc(2,O,e.id)),r.zb(1),r.Dc(" ",e.name," ")}}let j=(()=>{class e{constructor(){this.courses=o}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Eb({type:e,selectors:[["app-admin-grade-view"]],decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(e,t){1&e&&(r.Qb(0,"ul"),r.zc(1,L,3,4,"li",0),r.Pb()),2&e&&(r.zb(1),r.hc("ngForOf",t.courses))},directives:[a.k,s.d],styles:[""]}),e})();var F=n("7kUa"),A=n("arFO"),N=n("lVkt");function T(e,t){if(1&e){const e=r.Rb();r.Qb(0,"div",6),r.Qb(1,"span",7),r.Lb(2,"i",8),r.Qb(3,"input",9,10),r.Xb("input",function(){r.tc(e);const t=r.sc(4);return r.ac(),r.sc(2).filterGlobal(t.value,"contains")}),r.Pb(),r.Pb(),r.Pb()}}function $(e,t){if(1&e&&(r.Qb(0,"span"),r.Bc(1),r.Pb()),2&e){const e=t.$implicit;r.Bb("customer-badge status-"+e.value),r.zb(1),r.Cc(e.label)}}function x(e,t){if(1&e&&(r.Qb(0,"p-dropdown",22),r.Xb("onChange",function(e){return(0,t.filterCallback)(e.value)}),r.zc(1,$,2,3,"ng-template",23),r.Pb()),2&e){const e=t.$implicit,n=r.ac(2);r.hc("ngModel",e)("options",n.modules)("showClear",!0)}}function X(e,t){if(1&e&&(r.Qb(0,"div",25),r.Qb(1,"span",26),r.Bc(2),r.Pb(),r.Pb()),2&e){const e=t.$implicit;r.zb(2),r.Cc(e.name)}}function D(e,t){if(1&e&&(r.Qb(0,"p-multiSelect",24),r.Xb("onChange",function(e){return(0,t.filterCallback)(e.value)}),r.zc(1,X,3,1,"ng-template",23),r.Pb()),2&e){const e=t.$implicit,n=r.ac(2);r.hc("ngModel",e)("options",n.teachers)}}function _(e,t){1&e&&(r.Qb(0,"tr"),r.Qb(1,"th",11),r.Bc(2,"Name "),r.Lb(3,"p-sortIcon",12),r.Pb(),r.Qb(4,"th",13),r.Bc(5," Module "),r.Lb(6,"p-sortIcon",14),r.Pb(),r.Qb(7,"th"),r.Bc(8,"Teachers"),r.Pb(),r.Qb(9,"th",15),r.Bc(10,"Coef "),r.Lb(11,"p-sortIcon",16),r.Pb(),r.Lb(12,"th",17),r.Pb(),r.Qb(13,"tr"),r.Lb(14,"th"),r.Qb(15,"th",18),r.Qb(16,"p-columnFilter",19),r.zc(17,x,2,3,"ng-template",20),r.Pb(),r.Pb(),r.Qb(18,"th",18),r.Qb(19,"p-columnFilter",21),r.zc(20,D,2,2,"ng-template",20),r.Pb(),r.Pb(),r.Lb(21,"th"),r.Lb(22,"th",17),r.Pb()),2&e&&(r.zb(16),r.hc("showMenu",!1),r.zb(3),r.hc("showMenu",!1))}function R(e,t){if(1&e&&(r.Qb(0,"span"),r.Bc(1),r.Pb()),2&e){const e=t.$implicit;r.zb(1),r.Cc(e.name+"\n")}}function E(e,t){if(1&e){const e=r.Rb();r.Qb(0,"tr"),r.Qb(1,"td"),r.Qb(2,"a",28),r.Bc(3),r.Pb(),r.Pb(),r.Qb(4,"td"),r.Bc(5),r.Pb(),r.Qb(6,"td"),r.zc(7,R,2,1,"span",29),r.Pb(),r.Qb(8,"td"),r.Bc(9),r.Pb(),r.Qb(10,"td"),r.Qb(11,"button",30),r.Xb("click",function(){r.tc(e);const t=r.ac().$implicit;return r.ac().edit(t)}),r.Pb(),r.Pb(),r.Pb()}if(2&e){const e=r.ac().$implicit,t=r.ac();r.zb(2),r.hc("routerLink",e.id),r.zb(1),r.Cc(e.name),r.zb(2),r.Cc(e.moduleText),r.zb(2),r.hc("ngForOf",e.teachers),r.zb(2),r.Cc(e.coef),r.zb(2),r.hc("disabled",null!==t.editedCourse)}}function G(e,t){if(1&e&&(r.Qb(0,"span"),r.Bc(1),r.Pb()),2&e){const e=t.$implicit;r.Bb("customer-badge status-"+e.value),r.zb(1),r.Cc(e.label)}}function K(e,t){if(1&e){const e=r.Rb();r.Qb(0,"tr"),r.Qb(1,"td"),r.Qb(2,"input",31),r.Xb("ngModelChange",function(t){return r.tc(e),r.ac().$implicit.name=t}),r.Pb(),r.Pb(),r.Qb(3,"td"),r.Qb(4,"p-dropdown",32,33),r.Xb("ngModelChange",function(t){return r.tc(e),r.ac(2).editedCourse.module=t}),r.zc(6,G,2,3,"ng-template",23),r.Pb(),r.Pb(),r.Qb(7,"td"),r.Qb(8,"p-multiSelect",34),r.Xb("ngModelChange",function(t){return r.tc(e),r.ac(2).editedCourse.teachers=t}),r.Pb(),r.Pb(),r.Qb(9,"td"),r.Qb(10,"p-inputNumber",35),r.Xb("ngModelChange",function(t){return r.tc(e),r.ac(2).editedCourse.coef=t}),r.Pb(),r.Pb(),r.Qb(11,"td",17),r.Qb(12,"button",36),r.Xb("click",function(){return r.tc(e),r.ac(2).stopEdition()}),r.Pb(),r.Qb(13,"button",37),r.Xb("click",function(){return r.tc(e),r.ac(2).deleteCourse()}),r.Pb(),r.Pb(),r.Pb()}if(2&e){const e=r.ac().$implicit,t=r.ac();r.zb(2),r.hc("ngModel",e.name),r.zb(2),r.hc("options",t.modules)("ngModel",t.editedCourse.module),r.zb(4),r.hc("options",t.teachers)("ngModel",t.editedCourse.teachers),r.zb(2),r.hc("ngModel",t.editedCourse.coef)}}function H(e,t){if(1&e&&(r.zc(0,E,12,6,"tr",27),r.zc(1,K,14,6,"tr",27)),2&e){const e=t.$implicit,n=r.ac();r.hc("ngIf",null===n.editedCourse||n.editedCourse.id!==e.id),r.zb(1),r.hc("ngIf",null!==n.editedCourse&&n.editedCourse.id===e.id)}}const J=function(){return["module","name","teachers"]};let Y=(()=>{class e{constructor(e,t){this.messageService=e,this.confirmationService=t,this.courses=Object.assign([],o),this.modules=[{label:"Cloud et Architecture",value:"cloud"},{label:"Leadership et Management",value:"management"},{label:"Mobilit\xe9 et Applications",value:"applications"}],this.teachers=[{name:"Yannick Neff"},{name:"Jean-Christophe Ferry"},{name:"Thomas Cordival"},{name:"Fr\xe9d\xe9ric Fourdrinier"},{name:"Christophe Andreu"},{name:"Guillaume Barbier"},{name:"Lucas Boisserie"},{name:"Florent Fauchille"}],this.data=[],this.editedCourse=null}ngOnInit(){this.reloadData()}reloadData(){this.data=this.courses.map(e=>{const t=this.modules.find(t=>e.module===t.value);if(!t)throw Error("Impossible");return Object.assign(Object.assign({},e),{moduleText:t.label})})}edit(e){this.editedCourse=Object.assign({},e)}stopEdition(){if(null===this.editedCourse)return;const e=this.courses.findIndex(e=>{var t;return e.id===(null===(t=this.editedCourse)||void 0===t?void 0:t.id)});e>=0&&(this.courses[e]=Object.assign({},this.editedCourse),this.reloadData(),this.messageService.add({severity:"success",summary:"Service Message",detail:"Course updated successfully"}),this.editedCourse=null)}deleteCourse(){null!==this.editedCourse&&this.confirmationService.confirm({message:"Are you sure that you want to delete this course?",accept:()=>{const e=this.courses.findIndex(e=>{var t;return e.id===(null===(t=this.editedCourse)||void 0===t?void 0:t.id)});e>=0&&(this.courses.splice(e,1),this.reloadData(),this.messageService.add({severity:"success",summary:"Service Message",detail:"Course deleted successfully"}),this.editedCourse=null)}})}}return e.\u0275fac=function(t){return new(t||e)(r.Kb(d.h),r.Kb(d.b))},e.\u0275cmp=r.Eb({type:e,selectors:[["app-admin-settings"]],decls:6,vars:3,consts:[[1,"card"],[3,"value","globalFilterFields"],["table",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"p-d-flex"],[1,"p-input-icon-left","p-ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search keyword",3,"input"],["field",""],["pSortableColumn","name"],["field","name"],["pSortableColumn","module"],["field","module"],["pSortableColumn","coef"],["field","coef"],[2,"width","8rem"],[2,"padding","0 0"],["field","module","matchMode","equals",3,"showMenu"],["pTemplate","filter"],["field","teachers","matchMode","contains",3,"showMenu"],["placeholder","Any",3,"ngModel","options","showClear","onChange"],["pTemplate","item"],["placeholder","Any","optionLabel","name",3,"ngModel","options","onChange"],[1,"p-multiselect-representative-option"],[1,"p-ml-1"],[4,"ngIf"],[3,"routerLink"],[4,"ngFor","ngForOf"],["pButton","","type","button","icon","pi pi-pencil",1,"p-button-rounded","p-button-bookmark",3,"disabled","click"],["type","text","pInputText","",2,"width","100%",3,"ngModel","ngModelChange"],[3,"options","ngModel","ngModelChange"],["moduleDropdown",""],["placeholder","Any","optionLabel","name",3,"options","ngModel","ngModelChange"],["mode","decimal",3,"ngModel","ngModelChange"],["pButton","","type","button","icon","pi pi-check",1,"p-button-rounded","p-button-success",2,"margin-right","0.5rem",3,"click"],["pButton","","type","button","icon","pi pi-trash",1,"p-button-rounded","p-button-danger",3,"click"]],template:function(e,t){1&e&&(r.Qb(0,"div",0),r.Qb(1,"p-table",1,2),r.zc(3,T,5,0,"ng-template",3),r.zc(4,_,23,2,"ng-template",4),r.zc(5,H,2,2,"ng-template",5),r.Pb(),r.Pb()),2&e&&(r.zb(1),r.hc("value",t.data)("globalFilterFields",r.ic(2,J)))},directives:[b.d,d.j,F.a,b.c,b.b,b.a,A.a,Q.e,Q.f,N.a,a.l,s.d,a.k,u.b,Q.a,z.a],styles:["[_nghost-%COMP%]     .p-dropdown, [_nghost-%COMP%]     .p-multiselect{width:100%}"]}),e})();function q(e,t){if(1&e){const e=r.Rb();r.Qb(0,"button",7),r.Xb("click",function(){return r.tc(e),r.ac(3).editing=!0}),r.Pb()}}function U(e,t){if(1&e){const e=r.Rb();r.Qb(0,"button",8),r.Xb("click",function(){return r.tc(e),r.ac(3).editing=!1}),r.Pb()}}function V(e,t){if(1&e&&(r.Ob(0),r.zc(1,q,1,0,"button",5),r.zc(2,U,1,0,"button",6),r.Nb()),2&e){const e=r.ac(2);r.zb(1),r.hc("ngIf",!e.editing),r.zb(1),r.hc("ngIf",e.editing)}}function W(e,t){1&e&&r.Lb(0,"app-teacher-grade-view")}function Z(e,t){1&e&&r.Lb(0,"app-student-grade-view")}function ee(e,t){1&e&&r.Lb(0,"app-admin-grade-view")}function te(e,t){1&e&&r.Lb(0,"app-admin-settings")}function ne(e,t){if(1&e&&(r.Ob(0),r.zc(1,ee,1,0,"app-admin-grade-view",0),r.zc(2,te,1,0,"app-admin-settings",0),r.Nb()),2&e){const e=r.ac(2);r.zb(1),r.hc("ngIf",!e.editing),r.zb(1),r.hc("ngIf",e.editing)}}function ae(e,t){1&e&&(r.Ob(0),r.Bc(1," You don't have access to this page "),r.Nb())}function ie(e,t){if(1&e&&(r.Ob(0),r.Qb(1,"div",1),r.Qb(2,"h1"),r.Bc(3),r.Pb(),r.zc(4,V,3,2,"ng-container",0),r.Pb(),r.Ob(5,2),r.zc(6,W,1,0,"app-teacher-grade-view",3),r.zc(7,Z,1,0,"app-student-grade-view",3),r.zc(8,ne,3,2,"ng-container",3),r.zc(9,ae,2,0,"ng-container",4),r.Nb(),r.Nb()),2&e){const e=t.ngIf,n=r.ac();r.zb(3),r.Cc(n.editing?"Settings":"Grading"),r.zb(1),r.hc("ngIf","admin"===e),r.zb(1),r.hc("ngSwitch",e),r.zb(1),r.hc("ngSwitchCase","teacher"),r.zb(1),r.hc("ngSwitchCase","student"),r.zb(1),r.hc("ngSwitchCase","admin")}}const se=[{path:"",component:(()=>{class e{constructor(e){this.userDatasourceService=e,this.editing=!1,this.user$=this.userDatasourceService.user$.pipe(Object(v.a)(e=>this.editing=!1))}}return e.\u0275fac=function(t){return new(t||e)(r.Kb(P.a))},e.\u0275cmp=r.Eb({type:e,selectors:[["app-grades-dashboard"]],decls:2,vars:3,consts:[[4,"ngIf"],[1,"align"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["pButton","","type","button","icon","pi pi-cog","class","p-button-rounded",3,"click",4,"ngIf"],["pButton","","type","button","icon","pi pi-times","class","p-button-rounded p-button-danger",3,"click",4,"ngIf"],["pButton","","type","button","icon","pi pi-cog",1,"p-button-rounded",3,"click"],["pButton","","type","button","icon","pi pi-times",1,"p-button-rounded","p-button-danger",3,"click"]],template:function(e,t){1&e&&(r.zc(0,ie,10,6,"ng-container",0),r.bc(1,"async")),2&e&&r.hc("ngIf",r.cc(1,1,t.user$))},directives:[a.l,a.n,a.o,a.p,u.b,B,S,j,Y],pipes:[a.b],styles:[".align{display:flex;justify-content:space-between;flex-direction:row;align-items:center}"],encapsulation:2}),e})()},{path:":course-id",component:h}];let oe=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Ib({type:e}),e.\u0275inj=r.Hb({imports:[[s.e.forChild(se)],s.e]}),e})(),ce=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Ib({type:e}),e.\u0275inj=r.Hb({imports:[[a.c,i.a,oe]]}),e})()}}]);