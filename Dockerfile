Для упрощения и использования Django Bootstrap 4, переработаем проект, чтобы подключить стили и создать более удобный интерфейс. Вот пошаговая инструкция:


---

1. Установка Django Bootstrap 4

Установите библиотеку django-bootstrap4:

pip install django-bootstrap4

Добавьте её в INSTALLED_APPS в settings.py:

INSTALLED_APPS = [
    ...
    'bootstrap4',
]


---

2. Шаблоны с использованием Bootstrap 4

Общий шаблон

Создайте базовый шаблон templates/base.html для подключения Bootstrap:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Medical Records</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="{% url 'medical_records_list' %}">Medical Records</a>
    </nav>
    <div class="container mt-4">
        {% block content %}
        {% endblock %}
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

Список медицинских записей

Создайте файл templates/records/medical_records_list.html:

{% extends 'base.html' %}

{% block content %}
<h1 class="mb-4">Медицинские записи</h1>
<a href="{% url 'add_medical_record' %}" class="btn btn-primary mb-3">Добавить запись</a>
<table class="table table-bordered">
    <thead class="thead-light">
        <tr>
            <th>Пациент</th>
            <th>Врач</th>
            <th>Дата</th>
            <th>Время</th>
            <th>Диагноз</th>
        </tr>
    </thead>
    <tbody>
        {% for record in records %}
        <tr>
            <td>{{ record.patient }}</td>
            <td>{{ record.doctor }}</td>
            <td>{{ record.date }}</td>
            <td>{{ record.time }}</td>
            <td>{{ record.diagnosis }}</td>
        </tr>
        {% endfor %}
    </tbody>
</table>
{% endblock %}

Форма добавления записи

Создайте файл templates/records/add_medical_record.html:

{% extends 'base.html' %}

{% block content %}
<h1 class="mb-4">Добавить медицинскую запись</h1>
<form method="post">
    {% csrf_token %}
    {% bootstrap_form form %}
    <button type="submit" class="btn btn-success mt-3">Сохранить</button>
    <a href="{% url 'medical_records_list' %}" class="btn btn-secondary mt-3">Назад</a>
</form>
{% endblock %}


---

3. Представления

Список и добавление записей:

В records/views.py:

from django.shortcuts import render, redirect
from .models import MedicalRecord
from .forms import MedicalRecordForm

def medical_records_list(request):
    records = MedicalRecord.objects.all()
    return render(request, 'records/medical_records_list.html', {'records': records})

def add_medical_record(request):
    if request.method == 'POST':
        form = MedicalRecordForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('medical_records_list')
    else:
        form = MedicalRecordForm()
    return render(request, 'records/add_medical_record.html', {'form': form})


---

4. Формы

Создайте файл records/forms.py:

from django import forms
from .models import MedicalRecord

class MedicalRecordForm(forms.ModelForm):
    class Meta:
        model = MedicalRecord
        fields = '__all__'


---

5. Маршруты

Файл records/urls.py:

from django.urls import path
from . import views

urlpatterns = [
    path('', views.medical_records_list, name='medical_records_list'),
    path('add/', views.add_medical_record, name='add_medical_record'),
]

Главный файл маршрутов:

В medical_records/urls.py:

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('records.urls')),
]


---

6. Статические файлы

Убедитесь, что ваш settings.py настроен на использование статических файлов:

STATIC_URL = '/static/'


---

7. Запуск проекта

1. Запустите сервер:

python manage.py runserver


2. Откройте в браузере: http://127.0.0.1:8000.




---

Теперь интерфейс будет стильным и удобным благодаря Bootstrap 4. Если вам нужно добавить новые страницы или функции, напишите, и я помогу!

