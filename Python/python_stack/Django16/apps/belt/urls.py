from django.conf.urls import url
from . import views         
urlpatterns = [
    url(r'^$', views.index),
    url(r'^register$', views.register),
    url(r'^login$', views.login),  
    url(r'^logout$', views.logout),   
    url(r'^home$', views.home),  
    url(r'^books/add$', views.add_book),  
    url(r'^process_book$', views.process_book),  
    url(r'^books/(?P<id>\d+)$', views.display_book), 
    url(r'^process_review/(?P<id>\d+)$', views.process_review), 
    url(r'^delete_review/(?P<id>\d+)$', views.delete_review), 
]