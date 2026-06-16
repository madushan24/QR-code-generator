let qrCode;

function generateQR() {

    let text = document.getElementById("qrText").value;
    let qrColor = document.getElementById("qrColor").value;
    let bgColor = document.getElementById("bgColor").value;

    if (text === "") {
        alert("Please enter text");
        return;
    }

    document.getElementById("imgBox").innerHTML = "";

    qrCode = new QRCode(document.getElementById("imgBox"), {
        text: text,
        width: 200,
        height: 200,
        colorDark: qrColor,
        colorLight: bgColor
    });
}

function downloadQR() {

    let img = document.querySelector("#imgBox img");

    if (!img) {
        alert("Generate QR first");
        return;
    }

    let link = document.createElement("a");
    link.href = img.src;
    link.download = "qrcode.png";
    link.click();
}