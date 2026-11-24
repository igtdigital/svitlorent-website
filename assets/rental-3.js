const picker=document.querySelector('#picker'), query=document.querySelector('#cityquery');
picker.querySelector('#closepick').onclick=()=>picker.close();
picker.onclick=e=>{if(e.target===picker && e.clientY<picker.getBoundingClientRect().top) picker.close()};
query.oninput=()=>{let count=0;for(const a of picker.querySelectorAll('a')){a.hidden=!a.dataset.search.includes(query.value.trim().toLowerCase());if(!a.hidden)count++}document.querySelector('#nohits').hidden=!!count};
picker.onclose=()=>{query.value='';query.oninput()};
