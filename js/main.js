document.getElementById("showMe").addEventListener("click", function() {
    let imie = document.getElementById("fName").value;
    let nazwisko = document.getElementById("lName").value;
    let telefon = document.getElementById("phoneNumber").value;

    document.getElementById("name").textContent = "Imię: " + imie;
    document.getElementById("surname").textContent = "Nazwisko: " + nazwisko;
    document.getElementById("phone").textContent = "Numer telefonu: " + telefon;
});