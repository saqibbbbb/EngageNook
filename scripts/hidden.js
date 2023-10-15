const commentBtn = document.getElementById('comment-btn');
const commentBtnText = document.getElementById('comment-btn-text');
const hiddenSection = document.getElementById('hidden-section');

commentBtn.addEventListener('click', () => {
    if (hiddenSection.style.display === 'none' || hiddenSection.style.display === '') {
        hiddenSection.style.display = 'block';
    } else {
        hiddenSection.style.display = 'none';
    }
});
commentBtnText.addEventListener('click', () => {
    if (hiddenSection.style.display === 'none' || hiddenSection.style.display === '') {
        hiddenSection.style.display = 'block';
    } else {
        hiddenSection.style.display = 'none';
    }
});