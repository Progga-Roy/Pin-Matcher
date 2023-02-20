function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}


function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}
document.getElementById('generate-btn').addEventListener('click',function(){
const pin = getPin();
const displayField = document.getElementById('display-pin');
displayField.value = pin;

})
document.getElementById('calculator').addEventListener('click',function(event){
const number = event.target.innerText;
const typeNumberField =  document.getElementById('type-number');
const typeNumberFieldValue = typeNumberField.value;
if(isNaN(number)){
   if(number === 'C'){
    typeNumberField.value = '';
   }
   else if(number === '<'){
    const digits = typeNumberFieldValue.split('');
    digits.pop();
    const remainingDigits = digits.join('');
    typeNumberFieldValue.value = remainingDigits;
   }
}

else{


   newTypedNumber = typeNumberFieldValue + number
   typeNumberField.value = newTypedNumber;
}

})

document.getElementById('verify-pin').addEventListener('click',function(){
const inputField = document.getElementById('display-pin');
const currentPin = inputField.value;

const typeNumberField = document.getElementById('type-number');
const currentNumber = typeNumberField.value;
const massageSuccess =  document.getElementById('notify')
const massageFailure =  document.getElementById('notify-again')


if(currentPin===currentNumber){
  
  massageSuccess.style.display= 'block'
  massageFailure.style.display= 'none'
}
else{

    massageFailure.style.display= 'block'
  massageSuccess.style.display= 'none'
}
})