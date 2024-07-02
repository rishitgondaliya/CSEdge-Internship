document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-buttons button, .dropdown-item');
    const pictureGrid = document.querySelector('.picture-grid');
    const loadMoreButton = document.getElementById('load-more');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.querySelector('.lightbox .close');
    const navbarDropdown = document.getElementById('navbarDropdown');

    // picture item's array
    let items = [
        { src: './assets/indian_heritage_sites/taj_mahal.jpg', category: 'category1', name: 'Taj Mahal, Agra, Uttar Pradesh' },
        { src: './assets/indian_heritage_sites/qutub_minar.jpg', category: 'category1', name: 'Qutub Minar, Delhi' },
        { src: './assets/indian_heritage_sites/fatehpur_sikri.jpg', category: 'category1', name: 'Fatehpur Sikri, Uttar Pradesh' },
        { src: './assets/indian_heritage_sites/chhatrapati_shivaji_terminus.jpg', category: 'category1', name: 'Chhatrapati Shivaji Maharaj Terminus, Mumbai, Maharashtra' },
        { src: './assets/indian_heritage_sites/jantar_mantar.jpg', category: 'category1', name: 'Jantar Mantar, Jaipur, Rajasthan' },
        { src: './assets/indian_heritage_sites/humayuns_tomb.jpg', category: 'category1', name: 'Humayun\'s Tomb, Delhi' },
        { src: './assets/indian_heritage_sites/rani_ki_vav.jpg', category: 'category1', name: 'Rani Ki Vav, Patan, Gujarat' },
        { src: './assets/indian_heritage_sites/manas-wildlife_century.jpg', category: 'category1', name: 'Manas Wildlife Sanctuary, Odisha' },
        { src: './assets/indian_heritage_sites/kaziranga_national_park.jpg', category: 'category1', name: 'Kaziranga National Park, West Bengal' },
        { src: './assets/indian_heritage_sites/valley_of_flowers.jpg', category: 'category1', name: 'Valley of Flowers, Uttarakhand' },
        { src: './assets/indian_heritage_sites/ahmedabad.jpg', category: 'category1', name: 'World Heritage City, Ahmedabad, Gujarat' },
        { src: './assets/indian_heritage_sites/jaipur_city.jpg', category: 'category1', name: 'World Heritage City, Jaipur, Rajasthan' },
        { src: './assets/indian_festivals/diwali.jpg', category: 'category2', name: 'Diwali' },
        { src: './assets/indian_festivals/durgapuja.jpg', category: 'category2', name: 'Durga Puja' },
        { src: './assets/indian_festivals/ganeshchaturthi.jpg', category: 'category2', name: 'Ganesh Chaturthi' },
        { src: './assets/indian_festivals/holi.jpg', category: 'category2', name: 'Holi' },
        { src: './assets/indian_festivals/uttarayan.jpg', category: 'category2', name: 'Makar Sankranti / Uttarayan' },
        { src: './assets/indian_festivals/janmashtami.jpg', category: 'category2', name: 'Janmashtami' },
        { src: './assets/indian_festivals/kumbhmela.jpg', category: 'category2', name: 'Kumbh Mela' },
        { src: './assets/indian_festivals/mahashivratri.jpg', category: 'category2', name: 'Mahashivratri' },
        { src: './assets/indian_festivals/navratri.jpg', category: 'category2', name: 'Navratri' },
        { src: './assets/indian_festivals/raksha.jpg', category: 'category2', name: 'Rakshabandhan' },
        { src: './assets/indian_festivals/ramnavmi.jpg', category: 'category2', name: 'Ramnavmi' },
        { src: './assets/indian_festivals/rathayatra.jpg', category: 'category2', name: 'Rathyatra' },
        { src: './assets/indian_festivals/onam.jpg', category: 'category2', name: 'Onam' },
        { src: './assets/indian_festivals/gudipadwa.jpg', category: 'category2', name: 'Gudipadwa' },
        { src: './assets/jyotirlinga/somnath.jpg', category: 'category3', name: 'Somnath, Veraval, Gujarat' },
        { src: './assets/jyotirlinga/mallikarjun.jpg', category: 'category3', name: 'Mallikarjuna, Shrisailam, Andhra Pradesh' },
        { src: './assets/jyotirlinga/ujjain.jpg', category: 'category3', name: 'Mahakaleshwar, Ujjain, Madhya Pradesh' },
        { src: './assets/jyotirlinga/omkareshwar.jpg', category: 'category3', name: 'Omkareshwar, Khandwa, Madhya Pradesh' },
        { src: './assets/jyotirlinga/vaijnath.jpg', category: 'category3', name: 'Vaijnath, Parli, Maharashtra' },
        { src: './assets/jyotirlinga/bhimashankar.jpg', category: 'category3', name: 'Bhimashankar, Pune, Maharashtra' },
        { src: './assets/jyotirlinga/rameshwaram.jpg', category: 'category3', name: 'Rameshwaram, Rameshwaram, Tamilnadu' },
        { src: './assets/jyotirlinga/nageshwar.jpg', category: 'category3', name: 'Nageshwar, Dwarka, Gujarat' },
        { src: './assets/jyotirlinga/kashi.jpg', category: 'category3', name: 'Kashi Vishwanath, Varansi, Uttar Pradesh' },
        { src: './assets/jyotirlinga/trimbakeshwar.jpg', category: 'category3', name: 'Trimbakeshwar, Trimbak, Maharashtra' },
        { src: './assets/jyotirlinga/kedarnath.jpg', category: 'category3', name: 'Kedarnath, Kedarnath, Uttarakhand' },
        { src: './assets/jyotirlinga/grishneswar.jpg', category: 'category3', name: 'Grishneswar, Chhatrapati Sambhaji Nagar, Maharastra' },
        { src: './assets/visit_india/jaisalmer.jpg', category: 'category4', name: 'Jaisalmer, Rajasthan' },
        { src: './assets/visit_india/hyderabad.jpg', category: 'category4', name: 'Hyderabad, Telangana' },
        { src: './assets/visit_india/delhi.jpg', category: 'category4', name: 'Delhi' },
        { src: './assets/visit_india/jodhpur.jpg', category: 'category4', name: 'Jodhpur, Rajasthan' },
        { src: './assets/visit_india/udaipur.jpg', category: 'category4', name: 'Udaipur, Rajsthan' },
        { src: './assets/visit_india/amritsar.jpg', category: 'category4', name: 'Amritsar, Punjab' },
        { src: './assets/visit_india/kolkata.jpg', category: 'category4', name: 'Kolkata, West Bengal' },
        { src: './assets/visit_india/ahmedabad.jpg', category: 'category4', name: 'Ahmedabad, Gujarat' },
        { src: './assets/visit_india/kutch.jpg', category: 'category4', name: 'Kutch, Gujarat' },
        { src: './assets/visit_india/haridwar.jpg', category: 'category4', name: 'Haridwar, Uttarakhand' },
        { src: './assets/visit_india/rishikesh.jpg', category: 'category4', name: 'Rishikesh, Uttarakhand' },
        { src: './assets/visit_india/shimla.jpg', category: 'category4', name: 'Shimla, Himachal Pradesh' },
        { src: './assets/visit_india/gulmarg.jpg', category: 'category4', name: 'Gulmarg, Kashmir' },
        { src: './assets/visit_india/srinagar.jpg', category: 'category4', name: 'Shrinagar, Kashmir' },
        { src: './assets/visit_india/darjiling.jpg', category: 'category4', name: 'Darjeeling, Sikkim' },
        { src: './assets/visit_india/nainital.jpg', category: 'category4', name: 'Nainital, Uttarakhand' },
        { src: './assets/visit_india/mussoorie2.jpg', category: 'category4', name: 'Mussoorie, Uttarakhand' },
        { src: './assets/visit_india/alleppey.jpg', category: 'category4', name: 'Alleppey, Kerala' },
        { src: './assets/visit_india/kochi.jpg', category: 'category4', name: 'Kochi, Kerala' },
        { src: './assets/visit_india/kodaikanal.jpg', category: 'category4', name: 'Kodaikanal, Tamilnadu' },
        { src: './assets/visit_india/andaman.jpg', category: 'category4', name: 'Andaman' },
        { src: './assets/visit_india/goa.jpg', category: 'category4', name: 'Goa' },
        { src: './assets/visit_india/gir.jpg', category: 'category4', name: 'Gir National Park, Gujarat' },
        { src: './assets/visit_india/jim_corbat.jpg', category: 'category4', name: 'Jim Corbett National Park, Uttarakhand' },
        { src: './assets/visit_india/kashmir.jpg', category: 'category4', name: 'Kashmir' },
        { src: './assets/visit_india/meghalay.jpg', category: 'category4', name: 'Meghalay' },
        { src: './assets/visit_india/sikkim.jpg', category: 'category4', name: 'Sikkim' },
        { src: './assets/dance/kathakali.jpg', category: 'category5', name: 'Kathakali, Kerala' },
        { src: './assets/dance/kathak.jpg', category: 'category5', name: 'Kathak, Kerala' },
        { src: './assets/dance/raslila.jpg', category: 'category5', name: 'Raslila, Uttar Pradesh' },
        { src: './assets/dance/garba.jpg', category: 'category5', name: 'Garba, Gujarat' },
        { src: './assets/dance/kuchipudi.jpg', category: 'category5', name: 'Kuchipudi, Andhra Pradesh' },
        { src: './assets/dance/theyyam.jpg', category: 'category5', name: 'Theyyam, Kerala' },
        { src: './assets/dance/bharatnatyam.jpg', category: 'category5', name: 'Bharatnatyam, Tamilnadu' },
        { src: './assets/dance/pahadi_nati.jpg', category: 'category5', name: 'Nati, Himachal Pradesh' },
        { src: './assets/dance/oddishi.jpg', category: 'category5', name: 'Oddishi, Odisha' },
        { src: './assets/dance/sattriya.jpg', category: 'category5', name: 'Sattriya, Assam' },
        { src: './assets/dance/manipuri.jpg', category: 'category5', name: 'Manipuri Nritya, Manipur' },
        { src: './assets/dance/bihu.jpg', category: 'category5', name: 'Bihu, Bihar' },
        { src: './assets/dance/lavni.jpg', category: 'category5', name: 'Lavni, Maharashrta' },
        { src: './assets/dance/ghoomar.jpg', category: 'category5', name: 'Ghoomar, Rajasthan' },
        { src: './assets/dance/bhangara.jpg', category: 'category5', name: 'Bhangara, Punjab' },
        { src: './assets/dance/chhau.jpg', category: 'category5', name: 'Chhau, West Bengal' },
    ];

    let currentItems = 0;
    const itemsPerLoad = 4;
    let currentFilter = 'all';
    
    // choose category
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // remove active class from all filter buttons and add to the clicked button only
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterItems(button.getAttribute('data-filter'));

            // Update the dropdown text if the clicked button is in the dropdown menu
            if (button.classList.contains('dropdown-item')) {
                navbarDropdown.textContent = button.textContent;
                navbarDropdown.style.textDecoration = 'underline';
            } else {
                navbarDropdown.style.textDecoration = 'none';
            }
        });
    });

    // filter picture album
    function filterItems(filter) {
        pictureGrid.innerHTML = ''; // Clear the grid
        currentItems = 0; // Reset the item counter
        currentFilter = filter; // Update the current filter
        loadItems(); // Load the filtered items
    }

    // load selected picture album
    function loadItems() {
        const fragment = document.createDocumentFragment();

        // load pictures of selected category
        const filteredItems = items.filter(item => currentFilter === 'all' || item.category === currentFilter);

        for (let i = currentItems; i < currentItems + itemsPerLoad && i < filteredItems.length; i++) {
            const item = createPictureItem(filteredItems[i]);
            fragment.appendChild(item);
        }

        pictureGrid.appendChild(fragment);
        currentItems += itemsPerLoad;

        // check all pictures loaded or not
        if (currentItems >= filteredItems.length) {
            loadMoreButton.style.display = 'none';
        } else {
            loadMoreButton.style.display = 'block';
        }
    }

    // create picture item
    function createPictureItem(item) {
        const container = document.createElement('div');
        container.classList.add('picture-container');
        container.setAttribute('data-category', item.category);
        
        // create image
        const img = document.createElement('img');
        img.src = item.src;
        img.classList.add('picture-img');

        // image name
        const name = document.createElement('p');
        name.textContent = item.name;
        name.classList.add('picture-name');

        container.appendChild(img);
        container.appendChild(name);

        // click action on image
        container.addEventListener('click', () => {
            lightboxImg.src = item.src;
            lightbox.style.display = 'flex';
        });

        return container;
    }

    // load more pictures
    loadMoreButton.addEventListener('click', loadItems);

    // lightbox
    closeLightbox.addEventListener('click', () => {
        lightbox.classList.add('fade-out'); // Apply fade-out animation
        setTimeout(() => {
            lightbox.style.display = 'none'; // Hide lightbox after animation completes
            lightbox.classList.remove('fade-out'); // Remove fade-out class for future use
        }, 1500); // Adjust the timing to match the animation duration
    });

    // close lightbbox on clicking are outside image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.add('fade-out'); // Apply fade-out animation
            setTimeout(() => {
                lightbox.style.display = 'none'; // Hide lightbox after animation completes
                lightbox.classList.remove('fade-out'); // Remove fade-out class for future use
            }, 1500); 
        }
    });

    // Initial load
    loadItems();
});
