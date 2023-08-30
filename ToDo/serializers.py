from rest_framework import serializers
from .models import ToDoItem


class ToDoItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDoItem
        fields = ('id', 'title', 'description', 'created_at')
        # 各種ID情報など、内部でのみ使用されるようなデータもシリアライズしない方が良いことが多い？（ChatGPT)