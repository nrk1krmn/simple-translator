import yandexTranslate from './translator.js';
import copy from './copy.js';

console.clear('');
console.log('Введите текст ниже:');

process.stdin.setEncoding('utf-8');
process.stdin.on('data', async (input) => {
    if (input[0] === '!') {
        process.stdin.destroy();
        return;
    }

    const langs = [];
    if (input.match(/^[а-яА-ЯёЁ\s]+$/)) {
        langs.push('ru', 'en');
    } else {
        langs.push('en', 'ru');
    }

    const result = await yandexTranslate(input, langs[0], langs[1]);
    console.log('Перевод:', result);
    await copy(result);
})