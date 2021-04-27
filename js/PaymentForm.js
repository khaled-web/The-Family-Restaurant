// ********** Payment Form ************
const payNow = document.getElementById('payNow');
const cardNumber = parseInt(document.getElementById('cardNumber').value);
console.log(cardNumber);
const cvcNumber = document.getElementById('cvcNumber').value;
console.log(cvcNumber);
payNow.addEventListener('click', () => {
 if ((cardNumber.length > 0) && (cvcNumber.length > 0)) {
  swal("Good job!", "The operation is successfully done", "success");
 } else {
  swal("Oops!", "Double Check Your Data.", "error");
 }
})