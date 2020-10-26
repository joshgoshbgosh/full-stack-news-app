from django.urls import path


from .views import NewsListAPIView, NewsDetailAPIView, AuthorListAPIView,



urlpatterns = [
    path('', NewsListAPIView.as_view(), name='news_list'),
    path('<int:pk>/', NewsDetailAPIView.as_view(), name="news_detail"),
    path('', AuthorListAPIView.as_view(), name='author_list'),
]
