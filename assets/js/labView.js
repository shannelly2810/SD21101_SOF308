    const allLabs = {
        'lab01': {
            name: "Lab 01: Introduction to Bootstrap",
            exercises: [
                { id: 1, desc: "Organize basic layout using Bootstrap", url: "PS44042_LABS_1/bai1.html" },
                { id: 2, desc: "Create Navbar using Bootstrap", url: "PS44042_LABS_1/bai2.html" },
                { id: 3, desc: "Create aside using Bootstrap", url: "PS44042_LABS_1/bai3.html" },
                { id: 4, desc: "Create web display as described using Bootstrap", url: "PS44042_LABS_1/bai4.html"}
            ]
        },
        'lab02': {
            name: "Lab 02: Introduction to basic Tables | Forms | dynamic tabs and modal",
            exercises: [
                { id: 1, desc: "Create table using Bootstrap", url: "PS44042_LABS_2/bai1.html" },
                { id: 2, desc: "Create register/login forms using Bootstrap", url: "PS44042_LABS_2/bai2.html" },
                { id: 3, desc: "Create a dynamic tab for both register/login forms using Bootstrap", url: "PS44042_LABS_2/bai3.html" },
                { id: 4, desc: "Create a modal for the dynamic tab using Bootstrap", url: "PS44042_LABS_2/bai4.html"}
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
                    <td><button class="btn btn-sm btn-success" onclick="viewRealHTML('${ex.url}', 'Exercise ${ex.id}')">View Page</button></td>
                </tr>`;
        });
        
        document.getElementById('exercise-rows').innerHTML = rows;
        showLevel(2);
    }

    function viewRealHTML(url, title) {
        document.getElementById('ex-title').innerText = title;
        document.getElementById('preview-frame').src = url;
        showLevel(3);
    }

    function showLevel(level) {
        document.getElementById('labs-list-view').style.display = (level === 1) ? 'block' : 'none';
        document.getElementById('exercise-list-view').style.display = (level === 2) ? 'block' : 'none';
        document.getElementById('preview-view').style.display = (level === 3) ? 'block' : 'none';
    }