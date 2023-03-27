from django.db import models
from .validators import *


class FootballTeam(models.Model):
    name = models.CharField(max_length=100, unique=True)
    nickname = models.CharField(max_length=100, default="N/A")
    foundingYear = models.IntegerField(default=-1)
    value = models.IntegerField(default=-1)
    professionalStatus = models.CharField(max_length=100, default="Amateurs", validators=[validate_team_professional_status])

    def __str__(self):
        return self.name


class Player(models.Model):
    name = models.CharField(max_length=100, blank=False)
    number = models.IntegerField(default=-1)
    age = models.IntegerField(default=-1)
    rating = models.IntegerField(default=-1, validators=[validate_player_rating])
    position = models.CharField(max_length=100, default="Substitute")
    nationality = models.CharField(max_length=100, blank=False)
    team = models.ForeignKey(FootballTeam, null=True, on_delete=models.CASCADE, related_name='content')

    def __str__(self):
        return self.name


class Sponsor(models.Model):
    name = models.CharField(max_length=100, unique=True)
    foundingYear = models.IntegerField(blank=False)
    nationality = models.CharField(max_length=100, blank=False)
    netWorth = models.IntegerField(blank=False)
    domain = models.CharField(max_length=100, blank=False)

    def __str__(self):
        return self.name


class Has(models.Model):
    dealValue = models.IntegerField(blank=False)
    type = models.CharField(max_length=100, blank=False, validators=[validate_sponsor_type])
    team = models.ForeignKey(FootballTeam, null=False, on_delete=models.CASCADE, related_name='teams')
    sponsor = models.ForeignKey(Sponsor, null=False, on_delete=models.CASCADE, related_name='sponsors')

    def __str__(self):
        return str(self.team) + ' ' + str(self.sponsor)
