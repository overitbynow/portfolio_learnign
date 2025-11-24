var loadedGame = document.createElement('script');
if(sessionStorage.getItem('loadedGame') !=null){
    loadedGame.src = 'Games/' + sessionStorage.getItem('loadedGame');
} else {
    loadedGame.src = 'Games/Pong.js';
}
document.head.appendChild(loadedGame);

function loadNewGame(gameScriptPath) {
    sessionStorage.setItem('loadedGame', gameScriptPath);
    location.reload();
}
