import{L as r}from"./index.c988e9dd.js";import{_ as E}from"./index.667ceb38.js";import{k as p,y as a,z as _,A as C,B as e,C as u,S as m}from"./element-plus.5733ce57.js";const f=p({name:"ListTest",components:{List:r},setup(){return{data:[{iconClass:"el-icon-goods",subTitle:"\u6597\u901A\u5173\u65E0\u9645\u53BF\u519B\u8FDE\u7528\u77E5\u653F\u4EE5\u8BE5\u679C\u601D\u5FEB\u9886c\u3002",tag:"\u79D1\u5B66\u642C\u7816\u7EC4",time:"2021/01/28 15:21:32",href:"javascript:;"},{iconClass:"el-icon-goods",subTitle:"\u6597\u901A\u5173\u65E0\u9645\u53BF\u519B\u8FDE\u7528\u77E5\u653F\u4EE5\u8BE5\u679C\u601D\u5FEB\u9886c\u3002",tag:"\u79D1\u5B66\u642C\u7816\u7EC4",time:"2021/01/28 15:21:32",href:"javascript:;"},{iconClass:"el-icon-goods",subTitle:"\u6597\u901A\u5173\u65E0\u9645\u53BF\u519B\u8FDE\u7528\u77E5\u653F\u4EE5\u8BE5\u679C\u601D\u5FEB\u9886c\u3002",tag:"\u79D1\u5B66\u642C\u7816\u7EC4",time:"2021/01/28 15:21:32",href:"javascript:;"}],edit:n=>console.log(n)}}}),B=m("\u64CD\u4F5C");function b(t,l,n,F,D,g){const c=a("el-button"),o=a("list"),s=a("el-tab-pane"),d=a("el-tabs");return _(),C(d,{type:"border-card"},{default:e(()=>[u(s,{label:"\u901A\u77E5"},{default:e(()=>[u(o,{data:t.data},{default:e(i=>[u(c,{onClick:h=>t.edit(i.item)},{default:e(()=>[B]),_:2},1032,["onClick"])]),_:1},8,["data"])]),_:1}),u(s,{label:"\u5173\u6CE8"},{default:e(()=>[u(o,{data:t.data},null,8,["data"])]),_:1}),u(s,{label:"\u5F85\u529E"},{default:e(()=>[u(o,{data:t.data},null,8,["data"])]),_:1})]),_:1})}var k=E(f,[["render",b]]);export{k as default};