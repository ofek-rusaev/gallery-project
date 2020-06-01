'use strict';

function onInit() {
  renderProjs();
  renderModals();
}

function renderProjs() {
  var projs = getProjsForDisplay();
  var strHTML = '';
  projs.forEach(function (proj) {
    strHTML += `
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${proj.id}">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="card-img img-fluid" src="img/portfolio/${proj.id}.PNG" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">${proj.title}</p>
          </div>
        </div>
        `
  })
  var $elProj = $('.projs-display');
  $elProj.html(strHTML)
}

function renderModals() {
  var projs = getProjsForDisplay();
  var strHTML = '';
  projs.forEach(function (proj) {
    strHTML += `
        <div class="portfolio-modal modal fade" id="portfolioModal${proj.id}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <!-- Project Details Go Here -->
                    <h2>${proj.name}</h2>
                    <p class="item-intro text-muted">${proj.title}</p>
                    <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}.PNG" alt="">
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                      blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
                      cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul class="list-inline">
                      <li>Date: ${proj.publishedAt}</li>
                      <li>Category: ${proj.title}</li>
                    </ul>
                    <button class="btn btn-primary" type="button" >
                      <i class="fa fa-times"></i><a class="text-decoration-none text-light" href="${proj.url}" target="_blank">
                      Check it Out</button>
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                      <i class="fa fa-times"></i>
                      Close Project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `
  })
  $('.modal-container').html(strHTML);
}

function onFormSubmit() {
  var subject = $('.subject').val();
  var body = $('.body').val();
  if (!subject || !body) return;
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=ofek2602@gmail.com&su=${subject}&body=${body}`, '_blank');
}