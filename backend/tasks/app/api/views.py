from rest_framework import viewsets

from .serializers import TaskSerializer
from app.models import Task

class TaskViewSet(viewsets.ModelViewSet):
	serializer_class = TaskSerializer
	queryset = Task.objects.all()
