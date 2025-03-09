const createursSite = [
    {
        id: 1,
        nom: "LE GRAND",
        postnom: "SIMBA",
        photo: "simba.png",
        reseaux: [
            { nom: "YouTube", url: "https://youtube.com/@legrandsimba?si=j8Wduw3Lut9C79MM" },
            { nom: "X", url: "https://x.com/legrandsimba?s=21" },
            { nom: "LinkedIn", url: "https://www.linkedin.com/in/legrand-simba/" }
        ]
    },
    {
        id: 2,
        nom: "JUSTIN",
        postnom: "KAMBALE",
        photo: "justin.png",
        reseaux: [
            { nom: "YouTube", url: "https://youtube.com/@legrandsimba?si=j8Wduw3Lut9C79MM" },
            { nom: "X", url: "https://x.com/legrandsimba?s=21" },
            { nom: "LinkedIn", url: "https://www.linkedin.com/posts/legrand-simba-b36252348_le-courage-nest-pas-labsence-de-peur-mais-activity-7287579165728329728-Fk7k?utm_medium=ios_app&rcm=ACoAAFbjwNoBm6yJrZhmVdVRZNFgB-xTPRsG8mA&utm_source=social_share_send&utm_campaign=copy_link" }
        ]
    }
];

function displayCreateursSite(createurs) {
    const creatorsContainer = document.getElementById("creatorsContainer");
    creatorsContainer.innerHTML = ""; // Réinitialiser le contenu

    createurs.forEach(createur => {
        const creatorCard = document.createElement("div");
        creatorCard.className = "creator-card";

        const photo = document.createElement("img");
        
        photo.src = `/static/images/${createur.photo}`;

 // Chemin relatif simple
        photo.alt = `${createur.nom} ${createur.postnom}`;

        // Ouvrir l'image en grand au clic
        photo.onclick = () => {
            window.open(`/static/images/${createur.photo}`, "_blank");
        };

        const name = document.createElement("h3");
        name.textContent = `${createur.nom} ${createur.postnom}`;

        const socialLinks = document.createElement("div");
        socialLinks.className = "social-links";

        createur.reseaux.forEach(reseau => {
            const link = document.createElement("a");
            link.href = reseau.url;
            link.target = "_blank";
            link.innerHTML = `<i class="fab fa-${reseau.nom.toLowerCase()}"></i>`;
            socialLinks.appendChild(link);
        });

        creatorCard.appendChild(photo);
        creatorCard.appendChild(name);
        creatorCard.appendChild(socialLinks);
        creatorsContainer.appendChild(creatorCard);
    });
}

// Charger les créateurs au démarrage de la page
document.addEventListener("DOMContentLoaded", () => {
    displayCreateursSite(createursSite);
});