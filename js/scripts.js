// Custom Scripts
// Custom scripts
const dateFromPicker = datepicker('#date-from', {
    formatter: (input, date, instance) => {
        const value = date.toLocaleDateString('en-GB').replace(/\//g, '_');
        input.value = value;
    },
    id: 1,
    position: 'bl',
    showAllDates: true,
    customDays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    disableYearOverlay: true
});

const dateToPicker = datepicker('#date-to', {
    formatter: (input, date, instance) => {
        const value = date.toLocaleDateString('en-GB').replace(/\//g, '_');
        input.value = value;
    },
    id: 1,
    position: 'bl',
    showAllDates: true,
    customDays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    disableYearOverlay: true
});

document.getElementById('clear-from').addEventListener('click', () => {
    document.getElementById('date-from').value = '';
    dateFromPicker.setDate();
});

document.getElementById('calendar-from').addEventListener('click', () => {
    dateFromPicker.show();
});

document.getElementById('clear-to').addEventListener('click', () => {
    document.getElementById('date-to').value = '';
    dateToPicker.setDate();
});

document.getElementById('calendar-to').addEventListener('click', () => {
    dateToPicker.show();
});

function tabs(headerSelector, tabSelector, contentSelector, activeClass, display='flex') {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector)
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none'
        });
        tab.forEach(item => {
            item.classList.remove(activeClass)
        });
    }
    function showTabContent(i = 0) {
       content[i].style.display = display
       tab[i].classList.add(activeClass)
    }
    hideTabContent()
    showTabContent()
    header.addEventListener('click', e => {
        const target = e.target
        if (target.classList.contains(tabSelector.replace(/\./, '')) || 
        target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
            tab.forEach((item, i) => {
                if ( target == item || target.parentNode == item ) {
                    hideTabContent()
                    showTabContent(i)
                }
            });
        }
    })
}

// ПЕРВЫЙ аргумент - класс всего нашего хедера табов.
// ВТОРОЙ аргумент - класс конкретного элемента, при клике на который будет переключатся таб.
// ТРЕТИЙ аргумент - класс того блока, который будет переключаться.
// ЧЕТВЕРТЫЙ аргумент - класс активности, который будет добавлятся для таба, который сейчас активен.
tabs( '.gallery__header' ,'.gallery__header-item', '.gallery__content-item', 'active')