function calculateBMI() {

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if(height === "" || weight === ""){
        alert("Enter Height and Weight");
        return;
    }

    let bmi = weight / ((height / 100) * (height / 100));

    document.getElementById("result").innerHTML =
        "BMI : " + bmi.toFixed(2);

    let condition = "";

    if(bmi < 18.5){
        condition = "Underweight";
    }
    else if(bmi < 25){
        condition = "Normal Weight";
    }
    else if(bmi < 30){
        condition = "Overweight";
    }
    else{
        condition = "Obese";
    }

    document.getElementById("condition").innerHTML =
        "Weight Condition : " + condition;
}