var joke = null

function hideAll(){
    document.getElementById("door-closed").hidden = true
    document.getElementById("door-open").hidden = true
    document.getElementById('nextBtn').hidden = true
    document.getElementById('punchlineBtn').hidden = true
    document.getElementById('code').hidden = true
    document.getElementById('terminal').hidden = true
    document.getElementById('laugh-beam').hidden = true
    document.getElementById('smile-beam').hidden = true
    document.getElementById('setup').hidden = true

    //save space for it by using visibility css instead of hidden attribute.
    document.getElementById('punchline').classList.add("hidden")
}

/* fetch joke from the joke api endpoint and update the UI  */
function nextJoke(){
    //reset
    hideAll()

    //server access about to start so show spinner
    document.getElementById("spinner").hidden =  false

    fetch('/api/joke')
    .then(response => response.json())
    .then(data => {
        
        joke = data.joke
        //check if a joke was returned
        if(!joke){
            //todo display error
            return
        }

        //hide spinner
        document.getElementById("spinner").hidden =  true

        //show the joke setup and punchline reveal button
        document.getElementById('setup').hidden = false
        document.getElementById('setup').innerText = joke.setup
        document.getElementById('punchlineBtn').hidden = false
        
        //show icon based on joke type
        if(joke.type == "knock-knock") {
            document.getElementById("door-closed").hidden = false
        } else if(joke.type == "programming") {
            document.getElementById("terminal").hidden = false
        } else if(joke.type == "general"){
            document.getElementById("smile-beam").hidden = false
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        //todo display error
    });
}

function revealPunchline(){
    //reset
    hideAll()
    //show icon based on joke type
    if(joke.type == "knock-knock") {
        document.getElementById("door-open").hidden = false
    } else if(joke.type == "programming") {
        document.getElementById("code").hidden = false
    } else if(joke.type == "general"){
        document.getElementById("laugh-beam").hidden = false
    }

    //show the joke punchline and next joke button
    document.getElementById('setup').hidden = false
    document.getElementById('punchline').classList.remove("hidden")
    document.getElementById('nextBtn').hidden = false
    document.getElementById('punchline').innerText = joke.punchline
    
}