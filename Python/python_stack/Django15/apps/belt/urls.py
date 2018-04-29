from django.conf.urls import url
from . import views  

urlpatterns = [
    url(r'^$', views.index),  
    url(r'^register$', views.register),  
    url(r'^login$', views.login),       
    url(r'^logout$', views.logout),  
    url(r'^home$', views.home),
    url(r'^books/add$', views.create_book),
    url(r'^books/process_book$', views.process_book),
    url(r'^books/(?P<id>\d+)$', views.show),
    url(r'^process_review/(?P<id>\d+)$', views.process_review),
    url(r'^delete/review/(?P<id>\d+)$', views.delete),
    url(r'^users/(?P<id>\d+)$', views.user),
]