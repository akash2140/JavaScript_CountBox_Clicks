console.log("hello");
var count=0;
var boxInstance=document.getElementById('box');
var para =document.getElementById('count-text');

function counterIncrease()
{
    console.log("Box Clicked "+count+" Times");
    para.innerText="Box Clicked " +count+ " Times";
    count++;
    if(count==11)
        count=0;
}

boxInstance.addEventListener('click',counterIncrease);
