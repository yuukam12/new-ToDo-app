from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import ToDoItem
from .serializers import ToDoItemSerializer
from django.db.models import Q
# Create your views here.
# create view


class ToDoItemViewSet(viewsets.ModelViewSet):
    queryset = ToDoItem.objects.all()
    serializer_class = ToDoItemSerializer

    def filter_queryset(self, queryset):  # titleもしくはdescriptionと入力したkeywordが部分一致したものだけを表示する
        keyword = self.request.query_params.get('keyword', None)
        if keyword:
            queryset = queryset.filter(Q(title__icontains=keyword) | Q(description__icontains=keyword))
        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
