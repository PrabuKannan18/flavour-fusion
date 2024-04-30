const buttons = document.querySelectorAll('.btn');
const boxes = document.querySelectorAll('.box');
const searchBox = document.querySelector("#search");

searchBox.addEventListener('keyup', (e) => {
    const searchText = e.target.value.toLowerCase().trim();

    boxes.forEach((box) => {
        const data = box.dataset.item.toLowerCase();
        if (data.includes(searchText)) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });

    buttons.forEach((button) => {
        button.classList.remove('btn-clicked');
    });

    buttons[0].classList.add('btn-clicked');
});

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        setActivebtn(e);
        const btnfilter = e.target.dataset.filter;

        boxes.forEach((box) => {
            if (btnfilter === 'all') {
                box.style.display = "block";
            } else {
                const boxfilter = box.dataset.item;
                if (btnfilter === boxfilter) {
                    box.style.display = "block";
                } else {
                    box.style.display = "none";
                }
            }
        });
    });
});

function setActivebtn(e) {
    buttons.forEach((button) => {
        button.classList.remove('btn-clicked');
    });
    e.target.classList.add('btn-clicked');
}