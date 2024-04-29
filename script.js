document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImY2ZGE3MTM2LTMwMTktNDM1OS1iMjNhLWQ4ZTJjYjMzYzZiZiIsImlhdCI6MTcxNDQwMjE4Niwic3ViIjoiZGV2ZWxvcGVyL2EwMTVhMjM0LTU3YTItYjlkNy03MGIzLWE0YjQ4NDZkMDdhNyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE0Mi4yNTAuNjUuMjM4Il0sInR5cGUiOiJjbGllbnQifV19.WiHONNKxUOHw2R6TKwUuYcLUKKZXIl4CiX6avs-WvSRj0hFqBowhaqJmUDoXdCaFjY4dWYwsJzqVeHOI1E5_oA';
    const apiUrl = 'https://api.clashofclans.com/v1/clans/%232QJ2QPJYG';

    fetch(apiUrl, {
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Display the data in the HTML
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
});
