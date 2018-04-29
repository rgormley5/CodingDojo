from django.conf.urls import url
from . import views          
urlpatterns = [
    url(r'^$', views.index),
    url(r'^main$', views.main),
    url(r'^registration$', views.registration),
    url(r'^login$', views.login), 
    url(r'^dashboard$', views.dashboard), 
]