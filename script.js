//both parts having different UI's to shoe
var partVisible3 = document.getElementById('part3');
var partVisible4 = document.getElementById('part4');


//on key press display both of them accordingly.
// i.e. if initial dont show key meny and as soon as any key is pressed show its details.
window.addEventListener('keypress',()=>{
    partVisible4.classList.add('displayNone');
    partVisible3.classList.remove('displayNone');

});

//onkeydown select the key and set their value to DOM.

window.addEventListener('keydown', (event)=>{
    var which = event.which;
    var key = event.key;
    
    var code = event.code;
    var location = event.location;
    

//if any of the function or special key is pressed then prevent its default behaviour.

    if( event.key === 'F5'||
        event.key === 'F1'||
        event.key === 'F2'||
        event.key === 'F3'||
        event.key === 'F4'||
        event.key === 'F5'||
        event.key === 'F6'||
        event.key === 'F7'||
        event.key === 'F8'||
        event.key === 'F9'||
        event.key === 'F10'||
        event.key === 'F11'||
        event.key === 'F12'||
        event.key === 'Escape'||
        event.key === 'Tab'||
        event.key === 'Alt'||
        event.key === 'Control'||
        event.key === 'Shift'||
        event.key === 'Meta'||
        event.key === 'Delete'||
        event.key === 'NumLock'||
        event.key === 'Backspace'||
        event.key === 'ContextMenu'
    ){
        
        event.preventDefault();
    }

    
    document.getElementById('which').textContent = which;
    document.getElementById('big-square').textContent = which;
    document.getElementById('key').textContent  = key;
    document.getElementById('code').textContent = code;
    document.getElementById('location').textContent = location;
     
    if(event.code == 'Space'){
        document.getElementById('key').textContent  = code;
    }


});