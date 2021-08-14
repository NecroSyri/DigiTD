import { elements } from "./elements";

export let menu = {
    // FUNCTIONS
    createScreen : function(){
        // Create elements
        let btnPlay = document.createElement("button");
        let btnOptions = document.createElement("button");
        
        // Add classes
        btnPlay.classList.add("play");
        btnOptions.classList.add("options");
        
        // Append
        elements.container.append(btnPlay);
        elements.container.append(btnOptions);
        
        // Add content
        btnPlay.innerHTML = "Play";
        btnOptions.innerHTML = "Options";
    },
    
    // INIT
    init : function(){
        var elements = import("./elements");
        menu.createScreen();
    }
}