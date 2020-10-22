from rest_framework import generics, permissions


from news.models import News
from news.serializers import NewsSerializer



class NewsListAPIView(generics.ListCreateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)



class NewsDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
