# Generated by Django 4.2.7 on 2023-12-14 11:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stocks', '0010_alter_order_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='time',
            field=models.DateTimeField(default='2023-12-14 11:31:23'),
        ),
    ]
