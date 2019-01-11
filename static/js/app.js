var score,roundscore,activeplayer,gameplay;    //dice is used to dice value,score is used to get total,roundscore is for to ge Current scorte,activeplayer is used for deciding Player

init(); 


    

//document.getElementById('current-'+activeplayer).textContent=dice; // usd to assign some value 



document.querySelector('.btn-roll').addEventListener('click',function(){
   if (gameplay){
    //1.to create the dice
    var dice=Math.floor(Math.random()*6)+1;  // we this only for roll so not globally define...
    // 2. dice is  shown and value of dice is also shown       
    document.querySelector('.dice').style.display='block'; //  block meands to shown again after none.. 
    var x='dice-'+dice+'.png';
    console.log(x);       
    document.querySelector('.dice').src='dice-'+dice+'.png';
    
    //3.check if dice==1 then next player otherwise add to current
    if (dice!==1){
        roundscore +=dice;
        document.querySelector('#current-'+ activeplayer).textContent=roundscore;
    }
    else{
        
        //nextplayer
        activeplayer ===0 ?activeplayer=1:activeplayer=0;   //check player
        roundscore=0;  //clear current to zero
        document.getElementById('current-0').textContent='0';   // uswd to clear the score who has one on the device
        document.getElementById('current-1').textContent='0'; 
        
        // to show the active one player..
         document.querySelector('.player-0-panel').classList.toggle('active');
         document.querySelector('.player-1-panel').classList.toggle('active');
        //toggle will reverse the functionality of the class 
      //  document.querySelector('.player-0-panel').classList.remove('active');  // to get class which is active use classlist property and the property to oerform with the attribute which is class ..
        //document.querySelector('.player-1-panel').classList.add('active');
        
        document.querySelector('.dice').style.display='none';
    }}
    });
    
    
    // src is used to cahnge the dice according to the value of the dice /// perform the action on the button with the parameters as action and functuion with the functionality name() without paraentesisi . we can create ananmous funtion as well as function (){});  

document.querySelector('.btn-hold').addEventListener('click',function(){
    //1.show the total on the global score
    if(gameplay){
    score[activeplayer]+=roundscore;
    document.getElementById('score-'+ activeplayer).textContent=score[activeplayer];
    if (score[activeplayer] >= 25){
        
        document.getElementById('name-'+ activeplayer).textContent='Winner!!!!';
        document.querySelector('.player-'+ activeplayer +'-panel').classList.remove('active');
        document.querySelector('.dice').style.display='none';
        if (activeplayer===0){
            document.getElementById('name-1').textContent='Lost Match';
        }else{
            document.getElementById('name-0').textContent='Lost Match';
        }
        gameplay=false;
    }else{
        //nextplayer
        activeplayer ===0 ?activeplayer=1:activeplayer=0;   //check player
        roundscore=0;  //clear current to zero
        document.getElementById('current-0').textContent='0';   // uswd to clear the score who has one on the device
        document.getElementById('current-1').textContent='0'; 
        
        // to show the active one player..
         document.querySelector('.player-0-panel').classList.toggle('active');
         document.querySelector('.player-1-panel').classList.toggle('active');
        //toggle will reverse the functionality of the class 
      //  document.querySelector('.player-0-panel').classList.remove('active');  // to get class which is active use classlist property and the property to oerform with the attribute which is class ..
        //document.querySelector('.player-1-panel').classList.add('active');
        
        document.querySelector('.dice').style.display='none';
    }}
    });

//DRY===donot repeat yoirself means to not to repat the same code again and again cretate funtion and then use that code multiple times as u want...,...


document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    
    score=[0,0];// array of sc0re to get tottal
roundscore=0;
activeplayer=0;//can be one
gameplay=true;
    
    document.querySelector('.dice').style.display='none';  // used to hide something in the beginning 
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('name-1').textContent='Player 2';    
document.getElementById('name-0').textContent='Player 1';    
    
document.querySelector('.player-0-panel').classList.remove('active');
         document.querySelector('.player-1-panel').classList.remove('active');  
    document.querySelector('.player-0-panel').classList.add('active');
    
    
}


































































