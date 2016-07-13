# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-13 15:51
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task_list', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('description', models.TextField()),
                ('created', models.DateTimeField()),
                ('is_completed', models.BooleanField(default=False)),
            ],
        ),
    ]
