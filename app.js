// all variables 

function productManagement(id,price,updatePrice,isIncrement){
    const productQuantity = document.getElementById(id);
    const productPrice = document.getElementById(updatePrice);
    if(isIncrement){
        productQuantity.value = parseInt(productQuantity.value) + 1;
        const totalproductPrice = price * productQuantity.value;
        productPrice.innerText = totalproductPrice;
    }else{
        if(productQuantity.value > 0){
            productQuantity.value = parseInt(productQuantity.value) - 1;
            const totalproductPrice = price * productQuantity.value;
            productPrice.innerText = totalproductPrice;
        }
    }
    const subtotal = document.getElementById('subtotal');
    const totalPhonePrice = parseInt(document.getElementById('phone-price').innerText);
    const totalCasePrice = parseInt(document.getElementById('case-price').innerText);
    subtotal.innerText = totalPhonePrice + totalCasePrice;
    const tax = document.getElementById('tax');
    const totalTax = parseInt(subtotal.innerText) / 20;
    tax.innerText = totalTax;
    const total = document.getElementById('total');
    const totalAmount = parseInt(subtotal.innerText) + parseInt(tax.innerText);
    total.innerText = totalAmount;
}

document.getElementById('phone-plus').addEventListener('click',function(){
    productManagement('phone-quantity',1219,'phone-price',true);
})
document.getElementById('case-plus').addEventListener('click',function(){
    productManagement('case-quantity',59,'case-price',true);
})
document.getElementById('phone-minus').addEventListener('click',function(){
    productManagement('phone-quantity',1219,'phone-price',false);
})
document.getElementById('case-minus').addEventListener('click',function(){
    productManagement('case-quantity',59,'case-price',false);
})