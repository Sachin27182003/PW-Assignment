// This code input payment methods from users and print their respective processing fee for payment

let paymentMethods = "Sachin";


switch(paymentMethods){
    case "credit" :
        processingFee = "2%";
        break;
    case "debit":
        processingFee = "1.5%";
        break;
    case "paypal":
        processingFee = "3%";
        break;    
}

if(paymentMethods == "credit" && paymentMethods == "debit" && paymentMethods == "paypal"){
        console.log(`Processing fee for ${paymentMethods} is ${processingFee}`);
}else {
       console.log("Wrong Payment Method");
}