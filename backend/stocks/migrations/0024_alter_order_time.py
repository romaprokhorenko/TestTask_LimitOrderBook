# Generated by Django 4.2.7 on 2023-12-14 11:58

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stocks', '0023_alter_order_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='time',
            field=models.DateField(default=datetime.datetime(2023, 12, 14, 11, 58, 51, 977769)),
        ),
    ]
