from django.urls import path
from . import views

urlpatterns = [

path('play',views.play,name='play'),

 ]