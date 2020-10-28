from django.urls import path


from .views import NewsListAPIView, NewsDetailAPIView, AuthorListAPIView


urlpatterns = [
    path('user/', AuthorListAPIView.as_view(), name='author_list'),
    path('<int:pk>/', NewsDetailAPIView.as_view(), name="news_detail"),
    path('', NewsListAPIView.as_view(), name='news_list'),
]
