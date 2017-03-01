from django.http import HttpResponseRedirect
from django.contrib.auth import logout

class check_csrf(object):
  def process_request(self, request):
    csrf_token = request.COOKIES.get('csrftoken')
    print csrf_token
    if not csrf_token:
      logout(request)
      HttpResponseRedirect('/index/')
