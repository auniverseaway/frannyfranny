const changeHeader = () => {
    const nav = document.querySelector('nav');
    nav.style.opacity = '0.25';
};

window.hlxhlp.toolbar = {
    styles: '/css/toolbar.css',
    actions: [
        {
            label: 'Change header',
            func: changeHeader,
        },
        {
            label: 'Preview card',
            func: changeHeader,
        },
    ],
};
