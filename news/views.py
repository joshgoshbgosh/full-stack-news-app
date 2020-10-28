from rest_framework import generics, permissions

from .serializers import AuthorSerializer
from .models import News
from .serializers import NewsSerializer



class NewsListAPIView(generics.ListCreateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)



class NewsDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer


class AuthorListAPIView(generics.ListCreateAPIView):
    serializer_class = AuthorSerializer

    def get_queryset(self):
        user = self.request.user
        return News.objects.filter(author = user)
