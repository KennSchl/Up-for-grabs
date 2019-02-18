"use strict";

let posts = []; //definere posts

//Fetches json data fra headless cms (WordPress)
fetch("http://betinaringgaard.dk/wordpress/wp-json/wp/v2/posts?_embed&categories=6")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    appendPosts(json);
    console.log(json);
    posts = json;
  }); 

// appends posts til DOM
  function appendPosts(posts) {
    let htmlTemplate = "";
    for (let post of posts) {
      console.log(post);
      htmlTemplate += `
      <section class="grid-item" onclick="getPost('${post.slug}')">
        ${post.content.rendered}
      </section>
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
"style", "transform: translateX(110%);");}
