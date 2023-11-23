from django.contrib import admin
from .models import Stock, Order, Transaction, Inventory

admin.site.register(Stock)
admin.site.register(Order)
admin.site.register(Inventory)
admin.site.register(Transaction)
