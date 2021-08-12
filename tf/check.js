var params = new URLSearchParams(window.location.search);
var response = params.get("tcr")
if (response == "pass") {
    document.write("Sucess!")
} else {
    document.write("Failed to submit CAPTCHA.")
}