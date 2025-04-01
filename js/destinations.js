let destinations = [
    {
        title: "Enjoy the beauty of Vienna",
        subtitle: "Vienna, Austria",
        rating: 4.8,
        img: "../images/vienna.webp",
        id: 1,
        shortDescription: "Vienna, the capital of Austria, is a city of imperial charm, rich history, and vibrantculture. Known for its stunning architecture, world-class museums, and classical musicheritage, it offers iconic sights like Schönbrunn Palace, St. Stephen’s Cathedral, and the Hofburg. Travelers can enjoy traditional Viennese coffeehouses, explore the Danube River, and experience the city's lively art scene.",
        description: "Vienna, Austria’s capital, is a city that seamlessly blends imperial grandeur with modern vibrancy. Renowned for its rich history, stunning architecture, and deep cultural roots, it is often referred to as the City of Music due to its strong connections with legendary composers like Mozart, Beethoven, and Strauss. Visitors can explore magnificent landmarks such as Schönbrunn Palace, the Hofburg, and Belvedere Palace, each reflecting the city's royal past. St. Stephen’s Cathedral, with its stunning Gothic architecture, is a must-visit in the heart of the city. Museumsquartier offers an exciting mix of classic and contemporary art, while the Vienna State Opera promises world-class performances. Vienna is also famous for its coffeehouse culture, where travelers can relax with a traditional Sachertorte or Apfelstrudel while enjoying the elegant atmosphere. The city’s culinary delights extend to hearty dishes like Wiener Schnitzel and Tafelspitz."
    },
    {
        title: "The heart of Czech Republic",
        subtitle: "Prague, Czech Republic",
        rating: 4.7,
        img: "../images/prague.jpg",
        id: 2,
        shortDescription: "Aici e short description...",
        description: "Aici e full description..."
    },
    {
        title: "Take a break in nature",
        subtitle: "Kemer, Turkey",
        rating: 4.9,
        img: "../images/kemer.jpg",
        id: 3
    },
    {
        title: "Visit the Famous Santorini",
        subtitle: "Santorini, Greece",
        rating: 4.7,
        img: "../images/greece.webp",
        id: 4
    },
    {
        title: "See the history with your eyes",
        subtitle: "Rome, Italy",
        rating: 4.5,
        img: "../images/rome.webp",
        id: 5
    },
    {
        title: "A breath of fresh Air",
        subtitle: "Bukovel, Ukraine",
        rating: 4.9,
        img: "../images/bukovel.jpeg",
        id: 6
    }
];

function showDestinations() {

    let params = new URLSearchParams(window.location.search);

    let text = params.get("filter") || ""; // extragem filtrul
    text = text.toLowerCase(); // transforma filtrul in minuscule 

    document.getElementById("search").value = text;

    let html = "";

    let div = document.getElementById('destinations');

    for (let i = 0; i < destinations.length; i++) {
        
        let destination = destinations[i];

        let title = destination.title.toLowerCase();
        let subtitle = destination.subtitle.toLowerCase();
                                
        if (title.indexOf(text) != -1 || subtitle.indexOf(text) != -1  ) {
            html += `
                    <div class="destination">
                        <a href="./destination.html?id=${destination.id}">
                            <img class="destination-img" src="${destination.img}" />
                                <h1>${destination.title}</h1>
                        </a>
                        <h3 class="sub-title">${destination.subtitle}</h3>
                        <div class="rating"><i class="fa-solid fa-star"></i>${destination.rating}</div>
                    </div>
            `
        }
    }

    div.innerHTML = html;
}


function showSelectedDestination() {
    let params = new URLSearchParams(window.location.search);

    let id = params.get("id") || "";

    // extragem din lista - destinatia cu id-ul egal cu parametru
    let destination = destinations.find(d => d.id == id); 

    let html = `
        <div class="destination-header">
            <img class="d-header-img" src="${destination.img}">
            <div class="d-header-info">
            <h2> ${destination.subtitle} </h2>
            <h2> ${destination.title} </h2>
            <p>
               ${destination.shortDescription} 
            </p>
            <div class="rating"><i class="fa-solid fa-star"></i> ${destination.rating} </div>

            </div>
        </div>

        <p class="destination-text">
            ${destination.description}
        </p>
    `;

    document.getElementById("destination-info").innerHTML = html;
}