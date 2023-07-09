import DefaultLevel from './DefaultLevel';

describe('class DefaultLevel', () => {
    let testLevel: DefaultLevel;
    let testTitle;
    let testHistory;
    let testMarkUp;
    let testMarkFake;
    let arrTestHtml: string[];

    beforeEach(() => {
        testLevel = new DefaultLevel(
            111,
            'test',
            'test long story',
            'right',
            '',
            ['right', 'left', 'right', 'left'],
            [],
            [],
            [],
            [],
            []
        );
        document.body.innerHTML = '';
        testTitle = document.createElement('h2');
        testHistory = document.createElement('p');
        document.body.append(testTitle);
        document.body.append(testHistory);
        testTitle.textContent = testLevel.title;
        testHistory.textContent = testLevel.history;

        testMarkUp = document.createElement('div');
        testMarkFake = document.createElement('span');

        document.body.append(testMarkFake);
        document.body.append(testMarkUp);

        arrTestHtml = testLevel.html;
    });

    it('should create object', () => {
        expect(testLevel).toBeTruthy();
    });

    it('should to be a function', () => {
        expect(testLevel.createAppendLevel).toBeInstanceOf(Function);
    });

    it('should to be a function', () => {
        expect(testLevel.createHtmlMarkUp).toBeInstanceOf(Function);
    });

    it('test markup createAppendLevel', () => {
        expect(document.querySelector('h2')).toBeTruthy();
        expect(document.querySelector('p')).toBeTruthy();
    });

    it('test markup createHtmlMarkUp', () => {
        expect(document.querySelector('div')).toBeTruthy();
        expect(document.querySelector('span')).toBeTruthy();
    });

    it('arr html lenght', () => {
        expect(arrTestHtml.length).toBe(4);
    });
});
