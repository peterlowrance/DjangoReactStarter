from django.db import models

class Person(models.Model):
    name = models.CharField(max_length=30)
    gender = models.CharField(max_length=30)
    country = models.CharField(max_length=30)
    age = models.IntegerField()
