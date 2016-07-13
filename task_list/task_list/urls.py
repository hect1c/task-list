"""task_list URL Configuration

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
# .. Imports
from rest_framework import routers

from django.conf.urls import include, url
from django.contrib import admin

from core.views import AccountViewSet, LoginView, IndexView

router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)

admin.autodiscover()

# urlpatterns = router.urls
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/v1/', include(router.urls)),
    # url(r'^api/v1/auth/login/$', LoginView.as_view(), name='login'),
    # url(r'^.*$', AccountViewSet.as_view({'get':'list'}), name='index'),
    url('^.*$', IndexView.as_view(), name='index'),
]
