# web-worker_partytown

Frontend-проект на `React 18` и `TypeScript`, который показывает базовую интеграцию `Partytown` в приложение.

В репозитории демонстрируется простой сценарий: вычисление числа Фибоначчи выносится из основного потока, а интерфейс остается отзывчивым.

## Стек

- React 18
- TypeScript
- Webpack 5
- Babel
- Sass / SCSS
- Partytown

## Что здесь демонстрируется

- React-приложение без `Create React App`
- подключение `Partytown`
- перенос тяжелого вычисления из `main thread`
- ручная настройка `webpack`

## Запуск

```bash
npm install
npm start
```

Dev server поднимается на `http://localhost:3000`.

## Доступные команды

```bash
npm start
npm run dev
npm run build
npm run bundle:analyzer
npm run ts:check
npm run lint
npm run lint:styles
npm run all-cheks
```

## Структура проекта

```text
.
├── config/webpack     # конфигурация webpack
├── public/            # html-шаблон и статические файлы
├── src/
│   ├── components/
│   ├── scripts/
│   ├── styles/
│   └── utils/
└── package.json
```

## Ограничения примера

- используется демонстрационный расчет `fibonacci`
- проект сделан как учебный пример, а не как production-решение

## Зачем этот репозиторий

Проект подходит как короткий пример для портфолио:

- интеграция `Partytown` в React-проект
- работа с тяжелым вычислением вне основного потока
- ручная настройка frontend-сборки
