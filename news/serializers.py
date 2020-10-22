from rest_framework import serializers


from .models import News



class NewsSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = News
        fields = ('id', 'title', 'body', 'category', 'status', 'image_url',)
