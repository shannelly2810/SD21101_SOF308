document.querySelector('form[action="post-controller"]').addEventListener('submit', function (event) {
    event.preventDefault();
    const currentTime = getVietnameseDate();
    const title = this.querySelector('input[type="text"]').value;
    const content = this.querySelector('textarea').value;
    const privacy = this.querySelector('select').value;
    const icon = privacy === 'public' ? '🌐' : (privacy === 'friends' ? '👥' : '🔒');
    const newPostHTML = `
    <div class="col-12">
        <div class="card border-0 shadow-sm overflow-hidden">
            <div class="row g-0 align-items-center">
                <div class="col-8 col-md-9">
                    <div class="card-body">
                        <h5 class="card-title fw-bold text-primary mb-1">${title}</h5>
                        <p class="card-text text-muted small text-truncate-2">${content}</p>
                        <div class="d-flex align-items-center gap-2 mt-2">
                            <small class="text-muted">By Toya • ${getVietnameseDate()}</small>
                            <span class="badge bg-light text-info border small">${icon} ${privacy}</span>
                        </div>
                    </div>
                </div>
                <div class="col-4 col-md-3 text-end">
                    <div class="bg-light d-flex align-items-center justify-content-center" style="height: 120px;">
                        <i class="fa-solid fa-image fa-2x text-muted opacity-25"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
    document.getElementById('postFeed').insertAdjacentHTML('afterbegin', newPostHTML);
    this.reset();
    alert("Post initialized successfully!");
});

function getVietnameseDate() {
    const now = new Date();
    const date = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes} - ${date}/${month}/${year}`;
}