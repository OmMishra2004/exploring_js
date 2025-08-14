const form=document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const height=parseFloat(document.querySelector('#height').value)
    // const height1=Number(document.querySelector('#height').value) this is also a right way
    const weight=parseFloat(document.querySelector('#weight').value)
    const mheight=height/100
    const bmi=(weight/(mheight*mheight)).toFixed(2)
    const result=document.querySelector('#results')

    //this is also a way 
    // const newresult=document.createElement('div')
    // newresult.setAttribute("id","results")
    // newresult.append(document.createTextNode(bmi))
    // result.replaceWith(newresult)

    let message
    if (bmi<=18.6) {
        message ="Based on your bmi you are underweight"
    }else if (bmi>18.6 && bmi<=24.9) {
        message="Based on your bmi you are in normal range"
    }else{
        message="Based on your bmi you are overweight"
    }
    result.innerHTML= `<span>BMI = ${bmi}</span><div><p> ${message} </p></div>`
})