# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-05-27 16:16
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('activitydb', '0005_auto_20160522_0146'),
    ]

    operations = [
        migrations.CreateModel(
            name='FormGuidance',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('form', models.CharField(blank=True, max_length=135, null=True)),
                ('guidance_link', models.URLField(blank=True, null=True)),
                ('guidance', models.TextField(blank=True, null=True)),
                ('create_date', models.DateTimeField(blank=True, null=True)),
            ],
            options={
                'ordering': ('create_date',),
            },
        ),
    ]
