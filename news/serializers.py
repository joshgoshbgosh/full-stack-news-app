from rest_framework import serializers


from news.models imort News



class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ('id', 'title', 'body', 'category', 'status', 'image_url',)
