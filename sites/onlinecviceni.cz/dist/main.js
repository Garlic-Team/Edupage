(()=>{var t={716:(t,e,s)=>{s(537),t.exports=class{#t;constructor(t){this.#t=t,this.selecting=this.#t.selecting,this.input=this.#t.input,this.correct=this.#t.correct}get canResolve(){return!0}get id(){return this.input.id}getDuplicate(t){let e={},s=[];for(let r=0,i=t.length;r<i;r++){let i=t[r];if(e[i]){if(s.find((t=>t==i)))continue;s.push(i)}else e[i]=!0}return s}resolve(){this.selecting&&(this.correct=this.getDuplicate(this.correct.replaceAll("+"," ").split(">")[0].split(";"))[0]),"(lt)"===this.correct&&(this.correct="<"),"(gt)"===this.correct&&(this.correct=">"),this.input.value=this.correct}}},354:(t,e,s)=>{const r=s(716);t.exports=class{#e;constructor(){this.#e=[],this.inputs=[],this.answers=[]}#s(t,e){const s=Math.floor(t.length/e);return[...Array(s)].map(((s,r)=>t[r*e+1]))}get(){return this.#e=this.#s(decodeURIComponent(document.getElementById("id_form2").firstElementChild.value).split(";"),2)||[],this.inputs=Array.from(document.getElementsByTagName("input")).filter((t=>"res[]"===t.name&&t.id.includes("idField")))||[],0===this.inputs.length&&(this.inputs=Array.from(document.getElementsByTagName("select")).filter((t=>"res[]"===t.name&&"optfield"===t.className))||[],this.#e=decodeURIComponent(document.getElementById("id_form2").firstElementChild.value).split(";+"),this.#e.shift(),this.selecting=!0),this.answers=this.#e.map(((t,e)=>({input:this.inputs[e],correct:this.#e[e],selecting:this.selecting}))),this.answers.map((t=>new r(t)))}}},537:t=>{t.exports=class{constructor(t,e){console.log(`%c${t} %c${e}`,"color:red","color:white")}}}},e={};function s(r){var i=e[r];if(void 0!==i)return i.exports;var n=e[r]={exports:{}};return t[r](n,n.exports,s),n.exports}(()=>{const t=s(354),e=s(537),r=(new t).get();let i=1;for(let t of r)t.resolve(),t.canResolve?new e("[RESOLVE]",`Answer ${i} (${t.id}) has been resolved!`):new e("[RESOLVE]",`I can't resolve answer ${i} (${t.id})!`),i++})()})();