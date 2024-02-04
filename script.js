const apiUrlBase = "http://api.alquran.cloud/v1/ayah/";
const quote = document.getElementById("verseDisplay");

// Function to get a random Ayah number
function getRandomAyahNumber() {
    // The Quran has 6236 verses in total
    return Math.floor(Math.random() * 6236) + 1;
}

// Asynchronously fetches an Ayah and displays it
async function getRandomVerse() {
    // Random Ayah number
    const ayahNumber = getRandomAyahNumber();

    // You can choose the edition here. For example, 'en.asad' for the Asad translation in English
    const edition = 'en.asad'; 

    const url = `${apiUrlBase}${ayahNumber}/${edition}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        if (data.code === 200 && data.status === 'OK') {
            // Set only the Ayah text
            quote.innerHTML = data.data.text;
        } else {
            quote.innerHTML = "An error occurred fetching the Ayah.";
        }
    } catch (error) {
        console.error('Error fetching the Ayah:', error);
        quote.innerHTML = "An error occurred fetching the Ayah.";
    }
}

// Call the function to get a random verse
getRandomVerse();