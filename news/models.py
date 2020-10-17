from django.db import models




class News(models.Model):

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
    status = models.CharField(max_length=225)
    image_url = models.URLField(max_length=225)



    def __str__(self):
        return self.title
