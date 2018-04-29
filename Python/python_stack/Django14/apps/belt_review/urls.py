from django.conf.urls import url
from . import views           

urlpatterns = [
    url(r'^$', views.index),
    url(r'^books$', views.home),
    url(r'^register$', views.register),
    url(r'^login$', views.login),
    url(r'^logout$', views.logout),
    url(r'^books/add$', views.add),
    url(r'^add_book$', views.add_book),
    url(r'^books/(?P<id>\d+)$', views.show_book),
    url(r'^add_review/(?P<id>\d+)$', views.add_review),
    url(r'^display_user/(?P<id>\d+)$', views.display_user),
]