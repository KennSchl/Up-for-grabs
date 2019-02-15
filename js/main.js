"use strict";

let posts = []; //definere posts

//Fetches json data fra headless cms (WordPress)
fetch("http://betinaringgaard.dk/wordpress/wp-json/wp/v2/posts?_embed&categories=2") //Hent data fra wordpress api
  .then(function(response) { //Spørger api om der er noget at tage (response i det her tilfælde)
    return response.json(); //Hvis den retunerer med et noget (et response)....
  }) //Navngivningen (response) er lige meget, så længe de passer sammen
  .then(function(json) { //....så (then) skal den sætte funktionen appendPosts i gang
    appendPosts(json); //
    console.log(json);
    posts = json;
  }); //Navngivningen (json) er igen ligemeget, så længe de passer sammen og giver mening*/

// appends posts til DOM
  function appendPosts(posts) {
    let htmlTemplate = "";
    for (let post of posts) {
      console.log(post);
      htmlTemplate += `
      <article class = "grid-item" onclick="getPost('${post.slug}')">
        ${post.content.rendered}
      </article>
      `;
    }
    document.querySelector("#grid-posts").innerHTML = htmlTemplate;
  };


function getPost(slug) {
console.log(slug)

}
