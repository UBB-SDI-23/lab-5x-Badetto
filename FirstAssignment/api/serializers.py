from rest_framework import serializers
from .models import FootballTeam, Player, Sponsor, Has


class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = '__all__'


class SponsorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sponsor
        fields = '__all__'


class FootballTeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = FootballTeam
        fields = '__all__'


class HasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Has
        fields = '__all__'


class FootballTeamIdSerializer(serializers.ModelSerializer):
    content = PlayerSerializer(many=True, read_only=True)

    class Meta:
        model = FootballTeam
        fields = ('name', 'nickname', 'foundingYear', 'value', 'professionalStatus', 'content', )


class PlayerJustIdSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        depth = 1
        fields = '__all__'


class FootballTeamSponsorSerializer(serializers.ModelSerializer):
    avg_networth = serializers.FloatField(read_only=True)

    class Meta:
        model = FootballTeam
        fields = '__all__'


class FootballTeamNrSponsorSerializer(serializers.ModelSerializer):
    nr_sponsors = serializers.IntegerField(read_only=True)

    class Meta:
        model = FootballTeam
        fields = '__all__'


class FootballTeamNrPlayerSerializer(serializers.ModelSerializer):
    nr_players = serializers.IntegerField(read_only=True)

    class Meta:
        model = FootballTeam
        fields = ('nr_players',)


class SponsorsWithFootballTeamsSerializer(serializers.ModelSerializer):
    sponsors = HasSerializer(many=True, read_only=True)

    class Meta:
        model = Sponsor
        fields = ('name', 'foundingYear', 'nationality', 'netWorth', 'domain', 'sponsors')


class HasNewSerializer(serializers.Serializer):
    sponsor = serializers.PrimaryKeyRelatedField(queryset=Sponsor.objects.all())
    dealValue = serializers.IntegerField()
    type = serializers.CharField(max_length=255)
