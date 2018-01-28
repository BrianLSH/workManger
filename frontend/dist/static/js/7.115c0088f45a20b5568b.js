webpackJsonp([7],{g6oM:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("TIfe");var l=a("Vo7i");function o(e){return Object(l.a)({url:"/api/classTeacher",method:"get",params:{page:e}})}a("/98u");function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;this.session_id=e,this.teacher_id=t,this.leader_type=a,this.grade=l,this.remark=o}var i={data:function(){return{tableData:[],dialogFormVisible:!1,resetDialogFormVisible:!1,editDialogFormVisible:!1,addDialogFormVisible:!1,resetId:"",uploadId:"",form:{id:"",session_id:0,teacher_id:0,class:"",grade:"",remark:""},newform:new r,current_page:1,total:0}},methods:{fetchData:function(){var e=this;o().then(function(t){var a=t.data;e.tableData=a,e.total=t.meta.total}).catch(function(){})},add:function(){this.addDialogFormVisible=!0},edit:function(e){var t=this,a=e.id;this.uploadId=a,(o=a,Object(l.a)({url:"/api/classTeacher/"+o,method:"get"})).then(function(e){var a=e.data;t.form=a,t.editDialogFormVisible=!0});var o},saveData:function(){var e=this;(t=this.uploadId,a=this.form,Object(l.a)({url:"/api/classTeacher/"+t,method:"patch",data:{session_id:a.session_id,teacher_id:a.teacher_id,class:a.class,grade:a.grade,remark:a.remark}})).then(function(t){if(200==t.status_code){var a=e.form.id,l=0;l=e.tableData.findIndex(function(e,t){return e.id==a}),e.tableData.splice(l,1,e.form),e.editDialogFormVisible=!1}}).catch(function(){console.log("连接失败")});var t,a},resetForm:function(){this.newform=new r,this.resetDialogFormVisible=!0},submitForm:function(){var e=this;(t=this.newform,Object(l.a)({url:"/api/classTeacher",method:"post",data:t})).then(function(t){e.$alert("新建成功","友情提示",{callback:function(t){e.addDialogFormVisible=!1}})}).catch(function(e){console.log(e.response)});var t},del:function(e){var t=this;this.$confirm("此操作将永久删除该信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a=e.id,o=null;o=t.tableData.findIndex(function(e){return e.id==a}),(r=a,Object(l.a)({url:"/api/classTeacher/"+r,method:"delete"})).then(function(e){200==e.status_code&&(t.$message({type:"success",message:"删除成功!"}),t.tableData.splice(o,1))}).catch(function(){console.log("删除失败")});var r}).catch(function(){})},handleCurrentChange:function(e){var t=this,a=e;this.current_page=a,o(a).then(function(e){var a=e.data;t.tableData=a})}},mounted:function(){this.fetchData()},created:function(){}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-button",{attrs:{type:"primary",plain:"",size:"large",icon:"el-icon-document"},on:{click:function(t){e.add()}}},[e._v("添加")]),e._v(" "),a("div",{staticStyle:{"margin-bottom":"10px"}}),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"序号",width:"70"}}),e._v(" "),a("el-table-column",{attrs:{prop:"session_id",label:"学期ID",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"teacher_id",label:"教师ID",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"class",label:"班级",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"grade",label:"年级",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"备注",width:"300"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{attrs:{content:"编辑",placement:"top"}},[a("el-button",{attrs:{plain:"",icon:"el-icon-edit",type:"info",size:"small"},on:{click:function(a){e.edit(t.row)}}})],1),e._v(" "),a("el-tooltip",{attrs:{content:"删除",placement:"top"}},[a("el-button",{attrs:{plain:"",icon:"el-icon-delete",type:"danger",size:"small"},on:{click:function(a){e.del(t.row)}}})],1)]}}])})],1),e._v(" "),a("el-dialog",{attrs:{title:"班主任信息",visible:e.editDialogFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.editDialogFormVisible=t}}},[a("el-form",{attrs:{model:e.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"学期ID",prop:"session_id"}},[a("el-input",{attrs:{placeholder:"请填写学期ID",required:""},model:{value:e.form.session_id,callback:function(t){e.$set(e.form,"session_id",t)},expression:"form.session_id"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"教师ID",prop:"teacher_id"}},[a("el-input",{attrs:{placeholder:"请填写教师ID",required:""},model:{value:e.form.teacher_id,callback:function(t){e.$set(e.form,"teacher_id",t)},expression:"form.teacher_id"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"班级",prop:"class"}},[a("el-input",{attrs:{placeholder:"请填写班级",required:""},model:{value:e.form.class,callback:function(t){e.$set(e.form,"class",t)},expression:"form.class"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"年级",prop:"grade"}},[a("el-select",{attrs:{placeholder:"请选择年级",required:""},model:{value:e.form.grade,callback:function(t){e.$set(e.form,"grade",t)},expression:"form.grade"}},[a("el-option",{attrs:{label:"一年级",value:1}},[e._v("一年级")]),e._v(" "),a("el-option",{attrs:{label:"二年级",value:2}},[e._v("二年级")]),e._v(" "),a("el-option",{attrs:{label:"三年级",value:3}},[e._v("三年级")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{attrs:{value:3},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editDialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.saveData()}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"班主任信息",visible:e.addDialogFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.addDialogFormVisible=t}}},[a("el-form",{attrs:{model:e.newform,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"学期ID",prop:"session_id"}},[a("el-input",{attrs:{placeholder:"请填写学期ID",required:""},model:{value:e.newform.session_id,callback:function(t){e.$set(e.newform,"session_id",t)},expression:"newform.session_id"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"教师ID",prop:"teacher_id"}},[a("el-input",{attrs:{placeholder:"请填写教师ID",required:""},model:{value:e.newform.teacher_id,callback:function(t){e.$set(e.newform,"teacher_id",t)},expression:"newform.teacher_id"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"班级",prop:"class"}},[a("el-input",{attrs:{placeholder:"请填写班级",required:""},model:{value:e.newform.class,callback:function(t){e.$set(e.newform,"class",t)},expression:"newform.class"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"年级",prop:"grade"}},[a("el-select",{attrs:{placeholder:"请选择年级",required:""},model:{value:e.newform.grade,callback:function(t){e.$set(e.newform,"grade",t)},expression:"newform.grade"}},[a("el-option",{attrs:{label:"一年级",value:1}},[e._v("一年级")]),e._v(" "),a("el-option",{attrs:{label:"二年级",value:2}},[e._v("二年级")]),e._v(" "),a("el-option",{attrs:{label:"三年级",value:3}},[e._v("三年级")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{model:{value:e.newform.remark,callback:function(t){e.$set(e.newform,"remark",t)},expression:"newform.remark"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("newform")}}},[e._v("立即创建")]),e._v(" "),a("el-button",{on:{click:function(t){e.resetForm("newform")}}},[e._v("重置")])],1)],1)],1),e._v(" "),a("el-pagination",{attrs:{background:"","current-page":e.current_page,layout:"total, prev, pager, next","page-size":15,total:e.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.current_page=t}}})],1)},staticRenderFns:[]};var s=a("VU/8")(i,n,!1,function(e){a("zdov")},null,null);t.default=s.exports},gOfy:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.el-pagination{\r\n  padding: 0;\r\n  margin-top: 20px;\r\n  text-align: right;\n}\r\n",""])},zdov:function(e,t,a){var l=a("gOfy");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a("rjj0")("8559aefe",l,!0)}});