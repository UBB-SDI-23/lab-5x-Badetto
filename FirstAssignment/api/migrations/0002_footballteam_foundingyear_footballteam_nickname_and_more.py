# Generated by Django 4.1.7 on 2023-03-04 21:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='footballteam',
            name='foundingYear',
            field=models.IntegerField(default=-1),
        ),
        migrations.AddField(
            model_name='footballteam',
            name='nickname',
            field=models.CharField(default='N/A', max_length=100),
        ),
        migrations.AddField(
            model_name='footballteam',
            name='profesionalStatus',
            field=models.CharField(default='Amateur', max_length=100),
        ),
        migrations.AddField(
            model_name='footballteam',
            name='value',
            field=models.IntegerField(default=-1),
        ),
    ]
