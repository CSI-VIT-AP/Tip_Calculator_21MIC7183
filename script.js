let errorMessage = document.getElementById("errorMessage");

function calculate() {
    let billAmount = document.getElementById("billAmount").value;
    let percentageTip = document.getElementById("percentageTip").value;
    if (billAmount === "") {
        errorMessage.textContent = "Please Enter a Valid Input";
    } else if (percentageTip === "") {
        errorMessage.textContent = "Please Enter a Valid Input";
    } else {
        let tipAmount = (parseInt(percentageTip) / 100) * parseInt(billAmount);
        let totalAmount = parseInt(billAmount) + parseInt(tipAmount);
        document.getElementById("tipAmount").value = tipAmount;
        document.getElementById("totalAmount").value = totalAmount;
        errorMessage.textContent = "";
    }
}
