async function fetchData() {
    const url = 'https://concerts-artists-events-tracker.p.rapidapi.com/location?name=Phoenix&minDate=2023-08-14&maxDate=2023-08-18&page=1';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd82331ab6dmshc9e53ef91144879p14f7b2jsn533ef7853f64',
            'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

    document.getElementById("concerts").innerHTML = record.data.map(item => `<li>${item.name}</li>`).join('');
}
fetchData();