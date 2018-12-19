# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2018-11-16 19:32
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('workflow', '0022_auto_20181112_1112'),
    ]

    operations = [
        migrations.AddField(
            model_name='tolauser',
            name='active_country',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='active_country', to='workflow.Country', verbose_name='Active Country'),
        ),
    ]