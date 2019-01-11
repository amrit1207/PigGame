from django.shortcuts import render
from .models import Pig
def home(request):
    pig=Pig.objects
    return render(request,'home.html',{'pigs':pig})

def play(request):
    return render(request,'index.html')