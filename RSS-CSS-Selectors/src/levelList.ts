export const levelsList = [
    {
        level: 0,
        title: 'Type Selector',
        history: `You're about to learn CSS Selectors!
            Selectors are how you pick which element to apply styles to.
             Select to apply styles to every <div> element.
              You can do this with the selector div.
             This is called a type selector.
             What selector will select all <white> buns elements?`,
        help: '***ПОМОЖИТЕ***',
        tag: 'white',
        id: '',
        html: ['black', 'white', 'black', 'white'],
        childFist: [],
        childSecond: [],
    },
    {
        level: 1,
        title: 'Type Selector',
        history: 'What selector will select all <black> buns elements?',
        help: '***ПОМОЖИТЕ***',
        tag: 'black',
        id: '',
        html: ['black', 'white', 'black', 'white'],
        childFist: [],
        childSecond: [],
    },
    {
        level: 2,
        title: 'ID Selector',
        history: 'Selects the element with a specific #id',
        help: '***ПОМОЖИТЕ***',
        tag: '#select',
        id: 'select',
        html: ['black', 'white', 'black', 'white'],
        childFist: [],
        childSecond: [],
    },
    {
        level: 3,
        title: 'Type Selector',
        history: 'Select an element inside another element. What selector will select all <meat> elements?',
        help: '***ПОМОЖИТЕ***',
        tag: 'meat',
        id: '',
        html: ['black', 'white', 'black', 'white'],
        childFist: ['meat', 'meat', 'meat', 'meat'],
        childSecond: [],
    },

    {
        level: 4,
        title: 'Descendant Selector',
        history:
            'Select an element inside another element. You can use a descendant combinator, which is simply a space, to combine the buns (<white>/<black>) selector with the <meat> selector to achieve this.',
        help: '***ПОМОЖИТЕ***',
        tag: 'white meat',
        id: '',
        html: ['black', 'white', 'black', 'white'],
        childFist: ['meat', 'meat', 'meat', 'meat'],
        childSecond: [],
    },
    {
        level: 5,
        title: 'Class Selector',
        history:
            'Select elements by their class ".classname" The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
        help: '***ПОМОЖИТЕ***',
        tag: '.slice',
        id: '',
        html: ['black', 'white', 'black', 'white'],
        childFist: ['meat', 'meat', 'meat', 'meat'],
        childSecond: ['cheese', 'cheese', 'cheese', 'cheese'],
    },

    {
        level: 6,
        title: '',
        history: '',
        help: '',
        tag: '',
        id: '',
        html: [],
        childFist: [],
        childSecond: [],
    },

    {
        level: 7,
        title: '',
        history: '',
        help: '',
        tag: '',
        id: '',
        html: [],
        childFist: [],
        childSecond: [],
    },
    {
        level: 8,
        title: '',
        history: '',
        help: '',
        tag: '',
        id: '',
        html: [],
        childFist: [],
        childSecond: [],
    },
    {
        level: 9,
        title: '',
        history: '',
        help: '',
        tag: '',
        id: '',
        html: [],
        childFist: [],
        childSecond: [],
    },
    {
        level: 10,
        title: 'Select all the things!',
        history:
            'The Universal Selector! You can select everything! You can select all elements with the universal selector * !',
        help: '***ПОМОЖИТЕ***',
        tag: '*',
        id: '',
        html: [],
        childFist: [],
        childSecond: [],
    },
];
