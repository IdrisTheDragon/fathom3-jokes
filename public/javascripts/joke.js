function nextJoke(){
    fetch('/api/joke')
    .then(response => response.json())
    .then(data => {
        var joke = data.joke
        if(!joke){
            document.getElementById('setup').hidden = true
            document.getElementById('punchline').hidden = true
            return
        }
        document.getElementById('setup').hidden = false
        document.getElementById('setup').innerText = joke.setup
        document.getElementById('punchline').hidden = true
        document.getElementById('punchlineBtn').hidden = false
        document.getElementById('nextBtn').hidden = true
        document.getElementById('punchline').innerText = joke.punchline

        //joke.type
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function revealPunchline(){
    document.getElementById('punchline').hidden = false
    document.getElementById('punchlineBtn').hidden = true
    document.getElementById('nextBtn').hidden = false
}