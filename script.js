document.addEventListener('DOMContentLoaded', function () {
    // Menambahkan event listener untuk setiap link di navbar
    document.querySelectorAll('.navbar-nav .nav-item a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            document.querySelectorAll('.navbar-nav .nav-item a').forEach(link => {
                link.classList.remove('active');
            });
            e.target.classList.add('active');
            
            // Menutup navbar setelah klik pada item menu
            const navbarCollapse = document.getElementById('navbarNav');
            const bootstrapCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bootstrapCollapse.hide(); // Menyembunyikan navbar
        });
    });
});

// Array resep tradisional Indonesia beserta bahan-bahannya
const recipes = [
    {
        name: "Rendang",
        description: "Hidangan daging pedas khas Padang",
        ingredients: [
            "Daging sapi",
            "Santan kelapa",
            "Cabai merah",
            "Bawang putih",
            "Bawang merah",
            "Daun kunyit",
            "Lengkuas",
            "Serai"
        ]
    },
    {
        name: "Nasi Goreng",
        description: "Nasi goreng khas Indonesia",
        ingredients: [
            "Nasi",
            "Kecap manis",
            "Bawang putih",
            "Bawang merah",
            "Telur",
            "Ayam atau udang",
            "Sayuran"
        ]
    },
    {
        name: "Sate",
        description: "Daging yang ditusuk dan dipanggang, disajikan dengan saus kacang",
        ingredients: [
            "Daging (ayam, sapi, atau kambing)",
            "Tusuk sate",
            "Saus kacang",
            "Kecap manis",
            "Jeruk nipis"
        ]
    },
    {
        name: "Gado-Gado",
        description: "Salad Indonesia dengan saus kacang",
        ingredients: [
            "Sayuran rebus",
            "Tahu",
            "Tempe",
            "Telur rebus",
            "Saus kacang",
            "Krupuk (kerupuk)"
        ]
    },
    {
        name: "Soto Ayam",
        description: "Sup mie ayam",
        ingredients: [
            "Ayam",
            "Vermisili nasi",
            "Kunyit",
            "Bawang putih",
            "Bawang merah",
            "Jeruk nipis",
            "Telur rebus"
        ]
    }
];

// Menampilkan pilihan resep di dropdown
const recipeSelect = document.getElementById("recipeSelect");
recipes.forEach(recipe => {
    const option = document.createElement("option");
    option.value = recipe.name;
    option.textContent = recipe.name;
    recipeSelect.appendChild(option);
});

// Fungsi untuk menampilkan bahan setelah memilih resep
recipeSelect.addEventListener("change", function() {
    const selectedRecipeName = recipeSelect.value;
    const recipe = recipes.find(r => r.name === selectedRecipeName);

    const recipeName = document.getElementById("recipeName");
    const recipeIngredients = document.getElementById("recipeIngredients");

    // Menampilkan nama resep dan deskripsi
    recipeName.textContent = `${recipe.name} - ${recipe.description}`;

    // Membersihkan bahan sebelumnya
    recipeIngredients.innerHTML = "";

    // Menambahkan bahan-bahan ke dalam daftar
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement("li");
        li.textContent = ingredient;
        recipeIngredients.appendChild(li);
    });
});

