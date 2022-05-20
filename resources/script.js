const fetchButton = document.getElementById('fetchButton');
const dataList = document.getElementById('fetchedData');
const paragraph = document.getElementById('paragraph');
const pasteIn = document.getElementById('pasteIn');


let textToConvert = pasteIn.value
let convertedText = ""
dataList.innerHTML = convertedText;
fetchButton.addEventListener('click', function(e){
    e.preventDefault()
    textToConvert = pasteIn.value;
    console.log('clicked')
    convertText(textToConvert)
})

let convertText = (text) => {

const encodedParams = new URLSearchParams();
    encodedParams.append("content", text);
    encodedParams.append("response_type", "html");
    encodedParams.append("request_type", "html");
    encodedParams.append("fixation", "1");
    encodedParams.append("saccade", "10");

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Host': 'bionic-reading1.p.rapidapi.com',
		'X-RapidAPI-Key': '82eb332f68mshc5b632e29fdf6aap1f3251jsn5f6e18ce05fc'
	},
	body: encodedParams
};

fetch('https://bionic-reading1.p.rapidapi.com/convert', options)
.then (response => response.text().then(function(text) {

    var sendIt = text.toString();
    convertedText = sendIt;
    dataList.innerHTML = convertedText;
}))
.catch(err => console.error(err));

}