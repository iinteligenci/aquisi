const test=require("node:test");
const assert=require("node:assert/strict");
const fs=require("node:fs");
const vm=require("node:vm");
const core=require("../core.js");

function bootApp(){
 const ids=["date","rows","products","savings","breakdown","winner","history","title","msg","add","sample","save","clearHistory","csv","print","reset"];
 const elements=new Map(ids.map(id=>[id,{id,value:"",textContent:"",innerHTML:"",onclick:null,handlers:{},addEventListener(name,fn){this.handlers[name]=fn},querySelectorAll(){return[]},focus(){},click(){if(this.onclick)this.onclick()}}]));
 const document={getElementById(id){if(!elements.has(id))throw new Error("Missing element: "+id);return elements.get(id)},createElement(){return{click(){},set href(v){},set download(v){}}}};
 const store=new Map();
 const context={window:{InsumoCheckCore:core,print(){}},document,localStorage:{getItem(k){return store.get(k)||null},setItem(k,v){store.set(k,v)},removeItem(k){store.delete(k)}},URL:{createObjectURL(){return"blob:test"},revokeObjectURL(){}},Blob:function(){},confirm(){return true},Date,Map,Set,Number,String,Math,JSON,console};
 vm.runInNewContext(fs.readFileSync(require.resolve("../app.js"),"utf8"),context);
 return{elements,store};
}
test("app inicia com uma linha vazia e todas as ações conectadas",()=>{const {elements}=bootApp();assert.match(elements.get("rows").innerHTML,/<tr>/);for(const id of ["add","sample","save","clearHistory","csv","print","reset"])assert.equal(typeof elements.get(id).onclick,"function",id+" action is not wired")});
test("exemplo de demonstração calcula comparações e permite salvar",()=>{const {elements,store}=bootApp();elements.get("sample").click();assert.match(elements.get("breakdown").innerHTML,/Arroz/);assert.match(elements.get("breakdown").innerHTML,/Óleo/);elements.get("save").click();assert.ok(store.has("insumocheck-history"))});
test("exportação e impressão não lançam erro",()=>{const {elements}=bootApp();elements.get("sample").click();assert.doesNotThrow(()=>elements.get("csv").click());assert.doesNotThrow(()=>elements.get("print").click())});
