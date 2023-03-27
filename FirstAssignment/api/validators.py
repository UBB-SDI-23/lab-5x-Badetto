from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _


def validate_player_rating(rating):
    if rating < 1 or rating > 100:
        raise ValidationError(
            _('%(value) it not between 1 and 99.'),
            params={'value': rating},
        )


def validate_team_professional_status(status):
    if status != 'Amateurs' and status != 'Semi-Professional' and status != 'Professional':
        raise ValidationError(
            _('A team cannot be %(value)s. It can only be an Amateur/Semi-Professional/Professional club.'),
            params={'value': status},
        )


def validate_sponsor_type(sponsor_type):
    if sponsor_type != 'Main' and sponsor_type != 'Secondary':
        raise ValidationError(
            _('A sponsor cannot be %(value)s. It can only be a Main or Secondary sponsor.'),
            params={'value': sponsor_type},
        )
