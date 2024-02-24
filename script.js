var arr=[
    {dp:"https://images.unsplash.com/photo-1534008757030-27299c4371b6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ,story:"https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D"},
    {dp:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D"
    ,story:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D"},
    {dp:"https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ,story:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1708693870040-090ed620efdd?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D"
    ,story:"https://images.unsplash.com/photo-1708602332811-3990083b02bc?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1708624486372-b17bc98f0418?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D"
    ,story:"https://images.unsplash.com/photo-1708601205633-709f6e597d40?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D",},

];


var storiyan=document.querySelector("#storiyan")
 var clutter="";
arr.forEach(function(elem,idx){
    clutter +=` <div class="story">
    <img id="${idx}" src="${elem.dp}"alt="">
    </div>`;
});
storiyan.innerHTML=clutter;

storiyan.addEventListener("click",function(dets){
     document.querySelector("#full-screen").style.display="block"
     document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`

     setTimeout(function(){
        document.querySelector("#full-screen").style.display="none"
     },3000)
});
