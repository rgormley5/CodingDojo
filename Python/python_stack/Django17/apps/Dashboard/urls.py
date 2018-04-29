from django.conf.urls import url
from . import views           

urlpatterns = [
    url(r'^$', views.index),
    url(r'^signin$', views.signin),
    url(r'^process_signin$', views.process_signin),
    url(r'^home$', views.home),
]