var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/morse.json"

function errorHandler(error) {
   console.log("error occured",error)
   DeviceAcceleration("Something wrong with Server! Try again later.")
}

function getTranslationURL(text) {
   return serverURL + "?" + "text=" + text
}

function clickHandler() {
   // outputDiv.innerText =" sfhjgajnmkl " +  txtInput.value

   var inputText = txtInput.value; // talking input

   fetch (getTranslationURL(inputText)) //calling server for processing
      .then(response => response.json())
      .then(json => {
         var translatedText = json.contents.translated;
         outputDiv.innerText = translatedText; }
         )
      .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)

