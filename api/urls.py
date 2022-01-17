from django.urls import path

from . import views

urlpatterns = [
    path('create-person', views.create_person),
    path('list-people', views.list_people)
]