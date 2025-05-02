const URL="https://api.dictionaryapi.dev/api/v2/entries/en/";
               
        const searchBttn=document.querySelector(".search button");  
        const searchBoxx=document.querySelector(".search input"); 
        const speakBtn=document.querySelector(".meaning button");
         
        async function checkMeaning(word){
           const mean=await fetch(URL+ word);
           
           const data=await mean.json();
           document.querySelector(".word").innerHTML="Word : "+data[0].word;
           document.querySelector(".definition1").innerHTML="definition : " + data[0].meanings[0].definitions[0].definition;
           document.querySelector(".partOfSpeech").innerHTML="partOfSpeech : " + data[0].meanings[0].partOfSpeech;
           console.log(data);
           document.querySelector(".meaning").style.display="block";

           const audioURL = data[0].phonetics.find(p => p.audio)?.audio;

           if (audioURL) {
            speakBtn.style.display = "inline"; // Show the speaker button
            speakBtn.onclick = () => speakWord(audioURL);
           } else {
            speakBtn.style.display = "none"; // Hide it if no audio available
           }
        }

        function speakWord(url) {
            const audio = new Audio(url);
            audio.play();
          
        }
                
        searchBttn.addEventListener("click", ()=>{
            checkMeaning(searchBoxx.value);
        });