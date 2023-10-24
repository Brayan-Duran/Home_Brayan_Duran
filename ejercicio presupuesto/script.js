
function agregar(){
  let cre = document.createDocumentFragment();
  let div = document.createElement("div");
  div.setAttribute("class","liss")
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  

  div1.textContent="ropa"
  div2.textContent="123"
  let buttom = document.createElement("button");
  buttom.setAttribute("class","bu")
  buttom.textContent="Borrar"

  div.appendChild(div1);
  div.appendChild(div2);
  div.appendChild(buttom);
  cre.appendChild(div);
  document.getElementById("list").appendChild(cre);
}

function agpr(){
  let pre = document.getElementById("pre").value;
  let pre2 = pre;


  document.getElementById("rpre1").textContent=`Presupuesto:$ ${pre2}`;
  document.getElementById("rpre2").textContent="Restante:$"+pre2;
  document.getElementById("alert").style.zIndex=-1;
}


