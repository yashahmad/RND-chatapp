# Generated by Django 3.2.6 on 2021-08-20 01:20

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Chatroom',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('users', models.ManyToManyField(related_name='recipients', to=settings.AUTH_USER_MODEL, verbose_name='recipients')),
            ],
        ),
        migrations.CreateModel(
            name='Request',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('permission', models.CharField(choices=[('waiting', 'Waiting'), ('granted', 'Granted'), ('denied', 'Denied')], default='waiting', max_length=32)),
                ('chatroom', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='request_target', to='chat.chatroom')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='request_owner', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('body', models.TextField(max_length=2000)),
                ('chatroom', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='chatroom', to=settings.AUTH_USER_MODEL, verbose_name='chatroom')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='from_user', to=settings.AUTH_USER_MODEL, verbose_name='user')),
            ],
        ),
    ]
