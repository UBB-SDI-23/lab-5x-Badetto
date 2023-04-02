from django.db.models import Avg, Count
from rest_framework import generics
from rest_framework.response import Response

from .models import FootballTeam, Player, Sponsor, Has
from .serializers import FootballTeamSerializer, PlayerSerializer, SponsorSerializer,\
    FootballTeamIdSerializer, PlayerJustIdSerializer, HasSerializer, FootballTeamSponsorSerializer,\
    FootballTeamNrSponsorSerializer, SponsorsWithFootballTeamsSerializer, HasNewSerializer, FootballTeamNrPlayerSerializer
from django_filters.rest_framework import DjangoFilterBackend


class FootballTeamList(generics.ListCreateAPIView):
    serializer_class = FootballTeamSerializer
    queryset = FootballTeam.objects.all()


class FootballTeamDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = FootballTeamSerializer
    queryset = FootballTeam.objects.all()


class FootballTeamIdDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = FootballTeamIdSerializer
    queryset = FootballTeam.objects.all()


class PlayerList(generics.ListCreateAPIView):
    serializer_class = PlayerSerializer
    queryset = Player.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = {'rating': ['gt']}


class PlayerDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PlayerJustIdSerializer
    queryset = Player.objects.all()


class SponsorList(generics.ListCreateAPIView):
    serializer_class = SponsorSerializer
    queryset = Sponsor.objects.all()


class SponsorDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = SponsorSerializer
    queryset = Sponsor.objects.all()


class HasList(generics.ListCreateAPIView):
    serializer_class = HasSerializer
    queryset = Has.objects.all()


class HasDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = HasSerializer
    queryset = Has.objects.all()


class SponsorsWithFootballTeamsDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = SponsorsWithFootballTeamsSerializer
    queryset = Sponsor.objects.all()


class FootballTeamsByAvgNetWorthDeals(generics.ListAPIView):
    serializer_class = FootballTeamSponsorSerializer

    def get_queryset(self):
        query = FootballTeam.objects\
            .annotate(avg_networth=Avg('teams__sponsor__netWorth'))\
            .order_by('avg_networth')
        return query


class FootballTeamsByNrOfSponsors(generics.CreateAPIView):
    serializer_class = FootballTeamNrSponsorSerializer

    def get_queryset(self):
        query = FootballTeam.objects\
            .annotate(nr_sponsors=Count('has__sponsor'))\
            .order_by('-nr_sponsors')
        return query


class FootballTeamsByNrOfPlayers(generics.ListAPIView):
    serializer_class = FootballTeamNrPlayerSerializer

    def get_queryset(self):
        query = FootballTeam.objects\
            .annotate(nr_players=Count('content'))\
            .order_by('-nr_players')
        return query

class HasCreateView(generics.CreateAPIView):
    serializer_class = HasNewSerializer
    queryset = Has.objects.all()

    def get(self, request, *args, **kwargs):
        football_teams = FootballTeam.objects.all()
        serializer = FootballTeam(football_teams, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, many=True)
        serializer.is_valid(raise_exception=True)
        data_set = request.data
        football_team_id = kwargs['football_team_id']
        for elem in data_set:
            print(elem)
            sponsor = elem['sponsor']
            type = elem['type']
            dealValue = elem['dealValue']
            print(football_team_id)
            has = Has.objects.create(
                dealValue=dealValue, type=type, team=FootballTeam.objects.get(id=football_team_id), sponsor=Sponsor.objects.get(id=sponsor))

        return Response({
            'sponsor': sponsor,
            'has': has.id
        })
