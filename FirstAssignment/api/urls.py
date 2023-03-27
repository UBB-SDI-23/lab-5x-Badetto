from django.urls import path
from .views import FootballTeamList, FootballTeamDetail, \
    PlayerList, PlayerDetail, SponsorList, SponsorDetail, FootballTeamIdDetail, HasList, HasDetail, \
    FootballTeamsByAvgNetWorthDeals, FootballTeamsByNrOfSponsors, SponsorsWithFootballTeamsDetail, \
    HasCreateView

urlpatterns = [
    path('football-team/', FootballTeamList.as_view()),
    path('football-team/<int:pk>/', FootballTeamIdDetail.as_view()),
    path('player/',  PlayerList.as_view()),
    path('player/<int:pk>/', PlayerDetail.as_view()),
    path('sponsor/', SponsorList.as_view()),
    path('sponsor/<int:pk>/', SponsorsWithFootballTeamsDetail.as_view()),
    path('football-team-sponsor/', HasList.as_view()),
    path('has/<int:pk>/', HasDetail.as_view()),
    path('football-team/avg-networth/', FootballTeamsByAvgNetWorthDeals.as_view()),
    path('football-team/nr-sponsors/', FootballTeamsByNrOfSponsors.as_view()),
    path('football-team/<int:football_team_id>/sponsor/', HasCreateView.as_view()),
]
