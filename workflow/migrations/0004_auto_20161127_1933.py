# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-11-28 03:33
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('workflow', '0003_program_public_dashboard'),
    ]

    operations = [
        migrations.CreateModel(
            name='Organization',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, default='TolaData', max_length=255, verbose_name='Organization Name')),
                ('description', models.TextField(blank=True, max_length=765, null=True, verbose_name='Description/Notes')),
                ('organization_url', models.CharField(blank=True, max_length=255, null=True)),
                ('level_1_label', models.CharField(blank=True, default='Program', max_length=255, verbose_name='Project/Program Organization Level 1 label')),
                ('level_2_label', models.CharField(blank=True, default='Project', max_length=255, verbose_name='Project/Program Organization Level 2 label')),
                ('level_3_label', models.CharField(blank=True, default='Activity', max_length=255, verbose_name='Project/Program Organization Level 3 label')),
                ('level_4_label', models.CharField(blank=True, default='Component', max_length=255, verbose_name='Project/Program Organization Level 4 label')),
                ('create_date', models.DateTimeField(blank=True, null=True)),
                ('edit_date', models.DateTimeField(blank=True, null=True)),
            ],
            options={
                'ordering': ('name',),
                'verbose_name_plural': 'Organizations',
            },
        ),
        migrations.AddField(
            model_name='tolauser',
            name='activity_api_token',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='country',
            name='organization',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='workflow.Organization'),
        ),
        migrations.AddField(
            model_name='tolauser',
            name='organization',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='workflow.Organization'),
        ),
    ]
