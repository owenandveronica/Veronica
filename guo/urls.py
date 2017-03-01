"""guo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
import sys
import os

from django.conf.urls import url
from django.contrib import admin
from django.views.static import serve
from guo.view import router
from guo.settings import STATIC_PATH
from guo.my_setting import get_static_url

# API server
from service.user_server import signin, login_, logout_
# from service.user_server import login

urlpatterns = [
  # API server route
  url(r'^service/user_server/login', login_),
  url(r'^service/user_server/signin', signin),
  url(r'^service/user_server/logout', logout_),
  # url(r'^service/user_server/checking_auth', checking_auth),

  # static files
  url(r'^js/(?P<path>.*)$', serve, {'document_root': STATIC_PATH + get_static_url("js")}),
  url(r'^css/(?P<path>.*)$', serve, {'document_root': STATIC_PATH + get_static_url("css")}),
  url(r'^img/(?P<path>.*)$', serve, {'document_root': STATIC_PATH + get_static_url("img")}),
  url(r'^jsmodule/(?P<path>.*)$', serve, {'document_root': STATIC_PATH + get_static_url("node_modules")}),
]

static_server = {
  'index': 'index.html',
  'signin': 'signin.html',
  'homepage': 'homepage.html'
}

http_request = {
  'signup': ''  
}

for x in static_server.keys():
  url_ = url(r'^(' + x + ')/$', router)
  urlpatterns.append(url_)
