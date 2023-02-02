(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){},,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/phone-square-solid.996eb640.svg"},function(e,t,a){e.exports=a.p+"static/media/envelope-square-solid.46bb5905.svg"},function(e,t,a){e.exports=a.p+"static/media/map-marker-alt-solid.2b7c48a7.svg"},function(e,t,a){e.exports=a(40)},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(17),c=a.n(i),l=(a(29),a(3)),o=a(4),s=a(5),p=a(2),d=a(6),u=a(7),m=(a(8),a(30),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Header"},r.a.createElement("h1",null,r.a.createElement("a",{href:"/"},"Minimalistic CV Creator")))}}]),t}(n.Component)),h=(a(31),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Hero"},r.a.createElement("div",null,r.a.createElement("h1",null,"Free and Easy"),r.a.createElement("h1",null,"to use minimalistic"),r.a.createElement("h1",null,"CV Creator")),r.a.createElement("div",null,r.a.createElement("p",null,"One sheet of paper decides whether you get the job. "),r.a.createElement("p",null,"Create an aesthetic, professional CV in minutes"),r.a.createElement("p",null,"and download it for free.")),r.a.createElement("button",{onClick:this.props.onClick,className:"create-cv-button"},"Create your CV now"))}}]),t}(n.Component)),E=a(13),v=a(11),b=a(10),f=(a(32),a(33),a(34),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("input",{type:"text",placeholder:this.props.placeholder,className:"inputField",name:this.props.name,onChange:this.props.onChange,defaultValue:this.props.value?this.props.value:""})}}]),t}(n.Component)),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CvEdit"},r.a.createElement("form",null,r.a.createElement("section",null,r.a.createElement("h4",{className:"section-title"},"Personal Details"),r.a.createElement(f,{placeholder:"Full Name",name:"name",onChange:this.props.handlePersonalDetailChange,value:this.props.personalDetails.name}),r.a.createElement(f,{placeholder:"Title",name:"title",onChange:this.props.handlePersonalDetailChange,value:this.props.personalDetails.title}),r.a.createElement(f,{placeholder:"Mobile No.",name:"phone",onChange:this.props.handlePersonalDetailChange,value:this.props.personalDetails.phone}),r.a.createElement(f,{placeholder:"Email",name:"email",onChange:this.props.handlePersonalDetailChange,value:this.props.personalDetails.email}),r.a.createElement(f,{placeholder:"Location",name:"location",onChange:this.props.handlePersonalDetailChange,value:this.props.personalDetails.location}),r.a.createElement(f,{placeholder:"Description",name:"description",onChange:this.props.handleDescriptionChange,value:this.props.description})),r.a.createElement("section",null,r.a.createElement("h4",{className:"section-title"},"Work Experience"),this.props.expItems.map(function(t){return r.a.createElement("div",{className:"work-exp-item",key:t.id},r.a.createElement(f,{placeholder:"Company",value:t.company,onChange:function(a){e.props.handleArrayChange("experience",t.id,"company",a.target.value)}}),r.a.createElement(f,{placeholder:"Position",value:t.position,onChange:function(a){e.props.handleArrayChange("experience",t.id,"position",a.target.value)}}),r.a.createElement(f,{placeholder:"Start Date",value:t.startDate,onChange:function(a){e.props.handleArrayChange("experience",t.id,"startDate",a.target.value)}}),r.a.createElement(f,{placeholder:"End Date",value:t.endDate,onChange:function(a){e.props.handleArrayChange("experience",t.id,"endDate",a.target.value)}}),r.a.createElement(f,{placeholder:"Description",value:t.description,onChange:function(a){e.props.handleArrayChange("experience",t.id,"description",a.target.value)}}),r.a.createElement("button",{type:"button",className:"delete-work-exp-item",onClick:function(a){a.preventDefault(),e.props.handleDeleteArrayItem("experience",t.id)}},"Delete"))}),r.a.createElement("button",{type:"button",className:"add-work-exp-item",onClick:this.props.handleExperienceItemAdd},"Add")),r.a.createElement("section",null,r.a.createElement("h4",{className:"section-title"},"Education"),this.props.eduItems.map(function(t){return r.a.createElement("div",{className:"edu-item",key:t.id},r.a.createElement(f,{placeholder:"Course/Program",value:t.course,onChange:function(a){e.props.handleArrayChange("education",t.id,"course",a.target.value)}}),r.a.createElement(f,{placeholder:"University",value:t.university,onChange:function(a){e.props.handleArrayChange("education",t.id,"university",a.target.value)}}),r.a.createElement(f,{placeholder:"Start Year",value:t.startYear,onChange:function(a){e.props.handleArrayChange("education",t.id,"startYear",a.target.value)}}),r.a.createElement(f,{placeholder:"End Year",value:t.endYear,onChange:function(a){e.props.handleArrayChange("education",t.id,"endYear",a.target.value)}}),r.a.createElement(f,{placeholder:"Description",value:t.description,onChange:function(a){e.props.handleArrayChange("education",t.id,"description",a.target.value)}}),r.a.createElement("button",{type:"button",className:"delete-edu-item",onClick:function(a){a.preventDefault(),e.props.handleDeleteArrayItem("education",t.id)}},"Delete"))}),r.a.createElement("button",{type:"button",className:"add-edu-item",onClick:this.props.handleEducationItemAdd},"Add")),r.a.createElement("section",null,r.a.createElement("h4",{className:"section-title"},"Personal Projects"),this.props.projItems.map(function(t){return r.a.createElement("div",{className:"proj-item",key:t.id},r.a.createElement(f,{placeholder:"Project Name",value:t.projName,onChange:function(a){e.props.handleArrayChange("projects",t.id,"projName",a.target.value)}}),r.a.createElement(f,{placeholder:"Technologies Used",value:t.projTech,onChange:function(a){e.props.handleArrayChange("projects",t.id,"projTech",a.target.value)}}),r.a.createElement(f,{placeholder:"Project Description",value:t.projDesc,onChange:function(a){e.props.handleArrayChange("projects",t.id,"projDesc",a.target.value)}}),r.a.createElement("button",{type:"button",className:"delete-proj-item",onClick:function(a){a.preventDefault(),e.props.handleDeleteArrayItem("projects",t.id)}},"Delete"))}),r.a.createElement("button",{type:"button",className:"add-proj-item",onClick:this.props.handleProjItemAdd},"Add"))))}}]),t}(n.Component),g=(a(35),a(18)),C=a.n(g),D=a(19),O=a.n(D),y=a(20),N=a.n(y),x=(a(16),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"experience"},r.a.createElement("div",{className:"experience-heading"},r.a.createElement("h4",null,this.props.expData.position),r.a.createElement("div",{className:"experience-details"},this.props.expData.company," | ",r.a.createElement("span",{className:"bold"},this.props.expData.startDate," - ",this.props.expData.endDate))),this.props.expData.description)}}]),t}(n.Component)),A=(a(36),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"experience"},r.a.createElement("div",{className:"experience-heading"},r.a.createElement("h4",null,this.props.eduData.course),r.a.createElement("div",{className:"experience-details"},this.props.eduData.university," | ",r.a.createElement("span",{className:"bold"},this.props.eduData.startYear," - ",this.props.eduData.endYear))),this.props.eduData.description)}}]),t}(n.Component)),k=(a(37),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"experience"},r.a.createElement("div",{className:"experience-heading"},r.a.createElement("h4",null,this.props.projData.projName," ",r.a.createElement("span",{className:"proj-tech"},"| ",this.props.projData.projTech))),this.props.projData.projDesc)}}]),t}(n.Component)),I=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.cvData,t=e.personalDetails,a=e.description,n=e.experience,i=e.education,c=e.projects,l=t.name,o=t.title,s=t.phone,p=t.email,d=t.location;return r.a.createElement("div",{className:"CvPreview"},r.a.createElement("div",{className:"previewContent"},r.a.createElement("header",null,r.a.createElement("div",{className:"heading"},r.a.createElement("h1",null,r.a.createElement("strong",null,l)),r.a.createElement("h2",null,o)),r.a.createElement("div",{className:"details-group"},r.a.createElement("div",{className:"contact-details"},r.a.createElement("img",{src:C.a,alt:"Phone: "}),r.a.createElement("span",{className:"details-text"},s)),r.a.createElement("div",{className:"contact-details"},r.a.createElement("img",{src:O.a,alt:"Email: "}),r.a.createElement("span",{className:"details-text"},p)),r.a.createElement("div",{className:"contact-details"},r.a.createElement("img",{src:N.a,alt:"Location: "}),r.a.createElement("span",{className:"details-text"},d)))),r.a.createElement("div",{className:"preview-desc"},a),n.length?r.a.createElement("div",{className:"experience-list"},r.a.createElement("h3",null,"WORK EXPERIENCE"),n.map(function(e){return r.a.createElement(x,{expData:e})})):"",i.length?r.a.createElement("div",{className:"edu-list"},r.a.createElement("h3",null,"EDUCATION"),i.map(function(e){return r.a.createElement(A,{eduData:e})})):"",c.length?r.a.createElement("div",{className:"proj-list"},r.a.createElement("h3",null,"Projects"),c.map(function(e){return r.a.createElement(k,{projData:e})})):""))}}]),t}(n.Component),P=a(9),w=a.n(P),S=(a(38),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={personalDetails:{name:"Ashin Sabu",title:"Web Developer",phone:"1234567890",email:"ashin.sabu3@gmail.com",location:"India"},description:"Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi.",experience:[{id:w()(),company:"A Company",position:"SWE - II",startDate:"Jan 2023",endDate:"Present",description:"Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud."},{id:w()(),company:"My First Company",position:"Graduate Engineer",startDate:"Jan 2020",endDate:"Dec 2022",description:"Irure dolor incididunt sint et ullamco. Commodo laboris amet aliquip incididunt do ut est exercitation reprehenderit magna sit laboris est mollit."},{id:w()(),company:"Tutor",position:"University",startDate:"Jan 2019",endDate:"Nov 2019",description:"Enim elit aliquip fugiat anim proident."}],education:[{id:w()(),course:"Bachelor of Technology (B. Tech.)",university:"Manipal University Jaipur",startYear:"2020",endYear:"2024",description:"CGPA: 9"},{id:w()(),course:"Fullstack Javascript",university:"The Odin Project",startYear:"2020",endYear:"Present",description:""}],projects:[{id:w()(),projName:"Portfolio website",projTech:"ReactJS, Redux, Tailwind CSS, Framer Motion",projDesc:"Personal Portfolio of projects and work experience with showcase for each. Highly responsive and minimalist UI for quick loading on slow internets."}]},a.handlePersonalDetailChange=a.handlePersonalDetailChange.bind(Object(u.a)(Object(u.a)(a))),a.handleDescriptionChange=a.handleDescriptionChange.bind(Object(u.a)(Object(u.a)(a))),a.handleArrayChange=a.handleArrayChange.bind(Object(u.a)(Object(u.a)(a))),a.handleDeleteArrayItem=a.handleDeleteArrayItem.bind(Object(u.a)(Object(u.a)(a))),a.handleExperienceItemAdd=a.handleExperienceItemAdd.bind(Object(u.a)(Object(u.a)(a))),a.handleEducationItemAdd=a.handleEducationItemAdd.bind(Object(u.a)(Object(u.a)(a))),a.handleProjItemAdd=a.handleProjItemAdd.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handlePersonalDetailChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(function(e){return Object(b.a)({},e,{personalDetails:Object(b.a)({},e.personalDetails,Object(v.a)({},a,n))})})}},{key:"handleDescriptionChange",value:function(e){var t=e.target.value;this.setState(function(e){return Object(b.a)({},e,{description:t})})}},{key:"handleExperienceItemAdd",value:function(e){e.preventDefault();var t={id:w()(),company:"",position:"",startDate:"",endDate:"",description:""};this.setState(function(e){return Object(b.a)({},e,{experience:[].concat(Object(E.a)(e.experience),[t])})})}},{key:"handleEducationItemAdd",value:function(e){e.preventDefault();var t={id:w()(),course:"",university:"",startYear:"",endYear:"",description:""};this.setState(function(e){return Object(b.a)({},e,{education:[].concat(Object(E.a)(e.education),[t])})})}},{key:"handleProjItemAdd",value:function(e){e.preventDefault();var t={id:w()(),projName:"",projTech:"",projDesc:""};this.setState(function(e){return Object(b.a)({},e,{projects:[].concat(Object(E.a)(e.projects),[t])})})}},{key:"handleArrayChange",value:function(e,t,a,n){var r=this.state[e],i=r.findIndex(function(e){return e.id===t});r[i][a]=n,this.setState(function(t){return Object(b.a)({},t,Object(v.a)({},e,r))})}},{key:"handleDeleteArrayItem",value:function(e,t){this.setState(function(a){return Object(b.a)({},a,Object(v.a)({},e,a[e].filter(function(e){return e.id!==t})))})}},{key:"render",value:function(){return r.a.createElement("div",{className:"CvCreator"},r.a.createElement("div",{className:"edit-cv-area"},r.a.createElement("p",null,"Edit your CV here"),r.a.createElement(j,{handlePersonalDetailChange:this.handlePersonalDetailChange,handleDescriptionChange:this.handleDescriptionChange,handleArrayChange:this.handleArrayChange,handleExperienceItemAdd:this.handleExperienceItemAdd,handleEducationItemAdd:this.handleEducationItemAdd,handleDeleteArrayItem:this.handleDeleteArrayItem,expItems:this.state.experience,eduItems:this.state.education,projItems:this.state.projects,description:this.state.description,personalDetails:this.state.personalDetails})),r.a.createElement("div",{className:"preview-cv-area"},r.a.createElement("div",{className:"preview-title"},r.a.createElement("p",null,"Preview"),r.a.createElement("div",null,r.a.createElement("button",{id:"download-pdf-button"},"Download as PDF",r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1667px-PDF_file_icon.svg.png",alt:"pdf"})),r.a.createElement("button",{id:"download-doc-button"},"Download as DOC ",r.a.createElement("img",{src:"https://cdn-icons-png.flaticon.com/512/5968/5968517.png",alt:"doc"})))),r.a.createElement(I,{cvData:this.state})))}}]),t}(n.Component)),T=(a(39),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Footer"},r.a.createElement("p",null,"Made with ",r.a.createElement("span",{role:"img","aria-label":"love"},"\ud83d\udda4")," by Ashin Sabu"),r.a.createElement("a",{href:"https://github.com/ashinsabu/cv-creator"},"View Source Code"),r.a.createElement("div",{className:"social-links"},r.a.createElement("a",{href:"https://github.com/ashinsabu/"},r.a.createElement("img",{src:"https://cdn-icons-png.flaticon.com/512/25/25231.png",alt:"GitHub"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/ashin-sabu-1059a6175/"},r.a.createElement("img",{src:"https://cdn-icons-png.flaticon.com/512/174/174857.png",alt:"LinkedIn"})),r.a.createElement("a",{href:"https://twitter.com/ashinsabu3"},r.a.createElement("img",{src:"https://cdn-icons-png.flaticon.com/512/124/124021.png",alt:"Twitter"}))))}}]),t}(n.Component)),F=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={heroHidden:0},a.hideHero=a.hideHero.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"hideHero",value:function(){this.setState({heroHidden:1})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m,null),this.state.heroHidden?r.a.createElement(S,null):r.a.createElement(h,{onClick:this.hideHero}),r.a.createElement(T,null))}}]),t}(n.Component),Y=function(e){e&&e instanceof Function&&a.e(6).then(a.bind(null,216)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null))),Y()}],[[21,1,3]]]);
//# sourceMappingURL=main.55625972.chunk.js.map