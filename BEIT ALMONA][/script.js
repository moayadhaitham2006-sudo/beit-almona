// قاعدة بيانات مؤقتة (ممكن تربطها لاحقاً مع Google Sheets)
const https://script.google.com/macros/s/AKfycbxL-8cN98MNNKjNA_j2yTxbRpr5Lb6vTqTsEoSog_32MSzL5ErCERQDdVvHvTRZX6cymQ/exec
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
