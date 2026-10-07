// قاعدة بيانات مؤقتة (ممكن تربطها لاحقاً مع Google Sheets)
// رابط الـ API اللي نسخته من Google Apps Script
const API_URL = "https://script.google.com/macros/s/XXXXXX/exec";

async function getProduct(barcode) {
  try {
    const response = await fetch(API_URL);
    const products = await response.json();
    return products[barcode] || null;
  } catch (error) {
    console.error("خطأ في جلب البيانات:", error);
    return null;
  }
}

function onScanSuccess(decodedText) {
  getProduct(decodedText).then(product => {
    if (product) {
      document.getElementById("result").innerText =
        `📦 المنتج: ${product.name}\n💰 السعر: ${product.price}\n📊 الكمية: ${product.qty}`;
    } else {
      document.getElementById("result").innerText = "❌ المنتج غير موجود في الجدول";
    }
  });
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
