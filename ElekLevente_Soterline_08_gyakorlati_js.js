const holder = [
    [1,2,3], 
    ["alma", "banán", "körte"], 
    {segítő:"János",
    kor:31}, 
    ["Levente"]
]

    
    function displayMessage(){
        let whatstheanswer = document.getElementById("namecheck").value;
        if(whatstheanswer === holder[3][0]){
            document.getElementById("answer").innerHTML = "Regisztrált tag! " + "A segítője " + holder[2].segítő + ", aki " + holder[2].kor + " éves."
        }else{
            document.getElementById("answer").innerHTML = "Nem regisztrált tag!"
        }
    }



