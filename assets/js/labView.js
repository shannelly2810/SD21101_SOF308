const allLabs = {
    'lab01': {
        name: "Lab 01: Introduction to Bootstrap",
        exercises: [
            { id: 1, desc: "Organize basic layout using Bootstrap", url: "PS44042_LABS_1/bai1.html" },
            { id: 2, desc: "Create Navbar using Bootstrap", url: "PS44042_LABS_1/bai2.html" },
            { id: 3, desc: "Create aside using Bootstrap", url: "PS44042_LABS_1/bai3.html" },
            { id: 4, desc: "Create web display as described using Bootstrap", url: "PS44042_LABS_1/bai4.html" }
        ]
    },
    'lab02': {
        name: "Lab 02: Introduction to basic Tables | Forms | dynamic tabs and modal",
        exercises: [
            { id: 1, desc: "Create table using Bootstrap", url: "PS44042_LABS_2/bai1.html" },
            { id: 2, desc: "Create register/login forms using Bootstrap", url: "PS44042_LABS_2/bai2.html" },
            { id: 3, desc: "Create a dynamic tab for both register/login forms using Bootstrap", url: "PS44042_LABS_2/bai3.html" },
            { id: 4, desc: "Create a modal for the dynamic tab using Bootstrap", url: "PS44042_LABS_2/bai4.html" }
        ]
    },
    'lab03': {
        name: "Lab 03: Responsive Web Design with Bootstrap 5",
        exercises: [
            { id: 1, desc: "Navigation & Branding", url: "PS44042_LABS_3/bai1.html" },
            { id: 2, desc: "Content Grid (Post List)", url: "PS44042_LABS_3/bai2.html" },
            { id: 3, desc: "Interactive UI Components", url: "PS44042_LABS_3/bai3.html" },
            { id: 4, desc: "Post Detail Layout", url: "PS44042_LABS_3/bai4.html" }
        ]
    },
    'lab04': {
        name: "Lab 04: A deep dive into VueJS fundamentals",
        exercises: [
            { id: 1, desc: "Environment setup", url: "http://localhost:5173/", target: "#ex1" },
            { id: 2, desc: "Hello Vue Component", url: "http://localhost:5173/", target: "#ex2" },
            { id: 3, desc: "Interactive Greetings", url: "http://localhost:5173/", target: "#ex3" },
            { id: 4, desc: "Health Knowledge Portal", url: "http://localhost:5173/", target: "#ex4" }
        ]
    }
};

let currentLabId = '';

function openLab(labId) {
    currentLabId = labId;
    const lab = allLabs[labId];
    document.getElementById('lab-title').innerText = lab.name;

    let rows = '';
    lab.exercises.forEach(ex => {
        rows += `
            <tr>
                <td>Exercise ${ex.id}</td>
                <td>${ex.desc}</td>
                <td>
                    <button class="btn btn-sm btn-success" 
                        onclick="viewRealHTML('${ex.url}', 'Exercise ${ex.id}', '${ex.target || ""}')">
                        View Page
                    </button>
                </td>
            </tr>`;
    });

    document.getElementById('exercise-rows').innerHTML = rows;
    showLevel(2);
}

function viewRealHTML(url, title, target) {
    document.getElementById('ex-title').innerText = title;
    const finalUrl = target ? `${url}${target}` : url;
    document.getElementById('preview-frame').src = finalUrl;
    showLevel(3);
}

function showLevel(level) {
    document.getElementById('labs-list-view').style.display = (level === 1) ? 'block' : 'none';
    document.getElementById('exercise-list-view').style.display = (level === 2) ? 'block' : 'none';
    document.getElementById('preview-view').style.display = (level === 3) ? 'block' : 'none';
}