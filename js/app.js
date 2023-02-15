function getPin(){
    const pin =generatePin();
    const pinString = pin + '' ;

    if (pinString.length === 4){
        return pin;
    }
    else {
         
        return getPin;
    }
}


function generatePin (){
    const random = Math.round(Math.random()*10000);
    return random;
}
document.getElementById('generate-pin').addEventListener('click', function (){
    const pin = getPin();
  const displayPinShow =document.getElementById('display-pin');
  displayPinShow.value = pin; 
});
document.getElementById('calculator').addEventListener('click', function(event){
   const number = event.target.innerText;
   const typedNumbersInput =document.getElementById('typed-numbers')
   const previousNumbersField =typedNumbersInput.value ;

   if(isNaN(number)){
    if(number==='C'){
        typedNumbersInput.value ='';
    }
    else if(number==='<'){
        const digits = previousNumbersField.split('');
        digits.pop();
        const remainingNumber = digits.join('') ;
        typedNumbersInput.value = remainingNumber;
    }
   }
   else {
    
    const previousTypedNumber =typedNumbersInput.value ;
    const newTypedNumber = previousTypedNumber + number ;
    typedNumbersInput.value =newTypedNumber ;
   }
})
document.getElementById('verify-pin').addEventListener('click', function (){
    
    const displayPinShow =document.getElementById('display-pin');
    const currentPin =displayPinShow.value ;

    const typedNumbersInput =document.getElementById('typed-numbers');
    const typeNumber = typedNumbersInput .value ;

    const pinSuccessMessage =document.getElementById('success-msg');
    const errorMessage = document.getElementById('error-msg');
    if (currentPin=== typeNumber){
       
        pinSuccessMessage.style.display = 'block';
        errorMessage.style.display='none';

    }
    else {
        
        errorMessage.style.display='block';
        pinSuccessMessage.style.display = 'none';
    }
})