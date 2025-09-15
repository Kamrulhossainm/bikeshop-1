//logic for our custom contact form

const businessAccountCheckbox = document.getElementById('businessAccount');
const companyInfoDiv = document.getElementById('companyInfo');
const contactReason = document.getElementById("contactReason");
const productNameField = document.getElementById('productNameField');
const orderNumberField = document.getElementById('orderNumberField')


// Add Event Listener
businessAccountCheckbox.addEventListener('change', (e)=> {
    if(businessAccountCheckbox.checked){
        companyInfoDiv.classList.remove('hidden')
    }else{
        companyInfoDiv.classList.add('hidden')

    }
})


contactReason.addEventListener('change', (e)=> {

    productNameField.classList.add('hidden');
    orderNumberField.classList.add('hidden');
    
    if(contactReason.value === 'product'){
        productNameField.classList.remove('hidden');
    }
    else if(contactReason.value === 'order'){
        orderNumberField.classList.remove('hidden')
    }

})