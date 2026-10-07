const PASSWORD = "1234"; // غيرها لكلمة السر اللي بدك إياها

function login() {
  const input = document.getElementById("password").value;
  if (input === PASSWORD) {
    document.getElementById("login").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
  } else {
    alert("❌ كلمة السر غير صحيحة");
  }
}

function saveProduct() {
  const barcode = document.getElementById("barcode").value;
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const qty = document.getElementById("qty").value;

  // مؤقتًا نخزن البيانات في LocalStorage
  const products = JSON.parse(localStorage.getItem("products") || "{}");
  products[barcode] = { name, price, qty };
  localStorage.setItem("products", JSON.stringify(products));

  document.getElementById("status").innerText = "✅ تم حفظ الصنف";
}
