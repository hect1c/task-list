# .. Imports
from rest_framework_nested import routers

from django.conf.urls import include, url
from django.contrib import admin

from core.views import IndexView, AccountViewSet, LoginView, LogoutView, TaskViewSet, AccountTasksViewSet

router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)
router.register(r'tasks', TaskViewSet)

accounts_router = routers.NestedSimpleRouter(
    router, r'accounts', lookup='account'
)
accounts_router.register(r'tasks', AccountTasksViewSet)

admin.autodiscover()

urlpatterns = [
    url(r'^api/v1/', include(router.urls)),
    url(r'^api/v1/', include(accounts_router.urls)),
    url(r'^api/v1/auth/login/$', LoginView.as_view(), name='login'),
    url(r'^api/v1/auth/logout/$', LogoutView.as_view(), name='logout'),
    url(r'^admin/', admin.site.urls),
    url(r'^.*$', IndexView.as_view(), name='index')
]
