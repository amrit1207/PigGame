# Generated by Django 2.0.2 on 2019-01-09 17:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pig', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pig',
            name='title',
            field=models.CharField(max_length=1000),
        ),
    ]
