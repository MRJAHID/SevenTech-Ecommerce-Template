module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                blue: {
                    550: '#005dab',
                },
            },
        },
    },
    variants: {
        extend: {
            filter: ['hover', 'focus'],
        },
    },
    plugins: [],
};
