from django.urls import path
from .views import FootballTeamList, PlayerList, PlayerDetail, SponsorList, FootballTeamIdDetail, HasList, HasDetail, \
    FootballTeamsByAvgNetWorthDeals, FootballTeamsByNrOfSponsors, SponsorsWithFootballTeamsDetail, HasCreateView, \
    FootballTeamsByNrOfPlayers, FootballTeamListView, PlayerPagListView, SponsorPagListView
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

urlpatterns = [
    path('football-team/', FootballTeamListView.as_view()),
    path('football-team/<int:pk>/', FootballTeamIdDetail.as_view()),
    path('player/',  PlayerPagListView.as_view()),
    path('player/<int:pk>/', PlayerDetail.as_view()),
    path('sponsor/', SponsorPagListView.as_view()),
    path('sponsor/<int:pk>/', SponsorsWithFootballTeamsDetail.as_view()),
    path('football-team-sponsor-relation/', HasList.as_view()),
    path('football-team-sponsor-relation/<int:pk>/', HasDetail.as_view()),
    path('football-team/avg-networth/', FootballTeamsByAvgNetWorthDeals.as_view()),
    path('football-team/nr-sponsors/', FootballTeamsByNrOfSponsors.as_view()),
    path('football-team/<int:pk>/nr-players/', FootballTeamsByNrOfPlayers.as_view()),
    path('football-team/<int:football_team_id>/sponsor/', HasCreateView.as_view()),
    path('schema/', SpectacularAPIView.as_view(), name='schema'),
    path('schema/swagger-ui/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
]
