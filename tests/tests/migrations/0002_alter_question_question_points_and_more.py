# Generated by Django 4.2 on 2024-06-24 10:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tests', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='question_points',
            field=models.IntegerField(default=1),
        ),
        migrations.AlterField(
            model_name='result',
            name='points_user',
            field=models.FloatField(blank=True, null=True),
        ),
    ]
