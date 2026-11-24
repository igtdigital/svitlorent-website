const callTarget=document.querySelector('header a[href^="tel:"]'), floatingCall=document.querySelector('#quickcall');
if(callTarget && floatingCall)new IntersectionObserver(([entry])=>{floatingCall.hidden=entry.boundingClientRect.bottom>0}).observe(callTarget);
