from django.db import models


class Stock(models.Model):
    name = models.CharField(max_length=255)
    current_price = models.IntegerField()


class Order(models.Model):
    stock_name = models.ForeignKey(Stock, on_delete=models.CASCADE)
    type = models.CharField(max_length=255)
    price = models.IntegerField()
    quantity = models.IntegerField()
