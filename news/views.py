from rest_framework import generics


from .models import News
from .serializers import NewsSerializer



class StoryListCreateAPIView(generics.StoryListCreateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer



    class TodoDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
