document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('header nav');
    const hamburger = document.createElement('button');

    hamburger.textContent = '☰';
    hamburger.setAttribute('arial-label', 'Toggle Menu');
    hamburger.style.cssText = `
    display: none;
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: white;
    z-index: 1001;
    `;

    nav.before(hamburger);

    hamburger.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        hamburger.textContent = isOpen ? '❌' : '☰'; 
    });
    
    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
            hamburger.style.display = 'block';
            nav.classList.remove('open');
        } else {
            hamburger.style.display = 'none';
            nav.classList.add('open');
        }
    });

    window.dispatchEvent(new Event('resize'));
});

const certificates = [
    {
        certName: "CSE 110",
        certId: "CSE"
    },
    {
        certName: "WDD 130",
        certId: "WDD"
    },
    {
        certName: "CSE 111",
        certId: "CSE"
    },
    {
        certName: "CSE 210",
        certId: "CSE"
    },
    {
        certName: "WDD 131",
        certId: "WDD"
    },
    {
        certName: "WDD 231",
        certId: "WDD"
    }
];

function displayCertificates(filteredCertificates, headingText = "All Courses") {
    const certificateList = document.querySelector('#certificateList');
    certificateList.innerHTML = `<h3>${headingText}</h3>`;

    filteredCertificates.forEach((cert) => {
        const article = document.createElement('article');
        article.classList.add('certCard');

        article.innerHTML = `
            <p>${cert.certName}</p>
        `;
        certificateList.appendChild(article)
    });
}


function filterCse() {
    return certificates.filter(cert => cert.certId === "CSE");
}

function filterWdd() {
    return certificates.filter(cert => cert.certId === "WDD");
}

displayCertificates(certificates, "All Courses")

document.querySelector('#certificates').addEventListener('click', 
    (event)=> {
        event.preventDefault();
        const filter = event.target.textContent.trim();

        switch (filter) {
            case 'CSE':
                displayCertificates(filterCse(), "CSE Courses");
                break;
            case 'WDD':
                displayCertificates(filterWdd(), "WDD Courses")
                break;
            default:
                displayCertificates(certificates, "All Courses")
        }
    }
)