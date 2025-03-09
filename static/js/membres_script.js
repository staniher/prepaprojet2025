 const membresPromotion = [
        {
            id: 1,
            nom: "AHADI",
            postnom: "MUTHOHA",
            role: "Joueur de foot",
            photo: "pas.png"
        },
        {
            id: 1,
            nom: "MAHAMBA",
            postnom: "ZEBEDE",
            role: "Joueur de foot",
            photo: "pas.png"
        },
        {
            id: 1,
            nom: "ELISEE",
            postnom:  "MAPOLI",
            role: "Joueur de foot",
            photo:  "mapolis.png"
        },
        {
            id: 1,
            nom: "KAMBALE",
            postnom: "KIBWANA",
            role: "Joueur de foot",
            photo: "piscas.png"
        },
        {
            id: 1,
            nom: "LE BIG",
            postnom: "SIMBA",
            role: "Joueur de foot",
            photo: "simba.png"
        },
        {
            id: 1,
            nom: "PALUKU",
            postnom: "KIKENE",
            role: "Joueur de foot",
            photo: "kikene.png"
        },
        {
            id: 1,
            nom: "VARONDI",
            postnom: "GRACE",
            role: "Joueur de foot",
            photo: "grace.png"
        },
        {
            id: 1,
            nom: " MUHINDO",
            postnom: "DAMIEN",
            role: "Joueur de foot",
            photo: "damien.png"
        },
        {
            id: 1,
            nom: "KAMBALE",
            postnom: "KYAKWANDA",
            role: "Joueur de foot",
            photo: "kya.png"
        },
        {
            id: 1,
            nom: "KASUSULA",
            postnom: "MATHE",
            role: "Joueur de foot",
            photo: "kasus.png"
        },
        {
            id: 1,
            nom: "SHADRACK",
            postnom: "SMISH",
            role: "Joueur de foot",
            photo: "SMISH.png"
        },
        {
           id: 1,
            nom: " Elie SAFARI",
            postnom: "KATEMBO",
            role: "Représentant",
            photo: "cp.png"
        },
        {
            id: 1,
            nom: "PACIFIQUE",
            postnom: "AMANI",
            role: "Représentant",
            photo: "pass.png"
        }
        ,
        {
            id: 2,
            nom: "VICKY",
            postnom: "KAVIRA",
            role: "Représentante",
            photo: "vicky.png"
        },
        {
            id: 3,
            nom: "Zey",
            postnom: "Moos",
            role: "Joueur de basket",
            photo: "nguku.png"
        }
        ,
        {
            id: 3,
            nom: "DARLY",
            postnom: "MUMBERE",
            role: "Joueur de basket",
            photo: "darly.png"
        }
        ,
        {
            id: 3,
            nom: "PACIFIQUE",
            postnom: "AMANI",
            role: "Joueur de basket",
            photo: "pass.png"
        }
        ,
        {
            id: 3,
            nom: "RADJABU",
            postnom: "RAMAZANI",
            role: "Joueur de basket",
            photo: "radja.png"
        }
    ];
    
    function displayPromotionPhotos(membres) {
        const promotionDiv = document.getElementById("promotionPhotos");
        promotionDiv.innerHTML = ""; // Réinitialiser le contenu
    
        membres.forEach(membre => {
            const memberCard = document.createElement("div");
            memberCard.className = "member-card";
    
            // Ajouter une classe en fonction du rôle
            if (membre.role === "Joueur de foot") {
                memberCard.classList.add("foot");
            } else if (membre.role === "Joueur de basket") {
                memberCard.classList.add("basket");
            } else if (membre.role === "Représentante" || membre.role === "Représentant") {
                memberCard.classList.add("representant");
            }
    
            const photo = document.createElement("img");
            photo.src = `/static/images/${membre.photo}`; // Chemin relatif simple
            photo.alt = `${membre.nom} ${membre.postnom}`;
    
            // Ouvrir l'image en grand au clic
            photo.onclick = () => {
                window.open(membre.photo, "_blank");
            };
    
            const name = document.createElement("h3");
            name.textContent = `${membre.nom} ${membre.postnom}`;
    
            const role = document.createElement("p");
            role.innerHTML = `<i class="${getRoleIcon(membre.role)}"></i> ${membre.role}`;
    
            memberCard.appendChild(photo);
            memberCard.appendChild(name);
            memberCard.appendChild(role);
            promotionDiv.appendChild(memberCard);
        });
    }
    
    // Fonction pour obtenir l'icône en fonction du rôle
    function getRoleIcon(role) {
        switch (role) {
            case "Joueur de foot":
                return "fas fa-futbol";
            case "Joueur de basket":
                return "fas fa-basketball-ball";
            case "Représentante":
            case "Représentant":
                return "fas fa-user-tie";
            default:
                return "fas fa-user";
        }
    }
    
    // Bouton pour retourner en haut de la page
    const backToTopButton = document.createElement("button");
    backToTopButton.id = "backToTop";
    backToTopButton.innerHTML = "&#8593;"; // Flèche vers le haut
    backToTopButton.onclick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    document.body.appendChild(backToTopButton);
    
    // Afficher ou masquer le bouton en fonction du défilement
    window.onscroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };
    
    // Charger les membres au démarrage de la page
    document.addEventListener("DOMContentLoaded", () => {
        displayPromotionPhotos(membresPromotion);
    });
console.log(`Chemin de l'image : /static/images/${createur.photo}`);