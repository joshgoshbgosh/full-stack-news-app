from django.urls import path


from .views import NewsListAPIView, NewsDetailAPIView



urlpatterns = [
    path('', NewsListAPIView.as_view(), name='news_list'),
    path('<int:pk>/', NewsDetailAPIView.as_view(), name="news_detail"),
]
