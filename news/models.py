from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class News(models.Model):
    Draft = "Draft"
    Submit = "Submit"
    Publish = "Publish"
    STATUS_CHOICES = [
    (Draft, "Draft"),
    (Submit, "Submit"),
    (Publish, "Publish")
    ]
    Coffee = "Coffee"
    Music = "music"
    Travel = "Travel"
    STORY_CHOICES =[
        (Coffee, "Coffee"),
        (Music, "Music"),
        (Travel, "Travel")
    ]
    title = models.CharField(max_length=225)
    body = models.TextField()
    category = models.CharField(max_length=225, choices=STORY_CHOICES, default=Music)
    status = models.CharField(max_length=225, choices=STATUS_CHOICES, default=Draft)
    image_url = models.URLField(max_length=225, null=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    isTopStory = models.BooleanField(default = False)

    def __str__(self):
        return self.title
