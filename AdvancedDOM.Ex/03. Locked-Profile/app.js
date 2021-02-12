function lockedProfile() {
    const profiles = document.getElementsByClassName('profile');

    Object.values(profiles).map(p => p.addEventListener('click', function (x) {
        const elements = p.children;
        let lock = elements[2];
        let unlock = elements[4];
        let hiddenData = elements[9];
        let button = elements[10];

        if (lock === x.target) {
            lockAndUnlock(lock, unlock);
        }
        if (unlock === x.target) {
            lockAndUnlock(unlock, lock);
        }
        if (unlock.checked === true && x.target === button) {
            if (hiddenData.style.display === 'block') {
                hiddenData.style.display = 'none';
                button.textContent = 'Show more';
            }
            else {
                hiddenData.style.display = 'block';
                button.textContent = 'Hide it';
            }
        }
        function lockAndUnlock(currSelected, unSelected) {
            currSelected.checked = true;
            unSelected.checked = false;
        }
    }));
}