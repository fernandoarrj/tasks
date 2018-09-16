from django.test import TestCase
from django.core.exceptions import ValidationError
from app.models import Task

# Create your tests here.

class TaskModelTest(TestCase):
	
	def test_create_task_just_with_name(self):
		task = Task.objects.create(name='Move chairs from other room.')
		self.assertEqual(Task.objects.count(), 1)
