from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import ToDoItem
from .serializers import ToDoItemSerializer
# Create your views here.
# create view


class TodoItemViewSet(viewsets.ModelViewSet):
    queryset = ToDoItem.objects.all()
    serializer_class = ToDoItemSerializer

