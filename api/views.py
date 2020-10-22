from rest_framework import generics


from news.models import News
from news.serializers import NewsSerializer



class NewsListAPIView(generics.ListCreateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer



class NewsDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
