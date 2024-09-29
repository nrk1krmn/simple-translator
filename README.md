# Simple Translator

Простой скрипт для перевода текста (ru-en, en-ru) прямо из терминала. Можно сделать исполняемым при помощи pkg или сделать alias в терминале.
Работает на мощностях Яндекса.

![GitHub](https://img.shields.io/github/languages/top/nrk1krmn/simple-translator)
![GitHub Repo stars](https://img.shields.io/github/stars/nrk1krmn/simple-translator)

## Установка (Для всех платформ)
1. Установить Node.js

```https://nodejs.org/``` или ```https://volta.sh/```

2. Склонировать репозиторий

```git clone https://github.com/nrk1krmn/simple-translator.git```

## Использование
1. Перейти в директорию

```cd simple-translator```

2. Запустить main.js и ввести любой текст.

```node main.js```

3) Язык введенного текста определяется автоматически (только русский и английский).
4) Перевод копируется в буфер обмена.
5) Чтобы закончить процесс отправь "!" или закрой окно терминала.

## Как создать alias
1) Для bash:
```nano ~/.bashrc```
Внутри файла добавить строчку ```alias translate="node ~/путь/к/файлу"```
Сохранить файл.
```source ~/.bashrc```
Готово.

2) Для zsh:
```nano ~/.zshrc```
Внутри файла добавить строчку ```alias translate="node ~/путь/к/файлу"```
```source ~/.zshrc```
Готово.

Далее можно будет вызывать переводчик вводя в терминал ключевое слово ```translate``` или любое другое, которое ты введешь вместо него.

## Dependencies

Node.js v18.х.х или выше

