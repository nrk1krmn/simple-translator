import { exec } from 'child_process';

export default async function copy(input) {
    exec(`echo ${input.trim()} | pbcopy`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Ошибка при попытке скопировать перевод в буфер обмена: ${error}`);
            return;
        }
        console.log('Перевод скопирован в буфер обмена!');
        console.log('----------------------------------');
        console.log('Введите текст ниже:')
    });
};