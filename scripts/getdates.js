function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
}

function setLastModified() {
    const lastModified = new Date(document.lastModified);
    const options = {
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric', 
        timeZoneName: 'short'
    };
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified.toLocaleDateString('en-us', options)}`;
}

document.addEventListener('DOMContentLoaded', function() {
    setCurrentYear();
    setLastModified();
})