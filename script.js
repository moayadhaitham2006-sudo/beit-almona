// قاعدة بيانات مؤقتة (ممكن تربطها لاحقاً مع Google Sheets)
const products = {
  "123456": { name: "زيت زيتون", price: "20 شيكل", qty: 50 },
  "789012": { name: "زعتر بلدي", price: "10 شيكل", qty: 100 },
  "345678": { name: "مكدوس", price: "25 شيكل", qty: 30 }
};

function onScanSuccess(decodedText) {
  if (products[decodedText]) {
    const p = products[decodedText];
    document.getElementById("result").innerText =
      `الصنف: ${p.name}\nالسعر: ${p.price}\nالمتوفر: ${p.qty}`;
  } else {
    document.getElementById("result").innerText = "❌ الصنف غير موجود";
  }
}

function onScanError(errorMessage) {
  console.log(errorMessage);
}

const html5QrCode = new Html5Qrcode("reader");
html5QrCode.start(
  { facingMode: "environment" }, // الكاميرا الخلفية
  { fps: 10, qrbox: 250 },
  onScanSuccess,
  onScanError
);
function getProduct(barcode) {
  // نقرأ البيانات من LocalStorage
  const products = JSON.parse(localStorage.getItem("products") || "{}");
  return products[barcode] || null;
}

// مثال: لما يمسح الزبون باركود
function showProduct(barcode) {
  const product = getProduct(barcode);
  if (product) {
    alert(`📦 الصنف: ${product.name}\n💰 السعر: ${product.price}\n📊 الكمية: ${product.qty}`);
  } else {
    alert("❌ هذا الباركود غير موجود");
  }
}
