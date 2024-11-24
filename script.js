async function fetchData() {
    try {
        const response = await fetch("http://<ESP32-IP>/");
        const data = await response.json();
        document.getElementById("data-display").innerText =
            `Temperature: ${data.temperature}°C, Humidity: ${data.humidity}%`;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

setInterval(fetchData, 5000); // Daten alle 5 Sekunden abrufen

