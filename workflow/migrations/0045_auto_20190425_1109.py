# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2019-04-25 18:09
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('workflow', '0044_auto_20190425_1030'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tolauser',
            name='user',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='tola_user', to=settings.AUTH_USER_MODEL, verbose_name='User'),
        ),
    ]