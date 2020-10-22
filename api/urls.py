from django.urls import path


from .views import NewsListAPIView, NewsDetailAPIView



urlpatterns = [
    path('articles/', NewsListAPIView.as_view(), name='news_list'),
    path('articles/<int:pk>/', NewsDetailAPIView.as_view(), name="news_detail"),
]
