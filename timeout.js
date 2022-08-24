var myTimeout = setTimeout(function(){
    alert("hello world");
},3000);

function cancelTimeout(){
    clearTimeout(myTimeout);
}