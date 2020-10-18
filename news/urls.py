from django.urls import path


from .views import NewsListAPIView, NewsDetailApiView



urlpatterns = [
    path('', NewsListApiView.as_view(), name='news_list')
    path('<int:pk>/', NewsDetailApiView.as_view(), name="news_detail"),
]
