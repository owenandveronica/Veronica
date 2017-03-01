import sys
import os
import json
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse, HttpResponseServerError
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout

def signin(request):
  data = request.POST.dict()
  former_username = User.objects.filter(username = data['username'])
  former_email = User.objects.filter(email = data['email'])
  if former_username.values():
    return HttpResponseServerError(json.dumps({"code": 1, "status": "usernameexist"}))
  if former_email.values():
    return HttpResponseServerError(json.dumps({"code": 2, "status": "emailexist"}))
  # add account
  user = User.objects.create_user(data['username'], data['email'], data['password'])
  user.save()

  return JsonResponse({"success": True}, safe = False)

def login_(request):
  data = request.POST.dict()
  username = data['username']
  password = data['password']
  user = authenticate(username = username, password = password)
  if user is not None:
    login(request, user)
    respond = HttpResponse(json.dumps({"success": True}))
    # respond.set_cookie('username', username, 36000)
    return respond
  else:
    return HttpResponseServerError(json.dumps({"code": 3, "status": "wrong"}))

def logout_(request):
  logout(request)
  return JsonResponse({"success": True}, safe = False)
