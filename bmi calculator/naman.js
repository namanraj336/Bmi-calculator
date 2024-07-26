const form = document.querySelector('form')

form.addEventListener('submit',function(event){
    event.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#results')

    if(height<=0 || height==='' || isNaN(height)){
        result.innerHTML=`Enter a valid height value ${height}`
    }else if(weight<=0 || weight==='' || isNaN(weight)){
        result.innerHTML=`Enter a valid weight value ${weight}`
    }else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        let message=0
        if(bmi<18.6){
            message="you are underweight, you should gain some weight"
        }
        if(bmi>18.6 && bmi<=24.9){
            message="you have perfect bmi, you should maintain your body weight"
        }
        if(bmi>24.9){
            message="you are overweight and you should lose some weight"
        }
        result.innerHTML=`<span>${bmi}<br>${message}</span>`
    }
})