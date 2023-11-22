from django.db import models


class Stock(models.Model):
    name = models.CharField(max_length=255)
    current_price = models.IntegerField()

    def __str__(self):
        return self.name


class Order(models.Model):
    stock_name = models.ForeignKey(Stock, on_delete=models.PROTECT)
    type = models.CharField(max_length=255)
    price = models.IntegerField()
    quantity = models.IntegerField()

    def __str__(self):
        return f"{self.stock_name} {self.type}"


class Transaction(models.Model):
    stock_name = models.ForeignKey(Stock, on_delete=models.PROTECT)
    order_type = models.ForeignKey(Order, on_delete=models.PROTECT)
    price = models.IntegerField()
    quantity = models.IntegerField()

    def __str__(self):
        return f"{self.stock_name}"
