# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-17 15:13
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task_list', '0003_task_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='description',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]