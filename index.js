var a1 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll('img')[0].setAttribute('src','images/dice'+a1+'.png');
var a2 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll('img')[1].setAttribute('src','images/dice'+a2+'.png');

if(a1<a2){
    document.querySelector('h1').innerHTML="Player2 Won";
}else if(a1>a2){
    document.querySelector('h1').innerHTML="Player1 Won";
}else {
    document.querySelector('h1').innerHTML="Draw";
}