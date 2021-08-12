var box = document.getElementById("tc-captcha");
let number = Math.floor(Math.random() * 1000);
box.innerHTML = `<p>Please solve the CAPTCHA:</p><img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${number}"><br><input id="number"><br><textarea name="tcr" id="tcr" style="display: none;">`;
document.getElementById("number").addEventListener("change", (e) => {
    if (e.target.value == number) {
        number = null;
        document.getElementById("tcr").value = "pass"
    } else {
        document.getElementById("tcr").value = "fail"
    }
})