from rest_framework import permissions

class IsAccountOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, account):
        if request.user:
            return account == request.user
        return False

class IsAuthorOfTask(permissions.BasePermission):
    def has_object_permission(self, request, view, task):
        if request.user:
            return task.author == request.user
        return False
