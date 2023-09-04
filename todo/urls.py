from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ToDoItemViewSet

router = DefaultRouter()
router.register(r'todos', ToDoItemViewSet, basename='todos')

urlpatterns = [
    path('', include(router.urls)),
]
