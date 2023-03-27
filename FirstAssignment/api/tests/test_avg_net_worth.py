from rest_framework.test import APITestCase
from api.models import FootballTeam, Sponsor, Has
from api.views import FootballTeamsByAvgNetWorthDeals
from django.db.models import Avg


class FootballTeamsByAvgNetWorthDealsTestCase(APITestCase):

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
        response = self.client.get('/api/football-team/avg-networth/')
        self.assertEqual(response.status_code, 200)

    def test_get_queryset(self):
        expected_query = FootballTeam.objects.annotate(avg_networth=Avg('has__sponsor__netWorth')).\
            order_by('avg_networth')
        view = FootballTeamsByAvgNetWorthDeals()
        queryset = view.get_queryset()
        self.assertQuerysetEqual(queryset, expected_query, transform=lambda x: x)

    def test_get(self):
        response = self.client.get('/api/football-team/avg-networth/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 2)
        self.assertEqual(response.data[0]['avg_networth'], 150.0)
        self.assertEqual(response.data[1]['avg_networth'], 300.0)
