const projects = [
    { 
        title: "Proyek 1", 
        description: "Proyek ini adalah tentang pembuatan website sederhana menggunakan HTML, CSS dan Bootstrap.",
        image: "image1.jpg"  
    },
    { 
        title: "Proyek 2", 
        description: "Proyek ini menampilkan hasil website menggunakan Javascript.",
        image: "image2.jpg" 
    },
    { 
        title: "Proyek 3", 
        description: "Proyek ini adalah hasil foto yang diambil disaat waktu yang berbeda.",
        image: "image3.jpg"
    },
    { 
        title: "Proyek 4", 
        description: "Proyek ini menunjukkan foto yang saya ambil ketika orang menjadi model foto.",
        image: "image4.jpg"
    },
    { 
        title: "Proyek 5", 
        description: "Proyek ini berfokus pada karakter yang saya modifikasi kemudian saya unggah di website online.",
        image: "image5.jpg"
    }
];

const projectContainer = document.getElementById("project-container");

projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <img src="${project.image}" alt="${project.title}" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 15px;">
        <p>${project.description}</p>
    `;
    projectContainer.appendChild(projectCard);
});
