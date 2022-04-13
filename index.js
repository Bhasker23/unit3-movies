let arr =[];
const container = document.getElementById("container");



function showmovie(){
    event.preventDefault()
    let movies = document.getElementById("name").value;
    console.log(movies);
    
    if(movies == "" ){
        return alert("Please Enter Movie name")
        
    }
    else{
     
            findmovie(movies)

    
    document.getElementById("name").value = null
    }
    // arr.push(movies);

}



// ----------------------> Using async, await function <------------------------------

async function findmovie(q){
    const url = "http://www.omdbapi.com/?apikey=78185b06&t="+ q;
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        appendData(data)
    }
    catch(err){
        console.log("err :", "API link has been crashed");
    }
}


// -----------------> USing .then, .catch  <------------------------


// function findmovie(q){ 

//     const url = "http://www.omdbapi.com/?apikey=78185b06&t="+ q;

//     fetch(url)
//     .then(function(res){
//         return res.json()
    
//     })
//     .then(function(res){
//         console.log(res)
//         appendData(res)
//     }).catch(function(err){
//         console.log("err :",err);
//     })
// }


function appendData(data){
    // arr.map(function (el){
        document.querySelector("#container").innerHTML = null
       
        let div = document.createElement("div");
        div.setAttribute("class", "div")
       
        let poster = document.createElement("img");
        poster.src = data.Poster
        poster.setAttribute("class" , "poster")


        let div1 = document.createElement("div");
        div1.setAttribute("class", "div1");

        let Title = document.createElement("h3");
        Title.innerText = "Title : " + data.Title

        let Year = document.createElement("p")
        Year.innerText = "Relase Date : " +  data.Year;

        let rating = document.createElement("p");
        rating.innerText = "IMDB Rating : " + data.imdbRating;

        let time = document.createElement("p");
        time.innerText = "Duration : " + data.Runtime

        let Director = document.createElement("p");
        Director.innerText = "Director : " + data.Director

        let Country = document.createElement("p");
        Country.innerText = "Country : " + data.Country

        let Genre = document.createElement("p");
        Genre.innerText = "Genre : " + data.Genre
        
      
        div1.append(Title,Year,rating,time,Director,Country,Genre)
       
        div.append(poster,div1)


        if(data.Title == undefined ){
            
            return alert("Please select Valid movie name")
            
        }
        else{
                container.append(div)
        } 
        console.log(data.imdbRating);
        if(data.imdbRating > 8.5){
            let recommand = document. createElement("div");
            recommand.innerText = "!! Recommanded Movie !!"
            recommand.setAttribute("class", "rec")
            div1.append(recommand,Title,Year,rating,time,Director,Country,Genre)
            div.append(poster,div1)
            container.append(div)
        }
    // })

}


// console.log("arr")