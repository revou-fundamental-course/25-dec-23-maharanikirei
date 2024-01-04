// Fungsi input luas segitiga
function hitungLuas() {
  var sisiLuas = document.getElementById("alas-luas").value;
  var sisiLuas = document.getElementById("tinggi-luas").value;

  document.getElementById("output-luas").innerHTML =
    "<span>" + sisiLuas + "</span>";
  console.log(sisiLuas);

  document.getElementById("output-luas2").innerHTML =
    "<span>" + sisiLuas + "</span>";
  console.log(sisiLuas);

  let a1 = parseInt(sisiLuas);
  let a2 = sisiLuas * sisiLuas;

  document.getElementById("result").innerHTML = "<span>" + a2 + "</span>";
  console.log(a2);

  var elemen = document.getElementById("hasilLuas");
  elemen.style.display = "block";
  var elemen1 = document.getElementById("btn-reset");
  elemen1.style.display = "block";
  return sisiLuas;
}
//Tombol Reset Luas segitiga
function resetLuas(flag) {
  document.getElementById("alas-luas").value = "";
  document.getElementById("tinggi-luas").value = "";

  var elemen = document.getElementById("hasilLuas");
  elemen.style.display = "none";
}

//KELILING

// Fungsi input penghitung keliling
function hitungKeliling() {
  var sisiKeliling = document.getElementById("sisi-keliling1").value;
  var sisiKeliling = document.getElementById("sisi-keliling2").value;
  var sisiKeliling = document.getElementById("sisi-keliling3").value;
  var output = document.getElementById("output-keliling");

  document.getElementById("output-keliling1").innerHTML =
    "<span>" + sisiKeliling + "</span>";
  console.log(sisiKeliling);
  document.getElementById("output-keliling2").innerHTML =
    "<span>" + sisiKeliling + "</span>";
  console.log(sisiKeliling);
  document.getElementById("output-keliling").innerHTML =
    "<span>" + sisiKeliling + "</span>";
  console.log(sisiKeliling);

  let a1 = parseInt(sisiLuas);
  let a2 = sisiKeliling * sisiKeliling * sisiKeliling;

  document.getElementById("result").innerHTML = "<span>" + a2 + "</span>";
  console.log(a2);

  var elemen = document.getElementById("hasilKeliling");
  elemen.style.display = "block";
  var elemen1 = document.getElementById("btn-reset");
  elemen1.style.display = "block";
  return sisiKeliling;

  output.style.display = "block";
}

// Tombol Reset keliling persegi
function resetKeliling(flag) {
  document.getElementById("output-keliling").style.display =
    flag === 1 ? "block" : "none";
  document.getElementById("sisi-keliling1").value = "";
  document.getElementById("sisi-keliling2").value = "";
  document.getElementById("sisi-keliling3").value = "";
}
