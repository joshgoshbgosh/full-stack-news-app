from django.db import models




class News(models.Model):
    title = models.CharField(max_length=225)
    body = models.TextField()



    def __str__(self):
        return self.title
