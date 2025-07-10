const textbox=document.getElementById('1')
const adbtn=document.getElementById('2')
const tasklist=document.getElementById('3')
adbtn.addEventListener('click',()=>{
  const textvalue=textbox.value
  if(textvalue==='')return;
  const li=document.createElement('li')
  li.innerText=textvalue
  const dlbtn=document.createElement('button')
  dlbtn.innerText='❌'
  dlbtn.addEventListener('click',()=>{
    tasklist.removeChild(li)
  })
  li.append(dlbtn)
  tasklist.append(li) 
  textbox.value=''
})