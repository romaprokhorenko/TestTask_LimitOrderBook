from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Stock(models.Model):
    name = models.CharField(max_length=255)
    current_price = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.name


class Order(models.Model):
    stock_name = models.ForeignKey(Stock, on_delete=models.PROTECT)
    user = models.ForeignKey(User, blank=True, null=True, on_delete=models.SET_NULL, related_name="order")
    order_type = models.CharField(max_length=255)
    price = models.PositiveIntegerField(default=0)
    quantity = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.stock_name} {self.order_type}"


class Inventory(models.Model):
    owner = models.ForeignKey(User, blank=True, null=True, on_delete=models.SET_NULL, related_name="inventory")
    stock_name = models.ForeignKey(Stock, blank=True, null=True, on_delete=models.SET_NULL)
    quantity = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.owner} {self.stock_name}"


class Transaction(models.Model):
    stock_name = models.ForeignKey(Stock, on_delete=models.PROTECT)
    buyer = models.ForeignKey(User, blank=True, null=True, on_delete=models.SET_NULL, related_name="buyer")
    seller = models.ForeignKey(User, blank=True, null=True, on_delete=models.SET_NULL, related_name="seller")
    price = models.PositiveIntegerField(default=0)
    quantity = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.stock_name} {self.buyer} {self.seller}"
