const API_URL = "https://script.google.com/macros/s/XXXXXX/exec"; // رابط الـ API

async function saveProduct() {
  const barcode = document.getElementById("barcode").value;
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const qty = document.getElementById("qty").value;

  const product = { barcode, name, price, qty };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(product)
    });
    const result = await response.text();
    document.getElementById("status").innerText = "✅ " + result;
  } catch (error) {
    document.getElementById("status").innerText = "❌ خطأ في الحفظ";
  }
}
