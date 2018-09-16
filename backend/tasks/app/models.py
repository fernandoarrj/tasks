from django.db import models

class Task(models.Model):
	name = models.CharField('Tarefa', max_length=200)
	done = models.BooleanField('Feito', blank=True, default=False)
	dtcreate = models.DateField('Data de Criação', auto_now_add=True)
	dtdone = models.DateField('Data de Finalização', blank=True, null=True)
	
	class Meta:
		verbose_name = 'Tarefa'
		verbose_name_plural = 'Tarefas'
		
	def __str__(self):
		return self.name
