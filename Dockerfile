# Этап 1: Сборка Angular-приложения
FROM node:16-alpine AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY . .

# Сборка приложения в режиме production
RUN npm run build --prod

# Этап 2: Настройка Nginx для обслуживания приложения
FROM nginx:alpine

# Копируем скомпилированное приложение из предыдущего этапа
COPY --from=build /app/dist/your-app-name /usr/share/nginx/html

# Копируем конфигурационный файл Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
