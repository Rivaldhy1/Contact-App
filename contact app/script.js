const telpInput = document.querySelector('.telp');
      telpInput.addEventListener('input', function() {
        const inputValue = this.value;
        if (inputValue.length > 12) {
          this.value = inputValue.slice(0, 12); // Menghapus karakter-karakter tambahan
        }
      });

document.querySelector('.form').addEventListener('submit', function(event){
    event.preventDefault();
  
    const rowBoxContact = document.querySelector('.row-boxContact');
    // ambil input
    const name = document.querySelector('.name').value;
    const bio = document.querySelector('.bio').value;
    const telp = document.querySelector('.telp').value;
    const address = document.querySelector('.address').value;
    const profileImg = document.querySelector('.img').files[0];


    
  
    // Membuat elemen .box-contact baru
    const newContact = document.createElement('div');
    newContact.className = 'box-contact';
  
      // Membuat elemen SVG close
    const svgClose = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgClose.setAttribute('class', 'close');
    svgClose.setAttribute('width', '34px');
    svgClose.setAttribute('height', '34px');
    svgClose.setAttribute('viewBox', '0 0 24 24');
    svgClose.setAttribute('fill', 'none');
    const pathClose = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathClose.setAttribute('d', 'M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18');
    pathClose.setAttribute('stroke', '#000000');
    pathClose.setAttribute('stroke-width', '2');
    pathClose.setAttribute('stroke-linecap', 'round');
    pathClose.setAttribute('stroke-linejoin', 'round');
    svgClose.appendChild(pathClose);

    // Membuat elemen .img-profile dan img baru
    const imgProfile = document.createElement('div');
    imgProfile.className = 'img-profile';
    const profileImage = document.createElement('img');
    profileImage.className = 'profileimg';
    profileImage.src = URL.createObjectURL(profileImg);
    imgProfile.appendChild(profileImage);
  
    // Membuat elemen .identity baru
    const identity = document.createElement('div');
    identity.className = 'identity';
    
    // Membuat elemen strong dan p untuk bio
    const bioStrong = document.createElement('strong');
    bioStrong.className = 'bio';
    const bioP = document.createElement('p');
    bioP.className = 'bioData';
    bioP.textContent = bio;
    bioStrong.appendChild(document.createTextNode('Bio : '));
    bioStrong.appendChild(bioP);
    
    // Membuat elemen ul dan li untuk nama, no. telp, dan alamat
    const ul = document.createElement('ul');
    const nameLi = document.createElement('li');
    const telpLi = document.createElement('li');
    const addressLi = document.createElement('li');
    const nameStrong = document.createElement('strong');
    const telpStrong = document.createElement('strong');
    const addressStrong = document.createElement('strong');
    const nameSpan = document.createElement('span');
    const telpSpan = document.createElement('span');
    const addressSpan = document.createElement('span');
    nameStrong.textContent = 'Name : ';
    telpStrong.textContent = 'No. Telp : ';
    addressStrong.textContent = 'Address : ';
    nameSpan.textContent = name;
    telpSpan.textContent = telp;
    addressSpan.textContent = address;
    nameLi.appendChild(nameStrong);
    nameLi.appendChild(nameSpan);
    telpLi.appendChild(telpStrong);
    telpLi.appendChild(telpSpan);
    addressLi.appendChild(addressStrong);
    addressLi.appendChild(addressSpan);
    ul.appendChild(nameLi);
    ul.appendChild(telpLi);
    ul.appendChild(addressLi);
    
    // Menyusun elemen-elemen dalam elemen .identity
    identity.appendChild(bioStrong);
    identity.appendChild(ul);
    
    // Menyusun elemen-elemen dalam elemen .box-contact
    newContact.appendChild(svgClose);
    newContact.appendChild(imgProfile);
    newContact.appendChild(identity);
  
    // Menambahkan elemen .box-contact baru ke dalam .row-boxContact
    rowBoxContact.appendChild(newContact);

    // menghapus box contact
    const closeButtons = document.querySelectorAll('.close');
      closeButtons.forEach(function(button) {
        button.addEventListener('click', function(){
          const boxContact = this.parentNode;
          boxContact.remove();  
        });
      });

    document.querySelector('.form').reset();
});
