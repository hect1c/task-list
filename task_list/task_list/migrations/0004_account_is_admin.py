# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-13 16:53
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task_list', '0003_remove_account_is_admin'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='is_admin',
            field=models.BooleanField(default=False),
        ),
    ]
