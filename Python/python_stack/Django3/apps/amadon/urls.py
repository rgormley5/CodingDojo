from django.conf.urls import url
from . import views           
urlpatterns = [
    url(r'^$', views.index),
    url(r'^amadon/$', views.store),
    url(r'^amadon/buy$', views.process_checkout),
    url(r'^amadon/checkout/$', views.checkout_page),
]