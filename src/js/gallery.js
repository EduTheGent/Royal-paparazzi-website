// Gallery

const galleryGrid = document.getElementById("galleryGrid");
const galleryEmpty = document.getElementById("galleryEmpty");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const loadMoreContainer = document.getElementById("loadMoreContainer");
const galleryTabs = document.querySelectorAll(".gallery-tab");
const category = window.location.hash.slice(1);


// Gallery images
const galleryImages = [
    // Wedding
    {
        src: "../../public/images/gallery/wedding-1.jpg",
        category: "weddings",
        alt: "Wedding photography"
    },
    {
        src: "../../public/images/gallery/wedding-2.jpg",
        category: "weddings",
        alt: "Wedding photography"
    },
    {
        src: "../../public/images/gallery/wedding-3.jpg",
        category: "weddings",
        alt: "Wedding photography"
    },

    // Birthday
    {
        src: "../../public/images/gallery/birthday-1.jpg",
        category: "birthdays",
        alt: "Birthday photography"
    },
    {
        src: "../../public/images/gallery/birthday-2.jpg",
        category: "birthdays",
        alt: "Birthday photography"
    },

    // EVENTS
    {
        src: "../../public/images/gallery/event-1.jpg",
        category: "events",
        alt: "Event photography"
    },
    {
        src: "../../public/images/gallery/event-2.jpg",
        category: "events",
        alt: "Event photography"
    },

    // PORTRAITS
    {
        src: "../../public/images/gallery/portrait-1.jpg",
        category: "portraits",
        alt: "Portrait photography"
    },

    // OUTDOOR
    {
        src: "../../public/images/gallery/outdoor-1.jpg",
        category: "outdoor",
        alt: "Outdoor photography"
    }
];


// Gallery state
let currentCategory;
if (category) {
    currentCategory = category
    setActiveTab(currentCategory);
} else {
    currentCategory = "all";
}
let visibleImages = 6;

const imagesPerLoad = 6;




// Display Gallery

function displayGallery() {

    // Filter images
    const filteredImages = currentCategory === "all" ? galleryImages
        : galleryImages.filter(
            image => image.category === currentCategory
        );


    // Clear current gallery
    galleryGrid.innerHTML = "";


    // Reset empty state
    galleryEmpty.classList.add("hidden");
    galleryEmpty.classList.remove("flex");


    // No images
    if (filteredImages.length === 0) {

        galleryEmpty.classList.remove("hidden");
        galleryEmpty.classList.add("flex");

        loadMoreContainer.classList.add("hidden");


        return;
    }


    // Get images that should currently be visible
    const imagesToDisplay =
        filteredImages.slice(0, visibleImages);


    // Create image cards
    imagesToDisplay.forEach(image => {

        const figure = document.createElement("figure");

        figure.className =
            "group relative aspect-[4/5] overflow-hidden rounded-md bg-surface";


        const img = document.createElement("img");

        img.src = image.src;
        img.alt = image.alt;
        img.loading = "lazy";

        img.className =
            "h-full w-full object-cover transition duration-500 group-hover:scale-105";


        figure.appendChild(img);

        galleryGrid.appendChild(figure);
    });


    // Show/hide Load More
    if (visibleImages < filteredImages.length) {

        loadMoreContainer.classList.remove("hidden");

    } else {

        loadMoreContainer.classList.add("hidden");
    }
}

// Display Active Tab
function setActiveTab(category) {
    galleryTabs.forEach(button => {
        const isActive = button.dataset.category === category;

        button.setAttribute("aria-selected", isActive);

        if (isActive) {
            button.classList.add(
                "bg-primary",
                "text-text"
            );

            button.classList.remove(
                "border",
                "border-primary"
            );
        } else {
            button.classList.remove(
                "bg-primary",

            );

            button.classList.add(
                "border",
                "border-primary"
            );
        }
    });
}


// Category Tabs

galleryTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        currentCategory = tab.dataset.category;

        window.location.hash = currentCategory

        visibleImages = imagesPerLoad;

        setActiveTab(currentCategory);

        displayGallery();
    });
});


// Load More

loadMoreBtn.addEventListener("click", () => {

    visibleImages += imagesPerLoad;

    displayGallery();
});


// Initial gallery
displayGallery();
