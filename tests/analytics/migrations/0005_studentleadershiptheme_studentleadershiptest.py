# Generated by Django 4.2 on 2024-06-26 16:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tests', '0003_result_score_alter_result_points_user'),
        ('analytics', '0004_rename_test_id_studentanalyticstest_test'),
    ]

    operations = [
        migrations.CreateModel(
            name='StudentLeadershipTheme',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('student_id', models.IntegerField(help_text='Identifier of the student.')),
                ('theme_id', models.IntegerField()),
                ('subject_id', models.IntegerField()),
                ('leadership_theme', models.FloatField(default=0)),
            ],
            options={
                'verbose_name_plural': 'Student Leadership for Theme',
            },
        ),
        migrations.CreateModel(
            name='StudentLeadershipTest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('student_id', models.IntegerField(help_text='Identifier of the student.')),
                ('leadership_test', models.FloatField(default=0)),
                ('test', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='tests.test')),
            ],
            options={
                'verbose_name_plural': 'Student Leadership for Test',
            },
        ),
    ]