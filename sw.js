javascript:(function(){
  let count=0;
  const spam=["👻","🔥","NOIR WAS HERE","💀","🖤"];
  const likeBtn=()=>document.querySelector('[data-e2e="like-button"]')||document.querySelector('.css-1if2uwl-DivLikeBtnIcon');
  const chatInp=()=>document.querySelector('div[contenteditable="plaintext-only"]');
  const flood=setInterval(()=>{
    if(likeBtn()) likeBtn().click();
    if(chatInp()){
      chatInp().textContent=spam[count%spam.length];
      chatInp().dispatchEvent(new Event('input',{bubbles:true}));
      chatInp().dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',bubbles:true}));
      count++;
    }
  },450);
  /* overlay horor 5 detik */
  const overlay=document.createElement('div');
  overlay.style.cssText="position:fixed;inset:0;background:#000c url('https://i.ibb.co/6yV0Z5p/noir-face.jpg') center/cover;z-index:9999;animation:flick .2s infinite";
  document.head.appendChild(document.createElement('style')).textContent="@keyframes flick{0%,100%{opacity:.1}50%{opacity:1}}";
  document.body.appendChild(overlay);
  setTimeout(()=>overlay.remove(),5000);
})();