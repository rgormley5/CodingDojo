from django.conf.urls import url
from . import views           

urlpatterns = [
    url(r'^$', views.index),
    url(r'^process$', views.process),  
    url(r'^destroy/(?P<id>\d+)$', views.destroy), 
    url(r'^no/(?P<id>\d+)$', views.no), 
    url(r'^yes/(?P<id>\d+)$', views.yes),     
]