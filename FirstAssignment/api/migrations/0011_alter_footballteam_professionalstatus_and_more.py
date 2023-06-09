# Generated by Django 4.1.7 on 2023-03-29 20:11

import api.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_alter_sponsor_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='footballteam',
            name='professionalStatus',
            field=models.CharField(default='Amateurs', max_length=100, validators=[api.validators.validate_team_professional_status]),
        ),
        migrations.AlterField(
            model_name='has',
            name='sponsor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sponsors', to='api.sponsor'),
        ),
        migrations.AlterField(
            model_name='has',
            name='team',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='teams', to='api.footballteam'),
        ),
        migrations.AlterField(
            model_name='has',
            name='type',
            field=models.CharField(max_length=100, validators=[api.validators.validate_sponsor_type]),
        ),
        migrations.AlterField(
            model_name='player',
            name='rating',
            field=models.IntegerField(default=-1, validators=[api.validators.validate_player_rating]),
        ),
    ]
