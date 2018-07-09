console.log("Script Execution Started");

function fetchSearchResults(url, callback) {
  fetch(url)
  .then(r => {
    if (r.ok) {
      return r.json();
    } else {
      throw new Error('An error occured');
    }
  })
  .then(resp => renderResults(resp))
  .catch(e => {
    console.error("Something crashed - ", e);
  })
}



function renderResults(results) {
  var products = results.products;
  console.log(products);
  for (var i = 0; i < products.length; i++) {
    var name = products[i].product;
    var image = products[i].search_image;

    var thisProduct = divFactory();

    thisProduct.appendChild(createDivWithText(name, "product-name"));
    thisProduct.appendChild(createDivWithImage(image));
    
    document.body.appendChild(thisProduct);
    thisProduct.classList.add('product-block');
  }

}

function divFactory() {
  return document.createElement('div');
}

function createDivWithText(text, className) {
  var divText = divFactory();
  divText.innerText = text;
  if (className) {
    divText.classList.add(className)
  }
  return divText;
}

function createDivWithImage(src) {
  var divImage = divFactory();
  divImage.innerHTML = `<img src=${src} height='128px' width='128px'/>`;
  return divImage;
}

fetchSearchResults('/products/nike', renderResults);

