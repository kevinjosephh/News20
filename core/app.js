console.log("hi")
let apiKey = "7966489d41cb4f10a4f992ca8bba796a"
let country = "in"

// grap news contanier
let newsBtn = document.getElementById("newsBtn")

// get request
const xhr = new XMLHttpRequest();
xhr.open('GET','https://newsapi.org/v2/top-headlines?country=in&apiKey=7966489d41cb4f10a4f992ca8bba796a',true);
// response
xhr.onload=function(){
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml =""
        articles.forEach(function(element,index) {
          let news =`<p id="newsBtn" class="newsBtn" > 
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample${index}" role="button" aria-expanded="false" aria-controls="multiCollapseExample${index}" ><b>${index+1}:</b> ${element.title}</a>
                    <!-- <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button> -->
                    </p>
                    <div class="row">
                    <div class="col">
                      <div class="collapse multi-collapse" id="multiCollapseExample${index}">
                        <div class="card card-body">
                          ${element.description}.<a href="${element.url}" target="_blank">Read More</a>
                        </div>
                      </div>
                    </div>
                    </div>`
          newsHtml += news;


        });
        newsBtn.innerHTML = newsHtml;

    }
    else{
        console.log("bye")
    }
}

xhr.send()

let news =`
<p id="newsBtn" class="newsBtn" > 
<a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"  >Toggle first element</a>
<!-- <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button> -->
</p>
<div class="row">
<div class="col">
  <div class="collapse multi-collapse" id="multiCollapseExample1">
    <div class="card card-body">
      Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
    </div>
  </div>
</div>
</div>
`