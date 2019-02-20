"use strict";

let posts = [];

//Fetches json data fra headless cms (WordPress)
fetch("http://betinaringgaard.dk/wordpress/wp-json/wp/v2/posts?_embed&categories=6") //Hent data fra wordpress api
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
        <a href="#wrapper">
      <section class="grid-item" id="${post.slug}" onclick="getPost('${post.slug}')">
        ${post.content.rendered}
      </section>
        </a>
      `;
    }
    document.querySelector("#grid-posts").innerHTML = htmlTemplate;
  };


function getPost(slug) {
      console.log(slug);
      for (let post of posts) {
if (post.slug === slug) {
  console.log(post);
  document.querySelector("#detailView").innerHTML = `
  <article>
    ${post.content.rendered}
  </article>
  `;
}

      }
        function removeGridPosts() {
          document.getElementById("frontpage").style.display = "none";
        }

      setTimeout(removeGridPosts, 1000)
      document.getElementById("frontpage").setAttribute(
    "style", "transform: translateX(-110%);");
      document.getElementById("burger").style.display = "none";
      document.getElementById("bckarrow").style.display = "block";
      document.getElementById("detailView").setAttribute(
   "style", "display: inherit; transform: translateX(0%);");
}

function removePost() {
  document.getElementById("frontpage").setAttribute(
"style", "display: inherit; transform: translateX(0%);");
  document.getElementById("burger").style.display = "inherit";
  document.getElementById("bckarrow").style.display = "none";
  document.getElementById("detailView").setAttribute(
"style", "transform: translateX(110%);");
}
