# Generated by Django 4.2 on 2024-06-26 13:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tests', '0002_alter_question_question_points_and_more'),
        ('analytics', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='StudentAnalyticsTest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('student_id', models.IntegerField(help_text='Identifier of the student.')),
                ('analyticity_test', models.FloatField(default=0, help_text='Analyticity score of the student.')),
                ('test_id', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='tests.test')),
            ],
            options={
                'verbose_name_plural': 'Student Analytics for Test',
            },
        ),
        migrations.CreateModel(
            name='StudentAnalyticsTheme',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('student_id', models.IntegerField(help_text='Identifier of the student.')),
                ('theme_id', models.IntegerField()),
                ('subject_id', models.IntegerField()),
                ('analyticity_theme', models.FloatField(default=0)),
            ],
            options={
                'verbose_name_plural': 'Student Analytics for Theme',
            },
        ),
        migrations.DeleteModel(
            name='StudentAnalytics',
        ),
    ]
