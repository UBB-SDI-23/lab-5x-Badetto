from rest_framework.test import APITestCase
from api.models import FootballTeam, Sponsor, Has
from api.views import FootballTeamsByNrOfSponsors
from django.db.models import Count


class FootballTeamsByNrOfSponsorsTestCase(APITestCase):

    @classmethod
    def setUpTestData(cls):
        # create test data
        team1 = FootballTeam.objects.create(name='Team 1')
        team2 = FootballTeam.objects.create(name='Team 2')
        sponsor1 = Sponsor.objects.create(name='Sponsor 1', foundingYear=1, nationality="R", netWorth=100)
        sponsor2 = Sponsor.objects.create(name='Sponsor 2', foundingYear=1, nationality="R", netWorth=200)
        sponsor3 = Sponsor.objects.create(name='Sponsor 3', foundingYear=1, nationality="R", netWorth=300)
        Has.objects.create(sponsor=sponsor1, team=team1, dealValue=50, type="M")
        Has.objects.create(sponsor=sponsor2, team=team1, dealValue=100, type="M")
        Has.objects.create(sponsor=sponsor3, team=team2, dealValue=200, type="M")

    def test_url_exists(self):
        response = self.client.get('/api/football-team/nr-sponsors/')
        self.assertEqual(response.status_code, 200)

    def test_get_queryset(self):
        expected_query = FootballTeam.objects.annotate(nr_sponsors=Count('has__sponsor'))\
            .order_by('-nr_sponsors')
        view = FootballTeamsByNrOfSponsors()
        queryset = view.get_queryset()
        self.assertQuerysetEqual(queryset, expected_query, transform=lambda x: x)

    def test_get(self):
        response = self.client.get('/api/football-team/nr-sponsors/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 2)
        self.assertEqual(response.data[0]['nr_sponsors'], 2)
        self.assertEqual(response.data[1]['nr_sponsors'], 1)
