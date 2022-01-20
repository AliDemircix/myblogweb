const footer = document.createElement('div');
footer.className =
  'container footer tomato-progress d-flex justify-content-center  flex-wrap text-center';
footer.innerHTML = ` 
<form class="col-lg-12 row mt-3 d-flex justify-content-center mt-4">
  <div class="form-group col-lg-8 d-flex justify-content-center">
    <input type="email" class="form-control col-lg-9" id="exampleInputEmail1"  placeholder="Subscribe newsletter">
    <button type="submit" class="btn btn-dark">Send</button>
  </div>
 
</form>
<p class=" col-lg-12 text-white ">Designed by Ali Demirci @2022</p>`;

export { footer };
