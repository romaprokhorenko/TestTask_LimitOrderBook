# Generated by Django 4.2.7 on 2023-11-23 09:13

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('stocks', '0002_rename_type_order_order_type_order_is_active'),
    ]

    operations = [
        migrations.AlterField(
            model_name='inventory',
            name='owner',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='inventory', to=settings.AUTH_USER_MODEL),
        ),
    ]
