from django.db import models

class Pig(models.Model):
    image=models.ImageField(upload_to='image/')
    title=models.CharField(max_length=1000)


    def __str__(self):
        return self.title
