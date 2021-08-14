export let menu = {
    // INIT
    init : function(){
        // ELEMENTS
        let container = document.querySelector("#container");

        // FUNCTIONS
        function createScreen(){
            // Create elements
            let btnPlay = document.createElement("button");
            let btnOptions = document.createElement("button");
            
            // Add classes
            btnPlay.classList.add("play");
            btnOptions.classList.add("options");
            
            // Append
            container.append(btnPlay);
            container.append(btnOptions);
            
            // Add content
            btnPlay.innerHTML = "Play";
            btnOptions.innerHTML = "Options";
        }

        // MAIN
        createScreen();
    }
}