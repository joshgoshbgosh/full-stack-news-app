# Generated by Django 3.1.2 on 2020-10-23 04:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0003_news_author'),
    ]

    operations = [
        migrations.AddField(
            model_name='news',
            name='isTopStory',
            field=models.BooleanField(default=False),
        ),
    ]
