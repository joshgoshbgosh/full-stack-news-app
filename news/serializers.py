from rest_framework import serializers


from .models import News



class NewsSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = News
        fields = ('id', 'title', 'body', 'category', 'status', 'image_url', 'author', 'isTopStory',)


class AuthorSerializer(serializers.ModelSerializer):

    class Meta:
        model = News
        fields = ('id', 'title', 'body', 'category', 'status', 'image_url',)
