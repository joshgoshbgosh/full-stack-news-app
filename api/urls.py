from django.urls import  include, path


from news.views import NewsListAPIView, NewsDetailAPIView



urlpatterns = [
    path("rest-auth/", include('rest_auth.urls')),
    path("rest-auth/registration/",include('rest_auth.registration.urls')),
    path('articles/', NewsListAPIView.as_view(), name='news_list'),
    path('articles/<int:pk>/', NewsDetailAPIView.as_view(), name="news_detail"),

]
