function encodeAndDecodeMessages() {
    const textBars = document.getElementsByTagName("textarea");
    const buttons = document.getElementsByTagName('button');
    //get elements
    let inputArea = textBars[0];
    let outputArea = textBars[1]; 
    let encodedMsg = inputArea.value.split('').forEach(e => e + 1);
    //add events
    buttons[0].addEventListener('click', function (ev) {
        let operator = 1;
        outputArea.textContent = generateMessage(inputArea.value, operator)
        inputArea.value = '';
    })
    buttons[1].addEventListener('click', function (ev) {
        let operator = -1;
        outputArea.textContent = generateMessage(outputArea.value, operator)
    })

    function generateMessage(message, operator) {
        let newMessage = '';
        for (let i = 0; i < message.length; i++) {
            let char = message.charCodeAt(i);
            newMessage += String.fromCharCode(char += operator);
        }
        return newMessage;
    }

}