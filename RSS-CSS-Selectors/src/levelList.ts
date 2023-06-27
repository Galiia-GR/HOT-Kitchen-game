export const levelsList = [
    {
        level: 0,
        title: 'Type Selector',
        history: `You're about to learn CSS Selectors!
            Selectors are how you pick which element to apply styles to.
             Select to apply styles to every <div> element.
              You can do this with the selector div.
             This is called a type selector.
             What selector will select all white buns elements?`,
        help: 'ПОМОЖИТЕ',
        tag: 'white',
        id: '',
        html: ['black', 'white', 'black', 'white'],
        child: [],
    },
    {
        level: 1,
        title: 'Type Selector',
        history: 'What selector will select all black buns elements?',
        help: 'ПОМОЖИТЕ',
        tag: 'black',
        id: '',
        html: ['black', 'white', 'black', 'white'],
        child: [],
    },
    {
        level: 2,
        title: 'ID Selector',
        history: 'Selects the element with a specific #id',
        help: 'ПОМОЖИТЕ',
        tag: '#select',
        id: 'select',
        html: ['black', 'white', 'black', 'white'],
        child: [],
    },
    {
        level: 3,
        title: 'Descendant Selector',
        history:
            'Select an element inside another element. You can use a descendant combinator, which is simply a space, to combine the buns (white/black) selector with the meet selector to achieve this.',
        help: 'ПОМОЖИТЕ',
        tag: 'white meet',
        id: '',
        html: ['black', 'white', 'black', 'white'],
        child: ['white', 'meet'],
    },
];
