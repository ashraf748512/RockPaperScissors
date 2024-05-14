let computerMove=''
 function pickComputerMove(){
        const random=Math.random();
    
        if(random<=1/3){
            computerMove='rock'
        } else if(random<=2/3){
            computerMove='paper'
        }else{
            computerMove='scissors'
        }
        return computerMove;
    } 

 function rockMoves(move){
    let result=''
    if(move==='rock'){
        result='tie'
        return result
    }else if(move==='paper'){
        result='you lose'
        return result
    }else{
        result='you win'
        return result
    }
    
 }


 function paperMoves(move){
    let result=''
    if(move==='rock'){
        result='you win'
        return result
    }else if(move==='paper'){
        result='tie'
        return result
    }else{
        result='you lose'
        return result
    }
   
 }
 function scissorsMoves(move){
    let result=''
    if(move==='rock'){
        result='you lose'
        return result
    }else if(move==='paper'){
        result=' you win'
        return result
    }else{
        result='tie'
        return result
    }
}
function showResult(e){
    const result=document.querySelector('#result')
    result.innerHTML=`your result ${e} `
}
