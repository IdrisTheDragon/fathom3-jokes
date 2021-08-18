var joke = null

function hideAll(){
    document.getElementById("door-closed").hidden = true
    document.getElementById("door-open").hidden = true
    document.getElementById('nextBtn').hidden = true
    document.getElementById('punchline').classList.add("hidden")
    document.getElementById('punchlineBtn').hidden = true
    document.getElementById('code').hidden = true
    document.getElementById('terminal').hidden = true
    document.getElementById('laugh-beam').hidden = true
    document.getElementById('smile-beam').hidden = true
}

function nextJoke(){
    fetch('/api/joke')
    .then(response => response.json())
    .then(data => {
        joke = data.joke
        hideAll()
        if(!joke){
            return
        }
        document.getElementById('setup').hidden = false
        document.getElementById('setup').innerText = joke.setup
        document.getElementById('punchlineBtn').hidden = false
        

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
    });
}

function revealPunchline(){
    hideAll()
    if(joke.type == "knock-knock") {
        document.getElementById("door-open").hidden = false
    } else if(joke.type == "programming") {
        document.getElementById("code").hidden = false
    } else if(joke.type == "general"){
        document.getElementById("laugh-beam").hidden = false
    }
    document.getElementById('punchline').classList.remove("hidden")
    document.getElementById('nextBtn').hidden = false
    document.getElementById('punchline').innerText = joke.punchline
    
}